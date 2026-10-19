# Doing a service


A service (the Workshop App called it a "turn") is the check every kart gets after it has been used. In KART you start the service, answer the checklist on **Servicing**, record any parts you fitted and complete it. The timer runs while you work.

!!! info "What changed from the Workshop App"
    - **Start Turn** is now **Start service**. The checklist is on the **Servicing** tab. (Some older notes call this screen "In Service"; on screen it says **Servicing**.)
    - Each kart class (Bambino, Cadet, Junior) has its own checklist, set by FKL Central.
    - You can only have **one** kart in service at a time. Starting another offers **Pause and switch**.
    - Karts that need a service show **Requires service** (the Workshop App said Turn Required).

## Watch it first

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/mech-service-clip.jpg" width="1180">
<source src="../assets/video/mech-service-clip.mp4" type="video/mp4"><source src="../assets/video/mech-service-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/mech-service-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: a full service on Cadet 203, from the Service Queue to Complete service (about 85 seconds, with captions)</figcaption></figure>

## Start the service

1. Tap **Service Queue** in the tab strip.

    ![The Service Queue with the Requires service, In progress and Completed lanes](../assets/img/mechanic/mech-svc-queue.png){ loading=lazy }

2. Find the kart in the **Requires service** lane. Karts are grouped by class. Karts assigned to you have a blue ring.

    ![Kart 203 in the Cadet column of the Requires service lane](../assets/img/mechanic/mech-svc-find.png){ loading=lazy }

3. Tap the kart number, for example **203**. KART asks **Start service?**

    ![The Start service? dialog for kart 203](../assets/img/mechanic/mech-svc-dialog.png){ loading=lazy }

4. Tap **Start service**. KART opens **Servicing** with the checklist for that kart class. The timer starts.

    ![The Servicing tab with the Cadet checklist grid for 203](../assets/img/mechanic/mech-svc-servicing.png){ loading=lazy }

!!! tip "Tip"
    You can also start a service from the kart page (**Start service**), for example after scanning the kart's QR code. See [The kart page](kart-page.md).

## Answer the checklist

1. Tap a check cell to cycle it: **Unchecked**, then **Good**, then **Blocked**. On a keyboard press space, and enter to move down.

    ![Tapping a checklist cell cycles it from Unchecked to Good to Blocked](../assets/gif/mech-svc-cycle-gif.gif){ loading=lazy }

2. For a measured check, type the reading in the cell, for example tyre depth or the voltage of each battery.

    ![A measured check with tyre depth and battery voltage readings](../assets/img/mechanic/mech-svc-reading.png){ loading=lazy }

3. If a check cannot pass, set it to **Blocked**. KART asks **Why is this blocked?**

    ![The Why is this blocked? box after setting a check to Blocked](../assets/img/mechanic/mech-svc-blocked.png){ loading=lazy }

4. Type the reason and tap **Save reason**.

    ![A blocked reason typed with the Save reason button](../assets/img/mechanic/mech-svc-blocked-save.png){ loading=lazy }

!!! warning "Watch out"
    A blocked check must be resolved before you can complete the service. Fix it (and set the cell to **Good**), or report a problem so it becomes a repair. See [Report a problem](report-a-problem.md).

## Record parts and work

1. If you fitted a part, go to **Parts used** and tap **Add part used**.

    ![The Parts used section with Add part used](../assets/img/mechanic/mech-svc-parts.png){ loading=lazy }

2. Pick the part, set the quantity and add it. KART takes it from your hub's stock.

    ![A brake pad set added to Parts used with quantity 1](../assets/img/mechanic/mech-svc-parts-added.png){ loading=lazy }

3. If you swapped a tracked component (for example a battery), add it under **Components replaced**.

    ![The Components replaced section with its search box](../assets/img/mechanic/mech-svc-components.png){ loading=lazy }

4. Write what you did under **Record work done**.

    ![Record work done with a short note](../assets/img/mechanic/mech-svc-work-done.png){ loading=lazy }

!!! note "Remember"
    Record **every** part in KART from day one. Until your hub's stock is moved from the Workshop App, the stock count depends on it. See [Switch-over day](../switch-over/index.md).

## Complete the service

1. Tap **Complete service** at the bottom.

    ![The Complete service button at the bottom of Servicing](../assets/img/mechanic/mech-svc-complete.png){ loading=lazy }

2. Read the **Service & Inspection Declaration**. Tick **I confirm the above declaration and that this kart is race-ready and safe for use.**

    ![The Service and Inspection Declaration with the confirm tick box](../assets/img/mechanic/mech-svc-declaration.png){ loading=lazy }

3. Tap **Confirm**. KART sets the kart **Ready**, or **Repair Needed (usable)** or **Repair Required** if repairs or a stopping ticket are still open.

    ![Kart 203 back as Ready on the Overview board](../assets/img/mechanic/mech-svc-done.png){ loading=lazy }

!!! warning "Watch out"
    **Complete service** stays greyed out until everything is done. KART says why:

    - **checks still unchecked**: answer every required check.
    - **blocked checks must be resolved first**: fix the blocked check or turn it into a repair.
    - **outstanding tickets must be resolved first**: a reliability ticket on this kart is still open.
    - **outstanding campaign tasks must be completed first**: finish the campaign task, see [Campaign work](campaign-work.md).

!!! tip "Tip"
    If the kart was already serviced and only campaign work is left, KART says **This kart has already been serviced** and shows **Complete campaign work** instead.

## Already have a kart in service?

1. If you tap another kart while one is running, KART says **You already have a kart in service**.

    ![The You already have a kart in service dialog with Pause and switch](../assets/img/mechanic/mech-svc-switch.png){ loading=lazy }

2. Tap **Pause and switch** to pause the first service and start the new one, or **Cancel** to stay.

    ![Servicing for 204 with 203 in the Paused services bar](../assets/img/mechanic/mech-svc-switched.png){ loading=lazy }
