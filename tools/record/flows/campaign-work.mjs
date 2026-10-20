// Campaign work: the Junior caliper seal upgrade on 301 (clip + screenshots), the fit prompt on 302,
// Unable to complete on 305, and the measurement variant. Alex Mechanic, tablet.
import { CAMPAIGN } from '../lib/config.mjs';
import { taskId } from '../lib/shots.mjs';
import { tab } from './service-turn.mjs';

const row = (s, kart) => s.page.locator('a,button,[role=link]').filter({ hasText: new RegExp(`^\\s*Junior ${kart}\\b`) });

export default {
  shots: ['mech-campaign-clip', 'mech-camp-tab', 'so-day-8-campaign', 'mech-camp-pick', 'mech-camp-start', 'mech-camp-fit',
    'mech-camp-complete', 'mech-camp-fitprompt', 'mech-camp-unable', 'mech-camp-measure'],
  reset: true,
  async run({ open, reset, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop');
    await s.mustReload('text=Readiness board', 60000);
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

    // 302: Complete work without fitting the part
    const q = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await q.goto(`/workshop/campaigns/${CAMPAIGN}/tasks/${taskId('302')}`);
    await q.tap('role=button[name="Start work"]');
    await q.settle(800);
    await q.tap(q.page.getByRole('button', { name: 'Complete work', exact: true }));
    await q.must('text=Fit and complete');
    await q.shot('mech-camp-fitprompt', { scroll: false });
    await q.page.keyboard.press('Escape');
    // 305: Unable to complete
    await q.goto(`/workshop/campaigns/${CAMPAIGN}/tasks/${taskId('305')}`);
    await q.tap('role=button[name="Start work"]');
    await q.settle(800);
    await q.tap(q.page.getByRole('button', { name: /Unable to complete/ }));
    await q.wait(800);
    await q.shot('mech-camp-unable', { scroll: false, at: { 1: q.dialog.getByText(/Unable to complete/).first() } });
    await q.close();

    // the same campaign with a required measurement
    reset(['campaign_measure']);
    const m = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await m.goto(`/workshop/campaigns/${CAMPAIGN}/tasks/${taskId('301')}`);
    await m.tap('role=button[name="Start work"]');
    await m.settle(800);
    const inp = m.card('Required measurement: Caliper piston clearance').locator('input').first();
    await m.type(inp, '0.25').catch(() => {});
    await m.shot('mech-camp-measure', { at: { 1: m.page.getByRole('button', { name: 'Record measurement' }) } });
    await m.close();
  },
};
