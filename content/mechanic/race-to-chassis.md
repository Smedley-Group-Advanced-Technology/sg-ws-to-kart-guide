# Race to Chassis

:::defaults
persona: Alex Mechanic
device: tablet
url: /r2c
state: "Session event Demo Practice Day today at Demo Hub; race numbers 1 to 10, numbers 1 to 4 already on chassis in session 1; Cadet 207 and Junior 307 Repair Required"
:::

Race to Chassis (R2C) links each race number to the chassis (kart) it drives in each session. On the event day it also marks karts used, so they need a service after the event. You can drag numbers onto chassis (tablet and laptop) or use the tap grid (phone).

!!! info "What changed from the Workshop App"
    - **On Event > Race to Chassis** is now in **Event Operations**: pick the event, then **Race to Chassis**.
    - New since 19 October: **drag and drop**. Drag a race number onto a chassis. On phones the tap grid stays the default. Each device remembers the view you last chose.
    - Everything the tap grid did still happens on each drop: reasons, track use overrides, marking karts used with **Undo**, and the reassignment log.

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

2. Tap today's event, **Demo Practice Day**.

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
  - Drag race number 5 onto chassis 205
  - Show the Chassis 205 marked used message with Undo
  - Drag race number 6 onto chassis 207 and show Chassis 207 is not available
  - Tap Cancel, then drag race number 6 onto chassis 206
  - Drag race number 6 back to the race number list to take it off
captions:
  - "Drag a race number onto a chassis."
  - "KART marks the chassis used for today."
  - "An unavailable chassis asks for a reason."
  - "Drag the number back to take it off."
:::

1. Find the race number in the **Race Number** list.

    :::shot mech-r2c-dd-view
    caption: The drag and drop view with Chassis Number and Race Number columns
    steps:
      - Open Race to Chassis on the tablet
    callouts:
      - [1, "text=Race to Chassis Assignment", "Drag and drop view"]
      - [2, "text=Race Number", "Numbers to place"]
      - [3, "text=Chassis Number", "Karts of this hub"]
    :::

2. Drag the number onto the chassis, for example race number **5** onto **205**.

    :::gif mech-r2c-drag-gif
    caption: Dragging race number 5 onto chassis 205
    steps:
      - Drag race number 5 onto chassis 205 slowly
    :::

3. KART says **Chassis 205 marked used** and **It stays Ready during the event and requires service after the event day.** Tap **Undo** only if it was a mistake.

    :::shot mech-r2c-marked
    caption: Chassis 205 marked used message with Undo
    steps:
      - Drop race number 5 on chassis 205
    callouts:
      - [1, "text=marked used", "Counted as used today"]
      - [2, "text=Undo", "Only for a mistake"]
    :::

4. To take a number off, drag it back to the race number list, or tap the chassis and tap **Take off chassis**.

    :::shot mech-r2c-takeoff
    caption: Take off chassis for a chassis with a race number
    steps:
      - Tap chassis 205
    callouts:
      - [1, "text=Take off chassis", "Remove the number"]
    :::

!!! tip "Tip"
    **Copy Last Session** copies the previous session's numbers to this one. **Clear Session** empties only this session. **Clear All** empties every session of the event and cannot be undone.

## Tap grid (phone)

:::clip mech-r2c-tap-clip
caption: putting a race number on a chassis with the tap grid on a phone
duration: 45
device: phone
steps:
  - Open Race to Chassis for Demo Practice Day on the phone
  - Tap the cell for race number 7 in the current session
  - Tap chassis 302
  - Show the marked used message
  - Tap Drag and drop view and back to Tap grid
captions:
  - "On a phone, the tap grid opens."
  - "Tap the race number cell."
  - "Then tap the chassis it drives."
  - "Switch views with the button at the bottom."
:::

1. Tap the cell for the race number and session, for example race number **7** in the **Current session**.

    :::shot mech-r2c-tap-cell
    caption: The tap grid on a phone with the cell for race number 7 selected
    device: phone
    steps:
      - Open Race to Chassis on the phone
      - Tap the cell for race number 7 in the current session
    callouts:
      - [1, "text=Race #", "Race numbers"]
      - [2, "text=Current session", "This session"]
    :::

2. Tap the chassis this race number drives, for example **302**.

    :::shot mech-r2c-tap-chassis
    caption: Tap the chassis this race number drives, with 302 highlighted
    device: phone
    steps:
      - Tap chassis 302
    callouts:
      - [1, "text=Tap the chassis this race number drives.", "Pick the chassis"]
    :::

3. To switch views, tap **Drag and drop view** at the bottom left. In drag and drop, tap **Tap grid** to come back.

    :::shot mech-r2c-switch
    caption: The Drag and drop view button at the bottom left of the tap grid
    device: phone
    steps:
      - Look at the bottom left of the tap grid
    callouts:
      - [1, "text=Drag and drop view", "Switch view"]
    :::

## A chassis that is not available

1. Put a number on a chassis that is not available, for example **207**. KART says **Chassis 207 is not available** and why.

    :::shot mech-r2c-unavailable
    caption: Chassis 207 is not available with the reason box and Assign anyway
    steps:
      - Drag race number 6 onto chassis 207
    callouts:
      - [1, "text=is not available", "Repair Required: stopping ticket"]
      - [2, "text=4 to 500 characters.", "Give a reason"]
      - [3, "text=Assign anyway", "Gives a track use override"]
    :::

2. Normally tap **Cancel** and use another chassis. Only if your hub manager agrees, type a reason and tap **Assign anyway**. This gives a track use override until the end of the event.

    :::shot mech-r2c-cancel
    caption: Cancel in the not available dialog
    steps:
      - Tap Cancel
    callouts:
      - [1, "text=Cancel", "Use another chassis"]
    :::

!!! warning "Watch out"
    Never assign a kart with a stopping reliability ticket (Repair Required) just to fill the grid. **Assign anyway** is recorded with your reason.

## Moving a race number to another chassis

1. Drag a race number that is already on a chassis onto a different chassis. KART asks **Logged. Why did the race number change chassis?**

    :::shot mech-r2c-reassign
    caption: The Chassis reassignment question asking why the race number changed chassis
    steps:
      - Drag race number 2 from its chassis onto chassis 104
    callouts:
      - [1, "text=Logged. Why did the race number change chassis?", "Pick a reason"]
    :::

2. Choose a reason in **Select a reason** and tap **Save reason**. The move appears under **Reassignments**.

    :::shot mech-r2c-reassign-save
    caption: A reason chosen and the Reassignments count
    steps:
      - Choose a reason and tap Save reason
    callouts:
      - [1, "text=Save reason", "Saved in the log"]
      - [2, "text=Reassignments", "All moves today"]
    :::

## Past events are read-only

1. Open Race to Chassis for an event on another day. KART shows **Past Event - Editing Restricted**. Only administrators can change it.

    :::shot mech-r2c-past
    caption: Past Event - Editing Restricted on an earlier event
    state: "A past session event exists at Demo Hub (any earlier demo event)"
    steps:
      - Open Race to Chassis for a past event
    callouts:
      - [1, "text=Past Event - Editing Restricted", "View only"]
    :::

!!! note "Remember"
    Race numbers go from 1 to 30. Marking karts used only happens for today's event, in the hub's own time zone.
