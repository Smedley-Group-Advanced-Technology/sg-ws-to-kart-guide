// Clip and GIF encoding with ffmpeg in Docker (one job at a time), and WebVTT captions from real step times.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { REPO, RAW, VIDEO, GIF, HEAVY_PATTERN } from './config.mjs';

export const FFMPEG_IMAGE = process.env.FKL_FFMPEG_IMAGE || 'jrottenberg/ffmpeg:6.1-alpine';

// SPEC rule 5: wait while any other heavy job runs (the bracket pattern never matches pgrep itself).
export function waitHeavy(log = console.log) {
  for (let i = 0; ; i++) {
    const r = spawnSync('pgrep', ['-af', HEAVY_PATTERN]);
    const lines = r.stdout.toString().trim();
    if (!lines) return;
    if (i % 6 === 0) log(`  waiting for heavy job: ${lines.split('\n')[0].slice(0, 120)}`);
    execFileSync('sleep', ['10']);
  }
}

function ffmpeg(args, log) {
  waitHeavy(log);
  const rel = (p) => (p.startsWith(RAW) ? '/raw/' + path.relative(RAW, p) : p.startsWith(REPO) ? '/w/' + path.relative(REPO, p) : p);
  const a = args.map((x) => (typeof x === 'string' ? rel(x) : x));
  const uid = process.getuid(), gid = process.getgid();
  const r = spawnSync('docker', ['run', '--rm', '-v', `${REPO}:/w`, '-v', `${RAW}:/raw:ro`, '-w', '/w', '--user', `${uid}:${gid}`, FFMPEG_IMAGE,
    '-hide_banner', '-loglevel', 'error', '-y', ...a], { maxBuffer: 1 << 26 });
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${r.stderr.toString().slice(-1500)}`);
}

// A session result -> segments in clip order: [{file, from, to, g0}] (seconds in the page video; g0 = global start).
export function segments(result, { start, end }) {
  const segs = [];
  const cuts = (result.cuts || []).filter(([a, b]) => b - a > 400).sort((x, y) => x[0] - y[0]);
  for (const v of result.videos) {
    for (const [a, b] of v.active) {
      // the active window of this tab, minus the cut windows (a short 250 ms of each cut is kept)
      let pieces = [[Math.max(a, start), Math.min(b ?? result.end, end)]];
      if (result.keeps && result.keeps.length) {
        // only the windows the viewer should see (merged when less than 400 ms apart)
        const ks = result.keeps.map(([x, y]) => [Math.max(x, y - 6000) - 60, y + 120]).sort((x, y) => x[0] - y[0]);  // at most 6 s of any one action (slow typing on a busy machine)
        const merged = [];
        for (const k of ks) { const l = merged.at(-1); if (l && k[0] - l[1] < 400) l[1] = Math.max(l[1], k[1]); else merged.push([...k]); }
        const [pa, pb] = pieces[0];
        pieces = merged.map(([x, y]) => [Math.max(x, pa), Math.min(y, pb)]).filter(([x, y]) => y - x > 0);
      }
      for (const [ca, cb] of (result.keeps && result.keeps.length ? [] : cuts)) {
        pieces = pieces.flatMap(([s, e]) => (cb <= s || ca >= e ? [[s, e]] : [[s, Math.max(s, ca + 150)], [Math.min(e, cb - 100), e]]));
      }
      for (const [s, e] of pieces) if (e - s > 120) segs.push({ file: v.path, from: (s - v.t0) / 1000, to: (e - v.t0) / 1000, g0: s, g1: e });
    }
  }
  segs.sort((x, y) => x.g0 - y.g0);
  return segs;
}
// Global ms -> seconds in the finished clip.
function clipTime(segs, t) {
  let acc = 0;
  for (const s of segs) {
    if (t <= s.g1) return acc + Math.max(0, t - s.g0) / 1000;  // a time inside a cut maps to the start of the next piece
    acc += (s.g1 - s.g0) / 1000;
  }
  return acc;
}

const ts = (sec) => {
  const ms = Math.round(sec * 1000), h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms % 1000).padStart(3, '0')}`;
};

// Encode a clip: mp4 (H.264) + webm (VP9) + poster jpg + vtt.
//   shot: shot-list entry; result: Session.close() result; opts: {lead (ms before first cue), tail (ms after last cue), poster (cue index or global ms)}
export function buildClip(shot, result, opts = {}, log = console.log) {
  const cues = result.cues;
  if (cues.length !== shot.captions.length) throw new Error(`${shot.id}: ${cues.length} cues but ${shot.captions.length} captions`);
  const start = Math.max(0, cues[0].t - (opts.lead ?? 900));
  const end = Math.min(result.end, opts.end ?? result.end);
  const segs = segments(result, { start, end });
  if (!segs.length) throw new Error(`${shot.id}: no video segments`);
  const dur = segs.reduce((a, s) => a + (s.g1 - s.g0), 0) / 1000;
  const W = shot.device === 'phone' ? 390 : shot.device === 'desktop' ? 1440 : 1180;
  const H = shot.device === 'phone' ? 844 : shot.device === 'desktop' ? 900 : 820;
  const { inputs, filter } = selectFilter(segs, `scale=${W}:${H}:flags=lanczos,setsar=1,format=yuv420p`);
  fs.mkdirSync(VIDEO, { recursive: true });
  const base = path.join(VIDEO, shot.id);
  log(`  encoding ${shot.id} (${dur.toFixed(1)} s, ${segs.length} segment(s))`);
  ffmpeg([...inputs, '-filter_complex', filter, '-map', '[out]', '-an', '-c:v', 'libx264', '-preset', 'faster', '-crf', '28',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', `${base}.mp4`], log);
  ffmpeg(['-i', `${base}.mp4`, '-an', '-c:v', 'libvpx-vp9', '-crf', '40', '-b:v', '0', '-row-mt', '1', '-deadline', 'realtime',
    '-cpu-used', '8', '-threads', '2', `${base}.webm`], log);
  // poster: a meaningful frame (default: 1.5 s after the cue in the middle)
  const pc = opts.poster ?? Math.floor(cues.length / 2);
  const pt = typeof pc === 'number' && pc < 1000 ? clipTime(segs, cues[pc].t) + 1.5 : clipTime(segs, pc);
  ffmpeg(['-ss', Math.min(pt, dur - 0.2).toFixed(2), '-i', `${base}.mp4`, '-frames:v', '1', '-q:v', '4', `${base}.jpg`], log);
  writeVtt(shot, result, opts, log);
  const size = ['mp4', 'webm', 'jpg', 'vtt'].map((e) => fs.statSync(`${base}.${e}`).size).reduce((a, b) => a + b, 0);
  log(`  clip ${shot.id}: ${dur.toFixed(1)} s, ${(size / 1048576).toFixed(2)} MB`);
  return { duration: dur, size };
}

// GIF from a window of a session (global ms), max 800 px wide, palette, under 1.5 MB.
export function buildGif(shot, result, { start, end }, log = console.log) {
  const segs = segments(result, { start, end });
  const dur = segs.reduce((x, g) => x + g.g1 - g.g0, 0) / 1000;
  fs.mkdirSync(GIF, { recursive: true });
  const out = path.join(GIF, `${shot.id}.gif`);
  for (const [fps, w] of [[10, 800], [8, 680], [6, 560]]) {
    // GIFs stay 2 to 6 s: a longer window is played faster
    const speed = Math.max(1, dur / 6);
    const { inputs, filter } = selectFilter(segs, `scale='min(${w},iw)':-1:flags=lanczos`, fps * speed, fps);
    ffmpeg([...inputs, '-filter_complex', `${filter};[out]split[a][b];[a]palettegen=max_colors=96:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4:diff_mode=rectangle[g]`,
      '-map', '[g]',
      '-loop', '0', out], log);
    const mb = fs.statSync(out).size / 1048576;
    log(`  gif ${shot.id}: ${(dur / Math.max(1, dur / 6)).toFixed(1)} s shown, ${fps} fps, ${mb.toFixed(2)} MB`);
    if (mb < 1.5) return;
  }
  throw new Error(`${shot.id}: GIF over 1.5 MB`);
}

// One input per video file; the kept time windows are picked with select and joined with concat.
function selectFilter(segs, tail, fps = 25, outFps = fps) {
  const groups = [];
  for (const g of segs) { const l = groups.at(-1); if (l && l.file === g.file) l.parts.push(g); else groups.push({ file: g.file, parts: [g] }); }
  const inputs = groups.flatMap((g) => ['-i', g.file]);
  const chains = groups.map((g, i) => {
    const sel = g.parts.map((p) => `between(t\\,${p.from.toFixed(3)}\\,${p.to.toFixed(3)})`).join('+');
    return `[${i}:v]fps=${fps},select=${sel},setpts=N/(${outFps}*TB),fps=${outFps},${tail}[v${i}]`;
  });
  const filter = groups.length === 1 ? chains[0].replace(/\[v0\]$/, '[out]')
    : `${chains.join(';')};${groups.map((_, i) => `[v${i}]`).join('')}concat=n=${groups.length}:v=1:a=0[out]`;
  return { inputs, filter };
}

// WebVTT from the real cue times: each cue 2 to 5.5 s, never overlapping the next one.
export function writeVtt(shot, result, opts = {}, log = console.log) {
  const cues = result.cues;
  const start = Math.max(0, cues[0].t - (opts.lead ?? 900));
  const segs = segments(result, { start, end: Math.min(result.end, opts.end ?? result.end) });
  const dur = segs.reduce((a, s) => a + (s.g1 - s.g0), 0) / 1000;
  const times = cues.map((c) => clipTime(segs, c.t));
  const lines = ['WEBVTT', ''];
  let prevEnd = 0;
  times.forEach((raw, i) => {
    const t0 = Math.max(raw, prevEnd + 0.05);
    const next = i + 1 < times.length ? Math.max(times[i + 1], t0 + 2) : dur;
    const t1 = Math.min(Math.max(t0 + 2, Math.min(t0 + 5.5, next - 0.1)), Math.max(dur, t0 + 2));
    prevEnd = t1;
    lines.push(String(i + 1), `${ts(t0)} --> ${ts(t1)}`, cues[i].text || shot.captions[i], '');
  });
  fs.writeFileSync(path.join(VIDEO, `${shot.id}.vtt`), lines.join('\n'));
}
