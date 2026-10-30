// Phone and desktop views: stacked hub cards and the scrolling tab strip on a phone, the hub manager's extra
// buttons and the Workshop Manager tab on a desktop. Read only.
export default {
  shots: ['start-phone-cards', 'start-tab-strip-phone', 'start-hub-buttons', 'start-tab-strip-manager'],
  reset: false,
  async run({ open }) {
    const p = await open({ persona: 'Alex Mechanic', device: 'phone' });
    await p.goto('/hub-selection');
    await p.tap('css=button[role=combobox]');
    await p.tap(p.page.getByRole('option', { name: 'Demo Hub', exact: true }));
    await p.shot('start-phone-cards', { at: { 1: 'h3:text-is("Workshop")' } });
    await p.goto('/workshop');
    await p.mustReload('text=Event readiness', 60000);
    const sched = p.page.locator('a,button,[role=tab]').filter({ hasText: /^\s*Schedule\s*$/ });
    await (await p.must(sched)).evaluate((e) => e.scrollIntoView({ inline: 'end', block: 'nearest' }));
    await p.page.evaluate(() => window.scrollTo(0, 0));
    await p.wait(800);
    await p.shot('start-tab-strip-phone', { scroll: false, at: { 1: sched } });
    await p.close();

    const d = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await d.goto('/hub-selection');
    await d.tap('css=button[role=combobox]');
    await d.tap(d.page.getByRole('option', { name: 'Demo Hub', exact: true }));
    await d.shot('start-hub-buttons', { at: { 1: 'role=button[name="Hub Manager"]' } });
    await d.goto('/workshop');
    await d.mustReload('text=Event readiness', 60000);
    await d.shot('start-tab-strip-manager', { scroll: false, at: { 1: d.page.locator('a,button,[role=tab]').filter({ hasText: /^\s*Workshop Manager\s*$/ }) } });
    await d.close();
  },
};
