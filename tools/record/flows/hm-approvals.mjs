// Hub manager approvals as Morgan Manager (desktop): the dashboard, approving Jamie Newstarter's join request (clip),
// the join link form, then Create user for Jamie in the world without Jamie (temporary password).
export const dlgTab = (s, name) => s.dialog.getByRole('tab', { name: new RegExp(`^${name}`) });

async function openApprovals(s) {
  await s.goto('/hub-manager');
  await s.mustReload(s.page.getByText('Pending approvals', { exact: true }), 60000);
  await s.settle(600);
}

export default {
  shots: ['hm-appr-button', 'hm-appr-tile', 'hm-approve-clip', 'hm-appr-row', 'hm-join', 'hm-create-form', 'hm-create-password'],
  reset: true,
  async run({ open, reset, clip }) {
    // Select your Hub: the Hub Manager button
    const h = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await h.goto('/hub-selection');
    await h.mustReload(h.page.getByRole('button', { name: /Hub Manager/ }), 60000);
    await h.settle(600);
    await h.shot('hm-appr-button', { at: { 1: h.page.getByRole('button', { name: /Hub Manager/ }).first() } });
    await h.close();

    // the approval, recorded
    const s = await open({ persona: 'Morgan Manager', device: 'desktop', record: true });
    await openApprovals(s);
    const tile = s.page.getByText('Pending approvals', { exact: true }).first();
    await s.shot('hm-appr-tile', { at: { 2: tile } });
    s.cue();                                                    // Open Pending approvals.
    await s.tap(tile);
    await s.dialog.getByText('via join link').first().waitFor({ timeout: 60000 });
    await s.settle(600);
    s.cue();                                                    // Check who is asking and for which hub.
    const approve = s.dialog.getByRole('button', { name: 'Approve', exact: true }).first();
    await s.hover(s.dialog.getByText('Jamie Newstarter').first());
    await s.wait(1200);
    s.cue();                                                    // Tick Workshop for a new mechanic.
    const ws = s.dialog.getByRole('checkbox', { name: 'Workshop' }).first();
    await s.tap(ws);
    await s.wait(600);
    await s.shot('hm-appr-row', { scroll: false, at: { 1: s.dialog.getByText('via join link').first(), 2: ws, 3: approve } });
    s.cue();                                                    // Tap Approve.
    await s.tap(approve);
    s.cue();                                                    // They can sign in now.
    await s.toast('Request approved');
    await s.wait(2500);
    const r = await s.close();
    clip('hm-approve-clip', r, { poster: 2 });

    // join links: the form filled in (not created)
    const j = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await openApprovals(j);
    await j.tap(j.page.getByText('Pending approvals', { exact: true }).first());
    await j.tap(dlgTab(j, 'Join links'));
    await j.dialog.locator('#join-link-days').waitFor();
    await j.type(j.dialog.locator('#join-link-days'), '14');
    await j.type(j.dialog.locator('#join-link-max'), '5');
    await j.type(j.dialog.locator('#join-link-label'), 'New mechanics');
    await j.shot('hm-join', { scroll: false, at: { 1: dlgTab(j, 'Join links'), 2: j.dialog.getByText('Valid for (days)'),
      3: j.dialog.getByRole('button', { name: 'Create join link' }) } });
    await j.close();

    // Create user: Jamie Newstarter made with a temporary password (world without Jamie)
    reset(['no_jamie']);
    const c = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await openApprovals(c);
    await c.tap(c.page.getByText('Pending approvals', { exact: true }).first());
    await c.tap(dlgTab(c, 'Create user'));
    await c.dialog.locator('#cu-name').waitFor();
    await c.type(c.dialog.locator('#cu-name'), 'Jamie Newstarter');
    await c.type(c.dialog.locator('#cu-initials'), 'JN');
    await c.type(c.dialog.locator('#cu-email'), 'jamie.newstarter@demo-fkl.example');
    await c.type(c.dialog.locator('#cu-email2'), 'jamie.newstarter@demo-fkl.example');
    const hubSel = c.dialog.getByRole('combobox').first();
    if (!/Demo Hub/.test(await hubSel.innerText().catch(() => ''))) await c.choose(hubSel, 'Demo Hub');
    const wsBox = c.dialog.getByRole('checkbox', { name: /Workshop/ }).first();
    await c.tap(wsBox);
    const createBtn = c.dialog.getByRole('button', { name: 'Create user', exact: true });
    await c.scrollTo(createBtn);
    await c.shot('hm-create-form', { scroll: false, at: { 1: c.dialog.getByText('Full Name', { exact: true }),
      2: c.dialog.getByText('Hub managers can give Workshop and Reliability only. Workshop includes Reliability.'), 3: createBtn } });
    await c.tap(createBtn);
    await c.dialog.getByText('Temporary password').first().waitFor({ timeout: 60000 });
    await c.settle(600);
    const passed = c.dialog.getByText('I have passed the password on');
    await c.tap(passed);
    await c.shot('hm-create-password', { at: { 3: c.dialog.getByRole('button', { name: 'Copy password' }), 4: passed }, allowToast: true });
    await c.close();
  },
};
