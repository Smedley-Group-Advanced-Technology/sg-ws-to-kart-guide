// Open kart and the kart page (Cadet 207, Junior 304, Bambino 106) as Alex Mechanic. Read only.
import { kartId } from '../lib/config.mjs';

export default {
  shots: ['mech-kart-number', 'mech-kart-scan', 'mech-kart-scan-camera', 'mech-kart-page', 'mech-kart-top', 'mech-kart-current',
    'mech-kart-history', 'mech-kart-components', 'mech-kart-qr', 'mech-resume-kartpage', 'mech-repair-start'],
  reset: false,
  async run({ open }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet' });
    await s.goto('/workshop');
    await s.mustReload('text=Event readiness', 60000);
    await s.tap('role=button[name="Open kart"]');
    const dlg = s.dialog;
    await s.shot('mech-kart-scan', { at: { 1: dlg.getByRole('button', { name: 'Scan QR code' }), 2: dlg.getByText('Scan a photo') } });
    await s.type(dlg.getByLabel('Kart number'), '207');
    await s.shot('mech-kart-number', { at: { 1: dlg.getByLabel('Kart number'), 2: dlg.getByRole('button', { name: 'Scan QR code' }) } });
    await s.tap(dlg.getByRole('button', { name: 'Scan QR code' }));
    await s.wait(2500);
    await s.shot('mech-kart-scan-camera', { at: { 1: dlg.locator('video') } });
    await s.tap(dlg.getByRole('button', { name: 'Stop camera' })).catch(() => {});
    await s.tap(dlg.getByRole('button', { name: 'Open', exact: true }));
    await s.page.waitForURL(/\/workshop\/kart\//);
    await s.settle(1000);
    await s.shot('mech-kart-page', { scroll: false, at: { 1: s.page.getByText('Unavailable', { exact: true }).first(),
      2: s.page.getByText(/^Open repairs$/i).first(), 3: s.page.getByText(/^Open tickets$/i).first() } });
    await s.shot('mech-kart-top', { scroll: false, at: { 1: s.page.getByText('Last status change', { exact: true }), 2: s.page.getByText('Changed by', { exact: true }) } });
    await s.shot('mech-kart-current', { at: { 1: s.page.getByText('Current work', { exact: true }) }, block: 'start' });
    await s.tap('role=tab[name="History"]');
    await s.scrollTo(s.page.getByText(/^Status history/), { block: 'start' });
    await s.shot('mech-kart-history', { scroll: false, at: { 1: s.page.getByText(/^Status history/), 2: s.page.getByText(/^Repair history/) } });
    await s.tap('role=tab[name="Components"]');
    await s.settle(600);
    await s.scrollTo('role=tab[name="Components"]', { block: 'start' });
    await s.shot('mech-kart-components', { scroll: false, at: { 1: 'role=tab[name="Components"]' }, place: { 1: 'above' } });
    await s.tap('role=tab[name="QR code"]');
    await s.settle(600);
    await s.scrollTo('role=tab[name="QR code"]', { block: 'start' });
    await s.shot('mech-kart-qr', { scroll: false, at: { 1: 'role=tab[name="QR code"]' }, place: { 1: 'right' } });

    await s.goto(`/workshop/kart/${kartId(304)}`);
    await s.shot('mech-resume-kartpage', { at: { 1: s.page.getByRole('button', { name: /Resume service/ }), 2: s.page.getByText('Pause reason', { exact: true }) }, place: { 2: 'right' } });
    await s.goto(`/workshop/kart/${kartId(106)}`);
    await s.shot('mech-repair-start', { block: 'start', at: { 1: s.page.getByText('Current work', { exact: true }), 2: s.page.getByRole('button', { name: /Start repair/ }) } });
    await s.close();
  },
};
