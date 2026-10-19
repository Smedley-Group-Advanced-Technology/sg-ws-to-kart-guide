# Report a problem


Use **Report a kart problem** for anything that happened to a kart or anything you found on it. The type you pick decides which records KART creates. This page covers incidents, findings and driver feedback. To stop a kart, see [Reliability tickets](reliability-ticket.md).

!!! info "What changed from the Workshop App"
    - **Create New Kart Report** is now the **Report a kart problem** button on Overview and on the kart page.
    - **Incidents are information only.** They never make a kart Repair Required or unavailable. To take a kart out of use, raise a stopping reliability ticket.
    - The **Power / Performance Inspection** is now part of the **Driver feedback** report.
    - Findings are entered in the same dialog. Each finding becomes a repair.

## The four types

| Type | Use it for | What KART creates |
|---|---|---|
| **Incident** | Impact, spin or anything that happened on track | A workshop incident, plus a repair for each finding |
| **Driver feedback** | What the driver reported, for example low power or noise | A workshop incident, plus repairs for failed checks and findings |
| **Reliability** | A fault for engineering to investigate | Opens the reliability ticket form. Needs the Reliability permission |
| **Damage** | Damaged components | Opens Record New Damage. Each component becomes a repair. Needs the Reliability permission |

## Report an incident with a finding

<figure class="clip"><video controls preload="none" playsinline poster="../assets/video/mech-incident-clip.jpg" width="1180">
<source src="../assets/video/mech-incident-clip.mp4" type="video/mp4"><source src="../assets/video/mech-incident-clip.webm" type="video/webm">
<track kind="captions" src="../assets/video/mech-incident-clip.vtt" srclang="en" label="English" default></video>
<figcaption>Watch: reporting an incident on Bambino 106 with a loose bumper mount finding (about 70 seconds, with captions)</figcaption></figure>

1. On **Overview**, tap **Report a kart problem**.

    ![The Report a kart problem button on Overview](../assets/img/mechanic/mech-report-open.png){ loading=lazy }

2. In **Kart**, tap **Choose a kart** and pick the kart, for example **106**.

    ![Choosing kart 106 in the Report a kart problem dialog](../assets/img/mechanic/mech-report-kart.png){ loading=lazy }

3. Under **What are you reporting?** choose **Incident**.

    ![The four report types with Reliability and Damage greyed out for Alex](../assets/img/mechanic/mech-report-type.png){ loading=lazy }

4. Choose the **Incident type**, for example **Impact / Contact**.

    ![Incident type set to Impact / Contact](../assets/img/mechanic/mech-report-incident-type.png){ loading=lazy }

5. Type what happened in **Describe the incident**.

    ![Describe the incident filled in](../assets/img/mechanic/mech-report-describe.png){ loading=lazy }

6. Tap the **Impact location**, for example **Front**.

    ![Impact location Front selected](../assets/img/mechanic/mech-report-impact.png){ loading=lazy }

7. In the finding, choose the **Issue type** (for example **Loose**) and type the **Item / component** (for example "Bumper mount").

    ![Finding 1 with Issue type Loose and Item / component Bumper mount](../assets/img/mechanic/mech-report-finding.png){ loading=lazy }

8. Answer **Is a replacement part required?** If yes, pick the part so it can be ordered.

    ![Is a replacement part required? answered No](../assets/img/mechanic/mech-report-part.png){ loading=lazy }

9. Answer **Would this stop the kart from being used?** Here: **No, it is still usable**.

    ![Would this stop the kart from being used? with the reminder that the answer does not stop the kart](../assets/img/mechanic/mech-report-stop.png){ loading=lazy }

10. Tap **Add finding** if you found something else. Then tap **Report problem**.

    ![Add finding and Report problem buttons at the bottom of the dialog](../assets/img/mechanic/mech-report-submit.png){ loading=lazy }

11. The kart now shows **Repair Needed (usable)** and the repair appears as a card in the **Service Queue**.

    ![The new repair card for 106 in the Service Queue](../assets/img/mechanic/mech-report-result.png){ loading=lazy }

!!! warning "Watch out"
    If the kart must not be used, the answer **Yes, it should not be used** is not enough. Raise a reliability ticket, or ask a colleague with the Reliability permission to do it. The finding has a link that opens the reliability ticket form in a new tab.

!!! note "Remember"
    **Without findings the incident stays open on the ICU board until it is inspected.** When you inspect it later, open the kart page and use **Log findings**. If nothing needs repairing, choose **Resolved: no fault found**.

## Report driver feedback and do the Power / Performance inspection

1. Tap **Report a kart problem**, choose the kart (for example **302**) and choose **Driver feedback**.

    ![Driver feedback chosen for Junior 302](../assets/img/mechanic/mech-feedback-type.png){ loading=lazy }

2. Choose the **Driver feedback type**. For low power choose **Power / Performance**.

    ![Driver feedback type Power / Performance](../assets/img/mechanic/mech-feedback-power.png){ loading=lazy }

3. Type what the driver said in **Describe the driver feedback**.

    ![Describe the driver feedback filled in](../assets/img/mechanic/mech-feedback-describe.png){ loading=lazy }

4. Work through the **Power / Performance inspection**. Answer every check Pass or Fail.

    ![The Power / Performance inspection checklist with Pass and Fail answers](../assets/img/mechanic/mech-feedback-inspection.png){ loading=lazy }

5. For a failed check, add the finding under **Inspection findings (optional)**.

    ![A finding added for a failed inspection check](../assets/img/mechanic/mech-feedback-finding.png){ loading=lazy }

6. Tap **Report problem**.

    ![Report problem at the bottom of the driver feedback report](../assets/img/mechanic/mech-feedback-submit.png){ loading=lazy }

!!! tip "Tip"
    If KART says **No Power / Performance inspection checklist is published. The report is saved without an inspection.**, tell your hub manager so FKL Central can publish it.
