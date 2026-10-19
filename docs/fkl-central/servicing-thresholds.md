# Servicing thresholds


**FKL Central > Servicing** holds the limits KART uses when mechanics type readings: minimum tyre tread, front spindle alignment, minimum battery voltage and maximum axle run-out. A reading outside the limit is flagged.

!!! info "What changed from the Workshop App"
    - The limits are global and set in one place by FKL Central admins.
    - Alignment specs are set per kart class, with an optional hub override and an explicit unit (degrees or mm). Out-of-spec readings show "action required".
    - Everyone else can see the values but not change them.

## Change a threshold

1. Open **FKL Central** and tap **Servicing**.

    ![The Servicing tab with the thresholds](../assets/img/fkl-central/fc-thr-tab.png){ loading=lazy }

2. Change the value, for example **Battery voltage threshold**.

    ![Battery voltage threshold with the minimum voltage](../assets/img/fkl-central/fc-thr-battery.png){ loading=lazy }

3. Check **Axle run-out tolerance** as well.

    ![Axle run-out tolerance with the maximum run-out](../assets/img/fkl-central/fc-thr-axle.png){ loading=lazy }

4. Tap **Save**.

    ![The Save button on the Servicing tab](../assets/img/fkl-central/fc-thr-save.png){ loading=lazy }

!!! note "Remember"
    Without admin rights you see **Only admins can change these settings. You can see the current values.**

!!! warning "Watch out"
    A new limit applies to every hub from the next reading. Agree changes with engineering and tell the hubs.
