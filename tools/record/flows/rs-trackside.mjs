// KART Comms, Trackside view (D-38): new help starts in AI Support. Casey Mechanic (no Remote Support chat) sees the hub
// and AI Support; Alex Mechanic opens an AI chat that was escalated to Remote Support (taken by Riley Support) and
// types a reply. The escalated chat is seeded server-side (the local stack has no OpenAI key).
import { HUB, PERSONAS } from '../lib/config.mjs';
import { sql } from '../lib/db.mjs';

const tab = (s, name) => s.page.locator('[role=tab]').filter({ hasText: new RegExp(`^${name}`) }).first();

// Alex's AI chat about Junior 307: two turns with the AI, escalated by the user, taken by Riley who replied.
function alexEscalatedAiChat() {
  const alex = PERSONAS['Alex Mechanic'].id;
  const riley = PERSONAS['Riley Support'].id;
  sql(`WITH c AS (
  INSERT INTO public.assistant_conversations (user_id, title, status, outcome, hub_id, assigned_support_user_id, escalated_at,
                                              escalated_event_date, created_at, updated_at, last_user_message_at)
  VALUES ('${alex}', 'Junior 307 shows Repair Required', 'Requires support', 'escalated', '${HUB}', '${riley}',
          now() - interval '20 minutes', (now() AT TIME ZONE 'Europe/London')::date, now() - interval '30 minutes',
          now() - interval '5 minutes', now() - interval '20 minutes')
  RETURNING id)
INSERT INTO public.assistant_messages (conversation_id, role, content, sender_user_id, created_at)
SELECT c.id, v.role, v.content, v.sender, now() - v.ago
  FROM c, (VALUES
    ('user', 'Junior 307 shows Repair Required on the fleet board.', '${alex}'::uuid, interval '30 minutes'),
    ('assistant', 'A kart shows Repair Required while a stopping ticket or a blocking repair is open. Open Junior 307 and check its open tickets and repairs. Is one of them already fixed?', NULL, interval '29 minutes'),
    ('user', 'The bumper repair is done but it still shows Repair Required. Please put me through to Remote Support.', '${alex}'::uuid, interval '21 minutes'),
    ('system', 'Escalated to Remote Support by the user.', NULL, interval '20 minutes'),
    ('support', 'Hi Alex, Riley here. I am looking at the 307 ticket now. Did you log the remedy on the repair?', '${riley}'::uuid, interval '5 minutes')
  ) AS v(role, content, sender, ago);`);
}

export default {
  shots: ['rs-trackside-cover', 'rs-trackside-send'],
  reset: true,
  async run({ open }) {
    alexEscalatedAiChat();

    // Casey Mechanic: no Remote Support chat, so the Trackside view offers the hub and AI Support only.
    const c = await open({ persona: 'Casey Mechanic', device: 'tablet' });
    await c.goto('/comms');
    await c.mustReload(c.page.getByRole('button', { name: 'AI Support' }), 60000);
    await c.settle(800);
    await c.shot('rs-trackside-cover', { scroll: false, at: { 1: c.page.getByRole('combobox').first(),
      2: c.page.getByRole('button', { name: 'AI Support' }) } });
    await c.close();

    // Alex Mechanic: the escalated AI chat under AI Chats, a reply typed.
    const a = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await a.goto('/comms');
    await a.mustReload(tab(a, 'AI Chats'), 60000);
    await a.settle(600);
    await a.tap(tab(a, 'AI Chats'));
    await a.page.getByText('Junior 307 shows Repair Required').first().waitFor({ timeout: 60000 });
    await a.tap(a.page.getByText('Junior 307 shows Repair Required').first());
    await a.page.getByText(/Riley here/).first().waitFor({ timeout: 60000 });
    await a.settle(800);
    await a.type(a.page.locator('textarea').last(), 'Kart 307 shows Repair Required but the bumper is fitted');
    await a.shot('rs-trackside-send', { scroll: false, at: { 4: a.page.getByText('Requires support', { exact: true }).first() } });
    await a.close();
  },
};
