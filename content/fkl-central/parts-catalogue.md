# Parts catalogue

:::defaults
persona: Taylor Central
device: desktop
url: /fkl-central?tab=bom
state: "Master parts include FKL-900001 to FKL-900006 (brake pads, rear tyres, sprockets, front bumpers, tie rods, caliper seal kit); default catalogue FKL Master"
:::

The FKL Central parts catalogue is the single master list of parts. Every part has an FKL part number and a manufacturer part number (MPN). Catalogues decide which parts each hub sees.

!!! info "What changed from the Workshop App"
    - One master list for all hubs, with FKL part numbers and a supplier list per part.
    - Workshop App parts were already moved: new parts were added and others matched to existing parts by MPN.
    - Catalogues can be tied to an exact kart generation, for example Gen3.1.

## Master parts

1. Open **FKL Central** and tap **Parts catalogue**. You land on **Master parts**.

    :::shot fc-parts-master
    caption: Master parts with the search box and Add part
    steps:
      - Tap Parts catalogue
    callouts:
      - [1, "text=Master parts", "The master list"]
      - [2, "text=Add part", "New part"]
    :::

2. Search by name, FKL number or MPN, for example "FKL-900004".

    :::shot fc-parts-search
    caption: Searching master parts for FKL-900004
    steps:
      - Type FKL-900004 in the search box
    callouts:
      - [1, "css=input[placeholder='Search name, FKL number or MPN']", "Search"]
    :::

3. Tap **Edit part** to change a part, or **Suppliers** to manage its supplier list.

    :::shot fc-parts-edit
    caption: Edit part and Suppliers on the front bumper row
    steps:
      - Find the front bumper row
    callouts:
      - [1, "text=Edit part", "Change details"]
      - [2, "text=Suppliers", "Supplier list"]
    :::

4. To add a part, tap **Add part**. An MPN is required.

    :::shot fc-parts-add
    caption: The Add part form
    steps:
      - Tap Add part
    callouts:
      - [1, "text=Manufacturer part no.", "Required"]
    :::

!!! tip "Tip"
    **Import / export by MPN** and **Import BOM** handle many parts at once.

## Catalogues and generations

1. Tap **Catalogues**. Each catalogue is a set of parts. The default is FKL Master.

    :::shot fc-cat-list
    caption: The Catalogues tab with FKL Master
    steps:
      - Tap Catalogues
    callouts:
      - [1, "text=Catalogues", "Sets of parts"]
    :::

2. Open a catalogue and set its **Kart generation** to make it a generation catalogue.

    :::shot fc-cat-generation
    caption: Kart generation on a catalogue
    steps:
      - Open a catalogue
    callouts:
      - [1, "text=Kart generation", "One exact generation"]
    :::

3. Tap **Hub catalogues** to see which catalogue each hub works from.

    :::shot fc-cat-hubs
    caption: Hub catalogues showing the catalogue in use per hub
    steps:
      - Tap Hub catalogues
    callouts:
      - [1, "text=Hub catalogues", "Per hub"]
    :::

!!! note "Remember"
    A generation catalogue is exact: Gen3.1 does not include Gen3.0 or Gen3.2. A hub whose karts are all of generations with such a catalogue works from those catalogues; other hubs keep their current list.

!!! abstract "Coming soon"
    FKL Central will set UK and US default suppliers through the supplier list in the part form and the BoM import.
