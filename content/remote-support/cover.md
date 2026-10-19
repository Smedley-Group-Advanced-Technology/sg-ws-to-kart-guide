# Support cover

:::defaults
persona: Riley Support
device: desktop
url: /rs-dash
state: "Session event Demo Practice Day today at Demo Hub; Riley Support set as support cover"
:::

Support cover says who answers a hub's support chats on a given day. You set it per event in **Remote Support**. KART Comms then routes the hub's messages to that person and shows them as **On cover**.

!!! info "What changed from the Workshop App"
    - Cover is set per event on the Remote Support dashboard.
    - Only people with the **Remote support** permission can be chosen. Anyone else is not offered.
    - **On cover** in KART Comms refreshes by itself.

## Set cover for an event

:::clip rs-cover-clip
caption: setting support cover for Demo Practice Day
duration: 35
steps:
  - On Select your Hub tap Remote Support
  - On Hub Dashboard find Demo Hub and Demo Practice Day
  - Open Support cover and choose Riley Support
  - Show Support cover updated and the On cover header in /comms
captions:
  - "Open Remote Support."
  - "Find the hub and today's event."
  - "Choose who covers it."
  - "Comms now shows them on cover."
:::

1. On **Select your Hub**, tap **Remote Support**.

    :::shot rs-cover-button
    caption: The Remote Support button on Select your Hub
    url: /hub-selection
    steps:
      - Sign in as Riley Support
    callouts:
      - [1, "text=Remote Support", "Remote Support Dashboard"]
    :::

2. On **Hub Dashboard**, find the hub and the event, for example Demo Hub, **Demo Practice Day**.

    :::shot rs-cover-event
    caption: The Demo Hub tile with Demo Practice Day
    steps:
      - Open Hub Dashboard
    callouts:
      - [1, "text=Hub Dashboard", "All hubs"]
      - [2, "text=Demo Practice Day", "Today's event"]
    :::

3. Open **Support cover** and choose the person, for example Riley Support.

    :::shot rs-cover-select
    caption: The Support cover list with Riley Support
    steps:
      - Open Support cover on Demo Practice Day
    callouts:
      - [1, "text=Support cover", "Who covers"]
    :::

4. KART says **Support cover updated**. Choose **No support assigned** to clear it.

    :::shot rs-cover-saved
    caption: Support cover updated message
    steps:
      - Choose Riley Support
    callouts:
      - [1, "text=Support cover updated", "Saved"]
    :::

!!! warning "Watch out"
    If nobody covers a hub, its chats show as **Unassigned** and every remote support person is alerted. Set cover before the event starts.
