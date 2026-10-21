# Service checklists

:::defaults
persona: Taylor Central
device: desktop
url: /fkl-central?tab=checklists
state: "Published Bambino, Cadet and Junior v1 checklists; no open drafts"
:::

Every kart class has one master service checklist: Bambino, Cadet and Junior. You change a checklist by making a draft, editing it, checking it and publishing it with a note of what changed. New services use the new version straight away.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Checklists** are now **FKL Central > Service checklists**.
    - One versioned master per kart class (v1: 15 sections, 102 checks each), plus the driver feedback **Power / Performance inspection** checklist.
    - An open service keeps the version it started with.

## Make and publish a change

:::clip fc-checklist-clip
caption: making a draft of the Cadet checklist, adding a check and publishing it
duration: 50
steps:
  - Open FKL Central, Service checklists, Cadet
  - Tap New draft
  - Open the Steering section, tap Add check, type the Label, tap Save check
  - Show Check before publishing with No errors
  - Tap Publish, type What changed and tap Publish
captions:
  - "Open Service checklists."
  - "Make a new draft for the class."
  - "Add or change checks."
  - "Check it before publishing."
  - "Publish with a note of what changed."
:::

:::shot fc-chk-editor
caption: "Steps 2, 3, 6 and 7 on one screen: the Cadet draft in the editor with Add check, Check before publishing and Publish"
state: Cadet draft open, Steering section opened
steps:
  - Tap Cadet, then New draft
  - Open the Steering section
callouts:
  - [2, "text=Cadet: version 2", "Your draft"]
  - [3, "text=Add check", "New check in this section"]
  - [6, "text=Check before publishing", "Catch mistakes first"]
  - [7, "text=Publish", "With a note of what changed"]
:::

1. Open **FKL Central > Service checklists**. Choose the kart class at the top: **Bambino**, **Cadet**, **Junior** or **Shared checklist**. The **Published** box shows the version in use.

2. Tap **New draft**, for example on Cadet. If a draft exists, tap **Continue editing**. The editor opens on the draft.

3. Tap a section to open it, then tap **Add check** at the bottom of the section (or type a name under **New section** and tap **Add section**).

4. Type the **Label**. Choose the **Answer**: **By hand (the mechanic ticks it)** or from readings. Switch on **Optional** if it may be skipped.

    :::shot fc-chk-check
    caption: "Steps 4 and 5: the Add check dialog with Label, Optional, Answer and Add reading"
    state: Cadet draft open
    steps:
      - Tap Add check in the Steering section
      - Type "Rear sprocket guard secure" in Label
    callouts:
      - [4, "text=Label", "What the mechanic checks"]
      - [5, "text=Add reading", "A value to type in"]
    :::

5. For a measured check, add readings with **Add reading**. Then tap **Save check** at the bottom of the dialog.

6. Look at **Check before publishing**. It checks the draft by itself and says **No errors** or lists what to fix. Tap **Check again** after a change.

7. Tap **Publish**. Type a note in **What changed (required)** and tap **Publish** in the dialog.

!!! warning "Watch out"
    Publishing changes the checklist for every hub with that kart class from the next service. Tell hub managers before you publish. Tap **Discard draft** to throw a draft away.

!!! tip "Tip"
    **Copy from another class** starts a draft from another class's checklist.

## In a cell: what mechanics see

1. Mechanics tap each cell to cycle it **Unchecked**, **Good**, **Blocked**. Keep labels short so they fit the cell.

    :::shot fc-chk-mechanic
    caption: "Step 1: the Cadet checklist as a mechanic sees it on Servicing"
    persona: Alex Mechanic
    device: tablet
    url: /workshop/in-service
    state: Alex has started the service on Cadet 203
    steps:
      - Start the service on 203 and open Servicing
    callouts:
      - [1, "role=button[name='Unchecked']", "One cell per check"]
    :::

!!! abstract "Coming soon"
    The old 4-box front alignment entry will be removed where the check is answered by hand (planned around 23 October, still to be approved). Until then it stays on the Bambino, Cadet and Junior checklists. Alignment readings already use the **Setdown / setup** dialog under the front spindle alignment cell.

!!! abstract "Coming with your hub's switch-over"
    Checklist answers of old Workshop App services are moved later. Until then those services show "0 of N checks" in reports.
