// Workshop Overview, Readiness board and kart tiles as Alex Mechanic (read only, normal demo world).
export default {
  shots: ['mech-board-open', 'mech-path-overview', 'so-day-1-access', 'so-before-tabs', 'gen-where-tabs', 'mech-kart-open',
    'start-tab-strip', 'start-header', 'start-back', 'start-signout', 'start-new-tab', 'mech-board-cards', 'mech-board-readiness',
    'mech-board-fleet-status', 'mech-board-reload', 'so-day-3-board', 'start-status-board', 'mech-board-tiles', 'start-status-tags',
    'mech-board-drill', 'mech-board-drill-open', 'start-status-drilldown'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/workshop');
    await s.mustReload('text=Readiness board', 60000);
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
    await s.shot('mech-board-fleet-status', { at: { 1: s.card('Fleet Status').getByText('Fleet Status', { exact: true }), 2: s.card('Fleet Status').getByText(/Missing/).first() } });
    const rb = s.card('Readiness board');
    const tiles = s.page.locator('[data-testid^="readiness-tile-"]');
    await s.scrollTo(rb.getByText('Readiness board', { exact: true }), { block: 'start' });
    await s.shot('mech-board-reload', { scroll: false, at: { 1: rb.getByText('Readiness board', { exact: true }), 2: 'css=[title="Reload board"]' } });
    await s.shot('so-day-3-board', { scroll: false, at: { 1: rb.getByText('Readiness board', { exact: true }) } });
    await s.shot('start-status-board', { scroll: false, at: { 1: rb.getByText('Readiness board', { exact: true }),
      2: tiles.nth(0), 3: tiles.nth(1), 4: tiles.nth(3) } });
    const t301 = s.tile('Kart 301', 'Available'), t308 = s.tile('Kart 308', 'Available');
    await s.scrollTo(s.page.getByText('Junior Karts (8)'), { block: 'start' });
    await s.shot('mech-board-tiles', { scroll: false, at: { 1: t301, 2: t308, 3: t308.getByText('View log book') } });
    await s.shot('start-status-tags', { scroll: false, at: { 1: t308, 2: t308.getByText('Missing Components'), 3: t301.getByText('Campaign') } });
    // drill-down lists
    await s.scrollTo(rb.getByText('Readiness board', { exact: true }), { block: 'start' });
    await s.tap(tiles.nth(1));
    await s.page.waitForURL(/readiness\/turn_all/);
    await s.settle(800);
    await s.shot('mech-board-drill', { at: { 1: s.page.getByRole('heading').filter({ hasText: /Requires service/ }).first() }, optional: [1] });
    await s.shot('mech-board-drill-open', { at: { 1: s.page.getByText('Kart 203', { exact: true }).first() } });
    await s.goto('/workshop/readiness/repair_all');
    await s.shot('start-status-drilldown', { at: { 1: s.page.getByText('Kart 207', { exact: true }).first(), 2: s.page.getByText('Kart 307', { exact: true }).first() } });
    await s.close();
  },
};
