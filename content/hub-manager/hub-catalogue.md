# Hub catalogue and part requests

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=hub-catalogue
state: "Demo Hub uses the FKL Master catalogue; pending part request Steering column bush from Demo Hub"
:::

The parts list for every hub comes from FKL Central's master catalogue. In **Hub catalogue** you tailor it for your hub: hide parts you never use, choose your preferred supplier, ask FKL Central for a missing part, or add a part that only your hub uses.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Parts Catalog** is now the FKL Central master catalogue. Your hub's view of it is **Workshop Manager > Hub catalogue**.
    - **Catalog Requests** are now **Request a part**. FKL Central reviews them.
    - **Add local part** is now **Add hub-local part**. A manufacturer part number (MPN) is required.

## Hide or show a part

1. Open **Workshop Manager > Hub catalogue**. Find the part.

    :::shot hm-cat-tab
    caption: The Hub catalogue editor
    steps:
      - Tap Hub catalogue
    callouts:
      - [1, "text=Hub catalogue", "Your hub's parts"]
    :::

2. Tap **Hide at this hub** for a part your hub never uses. It disappears from Stores. Tap **Show at this hub** to bring it back.

    :::shot hm-cat-hide
    caption: Hide at this hub on a part row
    steps:
      - Find a part your hub does not use
    callouts:
      - [1, "text=Hide at this hub", "Remove it from your Stores"]
    :::

## Choose the preferred supplier

1. Open **Hub details** on the part and choose the supplier your hub buys from.

    :::shot hm-cat-supplier
    caption: The supplier picker in Hub details
    steps:
      - Open Hub details on brake pads FKL-900001
    callouts:
      - [1, "text=Hub details", "Hub-specific settings"]
    :::

## Request a part from FKL Central

1. In the **Part requests** card, tap **Request a part**.

    :::shot hm-req-open
    caption: The Part requests card with Steering column bush waiting
    steps:
      - Scroll to Part requests
    callouts:
      - [1, "text=Request a part", "Ask FKL Central"]
      - [2, "text=Waiting for FKL Central", "Steering column bush"]
    :::

2. Type the **Part name**.

    :::shot hm-req-name
    caption: Part name filled in
    steps:
      - Tap Request a part
      - Type a part name
    callouts:
      - [1, "text=Part name", "What it is called"]
    :::

3. Add the **Manufacturer part number (MPN), if known** and the **Quantity needed**.

    :::shot hm-req-mpn
    caption: MPN and Quantity needed filled in
    steps:
      - Type an MPN and quantity 2
    callouts:
      - [1, "text=Manufacturer part number (MPN), if known", "Helps FKL Central match it"]
    :::

4. Add notes (supplier, kart class, what it is for) and tap **Send request**.

    :::shot hm-req-send
    caption: Notes and Send request
    steps:
      - Type notes and tap Send request
    callouts:
      - [1, "text=Send request", "Send it"]
    :::

:::clip hm-request-part-clip
caption: requesting a part from FKL Central in the Hub catalogue
duration: 40
steps:
  - Open Workshop Manager, Hub catalogue
  - Tap Request a part
  - Fill in Part name, MPN, Quantity needed and Notes
  - Tap Send request and show it as Waiting for FKL Central
captions:
  - "Open Hub catalogue."
  - "Tap Request a part."
  - "Say what the part is and how many."
  - "Send the request to FKL Central."
:::

!!! note "Remember"
    The request shows as **Waiting for FKL Central** until it is reviewed. Then it says **Linked to an existing part**, **Added as a new part**, **Added as a hub-local part** or **Rejected** with the reason. Tap **Withdraw** if you no longer need it.

## Add a hub-local part

1. Tap **Add hub-local part**, fill in the part with its MPN and save. It appears only in your hub's Stores.

    :::shot hm-cat-local
    caption: The Add hub-local part form with MPN
    steps:
      - Tap Add hub-local part
    callouts:
      - [1, "text=Add hub-local part", "Only for your hub"]
    :::

!!! warning "Watch out"
    Check Stores and ask FKL Central first: a hub-local part that duplicates a master part makes ordering and reports harder.

!!! abstract "Coming soon"
    The supplier fields are changing. **Add hub-local part** will save the supplier into the shared supplier list, the Stores badge **Hub price** becomes **Hub description**, and the separate hub override columns go away. This guide will be updated when it goes live.
