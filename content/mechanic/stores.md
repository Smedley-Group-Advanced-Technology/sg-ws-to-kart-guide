# Stores: finding a part and correcting stock

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop/parts
state: "Demo Hub stock: front bumpers FKL-900001 (0 in stock, on order), brake pads FKL-900003, caliper seal kit FKL-900004, tie rods FKL-900005, chain FKL-900007, rear tyres FKL-900009, sprockets FKL-900015; some at or below the reorder point"
:::

**Stores** shows the parts and consumables your hub holds, how many are on the shelf and where they are. You can search for a part, correct the count after a stock check and ask for a part to be ordered.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Inventory** is now the **Parts** tab in **Stores**. **Consumables** is the second tab.
    - The parts list comes from the master catalogue kept by FKL Central (the league's central team). Every part has an FKL part number (for example FKL-900001). The note **Parts catalogue and BoM are managed in FKL Central** on the Stores page means the same: FKL Central keeps the parts list and the BoM (bill of materials: which parts make up each kart).
    - Every stock correction asks for a **Reason**.

## Find a part

1. Tap **Stores** in the tab strip.

    :::shot mech-stores-tab
    caption: Stores with the Parts and Consumables tabs
    steps:
      - Tap Stores
    callouts:
      - [1, "text=Stores", "Parts and consumables"]
      - [2, "text=Parts", "Kart parts"]
      - [3, "text=Consumables", "Shop consumables"]
    :::

2. Type a name, FKL number or MPN (the manufacturer's own part number) in **Search name, FKL number or MPN**, for example "brake pad".

    :::shot mech-stores-search
    caption: Searching Stores for brake pad
    steps:
      - Type brake pad in the search box
    callouts:
      - [1, "css=input[placeholder='Search name, FKL number or MPN']", "Search here"]
      - [2, "text=FKL-900003", "The part"]
    :::

3. Narrow the list with **All kart classes** (for example Cadet) or tick **Needs reordering only**.

    :::shot mech-stores-filter
    caption: The kart class filter and Needs reordering only
    steps:
      - Open All kart classes and choose Cadet
    callouts:
      - [1, "text=All kart classes", "Parts that fit this class"]
      - [2, "text=Needs reordering only", "Low and out of stock"]
    :::

4. Read the row: **Location** (where it is kept), **Stock** (how many are on the shelf), **Reorder point** (when stock falls to this number, it is time to order) and **Target** (how many the hub wants to hold).

    :::shot mech-stores-row
    caption: A Stores row showing Location, Stock, Reorder point and Target
    steps:
      - Look at the brake pad row
    callouts:
      - [1, "text=Location", "Where it is kept"]
      - [2, "text=Stock", "On the shelf"]
    :::

!!! warning "Watch out"
    If a part is not in Stores, it may be hidden at your hub or not in the catalogue yet. Ask your hub manager. They can show it again or request it from FKL Central.

## Correct the stock after a count

1. On the part's row, tap **Adjust**.

    :::shot mech-stores-adjust
    caption: The Adjust button on the brake pad row
    steps:
      - Find the brake pad row
    callouts:
      - [1, "text=Adjust", "Correct the count"]
    :::

2. In **Adjust stock**, type the real count in **Stock**.

    :::shot mech-stores-adjust-stock
    caption: The Adjust stock dialog with the new count in Stock
    steps:
      - Tap Adjust
      - Type 6 in Stock
    callouts:
      - [1, "text=Adjust stock", "The correction"]
      - [2, "label=Stock", "What is really on the shelf"]
    :::

3. Choose the **Reason**, for example **Stock count**.

    :::shot mech-stores-adjust-reason
    caption: The Reason list with Stock count, Used on repair, Damaged / scrapped, Transfer and Correction
    steps:
      - Open Reason and choose Stock count
    callouts:
      - [1, "text=Reason", "Always give a reason"]
    :::

4. Add a **Comment** if it helps, then tap **Save**.

    :::shot mech-stores-adjust-save
    caption: Comment filled in and the Save button
    steps:
      - Type "Weekly count" in Comment
      - Tap Save
    callouts:
      - [1, "text=Comment", "Optional note"]
      - [2, "text=Save", "Save the count"]
    :::

!!! tip "Tip"
    Do not use **Adjust** for parts you fitted to a kart. Record those in the service, repair or campaign task. That way KART knows which kart they went on. See [Repairs and parts used](repairs-and-parts.md).

## Ask for a part to be ordered

1. On the part's row, under **Actions**, tap the box icon with a plus (**Add to order list**). Check the **Quantity** and tap **Add**. It goes on the Order List (the hub's list of parts to order) as **Submitted** for your hub manager to approve.

    :::shot mech-stores-order
    caption: Add to order list with a quantity for brake pads
    steps:
      - Tap Add to order list on the brake pad row
      - Type 4 in Quantity
    callouts:
      - [1, "text=Add to order list", "Ask for more"]
      - [2, "label=Quantity", "How many"]
    :::

2. For a one-off need (for example a campaign), tap the clipboard icon with a plus (**One-time need**) instead, and give a **Reason**.

    :::shot mech-stores-onetime
    caption: The One-time need dialog with Reason
    steps:
      - Tap One-time need on a part row
    callouts:
      - [1, "text=One-time need", "A one-off purchase"]
      - [2, "label=Reason", "Required"]
    :::

!!! abstract "Coming with your hub's switch-over"
    Until your hub's stock is moved from the Workshop App, the counts in Stores may be wrong. Check the shelf before ordering. Open orders from the Workshop App are re-entered in KART so they can be received there.

!!! abstract "Coming soon"
    A small change to how supplier details are shown: the **Hub price** label in Stores will be renamed **Hub description**. Nothing changes in how you work.
