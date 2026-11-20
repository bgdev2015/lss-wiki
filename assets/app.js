/* ============================================================
   LSS-Wiki – App-Logik (Reines JavaScript, keine Frameworks)
   Routing per Hash · Suche · Theme · flache Navigation
   ============================================================ */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const nav = document.getElementById("mainnav");
  const searchInput = document.getElementById("search");
  const searchOverlay = document.getElementById("search-results");
  const searchList = document.getElementById("search-list");
  const searchClose = document.getElementById("search-close");
  const menuBtn = document.getElementById("menu-btn");
  const themeToggle = document.getElementById("theme-toggle");

  /* ---------- Theme ---------- */
  const storedTheme = localStorage.getItem("lsswiki-theme");
  if (storedTheme) document.documentElement.dataset.theme = storedTheme;
  updateThemeIcon();
  themeToggle.addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = t;
    localStorage.setItem("lsswiki-theme", t);
    updateThemeIcon();
  });
  function updateThemeIcon() {
    themeToggle.textContent = document.documentElement.dataset.theme === "light" ? "☀️" : "🌙";
  }

  /* ---------- Farbstil (Rot / Blau) ---------- */
  const accentToggle = document.getElementById("accent-toggle");
  const storedAccent = localStorage.getItem("lsswiki-accent");
  if (storedAccent) document.documentElement.dataset.accent = storedAccent;
  updateAccentIcon();
  accentToggle.addEventListener("click", () => {
    const a = document.documentElement.dataset.accent === "blau" ? "rot" : "blau";
    document.documentElement.dataset.accent = a;
    localStorage.setItem("lsswiki-accent", a);
    updateAccentIcon();
  });
  function updateAccentIcon() {
    /* Dashboard zeigt den Stil, zu dem gewechselt wird (nicht den aktiven) */
    accentToggle.textContent = document.documentElement.dataset.accent === "blau" ? "🔴" : "🔵";
  }

  /* ---------- Navigation (eine flache Ebene) ---------- */
  const NAV = [
    { id: "start", label: "Start", icon: "🏠" },
    { id: "spielprinzip", label: "Spielprinzip", icon: "🎮" },
    { id: "gebaeude", label: "Wachen & Ausbau", icon: "🏭" },
    { id: "kombis", label: "Fahrzeugkombis", icon: "🚛" },
    { id: "fahrzeuge", label: "Fahrzeuge", icon: "🚒" },
    { id: "kosten", label: "Baukosten", icon: "🧾" },
    { id: "personal", label: "Personal & Lehrgänge", icon: "🎓" },
    { id: "verbaende", label: "Verbände", icon: "🤝" },
    { id: "events", label: "Events & Saison", icon: "🎄" },
    { id: "premium", label: "Premium", icon: "💎" },
    { id: "tipps", label: "Tipps & FAQ", icon: "💡" },
    { id: "glossar", label: "Glossar", icon: "📖" },
    { id: "links", label: "Links & Quellen", icon: "🔗" }
  ];

  nav.innerHTML = NAV.map(n => `<a href="#${n.id}" data-nav="${n.id}"><span>${n.icon}</span>${n.label}</a>`).join("");

  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );

  /* ---------- Rendering ---------- */
  function currentRoute() {
    const h = location.hash.replace(/^#/, "");
    return WIKI.sections.some(s => s.id === h) ? h : "start";
  }

  function render() {
    const id = currentRoute();
    const sec = WIKI.sections.find(s => s.id === id);
    document.title = sec.title + " – LSS-Wiki";
    window.scrollTo(0, 0);
    app.innerHTML = `<article class="page">${sec.html}</article>`;
    nav.querySelectorAll("a").forEach(a =>
      a.classList.toggle("active", a.dataset.nav === id)
    );
    wireChips();
  }

  /* Flache Filter-Chips innerhalb einer Seite */
  function wireChips() {
    app.querySelectorAll("[data-chipgroup]").forEach(group => {
      const chips = group.querySelectorAll(".chip");
      const panels = group.querySelectorAll(".chip-panel");
      const activate = key => {
        chips.forEach(c => c.classList.toggle("active", c.dataset.chip === key));
        panels.forEach(p => p.classList.toggle("active", p.dataset.panel === key));
      };
      chips.forEach(c => c.addEventListener("click", () => activate(c.dataset.chip)));
      if (chips.length) activate(chips[0].dataset.chip);
    });
  }

  /* ---------- Suche ---------- */
  const INDEX = WIKI.sections.map(s => ({
    id: s.id,
    title: s.title,
    icon: s.icon || "📄",
    text: s.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")
  }));

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { showSearch(searchInput.value); }
    if (e.key === "Escape") hideSearch();
  });
  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim().length >= 2) showSearch(searchInput.value, true);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== searchInput) { e.preventDefault(); searchInput.focus(); }
    if (e.key === "Escape") hideSearch();
  });
  searchClose.addEventListener("click", hideSearch);
  searchOverlay.addEventListener("click", e => { if (e.target === searchOverlay) hideSearch(); });

  function hideSearch() { searchOverlay.hidden = true; }

  function showSearch(query, liveMode) {
    const q = query.trim().toLowerCase();
    if (!q) { searchOverlay.hidden = true; return; }
    if (!liveMode) searchOverlay.hidden = false;

    const words = q.split(/\s+/).filter(Boolean);
    const hits = [];
    INDEX.forEach(entry => {
      const lower = entry.text.toLowerCase();
      let score = 0;
      let ok = true;
      let firstPos = -1;
      words.forEach(w => {
        const p = lower.indexOf(w);
        if (p === -1) { ok = false; return; }
        score += (p < 40 ? 3 : 1) + (entry.title.toLowerCase().includes(w) ? 4 : 0);
        if (firstPos === -1 || p < firstPos) firstPos = p;
      });
      if (ok) hits.push({ entry, score, firstPos });
    });
    hits.sort((a, b) => b.score - a.score);

    searchList.innerHTML = hits.length
      ? hits.slice(0, 20).map(h => {
          const start = Math.max(0, h.firstPos - 60);
          let excerpt = entryText(h.entry).substr(start, 190).trim();
          words.forEach(w => {
            excerpt = excerpt.replace(new RegExp("(" + esc(w) + ")", "gi"), "<mark>$1</mark>");
          });
          return `<a class="sr-item" href="#${h.entry.id}" data-close>
            <h4><span>${h.entry.icon}</span>${h.entry.title}</h4>
            <p>… ${excerpt} …</p></a>`;
        }).join("")
      : `<div class="sr-empty">Keine Treffer für <strong>„${query}“</strong></div>`;

    searchList.querySelectorAll("[data-close]").forEach(a =>
      a.addEventListener("click", hideSearch)
    );
  }
  function entryText(e) { return e.text; }

  /* ---------- Boot ---------- */
  window.addEventListener("hashchange", render);
  render();
})();
