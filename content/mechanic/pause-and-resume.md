# Pause and resume a service

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop/in-service
state: Alex has Cadet 203 in service; Junior 304 already paused by Alex with reason Waiting on parts
:::

Pause a service whenever you stop working on the kart: end of shift, waiting for parts, waiting for another mechanic or a decision. The pause is recorded with its reason and how long it lasts, so the service time stays honest.

!!! info "What changed from the Workshop App"
    - Pausing works like the Workshop App, but KART always asks for a **Pause reason**.
    - Your paused services sit in a **Paused services** bar under the Workshop tabs. Tap one to carry on.
    - Doing repair work on the kart pauses its service by itself. The service then shows the extra repair minutes.
    - New in KART: any mechanic of the hub can **Take over** a service somebody else started. KART always asks for a reason, and the mechanic who started it and your hub manager see who took it over, when and why.

## Watch it first

:::clip mech-pause-clip
caption: pausing Cadet 203 with a reason and resuming Junior 304
duration: 50
steps:
  - On Servicing for 203, tap Pause
  - Choose End of Shift in Pause reason, type a comment, tap Pause
  - Show the Paused services bar with 203 and 304
  - Tap 304 in the Paused services bar and show its Servicing page
captions:
  - "Tap Pause when you stop work."
  - "Choose a reason."
  - "Add a note for the next mechanic."
  - "Your paused karts wait in the bar."
  - "Tap a kart to carry on."
:::

## Pause

1. On **Servicing**, tap **Pause**.

    :::shot mech-pause-button
    caption: The Pause button on the Servicing page
    steps:
      - Open Servicing for 203
    callouts:
      - [1, "role=button[name='Pause']", "Pause the service"]
    :::

2. In **Pause service**, tap a **Pause reason**, for example **End of Shift** or **Waiting on parts**.

    :::shot mech-pause-reason
    caption: The Pause service dialog with the list of pause reasons
    steps:
      - Tap Pause
      - Look at the Pause reason list
    callouts:
      - [1, "text=Pause service", "The pause dialog"]
      - [2, "text=Waiting on parts", "Pick the real reason"]
    :::

3. Add a note in **Comment (optional)** if the next mechanic should know something.

    :::shot mech-pause-comment
    caption: A comment typed in Comment (optional)
    steps:
      - Choose End of Shift
      - Type "Front brakes bled, rear still to do" in Comment (optional)
    callouts:
      - [1, "text=Comment (optional)", "Anything the next mechanic should know"]
    :::

4. Tap **Pause**. The kart moves to the **Paused services** bar at the top of **Servicing**, and shows **Paused** (grey) on the board.

    :::shot mech-pause-done
    caption: The Paused services bar with 203 and 304
    url: /workshop/in-service
    state: After pausing 203
    steps:
      - Tap Pause in the dialog
      - Look at the top of Servicing
    callouts:
      - [1, "text=Paused services", "Your paused karts"]
    :::

!!! note "Remember"
    The reasons are: **Waiting on Manager Decision**, **Waiting on Another Mechanic**, **Waiting on Tool**, **Waiting on Diagnosis**, **Waiting on parts**, **End of Shift**, **Lunch Break** and **Other**.

## Resume

1. On **Servicing**, find the kart in the **Paused services** bar under the Workshop tabs. Hover or long-press to see the reason.

    :::shot mech-resume-bar
    caption: Junior 304 in the Paused services bar showing Waiting on parts
    url: /workshop/in-service
    steps:
      - Hover 304 in the Paused services bar
    callouts:
      - [1, "text=304", "Paused by Alex: Waiting on parts"]
    :::

2. Tap the kart, for example **304**. KART opens its **Servicing** page and the timer runs again.

    :::shot mech-resume-open
    caption: Servicing for Junior 304 after resuming
    steps:
      - Tap 304 in the Paused services bar
    callouts:
      - [1, "text=304", "Back in service"]
    :::

3. Or open the kart page and tap **Resume service**.

    :::shot mech-resume-kartpage
    caption: Resume service on the kart page of Junior 304
    url: "/workshop/kart/{kart:304}"
    state: 304 paused by Alex
    steps:
      - Open kart 304 with Open kart
    callouts:
      - [1, "text=Resume service", "Carry on from here"]
      - [2, "text=Pause reason", "Why it was paused"]
    :::

## Take over another mechanic's service

If another mechanic started the service (for example they paused it and went home), you carry on with the same service. Do not start a new one: the checks, parts and times stay on the service.

1. Open the kart page. KART says **Another mechanic is servicing this kart. Any Workshop user of this hub can take it over with a reason.** Tap **Take over**.

    Or, in the **Service Queue**, tap the kart in the **In progress** lane. Hub managers and admins first get the read-only view of the checklist there (unless the kart is assigned to them); **Take over** is the button at its top.

    A service paused for repair work cannot be taken over: KART says **Paused for repair work: the repair mechanic finishes the repair first**.

2. In **Take over service**, type the **Reason**, for example "Alex went home, I finish the service". The reason needs 4 to 500 characters; **Take over** stays grey until then.

3. Tap **Take over**. KART moves the service to you, starts its clock again and opens **Servicing**.

!!! note "Who sees it"
    The reason is logged. The mechanic who started the service sees **Taken over from you** on their **Servicing** page for 24 hours, with who took it over, when and why. The kart page and the kart's card in the **In progress** lane show **Taken over by** with the initials, the time and the reason. The service report has a **Taken over** section listing every take-over: the previous and the new owner's initials, the time and the reason. So your hub manager sees it too.

!!! warning "Watch out"
    Take over only when the other mechanic cannot carry on. If they are still working on the kart, talk to them first.

## Repair work pauses the service

When you start repair work on a kart that is in service (see [Repairs and parts used](repairs-and-parts.md)), KART pauses the service for you. The paused tab shows a spanner, and its hint says **Repair work is running. Opening the service stops the repair clock.**

1. Tap the paused kart to go back to the service. The repair clock stops and the service clock runs again.

    :::shot mech-resume-repair
    caption: A paused service with the spanner icon because repair work is running
    url: /workshop/in-service
    state: Casey has started repair work on 205 while its service is open
    persona: Casey Mechanic
    steps:
      - Hover 205 in the Paused services bar
    callouts:
      - [1, "text=205", "Repair work is running"]
    :::

!!! tip "Tip"
    Pause before a break, even a short one. A service left running all night makes the service time look much longer than the work was.
