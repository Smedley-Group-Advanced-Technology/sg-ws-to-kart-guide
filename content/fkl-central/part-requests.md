# Part requests

:::defaults
persona: Taylor Central
device: desktop
url: /fkl-central?tab=bom
state: "Pending part request Steering column bush from Demo Hub"
:::

When a hub needs a part that is not in the catalogue, the hub manager sends a request. You review it: link an existing part, add a new master part, keep it as a hub-local part, or reject it with a reason the hub sees.

!!! info "What changed from the Workshop App"
    - **Catalog Requests** are now **Part requests** in **FKL Central > Parts catalogue**, with a badge showing how many wait.
    - New option: **Keep as a hub-local part**: only that hub sees it.

## Review a request

:::clip fc-review-clip
caption: reviewing the Steering column bush request from Demo Hub
duration: 30
steps:
  - Open FKL Central, Parts catalogue, Part requests
  - Tap Review on Steering column bush
  - Choose Add a new part, check name, MPN and category
  - Tap Add part and show Part added to the catalogue
captions:
  - "Open Part requests."
  - "Tap Review."
  - "Link a part, add a new one, keep it local or reject."
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

1. Open **Parts catalogue** and tap **Part requests**. Requests waiting are under **Waiting**.

2. Tap **Review** on the request.

:::shot fc-req-review
caption: "Steps 3 to 6 on one screen: the Review part request dialog with its four choices"
steps:
  - Tap Review on Steering column bush
callouts:
  - [3, "text=Link an existing part", "Already in the catalogue"]
  - [4, "text=Add a new part", "New master part"]
  - [5, "text=Keep as a hub-local part", "Only that hub sees it"]
  - [6, "text=Reject", "With a reason"]
:::

3. If the part already exists, choose **Link an existing part**, search for it and tap **Link part**.

4. If it is new, choose **Add a new part** (chosen at the start). Check the **Part name**, the **Manufacturer part number (MPN)** and the **Part category**, then tap **Add part**. An MPN is required for a new part.

5. If only that hub needs it, choose **Keep as a hub-local part**. You can add a supplier and unit cost. Tap **Keep local**.

6. To refuse, choose **Reject**, type the **Reason (shown to the hub)** and tap **Reject request**.

!!! tip "Tip"
    After adding a new part, complete the other details (supplier, cost, fits) in **Master parts**.

!!! note "Remember"
    **Reviewed (last 90 days)** lists what you have already decided. **Master review** is where you check hub-local parts and merge them into a matching master part.
