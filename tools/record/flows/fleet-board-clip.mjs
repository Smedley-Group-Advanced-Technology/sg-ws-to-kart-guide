// Clip: a tour of Overview and the Readiness board as Alex Mechanic (read only).
export default {
  shots: ['mech-fleet-board-clip'],
  reset: false,
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.skip(async () => { await s.mustReload(s.page.getByText('Junior Karts (8)'), 60000); await s.settle(1000); });
    s.cue();                                                    // Overview is the first Workshop tab.
    await s.hover(s.page.locator('a,button,[role=tab]').filter({ hasText: /^\s*Overview\s*$/ }));
    await s.wait(1800);
    s.cue();                                                    // The cards at the top show the next event and your targets.
    await s.hover(s.card('Next Event').getByText('Next Event', { exact: true }));
    await s.wait(1000);
    await s.hover(s.card('Work targets').getByText('Work targets', { exact: true }));
    await s.wait(1000);
    await s.hover(s.card('Event readiness').getByText('Event readiness', { exact: true }));
    await s.wait(1500);
    s.cue();                                                    // Fleet Status counts open problems.
    await s.scrollTo(s.card('Fleet Status').getByText('Fleet Status', { exact: true }), { block: 'start' });
    await s.hover(s.card('Fleet Status').getByText(/Missing/).first());
    await s.wait(2000);
    s.cue();                                                    // The Readiness board counts every status.
    const rb = s.card('Readiness board');
    await s.scrollTo(rb.getByText('Readiness board', { exact: true }), { block: 'start' });
    await s.wait(2500);
    s.cue();                                                    // Tap a number to list those karts.
    await s.tap(s.page.locator('[data-testid^="readiness-tile-"]').nth(1));
    await s.skip(async () => { await s.page.waitForURL(/readiness/); await s.settle(800); });
    await s.wait(2500);
    await s.tap(s.page.getByRole('button', { name: 'Back' }));
    await s.skip(async () => { await s.mustReload(s.page.getByText('Junior Karts (8)'), 60000); await s.settle(800); });
    s.cue();                                                    // Each kart tile shows its tags.
    await s.scrollTo(s.page.getByText('Junior Karts (8)'), { block: 'start' });
    await s.hover(s.tile('Kart 308', 'Available').getByText('Missing Components'));
    await s.wait(3000);
    const r = await s.close();
    clip('mech-fleet-board-clip', r, { poster: 3 });
  },
};
