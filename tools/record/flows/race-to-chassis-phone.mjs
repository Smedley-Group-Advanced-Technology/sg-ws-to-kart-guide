// Race to Chassis tap grid on a phone as Alex Mechanic: race number 7 onto Junior chassis 02 (Junior 302).
import { openR2C } from './race-to-chassis.mjs';

export default {
  shots: ['mech-r2c-tap-clip', 'mech-r2c-tap-cell', 'mech-r2c-tap-chassis', 'mech-r2c-switch'],
  reset: true,
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'phone', record: true });
    await openR2C(s);
    await s.mustReload(s.page.locator('[data-testid="r2c-grid"]'), 60000);
    await s.tap(s.page.locator('[data-testid="r2c-class-Junior"]'));
    await s.settle(800);
    s.cue();                                                    // On a phone, the tap grid opens.
    await s.shot('mech-r2c-switch', { scroll: false, at: { 1: s.page.locator('[data-testid="r2c-view-dragdrop"]') } });
    await s.wait(2500);
    s.cue();                                                    // Tap the race number cell.
    const cell = s.page.locator('[data-testid="r2c-cell-7-1"]');
    await s.scrollTo(cell);
    await s.shot('mech-r2c-tap-cell', { scroll: false, at: { 1: s.page.getByText('Race #', { exact: true }), 2: cell } });
    await s.tap(cell);
    await s.wait(600);
    s.cue();                                                    // Then tap the chassis it drives.
    const ch = s.page.locator('[data-testid="r2c-chassis-2"]');
    await s.scrollTo(ch);
    await s.shot('mech-r2c-tap-chassis', { scroll: false, at: { 1: s.page.getByText('Tap the chassis this race number drives.') }, place: { 1: 'below' } });
    await s.tap(ch);
    await s.wait(2500);
    s.cue();                                                    // Switch views with the button at the bottom.
    await s.tap(s.page.locator('[data-testid="r2c-view-dragdrop"]'));
    await s.wait(2500);
    await s.tap(s.page.locator('[data-testid="r2c-view-grid"]'));
    await s.wait(2500);
    const r = await s.close();
    clip('mech-r2c-tap-clip', r, { poster: 2 });
  },
};
