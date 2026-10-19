# From the Workshop App to KART

**Draft, pending approval.** Nothing in this guide is final until the approvers have signed it off. Every page carries the draft banner.

The official FAT Karting League (Smedley Group) end-user guide for moving hub workshops from the FKL Workshop App to KART (FKL Kart Allocation & Reliability Tracking). It is written for mechanics, hub managers, FKL Central, admins and remote support, in plain British English, with a picture or short captioned clip for every step.

## What is in here

| Path | What it is |
|---|---|
| `mkdocs.yml` | Site configuration (MkDocs Material, light theme, FKL brand) |
| `overrides/main.html` | Theme override: the draft banner on every page (not dismissible) |
| `docs/` | The pages, one folder per role, plus switch-over day, where-did-it-go, FAQ, troubleshooting and glossary |
| `docs/assets/brand/` | Logo (blue PNG, white SVG), favicon, `brand.css`, `print.css` |
| `docs/assets/img/<section>/`, `video/`, `gif/` | Screenshots, clips and GIFs (recorded later, see below) |
| `shots/shots.yaml` | The shot list: one entry per screenshot, clip and GIF referenced in `docs/` |
| `tools/cards/*.html` | A4 quick reference card sources, printed to `docs/cards/*.pdf` |
| `tools/check_guide.py` | Text and shot list checks (no long dashes, no banned words, every media reference has a shot entry) |
| `.github/workflows/pages.yml` | Build on every push to `main`; deploy is off (see visibility) |

## Build it locally

```bash
python3 -m venv ../guide-venv            # keep the venv outside the repo
../guide-venv/bin/pip install -r requirements.txt
../guide-venv/bin/python tools/check_guide.py
../guide-venv/bin/mkdocs build           # output in site/
../guide-venv/bin/mkdocs serve           # preview at http://127.0.0.1:8000
```

Until the media are recorded, `mkdocs build` warns about missing images and videos. That is expected. Once every file in `shots/shots.yaml` exists, use `mkdocs build --strict` and `python tools/check_guide.py --media`.

## How the media are recorded

- Media are recorded from a **local demo copy of KART** with made-up data only (Demo Hub, example karts and example people such as Alex Mechanic). Production is never used, and no real names, e-mails or customer data appear anywhere.
- `shots/shots.yaml` says, for each shot: the persona, the device (tablet 1180x820, phone 390x844, desktop 1440x900), the start route, the demo state it needs, the steps, numbered callouts for screenshots, and captions for clips.
- Screenshots go to `docs/assets/img/<section>/<id>.png` (annotated with numbered callouts), clips to `docs/assets/video/<id>.mp4`, `.webm`, `.vtt` (captions) and `.jpg` (poster), GIFs to `docs/assets/gif/<id>.gif`. Raw captures are not committed.
- The quick reference cards are printed from `tools/cards/<name>.html` to `docs/cards/<name>.pdf` (A4 portrait, one page).

## Visibility

The deploy job is switched off until the visibility decision is made (internal-only hosting or GitHub Pages). To switch it on later, set the repository variable `PAGES_PUBLISH` to `true` and enable GitHub Pages with "GitHub Actions" as the source.

## Writing rules

- No em dashes or en dashes in text (use "to", commas, colons or brackets).
- Use only the demo personas and Demo Hub data.
- Bold the exact on-screen KART labels. KART says **Requires service** where the Workshop App said Turn Required.
- Anything not live yet goes in a "Coming soon" or "Coming with your hub's switch-over" box. Never give switch-over dates as fixed: the hub lead confirms them at least 24 hours before.
- Every page has a "What changed from the Workshop App" box.

Official guide of FAT Karting League, part of Smedley Group. Internal use only.
