// Direct chats: Alex Mechanic (tablet) finds Casey Mechanic by typing Ca and the earlier chat opens again
// (screenshots and clip); Riley Support (desktop) sees Start a direct chat after typing Morgan in the Support view.
const searchBox = (s) => s.page.getByPlaceholder(/^New direct chat/);
const result = (s, name) => s.page.getByRole('button').filter({ hasText: name }).first();

async function openComms(s) {
  await s.goto('/comms');
  await s.mustReload(searchBox(s), 60000);
  await s.settle(800);
}

export default {
  shots: ['rs-direct-search', 'rs-direct-send', 'rs-direct-clip', 'rs-direct-support'],
  reset: true,
  async run({ open, clip }) {
    const c = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await openComms(c);
    await c.type(searchBox(c), 'Ca');
    await c.page.getByText('CM', { exact: true }).first().waitFor({ timeout: 30000 });
    await c.settle(400);
    await c.shot('rs-direct-search', { scroll: false, at: { 1: searchBox(c), 2: result(c, 'Casey Mechanic') } });
    await c.tap(result(c, 'Casey Mechanic'));
    const box = c.page.getByPlaceholder(/Type a message/);
    await box.waitFor();
    await c.settle(600);
    await c.type(box, 'Can you check the 205 chain before you go?');
    await c.shot('rs-direct-send', { scroll: false, at: { 3: c.page.getByText('Casey Mechanic', { exact: true }).first(),
      4: c.page.getByRole('button', { name: 'Send', exact: true }) }, place: { 3: 'right' } });
    await c.close();

    // recorded
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await openComms(s);
    s.cue();                                                    // Open KART Comms.
    await s.hover(s.page.getByText('Direct Chats', { exact: true }).first());
    await s.wait(1500);
    s.cue();                                                    // Search for a colleague by name or initials.
    await s.tap(searchBox(s));
    await s.type(searchBox(s), 'Ca', { delay: 250 });
    await s.skip(() => s.page.getByText('CM', { exact: true }).first().waitFor({ timeout: 30000 }));
    await s.wait(800);
    s.cue();                                                    // Choose them.
    await s.tap(result(s, 'Casey Mechanic'));
    const mbox = s.page.getByPlaceholder(/Type a message/);
    await s.skip(async () => { await mbox.waitFor(); await s.settle(600); });
    s.cue();                                                    // Your earlier chat opens again.
    await s.hover(s.page.getByText(/shout if you need a hand/).first());
    await s.wait(2200);
    s.cue();                                                    // Type and send.
    await s.type(mbox, 'Can you check the 205 chain before you go?', { delay: 45 });
    await s.tap(s.page.getByRole('button', { name: 'Send', exact: true }));
    await s.skip(() => s.settle(600));
    await s.wait(2200);
    const r = await s.close();
    clip('rs-direct-clip', r, { poster: 4 });

    // Riley Support: Start a direct chat in the Support view
    const rs = await open({ persona: 'Riley Support', device: 'desktop' });
    await rs.goto('/comms');
    const find = rs.page.getByPlaceholder(/Search staff, hub or message/);
    await rs.mustReload(find, 60000);
    await rs.settle(800);
    await rs.type(find, 'Morgan');   // two letters also match the e-mail domain of every demo account
    await rs.page.getByText('Start a direct chat').first().waitFor({ timeout: 30000 });
    await rs.settle(400);
    await rs.shot('rs-direct-support', { scroll: false, at: { 1: rs.page.getByRole('button').filter({ hasText: /^Morgan Manager$/ }).last() } });
    await rs.close();
  },
};
