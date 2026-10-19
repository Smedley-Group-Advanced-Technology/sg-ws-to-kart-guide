// Race to Chassis on today's Demo Practice Day as Alex Mechanic: opening it from Event Operations, the drag and
// drop clip and GIF on a tablet (Cadet class), a reassignment, Take off chassis, and a past event.

export async function openR2C(s, event = 'Demo Practice Day', shots = {}) {
  await s.goto('/events');
  await s.mustReload(s.page.getByText(event, { exact: true }), 60000);
  await s.settle(600);
  if (shots.pick) await s.shot(shots.pick, { at: { 1: s.page.getByText(event, { exact: true }) } });
  await s.tap(s.page.getByText(event, { exact: true }));
  const dlg = s.dialog;
  await dlg.getByText('Race to Chassis', { exact: true }).waitFor();
  await s.wait(600);
  if (shots.action) await s.shot(shots.action, { scroll: false, at: { 1: dlg.getByText('Race to Chassis', { exact: true }) } });
  await s.tap(dlg.getByText('Race to Chassis', { exact: true }));
  await s.page.waitForURL(/r2c/);
  await s.mustReload(s.page.getByText('Race to Chassis Assignment'), 60000);
  await s.settle(1200);
}
export const slot = (s, n) => s.page.locator(`[data-testid="r2c-dd-slot-${n}"]`);
export const race = (s, n) => s.page.locator(`[data-testid="r2c-dd-race-${n}"]`);

export default {
  shots: ['mech-r2c-pick-event', 'mech-r2c-action', 'mech-r2c-dd-view', 'mech-r2c-drag-clip', 'mech-r2c-drag-gif', 'mech-r2c-marked',
    'mech-r2c-unavailable', 'mech-r2c-cancel', 'mech-r2c-takeoff', 'mech-r2c-reassign', 'mech-r2c-reassign-save', 'mech-r2c-past'],
  reset: true,
  async run({ open, reset, clip, gif }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await openR2C(s, 'Demo Practice Day', { pick: 'mech-r2c-pick-event', action: 'mech-r2c-action' });
    await s.tap(s.page.locator('[data-testid="r2c-class-Cadet"]'));
    await s.settle(800);
    await s.shot('mech-r2c-dd-view', { scroll: false, at: { 1: s.page.getByText('Race to Chassis Assignment'),
      2: s.page.getByText('Race Number', { exact: true }), 3: s.page.getByText('Chassis Number', { exact: true }) } });
    s.cue();                                                    // Drag a race number onto a chassis.
    const g0 = s.now();
    await s.drag(race(s, 5), slot(s, 4));
    const g1 = s.now();
    s.cue();                                                    // KART marks the chassis used for today.
    const tm = await s.toast(/marked used/);
    await s.shot('mech-r2c-marked', { scroll: false, wait: 200, at: { 1: tm, 2: tm.locator('button', { hasText: 'Undo' }) } });
    await s.wait(2500);
    s.cue();                                                    // An unavailable chassis asks for a reason.
    await s.drag(race(s, 6), slot(s, 7));
    await s.page.getByText(/is not available/).first().waitFor({ timeout: 30000 });
    await s.wait(800);
    await s.shot('mech-r2c-unavailable', { scroll: false, at: { 1: s.dialog.getByText(/is not available/).first(),
      2: s.page.getByText(/4 to 500 characters/).first(), 3: s.page.locator('[data-testid="r2c-gate-confirm"]') }, optional: [2] });
    await s.shot('mech-r2c-cancel', { scroll: false, at: { 1: s.page.getByRole('button', { name: 'Cancel' }) } });
    await s.tap(s.page.getByRole('button', { name: 'Cancel' }));
    await s.drag(race(s, 6), slot(s, 3));
    await s.wait(1500);
    s.cue();                                                    // Drag the number back to take it off.
    await s.drag(slot(s, 3), s.page.locator('[data-testid="r2c-dd-pool"]'));
    await s.wait(3000);
    const r = await s.close();
    clip('mech-r2c-drag-clip', r, { poster: 1 });
    gif('mech-r2c-drag-gif', r, { start: g0 - 400, end: g1 + 900 });

    // Take off chassis, a reassignment and a past event (fresh world, screenshots only)
    reset([]);
    const q = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await openR2C(q);
    await q.tap(q.page.locator('[data-testid="r2c-class-Cadet"]'));
    await q.settle(800);
    await q.tap(slot(q, 1));
    await q.wait(800);
    await q.shot('mech-r2c-takeoff', { scroll: false, at: { 1: q.page.getByText('Take off chassis').first() } });
    await q.page.keyboard.press('Escape');
    await q.tap(slot(q, 1)).catch(() => {});
    await q.wait(500);
    await q.drag(race(q, 2), slot(q, 3));
    await q.page.getByText('Logged. Why did the race number change chassis?').first().waitFor({ timeout: 30000 });
    await q.wait(600);
    await q.shot('mech-r2c-reassign', { scroll: false });
    const dlg = q.dialog;
    await q.tap(dlg.getByRole('combobox').first());
    await q.tap(q.page.getByRole('option').first());
    await q.shot('mech-r2c-reassign-save', { scroll: false, at: { 1: dlg.getByRole('button', { name: 'Save reason' }), 2: q.page.locator('[data-testid="r2c-reassignments"]') } });
    await q.tap(dlg.getByRole('button', { name: 'Save reason' }));
    await q.wait(800);
    await openR2C(q, 'Demo Club Night');
    await q.shot('mech-r2c-past', { scroll: false, at: { 1: q.page.getByText(/Past Event - Editing Restricted/).first() } });
    await q.close();
  },
};
