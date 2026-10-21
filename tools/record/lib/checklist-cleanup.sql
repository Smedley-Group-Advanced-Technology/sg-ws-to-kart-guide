-- Put the Cadet service checklist back to the seeded v1 (the FKL Central flows make and publish a v2).
-- Checklist versions are global rows that the demo reset keeps, so the flows must undo their changes.
-- Triggers are off for the transaction (published versions are protected), so children are deleted explicitly.
BEGIN;
SET LOCAL session_replication_role = replica;
CREATE TEMP TABLE v ON COMMIT DROP AS SELECT id FROM public.workshop_checklist_versions
 WHERE checklist_kind = 'service' AND kart_class = 'Cadet' AND version_number > 1;
CREATE TEMP TABLE i ON COMMIT DROP AS SELECT it.id FROM public.workshop_checklist_items it
  JOIN public.workshop_checklist_sections s ON s.id = it.section_id WHERE s.version_id IN (SELECT id FROM v);
DELETE FROM public.workshop_checklist_responses WHERE item_id IN (SELECT id FROM i);
DELETE FROM public.workshop_checklist_readings WHERE item_id IN (SELECT id FROM i);
DELETE FROM public.workshop_checklist_item_inputs WHERE item_id IN (SELECT id FROM i);
UPDATE public.workshop_repairs SET checklist_item_id = NULL WHERE checklist_item_id IN (SELECT id FROM i);
DELETE FROM public.workshop_checklist_items WHERE id IN (SELECT id FROM i);
DELETE FROM public.workshop_checklist_sections WHERE version_id IN (SELECT id FROM v);
UPDATE public.workshop_turn_cycles SET checklist_version_id = NULL WHERE checklist_version_id IN (SELECT id FROM v);
DELETE FROM public.workshop_checklist_versions WHERE id IN (SELECT id FROM v);
UPDATE public.workshop_checklist_versions
   SET status = 'published', retired_at = NULL, retired_by = NULL, retired_reason = NULL
 WHERE checklist_kind = 'service' AND kart_class = 'Cadet' AND version_number = 1;
COMMIT;
