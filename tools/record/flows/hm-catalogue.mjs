// Hub catalogue as Morgan Manager (desktop): the In this hub's list switches, Hub details, Part requests with
// Request a part (screenshots and clip) and the Add hub-local part form.
const tab = (s, name) => s.page.getByRole('tab', { name, exact: true });

async function openCatalogue(s) {
  await s.goto('/workshop/manager?tab=hub-catalogue');
  await s.mustReload(s.page.getByText('Brake pads (pair)').first(), 60000);
  await s.settle(800);
}

export default {
  shots: ['hm-cat-hide', 'hm-cat-supplier', 'hm-req-open', 'hm-req-form', 'hm-cat-local', 'hm-request-part-clip'],
  reset: true,
  async run({ open, clip }) {
    const c = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await openCatalogue(c);
    await c.shot('hm-cat-hide', { at: { 1: tab(c, 'Hub catalogue'), 2: c.page.getByRole('columnheader', { name: "In this hub's list" }) } });
    const bp = c.page.locator('tr').filter({ hasText: 'Brake pads (pair)' }).first();
    await c.tap(bp.getByRole('button', { name: 'Hub details' }));
    await c.dialog.getByText(/^Hub details/).first().waitFor();
    await c.settle(600);
    await c.shot('hm-cat-supplier', { scroll: false, at: { 1: c.dialog.getByText(/^Hub details/).first() } });
    await c.page.keyboard.press('Escape');
    await c.wait(600);
    const reqCard = c.card('Part requests');
    await c.scrollTo(reqCard.getByRole('button', { name: 'Request a part' }), { block: 'start' });
    await c.shot('hm-req-open', { scroll: false, at: { 1: reqCard.getByRole('button', { name: 'Request a part' }) } });
    await c.tap(c.page.getByRole('button', { name: 'Add hub-local part' }));
    await c.dialog.waitFor();
    await c.settle(600);
    await c.shot('hm-cat-local', { scroll: false, at: { 1: c.dialog.getByText('Add hub-local part').first() } });
    await c.page.keyboard.press('Escape');
    await c.close();

    // Request a part, recorded
    const s = await open({ persona: 'Morgan Manager', device: 'desktop', record: true });
    await s.goto('/workshop/manager');
    await s.mustReload(tab(s, 'Hub catalogue'), 60000);
    await s.settle(600);
    s.cue();                                                    // Open Hub catalogue.
    await s.tap(tab(s, 'Hub catalogue'));
    await s.skip(async () => { await s.mustReload(s.page.getByText('Part requests', { exact: true }), 60000); await s.settle(800); });
    const btn = s.card('Part requests').getByRole('button', { name: 'Request a part' });
    await s.scrollTo(btn, { block: 'start' });
    s.cue();                                                    // Tap Request a part.
    await s.tap(btn);
    const d = s.dialog;
    await d.locator('#pr-name').waitFor();
    s.cue();                                                    // Say what the part is and how many.
    await s.type(d.locator('#pr-name'), 'Rear axle key');
    await s.type(d.locator('#pr-mpn'), 'DEMO-RAK-01');
    await s.type(d.locator('#pr-qty'), '2');
    await s.type(d.locator('#pr-notes'), 'Junior rear axle, from Demo Kart Supplies Ltd', { delay: 35 });
    const send = d.getByRole('button', { name: 'Send request' });
    await s.shot('hm-req-form', { scroll: false, at: { 2: d.getByText('Part name', { exact: true }),
      3: d.getByText('Manufacturer part number (MPN), if known'), 4: send } });
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
