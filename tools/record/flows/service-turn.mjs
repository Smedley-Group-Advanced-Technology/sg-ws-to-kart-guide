// The full service on Cadet 203, recorded as a clip with its step screenshots. Alex Mechanic, tablet.
export default {
  shots: ['mech-service-clip', 'mech-svc-queue', 'mech-svc-find', 'mech-svc-dialog', 'mech-svc-servicing', 'mech-svc-reading',
    'mech-svc-components', 'mech-svc-parts', 'mech-svc-parts-added', 'mech-svc-work-done', 'mech-svc-complete',
    'mech-svc-declaration', 'mech-svc-done'],
  reset: true,
  async run({ open, clip }) {
    // ---------- part B: the full service, recorded ----------
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload('text=Event readiness', 60000);
    await s.settle(600);
    s.cue();                                                    // Open the Service Queue.
    await s.tap(tab(s, 'Service Queue'));
    await s.skip(async () => { await s.mustReload('text=Requires service', 40000); await s.settle(600); });
    await s.shot('mech-svc-queue', { scroll: false, at: { 1: tab(s, 'Service Queue'), 2: lane(s, 'Requires service') } });
    await s.wait(1200);
    s.cue();                                                    // Tap the kart that needs a service.
    await s.hover(kartButton(s, '203'));
    await s.shot('mech-svc-find', { scroll: false, at: { 1: kartButton(s, '203') } });
    await s.tap(kartButton(s, '203'));
    await s.page.getByText('Start service?').first().waitFor();
    await s.shot('mech-svc-dialog', { scroll: false });
    s.cue();                                                    // Tap Start service.
    await s.tap(s.dialog.getByRole('button', { name: 'Start service' }));
    await s.skip(async () => { await s.page.waitForURL(/in-service/); await s.settle(800); await s.mustReload(s.page.getByRole('button', { name: 'Unchecked' })); });
    await s.shot('mech-svc-servicing', { scroll: false, at: { 1: tab(s, 'Servicing'), 2: s.page.getByText('Kart 203', { exact: true }).first() } });
    await s.wait(800);
    s.cue();                                                    // Tap each check to mark it Good.
    await answerVisible(s, 4, 700);
    await s.skip(async () => {
      for (const sec of ['Steering', 'Brakes']) { await openSection(s, sec); await answerVisible(s, 3, 200); }
    });
    s.cue();                                                    // Type the readings where asked.
    await openSection(s, 'Wheels and tyres');
    for (const v of ['3.5', '3.6', '3.4', '3.5']) await s.type(await emptyReading(s), v, { pause: 250 });
    await answerVisible(s, 2, 400);
    await openSection(s, 'Electrics and battery');
    for (const v of ['51.2', '51.0']) await s.type(await emptyReading(s), v, { pause: 250 });
    await s.shot('mech-svc-reading', { at: { 1: s.page.locator('input[inputmode=decimal]:visible').last() } });
    await answerVisible(s, 3, 400);
    // note on a check
    await s.tap(s.page.getByRole('button', { name: 'Record work done' }).first());
    const pop = s.page.locator('[data-radix-popper-content-wrapper]');
    await s.type(pop.locator('textarea'), 'Chain adjusted');
    await s.shot('mech-svc-work-done', { scroll: false, at: { 1: pop.getByText('Work carried out') } });
    await s.tap(pop.getByRole('button', { name: 'Save' }));
    s.cue();                                                    // Add any part you fitted.
    const comp = s.page.locator('.bg-card').filter({ has: s.page.getByPlaceholder('Search components…') }).first();
    await s.scrollTo(comp.getByText(/^Components replaced/).first(), { block: 'start' });   // heading clear of the sticky header
    await s.shot('mech-svc-components', { scroll: false, at: { 1: comp.getByText(/^Components replaced/).first() } });
    await s.type(comp.getByPlaceholder('Search components…'), 'brake pad');
    await s.wait(800);
    await s.shot('mech-svc-parts', { scroll: false, at: { 1: comp.getByPlaceholder('Search components…'), 2: comp.getByRole('button', { name: 'Select' }).first() } });
    await s.tap(comp.getByRole('button', { name: 'Select' }).first());
    await s.tap(comp.getByRole('button', { name: /Add to components replaced/ }));
    await s.settle(600);
    await s.shot('mech-svc-parts-added', { at: { 1: comp.getByText(/stock deducted on completion/).first().locator('..') } });
    s.cue();                                                    // Tap Complete service.
    // sweep: any check still unchecked (a section that did not open in time) is answered off camera
    await s.skip(async () => {
      for (let round = 0; round < 3; round++) {
        if (!(await s.page.$('button[aria-label="Unchecked"]'))) {
          for (const sec of ['Chassis and frame', 'Steering', 'Brakes', 'Wheels and tyres', 'Electrics and battery']) {
            const head = s.page.getByText(sec, { exact: true }).first();
            const row = head.locator('xpath=ancestor::*[contains(., "/")][1]');
            const txt = await row.innerText().catch(() => '');
            const m = txt.match(/(\d+)\/(\d+)/);
            if (m && m[1] !== m[2]) { await head.click().catch(() => {}); await s.page.waitForTimeout(800); }
          }
        }
        await answerVisible(s, 20, 150);
        if (!(await s.page.$('button[aria-label="Unchecked"]'))) {
          const left = await s.page.getByText(/checks still unchecked/).count();
          if (!left) break;
        }
      }
    });
    const done = s.page.getByRole('button', { name: 'Complete service' });
    await s.scrollTo(done);
    await s.shot('mech-svc-complete', { at: { 1: done } });
    await s.tap(done);
    await s.page.getByText('Service & Inspection Declaration').first().waitFor();
    await s.wait(1500);
    s.cue();                                                    // Tick the declaration and confirm.
    const decl = s.dialog;
    await s.tap(decl.getByRole('checkbox'));
    await s.shot('mech-svc-declaration', { scroll: false, at: { 1: decl.getByText('Service & Inspection Declaration'), 2: decl.getByRole('checkbox') } });
    await s.tap(decl.getByRole('button', { name: 'Confirm' }));
    await s.wait(1500);
    s.cue();                                                    // The kart is Ready again.
    await s.tap(tab(s, 'Overview'));
    await s.skip(async () => { await s.must('text=Event readiness', { timeout: 30000 }); await s.settle(800); });
    const t203 = s.tile('Kart 203', 'Available');
    await s.scrollTo(t203);
    await s.hover(t203);
    await s.wait(2500);
    await s.shot('mech-svc-done', { at: { 1: t203 } });
    const r = await s.close();
    clip('mech-service-clip', r, { poster: 3 });
  },
};

export const tab = (s, name) => s.page.locator('a,button,[role=tab]').filter({ hasText: new RegExp(`^\\s*${name}\\s*$`) });
export const lane = (s, name) => s.page.locator('h3').filter({ hasText: new RegExp(`^${name}`) });
export const kartButton = (s, n) => s.page.getByRole('button', { name: `Kart ${n}`, exact: true }); // KART MF-40 names

async function openSection(s, name) {
  const head = s.page.getByText(name, { exact: true }).first();
  await s.tap(head, { pause: 700 });
}
async function emptyReading(s) {
  const inputs = s.page.locator('input[inputmode=decimal]');
  const n = await inputs.count();
  for (let i = 0; i < n; i++) {
    const el = inputs.nth(i);
    if ((await el.isVisible()) && !(await el.inputValue())) return el;
  }
  throw new Error('no empty reading input');
}
async function answerVisible(s, n, pause) {
  // element handles, not role locators: the cells re-render every second while the timer runs
  for (let i = 0; i < n; i++) {
    const h = await s.page.$('button[aria-label="Unchecked"]:visible');
    if (!h) break;
    await h.evaluate((e) => e.scrollIntoView({ block: 'center' })).catch(() => {});
    const b = await h.boundingBox().catch(() => null);
    if (b) { await s.moveCursor(b.x + b.width / 2, b.y + b.height / 2, 450); await s.pulse(); }
    if (b) await s.page.mouse.click(b.x + b.width / 2, b.y + b.height / 2); else await h.click({ force: true }).catch(() => {});
    await s.page.waitForTimeout(s.pace(pause));
  }
}
