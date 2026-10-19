// Pausing Cadet 203 with a reason and resuming Junior 304 (clip and screenshots), Alex Mechanic.
// Then Casey's 205 with repair work running (the spanner in the Paused services bar).
import { kartId } from '../lib/config.mjs';
import { asPersona } from '../lib/db.mjs';
import { tab } from './service-turn.mjs';

export default {
  shots: ['mech-pause-clip', 'mech-pause-button', 'mech-pause-reason', 'mech-pause-comment', 'mech-pause-done', 'mech-resume-bar',
    'mech-resume-open', 'so-day-4-services', 'mech-resume-repair'],
  reset: true,
  async run({ open, clip }) {
    asPersona('Alex Mechanic', `select public.ws_start_turn('${kartId(203)}');`);
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop/in-service');
    await s.mustReload('role=button[name=/^Pause$/]', 60000);
    await s.settle(800);
    const bar = s.page.getByText(/^Paused services$/i);
    await s.shot('so-day-4-services', { scroll: false, at: { 1: bar } });
    s.cue();                                                    // Tap Pause when you stop work.
    await s.shot('mech-pause-button', { scroll: false, at: { 1: s.page.getByRole('button', { name: 'Pause', exact: true }) } });
    await s.tap(s.page.getByRole('button', { name: 'Pause', exact: true }));
    const dlg = s.dialog;
    await dlg.getByText('Pause service').first().waitFor();
    await s.wait(800);
    s.cue();                                                    // Choose a reason.
    await s.tap(dlg.getByRole('combobox').first(), { pause: 900 });
    await s.shot('mech-pause-reason', { scroll: false, at: { 1: s.page.getByText('Pause service', { exact: true }), 2: s.page.getByRole('option', { name: 'Waiting on parts' }) } });
    await s.tap(s.page.getByRole('option', { name: 'End of Shift' }));
    s.cue();                                                    // Add a note for the next mechanic.
    await s.type(dlg.locator('textarea').first(), 'Front brakes bled, rear still to do');
    await s.shot('mech-pause-comment', { scroll: false, at: { 1: dlg.getByText('Comment (optional)') } });
    await s.tap(dlg.getByRole('button', { name: 'Pause', exact: true }));
    await s.skip(() => s.settle(800));
    s.cue();                                                    // Your paused karts wait in the bar.
    const k304 = s.page.locator('button').filter({ hasText: /Junior 304/ });
    await s.hover(k304);
    await s.wait(1200);
    await s.shot('mech-pause-done', { scroll: false, at: { 1: bar } });
    await s.shot('mech-resume-bar', { scroll: false, at: { 1: k304 }, tooltip: k304 });
    s.cue();                                                    // Tap a kart to carry on.
    await s.tap(k304);
    await s.skip(() => s.settle(1000));
    await s.wait(2500);
    await s.shot('mech-resume-open', { scroll: false, at: { 1: s.page.getByText('Junior 304', { exact: true }) } });
    const r = await s.close();
    clip('mech-pause-clip', r, { poster: 3 });

    // Casey: repair work on 205 while its service is open (an incident with a finding gives 205 a repair)
    asPersona('Casey Mechanic', `select public.ws_log_incident('${kartId(205)}', 'Impact', ARRAY['Rear'], 'Rear bumper touched the barrier',
      '[{"issue_type": "Loose", "component_name": "Rear bumper", "notes": "Rear bumper bracket loose", "blocking": false, "parts_required": false}]'::jsonb,
      NULL, NULL, 'Incident', NULL, NULL, NULL);
      select public.ws_start_repair_work(id) from public.workshop_repairs where kart_id = '${kartId(205)}' and status <> 'completed';`);
    const c = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await c.goto('/workshop/in-service');
    await c.mustReload(c.page.getByText(/^Paused services$/i), 60000);
    const k205 = c.page.locator('button').filter({ hasText: /Cadet 205/ });
    await c.hover(k205);
    await c.wait(1500);
    await c.shot('mech-resume-repair', { scroll: false, at: { 1: k205 }, tooltip: k205 });
    await c.close();
  },
};
