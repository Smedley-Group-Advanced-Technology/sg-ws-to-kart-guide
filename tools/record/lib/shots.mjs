// Shot list access: shots/shots.yaml is read through Python (PyYAML) so no extra Node packages are needed.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { REPO, PYTHON, IMG, VIDEO, GIF, HUB, CAMPAIGN, kartId } from './config.mjs';
import { sqlValue } from './db.mjs';

let cache;
export function allShots() {
  if (!cache) {
    const json = execFileSync(PYTHON, ['-c', 'import json,sys,yaml; print(json.dumps(yaml.safe_load(open(sys.argv[1]))))',
      path.join(REPO, 'shots', 'shots.yaml')]).toString();
    cache = new Map(JSON.parse(json).map((s) => [s.id, s]));
  }
  return cache;
}
export function getShot(id) {
  const s = allShots().get(id);
  if (!s) throw new Error(`shot ${id} is not in shots/shots.yaml`);
  return s;
}
export const sectionOf = (s) => (s.page.includes('/') ? s.page.split('/')[0] : 'general');
export function outputPath(s) {
  if (s.kind === 'screenshot') return path.join(IMG, sectionOf(s), `${s.id}.png`);
  if (s.kind === 'gif') return path.join(GIF, `${s.id}.gif`);
  return path.join(VIDEO, `${s.id}.mp4`);
}

// {kart:207}, {campaign}, {task:301}, {hub} -> real ids of the demo world.
export function resolveUrl(url) {
  return url
    .replace(/\{kart:(\d{3})\}/g, (_, n) => kartId(n))
    .replace(/\{campaign\}/g, CAMPAIGN)
    .replace(/\{hub\}/g, HUB)
    .replace(/\{task:(\d{3})\}/g, (_, n) => taskId(n));
}
export function taskId(n, campaign = CAMPAIGN) {
  const id = sqlValue(`select id from public.workshop_campaign_tasks where campaign_id = '${campaign}' and kart_id = '${kartId(n)}'`);
  if (!id) throw new Error(`no campaign task for kart ${n}`);
  return id;
}
