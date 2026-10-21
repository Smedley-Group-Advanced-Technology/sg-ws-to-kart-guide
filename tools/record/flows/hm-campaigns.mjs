// Campaigns as Morgan Manager (desktop): creating an integrated Junior campaign (clip, list and form screenshots),
// then the seeded Junior caliper seal upgrade: the kart actions menu on 305 and Campaign status.
import { CAMPAIGN } from '../lib/config.mjs';
import { asPersona } from '../lib/db.mjs';
import { taskId } from '../lib/shots.mjs';

const tab = (s, name) => s.page.getByRole('tab', { name, exact: true });
const select = (s, label) => s.page.getByRole('combobox', { name: label, exact: true });
const isoDate = (days) => {
  const d = new Date(Date.now() + days * 86400000);
  return d.toISOString().slice(0, 10);
};

export default {
  shots: ['hm-campaign-clip', 'hm-camp-list', 'hm-camp-form', 'hm-camp-manage', 'hm-camp-status'],
  reset: true,
  async run({ open, clip }) {
    const s = await open({ persona: 'Morgan Manager', device: 'desktop', record: true });
    await s.goto('/workshop/manager');
    await s.mustReload(tab(s, 'Campaigns'), 60000);
    await s.settle(600);
    s.cue();                                                    // Open Campaigns and tap New campaign.
    await s.tap(tab(s, 'Campaigns'));
    await s.skip(async () => { await s.mustReload(s.page.getByText('Junior caliper seal upgrade').first(), 60000); await s.settle(600); });
    const newBtn = s.page.getByRole('button', { name: /New campaign/ }).first();
    await s.shot('hm-camp-list', { at: { 1: newBtn } });
    await s.tap(newBtn);
    await s.skip(async () => { await s.page.waitForURL(/campaigns\/new/); await s.must('#campaign-title'); await s.settle(600); });
    s.cue();                                                    // Name it and choose Integrated or Standalone.
    await s.type('#campaign-title', 'Junior axle bearing upgrade');
    if (!/Integrated/.test(await select(s, 'Campaign type').innerText())) await s.choose(select(s, 'Campaign type'), 'Integrated');
    else await s.hover(select(s, 'Campaign type'));
    await s.choose(select(s, 'Work type'), 'Part Upgrade');
    await s.type('#campaign-description', 'Fit the new axle bearing to three Junior karts.');
    s.cue();                                                    // Choose the class, the lead mechanic and the dates.
    await s.choose(select(s, 'Fleet class'), 'Junior');
    await s.choose(select(s, 'Lead mechanic'), 'Alex Mechanic');
    await s.tap('#campaign-due');
    await s.page.locator('#campaign-due').fill(isoDate(21));
    await s.beat();
    s.cue();                                                    // Pick all karts or only some.
    const sel = s.page.getByRole('button', { name: 'Selected karts only' });
    await s.scrollTo(sel);
    await s.tap(sel);
    const picks = s.page.locator('[data-testid="campaign-kart-select"] button');
    await picks.first().waitFor();
    for (const n of ['301', '302', '305']) await s.tap(picks.filter({ hasText: n }).first(), { pause: 500 });
    s.cue();                                                    // Add the parts each kart needs.
    const addPart = s.page.getByRole('button', { name: 'Add part' });
    await s.scrollTo(addPart);
    await s.tap(addPart);
    await s.type(s.dialog.getByPlaceholder('Search parts…'), 'axle');
    await s.wait(800);
    await s.tap(s.dialog.locator('button').filter({ hasText: 'Axle bearing' }).first());
    await s.wait(600);
    await s.scrollTo('#campaign-instructions');
    await s.type('#campaign-instructions', '1. Lift the rear of the kart.\n2. Replace the axle bearing.\n3. Check the axle turns freely.', { delay: 25 });
    const create = s.page.getByRole('button', { name: 'Create campaign' });
    await s.scrollTo(create);
    await s.skip(() => s.shot('hm-camp-form', { fullPage: true, at: { 2: s.page.locator('#campaign-title'), 3: select(s, 'Campaign type'),
      4: select(s, 'Work type'), 5: select(s, 'Fleet class'), 6: sel,
      7: s.page.getByText('Required parts per kart (optional)'), 8: s.page.getByText('Work instructions', { exact: true }), 9: create } }));
    await s.scrollTo(create);
    s.cue();                                                    // Tap Create campaign.
    await s.tap(create);
    await s.skip(async () => { await s.page.waitForURL(/campaigns\/(?!new)/, { timeout: 60000 }); await s.settle(800); });
    await s.wait(3000);
    const r = await s.close();
    clip('hm-campaign-clip', r, { poster: 4 });

    // the seeded campaign: 305 started by Alex, so its menu has Exclude kart and Reset to not started
    asPersona('Alex Mechanic', `select public.ws_campaign_start_task('${taskId('305')}');`);
    const m = await open({ persona: 'Morgan Manager', device: 'desktop' });
    await m.goto(`/workshop/campaigns/${CAMPAIGN}`);
    await m.mustReload(m.page.getByText('Karts in this campaign'), 60000);
    await m.settle(800);
    const row = m.page.locator('tr').filter({ hasText: /305/ }).first();
    await m.scrollTo(row);
    await m.tap(row.getByRole('button', { name: 'Kart actions' }));
    await m.page.getByRole('menuitem', { name: /Reset to not started/ }).waitFor();
    await m.wait(500);
    await m.shot('hm-camp-manage', { scroll: false, at: { 1: m.page.getByText('Karts in this campaign'), 2: m.page.getByRole('button', { name: 'Add karts' }),
      3: m.page.getByRole('menuitem', { name: /Exclude kart/ }), 4: m.page.getByRole('menuitem', { name: /Reset to not started/ }) } });
    await m.page.keyboard.press('Escape');
    await m.goto(`/workshop/campaigns/${CAMPAIGN}`);
    await m.mustReload(m.page.getByRole('combobox', { name: 'Campaign status' }), 60000);
    await m.tap(m.page.getByRole('combobox', { name: 'Campaign status' }));
    await m.page.getByRole('option', { name: 'Cancelled' }).waitFor();
    await m.shot('hm-camp-status', { scroll: false, at: { 1: m.page.getByRole('combobox', { name: 'Campaign status' }) } });
    await m.page.keyboard.press('Escape');
    await m.close();
  },
};
