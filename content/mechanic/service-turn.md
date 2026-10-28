# Doing a service

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop/repairs
state: Cadet 203 in the Requires service lane; Alex has no service running (304 paused is fine); Cadet class checklist published
:::

A service (the Workshop App called it a "turn") is the check every kart gets after it has been used. In KART you start the service, answer the checklist on **Servicing**, record any parts you fitted and complete it. The timer runs while you work.

!!! info "What changed from the Workshop App"
    - **Start Turn** is now **Start service**. The checklist is on the **Servicing** tab. (Some older notes call this screen "In Service"; on screen it says **Servicing**.)
    - Each kart class (Bambino, Cadet, Junior) has its own checklist, set by FKL Central (the league's central team that looks after checklists and the parts list).
    - You can only have **one** kart in service at a time. Starting another offers **Pause and switch**.
    - Karts that need a service show **Requires service** (the Workshop App said Turn Required).

## Watch it first

:::clip mech-service-clip
caption: a full service on Cadet 203, from the Service Queue to Complete service
duration: 85
steps:
  - Open Service Queue
  - Tap 203 in the Requires service lane
  - Tap Start service in the Start service? dialog
  - On Servicing, tap cells to set them Good, enter a tyre depth and battery voltages
  - Under Components replaced, select a part and tap Add to components replaced
  - Tap Complete service, tick the declaration and tap Confirm
  - Show 203 as Ready on Overview
captions:
  - "Open the Service Queue."
  - "Tap the kart that needs a service."
  - "Tap Start service."
  - "Tap each check to mark it Good."
  - "Type the readings where asked."
  - "Add any part you fitted."
  - "Tap Complete service."
  - "Tick the declaration and confirm."
  - "The kart is Ready again."
:::

## Start the service

1. Tap **Service Queue** in the tab strip.

    :::shot mech-svc-queue
    caption: The Service Queue with the Requires service, In progress and Completed lanes
    steps:
      - Tap Service Queue
    callouts:
      - [1, "text=Service Queue", "Your work list"]
      - [2, "text=Requires service", "Karts waiting for a service"]
    :::

2. Find the kart in the **Requires service** lane. Karts are grouped by class. Karts assigned to you have a blue ring.

    :::shot mech-svc-find
    caption: Kart 203 in the Cadet column of the Requires service lane
    steps:
      - Look at the Requires service lane
    callouts:
      - [1, "text=203", "Cadet 203"]
    :::

3. Tap the kart number, for example **203**. KART asks **Start service?**

    :::shot mech-svc-dialog
    caption: The Start service? dialog for kart 203
    steps:
      - Tap 203
    callouts:
      - [1, "text=Start service?", "Check the kart number"]
      - [2, "role=button[name='Start service']", "Tap to start"]
    :::

4. Tap **Start service**. KART opens **Servicing** with the checklist for that kart class. The timer starts.

    :::shot mech-svc-servicing
    caption: The Servicing tab with the Cadet checklist grid for 203
    url: /workshop/in-service
    steps:
      - Tap Start service
    callouts:
      - [1, "text=Servicing", "The service you are working on"]
      - [2, "text=203", "Kart in service"]
    :::

!!! tip "Tip"
    You can also start a service from the kart page (**Start service**), for example after scanning the kart's QR code. See [The kart page](kart-page.md).

## Answer the checklist

1. Tap a check cell to cycle it: **Unchecked**, then **Good**, then **Blocked**. On a keyboard press space, and enter to move down.

    :::gif mech-svc-cycle-gif
    caption: Tapping a checklist cell cycles it from Unchecked to Good to Blocked
    url: /workshop/in-service
    steps:
      - Tap one check cell three times slowly
    :::

2. For a measured check, type the reading in the cell, for example tyre depth or the voltage of each battery.

    :::shot mech-svc-reading
    caption: A measured check, Battery voltage, with both readings typed in and marked Pass
    url: /workshop/in-service
    steps:
      - Type 51.2 and 51.0 in the battery voltage readings
    callouts:
      - [1, "css=input[inputmode=decimal]", "Type the reading here"]
    :::

3. If a check cannot pass, set it to **Blocked**. KART asks **Why is this blocked?**

    :::shot mech-svc-blocked
    caption: The Why is this blocked? box after setting a check to Blocked
    url: /workshop/in-service
    steps:
      - Tap a cell until it shows Blocked
    callouts:
      - [1, "text=Why is this blocked?", "Say what is wrong"]
    :::

4. Type the reason and tap **Save reason**.

    :::shot mech-svc-blocked-save
    caption: A blocked reason typed with the Save reason button
    url: /workshop/in-service
    steps:
      - Type "Hairline crack near the seat mount"
      - Tap Save reason
    callouts:
      - [1, "text=Save reason", "Save it"]
    :::

!!! warning "Watch out"
    A blocked check must be resolved before you can complete the service. Fix it (and set the cell to **Good**), or report a problem so it becomes a repair. See [Report a problem](report-a-problem.md).

## Record parts and work

1. Every part you fitted goes under **Components replaced**, below the checklist. It lists the parts that fit this kart class.

    :::shot mech-svc-components
    caption: The Components replaced section with its search box
    url: /workshop/in-service
    steps:
      - Scroll to Components replaced
    callouts:
      - [1, "text=Components replaced", "Parts that fit this kart"]
    :::

2. Type part of the name in **Search components…**. Matching parts appear with a **Select** button. Tap **Select** on the part you fitted.

    :::shot mech-svc-parts
    caption: Searching Components replaced for brake pads, with the Select button
    url: /workshop/in-service
    steps:
      - Type brake pad in Search components
    callouts:
      - [1, "placeholder=Search components…", "Type part of the name"]
      - [2, "text=Select", "Pick the part"]
    :::

3. Tap **Add to components replaced**. The part shows under **Components replaced on this service** with **stock deducted on completion**: KART takes it from your hub's stock when you complete the service.

    :::shot mech-svc-parts-added
    caption: A brake pad set added under Components replaced on this service
    url: /workshop/in-service
    steps:
      - Tap Select on Brake pads (pair), FKL-900003
      - Tap Add to components replaced
    callouts:
      - [1, "text=stock deducted on completion", "The part you fitted"]
    :::

4. To note what you did on a check, tap the note icon next to it (**Record work done**). Pick a common resolution or type a short note, then tap **Save**.

    :::shot mech-svc-work-done
    caption: The Record work done note on a check, with Work carried out
    url: /workshop/in-service
    steps:
      - Tap the note icon next to a check
      - Type "Chain adjusted"
    callouts:
      - [1, "text=Work carried out", "A short note"]
    :::

!!! note "Remember"
    Record **every** part in KART from day one. Until your hub's stock is moved from the Workshop App, the stock count depends on it. See [Switch-over day](../switch-over/index.md).

## Complete the service

1. Tap **Complete service** at the bottom.

    :::shot mech-svc-complete
    caption: The Complete service button at the bottom of Servicing
    url: /workshop/in-service
    steps:
      - Answer every required check
      - Scroll to the bottom
    callouts:
      - [1, "text=Complete service", "Tap when every check is answered"]
    :::

2. Read the **Service & Inspection Declaration**. Tick **I confirm the above declaration and that this kart is race-ready and safe for use.**

    :::shot mech-svc-declaration
    caption: The Service and Inspection Declaration with the confirm tick box
    url: /workshop/in-service
    steps:
      - Tap Complete service
      - Tick the declaration box
    callouts:
      - [1, "text=Service & Inspection Declaration", "Read it"]
      - [2, "role=checkbox", "Tick to confirm"]
    :::

3. Tap **Confirm**. KART sets the kart **Ready**, or **Repair Needed (usable)** if a repair is still open.

    :::shot mech-svc-done
    caption: Kart 203 back as Ready on the Overview board
    url: /workshop
    state: After Alex completes the service on 203
    steps:
      - Tap Confirm
      - Open Overview and find 203
    callouts:
      - [1, "text=Kart 203", "Ready again"]
    :::

!!! warning "Watch out"
    **Complete service** stays greyed out until everything is done. KART says why:

    - **checks still unchecked**: answer every required check.
    - **blocked checks must be resolved first**: fix the blocked check or turn it into a repair.
    - **outstanding tickets must be resolved first**: a reliability ticket on this kart is still open (any ticket, even a Performance one). Do the repair first. Then someone with the Reliability permission sets the ticket to **Resolved**. See [Reliability tickets](reliability-ticket.md).
    - **outstanding campaign tasks must be completed first**: finish the campaign task, see [Campaign work](campaign-work.md).

!!! tip "Tip"
    If the kart was already serviced and only campaign work is left, KART says **This kart has already been serviced** and shows **Complete campaign work** instead.

## Already have a kart in service?

1. If you tap **Start service** on another kart while one is running, KART says **You already have a kart in service**.

    :::shot mech-svc-switch
    caption: The You already have a kart in service dialog with Pause and switch
    state: Alex has 203 in service and taps 204
    steps:
      - With 203 in service, tap 204 in the Requires service lane
      - Tap Start service
    callouts:
      - [1, "text=You already have a kart in service", "Only one at a time"]
      - [2, "text=Pause and switch", "Pause 203 and start 204"]
    :::

2. Tap **Pause and switch** to pause the first service and start the new one, or **Cancel** to stay.

    :::shot mech-svc-switched
    caption: Servicing for 204 with 203 in the Paused services bar
    url: /workshop/in-service
    state: After Pause and switch from 203 to 204
    steps:
      - Tap Pause and switch
    callouts:
      - [1, "text=Paused services", "203 waits here"]
    :::
