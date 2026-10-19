// Select your Hub as a mechanic: dropdown, cards, locked hub and Request Access, browser mock frames.
export default {
  shots: ['start-hub-dropdown', 'start-hub-cards', 'home-hub-selection', 'so-before-card', 'so-day-2-freeze', 'mech-r2c-events',
    'start-a2hs-open', 'start-a2hs-menu', 'start-locked-hub', 'start-request-access-dialog', 'start-request-access-sent'],
  reset: true,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/hub-selection');
    await s.page.evaluate(() => localStorage.removeItem('selected-hub'));
    await s.goto('/hub-selection');
    await s.shot('start-a2hs-open', { frame: { tabs: ['KART'], url: 'localhost:9080/hub-selection' } });
    await s.shot('start-a2hs-menu', {
      frame: { tabs: ['KART'], url: 'localhost:9080/hub-selection', menu: ['New tab', 'Bookmarks', 'Add to Home Screen', 'Share', 'Settings'] },
      at: { 1: 'mock:Add to Home Screen' },
    });
    await s.tap('role=combobox');
    await s.shot('start-hub-dropdown', { at: { 2: 'css=button[role=combobox]' } });
    await s.shot('start-locked-hub', { at: { 1: 'role=option[name=/Demo Hub North/]' } });
    await s.tap(s.page.getByRole('option', { name: 'Demo Hub', exact: true }));
    await s.shot('start-hub-cards', { at: { 1: 'h3:text-is("Workshop")', 2: 'h3:text-is("Technical")', 3: 'h3:text-is("Event Operations")' } });
    await s.shot('home-hub-selection', { at: { 2: 'h3:text-is("Workshop")' } });
    await s.shot('so-before-card', { at: { 1: 'h3:text-is("Workshop")' } });
    await s.shot('so-day-2-freeze');
    await s.shot('mech-r2c-events', { at: { 1: 'h3:text-is("Event Operations")' } });
    // a hub without access: choose it, tap a card, KART asks for access
    await s.tap('role=combobox');
    await s.tap(s.page.getByRole('option', { name: /Demo Hub North/ }));
    await s.tap('h3:text-is("Technical")');
    await s.must('text=Hub Access Required');
    await s.shot('start-request-access-dialog');
    await s.tap(s.dialog.getByRole('button', { name: 'Request Access' }));
    const ts = await s.toast('Access request sent successfully');
    await s.shot('start-request-access-sent', { scroll: false, wait: 200, at: { 1: ts } });
    await s.close();
  },
};
