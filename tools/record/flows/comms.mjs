// KART Comms as Alex Mechanic: a message to Remote Support typed (not sent).
export default {
  shots: ['gen-trouble-comms'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/comms');
    await s.mustReload(s.page.getByText('Remote Support').first(), 60000);
    await s.settle(800);
    const thread = s.page.getByRole('button').filter({ hasText: /^Remote Support/ });
    if (await s.pick(thread)) { await s.tap(thread); await s.settle(600); }
    const box = s.page.getByPlaceholder(/Type a message/);
    await s.type(box, 'Kart 307 shows Repair Required but the bumper is fitted');
    await s.shot('gen-trouble-comms', { scroll: false, at: { 1: s.page.getByText('Remote Support').first() }, place: { 1: 'right' } });
    await s.close();
  },
};
