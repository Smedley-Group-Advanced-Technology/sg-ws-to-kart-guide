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
    - Hub managers can give the **Workshop** and **Reliability** permissions only. **Workshop includes Reliability**: ticking Workshop ticks Reliability too. Only admins give **Purchasing**.
    - You approve only for hubs you hold access to.

## Open Pending approvals

:::shot hm-appr-button
caption: "Step 1: the Hub Manager button on Select your Hub"
url: /hub-selection
steps:
  - Choose Demo Hub
callouts:
  - [1, "text=Hub Manager", "Your dashboard"]
:::

1. On **Select your Hub**, tap **Hub Manager**.

2. Tap the **Pending approvals** tile.

    :::shot hm-appr-tile
    caption: "Step 2: the Pending approvals tile showing 1 waiting"
    steps:
      - Open the Hub Manager dashboard
    callouts:
      - [2, "text=Pending approvals", "Sign-ups and access requests"]
    :::

## Approve a sign-up

:::clip hm-approve-clip
caption: approving Jamie Newstarter's join request
duration: 40
steps:
  - Open the Hub Manager dashboard and tap Pending approvals
  - On Requests, show Jamie's Sign-up row via join link
  - Tick Workshop
  - Tap Approve
  - Show Request approved and the empty list
captions:
  - "Open Pending approvals."
  - "Check who is asking and for which hub."
  - "Tick Workshop for a new mechanic. Reliability ticks too."
  - "Tap Approve."
  - "They can sign in now."
:::

:::shot hm-appr-row
caption: "Steps 1 to 3 on one screen: Jamie Newstarter's Sign-up row via join link, Workshop and Reliability ticked and the Approve button"
steps:
  - Tap Pending approvals
  - Tick Workshop
callouts:
  - [1, "text=via join link", "Sign-up, hub, used your link"]
  - [2, "text=Workshop", "Permissions"]
  - [3, "text=Approve", "Let them in"]
:::

1. On **Requests**, find the person. The row says **Sign-up** or **Extra hub**, the hub, and **via join link** if they used one.

2. For a sign-up, tick the permissions they need. A new mechanic needs **Workshop**; ticking it also ticks **Reliability**. If they also need **Purchasing**, ask an admin.

3. Tap **Approve**. KART shows **Request approved** and they can sign in.

!!! warning "Watch out"
    To refuse, tap **Reject** and type a **Reason**. **The applicant sees this reason.** Keep it short and polite.

## Create a join link

:::shot hm-join
caption: "Steps 1 to 3 on one screen: the Join links tab with the new link form filled in"
steps:
  - Tap the Join links tab
  - Type 14 in Valid for (days), 5 in Maximum uses, "New mechanics" in Label
callouts:
  - [1, "text=Join links", "Your hub's links"]
  - [2, "text=Valid for (days)", "1 to 90 days"]
  - [3, "text=Create join link", "Then Copy link"]
:::

1. Open the **Join links** tab. The **Create join link** form is at the top; check the **Hub**.

2. Set **Valid for (days)** (1 to 90), and optionally **Maximum uses (optional)** and **Label (optional)**.

3. Tap **Create join link**, then **Copy link** and send it to the new person.

!!! tip "Tip"
    Tap **Revoke** to stop a link working. People who already signed up with it keep their request.

## Create a user with a temporary password

:::shot hm-create-form
caption: "Steps 1 to 3 on one screen: the Create user form filled in for Demo Hub with Workshop and Reliability ticked"
steps:
  - Tap the Create user tab
  - Fill in a demo name and e-mail, choose Demo Hub and tick Workshop
callouts:
  - [1, "text=Full Name", "Their details"]
  - [2, "text=Hub managers can give Workshop and Reliability only. Workshop includes Reliability.", "Hub and permissions"]
  - [3, "text=Create user", "Create it"]
:::

1. Open the **Create user** tab. Fill in **Full Name**, **Initials (optional)**, **Email** and **Repeat e-mail**.

2. Choose the **Hub** and tick **Permissions**: **Workshop** (it ticks **Reliability** too). Only admins give **Purchasing**.

3. Tap **Create user**. KART shows a **Temporary password**. Tap **Copy password** and give it to the person in private.

    :::shot hm-create-password
    caption: "Steps 3 and 4: the Temporary password with Copy password and the confirm box"
    steps:
      - Tap Create user
      - Tick I have passed the password on
    callouts:
      - [3, "text=Copy password", "Copy it, shown only now"]
      - [4, "text=I have passed the password on", "Tick, then Done"]
    :::

4. Tick **I have passed the password on** and tap **Done**. They must choose their own password at first sign-in.

!!! note "Remember"
    **Awaiting first sign-in** lists accounts whose owner has not signed in yet.

## Extra hub requests

People from another hub can ask for access to yours with **Request Access**. Their row says **Extra hub**. Approve it the same way.

!!! abstract "Coming with your hub's switch-over"
    Before your hub's switch-over day, every mechanic needs a KART account with the **Workshop** permission and access to your hub. Mechanics with an account but no Workshop permission can see the karts but cannot start services, raise or update repairs, or record parts. Check your team list with a KART admin well before the day.
