// Support cover as Riley Support (desktop): the Remote Support button, and choosing who covers Demo Practice Day
// on the Hub Dashboard (screenshot and clip). Cover is cleared first so the list starts on No support assigned.
import { EV_SESSION } from '../lib/config.mjs';
import { sql } from '../lib/db.mjs';

const rsButton = (s) => s.page.getByRole('button', { name: /Remote Support/ }).first();

async function hideBanner(s) {
  // the close button (an X) follows How to fix in the 'Notifications are blocked' banner
  const x = s.page.getByRole('button', { name: 'How to fix' }).locator('xpath=following-sibling::button[1]');
  if (await x.isVisible().catch(() => false)) {
    await x.click().catch(() => {});
    await s.page.waitForTimeout(400);
  }
}

export default {
  shots: ['rs-cover-button', 'rs-cover-select', 'rs-cover-clip'],
  reset: true,
  async run({ open, clip }) {
    sql(`UPDATE public.events SET support_user_id = NULL WHERE id = '${EV_SESSION}';`);
    const c = await open({ persona: 'Riley Support', device: 'desktop' });
    await c.goto('/hub-selection');
    await c.mustReload(rsButton(c), 60000);
    await c.settle(800);
    await c.shot('rs-cover-button', { at: { 1: rsButton(c) } });
    await c.close();

    const s = await open({ persona: 'Riley Support', device: 'desktop', record: true });
    await s.goto('/hub-selection');
    await s.mustReload(rsButton(s), 60000);
    await s.settle(800);
    s.cue();                                                    // Open Remote Support.
    await s.tap(rsButton(s));
    const event = s.page.getByText('Demo Practice Day').first();
    await s.skip(async () => { await s.page.waitForURL(/rs-dash/); await s.mustReload(event, 60000); await s.settle(800); await hideBanner(s); });
    s.cue();                                                    // Find the hub and today's event.
    await s.hover(event);
    await s.wait(1500);
    s.cue();                                                    // Choose who covers it.
    const sel = s.page.getByRole('combobox').filter({ hasText: 'No support assigned' }).first();   // Demo Hub comes first
    await s.choose(sel, 'Riley Support');
    const toast = await s.toast('Support cover updated');
    const now = s.page.getByRole('combobox').filter({ hasText: 'Riley Support' }).first();
    await s.shot('rs-cover-select', { scroll: false, at: { 2: event, 3: now, 4: toast } });
    s.cue();                                                    // Saved. Comms now shows them on cover.
    await s.hover(now);
    await s.wait(2500);
    const r = await s.close();
    clip('rs-cover-clip', r, { poster: 3 });
  },
};
