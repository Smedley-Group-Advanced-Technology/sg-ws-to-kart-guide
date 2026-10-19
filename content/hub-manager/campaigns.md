# Campaigns

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=campaigns
state: "Active integrated campaign Junior caliper seal upgrade on Juniors (301, 302, 305 assigned to Alex); caliper seal kit FKL-900006"
:::

A fleet campaign is one job done on many karts: a part upgrade, a software update, an inspection. You create it, choose the karts, and mechanics work through the tasks on **Campaign work**.

!!! info "What changed from the Workshop App"
    - The Workshop App's campaign list and forms are now in **Workshop Manager > Campaigns**.
    - Two types: **Integrated** (added to the service checklist; karts with open tasks show a Campaign tag and karts already serviced rejoin the Service Queue) and **Standalone** (tracked in the campaign only).
    - Finished Workshop App campaigns already show in campaign history.

## Create a campaign

:::clip hm-campaign-clip
caption: creating an integrated campaign for Juniors and adding karts
duration: 75
steps:
  - Open Workshop Manager, Campaigns, tap New campaign
  - Type a campaign name, choose Integrated and a work type
  - Choose Fleet class Junior, Lead mechanic Alex Mechanic, dates
  - Choose Selected karts only and tick three karts
  - Add the caliper seal kit as a required part, 1 per kart
  - Tap Create campaign and show the detail page
captions:
  - "Open Campaigns and tap New campaign."
  - "Name it and choose Integrated or Standalone."
  - "Choose the class, the lead mechanic and the dates."
  - "Pick all karts or only some."
  - "Add the parts each kart needs."
  - "Tap Create campaign."
:::

1. Open **Workshop Manager > Campaigns**. You see **Fleet campaigns**. Tap **New campaign**.

    :::shot hm-camp-list
    caption: Fleet campaigns with the New campaign button
    steps:
      - Tap Campaigns
    callouts:
      - [1, "text=Fleet campaigns", "All campaigns"]
      - [2, "text=New campaign", "Start a new one"]
    :::

2. Type the **Campaign name**, for example "Junior caliper seal upgrade".

    :::shot hm-camp-name
    caption: The New fleet campaign form with Campaign name filled in
    url: /workshop/campaigns/new
    steps:
      - Tap New campaign
      - Type a campaign name
    callouts:
      - [1, "text=New fleet campaign", "The form"]
      - [2, "label=Campaign name", "A clear name"]
    :::

3. Choose the **Campaign type**: **Integrated** or **Standalone**.

    :::shot hm-camp-type
    caption: Campaign type with Integrated and Standalone
    url: /workshop/campaigns/new
    steps:
      - Choose Integrated
    callouts:
      - [1, "text=Integrated", "Part of the service"]
      - [2, "text=Standalone", "Tracked on its own"]
    :::

4. Choose the **Work type**, for example Part Upgrade, and type a **Description**.

    :::shot hm-camp-worktype
    caption: Work type Part Upgrade and a description
    url: /workshop/campaigns/new
    steps:
      - Choose Part Upgrade in Work type
      - Type a description
    callouts:
      - [1, "text=Work type", "What kind of job"]
    :::

5. Choose the **Fleet class** and the **Lead mechanic**, then the **Start date** and **Due date**.

    :::shot hm-camp-class
    caption: Fleet class Junior, Lead mechanic Alex Mechanic and the dates
    url: /workshop/campaigns/new
    steps:
      - Choose Junior, Alex Mechanic and the dates
    callouts:
      - [1, "text=Fleet class", "Which class"]
      - [2, "text=Lead mechanic", "Who leads it"]
    :::

6. Under **Karts**, choose all karts of the class or **Selected karts only** and tick them.

    :::shot hm-camp-karts
    caption: Karts with Selected karts only and three Juniors ticked
    url: /workshop/campaigns/new
    steps:
      - Choose Selected karts only and tick 301, 302 and 305
    callouts:
      - [1, "text=Selected karts only", "Pick the karts"]
    :::

7. Add parts under **Required parts per kart (optional)**, for example the caliper seal kit, 1 per kart.

    :::shot hm-camp-parts
    caption: The caliper seal kit added as a required part, 1 per kart
    url: /workshop/campaigns/new
    steps:
      - Add caliper seal kit FKL-900006 with quantity 1
    callouts:
      - [1, "text=Required parts per kart (optional)", "Parts each kart needs"]
    :::

8. Write the **Work instructions** for the mechanics.

    :::shot hm-camp-instructions
    caption: Work instructions filled in
    url: /workshop/campaigns/new
    steps:
      - Type the work instructions
    callouts:
      - [1, "text=Work instructions", "Step by step for the mechanic"]
    :::

9. Set the **Status** to Active when the work may start, and tap **Create campaign**.

    :::shot hm-camp-create
    caption: Status and the Create campaign button
    url: /workshop/campaigns/new
    steps:
      - Choose Active in Status
    callouts:
      - [1, "text=Create campaign", "Save it"]
    :::

!!! note "Remember"
    Campaign parts count in **Parts needed**, so they get ordered with everything else.

## Manage the karts in a campaign

1. Open the campaign from **Fleet campaigns**. Scroll to **Karts in this campaign**.

    :::shot hm-camp-detail
    caption: The campaign detail page with Karts in this campaign
    url: "/workshop/campaigns/{campaign}"
    steps:
      - Open Junior caliper seal upgrade
    callouts:
      - [1, "text=Karts in this campaign", "One row per kart"]
      - [2, "text=Add karts", "Add more"]
    :::

2. To add karts, tap **Add karts** and tick them.

    :::shot hm-camp-add
    caption: Adding karts to the campaign
    url: "/workshop/campaigns/{campaign}"
    steps:
      - Tap Add karts and tick 306
    callouts:
      - [1, "text=Add karts", "Add more karts"]
    :::

3. To leave a kart out, tap **Exclude kart** on its row and give a reason.

    :::shot hm-camp-exclude
    caption: Exclude kart on a campaign row
    url: "/workshop/campaigns/{campaign}"
    steps:
      - Tap Exclude kart on the 308 row
    callouts:
      - [1, "text=Exclude kart", "Not needed on this kart"]
    :::

4. To start a task again, tap **Reset to not started** and give a reason.

    :::shot hm-camp-reset
    caption: Reset to not started on a campaign row
    url: "/workshop/campaigns/{campaign}"
    steps:
      - Open the actions on the 305 row
    callouts:
      - [1, "text=Reset to not started", "Do it again"]
    :::

## Pause or close a campaign

1. On the detail page, change **Campaign status** to Paused, Completed or Cancelled.

    :::shot hm-camp-status
    caption: Campaign status with Draft, Active, Paused, Completed and Cancelled
    url: "/workshop/campaigns/{campaign}"
    steps:
      - Open Campaign status
    callouts:
      - [1, "text=Campaign status", "Change the status"]
    :::

!!! warning "Watch out"
    Tasks only move while the campaign is **Active**. Pausing a campaign stops mechanics from starting or completing its tasks. Close it as **Completed** only when every kart is done or excluded.

!!! tip "Tip"
    Use **Edit campaign** to change dates, instructions or the lead mechanic.
