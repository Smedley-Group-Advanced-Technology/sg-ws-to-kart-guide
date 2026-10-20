// The 207 repair card with its linked ticket, and resolving the ticket (normal demo world: 207 has its seeded
// stopping ticket). Casey Mechanic, tablet.
export default {
  shots: ['mech-ticket-result', 'so-day-7-tickets', 'mech-ticket-linked', 'mech-ticket-resolve', 'mech-ticket-closed'],
  reset: true,
  async run({ open }) {
    // the repair card and resolving the ticket
    const c = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await c.goto('/workshop/repairs');
    await c.mustReload(c.page.getByText('Cadet 207', { exact: true }), 60000);
    const card = c.page.locator('a,button,[role=button]').filter({ hasText: /^\s*Cadet 207/ }).filter({ hasText: 'Open ticket' });
    await c.scrollTo(card);
    await c.shot('mech-ticket-result', { at: { 1: card.getByText('Cadet 207', { exact: true }), 2: card.getByText('Open ticket', { exact: true }) } });
    await c.shot('so-day-7-tickets', { at: { 1: card.getByText('Open ticket', { exact: true }) } });
    await c.shot('mech-ticket-linked', { at: { 1: card.getByText('Open ticket', { exact: true }) } });
    await c.tap(card);
    await c.must(c.dialog.getByText('Status *'), { timeout: 60000 });
    await c.settle(800);
    await c.tap(c.page.getByRole('radio', { name: 'Resolved' }));
    await c.shot('mech-ticket-resolve', { at: { 1: c.page.getByRole('radio', { name: 'Resolved' }) } });
    await c.tap(c.page.getByRole('button', { name: 'Update Issue' }));
    await c.wait(2500);
    await c.goto('/workshop');
    await c.mustReload('text=Readiness board', 60000);
    const t207 = c.tile('#207', 'Available');
    await c.shot('mech-ticket-closed', { at: { 1: t207 } });
    await c.close();
  },
};
