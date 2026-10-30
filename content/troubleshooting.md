# Troubleshooting

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: Demo Hub as seeded
:::

Find what you see in the left column. Each row says why it happens and what to do.

!!! info "What changed from the Workshop App"
    KART checks more before it lets you finish something: one service per mechanic, every required check answered, tickets and campaign tasks done. Most messages below are KART telling you what is still open.

| What you see | Why | What to do |
|---|---|---|
| No **Workshop** card on Select your Hub | You do not have the **Workshop** permission, or no access to this hub | Ask your hub lead. A KART admin or hub manager gives the permission and hub access |
| A hub is greyed out with a lock | You have no access to that hub | Tap **Request Access**. See [Signing in and access](start/sign-in-and-access.md) |
| **Waiting for approval** after signing up | A manager of the hub (or an admin, without a join code) has not approved you yet | Wait, or ask your hub manager to check **Pending approvals** |
| Cannot start a service: **You already have a kart in service** | One active service per mechanic | Tap **Pause and switch**, or finish the first service |
| Cannot start a service: another mechanic's service | **Another mechanic is servicing this kart.** | Tap **Take over** on the kart page and give a reason. See [Pause and resume](mechanic/pause-and-resume.md) |
| Cannot start services at all | Your account has no **Workshop** permission | Ask your hub lead |
| **Complete service** greyed out: **checks still unchecked** | Required checks are not answered | Answer every required check |
| **Complete service** greyed out: **blocked checks must be resolved first** | A check is set to Blocked | Fix it and set it to Good, or report a problem so it becomes a repair |
| **Complete service** greyed out: **outstanding tickets must be resolved first** | A reliability ticket on the kart is still open (any ticket, even a Performance one) | Finish the repair; someone with Reliability resolves the ticket |
| **Complete service** greyed out: **outstanding campaign tasks must be completed first** | An integrated campaign task is open on this kart | Finish it in **Campaign work** |
| Kart shows **Repair Required** but was fixed | The stopping ticket is still open, or its repair is not completed | Complete the repair with **Log remedy / complete repair**, then resolve the ticket. See [Reliability tickets](mechanic/reliability-ticket.md) |
| Kart logged with an incident is still available | Incidents never stop a kart | Raise a stopping reliability ticket if it must not be used |
| Race to Chassis shows **Past Event - Editing Restricted** | The event is not today; only administrators can change other days | Nothing to do, or ask an admin |
| **Kart 307 is not available** in Race to Chassis (chassis 07 in the Junior grid; the grid shows the kart's number in its class) | The kart is not available, for example a stopping ticket, a lock by hand, a service or missing batteries (also when the chassis already has a race number). Race to Chassis refuses it | Use another chassis. To get the kart back, speak to the technical team: **Open in Tracker** to resolve the ticket, or **Set available manually** for a manual override on Kart Availability (not possible with an open stopping ticket) |
| A chassis in Race to Chassis has a warning triangle | Its kart became not available after it got the race number (or before 2 November). It stays, but gets no new race number | Check with your hub manager before the kart goes out |
| A part is not in Stores | Hidden at your hub, or not in the catalogue | Ask your hub manager to show it or use **Request a part** |
| **Parts needed** lists parts that are on the shelf | Before the stock move, KART counts can be lower than the shelf | Check the shelf before ordering. Record every part used in KART |
| **Mark ordered** is not offered | The line is not **Approved** yet | Approve it first (hub manager or admin) |
| **You were signed out after 36 hours of inactivity on this device.** | KART signs out unused devices | Sign in again. Nothing saved is lost |
| A new browser tab opened | Hub selection cards open areas in a new tab | Normal. Close tabs you no longer need |
| **Comms** is not in any menu | KART Comms has no menu link | Open the address ending in **/comms**, or use the KART Comms desktop app |
| **Your temporary password has expired** | Temporary passwords are only valid for a while | Ask for a new one, or tap **Send me a reset e-mail** |
| **Available** and **Preferred** ticks are greyed out | They need the **Reliability** permission | Ask a colleague with Reliability or your hub manager |
| **No Power / Performance inspection checklist is published.** | FKL Central has not published that checklist | Tell your hub manager; the report saves without the inspection |
| Old services show "0 of N checks" in reports | Workshop App checklist answers are moved later | Nothing to do; it fills in when the answers move |

## Still stuck?

1. Tell your hub manager (hub lead) what you see, with the kart number. For help with KART itself, open **KART Comms** and start with **AI Support**; the AI escalates to Remote Support or FKL Central when a person is needed (see [Getting help](start/finding-your-way.md#getting-help)).

    :::shot gen-trouble-comms
    caption: A question to AI Support in KART Comms describing the problem
    url: /comms
    steps:
      - Open /comms as Alex Mechanic
      - Tap AI Support
      - Type "Kart 307 shows Repair Required but the bumper is fitted"
    callouts:
      - [1, "text=AI Support", "Start here"]
    :::

!!! tip "Tip"
    A screenshot helps. Attach it with **Attach file**.
