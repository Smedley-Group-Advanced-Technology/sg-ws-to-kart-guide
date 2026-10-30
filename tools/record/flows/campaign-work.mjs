// Campaign work: the Junior caliper seal upgrade on 301 (clip + screenshots), the fit prompt on 302,
// Unable to complete on 305, and the measurement variant. Alex Mechanic, tablet.
import { CAMPAIGN } from '../lib/config.mjs';
import { taskId } from '../lib/shots.mjs';
import { tab } from './service-turn.mjs';

const row = (s, kart) => s.page.locator('a,button,[role=link]').filter({ hasText: new RegExp(`^\\s*Kart ${kart}\\b`) });

export default {
  shots: ['mech-campaign-clip', 'mech-camp-tab', 'so-day-8-campaign', 'mech-camp-pick', 'mech-camp-start', 'mech-camp-fit',
    'mech-camp-complete'],
  reset: true,
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload('text=Event readiness', 60000);
    await s.settle(600);
    s.cue();                                                    // Open Campaign work.
    await s.tap(tab(s, 'Campaign work'));
    await s.skip(async () => { await s.must(s.page.getByText(/^Assigned to me/), { timeout: 30000 }); await s.settle(600); });
    await s.shot('mech-camp-tab', { scroll: false, at: { 1: s.page.getByText(/^Assigned to me/), 2: s.page.getByText('All open karts', { exact: true }) } });
    await s.shot('so-day-8-campaign', { scroll: false, at: { 1: s.page.getByText(/^Assigned to me/) } });
    await s.wait(800);
    s.cue();                                                    // Your tasks are under Assigned to me.
    await s.hover(row(s, '301'));
    await s.shot('mech-camp-pick', { scroll: false, at: { 1: row(s, '301') } });
    await s.wait(1500);
    s.cue();                                                    // Open the kart's task and tap Start work.
    await s.tap(row(s, '301'));
    await s.skip(async () => { await s.must('role=button[name="Start work"]', { timeout: 30000 }); await s.settle(600); });
    await s.shot('mech-camp-start', { at: { 1: 'role=button[name="Start work"]' } });
    await s.tap('role=button[name="Start work"]');
    await s.skip(() => s.settle(800));
    s.cue();                                                    // Fit the campaign parts.
    const parts = s.card('Parts fitted');
    await s.scrollTo(parts.getByText('Parts fitted', { exact: true }), { block: 'start' });
    await s.shot('mech-camp-fit', { scroll: false, at: { 1: parts.getByText('Parts fitted', { exact: true }), 2: parts.getByRole('button', { name: /Fit another part/ }) } });
    await s.tap(parts.getByRole('button', { name: 'Fit', exact: true }));
    await s.tap(s.dialog.getByRole('button', { name: 'Confirm' }));
    await s.skip(() => s.settle(800));
    await s.wait(1200);
    s.cue();                                                    // Tap Complete work.
    const done = s.page.getByRole('button', { name: 'Complete work', exact: true });
    await s.scrollTo(done);
    await s.shot('mech-camp-complete', { at: { 1: done } });
    await s.tap(done);
    await s.skip(() => s.settle(1000));
    s.cue();                                                    // The task is done.
    await s.tap(tab(s, 'Campaign work'));
    await s.skip(async () => { await s.must(s.page.getByText(/^Assigned to me/), { timeout: 30000 }); await s.settle(600); });
    await s.wait(3500);
    const r = await s.close();
    clip('mech-campaign-clip', r, { poster: 3 });

  },
};
