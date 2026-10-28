// Race to Chassis chassis list on a phone as Alex Mechanic (KART MF-11): race number 7 onto Kart 302 (Junior chassis
// 02), then Kart 303's picker (07 grey) and race number 7 again to show the Move question (cancelled), then the view switch.
import { openR2C } from './race-to-chassis.mjs';

export default {
  shots: ['mech-r2c-list-clip', 'mech-r2c-list', 'mech-r2c-list-picker', 'mech-r2c-list-move', 'mech-r2c-switch'],
  reset: true,
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'phone', record: true });
    await openR2C(s);
    await s.mustReload(s.page.locator('[data-testid="r2c-class-Junior"]'), 60000);
    await s.tap(s.page.locator('[data-testid="r2c-class-Junior"]'));
    const list = s.page.locator('[data-testid="r2c-list"]');
    await list.waitFor();
    await s.settle(800);
    s.cue();                                                    // On a phone, the chassis list opens.
    const heading = s.page.getByText(/^Session \d+ · Junior$/).first();
    const row2 = s.page.locator('[data-testid="r2c-row-2"]');
    await s.scrollTo(heading, { block: 'start' });
    await s.shot('mech-r2c-list', { scroll: false, at: { 1: heading, 2: row2 } });
    await s.shot('mech-r2c-switch', { scroll: false, at: { 1: s.page.locator('[data-testid="r2c-view-dragdrop"]') } });
    await s.wait(1500);
    s.cue();                                                    // Tap the chassis, then its race number.
    await s.tap(row2);
    const picker = s.page.locator('[data-testid="r2c-race-picker"]');
    await picker.waitFor();
    await s.wait(700);
    await s.tap(s.page.locator('[data-testid="r2c-race-7"]'));
    const confirm = s.page.locator('[data-testid="r2c-confirm"]');
    if (await confirm.isVisible({ timeout: 1500 }).catch(() => false)) await s.tap(confirm);
    await s.page.getByText(/marked used/).first().waitFor({ timeout: 15000 }).catch(() => {});
    await s.wait(2500);
    s.cue();                                                    // A number another kart has asks before it moves.
    await s.tap(s.page.locator('[data-testid="r2c-row-3"]'));
    await picker.waitFor();
    await s.wait(700);
    await s.shot('mech-r2c-list-picker', { scroll: false, at: { 1: s.dialog.getByText('Tap the race number this kart runs with.', { exact: false }).first(), 2: picker } });
    await s.tap(s.page.locator('[data-testid="r2c-race-7"]'));
    const moveTitle = s.page.getByText(/^Move race number 07 to Kart 303\?/).first();
    await moveTitle.waitFor({ timeout: 15000 });
    await s.wait(700);
    await s.shot('mech-r2c-list-move', { scroll: false, at: { 1: moveTitle } });
    await s.wait(1500);
    await s.tap(s.page.getByRole('button', { name: 'Cancel' }).last());
    await s.wait(900);
    if (await picker.isVisible().catch(() => false)) { await s.page.keyboard.press('Escape'); await s.wait(700); }
    s.cue();                                                    // Switch views with the button at the bottom.
    await s.tap(s.page.locator('[data-testid="r2c-view-dragdrop"]'));
    await s.wait(2500);
    await s.tap(s.page.locator('[data-testid="r2c-view-grid"]'));
    await s.wait(2500);
    const r = await s.close();
    clip('mech-r2c-list-clip', r, { poster: 2 });
  },
};
