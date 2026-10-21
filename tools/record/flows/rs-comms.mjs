// KART Comms: the Support view as Riley Support (desktop) with an unassigned chat from Casey Mechanic (claim, reply,
// close, reopen: screenshots and clip), and the Trackside view as Alex Mechanic (tablet): the Remote Support chat
// with On cover and the AI Support entry point (no AI answer: the local stack has no OpenAI key).
import { HUB, PERSONAS } from '../lib/config.mjs';
import { asPersona, sql } from '../lib/db.mjs';

const tab = (s, name) => s.page.locator('[role=tab]').filter({ hasText: new RegExp(`^${name}`) }).first();

// a support chat from Casey Mechanic that nobody has taken yet (routing as notify-direct-message sets it)
export function caseyUnassigned() {
  const casey = PERSONAS['Casey Mechanic'].id;
  asPersona('Casey Mechanic', `INSERT INTO public.direct_threads (user_id, kind) VALUES ('${casey}', 'support');
INSERT INTO public.direct_messages (thread_id, sender_user_id, sender_role, content)
  SELECT id, '${casey}', 'user', 'Junior 304 battery reads 38 V after charging. Can it go out today?'
    FROM public.direct_threads WHERE user_id = '${casey}' AND kind = 'support';`);
  sql(`UPDATE public.direct_threads SET routing_state = 'unassigned', hub_id = '${HUB}',
         event_date = (now() AT TIME ZONE 'Europe/London')::date WHERE user_id = '${PERSONAS['Casey Mechanic'].id}' AND kind = 'support';`);
}

async function openSupport(s) {
  await s.goto('/comms');
  await s.mustReload(s.page.getByText('Alex Mechanic').first(), 60000);
  await s.settle(800);
}

export default {
  shots: ['rs-path-overview', 'rs-comms-open', 'rs-support-queue', 'rs-support-claim', 'rs-comms-clip',
    'rs-trackside-cover', 'rs-trackside-send', 'rs-ai-support'],
  reset: true,
  async run({ open, clip }) {
    caseyUnassigned();
    const c = await open({ persona: 'Riley Support', device: 'desktop' });
    await openSupport(c);
    await c.shot('rs-path-overview', { scroll: false, at: { 1: c.page.getByText('Support', { exact: true }).first(), 2: tab(c, 'My queue') },
      place: { 1: 'right', 2: 'below' } });
    await c.shot('rs-comms-open', { scroll: false, at: { 1: c.page.getByText('KART Comms', { exact: true }).first() } });
    await c.tap(tab(c, 'Unassigned'));
    await c.page.getByText('Casey Mechanic').first().waitFor();
    await c.settle(600);
    await c.shot('rs-support-queue', { scroll: false, at: { 1: tab(c, 'My queue'), 2: tab(c, 'Unassigned') } });
    await c.tap(c.page.getByText('Casey Mechanic').first());
    await c.page.getByRole('button', { name: 'Claim' }).waitFor();
    await c.settle(600);
    await c.type(c.page.getByPlaceholder(/Type a message/), 'Hi Casey, please keep 304 off track and swap the battery. I will check the charger log.', { delay: 25 });
    await c.shot('rs-support-claim', { scroll: false, at: { 3: c.page.getByRole('button', { name: 'Claim' }),
      4: c.page.getByRole('button', { name: 'Send', exact: true }), 5: c.page.getByRole('button', { name: 'Close chat' }) } });
    await c.close();

    // claim, reply, close and reopen, recorded
    const s = await open({ persona: 'Riley Support', device: 'desktop', record: true });
    await openSupport(s);
    s.cue();                                                    // The Support view lists chats to answer.
    await s.hover(s.page.getByText('Alex Mechanic').first());
    await s.wait(1800);
    s.cue();                                                    // Unassigned chats wait for someone.
    await s.tap(tab(s, 'Unassigned'));
    await s.skip(() => s.page.getByText('Casey Mechanic').first().waitFor());
    await s.tap(s.page.getByText('Casey Mechanic').first());
    const claim = s.page.getByRole('button', { name: 'Claim' });
    await s.skip(() => claim.waitFor());
    await s.wait(600);
    s.cue();                                                    // Tap Claim to take it.
    await s.tap(claim);
    await s.skip(() => s.settle(600));
    await s.hover(s.page.getByText(/Claimed by me/).first());
    await s.wait(1000);
    s.cue();                                                    // Reply to the staff member.
    await s.type(s.page.getByPlaceholder(/Type a message/), 'Hi Casey, please keep 304 off track and swap the battery.', { delay: 35 });
    await s.tap(s.page.getByRole('button', { name: 'Send', exact: true }));
    await s.skip(() => s.settle(600));
    await s.wait(800);
    s.cue();                                                    // Close the chat when it is solved.
    await s.tap(s.page.getByRole('button', { name: 'Close chat' }));
    await s.skip(() => s.page.getByRole('button', { name: 'Reopen chat' }).waitFor());
    await s.hover(s.page.getByText(/Chat is closed/).first());
    await s.wait(1500);
    s.cue();                                                    // Reopen it if needed.
    await s.tap(s.page.getByRole('button', { name: 'Reopen chat' }));
    await s.skip(() => s.page.getByRole('button', { name: 'Close chat' }).waitFor());
    await s.wait(2000);
    const r = await s.close();
    clip('rs-comms-clip', r, { poster: 3 });

    // the Trackside view as Alex Mechanic
    const a = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await a.goto('/comms');
    await a.mustReload(a.page.getByText('Remote Support').first(), 60000);
    await a.settle(800);
    const hubSel = a.page.getByRole('combobox').first();
    const rsBtn = a.page.getByRole('button').filter({ hasText: /^Remote Support/ }).first();
    await a.shot('rs-trackside-cover', { scroll: false, at: { 1: hubSel, 2: rsBtn } });
    await a.shot('rs-ai-support', { scroll: false, at: { 1: a.page.getByRole('button', { name: 'AI Support' }), 2: tab(a, 'AI Chats') } });
    await a.tap(rsBtn);
    await a.page.getByText('On cover', { exact: true }).first().waitFor({ timeout: 60000 });
    await a.settle(600);
    await a.type(a.page.getByPlaceholder(/Type a message/), 'Kart 307 shows Repair Required but the bumper is fitted');
    await a.shot('rs-trackside-send', { scroll: false, at: { 3: a.page.getByText('On cover', { exact: true }).first() } });
    await a.close();
  },
};
