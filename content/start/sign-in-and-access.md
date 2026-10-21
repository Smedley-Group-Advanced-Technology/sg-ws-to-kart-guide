# Signing in and access

:::defaults
persona: Alex Mechanic
device: tablet
url: /auth
:::

This page shows how to sign in to KART, set your own password the first time, wait for approval, join a hub with a link and ask for access to another hub.

!!! info "What changed from the Workshop App"
    - You sign in to **KART** with your KART account, not your Workshop App account. Your hub lead (the person who runs your hub) makes sure you have one before your hub's switch-over day.
    - The Workshop App had roles such as mechanic or purchaser. KART uses **permissions** instead. A mechanic needs the **Workshop** permission and access to the hub. See [Users and permissions](../fkl-central/users.md).
    - In KART you can belong to more than one hub. You pick the hub each time on the hub selection screen.

## Sign in

<!-- clip first so readers can watch before they follow the steps -->
:::clip start-sign-in-clip
caption: signing in to KART and opening the Workshop for Demo Hub
duration: 40
url: /auth
steps:
  - Open http://localhost:9080/auth
  - Type alex.mechanic@demo-fkl.example in Email
  - Type the demo password in Password
  - Tap Sign In and wait for Select your Hub
  - Choose Demo Hub in the hub dropdown
  - Tap the Workshop card and show the new tab opening on Overview
captions:
  - "Open KART in your browser."
  - "Type your e-mail address."
  - "Type your password."
  - "Tap Sign In."
  - "KART opens on Select your Hub."
  - "Choose your hub."
  - "Tap Workshop. It opens in a new tab."
:::

1. Open KART in your browser. Your hub lead gives you the address. Save it as a bookmark.

    :::shot start-signin-page
    caption: The KART sign-in card with the Sign In and Sign Up tabs
    steps:
      - Open /auth while signed out
    callouts:
      - [1, "text=FKL KART", "The KART sign-in card"]
      - [2, "role=tab[name='Sign In']", "Make sure Sign In is selected"]
    :::

2. Type your e-mail address in **Email**.

    :::shot start-signin-email
    caption: E-mail address typed in the Email field
    steps:
      - Type alex.mechanic@demo-fkl.example in Email
    callouts:
      - [1, "label=Email", "Your work e-mail address"]
    :::

3. Type your password in **Password**.

    :::shot start-signin-password
    caption: Password typed in the Password field, shown as dots
    steps:
      - Type the demo password in Password
    callouts:
      - [1, "label=Password", "Your KART password"]
    :::

4. Tap **Sign In**. KART says **Successfully signed in!** and opens **Select your Hub**.

    :::shot start-signin-success
    caption: Select your Hub after signing in, with the Successfully signed in message
    steps:
      - Tap Sign In
      - Wait for the toast and the Select your Hub page
    callouts:
      - [1, "text=Successfully signed in!", "You are in"]
      - [2, "text=Select your Hub", "Pick your hub next"]
    :::

5. Using a phone? The sign-in card is the same, just narrower. Follow the same steps.

    :::shot start-signin-phone
    caption: The KART sign-in card on a phone
    device: phone
    steps:
      - Open /auth on the phone viewport while signed out
    callouts:
      - [1, "text=Sign In", "Same card, same steps"]
    :::

!!! tip "Tip"
    Forgot your password? Tap **Forgot your password?**, type your e-mail and tap **Send Reset Email**. Open the e-mail and follow the link. Tap **Back to Sign In** to return.

!!! warning "Watch out"
    KART signs you out after 36 hours without use on a device. You then see **You were signed out after 36 hours of inactivity on this device.** Just sign in again. Nothing you saved is lost.

## Your first sign-in with a temporary password

If a hub manager or admin created your account for you, they give you a temporary password. KART asks you to choose your own the first time.

1. Sign in with your e-mail and the temporary password.

    :::shot start-temp-signin
    caption: Signing in with a temporary password
    persona: Jamie Newstarter
    state: "Variant: Jamie's account was made with Create user and a temporary password (record on a fresh seed, before the sign-up shots)"
    steps:
      - Type jamie.newstarter@demo-fkl.example and the temporary password
      - Tap Sign In
    callouts:
      - [1, "text=Sign In", "Use the temporary password once"]
    :::

2. KART opens **Set your password**. Type a new password in **New Password**. Use at least 10 characters.

    :::shot start-set-password
    caption: The Set your password screen with New Password and Confirm Password
    persona: Jamie Newstarter
    url: /change-password
    state: "Variant: Jamie's account made with Create user, first sign-in"
    steps:
      - Type a new password of at least 10 characters in New Password
    callouts:
      - [1, "text=Set your password", "KART asks for your own password"]
      - [2, "label=New Password", "At least 10 characters"]
    :::

3. Type it again in **Confirm Password**.

    :::shot start-confirm-password
    caption: The new password typed again in Confirm Password
    persona: Jamie Newstarter
    url: /change-password
    state: "Variant: Jamie's account made with Create user, first sign-in"
    steps:
      - Type the same password in Confirm Password
    callouts:
      - [1, "label=Confirm Password", "Same password again"]
    :::

4. Tap **Save password**. KART shows **Password updated** and signs you out on your other devices.

    :::shot start-password-updated
    caption: Password updated message after saving the new password
    persona: Jamie Newstarter
    url: /change-password
    state: "Variant: Jamie's account made with Create user, first sign-in"
    steps:
      - Tap Save password
      - Wait for the Password updated toast
    callouts:
      - [1, "text=Password updated", "Done: use this password from now on"]
    :::

!!! warning "Watch out"
    A temporary password expires. If KART says **Your temporary password has expired**, ask your hub manager or an admin for a new one, or tap **Send me a reset e-mail**.

## Sign up with a join link

Your hub manager can send you a join link. It takes you straight to your hub, and the request goes to that hub's managers.

1. Open the join link your hub manager sent you. KART opens on the **Sign Up** tab and says **You are joining Demo Hub. A manager of this hub will approve your account.**

    :::shot start-join-link
    caption: The Sign Up tab opened from a join link for Demo Hub
    persona: Jamie Newstarter
    url: /auth?join=DE0DE0000001
    state: "A Demo Hub join link exists (code shown in the URL); Jamie not signed up yet (record before Jamie's sign-up is seeded)"
    steps:
      - Open the join link
    callouts:
      - [1, "text=You are joining", "The hub you are joining"]
    :::

2. Type your name in **Full Name**.

    :::shot start-signup-name
    caption: Full Name filled in on the Sign Up tab
    persona: Jamie Newstarter
    url: /auth?join=DE0DE0000001
    steps:
      - Type Jamie Newstarter in Full Name
    callouts:
      - [1, "label=Full Name", "Your full name"]
    :::

3. Type your initials in **Initials**. KART shows them on everything you record.

    :::shot start-signup-initials
    caption: Initials JN typed in the Initials field
    persona: Jamie Newstarter
    url: /auth?join=DE0DE0000001
    steps:
      - Type JN in Initials
    callouts:
      - [1, "label=Initials", "Up to 5 letters"]
    :::

4. Type your e-mail in **Email** and a password in **Password**.

    :::shot start-signup-email
    caption: Email and Password filled in on the Sign Up tab
    persona: Jamie Newstarter
    url: /auth?join=DE0DE0000001
    steps:
      - Type jamie.newstarter@demo-fkl.example in Email
      - Type a password in Password
    callouts:
      - [1, "label=Email", "Your work e-mail"]
      - [2, "label=Password", "Choose a password"]
    :::

5. Tap **Sign Up**. KART says **Account Created** and opens **Waiting for approval**.

    :::shot start-signup-done
    caption: Account Created message and the Waiting for approval screen
    persona: Jamie Newstarter
    url: /pending
    steps:
      - Tap Sign Up
      - Wait for the Waiting for approval page
    callouts:
      - [1, "text=Waiting for approval", "A Demo Hub manager reviews it"]
    :::

## Waiting for approval

1. Leave the **Waiting for approval** screen open, or come back later. It says who reviews your request and updates by itself.

    :::shot start-pending
    caption: Waiting for approval, showing that a manager of Demo Hub will review the request
    persona: Jamie Newstarter
    url: /pending
    state: Jamie Newstarter pending at Demo Hub
    steps:
      - Sign in as Jamie Newstarter
    callouts:
      - [1, "text=Waiting for approval", "Your request is waiting"]
      - [2, "text=This page updates by itself", "No need to refresh"]
    :::

2. No join link? Paste a join code in **Join code or link**, or pick a hub in **Or choose a hub**, then tap **Send request**.

    :::shot start-pending-request
    caption: Join code or link and Or choose a hub on the waiting screen
    persona: Jamie Newstarter
    url: /pending
    state: Jamie Newstarter pending at Demo Hub
    steps:
      - Point at Join code or link and Or choose a hub
    callouts:
      - [1, "text=Join code or link", "Paste the code from your hub manager"]
      - [2, "text=Or choose a hub", "Or pick your hub"]
      - [3, "text=Send request", "Send it"]
    :::

3. When you are approved, the waiting page opens **Select your Hub** by itself (it checks about once a minute). If it shows **Your account has been approved** instead, tap **Continue**.

    :::shot start-approved
    caption: Your account has been approved with the Continue button
    persona: Jamie Newstarter
    url: /pending
    state: "After Morgan Manager approves Jamie (record after the approvals clip)"
    steps:
      - Wait on the waiting page while a manager approves Jamie
    callouts:
      - [1, "text=Your account has been approved", "You are in"]
      - [2, "text=Continue", "Tap Continue"]
    :::

!!! note "Remember"
    **Without a join code your request goes to an administrator.** That can take longer. Ask your hub manager for a join link if you can.

!!! warning "Watch out"
    If your request is declined you see **Access request declined** and the reason. You can tap **Apply again** 24 hours after a decision, or straight away with a new join link from your hub manager.

## Ask for access to another hub

1. On **Select your Hub**, tap the hub you need in the hub list. Hubs you cannot use yet are greyed out with a lock and **Request Access**, but you can still choose them.

    :::shot start-locked-hub
    caption: Demo Hub North greyed out with a lock and Request Access
    url: /hub-selection
    steps:
      - Open the Select a hub dropdown
    callouts:
      - [1, "text=Demo Hub North", "A hub you cannot use yet"]
      - [2, "text=Request Access", "Ask for access"]
    :::

2. With that hub chosen, tap one of its cards, for example **Technical**. KART shows **Hub Access Required**.

    :::shot start-request-access-dialog
    caption: The Hub Access Required dialog
    url: /hub-selection
    steps:
      - Choose Demo Hub North in the hub list
      - Tap the Technical card
    callouts:
      - [1, "text=Hub Access Required", "Check the hub name"]
    :::

3. Tap **Request Access** in the dialog. KART says **Access request sent successfully**. The request goes to an admin and to that hub's managers.

    :::shot start-request-access-sent
    caption: The Access request sent successfully message after tapping Request Access
    url: /hub-selection
    steps:
      - Tap Request Access in the dialog
    callouts:
      - [1, "text=Access request sent successfully", "The request is on its way"]
    :::

## You can sign in but there is no Workshop card

You need two things to use the Workshop: the **Workshop** permission and access to the hub. Without the permission you can still see the hub's karts in other areas, but you cannot start services, raise or update repairs, or record parts. Ask your hub lead. See [Troubleshooting](../troubleshooting.md).
