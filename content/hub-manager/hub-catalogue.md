# Hub catalogue and part requests

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=hub-catalogue
state: "Demo Hub uses the FKL Master catalogue; pending part request Steering column bush from Demo Hub"
:::

The parts list for every hub comes from FKL Central's master catalogue. In **Hub catalogue** you tailor it for your hub: hide parts you never use, choose your preferred supplier and a backup supplier, and ask FKL Central for a missing part. Every part is on the FKL master list: **Request a part** is the only way to get a new one.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Parts Catalog** is now the FKL Central master catalogue. Your hub's view of it is **Workshop Manager > Hub catalogue**.
    - **Catalog Requests** are now **Request a part**. FKL Central reviews them.
    - **Add local part** is gone. Hubs no longer add parts without approval: use **Request a part** and FKL Central adds it to the master list. Hub-local parts added earlier stay until FKL Central adopts them.

## Hide or show a part

:::shot hm-cat-hide
caption: "Steps 1 and 2 on one screen: the hub's parts list and the In this hub's list switches"
steps:
  - Tap Hub catalogue
  - Scroll down to the Hub catalogue list
callouts:
  - [1, "text=Hub catalogue: Demo Hub", "Your hub's parts"]
  - [2, "text=In this hub's list", "Switch off to hide it"]
:::

1. Open **Workshop Manager > Hub catalogue**. Scroll down past **Catalogues in use** and **Part requests** to the list called **Hub catalogue** with your hub's name. Find the part.

2. For a part your hub never uses, turn off its switch in the **In this hub's list** column. KART asks if you want to hide it: add a reason if you like and tap **Hide at this hub**. It disappears from Stores (a part you still hold stock of stays until the stock is used). Turn the switch back on to show it again.

## Choose the preferred supplier

:::shot hm-cat-supplier
caption: The preferred and backup supplier pickers in Hub details
steps:
  - Open Hub details on brake pads FKL-900003
callouts:
  - [1, "text=Hub details", "Preferred and backup supplier"]
:::

1. Tap **Hub details** on the part. Choose the supplier your hub buys from in **Preferred supplier** and tap **Save preferred supplier**.

2. Below it, under **Backup supplier at** your hub, pick the supplier you order from when the preferred one cannot supply and tap **Save backup supplier**. The preferred supplier is not offered: if you later make the backup your preferred supplier, or the supplier is deactivated, the backup is cleared. The same two pickers are in **Stores**: tap the lorry (**Suppliers**) on the part.

!!! tip "Tip"
    Purchasing users with access to your hub can set the preferred and backup suppliers too, from **Stores**. When a line is marked ordered, the **Order List** shows both so you can pick one with **Use**.

## Request a part from FKL Central

:::shot hm-req-open
caption: "Step 1: the Part requests card with Request a part and a request waiting"
steps:
  - Scroll to Part requests
callouts:
  - [1, "text=Request a part", "Ask FKL Central"]
:::

1. In the **Part requests** card, tap **Request a part**.

2. Type the **Part name**, the **Manufacturer** and the **Manufacturer part number (MPN)**. All three are required.

    :::shot hm-req-form
    caption: "Steps 2 to 5 on one screen: the Request a part form filled in"
    steps:
      - Tap Request a part
      - Type a part name, manufacturer, MPN, supplier, supplier part number and link, tick Cadet and Cadet Gen3.1
    callouts:
      - [2, "text=Manufacturer part number (MPN)", "Required, with name and manufacturer"]
      - [3, "text=Link to the part (optional)", "Supplier details and a web link"]
      - [4, "text=Compatible kart types", "Which karts it fits"]
      - [5, "text=Send request", "Send it"]
    :::

3. If you know where to buy it, add the **Supplier (optional)**, the **Supplier part number (optional)** and a **Link to the part (optional)**. The link must start with http:// or https://.

4. Under **Compatible kart types**, tick **Bambino**, **Cadet** or **Junior**. Tick generations too if you know them; leave them empty if you are not sure. If the part is the same as, or an alternative to, a part already in the catalogue, choose **Same as** or **Alternative to** under **Related to an existing part (optional)** and pick that part.

5. Add notes (what it is for) and tap **Send request**. There is no quantity: order the part through the Order List once it is in your hub's list.

:::clip hm-request-part-clip
caption: requesting a part from FKL Central in the Hub catalogue
duration: 40
steps:
  - Open Workshop Manager, Hub catalogue
  - Tap Request a part
  - Fill in Part name, Manufacturer, MPN, Supplier and Compatible kart types
  - Tap Send request and show it as Waiting for FKL Central
captions:
  - "Open Hub catalogue."
  - "Tap Request a part."
  - "Say what the part is, who makes it and which karts it fits."
  - "Send the request to FKL Central."
:::

!!! note "Remember"
    FKL Central and purchasing users get a push notification when you send a request (if they have notifications switched on). It shows as **Waiting for FKL Central** until it is reviewed. Then it says **Linked to an existing part**, **Added as a new part** or **Rejected** with the reason. Tap **Withdraw** if you no longer need it.
