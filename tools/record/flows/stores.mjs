// Stores as Alex Mechanic: search, filters, a stock row, Add to order list, One-time need; Adjust stock as Morgan Manager
// (only hub managers and admins adjust stock since KART MF-14).
export default {
  shots: ['mech-stores-tab', 'so-day-10-order', 'mech-stores-search', 'mech-stores-filter', 'mech-stores-row', 'mech-stores-adjust',
    'mech-stores-adjust-stock', 'mech-stores-adjust-reason', 'mech-stores-adjust-save', 'mech-stores-order', 'mech-stores-onetime'],
  reset: true,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/workshop/parts');
    await s.mustReload(s.page.getByText('Brake pads (pair)', { exact: true }), 60000);
    const tab = (name) => s.page.locator('a,button,[role=tab]').filter({ hasText: new RegExp(`^\\s*${name}\\s*$`) });
    await s.shot('mech-stores-tab', { scroll: false, at: { 1: tab('Stores'), 2: s.page.getByRole('tab', { name: 'Parts', exact: true }), 3: s.page.getByRole('tab', { name: 'Consumables' }) } });
    const row = s.page.locator('tr').filter({ hasText: 'Brake pads (pair)' });
    const orderBtn = row.locator('button:has(svg.lucide-package-plus)');
    await s.shot('so-day-10-order', { at: { 1: orderBtn } });
    const search = s.page.getByPlaceholder('Search name, FKL number or MPN');
    await s.type(search, 'brake pad');
    await s.settle(500);
    await s.shot('mech-stores-search', { at: { 1: search, 2: row.getByText(/FKL-900003/) } });
    await s.shot('mech-stores-row', { at: { 1: s.page.getByRole('columnheader', { name: 'Location' }), 2: s.page.getByRole('columnheader', { name: 'Stock', exact: true }) } });
    await s.type(search, '');
    await s.tap(s.page.getByRole('combobox').filter({ hasText: 'All kart classes' }));
    await s.tap(s.page.getByRole('option', { name: 'Cadet' }));
    await s.settle(500);
    await s.shot('mech-stores-filter', { at: { 1: s.page.getByRole('combobox').filter({ hasText: /Cadet|All kart classes/ }), 2: s.page.getByText('Needs reordering only') } });
    await s.tap(s.page.getByRole('combobox').filter({ hasText: 'Cadet' }));
    await s.tap(s.page.getByRole('option', { name: 'All kart classes' }));
    // Add to order list
    const dlg = s.dialog;
    await s.tap(orderBtn);
    await dlg.getByText(/^Add to order list/).first().waitFor();
    const qty = dlg.locator('input[type=number]').first();
    await s.type(qty, '4');
    await s.shot('mech-stores-order', { scroll: false, at: { 1: dlg.getByText(/^Add to order list/), 2: qty } });
    await s.page.keyboard.press('Escape');
    await s.wait(500);
    // One-time need
    await s.tap(row.getByRole('button', { name: 'One-time need' }));
    await dlg.getByText(/^One-time need/).first().waitFor();
    await s.type(dlg.locator('#one-time-reason'), 'Junior caliper seal upgrade');
    await s.shot('mech-stores-onetime', { scroll: false, at: { 1: dlg.getByText(/^One-time need/), 2: dlg.locator('#one-time-reason') } });
    await s.page.keyboard.press('Escape');
    await s.close();

    // Adjust stock as Morgan Manager (saved: the count becomes 6)
    const m = await open({ persona: 'Morgan Manager', device: 'tablet' });
    await m.goto('/workshop/parts');
    await m.mustReload(m.page.getByText('Brake pads (pair)', { exact: true }), 60000);
    const mrow = m.page.locator('tr').filter({ hasText: 'Brake pads (pair)' });
    await m.type(m.page.getByPlaceholder('Search name, FKL number or MPN'), 'brake pad');
    await m.settle(500);
    await m.shot('mech-stores-adjust', { at: { 1: mrow.getByRole('button', { name: 'Adjust' }) } });
    // Adjust stock
    await m.tap(mrow.getByRole('button', { name: 'Adjust' }));
    const mdlg = m.dialog;
    await mdlg.getByText(/^Adjust stock/).first().waitFor();
    const stockInput = mdlg.locator('input[type=number]').first();
    await m.type(stockInput, '6');
    await m.shot('mech-stores-adjust-stock', { scroll: false, at: { 1: mdlg.getByText(/^Adjust stock/), 2: stockInput } });
    await m.tap(mdlg.getByRole('combobox').first());
    await m.shot('mech-stores-adjust-reason', { scroll: false, at: { 1: mdlg.getByText('Reason', { exact: true }) } });
    await m.tap(m.page.getByRole('option', { name: 'Stock count' }));
    await m.type(mdlg.locator('textarea, input:not([type=number])').last(), 'Weekly count');
    await m.shot('mech-stores-adjust-save', { scroll: false, at: { 1: mdlg.getByText('Comment', { exact: true }), 2: mdlg.getByRole('button', { name: 'Save' }) } });
    await m.tap(mdlg.getByRole('button', { name: 'Save' }));
    await m.settle(800);
    await m.close();
  },
};
