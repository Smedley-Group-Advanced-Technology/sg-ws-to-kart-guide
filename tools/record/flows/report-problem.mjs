// Report a kart problem: an incident with a finding on Bambino 106 (clip + screenshots, seed variant without the
// 106 incident), then driver feedback with the Power / Performance inspection on Junior 302 (not submitted).
import { tab } from './service-turn.mjs';

export default {
  shots: ['mech-incident-clip', 'mech-report-open', 'mech-report-kart', 'mech-report-type', 'mech-report-incident-type',
    'mech-report-describe', 'mech-report-impact', 'mech-report-finding', 'mech-report-part', 'mech-report-stop',
    'mech-report-submit', 'mech-report-result', 'so-day-9-report', 'mech-feedback-type', 'mech-feedback-power',
    'mech-feedback-describe', 'mech-feedback-inspection', 'mech-feedback-finding', 'mech-feedback-submit'],
  reset: ['no_106_incident'],
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload('text=Readiness board', 60000);
    await s.settle(800);
    const dlg = s.dialog;
    s.cue();                                                    // Tap Report a kart problem.
    await s.shot('mech-report-open', { scroll: false, at: { 1: 'role=button[name="Report a kart problem"]' } });
    await s.tap('role=button[name="Report a kart problem"]');
    await dlg.getByText('What are you reporting?').first().waitFor();
    await s.shot('so-day-9-report', { scroll: false, at: { 1: dlg.getByText(/^What are you reporting\?/) } });
    s.cue();                                                    // Choose the kart.
    await s.tap(dlg.getByRole('combobox').first(), { pause: 900 });
    await s.shot('mech-report-kart', { scroll: false, at: { 1: s.page.getByRole('option', { name: /106/ }) } });
    await s.tap(s.page.getByRole('option', { name: /106/ }));
    s.cue();                                                    // Pick Incident and say what happened.
    await s.tap(dlg.locator('[data-testid="report-type-Incident"]'));
    await s.shot('mech-report-type', { scroll: false, at: { 1: dlg.locator('label').filter({ has: s.page.locator('[data-testid="report-type-Incident"]') }),
      2: dlg.getByText('Needs the Reliability permission.') } });
    const incType = dlg.getByRole('combobox').nth(1);
    await s.tap(incType, { pause: 800 });
    await s.tap(s.page.getByRole('option', { name: 'Impact / Contact' }));
    await s.shot('mech-report-incident-type', { at: { 1: dlg.getByText(/^Incident type/) } });
    await s.type(dlg.locator('#report-notes'), 'Hit the tyre wall at turn 3 in the Demo Practice Day');
    await s.shot('mech-report-describe', { at: { 1: dlg.getByText('Notes / details', { exact: true }) } });
    await s.tap(dlg.getByRole('button', { name: 'Front', exact: true }));
    await s.shot('mech-report-impact', { at: { 1: dlg.getByText(/^Impact location/) } });
    s.cue();                                                    // Add what you found.
    await s.tap(dlg.getByRole('button', { name: /Add finding/ }));
    const issue = dlg.getByRole('combobox').filter({ hasText: 'Choose' }).first();
    await s.tap(issue, { pause: 800 });
    await s.tap(s.page.getByRole('option', { name: 'Loose', exact: true }));
    await s.type(dlg.getByPlaceholder('e.g. Tie rod, brake cable, bumper mount'), 'Bumper mount');
    await s.type(dlg.locator('textarea').last(), 'Front bumper mount bolt loose');
    await s.shot('mech-report-finding', { at: { 1: dlg.getByText(/^Finding 1/), 2: dlg.getByText(/^Item \/ component/) } });
    await s.tap(dlg.locator('[data-testid="finding-parts-no"]'));
    await s.shot('mech-report-part', { at: { 1: dlg.getByText('Is a replacement part required?') } });
    s.cue();                                                    // Say whether it stops the kart.
    await s.tap(dlg.locator('[data-testid="finding-blocking-no"]'));
    await s.scrollTo(dlg.getByText(/^Recorded for the workshop/));
    await s.shot('mech-report-stop', { scroll: false, at: { 1: dlg.getByText(/^Would this stop the kart from being used\?/), 2: dlg.getByText(/^Recorded for the workshop/) },
      place: { 2: 'right' } });                                // marker beside the note, not on the Yes answer
    const submit = dlg.getByRole('button', { name: 'Report problem' });
    await s.scrollTo(submit);
    await s.shot('mech-report-submit', { scroll: false, at: { 1: dlg.getByRole('button', { name: /Add finding/ }), 2: submit } });
    s.cue();                                                    // Tap Report problem.
    await s.tap(submit);
    await s.skip(() => s.settle(1000));
    await s.wait(1500);
    s.cue();                                                    // The finding is now a repair.
    try {
      await s.tap(tab(s, 'Service Queue'));
      await s.skip(async () => { await s.mustReload(s.page.getByText('Bambino 6', { exact: true }), 60000); await s.settle(600); });
      const card = s.page.getByText('Bambino 6', { exact: true }).locator('xpath=ancestor::div[.//button[normalize-space()="Log remedy / complete repair"]][1]');
      await s.scrollTo(card);
      await s.hover(card);
      await s.wait(2500);
      await s.shot('mech-report-result', { scroll: false, at: { 1: card.getByText('Incident', { exact: true }), 2: card.getByText('Bambino 6', { exact: true }) } });
    } catch (e) { s.log(`  queue view not ready, clip ends here (${String(e).slice(0, 120)})`); }
    const r = await s.close();
    clip('mech-incident-clip', r, { poster: 3 });

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
    await f.tap(d.getByRole('button', { name: /Add finding/ }));
    const iss = d.getByRole('combobox').filter({ hasText: 'Choose' }).first();
    await f.tap(iss);
    await f.tap(f.page.getByRole('option', { name: 'Worn', exact: true }));
    await f.type(d.getByPlaceholder('e.g. Tie rod, brake cable, bumper mount'), 'Throttle cable');
    await f.shot('mech-feedback-finding', { at: { 1: d.getByText(/^(Inspection findings|Other findings) \(optional\)/) } });
    await f.shot('mech-feedback-submit', { at: { 1: d.getByRole('button', { name: 'Report problem' }) } });
    await f.close();
  },
};
