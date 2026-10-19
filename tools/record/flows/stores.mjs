// Stores as Alex Mechanic: search, filters, a stock row, Adjust stock, Add to order list, One-time need.
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
    await s.shot('mech-stores-adjust', { at: { 1: row.getByRole('button', { name: 'Adjust' }) } });
    await s.type(search, '');
    await s.tap(s.page.getByRole('combobox').filter({ hasText: 'All kart classes' }));
    await s.tap(s.page.getByRole('option', { name: 'Cadet' }));
    await s.settle(500);
    await s.shot('mech-stores-filter', { at: { 1: s.page.getByRole('combobox').filter({ hasText: /Cadet|All kart classes/ }), 2: s.page.getByText('Needs reordering only') } });
    await s.tap(s.page.getByRole('combobox').filter({ hasText: 'Cadet' }));
    await s.tap(s.page.getByRole('option', { name: 'All kart classes' }));
    // Adjust stock
    await s.tap(row.getByRole('button', { name: 'Adjust' }));
    const dlg = s.dialog;
    await dlg.getByText(/^Adjust stock/).first().waitFor();
    const stockInput = dlg.locator('input[type=number]').first();
    await s.type(stockInput, '6');
    await s.shot('mech-stores-adjust-stock', { scroll: false, at: { 1: dlg.getByText(/^Adjust stock/), 2: stockInput } });
    await s.tap(dlg.getByRole('combobox').first());
    await s.shot('mech-stores-adjust-reason', { scroll: false, at: { 1: dlg.getByText('Reason', { exact: true }) } });
    await s.tap(s.page.getByRole('option', { name: 'Stock count' }));
    await s.type(dlg.locator('textarea, input:not([type=number])').last(), 'Weekly count');
    await s.shot('mech-stores-adjust-save', { scroll: false, at: { 1: dlg.getByText('Comment', { exact: true }), 2: dlg.getByRole('button', { name: 'Save' }) } });
    await s.tap(dlg.getByRole('button', { name: 'Save' }));
    await s.settle(800);
    // Add to order list
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
  },
};
