# Orders


Every order line moves through the same stages on the **Order List**. You approve lines, mark them ordered when you place the order with the supplier, and book the parts in when they arrive.

!!! info "What changed from the Workshop App"
    - **Parts Ordered / Order list** and **Parts Received** are now **Order List** and **Goods In** in Workshop Manager.
    - New stage: **approval**. A line must be **Approved** by the hub's manager or an admin before it can be marked ordered.
    - Receiving records the cost: unit cost, currency, invoice reference, freight and tax or duty.
    - Order history from the Workshop App is not moved.

## The pipeline

```mermaid
flowchart LR
    PN[Parts needed] -- Create draft orders --> D[Draft]
    S0[Stores: Add to order list or One-time need] --> S
    D -- Submit --> S[Submitted]
    S -- Approve --> A[Approved]
    S -- Reject --> R[Rejected: back in Parts needed]
    A -- Mark ordered --> O[Ordered]
    B[Add bulk order] --> O
    O -- Receive or Goods In --> C[Completed]
    O -- Cancel --> X[Cancelled: back in Parts needed]
```

| Stage | Means | Who moves it on |
|---|---|---|
| **Draft** | Created from Parts needed, not sent yet | The creator or a hub manager: **Submit** |
| **Submitted** | Waiting for approval | The hub's manager or an admin: **Approve** or **Reject** |
| **Approved** | OK to order | Hub manager, admin or Purchasing: **Mark ordered** |
| **Ordered** | Placed with the supplier. Waiting repairs show **On order** | Hub manager, admin or Purchasing: **Receive** |
| **Completed** | Received. Stock and average cost updated | |
| **Cancelled** | Cancelled or rejected. The need shows again in Parts needed | |

## Watch it first

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/hm-orders-clip.jpg" width="1440">
<source src="../assets/video/hm-orders-clip.mp4" type="video/mp4"><source src="../assets/video/hm-orders-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/hm-orders-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: approving rear tyres in the approval queue and marking sprockets ordered (about 35 seconds, with captions)</figcaption></figure>

## Submit a draft

![Steps 1 and 2 on one screen: the Order List with the brake pads Draft line and Submit](../assets/img/hub-manager/hm-ord-list.png){ loading=lazy }

1. Open **Workshop Manager > Order List**. Find the **Draft** line, for example brake pads.

2. Tap **Submit** on the line.

## Approve or reject

![Steps 1 to 3 on one screen: the Approval queue with Approve and Reject on the rear tyres line](../assets/img/hub-manager/hm-ord-queue.png){ loading=lazy }

1. Tap **Approval queue**. It shows every line **Waiting for approval**.

2. Check the part and quantity. Tap **Approve**.

3. Or tap **Reject**, type a reason in **Reason (optional)** and confirm **Reject order**. The line is closed as Rejected. If the part is still needed it shows again in Parts needed.

## Mark ordered

![Step 1: Mark ordered on the sprockets line](../assets/img/hub-manager/hm-ord-mark.png){ loading=lazy }

1. Place the order with the supplier. Then find the line under **Approved** and tap **Mark ordered**. Type the **Supplier** (or check it if KART filled it in) and tap **Save**. Under the box KART lists your hub's **Preferred supplier** and **Backup supplier** for the part: tap **Use** to fill one in. Choose them in [Hub catalogue](hub-catalogue.md#choose-the-preferred-supplier).

2. Repairs waiting for that part now show **On order**, with the supplier and date.

    ![Step 2: the repair card for Kart 307 with On order for front bumpers](../assets/img/hub-manager/hm-ord-onorder.png){ loading=lazy }

!!! warning "Watch out"
    **Mark ordered** only works on **Approved** lines. Lines made with **Add bulk order** go straight to Ordered, so only approvers can make them.

## Bulk and one-time orders

![Steps 1 and 2 on one screen: Add bulk order and a one-time line in Submitted](../assets/img/hub-manager/hm-ord-bulk.png){ loading=lazy }

1. For a bulk buy, tap **Add bulk order** on the Order List and add the lines.

2. For a one-off purchase, use **One-time need** in Stores with a reason. It arrives here as **Submitted**, marked one-time.

## Receive the parts (Goods In)

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/hm-goodsin-clip.jpg" width="1440">
<source src="../assets/video/hm-goodsin-clip.mp4" type="video/mp4"><source src="../assets/video/hm-goodsin-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/hm-goodsin-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: receiving the front bumpers for Junior 307 with Goods In on the Order List (about 30 seconds, with captions)</figcaption></figure>

![Step 1: Goods In on the front bumpers line under Ordered](../assets/img/hub-manager/hm-gi-open.png){ loading=lazy }

1. Open **Workshop Manager > Order List**. Find the line under **Ordered**, for example front bumpers, and tap **Goods In** on it.

2. The **Part** is filled in and the line is marked **Against order**. Check it is the part that arrived.

    ![Steps 2 to 5 on one screen: the Goods In form for the front bumpers order](../assets/img/hub-manager/hm-gi.png){ loading=lazy }

3. Check the **Quantity**: KART fills in what was ordered. Type the **Unit cost** and check the **Currency** (for example GBP).

4. Check the **Supplier** and type the **Invoice reference**.

5. Tap **Receive stock**. Stock and the average cost update straight away. KART says how many went to waiting repairs, and those repairs leave **Requires part** so mechanics can do them.

!!! tip "Tip"
    Tap **Receive** instead of **Goods In** on an Ordered line to add **Freight** and **Tax / duty**, then tap **Book in**. Parts that arrive without an order go in through the **Goods In** tab of Workshop Manager. Partial deliveries are fine: receive what came, the rest stays Ordered.

!!! abstract "Coming with your hub's switch-over"
    Open orders in the Workshop App are not copied. Re-enter each one in KART (Stores) so it can be received here.
