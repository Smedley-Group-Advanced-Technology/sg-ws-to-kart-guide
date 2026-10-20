# Report a problem

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: "Seed variant without the Bambino 106 incident (or record on 106 and delete the extra incident afterwards); Power / Performance inspection checklist published"
:::

Use **Report a kart problem** for anything that happened to a kart or anything you found on it. The type you pick decides which records KART creates. This page covers incidents, findings and driver feedback. To stop a kart, see [Reliability tickets](reliability-ticket.md).

!!! info "What changed from the Workshop App"
    - **Create New Kart Report** is now the **Report a kart problem** button on Overview and on the kart page.
    - **Incidents are information only.** They never make a kart Repair Required or unavailable. To take a kart out of use, raise a stopping reliability ticket.
    - The **Power / Performance Inspection** is now part of the **Driver feedback** report.
    - Findings are entered in the same dialog. Each finding becomes a repair.

## The four types

| Type | Use it for | What KART creates |
|---|---|---|
| **Incident** | Impact, spin or anything that happened on track | A workshop incident, plus a repair for each finding |
| **Driver feedback** | What the driver reported, for example low power or noise | A workshop incident, plus repairs for failed checks and findings |
| **Reliability** | A fault for engineering to investigate | Opens the reliability ticket form. Needs the Reliability permission |
| **Damage** | Damaged components | Opens Record New Damage. Each component becomes a repair. Needs the Reliability permission |

## Report an incident with a finding

:::clip mech-incident-clip
caption: reporting an incident on Bambino 106 with a loose bumper mount finding
duration: 70
steps:
  - Tap Report a kart problem on Overview
  - Choose 106 in Kart
  - Choose Incident, Incident type Impact / Contact, describe it, Impact location Front
  - Add a finding, Issue type Loose, Item / component Bumper mount
  - Answer No, it is still usable
  - Tap Report problem
  - Show 106 as Repair Needed (usable) and its repair card in the Service Queue
captions:
  - "Tap Report a kart problem."
  - "Choose the kart."
  - "Pick Incident and say what happened."
  - "Add what you found."
  - "Say whether it stops the kart."
  - "Tap Report problem."
  - "The finding is now a repair."
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
    caption: The four report types with Reliability and Damage greyed out for Alex
    steps:
      - Look at What are you reporting?
      - Choose Incident
    callouts:
      - [1, "text=Incident", "Something that happened"]
      - [2, "text=Needs the Reliability permission.", "Only with Reliability"]
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

7. In the finding, choose the **Issue type** (for example **Loose**) and type the **Item / component** (for example "Bumper mount").

    :::shot mech-report-finding
    caption: Finding 1 with Issue type Loose and Item / component Bumper mount
    steps:
      - In Finding 1 choose Issue type Loose
      - Type "Bumper mount" in Item / component
      - Type "Front bumper mount bolt loose" in Describe the issue
    callouts:
      - [1, "text=Finding 1", "Each finding becomes a repair"]
      - [2, "text=Item / component", "What part of the kart"]
    :::

8. Answer **Is a replacement part required?** If yes, pick the part so it can be ordered.

    :::shot mech-report-part
    caption: Is a replacement part required? answered No
    steps:
      - Answer No to Is a replacement part required?
    callouts:
      - [1, "text=Is a replacement part required?", "Yes adds the part to the repair"]
    :::

9. Answer **Would this stop the kart from being used?** Here: **No, it is still usable**.

    :::shot mech-report-stop
    caption: Would this stop the kart from being used? with the reminder that the answer does not stop the kart
    steps:
      - Choose No, it is still usable
      - Show the note under the question
    callouts:
      - [1, "text=Would this stop the kart from being used?", "Answer honestly"]
      - [2, "text=This answer does not stop the kart", "Only a reliability ticket stops it"]
    :::

10. Tap **Add finding** if you found something else. Then tap **Report problem**.

    :::shot mech-report-submit
    caption: Add finding and Report problem buttons at the bottom of the dialog
    steps:
      - Scroll to the bottom of the dialog
    callouts:
      - [1, "text=Add finding", "Another finding"]
      - [2, "text=Report problem", "Save the report"]
    :::

11. The kart now shows **Repair Needed (usable)** and the repair appears as a card in the **Service Queue**.

    :::shot mech-report-result
    caption: The new repair card for 106 in the Service Queue
    url: /workshop/repairs
    state: After the 106 incident is reported
    steps:
      - Open Service Queue
    callouts:
      - [1, "text=Incident", "Repair from the incident"]
      - [2, "text=106", "Bambino 106"]
    :::

!!! warning "Watch out"
    If the kart must not be used, the answer **Yes, it should not be used** is not enough. Raise a reliability ticket, or ask a colleague with the Reliability permission to do it. The finding has a link that opens the reliability ticket form in a new tab.

!!! note "Remember"
    **Without findings the incident stays open on the ICU board until it is inspected.** When you inspect it later, open the kart page and use **Log findings**. If nothing needs repairing, choose **Resolved: no fault found**.

## Report driver feedback and do the Power / Performance inspection

1. Tap **Report a kart problem**, choose the kart (for example **302**) and choose **Driver feedback**.

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

4. Work through the **Power / Performance inspection**. Answer every check Pass or Fail.

    :::shot mech-feedback-inspection
    caption: The Power / Performance inspection checklist with Pass and Fail answers
    steps:
      - Scroll to Power / Performance inspection
      - Answer the checks Pass, one Fail
    callouts:
      - [1, "text=Power / Performance inspection", "Answer every check"]
      - [2, "text=Inspection findings (optional)", "A failed check needs a finding"]
    :::

5. For a failed check, add the finding under **Inspection findings (optional)**.

    :::shot mech-feedback-finding
    caption: A finding added for a failed inspection check
    steps:
      - Add a finding with Issue type Worn and Item / component "Throttle cable"
    callouts:
      - [1, "text=Inspection findings (optional)", "One finding per failed check"]
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
    If KART says **No Power / Performance inspection checklist is published. The report is saved without an inspection.**, tell your hub manager so FKL Central can publish it.
