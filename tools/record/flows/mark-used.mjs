// Marking karts used: Morgan Manager marks Bambino 101 used on its tile and undoes it (clip + GIF + screenshots),
// then Race to Chassis marks chassis 04 used; Alex Mechanic undoes a mistaken mark used on the 101 kart page.
import { kartId } from '../lib/config.mjs';
import { asPersona } from '../lib/db.mjs';
import { openR2C, slot, race } from './race-to-chassis.mjs';

export default {
  shots: ['mech-mark-used-clip', 'mech-used-tile', 'mech-used-toast', 'mech-used-undo-gif', 'mech-used-undo-button',
    'mech-used-undo-dialog', 'mech-used-undone'],
  reset: true,
  async run({ open, reset, clip, gif }) {
    const s = await open({ persona: 'Morgan Manager', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload(s.page.getByText('Bambino Karts (6)'), 60000);
    await s.settle(800);
    await s.scrollTo(s.page.getByText('Bambino Karts (6)'), { block: 'start' });
    const t101 = s.tile('#101', 'Available');
    const btn = t101.getByRole('button', { name: 'Requires service' });
    await s.shot('mech-used-tile', { scroll: false, at: { 1: t101, 2: btn } });
    await s.wait(600);
    s.cue();                                                    // Hub managers can mark a kart used on its tile.
    await s.hover(btn);
    await s.wait(1200);
    const g0 = s.now();
    await s.tap(btn);
    s.cue();                                                    // KART confirms and offers Undo.
    const tk = await s.toast('Kart marked as requiring service');
    await s.shot('mech-used-toast', { scroll: false, wait: 200, at: { 1: tk, 2: tk.locator('button', { hasText: 'Undo' }) } });
    await s.wait(1200);
    s.cue();                                                    // Undo puts the kart back as it was.
    await s.tap(tk.locator('button', { hasText: 'Undo' }));
    await s.page.getByText('Mark used undone').first().waitFor({ timeout: 30000 });
    await s.wait(1500);
    const g1 = s.now();
    await s.wait(1200);
    s.cue();                                                    // On the event day, Race to Chassis marks karts used for you.
    await s.skip(async () => {
      await openR2C(s);
      await s.tap(s.page.locator('[data-testid="r2c-class-Bambino"]'));
      await s.settle(800);
    });
    await s.drag(race(s, 8), slot(s, 4));
    s.cue();                                                    // They stay Ready today and need a service after the event.
    await s.page.getByText(/marked used/).first().waitFor({ timeout: 30000 });
    await s.wait(4500);
    const r = await s.close();
    clip('mech-mark-used-clip', r, { poster: 1 });
    gif('mech-used-undo-gif', r, { start: g0 - 300, end: g1 });

    // a mistaken mark used on 101, undone on the kart page by Alex Mechanic
    reset([]);
    asPersona('Morgan Manager', `select public.ws_mark_kart_used('${kartId(101)}');`);
    const a = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await a.goto(`/workshop/kart/${kartId(101)}`);
    const undo = a.page.getByRole('button', { name: 'Undo mark used' });
    await a.mustReload(undo, 60000);
    await a.shot('mech-used-undo-button', { at: { 1: undo } });
    await a.tap(undo);
    await a.page.getByText('Undo mark used?').first().waitFor();
    await a.wait(500);
    await a.shot('mech-used-undo-dialog', { scroll: false, at: { 1: a.page.getByText('Undo mark used?') } });
    await a.tap(a.dialog.getByRole('button', { name: 'Undo mark used' }));
    const tu = await a.toast('Mark used undone');
    await a.shot('mech-used-undone', { scroll: false, wait: 200, at: { 1: tu } });
    await a.close();
  },
};
