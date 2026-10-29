// Clip: a tour of Overview and the Fleet board (D-18) as Alex Mechanic (read only).
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
    await s.hover(s.card('Campaigns').getByText('Campaigns', { exact: true }));
    await s.wait(800);
    s.cue();                                                    // The Fleet board counts green, amber and red karts.
    await s.scrollTo(s.page.getByTestId('fleet-board').getByText('Fleet board', { exact: true }), { block: 'start' });
    await s.hover(s.page.getByTestId('board-colour-amber'));
    await s.wait(2200);
    s.cue();                                                    // Under amber and red you see why.
    await s.hover(s.page.getByTestId('board-line-hub-paused'));
    await s.wait(1200);
    await s.hover(s.page.getByTestId('board-line-hub-repair_all'));
    await s.wait(1200);
    s.cue();                                                    // Tap a number to list those karts.
    await s.tap(s.page.getByTestId('board-line-hub-turn_required'));
    await s.skip(async () => { await s.page.waitForURL(/readiness/); await s.settle(800); });
    await s.wait(2500);
    await s.tap(s.page.getByRole('button', { name: 'Back' }));
    await s.skip(async () => { await s.mustReload(s.page.getByText('Junior Karts (8)'), 60000); await s.settle(800); });
    s.cue();                                                    // Each kart tile has its colour, its reason and its tags.
    await s.scrollTo(s.page.getByText('Junior Karts (8)'), { block: 'start' });
    await s.hover(s.tile('Kart 308', 'Available').getByText('Missing batteries').first());
    await s.wait(3000);
    const r = await s.close();
    clip('mech-fleet-board-clip', r, { poster: 3 });
  },
};
