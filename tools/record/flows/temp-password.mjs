// First sign-in with a temporary password (seed variant: Jamie made with Create user) and setting a new password.
import { randomBytes } from 'node:crypto';
import { PERSONAS, demoPassword } from '../lib/config.mjs';

export default {
  shots: ['start-temp-signin', 'start-set-password', 'start-confirm-password', 'start-password-updated'],
  reset: ['jamie_temp'],
  async run({ open }) {
    const s = await open({ persona: 'Jamie Newstarter', device: 'tablet', signIn: false });
    await s.goto('/auth');
    await s.type('#email', PERSONAS['Jamie Newstarter'].email);
    await s.type('#password', demoPassword());   // the temporary password of the demo account
    await s.shot('start-temp-signin', { scroll: false, at: { 1: s.page.getByRole('button', { name: 'Sign In' }).last() } });
    await s.tap(s.page.getByRole('button', { name: 'Sign In' }).last());
    await s.page.waitForURL(/change-password/, { timeout: 60000 });
    await s.must(s.page.getByLabel('New Password'), { timeout: 45000 });
    await s.settle(600);
    const pw = 'Demo' + randomBytes(8).toString('hex');   // throw-away, never stored; the next reset restores the demo world
    await s.type(s.page.getByLabel('New Password'), pw);
    await s.shot('start-set-password', { scroll: false, at: { 1: s.page.getByText('Set your password').first(), 2: s.page.getByLabel('New Password') } });
    await s.type(s.page.getByLabel('Confirm Password'), pw);
    await s.shot('start-confirm-password', { scroll: false, at: { 1: s.page.getByLabel('Confirm Password') } });
    await s.tap(s.page.getByRole('button', { name: 'Save password' }));
    const tp = await s.toast('Password updated');
    await s.shot('start-password-updated', { scroll: false, wait: 200, at: { 1: tp } });
    await s.close();
  },
};
