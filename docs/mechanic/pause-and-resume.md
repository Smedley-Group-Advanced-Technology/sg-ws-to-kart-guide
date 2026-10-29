# Pause and resume a service


Pause a service whenever you stop working on the kart: end of shift, waiting for parts, waiting for another mechanic or a decision. The pause is recorded with its reason and how long it lasts, so the service time stays honest.

!!! info "What changed from the Workshop App"
    - Pausing works like the Workshop App, but KART always asks for a **Pause reason**.
    - Your paused services sit in a **Paused services** bar under the Workshop tabs. Tap one to carry on.
    - Doing repair work on the kart pauses its service by itself. The service then shows the extra repair minutes.
    - New in KART: any mechanic of the hub can **Take over** a service somebody else started. KART always asks for a reason, and the mechanic who started it and your hub manager see who took it over, when and why.

## Watch it first

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/mech-pause-clip.jpg" width="1180">
<source src="../assets/video/mech-pause-clip.mp4" type="video/mp4"><source src="../assets/video/mech-pause-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/mech-pause-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: pausing Cadet 203 with a reason and resuming Junior 304 (about 20 seconds, with captions)</figcaption></figure>

## Pause

1. On **Servicing**, tap **Pause**.

    ![The Pause button on the Servicing page](../assets/img/mechanic/mech-pause-button.png){ loading=lazy }

2. In **Pause service**, tap a **Pause reason**, for example **End of Shift** or **Waiting on parts**.

    ![The Pause service dialog with the list of pause reasons](../assets/img/mechanic/mech-pause-reason.png){ loading=lazy }

3. Add a note in **Comment (optional)** if the next mechanic should know something.

    ![A comment typed in Comment (optional)](../assets/img/mechanic/mech-pause-comment.png){ loading=lazy }

4. Tap **Pause**. The kart moves to the **Paused services** bar at the top of **Servicing**, and shows **Paused** (grey) on the board.

    ![The Paused services bar with 203 and 304](../assets/img/mechanic/mech-pause-done.png){ loading=lazy }

!!! note "Remember"
    The reasons are: **Waiting on Manager Decision**, **Waiting on Another Mechanic**, **Waiting on Tool**, **Waiting on Diagnosis**, **Waiting on parts**, **End of Shift**, **Lunch Break** and **Other**.

## Resume

1. On **Servicing**, find the kart in the **Paused services** bar under the Workshop tabs. Hover or long-press to see the reason.

    ![Junior 304 in the Paused services bar showing Waiting on parts](../assets/img/mechanic/mech-resume-bar.png){ loading=lazy }

2. Tap the kart, for example **304**. KART opens its **Servicing** page and the timer runs again.

    ![Servicing for Junior 304 after resuming](../assets/img/mechanic/mech-resume-open.png){ loading=lazy }

3. Or open the kart page and tap **Resume service**.

    ![Resume service on the kart page of Junior 304](../assets/img/mechanic/mech-resume-kartpage.png){ loading=lazy }

## Take over another mechanic's service

If another mechanic started the service (for example they paused it and went home), you carry on with the same service. Do not start a new one: the checks, parts and times stay on the service.

1. Open the kart page. KART says **Another mechanic is servicing this kart. Any Workshop user of this hub can take it over with a reason.** Tap **Take over**.

    Or, in the **Service Queue**, tap the kart in the **In progress** lane. Hub managers and admins first get the read-only view of the checklist there (unless the kart is assigned to them); **Take over** is the button at its top.

    A service paused for repair work cannot be taken over: KART says **Paused for repair work: the repair mechanic finishes the repair first**.

2. In **Take over service**, type the **Reason**, for example "Alex went home, I finish the service". The reason needs 4 to 500 characters; **Take over** stays grey until then.

3. Tap **Take over**. KART moves the service to you, starts its clock again and opens **Servicing**.

!!! note "Who sees it"
    The reason is logged. The mechanic who started the service sees **Taken over from you** on their **Servicing** page for 24 hours, with who took it over, when and why. The kart page and the kart's card in the **In progress** lane show **Taken over by** with the initials, the time and the reason. The service report has a **Taken over** section listing every take-over: the previous and the new owner's initials, the time and the reason. So your hub manager sees it too.

!!! warning "Watch out"
    Take over only when the other mechanic cannot carry on. If they are still working on the kart, talk to them first.

## Repair work pauses the service

When you start repair work on a kart that is in service (see [Repairs and parts used](repairs-and-parts.md)), KART pauses the service for you. The paused tab shows a spanner, and its hint says **Repair work is running. Opening the service stops the repair clock.**

1. Tap the paused kart to go back to the service. The repair clock stops and the service clock runs again.

    ![A paused service with the spanner icon because repair work is running](../assets/img/mechanic/mech-resume-repair.png){ loading=lazy }

!!! tip "Tip"
    Pause before a break, even a short one. A service left running all night makes the service time look much longer than the work was.
