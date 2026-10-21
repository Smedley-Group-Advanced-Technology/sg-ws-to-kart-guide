# Campaigns

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=campaigns
state: "Active integrated campaign Junior caliper seal upgrade on Juniors (301, 302, 305 assigned to Alex); caliper seal kit FKL-900004"
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
  - Choose Fleet class Junior, Lead mechanic Morgan Manager (the only name a hub manager who is not an admin can see), dates
  - Choose Selected karts only and tick three karts
  - Add the axle bearing as a required part, 1 per kart
  - Tap Create campaign and show the detail page
captions:
  - "Open Campaigns and tap New campaign."
  - "Name it and choose Integrated or Standalone."
  - "Choose the class, the lead mechanic and the dates."
  - "Pick all karts or only some."
  - "Add the parts each kart needs."
  - "Tap Create campaign."
:::

:::shot hm-camp-list
caption: "Step 1: Fleet campaigns with the New campaign button"
steps:
  - Tap Campaigns
callouts:
  - [1, "text=New campaign", "Start a new one"]
:::

1. Open **Workshop Manager > Campaigns**. You see **Fleet campaigns**. Tap **New campaign**.

2. Type the **Campaign name**, for example "Junior axle bearing upgrade".

    :::shot hm-camp-form
    caption: "Steps 2 to 9 on one page: the New fleet campaign form filled in"
    url: /workshop/campaigns/new
    steps:
      - Tap New campaign
      - Fill in the name, Integrated, Part Upgrade, Junior, Morgan Manager, the dates, three karts, the axle bearing and the instructions
    callouts:
      - [2, "label=Campaign name", "A clear name"]
      - [3, "text=Integrated", "Integrated or Standalone"]
      - [4, "text=Work type", "What kind of job"]
      - [5, "text=Fleet class", "Class, lead mechanic, dates"]
      - [6, "text=Selected karts only", "Pick the karts"]
      - [7, "text=Required parts per kart (optional)", "Parts each kart needs"]
      - [8, "text=Work instructions", "Step by step for the mechanic"]
      - [9, "text=Create campaign", "Status, then save"]
    :::

3. Choose the **Campaign type**: **Integrated** or **Standalone**.

4. Choose the **Work type**, for example Part Upgrade, and type a **Description**.

5. Choose the **Fleet class** and the **Lead mechanic**, then the **Start date** and **Due date**.

6. Under **Karts**, choose all karts of the class or **Selected karts only** and tap the karts you want.

7. Under **Required parts per kart (optional)**, tap **Add part** and choose the part, for example the axle bearing, then set how many each kart needs.

8. Write the **Work instructions** for the mechanics.

9. Set the **Status** to Active when the work may start, and tap **Create campaign**.

!!! note "Remember"
    Campaign parts count in **Parts needed**, so they get ordered with everything else.

## Manage the karts in a campaign

:::shot hm-camp-manage
caption: "Steps 1 to 4 on one screen: Karts in this campaign with Add karts and the actions menu on a row"
url: "/workshop/campaigns/{campaign}"
steps:
  - Open Junior caliper seal upgrade
  - Open the actions menu on the 305 row
callouts:
  - [1, "text=Karts in this campaign", "One row per kart"]
  - [2, "text=Add karts", "Add more"]
  - [3, "text=Exclude kart...", "Not needed on this kart"]
  - [4, "text=Reset to not started...", "Do it again"]
:::

1. Open the campaign from **Fleet campaigns**. Scroll to **Karts in this campaign**.

2. To add karts, tap **Add karts** and tick them.

3. To leave a kart out, open the actions menu (**...**) on its row, tap **Exclude kart...** and give a reason.

4. To start a task again, open the same menu, tap **Reset to not started...** and give a reason. This shows only for a task that was started, completed or excluded.

## Pause or close a campaign

:::shot hm-camp-status
caption: Campaign status with Draft, Active, Paused, Completed and Cancelled
url: "/workshop/campaigns/{campaign}"
steps:
  - Open Campaign status
callouts:
  - [1, "label=Campaign status", "Change the status"]
:::

1. On the detail page, change **Campaign status** to Paused, Completed or Cancelled.

!!! warning "Watch out"
    Tasks only move while the campaign is **Active**. Pausing a campaign stops mechanics from starting or completing its tasks. Close it as **Completed** only when every kart is done or excluded.

!!! tip "Tip"
    Use **Edit campaign** to change dates, instructions or the lead mechanic.
