/* Western States lottery: live odds table.
 * Usage in a post:
 *   <div id="wser-live" data-json="/assets/wser/live.json"
 *        data-analogies="/assets/wser/analogies.csv"></div>
 *   <script src="/assets/wser/wser-live.js" defer></script>
 */
(function () {
  "use strict";

  var CSS = [
    /* Colours follow the blog: text inherits, greys are translucent so they sit on any background. */
    ".wser-live{--wl-muted:rgba(110,124,116,1);--wl-rule:rgba(120,135,125,.35);--wl-track:rgba(120,135,125,.16);--wl-fill:rgba(111,160,103,.55);--wl-head:rgba(120,135,125,.12);",
    "font:inherit;color:inherit;margin:1.5rem 0}",
    ".wser-live p{margin:0 0 .75rem;color:var(--wl-muted);font-size:.95em;line-height:1.5}",
    ".wser-live .wl-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}",
    ".wser-live table{border-collapse:collapse;width:100%;min-width:34rem;font-variant-numeric:tabular-nums}",
    ".wser-live th,.wser-live td{padding:.5rem .6rem;border-bottom:1px solid var(--wl-rule);text-align:left;vertical-align:middle}",
    ".wser-live thead th{background:var(--wl-head);font-weight:600;font-size:.9em}",
    ".wser-live td.wl-num,.wser-live th.wl-num{text-align:right;white-space:nowrap}",
    ".wser-live .wl-bar{position:relative;min-width:7.5rem;height:1.6rem;background:var(--wl-track);border-radius:3px;overflow:hidden}",
    ".wser-live .wl-bar span{position:absolute;inset:0 auto 0 0;background:var(--wl-fill)}",
    ".wser-live .wl-bar b{position:relative;display:block;padding:0 .45rem;line-height:1.6rem;font-weight:600}",
    ".wser-live .wl-like{font-size:.95em;line-height:1.35}",
    ".wser-live .wl-like small{color:var(--wl-muted);white-space:nowrap}",
    ".wser-live .wl-note{margin-top:.75rem;font-size:.85em}",
    ".wser-live .wl-error{padding:.75rem;border:1px solid var(--wl-rule);border-radius:3px}",
    ".wser-live .wl-like-m{display:none;margin-top:.3rem;font-size:.85em;line-height:1.3}",
    ".wser-live .wl-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}",
    "@media (max-width:560px){.wser-live table{min-width:0}.wser-live .wl-col-like{display:none}.wser-live .wl-like-m{display:block}.wser-live .wl-bar{min-width:6rem}}"
  ].join("");

  function addStyle() {
    if (document.getElementById("wser-live-css")) return;
    var s = document.createElement("style");
    s.id = "wser-live-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // Minimal CSV parser (handles quoted fields and commas inside quotes).
  function parseCSV(text) {
    var rows = [], row = [], field = "", q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') q = false;
        else field += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field); field = "";
        if (row.join("").trim()) rows.push(row);
        row = [];
      } else field += c;
    }
    row.push(field);
    if (row.join("").trim()) rows.push(row);
    var head = rows.shift().map(function (h) { return h.trim().toLowerCase(); });
    return rows.map(function (r) {
      var o = {};
      head.forEach(function (h, k) { o[h] = (r[k] || "").trim(); });
      return o;
    });
  }

  function loadAnalogies(text) {
    return parseCSV(text).map(function (r) {
      var p = r.p ? parseFloat(r.p) : parseFloat(r.num) / parseFloat(r.den);
      return { event: r.event, p: p };
    }).filter(function (a) { return a.event && a.p > 0 && a.p < 1; });
  }

  function logit(p) {
    p = Math.min(Math.max(p, 1e-6), 1 - 1e-6);
    return Math.log(p / (1 - p));
  }

  // Closest analogy on the log-odds scale: fair at both 0.5% and 95%.
  function closest(p, list) {
    var best = null, d = Infinity, lp = logit(p);
    list.forEach(function (a) {
      var dd = Math.abs(logit(a.p) - lp);
      if (dd < d) { d = dd; best = a; }
    });
    return best;
  }

  function pct(p) {
    if (p >= 0.9995) return ">99.9%";
    if (p > 0 && p < 0.0005) return "<0.05%";
    return (p * 100).toFixed(p < 0.0995 ? 2 : 1) + "%";
  }

  function oneIn(p) {
    if (p <= 0) return "–";
    var n = 1 / p;
    return n < 10 ? n.toFixed(1) : Math.round(n).toLocaleString("en-GB");
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function render(el, data, analogies) {
    var when = new Date(data.computed_at_utc);
    var whenTxt = isNaN(when) ? data.computed_at_utc
      : when.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    var rows = data.rows.slice().sort(function (a, b) { return a.tickets - b.tickets; });

    var body = rows.map(function (r) {
      var a = r.entrants > 0 ? closest(r.probability, analogies) : null;
      var w = Math.max(0, Math.min(100, r.probability * 100)).toFixed(2);
      return "<tr>" +
        '<td class="wl-num">' + r.tickets.toLocaleString("en-GB") + "</td>" +
        '<td class="wl-num">' + r.entrants.toLocaleString("en-GB") + "</td>" +
        '<td><div class="wl-bar" role="img" aria-label="' + pct(r.probability) + '"><span style="width:' + w + '%"></span><b>' + pct(r.probability) + "</b></div>" +
        (a ? '<div class="wl-like-m">≈ ' + esc(a.event) + "</div>" : "") + "</td>" +
        '<td class="wl-num">1 in ' + oneIn(r.probability) + "</td>" +
        '<td class="wl-like wl-col-like">' + (a ? esc(a.event) + " <small>(" + pct(a.p) + ")</small>" : "–") + "</td>" +
        "</tr>";
    }).join("");

    el.innerHTML =
      "<p>So far " + data.total_entrants.toLocaleString("en-GB") + " runners have entered the " +
      esc(data.lottery_year || "") + " lottery with " + data.total_tickets.toLocaleString("en-GB") +
      " tickets. WSER updated its list on " + esc(data.wser_last_updated) +
      " (Pacific time); the odds below were recomputed on " + esc(whenTxt) + ".</p>" +
      '<div class="wl-scroll"><table>' +
      "<caption class=\"wl-sr\">Chance of getting into Western States by number of tickets</caption>" +
      '<thead><tr><th class="wl-num" scope="col">Tickets</th><th class="wl-num" scope="col">Entrants</th>' +
      '<th scope="col">Chance</th><th class="wl-num" scope="col">Odds</th><th class="wl-col-like" scope="col">About as likely as…</th></tr></thead>' +
      "<tbody>" + body + "</tbody></table></div>" +
      '<p class="wl-note">Chance of being one of the ' + data.draw_size +
      " runners drawn (about 260 in the lottery plus about 30 from the wait list), from " +
      data.simulations.toLocaleString("en-GB") + " simulated lotteries on the current hat. " +
      "Ticket counts stay preliminary until registration closes, so the odds will keep moving. " +
      'Source: <a href="' + esc(data.source_url) + '">wser.org</a>.</p>';
  }

  function fail(el, what) {
    el.innerHTML = '<p class="wl-error">The live odds could not load (' + esc(what) +
      "). Reload the page to try again.</p>";
  }

  function start() {
    var el = document.getElementById("wser-live");
    if (!el) return;
    addStyle();
    el.classList.add("wser-live");
    var bust = "?v=" + Date.now();
    var jsonUrl = (el.getAttribute("data-json") || "/assets/wser/live.json") + bust;
    var csvUrl = (el.getAttribute("data-analogies") || "/assets/wser/analogies.csv") + bust;
    Promise.all([
      fetch(jsonUrl, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error("live.json " + r.status); return r.json(); }),
      fetch(csvUrl, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error("analogies.csv " + r.status); return r.text(); })
    ]).then(function (res) {
      render(el, res[0], loadAnalogies(res[1]));
    }).catch(function (e) { fail(el, e.message); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
