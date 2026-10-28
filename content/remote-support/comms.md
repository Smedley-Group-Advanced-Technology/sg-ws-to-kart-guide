# KART Comms

:::defaults
persona: Riley Support
device: desktop
url: /comms
state: "Riley Support on cover for Demo Hub today; Alex Mechanic's support chat about Junior 307 claimed by Riley; one unassigned chat from Casey Mechanic"
:::

**KART Comms** is KART's messenger. Hub staff see the **Trackside** view: they ask **AI Support** first (the AI escalates to Remote Support or FKL Central) and message colleagues. Remote support and admins see the **Support** view: a queue of chats to claim, answer and close.

!!! info "What changed from the Workshop App"
    - Help with KART starts with **AI Support** in KART Comms, not the Workshop App. The AI escalates to Remote Support or FKL Central when a person is needed.
    - KART Comms has no menu link. Open it at the address ending in `/comms`, or use the KART Comms desktop app.
    - Mentions with **@** and two letters list colleagues by name and initials, never e-mail addresses.

## Open KART Comms

1. Open the KART address ending in **/comms**, for example by adding `/comms` after the address in the browser bar. Bookmark it.

    :::shot rs-comms-open
    caption: "Step 1: KART Comms open in the browser at /comms (Support view)"
    steps:
      - Open /comms
    callouts:
      - [1, "text=KART Comms", "The messenger"]
    :::

## Trackside view: asking for help (hub staff)

:::shot rs-trackside-cover
caption: "Steps 1 and 4 on one screen: the Trackside view with the hub and the Remote Support chat"
persona: Alex Mechanic
device: tablet
steps:
  - Sign in as Alex Mechanic and open /comms
callouts:
  - [1, "text=Demo Hub", "Your hub"]
  - [2, "text=Remote Support", "Your chat with remote support"]
:::

AI Support is always the first point of contact. Only the AI passes a chat on to Remote Support or FKL Central.

1. As hub staff you see the **Trackside** view. At the top, check your hub. If KART asks, **Choose the hub you are working at**.

2. Tap **AI Support** and type your question, with the kart number. See [AI Support](#ai-support).

3. If the answer does not solve it, tap **Ask remote support** in the AI chat. The AI escalates the chat to Remote Support or FKL Central, and a person replies in the same chat.

4. Once the AI has passed your chat on, **Remote Support** also appears in the list, so you can reply in that chat later. Its header shows the hub and who is **On cover** today. Type your reply and tap the send button (**Send**).

    :::shot rs-trackside-send
    caption: "Step 4: a reply in an escalated support chat, under the On cover header"
    persona: Alex Mechanic
    device: tablet
    steps:
      - Tap Remote Support
      - Type "Kart 307 shows Repair Required but the bumper is fitted"
    callouts:
      - [4, "text=On cover", "Who covers your hub today"]
    :::

!!! note "Remember"
    If nobody is on cover the header says **Unassigned** and every remote support person is alerted.

## Support view: answering chats

:::clip rs-comms-clip
caption: claiming, answering and closing a support chat in KART Comms
duration: 40
steps:
  - Open /comms as Riley Support
  - Tap Unassigned and open Casey Mechanic's chat
  - Tap Claim
  - Type a reply and tap Send
  - Tap Close chat
  - Show Reopen chat on the closed chat
captions:
  - "The Support view lists chats to answer."
  - "Unassigned chats wait for someone."
  - "Tap Claim to take it."
  - "Reply to the staff member."
  - "Close the chat when it is solved."
  - "Reopen it if needed."
:::

:::shot rs-support-queue
caption: "Steps 1 and 2 on one screen: the Support view with Unassigned open and Casey Mechanic's chat"
state: "Casey Mechanic has sent an unassigned support chat"
steps:
  - Tap Unassigned
callouts:
  - [1, "text=My queue", "Your work"]
  - [2, "role=tab[name=/Unassigned/]", "Waiting for someone"]
:::

1. Tap **My queue** for chats claimed by you and chats for hubs you cover.

2. Tap **Unassigned** to see chats nobody has taken.

3. Open the chat and tap **Claim**. Others see it is **Claimed by** you.

    :::shot rs-support-claim
    caption: "Steps 3 to 5 on one screen: Casey Mechanic's chat with Claim, a reply typed and Close chat"
    state: "Casey Mechanic has sent an unassigned support chat"
    steps:
      - Open Casey Mechanic's chat
      - Type a reply
    callouts:
      - [3, "role=button[name='Claim']", "Take the chat"]
      - [4, "role=button[name='Send']", "Reply"]
      - [5, "text=Close chat", "Solved"]
    :::

4. Type your reply and tap the send button (**Send**).

5. When it is solved, tap **Close chat**. The staff member can still read it.

6. To carry on later, open the closed chat and tap **Reopen chat**.

!!! tip "Tip"
    Use **Search** to find chats by staff member, hub or message. Each chat has a tag: **My cover** for hubs you cover today, **Cover:** and a name when someone else covers it, **Unassigned** or **Claimed by**.

## AI Support

**AI Support** gives automatic answers from the FKL knowledge base. It is not a person, and it is the first point of contact for help with KART. When it cannot solve a problem, it escalates the chat to Remote Support or FKL Central (**Ask remote support**). For a status that looks wrong on a real kart, also tell your hub manager (hub lead), with the kart number.

1. Hub staff tap **AI Support** to start an AI chat and type a question. The answer appears in the chat. Their AI chats are listed under **AI Chats**. Remote support can read them under **AI** in the Support view, and answers escalated chats there.

    :::shot rs-ai-support
    caption: "Step 1: the AI Support button and the AI Chats list in the Trackside view"
    persona: Alex Mechanic
    device: tablet
    steps:
      - Open /comms as Alex Mechanic
    callouts:
      - [1, "text=AI Support", "Automatic answers"]
      - [2, "text=AI Chats", "Earlier AI chats"]
    :::

!!! warning "Watch out"
    Never paste passwords or personal data into any chat.
