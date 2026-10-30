// Race to Chassis safety (KART MF-12 / MF-41), screenshots only:
// - a chassis with a warning triangle (Cadet 207 got its race number, then a stopping ticket) and the Copy Last Session
//   question that lists it (Alex Mechanic, tablet);
// - Admin correction in Reassignments on the past Demo Club Night (Taylor Central, after a move made as Taylor);
// - Signed off karts only: every Demo Hub kart signed off except Junior 303, which holds race number 07 in session 1;
//   Taylor switches it on in FKL Central > Hubs, then Alex sees the marked chassis.
// Fake guide stack only. The sign-offs and the hub setting are removed again at the end (the reset also drops them).
import { HUB, EV_SESSION, EV_PAST } from '../lib/config.mjs';
import { sql, asPersona } from '../lib/db.mjs';
import { openR2C, slot } from './race-to-chassis.mjs';

const FLEET = 'de000000-0000-4000-8000-0000000000f1';

function cleanup() {
  sql(`DELETE FROM public.workshop_hub_r2c_settings WHERE hub_id = '${HUB}';
       UPDATE public.karts SET signoff_id = NULL WHERE hub_id = '${HUB}';
       DELETE FROM public.kart_signoffs WHERE fleet_id = '${FLEET}' AND notes = 'guide demo sign-off';`);
}

export default {
  shots: ['mech-r2c-triangle', 'mech-r2c-copy-unavailable', 'mech-r2c-admin-correction', 'fc-r2c-signoff-switch',
    'mech-r2c-signoff-only'],
  reset: ['no_207_ticket'],
  async run({ open }) {
    try {
      // Cadet 207 gets race number 5 in session 1 while it is available, then a stopping reliability ticket
      // (the world without the 207 ticket): a race number on a kart that is not available
      asPersona('Alex Mechanic', `SELECT public.ws_r2c_assign('${EV_SESSION}', 1, 'Cadet', 5, 7, NULL);`);
      asPersona('Casey Mechanic', `INSERT INTO public.kart_issues (identifier, hub_id, kart_type, kart_number, driver_number,
          status, effect_of_issue, session, user_id, system_at_fault, describe_issue, timezone_offset)
        VALUES ('', '${HUB}', 'Cadet', 7, 5, 'Ongoing', 'Cut out not restarted', 1, 'de000000-0000-4000-8000-0000000000a2',
                'Battery', 'Cut out on lap 4, would not restart', '+00:00');`);
      // Junior 303 holds race number 07 in session 1 (before the hub lists signed off karts only)
      asPersona('Alex Mechanic', `SELECT public.ws_r2c_assign('${EV_SESSION}', 1, 'Junior', 7, 3, NULL);`);
      // an administrator moves race number 1 on the past Demo Club Night (chassis 02 to 08): an Admin correction
      asPersona('Taylor Central', `SELECT public.ws_r2c_assign('${EV_PAST}', 1, 'Cadet', 1, 8, NULL);`);

      // 1. the warning triangle and Copy Last Session (Alex, tablet)
      const a = await open({ persona: 'Alex Mechanic', device: 'tablet' });
      await openR2C(a);
      await a.tap(a.page.locator('[data-testid="r2c-class-Cadet"]'));
      await a.tap(a.page.locator('[data-testid="r2c-session-1"]'));
      await a.settle(800);
      await a.page.locator('[data-testid="r2c-dd-unavailable-7"]').waitFor({ timeout: 30000 });
      await a.shot('mech-r2c-triangle', { scroll: false, at: { 1: slot(a, 7) }, place: { 1: 'right' } });
      await a.tap(a.page.locator('[data-testid="r2c-session-2"]'));
      await a.settle(800);
      // session 2 follows session 1 as a copy (207 already in it): clear it first, so the copy puts 207 on track again
      await a.tap(a.page.locator('[data-testid="r2c-clear-session"]'));
      await a.tap(a.page.locator('[data-testid="r2c-confirm"]'));
      await a.page.locator('[role=alertdialog]').waitFor({ state: 'detached', timeout: 30000 }).catch(() => {});
      await a.settle(800);
      await a.tap(a.page.locator('[data-testid="r2c-copy-previous"]'));
      const warn = a.page.locator('[data-testid="r2c-copy-unavailable"]');
      // the app lists them at once when it knows; otherwise the server refuses the copy and the same dialog asks
      const shown = await warn.waitFor({ timeout: 8000 }).then(() => true).catch(() => false);
      if (!shown) {
        await a.page.locator('[data-testid="r2c-confirm"]').waitFor({ timeout: 30000 });
        await a.page.screenshot({ path: '/tmp/r2c-copy-before.png' }).catch(() => {});
        await a.tap(a.page.locator('[data-testid="r2c-confirm"]'));
        await warn.waitFor({ timeout: 30000 }).catch(async (e) => {
          await a.page.screenshot({ path: '/tmp/r2c-copy-after.png' }).catch(() => {});
          throw e;
        });
      }
      await a.type(a.page.locator('[data-testid="r2c-copy-reason"]'), 'Hub manager agreed for session 2');
      await a.shot('mech-r2c-copy-unavailable', { scroll: false });
      await a.tap(a.page.locator('[role=alertdialog]').getByRole('button', { name: 'Cancel' }));
      await a.wait(600);
      await a.close();

      // 2. Admin correction in Reassignments (Taylor, tablet, past event)
      const t = await open({ persona: 'Taylor Central', device: 'tablet' });
      await openR2C(t, 'Demo Club Night');
      await t.tap(t.page.locator('[data-testid="r2c-class-Cadet"]'));
      await t.settle(800);
      await t.tap(t.page.locator('[data-testid="r2c-reassignments"]'));
      await t.page.locator('[data-testid="r2c-log-admin-correction"]').first().waitFor({ timeout: 30000 });
      await t.wait(600);
      await t.shot('mech-r2c-admin-correction', { scroll: false });
      await t.close();

      // 3. Signed off karts only: every Demo Hub kart signed off except Junior 303
      sql(`WITH s AS (
             INSERT INTO public.kart_signoffs (fleet_id, kart_type, kart_number, status, notes, commissioned, commissioned_at)
             SELECT '${FLEET}', k.kart_type, k.kart_number, 'passed', 'guide demo sign-off', true, now()
               FROM public.karts k
              WHERE k.hub_id = '${HUB}' AND NOT (k.kart_type = 'Junior' AND k.kart_number = 3)
             RETURNING id, kart_type, kart_number)
           UPDATE public.karts k SET signoff_id = s.id FROM s
            WHERE k.hub_id = '${HUB}' AND k.kart_type = s.kart_type AND k.kart_number = s.kart_number;`);
      const c = await open({ persona: 'Taylor Central', device: 'desktop' });
      await c.goto('/fkl-central?tab=hubs');
      const hubBtn = c.page.getByRole('button', { name: 'Demo Hub', exact: true }).first();
      await c.mustReload(hubBtn, 60000);
      await c.settle(800);
      await c.tap(hubBtn);
      const card = c.page.locator('[data-testid="r2c-signoff-card"]');
      await card.waitFor({ timeout: 30000 });
      await c.page.locator('[data-testid="r2c-signoff-counts"]').waitFor({ timeout: 30000 });
      await c.scrollTo(card, { block: 'center' });
      await c.tap(c.page.locator('[data-testid="r2c-signoff-switch"]'));
      await c.tap(c.page.locator('[data-testid="r2c-signoff-confirm"]'));
      await c.page.getByText('Signed off karts only: on').waitFor({ timeout: 30000 });
      await c.page.getByText(/Last changed/).first().waitFor({ timeout: 30000 });
      await c.settle(600);
      await c.shot('fc-r2c-signoff-switch', { allowToast: false });
      await c.close();

      const m = await open({ persona: 'Alex Mechanic', device: 'tablet' });
      await openR2C(m);
      await m.tap(m.page.locator('[data-testid="r2c-class-Junior"]'));
      await m.tap(m.page.locator('[data-testid="r2c-session-1"]'));
      await m.settle(800);
      await m.page.locator('[data-testid="r2c-dd-not-signed-off-3"]').waitFor({ timeout: 30000 });
      await m.shot('mech-r2c-signoff-only', { scroll: false, at: { 1: m.page.locator('[data-testid="r2c-dd-signoff-only"]'),
        2: m.page.locator('[data-testid="r2c-dd-chassis-label-3"]').locator('xpath=..') }, place: { 1: 'right', 2: 'right' } });
      await m.close();
    } finally {
      cleanup();
    }
  },
};
