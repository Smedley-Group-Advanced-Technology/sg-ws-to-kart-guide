// How problems look on the board, as Casey Mechanic (normal demo world). Read only.
export default {
  shots: ['start-problem-106', 'start-problem-207'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await s.goto('/workshop');
    await s.mustReload('text=Readiness board', 60000);
    await s.settle(800);
    await s.scrollTo(s.page.getByText('Bambino Karts (6)'), { block: 'start' });
    const t106 = s.tile('#106', 'Available');
    await s.shot('start-problem-106', { scroll: false, at: { 1: t106, 2: t106.getByRole('checkbox').first() } });
    await s.scrollTo(s.page.getByText('Cadet Karts (8)'), { block: 'start' });
    const t207 = s.tile('#207', 'Available');
    await s.shot('start-problem-207', { scroll: false, at: { 1: t207, 2: t207.getByText('Reliability', { exact: true }) } });
    await s.close();
  },
};
