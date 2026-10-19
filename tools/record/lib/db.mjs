// Database helpers for the LOCAL guide stack (compose project fklguide) only.
import { execFileSync } from 'node:child_process';
import { STACK, PERSONAS } from './config.mjs';

let checked = false;
function guard() {
  if (checked) return;
  const cid = execFileSync('docker', ['compose', '--profile', 'guide', 'ps', '-q', 'kart-db'], { cwd: STACK }).toString().trim();
  const name = execFileSync('docker', ['inspect', '-f', '{{.Name}}', cid]).toString().trim();
  if (!name.startsWith('/fklguide-kart-db-')) throw new Error(`refusing: kart-db container is ${name}`);
  checked = true;
}

// Run SQL as postgres; returns rows as arrays of strings (psql -At, | separated).
export function sql(query) {
  guard();
  const out = execFileSync('docker', ['compose', '--profile', 'guide', 'exec', '-T', 'kart-db', 'psql', '-U', 'postgres',
    '-X', '-q', '-At', '-v', 'ON_ERROR_STOP=1'], { cwd: STACK, input: query }).toString();
  return out.split('\n').filter(Boolean).map((l) => l.split('|'));
}
export const sqlValue = (q) => (sql(q)[0] || [])[0];

// Run SQL as a persona (like the app's RPC calls), inside one transaction.
export function asPersona(persona, query) {
  const p = PERSONAS[persona];
  if (!p) throw new Error(`unknown persona ${persona}`);
  const claims = JSON.stringify({ sub: p.id, role: 'authenticated', aud: 'authenticated', email: p.email });
  return sql(`BEGIN;\nselect set_config('request.jwt.claims', '${claims}', true);\nset local role authenticated;\n${query}\nCOMMIT;\n`);
}

// Rebuild the demo world (optionally with variants, see seed/reset_demo.sh).
export function resetDemo(variants = []) {
  const out = execFileSync('bash', [`${STACK}/seed/reset_demo.sh`, ...variants], { cwd: STACK }).toString();
  if (!out.includes('demo world ready')) throw new Error(`reset_demo failed: ${out}`);
}

// Every display name and e-mail in the stack that is NOT a persona (should be none): used by the DOM scan.
export function foreignPeople() {
  const names = new Set(Object.keys(PERSONAS));
  const rows = sql("select coalesce(display_name,''), coalesce(email,'') from public.profiles union select coalesce(raw_user_meta_data->>'full_name',''), coalesce(email,'') from auth.users");
  return rows.flatMap(([n, e]) => [n && !names.has(n) ? n : null, e && !e.endsWith('@demo-fkl.example') ? e : null]).filter(Boolean);
}
