# Reliability tickets: stop a kart

:::defaults
persona: Casey Mechanic
device: tablet
url: /workshop
state: "Seed variant without the Cadet 207 ticket (or record on 207 and delete the extra ticket afterwards)"
:::

A reliability ticket records a fault for engineering. When the ticket's effect is anything other than **Performance**, it **stops** the kart: the kart shows **Repair Required** and is not offered for allocation (KART does not offer it when karts are handed out for an event). This is the only normal way to take a kart out of use.

You need the **Reliability** permission to raise tickets. In this guide Casey Mechanic has it and Alex Mechanic does not.

!!! info "What changed from the Workshop App"
    - In the Workshop App an incident could stop a kart. In KART only a **stopping reliability ticket** (or a blocking repair) does.
    - Tickets live in KART's **Technical** area (the Karting Reliability Tracker). Saving a ticket also creates a linked workshop incident, so the workshop sees it.
    - A ticket raised from an incident (**Raise reliability ticket** on the kart page or ICU board) resolves that incident and links it instead. KART says **Incident resolved with this ticket.**
    - The Tracker also has **Log incident** for events staff and contractors. See [Report a problem](report-a-problem.md#log-an-incident-from-the-tracker-events-staff-and-contractors).
    - The root cause stays on the ticket. The remedy (what you did) goes on the repair.

## Raise a stopping ticket

:::clip mech-ticket-clip
caption: raising a stopping reliability ticket on Cadet 207 that cut out and would not restart
duration: 75
steps:
  - Tap Report a kart problem on Overview
  - Choose 207 and Reliability, tap Continue
  - In the ticket form set Effect of Issue to Cut out not restarted and Status to Ongoing
  - Type the description and tap Submit Issue
  - Show Workshop incident linked to the ticket
  - Back in the Workshop, show 207 as Repair Required and its card in the Service Queue
captions:
  - "Tap Report a kart problem."
  - "Choose the kart and Reliability."
  - "Tap Continue to open the ticket form."
  - "Pick the effect: cut out, not restarted."
  - "Leave the status Ongoing and submit."
  - "The kart is now Repair Required."
:::

1. On **Overview**, tap **Report a kart problem**.

    :::shot mech-ticket-open
    caption: Report a kart problem on Overview for Casey
    steps:
      - Open Overview as Casey Mechanic
    callouts:
      - [1, "text=Report a kart problem", "Start here"]
    :::

2. Choose the kart, for example **207**, and choose **Reliability**.

    :::shot mech-ticket-type
    caption: Kart 207 and the Reliability type chosen
    steps:
      - Tap Report a kart problem, choose 207, choose Reliability
    callouts:
      - [1, "text=Reliability", "A fault for engineering"]
      - [2, "text=Continue opens the reliability ticket form", "What happens next"]
    :::

3. Tap **Continue**. The reliability ticket form opens with this kart. **Kart Number** shows the kart's number in its class, so Cadet 207 shows as **07**.

    :::shot mech-ticket-form
    caption: The reliability ticket form opened for Cadet 207
    url: /tracker
    steps:
      - Tap Continue
    callouts:
      - [1, "text=Kart Type *", "Already filled in"]
    :::

4. Choose the **Effect of Issue** (what the kart did), for example **Cut out not restarted**.

    :::shot mech-ticket-effect
    caption: Effect of Issue set to Cut out not restarted
    url: /tracker
    steps:
      - Open Effect of Issue and choose Cut out not restarted
    callouts:
      - [1, "text=Effect of Issue *", "Anything but Performance stops the kart"]
    :::

5. Leave **Status** as **Ongoing**.

    :::shot mech-ticket-status
    caption: Status set to Ongoing
    url: /tracker
    steps:
      - Check Status shows Ongoing
    callouts:
      - [1, "text=Status *", "Ongoing keeps the ticket open"]
    :::

6. Type what happened in **Describe Issue**.

    :::shot mech-ticket-describe
    caption: Describe Issue filled in
    url: /tracker
    steps:
      - Type "Cut out on the back straight, would not restart" in Describe Issue
    callouts:
      - [1, "text=Describe Issue", "What the kart did"]
    :::

7. Tap **Submit Issue**. KART says **Workshop incident linked to the ticket.**

    :::shot mech-ticket-saved
    caption: The ticket saved with the Workshop incident linked to the ticket message
    url: /tracker
    steps:
      - Tap Submit Issue
    callouts:
      - [1, "text=Workshop incident linked to the ticket.", "The workshop sees it too"]
    :::

8. Go back to the Workshop tab. The kart shows **Repair Required** and a repair card with **Open ticket** is in the **Service Queue**.

    :::shot mech-ticket-result
    caption: Cadet 207 repair card with Reliability and Open ticket tags
    url: /workshop/repairs
    state: Cadet 207 with its stopping ticket (as seeded)
    steps:
      - Open Service Queue
    callouts:
      - [1, "text=207", "Cadet 207"]
      - [2, "text=Open ticket", "Linked stopping ticket"]
    :::

!!! tip "Tip"
    You can also open **Technical** from **Select your Hub** and tap **New Reliability Issue**. For damage, use **Record New Damage**.

!!! warning "Watch out"
    **Performance** tickets do not stop the kart. Choose the effect that matches what happened, not the one that gives the board you want.

## Close a ticket when the fault is fixed

1. In the **Service Queue**, tap the kart's reliability card (it says **Open ticket**). On a card that came from an incident or damage, tap **Open linked ticket** instead.

    :::shot mech-ticket-linked
    caption: The Cadet 207 reliability card with Open ticket
    url: /workshop/repairs
    state: Cadet 207 with its stopping ticket still Ongoing
    steps:
      - Find the 207 card
    callouts:
      - [1, "text=Open ticket", "Opens the ticket"]
    :::

2. Change **Status** to **Resolved**.

    :::shot mech-ticket-resolve
    caption: The 207 ticket with Status set to Resolved
    url: /tracker
    state: Cadet 207 repair completed, ticket still Ongoing
    steps:
      - Open the ticket for editing
      - Set Status to Resolved
    callouts:
      - [1, "text=Resolved", "The fault is fixed"]
    :::

3. Tap **Update** at the top of the ticket. When the ticket is resolved, the kart leaves Repair Required. If it has no other stopping ticket, it shows as available again.

    !!! warning "Watch out"
        If **System at fault** is **Battery**, pick the battery before you tap **Update**. If no battery is picked, the ticket is not saved and KART shows "Missing fields". Check that the kart really changed on the board.

    :::shot mech-ticket-closed
    caption: Cadet 207 back to normal on the board after its ticket is resolved, with Available ticked and no Reliability tag
    url: /workshop
    state: After the 207 ticket is resolved
    steps:
      - Tap Update
      - Open Overview and find 207
    callouts:
      - [1, "text=#207", "Available again"]
    :::

!!! note "Remember"
    On your hub's switch-over day, close any stopping ticket whose fault is already fixed. Karts that were Repair Required in KART stay that way until their ticket or repair is closed, whatever the Workshop App said.
