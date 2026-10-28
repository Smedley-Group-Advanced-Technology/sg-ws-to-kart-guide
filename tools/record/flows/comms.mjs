// KART Comms as Alex Mechanic: a question to AI Support typed (not sent; the local stack has no OpenAI key).
export default {
  shots: ['gen-trouble-comms'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/comms');
    await s.mustReload(s.page.getByRole('button', { name: 'AI Support' }), 60000);
    await s.settle(800);
    await s.tap(s.page.getByRole('button', { name: 'AI Support' }));
    await s.settle(800);
    const box = s.page.locator('textarea').last();
    await s.type(box, 'Kart 307 shows Repair Required but the bumper is fitted');
    await s.shot('gen-trouble-comms', { scroll: false, at: { 1: s.page.getByText('AI Support').first() }, place: { 1: 'right' } });
    await s.close();
  },
};
