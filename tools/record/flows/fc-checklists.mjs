// Service checklists and servicing thresholds as Taylor Central (desktop): the Cadet draft editor, the Add check
// dialog, publishing a change (clip), the Servicing tab, and the checklist as Alex Mechanic sees it (tablet).
import fs from 'node:fs';
import { kartButton } from './service-turn.mjs';
import { sql } from '../lib/db.mjs';

// checklist versions are global rows the demo reset keeps: put Cadet back to the seeded v1 before and after
const cleanup = () => sql(fs.readFileSync(new URL('../lib/checklist-cleanup.sql', import.meta.url), 'utf8'));

const tab = (s, name) => s.page.locator('[role=tab]').filter({ hasText: new RegExp(`^${name}`) }).first();

async function openChecklists(s) {
  await s.goto('/fkl-central?tab=checklists');
  await s.mustReload(s.page.getByRole('button', { name: 'View', exact: true }), 60000);
  await s.settle(800);
  await s.page.getByRole('button', { name: 'Cadet', exact: true }).click();
  await s.page.getByText('Cadet service checklist').first().waitFor();
  await s.settle(400);
}

// the Steering section header (a button with the name, the number of checks and the minutes)
const section = (s, name) => s.page.getByText(name, { exact: true }).first();

export default {
  shots: ['fc-chk-editor', 'fc-chk-check', 'fc-checklist-clip', 'fc-thr-tab', 'fc-chk-mechanic'],
  reset: true,
  async run({ open, clip }) {
    cleanup();
    // ---------- the draft editor and the Add check dialog ----------
    const c = await open({ persona: 'Taylor Central', device: 'desktop' });
    await openChecklists(c);
    await c.tap(c.page.getByRole('button', { name: 'New draft' }));
    await c.mustReload(c.page.getByText('Cadet: version 2').first(), 60000);
    await c.settle(800);
    await c.tap(section(c, 'Steering'));
    await c.wait(800);
    const add = c.page.getByRole('button', { name: 'Add check' }).first();
    await c.scrollTo(c.page.getByText('Cadet: version 2').first(), { block: 'start' });
    await c.shot('fc-chk-editor', { scroll: false, at: { 2: c.page.getByText('Cadet: version 2').first(), 3: add,
      6: c.page.getByText('Check before publishing', { exact: true }).first(),
      7: c.page.getByRole('button', { name: 'Publish', exact: true }) } });
    await c.tap(add);
    const d = c.dialog;
    await d.getByText('Add check').first().waitFor();
    await c.type(d.locator('textarea').first(), 'Rear sprocket guard secure');
    await c.wait(600);
    await c.shot('fc-chk-check', { scroll: false, at: { 4: d.getByText('Label', { exact: true }).first(),
      5: d.getByRole('button', { name: 'Add reading' }) } });
    await c.close();
    // ---------- Servicing thresholds ----------
    const t = await open({ persona: 'Taylor Central', device: 'desktop' });
    await t.goto('/fkl-central?tab=servicing');
    await t.mustReload(t.page.getByText('Battery voltage threshold').first(), 60000);
    await t.settle(800);
    const battery = t.card('Battery voltage threshold');
    await t.shot('fc-thr-tab', { scroll: false, at: { 1: tab(t, 'Servicing'), 2: battery.locator('input').first(),
      3: t.page.getByText('Axle run-out tolerance', { exact: true }).first(), 4: battery.getByRole('button', { name: 'Save' }) } });
    await t.close();

    // ---------- the checklist as a mechanic sees it ----------
    const m = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await m.goto('/workshop/repairs');
    await m.mustReload('text=Requires service', 60000);
    await m.settle(600);
    await m.tap(kartButton(m, '203'));
    await m.tap(m.dialog.getByRole('button', { name: 'Start service' }));
    await m.page.waitForURL(/in-service/);
    await m.settle(800);
    const cell = m.page.getByRole('button', { name: 'Unchecked' }).first();
    await m.mustReload(cell);
    await m.shot('fc-chk-mechanic', { at: { 1: cell } });
    await m.close();
    cleanup();                                                  // no draft again for the clip

    // ---------- make and publish a change, recorded ----------
    const s = await open({ persona: 'Taylor Central', device: 'desktop', record: true });
    await s.goto('/fkl-central?tab=checklists');
    await s.mustReload(s.page.getByRole('button', { name: 'View', exact: true }), 60000);
    await s.settle(800);
    s.cue();                                                    // Open Service checklists.
    await s.tap(s.page.getByRole('button', { name: 'Cadet', exact: true }));
    await s.hover(s.page.getByText('Cadet service checklist').first());
    await s.wait(1200);
    s.cue();                                                    // Make a new draft for the class.
    await s.tap(s.page.getByRole('button', { name: 'New draft' }));
    await s.skip(async () => { await s.mustReload(s.page.getByText('Cadet: version 2').first(), 60000); await s.settle(800); });
    await s.wait(800);
    s.cue();                                                    // Add or change checks.
    await s.tap(section(s, 'Steering'));
    const addBtn = s.page.getByRole('button', { name: 'Add check' }).first();
    await s.scrollTo(addBtn);
    await s.tap(addBtn);
    const dl = s.dialog;
    await dl.getByText('Add check').first().waitFor();
    await s.type(dl.locator('textarea').first(), 'Rear sprocket guard secure');
    await s.tap(dl.getByRole('button', { name: 'Save check' }));
    await s.skip(() => s.settle(800));
    await s.wait(800);
    s.cue();                                                    // Check it before publishing.
    const again = s.page.getByRole('button', { name: 'Check again' });
    await s.scrollTo(again);
    await s.tap(again);
    await s.skip(() => s.settle(600));
    await s.hover(s.page.getByText(/^No errors/).first());
    await s.wait(1500);
    s.cue();                                                    // Publish with a note of what changed.
    await s.tap(s.page.getByRole('button', { name: 'Publish', exact: true }));
    const pd = s.dialog;
    await pd.getByText('What changed (required)').first().waitFor();
    await s.type(pd.locator('textarea').first(), 'Added rear sprocket guard check');
    await s.tap(pd.getByRole('button', { name: 'Publish', exact: true }));
    await s.skip(() => s.settle(800));
    await s.wait(2500);
    const r = await s.close();
    clip('fc-checklist-clip', r, { poster: 3 });

    cleanup();
  },
};
