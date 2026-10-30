// Hub manager Team tab (#25b) as Morgan Manager (desktop): the tab with Pending requests and the hub's people, then
// Workshop turned on for Jordan Contractor (Reliability turns on too).
export default {
  shots: ['hm-team-tab', 'hm-team-switch'],
  reset: true,
  async run({ open }) {
    const s = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await s.goto('/workshop/manager?tab=team');
    await s.mustReload(s.page.getByText('Pending requests', { exact: false }).first(), 60000);
    await s.page.locator('[data-testid=team-row]').first().waitFor({ timeout: 60000 });
    await s.settle(800);
    await s.shot('hm-team-tab', {
      scroll: false,
      at: { 1: s.page.getByRole('tab', { name: 'Team', exact: true }), 2: s.page.getByText('Pending requests').first() },
    });
    const row = s.page.locator('[data-testid=team-row]', { hasText: 'Jordan Contractor' }).first();
    const ws = row.locator('[data-testid=team-switch-workshop]');
    await s.scrollTo(row);
    await s.tap(ws);
    await s.page.waitForFunction(
      (el) => el && el.getAttribute('data-state') === 'checked',
      await ws.elementHandle(),
      { timeout: 30000 },
    );
    await s.settle(800);
    await s.shot('hm-team-switch', { allowToast: true, at: { 1: row.getByText('Jordan Contractor').first(), 2: ws } });
    await s.close();
  },
};
