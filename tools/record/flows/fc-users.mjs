// Users and permissions as Taylor Central (desktop) on the Admin page: All Users, User Details with hub access and
// permissions, deactivating and reactivating Casey Mechanic, and Create user with a temporary password (Jamie
// Newstarter, in the world without Jamie).
// Escape does not always close User Details (focus can sit in the colour picker): use its Close button
async function closeDetails(s) {
  const d = s.page.locator('[role=dialog]').last();
  await s.tap(d.getByRole('button', { name: 'Close' }).last());
  await d.waitFor({ state: 'detached', timeout: 15000 }).catch(() => {});
  await s.wait(600);
}

export default {
  shots: ['fc-users-list', 'fc-users-perms', 'fc-users-deactivate', 'fc-users-reactivate', 'fc-users-create', 'fc-users-temp'],
  reset: ['no_jamie'],
  async run({ open }) {
    const s = await open({ persona: 'Taylor Central', device: 'desktop' });
    await s.goto('/admin?tab=users');
    await s.mustReload(s.page.getByText('All Users', { exact: true }).first(), 60000);
    await s.settle(1000);
    const userRow = (name) => s.page.getByText(name, { exact: true }).last();
    await s.scrollTo(s.page.getByText('All Users', { exact: true }).first(), { block: 'start' });
    await s.shot('fc-users-list', { scroll: false, at: { 1: s.page.getByText('All Users', { exact: true }).first(),
      2: userRow('Alex Mechanic') } });

    // User Details: hub access and permissions
    await s.tap(userRow('Alex Mechanic'));
    await s.dialog.getByText('Save Permissions').first().waitFor();
    await s.settle(600);
    await s.shot('fc-users-perms', { scroll: false, at: { 3: s.dialog.getByRole('button', { name: 'Save Hub Access' }),
      4: s.dialog.getByRole('button', { name: 'Save Permissions' }) } });
    await closeDetails(s);

    // Deactivate and reactivate Casey Mechanic
    await s.tap(userRow('Casey Mechanic'));
    const deact = s.dialog.getByRole('button', { name: 'Deactivate user' }).first();
    await deact.waitFor();
    await s.settle(600);
    await s.shot('fc-users-deactivate', { at: { 1: deact } });
    await s.tap(deact);
    const confirm = s.page.locator('[role=alertdialog]');
    await confirm.locator('#deactivation-reason').waitFor();
    await s.type(confirm.locator('#deactivation-reason'), 'On a long break (demo)');
    await s.tap(confirm.getByRole('button', { name: 'Deactivate user' }));
    const react = s.page.locator('[role=dialog]').getByRole('button', { name: 'Reactivate user' }).first();
    await react.waitFor({ timeout: 60000 });
    await s.settle(800);
    await s.shot('fc-users-reactivate', { at: { 2: react }, allowToast: false });
    await s.tap(react);
    await s.tap(s.page.locator('[role=alertdialog]').getByRole('button', { name: 'Reactivate user' }));
    await s.page.locator('[role=dialog]').getByRole('button', { name: 'Deactivate user' }).first().waitFor({ timeout: 60000 });
    await closeDetails(s);

    // Create user with a temporary password
    await s.tap(s.page.getByRole('button', { name: 'Create user', exact: true }).first());
    const d = s.dialog;
    await d.locator('#cu-name').waitFor();
    await s.type(d.locator('#cu-name'), 'Jamie Newstarter');
    await s.type(d.locator('#cu-initials'), 'JN');
    await s.type(d.locator('#cu-email'), 'jamie.newstarter@demo-fkl.example');
    await s.type(d.locator('#cu-email2'), 'jamie.newstarter@demo-fkl.example');
    const hubSel = d.getByRole('combobox').first();
    if (!/Demo Hub/.test(await hubSel.innerText().catch(() => ''))) await s.choose(hubSel, 'Demo Hub');
    await s.tap(d.getByRole('checkbox', { name: /Workshop/ }).first());
    const createBtn = d.getByRole('button', { name: 'Create user', exact: true });
    await s.scrollTo(createBtn);
    await s.shot('fc-users-create', { scroll: false, at: { 1: createBtn } });
    await s.tap(createBtn);
    await d.getByText('Temporary password').first().waitFor({ timeout: 60000 });
    await s.settle(600);
    const passed = d.getByText('I have passed the password on');
    await s.tap(passed);
    await s.shot('fc-users-temp', { at: { 2: d.getByRole('button', { name: 'Copy password' }) }, allowToast: true });
    await s.close();
  },
};
