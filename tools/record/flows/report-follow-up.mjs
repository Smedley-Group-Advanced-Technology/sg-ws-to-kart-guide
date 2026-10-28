// After an incident (KART MF-4/5): an open incident on Bambino 106 (logged as Alex Mechanic, no repairs) with its
// follow-up actions on the kart page, then resolved by a reliability ticket (raised in the database as Casey Mechanic);
// Log incident on the Tracker as Jordan Contractor (not saved); driver feedback with the Power / Performance inspection
// on Junior 302 (not submitted).
import { kartId, HUB } from '../lib/config.mjs';
import { sqlValue, asPersona } from '../lib/db.mjs';

export default {
  shots: ['mech-incident-follow-up', 'mech-incident-resolved', 'mech-tracker-log-incident', 'mech-tracker-log-dialog',
    'mech-feedback-type', 'mech-feedback-power', 'mech-feedback-describe', 'mech-feedback-inspection',
    'mech-feedback-finding', 'mech-feedback-submit'],
  reset: ['no_106_incident'],
  async run({ open }) {
    // the incident as reported in report-problem.mjs
    asPersona('Alex Mechanic', `SELECT public.ws_log_incident('${kartId('106')}', 'Impact', ARRAY['Front'],
      'Hit the tyre wall at turn 3 in the Demo Practice Day', NULL, NULL, NULL, 'Incident', NULL, NULL, NULL);`);
    // the open incident on the kart page, then resolved by a reliability ticket
    const k = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await k.goto(`/workshop/kart/${kartId('106')}`);
    await k.mustReload(k.page.getByText('Incident history').first(), 60000);
    await k.settle(800);
    const raise = k.page.locator('[data-testid="incident-raise-ticket"]').first();
    await k.scrollTo(k.page.getByText('Incident history').first(), { block: 'start' });
    await k.shot('mech-incident-follow-up', { scroll: false, at: { 1: raise, 2: k.page.locator('[data-testid="incident-record-damage"]').first(),
      3: k.page.getByRole('button', { name: 'Resolved: no fault found' }).first() } });
    const incident = sqlValue(`select id from public.workshop_incidents where kart_id = '${kartId('106')}' and status = 'open' order by created_at desc limit 1`);
    if (!incident) throw new Error('no open incident on 106');
    asPersona('Casey Mechanic', `
      INSERT INTO public.kart_issues (identifier, hub_id, kart_type, kart_number, driver_number, status, effect_of_issue, session,
                                      user_id, system_at_fault, describe_issue, timezone_offset)
      VALUES ('', '${HUB}', 'Bambino', 6, 6, 'Ongoing', 'Workshop contained', 3, 'de000000-0000-4000-8000-0000000000a2',
              'Operational', 'Front bumper mount bolt loose after contact at turn 3', '+00:00')
      RETURNING id \\gset t_
      SELECT public.ws_incident_follow_up('${incident}', :'t_id');`);
    await k.page.reload();
    await k.mustReload(k.page.getByText(/Reliability ticket raised:/).first(), 60000);
    await k.settle(800);
    await k.scrollTo(k.page.getByText('Incident history').first(), { block: 'start' });
    const entry = k.page.locator('div').filter({ has: k.page.getByText(/Reliability ticket raised:/) })
      .filter({ has: k.page.getByText('Open linked ticket') }).last();
    await k.shot('mech-incident-resolved', { scroll: false, at: { 1: entry.getByText('Resolved', { exact: true }).first(),
      2: entry.getByText(/Reliability ticket raised:/).first(), 3: entry.getByText('Open linked ticket').first() } });
    await k.close();

    // Log incident on the Tracker as a contractor without permissions (not saved)
    const t = await open({ persona: 'Jordan Contractor', device: 'tablet' });
    await t.goto('/tracker');
    const logBtn = t.page.locator('[data-testid="tracker-log-incident"]');
    await t.mustReload(logBtn, 60000);
    await t.settle(800);
    await t.shot('mech-tracker-log-incident', { scroll: false, at: { 1: logBtn, 2: t.page.getByRole('button', { name: 'New Reliability Issue' }) } });
    await t.tap(logBtn);
    const ld = t.dialog;
    await ld.locator('[data-testid="report-kart"]').waitFor();
    await t.tap(ld.locator('[data-testid="report-kart"]'), { pause: 700 });
    await t.tap(t.page.getByRole('option', { name: /102/ }));
    await t.tap(ld.locator('[data-testid="report-incident-type"]'), { pause: 700 });
    await t.tap(t.page.getByRole('option', { name: 'Spin / Off Track - No Contact' }));
    await t.type(ld.locator('#report-notes'), 'Spun at the hairpin in session 2, no contact');
    await t.shot('mech-tracker-log-dialog', { scroll: false, at: { 1: ld.getByText(/^Kart/).first(), 2: ld.getByText(/^Incident type/).first(),
      3: ld.locator('[data-testid="report-submit"]') } });
    await t.close();

    // driver feedback on Junior 302, not submitted
    const f = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await f.goto('/workshop');
    await f.mustReload('text=Readiness board', 60000);
    const d = f.dialog;
    await f.tap('role=button[name="Report a kart problem"]');
    await f.tap(d.getByRole('combobox').first());
    await f.tap(f.page.getByRole('option', { name: /302/ }));
    await f.tap(d.locator('[data-testid="report-type-Driver Feedback"]'));
    await f.shot('mech-feedback-type', { scroll: false, at: { 1: d.locator('label').filter({ has: f.page.locator('[data-testid="report-type-Driver Feedback"]') }) } });
    await f.tap(d.getByRole('combobox').nth(1));
    await f.tap(f.page.getByRole('option', { name: 'Power / Performance' }));
    await f.shot('mech-feedback-power', { at: { 1: d.getByText(/^Driver feedback type/) } });
    await f.type(d.locator('#report-notes'), 'Driver says it feels slow out of the hairpin');
    await f.shot('mech-feedback-describe', { at: { 1: d.getByText('Notes / details', { exact: true }) } });
    await f.settle(600);
    // answer the inspection: Pass everywhere, one Fail
    const passes = d.locator('[data-testid="dfi-pass"]');
    const n = await passes.count();
    for (let i = 0; i < n; i++) if (await passes.nth(i).isEnabled()) await passes.nth(i).click().catch(() => {});
    await d.locator('[data-testid="dfi-fail"]').last().click().catch(() => {});
    await f.scrollTo(d.getByText(/^Power \/ Performance inspection/));
    await f.shot('mech-feedback-inspection', { at: { 1: d.getByText(/^Power \/ Performance inspection/), 2: d.getByText(/^(Inspection findings|Other findings) \(optional\)/) }, optional: [2] });
    // the finding of the failed check (in the check itself); Other findings stays empty below it
    const iss = d.getByRole('combobox').filter({ hasText: 'Choose' }).first();
    await f.tap(iss);
    await f.tap(f.page.getByRole('option', { name: 'Worn', exact: true }));
    await f.type(d.getByPlaceholder('e.g. Tie rod, brake cable, bumper mount').first(), 'Throttle cable');
    await f.shot('mech-feedback-finding', { at: { 1: d.getByText(/^(Inspection findings|Other findings) \(optional\)/) } });
    await f.shot('mech-feedback-submit', { at: { 1: d.getByRole('button', { name: 'Report problem' }) } });
    await f.close();
  },
};
