// Hub catalogue as Morgan Manager (desktop): the In this hub's list switches, Hub details, Part requests with
// Request a part (screenshots and clip). Add hub-local part is gone (KART MF-20).
const tab = (s, name) => s.page.getByRole('tab', { name, exact: true });

async function openCatalogue(s) {
  await s.goto('/workshop/manager?tab=hub-catalogue');
  await s.mustReload(s.page.getByText('Brake pads (pair)').first(), 60000);
  await s.settle(800);
}

export default {
  shots: ['hm-cat-hide', 'hm-cat-supplier', 'hm-req-open', 'hm-req-form', 'hm-request-part-clip'],
  reset: true,
  async run({ open, clip }) {
    const c = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await openCatalogue(c);
    // Catalogues in use and Part requests come first: show the hub's list itself
    const listTitle = c.page.getByText(/^Hub catalogue: Demo Hub/).first();
    await c.scrollTo(listTitle, { block: 'start' });
    await c.shot('hm-cat-hide', { scroll: false, at: { 1: listTitle, 2: c.page.getByRole('columnheader', { name: "In this hub's list" }) } });
    const bp = c.page.locator('tr').filter({ hasText: 'Brake pads (pair)' }).first();
    await c.tap(bp.getByRole('button', { name: 'Hub details' }));
    await c.dialog.getByText(/^Hub details/).first().waitFor();
    await c.settle(600);
    await c.shot('hm-cat-supplier', { scroll: false, at: { 1: c.dialog.getByText(/^Hub details/).first() } });
    await c.page.keyboard.press('Escape');
    await c.wait(600);
    // the Part requests title carries a "waiting" badge, so find the button itself
    const reqBtn = c.page.getByRole('button', { name: 'Request a part', exact: true });
    await c.scrollTo(reqBtn, { block: 'start' });
    await c.shot('hm-req-open', { scroll: false, at: { 1: reqBtn } });
    await c.close();

    // Request a part, recorded
    const s = await open({ persona: 'Morgan Manager', device: 'desktop', record: true });
    await s.goto('/workshop/manager');
    await s.mustReload(tab(s, 'Hub catalogue'), 60000);
    await s.settle(600);
    s.cue();                                                    // Open Hub catalogue.
    await s.tap(tab(s, 'Hub catalogue'));
    const btn = s.page.getByRole('button', { name: 'Request a part', exact: true });
    await s.skip(async () => { await s.mustReload(btn, 60000); await s.settle(800); });
    await s.scrollTo(btn, { block: 'start' });
    s.cue();                                                    // Tap Request a part.
    await s.tap(btn);
    const d = s.dialog;
    await d.locator('#pr-name').waitFor();
    s.cue();                                                    // Say what the part is, who makes it and which karts it fits.
    await s.type(d.locator('#pr-name'), 'Rear axle key');
    await s.type(d.locator('#pr-manufacturer'), 'Demo Karts');
    await s.type(d.locator('#pr-mpn'), 'DEMO-RAK-01');
    await s.type(d.locator('#pr-supplier'), 'Demo Kart Supplies Ltd', { delay: 30 });
    await s.type(d.locator('#pr-spn'), 'DKS-RAK-01', { delay: 30 });
    await s.type(d.locator('#pr-link'), 'https://parts.demo-fkl.example/rear-axle-key', { delay: 20 });
    await s.tap(d.locator('#pr-type-Cadet'));
    await s.tap(d.locator('[id^="pr-fit-Cadet-"]').first());
    const send = d.getByRole('button', { name: 'Send request' });
    await s.scrollTo(d.getByText('Compatible kart types', { exact: true }));
    await s.shot('hm-req-form', { scroll: false, at: { 2: d.getByText('Manufacturer part number (MPN)', { exact: true }),
      3: d.getByText('Link to the part (optional)', { exact: true }), 4: d.getByText('Compatible kart types', { exact: true }), 5: send } });
    s.cue();                                                    // Send the request to FKL Central.
    await s.tap(send);
    await s.skip(() => s.settle(800));
    const row = s.page.locator('tr').filter({ hasText: 'Rear axle key' }).first();
    await row.waitFor({ timeout: 30000 });
    await s.scrollTo(row);
    await s.hover(row);
    await s.wait(3000);
    const r = await s.close();
    clip('hm-request-part-clip', r, { poster: 3 });
  },
};
