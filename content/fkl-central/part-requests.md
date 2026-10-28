# Part requests

:::defaults
persona: Taylor Central
device: desktop
url: /fkl-central?tab=bom
state: "Pending part request Steering column bush from Demo Hub"
:::

When a hub needs a part that is not in the catalogue, the hub manager sends a request. You get a push notification (FKL Central and purchasing users, if notifications are switched on). You review it: link an existing part, add a new master part, or reject it with a reason the hub sees. Every part is on the FKL master list: hubs cannot add parts of their own.

!!! info "What changed from the Workshop App"
    - **Catalog Requests** are now **Part requests** in **FKL Central > Parts catalogue**, with a badge showing how many wait.
    - A request carries the manufacturer, MPN, supplier, supplier part number, a link, the compatible kart types and generations, and an optional related part (**Same as** or **Alternative to**). It has no quantity.
    - **Keep as a hub-local part** is gone: link the part, add it to the master list, or reject the request.

## Review a request

:::clip fc-review-clip
caption: reviewing the Steering column bush request from Demo Hub
duration: 30
steps:
  - Open FKL Central, Parts catalogue, Part requests
  - Tap Review on Steering column bush
  - Choose Add a new part, check name, MPN, part fit and supplier
  - Tap Add part and show Part added to the catalogue
captions:
  - "Open Part requests."
  - "Tap Review."
  - "Link a part, add a new one or reject."
  - "Save. The hub sees the result."
:::

:::shot fc-req-list
caption: "Steps 1 and 2 on one screen: Part requests with Steering column bush waiting and Review"
steps:
  - Tap Parts catalogue, then Part requests
callouts:
  - [1, "text=Part requests", "With a badge"]
  - [2, "text=Review", "Open the request"]
:::

1. Open **Parts catalogue** and tap **Part requests**. Requests waiting are under **Waiting**. Each row shows what the hub sent: manufacturer, supplier, which karts it fits, a related part and a **Product link**.

2. Tap **Review** on the request.

:::shot fc-req-review
caption: "Steps 3 to 5 on one screen: the Review part request dialog with its three choices"
steps:
  - Tap Review on Steering column bush
callouts:
  - [3, "text=Link an existing part", "Already in the catalogue"]
  - [4, "text=Add a new part", "New master part, prefilled"]
  - [5, "text=Reject", "With a reason"]
:::

3. If the part already exists, choose **Link an existing part**, search for it and tap **Link part**. When the hub marked it **Same as** an existing part, that part is already chosen.

4. If it is new, choose **Add a new part** (chosen at the start). Check the **Part name**, the **Manufacturer part number (MPN)** and the **Part category**. **Part fit (from the request)** is ticked with the kart types and generations the hub gave; change them if needed. The **Supplier** and **Supplier part number** come from the request: add a **Unit cost** if you know it. Tap **Add part**. The supplier goes into the new part's supplier list and becomes the requesting hub's preferred supplier.

5. To refuse, choose **Reject**, type the **Reason (shown to the hub)** and tap **Reject request**.

!!! warning "Watch out"
    If the requested MPN already belongs to a hub-local part of another hub, adopt that part into the master list in **Master review** first, then link it here.

!!! tip "Tip"
    After adding a new part, complete the other details (cost, assembly) in **Master parts**.

!!! note "Remember"
    **Reviewed (last 90 days)** lists what you have already decided. **Master review** is where you check hub-local parts and merge them into a matching master part.
