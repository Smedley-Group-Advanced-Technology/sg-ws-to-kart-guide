# Kart allocation

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=allocation
state: "Alex Mechanic and Casey Mechanic are Workshop staff at Demo Hub; 301, 302 and 305 assigned to Alex"
:::

**Kart Allocation** lets you give karts to mechanics. A mechanic sees their karts with a blue ring in the Service Queue and first under **Assigned to me** in Campaign work.

!!! info "What changed from the Workshop App"
    - Allocation is a tab in **Workshop Manager**. Pick a mechanic per kart from a list.
    - The list shows people with the **Workshop** permission and access to your hub (and admins). If somebody is missing, check their permissions.

## Allocate a kart

1. Open **Workshop Manager** and tap **Kart Allocation**.

    :::shot hm-alloc-tab
    caption: Kart Allocation with Workshop staff and the kart list
    steps:
      - Tap Kart Allocation
    callouts:
      - [1, "text=Workshop staff", "Mechanics and their kart counts"]
      - [2, "text=Kart allocation", "One row per kart"]
    :::

2. Tick **Needs service only** to see only karts that need a service.

    :::shot hm-alloc-filter
    caption: Needs service only selected
    steps:
      - Tap Needs service only
    callouts:
      - [1, "text=Needs service only", "Karts with work to do"]
    :::

3. On the kart's row, open the list (it says **Unassigned** when nobody has it), for example for **203**.

    :::shot hm-alloc-pick
    caption: The mechanic list open on the row for 203
    steps:
      - Open the list on the 203 row
    callouts:
      - [1, "text=Unassigned", "Nobody yet"]
    :::

4. Choose the mechanic, for example **Casey Mechanic**. It saves straight away.

    :::shot hm-alloc-done
    caption: 203 allocated to Casey Mechanic
    steps:
      - Choose Casey Mechanic
    callouts:
      - [1, "text=Casey Mechanic", "Allocated"]
    :::

!!! warning "Watch out"
    If KART says there are no mechanics yet, nobody at your hub has the **Workshop** permission. Ask a KART admin to give it, with access to your hub. See [Approvals](approvals.md).

!!! tip "Tip"
    If a mechanic paused a service and left, you can re-allocate the kart here so somebody else can carry on.
