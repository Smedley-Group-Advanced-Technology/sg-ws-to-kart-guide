// The sign-in card on tablet and phone, signing in as Alex Mechanic (screenshots only).
import { PERSONAS, demoPassword } from '../lib/config.mjs';

export default {
  shots: ['start-signin-page', 'start-signin-email', 'start-signin-password', 'start-signin-success', 'so-before-signin', 'start-signin-phone'],
  reset: false,
  async run({ open }) {
    const p = await open({ persona: 'Alex Mechanic', device: 'phone', signIn: false });
    await p.goto('/auth');
    await p.shot('start-signin-phone', { at: { 1: 'role=button[name="Sign In"]' } });
    await p.close();

    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', signIn: false });
    await s.goto('/auth');
    await s.shot('start-signin-page', { at: { 1: 'text=FKL KART' } });
    await s.type('label=Email', PERSONAS['Alex Mechanic'].email);
    await s.shot('start-signin-email');
    await s.type('label=Password', demoPassword());
    await s.shot('start-signin-password');
    await s.shot('so-before-signin', { at: { 1: 'role=button[name="Sign In"]' } });
    await s.tap('role=button[name="Sign In"]', { pause: 300 });
    await s.page.waitForURL(/hub-selection/);
    await s.page.getByText('Successfully signed in!').first().waitFor();
    await s.settle(300);
    await s.shot('start-signin-success', { scroll: false });
    await s.close();
  },
};
