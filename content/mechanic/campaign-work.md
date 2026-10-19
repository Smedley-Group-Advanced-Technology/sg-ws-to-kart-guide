# Campaign work

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop/campaign-work
state: "Active integrated campaign Junior caliper seal upgrade on all Juniors; tasks for 301, 302 and 305 assigned to Alex; campaign part caliper seal kit FKL-900004, 1 per kart"
:::

A fleet campaign is the same job done on many karts, for example a part upgrade or an inspection. Your hub manager creates it. You do the work kart by kart on **Campaign work**.

!!! info "What changed from the Workshop App"
    - The Workshop App's **Campaign Work** task view is now the **Campaign work** tab.
    - Your own tasks come first under **Assigned to me**.
    - Karts with open tasks of an **integrated** campaign show a yellow **Campaign** tag and the status **Campaign Required**. The kart stays usable.
    - Parts you fit on a task are taken from your hub's stock.

## Watch it first

:::clip mech-campaign-clip
caption: doing the Junior caliper seal upgrade on Junior 301
duration: 65
steps:
  - Open Campaign work and show Assigned to me (3)
  - Open the 301 task
  - Tap Start work
  - Under Parts fitted tap Fit for the caliper seal kit
  - Tap Complete work
  - Show 301 gone from Assigned to me
captions:
  - "Open Campaign work."
  - "Your tasks are under Assigned to me."
  - "Open the kart's task and tap Start work."
  - "Fit the campaign parts."
  - "Tap Complete work."
  - "The task is done."
:::

## Do a campaign task

1. Tap **Campaign work** in the tab strip.

    :::shot mech-camp-tab
    caption: The Campaign work tab with Assigned to me and All open karts
    steps:
      - Tap Campaign work
    callouts:
      - [1, "text=Assigned to me", "Your tasks first"]
      - [2, "text=All open karts", "Everything still open"]
    :::

2. Find the kart under **Assigned to me**, for example **301**, and open its task.

    :::shot mech-camp-pick
    caption: Junior 301, 302 and 305 under Assigned to me for Junior caliper seal upgrade
    steps:
      - Look at Assigned to me (3)
    callouts:
      - [1, "text=301", "Tap to open the task"]
    :::

3. Read the work instructions, then tap **Start work**.

    :::shot mech-camp-start
    caption: The campaign task page for 301 with Start work
    url: "/workshop/campaigns/{campaign}/tasks/{task:301}"
    steps:
      - Open the 301 task
    callouts:
      - [1, "text=Start work", "Start the task"]
    :::

4. If the campaign asks for a reading, tap **Record measurement** and type it.

    :::shot mech-camp-measure
    caption: Record measurement on a campaign task
    url: "/workshop/campaigns/{campaign}/tasks/{task:301}"
    state: "Variant: campaign with a required measurement (skip if the demo campaign has none)"
    steps:
      - Tap Record measurement
    callouts:
      - [1, "text=Record measurement", "Type the reading"]
    :::

5. Under **Parts fitted**, tap **Fit** for each campaign part. Tap **Fit another part** if you used something else.

    :::shot mech-camp-fit
    caption: Parts fitted with the caliper seal kit and the Fit button
    url: "/workshop/campaigns/{campaign}/tasks/{task:301}"
    state: 301 task in progress
    steps:
      - Scroll to Parts fitted
      - Tap Fit for the caliper seal kit
    callouts:
      - [1, "text=Parts fitted", "Takes the part from stock"]
      - [2, "text=Fit another part", "Anything extra"]
    :::

6. Tap **Complete work**.

    :::shot mech-camp-complete
    caption: Complete work on the 301 campaign task
    url: "/workshop/campaigns/{campaign}/tasks/{task:301}"
    state: 301 task in progress, part fitted
    steps:
      - Scroll to Completion record
    callouts:
      - [1, "text=Complete work", "Finish the task"]
    :::

!!! warning "Watch out"
    If you did not fit the campaign parts, KART asks **Fit the campaign parts?** Choose **Fit and complete** if you did fit them, or **Complete without them** only if the kart really did not need them.

    :::shot mech-camp-fitprompt
    caption: The Fit the campaign parts? question with Fit and complete and Complete without them
    url: "/workshop/campaigns/{campaign}/tasks/{task:302}"
    state: 302 task in progress, no part fitted
    steps:
      - Tap Complete work without fitting the part
    callouts:
      - [1, "text=Fit and complete", "Parts were fitted"]
      - [2, "text=Complete without them", "No parts used"]
    :::

## When you cannot finish a task

1. Tap **Unable to complete** on the task and give the reason, for example a part that does not fit. Your hub manager decides what happens next.

    :::shot mech-camp-unable
    caption: Unable to complete with a reason on a campaign task
    url: "/workshop/campaigns/{campaign}/tasks/{task:305}"
    steps:
      - Open the 305 task
      - Tap Unable to complete
    callouts:
      - [1, "text=Unable to complete", "Give the reason"]
    :::

!!! note "Remember"
    Tasks only move while the campaign is **Active**. In an **integrated** campaign the task is also part of the service: **Complete service** waits until the campaign task is done. If a reading is out of tolerance, the kart may need recalibration before you can complete.

!!! tip "Tip"
    A kart that was already serviced and only has campaign work left shows **Complete campaign work** on Servicing.
