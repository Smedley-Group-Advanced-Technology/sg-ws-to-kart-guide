# Workshop Manager tour

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager
state: Demo Hub as seeded
:::

**Workshop Manager** is the last tab in the Workshop strip. Only hub managers and admins see it. Its own tabs wrap onto two lines on smaller screens.

!!! info "What changed from the Workshop App"
    - Workshop App **Dashboard**, **Workshop Planning**, **Parts Needed**, **Parts Ordered / Order list**, **Reports** and the hub side of **Parts Catalog** are all tabs here.
    - Each tab has its own address (for example `?tab=orders`), so you can bookmark it.

## The tabs, one by one

1. Tap **Workshop Manager** in the Workshop tab strip. It opens on **Service Metrics**: services done, time per service and the service report.

    :::shot hm-wm-metrics
    caption: Workshop Manager on the Service Metrics tab
    steps:
      - Tap Workshop Manager
    callouts:
      - [1, "text=Workshop Manager", "Service metrics, fleet campaigns and kart allocation"]
      - [2, "text=Service Metrics", "Services and times"]
    :::

2. Tap **Blockers**: what is stopping karts from being ready.

    :::shot hm-wm-blockers
    caption: The Blockers tab
    url: /workshop/manager?tab=blockers
    steps:
      - Tap Blockers
    callouts:
      - [1, "text=Blockers", "What holds karts up"]
    :::

3. Tap **Time Tracking**: service, pause and repair time per mechanic.

    :::shot hm-wm-time
    caption: The Time Tracking tab
    url: /workshop/manager?tab=time
    steps:
      - Tap Time Tracking
    callouts:
      - [1, "text=Time Tracking", "Time per person"]
    :::

4. Tap **Alignment health**: alignment readings across the fleet.

    :::shot hm-wm-alignment
    caption: The Alignment health tab
    url: /workshop/manager?tab=alignment
    steps:
      - Tap Alignment health
    callouts:
      - [1, "text=Alignment health", "Fleet alignment"]
    :::

5. Tap **Campaigns**: fleet campaigns. See [Campaigns](campaigns.md).

    :::shot hm-wm-campaigns
    caption: The Campaigns tab with Junior caliper seal upgrade
    url: /workshop/manager?tab=campaigns
    steps:
      - Tap Campaigns
    callouts:
      - [1, "text=Junior caliper seal upgrade", "Active campaign"]
    :::

6. Tap **Work targets** and **Readiness targets**. See [Schedules and targets](schedules-and-targets.md).

    :::shot hm-wm-targets
    caption: The Work targets tab
    url: /workshop/manager?tab=targets
    steps:
      - Tap Work targets
    callouts:
      - [1, "text=Work targets", "Targets per person"]
      - [2, "text=Readiness targets", "Targets per event"]
    :::

7. Tap **Kart Allocation**. See [Kart allocation](kart-allocation.md).

    :::shot hm-wm-allocation
    caption: The Kart Allocation tab
    url: /workshop/manager?tab=allocation
    steps:
      - Tap Kart Allocation
    callouts:
      - [1, "text=Kart Allocation", "Who does which kart"]
    :::

8. Tap **Damage Reports**: damage recorded on your karts.

    :::shot hm-wm-damage
    caption: The Damage Reports tab
    url: /workshop/manager?tab=damage-reports
    steps:
      - Tap Damage Reports
    callouts:
      - [1, "text=Damage Reports", "Damage on your karts"]
    :::

9. Tap **Parts needed**, **Order List** and **Goods In**. See [Stock and parts needed](stock-and-parts-needed.md) and [Orders](orders.md).

    :::shot hm-wm-parts
    caption: The Parts needed tab
    url: /workshop/manager?tab=parts-needed
    steps:
      - Tap Parts needed
    callouts:
      - [1, "text=Parts needed", "What to order"]
      - [2, "text=Order List", "Orders by stage"]
      - [3, "text=Goods In", "Receive parts"]
    :::

10. Tap **Hub catalogue**. See [Hub catalogue](hub-catalogue.md).

    :::shot hm-wm-catalogue
    caption: The Hub catalogue tab
    url: /workshop/manager?tab=hub-catalogue
    steps:
      - Tap Hub catalogue
    callouts:
      - [1, "text=Hub catalogue", "Your hub's parts"]
    :::

11. Tap **Reports**. See [Reports](reports.md).

    :::shot hm-wm-reports
    caption: The Reports tab
    url: /workshop/manager?tab=reports
    steps:
      - Tap Reports
    callouts:
      - [1, "text=Reports", "Excel, PDF or CSV"]
    :::

!!! tip "Tip"
    The **Hub Manager** dashboard (button on **Select your Hub**) has workshop tiles too: **Fleet readiness**, **Turns this week**, **Parts waiting**, **Stock**, **Fleet campaigns**, **Track use overrides**, **Weekly schedule** and **Work targets**. Tap a tile to jump to the screen.

!!! note "Remember"
    In the service report (from Service Metrics or the kart page history) hub managers can cancel a service or correct its times, always with a reason.
