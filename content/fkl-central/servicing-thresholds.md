# Servicing thresholds

:::defaults
persona: Taylor Central
device: desktop
url: /fkl-central?tab=servicing
state: "Default thresholds: tyre tread 2.0 mm, toe -1 to 1, camber -2 to 0, battery 40 V, axle run-out 0.3 mm"
:::

**FKL Central > Servicing** holds the limits KART uses when mechanics type readings: minimum tyre tread, front spindle alignment, minimum battery voltage and maximum axle run-out. A reading outside the limit is flagged.

!!! info "What changed from the Workshop App"
    - The limits are global and set in one place by FKL Central admins.
    - Alignment specs are set per kart class, with an optional hub override and an explicit unit (degrees or mm). Out-of-spec readings show "action required".
    - Everyone else can see the values but not change them.

## Change a threshold

1. Open **FKL Central** and tap **Servicing**.

    :::shot fc-thr-tab
    caption: The Servicing tab with the thresholds
    steps:
      - Tap Servicing
    callouts:
      - [1, "text=Tyre tread threshold", "Minimum tread depth"]
      - [2, "text=Front spindle alignment limits", "Toe and camber"]
    :::

2. Change the value, for example **Battery voltage threshold**.

    :::shot fc-thr-battery
    caption: Battery voltage threshold with the minimum voltage
    steps:
      - Scroll to Battery voltage threshold
    callouts:
      - [1, "text=Battery voltage threshold", "Minimum battery voltage (V)"]
    :::

3. Check **Axle run-out tolerance** as well.

    :::shot fc-thr-axle
    caption: Axle run-out tolerance with the maximum run-out
    steps:
      - Scroll to Axle run-out tolerance
    callouts:
      - [1, "text=Axle run-out tolerance", "Maximum axle run-out (mm)"]
    :::

4. Tap **Save**.

    :::shot fc-thr-save
    caption: The Save button on the Servicing tab
    steps:
      - Tap Save
    callouts:
      - [1, "text=Save", "Save the limits"]
    :::

!!! note "Remember"
    Without admin rights you see **Only admins can change these settings. You can see the current values.**

!!! warning "Watch out"
    A new limit applies to every hub from the next reading. Agree changes with engineering and tell the hubs.
