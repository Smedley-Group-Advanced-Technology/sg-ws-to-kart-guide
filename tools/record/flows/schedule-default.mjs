// Default week (KART MF-13): Morgan Manager sets Alex Mechanic's default week in Schedule settings (desktop), then
// Alex opens Plan my week for the empty Upcoming week, which is filled from it (tablet, not saved).
export default {
  shots: ['hm-sched-default', 'mech-sched-default'],
  reset: true,
  async run({ open }) {
    const m = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await m.goto('/workshop/schedule/settings');
    await m.mustReload(m.page.getByText('Schedule participants').first(), 60000);
    await m.settle(800);
    const edit = m.page.getByRole('button', { name: 'Edit default week for AM' });
    await m.scrollTo(edit);
    await m.tap(edit);
    const d = m.page.locator('[data-testid="schedule-default-week-editor"]');
    await d.waitFor();
    for (const day of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']) {
      const box = d.locator('[data-day]').filter({ hasText: day }).first();
      const sw = box.getByRole('switch');
      if ((await sw.getAttribute('aria-checked')) !== 'true') await m.tap(sw, { pause: 250 });
      await box.locator('[data-testid="schedule-default-start"]').fill('08:00');
      await box.locator('[data-testid="schedule-default-end"]').fill('16:30');
    }
    await m.page.evaluate(() => document.activeElement && document.activeElement.blur());
    await d.locator('[data-day]').first().evaluate((e) => e.scrollIntoView({ block: 'start' }));
    await m.wait(500);
    await m.shot('hm-sched-default', { scroll: false, at: { 1: d.getByText(/^Default week: AM/).first(),
      2: d.locator('[data-day]').first().getByText('Working', { exact: true }), 3: d.locator('[data-testid="schedule-default-save"]') } });
    await m.tap(d.locator('[data-testid="schedule-default-save"]'));
    await m.page.getByText('Default week saved').first().waitFor({ timeout: 15000 });
    await m.close();

    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/workshop/schedule');
    await s.mustReload(s.page.getByText('Weekly work schedule', { exact: true }), 60000);
    await s.tap(s.page.getByRole('button', { name: 'Upcoming week' }));
    await s.settle(800);
    await s.tap(s.page.getByRole('button', { name: 'Plan my week' }));
    const note = s.page.getByText('Filled from your default week', { exact: true }).first();
    await note.waitFor({ timeout: 15000 });
    await s.wait(600);
    await s.shot('mech-sched-default', { at: { 1: note }, block: 'start' });
    await s.close();
  },
};
