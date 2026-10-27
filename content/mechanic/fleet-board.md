# The fleet board (Overview)

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: Demo Hub fleet as seeded; planning event Demo Regional Race with readiness targets; session event Demo Practice Day today
:::

**Overview** is the first Workshop tab. It shows the whole fleet of your hub on one screen: what is ready, what needs a service, what needs a repair, and how close you are to the next event's targets.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Readiness** (fleet) screen and the management **Dashboard** are together on **Overview**.
    - Click a count to list those karts. This replaces the Workshop App's status drill-down.
    - The board says **Requires service** where the Workshop App said Turn Required.

## Fleet board tour

:::clip mech-fleet-board-clip
caption: a tour of the Overview tab and the Readiness board
duration: 60
steps:
  - Open the Workshop for Demo Hub on Overview
  - Point at Next Event, Work targets and Event readiness
  - Scroll to Fleet Status
  - Scroll to the Readiness board and tap the Requires service count
  - Show the list with 103, 203, 204, 303, 205 and 304
  - Tap Back, scroll to the Junior Karts tiles and show the Campaign and Missing Components tags
captions:
  - "Overview is the first Workshop tab."
  - "The cards at the top show the next event and your targets."
  - "Fleet Status counts open problems."
  - "The Readiness board counts every status."
  - "Tap a number to list those karts."
  - "Each kart tile shows its tags."
:::

1. Tap **Overview** in the tab strip.

    :::shot mech-board-open
    caption: The Overview tab for Demo Hub
    steps:
      - Open the Workshop for Demo Hub
    callouts:
      - [1, "text=Overview", "First tab"]
    :::

2. Read the cards at the top: **Next Event**, **Work targets**, **Event readiness** and **Campaigns**.

    :::shot mech-board-cards
    caption: Next Event, Work targets, Event readiness and Campaigns cards
    steps:
      - Look at the cards at the top of Overview
    callouts:
      - [1, "text=Next Event", "The next event in the calendar"]
      - [2, "text=Work targets", "Your targets this week"]
      - [3, "text=Event readiness", "Demo Regional Race targets"]
      - [4, "text=Campaigns", "Junior caliper seal upgrade"]
    :::

3. Check **Event readiness**. It shows how many event-usable karts (Ready or Repair Needed (usable), and available) each class still needs for **Demo Regional Race**. This is a planning event: an event your hub prepares karts for, with readiness targets.

    :::shot mech-board-readiness
    caption: Event readiness for Demo Regional Race with Remaining counts per class
    steps:
      - Scroll to the Event readiness card
    callouts:
      - [1, "text=Demo Regional Race", "The planning event"]
      - [2, "text=Remaining", "Karts still needed"]
    :::

4. Look at **Fleet Status**. It counts karts with **Reliability**, **Damages**, **Performance**, **Missing**, **Service** and **Campaign work** items.

    :::shot mech-board-fleet-status
    caption: The Fleet Status card with counts per problem type
    steps:
      - Scroll to Fleet Status
    callouts:
      - [1, "text=Fleet Status", "Open problems at a glance"]
      - [2, "text=Missing", "308 is missing a battery"]
    :::

5. Scroll to the **Readiness board**. If a colleague has just changed something, tap the round arrows icon at its top right (**Reload board**).

    :::shot mech-board-reload
    caption: The Readiness board with the Reload board button
    steps:
      - Scroll to the Readiness board
    callouts:
      - [1, "text=Readiness board", "Every kart of this hub"]
      - [2, "text=Reload board", "Fetch the latest"]
    :::

6. Tap the **Requires service** count to list the karts that need a service.

    :::shot mech-board-drill
    caption: The list of karts that require service
    url: /workshop/readiness/turn_all
    steps:
      - Tap the Requires service count
    callouts:
      - [1, "text=Requires service", "103, 203, 204 and 303, plus 205 in progress and 304 paused"]
    :::

7. Tap a kart in the list to open its kart page, or tap **Back** to return to the board.

    :::shot mech-board-drill-open
    caption: Tapping kart 203 in the list opens its kart page
    url: /workshop/readiness/turn_all
    steps:
      - Tap 203 in the list
    callouts:
      - [1, "text=203", "Opens the kart page"]
    :::

8. Scroll down to the kart tiles per class, such as **Junior Karts (8)**. Each tile shows the kart number and its tags.

    :::shot mech-board-tiles
    caption: Junior Karts tiles with Campaign tags and Missing Components on 308
    steps:
      - Scroll to the Junior Karts tiles
    callouts:
      - [1, "text=Kart 301", "Campaign tag: caliper seal upgrade"]
      - [2, "text=Kart 308", "Missing Components"]
      - [3, "text=View log book", "The kart's log book"]
    :::

!!! note "Remember"
    Tile colours show availability, not the status: red background means not available, green means preferred, yellow means available. A kart that is in service or paused is not available, so its tile is red. **View log book** on a tile opens the kart's record of past work. With only the Workshop permission the **Available** and **Preferred** ticks are greyed out. Colleagues with **Reliability** can change them.

!!! tip "Tip"
    Start every shift on Overview. Compare the board with the karts in front of you. If something does not match, report it in KART Comms support with the kart number (see [Getting help](../start/finding-your-way.md#getting-help)).

!!! note "Remember"
    The **Work targets** card may show **Turns** with a count, such as 0 / 5 completed. "Turns" there means services: it is your target number of services.
