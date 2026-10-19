# Stores: finding a part and correcting stock


**Stores** shows the parts and consumables your hub holds, how many are on the shelf and where they are. You can search for a part, correct the count after a stock check and ask for a part to be ordered.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Inventory** is now the **Parts** tab in **Stores**. **Consumables** is the second tab.
    - The parts list comes from the FKL Central master catalogue. Every part has an FKL part number (for example FKL-900001).
    - Every stock correction asks for a **Reason**.

## Find a part

1. Tap **Stores** in the tab strip.

    ![Stores with the Parts and Consumables tabs](../assets/img/mechanic/mech-stores-tab.png){ loading=lazy }

2. Type a name, FKL number or MPN in **Search name, FKL number or MPN**, for example "brake pad".

    ![Searching Stores for brake pad](../assets/img/mechanic/mech-stores-search.png){ loading=lazy }

3. Narrow the list with **All kart classes** (for example Cadet) or tick **Needs reordering only**.

    ![The kart class filter and Needs reordering only](../assets/img/mechanic/mech-stores-filter.png){ loading=lazy }

4. Read the row: **Location**, **Stock**, **Reorder point** and **Target**.

    ![A Stores row showing Location, Stock, Reorder point and Target](../assets/img/mechanic/mech-stores-row.png){ loading=lazy }

!!! warning "Watch out"
    If a part is not in Stores, it may be hidden at your hub or not in the catalogue yet. Ask your hub manager. They can show it again or request it from FKL Central.

## Correct the stock after a count

1. On the part's row, tap **Adjust**.

    ![The Adjust button on the brake pad row](../assets/img/mechanic/mech-stores-adjust.png){ loading=lazy }

2. In **Adjust stock**, type the real count in **Stock**.

    ![The Adjust stock dialog with the new count in Stock](../assets/img/mechanic/mech-stores-adjust-stock.png){ loading=lazy }

3. Choose the **Reason**, for example **Stock count**.

    ![The Reason list with Stock count, Used on repair, Damaged / scrapped, Transfer and Correction](../assets/img/mechanic/mech-stores-adjust-reason.png){ loading=lazy }

4. Add a **Comment** if it helps, then tap **Save**.

    ![Comment filled in and the Save button](../assets/img/mechanic/mech-stores-adjust-save.png){ loading=lazy }

!!! tip "Tip"
    Do not use **Adjust** for parts you fitted to a kart. Record those in the service, repair or campaign task. That way KART knows which kart they went on. See [Repairs and parts used](repairs-and-parts.md).

## Ask for a part to be ordered

1. On the part's row, tap **Add to order list**, type the quantity and confirm. It goes on the Order List as **Submitted** for your hub manager to approve.

    ![Add to order list with a quantity for brake pads](../assets/img/mechanic/mech-stores-order.png){ loading=lazy }

2. For a one-off need (for example a campaign), tap **One-time need** and give a **Reason**.

    ![The One-time need dialog with Reason](../assets/img/mechanic/mech-stores-onetime.png){ loading=lazy }

!!! abstract "Coming with your hub's switch-over"
    Until your hub's stock is moved from the Workshop App, the counts in Stores may be wrong. Check the shelf before ordering. Open orders from the Workshop App are re-entered in KART so they can be received there.

!!! abstract "Coming soon"
    The **Hub price** badge in Stores will be renamed **Hub description** when the supplier field change goes live.
