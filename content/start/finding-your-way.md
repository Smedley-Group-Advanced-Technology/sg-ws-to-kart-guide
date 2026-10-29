# Finding your way

:::defaults
persona: Alex Mechanic
device: tablet
url: /hub-selection
state: Alex Mechanic signed in
:::

KART has no side menu. You move around with the hub selection cards, the **Back** button at the top of each page and the Workshop tab strip. This page shows all three.

!!! info "What changed from the Workshop App"
    - The Workshop App had one menu with Workshop, On Event, Parts & Consumables, Management and Calendar. In KART you start on **Select your Hub** and open an area with a card: **Workshop**, **Technical** or **Event Operations**.
    - Each card **opens a new browser tab**. That is normal.
    - Inside the Workshop, the old menu items are tabs along the top: **Overview**, **Stores**, **Service Queue**, **Servicing**, **Campaign work**, **Schedule** and, for hub managers, **Workshop Manager**.

## Choose your hub and an area

1. After signing in you see **Select your Hub**. Tap the hub list.

    :::shot start-hub-dropdown
    caption: The Select a hub dropdown on Select your Hub
    steps:
      - Tap the Select a hub dropdown
    callouts:
      - [1, "text=Select your Hub", "The start screen"]
      - [2, "text=Select a hub", "Tap to choose your hub"]
    :::

2. Tap **Demo Hub** (your own hub). The area cards appear.

    :::shot start-hub-cards
    caption: The Workshop, Technical and Event Operations cards for Demo Hub
    steps:
      - Choose Demo Hub in the dropdown
    callouts:
      - [1, "text=Workshop", "Servicing, parts and repairs"]
      - [2, "text=Technical", "Reliability tickets and damage"]
      - [3, "text=Event Operations", "Events and Race to Chassis"]
    :::

3. Tap **Workshop**. KART opens it in a **new browser tab**, on the **Overview** tab.

    :::shot start-new-tab
    caption: The Workshop open in a second browser tab on Overview
    url: /workshop
    steps:
      - Tap the Workshop card
      - Show the browser tab bar with two KART tabs
    callouts:
      - [1, "text=Overview", "You land on Overview"]
      - [2, "text=Back", "Back takes you one step back"]
    :::

!!! tip "Tip"
    Keep the **Select your Hub** tab open. When you want another area, switch back to it and tap the next card. Close tabs you no longer need so the tablet stays quick.

!!! note "Remember"
    Hub managers, FKL Central, admins and remote support see extra buttons under the cards: **Admin Access**, **FKL Central**, **Remote Support** and **Hub Manager**. You only see the buttons for your own permissions.

    :::shot start-hub-buttons
    caption: Extra buttons under the cards for a hub manager
    persona: Morgan Manager
    device: desktop
    steps:
      - Sign in as Morgan Manager
      - Choose Demo Hub
    callouts:
      - [1, "text=Hub Manager", "Only with the hub manager permission"]
    :::

## The Workshop tab strip

1. Look at the row of tabs under the page title. This is how you move around the Workshop.

    :::shot start-tab-strip
    caption: The Workshop tab strip with Overview, Stores, Service Queue, Servicing, Campaign work and Schedule
    url: /workshop
    steps:
      - Open the Workshop for Demo Hub
    callouts:
      - [1, "text=Overview", "Fleet board and cards"]
      - [2, "text=Stores", "Parts and consumables"]
      - [3, "text=Service Queue", "Karts that need a service, and repairs"]
      - [4, "text=Servicing", "The service you are working on"]
      - [5, "text=Campaign work", "Campaign tasks"]
      - [6, "text=Schedule", "Your weekly schedule"]
    :::

2. On a narrow screen, swipe the tab strip sideways to see the rest.

    :::shot start-tab-strip-phone
    caption: The tab strip on a phone, scrolled sideways to Schedule
    device: phone
    url: /workshop
    steps:
      - Open the Workshop on the phone viewport
      - Swipe the tab strip left until Schedule shows
    callouts:
      - [1, "text=Schedule", "Swipe to see more tabs"]
    :::

3. Hub managers also see **Workshop Manager** at the end of the strip.

    :::shot start-tab-strip-manager
    caption: The Workshop Manager tab at the end of the strip for a hub manager
    persona: Morgan Manager
    device: desktop
    url: /workshop
    steps:
      - Sign in as Morgan Manager and open the Workshop for Demo Hub
    callouts:
      - [1, "text=Workshop Manager", "Hub managers and admins only"]
    :::

## The header buttons

1. Look at the buttons at the top right of most pages:

    - The two clocks show your hub's local time and UTC (world time).
    - **SOP Viewer** opens your hub's SOPs (standard operating procedures: the written way your hub does each job).
    - **FKL Support** opens automatic help answers. It is not a person. For a person, see [Getting help](#getting-help).
    - The bell shows your notifications: kart chat messages, FKL Support replies and, for FKL Central users, new part requests. The flag changes the language. The sun switches between light and dark screens.
    - The arrow at the far right signs you out.

    :::shot start-header
    caption: Header buttons SOP Viewer, FKL Support, notifications, language, theme and sign out
    url: /workshop
    steps:
      - Open the Workshop Overview
    callouts:
      - [1, "text=SOP Viewer", "Opens the hub's SOPs in a new tab"]
      - [2, "text=FKL Support", "Help chat"]
      - [3, "css=button:has(svg.lucide-bell)", "Notifications"]
      - [4, "css=button:has(.sr-only:text('Sign out'))", "Sign out"]
    :::

2. To sign out, tap the sign-out icon at the far right.

    :::shot start-signout
    caption: The sign-out icon at the right of the header
    url: /workshop
    steps:
      - Hover the sign-out icon
    callouts:
      - [1, "css=button:has(.sr-only:text('Sign out'))", "Sign out here"]
    :::

## Back buttons

1. Most pages have a back arrow at the top left. Tap it to go back one step. It often names the page it goes back to, for example **Back**, **Workshop** or **Back to Hub Selection**.

    :::shot start-back
    caption: The Back button at the top left of the Workshop page
    url: /workshop
    steps:
      - Point at the Back button
    callouts:
      - [1, "text=Back", "Go back one step"]
    :::

!!! warning "Watch out"
    Do not use the browser's own back arrow in the middle of a dialog. Close the dialog with **Cancel** first, then go back.

## Using a tablet or phone

1. On a phone the header buttons show as icons only, and the cards sit one under the other.

    :::shot start-phone-cards
    caption: The hub selection cards stacked on a phone
    device: phone
    steps:
      - Open Select your Hub on the phone viewport and choose Demo Hub
    callouts:
      - [1, "text=Workshop", "Cards stack on a phone"]
    :::

2. Turn the tablet sideways (landscape) for the Service Queue, Servicing and Race to Chassis. You see more columns at once.

    :::shot start-tablet-landscape
    caption: The Service Queue on a landscape tablet with all lanes visible
    url: /workshop/repairs
    steps:
      - Open Service Queue on the tablet viewport
    callouts:
      - [1, "text=Requires service", "More lanes fit in landscape"]
    :::

## Adding KART to your home screen

KART can be added to the home screen of a tablet or phone. The icon is called **FKL**.

1. Open KART in the browser and sign in.

    :::shot start-a2hs-open
    caption: KART open in the tablet browser
    steps:
      - Open /hub-selection in the tablet browser
    callouts:
      - [1, "text=Select your Hub", "Sign in first"]
    :::

2. Open the browser's share or menu button and choose **Add to Home Screen** (the wording depends on the browser).

    :::shot start-a2hs-menu
    caption: The browser menu with Add to Home Screen
    steps:
      - "Open the browser menu (recorder: show a mock-up frame, this is browser UI and not part of KART)"
    callouts:
      - [1, "text=Add to Home Screen", "Browser menu item"]
    :::

!!! warning "Watch out"
    The home-screen icon opens KART on **FKL Support** (the automatic help chat) if you have it, otherwise on **Select your Hub**. A browser bookmark of the hub selection page is often quicker for workshop work.

## Getting help

- **Ask your hub lead first.** The hub lead is the person who runs your hub. In KART they usually have the Hub Manager permission. They help with accounts, access and how your hub works.
- **KART problems** (a wrong status, a missing record, an error): tell your hub manager (hub lead), with the kart number. For help with KART itself, open **KART Comms** and start with **AI Support**; the AI escalates to Remote Support or FKL Central when a person is needed. KART Comms is KART's messenger. It has no button in KART. Ask your hub lead to save it as a bookmark on the workshop tablet. See [KART Comms](../remote-support/comms.md).
- **FKL Support** (blue button at the top, round button at the bottom right) gives automatic answers to questions about KART. It is not a person. It has no **Remote Support** chat for new users: a person is reached only when the AI escalates. If you had a Remote Support chat there before, it stays.

!!! note "Remember"
    Always give the kart number when you ask about a kart.
