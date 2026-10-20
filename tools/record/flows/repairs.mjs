// Repairs: the exception lanes and repair cards, the Bambino 106 repair with its timer and remedy (clip +
// screenshots), then Remedy per part on Junior 307 once its front bumpers have arrived. Alex Mechanic, tablet.
import { HUB } from '../lib/config.mjs';
import { asPersona } from '../lib/db.mjs';
import { tab } from './service-turn.mjs';

const repairCard = (s, label) => s.page.getByText(label, { exact: true }).locator('xpath=ancestor::div[.//button[normalize-space()="Log remedy / complete repair"]][1]');

export default {
  shots: ['mech-repair-lanes', 'mech-repair-priority', 'mech-repair-card', 'mech-repair-kartpage', 'mech-remedy-open', 'so-day-6-repairs',
    'start-problem-queue', 'mech-repair-clip', 'mech-repair-stop', 'mech-remedy-type', 'mech-remedy-notes', 'mech-remedy-files',
    'mech-remedy-confirm', 'mech-remedy-parts'],
  reset: true,
  async run({ open, clip }) {
    // read-only views first (as seeded)
    const v = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await v.goto('/workshop/repairs');
    await v.mustReload(v.page.getByText('Bambino 6', { exact: true }), 60000);
    const lanes = v.page.getByText(/^Exceptions/);
    await v.scrollTo(lanes, { block: 'start' });
    const h3 = (t) => v.page.locator('h3').filter({ hasText: new RegExp(`^${t}`) });
    await v.shot('start-problem-queue', { scroll: false, at: { 1: h3('Requires reliability actions'), 2: h3('Requires part') } });
    await v.close();

    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop/repairs');
    await s.mustReload(s.page.getByText('Bambino 6', { exact: true }), 60000);
    await s.settle(800);
    const lane = (t) => s.page.locator('h3').filter({ hasText: new RegExp(`^${t}`) });
    await s.scrollTo(s.page.getByText(/^Exceptions/), { block: 'start' });
    await s.shot('mech-repair-lanes', { scroll: false, at: { 1: lane('Requires reliability actions'), 2: lane('Requires part'), 3: lane('Requires Support') } });
    await s.shot('mech-repair-priority', { scroll: false, at: { 1: s.page.getByText(/^Repair priority, top first/) } });
    const c307 = repairCard(s, 'Junior 7');
    await s.shot('mech-repair-card', { at: { 1: c307.getByText('Junior 7', { exact: true }), 2: c307.getByText(/^Waiting on:/), 3: c307.getByText(/^On order/) } });
    const c106 = repairCard(s, 'Bambino 6');
    await s.shot('mech-repair-kartpage', { at: { 1: c106.getByText('Open kart page') } });
    await s.shot('mech-remedy-open', { at: { 1: c106.getByRole('button', { name: 'Log remedy / complete repair' }) } });
    await s.shot('so-day-6-repairs', { at: { 1: c106.getByRole('button', { name: 'Log remedy / complete repair' }) } });
    s.cue();                                                    // Open the kart page from the repair card.
    await s.tap(c106.getByText('Open kart page'));
    await s.skip(async () => { await s.page.waitForURL(/workshop\/kart\//); await s.must(s.page.getByRole('button', { name: /Start repair/ }), { timeout: 45000 }); await s.settle(600); });
    await s.scrollTo(s.page.getByText('Current work', { exact: true }), { block: 'start' });
    await s.wait(800);
    s.cue();                                                    // Tap Start repair when you begin.
    await s.tap(s.page.getByRole('button', { name: /Start repair/ }));
    await s.skip(() => s.settle(600));
    await s.wait(3000);
    await s.shot('mech-repair-stop', { at: { 1: s.page.getByRole('button', { name: /Pause repair/ }), 2: s.page.getByRole('button', { name: /Stop repair work/ }) } });
    s.cue();                                                    // Tap Stop repair work when you finish.
    await s.tap(s.page.getByRole('button', { name: /Stop repair work/ }));
    await s.skip(() => s.settle(600));
    await s.wait(1200);
    s.cue();                                                    // Tap Log remedy / complete repair.
    await s.tap(tab(s, 'Service Queue'));
    await s.skip(async () => { await s.must(s.page.getByText('Bambino 6', { exact: true }), { timeout: 45000 }); await s.settle(600); });
    await s.tap(repairCard(s, 'Bambino 6').getByRole('button', { name: 'Log remedy / complete repair' }));
    const dlg = s.dialog;
    await dlg.locator('[data-testid="remedy-type"]').waitFor();
    await s.wait(800);
    s.cue();                                                    // Choose the remedy and say what you did.
    await s.tap(dlg.locator('[data-testid="remedy-type"]'), { pause: 900 });
    await s.shot('mech-remedy-type', { scroll: false, at: { 1: dlg.getByText(/^Remedy \*/).or(dlg.getByText('Remedy', { exact: true })) } });
    await s.tap(s.page.getByRole('option', { name: 'Tightened / Secured' }));
    await s.type(dlg.getByPlaceholder('What was done'), 'Bumper mount bolt tightened to torque, thread locker added');
    await s.shot('mech-remedy-notes', { at: { 1: dlg.getByPlaceholder('What was done') } });
    s.cue();                                                    // Record every part you used.
    await s.scrollTo(dlg.getByText('Files', { exact: true }));
    await s.shot('mech-remedy-files', { scroll: false, at: { 1: dlg.getByText('Files', { exact: true }) } });
    await s.wait(1500);
    s.cue();                                                    // Confirm. The repair is closed.
    const ok = dlg.getByRole('button', { name: 'Confirm repair complete' });
    await s.shot('mech-remedy-confirm', { at: { 1: ok } });
    await s.tap(ok);
    await s.skip(() => s.settle(1000));
    await s.wait(3000);
    const r = await s.close();
    clip('mech-repair-clip', r, { poster: 4 });

    // front bumpers received for the 307 repair, then Remedy per part
    asPersona('Morgan Manager', `select public.ws_receive_stock_order(id, 2, 38.50, 0, 0, 'GBP', 'INV-DEMO-2002', NULL, 'Both bumpers received')
      from public.workshop_stock_orders where hub_id = '${HUB}' and status = 'ordered';`);
    const p = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await p.goto('/workshop/repairs');
    await p.mustReload(p.page.getByText('Junior 7', { exact: true }), 60000);
    await p.tap(repairCard(p, 'Junior 7').getByRole('button', { name: 'Log remedy / complete repair' }));
    const d = p.dialog;
    await d.getByText(/^Remedy per part/).first().waitFor();
    await p.tap(d.locator('[data-testid="remedy-part-replaced"]').first());
    await p.shot('mech-remedy-parts', { at: { 1: d.getByText(/^Remedy per part/), 2: d.locator('label').filter({ has: p.page.locator('[data-testid="remedy-part-replaced"]') }).first() } });
    await p.close();
  },
};
