// A blocked check and Pause and switch on Cadet 203 / 204 (screenshots and the cycle GIF). Alex Mechanic, tablet.
import { tab, lane, kartButton } from './service-turn.mjs';

export default {
  shots: ['mech-svc-cycle-gif', 'mech-svc-blocked', 'mech-svc-blocked-save', 'mech-svc-switch', 'mech-svc-switched', 'start-tablet-landscape', 'so-day-5-queue'],
  reset: true,
  async run({ open, gif }) {
    // ---------- part A: blocked check, Pause and switch ----------
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop/repairs');
    await s.mustReload('text=Requires service', 60000);
    await s.shot('start-tablet-landscape', { at: { 1: lane(s, 'Requires service') } });
    await s.shot('so-day-5-queue', { at: { 1: lane(s, 'Requires service') } });
    await s.tap(kartButton(s, '203'));
    await s.tap(s.dialog.getByRole('button', { name: 'Start service' }));
    await s.page.waitForURL(/in-service/);
    await s.settle(800);
    const cell = s.page.getByRole('button', { name: 'Unchecked' }).first();
    await s.mustReload(cell);
    await s.scrollTo(cell);
    await s.wait(800);
    const g0 = s.now();
    await s.tap(cell, { pause: 1300 });
    await s.tap(s.page.getByRole('button', { name: 'Good' }).first(), { pause: 1800 });
    const g1 = s.now();
    await s.page.getByText('Why is this blocked?').first().waitFor();
    await s.shot('mech-svc-blocked', { scroll: false });
    const dlg = s.dialog;
    await s.type(dlg.locator('textarea').first(), 'Hairline crack near the seat mount');
    await s.shot('mech-svc-blocked-save', { scroll: false, at: { 1: dlg.getByRole('button', { name: 'Save reason' }) } });
    await s.tap(dlg.getByRole('button', { name: 'Save reason' }));
    await s.tap(tab(s, 'Service Queue'));
    await s.mustReload('text=Requires service', 40000);
    await s.settle(600);
    await s.tap(kartButton(s, '204'));
    await s.tap(s.dialog.getByRole('button', { name: 'Start service' }));
    await s.page.getByText('You already have a kart in service').first().waitFor({ timeout: 45000 });
    await s.shot('mech-svc-switch', { scroll: false, at: { 2: 'role=button[name="Pause and switch"]' } });
    await s.tap('role=button[name="Pause and switch"]');
    await s.page.waitForURL(/in-service/);
    await s.settle(800);
    await s.must(s.page.getByText('Cadet 204', { exact: true }), { timeout: 60000 }).catch(() => s.log('  204 not shown in service'));
    await s.shot('mech-svc-switched', { scroll: false, at: { 1: s.page.getByText(/^Paused services$/i).first() } });
    const r = await s.close();
    gif('mech-svc-cycle-gif', r, { start: g0 - 300, end: g1 + 1200 });

  },
};
