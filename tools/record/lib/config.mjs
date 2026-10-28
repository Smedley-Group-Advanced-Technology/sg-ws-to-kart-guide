// Shared settings for the recorder. Everything points at the LOCAL guide stack only.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

export const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
export const STACK = process.env.FKL_GUIDE_STACK || '/home/arch/Work/guide-stack';
export const TOOLS_NODE = process.env.FKL_TOOLS_NODE || path.join(STACK, 'tools-node');
export const PYTHON = process.env.FKL_PYTHON || path.join(STACK, 'venv', 'bin', 'python');
// Raw captures (videos, unannotated PNGs, encode jobs) stay outside the repo and outside synced folders.
export const RAW = process.env.FKL_RECORD_RAW || path.join(process.env.HOME || '/tmp', '.cache', 'fkl-guide-record');
export const DOCS = path.join(REPO, 'docs');
export const IMG = path.join(DOCS, 'assets', 'img');
export const VIDEO = path.join(DOCS, 'assets', 'video');
export const GIF = path.join(DOCS, 'assets', 'gif');

export const BASE = 'http://localhost:9080';
export const GATEWAY = 'http://localhost:55321';
// Only these origins may be reached by the browser. Everything else is aborted.
export const ALLOWED_ORIGINS = new Set(['http://localhost:9080', 'http://localhost:55321', 'ws://localhost:55321',
  'ws://localhost:9080', 'http://127.0.0.1:9080', 'http://127.0.0.1:55321']);

export const HUB = 'de000000-0000-4000-8000-000000000001';
export const HUB_NORTH = 'de000000-0000-4000-8000-000000000002';
export const CAMPAIGN = 'de000000-0000-4000-8000-00000000ca01';
export const EV_SESSION = 'de000000-0000-4000-8000-00000000e002';
export const EV_PAST = 'de000000-0000-4000-8000-00000000e003';
export const kartId = (n) => `de000000-0000-4000-8000-000000000${n}`;

export const PERSONAS = {
  'Alex Mechanic': { email: 'alex.mechanic@demo-fkl.example', initials: 'AM', id: 'de000000-0000-4000-8000-0000000000a1' },
  'Casey Mechanic': { email: 'casey.mechanic@demo-fkl.example', initials: 'CM', id: 'de000000-0000-4000-8000-0000000000a2' },
  'Morgan Manager': { email: 'morgan.manager@demo-fkl.example', initials: 'MM', id: 'de000000-0000-4000-8000-0000000000a3' },
  'Taylor Central': { email: 'taylor.central@demo-fkl.example', initials: 'TC', id: 'de000000-0000-4000-8000-0000000000a4' },
  'Riley Support': { email: 'riley.support@demo-fkl.example', initials: 'RS', id: 'de000000-0000-4000-8000-0000000000a5' },
  'Jamie Newstarter': { email: 'jamie.newstarter@demo-fkl.example', initials: 'JN', id: 'de000000-0000-4000-8000-0000000000a6' },
  'Jordan Contractor': { email: 'jordan.contractor@demo-fkl.example', initials: 'JC', id: 'de000000-0000-4000-8000-0000000000a7' },
};
export const DEMO_EMAIL_DOMAIN = '@demo-fkl.example';

export const DEVICES = {
  tablet: { viewport: { width: 1180, height: 820 }, isMobile: false, hasTouch: true },
  phone: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
  desktop: { viewport: { width: 1440, height: 900 }, isMobile: false, hasTouch: false },
};

// The demo password is read at run time from the stack's .env and never written anywhere.
export function demoPassword() {
  const env = fs.readFileSync(path.join(STACK, '.env'), 'utf8');
  const line = env.split('\n').reverse().find((l) => l.startsWith('DEMO_PASSWORD='));
  if (!line) throw new Error('DEMO_PASSWORD missing from the guide stack .env');
  return line.slice('DEMO_PASSWORD='.length).trim();
}

// playwright-core lives in the stack's tools-node folder, not in this repo.
export function playwright() {
  const require = createRequire(path.join(TOOLS_NODE, 'package.json'));
  return require('playwright-core');
}

// Heavy jobs on this shared machine: wait until none of them runs (SPEC rule 5).
export const HEAVY_PATTERN = '[v]ite build|[t]sc --noEmit|[b]un run build|[f]fmpeg|[m]kdocs build';
