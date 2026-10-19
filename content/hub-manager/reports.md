# Reports

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=reports
state: Demo Hub with some completed demo services
:::

**Workshop Manager > Reports** has the reports you used in the Workshop App, for your hub, exported to Excel, PDF or CSV.

!!! info "What changed from the Workshop App"
    - All eight Workshop App reports are here, grouped as Workshop & productivity, Parts & inventory, Fleet and Event operations.
    - Fleet Alignment Health is the **Alignment health** tab. The Incident Report is the per-event incidents view in the detailed reliability report.

| Workshop App report | In KART |
|---|---|
| Weekly Turn Summary | **Turn summary** |
| Kart Turn Detail | **Kart turn detail** |
| Workshop Activity | **Workshop activity** |
| Parts Usage | **Parts usage** |
| Inventory Status | **Inventory status** |
| Fleet Campaigns | **Fleet campaigns** |
| Chassis Reassignments | **Chassis reassignments** |
| Track Use Overrides | **Track use overrides** |

## Run a report

1. Open **Workshop Manager > Reports**.

    :::shot hm-rep-tab
    caption: The Reports tab with the report groups
    steps:
      - Tap Reports
    callouts:
      - [1, "text=Workshop & productivity", "Report groups"]
    :::

2. Pick a report, for example **Turn summary**.

    :::shot hm-rep-pick
    caption: Turn summary chosen
    steps:
      - Choose Turn summary
    callouts:
      - [1, "text=Turn summary", "Services per week"]
    :::

3. Set the **Period** (**From** and **To**) or choose an **Event**.

    :::shot hm-rep-period
    caption: Period from and to dates
    steps:
      - Set From and To to the last two weeks
    callouts:
      - [1, "text=Period", "Dates"]
    :::

4. Tap **Excel**, **PDF** or **CSV** to download it.

    :::shot hm-rep-export
    caption: The Excel, PDF and CSV buttons
    steps:
      - Look at the export buttons
    callouts:
      - [1, "text=Excel", "Spreadsheet"]
      - [2, "text=PDF", "To print or send"]
      - [3, "text=CSV", "Raw data"]
    :::

!!! tip "Tip"
    The screen shows the first rows only. The exports contain all of them.

!!! abstract "Coming with your hub's switch-over"
    Checklist answers of old Workshop App services are moved later. Until then, old services show "0 of N checks" in reports.
