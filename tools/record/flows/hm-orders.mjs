// Orders as Morgan Manager (desktop): the Order List, the approval queue and Mark ordered (clip), On order on the
// 307 repair card, Add bulk order with a one-time line, and Goods In on the front bumpers order (clip).
import { HUB } from '../lib/config.mjs';
import { asPersona } from '../lib/db.mjs';

export const column = (s, stage) => s.page.locator(`[data-testid="order-column-${stage}"]`);
// the innermost card with the text and a button (the has locator is relative to each card, so it starts from the page)
export const line = (scope, text) => scope.locator('.bg-card, [class*=border]').filter({ hasText: text })
  .filter({ has: scope.page().locator('button') }).last();
const tab = (s, name) => s.page.getByRole('tab', { name, exact: true });

export async function openOrders(s) {
  await s.goto('/workshop/manager?tab=orders');
  await s.mustReload(s.page.getByText('Brake pads (pair)').first(), 60000);
  await s.settle(800);
}

export default {
  shots: ['hm-orders-clip', 'hm-ord-list', 'hm-ord-queue', 'hm-ord-mark', 'hm-ord-onorder', 'hm-ord-bulk',
    'hm-goodsin-clip', 'hm-gi-open', 'hm-gi'],
  reset: true,
  async run({ open, clip }) {
    // a one-time need from Stores (Alex Mechanic), shown as Submitted, marked one-time
    asPersona('Alex Mechanic', `select public.ws_create_stock_order('${HUB}',
      (select id from public.workshop_parts_catalog where manufacturer_part_number = 'DEMO-CSK-01'), 2, 'one_time', 'needed',
      'Junior caliper seal upgrade', NULL);`);

    // ---------- approve and mark ordered, recorded ----------
    const s = await open({ persona: 'Morgan Manager', device: 'desktop', record: true });
    await s.goto('/workshop/manager');
    await s.mustReload(tab(s, 'Order List'), 60000);
    await s.settle(600);
    s.cue();                                                    // Open the Order List.
    await s.tap(tab(s, 'Order List'));
    await s.skip(async () => { await s.mustReload(s.page.getByText('Brake pads (pair)').first(), 60000); await s.settle(800); });
    const draft = line(column(s, 'draft'), 'Brake pads (pair)');
    await s.shot('hm-ord-list', { at: { 1: column(s, 'draft').getByText('Draft', { exact: true }).first(),
      2: draft.getByRole('button', { name: 'Submit' }) } });
    const bulk = s.page.getByRole('button', { name: 'Add bulk order' });
    await s.shot('hm-ord-bulk', { at: { 1: bulk, 2: s.page.getByText('One-time', { exact: true }).first() } });
    await s.scrollTo(s.page.locator('[data-testid="approval-queue-toggle"]'));
    await s.wait(800);
    s.cue();                                                    // Lines waiting for you are in the approval queue.
    await s.tap(s.page.locator('[data-testid="approval-queue-toggle"]'));
    await s.skip(() => s.settle(600));
    const q = s.page.locator('[data-testid="approval-queue"]');
    await q.getByText('Rear tyre').first().waitFor();
    const tyres = line(q, 'Rear tyre');
    await s.hover(tyres);
    await s.shot('hm-ord-queue', { scroll: false, at: { 1: s.page.locator('[data-testid="approval-queue-toggle"]'),
      2: tyres.getByRole('button', { name: 'Approve', exact: true }), 3: tyres.getByRole('button', { name: 'Reject', exact: true }) } });
    s.cue();                                                    // Tap Approve.
    await s.tap(tyres.getByRole('button', { name: 'Approve', exact: true }));
    await s.skip(() => s.settle(800));
    await s.wait(1500);
    await s.tap(s.page.locator('[data-testid="approval-queue-toggle"]'));     // Show all orders
    await s.skip(() => s.settle(800));
    const sprocket = line(column(s, 'approved'), 'Sprocket');
    await s.scrollTo(sprocket);
    s.cue();                                                    // When you have placed the order, tap Mark ordered.
    const mark = sprocket.getByRole('button', { name: 'Mark ordered' });
    await s.hover(mark);
    await s.shot('hm-ord-mark', { scroll: false, at: { 1: mark } });
    await s.tap(mark);
    const dlg = s.dialog;
    await dlg.waitFor();
    await s.wait(800);
    const sup = dlg.locator('input').first();
    if (!(await sup.inputValue().catch(() => ''))) await s.type(sup, 'Demo Kart Supplies Ltd');
    await s.tap(dlg.getByRole('button', { name: /Mark ordered|Save/ }).last());
    await s.skip(() => s.settle(800));
    s.cue();                                                    // The line moves to Ordered.
    const ordered = line(column(s, 'ordered'), 'Sprocket');
    await s.scrollTo(ordered);
    await s.hover(ordered);
    await s.wait(2500);
    const r = await s.close();
    clip('hm-orders-clip', r, { poster: 2 });

    // On order on the 307 repair card (Service Queue)
    const o = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await o.goto('/workshop/repairs');
    await o.mustReload(o.page.getByText(/On order/).first(), 60000);
    await o.settle(600);
    await o.shot('hm-ord-onorder', { at: { 2: o.page.getByText(/On order/).first() } });
    await o.close();

    // ---------- Goods In on the front bumpers order, recorded ----------
    const g = await open({ persona: 'Morgan Manager', device: 'desktop', record: true });
    await g.goto('/workshop/manager');
    await g.mustReload(tab(g, 'Order List'), 60000);
    await g.settle(600);
    g.cue();                                                    // Open the Order List.
    await g.tap(tab(g, 'Order List'));
    await g.skip(async () => { await g.mustReload(g.page.getByText('Front bumper').first(), 60000); await g.settle(800); });
    const fb = line(column(g, 'ordered'), 'Front bumper');
    const gi = fb.getByRole('button', { name: 'Goods In' });
    await g.scrollTo(fb);
    g.cue();                                                    // Tap Goods In on the line that arrived.
    await g.hover(gi);
    await g.shot('hm-gi-open', { scroll: false, at: { 1: gi } });
    await g.tap(gi);
    const d = g.dialog;
    await d.getByText('Against order').first().waitFor();
    await g.wait(800);
    g.cue();                                                    // Type what arrived and what it cost.
    const field = (label) => d.locator('div.space-y-1').filter({ has: g.page.getByText(label, { exact: true }) }).locator('input').first();
    // quantity, currency and supplier come from the order line
    if (!(await field('Quantity').inputValue())) await g.type(field('Quantity'), '2');
    await g.type(field('Unit cost'), '45.00');
    if (!(await field('Currency').inputValue())) await g.type(field('Currency'), 'GBP');
    if (!(await field('Supplier').inputValue())) await g.type(field('Supplier'), 'Demo Kart Supplies Ltd');
    await g.type(field('Invoice reference'), 'DEMO-INV-001');
    const save = d.getByRole('button', { name: 'Receive stock' });
    await g.shot('hm-gi', { scroll: false, at: { 2: d.getByText('Against order').first(), 3: d.getByText('Unit cost', { exact: true }),
      4: d.getByText('Invoice reference', { exact: true }), 5: save } });
    g.cue();                                                    // Tap Receive stock.
    await g.tap(save);
    await g.skip(() => g.settle(800));
    await g.wait(1200);
    g.cue();                                                    // The waiting repair is ready to do.
    await g.goto('/workshop/repairs', { settle: false });
    // the repair card says Junior 7 (kart 307); after Goods In it is listed with the repairs ready to do
    const card307 = g.page.getByText(/^Junior 3?07$/);
    await g.skip(async () => { await g.mustReload(card307, 60000); await g.settle(800); });
    await g.scrollTo(card307);
    await g.hover(card307);
    await g.wait(3000);
    const rg = await g.close();
    clip('hm-goodsin-clip', rg, { poster: 3 });
  },
};
