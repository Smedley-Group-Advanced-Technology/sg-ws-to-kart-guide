// Draw numbered callouts (FKL Blue circle, white number, white ring, drop shadow) and outline boxes on a
// raw screenshot, in a separate browser page so nothing of it ever shows in a recording.
// Optional mock frame: a simple browser chrome (tabs, address bar) and a browser menu, clearly drawn as a
// mock-up, for steps that happen in the browser rather than in KART.
import fs from 'node:fs';
import path from 'node:path';

let ctx;
async function annotator(browser) {
  if (!ctx || !ctx.browser()) ctx = await browser.newContext({ deviceScaleFactor: 1 });
  return ctx;
}
export async function closeAnnotator() { if (ctx) await ctx.close().catch(() => {}); ctx = null; }

// boxes: [{n, x, y, w, h, style: 'box'|'circle'|'arrow'}] in image pixels, or {n, mock: 'menu item text'}
// frame: { tabs: ['Select your Hub', 'Workshop'], active: 1, url: 'localhost:9080/workshop', menu: ['New tab', ...] }
export async function annotate(browser, rawPath, outPath, boxes, frame, tooltip) {
  const c = await annotator(browser);
  const page = await c.newPage();
  try {
    const img = fs.readFileSync(rawPath).toString('base64');
    const dims = await imageSize(rawPath);
    const top = frame ? 76 : 0;
    const W = dims.width, H = dims.height + top;
    await page.setViewportSize({ width: W, height: H });
    await page.setContent(`<!doctype html><html><head><style>
      html,body{margin:0;padding:0;background:#fff;font-family:Arial,Helvetica,sans-serif}
      #wrap{position:relative;width:${W}px;height:${H}px;overflow:hidden}
      #shot{position:absolute;left:0;top:${top}px;display:block}
      .box{position:absolute;border:3px solid #0000FF;border-radius:8px;box-shadow:0 0 0 2px #fff,0 2px 8px rgba(0,0,0,.35)}
      .num{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:#0000FF;color:#fff;
        font:bold 17px/30px Arial,Helvetica,sans-serif;text-align:center;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.55)}
      #chrome{position:absolute;left:0;top:0;width:100%;height:${top}px;background:#dee1e6;border-bottom:1px solid #c4c7cc}
      .tab{position:absolute;top:6px;height:32px;border-radius:8px 8px 0 0;padding:0 14px;font:13px/32px Arial;color:#333;
        box-sizing:border-box;width:230px;white-space:nowrap;overflow:hidden}
      .tab.on{background:#fff}
      .tab .ico{display:inline-block;width:12px;height:12px;border-radius:3px;background:#0000FF;margin-right:8px;vertical-align:-1px}
      #bar{position:absolute;left:0;right:0;top:38px;height:38px;background:#fff}
      #url{position:absolute;left:84px;right:60px;top:5px;height:28px;border-radius:14px;background:#f1f3f4;font:13px/28px Arial;color:#333;padding-left:16px}
      .dots{position:absolute;right:20px;top:9px;font:bold 18px/18px Arial;color:#555;letter-spacing:1px}
      #menu{position:absolute;right:12px;top:${top - 2}px;width:270px;background:#fff;border-radius:8px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:6px 0}
      .mi{font:14px/36px Arial;color:#222;padding:0 18px}
      .mock{position:absolute;left:8px;bottom:8px;font:11px Arial;color:#666;background:rgba(255,255,255,.85);padding:2px 6px;border-radius:4px}
    </style></head><body><div id="wrap">
      <img id="shot" src="data:image/png;base64,${img}" width="${dims.width}" height="${dims.height}">
      ${frame ? chrome(frame) : ''}
      ${tooltip ? `<div style="position:absolute;left:${tooltip.x}px;top:${tooltip.y + top}px;max-width:320px;background:#fff;color:#222;border:1px solid #888;box-shadow:0 2px 6px rgba(0,0,0,.3);font:12px/1.35 Arial;padding:3px 7px">${tooltip.text.replace(/</g, '&lt;')}</div>` : ''}
    </div></body></html>`);
    await page.evaluate(({ boxes, top, W, H }) => {
      const wrap = document.getElementById('wrap');
      const placed = [];
      const rects = boxes.filter((b) => !b.mock).map((b) => ({ x: b.x - 4, y: b.y + top - 4, w: b.w + 8, h: b.h + 8 }));
      const hits = (p) => rects.some((q) => p.x + 15 > q.x && p.x - 15 < q.x + q.w && p.y + 15 > q.y && p.y - 15 < q.y + q.h);
      for (const b of boxes) {
        let r;
        if (b.mock) {
          const el = [...document.querySelectorAll('[data-mock]')].find((e) => e.dataset.mock === b.mock);
          if (!el) throw new Error('mock target not found: ' + b.mock);
          const q = el.getBoundingClientRect();
          r = { x: q.x, y: q.y, w: q.width, h: q.height };
        } else r = { x: b.x, y: b.y + top, w: b.w, h: b.h };
        const pad = 4;
        if (b.style !== 'circle') {
          const d = document.createElement('div');
          d.className = 'box';
          d.style.left = Math.max(1, r.x - pad) + 'px'; d.style.top = Math.max(1, r.y - pad) + 'px';
          d.style.width = Math.min(W - 2, r.w + 2 * pad) - 6 + 'px'; d.style.height = Math.min(H - 2, r.h + 2 * pad) - 6 + 'px';
          wrap.appendChild(d);
        }
        // number: left of the box, else above, else below, else inside the top-left corner
        const left = { x: r.x - pad - 20, y: r.y + Math.min(r.h / 2, 18) };
        const above = { x: r.x + 14, y: r.y - pad - 20 };
        const below = { x: r.x + 14, y: r.y + r.h + pad + 20 };
        const right = { x: r.x + r.w + pad + 20, y: r.y + Math.min(r.h / 2, 18) };
        const inside = { x: r.x + 18, y: r.y + 18 };
        const order = { below: [below, left, right, above], right: [right, below, above, left], above: [above, left, right, below] };
        const cands = order[b.place] || (r.y - top < 64 ? order.below : [left, above, below, right]);
        const ok = (p) => p.x >= 18 && p.y >= 18 && p.x <= W - 18 && p.y <= H - 18 && placed.every((q) => Math.hypot(q.x - p.x, q.y - p.y) > 36);
        const p = cands.find((c) => ok(c) && !hits(c)) || cands.find(ok) || inside;
        placed.push(p);
        const n = document.createElement('div');
        n.className = 'num'; n.textContent = String(b.n);
        n.style.left = p.x + 'px'; n.style.top = p.y + 'px';
        wrap.appendChild(n);
      }
    }, { boxes, top, W, H });
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await page.locator('#wrap').screenshot({ path: outPath });
  } finally {
    await page.close();
  }
}

function chrome(f) {
  const tabs = (f.tabs || ['KART']).map((t, i) => `<div class="tab${i === (f.active ?? 0) ? ' on' : ''}" style="left:${8 + i * 234}px" data-mock="tab:${t}"><span class="ico"></span>${t}</div>`).join('');
  const menu = f.menu ? `<div id="menu">${f.menu.map((m) => `<div class="mi" data-mock="${m}">${m}</div>`).join('')}</div>` : '';
  return `<div id="chrome">${tabs}<div id="bar"><div id="url" data-mock="url">${f.url || 'localhost:9080'}</div><div class="dots" data-mock="menu">&#8942;</div></div></div>${menu}
    <div class="mock">Browser frame drawn for illustration</div>`;
}

async function imageSize(file) {
  const b = fs.readFileSync(file);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}
