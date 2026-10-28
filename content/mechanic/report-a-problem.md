# Report a problem

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: "Seed variant without the Bambino 106 incident (or record on 106 and delete the extra incident afterwards); Power / Performance inspection checklist published"
:::

Use **Report a kart problem** for anything that happened to a kart or anything you found on it. The type you pick decides which records KART creates. This page covers incidents, driver feedback and what to do after you inspect a kart. To stop a kart, see [Reliability tickets](reliability-ticket.md).

!!! info "What changed from the Workshop App"
    - **Create New Kart Report** is now the **Report a kart problem** button on Overview and on the kart page.
    - **Incidents are information only.** They never make a kart Repair Required or unavailable. To take a kart out of use, raise a stopping reliability ticket.
    - An incident tells the workshop to **look at a kart**. What you find is recorded the standard way: a **reliability ticket** (for example a loose bolt, root cause operational or poor quality control) or a **damage record**. There are no "inspection findings" any more.
    - Events staff and contractors log incidents on the **Tracker** with **Log incident**. They do not need the Workshop permission.
    - The **Power / Performance Inspection** is now part of the **Driver feedback** report.

## The four types

| Type | Use it for | What KART creates |
|---|---|---|
| **Incident** | Impact, spin or anything that happened on track | A workshop incident on the ICU board |
| **Driver feedback** | What the driver reported, for example low power or noise | A workshop incident, plus repairs for failed inspection checks |
| **Reliability** | A fault for engineering to investigate | Opens the reliability ticket form. Needs the Reliability permission |
| **Damage** | Damaged components | Opens Record New Damage. Each component becomes a repair. Needs the Reliability permission |

## Report an incident

:::clip mech-incident-clip
caption: reporting an incident on Bambino 106 and finding it on the ICU board
duration: 45
steps:
  - Tap Report a kart problem on Overview
  - Choose 106 in Kart
  - Choose Incident, Incident type Impact / Contact, describe it, Impact location Front
  - Tap Report problem
  - Open the ICU board and show the incident on Kart 106
captions:
  - "Tap Report a kart problem."
  - "Choose the kart."
  - "Pick Incident and say what happened."
  - "Tap Report problem."
  - "The incident is on the ICU board for the workshop."
:::

1. On **Overview**, tap **Report a kart problem**.

    :::shot mech-report-open
    caption: The Report a kart problem button on Overview
    steps:
      - Open Overview
    callouts:
      - [1, "text=Report a kart problem", "Tap here"]
    :::

2. In **Kart**, tap **Choose a kart** and pick the kart, for example **106**.

    :::shot mech-report-kart
    caption: Choosing kart 106 in the Report a kart problem dialog
    steps:
      - Tap Report a kart problem
      - Open Choose a kart and pick 106
    callouts:
      - [1, "text=Choose a kart", "Pick the kart"]
    :::

3. Under **What are you reporting?** choose **Incident**.

    :::shot mech-report-type
    caption: The four report types, with Incident chosen
    steps:
      - Look at What are you reporting?
      - Choose Incident
    callouts:
      - [1, "text=Incident", "Something that happened"]
    :::

4. Choose the **Incident type**, for example **Impact / Contact**.

    :::shot mech-report-incident-type
    caption: Incident type set to Impact / Contact
    steps:
      - Open Incident type and choose Impact / Contact
    callouts:
      - [1, "text=Incident type", "What kind of incident"]
    :::

5. Type what happened in **Notes / details**. (**Describe the incident** only appears when the incident type is **Other**.)

    :::shot mech-report-describe
    caption: Notes / details filled in for the incident
    steps:
      - Type "Hit the tyre wall at turn 3 in the Demo Practice Day" in Notes / details
    callouts:
      - [1, "text=Notes / details", "Short and clear"]
    :::

6. Tap the **Impact location**, for example **Front**.

    :::shot mech-report-impact
    caption: Impact location Front selected
    steps:
      - Tap Front under Impact location
    callouts:
      - [1, "text=Impact location", "Where it was hit"]
    :::

7. Tap **Report problem**. KART says **Workshop incident logged. It is on the ICU board for the workshop.** The kart's status does not change.

    :::shot mech-report-logged
    caption: The message after reporting the incident on Bambino 106
    steps:
      - Tap Report problem
    callouts:
      - [1, "text=Workshop incident logged.", "Saved for the workshop"]
    :::

!!! note "Remember"
    **The incident stays open on the ICU board until the workshop inspects the kart.** The ICU board is the list of an event's open incidents in priority order (in **Event Operations**, pick the event, then **ICU board**). It was **ICU Workflow** in the Workshop App. When you inspect the kart, follow the incident up as described below.

## Log an incident from the Tracker (events staff and contractors)

On an event you may not have the Workshop permission, for example as a contractor. You can still log an incident for any kart of a hub you have access to.

1. On **Select your Hub**, tap the **Technical** card of your hub. It opens the Karting Reliability Tracker (the **Tracker**).
2. Tap **Log incident**, next to **New Reliability Issue** and **Record New Damage**.

    :::shot mech-tracker-log-incident
    persona: Jordan Contractor
    url: /tracker
    state: Normal demo world; Jordan Contractor has access to Demo Hub and no permissions
    caption: Log incident on the Tracker, with the Reliability buttons greyed out for a contractor
    steps:
      - Open the Tracker for Demo Hub
    callouts:
      - [1, "text=Log incident", "Any staff member"]
      - [2, "text=New Reliability Issue", "Needs the Reliability permission"]
    :::

3. Choose the **Kart**, the **Incident type** (and the **Impact location** for an impact) and type what happened in **Notes / details**.

    :::shot mech-tracker-log-dialog
    persona: Jordan Contractor
    url: /tracker
    state: Normal demo world; Jordan Contractor has access to Demo Hub and no permissions
    caption: The Log incident dialog on the Tracker
    steps:
      - Tap Log incident
      - Choose Kart 102, Incident type Spin / Off Track - No Contact, type what happened
    callouts:
      - [1, "text=Kart *", "Pick the kart"]
      - [2, "text=Incident type *", "What happened"]
      - [3, "text=Report problem", "Save it"]
    :::

4. Tap **Report problem**. You stay on the Tracker. The incident goes on the ICU board for the workshop.

!!! warning "Watch out"
    An incident never takes a kart out of use. If the kart must not be used, raise a reliability ticket (**New Reliability Issue**, needs the Reliability permission) or tell someone with the Reliability permission straight away.

## Follow up an incident after inspecting the kart

Open the kart page (or the **ICU board**). Every open incident shows three actions:

:::shot mech-incident-follow-up
url: /workshop/kart/{kart:106}
state: Seed variant without the Bambino 106 incident, then the incident reported on 106 as above (no repairs)
caption: An open incident on the kart page with its three follow-up actions
steps:
  - Open the kart page of Bambino 106
  - Scroll to Incident history
callouts:
  - [1, "text=Raise reliability ticket", "You found a fault"]
  - [2, "text=Record damage", "You found damage"]
  - [3, "text=Resolved: no fault found", "Nothing to repair"]
:::

On the **ICU board** the same incident has **Raise reliability ticket** and **Record damage** on its card.

:::shot mech-icu-follow-up
url: /icu
state: As above, the open incident on Bambino 106
caption: The incident on the ICU board with the two follow-up buttons
steps:
  - Open the ICU board for Demo Hub
callouts:
  - [1, "text=Kart 106", "The incident's kart"]
  - [2, "text=Raise reliability ticket", "Follow it up from here"]
:::

| Action | When | What happens |
|---|---|---|
| **Raise reliability ticket** | You found a fault, for example a loose bolt (root cause operational or poor quality control) | The ticket form opens on the Tracker with the kart filled in. When you tap **Submit Issue**, the incident is resolved and linked to the ticket (**Open linked ticket**); no new incident is created. KART says **Incident resolved with this ticket.** |
| **Record damage** | You found damaged components | **Record New Damage** opens with the kart filled in. When you record the damage, the incident is resolved and names the damage ticket. Each component becomes a repair |
| **Resolved: no fault found** | Nothing needs repairing | The incident is closed. The kart's status does not change |

**Raise reliability ticket** and **Record damage** need the Reliability permission, like the Tracker buttons. The ticket may be **Ongoing** or already **Resolved** (fixed trackside). An incident that still has open repairs from before shows **Complete the open repairs first, then raise a reliability ticket or record damage.** instead of the two buttons. After saving, KART takes you back to the kart page, where the incident shows **Resolved** with **Reliability ticket raised: <ticket>** or **Damage recorded: <ticket>**.

:::shot mech-incident-resolved
url: /workshop/kart/{kart:106}
state: As above, then a reliability ticket raised for Bambino 106 from the incident (Casey Mechanic)
caption: The incident resolved by a reliability ticket, with Open linked ticket
steps:
  - Open the kart page of Bambino 106
  - Scroll to Incident history
callouts:
  - [1, "text=Resolved", "Closed by the ticket"]
  - [2, "text=Reliability ticket raised:", "Names the ticket"]
  - [3, "text=Open linked ticket", "Opens it on the Tracker"]
:::

!!! tip "Tip"
    Repairs that were logged as findings before this change stay on the kart page under their incident. Complete them as usual with **Log remedy / complete repair**.

## Report driver feedback and do the Power / Performance inspection

1. Open **Report a kart problem** for the kart, as in steps 1 and 2 above (for example kart **302**). Then choose **Driver feedback**.

    :::shot mech-feedback-type
    caption: Driver feedback chosen for Junior 302
    steps:
      - Tap Report a kart problem
      - Choose 302 and Driver feedback
    callouts:
      - [1, "text=Driver feedback", "What the driver said"]
    :::

2. Choose the **Driver feedback type**. For low power choose **Power / Performance**.

    :::shot mech-feedback-power
    caption: Driver feedback type Power / Performance
    steps:
      - Open Driver feedback type and choose Power / Performance
    callouts:
      - [1, "text=Driver feedback type", "Type of feedback"]
    :::

3. Type what the driver said in **Notes / details**. (**Describe the driver feedback** only appears for the type **Other**.)

    :::shot mech-feedback-describe
    caption: Notes / details filled in with what the driver said
    steps:
      - Type "Driver says it feels slow out of the hairpin" in Notes / details
    callouts:
      - [1, "text=Notes / details", "In the driver's words"]
    :::

4. Work through the **Power / Performance inspection**. Answer every check Pass or Fail. A failed check needs a finding, which becomes a repair.

    :::shot mech-feedback-inspection
    caption: The Power / Performance inspection checklist with Pass and Fail answers
    steps:
      - Scroll to Power / Performance inspection
      - Answer the checks Pass, one Fail
    callouts:
      - [1, "text=Power / Performance inspection", "Answer every check"]
      - [2, "text=Other findings (optional)", "Anything else you found"]
    :::

5. For a failed check, add its finding in the check. Use **Other findings (optional)** for anything else you found on the kart.

    :::shot mech-feedback-finding
    caption: A finding added for a failed inspection check
    steps:
      - Add a finding with Issue type Worn and Item / component "Throttle cable"
    callouts:
      - [1, "text=Other findings (optional)", "Anything else you found"]
    :::

6. Tap **Report problem**.

    :::shot mech-feedback-submit
    caption: Report problem at the bottom of the driver feedback report
    steps:
      - Tap Report problem
    callouts:
      - [1, "text=Report problem", "Save it"]
    :::

!!! tip "Tip"
    If KART says **No Power / Performance inspection checklist is published. The report is saved without an inspection.**, tell your hub manager so FKL Central (the league's central team) can publish it.
