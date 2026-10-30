// Report a kart problem (KART MF-4/5: no findings on incidents): an incident on Bambino 106 (clip + screenshots, seed
// variant without the 106 incident), then the incident on the ICU board. The follow-up, Log incident on the Tracker and
// driver feedback are in report-follow-up.mjs.

// On a busy machine the 5 s toast can be gone before the screenshot: pause it the way hovering does (the Radix toast
// viewport pauses its toasts on pointermove), once, as soon as a toast is shown.
async function holdNextToast(page) {
  await page.evaluate(() => {
    const t0 = Date.now();
    const iv = setInterval(() => {
      const vp = [...document.querySelectorAll('ol')].find((o) => o.querySelector('li[role=status], li[data-state=open]'));
      if (vp) { clearInterval(iv); setTimeout(() => vp.dispatchEvent(new PointerEvent('pointermove', { bubbles: true })), 120); }
      if (Date.now() - t0 > 120000) clearInterval(iv);
    }, 50);
  });
}

export default {
  shots: ['mech-incident-clip', 'mech-report-open', 'mech-report-kart', 'mech-report-type', 'mech-report-incident-type',
    'mech-report-describe', 'mech-report-impact', 'mech-report-logged', 'so-day-9-report', 'mech-icu-follow-up'],
  reset: ['no_106_incident'],
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload('text=Event readiness', 60000);
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
    await s.shot('mech-report-type', { scroll: false, at: { 1: dlg.locator('label').filter({ has: s.page.locator('[data-testid="report-type-Incident"]') }) } });
    const incType = dlg.getByRole('combobox').nth(1);
    await s.tap(incType, { pause: 800 });
    await s.tap(s.page.getByRole('option', { name: 'Impact / Contact' }));
    await s.shot('mech-report-incident-type', { at: { 1: dlg.getByText(/^Incident type/) } });
    await s.type(dlg.locator('#report-notes'), 'Hit the tyre wall at turn 3 in the Demo Practice Day');
    await s.shot('mech-report-describe', { at: { 1: dlg.getByText('Notes / details', { exact: true }) } });
    await s.tap(dlg.getByRole('button', { name: 'Front', exact: true }));
    await s.shot('mech-report-impact', { at: { 1: dlg.getByText(/^Impact location/) } });
    s.cue();                                                    // Tap Report problem.
    const submit = dlg.getByRole('button', { name: 'Report problem' });
    await s.scrollTo(submit);
    await holdNextToast(s.page);
    await s.tap(submit);
    await s.toastShot('mech-report-logged', /Workshop incident logged/);
    await s.wait(1200);
    s.cue();                                                    // The incident is on the ICU board for the workshop.
    const card106 = () => s.page.locator('div').filter({ has: s.page.getByText('Kart 106', { exact: true }) })
      .filter({ has: s.page.locator('[data-testid="incident-raise-ticket"]') }).last();
    await s.goto('/icu');
    await s.skip(async () => { await s.mustReload(s.page.getByText('Kart 106', { exact: true }).first(), 60000); await s.settle(800); });
    const card = card106();
    await s.scrollTo(card);
    await s.hover(card.getByText('Kart 106', { exact: true }).first());
    await s.wait(2500);
    await s.shot('mech-icu-follow-up', { scroll: false, at: { 1: card.getByText('Kart 106', { exact: true }).first(),
      2: card.locator('[data-testid="incident-raise-ticket"]') } });
    const r = await s.close();
    clip('mech-incident-clip', r, { poster: 4 });

  },
};
