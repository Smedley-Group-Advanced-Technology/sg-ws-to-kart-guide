# Stock and parts needed

:::defaults
persona: Morgan Manager
device: desktop
url: /workshop/manager?tab=parts-needed
state: "Junior 307 waiting on front bumper (FKL-900001, on order); campaign parts for the Junior caliper seal upgrade; brake pads FKL-900003 at the reorder point"
:::

**Parts needed** works out what your hub must order. It adds up repairs waiting on parts, open campaign tasks and stock at or below its reorder point, minus what is already on the Order List or ordered. One row per part.

!!! info "What changed from the Workshop App"
    - **Parts Needed** is now **Workshop Manager > Parts needed**, one list instead of separate buckets.
    - You turn it into orders with **Create draft orders**. Nothing is sent to a supplier until the order is approved and marked ordered.
    - Stock levels, reorder points and targets are set per part in **Stores**.

## Read the list

:::shot hm-pn
caption: "Steps 1 to 4 on one screen: Parts needed with its columns, Order qty and Create draft orders"
steps:
  - Tap Parts needed
  - Change Order qty for brake pads to 8
callouts:
  - [1, "text=Parts needed", "The tab"]
  - [2, "text=Still needed", "What is left to order"]
  - [3, "text=Order qty", "How many to order"]
  - [4, "text=Create draft orders", "Make Draft lines"]
:::

1. Open **Workshop Manager > Parts needed**.

2. Read the columns: **Stock**, **Demand**, **On order**, **Still needed** and **Order qty**.

3. Change **Order qty** if you want to order more or less.

4. Tap **Create draft orders**. The lines go on the Order List as **Draft**.

!!! tip "Tip"
    Use **Print** or **Export CSV** to take the list to a supplier call.

## Set reorder points in Stores

:::shot hm-pn-reorder
caption: Adjust stock with Reorder point and Target
url: /workshop/parts
steps:
  - Tap Adjust on the brake pads row
callouts:
  - [1, "label=Reorder point", "Order when stock reaches this, then Target and Save"]
:::

1. Open **Stores** and tap **Adjust** on a part. Set **Reorder point** and **Target**, choose a **Reason** and tap **Save**.

!!! abstract "Coming with your hub's switch-over"
    Your hub's stock moves from the Workshop App a few days after the switch: each part is set to the Workshop App count minus what was used in KART since the switch. Until then **Parts needed may list parts that are on the shelf: check the shelf before ordering.** Make sure your team records every part used in KART from day one.
