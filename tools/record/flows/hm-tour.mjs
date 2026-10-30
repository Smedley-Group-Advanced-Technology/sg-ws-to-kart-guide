// Hub manager screens that need no data change, Morgan Manager (desktop): the Workshop Manager tab and its tabs,
// Kart Allocation, Reports, Parts needed, Reorder point in Stores, Schedule settings, Work targets and readiness targets.
// Nothing is saved: dialogs are closed with Escape.
const strip = (s, name) => s.page.locator('a,button,[role=tab]').filter({ hasText: new RegExp(`^\\s*${name}\\s*$`) }).first();
const tab = (s, name) => s.page.getByRole('tab', { name, exact: true });

export default {
  shots: ['hm-path-overview', 'hm-wm-tabs', 'hm-alloc', 'hm-rep', 'hm-pn', 'hm-pn-reorder', 'hm-sched', 'hm-target',
    'hm-ready-edit', 'hm-ready-overview'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Morgan Manager', device: 'desktop' });

    // the Workshop with the Workshop Manager tab, and Event readiness on Overview
    await s.goto('/workshop');
    await s.mustReload('text=Event readiness', 60000);
    await s.settle(800);
    await s.shot('hm-path-overview', { scroll: false, at: { 1: strip(s, 'Workshop Manager') } });
    const er = s.page.getByText('Event readiness', { exact: true }).first();
    await s.scrollTo(er, { block: 'start' });
    await s.shot('hm-ready-overview', { scroll: false, at: { 4: er } });

    // Workshop Manager and its tabs
    await s.goto('/workshop/manager');
    await s.mustReload(tab(s, 'Service Metrics'), 60000);
    await s.settle(800);
    await s.page.evaluate(() => window.scrollTo(0, 0));
    const names = ['Blockers', 'Time Tracking', 'Alignment health', 'Campaigns', 'Work targets', 'Kart Allocation', 'Damage Reports',
      'Parts needed', 'Hub catalogue', 'Reports'];
    const at = { 1: strip(s, 'Workshop Manager') };
    names.forEach((n, i) => { at[i + 2] = tab(s, n); });
    await s.shot('hm-wm-tabs', { scroll: false, at, place: Object.fromEntries(names.map((_, i) => [i + 2, 'below'])) });

    // Kart Allocation: Needs service only and the list open on 303
    await s.tap(tab(s, 'Kart Allocation'));
    await s.mustReload(s.page.getByRole('button', { name: 'Needs service only' }), 60000);
    await s.tap(s.page.getByRole('button', { name: 'Needs service only' }));
    await s.settle(600);
    const row = s.page.locator('div.rounded-md.border').filter({ hasText: /Kart 303/ }).first();
    await s.scrollTo(row);
    await s.tap(row.getByRole('combobox'));
    // a hub manager who is not an admin only sees their own Workshop permission, so the list holds Morgan only
    await s.page.getByRole('option', { name: 'Morgan Manager' }).waitFor();
    // the open list hides the rest of the page from role locators: use CSS for the other callouts
    await s.shot('hm-alloc', { scroll: false, at: { 1: s.page.locator('[role=tab]').filter({ hasText: /^Kart Allocation$/ }).first(),
      2: s.page.locator('button').filter({ hasText: /^Needs service only$/ }).first(), 3: row.locator('button[role=combobox]').first(), 4: s.page.getByRole('option', { name: 'Morgan Manager' }) } });
    await s.page.keyboard.press('Escape');

    // Reports: Service summary
    await s.goto('/workshop/manager?tab=reports');
    await s.mustReload(s.page.getByText('Service summary').first(), 60000);
    await s.tap(s.page.getByText('Service summary').first());
    await s.mustReload(s.page.getByRole('button', { name: 'Excel' }), 60000);
    await s.settle(800);
    await s.page.evaluate(() => window.scrollTo(0, 0));
    await s.shot('hm-rep', { scroll: false, at: { 1: tab(s, 'Reports'), 2: s.page.getByText('Service summary').first(),
      3: s.page.locator('label[for="report-period"], label:has-text("Period")').first(), 4: s.page.getByRole('button', { name: 'Excel' }) } });

    // Parts needed: Order qty on brake pads
    await s.goto('/workshop/manager?tab=parts-needed');
    await s.mustReload(s.page.getByText('Chain', { exact: true }).first(), 60000);
    await s.settle(800);
    // brake pads do not show in the list; Chain is below its reorder point
    const bp = s.page.locator('tr').filter({ hasText: 'DEMO-CH-01' }).first();
    await bp.locator('input[aria-label="Order qty"]').first().fill('');
    await s.type(bp.locator('input[aria-label="Order qty"]').first(), '8');
    await s.page.evaluate(() => window.scrollTo(0, 0));
    await s.shot('hm-pn', { scroll: false, at: { 1: tab(s, 'Parts needed'), 2: s.page.getByRole('columnheader', { name: 'Still needed' }).first(),
      3: bp.locator('input[aria-label="Order qty"]').first(), 4: s.page.getByRole('button', { name: /^Create draft orders/ }).first() } });

    // Stores: Adjust with Reorder point
    await s.goto('/workshop/parts');
    await s.mustReload(s.page.getByText('Brake pads (pair)', { exact: true }), 60000);
    const sr = s.page.locator('tr').filter({ hasText: 'Brake pads (pair)' }).first();
    await s.tap(sr.getByRole('button', { name: 'Adjust' }));
    await s.dialog.getByText(/^Adjust stock/).first().waitFor();
    await s.wait(600);
    await s.shot('hm-pn-reorder', { scroll: false, at: { 1: s.dialog.getByText('Reorder point', { exact: true }).first() } });
    await s.page.keyboard.press('Escape');

    // Schedule settings (full page)
    await s.goto('/workshop/schedule/settings');
    await s.mustReload(s.page.getByText('Schedule participants').first(), 60000);
    await s.settle(800);
    await s.shot('hm-sched', { fullPage: true, at: { 1: s.page.getByText('Schedule settings', { exact: true }).first(),
      // these labels wrap their select, so point at the select itself
      2: s.page.locator('[aria-label="Scheduling mode"]').first(), 3: s.page.locator('[aria-label="Submission deadline day"]').first(),
      4: s.page.getByText('Require start time', { exact: true }).first(), 5: s.page.getByText('Allow remote work', { exact: true }).first(),
      6: s.page.getByRole('button', { name: 'Save settings' }) } });

    // Work targets: Add target, filled in, not saved
    await s.goto('/workshop/manager?tab=targets');
    await s.mustReload(s.page.getByRole('button', { name: 'Add target' }).first(), 60000);
    await s.tap(s.page.getByRole('button', { name: 'Add target' }).first());
    const wd = s.page.locator('[data-testid="work-target-dialog"]');
    await wd.waitFor();
    // people are listed by their initials
    await s.choose(wd.locator('#work-target-person'), 'AM');
    await s.choose(wd.locator('#work-target-type'), 'Services');
    await s.type(wd.locator('#work-target-quantity'), '10');
    await s.choose(wd.locator('#work-target-class'), 'Cadet');
    await s.wait(500);
    await s.shot('hm-target', { scroll: false, at: { 1: wd.getByText('Add work target'), 2: wd.getByText('Work type', { exact: true }),
      3: wd.getByText('Class (optional)', { exact: true }), 4: wd.locator('[data-testid="work-target-save"]') } });
    await s.page.keyboard.press('Escape');

    // Readiness targets: Edit target on Demo Regional Race, numbers typed, not saved
    await s.goto('/workshop/manager?tab=readiness');
    await s.mustReload(s.page.getByText('Demo Regional Race').first(), 60000);
    await s.tap(s.page.getByRole('button', { name: 'Edit target' }).first());
    const rd = s.page.locator('[data-testid="readiness-target-dialog"]');
    await rd.waitFor();
    for (const [c, v] of [['Bambino', '5'], ['Cadet', '7'], ['Junior', '7']]) await s.type(rd.locator(`#readiness-required-${c}`), v);
    await s.shot('hm-ready-edit', { scroll: false, at: { 1: rd.getByText('Demo Regional Race').first(), 2: rd.getByText('Edit readiness target'),
      3: rd.locator('label[for="readiness-required-Junior"]') } });
    await s.page.keyboard.press('Escape');
    await s.close();
  },
};
