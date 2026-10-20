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
    'mech-r2c-unavailable', 'mech-r2c-cancel'],
  reset: true,
  async run({ open, reset, clip, gif }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await openR2C(s, 'Demo Practice Day', { pick: 'mech-r2c-pick-event', action: 'mech-r2c-action' });
    await s.tap(s.page.locator('[data-testid="r2c-class-Junior"]'));
    await s.settle(800);
    await s.shot('mech-r2c-dd-view', { scroll: false, at: { 1: s.page.getByText('Race to Chassis Assignment'),
      2: s.page.getByText('Race Number', { exact: true }), 3: s.page.getByText('Chassis Number', { exact: true }) } });
    s.cue();                                                    // Drag a race number onto a chassis.
    const g0 = s.now();
    await s.drag(race(s, 5), slot(s, 1));
    const g1 = s.now();
    s.cue();                                                    // KART marks the chassis used for today.
    await s.toastShot('mech-r2c-marked', /marked used/, 'Undo');
    await s.wait(2500);
    s.cue();                                                    // An unavailable chassis asks for a reason.
    await s.drag(race(s, 6), slot(s, 7));
    await s.page.getByText(/is not available/).first().waitFor({ timeout: 30000 });
    await s.wait(800);
    await s.shot('mech-r2c-unavailable', { scroll: false, at: { 1: s.dialog.getByText(/is not available/).first(),
      2: s.page.getByText(/4 to 500 characters/).first(), 3: s.page.locator('[data-testid="r2c-gate-confirm"]') }, optional: [2] });
    await s.shot('mech-r2c-cancel', { scroll: false, at: { 1: s.page.getByRole('button', { name: 'Cancel' }) } });
    await s.tap(s.page.getByRole('button', { name: 'Cancel' }));
    await s.drag(race(s, 6), slot(s, 2));
    await s.wait(1500);
    s.cue();                                                    // Drag the number back to take it off.
    await s.drag(slot(s, 2), s.page.locator('[data-testid="r2c-dd-pool"]'));
    await s.wait(3000);
    const r = await s.close();
    clip('mech-r2c-drag-clip', r, { poster: 1 });
    gif('mech-r2c-drag-gif', r, { start: g0 - 400, end: g1 + 900 });

  },
};
