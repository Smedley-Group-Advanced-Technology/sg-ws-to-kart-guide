# Parts catalogue


The FKL Central parts catalogue is the single master list of parts. Every part has an FKL part number and a manufacturer part number (MPN). Catalogues decide which parts each hub sees.

!!! info "What changed from the Workshop App"
    - One master list for all hubs, with FKL part numbers and a supplier list per part.
    - Workshop App parts were already moved: new parts were added and others matched to existing parts by MPN.
    - Catalogues can be tied to an exact kart generation, for example Gen3.1.

## Master parts

![Steps 1 to 4 on one screen: Master parts searched for FKL-900001, with Edit part and Add part](../assets/img/fkl-central/fc-parts-master.png){ loading=lazy }

1. Open **FKL Central** and tap **Parts catalogue**. You land on **Master parts**.

2. Search by name, FKL number or MPN, for example "FKL-900001" (front bumper).

3. Tap the pencil (**Edit part**) to change a part, or the lorry just left of it (**Suppliers**) to manage its supplier list.

4. To add a part, tap **Add part**. The **Manufacturer part no.** is required.

!!! tip "Tip"
    **Import / export by MPN** and **Import BOM** handle many parts at once.

## Catalogues and generations

![Steps 1 and 2 on one screen: the New catalogue form; the Kart generation can be chosen once the catalogue has parts](../assets/img/fkl-central/fc-cat-generation.png){ loading=lazy }

1. Tap **Catalogues**. Each catalogue is a named list of parts. The default is FKL Master. Tap **Open** to see its parts.

2. To make a generation catalogue, tap **New catalogue**, type the **Name** and tap **Save**. Tap **Open** on it and add its parts with **Add part by MPN**. Then tap the pencil (**Edit catalogue**), choose the **Kart generation** and tap **Save**. A catalogue needs parts before it can get a generation. The default catalogue, FKL Master, lists every part, so it cannot be a generation catalogue.

3. Tap **Hub catalogues** to see which catalogue each hub works from. Tap **Open** on a hub to see why, or to pin a catalogue.

    ![Step 3: Hub catalogues showing the catalogue in use per hub](../assets/img/fkl-central/fc-cat-hubs.png){ loading=lazy }

!!! note "Remember"
    A generation catalogue is exact: Gen3.1 does not include Gen3.0 or Gen3.2. A hub whose karts are all of generations with such a catalogue works from those catalogues; other hubs keep their current list.

!!! abstract "Coming soon"
    FKL Central will set UK and US default suppliers through the supplier list in the part form and the BoM import.
