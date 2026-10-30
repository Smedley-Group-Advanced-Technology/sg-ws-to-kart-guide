# Race to Chassis

:::defaults
persona: Alex Mechanic
device: tablet
url: /r2c
state: "Session event Demo Practice Day today at Demo Hub; race numbers 1 to 10, numbers 1 to 4 already on chassis in session 1; Cadet 207 and Junior 307 Repair Required"
:::

Race to Chassis (R2C) links each race number (the driver's number for the day) to the chassis (kart) it drives in each session (each time out on track). On the event day it also marks karts used, so they need a service after the event. You can drag numbers onto chassis (tablet and laptop) or use the chassis list (phone). Both work the same way round: each chassis gets a race number.

!!! info "What changed from the Workshop App"
    - **On Event > Race to Chassis** is now in **Event Operations**: pick the event, then **Race to Chassis**.
    - New since 19 October: **drag and drop**. Drag a race number onto a chassis. On phones the chassis list opens by default. Each device remembers the view you last chose.
    - New: on phones the old tap grid (race numbers down the side, sessions across) is now a **chassis list**: tap a chassis, then its race number. It works the same way round as drag and drop.
    - Marking karts used with **Undo** and the reassignment log still happen on each change, as in the Workshop App grid.
    - New since 30 October: only your hub's own karts of that class are listed, in chassis order (for example 18 Bambino chassis), instead of fixed chassis 1 to 30.
    - New from 2 November: Race to Chassis **refuses** a kart that is not available. No reason lets it through and Race to Chassis never makes a kart available (there is no **Assign anyway** any more). KART says why and offers the ways out: **Open in Tracker** for each ticket, and, where a manual override is allowed, **Set available manually** on Kart Availability. This also applies when the chassis already has a race number and for administrators changing another day. **Copy Last Session** and the automatic copies leave such karts out and list them. See [A chassis that is not available](#a-chassis-that-is-not-available).
    - New: an administrator can switch a hub to **Signed off karts only**. Race to Chassis at that hub then lists and accepts only karts that are signed off. See [Signed off karts only](#signed-off-karts-only).

## Open Race to Chassis

1. On **Select your Hub**, tap **Event Operations**. It opens in a new tab.

    :::shot mech-r2c-events
    caption: The Event Operations card on Select your Hub
    url: /hub-selection
    steps:
      - Choose Demo Hub on Select your Hub
    callouts:
      - [1, "text=Event Operations", "Events and drivers"]
    :::

2. Under **Existing Events**, tap today's event, **Demo Practice Day**. (Do not use **Upload Driver File** at the top: that creates a new event.)

    :::shot mech-r2c-pick-event
    caption: Demo Practice Day in the Event Operations list
    url: /events
    steps:
      - Find Demo Practice Day in the list
    callouts:
      - [1, "text=Demo Practice Day", "Today's session event"]
    :::

3. In **Select Action for Demo Practice Day**, tap **Race to Chassis**.

    :::shot mech-r2c-action
    caption: The Select Action dialog with Race to Chassis
    url: /events
    steps:
      - Tap Demo Practice Day
    callouts:
      - [1, "text=Race to Chassis", "Complete R2C mappings"]
    :::

## Drag and drop (tablet and laptop)

:::clip mech-r2c-drag-clip
caption: putting race numbers on chassis with drag and drop
duration: 60
steps:
  - Open Race to Chassis for Demo Practice Day on the tablet
  - Tap Junior at the top
  - Drag race number 5 onto chassis 01 (Junior 301)
  - Show the Kart 301 marked used message with Undo
  - Drag race number 6 onto chassis 07 (Junior 307) and show Kart 307 is not available
  - Tap Close, then drag race number 6 onto chassis 02 (Junior 302)
  - Drag race number 6 back to the race number list to take it off
captions:
  - "Drag a race number onto a chassis."
  - "KART marks the chassis used for today."
  - "A chassis that is not available is refused, with the reason."
  - "Drag the number back to take it off."
:::

The buttons at the top pick the kart class (**Junior**, **Cadet**, **Bambino**) and the session (**1**, **2**, **3**, **4**). The chassis show each kart's number in its class, so Junior 301 is chassis **01**. Only the karts of your hub's fleet for that class are shown, in chassis order, ten to a column. A hub with no karts of that class shows chassis 1 to 30. The chassis colour is the kart's status colour, the same as on the Fleet board: **Ready** (green), **Needs attention** (amber, for example in a service, Requires service or Campaign required), **Blocked** (red, must not be used) or **Written off** (grey); **Not in fleet** is a plain outline. A filled star means the kart is preferred, an empty star **Unpreferred**. See [Kart statuses](../start/statuses.md).

1. At the top, tap the kart class, for example **Junior**. Check the right session is selected. The **Race Number** list on the right holds the numbers to place.

    :::shot mech-r2c-dd-view
    caption: The drag and drop view with Chassis Number and Race Number columns
    steps:
      - Open Race to Chassis on the tablet
    callouts:
      - [1, "text=Race to Chassis Assignment", "Drag and drop view"]
      - [2, "text=Race Number", "Numbers to place"]
      - [3, "text=Chassis Number", "Karts of this hub"]
    :::

2. Drag the number onto the chassis, for example race number **5** onto chassis **01** (Junior 301).

    :::gif mech-r2c-drag-gif
    caption: Dragging race number 5 onto chassis 01, Junior 301
    steps:
      - Drag race number 5 onto chassis 01 slowly
    :::

3. KART says **Kart 301 marked used** and **It stays Ready during the event and requires service after the event day.** Tap **Undo** only if it was a mistake. A kart that already requires service is not marked again: KART says **Not marked used: the kart already requires service.**

    :::shot mech-r2c-marked
    caption: Kart 301 marked used message with Undo
    steps:
      - Drop race number 5 on chassis 01
    callouts:
      - [1, "text=marked used", "Counted as used today"]
      - [2, "text=Undo", "Only for a mistake"]
    :::

4. To take a number off, drag it back to the race number list, or tap the chassis and tap **Take off chassis**.

    :::shot mech-r2c-takeoff
    caption: Take off chassis for a chassis with a race number
    steps:
      - Tap chassis 01
    callouts:
      - [1, "text=Take off chassis", "Remove the number"]
    :::

!!! tip "Tip"
    **Copy Last Session** copies the previous session's numbers to this one. Karts that are not available are left out and listed; their race numbers stay without a chassis (see below). **Clear Session** empties only this session. **Clear All** empties every session of the event and cannot be undone.

## Chassis list (phone)

:::clip mech-r2c-list-clip
caption: putting a race number on a chassis with the chassis list on a phone
duration: 45
device: phone
steps:
  - Open Race to Chassis for Demo Practice Day on the phone
  - Tap Junior, check the current session
  - Tap Kart 302 in the list, then race number 7
  - Show the marked used message
  - Tap Kart 303, then race number 7 again and show the Move question
  - Tap Drag and drop view and back to Chassis list
captions:
  - "On a phone, the chassis list opens."
  - "Tap the chassis, then its race number."
  - "A number another kart has asks before it moves."
  - "Switch views with the button at the bottom."
:::

The list shows one session of one class, with only your hub's karts of that class in chassis order: tap the kart class (**Junior**, **Cadet**, **Bambino**) and the session (**1**, **2**, **3**, **4**) at the top. KART opens on the current session. Each row is a chassis, for example **Kart 302**, with its colour (**Ready**, **Needs attention**, **Blocked**, **Written off** or **Not in fleet**), a filled or empty star (preferred or **Unpreferred**), plus tags such as **Requires service**, and, on the right, the race number it has in this session (a dot when it has none).

1. Tap the chassis, for example **Kart 302**.

    :::shot mech-r2c-list
    caption: The chassis list on a phone, Junior session 1, with Kart 302
    device: phone
    steps:
      - Open Race to Chassis on the phone
      - Tap Junior
    callouts:
      - [1, "text=Session 1 · Junior", "One session, one class"]
      - [2, "css=[data-testid='r2c-row-2']", "Tap the chassis"]
    :::

2. Tap the race number this kart runs with, for example **07**. Grey numbers are already on another kart in this session; the kart is shown under the number. KART says **Kart 302 marked used**, with **Undo**, as in drag and drop.

    :::shot mech-r2c-list-picker
    caption: The race number picker for Kart 303, with 07 in grey because Kart 302 has it
    device: phone
    steps:
      - Put race number 07 on Kart 302
      - Tap Kart 303
    callouts:
      - [1, "text=Tap the race number this kart runs with.", "Pick the race number"]
      - [2, "css=[data-testid='r2c-race-picker']", "Grey: taken, with its kart"]
    :::

3. If you pick a grey number, KART asks, for example, **Move race number 07 to Kart 303?** Tap **Move** to move it (the other kart is left without a race number), or **Cancel**. After the move KART asks why it changed chassis (see below).

    :::shot mech-r2c-list-move
    caption: Move race number 07 to Kart 303?
    device: phone
    steps:
      - Tap Kart 303, then race number 07
    callouts:
      - [1, "text=Move race number", "Asks before it moves"]
    :::

4. To take a number off, tap the chassis and tap **Clear**.

5. To switch views, tap **Drag and drop view** at the bottom left. In drag and drop, tap **Chassis list** to come back.

    :::shot mech-r2c-switch
    caption: The Drag and drop view button at the bottom left of the chassis list
    device: phone
    steps:
      - Look at the bottom left of the chassis list
    callouts:
      - [1, "text=Drag and drop view", "Switch view"]
    :::

## A chassis that is not available

Race to Chassis does not put a kart that is not available on track. This applies to dragging or tapping a number onto a chassis, to a chassis that already has another race number, and to administrators changing another day. Open incidents alone do not make a kart unavailable: they are listed as **Open incident (does not block)**.

1. Put a number on a chassis that is not available, for example Junior chassis **07**. KART names the kart by its number, says **Kart 307 is not available** and lists why, the same reasons as on the Fleet board: for example **An open ticket stops this kart**, **Set unavailable by hand**, **In a service** or **Batteries missing: 1 of 3 fitted**. Nothing is assigned.

    :::shot mech-r2c-unavailable
    caption: Kart 307 (Junior chassis 07) is not available, with its reasons, the ticket and Open in Tracker
    steps:
      - Drag race number 6 onto chassis 07
    callouts:
      - [1, "text=is not available", "Refused, nothing assigned"]
      - [2, "css=[data-testid='r2c-refusal-reasons']", "Why, as on the Fleet board"]
      - [3, "css=[data-testid='r2c-refusal-open-ticket']", "Open the ticket"]
    :::

2. Normally tap **Close** and use another chassis.
3. To get the kart back, speak to the technical team. There are two ways, both outside Race to Chassis:
    - **Resolve the ticket.** Tap **Open in Tracker** next to the ticket. The technical team resolves it there; then the kart is available again.
    - **Manual override.** Only where it is allowed (staff and administrators, and never for a kart with an open stopping ticket), KART shows **Set available manually**. It opens **Kart Availability** with this kart selected. Tick **Available** on the kart and give a reason there, as always. Then come back to Race to Chassis and place the number again.

    :::shot mech-r2c-cancel
    caption: Set available manually for a kart that is locked by hand, which opens Kart Availability
    state: "Junior 304 set not Available by hand (no ticket)"
    steps:
      - Drag race number 6 onto chassis 04
    callouts:
      - [1, "css=[data-testid='r2c-refusal-override']", "Opens Kart Availability"]
      - [2, "css=[data-testid='r2c-refusal-close']", "Use another chassis"]
    :::

!!! warning "Watch out"
    An open stopping ticket (Repair Required) cannot be overridden: KART says **An open stopping ticket cannot be overridden.** Resolve the ticket in the Tracker first.

### Copy Last Session with karts that are not available

1. Tap **Copy Last Session**. If the previous session has karts that are not available now, the question lists them, for example **Race number 05: Kart 207 (An open ticket stops this kart)**, and says they are not copied.
2. Tap **Copy Last Session**. Everything else is copied. KART then lists the karts that were not copied; their race numbers stay without a chassis in this session. Put each of those race numbers on another kart.

    :::shot mech-r2c-copy-unavailable
    caption: Copy Last Session listing Kart 207, which is not available and is not copied
    state: "Cadet 207 got race number 05 in session 1, then a stopping reliability ticket (Repair Required); session 2 cleared"
    steps:
      - Tap Cadet, then session 2
      - Tap Clear Session 2 and confirm
      - Tap Copy Last Session
    callouts:
      - [1, "css=[data-testid='r2c-copy-skip']", "Not copied"]
      - [2, "css=[data-testid='r2c-confirm']", "Copies the rest"]
    :::

The same happens when KART copies on its own: when a later session starts and KART fills it from the session before, or when a change copies forward to a later session. Karts that are not available at that moment are left out and recorded. When your change made the copy, KART shows a message such as **1 kart was not copied** with the race number and kart.

### Warning triangles

A chassis with a warning triangle has a race number although its kart is not available: the kart became unavailable after it got the number (or before 2 November). It stays as it is, but Race to Chassis will not give that kart a new race number or copy it to a new session. Check with your hub manager before that kart goes out.

:::shot mech-r2c-triangle
caption: Chassis 07 (Cadet 207) with race number 05 and a warning triangle
state: "Cadet 207 got race number 05 in session 1, then a stopping reliability ticket (Repair Required)"
steps:
  - Tap Cadet, then session 1
callouts:
  - [1, "css=[data-testid='r2c-dd-slot-7']", "On track, not available"]
:::

## Signed off karts only

An administrator can switch this on per hub (see below). When it is on, **Signed off karts only** shows above the chassis, and Race to Chassis at your hub:

- lists only the karts that are signed off (their kart sign-off is done), in chassis order. There is no fall-back to chassis 1 to 30;
- refuses a kart that is not signed off: KART says **This kart is not signed off. This hub lists signed off karts only.** No reason helps. Use a signed off kart;
- keeps a kart that is not signed off but already has a race number in the session on the list, marked **Not signed off** with a warning triangle. Its race number stays. You can move the number to a signed off kart, take it off, or leave it; you cannot give that kart another race number;
- leaves such a kart out of **Copy Last Session** (as a kart that is not available).

If your hub's list looks short, ask an administrator to check the kart sign-offs, or to switch it off for your hub. When it is off, Race to Chassis works as before.

:::shot mech-r2c-signoff-only
caption: Signed off karts only, with a kart that is not signed off still holding its race number
state: "Signed off karts only switched on for Demo Hub; Junior 303 not signed off and holding race number 07 in session 1"
steps:
  - Open Race to Chassis for Demo Practice Day on the tablet
  - Tap Junior
callouts:
  - [1, "text=Signed off karts only", "Switched on for this hub"]
  - [2, "text=Not signed off", "Still on track, marked"]
:::

### Switch it on or off (administrators)

1. On **Select your Hub**, tap **FKL Central**, then the **Hubs** tab, and pick the hub.
2. Under the hub's settings, find **Race to Chassis: signed off karts only**. It shows how many of the hub's Race to Chassis karts are signed off, for example **69 of 69 Race to Chassis karts are signed off.**
3. Tap the switch. If some karts are not signed off, KART asks **List signed off karts only?** and says how many karts Race to Chassis will no longer list. Tap **Turn on**, or **Cancel**. Switching it off does not ask.
4. Every change is logged with who made it and when (**Last changed**).

    :::shot fc-r2c-signoff-switch
    caption: The Race to Chassis sign-off switch in FKL Central, Hubs
    device: desktop
    persona: Taylor Central
    url: /fkl-central?tab=hubs
    state: "Every Demo Hub kart signed off except Junior 303; Signed off karts only just switched on"
    steps:
      - Pick Demo Hub on the Hubs tab
      - Scroll to Race to Chassis: signed off karts only
    callouts:
      - [1, "text=Race to Chassis: signed off karts only", "Per hub, administrators only"]
      - [2, "css=[data-testid='r2c-signoff-switch']", "On or off"]
    :::

## Moving a race number to another chassis

1. Drag a race number that is already on a chassis onto a different chassis (on a phone: pick a grey number and tap **Move**). KART asks **Logged. Why did the race number change chassis?**

    :::shot mech-r2c-reassign
    caption: The Chassis reassignment question asking why the race number changed chassis
    steps:
      - Drag race number 2 from chassis 02 onto chassis 03 (Cadet 203)
    callouts:
      - [1, "text=Logged. Why did the race number change chassis?", "Pick a reason"]
    :::

2. Choose a reason in **Select a reason**, then tap **Save reason**. The reason is optional: **Skip** closes the question and the move is still logged. The clock button next to **Clear Session** counts the moves. On a wide screen it says **Reassignments**.

    :::shot mech-r2c-reassign-save
    caption: A reason chosen and the count of moves on the clock button
    steps:
      - Choose a reason and tap Save reason
    callouts:
      - [1, "text=Save reason", "Saved in the log"]
      - [2, "text=Reassignments", "All moves today"]
    :::

## Past events are read-only

1. Open Race to Chassis for an event on another day. KART shows **Past Event - Editing Restricted**. Only administrators can change it. A kart that is not available is refused there too.

    :::shot mech-r2c-past
    caption: Past Event - Editing Restricted on an earlier event
    state: "A past session event exists at Demo Hub (any earlier demo event)"
    steps:
      - Open Race to Chassis for a past event
    callouts:
      - [1, "text=Past Event - Editing Restricted", "View only"]
    :::

2. For administrators: tap **Reassignments** to see every change of chassis at that event. A change made on another day is marked **Admin correction**.

    :::shot mech-r2c-admin-correction
    caption: Reassignments on a past event with a change marked Admin correction
    persona: Taylor Central
    state: "A past session event exists at Demo Hub; an administrator moved race number 01 from chassis 02 to 08 today"
    steps:
      - Open Race to Chassis for the past event as an administrator
      - Tap Cadet, then Reassignments
    callouts:
      - [1, "css=[data-testid='r2c-log-admin-correction']", "Changed on another day"]
    :::

!!! note "Remember"
    Race numbers go from 1 to 30. Marking karts used only happens for today's event, in the hub's own time zone.
