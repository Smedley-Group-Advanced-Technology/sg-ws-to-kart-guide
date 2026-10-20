// Campaign task extras as Alex Mechanic: the fit prompt on 302, Unable to complete on 305, and the
// measurement variant on 301.
import { CAMPAIGN } from '../lib/config.mjs';
import { taskId } from '../lib/shots.mjs';

export default {
  shots: ['mech-camp-fitprompt', 'mech-camp-unable', 'mech-camp-measure'],
  reset: true,
  async run({ open, reset }) {
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
    await q.scrollTo(q.page.getByText('Reason (required)'));
    await q.shot('mech-camp-unable', { scroll: false, at: { 1: q.page.getByRole('button', { name: /Unable to complete/ }) } });
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
