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

:::shot hm-sched
caption: "Steps 1 to 6 on one page: Schedule settings with mode, deadline, required times, participants and Save settings"
steps:
  - Open Schedule, tap Schedule settings
callouts:
  - [1, "text=Schedule settings", "The settings page"]
  - [2, "text=Scheduling mode", "Who fills it in"]
  - [3, "text=Submission deadline day", "When plans are due"]
  - [4, "text=Require start time", "Times required"]
  - [5, "text=Allow remote work", "Who is included"]
  - [6, "text=Save settings", "Save"]
:::

1. Open **Schedule** and tap **Schedule settings**.

2. Choose the **Scheduling mode**: **Employee planned** (mechanics plan their own week) or **Manager assigned** (you plan it).

3. Set the **Submission deadline day** and the time.

4. Turn on **Require start time** and **Require finish time** if you need them.

5. Under **Schedule participants**, turn on the switch next to each person who is included. Turn on **Allow remote work** for people who may work remotely. People are shown by their initials.

6. Tap **Save settings**.

### Default week for each person

Each included person has a **Default week** line under their switches. It shows their usual days and times, for example **Mon 08:00-16:30 · Fri 08:00-13:00**. If they have none, it shows **Not set**. When the person taps **Plan my week** for a week with nothing planned yet, their default week fills it in. They can still change it, and nothing is saved until they save or submit.

1. Tap **Edit** on the person's **Default week** line.

2. For each day they usually work, switch the day on. Set the **Start** time and, if you want, the **Finish** time. If remote work is allowed for them, you can also choose the **Work location**.

    :::shot hm-sched-default
    caption: The default week editor for Alex Mechanic (AM), Monday to Friday 08:00 to 16:30
    steps:
      - Tap Edit on AM's Default week line
      - Switch Monday to Friday on, Start 08:00, Finish 16:30
    callouts:
      - [1, "text=Default week: AM", "One person's usual week"]
      - [2, "text=Working", "Switch the day on"]
    :::

3. Tap **Save default week**. To remove it, tap **Clear default week**.

!!! info "Good to know"
    - The default week is saved straight away. It does not need **Save settings**.
    - It never fills a week that the person has already saved, and it never submits anything for them.
    - It also fills **Set week** when you plan a week for someone with nothing planned yet.
    - The finish time must be after the start time. If **Require start time** or **Require finish time** is on, each working day in the default week needs that time too.
    - Remote days are only possible when **Allow remote work** is on. If you turn it off later, the person's remote days are filled in as in shop.
    - If you remove someone from the schedule, their default week is kept. It applies again if you include them again.

## Work targets

:::shot hm-target
caption: "Steps 1 to 4 on one screen: the Add work target form filled in"
url: /workshop/manager?tab=targets
steps:
  - Tap Work targets, then Add target
  - Choose AM (Alex Mechanic) and Services, type 10 and choose Cadet
callouts:
  - [1, "text=Add work target", "Opened with Add target"]
  - [2, "text=Work type", "Person and type of work"]
  - [3, "text=Class (optional)", "Number, class, note"]
  - [4, "text=Save target", "Save"]
:::

1. Open **Workshop Manager > Work targets** and tap **Add target**.

2. Choose the **Person** (shown by initials, for example **AM**) and the **Work type**: Readiness, Services, Repairs or Campaign tasks.

3. Type the target number, optionally a class and a note.

4. Tap **Save target**. The target shows on the mechanic's **Work targets** card on Overview.

!!! tip "Tip"
    Old targets move to **Archived targets**, so the list stays short.

## Readiness targets

:::shot hm-ready-edit
caption: "Steps 1 to 3 on one screen: the readiness target form for Demo Regional Race"
url: /workshop/manager?tab=readiness
steps:
  - Tap Readiness targets
  - Tap Edit target on Demo Regional Race
  - Type 5 Bambino, 7 Cadet, 7 Junior
callouts:
  - [1, "text=Demo Regional Race", "The planning event"]
  - [2, "text=Edit readiness target", "Opened with Edit target"]
  - [3, "text=Junior", "Karts per class"]
:::

1. Open **Workshop Manager > Readiness targets**. Find the planning event, for example **Demo Regional Race**.

2. Tap **Set target** (or **Edit target**) for the event.

3. Type how many event-usable karts each class needs. Use whole numbers from 0 to 1000.

4. Save. Overview's **Event readiness** card shows **Target met** or **Remaining** for each class.

    :::shot hm-ready-overview
    caption: "Step 4: Event readiness on Overview showing Remaining per class"
    url: /workshop
    steps:
      - Save, then open Overview
    callouts:
      - [4, "text=Event readiness", "Progress to the target"]
    :::

!!! abstract "Coming soon"
    Hub managers will be able to create planning events themselves. For now an admin creates them.
