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
duration: 70
steps:
  - Open FKL Central, Service checklists
  - Tap New draft on the Cadet row
  - Tap Add check in a section, type the Label, choose By hand, tap Save check
  - Tap Check before publishing
  - Tap Publish, type What changed and confirm
captions:
  - "Open Service checklists."
  - "Make a new draft for the class."
  - "Add or change checks."
  - "Check it before publishing."
  - "Publish with a note of what changed."
:::

1. Open **FKL Central > Service checklists**. Each **Kart class** has a row with its **Published** version.

    :::shot fc-chk-list
    caption: Service checklists with a row per kart class and the Shared checklist
    steps:
      - Tap Service checklists
    callouts:
      - [1, "text=Kart class", "One row per class"]
      - [2, "text=Published", "The version in use"]
    :::

2. Tap **New draft** on the class, for example Cadet. If a draft exists, tap **Continue editing**.

    :::shot fc-chk-draft
    caption: New draft on the Cadet row
    steps:
      - Find the Cadet row
    callouts:
      - [1, "text=New draft", "Start a change"]
    :::

3. In the editor, tap **Add check** in the right section (or **Add section**).

    :::shot fc-chk-add
    caption: The checklist editor with Add section and Add check
    state: Cadet draft open
    steps:
      - Tap New draft
    callouts:
      - [1, "text=Add section", "New section"]
      - [2, "text=Add check", "New check"]
    :::

4. Type the **Label**. Choose the **Answer**: **By hand (the mechanic ticks it)** or from readings. Tick **Optional** if it may be skipped.

    :::shot fc-chk-check
    caption: The check dialog with Label, Optional and Answer
    state: Cadet draft open
    steps:
      - Tap Add check
      - Type "Rear sprocket guard secure" in Label
    callouts:
      - [1, "text=Label", "What the mechanic checks"]
      - [2, "text=By hand (the mechanic ticks it)", "Ticked by hand"]
    :::

5. For a measured check, add readings with **Add reading**. Then tap **Save check**.

    :::shot fc-chk-save
    caption: Readings with Add reading and Save check
    state: Cadet draft open
    steps:
      - Look at Readings
    callouts:
      - [1, "text=Add reading", "A value to type in"]
      - [2, "text=Save check", "Save"]
    :::

6. Tap **Check before publishing** and fix anything it reports.

    :::shot fc-chk-verify
    caption: Check before publishing in the editor
    state: Cadet draft open with the new check
    steps:
      - Tap Check before publishing
    callouts:
      - [1, "text=Check before publishing", "Catch mistakes first"]
    :::

7. Tap **Publish**. Type a note in **What changed (required)** and confirm.

    :::shot fc-chk-publish
    caption: Publish with What changed (required)
    state: Cadet draft open with the new check
    steps:
      - Tap Publish
      - Type "Added rear sprocket guard check"
    callouts:
      - [1, "text=What changed (required)", "Tell the hubs what is new"]
    :::

!!! warning "Watch out"
    Publishing changes the checklist for every hub with that kart class from the next service. Tell hub managers before you publish. Tap **Discard draft** to throw a draft away.

!!! tip "Tip"
    **Copy from another class** starts a draft from another class's checklist.

## In a cell: what mechanics see

1. Mechanics tap each cell to cycle it **Unchecked**, **Good**, **Blocked**. Keep labels short so they fit the cell.

    :::shot fc-chk-mechanic
    caption: The Cadet checklist as a mechanic sees it on Servicing
    persona: Alex Mechanic
    device: tablet
    url: /workshop/in-service
    state: Alex has 203 in service
    steps:
      - Open Servicing for 203
    callouts:
      - [1, "css=[role=grid]", "One cell per check"]
    :::

!!! abstract "Coming soon"
    The old 4-box front alignment entry will be removed where the check is answered by hand (planned around 23 October, still to be approved). Until then it stays on the Bambino, Cadet and Junior checklists. Alignment readings already use the **Setdown / setup** dialog under the front spindle alignment cell.

!!! abstract "Coming with your hub's switch-over"
    Checklist answers of old Workshop App services are moved later. Until then those services show "0 of N checks" in reports.
