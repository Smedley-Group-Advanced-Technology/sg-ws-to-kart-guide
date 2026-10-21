// Print each quick reference card (tools/cards/<name>.html, from make_cards.py) to docs/cards/<name>.pdf: A4, one page.
// Usage: node tools/print_cards.mjs   (playwright-core from the guide stack's tools-node; only local files are loaded)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(path.join(process.env.FKL_TOOLS_NODE || '/home/arch/Work/guide-stack/tools-node', 'package.json'));
const { chromium } = require('playwright-core');
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const names = ['mechanic-card', 'hub-manager-card', 'fkl-central-card', 'remote-support-card', 'switch-over-day-card'];
const browser = await chromium.launch({ headless: true });
try {
  const ctx = await browser.newContext({ viewport: { width: 794, height: 1123 } });
  // only local files
  await ctx.route('**/*', (r) => (r.request().url().startsWith('file://') || r.request().url().startsWith('data:') ? r.continue() : r.abort()));
  const page = await ctx.newPage();
  for (const n of names) {
    await page.goto(`file://${REPO}/tools/cards/${n}.html`);
    await page.waitForLoadState('load');
    const m = await page.evaluate(() => {
      const main = document.querySelector('main'), foot = document.querySelector('footer');
      const over = [...document.querySelectorAll('main section')].map((s) => s.getBoundingClientRect().bottom);
      const img = document.querySelector('header img');
      return { bodyH: document.body.scrollHeight, sectionsBottom: Math.max(...over), footerTop: foot.getBoundingClientRect().top,
        imgOk: img.complete && img.naturalWidth > 0 };
    });
    console.log(n, JSON.stringify(m));
    await page.pdf({ path: `${REPO}/docs/cards/${n}.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });

  }
  // every card must be exactly one page
  for (const n of names) {
    const buf = fs.readFileSync(`${REPO}/docs/cards/${n}.pdf`).toString('latin1');
    console.log(n, 'pages:', (buf.match(/\/Type\s*\/Page[^s]/g) || []).length, 'bytes:', buf.length);
  }
} finally { await browser.close(); }
