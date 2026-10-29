# Kart allocation

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=allocation
state: "Alex Mechanic and Casey Mechanic are Workshop staff at Demo Hub; 203 and 204 allocated to Alex; 303 needs a service and is unassigned"
:::

**Kart Allocation** lets you give karts to mechanics. A mechanic sees their karts with a blue ring in the Service Queue and first under **Assigned to me** in Campaign work.

!!! info "What changed from the Workshop App"
    - Allocation is a tab in **Workshop Manager**. Pick a mechanic per kart from a list.
    - The list shows the Workshop staff KART lets you see. A KART admin sees everybody with the **Workshop** permission at the hub.

## Allocate a kart

:::shot hm-alloc
caption: "Steps 1 to 4 on one screen: Kart Allocation, Needs service only and the mechanic list open on 303"
steps:
  - Tap Kart Allocation
  - Tap Needs service only
  - Open the list on the 303 row
callouts:
  - [1, "text=Kart Allocation", "The tab"]
  - [2, "text=Needs service only", "Karts with work to do"]
  - [3, "text=Unassigned", "Open the list"]
  - [4, "role=option[name=\"Morgan Manager\"]", "Choose the mechanic"]
:::

1. Open **Workshop Manager** and tap **Kart Allocation**.

2. Tap **Needs service only** to see only karts that need a service. **All karts** shows them all again.

3. On the kart's row, open the list (it says **Unassigned** when nobody has it), for example for **303**.

4. Choose the mechanic. It saves straight away.

!!! warning "Watch out"
    If a mechanic is missing from the list, or a kart's list is blank, the kart may belong to somebody KART does not show you. Ask a KART admin to allocate it.

!!! warning "Watch out"
    If KART says there are no mechanics yet, nobody at your hub has the **Workshop** permission. Ask a KART admin to give it, with access to your hub. See [Approvals](approvals.md).

!!! tip "Tip"
    If a mechanic paused a service and left, any mechanic of the hub can **Take over** the service with a reason. You can also re-allocate the kart here first; the mechanic you allocate it to still taps **Take over** and gives a reason. You see who took it over and why on the kart page, the **In progress** card and the service report. See [Pause and resume](../mechanic/pause-and-resume.md).
