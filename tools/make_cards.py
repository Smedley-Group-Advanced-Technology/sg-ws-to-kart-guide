#!/usr/bin/env python3
"""Write the A4 quick reference card sources to REPO/tools/cards/<name>.html (one page each)."""
import html, sys
from pathlib import Path

REPO = Path(sys.argv[1])
CSS = """
@page { size: A4 portrait; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { position: relative; width: 210mm; height: 297mm; overflow: hidden; font-family: Arial, Helvetica, sans-serif; color: #000; background: #fff;
  -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.banner { background: #000; color: #ffff00; text-align: center; font-family: "Arial Black", Arial, sans-serif; font-weight: 900;
  text-transform: uppercase; letter-spacing: 0.12em; font-size: 10pt; padding: 2.2mm 0; }
header { background: #0000ff; color: #fff; display: flex; align-items: center; gap: 8mm; padding: 6mm 12mm; }
header img { height: 14mm; filter: brightness(0) invert(1); }
header h1 { margin: 0; font-family: "Arial Black", Arial, sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.08em; font-size: 21pt; line-height: 1.1; }
header p { margin: 1mm 0 0 0; font-size: 10.5pt; }
main { padding: 6mm 12mm 0 12mm; display: grid; grid-template-columns: 1.45fr 1fr; gap: 7mm; }
h2 { font-family: "Arial Black", Arial, sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.08em; font-size: 12pt;
  margin: 0 0 3mm 0; border-bottom: 1.2mm solid #0000ff; padding-bottom: 1mm; }
ol { margin: 0; padding: 0; list-style: none; counter-reset: s; }
ol li { counter-increment: s; position: relative; padding: 0.6mm 0 0 11.5mm; margin: 0 0 3.6mm 0; min-height: 8.6mm; font-size: 13pt; line-height: 1.3; }
ol li::before { content: counter(s); position: absolute; left: 0; top: 0; width: 8.6mm; height: 8.6mm; background: #0000ff; color: #fff;
  font-family: "Arial Black", Arial, sans-serif; font-weight: 900; font-size: 12pt; text-align: center; line-height: 8.6mm; }
b { font-family: Monaco, "Courier New", monospace; font-weight: bold; font-size: 11.5pt; background: #f0f0f0; padding: 0 1mm; }
.status { display: flex; align-items: flex-start; gap: 3mm; margin: 0 0 3mm 0; font-size: 11.5pt; line-height: 1.3; }
.sw { flex: 0 0 6mm; height: 6mm; border: 0.3mm solid #000; }
.box { margin-top: 5mm; border-left: 2mm solid #ff0000; border-top: 0.6mm solid #ff0000; border-right: 0.6mm solid #ff0000; border-bottom: 0.6mm solid #ff0000; padding: 3mm 4mm; font-size: 12pt; line-height: 1.35; }
.box strong { font-family: "Arial Black", Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 1mm; }
.note { margin-top: 4mm; background: #e8ddfc; padding: 3mm 4mm; font-size: 12pt; line-height: 1.35; }
.note strong { font-family: "Arial Black", Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 1mm; }
footer { position: absolute; bottom: 0; left: 0; right: 0; background: #141414; color: #fff; font-size: 8.5pt; padding: 3mm 12mm; display: flex; justify-content: space-between; }
"""
STATUSES = [
    ("#059669", "Ready", "can race"),
    ("#f59e0b", "Requires service", "used, needs a service (was Turn Required)"),
    ("#0284c7", "In Progress", "service started"),
    ("#64748b", "Paused", "service paused with a reason"),
    ("#9333ea", "Repair Needed (usable)", "open repair, kart still available"),
    ("#dc2626", "Repair Required", "must not be used: stopping ticket or blocking repair"),
    ("#4f46e5", "Campaign Required", "open campaign task, kart usable"),
]

def b(s):  # mark on-screen labels: [[Label]] -> <b>Label</b>
    out = html.escape(s)
    return out.replace("[[", "<b>").replace("]]", "</b>")

CARDS = {
    "mechanic-card": ("Mechanic", "Your workshop day in KART", [
        "Sign in, choose your hub, tap [[Workshop]]. It opens in a new tab.",
        "Start on [[Overview]]: check the [[Readiness board]] against the karts.",
        "Open [[Service Queue]], tap a kart under [[Requires service]], tap [[Start service]].",
        "On [[Servicing]] tap each cell: Unchecked, [[Good]], [[Blocked]]. Type readings.",
        "Fitted a part? Under [[Components replaced]] tap [[Select]], then [[Add to components replaced]]. Every part, every time.",
        "Stopping work? [[Pause]] and pick a [[Pause reason]]. Resume from [[Paused services]].",
        "Tap [[Complete service]], tick the declaration, [[Confirm]].",
        "Problem on a kart: [[Report a kart problem]]. An incident is information only; each finding becomes a repair.",
        "Must not be used? Raise a stopping reliability ticket (needs Reliability). It takes the kart out of use.",
        "Repair done: [[Log remedy / complete repair]] with the parts used.",
        "Campaign tasks: [[Campaign work]], [[Start work]], fit parts, [[Complete work]].",
        "Find a kart: [[Open kart]], type the number (e.g. 207) or scan the QR.",
    ], True, ("Watch out", "Incidents are information only and never stop a kart. A stopping reliability ticket, an open damage ticket or missing batteries take a kart out of use. After your hub's switch time, never record anything in the Workshop App.")),
    "hub-manager-card": ("Hub manager", "Everything a mechanic does, plus", [
        "Open [[Workshop Manager]], the last Workshop tab.",
        "[[Kart Allocation]]: give karts to mechanics.",
        "[[Campaigns]] > [[New campaign]]: Integrated or Standalone, karts, parts.",
        "[[Work targets]] per person; [[Readiness targets]] per planning event.",
        "[[Parts needed]] > [[Create draft orders]].",
        "[[Order List]] stages: Draft, Submitted, approval by the hub manager, Ordered, then Goods In.",
        "[[Submit]] drafts. The hub manager approves in [[Approval queue]]: [[Approve]] or [[Reject]].",
        "After ordering with the supplier: [[Mark ordered]] (Approved lines only).",
        "[[Goods In]] on the Ordered line: quantity, unit cost, invoice ref., [[Receive stock]].",
        "[[Hub catalogue]]: hide parts, preferred supplier, [[Request a part]].",
        "[[Hub Manager]] > [[Pending approvals]]: approve sign-ups, join links, [[Create user]].",
        "Mark a kart used by hand: [[Requires service]] on its Overview tile; [[Undo]] if wrong.",
        "[[Reports]]: the Workshop App reports in Excel, PDF or CSV.",
    ], True, ("Watch out", "Until your hub's stock is moved, Parts needed may list parts that are on the shelf: check the shelf before ordering.")),
    "fkl-central-card": ("FKL Central and admin", "Master data for every hub", [
        "Select your Hub > [[FKL Central]].",
        "[[Parts catalogue]] > [[Master parts]]: search, [[Add part]] (MPN required), [[Edit part]] (pencil), [[Suppliers]].",
        "[[Catalogues]]: [[New catalogue]], add parts, then set its exact [[Kart generation]]. [[Hub catalogues]]: what each hub sees.",
        "[[Part requests]] > [[Review]]: [[Link part]], [[Add part]], [[Keep local]] or [[Reject request]].",
        "[[Master review]]: check hub-local parts, merge into a master part.",
        "[[Service checklists]]: choose the class, [[New draft]], open a section, [[Add check]].",
        "[[Check before publishing]] says No errors? [[Publish]] with [[What changed (required)]].",
        "[[Servicing]]: tyre tread, alignment, battery voltage, axle run-out. Each box has its own [[Save]].",
        "Admins: [[Admin Access]] > [[User Administration]] > [[All Users]].",
        "Set [[Hub Access]] and [[Permissions]]; save each.",
        "[[Deactivate user]] with a reason is a soft switch-off; [[Reactivate user]] undoes it.",
    ], False, ("Watch out", "Publishing a checklist changes it for every hub with that kart class from the next service. Tell the hub managers first.")),
    "remote-support-card": ("Remote support", "KART Comms, cover and direct chats", [
        "Open the KART address ending in [[/comms]]. You see the [[Support]] view.",
        "[[My queue]]: chats you claimed and hubs you cover.",
        "[[Unassigned]]: chats nobody has taken. Open one, tap [[Claim]].",
        "Reply and [[Send]]. Ask for the kart number.",
        "Solved: [[Close chat]]. Need more: [[Reopen chat]].",
        "[[Search]] finds chats by staff member, hub or message.",
        "Type a name in the search box, then tap them under [[Start a direct chat]].",
        "Select your Hub > [[Remote Support]] > [[Hub Dashboard]].",
        "Per event, choose who covers it in the [[Support cover]] list. Only Remote support holders are offered.",
        "No cover? Chats show [[Unassigned]] and all remote support is alerted.",
    ], False, ("Remember", "New direct chats between two colleagues are private to them. Remote support and admins do not see them. AI Support is automatic, not a person. Hub staff ask it first; it escalates chats to remote support.")),
    "switch-over-day-card": ("Switch-over day", "Day-one checklist for your hub", [
        "Before the day: sign in to KART and check you see [[Workshop]] for your hub. If not, tell the hub lead now.",
        "From the switch time: do not open the Workshop App to record anything.",
        "Open KART > [[Workshop]]. Check the fleet board against the karts. Tell your hub manager (hub lead) about anything wrong, with the kart number.",
        "Open [[Servicing]]: pick up the carried-over services. Complete or cancel each.",
        "Work the [[Service Queue]] for karts showing [[Requires service]] (was Turn Required).",
        "Work the open repairs. Record the parts used on each repair.",
        "Close any stopping ticket whose fault is already fixed.",
        "Carry on open campaigns in [[Campaign work]]; record fitted parts on the task.",
        "New fault: log an incident; if the kart must not be used, raise a stopping reliability ticket.",
        "Re-enter any open Workshop App order in [[Stores]].",
    ], False, ("If KART is down", "Write it on paper; enter it in KART when it is back. Do not use the Workshop App.")),
}

EXTRA = {
    "fkl-central-card": ("Remember", "Your hub lead and FKL Central agree new parts. Hub managers can give only Workshop and Purchasing."),
    "remote-support-card": ("Who covers today", "Comms routes each hub's support chats to whoever covers that hub today and shows them as On cover."),
    "switch-over-day-card": ("Remember", "Your hub lead confirms the date and time at least 24 hours before. Record every part in KART from day one. Check the shelf before ordering until the stock moves. Typed Workshop App notes are not copied."),
}

out = REPO / "tools" / "cards"
out.mkdir(parents=True, exist_ok=True)
for name, (title, sub, steps, show_status, box) in CARDS.items():
    right = []
    if show_status:
        right.append("<h2>Statuses</h2>")
        for col, lab, mean in STATUSES:
            right.append(f'<div class="status"><span class="sw" style="background:{col}"></span><div><b>{html.escape(lab)}</b> {html.escape(mean)}</div></div>')
    else:
        k, v = EXTRA[name]
        right.append(f'<div class="note"><strong>{html.escape(k)}</strong>{html.escape(v)}</div>')
    right.append(f'<div class="box"><strong>{html.escape(box[0])}</strong>{html.escape(box[1])}</div>')
    if show_status:
        first = "KART problems: tell your hub manager (hub lead), with the kart number. " if name == "mechanic-card" else ""
        right.append(f'<div class="note"><strong>Help</strong>{first}Help with KART: AI Support in KART Comms first (bookmark the KART address ending in /comms); it escalates to Remote Support or FKL Central.</div>')
    items = "\n".join(f"<li>{b(s)}</li>" for s in steps)
    doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{html.escape(title)} quick reference card: From the Workshop App to KART</title>
<style>{CSS}</style>
</head>
<body>
<div class="banner">Draft, pending approval by Sammy / Joe</div>
<header>
<img src="../../docs/assets/brand/fkl-logo-blue.png" alt="FAT Karting League">
<div><h1>{html.escape(title)}</h1><p>{html.escape(sub)}. From the Workshop App to KART.</p></div>
</header>
<main>
<section><h2>Steps</h2><ol>
{items}
</ol></section>
<section>
{chr(10).join(right)}
</section>
</main>
<footer><span>Official guide of FAT Karting League, part of Smedley Group. Internal use only.</span><span>Draft 2026-10</span></footer>
</body>
</html>
"""
    (out / f"{name}.html").write_text(doc, encoding="utf-8")
print("cards:", ", ".join(CARDS))
