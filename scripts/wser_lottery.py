#!/usr/bin/env python3
"""
Western States lottery live odds.

Fetches the current applicant table from wser.org, checks it, runs a Monte Carlo
of the draw and writes assets/wser/live.json (+ one line in history.csv).

The draw: tickets are pulled one at a time and a runner whose name comes out
again is skipped, until DRAW_SIZE different runners are picked. That is the same
as giving each runner an exponential "clock" with rate = number of tickets and
taking the DRAW_SIZE earliest clocks, which is what we simulate (exact, fast).

Environment variables (all optional):
  LOTTERY_URL  page to read; default: newest lotteryYYYY.html linked from /lottery/
  DRAW_SIZE    runners picked (default 290 = ~260 lottery + ~30 from the wait list)
  SIMS         number of simulated draws (default 20000)
  FORCE        "1" = recompute even if WSER's "Last Updated" has not changed
"""
import csv
import datetime as dt
import html
import json
import os
import re
import sys
import time
import urllib.request

import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "wser")
LIVE_JSON = os.path.join(OUT_DIR, "live.json")
HISTORY_CSV = os.path.join(OUT_DIR, "history.csv")

DRAW_SIZE = int(os.environ.get("DRAW_SIZE", "290"))
SIMS = int(os.environ.get("SIMS", "20000"))
FORCE = os.environ.get("FORCE", "0") == "1"
TICKET_CLASSES = [2 ** k for k in range(16)]  # 1 ... 32768, room to grow


def fetch(url):
    """GET a page, bypassing caches."""
    sep = "&" if "?" in url else "?"
    req = urllib.request.Request(
        f"{url}{sep}nocache={int(time.time())}",
        headers={
            "User-Agent": "geopastore-wser-odds/1.0 (+https://geopastore.github.io)",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8", errors="replace")


def find_lottery_url():
    if os.environ.get("LOTTERY_URL"):
        return os.environ["LOTTERY_URL"]
    page = fetch("https://www.wser.org/lottery/")
    years = [int(y) for y in re.findall(r"lottery(\d{4})\.html", page)]
    if not years:
        sys.exit("Could not find a lotteryYYYY.html link on https://www.wser.org/lottery/")
    return f"https://www.wser.org/lottery{max(years)}.html"


def to_text(raw):
    """HTML -> one line of text, cells separated by spaces."""
    raw = re.sub(r"(?is)<(script|style).*?</\1>", " ", raw)
    raw = re.sub(r"<[^>]+>", " ", raw)
    raw = html.unescape(raw).replace("\xa0", " ")
    return re.sub(r"\s+", " ", raw)


def num(s):
    return int(s.replace(",", ""))


def parse(raw):
    text = to_text(raw)

    def grab(pattern, what):
        m = re.search(pattern, text, re.I)
        if not m:
            sys.exit(f"Could not find '{what}' on the page; its layout may have changed.")
        return m.group(1)

    total_tickets = num(grab(r"Total Tickets:\s*([\d,]+)", "Total Tickets"))
    total_entrants = num(grab(r"Total Entrants:\s*([\d,]+)", "Total Entrants"))
    last_updated = grab(r"Last Updated:\s*([\d/-]+\s+[\d:]+\s*[AP]M)", "Last Updated").strip()
    year_m = re.search(r"(\d{4})\s+(?:WSER\s+)?Lottery", text)
    year = int(year_m.group(1)) if year_m else None

    # The summary table sits between the "Total Entrants" line and the runner list
    # ("ID Last Name ..."). Read the numbers there in order and keep each triple
    # (tickets, entrants, total) where total == tickets * entrants.
    start = text.find("Last Updated")
    end = text.find("Last Name", start)
    block = text[start:end if end > 0 else start + 3000]
    block = block.split("Tickets", 1)[-1]  # skip the timestamp's own digits
    nums = [num(x) for x in re.findall(r"\d[\d,]*", block)]
    rows = {}
    i = 0
    while i + 2 < len(nums):
        t, e, tot = nums[i : i + 3]
        if t in TICKET_CLASSES and t * e == tot and t not in rows:
            rows[t] = e
            i += 3
        else:
            i += 1
    if not rows:
        sys.exit("Found no ticket rows in the summary table.")

    # Self-checks: refuse to publish numbers that do not add up.
    sum_tickets = sum(t * e for t, e in rows.items())
    sum_entrants = sum(rows.values())
    if sum_tickets != total_tickets or sum_entrants != total_entrants:
        sys.exit(
            f"Table does not add up: rows give {sum_entrants} entrants / {sum_tickets} tickets, "
            f"page says {total_entrants} / {total_tickets}."
        )
    return {
        "year": year,
        "last_updated": last_updated,
        "total_tickets": total_tickets,
        "total_entrants": total_entrants,
        "rows": dict(sorted(rows.items())),
    }


def simulate(rows, draw_size, sims, seed=2027):
    tickets = np.array(list(rows.keys()), dtype=float)
    people = np.array(list(rows.values()), dtype=int)
    n = int(people.sum())
    if n <= draw_size:  # everyone gets in
        return np.ones(len(tickets))
    t = np.repeat(tickets, people)
    group = np.repeat(np.arange(len(tickets)), people)
    rng = np.random.default_rng(seed)
    picked = np.zeros(len(tickets))
    batch = max(1, min(500, 5_000_000 // n))  # keep memory around 40 MB
    done = 0
    while done < sims:
        b = min(batch, sims - done)
        keys = rng.exponential(size=(b, n)) / t
        first = np.argpartition(keys, draw_size - 1, axis=1)[:, :draw_size]
        picked += np.bincount(group[first].ravel(), minlength=len(tickets))
        done += b
    return np.where(people > 0, picked / (people * sims), 0.0)


def main():
    url = find_lottery_url()
    data = parse(fetch(url))
    print(f"{url}: {data['total_entrants']} entrants, {data['total_tickets']} tickets, "
          f"updated {data['last_updated']}")

    if not FORCE and os.path.exists(LIVE_JSON):
        with open(LIVE_JSON, encoding="utf-8") as f:
            old = json.load(f)
        if (old.get("wser_last_updated") == data["last_updated"]
                and old.get("source_url") == url
                and old.get("draw_size") == DRAW_SIZE):
            print("Nothing new on wser.org; leaving files unchanged.")
            return

    probs = simulate(data["rows"], DRAW_SIZE, SIMS)
    now = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()
    rows = [
        {
            "tickets": t,
            "entrants": e,
            "total": t * e,
            "probability": round(float(p), 6),
            "expected_selected": round(float(p) * e, 2),
        }
        for (t, e), p in zip(data["rows"].items(), probs)
    ]
    out = {
        "lottery_year": data["year"],
        "source_url": url,
        "wser_last_updated": data["last_updated"],
        "computed_at_utc": now,
        "total_entrants": data["total_entrants"],
        "total_tickets": data["total_tickets"],
        "draw_size": DRAW_SIZE,
        "simulations": SIMS,
        "rows": rows,
    }
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(LIVE_JSON, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)

    new_file = not os.path.exists(HISTORY_CSV)
    with open(HISTORY_CSV, "a", newline="", encoding="utf-8") as f:
        w = csv.writer(f, lineterminator="\n")
        if new_file:
            w.writerow(["computed_at_utc", "wser_last_updated", "lottery_year", "entrants",
                        "tickets", "draw_size"] + [f"p_{t}" for t in TICKET_CLASSES[:11]])
        pmap = {r["tickets"]: r["probability"] for r in rows}
        w.writerow([now, data["last_updated"], data["year"], data["total_entrants"],
                    data["total_tickets"], DRAW_SIZE] + [pmap.get(t, "") for t in TICKET_CLASSES[:11]])
    for r in rows:
        print(f"{r['tickets']:>5} tickets  {r['entrants']:>5} entrants  {r['probability']*100:6.2f}%")


if __name__ == "__main__":
    main()
