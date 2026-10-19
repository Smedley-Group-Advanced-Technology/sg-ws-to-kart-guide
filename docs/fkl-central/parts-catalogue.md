# Parts catalogue


The FKL Central parts catalogue is the single master list of parts. Every part has an FKL part number and a manufacturer part number (MPN). Catalogues decide which parts each hub sees.

!!! info "What changed from the Workshop App"
    - One master list for all hubs, with FKL part numbers and a supplier list per part.
    - Workshop App parts were already moved: new parts were added and others matched to existing parts by MPN.
    - Catalogues can be tied to an exact kart generation, for example Gen3.1.

## Master parts

1. Open **FKL Central** and tap **Parts catalogue**. You land on **Master parts**.

    ![Master parts with the search box and Add part](../assets/img/fkl-central/fc-parts-master.png){ loading=lazy }

2. Search by name, FKL number or MPN, for example "FKL-900004".

    ![Searching master parts for FKL-900004](../assets/img/fkl-central/fc-parts-search.png){ loading=lazy }

3. Tap **Edit part** to change a part, or **Suppliers** to manage its supplier list.

    ![Edit part and Suppliers on the front bumper row](../assets/img/fkl-central/fc-parts-edit.png){ loading=lazy }

4. To add a part, tap **Add part**. An MPN is required.

    ![The Add part form](../assets/img/fkl-central/fc-parts-add.png){ loading=lazy }

!!! tip "Tip"
    **Import / export by MPN** and **Import BOM** handle many parts at once.

## Catalogues and generations

1. Tap **Catalogues**. Each catalogue is a set of parts. The default is FKL Master.

    ![The Catalogues tab with FKL Master](../assets/img/fkl-central/fc-cat-list.png){ loading=lazy }

2. Open a catalogue and set its **Kart generation** to make it a generation catalogue.

    ![Kart generation on a catalogue](../assets/img/fkl-central/fc-cat-generation.png){ loading=lazy }

3. Tap **Hub catalogues** to see which catalogue each hub works from.

    ![Hub catalogues showing the catalogue in use per hub](../assets/img/fkl-central/fc-cat-hubs.png){ loading=lazy }

!!! note "Remember"
    A generation catalogue is exact: Gen3.1 does not include Gen3.0 or Gen3.2. A hub whose karts are all of generations with such a catalogue works from those catalogues; other hubs keep their current list.

!!! abstract "Coming soon"
    FKL Central will set UK and US default suppliers through the supplier list in the part form and the BoM import.
