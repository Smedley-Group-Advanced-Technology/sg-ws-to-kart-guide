# Approvals: join links and new users

:::defaults
persona: Morgan Manager
device: desktop
url: /hub-manager
state: "Jamie Newstarter pending at Demo Hub (signed up with a Demo Hub join link)"
:::

New people get into your hub in one of two ways: they sign up with your join link and you approve them, or you create the account yourself with a temporary password. Both happen in **Pending approvals** on the **Hub Manager** dashboard.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Manage Users** is split: hub managers handle their own hubs in **Pending approvals**; admins handle everything on the Admin page. See [Users and permissions](../fkl-central/users.md).
    - Hub managers can give the **Workshop** and **Purchasing** permissions only.
    - You approve only for hubs you hold access to.

## Open Pending approvals

1. On **Select your Hub**, tap **Hub Manager**.

    :::shot hm-appr-button
    caption: The Hub Manager button on Select your Hub
    url: /hub-selection
    steps:
      - Choose Demo Hub
    callouts:
      - [1, "text=Hub Manager", "Your dashboard"]
    :::

2. Tap the **Pending approvals** tile.

    :::shot hm-appr-tile
    caption: The Pending approvals tile showing 1 waiting
    steps:
      - Open the Hub Manager dashboard
    callouts:
      - [1, "text=Pending approvals", "Sign-ups and access requests"]
    :::

## Approve a sign-up

:::clip hm-approve-clip
caption: approving Jamie Newstarter's join request
duration: 40
steps:
  - Open the Hub Manager dashboard and tap Pending approvals
  - On Requests, show Jamie's Sign-up row via join link
  - Tap Approve
  - Show Request approved and the empty list
captions:
  - "Open Pending approvals."
  - "Check who is asking and for which hub."
  - "Tap Approve."
  - "They can sign in now."
:::

1. On **Requests**, find the person. The row says **Sign-up** or **Extra hub**, the hub, and **via join link** if they used one.

    :::shot hm-appr-row
    caption: Jamie Newstarter's Sign-up row via join link
    steps:
      - Tap Pending approvals
    callouts:
      - [1, "text=Sign-up", "A new account"]
      - [2, "text=via join link", "Used your link"]
    :::

2. Tap **Approve**.

    :::shot hm-appr-approve
    caption: The Approve button on the request row
    steps:
      - Tap Approve
    callouts:
      - [1, "text=Approve", "Let them in"]
    :::

3. Then give them the permissions they need (see below). A new mechanic needs **Workshop**.

    :::shot hm-appr-done
    caption: Request approved message
    steps:
      - Wait for Request approved
    callouts:
      - [1, "text=Request approved", "Done"]
    :::

!!! warning "Watch out"
    To refuse, tap **Reject** and type a **Reason**. **The applicant sees this reason.** Keep it short and polite.

## Create a join link

1. Open the **Join links** tab and tap **Create join link**.

    :::shot hm-join-tab
    caption: The Join links tab with Create join link
    steps:
      - Tap the Join links tab
    callouts:
      - [1, "text=Join links", "Your hub's links"]
      - [2, "text=Create join link", "New link"]
    :::

2. Set **Valid for (days)** (1 to 90), and optionally **Maximum uses (optional)** and **Label (optional)**.

    :::shot hm-join-form
    caption: The join link form with Valid for, Maximum uses and Label
    steps:
      - Type 14 in Valid for (days), 5 in Maximum uses, "New mechanics" in Label
    callouts:
      - [1, "text=Valid for (days)", "1 to 90 days"]
    :::

3. Tap **Create join link**, then **Copy link** and send it to the new person.

    :::shot hm-join-copy
    caption: The new link with Copy link
    steps:
      - Tap Create join link
      - Tap Copy link
    callouts:
      - [1, "text=Copy link", "Send it to the new starter"]
    :::

!!! tip "Tip"
    Tap **Revoke** to stop a link working. People who already signed up with it keep their request.

## Create a user with a temporary password

1. Open the **Create user** tab. Fill in **Full Name**, **Initials (optional)**, **Email** and **Repeat e-mail**.

    :::shot hm-create-form
    caption: The Create user form
    steps:
      - Tap the Create user tab
    callouts:
      - [1, "text=Full Name", "Their full name"]
      - [2, "text=Repeat e-mail", "Typed twice to avoid mistakes"]
    :::

2. Choose the **Hub** and tick **Permissions**: Workshop, and Purchasing if they place orders.

    :::shot hm-create-perms
    caption: Hub Demo Hub and the Workshop permission ticked
    steps:
      - Choose Demo Hub and tick Workshop
    callouts:
      - [1, "text=Hub managers can give Workshop and Purchasing only.", "Your limit"]
    :::

3. Tap **Create user**. KART shows a **Temporary password**. Tap **Copy password** and give it to the person in private.

    :::shot hm-create-password
    caption: Temporary password with Copy password
    steps:
      - Tap Create user
    callouts:
      - [1, "text=Temporary password", "Shown only now"]
      - [2, "text=Copy password", "Copy it"]
    :::

4. Tick **I have passed the password on** and tap **Done**. They must choose their own password at first sign-in.

    :::shot hm-create-done
    caption: I have passed the password on ticked, with Done
    steps:
      - Tick the box and tap Done
    callouts:
      - [1, "text=I have passed the password on", "Confirm"]
    :::

!!! note "Remember"
    **Awaiting first sign-in** lists accounts whose owner has not signed in yet.

## Extra hub requests

People from another hub can ask for access to yours with **Request Access**. Their row says **Extra hub**. Approve it the same way.

!!! abstract "Coming with your hub's switch-over"
    Before your hub's switch-over day, every mechanic needs a KART account with the **Workshop** permission and access to your hub. Mechanics with an account but no Workshop permission can see the karts but cannot start services, raise or update repairs, or record parts. Check your team list with a KART admin well before the day.
