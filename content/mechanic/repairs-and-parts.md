# Repairs and parts used

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop/repairs
state: "Bambino 106 repair (loose bumper mount) ready to repair; Junior 307 repair (broken front bumper) waiting on parts, front bumpers on order; Cadet 207 repair on its stopping ticket"
:::

Every finding, every damaged component and every stopping ticket becomes a **repair**. Repairs show as cards in the **Service Queue**. You time the work, then log the remedy and the parts you used.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Repair Workflow** is now in the **Service Queue**, in the exception lanes **Requires reliability actions** (ready to repair) and **Requires part** (waiting on parts).
    - The **Waiting on Parts** bucket is the **Requires part** lane. Once the part is ordered, the card says **On order** with the supplier and date.
    - The remedy goes on **Log remedy / complete repair**. The root cause stays on the reliability ticket.

## Find a repair

1. Open the **Service Queue** and scroll to the exception lanes.

    :::shot mech-repair-lanes
    caption: The exception lanes Requires reliability actions, Requires part and Requires Support
    steps:
      - Open Service Queue
      - Scroll to the exception lanes
    callouts:
      - [1, "text=Requires reliability actions", "Repairs you can do now"]
      - [2, "text=Requires part", "Repairs waiting on parts"]
      - [3, "text=Requires Support", "Needs a specialist or a decision"]
    :::

2. Work the **Requires reliability actions** list from the top. Your hub manager sets the order.

    :::shot mech-repair-priority
    caption: The repair priority list with Work top to bottom
    steps:
      - Look at the Requires reliability actions lane
    callouts:
      - [1, "text=Repair priority, top first. Work top to bottom.", "Start at the top"]
    :::

3. Read the card. It shows the kart, where the repair came from (**Damage**, **Incident** or **Reliability**), and **Waiting on:** with the parts if any. Repair cards name the kart by class and its number in the class: **Junior 7** is kart 307.

    :::shot mech-repair-card
    caption: The repair card for Junior 307 showing Waiting on front bumper and On order
    steps:
      - Find the 307 card in Requires part
    callouts:
      - [1, "text=Junior 7", "Junior 307"]
      - [2, "text=Waiting on:", "The part it needs"]
      - [3, "text=On order", "Already ordered"]
    :::

## Time the repair work

:::clip mech-repair-clip
caption: repairing Bambino 106, logging the remedy and recording the parts used
duration: 80
steps:
  - On the 106 card tap Open kart page
  - Tap Start repair under Current work, wait a few seconds, tap Stop repair work
  - Back in the Service Queue, tap Log remedy / complete repair on the 106 card
  - Choose Tightened / Secured in Remedy, type What was done
  - Tap Confirm repair complete
  - Show 106 back as Ready on Overview
captions:
  - "Open the kart page from the repair card."
  - "Tap Start repair when you begin."
  - "Tap Stop repair work when you finish."
  - "Tap Log remedy / complete repair."
  - "Choose the remedy and say what you did."
  - "Record every part you used."
  - "Confirm. The repair is closed."
:::

1. On the card, tap **Open kart page**.

    :::shot mech-repair-kartpage
    caption: Open kart page on the 106 repair card
    steps:
      - Find the 106 card
    callouts:
      - [1, "text=Open kart page", "Go to the kart"]
    :::

2. Under **Current work**, tap **Start repair** when you begin.

    :::shot mech-repair-start
    caption: Start repair under Current work on the 106 kart page
    url: "/workshop/kart/{kart:106}"
    steps:
      - Scroll to Current work
    callouts:
      - [1, "text=Current work", "Open repairs on this kart"]
      - [2, "text=Start repair", "Start the repair clock"]
    :::

3. Tap **Pause repair** for a break, then **Resume repair**. Tap **Stop repair work** when you finish.

    :::shot mech-repair-stop
    caption: Pause repair and Stop repair work while repair work is running
    url: "/workshop/kart/{kart:106}"
    state: Repair work running on 106
    steps:
      - Tap Start repair and wait
    callouts:
      - [1, "text=Pause repair", "A short break"]
      - [2, "text=Stop repair work", "Finished for now"]
    :::

!!! note "Remember"
    If the kart is also in service, starting repair work pauses the service. The service then shows the extra repair minutes. See [Pause and resume](pause-and-resume.md).

## Log the remedy and complete the repair

1. Back in the **Service Queue**, tap **Log remedy / complete repair** on the card.

    :::shot mech-remedy-open
    caption: Log remedy / complete repair on the 106 card
    steps:
      - Find the 106 card
    callouts:
      - [1, "text=Log remedy / complete repair", "Close the repair"]
    :::

2. Choose the **Remedy**, for example **Tightened / Secured**.

    :::shot mech-remedy-type
    caption: The Remedy list with Repaired, Replaced, Adjusted, Tightened / Secured, Cleaned and Other
    steps:
      - Tap Log remedy / complete repair
      - Open Remedy and choose Tightened / Secured
    callouts:
      - [1, "text=Remedy", "What kind of fix"]
    :::

3. If the repair has parts, choose a **Remedy per part**: **Replaced** or **Used part installed** take stock; **Repaired** and **Inspected and reused** do not.

    :::shot mech-remedy-parts
    caption: Remedy per part on the 307 repair with Replaced chosen for the front bumper
    state: Front bumpers received for 307 (record after the Goods In shots)
    steps:
      - Open Log remedy / complete repair on 307
      - Choose Replaced for the front bumper
    callouts:
      - [1, "text=Remedy per part", "One answer per part"]
      - [2, "text=Replaced", "New part fitted: takes stock"]
    :::

4. Type a short note in **What was done**.

    :::shot mech-remedy-notes
    caption: What was done filled in
    steps:
      - Type "Bumper mount bolt tightened to torque, thread locker added" in What was done
    callouts:
      - [1, "text=What was done", "A short note"]
    :::

5. Add a photo under **Files** if it helps.

    :::shot mech-remedy-files
    caption: The Files field in the remedy dialog
    steps:
      - Scroll to Files
    callouts:
      - [1, "text=Files", "Photos or documents"]
    :::

6. Tap **Confirm repair complete**.

    :::shot mech-remedy-confirm
    caption: Confirm repair complete at the bottom of the remedy dialog
    steps:
      - Tap Confirm repair complete
    callouts:
      - [1, "text=Confirm repair complete", "Done"]
    :::

!!! tip "Tip"
    If you inspected the kart and nothing needed repairing, use **Resolved: no fault found** instead of a remedy. The linked reliability ticket then gets System at fault: No fault found.

## Record every part you use

Parts reach a kart in three ways. Record each one in KART:

- **In a service:** **Components replaced** on Servicing (**Select**, then **Add to components replaced**). See [Doing a service](service-turn.md).
- **On a repair:** the parts on the repair, with **Remedy per part** when you complete it.
- **In campaign work:** **Parts fitted** on the campaign task. See [Campaign work](campaign-work.md).

!!! warning "Watch out"
    Why it matters: KART takes each recorded part from your hub's stock. **Parts needed** and the order list are worked out from that stock. If you fit a part without recording it, KART thinks it is still on the shelf, nobody orders a new one, and the next kart waits.

!!! abstract "Coming with your hub's switch-over"
    Your hub's stock moves from the Workshop App a few days after your switch-over. KART then sets each part to the Workshop App count minus what you used in KART since the switch. So record every part you use in KART from day one. Until then, check the shelf before ordering.

!!! abstract "Coming soon"
    Repairs moved from the Workshop App will be listed under their incidents on the kart page, with a **Files** button on completed repairs for their photos.
