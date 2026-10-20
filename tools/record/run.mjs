#!/usr/bin/env node
// Recorder entry point. See tools/record/README.md.
//   node tools/record/run.mjs <flow> [<flow> ...]   run these flows (file names in tools/record/flows, without .mjs)
//   node tools/record/run.mjs --section mechanic     every flow whose shots are on pages under mechanic/
//   node tools/record/run.mjs --all | --list | --missing [section ...]
//   add --defer to save clip/GIF encode jobs instead of encoding; then: node tools/record/run.mjs --encode [id ...]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { playwright, RAW } from './lib/config.mjs';
import { Session } from './lib/session.mjs';
import { getShot, allShots, outputPath, sectionOf } from './lib/shots.mjs';
import { buildClip, buildGif } from './lib/media.mjs';
import { closeAnnotator } from './lib/annotate.mjs';
import { resetDemo } from './lib/db.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FLOWS = path.join(HERE, 'flows');

async function loadFlows() {
  const out = [];
  for (const f of fs.readdirSync(FLOWS).filter((x) => x.endsWith('.mjs')).sort()) {
    const m = (await import(pathToFileURL(path.join(FLOWS, f)))).default;
    m.file = f.replace(/\.mjs$/, '');
    m.name = m.name || m.file;
    for (const id of m.shots) getShot(id); // every id must be in the shot list
    out.push(m);
  }
  return out;
}

const scopeOf = (id) => {
  const s = getShot(id);
  return s.page.includes('/') ? s.page.split('/')[0] : s.page.replace(/\.md$/, '');
};

function missing(sections) {
  const rows = [];
  for (const s of allShots().values()) {
    if (sections.length && !sections.includes(sectionOf(s)) && !sections.includes(s.page.replace(/\.md$/, ''))) continue;
    if (!fs.existsSync(outputPath(s))) rows.push(`${s.kind.padEnd(10)} ${s.id}  (${s.page})`);
  }
  return rows;
}

// Clips and GIFs are saved as encode jobs (media-raw/jobs/<id>.json) and encoded now, or later with --encode
// when --defer is given (useful on a busy machine: record everything first, then encode one by one).
const JOBS = path.join(RAW, 'jobs');
let defer = false;
function job(j, log) {
  fs.mkdirSync(JOBS, { recursive: true });
  fs.writeFileSync(path.join(JOBS, `${j.id}.json`), JSON.stringify(j, null, 1));
  if (defer) { log(`  ${j.kind} ${j.id} saved for --encode`); return; }
  encode(j, log);
}
function encode(j, log) {
  if (j.kind === 'clip') buildClip(getShot(j.id), j.result, j.opts, log);
  else buildGif(getShot(j.id), j.result, j.opts, log);
  fs.renameSync(path.join(JOBS, `${j.id}.json`), path.join(JOBS, `${j.id}.done.json`));
}

let worldDirty = false;
function reset(variants = []) {
  fs.rmSync(path.join(RAW, 'state'), { recursive: true, force: true }); // sessions die with the reset
  resetDemo(variants);
  worldDirty = variants.length > 0;
}

async function main() {
  let args = process.argv.slice(2);
  if (args.includes('--defer')) { defer = true; args = args.filter((a) => a !== '--defer'); }
  if (args[0] === '--encode') {
    // encode saved jobs (all pending ones, or the given ids, also already encoded ones)
    const ids = args.slice(1);
    const files = fs.existsSync(JOBS) ? fs.readdirSync(JOBS) : [];
    const pick = ids.length ? ids.map((id) => files.find((f) => f === `${id}.json`) || files.find((f) => f === `${id}.done.json`)).filter(Boolean)
      : files.filter((f) => !f.endsWith('.done.json'));
    for (const f of pick) {
      const j = JSON.parse(fs.readFileSync(path.join(JOBS, f), 'utf8'));
      if (f.endsWith('.done.json')) fs.renameSync(path.join(JOBS, f), path.join(JOBS, `${j.id}.json`));
      encode(j, (m) => console.log(`[encode] ${m}`));
    }
    console.log(`${pick.length} job(s) encoded`);
    return;
  }
  const flows = await loadFlows();
  if (args[0] === '--list') {
    for (const f of flows) console.log(`${f.file.padEnd(28)} ${f.reset ? 'resets' : '      '}  ${f.shots.join(' ')}`);
    return;
  }
  if (args[0] === '--missing') {
    const rows = missing(args.slice(1));
    console.log(rows.join('\n') || 'nothing missing');
    console.log(`${rows.length} missing`);
    return;
  }
  let todo;
  if (args[0] === '--all') todo = flows;
  else if (args[0] === '--section') todo = flows.filter((f) => f.shots.some((id) => args.slice(1).includes(scopeOf(id))));
  else todo = args.map((a) => flows.find((f) => f.file === a) || (() => { throw new Error(`no flow ${a}`); })());
  if (!todo.length) throw new Error('no flows selected');

  const { chromium } = playwright();
  // fake camera (a test pattern) so the QR scanner view can be shown; nothing leaves the machine
  const browser = await chromium.launch({ headless: true, args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
  const failed = [];
  const t0 = Date.now();
  try {
    for (const flow of todo) {
      const log = (m) => console.log(`[${flow.file}] ${m}`);
      log(`start (${flow.shots.length} shots)`);
      const started = Date.now();
      for (let attempt = 1; attempt <= 2; attempt++) try {
        if (!flow.reset && worldDirty) { reset([]); worldDirty = false; log('normal demo world restored first'); }
        if (flow.reset) { reset(Array.isArray(flow.reset) ? flow.reset : []); log(`demo world reset${Array.isArray(flow.reset) && flow.reset.length ? ` (${flow.reset.join(', ')})` : ''}`); }
        worldDirty = worldDirty || !!flow.reset;
        const ctx = {
          browser, log, reset: (v) => { reset(v); worldDirty = true; },
          open: (o) => Session.open(browser, { name: flow.file, log, ...o }),
          clip: (id, result, o = {}) => job({ kind: 'clip', id, result, opts: o }, log),
          gif: (id, result, w) => job({ kind: 'gif', id, result, opts: w }, log),
        };
        await flow.run(ctx);
        const notMade = flow.shots.filter((id) => !fs.existsSync(outputPath(getShot(id))) && !(defer && fs.existsSync(path.join(JOBS, `${id}.json`))));
        if (notMade.length) throw new Error(`not produced: ${notMade.join(', ')}`);
        log(`done in ${Math.round((Date.now() - started) / 1000)} s`);
        break;
      } catch (e) {
        log(`FAILED (attempt ${attempt}): ${e.stack || e}`);
        if (attempt === 2) failed.push(flow.file);
        else { worldDirty = true; log('retrying once'); }
      }
    }
  } finally {
    await closeAnnotator();
    await browser.close();
    if (worldDirty) { reset([]); console.log('normal demo world restored'); }
  }
  console.log(`\n${todo.length - failed.length}/${todo.length} flows ok in ${Math.round((Date.now() - t0) / 1000)} s${failed.length ? `; failed: ${failed.join(' ')}` : ''}`);
  if (failed.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => setTimeout(() => process.exit(), 500));
