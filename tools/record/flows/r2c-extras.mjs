// Race to Chassis extras as Alex Mechanic: Take off chassis, a reassignment and a past event (screenshots only).
import { openR2C, slot, race } from './race-to-chassis.mjs';

export default {
  shots: ['mech-r2c-takeoff', 'mech-r2c-reassign', 'mech-r2c-reassign-save', 'mech-r2c-past'],
  // the reassignment question only comes when the server logs a reassignment (not always reproducible locally)
  optional: ['mech-r2c-reassign', 'mech-r2c-reassign-save'],
  reset: true,
  async run({ open }) {
    // Take off chassis, a reassignment and a past event (fresh world, screenshots only)
    const q = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await openR2C(q);
    await q.tap(q.page.locator('[data-testid="r2c-class-Cadet"]'));
    await q.settle(800);
    await q.tap(slot(q, 1));
    await q.wait(800);
    await q.shot('mech-r2c-takeoff', { scroll: false, at: { 1: q.page.getByText('Take off chassis').first() } });
    await q.page.keyboard.press('Escape');
    await q.wait(400);
    // a fresh grid for the reassignment (the take off menu leaves chassis 01 selected)
    await openR2C(q);
    await q.tap(q.page.locator('[data-testid="r2c-class-Cadet"]'));
    await q.settle(800);
    try {
      await q.drag(race(q, 2), slot(q, 3));
      await q.page.getByRole('dialog').getByText('Chassis reassignment', { exact: true }).waitFor({ timeout: 30000 });
      await q.wait(600);
      await q.shot('mech-r2c-reassign', { scroll: false });
      const dlg = q.dialog;
      await q.tap(dlg.getByRole('combobox').first());
      await q.tap(q.page.getByRole('option').first());
      await q.shot('mech-r2c-reassign-save', { scroll: false, at: { 1: dlg.getByRole('button', { name: 'Save reason' }), 2: q.page.locator('[data-testid="r2c-reassignments"]') } });
      await q.tap(dlg.getByRole('button', { name: 'Save reason' }));
      await q.wait(800);
    } catch (e) { q.log(`  no reassignment question this time: ${String(e).slice(0, 100)}`); await q.page.keyboard.press('Escape'); }
    await openR2C(q, 'Demo Club Night');
    await q.shot('mech-r2c-past', { scroll: false, at: { 1: q.page.getByText(/Past Event - Editing Restricted/).first() } });
    await q.close();
  },
};
