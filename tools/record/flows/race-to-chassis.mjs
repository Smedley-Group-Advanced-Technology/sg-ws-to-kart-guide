// Race to Chassis on today's Demo Practice Day as Alex Mechanic: opening it from Event Operations, the drag and
// drop clip and GIF on a tablet (Junior class) with a refused chassis (Junior 307, open damage ticket), and the refusal
// for a kart set not Available by hand (Junior 304).
import { HUB } from '../lib/config.mjs';
import { asPersona } from '../lib/db.mjs';

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
    s.cue();                                                    // A chassis that is not available is refused, with the reason.
    await s.drag(race(s, 6), slot(s, 7));
    const refusal = s.page.locator('[data-testid="r2c-refusal"]');
    await refusal.getByText(/is not available/).first().waitFor({ timeout: 30000 });
    await refusal.locator('[data-testid="r2c-refusal-reasons"]').waitFor({ timeout: 30000 });
    await s.wait(800);
    await s.shot('mech-r2c-unavailable', { scroll: false, at: { 1: refusal.getByText(/is not available/).first() } });
    await s.wait(1200);
    await s.tap(s.page.locator('[data-testid="r2c-refusal-close"]'));
    await refusal.waitFor({ state: 'detached', timeout: 30000 }).catch(() => {});
    await s.drag(race(s, 6), slot(s, 2));
    await s.wait(1500);
    s.cue();                                                    // Drag the number back to take it off.
    await s.drag(slot(s, 2), s.page.locator('[data-testid="r2c-dd-pool"]'));
    // dropped back on the race numbers: the same confirmation as tapping the chassis
    await s.tap(s.dialog.getByRole('button', { name: 'Take off chassis' }));
    await s.page.locator('[data-testid="r2c-dd-slot-2"][data-race=""]').waitFor({ timeout: 30000 });
    await s.wait(2500);
    const r = await s.close();
    clip('mech-r2c-drag-clip', r, { poster: 1 });
    gif('mech-r2c-drag-gif', r, { start: g0 - 400, end: g1 + 900 });

    // MF-12(ii): Junior 304 set not Available by hand on Kart Availability (no ticket): the refusal offers
    // Set available manually, which opens Kart Availability (the reset drops the lock again)
    asPersona('Morgan Manager', `SELECT public.set_kart_availability_override('${HUB}', 'Junior', 4, 'manual_available_override', false);`);
    const m = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await openR2C(m);
    await m.tap(m.page.locator('[data-testid="r2c-class-Junior"]'));
    await m.settle(800);
    await m.page.locator('[data-testid="r2c-dd-chassis-label-4"]').waitFor({ timeout: 30000 });
    await m.wait(1000);
    await m.drag(race(m, 6), slot(m, 4));
    await m.page.locator('[data-testid="r2c-refusal-override"]').waitFor({ timeout: 30000 });
    await m.wait(800);
    await m.shot('mech-r2c-cancel', { scroll: false });
    await m.tap(m.page.locator('[data-testid="r2c-refusal-close"]'));
    await m.close();

  },
};
