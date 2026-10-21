import { HUB } from '../lib/config.mjs';
import { sqlValue } from '../lib/db.mjs';
// The 207 repair card with its linked ticket, and resolving the ticket (normal demo world: 207 has its seeded
// stopping ticket). Casey Mechanic, tablet.
export default {
  shots: ['mech-ticket-result', 'so-day-7-tickets', 'mech-ticket-linked', 'mech-ticket-resolve', 'mech-ticket-closed'],
  reset: true,
  async run({ open }) {
    // the repair card and resolving the ticket
    const c = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await c.goto('/workshop/repairs');
    await c.mustReload(c.page.getByText('Cadet 207', { exact: true }), 60000);
    const card = c.page.locator('a,button,[role=button]').filter({ hasText: /^\s*Cadet 207/ }).filter({ hasText: 'Open ticket' });
    await c.scrollTo(card);
    await c.shot('mech-ticket-result', { at: { 1: card.getByText('Cadet 207', { exact: true }), 2: card.getByText('Open ticket', { exact: true }) } });
    // cropped to the exceptions lanes: the In service lane above shows Junior 304 as Unknown technician to Casey
    // (Alex's name is not visible to another mechanic), unlike every other picture
    const exc = await (await c.must(c.page.getByText(/^Exceptions/).first())).boundingBox();
    const top = Math.max(0, Math.round(exc.y) - 12);
    await c.shot('so-day-7-tickets', { scroll: false, clip: { x: 0, y: top, width: 1180, height: 820 - top },
      at: { 1: card.getByText('Open ticket', { exact: true }) } });
    await c.shot('mech-ticket-linked', { at: { 1: card.getByText('Open ticket', { exact: true }) } });
    await c.tap(card);
    await c.must(c.dialog.getByText('Status *'), { timeout: 60000 });
    await c.settle(800);
    await c.tap(c.page.getByRole('radio', { name: 'Resolved' }));
    await c.shot('mech-ticket-resolve', { at: { 1: c.page.getByRole('radio', { name: 'Resolved' }) } });
    // the seeded ticket says System at Fault Battery without the battery: pick the first fitted battery (off camera),
    // as a mechanic does, or Update stops with Missing fields
    const batt = c.dialog.locator(':has(> [role=radio]), :has(> input[type=radio])').filter({ hasText: /Node ID/ }).first()
      .locator('[role=radio], input[type=radio]').first();
    await batt.scrollIntoViewIfNeeded();
    await batt.click();
    await c.tap(c.page.getByRole('button', { name: 'Update', exact: true }));
    await c.wait(4000);
    const st = sqlValue(`select string_agg(status, ',') from public.kart_issues where hub_id = '${HUB}' and kart_number = 7 and kart_type = 'Cadet'`);
    c.log(`  207 ticket status after Update: ${st}`);
    if (!/Resolved/.test(st || '')) throw new Error('the 207 ticket was not resolved');
    await c.goto('/workshop');
    await c.mustReload('text=Readiness board', 60000);
    const t207 = c.tile('#207', 'Available');
    // wait until the board shows 207 available again (the resolved ticket frees it)
    await c.mustReload(t207.getByRole('checkbox').first().and(c.page.locator(':is([data-state=checked],[aria-checked=true],:checked)')), 60000);
    await c.shot('mech-ticket-closed', { at: { 1: t207 } });
    await c.close();
  },
};
