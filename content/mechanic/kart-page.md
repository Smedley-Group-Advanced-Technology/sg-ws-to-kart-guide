# The kart page

:::defaults
persona: Alex Mechanic
device: tablet
url: /workshop
state: "Demo Hub fleet as seeded; Cadet 207 with its stopping ticket and repair; history from earlier demo services"
:::

Every kart has its own page. It shows the kart's status, what is open on it, and its full history. Open it by typing the kart number or by scanning the QR code on the kart.

!!! info "What changed from the Workshop App"
    - The Workshop App's kart page is now the KART kart page. Open it with **Open kart** on Overview.
    - You can scan the kart's QR code with **Scan QR code**, or take a photo with **Scan a photo**.
    - The kart page has a **QR code** tab to print a new label.

## Open a kart

:::clip mech-openkart-clip
caption: opening Cadet 207 with Open kart and looking at its history
duration: 45
steps:
  - Tap Open kart on Overview
  - Type 207 in Kart number and tap Open
  - Show the badges, Current work and the counts
  - Open the History tab and scroll through Status history and Repair history
  - Open the QR code tab
captions:
  - "Tap Open kart."
  - "Type the kart number and tap Open."
  - "The top shows status and open work."
  - "History shows everything done to the kart."
  - "The QR code tab prints a label."
:::

1. On **Overview**, tap **Open kart**.

    :::shot mech-kart-open
    caption: The Open kart button on Overview
    steps:
      - Open Overview
    callouts:
      - [1, "text=Open kart", "Find a kart fast"]
    :::

2. Type the number in **Kart number**, for example **207**.

    :::shot mech-kart-number
    caption: The Open kart dialog with 207 typed in Kart number
    steps:
      - Tap Open kart
      - Type 207 in Kart number
    callouts:
      - [1, "label=Kart number", "Class number, such as 207"]
      - [2, "text=Scan QR code", "Or scan the label"]
    :::

3. Tap **Open**. The kart page opens.

    :::shot mech-kart-page
    caption: The kart page of Cadet 207 with its badges and counts
    url: "/workshop/kart/{kart:207}"
    steps:
      - Tap Open
    callouts:
      - [1, "text=Unavailable", "Not offered for allocation"]
      - [2, "text=Open repairs", "Repairs still open"]
      - [3, "text=Open tickets", "The stopping ticket"]
    :::

!!! note "Remember"
    Only karts of your selected hub open. A Cadet with number 7 shows as **207**: Bambino numbers start at 100, Cadet at 200, Junior at 300.

## Scan the QR code

1. Tap **Open kart**, then **Scan QR code**. Allow the camera if the browser asks.

    :::shot mech-kart-scan
    caption: Scan QR code in the Open kart dialog
    steps:
      - Tap Open kart
    callouts:
      - [1, "text=Scan QR code", "Use the camera"]
      - [2, "text=Scan a photo", "Or pick a photo of the label"]
    :::

2. Hold the camera over the label on the kart. The kart page opens by itself.

    :::shot mech-kart-scan-camera
    caption: The camera view while scanning a kart label
    steps:
      - "Tap Scan QR code (recorder: use a printed demo label for 207 or a still frame)"
    callouts:
      - [1, "css=video", "Point at the label"]
    :::

## What the kart page shows

1. At the top: **Available** or **Unavailable**, **Preferred**, and who made the **Last status change**.

    :::shot mech-kart-top
    caption: The top of the 207 kart page with Last status change and Changed by
    url: "/workshop/kart/{kart:207}"
    steps:
      - Look at the top of the page
    callouts:
      - [1, "text=Last status change", "When and who"]
      - [2, "text=Changed by", "Initials"]
    :::

2. Under **Current work**: open repairs, the running service and the buttons **Start service**, **Resume service** or **Continue service**.

    :::shot mech-kart-current
    caption: Current work on the 207 kart page
    url: "/workshop/kart/{kart:207}"
    steps:
      - Scroll to Current work
    callouts:
      - [1, "text=Current work", "What is open now"]
    :::

3. Tap the **History** tab for **Status history**, **Service history**, **Repair history**, **Ticket history**, **Campaign history**, **Pause log**, **Chassis reassignments** and **Used history**.

    :::shot mech-kart-history
    caption: The History tab of 207 with its sections
    url: "/workshop/kart/{kart:207}"
    steps:
      - Tap History
    callouts:
      - [1, "text=Status history", "Every status change"]
      - [2, "text=Repair history", "Past repairs"]
    :::

4. Tap **Components** to see what is fitted, or **Alignment** for alignment records.

    :::shot mech-kart-components
    caption: The Components tab on the kart page
    url: "/workshop/kart/{kart:207}"
    steps:
      - Tap Components
    callouts:
      - [1, "text=Components", "Fitted components"]
    :::

5. Tap **QR code** to print a new label for the kart.

    :::shot mech-kart-qr
    caption: The QR code tab with the label to print
    url: "/workshop/kart/{kart:207}"
    steps:
      - Tap QR code
    callouts:
      - [1, "text=QR code", "Print a label"]
    :::

!!! tip "Tip"
    **Report a kart problem** is on the kart page too, with this kart already chosen.

!!! abstract "Coming with your hub's switch-over"
    The old Workshop App QR labels still point to the Workshop App. Reprinting labels and redirecting old QR links is part of the switch-over plan. Until your hub lead says otherwise, open karts with **Open kart** and the number.
