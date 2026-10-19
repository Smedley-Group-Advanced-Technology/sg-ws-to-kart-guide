#!/usr/bin/env python3
"""Checks for the guide. Run from the repo root: python3 tools/check_guide.py [--kart-src PATH] [--media]

1. No em dash or en dash anywhere in docs/, tools/, shots/, mkdocs.yml, README.md.
2. No banned word (see SPEC rule 2) anywhere in the repo.
3. Every image, clip and GIF referenced in docs/ has exactly one entry in shots/shots.yaml with the right kind and page,
   and every shots.yaml entry is referenced.
4. With --kart-src: every **bold** phrase in docs/ that looks like a UI label is found in the KART source (warnings only).
5. With --media: every referenced media file exists (use once recording is done).
Exit code 1 on any failure of checks 1 to 3 (and 5 when asked).
"""
import argparse
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DASHES = re.compile("[" + chr(0x2013) + chr(0x2014) + "]")
BANNED = re.compile("du" + "mm", re.I)
IMG = re.compile(r"\(((?:\.\./)*)assets/(img|gif)/(?:[a-z-]+/)?([a-z0-9-]+)\.(png|gif)\)")
VID = re.compile(r'<source src="(?:\.\./)*assets/video/([a-z0-9-]+)\.mp4"')
BOLD = re.compile(r"\*\*([^*]+?)\*\*")
SKIP_FILES = set()


def text_files(paths):
    for p in paths:
        p = ROOT / p
        if p.is_file():
            yield p
        elif p.is_dir():
            for f in p.rglob("*"):
                if f.is_file() and f.suffix in {".md", ".yml", ".yaml", ".html", ".css", ".py", ".txt", ".js", ".svg", ".json"}:
                    yield f


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--kart-src")
    ap.add_argument("--media", action="store_true")
    a = ap.parse_args()
    bad = 0

    for f in text_files(["docs", "tools", "shots", "mkdocs.yml", "README.md", "overrides", ".github"]):
        if f.name in SKIP_FILES or f.suffix == ".svg":
            continue
        for i, line in enumerate(f.read_text(encoding="utf-8", errors="replace").splitlines(), 1):
            if DASHES.search(line):
                print(f"DASH {f.relative_to(ROOT)}:{i}: {line.strip()[:100]}")
                bad += 1
    for f in ROOT.rglob("*"):
        if ".git" in f.parts or "site" in f.parts or not f.is_file() or f.name in SKIP_FILES:
            continue
        if BANNED.search(f.name):
            print(f"BANNED name {f}")
            bad += 1
        if f.suffix in {".png", ".jpg", ".gif", ".mp4", ".webm", ".pdf", ".svg"}:
            continue
        if BANNED.search(f.read_text(encoding="utf-8", errors="replace")):
            print(f"BANNED word in {f.relative_to(ROOT)}")
            bad += 1

    shots = yaml.safe_load((ROOT / "shots" / "shots.yaml").read_text(encoding="utf-8")) or []
    by_id = {}
    for s in shots:
        if s["id"] in by_id:
            print(f"SHOTS duplicate id {s['id']}")
            bad += 1
        by_id[s["id"]] = s
    used = set()
    for md in (ROOT / "docs").rglob("*.md"):
        page = md.relative_to(ROOT / "docs").as_posix()
        t = md.read_text(encoding="utf-8")
        refs = [(m.group(3), "gif" if m.group(2) == "gif" else "screenshot") for m in IMG.finditer(t)]
        refs += [(m.group(1), "clip") for m in VID.finditer(t)]
        for sid, kind in refs:
            used.add(sid)
            s = by_id.get(sid)
            if not s:
                print(f"SHOTS missing entry for {sid} ({page})")
                bad += 1
            elif s["kind"] != kind or s["page"] != page:
                print(f"SHOTS mismatch {sid}: {s['kind']}/{s['page']} vs {kind}/{page}")
                bad += 1
            if a.media:
                sec = page.split("/")[0] if "/" in page else "general"
                need = {
                    "screenshot": [f"docs/assets/img/{sec}/{sid}.png"],
                    "gif": [f"docs/assets/gif/{sid}.gif"],
                    "clip": [f"docs/assets/video/{sid}.{e}" for e in ("mp4", "webm", "vtt", "jpg")],
                }[kind]
                for n in need:
                    if not (ROOT / n).exists():
                        print(f"MEDIA missing {n}")
                        bad += 1
    for sid in by_id:
        if sid not in used:
            print(f"SHOTS unused entry {sid}")
            bad += 1

    if a.kart_src:
        src = Path(a.kart_src)
        blob = "\n".join(p.read_text(encoding="utf-8", errors="replace") for p in src.rglob("*.ts*"))
        seen = set()
        for md in (ROOT / "docs").rglob("*.md"):
            for m in BOLD.finditer(md.read_text(encoding="utf-8")):
                s = m.group(1).strip()
                if s in seen:
                    continue
                seen.add(s)
                if s not in blob:
                    print(f"LABEL? {md.relative_to(ROOT)}: **{s}**")

    print("FAILED" if bad else "OK", f"({bad} problems, {len(shots)} shot entries)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
