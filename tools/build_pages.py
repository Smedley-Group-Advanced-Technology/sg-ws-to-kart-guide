#!/usr/bin/env python3
"""Expand :::shot / :::clip / :::gif blocks in guide sources into SPEC embeds and write shots/shots.yaml.

Usage: python3 build.py SRC_DIR REPO_DIR
Sources mirror docs/ paths (SRC_DIR/index.md -> REPO/docs/index.md). Files without blocks are copied as they are.
"""
import re
import sys
from pathlib import Path

import yaml

DEVICE_WIDTH = {"tablet": 1180, "phone": 390, "desktop": 1440}
BLOCK = re.compile(r"^(?P<ind>[ \t]*):::(?P<kind>shot|clip|gif|defaults)(?:[ \t]+(?P<id>[a-z0-9-]+))?[ \t]*\n(?P<body>.*?)^[ \t]*:::[ \t]*$\n?", re.M | re.S)
KIND = {"shot": "screenshot", "clip": "clip", "gif": "gif"}


def dedent(body: str, ind: str) -> str:
    out = []
    for line in body.splitlines():
        out.append(line[len(ind):] if line.startswith(ind) else line.lstrip())
    return "\n".join(out)


def mp4_seconds(path: Path) -> float | None:
    """Length of a recorded clip from its mp4 'mvhd' box, so captions state the real length."""
    if not path.exists():
        return None
    data = path.read_bytes()
    i = data.find(b"mvhd")
    if i < 0:
        return None
    version = data[i + 4]
    if version == 1:
        scale = int.from_bytes(data[i + 24:i + 28], "big")
        length = int.from_bytes(data[i + 28:i + 36], "big")
    else:
        scale = int.from_bytes(data[i + 16:i + 20], "big")
        length = int.from_bytes(data[i + 20:i + 24], "big")
    return length / scale if scale else None


def esc_alt(s: str) -> str:
    return s.replace("[", "(").replace("]", ")").replace('"', "'")


def main(src: Path, repo: Path) -> None:
    shots = []
    seen = {}
    for f in sorted(src.rglob("*.md")):
        rel = f.relative_to(src)
        page = rel.as_posix()
        section = rel.parts[0] if len(rel.parts) > 1 else "general"
        up = "../" * (len(rel.parts) - 1)
        text = f.read_text(encoding="utf-8")
        defaults = {}

        def repl(m: re.Match) -> str:
            nonlocal defaults
            ind, kind, sid = m.group("ind"), m.group("kind"), m.group("id")
            data = yaml.safe_load(dedent(m.group("body"), ind)) or {}
            if kind == "defaults":
                defaults = data
                return ""
            if not sid:
                raise SystemExit(f"{page}: block without id")
            if sid in seen:
                raise SystemExit(f"{page}: duplicate id {sid} (also in {seen[sid]})")
            seen[sid] = page
            entry = {"id": sid, "kind": KIND[kind], "page": page}
            for k in ("persona", "device", "url"):
                entry[k] = data.get(k, defaults.get(k))
                if entry[k] is None:
                    raise SystemExit(f"{page}: {sid} has no {k}")
            entry["state"] = data.get("state", defaults.get("state", "Demo Hub as seeded"))
            entry["steps"] = data.get("steps") or []
            if not entry["steps"]:
                raise SystemExit(f"{page}: {sid} has no steps")
            if kind == "shot":
                entry["callouts"] = [
                    {"n": c[0], "target": c[1], "note": c[2]} for c in (data.get("callouts") or [])
                ]
            entry["caption"] = data["caption"]
            if kind == "clip":
                entry["captions"] = data["captions"]
                entry["duration"] = int(data["duration"])
                if not 10 <= entry["duration"] <= 90:
                    raise SystemExit(f"{page}: {sid} duration out of range")
                real = mp4_seconds(repo / "docs" / "assets" / "video" / f"{sid}.mp4")
                if real:
                    entry["duration"] = max(5, int(round(real / 5.0)) * 5)
            shots.append(entry)
            alt = esc_alt(entry["caption"])
            if kind == "shot":
                return f"{ind}![{alt}]({up}assets/img/{section}/{sid}.png){{ loading=lazy }}\n"
            if kind == "gif":
                return f"{ind}![{alt}]({up}assets/gif/{sid}.gif){{ loading=lazy }}\n"
            w = DEVICE_WIDTH[entry["device"]]
            v = f"{up}assets/video/{sid}"
            return (
                f'<figure class="clip"><video controls preload="none" playsinline poster="{v}.jpg" width="{w}">\n'
                f'<source src="{v}.mp4" type="video/mp4"><source src="{v}.webm" type="video/webm">\n'
                f'<track kind="captions" src="{v}.vtt" srclang="en" label="English" default></video>\n'
                f"<figcaption>Watch: {entry['caption']} (about {entry['duration']} seconds, with captions)</figcaption></figure>\n"
            )

        out = BLOCK.sub(repl, text)
        if ":::" in re.sub(r"```.*?```", "", out, flags=re.S):
            raise SystemExit(f"{page}: unexpanded ::: block left")
        dest = repo / "docs" / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(out, encoding="utf-8")

    header = (
        "# Shot list for the guide: one entry per screenshot, clip and GIF used in docs/.\n"
        "# Format: see research SPEC (id, kind, page, persona, device, url, state, steps, callouts, caption, captions, duration).\n"
        "# Devices: tablet = 1180x820 landscape, phone = 390x844, desktop = 1440x900. Base URL http://localhost:9080 (local guide stack, demo data only).\n"
        "# Screenshots go to docs/assets/img/<section>/<id>.png (section = page folder, 'general' for top-level pages),\n"
        "# clips to docs/assets/video/<id>.mp4/.webm/.vtt/.jpg, GIFs to docs/assets/gif/<id>.gif.\n"
        "# URL placeholders: {kart:NNN} = id of the Demo Hub kart shown as NNN (e.g. {kart:207}), {campaign} = id of Junior caliper seal upgrade,\n"
        "# {task:NNN} = that campaign's task for kart NNN, {hub} = Demo Hub id. Callout targets are Playwright-style selectors (text=, role=, label=, css=).\n"
        "# Clip captions: one VTT cue per line, each shown 2 to 6 seconds while that action happens; leave silent gaps between cues on longer clips.\n"
    )
    body = yaml.safe_dump(shots, sort_keys=False, allow_unicode=True, width=120)
    (repo / "shots").mkdir(exist_ok=True)
    (repo / "shots" / "shots.yaml").write_text(header + body, encoding="utf-8")
    kinds = {}
    for s in shots:
        kinds[s["kind"]] = kinds.get(s["kind"], 0) + 1
    print(f"{len(shots)} shots: {kinds}")


if __name__ == "__main__":
    main(Path(sys.argv[1]), Path(sys.argv[2]))
