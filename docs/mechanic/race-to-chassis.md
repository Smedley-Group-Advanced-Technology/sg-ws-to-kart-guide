# Race to Chassis


Race to Chassis (R2C) links each race number (the driver's number for the day) to the chassis (kart) it drives in each session (each time out on track). On the event day it also marks karts used, so they need a service after the event. You can drag numbers onto chassis (tablet and laptop) or use the chassis list (phone). Both work the same way round: each chassis gets a race number.

!!! info "What changed from the Workshop App"
    - **On Event > Race to Chassis** is now in **Event Operations**: pick the event, then **Race to Chassis**.
    - New since 19 October: **drag and drop**. Drag a race number onto a chassis. On phones the chassis list opens by default. Each device remembers the view you last chose.
    - New: on phones the old tap grid (race numbers down the side, sessions across) is now a **chassis list**: tap a chassis, then its race number. It works the same way round as drag and drop.
    - Everything the Workshop App grid did still happens on each change: reasons, track use overrides (letting a not-available kart run until the end of the event), marking karts used with **Undo**, and the reassignment log.
    - New since 30 October: only your hub's own karts of that class are listed, in chassis order (for example 18 Bambino chassis), instead of fixed chassis 1 to 30.
    - New since 30 October: KART always warns before a kart that is not available goes on track, and asks for a reason. This now also happens when the chassis already has a race number, for **Copy Last Session**, and for administrators changing another day. A chassis with a warning triangle has a race number although its kart is not available.

## Open Race to Chassis

1. On **Select your Hub**, tap **Event Operations**. It opens in a new tab.

    ![The Event Operations card on Select your Hub](../assets/img/mechanic/mech-r2c-events.png){ loading=lazy }

2. Under **Existing Events**, tap today's event, **Demo Practice Day**. (Do not use **Upload Driver File** at the top: that creates a new event.)

    ![Demo Practice Day in the Event Operations list](../assets/img/mechanic/mech-r2c-pick-event.png){ loading=lazy }

3. In **Select Action for Demo Practice Day**, tap **Race to Chassis**.

    ![The Select Action dialog with Race to Chassis](../assets/img/mechanic/mech-r2c-action.png){ loading=lazy }

## Drag and drop (tablet and laptop)

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/mech-r2c-drag-clip.jpg" width="1180">
<source src="../assets/video/mech-r2c-drag-clip.mp4" type="video/mp4"><source src="../assets/video/mech-r2c-drag-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/mech-r2c-drag-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: putting race numbers on chassis with drag and drop (about 50 seconds, with captions)</figcaption></figure>

The buttons at the top pick the kart class (**Junior**, **Cadet**, **Bambino**) and the session (**1**, **2**, **3**, **4**). The chassis show each kart's number in its class, so Junior 301 is chassis **01**. Only the karts of your hub's fleet for that class are shown, in chassis order, ten to a column. A hub with no karts of that class shows chassis 1 to 30. The chassis colour is the kart's status colour, the same as on the Fleet board: **Ready** (green), **Needs attention** (amber, for example in a service, Requires service or Campaign required), **Blocked** (red, must not be used) or **Written off** (grey); **Not in fleet** is a plain outline. A filled star means the kart is preferred, an empty star **Unpreferred**. See [Kart statuses](../start/statuses.md).

1. At the top, tap the kart class, for example **Junior**. Check the right session is selected. The **Race Number** list on the right holds the numbers to place.

    ![The drag and drop view with Chassis Number and Race Number columns](../assets/img/mechanic/mech-r2c-dd-view.png){ loading=lazy }

2. Drag the number onto the chassis, for example race number **5** onto chassis **01** (Junior 301).

    ![Dragging race number 5 onto chassis 01, Junior 301](../assets/gif/mech-r2c-drag-gif.gif){ loading=lazy }

3. KART says **Kart 301 marked used** and **It stays Ready during the event and requires service after the event day.** Tap **Undo** only if it was a mistake. A kart that already requires service is not marked again: KART says **Not marked used: the kart already requires service.**

    ![Kart 301 marked used message with Undo](../assets/img/mechanic/mech-r2c-marked.png){ loading=lazy }

4. To take a number off, drag it back to the race number list, or tap the chassis and tap **Take off chassis**.

    ![Take off chassis for a chassis with a race number](../assets/img/mechanic/mech-r2c-takeoff.png){ loading=lazy }

!!! tip "Tip"
    **Copy Last Session** copies the previous session's numbers to this one. If that puts karts on track that are not available, KART lists them and asks for one reason before it copies (see below). **Clear Session** empties only this session. **Clear All** empties every session of the event and cannot be undone.

## Chassis list (phone)

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/mech-r2c-list-clip.jpg" width="390">
<source src="../assets/video/mech-r2c-list-clip.mp4" type="video/mp4"><source src="../assets/video/mech-r2c-list-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/mech-r2c-list-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: putting a race number on a chassis with the chassis list on a phone (about 35 seconds, with captions)</figcaption></figure>

The list shows one session of one class, with only your hub's karts of that class in chassis order: tap the kart class (**Junior**, **Cadet**, **Bambino**) and the session (**1**, **2**, **3**, **4**) at the top. KART opens on the current session. Each row is a chassis, for example **Kart 302**, with its colour (**Ready**, **Needs attention**, **Blocked**, **Written off** or **Not in fleet**), a filled or empty star (preferred or **Unpreferred**), plus tags such as **Requires service**, and, on the right, the race number it has in this session (a dot when it has none).

1. Tap the chassis, for example **Kart 302**.

    ![The chassis list on a phone, Junior session 1, with Kart 302](../assets/img/mechanic/mech-r2c-list.png){ loading=lazy }

2. Tap the race number this kart runs with, for example **07**. Grey numbers are already on another kart in this session; the kart is shown under the number. KART says **Kart 302 marked used**, with **Undo**, as in drag and drop.

    ![The race number picker for Kart 303, with 07 in grey because Kart 302 has it](../assets/img/mechanic/mech-r2c-list-picker.png){ loading=lazy }

3. If you pick a grey number, KART asks, for example, **Move race number 07 to Kart 303?** Tap **Move** to move it (the other kart is left without a race number), or **Cancel**. After the move KART asks why it changed chassis (see below).

    ![Move race number 07 to Kart 303?](../assets/img/mechanic/mech-r2c-list-move.png){ loading=lazy }

4. To take a number off, tap the chassis and tap **Clear**.

5. To switch views, tap **Drag and drop view** at the bottom left. In drag and drop, tap **Chassis list** to come back.

    ![The Drag and drop view button at the bottom left of the chassis list](../assets/img/mechanic/mech-r2c-switch.png){ loading=lazy }

## A chassis that is not available

1. Put a number on a chassis that is not available, for example Junior chassis **07**. KART names the kart by its number and says **Kart 307 is not available** and why. This also happens when the chassis already has another race number: the new number would replace it, so KART asks first.

    ![Kart 307 (Junior chassis 07) is not available, with the reason box and Assign anyway](../assets/img/mechanic/mech-r2c-unavailable.png){ loading=lazy }

2. Normally tap **Cancel** and use another chassis. Only if your hub manager agrees, type a reason and tap **Assign anyway**. This gives a track use override until the end of the event.

    ![Cancel in the not available dialog](../assets/img/mechanic/mech-r2c-cancel.png){ loading=lazy }

!!! warning "Watch out"
    Never assign a kart with a stopping reliability ticket (Repair Required) just to fill the grid. **Assign anyway** is recorded with your reason.

### Copy Last Session with karts that are not available

1. Tap **Copy Last Session**. If the copy puts karts on track that are not available, the question lists them, for example **1 kart being copied is not available:** Kart 307.
2. Normally tap **Cancel** and change those chassis first. Only if your hub manager agrees, type one reason for all of them and tap **Copy Last Session**. The reason is recorded for each kart.

### Warning triangles

A chassis with a warning triangle has a race number although its kart is not available: it was assigned or copied with a recorded reason, or the kart changed after it got the number, or a copy filled the session when it started. Check with your hub manager before that kart goes out.

## Moving a race number to another chassis

1. Drag a race number that is already on a chassis onto a different chassis (on a phone: pick a grey number and tap **Move**). KART asks **Logged. Why did the race number change chassis?**

    ![The Chassis reassignment question asking why the race number changed chassis](../assets/img/mechanic/mech-r2c-reassign.png){ loading=lazy }

2. Choose a reason in **Select a reason**, then tap **Save reason**. The reason is optional: **Skip** closes the question and the move is still logged. The clock button next to **Clear Session** counts the moves. On a wide screen it says **Reassignments**.

    ![A reason chosen and the count of moves on the clock button](../assets/img/mechanic/mech-r2c-reassign-save.png){ loading=lazy }

## Past events are read-only

1. Open Race to Chassis for an event on another day. KART shows **Past Event - Editing Restricted**. Only administrators can change it. For administrators the not-available warning applies there too, and every change of chassis appears under **Reassignments** marked **Admin correction**.

    ![Past Event - Editing Restricted on an earlier event](../assets/img/mechanic/mech-r2c-past.png){ loading=lazy }

!!! note "Remember"
    Race numbers go from 1 to 30. Marking karts used only happens for today's event, in the hub's own time zone.
