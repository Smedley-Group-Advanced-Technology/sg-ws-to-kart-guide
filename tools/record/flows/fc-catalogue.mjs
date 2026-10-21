// FKL Central parts catalogue as Taylor Central (desktop): the FKL Central tabs, Master parts, the Edit catalogue
// New catalogue dialog with Kart generation, Hub catalogues, Part requests and the Review dialog (screenshots and clip).
// CSS, not a role query: role queries skip elements under an open dialog (Radix sets aria-hidden)
import { sql } from '../lib/db.mjs';

const tab = (s, name) => s.page.locator('[role=tab]').filter({ hasText: new RegExp(`^${name}`) }).first();

async function openBom(s) {
  await s.goto('/fkl-central?tab=bom');
  await s.mustReload(s.page.getByText('FKL-900001').first(), 60000);
  await s.settle(800);
}

export default {
  shots: ['fc-path-overview', 'fc-parts-master', 'fc-cat-generation', 'fc-cat-hubs', 'fc-req-list', 'fc-req-review',
    'fc-review-clip'],
  reset: true,
  async run({ open, clip }) {
    const c = await open({ persona: 'Taylor Central', device: 'desktop' });
    await c.goto('/fkl-central');
    await c.mustReload(tab(c, 'Parts catalogue'), 60000);
    await c.settle(800);
    await c.shot('fc-path-overview', { scroll: false, at: { 1: tab(c, 'Parts catalogue'), 2: tab(c, 'Servicing'),
      3: tab(c, 'Service checklists') } });

    // Master parts, searched for the front bumper
    await openBom(c);
    await c.type(c.page.getByPlaceholder('Search name, FKL number or MPN'), 'FKL-900001');
    await c.settle(600);
    const row = c.page.locator('tr').filter({ hasText: 'Front bumper' }).first();
    await c.shot('fc-parts-master', { scroll: false, at: { 1: tab(c, 'Master parts'),
      3: row.getByRole('button', { name: 'Edit part' }), 4: c.page.getByRole('button', { name: 'Add part', exact: true }) }, place: { 3: 'above' } });

    // Catalogues: New catalogue with the Kart generation list (the default catalogue cannot be a generation one)
    await c.tap(tab(c, 'Catalogues'));
    await c.settle(800);
    await c.tap(c.page.getByRole('button', { name: 'New catalogue' }));
    await c.dialog.getByText('Kart generation').first().waitFor();
    await c.type(c.dialog.locator('#catalogue-name'), 'Junior Gen3.1 parts');
    await c.settle(600);
    await c.shot('fc-cat-generation', { scroll: false, at: { 1: tab(c, 'Catalogues'),
      2: c.dialog.locator('#catalogue-generation') } });
    await c.page.keyboard.press('Escape');
    await c.wait(600);

    await c.tap(tab(c, 'Hub catalogues'));
    await c.settle(800);
    await c.page.locator('td').filter({ hasText: 'Demo Hub North' }).first().waitFor();
    await c.shot('fc-cat-hubs', { scroll: false, at: { 3: tab(c, 'Hub catalogues') } });

    // Part requests and the Review dialog
    await c.tap(tab(c, 'Part requests'));
    await c.settle(800);
    const review = c.page.getByRole('button', { name: 'Review', exact: true }).first();
    await review.waitFor();
    await c.shot('fc-req-list', { scroll: false, at: { 1: tab(c, 'Part requests'), 2: review } });
    await c.tap(review);
    const d = c.dialog;
    await d.getByText('Review part request').first().waitFor();
    await c.settle(600);
    const opt = (t) => d.getByText(t, { exact: true }).first();
    await c.shot('fc-req-review', { scroll: false, at: { 3: opt('Link an existing part'), 4: opt('Add a new part'),
      5: opt('Keep as a hub-local part'), 6: opt('Reject') } });
    await c.page.keyboard.press('Escape');
    await c.close();

    // the review, recorded: add the Steering column bush as a new master part
    const s = await open({ persona: 'Taylor Central', device: 'desktop', record: true });
    await openBom(s);
    s.cue();                                                    // Open Part requests.
    await s.tap(tab(s, 'Part requests'));
    const rv = s.page.getByRole('button', { name: 'Review', exact: true }).first();
    await s.skip(async () => { await rv.waitFor(); await s.settle(600); });
    await s.hover(s.page.getByText('Steering column bush').first());
    await s.wait(1200);
    s.cue();                                                    // Tap Review.
    await s.tap(rv);
    const dl = s.dialog;
    await dl.getByText('Review part request').first().waitFor();
    await s.wait(800);
    s.cue();                                                    // Link a part, add a new one, keep it local or reject.
    for (const t of ['Link an existing part', 'Keep as a hub-local part', 'Reject']) {
      await s.hover(dl.getByText(t, { exact: true }).first());
      await s.wait(700);
    }
    await s.tap(dl.getByText('Add a new part', { exact: true }).first());
    await s.wait(600);
    await s.hover(dl.getByText('Part name', { exact: true }).first());
    await s.wait(1000);
    s.cue();                                                    // Save. The hub sees the result.
    await s.tap(dl.getByRole('button', { name: 'Add part', exact: true }));
    await s.toast('Part added to the catalogue');
    await s.wait(2500);
    const r = await s.close();
    clip('fc-review-clip', r, { poster: 3 });
    // the new master part is a global row the demo reset keeps: remove it, or the next reset cannot raise the request
    sql(`BEGIN;
CREATE TEMP TABLE x AS SELECT id FROM public.workshop_parts_catalog WHERE manufacturer_part_number = 'DEMO-SCB-01';
DELETE FROM public.workshop_part_suppliers WHERE part_id IN (SELECT id FROM x);
DELETE FROM public.workshop_hub_catalog_parts WHERE part_id IN (SELECT id FROM x);
DELETE FROM public.workshop_part_supplier_copy_log WHERE part_id IN (SELECT id FROM x);
DELETE FROM public.workshop_stock_orders WHERE part_id IN (SELECT id FROM x);
DELETE FROM public.workshop_parts_catalog WHERE id IN (SELECT id FROM x);
COMMIT;`);
  },
};
