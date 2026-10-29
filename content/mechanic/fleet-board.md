# The fleet board (Overview)

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: Demo Hub fleet as seeded; planning event Demo Regional Race with readiness targets; session event Demo Practice Day today
:::

**Overview** is the first Workshop tab. It shows the whole fleet of your hub on one board: how many karts are green (ready), amber (need attention) and red (blocked), why, and every kart as a tile in its colour. The cards above it show the next event and your targets.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Readiness** (fleet) screen and the management **Dashboard** are together on **Overview**.
    - **One fleet board.** The Fleet Status card, the Readiness board and the kart grid are now one **Fleet board**, with one set of numbers.
    - **Three colours.** Green **Ready**, amber **Needs attention**, red **Blocked**, with the reasons listed under amber and red. See [Kart statuses](../start/statuses.md).
    - Click a count to list exactly those karts. This replaces the Workshop App's status drill-down.
    - The board says **Requires service** where the Workshop App said Turn Required.

## Fleet board tour

:::clip mech-fleet-board-clip
caption: a tour of the Overview tab and the Fleet board
duration: 60
steps:
  - Open the Workshop for Demo Hub on Overview
  - Point at Next Event, Work targets, Event readiness and Campaigns
  - Scroll to the Fleet board and its green, amber and red counts
  - Show the amber and red reasons and tap Requires service
  - Show the list with 103, 203, 204 and 303
  - Tap Back, scroll to the Junior karts tiles and show the colours, the Campaign tag and Missing batteries on 308
captions:
  - "Overview is the first Workshop tab."
  - "The cards at the top show the next event and your targets."
  - "The Fleet board counts green, amber and red karts."
  - "Under amber and red you see why."
  - "Tap a number to list those karts."
  - "Each kart tile has its colour, its reason and its tags."
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

3. Check **Event readiness**. It shows how many event-usable karts (Ready or Repair needed (usable), and available) each class still needs for **Demo Regional Race**. This is a planning event: an event your hub prepares karts for, with readiness targets. It stays a separate card because it carries the targets.

    :::shot mech-board-readiness
    caption: Event readiness for Demo Regional Race with Remaining counts per class
    steps:
      - Scroll to the Event readiness card
    callouts:
      - [1, "text=Demo Regional Race", "The planning event"]
      - [2, "text=Remaining", "Karts still needed"]
    :::

4. Scroll to the **Fleet board**. The colour row shows **Ready** (green), **Needs attention** (amber) and **Blocked** (red), each as a count of the hub's active karts. Use **All**, **Bambino**, **Cadet** or **Junior** at the top to see one class. If a colleague has just changed something, tap the round arrows icon (**Reload board**); **Updated** shows when the numbers were read.

    :::shot mech-board-colours
    caption: The Fleet board colour row with the class buttons and Reload board
    steps:
      - Scroll to the Fleet board
    callouts:
      - [1, "text=Fleet board", "Every active kart of this hub"]
      - [2, "text=Ready", "Green: can race"]
      - [3, "text=Needs attention", "Amber: needs work"]
      - [4, "text=Blocked", "Red: must not be used"]
      - [5, "text=Reload board", "Fetch the latest"]
    :::

5. Read the reasons under amber and red. Amber lists **Campaign required**, **In progress**, **Paused**, **Requires service** and **Repair needed (usable)**; In progress and Paused carry the **Not on track** marker. Red lists **Repair required** (with **Ready to repair**, **Waiting on parts** and **Stopping ticket** under it), **Missing batteries** and **Not available**.

    :::shot mech-board-cascade
    caption: The amber and red reasons with their counts
    steps:
      - Look at the Needs attention and Blocked lists under the colour row
    callouts:
      - [1, "text=Paused", "205 in progress and 304 paused: Not on track"]
      - [2, "text=Requires service", "Used, service not started"]
      - [3, "text=Repair required", "207 and 307"]
      - [4, "text=Missing batteries", "Junior 308"]
    :::

6. Tap **Requires service** under amber to list the karts that need a service.

    :::shot mech-board-drill
    caption: The list of karts that require service
    url: /workshop/readiness/turn_required
    steps:
      - Tap the Requires service count under Needs attention
    callouts:
      - [1, "text=Requires service", "103, 203, 204 and 303"]
    :::

7. Tap a kart in the list to open its kart page, or tap **Back** to return to the board.

    :::shot mech-board-drill-open
    caption: Tapping kart 203 in the list opens its kart page
    url: /workshop/readiness/turn_required
    steps:
      - Tap 203 in the list
    callouts:
      - [1, "text=203", "Opens the kart page"]
    :::

8. Below the reasons, each class has a block with a green, amber and red bar, the same reasons (tap to open) and tags with counts, such as **Campaign work** or **Performance**. Tap a tag to list those karts.

    :::shot mech-board-classes
    caption: The Bambino, Cadet and Junior blocks with their bars and tags
    steps:
      - Scroll to the class blocks on the Fleet board
    callouts:
      - [1, "text=Junior", "One block per class"]
      - [2, "text=Campaign work", "Karts with campaign tasks"]
    :::

9. Scroll down to the kart tiles. Each tile has the kart's colour, its reason, a star when it is preferred, and its tags. Use **All**, **Green**, **Amber**, **Red** or **Grey** above the tiles to show only one colour.

    :::shot mech-board-tiles
    caption: Junior kart tiles in their colours, with Campaign tags and Missing batteries on 308
    steps:
      - Scroll to the Junior karts tiles
    callouts:
      - [1, "text=Kart 301", "Amber: Campaign required"]
      - [2, "text=Kart 308", "Red: Missing batteries"]
      - [3, "text=View log book", "The kart's log book"]
    :::

!!! note "Remember"
    The tile colour is the kart's status colour, the same as everywhere else. A kart in a service or paused is amber with **Not on track**: it is not available until the service is finished. **View log book** on a tile opens the kart's record of past work. With only the Workshop permission the **Available** and **Preferred** ticks are greyed out. Colleagues with **Reliability** can change them.

!!! tip "Tip"
    Start every shift on Overview. Compare the board with the karts in front of you. If something does not match, tell your hub manager (hub lead), with the kart number (see [Getting help](../start/finding-your-way.md#getting-help)).

!!! note "Remember"
    The **Work targets** card may show **Services** with a count, such as 0 / 5 completed: your target number of services.
