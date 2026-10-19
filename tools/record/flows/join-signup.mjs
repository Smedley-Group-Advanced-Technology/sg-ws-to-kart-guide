// Signing up from a Demo Hub join link as Jamie Newstarter, waiting for approval, and the approved screen
// (seed variant without Jamie; the approval is done in the database as Morgan Manager would do it).
import { randomBytes } from 'node:crypto';
import { HUB, PERSONAS } from '../lib/config.mjs';
import { asPersona, sqlValue } from '../lib/db.mjs';

export default {
  shots: ['start-join-link', 'start-signup-name', 'start-signup-initials', 'start-signup-email', 'start-signup-done',
    'start-pending', 'start-pending-request', 'start-approved'],
  reset: ['no_jamie'],
  async run({ open }) {
    const s = await open({ persona: 'Jamie Newstarter', device: 'tablet', signIn: false });
    await s.goto('/auth?join=DE0DE0000001');
    await s.mustReload(s.page.getByText(/^You are joining/), 60000);
    await s.settle(600);
    await s.shot('start-join-link', { scroll: false, at: { 1: s.page.getByText(/^You are joining/) } });
    await s.type('#signup-name', 'Jamie Newstarter');
    await s.shot('start-signup-name', { scroll: false, at: { 1: '#signup-name' } });
    await s.type('#signup-initials', 'JN');
    await s.shot('start-signup-initials', { scroll: false, at: { 1: '#signup-initials' } });
    await s.type('#signup-email', PERSONAS['Jamie Newstarter'].email);
    await s.type('#signup-password', 'Demo' + randomBytes(6).toString('hex'));   // a throw-away password, never stored
    await s.shot('start-signup-email', { scroll: false, at: { 1: '#signup-email', 2: '#signup-password' } });
    await s.tap(s.page.getByRole('button', { name: 'Sign Up' }).last());
    await s.page.waitForURL(/pending/, { timeout: 60000 });
    await s.must(s.page.getByText('Waiting for approval', { exact: true }), { timeout: 45000 });
    await s.settle(600);
    await s.shot('start-signup-done', { scroll: false, at: { 1: s.page.getByText('Waiting for approval', { exact: true }) }, allowToast: true });
    await s.wait(5000);   // let the Account Created message go
    await s.shot('start-pending', { scroll: false, at: { 1: s.page.getByText('Waiting for approval', { exact: true }), 2: s.page.getByText(/This page updates by itself/) } });
    await s.shot('start-pending-request', { scroll: false, at: { 1: s.page.getByText('Join code or link', { exact: true }),
      2: s.page.getByText('Or choose a hub', { exact: true }), 3: s.page.getByRole('button', { name: 'Send request' }) }, optional: [1, 2, 3] });
    // Morgan Manager approves the sign-up
    const id = sqlValue(`select id from auth.users where email = '${PERSONAS['Jamie Newstarter'].email}'`);
    // the page normally reloads into Select your Hub by itself; block that once so the approved card stays
    await s.page.evaluate(() => sessionStorage.setItem('fkl-pending-approved-reload', String(Date.now() + 600000)));
    asPersona('Morgan Manager', `select public.approve_signup('${id}', '${HUB}', ARRAY['workshop']);`);
    await s.must(s.page.getByText('Your account has been approved', { exact: true }), { timeout: 90000 });
    await s.shot('start-approved', { scroll: false, at: { 1: s.page.getByText('Your account has been approved', { exact: true }), 2: s.page.getByRole('button', { name: 'Continue' }) } });
    await s.close();
  },
};
