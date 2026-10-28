# Recorder for the guide media

Records the screenshots, clips and GIFs listed in `shots/shots.yaml` from the **local guide stack only**
(frontend http://localhost:9080, gateway http://localhost:55321, fake demo data). Node ESM with Playwright
(`playwright-core` from `/home/arch/Work/guide-stack/tools-node`, no packages in this repo).

## Run it

```bash
node tools/record/run.mjs --list                      # flows, whether they reset the demo world, their shot ids
node tools/record/run.mjs overview kart-page          # run some flows (file names in tools/record/flows)
node tools/record/run.mjs --section mechanic start    # every flow with a shot on pages under these sections
node tools/record/run.mjs --missing mechanic          # shots in the list that have no media file yet
node tools/record/run.mjs --defer service-turn        # record now, save clip/GIF encode jobs for later
node tools/record/run.mjs --encode [id ...]           # encode saved jobs one by one (all pending, or these ids)
```

Run one recorder at a time (it resets the shared demo database). The machine is shared: the encoder waits while
another heavy job runs (`vite build`, `tsc --noEmit`, `bun run build`, `ffmpeg`, `mkdocs build`), and ffmpeg runs in
Docker (`jrottenberg/ffmpeg:6.1-alpine`, `--rm`, your user id), one job at a time.

## What a flow is

One file per task in `flows/<name>.mjs`:

```js
export default {
  shots: ['mech-pause-clip', 'mech-pause-button'],   // ids this flow produces (all must be in shots.yaml)
  reset: true,               // rebuild the demo world first; or ['no_207_ticket'] for a seed variant; false = read only
  async run({ open, reset, clip, gif, log }) {
    const s = await open({ persona: 'Alex Mechanic', device: 'tablet', record: true });
    await s.goto('/workshop/in-service');            // ?hubId=<Demo Hub> is added for you
    s.cue();                                         // the next caption of the clip starts now (real timestamp)
    await s.tap('role=button[name="Pause"]');        // indicator moves there, pulses, clicks, pauses
    await s.shot('mech-pause-button');               // annotated screenshot from the same run
    const r = await s.close();
    clip('mech-pause-clip', r);                      // mp4 + webm + poster jpg + vtt
  },
};
```

- `open({persona, device, record, signIn})`: device `tablet` 1180x820, `phone` 390x844 (mobile, touch), `desktop`
  1440x900. Sign-in happens in a separate context (cached 30 minutes, dropped on every reset), so clips start signed in.
  `signIn: false` for the sign-in and sign-up pages.
- Actions: `tap`, `type` (keyboard with a small delay), `choose`, `hover`, `drag` (slow mouse drag, dnd-kit works),
  `scrollTo` (keeps the sticky header clear), `scrollBy`, `wait`, `beat`, `settle`, `must`, `mustReload`,
  `followNewTab(action, urlRe)` (the clip follows the new tab), `skip(fn)` (cut the time fn takes out of the clip,
  for page loads), `card(title)` and `tile(...texts)` locator helpers.
- Targets are Playwright selectors (`text=`, `role=`, `css=`) or locators; `label=` and `placeholder=` are accepted too.
  The first visible match wins, preferring an open dialog and an exact text match.
- `shot(id, opts)` takes the callouts from shots.yaml. Options: `at: {n: target}` (override a target),
  `skip: [n]`, `optional: [n]`, `place: {n: 'below'|'right'|'above'}`, `fullPage`, `clip`, `clipTo`, `scroll: false`,
  `block: 'start'`, `allowToast`, `tooltip: target` (draws the element's title tooltip, which headless Chromium does not),
  `frame: {tabs, active, url, menu}` (a clearly marked mock browser frame for browser-only steps; `mock:<menu item>` targets).
- `clip(id, result, {lead, poster, end})`: the clip starts `lead` ms (default 900) before the first cue. The flow must call
  `cue()` once per caption in the shot entry. Cues last 2 to 5.5 s, until the next cue.
- `gif(id, result, {start, end})`: a window of the session in ms (`s.now()` before and after the action).

## Safety (enforced by the engine)

- Every request whose origin is not `localhost:9080` / `localhost:55321` (or data:/blob:) is aborted; any request to
  `*.supabase.co` fails the flow. WebSockets elsewhere are recorded as blocked too.
- Before each screenshot the visible text and input values are scanned: an e-mail not ending in `@demo-fkl.example`,
  any name or e-mail in the database that is not a persona, the Vite error overlay, or an error toast (unless
  `allowToast`) fails the shot.
- The demo password is read from the stack's `.env` at run time; sign-up and password-change flows use throw-away
  passwords that are never written anywhere.
- Raw captures (videos, unannotated PNGs, encode jobs, sign-in state) live in `~/.cache/fkl-guide-record`
  (`FKL_RECORD_RAW`), never in the repo.

## Output

- Screenshots: `docs/assets/img/<section>/<id>.png` (section = first folder of the page, `general` for top-level pages),
  1x, annotated with numbered FKL Blue markers and outline boxes.
- Clips: `docs/assets/video/<id>.mp4` (H.264, crf 28, faststart, no audio), `.webm` (VP9, crf 40), `.jpg` poster, `.vtt`.
- GIFs: `docs/assets/gif/<id>.gif` (max 800 px wide, palette, under 1.5 MB).

## Demo world

`/home/arch/Work/guide-stack/seed/reset_demo.sh [variant ...]` rebuilds it (dates relative to today). Variants:
`no_106_incident`, `no_207_ticket`, `no_jamie`, `jamie_temp`, `campaign_measure`. The normal world also has a past
session event (Demo Club Night, a week ago) and the join link code `DE0DE0000001`. Jordan Contractor is a Demo Hub
staff member without any permission (events contractor: Log incident on the Tracker). The runner restores the normal
world after any flow that changed data.

## Next sections

Hub manager, FKL Central, remote support and cards flows go in `flows/` the same way; run them with
`node tools/record/run.mjs --section hub-manager fkl-central remote-support cards` (add `--defer`, then `--encode`, on a
busy machine) and check with `--missing`.
