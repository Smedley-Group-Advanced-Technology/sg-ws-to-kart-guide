# Direct chats

:::defaults
persona: Alex Mechanic
device: tablet
url: /comms
state: "Existing direct chat between Alex Mechanic and Casey Mechanic"
:::

Any staff member can start a direct chat with a colleague in KART Comms. It is a quick way to ask the other shift a question or share a photo.

Who can start a new direct chat with whom:

| You are | You can start a new chat with |
|---|---|
| Staff (no Remote support permission) | Any colleague except remote support people. Reach remote support through **AI Support** |
| Remote support | Anyone, including other remote support people |

Chats you already have stay as they are, also chats with remote support people.

!!! info "What changed from the Workshop App"
    - **New direct chats are private to the two people in them.** Remote support and admins do not see them.
    - **Existing chats keep their visibility.** A chat that existed before stays as visible as it was.
    - **Starting a chat with someone you have chatted with before reopens that same chat.**
    - **Only remote support can start a new chat with a remote support person.** Everyone else asks **AI Support**, which escalates to remote support when a person is needed.
    - Notifications show names or initials, never e-mail addresses.

## Start a direct chat

:::clip rs-direct-clip
caption: starting a direct chat with a colleague in KART Comms
duration: 40
steps:
  - Open /comms as Alex Mechanic
  - Type "Ca" in the new direct chat search
  - Choose Casey Mechanic
  - Show the existing chat reopening, type a message and tap Send
captions:
  - "Open KART Comms."
  - "Search for a colleague by name or initials."
  - "Choose them."
  - "Your earlier chat opens again."
  - "Type and send."
:::

:::shot rs-direct-search
caption: "Steps 1 and 2 on one screen: Direct Chats with Ca typed in the new direct chat search"
steps:
  - Open /comms
  - Type Ca in the search box
callouts:
  - [1, "css=input[placeholder^='New direct chat']", "Find a colleague"]
  - [2, "text=Casey Mechanic", "Tap to chat"]
:::

1. In KART Comms, tap **Direct Chats**. Tap the search box **New direct chat: find a colleague by name or initials**.

2. Type part of the name or the initials, for example "Ca" or "CM".

3. Tap the colleague. If you chatted before, the same chat opens again.

    A remote support person you have no chat with yet is greyed out with **Remote support: reach them through AI Support.** You cannot tap them. Use [AI Support](comms.md#ai-support) instead.

4. Type your message and tap the send button (**Send**). Use the paper clip (**Attach file**) for a photo.

    Photos and videos show in the chat. Other files, for example a PDF, download to your device when you tap them. They do not open in a new tab.

    :::shot rs-direct-send
    caption: "Steps 3 and 4 on one screen: the existing chat with Casey Mechanic and a message typed"
    steps:
      - Tap Casey Mechanic
      - Type "Can you check the 205 chain before you go?"
    callouts:
      - [3, "text=Casey Mechanic", "The same chat as before"]
      - [4, "role=button[name='Send']", "Send"]
    :::

## For remote support

1. In the Support view, type the person's name in the search box, for example "Morgan". Under **Start a direct chat**, tap the person to message them directly. As remote support you can start a chat with anyone, also with other remote support people.

    :::shot rs-direct-support
    caption: "Step 1: Morgan Manager under Start a direct chat in the Support view"
    persona: Riley Support
    device: desktop
    steps:
      - Open /comms as Riley Support
      - Type Morgan in the search box
    callouts:
      - [1, "text=Morgan Manager", "Tap to message"]
    :::

!!! note "Remember"
    You cannot see new private direct chats between two colleagues, even as remote support or admin. That is by design.

!!! tip "Tip"
    In a chat, type **@** and two letters to mention a colleague. KART lists names and initials only.
