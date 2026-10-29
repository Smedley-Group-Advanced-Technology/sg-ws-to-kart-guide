// Workshop Overview, the Fleet board (D-18) and kart tiles as Alex Mechanic (read only, normal demo world).
export default {
  shots: ['mech-board-open', 'mech-path-overview', 'so-day-1-access', 'so-before-tabs', 'gen-where-tabs', 'mech-kart-open',
    'start-tab-strip', 'start-header', 'start-back', 'start-signout', 'start-new-tab', 'mech-board-cards', 'mech-board-readiness',
    'mech-board-colours', 'mech-board-cascade', 'mech-board-classes', 'so-day-3-board', 'start-status-board', 'mech-board-tiles', 'start-status-tags',
    'mech-board-drill', 'mech-board-drill-open', 'start-status-drilldown'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/workshop');
    await s.mustReload('text=Fleet board', 60000);
    await s.settle(1000);
    const tab = (t) => s.page.locator('a,button,[role=tab]').filter({ hasText: new RegExp(`^\\s*${t}\\s*$`) }).first();
    await s.shot('mech-board-open', { at: { 1: tab('Overview') } });
    await s.shot('mech-path-overview', { at: { 1: tab('Overview') } });
    await s.shot('so-day-1-access', { at: { 1: tab('Overview') } });
    await s.shot('so-before-tabs', { at: { 1: tab('Service Queue') } });
    await s.shot('gen-where-tabs', { at: { 1: tab('Overview'), 2: tab('Service Queue') } });
    await s.shot('mech-kart-open');
    await s.shot('start-tab-strip', { at: { 1: tab('Overview'), 2: tab('Stores'), 3: tab('Service Queue'), 4: tab('Servicing'),
      5: tab('Campaign work'), 6: tab('Schedule') } });
    await s.shot('start-header', { at: { 2: 'header >> text=FKL Support', 3: 'role=button[name="Notifications"]', 4: 'role=button[name="Sign out"]' } });
    await s.shot('start-back', { at: { 1: 'role=button[name="Back"]' } });
    await s.hover('role=button[name="Sign out"]');
    await s.shot('start-signout', { at: { 1: 'role=button[name="Sign out"]' } });
    await s.shot('start-new-tab', {
      at: { 1: tab('Overview'), 2: 'role=button[name="Back"]' },
      frame: { tabs: ['Hub Selection', 'Workshop'], active: 1, url: 'localhost:9080/workshop?hubId=...' },
    });
    await s.shot('mech-board-cards', {
      fullPage: true, clip: { x: 0, y: 0, width: 1180, height: 1660 },
      at: { 1: s.card('Next Event').getByText('Next Event', { exact: true }), 2: s.card('Work targets').getByText('Work targets', { exact: true }),
        3: s.card('Event readiness').getByText('Event readiness', { exact: true }), 4: s.card('Campaigns').getByText('Campaigns', { exact: true }) },
    });
    const er = s.card('Event readiness');
    await s.shot('mech-board-readiness', { at: { 1: er.getByText('Demo Regional Race').first(), 2: er.getByText(/Remaining/).first() } });
    const fb = s.page.getByTestId('fleet-board');
    const line = (k) => s.page.getByTestId(`board-line-hub-${k}`);
    await s.scrollTo(fb.getByText('Fleet board', { exact: true }), { block: 'start' });
    await s.shot('mech-board-colours', { scroll: false, at: { 1: fb.getByText('Fleet board', { exact: true }),
      2: s.page.getByTestId('board-colour-green'), 3: s.page.getByTestId('board-colour-amber'), 4: s.page.getByTestId('board-colour-red'),
      5: 'css=[title="Reload board"]' } });
    await s.shot('so-day-3-board', { scroll: false, at: { 1: fb.getByText('Fleet board', { exact: true }) } });
    await s.shot('start-status-board', { scroll: false, at: { 1: s.page.getByTestId('board-colour-green'),
      2: s.page.getByTestId('board-colour-amber'), 3: s.page.getByTestId('board-colour-red'), 4: line('paused') } });
    await s.scrollTo(s.page.getByTestId('board-cascade-hub-amber'), { block: 'start' });
    await s.shot('mech-board-cascade', { scroll: false, at: { 1: line('paused'), 2: line('turn_required'), 3: line('repair_all'), 4: line('missing') } });
    await s.scrollTo(s.page.getByTestId('board-class-Bambino'), { block: 'start' });
    await s.shot('mech-board-classes', { scroll: false, at: { 1: s.page.getByTestId('board-class-Junior'),
      2: s.page.getByTestId('board-tag-Junior-campaign') } });
    const t301 = s.tile('Kart 301', 'Available'), t308 = s.tile('Kart 308', 'Available');
    await s.scrollTo(s.page.getByText('Junior Karts (8)'), { block: 'start' });
    // numbers 2 and 3 outside the 308 tile so they do not cover its label
    await s.shot('mech-board-tiles', { scroll: false, at: { 1: t301, 2: t308, 3: t308.getByText('View log book') },
      place: { 2: 'below', 3: 'right' } });
    await s.shot('start-status-tags', { scroll: false, at: { 1: t308, 2: t308.getByText('Missing batteries').first(),
      3: t301.getByText('Campaign', { exact: true }) } });
    // drill-down lists
    await s.scrollTo(s.page.getByTestId('board-cascade-hub-amber'), { block: 'start' });
    await s.tap(line('turn_required'));
    await s.page.waitForURL(/readiness\/turn_required/);
    await s.settle(800);
    await s.shot('mech-board-drill', { at: { 1: s.page.getByRole('heading').filter({ hasText: /Requires service/ }).first() }, optional: [1] });
    await s.shot('mech-board-drill-open', { at: { 1: s.page.getByText('Kart 203', { exact: true }).first() } });
    await s.goto('/workshop/readiness/repair_all');
    await s.shot('start-status-drilldown', { at: { 1: s.page.getByText('Kart 207', { exact: true }).first(), 2: s.page.getByText('Kart 307', { exact: true }).first() } });
    await s.close();
  },
};
