// A recording session: one persona, one device, one browser context (with video when recording).
// Gives flows slow, visible actions (moving tap indicator, typed text, pauses), caption cues with real
// timestamps, and annotated screenshots taken from the same run.
import fs from 'node:fs';
import path from 'node:path';
import { BASE, ALLOWED_ORIGINS, DEVICES, PERSONAS, DEMO_EMAIL_DOMAIN, RAW, HUB, demoPassword } from './config.mjs';
import { getShot, outputPath } from './shots.mjs';
import { annotate } from './annotate.mjs';
import { foreignPeople } from './db.mjs';

const NO_HUB_PATHS = ['/auth', '/hub-selection', '/pending', '/change-password', '/reset-password', '/comms'];

// Injected into every page: the tap indicator, and CSS that keeps dev-only overlays out of frame.
const INIT_SCRIPT = `(() => {
  if (window.__rec) return; window.__rec = true;
  const add = () => {
    if (document.getElementById('rec-cursor')) return;
    const st = document.createElement('style');
    st.id = 'rec-style';
    st.textContent = '#rec-cursor{position:fixed;left:0;top:0;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:50%;' +
      'background:rgba(0,0,255,.30);border:3px solid #fff;box-shadow:0 0 0 2px #0000FF,0 3px 8px rgba(0,0,0,.45);' +
      'z-index:2147483647;pointer-events:none;will-change:transform}' +
      '#rec-cursor.hidden{display:none}' +
      '#rec-cursor .ring{position:absolute;inset:-3px;border-radius:50%;border:3px solid #0000FF;opacity:0}' +
      '#rec-cursor.pulse .ring{animation:recpulse .6s ease-out}' +
      '#rec-cursor.pulse{background:rgba(0,0,255,.6)}' +
      '@keyframes recpulse{0%{transform:scale(1);opacity:.9}100%{transform:scale(2.6);opacity:0}}' +
      'vite-error-overlay{display:none!important}';
    document.documentElement.appendChild(st);
    const c = document.createElement('div');
    c.id = 'rec-cursor';
    c.innerHTML = '<div class="ring"></div>';
    if (!window.__recShowCursor) c.classList.add('hidden');
    let pos = null;
    try { pos = JSON.parse(sessionStorage.getItem('rec-cursor') || 'null'); } catch (e) {}
    pos = pos || { x: innerWidth * 0.55, y: innerHeight * 0.55 };
    c.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)';
    document.documentElement.appendChild(c);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
  const watch = () => new MutationObserver(() => { if (!document.getElementById('rec-cursor') && document.body) add(); })
    .observe(document.documentElement, { childList: true });
  if (document.documentElement) watch(); else document.addEventListener('DOMContentLoaded', watch);
})();`;

let foreignCache;

export class Session {
  static async open(browser, { persona, device = 'tablet', record = false, name, signIn = true, log = console.log, storageState }) {
    const s = new Session();
    s.browser = browser; s.persona = persona; s.device = device; s.record = record; s.name = name; s.log = log;
    s.dev = DEVICES[device];
    if (!s.dev) throw new Error(`unknown device ${device}`);
    s.blocked = []; s.errors = []; s.cues = []; s.marks = {}; s.pages = []; s.cuts = [];
    s.T = Date.now();
    s.rawDir = path.join(RAW, name);
    fs.mkdirSync(s.rawDir, { recursive: true });
    const state = storageState !== undefined ? storageState : (signIn ? await signInState(browser, persona, device, log) : undefined);
    s.context = await browser.newContext({
      viewport: s.dev.viewport, isMobile: s.dev.isMobile, hasTouch: s.dev.hasTouch, deviceScaleFactor: 1,
      timezoneId: 'Europe/London', locale: 'en-GB', colorScheme: 'light',
      storageState: state,
      recordVideo: record ? { dir: path.join(s.rawDir, 'video'), size: s.dev.viewport } : undefined,
    });
    await s.context.grantPermissions(['camera'], { origin: BASE }).catch(() => {});
    await guardContext(s.context, s.blocked, s.errors, log);
    if (record) await s.context.addInitScript('window.__recShowCursor = true;');
    await s.context.addInitScript(INIT_SCRIPT);
    s.context.setDefaultTimeout(60000);
    s.context.setDefaultNavigationTimeout(90000);
    s.context.on('page', (p) => s._track(p));
    s.page = await s.context.newPage();
    return s;
  }

  _track(p) {
    if (this.pages.find((x) => x.page === p)) return;
    this.pages.push({ page: p, t0: this.now(), active: [] });
  }
  now() { return Date.now() - this.T; }
  pace(ms) { return this.record ? ms : Math.min(ms, 250); }
  async wait(ms) { await this.page.waitForTimeout(ms); }
  async beat() { await this.page.waitForTimeout(this.pace(1200)); }

  // Activate a page for the video timeline (the clip follows whichever tab the viewer would look at).
  activate(p) {
    this._track(p);
    const now = this.now();
    for (const x of this.pages) if (x.active.length && x.active.at(-1)[1] === null) x.active.at(-1)[1] = now;
    this.pages.find((x) => x.page === p).active.push([now, null]);
    this.page = p;
  }

  url(p) {
    const u = new URL(p, BASE);
    if (!NO_HUB_PATHS.includes(u.pathname) && !u.searchParams.has('hubId')) u.searchParams.set('hubId', HUB);
    return u.toString();
  }

  async goto(p, { settle = true } = {}) {
    if (!this.pages.find((x) => x.page === this.page)?.active.length) this.activate(this.page);
    await this.page.goto(this.url(p), { waitUntil: 'commit', timeout: 90000 });
    await this.page.waitForLoadState('domcontentloaded', { timeout: 90000 }).catch(() => {});
    if (settle) await this.settle();
  }

  // Wait until the page is quiet: network idle (best effort), no spinners or skeletons.
  async settle(extra = 600) {
    await this.page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
    await this.page.waitForFunction(() => {
      const busy = [...document.querySelectorAll('.animate-spin, .animate-pulse')].filter((e) => {
        const r = e.getBoundingClientRect();
        return r.width * r.height > 0 && (e.classList.contains('animate-spin') || (r.width > 40 && r.height > 8));
      });
      const loading = [...document.querySelectorAll('body *')].some((e) => e.childElementCount === 0 && e.getClientRects().length
        && /^(Loading|Checking)\b.*(\.\.\.|…)?$/.test((e.textContent || '').trim()) && (e.textContent || '').length < 60);
      return busy.length === 0 && !loading;
    }, null, { timeout: 15000 }).catch(() => this.log('  settle: page still busy after 15 s'));
    await this.page.waitForTimeout(extra);
  }

  // Locator from a shot-list style target: text=, role=, label=, css=, or a Playwright locator.
  loc(target) {
    if (typeof target !== 'string') return target;
    if (target.startsWith('label=')) return this.page.getByLabel(target.slice(6));
    if (target.startsWith('placeholder=')) return this.page.getByPlaceholder(target.slice(12));
    return this.page.locator(target);
  }

  // A toast (sonner or Radix) with this text; hovering it pauses its timer so it stays for the screenshot.
  async toast(text) {
    const t = this.page.locator('[data-sonner-toast], ol > li, [role=status]').filter({ hasText: text });
    await t.first().waitFor({ timeout: 45000 }).catch(async (e) => {
      const f = path.join(this.rawDir, `toast-fail-${Date.now()}.png`);
      await this.page.screenshot({ path: f }).catch(() => {});
      throw new Error(`${this.name}: no toast "${text}" (see ${f})`);
    });
    const b = await t.first().boundingBox().catch(() => null);
    if (b) await this.page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
    return t.first();
  }
  // Dialog locators by CSS: role queries skip a dialog while a select list is open (Radix sets aria-hidden).
  get dialog() { return this.page.locator('[role=dialog], [role=alertdialog]').last(); }

  // The smallest card (shadcn .bg-card) that contains this exact text, e.g. card('Fleet Status').
  card(title) {
    return this.page.locator('.bg-card').filter({ has: this.page.getByText(title, { exact: true }) }).last();
  }
  // The smallest element containing all these texts (a kart tile: tile('#106', 'Available')).
  tile(...texts) {
    return this.page.locator(['div', ...texts.map((t) => `:has-text("${t}")`)].join('')).last();
  }

  // First visible match, preferring an open dialog and exact text matches.
  async pick(target, { inViewport = false } = {}) {
    const loc = this.loc(target);
    const n = Math.min(await loc.count().catch(() => 0), 60);
    const want = typeof target === 'string' && target.startsWith('text=') ? target.slice(5).replace(/^"|"$/g, '').trim().toLowerCase() : null;
    let best = null, bestScore = -1;
    for (let i = 0; i < n; i++) {
      const el = loc.nth(i);
      if (!(await el.isVisible().catch(() => false))) continue;
      const box = await el.boundingBox().catch(() => null);
      if (!box || box.width < 2 || box.height < 2) continue;
      const info = await el.evaluate((e) => ({
        dialog: !!e.closest('[role=dialog],[role=alertdialog],[role=listbox],[role=menu],[data-radix-popper-content-wrapper]'),
        anyDialog: !!document.querySelector('[role=dialog],[role=alertdialog]'),
        text: (e.innerText || e.value || '').trim().toLowerCase(),
      })).catch(() => ({}));
      const vh = this.dev.viewport.height, vw = this.dev.viewport.width;
      const inView = box.y >= 0 && box.y + box.height <= vh && box.x >= 0 && box.x + box.width <= vw;
      if (inViewport && !inView) continue;
      let score = 0;
      if (info.anyDialog && info.dialog) score += 4;
      if (want && info.text === want) score += 2;
      if (inView) score += 1;
      if (score > bestScore) { best = el; bestScore = score; }
    }
    return best;
  }

  async must(target, opts) {
    const deadline = Date.now() + (opts?.timeout ?? 45000);
    for (;;) {
      const el = await this.pick(target, opts);
      if (el) return el;
      if (Date.now() > deadline) {
        const f = path.join(this.rawDir, `must-fail-${Date.now()}.png`);
        await this.page.screenshot({ path: f }).catch(() => {});
        throw new Error(`${this.name}: nothing visible for ${target} (page ${this.page.url()}, see ${f})`);
      }
      await this.page.waitForTimeout(300);
    }
  }

  // Like must(), but reloads the page once when the target does not show up (stale data after a write).
  async mustReload(target, timeout = 25000) {
    try { return await this.must(target, { timeout }); } catch (e) {
      this.log('  reloading the page once');
      await this.page.reload({ waitUntil: 'commit' });
      await this.settle(600);
      return this.must(target, { timeout: 90000 });
    }
  }

  async showCursor(show) {
    await this.page.evaluate((v) => document.getElementById('rec-cursor')?.classList.toggle('hidden', !v), show).catch(() => {});
  }

  async moveCursor(x, y, ms = 650) {
    if (!this.record) return;
    await this.page.evaluate(({ x, y, ms }) => {
      const c = document.getElementById('rec-cursor');
      if (!c) return;
      c.style.transition = `transform ${ms}ms cubic-bezier(.4,0,.2,1)`;
      c.style.transform = `translate(${x}px,${y}px)`;
      sessionStorage.setItem('rec-cursor', JSON.stringify({ x, y }));
    }, { x, y, ms }).catch(() => {});
    await this.page.waitForTimeout(ms + 120);
  }

  async pulse() {
    if (!this.record) return;
    await this.page.evaluate(() => {
      const c = document.getElementById('rec-cursor');
      if (!c) return;
      c.classList.remove('pulse'); void c.offsetWidth; c.classList.add('pulse');
      setTimeout(() => c.classList.remove('pulse'), 650);
    }).catch(() => {});
  }

  async scrollTo(target, { block = 'center' } = {}) {
    const el = await this.must(target);
    const box = await el.boundingBox();
    const vh = this.dev.viewport.height;
    if (box && box.y >= 70 && box.y + box.height <= vh - 20 && !(block === 'start' && box.y > 160)) return el;
    await el.evaluate((e, b) => {
      // page scroll that keeps the sticky header (about 60 px) clear; scroll containers use scrollIntoView
      let p = e.parentElement, inner = false;
      while (p && p !== document.body) {
        const st = getComputedStyle(p);
        if (/(auto|scroll)/.test(st.overflowY) && p.scrollHeight > p.clientHeight + 4) { inner = true; break; }
        p = p.parentElement;
      }
      if (inner) { e.scrollIntoView({ behavior: 'smooth', block: b }); return; }
      const r = e.getBoundingClientRect();
      const y = b === 'start' ? r.top + scrollY - 76 : r.top + scrollY - Math.max(76, (innerHeight - r.height) / 2);
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }, block);
    await this.page.waitForTimeout(this.pace(1000));
    return el;
  }

  async scrollBy(dy) {
    await this.page.evaluate((d) => window.scrollBy({ top: d, behavior: 'smooth' }), dy);
    await this.page.waitForTimeout(this.pace(1000));
  }

  async hover(target) {
    const el = await this.scrollTo(await this.must(target));
    const b = await el.boundingBox();
    await this.moveCursor(b.x + b.width / 2, b.y + b.height / 2);
    await el.hover({ force: true });
    await this.page.waitForTimeout(this.pace(600));
    return el;
  }

  // Move the indicator to the element, pulse, click, then pause so viewers can follow.
  async tap(target, { pause = 1100, force = false, position, noWait = false } = {}) {
    const el = await this.must(target);
    await this.scrollTo(el);
    const b = await el.boundingBox();
    if (b) {
      const x = b.x + (position ? position.x : b.width / 2), y = b.y + (position ? position.y : b.height / 2);
      await this.moveCursor(x, y);
      await this.pulse();
    }
    await el.click({ force, position, noWaitAfter: noWait });
    await this.page.waitForTimeout(this.pace(pause));
    return el;
  }

  async type(target, text, { clear = true, delay = 70, pause = 800 } = {}) {
    const el = await this.tap(target, { pause: 250 });
    if (clear) await el.fill('');
    await el.focus();
    if (clear) await this.page.keyboard.press('Control+A');   // number inputs keep a 0 after fill('')
    if (this.record) await this.page.keyboard.type(String(text), { delay });
    else await this.page.keyboard.insertText(String(text));
    await this.page.waitForTimeout(this.pace(pause));
    return el;
  }

  // Radix / shadcn select: tap the trigger, then the option.
  async choose(trigger, option, { exact = true } = {}) {
    await this.tap(trigger, { pause: 700 });
    const opt = this.page.getByRole('option', { name: option, exact });
    await opt.first().waitFor({ state: 'visible', timeout: 10000 });
    await this.tap(opt.first());
  }

  // Slow drag with the mouse (dnd-kit and similar), the indicator follows the pointer.
  async drag(from, to, { steps = 25, hold = 400 } = {}) {
    const a = await this.scrollTo(await this.must(from));
    const ba = await a.boundingBox();
    const bEl = await this.must(to);
    const bb = await bEl.boundingBox();
    const ax = ba.x + ba.width / 2, ay = ba.y + ba.height / 2, bx = bb.x + bb.width / 2, by = bb.y + bb.height / 2;
    await this.moveCursor(ax, ay);
    await this.page.mouse.move(ax, ay);
    await this.pulse();
    await this.page.mouse.down();
    await this.page.waitForTimeout(this.pace(hold));
    const n = this.record ? steps : 8;
    for (let i = 1; i <= n; i++) {
      const x = ax + ((bx - ax) * i) / n, y = ay + ((by - ay) * i) / n;
      await this.page.mouse.move(x, y);
      if (this.record) await this.moveCursor(x, y, 30);
    }
    await this.page.waitForTimeout(this.pace(hold));
    await this.page.mouse.up();
    await this.pulse();
    await this.page.waitForTimeout(this.pace(1200));
  }

  // Caption cue: the next caption of the clip starts now (or the given text).
  cue(text) {
    this.cues.push({ t: this.now(), text });
    this.log(`  cue ${this.cues.length} @${(this.now() / 1000).toFixed(1)}s ${text || ''}`);
  }
  mark(name) { this.marks[name] = this.now(); }

  // Run fn and cut the time it takes (page loads, waiting for data) out of the clip.
  async skip(fn) {
    const a = this.now();
    try { return await fn(); } finally { this.cuts.push([a, this.now()]); }
  }

  // Wait for a new tab opened by the action, and follow it.
  async followNewTab(action, urlRe = /./) {
    const [p] = await Promise.all([this.context.waitForEvent('page'), action()]);
    await p.waitForURL(urlRe, { timeout: 30000 });
    this.activate(p);
    await p.waitForLoadState('domcontentloaded');
    await this.settle();
    return p;
  }

  async scanPage() {
    if (!foreignCache) foreignCache = foreignPeople();
    const res = await this.page.evaluate(() => ({
      text: document.body.innerText,
      values: [...document.querySelectorAll('input,textarea')].map((e) => e.value).join('\n'),
      vite: !!document.querySelector('vite-error-overlay'),
    }));
    const all = `${res.text}\n${res.values}`;
    const problems = [];
    for (const m of all.matchAll(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g)) {
      if (!m[0].toLowerCase().endsWith(DEMO_EMAIL_DOMAIN)) problems.push(`non-demo e-mail ${m[0]}`);
    }
    for (const n of foreignCache) if (n.length > 3 && all.includes(n)) problems.push(`non-persona name or e-mail ${n}`);
    if (res.vite) problems.push('Vite error overlay present');
    return problems;
  }

  // Annotated screenshot for a shot id. Options:
  //   at: {n: target}     override a callout target; skip: [n] leave a callout out
  //   fullPage, clip: {x,y,width,height} | clipTo: target (with pad), scroll: false
  //   allowToast: true (an error toast is intended), frame: mock browser frame (see annotate.mjs)
  async shot(id, opts = {}) {
    const shot = getShot(id);
    if (shot.kind !== 'screenshot') throw new Error(`${id} is a ${shot.kind}`);
    const callouts = (shot.callouts || []).filter((c) => !(opts.skip || []).includes(c.n));
    const targetOf = (c) => (opts.at && opts.at[c.n]) || c.target;
    if (opts.scroll !== false && callouts.length && !opts.fullPage && !opts.frameOnly) {
      const first = targetOf(callouts[0]);
      if (!String(first).startsWith('mock:')) {
        const el = await this.pick(first);
        if (el) await this.scrollTo(el, { block: opts.block || 'center' });
      }
    }
    await this.page.waitForTimeout(opts.wait ?? 700);
    const problems = await this.scanPage();
    if (!opts.allowToast) {
      const bad = await this.page.evaluate(() => [...document.querySelectorAll('[data-sonner-toast][data-type=error], li.destructive, [role=status].destructive, .group.destructive')]
        .filter((e) => e.getClientRects().length).map((e) => e.innerText.slice(0, 120)));
      for (const b of bad) problems.push(`error toast: ${b}`);
    }
    if (problems.length) throw new Error(`${id}: ${problems.join('; ')}`);
    let scroll = { x: 0, y: 0 };
    if (opts.fullPage) {
      await this.page.evaluate(() => window.scrollTo(0, 0));
      await this.page.waitForTimeout(400);
    }
    let clip = opts.clip;
    if (opts.clipTo) {
      const el = await this.must(opts.clipTo);
      const b = await el.boundingBox();
      const pad = opts.pad ?? 16, vw = this.dev.viewport.width, vh = this.dev.viewport.height;
      const x = Math.max(0, b.x - pad), y = Math.max(0, b.y - pad);
      clip = { x, y, width: Math.min(vw - x, b.width + 2 * pad), height: Math.min(vh - y, b.height + 2 * pad) };
    }
    const boxes = [];
    for (const c of callouts) {
      const t = targetOf(c);
      if (String(t).startsWith('mock:')) { boxes.push({ n: c.n, mock: String(t).slice(5), note: c.note }); continue; }
      // wait (up to 20 s) for the target: the app is slow on a busy machine
      let el = await this.pick(t);
      for (let k = 0; !el && k < 40; k++) { await this.page.waitForTimeout(500); el = await this.pick(t); }
      const b = el && (await el.boundingBox().catch(() => null));
      if (!b) {
        if ((opts.optional || []).includes(c.n)) { this.log(`  ${id}: callout ${c.n} (${t}) not found, left out`); continue; }
        await this.page.screenshot({ path: path.join(this.rawDir, `${id}.fail.png`) }).catch(() => {});
        throw new Error(`${id}: callout ${c.n} target not visible: ${t} (see ${path.join(this.rawDir, `${id}.fail.png`)})`);
      }
      boxes.push({ n: c.n, x: b.x + scroll.x - (clip?.x || 0), y: b.y + scroll.y - (clip?.y || 0), w: b.width, h: b.height,
        style: (opts.style && opts.style[c.n]) || 'box', place: opts.place && opts.place[c.n] });
    }
    // a browser tooltip (title attribute) is not drawn by headless Chromium: draw it in the annotation
    let tooltip = null;
    if (opts.tooltip) {
      const el = await this.must(opts.tooltip);
      const b = await el.boundingBox();
      const text = await el.evaluate((e) => e.getAttribute('title') || e.querySelector('[title]')?.getAttribute('title') || '');
      if (text) tooltip = { x: b.x + scroll.x - (clip?.x || 0) + 8, y: b.y + scroll.y - (clip?.y || 0) + b.height + 6, text };
    }
    if (this.record) await this.showCursor(false);
    const raw = path.join(this.rawDir, `${id}.raw.png`);
    await this.page.screenshot({ path: raw, fullPage: !!opts.fullPage, clip, animations: 'disabled', caret: 'hide' });
    if (this.record) await this.showCursor(true);
    const out = outputPath(shot);
    await annotate(this.browser, raw, out, boxes, opts.frame, tooltip);
    const kb = Math.round(fs.statSync(out).size / 1024);
    this.log(`  shot ${id} -> ${path.relative(process.cwd(), out)} (${kb} KB)`);
    return out;
  }

  async close() {
    const end = this.now();
    for (const x of this.pages) if (x.active.length && x.active.at(-1)[1] === null) x.active.at(-1)[1] = end;
    const vids = [];
    const pages = [...this.pages];
    await this.context.close();
    if (this.record) {
      for (const x of pages) {
        const v = x.page.video();
        if (v) vids.push({ path: await v.path(), t0: x.t0, active: x.active });
      }
    }
    if (this.blocked.some((u) => /supabase\.co/.test(u))) throw new Error(`${this.name}: blocked requests to supabase.co: ${this.blocked.join(', ')}`);
    return { videos: vids, cues: this.cues, marks: this.marks, cuts: this.cuts, end };
  }
}

async function guardContext(context, blocked, errors, log) {
  await context.route('**/*', (route) => {
    const u = route.request().url();
    if (u.startsWith('data:') || u.startsWith('blob:')) return route.continue();
    let origin = '';
    try { origin = new URL(u).origin; } catch (e) {}
    if (ALLOWED_ORIGINS.has(origin)) return route.continue();
    blocked.push(u);
    if (/supabase\.co/.test(u)) log(`  BLOCKED supabase.co request: ${u}`);
    return route.abort();
  });
  context.on('page', (p) => {
    p.on('websocket', (ws) => { if (!/^wss?:\/\/(localhost|127\.0\.0\.1):(9080|55321)\//.test(ws.url())) blocked.push(ws.url()); });
    p.on('pageerror', (e) => { errors.push(String(e)); log(`  pageerror: ${String(e).slice(0, 200)}`); });
  });
}

// Sign in once per persona and device class; the session state is cached for 30 minutes in media-raw/state.
async function signInState(browser, persona, device, log) {
  const p = PERSONAS[persona];
  if (!p) throw new Error(`unknown persona ${persona}`);
  const file = path.join(RAW, 'state', `${p.initials}.json`);
  if (fs.existsSync(file) && Date.now() - fs.statSync(file).mtimeMs < 30 * 60 * 1000) return file;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const ctx = await browser.newContext({ viewport: DEVICES.tablet.viewport, timezoneId: 'Europe/London', locale: 'en-GB' });
  ctx.setDefaultTimeout(90000);
  const blocked = [];
  await guardContext(ctx, blocked, [], log);
  const page = await ctx.newPage();
  try {
    await signInOnPage(page, p.email);
    await page.waitForURL(/hub-selection|pending|change-password/, { timeout: 60000 });
    await page.waitForTimeout(1000);
    await ctx.storageState({ path: file });
  } finally {
    await page.close();
    await ctx.close();
  }
  if (blocked.some((u) => /supabase\.co/.test(u))) throw new Error('sign-in tried to reach supabase.co');
  log(`  signed in as ${persona}`);
  return file;
}

export async function signInOnPage(page, email, password = demoPassword()) {
  await page.goto(`${BASE}/auth`, { waitUntil: 'commit', timeout: 90000 });
  await page.getByLabel('Email').first().waitFor({ timeout: 90000 }).catch(async () => {
    await page.reload({ waitUntil: 'commit' });
    await page.getByLabel('Email').first().waitFor({ timeout: 120000 });
  });
  await page.getByLabel('Email').first().fill(email);
  await page.getByLabel('Password').first().fill(password);
  await page.getByRole('button', { name: 'Sign In' }).first().click();
}

export function dropSignInCache(persona) {
  const file = path.join(RAW, 'state', `${PERSONAS[persona].initials}.json`);
  fs.rmSync(file, { force: true });
}
