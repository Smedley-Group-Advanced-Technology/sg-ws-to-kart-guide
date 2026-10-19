# Schedules and targets

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/schedule/settings
state: "Planning event Demo Regional Race at Demo Hub with readiness targets; Alex and Casey are schedule participants"
:::

This page covers three things: how your hub's weekly schedule works (**Schedule settings**), targets for each person (**Work targets**) and how many karts each class must have ready for an event (**Readiness targets**).

!!! info "What changed from the Workshop App"
    - **Schedule Settings** is now **Schedule settings** on the Schedule tab.
    - **Workshop Planning** is now two Workshop Manager tabs: **Work targets** and **Readiness targets**.
    - Readiness targets are set per **planning event**. Admins create planning events for now.

## Schedule settings

1. Open **Schedule** and tap **Schedule settings**.

    :::shot hm-sched-settings
    caption: Schedule settings with participants and scheduling mode
    steps:
      - Open Schedule, tap Schedule settings
    callouts:
      - [1, "text=Schedule participants", "Who plans a week"]
      - [2, "text=Scheduling mode", "Who fills it in"]
    :::

2. Choose the **Scheduling mode**: **Employee planned** (mechanics plan their own week) or **Manager assigned** (you plan it).

    :::shot hm-sched-mode
    caption: Scheduling mode Employee planned or Manager assigned
    steps:
      - Open Scheduling mode
    callouts:
      - [1, "text=Employee planned", "Mechanics plan"]
      - [2, "text=Manager assigned", "You plan"]
    :::

3. Set the **Submission deadline day** and the time.

    :::shot hm-sched-deadline
    caption: Submission deadline day Friday and the time
    steps:
      - Choose Friday and 12:00
    callouts:
      - [1, "text=Submission deadline day", "When plans are due"]
    :::

4. Tick **Require start time** and **Require finish time** if you need them.

    :::shot hm-sched-require
    caption: Require start time and Require finish time ticked
    steps:
      - Tick both boxes
    callouts:
      - [1, "text=Require start time", "Start time required"]
      - [2, "text=Require finish time", "Finish time required"]
    :::

5. Under **Schedule participants**, tick who is included and whether they may work remotely (**Allow remote work**).

    :::shot hm-sched-people
    caption: Schedule participants with Allow remote work
    steps:
      - Look at the participant rows for Alex and Casey
    callouts:
      - [1, "text=Allow remote work", "Remote work allowed"]
    :::

6. Tap **Save settings**.

    :::shot hm-sched-save
    caption: The Save settings button
    steps:
      - Tap Save settings
    callouts:
      - [1, "text=Save settings", "Save"]
    :::

## Work targets

1. Open **Workshop Manager > Work targets** and tap **Add target**.

    :::shot hm-target-add
    caption: Work targets with the Add target button
    url: /workshop/manager?tab=targets
    steps:
      - Tap Work targets
    callouts:
      - [1, "text=Add target", "New target"]
    :::

2. Choose the **Person** and the **Work type**: Readiness, Turns, Repairs or Campaign tasks.

    :::shot hm-target-type
    caption: Person Alex Mechanic and Work type Turns
    url: /workshop/manager?tab=targets
    steps:
      - Tap Add target
      - Choose Alex Mechanic and Turns
    callouts:
      - [1, "text=Person", "Who"]
      - [2, "text=Work type", "What kind of work"]
    :::

3. Type the target number, optionally a class and a note.

    :::shot hm-target-number
    caption: Target (completed) set to 10 for Cadet
    url: /workshop/manager?tab=targets
    steps:
      - Type 10 in the target and choose Cadet in Class (optional)
    callouts:
      - [1, "text=Class (optional)", "Limit to one class"]
    :::

4. Tap **Save target**. The target shows on the mechanic's **Work targets** card on Overview.

    :::shot hm-target-save
    caption: The saved target in the Work targets list
    url: /workshop/manager?tab=targets
    steps:
      - Tap Save target
    callouts:
      - [1, "text=Save target", "Save"]
    :::

!!! tip "Tip"
    Old targets move to **Archived targets**, so the list stays short.

## Readiness targets

1. Open **Workshop Manager > Readiness targets**. Find the planning event, for example **Demo Regional Race**.

    :::shot hm-ready-list
    caption: Readiness targets with Demo Regional Race
    url: /workshop/manager?tab=readiness
    steps:
      - Tap Readiness targets
    callouts:
      - [1, "text=Demo Regional Race", "The planning event"]
    :::

2. Tap **Set target** (or **Edit target**) for the event.

    :::shot hm-ready-edit
    caption: Edit target for Demo Regional Race
    url: /workshop/manager?tab=readiness
    steps:
      - Tap Edit target on Demo Regional Race
    callouts:
      - [1, "text=Edit target", "Change the numbers"]
    :::

3. Type how many event-usable karts each class needs. Use whole numbers from 0 to 1000.

    :::shot hm-ready-numbers
    caption: Bambino, Cadet and Junior numbers for Demo Regional Race
    url: /workshop/manager?tab=readiness
    steps:
      - Type 5 Bambino, 7 Cadet, 7 Junior
    callouts:
      - [1, "text=Enter whole numbers from 0 to 1000.", "Per class"]
    :::

4. Save. Overview's **Event readiness** card shows **Target met** or **Remaining** for each class.

    :::shot hm-ready-overview
    caption: Event readiness on Overview showing Remaining per class
    url: /workshop
    steps:
      - Open Overview
    callouts:
      - [1, "text=Event readiness", "Progress to the target"]
    :::

!!! abstract "Coming soon"
    Hub managers will be able to create planning events themselves. For now an admin creates them.
