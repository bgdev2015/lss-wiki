/* ============================================================
   LSS-Wiki – Inhalt Teil 1 (Start, Spielprinzip, Wachen & Ausbau)
   Quellen: offizielles Leitstellenspiel-Wiki (wiki.leitstellenspiel.de),
   Spielangaben & Community · Stand November 2026
   ============================================================ */

window.WIKI = { title: "LSS-Wiki", sections: [] };

(function () {
  const S = window.WIKI.sections;
  const add = (id, icon, title, html) => S.push({ id, icon, title, html });
  const tr = (cells) => "<tr>" + cells.map(c => `<td>${c}</td>`).join("") + "</tr>";
  const th = (cells) => "<tr>" + cells.map(c => `<th>${c}</th>`).join("") + "</tr>";
  const tbl = (head, rows) =>
    `<div class="tbl-wrap"><table><thead>${th(head)}</thead><tbody>${rows.join("")}</tbody></table></div>`;

  /* ============================== START ============================== */
  add("start", "🏠", "Willkommen im LSS-Wiki", `
  <section class="hero glass">
    <h1>🚨 Willkommen im LSS-Wiki</h1>
    <p>Das inoffizielle Wissenskompendium zum Browsergame <strong>Leitstellenspiel.de</strong> – für Leitstellen, die strukturiert aufbauen wollen.
    Von der ersten Feuerwehrkleinwache bis zum Verbandsgroßeinsatz: Gebäude, Ausbauten, Fahrzeuge, Personal und Taktik – aufbereitet zum Blättern und Suchen.</p>
    <div class="hero-badges">
      <span class="badge">🚒 Feuerwehr</span>
      <span class="badge">🚑 Rettungsdienst</span>
      <span class="badge">👮 Polizei</span>
      <span class="badge">🔧 THW</span>
      <span class="badge">🚤 Wasserrettung</span>
      <span class="badge">🌊 Seenotrettung</span>
      <span class="badge">⛰️ Bergrettung</span>
      <span class="badge">🧪 SEG</span>
      <span class="badge">📚 Läuft ohne Server</span>
    </div>
  </section>

  <section class="card glass">
    <h2>Schnellzugriff</h2>
    <div class="grid">
      <a class="tile" href="#spielprinzip"><span class="t-icon">🎮</span><h3>Spielprinzip</h3><p>Einsätze, Leitstelle, Credits und Coins – die Grundlagen.</p></a>
      <a class="tile" href="#gebaeude"><span class="t-icon">🏭</span><h3>Wachen &amp; Ausbau</h3><p>Alle Gebäude, Ausbaustufen, Kosten und Erweiterungen.</p></a>
      <a class="tile" href="#kombis"><span class="t-icon">🚛</span><h3>Fahrzeugkombis</h3><p>Mögliche Zugzusammenstellungen je Wache und Ausbau – z. B. mit Anhänger oder als Selbstfahrer.</p></a>
      <a class="tile" href="#fahrzeuge"><span class="t-icon">🚒</span><h3>Fahrzeugliste</h3><p>Alle Fahrzeuge von Feuerwehr, RD, Polizei, THW &amp; Co.</p></a>
      <a class="tile" href="#personal"><span class="t-icon">🎓</span><h3>Personal &amp; Lehrgänge</h3><p>Einstellen, Werben, Lehrgänge und Schulen.</p></a>
      <a class="tile" href="#premium"><span class="t-icon">💎</span><h3>Premium</h3><p>Vorteile und Preise des Premium-Accounts.</p></a>
      <a class="tile" href="#tipps"><span class="t-icon">💡</span><h3>Tipps &amp; FAQ</h3><p>Häufige Fehler vermeiden und effizient wachsen.</p></a>
    </div>
  </section>

  <section class="card glass">
    <h2>Das Wichtigste in 60 Sekunden</h2>
    <ul>
      <li><strong>Leitstellenspiel.de</strong> ist ein Browsergame: Du alarmierst Fahrzeuge deiner Wachen zu Notrufeinsätzen und wächst mit jedem Einsatz (Credits + Punkte).</li>
      <li>Gebäude verteilen sich auf deinem Kartenareal. <strong>Jedes 10. Gebäude</strong> erlaubt eine zusätzliche Leitstelle, mit der du Einsätze und Wachen ordnen kannst.</li>
      <li>Fahrzeuge stationierst du über <strong>Ausbauten</strong>: Jede Ausbaustufe einer Wache schaltet einen Stellplatz frei, Spezialausbauten öffnen eigene Fahrzeugtypen.</li>
      <li><strong>Personal ist alles:</strong> Ohne Personal fährt kein Fahrzeug aus. Lehrgänge an Schulen schalten Spezialfahrer frei.</li>
      <li>Bautaktik: Bis zur <strong>24. Wache</strong> kostet jede Feuerwache/Polizeiwache konstant 100.000 Credits – danach steigen die Kosten deutlich.</li>
    </ul>
    <div class="hint blue">💡 Tipp: Drücke <span class="kbd">/</span>, um jederzeit die Volltextsuche zu öffnen. Sie findet alles – von „HLF“ bis „Rettungshundestaffel“.</div>
  </section>
  `);

  /* ============================== SPIELPRINZIP ============================== */
  add("spielprinzip", "🎮", "Spielprinzip & Grundlagen", `
  <section class="card glass">
    <h2>So funktioniert Leitstellenspiel.de</h2>
    <p>Im <a href="https://www.leitstellenspiel.de" target="_blank" rel="noopener">Leitstellenspiel.de</a> leitest du eine Notruf-Leitstelle: Einsätze erscheinen auf deiner Karte, du alarmierst Fahrzeuge deiner Wachen, der Einsatz wird abgearbeitet – und du verdienst <strong>Credits</strong> und <strong>Punkte</strong>, mit denen du Wachen, Ausbauten, Fahrzeuge und Personal finanzierst.</p>

    <h3>Der Spielkreislauf</h3>
    <p>Notruf erscheint → Alarmierungsfenster (AAO anklicken) → Fahrzeuge fahren raus → Einsatz abarbeiten → Fahrzeuge kehren zurück → Credits &amp; Punkte gutgeschrieben → in Wachstum investieren.</p>

    <h3>Währungen</h3>
    ${tbl(["Währung", "Wie erhält man sie?", "Wofür?"], [
      tr(["<strong>Credits</strong>", "Einsätze, Credits-Events, Log-in-Belohnungen", "Gebäude, Ausbauten, Fahrzeuge, Lehrgänge"]),
      tr(["<strong>Coins</strong>", "Microtransaktionen, Events, Log-in-Belohnung Tag 7 (5 Coins), Aufgaben", "Sofort-Bau, Premium, Alternative zum Credits-Kauf bei fast jedem Gebäude"])
    ])}
    <div class="hint">💡 Während <strong>2×-Credits-Events</strong> (mit Premium 2,5×) bringen Einsätze zeitweise deutlich mehr – lege große Käufe auf solche Fenster.</div>

    <h3>Die Leitstelle</h3>
    <ul>
      <li><strong>Bau:</strong> Nach jeweils 10 Gebäuden kann eine weitere Leitstelle gebaut werden. Sie verwaltet die ihr zugewiesenen Gebäude und Fahrzeuge.</li>
      <li><strong>Deaktivieren:</strong> Deaktivierte Leitstellen generieren keine Einsätze mehr – die Wachen bleiben aber aktiv und zählen für Limits weiter.</li>
      <li><strong>Eigener Einsatzbereich:</strong> Nur die Gebäude dieser Leitstelle zählen für die Einsatzgenerierung – verhindert Großlagen in schwach ausgebauten Gebieten.</li>
      <li><strong>Tabs der Leitstelle:</strong> Geplante Einsätze · Protokoll · Statistiken · Gebäude (inkl. Personal-Soll und Bewerbungsphasen) · Erweiterungen · Fahrzeuge · Lehrgänge · Streifenfahrten und Routen · Einstellungen.</li>
    </ul>

    <h3>Wichtige Leitstellen-Einstellungen</h3>
    ${tbl(["Einstellung", "Wirkung"], [
      tr(["Rettungsdienst automatisch zurückalarmieren <span class='tag coin'>Premium</span>", "Frei gewordene Rettungsdienst-Fahrzeuge kehren automatisch zur Wache zurück."]),
      tr(["Eventeinsätze deaktivieren", "Keine Oster-, Halloween- oder Weihnachtseinsätze (Saisoneinsätze bleiben)."]),
      tr(["Einsatzausbreitung", "Einsätze können sich ausbreiten (z. B. Kellerbrand → Wohnungsbrand). Abschaltbar."]),
      tr(["Folgeeinsätze", "Manche Einsätze erzeugen Nachfolgeeinsätze (z. B. Ladungsbergung nach LKW-Unfall)."]),
      tr(["Max. Entfernung Verbandseinsätze (km)", "Filtert Verbandseinsätze nach Umkreis."]),
      tr(["Automatischer Gefangenentransport", "Fahrzeuge mit DGL-Leitung bringen Gefangene automatisch in Zellen (Standard 10 Minuten, konfigurierbar)."]),
      tr(["Nur eigene POI verwenden", "Nur selbst gesetzte Points of Interest werden genutzt – Werkfeuerwehr-POIs immer selbst setzen."]),
      tr(["Fahrzeugrouten auf der Karte anzeigen", "Visuell hilfreich, aber bei vielen Fahrzeugen performancelastig."])
    ])}

    <h3>Anticheat / Gebäudeabstand</h3>
    <div class="hint red">⚠️ Wer zu viele Wachen zu eng nebeneinander baut, löst den <strong>Anticheat</strong> aus: Einsätze spawnen dann weit weg. Das Spiel warnt vorher – plane also Abstand zwischen den Wachen.</div>

    <h3>Sonstige Bausteine</h3>
    <ul>
      <li><strong>Bereitstellungsraum:</strong> Temporärer Standort für Fahrzeuge (auch verbandsweit nutzbar), Standard 24 Std., zurücksetzbar auf 24/48/72/168 Stunden. Max. 4 parallel (Premium: 8).</li>
      <li><strong>Streifenfahrten:</strong> FuStW, FuStW (DGL), Polizeimotorräder und DHuFüKW können auf angelegte Routen geschickt werden.</li>
      <li><strong>POI (Point of Interest):</strong> Eigene Einsatzorte auf der Karte, u. a. für Werkfeuerwehr-Einsätze.</li>
    </ul>
  </section>
  `);

  /* ============================== WACHEN & AUSBAU ============================== */
  add("gebaeude", "🏭", "Wachen & Ausbau", `
  <section class="card glass" data-chipgroup>
    <h2>Alle Gebäude im Überblick</h2>
    <p>Wähle eine Organisation – Details (Kosten, Stufen, Erweiterungen) erscheinen darunter. Alle Ausbauzeiten greifen pro Wache; mehrere Erweiterungen gleichzeitig sind ohne Premium auf 1 laufend + 1 Warteschlangenplatz begrenzt. Jointabelle aller Preise: <a href="#kosten">Baukosten</a>.</p>
    <div class="chip-row">
      <button class="chip" data-chip="ff">🚒 Feuerwehr</button>
      <button class="chip" data-chip="rd">🚑 Rettungsdienst</button>
      <button class="chip" data-chip="seg">🧪 SEG</button>
      <button class="chip" data-chip="pol">👮 Polizei</button>
      <button class="chip" data-chip="thw">🔧 THW</button>
      <button class="chip" data-chip="wr">🚤 Wasserrettung</button>
      <button class="chip" data-chip="br">⛰️ Bergrettung</button>
      <button class="chip" data-chip="sonst">ℹ️ Sonstiges</button>
    </div>

    <!-- Feuerwehr -->
    <div class="chip-panel" data-panel="ff">
      <h3>Feuerwehr-Kleinwache</h3>
      ${tbl(["Eigenschaft", "Wert"], [
        tr(["Neubau", "50 % des Preises einer Feuerwache (max. 1.000.000 Credits) oder <strong>25 Coins</strong>"]),
        tr(["Max. Stellplätze", "6 Fahrzeuge, zusätzlich 2 Abrollbehälter-Stellplätze (je 150.000 Cr.); keine Anhänger-Stellplätze"]),
        tr(["Max. Ausbaustufen", "5"]),
        tr(["Erweiterungen", "Wie Feuerwache, <em>aber nicht möglich</em>: Großwache, NEA 200 und Anhänger-Stellplätze; ELW-2-Drohne fehlt in der Drohneneinheit; Lagerraum 100 (statt 250)"]),
        tr(["Geschenk bei Neubau", "1× <strong>LF</strong> nach Wahl – oder HLF für 15.000 Credits Aufpreis (ab Dienstgrad Gruppenführer)"]),
        tr(["Umbau zur Feuerwache", "Preisdifferenz oder 5 Coins, Bauzeit 24 Stunden"])
      ])}
      <h3>Feuerwache (Normalwache)</h3>
      <ul>
        <li>Max. <strong>19 Ausbaustufen = 20 Stellplätze</strong>, plus 10 weitere über die Großwachen-Erweiterung.</li>
        <li>Baukosten Wache 1–24: je <strong>100.000 Credits</strong>. Ab Wache 25 gilt <code>100.000 + 200.000 × log₂(Anzahl Feuerwachen − 22)</code>: 25. Wache 300.000, 26. 416.993, 27. 500.000, 28. 564.386, 29. 616.993 … 45. 991.886, 1.000. Wache 2.086.738 Credits. Alternativ immer <strong>30 Coins</strong>.</li>
        <li>Geschenk bei Neubau: 1× <strong>LF</strong> nach Wahl (oder HLF für 15.000 Credits Aufpreis).</li>
        <li>Abrollbehälter-Stellplätze zählen extra (max. 10 über Erweiterungen, je 100.000 Credits, 7 Tage).</li>
      </ul>
      <div class="hint blue">💡 Taktik: Die ersten 24 Wachen sind die „günstige Ration“ – baue ein breites Netz, bevor die Kosten eskalieren.</div>
      <h3>Ausbaustufen &amp; Stellplätze</h3>
      ${tbl(["Stufe", "Kosten", "Stellplätze gesamt"], [
        tr(["1", "10.000 Credits / 10 Coins", "1"]),
        tr(["2", "50.000 Credits / 15 Coins", "2"]),
        tr(["3–19", "je 100.000 Credits / 20 Coins", "3–20 (Kleinwache: 3–6)"])
      ])}
      <p><strong>Stellplätze gelten für alle Fahrzeuge und Anhänger.</strong> Anhänger nutzen zuerst Anhängerstellplätze; Abrollbehälter passen nur auf AB-Stellplätze.</p>
      <h3>Erweiterungen (Feuerwache)</h3>
      ${tbl(["Erweiterung", "Bauzeit", "Kosten", "Wirkung"], [
        tr(["<strong>Rettungsdienst</strong>", "7 Tage", "100.000 Cr. / 20 Coins", "RTW, KTW, NEF, GRTW, NAW, ITW stationierbar; zählt wie eine Rettungswache (inkl. NEF-Pflicht ab 3 Wachen/Ausbauten)"]),
        tr(["<strong>Wasserrettung</strong>", "7 Tage", "400.000 Cr. / 25 Coins", "GW-Wasserrettung, GW-Taucher, MzB"]),
        tr(["<strong>Abrollbehälter-Stellplatz</strong>", "7 Tage", "je 100.000 Cr. / 20 Coins", "1 AB-Stellplatz pro Ausbau; max. 10 pro Feuerwache (Kleinwache: 2, dort je 150.000 Cr.)"]),
        tr(["<strong>Anhänger-Stellplatz</strong>", "–", "–", "Max. 5 Anhänger-Stellplätze pro Feuerwache (Kleinwache 2)"]),
        tr(["<strong>Flughafenfeuerwehr</strong>", "7 Tage", "300.000 Cr. / 25 Coins", "Flugfeldlöschfahrzeug + Rettungstreppe; je <strong>10 Feuerwachen</strong> 1× möglich"]),
        tr(["<strong>Großwache</strong>", "7 Tage", "1.000.000 Cr. / 50 Coins", "+10 Stellplätze; je <strong>10 Feuerwachen</strong> 1× möglich; Voraussetzung für NEA200"]),
        tr(["<strong>Werkfeuerwehr</strong>", "7 Tage", "100.000 Cr. / 20 Coins", "GW-Werkfeuerwehr, ULF mit Löscharm, TM 50, Turbolöscher"]),
        tr(["<strong>Netzersatzanlage 50</strong>", "5 Tage", "100.000 Cr. / 20 Coins", "NEA50-Anhänger kaufbar (10.000 Cr.); mit Zugfahrzeug betreiben; abrollbar als AB-NEA50 (nur Feuerwache, nicht Kleinwache)"]),
        tr(["<strong>Netzersatzanlage 200</strong>", "7 Tage", "200.000 Cr. / 25 Coins", "NEA200-Anhänger kaufbar; benötigt <strong>Großwache</strong>"]),
        tr(["<strong>Großlüfter</strong>", "5 Tage", "75.000 Cr. / 15 Coins", "Mobile Großventilatoren gegen Rauch und Hitze in großen Gebäuden"]),
        tr(["<strong>Drohneneinheit</strong>", "5 Tage", "150.000 Cr. / 25 Coins", "Stellplatz für MTF-Drohne, ELW-Drohne oder ELW-2-Drohne (Letztere nur Feuerwache)"]),
        tr(["<strong>Verpflegungsdienst</strong>", "5 Tage", "200.000 Cr. / 25 Coins", "Je 2 Stellplätze für GW-Küche, FKH, AB-Küche, GW-Verpflegung, MTW-Verpflegung"]),
        tr(["<strong>Bahnrettung</strong>", "5 Tage", "150.000 Cr. / 25 Coins", "1 Stellplatz für RW-Schiene, HLF-Schiene oder AB-Schiene"]),
        tr(["<strong>Tierrettung</strong>", "3 Tage", "100.000 Cr. / 20 Coins", "1 Stellplatz für GW-Tierrettung / Anh. Tierrettung"]),
        tr(["<strong>Wald- und Vegetationsbrandbekämpfung</strong>", "5 Tage", "200.000 Cr. / 25 Coins", "4 Stellplätze für Waldbrand-Fahrzeuge (GW-Waldbrand, TLF 3000/5000 W, GTLF 10000 W, Anh. Waldbrand, AB-Waldbrand)"])
      ])}
      <div class="hint">⏳ <strong>Warteschlange:</strong> Ohne Premium läuft 1 Ausbau, ein weiterer kann eingereiht werden. Mit Premium: beliebig viele.</div>
      <h3>Feuerwehrschule</h3>
      <p><strong>500.000 Credits / 50 Coins</strong>, jeder weitere Klassenraum 400.000 Credits / 40 Coins. Lehrgangsliste: siehe <a href="#personal">Personal &amp; Lehrgänge</a>.</p>
    </div>

    <!-- Rettungsdienst -->
    <div class="chip-panel" data-panel="rd">
      <h3>Rettungswache</h3>
      ${tbl(["Eigenschaft", "Wert"], [
        tr(["Neubau", "200.000 Credits oder 35 Coins"]),
        tr(["Max. Stellplätze", "15 (Stufe 14)"]),
        tr(["Ausbaustufen", "1: 10.000 Cr. · 2: 50.000 Cr. · ab 3: je 100.000 Cr."]),
        tr(["Geschenk bei Neubau", "1× <strong>RTW</strong>"])
      ])}
      <div class="hint blue">💡 Ab <strong>3 Rettungswachen bzw. Rettungsdienst-Ausbauten</strong> (auch an Feuerwachen) generiere Einsätze, die ein <strong>NEF</strong> verlangen – dann brauchst du Notärzte mit Notarzt-Ausbildung (7 Tage).</div>
      <h3>Krankenhaus</h3>
      <ul>
        <li>Neubau <strong>200.000 Credits / 25 Coins</strong> · 10 Betten, mit Ausbauten bis <strong>30</strong>.</li>
        <li>1. Fachabteilung: 10.000 Credits / 10 Coins · jede weitere: 70.000 Credits / 15 Coins · jede Betten-Ausbaustufe (max. 20): 19.000 Credits / 11 Coins.</li>
        <li>Im Verband für andere Mitglieder freigebbar; nur <strong>eine Fachabteilung gleichzeitig</strong> baubar.</li>
        <li>Die Voraussetzungen der Fachabteilungen unterscheiden sich – im Spiel unter „Ausbauen“ einsehbar.</li>
      </ul>
      <h3>Rettungshubschrauber-Station</h3>
      <ul>
        <li>Neubau <strong>1.000.000 Credits / 50 Coins</strong>, jeder weitere Landeplatz ebenfalls 1.000.000 Credits / 50 Coins.</li>
        <li>RTH separat kaufen; Personal braucht <strong>Notarzt-Ausbildung</strong> (7 Tage), die Winde zusätzlich einen <strong>Windenoperator</strong> (5 Tage).</li>
        <li>Limit: <strong>4 Stationen/Ausbauten</strong>; jeder 125. erlaubt eine weitere (125 Gebäude = 5, 150 = 6 …).</li>
      </ul>
      <h3>Rettungsschule</h3>
      <p><strong>500.000 Credits / 50 Coins</strong>, jeder weitere Klassenraum 400.000 Credits / 40 Coins.</p>
      <h3>Rettungshundestaffel</h3>
      <ul>
        <li>Neubau <strong>450.000 Credits / 50 Coins</strong>, max. <strong>7 Stellplätze</strong> (Stufen 10.000 / 50.000 / 100.000 Cr.).</li>
        <li>Rettungshundefahrzeug separat; Personal braucht 5× <strong>Rettungshundeführer (SEG)</strong> (je 5 Tage).</li>
      </ul>
    </div>

    <!-- SEG -->
    <div class="chip-panel" data-panel="seg">
      <h3>SEG-Wache (Schnelleinsatzgruppe)</h3>
      <ul>
        <li>Neubau <strong>100.000 Credits / 30 Coins</strong> – erst ab <strong>5 Rettungswachen</strong> baubar.</li>
        <li>Bei Bau gratis: <strong>5 Personal</strong> + 1× <strong>KTW Typ B</strong>.</li>
        <li>Stellplätze sind bei den Ausbauten jeweils vorhanden – Fahrzeuge müssen gekauft werden, das Personal braucht Sonderausbildungen an der Schule.</li>
      </ul>
      <h3>Ausbauten SEG-Wache</h3>
      ${tbl(["Ausbau", "Bauzeit", "Kosten", "Fahrzeuge"], [
        tr(["<strong>Führung</strong>", "3 Tage", "25.000 Cr. / 5 Coins", "ELW 1 (SEG)"]),
        tr(["<strong>Sanitätsdienst</strong>", "3 Tage", "25.500 Cr. / 5 Coins", "GW-SAN · zusätzlich 2× KTW Typ B + 1× RTW stationierbar"]),
        tr(["<strong>Wasserrettung</strong>", "7 Tage", "500.000 Cr. / 25 Coins", "GW-Wasserrettung, GW-Taucher, MzB"]),
        tr(["<strong>Rettungshundestaffel</strong>", "7 Tage", "350.000 Cr. / 25 Coins", "Rettungshundefahrzeug"]),
        tr(["<strong>SEG Drohne</strong>", "5 Tage", "50.000 Cr. / 15 Coins", "GW UAS (Drohnenfahrzeug)"]),
        tr(["<strong>Betreuungs- und Verpflegungsdienst</strong>", "5 Tage", "200.000 Cr. / 25 Coins", "7 Stellplätze für Fahrzeuge + 3 LKW-Stellplätze: Bt-LKW, Bt-Kombi, GW-Bt, Anh. FKH"]),
        tr(["<strong>Technik und Sicherheit</strong>", "5 Tage", "200.000 Cr. / 25 Coins", "6 Stellplätze: GW-TeSi, LKW Technik (Notstrom), MTW-TeSi, Anh. TeSi"])
      ])}
    </div>

    <!-- Polizei -->
    <div class="chip-panel" data-panel="pol">
      <h3>Polizei-Kleinwache</h3>
      <ul>
        <li>Neubau: 50 % des Preises einer Polizeiwache oder 25 Coins · max. <strong>2 Zellen</strong>, max. 4 Ausbaustufen.</li>
        <li>Geschenk bei Neubau: 1× <strong>Funkstreifenwagen (FuStW)</strong>.</li>
      </ul>
      <h3>Polizeiwache</h3>
      <ul>
        <li>Neubau <strong>100.000 Credits / 35 Coins</strong> (Wachen 1–24); ab Wache 25 gleiche Eskalationsformel wie bei Feuerwachen (<code>100.000 + 200.000 × log₂(Anzahl Polizeiwachen − 22)</code>). Der Coins-Preis bleibt konstant, ebenso die Ausbaukosten.</li>
        <li>Max. <strong>15 Stellplätze</strong> (Stufe 14); Stufen: 10.000 / 50.000 / je 100.000 Cr.</li>
        <li>Geschenk bei Neubau: 1× <strong>FuStW</strong>.</li>
        <li>Gefangene lassen sich nur in Wachen mit <strong>Zellen</strong> bringen; je Gefangener gibt es <strong>250 Credits</strong>. Zu jeder vollen Stunde wird ein beliebiger Gefangener entlassen; Sofortentlassung kostet 1 Coin.</li>
      </ul>
      <h3>Ausbauten Polizeigebäude</h3>
      ${tbl(["Ausbau", "Bauzeit", "Kosten", "Wirkung / Fahrzeuge", "Wachenart"], [
        tr(["<strong>Zelle</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "1 Gefangener unterbringbar", "Polizei"]),
        tr(["<strong>Weitere Zellen</strong>", "7 Tage je", "25.000 Cr. / 5 Coins", "Jede Zelle belegt Platz wie im Krankenhaus", "Polizei (Voraussetzung: Zelle)"]),
        tr(["<strong>2. Zug der 1. Hundertschaft</strong>", "3 Tage", "25.000 Cr. / 5 Coins", "3× GruKw + 1× LeBefKw", "Bereitschaftspolizei"]),
        tr(["<strong>3. Zug der 1. Hundertschaft</strong>", "3 Tage", "25.000 Cr. / 5 Coins", "–", "Bereitschaftspolizei (Voraussetzung: 2. Zug)"]),
        tr(["<strong>Sonderfahrzeug: Gefangenenkraftwagen</strong>", "3 Tage", "25.000 Cr. / 5 Coins", "GefKw (bis 5 Gefangene; bei manchen Einsätzen gefordert)", "Bereitschaftspolizei"]),
        tr(["<strong>Technischer Zug: Wasserwerfer</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "1× LeBefKw + 3× WaWe", "Bereitschaftspolizei"]),
        tr(["<strong>SEK 1. Zug</strong>", "7 Tage", "100.000 Cr. / 10 Coins", "1× SEK-MTF + 3× SEK-ZF + 1× FüKw", "Bereitschaftspolizei / Polizei-Sondereinheiten"]),
        tr(["<strong>SEK 2. Zug</strong>", "7 Tage", "100.000 Cr. / 10 Coins", "–", "Voraussetzung: SEK 1. Zug"]),
        tr(["<strong>MEK 1. Zug</strong>", "7 Tage", "100.000 Cr. / 10 Coins", "1× MEK-MTF + 3× MEK-ZF + 1× FüKw", "Bereitschaftspolizei / Polizei-Sondereinheiten"]),
        tr(["<strong>MEK 2. Zug</strong>", "7 Tage", "100.000 Cr. / 10 Coins", "–", "Voraussetzung: MEK 1. Zug"]),
        tr(["<strong>Diensthundestaffel</strong>", "5 Tage", "100.000 Cr. / 10 Coins", "Polizeiwache: 1× DHuFüKw · Bereitschaftspolizei/PSI: 3× DHuFüKw (Hundeführer-Lehrgang je Person)", "Polizei / BePo / PSI"]),
        tr(["<strong>Reiterstaffel</strong>", "5 Tage", "300.000 Cr. / 25 Coins", "3× Pferdetransporter + 3× Zugfahrzeug Pferdetransport (+ Anh. Pferdetransport)", "Bereitschaftspolizei"]),
        tr(["<strong>Kriminalpolizei</strong>", "7 Tage", "100.000 Cr. / 20 Coins", "Zivilstreifenwagen auf vorhandene Stellplätze; Personal braucht Kriminalpolizei-Lehrgang (7 Tage)", "Polizei"]),
        tr(["<strong>Motorradstaffel</strong>", "2 Tage", "75.000 Cr. / 15 Coins", "2 Stellplätze für Polizeimotorräder", "Polizei"]),
        tr(["<strong>Autobahnpolizei</strong>", "2 Tage", "75.000 Cr. / 15 Coins", "2 Stellplätze für FuStW (AP)", "Polizei"]),
        tr(["<strong>Großgewahrsam</strong>", "7 Tage", "200.000 Cr. / 50 Coins", "1 Stellplatz für GefKw; zusätzliche Lagerraum-Module", "Polizei"])
      ])}
      <div class="hint red">⚠️ Die Bereitschaftspolizei generiert erst ab der ersten Ausbaustufe Einsätze; SEK, MEK, Hundertschaften und Co. brauchen Sonderausbildungen an der Polizeischule.</div>
      <h3>Bereitschaftspolizei</h3>
      <ul>
        <li>Neubau <strong>500.000 Credits / 50 Coins</strong>; jede Ausbaustufe 25.000 Credits / 5 Coins.</li>
        <li>Bei Bau gratis: <strong>4 Stellplätze für 1 Zug</strong> (3× GruKw + 1× LeBefKw).</li>
      </ul>
      <h3>Polizeihubschrauber-Station</h3>
      <ul>
        <li>Neubau + jeder weitere Landeplatz: je <strong>1.000.000 Credits / 50 Coins</strong>; Polizeihubschrauber separat kaufen.</li>
        <li>Limit wie RTH: 4 Stationen, dann +1 pro 125. Gebäude.</li>
        <li>Ausbildung: Polizeihubschrauber (7 Tage); mit Winde zusätzlich Windenoperator (5 Tage).</li>
      </ul>
    </div>

    <!-- THW -->
    <div class="chip-panel" data-panel="thw">
      <h3>THW-Ortsverband</h3>
      <ul>
        <li>Neubau: <code>200.000 + 100.000 × log₂(Anzahl der vorhandenen THW-Wachen − 22)</code> Credits – der 2. Ortsverband kostet z. B. 300.000, der 3. ca. 358.496 Credits; alternativ 35 Coins.</li>
        <li>Bei Bau gratis: 1× <strong>GKW</strong> + <strong>9 Mitglieder</strong>.</li>
        <li>THW-Schule: <strong>500.000 Credits / 50 Coins</strong>, weitere Klassenräume 400.000 Credits / 40 Coins.</li>
      </ul>
      <h3>Ausbauten THW-Ortsverband</h3>
      <p>Stellplätze sind vorhanden, Fahrzeuge müssen gekauft und die Mannschaft <strong>speziell ausgebildet</strong> werden.</p>
      ${tbl(["Ausbau", "Bauzeit", "Kosten", "Fahrzeuge", "Voraussetzung"], [
        tr(["<strong>1. Technischer Zug: Fachgruppe Notversorgung / Notinstandsetzung</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "MzGW (FGr N) + NEA50-Anhänger", "–"]),
        tr(["<strong>1. Technischer Zug: Zugtrupp</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "MTW-TZ", "–"]),
        tr(["<strong>Ortsverbands-MTW</strong>", "3 Tage", "50.000 Cr. / 15 Coins", "2× MTW-OV", "–"]),
        tr(["<strong>Fachgruppe Räumen</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "MLW 5, Anh. DLE, BRmG R, LKW K 9", "1. TZ: Zugtrupp + Notversorgung"]),
        tr(["<strong>2. Technischer Zug: Bergungsgruppe</strong>", "3 Tage", "25.000 Cr. / 5 Coins", "weiterer GKW", "1. TZ: Notversorgung + Zugtrupp"]),
        tr(["<strong>2. Technischer Zug: Zugtrupp</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "MTW-TZ", "2. TZ: Bergungsgruppe"]),
        tr(["<strong>2. Technischer Zug: Notversorgung</strong>", "7 Tage", "25.000 Cr. / 5 Coins", "MzGW (FGr N) + NEA50", "2. TZ: Bergungsgruppe"]),
        tr(["<strong>Fachgruppe Wassergefahren</strong>", "7 Tage", "500.000 Cr. / 25 Coins", "Tauchkraftwagen, LKW 7 Lkr 19tm, Anh. MzB, Anh. SchlB, Anh. MzAB", "1. TZ: Zugtrupp + Notversorgung"]),
        tr(["<strong>Fachgruppe Ortung (Typ A)</strong>", "7 Tage", "450.000 Cr. / 25 Coins", "2× MTW-O + 2× Anh. Hund", "1. TZ: Zugtrupp + Notversorgung"]),
        tr(["<strong>Fachgruppe Wasserschaden / Pumpen</strong>", "7 Tage", "200.000 Cr. / 25 Coins", "Anh. 7, Anh. SwPu, LKW 7 Lbw (FGr WP), MLW 4", "1. TZ: Zugtrupp + Notversorgung"]),
        tr(["<strong>Fachgruppe Schwere Bergung</strong>", "7 Tage", "200.000 Cr. / 25 Coins", "MzGW SB", "1. TZ: Zugtrupp + Notversorgung"]),
        tr(["<strong>Fachgruppe Elektroversorgung</strong>", "7 Tage", "200.000 Cr. / 25 Coins", "NEA200-Anhänger, LKW 7 Lbw (FGr E)", "1. TZ: Notversorgung + Zugtrupp"]),
        tr(["<strong>Trupp Unbemannte Luftfahrtsysteme (UAV)</strong>", "5 Tage (Ausbau) · Lehrgang 3 Tage", "50.000 Cr. / 15 Coins", "MTW-Tr UL (Drohnenfahrzeug)", "–"]),
        tr(["<strong>Fachzug Führung und Kommunikation</strong>", "7 Tage", "300.000 Cr. / 25 Coins", "FmKW, FüKomKW, FüKW (THW), MTW-FGr K", "–"]),
        tr(["<strong>Fachgruppe Logistik-Verpflegung</strong>", "7 Tage", "50.000 Cr. / 15 Coins", "LKW 7 Lbw (FGr Log-V), MTW-FGr Log-V, Anh. 12 t Ladebordwand", "–"]),
        tr(["<strong>Fachgruppe Brückenbau</strong>", "7 Tage", "50.000 Cr. / 15 Coins", "MzGW (FGr BrB), Mobilkran, Anh. Plattform", "–"])
      ])}
    </div>

    <!-- Wasserrettung -->
    <div class="chip-panel" data-panel="wr">
      <h3>Wasserrettungswache</h3>
      <ul>
        <li>Neubau <strong>500.000 Credits / 50 Coins</strong>; bei Bau gratis: <strong>10 Personal</strong> + 1× <strong>GW-Wasserrettung</strong>.</li>
        <li>Ausbaustufen: 1: 10.000 Cr. · 2: 50.000 Cr. · ab 3: je 100.000 Cr.</li>
        <li>Auch als Erweiterung an Feuerwachen (400.000 Cr.) und SEG-Wachen (500.000 Cr.) möglich.</li>
        <li>Fahrzeuge: GW-Wasserrettung, GW-Taucher, MzB (Mehrzweckboot).</li>
      </ul>
      <div class="hint blue">💡 Für Küstenregionen gibt es zusätzlich Bauinhalte rund um die <strong>Seenotrettung</strong> – alle Details im Block darunter.</div>

      <h3>🚤 Seenotrettung (Küste)</h3>
      <p>Eigener Gebäudezweig für Küstenregionen: Boote und Kreuzer der Seenotrettungsgesellschaft plus eigener Rettungshubschrauber.</p>
      ${tbl(["Gebäude", "Neubau", "Details"], [
        tr(["<strong>Seenotrettungswache</strong>", "100.000 Cr. / 35 Coins", "Stationiert Seenotrettungsboot und Seenotrettungskreuzer; keine weiteren Ausbauten"]),
        tr(["<strong>Hubschrauberstation (Seenotrettung)</strong>", "1.000.000 Cr. / 50 Coins", "Stationiert den Seenotrettungshubschrauber"]),
        tr(["<strong>Schule für Seefahrt und Seenotrettung</strong>", "500.000 Cr. / 50 Coins", "Ausbildung für alle Küsten-Lehrgänge; weitere Klassenräume je 400.000 Cr. / 40 Coins"])
      ])}
      ${tbl(["Fahrzeug", "Kosten", "Besatzung", "Lehrgang"], [
        tr(["<strong>Seenotrettungsboot</strong>", "50.000 Cr. / 10 Coins", "1–2", "–"]),
        tr(["<strong>Seenotrettungskreuzer</strong>", "75.000 Cr. / 25 Coins", "4–9", "Seenotretter (5 Tage)"]),
        tr(["<strong>Hubschrauber (Seenotrettung)</strong>", "400.000 Cr. / 30 Coins", "3–4", "Hubschrauberpilot (5 Tage); Winde: Windenoperator (5 Tage)"])
      ])}
      <div class="hint blue">🎓 Weitere Küsten-Lehrgänge: Windenoperator (5 Tage) und Wasserrettungsausbildung für Notfallsanitäter (7 Tage).</div>
    </div>

    <!-- Bergrettung -->
    <div class="chip-panel" data-panel="br">
      <h3>Bergrettungswache</h3>
      <ul>
        <li>Neubau <strong>100.000 Credits / 35 Coins</strong>; bei Bau gratis: <strong>10 Personal</strong>.</li>
        <li>Ausbaustufen: 1: 10.000 Cr. · 2: 50.000 Cr. · ab 3: je 100.000 Cr.</li>
      </ul>
      <h3>Ausbauten Bergrettungswache</h3>
      ${tbl(["Ausbau", "Bauzeit", "Kosten", "Wirkung / Fahrzeuge"], [
        tr(["<strong>Rettungsdienst-Erweiterung</strong>", "7 Tage", "100.000 Cr. / 20 Coins", "RTW, KTW, NEF stationierbar; zählt wie Rettungswache (NEF-Abfrage ab 3 Wachen/Ausbauten)"]),
        tr(["<strong>Höhenrettung</strong>", "–", "50.000 Cr. / 25 Coins", "GW-Höhenrettung (Bergwacht), Anh. Höhenrettung (Bergrettung)"]),
        tr(["<strong>Drohneneinheit</strong>", "5 Tage", "75.000 Cr. / 25 Coins", "Drohnenfahrzeuge; Personal braucht Ausbildung Drohnenoperator"]),
        tr(["<strong>Rettungshundestaffel (Bergrettung)</strong>", "5 Tage", "350.000 Cr. / 25 Coins", "2× Hundestaffel (Bergrettung); Personal braucht Rettungshundeführer"])
      ])}
      <p>Fahrzeuge der Bergrettung: GW-Bergrettung, GW-Bergrettung (NEF), ELW Bergrettung, ATV, Hundestaffel (Bergrettung), Schneefahrzeug, Anh. Höhenrettung, GW-Höhenrettung (Bergwacht).</p>
    </div>

    <!-- Sonstiges -->
    <div class="chip-panel" data-panel="sonst">
      <h3>Sonstige Gebäude</h3>
      ${tbl(["Gebäude", "Kurzinfo"], [
        tr(["<strong>Leitstelle</strong>", "Alle 10 Gebäude 1× baubar; verwaltet Wachen, Fahrzeuge, Personal und Einstellungen."]),
        tr(["<strong>Bereitstellungsraum</strong>", "Temporärer Verbandsstandort, 24 Std. (bis 168 Std. verlängerbar); max. 4 (Premium 8)."]),
        tr(["<strong>Feuerwehrschule</strong>", "500.000 Cr.; Klassenraum je 400.000 Cr.; Feuerwehr-Lehrgänge."]),
        tr(["<strong>Rettungsschule</strong>", "500.000 Cr.; Rettungsdienst-Lehrgänge (Notarzt, LNA, OrgL …)."]),
        tr(["<strong>Polizeischule</strong>", "500.000 Cr.; Polizei-Lehrgänge (SEK, MEK, Wasserwerfer, Reiterstaffel …)."]),
        tr(["<strong>THW-Schule</strong>", "500.000 Cr.; THW-Sonderausbildungen."]),
        tr(["<strong>Krankenhaus</strong>", "200.000 Cr.; 10–30 Betten; Fachabteilungen; Verbandsfreigabe möglich."]),
        tr(["<strong>Autobahnpolizei</strong>", "400.000 Cr. / 40 Coins; Standort eigener Autobahnstreifen (FuStW AP); Zellen-Ausbau möglich."]),
        tr(["<strong>Reiterstaffel (Gebäude)</strong>", "300.000 Cr. / 50 Coins; Ausbau 300.000 Cr. / 25 Coins für 6 Pferde-Stellplätze."]),
        tr(["<strong>Wasserrettung / Seenotrettungswache</strong>", "Wasserrettung 500.000 Cr. / 50 Coins; Seenotrettungswache 100.000 Cr. / 35 Coins (Boote, Kreuzer, Hubschrauber)."]),
        tr(["<strong>Schule für Seefahrt &amp; Seenotrettung</strong>", "500.000 Cr. / 50 Coins; Lehrgänge Küsten- und Seenotrettung."])
      ])}
    </div>
  </section>
  `);
})();
