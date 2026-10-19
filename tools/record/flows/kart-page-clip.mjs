// Clip: Open kart, type 207, the kart page, its history and QR code, as Alex Mechanic (read only).
export default {
  shots: ['mech-openkart-clip'],
  reset: false,
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.skip(async () => { await s.mustReload(s.page.getByText('Readiness board'), 60000); await s.settle(800); });
    s.cue();                                                    // Tap Open kart.
    await s.tap('role=button[name="Open kart"]');
    const dlg = s.dialog;
    s.cue();                                                    // Type the kart number and tap Open.
    await s.type(dlg.getByLabel('Kart number'), '207');
    await s.tap(dlg.getByRole('button', { name: 'Open', exact: true }));
    await s.skip(async () => { await s.page.waitForURL(/workshop\/kart\//); await s.mustReload(s.page.getByText('Current work', { exact: true }), 45000); await s.settle(800); });
    s.cue();                                                    // The top shows status and open work.
    await s.hover(s.page.getByText('Unavailable', { exact: true }).first());
    await s.wait(1000);
    await s.hover(s.page.getByText(/^Open tickets$/i).first());
    await s.wait(1200);
    await s.scrollTo(s.page.getByText('Current work', { exact: true }), { block: 'start' });
    await s.wait(1500);
    s.cue();                                                    // History shows everything done to the kart.
    await s.tap('role=tab[name="History"]');
    await s.scrollTo(s.page.getByText(/^Status history/), { block: 'start' });
    await s.wait(1500);
    await s.scrollTo(s.page.getByText(/^Repair history/), { block: 'start' });
    await s.wait(1500);
    s.cue();                                                    // The QR code tab prints a label.
    await s.scrollTo('role=tab[name="QR code"]', { block: 'start' });
    await s.tap('role=tab[name="QR code"]');
    await s.wait(3000);
    const r = await s.close();
    clip('mech-openkart-clip', r, { poster: 2 });
  },
};
