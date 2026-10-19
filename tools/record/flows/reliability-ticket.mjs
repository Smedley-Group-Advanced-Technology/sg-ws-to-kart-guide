// Raising a stopping reliability ticket on Cadet 207 (clip + screenshots, seed variant without the 207 ticket),
// then resolving it from the repair card. Casey Mechanic (workshop + reliability), tablet.
import { tab } from './service-turn.mjs';

export default {
  shots: ['mech-ticket-clip', 'mech-ticket-open', 'mech-ticket-type', 'mech-ticket-form', 'mech-ticket-effect', 'mech-ticket-status',
    'mech-ticket-describe', 'mech-ticket-saved', 'mech-ticket-result', 'so-day-7-tickets', 'mech-ticket-linked',
    'mech-ticket-resolve', 'mech-ticket-closed'],
  reset: ['no_207_ticket'],
  async run({ open, clip }) {
    const s = await open({ persona: 'Casey Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload('text=Readiness board', 60000);
    await s.settle(800);
    const dlg = s.dialog;
    s.cue();                                                    // Tap Report a kart problem.
    await s.shot('mech-ticket-open', { scroll: false, at: { 1: 'role=button[name="Report a kart problem"]' } });
    await s.tap('role=button[name="Report a kart problem"]');
    await dlg.getByText('What are you reporting?').first().waitFor();
    s.cue();                                                    // Choose the kart and Reliability.
    await s.tap(dlg.getByRole('combobox').first(), { pause: 900 });
    await s.tap(s.page.getByRole('option', { name: /207/ }));
    await s.tap(dlg.locator('[data-testid="report-type-Reliability"]'));
    await s.shot('mech-ticket-type', { scroll: false, at: { 1: dlg.locator('label').filter({ has: s.page.locator('[data-testid="report-type-Reliability"]') }),
      2: dlg.locator('[data-testid="report-handoff-hint"]') } });
    s.cue();                                                    // Tap Continue to open the ticket form.
    await s.tap(dlg.getByRole('button', { name: 'Continue' }));
    await s.skip(async () => { await s.page.waitForURL(/tracker/); await s.must(s.page.getByText('Effect of Issue *'), { timeout: 45000 }); await s.settle(800); });
    await s.shot('mech-ticket-form', { at: { 1: s.page.getByText('Kart Type *') } });
    s.cue();                                                    // Pick the effect: cut out, not restarted.
    await s.tap(s.page.getByRole('radio', { name: 'Cut out not restarted' }));
    await s.shot('mech-ticket-effect', { at: { 1: s.page.getByText('Effect of Issue *') } });
    s.cue();                                                    // Leave the status Ongoing and submit.
    await s.tap(s.page.getByRole('radio', { name: 'Ongoing' }));
    await s.shot('mech-ticket-status', { at: { 1: s.page.getByText('Status *') } });
    await s.type(s.page.locator('#describe-issue'), 'Cut out on the back straight, would not restart');
    await s.shot('mech-ticket-describe', { at: { 1: s.page.getByText('Describe Issue', { exact: true }) } });
    const sess = s.page.getByRole('button', { name: 'Session 1', exact: true });
    if (await s.pick(sess)) await s.tap(sess);
    await s.tap(s.page.getByRole('button', { name: 'Submit Issue' }));
    const tt = await s.toast('Workshop incident linked to the ticket.');
    await s.shot('mech-ticket-saved', { scroll: false, wait: 200, at: { 1: tt } });
    await s.wait(1200);
    s.cue();                                                    // The kart is now Repair Required.
    await s.goto('/workshop/readiness/repair_all', { settle: false });
    await s.skip(async () => { await s.must(s.page.getByText('#207', { exact: true }), { timeout: 45000 }); await s.settle(600); });
    await s.hover(s.page.getByText('#207', { exact: true }));
    await s.wait(3500);
    const r = await s.close();
    clip('mech-ticket-clip', r, { poster: 2 });

    // the repair card and resolving the ticket
    const c = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await c.goto('/workshop/repairs');
    await c.mustReload(c.page.getByText('Cadet 207', { exact: true }), 60000);
    const card = c.page.locator('div').filter({ has: c.page.getByText('Cadet 207', { exact: true }) }).filter({ hasText: 'Open linked ticket' }).last();
    await c.scrollTo(card);
    await c.shot('mech-ticket-result', { at: { 1: card.getByText('Cadet 207', { exact: true }), 2: card.getByText('Open ticket', { exact: true }) } });
    await c.shot('so-day-7-tickets', { at: { 1: card.getByText('Open linked ticket') } });
    await c.shot('mech-ticket-linked', { at: { 1: card.getByText('Open linked ticket') } });
    await c.tap(card.getByText('Open linked ticket'));
    await c.must(c.page.getByText('Status *'), { timeout: 45000 });
    await c.settle(800);
    await c.tap(c.page.getByRole('radio', { name: 'Resolved' }));
    await c.shot('mech-ticket-resolve', { at: { 1: c.page.getByRole('radio', { name: 'Resolved' }) } });
    await c.tap(c.page.getByRole('button', { name: 'Update Issue' }));
    await c.wait(2500);
    await c.goto('/workshop');
    await c.mustReload('text=Readiness board', 60000);
    const t207 = c.tile('#207', 'Available');
    await c.shot('mech-ticket-closed', { at: { 1: t207 } });
    await c.close();
  },
};
