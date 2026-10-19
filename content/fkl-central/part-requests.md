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
duration: 45
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

1. Open **Parts catalogue** and tap **Part requests**. Requests waiting are under **Waiting**.

    :::shot fc-req-list
    caption: Part requests with Steering column bush waiting
    steps:
      - Tap Part requests
    callouts:
      - [1, "text=Part requests", "With a badge"]
      - [2, "text=Steering column bush", "From Demo Hub"]
    :::

2. Tap **Review** on the request.

    :::shot fc-req-review
    caption: The Review part request dialog
    steps:
      - Tap Review on Steering column bush
    callouts:
      - [1, "text=Review part request", "Four choices"]
    :::

3. If the part already exists, choose **Link an existing part**, search for it and tap **Link part**.

    :::shot fc-req-link
    caption: Link an existing part with the part search
    steps:
      - Choose Link an existing part
    callouts:
      - [1, "text=Link an existing part", "Already in the catalogue"]
      - [2, "text=Link part", "Link it"]
    :::

4. If it is new, choose **Add a new part**, check the name and MPN and tap **Add part**.

    :::shot fc-req-add
    caption: Add a new part with name, MPN and category
    steps:
      - Choose Add a new part
    callouts:
      - [1, "text=Add a new part", "New master part"]
      - [2, "text=An MPN is required for a new part.", "MPN needed"]
    :::

5. If only that hub needs it, choose **Keep as a hub-local part** and tap **Keep local**.

    :::shot fc-req-local
    caption: Keep as a hub-local part
    steps:
      - Choose Keep as a hub-local part
    callouts:
      - [1, "text=Keep local", "Only that hub sees it"]
    :::

6. To refuse, choose **Reject**, type the **Reason (shown to the hub)** and tap **Reject request**.

    :::shot fc-req-reject
    caption: Reject with Reason (shown to the hub)
    steps:
      - Choose Reject
    callouts:
      - [1, "text=Reason (shown to the hub)", "The hub reads this"]
      - [2, "text=Reject request", "Reject"]
    :::

!!! tip "Tip"
    After adding a new part, complete the other details (supplier, cost, fits) in **Master parts**.

!!! note "Remember"
    **Reviewed (last 90 days)** lists what you have already decided. **Master review** is where you check hub-local parts and merge them into a matching master part.
