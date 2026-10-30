// Clip: signing in and opening the Workshop for Demo Hub in a new tab.
import { PERSONAS, demoPassword } from '../lib/config.mjs';

export default {
  shots: ['start-sign-in-clip'],
  reset: false,
  async run({ open, clip }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', signIn: false, record: true });
    await s.goto('/auth');
    await s.wait(800);
    s.cue();                                                    // Open KART in your browser.
    await s.wait(2600);
    s.cue();                                                    // Type your e-mail address.
    await s.type('label=Email', PERSONAS['Alex Mechanic'].email);
    await s.wait(900);
    s.cue();                                                    // Type your password.
    await s.type('label=Password', demoPassword());
    await s.wait(1200);
    s.cue();                                                    // Tap Sign In.
    await s.tap('role=button[name="Sign In"]', { pause: 300 });
    await s.skip(async () => { await s.page.waitForURL(/hub-selection/); await s.settle(300); });
    await s.wait(1200);
    s.cue();                                                    // KART opens on Select your Hub.
    await s.wait(2600);
    s.cue();                                                    // Choose your hub.
    await s.tap('css=button[role=combobox]');
    await s.tap(s.page.getByRole('option', { name: 'Demo Hub', exact: true }));
    await s.wait(1200);
    s.cue();                                                    // Tap Workshop. It opens in a new tab.
    await s.hover('h3:text-is("Workshop")');
    await s.skip(async () => {
      await s.followNewTab(() => s.tap('h3:text-is("Workshop")', { pause: 0 }), /\/workshop/);
      await s.page.getByText('Event readiness').first().waitFor({ timeout: 60000 });
      await s.settle(500);
    });
    await s.moveCursor(110, 180);
    await s.wait(3500);
    const r = await s.close();
    clip('start-sign-in-clip', r, { poster: 6 });
  },
};
