# Where did it go?

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: Demo Hub as seeded
:::

Every Workshop App screen and where to find it in KART, grouped by the Workshop App menu. "Workshop" in the **Who** column means the Workshop permission (or Hub Manager) plus access to the hub.

!!! info "What changed from the Workshop App"
    - KART has no side menu. Start on **Select your Hub**, open **Workshop**, then use the tabs: **Overview**, **Stores**, **Service Queue**, **Servicing**, **Campaign work**, **Schedule** and **Workshop Manager** (hub managers).
    - "Turn Required" is now **Requires service**. "Turn" is now "service".

:::shot gen-where-tabs
caption: The Workshop tabs that replace the Workshop App menu
steps:
  - Open the Workshop for Demo Hub
callouts:
  - [1, "text=Overview", "Readiness and Dashboard"]
  - [2, "text=Service Queue", "Repair Workflow and turns"]
:::

## Getting in

| In the Workshop App | In KART (how to get there) | Who can use it | Guide page |
|---|---|---|---|
| Sign in | KART sign-in page; join links sign you up for a hub; new sign-ups wait on **Waiting for approval** | Anyone | [Signing in and access](start/sign-in-and-access.md) |
| Switch Hub | **Select your Hub**. You can have several hubs | Signed in | [Finding your way](start/finding-your-way.md) |

## Workshop menu

| In the Workshop App | In KART (how to get there) | Who can use it | Guide page |
|---|---|---|---|
| Readiness / Fleet | Workshop > **Overview**, **Readiness board** | Workshop | [The fleet board](mechanic/fleet-board.md) |
| Kart page, kart QR | Overview > **Open kart** (type the number or **Scan QR code**); print a label on the kart page **QR code** tab | Workshop | [The kart page](mechanic/kart-page.md) |
| Start Turn, turn checklist | **Start service** (Service Queue, Overview or kart page), then the checklist on **Servicing** | Workshop | [Doing a service](mechanic/service-turn.md) |
| Turn Details | Service report (Workshop Manager > **Service Metrics**, or kart page history). Hub managers can cancel or correct times with a reason | Workshop; corrections hub manager | [Workshop Manager tour](hub-manager/workshop-manager.md) |
| Pause / resume kart | **Pause** with a **Pause reason**; resume from **Paused services** or **Resume service** | Service owner or hub manager | [Pause and resume](mechanic/pause-and-resume.md) |
| Mark used | Race to Chassis marks karts used on the event day; hub managers use **Requires service** on the Overview tile; **Undo** / **Undo mark used** | Workshop; by hand hub manager | [Marking karts used](mechanic/mark-used.md) |
| Repair Workflow | Workshop > **Service Queue**, lanes **Requires reliability actions** and **Requires part**; **Log remedy / complete repair** | Workshop; priority order hub manager | [Repairs and parts used](mechanic/repairs-and-parts.md) |
| Waiting on Parts | Lane **Requires part**; cards show **On order** once ordered | Workshop | [Repairs and parts used](mechanic/repairs-and-parts.md) |
| Create New Kart Report | **Report a kart problem** (Overview or kart page): Incident, Driver feedback, Reliability, Damage | Workshop; Reliability and Damage need Reliability | [Report a problem](mechanic/report-a-problem.md) |
| Incident edit, findings, remedy | Findings in the report dialog; **Log findings** on the kart page; remedy on **Log remedy / complete repair** | Workshop; corrections admin or hub manager | [Report a problem](mechanic/report-a-problem.md) |
| Power / Performance Inspection | **Power / Performance inspection** inside a **Driver feedback** report | Workshop | [Report a problem](mechanic/report-a-problem.md) |
| Resolve no damage | **Resolved: no fault found** | Workshop | [Repairs and parts used](mechanic/repairs-and-parts.md) |
| Campaign Work (tasks) | Workshop > **Campaign work** | Workshop | [Campaign work](mechanic/campaign-work.md) |
| Weekly Work Schedule | Workshop > **Schedule** | Workshop | [Your weekly schedule](mechanic/schedule.md) |

## On Event menu

| In the Workshop App | In KART (how to get there) | Who can use it | Guide page |
|---|---|---|---|
| Race to Chassis | **Event Operations** > pick the event > **Race to Chassis**. Drag and drop on tablets and laptops, tap grid on phones | Signed in; other days admins only | [Race to Chassis](mechanic/race-to-chassis.md) |
| Chassis reassignment | Reason question after a move, **Reassignments** on Race to Chassis, kart page **Chassis reassignments** | Event and workshop staff | [Race to Chassis](mechanic/race-to-chassis.md) |
| Track use override | **Assign anyway** in Race to Chassis, or ticking Available with a reason; overrides end with the event | Per screen | [Race to Chassis](mechanic/race-to-chassis.md) |
| ICU Workflow | **Event Operations** > pick the event > **ICU board** | Workshop to edit; others read only | [Report a problem](mechanic/report-a-problem.md) |

## Parts & Consumables menu

| In the Workshop App | In KART (how to get there) | Who can use it | Guide page |
|---|---|---|---|
| Parts Needed | Workshop Manager > **Parts needed** (**Create draft orders**, print, CSV) | Hub manager | [Stock and parts needed](hub-manager/stock-and-parts-needed.md) |
| Parts Ordered / Order list | Workshop Manager > **Order List** (**Approval queue**, **Approve**, **Reject**, **Mark ordered**, **Add bulk order**) | Hub manager; approve: the hub's manager or admin; order and receive: also Purchasing | [Orders](hub-manager/orders.md) |
| Parts Received | Workshop Manager > **Goods In**, or **Receive** on an Order List line | Hub manager or Purchasing | [Orders](hub-manager/orders.md) |
| One-time and bulk orders | Stores **One-time need**; Order List **Add bulk order** | Workshop (one-time); hub manager (bulk) | [Orders](hub-manager/orders.md) |
| Inventory | Workshop > **Stores**, **Parts** tab (**Adjust**, **Add inventory**) | Workshop | [Stores](mechanic/stores.md) |
| Consumables | Workshop > **Stores**, **Consumables** tab | Workshop | [Stores](mechanic/stores.md) |
| Parts Catalog | FKL Central > **Parts catalogue** > **Master parts**; hub view in Workshop Manager > **Hub catalogue** | FKL Central; hub manager | [Parts catalogue](fkl-central/parts-catalogue.md) |
| Catalog Requests | Hub side: Workshop Manager > **Hub catalogue** > **Request a part**. Review: FKL Central > **Parts catalogue** > **Part requests** | Hub manager; FKL Central | [Hub catalogue](hub-manager/hub-catalogue.md), [Part requests](fkl-central/part-requests.md) |
| Add local part | Not in KART: every part is on the FKL master list. Use Workshop Manager > **Hub catalogue** > **Request a part** | Hub manager, FKL Central, admin | [Hub catalogue](hub-manager/hub-catalogue.md) |

## Management menu

| In the Workshop App | In KART (how to get there) | Who can use it | Guide page |
|---|---|---|---|
| Dashboard | Workshop > **Overview**; **Hub Manager** dashboard workshop tiles | Workshop; hub manager | [The fleet board](mechanic/fleet-board.md) |
| Status drill-down | Tap a count on the **Readiness board** | Workshop | [The fleet board](mechanic/fleet-board.md) |
| Reports | Workshop Manager > **Reports** (Excel, PDF, CSV) | Hub manager and admin | [Reports](hub-manager/reports.md) |
| Workshop Planning | Workshop Manager > **Work targets** and **Readiness targets** | Hub manager | [Schedules and targets](hub-manager/schedules-and-targets.md) |
| Schedule Settings | Schedule > **Schedule settings** | Hub manager | [Schedules and targets](hub-manager/schedules-and-targets.md) |
| Campaign list, new, edit | Workshop Manager > **Campaigns**, **New campaign**, **Edit campaign** | Hub manager | [Campaigns](hub-manager/campaigns.md) |
| Checklists | FKL Central > **Service checklists** (one per kart class) | FKL Central and admin | [Service checklists](fkl-central/checklists.md) |
| Alignment entry in the turn checklist | **Setdown / setup** dialog under the front spindle alignment cell; specs in FKL Central > **Servicing**. Removing the old 4-box entry: Coming soon | Workshop; specs FKL Central | [Service checklists](fkl-central/checklists.md) |
| Catalogues | FKL Central > **Parts catalogue** > **Catalogues** and **Hub catalogues** | FKL Central | [Parts catalogue](fkl-central/parts-catalogue.md) |
| Master Catalogue Review | FKL Central > **Parts catalogue** > **Part requests** and **Master review** | FKL Central | [Part requests](fkl-central/part-requests.md) |
| Manage Users | **Admin Access** > **User Administration**; hub managers: **Hub Manager** > **Pending approvals** | Admin; hub manager for own hubs | [Users and permissions](fkl-central/users.md), [Approvals](hub-manager/approvals.md) |
| Fleet Alignment Health | Workshop Manager > **Alignment health** (also FKL Central) | Hub manager; FKL Central | [Workshop Manager tour](hub-manager/workshop-manager.md) |
| Parts migrate | Not in KART. It was a one-off tool; parts were already moved | | |

## Calendar

| In the Workshop App | In KART (how to get there) | Who can use it | Guide page |
|---|---|---|---|
| Calendar | **Hub Manager** dashboard > **Calendar**: events, planning events and calendar items (track visit, closure, testing, meeting, delivery, travel, training, deadline) | Items: admins and the hub's managers; planning events: admins for now | [Schedules and targets](hub-manager/schedules-and-targets.md) |
| (new) FKL calendar sync | Coming soon: an admin page that syncs the FKL calendar into the Hub Manager calendar | Admin | |

!!! abstract "Coming soon"
    - FKL calendar sync page for admins.
    - The **Hub price** badge in Stores renamed **Hub description**.
    - Removing the old 4-box front alignment entry from the checklists.
    - Repairs moved from the Workshop App listed under their incidents on the kart page, with their photos.

!!! tip "Tip"
    Cannot find something? Ask in KART Comms support, or check [Troubleshooting](troubleshooting.md).
