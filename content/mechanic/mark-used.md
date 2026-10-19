# Marking karts used

:::defaults
persona: Morgan Manager
device: tablet
url: /workshop
state: "Bambino 101 Ready (not used today)"
:::

A kart needs a service after it has been used. KART needs to know which karts were used so they show **Requires service**. Most of the time this happens by itself through Race to Chassis on the event day.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Mark used** screen is gone. On the event day, **Race to Chassis** marks karts used when a race number is put on a chassis.
    - Hub managers and admins can also mark a single kart by hand with the **Requires service** button on its Overview tile.
    - A mistake can be undone with **Undo** or **Undo mark used**.

## How karts get marked used

- **On the event day:** putting a race number on a chassis in Race to Chassis marks that chassis used. KART says **It stays Ready during the event and requires service after the event day.** See [Race to Chassis](race-to-chassis.md).
- **By hand:** a hub manager or admin taps **Requires service** on the kart's tile on Overview. Mechanics do not see this button. Ask your hub manager if a kart was used outside an event, for example for testing.

## Mark a kart used by hand (hub managers)

:::clip mech-mark-used-clip
caption: marking Bambino 101 used by hand, undoing it, and Race to Chassis marking a chassis used
duration: 50
steps:
  - On Overview, find the 101 tile and tap Requires service
  - Show Kart marked as requiring service and tap Undo
  - Show Mark used undone
  - Switch to Race to Chassis for Demo Practice Day, tap Bambino and drag race number 8 onto chassis 04 (Bambino 104)
  - Show Chassis 04 marked used and the event day note
captions:
  - "Hub managers can mark a kart used on its tile."
  - "KART confirms and offers Undo."
  - "Undo puts the kart back as it was."
  - "On the event day, Race to Chassis marks karts used for you."
  - "They stay Ready today and need a service after the event."
:::

1. On **Overview**, find the kart's tile, for example **#101**.

    :::shot mech-used-tile
    caption: The tile for Bambino 101 with its Requires service button
    steps:
      - Scroll to Bambino Karts
    callouts:
      - [1, "text=#101", "Bambino 101"]
      - [2, "role=button[name='Requires service']", "Only for hub managers and admins"]
    :::

2. Tap **Requires service** on the tile. KART says **Kart marked as requiring service** and offers **Undo**.

    :::shot mech-used-toast
    caption: The Kart marked as requiring service message with Undo
    steps:
      - Tap Requires service on 101
    callouts:
      - [1, "text=Kart marked as requiring service", "Done"]
      - [2, "text=Undo", "Tap if it was a mistake"]
    :::

3. Made a mistake? Tap **Undo** in the message straight away.

    :::gif mech-used-undo-gif
    caption: Marking 101 used and tapping Undo in the message
    steps:
      - Tap Requires service on 101
      - Tap Undo in the message
      - Show Mark used undone
    :::

## Undo later from the kart page

1. Open the kart page (see [The kart page](kart-page.md)). If the mark can still be undone, KART shows **Undo mark used**.

    :::shot mech-used-undo-button
    caption: The Undo mark used button on the kart page of 101
    persona: Alex Mechanic
    url: "/workshop/kart/{kart:101}"
    state: 101 marked used by mistake, no service started
    steps:
      - Open kart 101
    callouts:
      - [1, "text=Undo mark used", "Only shown while it can be undone"]
    :::

2. Tap **Undo mark used**. Read the question **Undo mark used?**

    :::shot mech-used-undo-dialog
    caption: The Undo mark used? question
    persona: Alex Mechanic
    url: "/workshop/kart/{kart:101}"
    state: 101 marked used by mistake, no service started
    steps:
      - Tap Undo mark used
    callouts:
      - [1, "text=Undo mark used?", "Only for a real mistake"]
    :::

3. Tap **Undo mark used** in the question. The kart gets back the status it had before.

    :::shot mech-used-undone
    caption: Mark used undone message on the kart page
    persona: Alex Mechanic
    url: "/workshop/kart/{kart:101}"
    state: 101 marked used by mistake, no service started
    steps:
      - Tap Undo mark used in the question
    callouts:
      - [1, "text=Mark used undone", "Back to how it was"]
    :::

!!! warning "Watch out"
    Only undo if the kart was marked by mistake and did **not** go on track. Once someone starts a service on the kart, undo is no longer offered.

!!! note "Remember"
    Karts used at an event stay **Ready** during the event day and show **Requires service** after it.
