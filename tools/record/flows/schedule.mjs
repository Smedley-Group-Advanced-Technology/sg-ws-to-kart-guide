// The weekly work schedule as Alex Mechanic: Upcoming week, Plan my week, a working day (not submitted).
export default {
  shots: ['mech-sched-tab', 'mech-sched-week', 'mech-sched-plan', 'mech-sched-day', 'mech-sched-location', 'mech-sched-times', 'mech-sched-submit'],
  reset: true,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/workshop/schedule');
    await s.mustReload(s.page.getByText('Weekly work schedule', { exact: true }), 60000);
    await s.shot('mech-sched-tab', { scroll: false, at: { 1: s.page.getByText('Weekly work schedule', { exact: true }) } });
    await s.tap(s.page.getByRole('button', { name: 'Upcoming week' }));
    await s.settle(800);
    await s.shot('mech-sched-week', { scroll: false, at: { 1: s.page.getByRole('button', { name: 'Upcoming week' }) } });
    await s.shot('mech-sched-plan', { scroll: false, at: { 1: s.page.getByRole('button', { name: 'Plan my week' }) } });
    await s.tap(s.page.getByRole('button', { name: 'Plan my week' }));
    await s.wait(800);
    const dlg = s.dialog;
    const scope = (await dlg.count()) ? dlg : s.page;
    const monday = scope.getByRole('checkbox', { name: /^Working on Monday/ }).or(scope.getByRole('switch', { name: /^Working on Monday/ }));
    await s.tap(monday);
    await s.shot('mech-sched-day', { at: { 1: monday }, place: { 1: 'below' } });
    const loc = scope.getByRole('combobox', { name: 'Work location' }).first();
    await s.tap(loc);
    await s.tap(s.page.getByRole('option', { name: 'In shop' }));
    await s.shot('mech-sched-location', { at: { 1: loc } });
    const times = scope.locator('input[type=time]');
    await times.nth(0).fill('08:00');
    await times.nth(1).fill('16:30');
    await s.page.evaluate(() => document.activeElement && document.activeElement.blur());
    await s.shot('mech-sched-times', { at: { 1: times.nth(0), 2: times.nth(1) }, place: { 1: 'below', 2: 'below' } });
    const save = scope.getByRole('button', { name: 'Save draft' });
    await save.evaluate((e) => e.scrollIntoView({ block: 'end' }));
    await s.wait(600);
    await s.shot('mech-sched-submit', { scroll: false, at: { 1: save, 2: scope.getByRole('button', { name: 'Submit', exact: true }) } });
    await s.close();
  },
};
