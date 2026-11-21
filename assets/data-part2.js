/* ============================================================
   LSS-Wiki – Inhalt Teil 2 (Kombis, Fahrzeuge, Personal,
   Verbände, Events, Premium, Tipps, Glossar, Links)
   Quellen: offizielles Leitstellenspiel-Wiki (wiki.leitstellenspiel.de),
   Spielangaben & Community · Stand November 2026
   ============================================================ */

(function () {
  const S = window.WIKI.sections;
  const add = (id, icon, title, html) => S.push({ id, icon, title, html });
  const tr = (cells) => "<tr>" + cells.map(c => `<td>${c}</td>`).join("") + "</tr>";
  const th = (cells) => "<tr>" + cells.map(c => `<th>${c}</th>`).join("") + "</tr>";
  const tbl = (head, rows) =>
    `<div class="tbl-wrap"><table><thead>${th(head)}</thead><tbody>${rows.join("")}</tbody></table></div>`;

  /* ============================== FAHRZEUGKOMBIS ============================== */
  add("kombis", "🚛", "Fahrzeugkombis je Ausbau", `
  <section class="card glass" data-chipgroup>
    <h2>Bewährte Fahrzeugkombinationen</h2>
    <p>Jede Wache anders zu bestücken ist Teil des Spiels – aber einige Kombinationen haben sich bewährt, weil sie die meisten Standardeinsätze einer Organisation abwickeln können. Hier findest du <strong>mehrere mögliche Fahrzeugkombinationen</strong> je Wachen-Typ und Ausbauten.</p>
    <div class="hint blue">📌 Stellplatz-Regeln: Standard-Stellplätze nehmen alle Fahrzeuge und Anhänger auf. Anhänger nutzen zuerst vorhandene Anhängerstellplätze; Abrollbehälter passen ausschließlich auf AB-Stellplätze.</div>
    <div class="chip-row">
      <button class="chip" data-chip="ff">🚒 Wachen (Kleinwache + Feuerwache)</button>
      <button class="chip" data-chip="ffext">🚒 Feuerwache mit Sonderausbauten</button>
      <button class="chip" data-chip="rd">🚑 Rettungswache</button>
      <button class="chip" data-chip="pol">👮 Polizei</button>
      <button class="chip" data-chip="thw">🔧 THW</button>
      <button class="chip" data-chip="seg">🧪 SEG</button>
      <button class="chip" data-chip="wrbr">🚤 Wasser- und Bergrettung</button>
    </div>

    <div class="chip-panel" data-panel="ff">
      <h3>Feuerwehr-Kleinwache (max. 6 Plätze)</h3>
      <div class="combo-grid">
        <div class="combo"><h4>🏷️ Standard-Kleinwache</h4><ul><li>LF (gratis bei Neubau)</li><li>LF</li><li>DLK 23</li><li>RW</li><li>MTW</li><li>ELW 1</li></ul><p class="combo-note">Deckt Wohnungsbrände, kleinere Brände und die technische Grundsicherung ab.</p></div>
        <div class="combo"><h4>🔥 Brand-Schwerpunkt</h4><ul><li>LF (gratis)</li><li>TLF 3000</li><li>DLK 23</li><li>RW</li><li>SW 1000</li><li>MTW</li></ul><p class="combo-note">Mehr Löschwasser und Nachschub – gut im dicht bebauten Wohngebiet.</p></div>
        <div class="combo"><h4>🛠️ Technischer Schwerpunkt</h4><ul><li>LF (gratis)</li><li>RW</li><li>2× RW</li><li>GW-Öl</li><li>MTW</li><li>ELW 1</li></ul><p class="combo-note">Stark bei Einklemmungen, Ölspuren und Verkehrsunfällen.</p></div>
      </div>
      <h3>Feuerwache – Kombis nach Ausbaustufe</h3>
      <div class="combo-grid">
        <div class="combo"><h4>Stufe 2 (2 Plätze)</h4><ul><li>LF (gratis)</li><li>LF</li></ul><p class="combo-note">Basis: Deckt kleinste Brände ab; zweite Wache in Reichweite hilfreich.</p></div>
        <div class="combo"><h4>Stufe 5 (5 Plätze)</h4><ul><li>LF · LF</li><li>DLK 23</li><li>RW</li><li>ELW 1</li></ul><p class="combo-note">Klassisches „Erster-Zug“-Set für die meisten Standardbrände.</p></div>
        <div class="combo"><h4>„Allround-Wache“ (Stufe 7–10)</h4><ul><li>HLF · LF</li><li>DLK 23</li><li>RW</li><li>GW-Öl</li><li>MTW</li><li>ELW 1</li><li>TLF 3000</li></ul><p class="combo-note">Brand, technische Hilfe, Menschenrettung und Nachschub aus einer Hand.</p></div>
        <div class="combo"><h4>„Technische Zentrale“ (Stufe 12+)</h4><ul><li>RW · RW</li><li>GW-Höhenrettung</li><li>GW-Gefahrgut</li><li>GW-Messtechnik</li><li>SW 1000 · SW 2000</li><li>ELW 1</li></ul><p class="combo-note">Für Höhenrettung, Gefahrgut, Großölspuren und lange Schlauchstrecken.</p></div>
        <div class="combo"><h4>„Brand- und Großlagewache“ (Stufe 15+)</h4><ul><li>TLF 3000 · TLF 3000</li><li>LF 20</li><li>SW 2000</li><li>DLK 23</li><li>ELW 1</li><li>MTW</li><li>Lüfter (Großlüfter-Ausbau)</li><li>WLF + AB-Lüfter</li></ul><p class="combo-note">Für Ausbreitungseinsätze (Großbrand, Flughafenbrand) und lange Einsatzlagen.</p></div>
      </div>
      <div class="hint">👥 <strong>Merkwerte zur Besatzung:</strong> LF/HLF/DLK brauchen i. d. R. 9 Personen, TLF 6, RW 3, ELW 1 zwei – plane dein Personal-Soll entsprechend (im Spiel maßgeblich).</div>
    </div>

    <div class="chip-panel" data-panel="ffext">
      <h3>Feuerwache mit Sonderausbauten – mögliche Kombis</h3>
      <p>ℹ️ Jeder Sonderausbau schaltet bestimmte Fahrzeugtypen frei. Wo mehrere möglich sind, stehen hier die Ausrüstungs-Optionen – jeweils mit <strong>Personal-Vollbesetzung</strong> und der dazu nötigen Ausbildung.</p>
      <div class="combo-grid">
        <div class="combo"><h4>➕ Rettungsdienst-Erweiterung (100.000 Cr.)</h4><p class="combo-note">Die Feuerwache zählt ab sofort wie eine Rettungswache – auch für die Kauflimits der Rettungsdienst-Fahrzeuge. Stellplätze: normale Wachen-Stellplätze.</p>
          <ul>
            <li><strong>Option 1 (Grundversorgung):</strong> 2× RTW + 1× KTW</li>
            <li><strong>Option 2 (mit NEF):</strong> 2× RTW + 1× NEF + 1× KTW</li>
            <li><strong>Option 3 (Großversorgung):</strong> 2× RTW + 1× NEF + 1× GRTW (letzterer schluckt viele Stellplätze – sinnvoller als eigene Station)</li>
            <li>👨‍🚒 <strong>Option 1:</strong> 6 Personen, keine Ausbildung · <strong>Option 2:</strong> 8 Personen, 2× Notarzt-Ausbildung (für den NEF) · <strong>Option 3:</strong> zusätzlich GRTW 6 Personen, davon mind. 1× Notarzt</li>
            <li>Alternative Einzelfahrzeuge: NAW (3 Personen, mind. 1× Notarzt) · ITW (3 Personen: 2× Intensivpflege + 1× Notarzt)</li>
          </ul></div>
        <div class="combo"><h4>➕ Wasserrettungs-Erweiterung (400.000 Cr.)</h4><ul>
            <li><strong>Option 1:</strong> 1× GW-Wasserrettung + 1× MZB (Mehrzweckboot)</li>
            <li><strong>Option 2:</strong> 2× GW-Wasserrettung</li>
            <li><strong>Option 3 (Tauchen):</strong> 1× GW-Taucher statt GW-Wasserrettung</li>
            <li>👨‍🚒 <strong>Option 1:</strong> GW-Wasserrettung 6 Personen, alle 6 mit GW-Wasserrettung-Lehrgang (3 Tage); MZB 0 Besatzung (Bedienung durch GW-Wasserrettung-Kräfte) · <strong>Option 3:</strong> GW-Taucher exakt 2 Personen, beide mit GW-Taucher-Lehrgang (5 Tage)</li>
          </ul></div>
        <div class="combo"><h4>➕ Abrollbehälter-Stellplätze (je 100.000 Cr.)</h4><ul>
            <li><strong>Option 1:</strong> 1× WLF + 1× AB (z. B. AB-Lüfter oder AB-Schlauch)</li>
            <li><strong>Option 2:</strong> 2× WLF + 2× AB-Dekon-P (schnelleres Umsetzen)</li>
            <li>👨‍🚒 Jeder WLF: 3 Personen mit Wechsellader-Lehrgang (2 Tage). ABs selbst: 0 Besatzung – an der Einsatzstelle gelten Sonderregeln (AB-Dekon-P: 6 Personen mit Dekon-P · AB-Gefahrgut: 1 Person mit GW-Gefahrgut · AB-EL: 1 Person mit ELW-2).</li>
          </ul><p class="combo-note">1 Stellplatz je Ausbau, max. 10 pro Feuerwache. Freie AB-Wahl: AB-Rüst, AB-Atemschutz, AB-Öl, AB-Dekon-P, AB-Schlauch, AB-MZB, AB-Gefahrgut, AB-Einsatzleitung, AB-L, AB-Lüfter, AB-Tank, AB-Lösch.</p></div>
        <div class="combo"><h4>➕ Flughafenfeuerwehr (300.000 Cr.)</h4><ul>
            <li><strong>Option 1:</strong> 1× FLF</li>
            <li><strong>Option 2:</strong> 1× FLF + 1× Rettungstreppe (beide stationieren auf normalen Stellplätzen)</li>
            <li>👨‍🚒 <strong>Option 1:</strong> FLF 3 Personen, alle 3 mit FLF-Ausbildung (7 Tage) · <strong>Option 2:</strong> zusätzlich Rettungstreppe exakt 2 Personen mit Rettungstreppen-Ausbildung (2 Tage)</li>
          </ul><p class="combo-note">Je 10 Feuerwachen 1× – wähle eine Wache nahe dem Flughafen-POI.</p></div>
        <div class="combo"><h4>➕ Großwache (1.000.000 Cr.)</h4><ul>
            <li>+10 Standard-Stellplätze – alle Fahrzeuggattungen frei kombinierbar (z. B. Brand-Set + Technik-Set + RD-Set gleichzeitig)</li>
            <li>Voraussetzung für die Netzersatzanlage 200</li>
          </ul></div>
        <div class="combo"><h4>➕ Werkfeuerwehr (100.000 Cr.)</h4><ul>
            <li><strong>Option 1:</strong> 1× GW-Werkfeuerwehr + 1× Turbolöscher</li>
            <li><strong>Option 2:</strong> 1× GW-Werkfeuerwehr + 1× ULF mit Löscharm + 1× TM 50</li>
            <li>👨‍🚒 GW-Werkfeuerwehr max. 9 Personen, ULF/TM 50/Turbolöscher je max. 3 – <strong>alle</strong> Besatzungsmitglieder brauchen die Werkfeuerwehr-Ausbildung (2 Tage).</li>
          </ul><p class="combo-note">Einsätze laufen über den eigenen Werkfeuerwehr-POI – diesen selbst setzen.</p></div>
        <div class="combo"><h4>➕ Netzersatzanlage 50 (100.000 Cr.)</h4><ul>
            <li><strong>Option 1:</strong> NEA50-Anhänger + Zugfahrzeug (z. B. MTW)</li>
            <li><strong>Option 2 (nur Feuerwache, nicht Kleinwache):</strong> WLF + AB-NEA50</li>
            <li>👨‍🚒 NEA50/AB: 0 Besatzung. Zugvariante: Personal des Zugfahrzeugs (z. B. MTW 9) · AB-Variante: WLF 3 Personen (Wechsellader-Lehrgang).</li>
          </ul></div>
        <div class="combo"><h4>➕ Netzersatzanlage 200 (200.000 Cr. – benötigt Großwache, 2 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> NEA200-Anhänger + Zugfahrzeug</li>
            <li><strong>Option 2:</strong> WLF + AB-NEA200</li>
            <li>👨‍🚒 An der Einsatzstelle mind. 1 Person mit NEA200-Fortbildung (7 Tage). Zugvariante zusätzlich Zugfahrzeug-Besatzung · AB-Variante zusätzlich WLF: 3 Personen (Wechsellader).</li>
          </ul></div>
        <div class="combo"><h4>➕ Großlüfter (75.000 Cr.)</h4><ul>
            <li><strong>Option 1 (Selbstfahrer):</strong> 1× GW-Lüfter</li>
            <li><strong>Option 2 (Anhänger):</strong> Zugfahrzeug + Anh. Lüfter</li>
            <li><strong>Option 3 (AB):</strong> WLF + AB-Lüfter</li>
            <li>👨‍🚒 GW-Lüfter 2 Personen ohne Ausbildung · Zugvariante: Besatzung des Zugfahrzeugs · AB-Variante: WLF 3 Personen mit Wechsellader-Lehrgang.</li>
          </ul></div>
        <div class="combo"><h4>➕ Drohneneinheit (150.000 Cr. – 1 Stellplatz)</h4><ul>
            <li><strong>Option 1:</strong> 1× MTF-Drohne (10.000 Cr.)</li>
            <li><strong>Option 2:</strong> 1× ELW-Drohne (20.000 Cr.)</li>
            <li><strong>Option 3 (nur Feuerwache):</strong> 1× ELW-2-Drohne (35.000 Cr.)</li>
            <li>👨‍🚒 MTF-Drohne: 5 Personen, davon 4× Drohnen-Schulung (3 Tage) · ELW-Drohne: 5 Personen, alle 5 mit Drohnen-Schulung · ELW-2-Drohne: 6 Personen, alle 6 mit Drohnen-Schulung <em>und</em> ELW-2-Lehrgang (7 Tage).</li>
          </ul><p class="combo-note">Die Drohnen dürfen zusätzlich auf normalen Stellplätzen stehen.</p></div>
        <div class="combo"><h4>➕ Verpflegungsdienst (200.000 Cr. – 2 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 1× GW-Verpflegung + 1× MTW-Verpflegung</li>
            <li><strong>Option 2:</strong> 1× GW-Küche + 1× FKH (Feldkochherd)</li>
            <li><strong>Option 3 (mit AB):</strong> WLF + AB-Küche (FKH-Ersatz, spart Fahrzeugkosten)</li>
            <li>👨‍🚒 <strong>Option 1:</strong> GW-Verpflegung 6 Personen: mind. 1× Feuerwehr-Verpflegungseinheit + 2× Verpflegungshelfer; MTW-Verpflegung exakt 6, <strong>alle 6</strong> mit Feuerwehr-Verpflegungseinheit · <strong>Option 2:</strong> GW-Küche 3 Personen: 1× FVE + 2× Verpflegungshelfer; FKH 0 Besatzung · <strong>Option 3:</strong> WLF 3 Personen (Wechsellader).</li>
          </ul></div>
        <div class="combo"><h4>➕ Bahnrettung (150.000 Cr. – 1 Stellplatz)</h4><ul>
            <li><strong>Option 1:</strong> 1× RW-Schiene (18.500 Cr.)</li>
            <li><strong>Option 2:</strong> 1× HLF-Schiene (30.000 Cr.)</li>
            <li><strong>Option 3 (AB):</strong> WLF + AB-Schiene</li>
            <li>👨‍🚒 <strong>Option 1:</strong> 3 Personen, alle mit Bahnrettung (3 Tage) · <strong>Option 2:</strong> 9 Personen, alle mit Bahnrettung · <strong>Option 3:</strong> WLF 3 Personen (Wechsellader); AB-Schiene ohne Pflicht-Ausbildung.</li>
          </ul></div>
        <div class="combo"><h4>➕ Tierrettung (100.000 Cr. – 1 Stellplatz)</h4><ul>
            <li><strong>Option 1 (Selbstfahrer):</strong> 1× GW-Tierrettung (15.000 Cr.)</li>
            <li><strong>Option 2 (Anhänger):</strong> Zugfahrzeug + Anh. Tierrettung (6.500 Cr.)</li>
            <li>👨‍🚒 GW-Tierrettung max. 6 Personen, <strong>keine Ausbildung nötig</strong> · Zugvariante: Besatzung des Zugfahrzeugs.</li>
          </ul></div>
        <div class="combo"><h4>➕ Wald- und Vegetationsbrandbekämpfung (200.000 Cr. – 4 Stellplätze)</h4><ul>
            <li><strong>Option 1 (Selbstfahrer):</strong> 2× GW-Waldbrand + 2× TLF 3000 W</li>
            <li><strong>Option 2 (Anhänger):</strong> 2× GW-Waldbrand + 1× TLF 5000 W + 1× Anh. Waldbrand (+ Zugfahrzeug auf Normal-Stellplatz)</li>
            <li><strong>Option 3 (AB):</strong> WLF + AB-Waldbrand als Ergänzung</li>
            <li>👨‍🚒 TLF 3000/5000 W, GTLF 10000 W und GW-Waldbrand: je max. 3 Personen, <strong>alle</strong> mit Wald- und Vegetationsbrandbekämpfung (nur 1 Tag!) · Anh. Waldbrand: 0 Besatzung, an der Einsatzstelle mind. 1 Person mit Wald-Lehrgang.</li>
          </ul></div>
        <div class="combo"><h4>➕ Anhänger-Stellplätze (je 75.000 Cr.)</h4><ul>
            <li>Reservierte Plätze für NEA50, Anh. Lüfter, MZB, Anh. Tierrettung, Anh. Waldbrand, Anh. FüLa u. a. (3 Tage Bauzeit)</li>
          </ul><p class="combo-note">Anhänger nutzen zuerst diese Plätze, dann normale Stellplätze. Nicht an der Kleinwache.</p></div>
      </div>
    </div><div class="chip-panel" data-panel="rd">
      <h3>Rettungswache (max. 15 Plätze)</h3>
      <div class="combo-grid">
        <div class="combo"><h4>🏷️ Standard-Rettungswache</h4><ul><li>RTW (gratis)</li><li>RTW</li><li>KTW</li></ul><p class="combo-note">Deckt einfache Sanitäts- und Transporteinsätze ab.</p></div>
        <div class="combo"><h4>Variante mit NEF</h4><ul><li>RTW · RTW</li><li>NEF</li><li>KTW</li></ul><p class="combo-note">Notwendig, sobald Einsätze ein Notarzteinsatzfahrzeug verlangen.</p></div>
        <div class="combo"><h4>„Rettungszentrum“ (Stufe 8+)</h4><ul><li>RTW × 3–4</li><li>NEF</li><li>KTW × 1–2</li><li>NAW (Kauflimit beachten)</li></ul><p class="combo-note">Für Einkommen: Rettungsdienste-Einsätze sind eine der häufigsten Kategorien.</p></div>
        <div class="combo"><h4>„Intensiv- und Schwertransport“</h4><ul><li>RTW × 2</li><li>GRTW</li><li>ITW</li><li>NEF</li></ul><p class="combo-note">Mit Premium: GRTW ab 15 Rettungswachen, ITW ab 10 kaufbar (ohne Premium entsprechend später); dazu KdoW LNA / KdoW OrgL für größere Lagen.</p></div>
        <div class="combo"><h4>„Notarzt-Hub“ (mit RTH-Station)</h4><ul><li>RTW × 2</li><li>NEF</li><li>Rettungstransporthubschrauber (RTH)</li><li>Optional: RTH Winde (benötigt Windenoperator)</li></ul></div>
      </div>
      <p><strong>Kauflimits (Auszug):</strong> NAW, ITW und GRTW sind limitiert (ungefähr eines je 15–20 Rettungswachen bzw. RD-Ausbauten – mit Premium profitierst du früher); weitere Limits existieren u. a. bei manchen Feuerwehr- und THW-Fahrzeugen.</p>
    </div>

    <div class="chip-panel" data-panel="pol">
      <h3>Polizei</h3>
      <div class="combo-grid">
        <div class="combo"><h4>🏷️ Standard-Polizeiwache</h4><ul><li>FuStW (gratis)</li><li>FuStW</li><li>FuStW</li></ul><p class="combo-note">FuStWs decken die klassischen Polizeieinsätze ab.</p></div>
        <div class="combo"><h4>Verkehrspolizei</h4><ul><li>FuStW × 3</li><li>Polizeimotorrad</li><li>Optional: FuStW (DGL)</li></ul></div>
        <div class="combo"><h4>Mit Zellen und Gefangenentransport</h4><ul><li>FuStW × 2</li><li>GefKw</li><li>+ Zellenausbauten</li></ul><p class="combo-note">Der GefKw (25.000 Cr. Ausbau) transportiert bis 5 Gefangene; je Gefangener in der Zelle gibt es 250 Credits.</p></div>
        <div class="combo"><h4>Kriminalpolizei (Zivil)</h4><ul><li>Zivilstreifenwagen × 2–4</li></ul><p class="combo-note">Benötigt den Kriminalpolizei-Ausbau (200.000 Cr.).</p></div>
        <div class="combo"><h4>Diensthunde</h4><ul><li>DHuFüKw × 3</li></ul><p class="combo-note">Diensthundestaffel-Ausbau (100.000 Cr.), Hundeführer-Ausbildung an der Polizeischule.</p></div>
        <div class="combo"><h4>Wasserwerfer-Zug (Bereitschaftspolizei)</h4><ul><li>LeBefKw</li><li>WaWe × 3</li></ul></div>
        <div class="combo"><h4>SEK-Zug</h4><ul><li>SEK-MTF</li><li>SEK-ZF × 3</li><li>FüKw</li></ul><p class="combo-note">SEK-Ausbildung (7 Tage); gleiche Logik beim MEK (MEK-MTF + 3× MEK-ZF + FüKw).</p></div>
        <div class="combo"><h4>Standard-Zug (Bereitschaftspolizei)</h4><ul><li>GruKw × 3</li><li>LeBefKw</li></ul><p class="combo-note">Bei Bau gratis vorhanden; jeder weitere Zug kostet 25.000 Cr. – Stellplätze sind immer dabei.</p></div>
        <div class="combo"><h4>Polizeihubschrauber</h4><ul><li>Polizeihubschrauber (mit/ohne Winde)</li><li>Optional: Außenlastbehälter</li></ul></div>
      </div>
    </div>

    <div class="chip-panel" data-panel="thw">
      <h3>THW – mögliche Kombis</h3>
      <p>ℹ️ Grundausstattung jedes THW-Bundes: GKW (bis zu 9 Personen, keine Lehrgänge), MTW-Zugtrupp (4, alle Zugtrupp), MzGW N (bis zu 9, keine Lehrgänge) und NEA50 (ohne Besatzung). Je nach Ausbaustufe kommen Fachgruppen dazu – je nach vorhandenen Stellplätzen gibt es beim THW oft mehrere Möglichkeiten, den Zug zu bestücken:</p>
      <div class="combo-grid">
        <div class="combo"><h4>🕳️ Räumen (4 Stellplätze)</h4><ul>
            <li><strong>Option 1 (ohne Anhänger):</strong> 1× LKW K 9 + 1× BRmG R</li>
            <li><strong>Option 2 (mit Anhänger):</strong> 1× MLW 5 + 1× Anh. DLE</li>
            <li>👨‍🚒 Option 1: LKW K 9 max. 3 Personen, alle 3 mit Fachgruppe Räumen; BRmG R ohne Besatzung · Option 2: MLW 5 max. 6 Personen, alle 6 mit Fachgruppe Räumen; Anh. DLE 0 Besatzung.</li>
          </ul></div>
        <div class="combo"><h4>🌊 Fachgruppe Wassergefahren (5 Stellplätze)</h4><ul>
            <li><strong>Option 1 (mit Anhänger):</strong> 1× LKW 7 Lkr 19 tm + 1× Anh. MzB.</li>
            <li><strong>Option 2 (Selbstfahrer, tauchen):</strong> 1× Tauchkraftwagen</li>
            <li>👨‍🚒 Option 1: Zug-LKW 2 Personen (Vollbesetzung, keine Ausbildung) – an der Einsatzstelle benötigen die Bootsteams Kräfte mit der Fachgruppe Wassergefahren · Option 2: exakt 2 Personen, beide mit Fachgruppe Bergungstaucher.</li>
          </ul></div>
        <div class="combo"><h4>💧 Fachgruppe Wasserschaden/Pumpen (4 Stellplätze)</h4><ul>
            <li><strong>Option 1 (mit Anhänger):</strong> 1× MLW 4 + Anh. SwPu + Anh. 7</li>
            <li><strong>Option 2 (Selbstfahrer):</strong> 1× LKW 7 Lbw (FGr WP)</li>
            <li>👨‍🚒 Option 1: MLW 4 max. 7 Personen, <strong>alle 7</strong> mit Fachgruppe Wasserschaden/Pumpen; Anhänger ohne Besatzung, an der Einsatzstelle je 1 Person mit Fachgruppe Wasserschaden/Pumpen · Option 2: 3 Personen, keine Lehrgänge.</li>
          </ul></div>
        <div class="combo"><h4>🔍 Ortung (4 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 1× MTW-O + 1× Anh. Hund</li>
            <li>👨‍🚒 MTW-O max. 5 Personen, keine Pflicht-Lehrgänge · zum Anh. Hund gehören an der Einsatzstelle Kräfte mit dem THW-Rettungshundeführer-Lehrgang.</li>
          </ul></div>
        <div class="combo"><h4>⚡ Elektroversorgung (2 Stellplätze)</h4><ul>
            <li><strong>Option 1 (Selbstfahrer):</strong> 1× LKW 7 Lbw (FGr E)</li>
            <li><strong>Option 2 (mit Anhänger):</strong> Zugfahrzeug + NEA200 (Elektroversorgung)</li>
            <li>👨‍🚒 Option 1: 3 Personen, keine Lehrgänge · Option 2: an der Einsatzstelle mind. 1 Person mit Fachgruppe Elektroversorgung + Besatzung des Zugfahrzeugs.</li>
          </ul></div>
        <div class="combo"><h4>🧱 Schwere Bergung (1 Stellplatz)</h4><ul>
            <li><strong>Option 1:</strong> 1× MzGW (FGr SB)</li>
            <li>👨‍🚒 Vollbesetzung: 9 Personen – <strong>alle 9</strong> mit Fachgruppe Schwere Bergung (7-Tage-Lehrgang).</li>
          </ul></div>
        <div class="combo"><h4>📡 Fachzug Führung und Kommunikation (5 Stellplätze)</h4><ul>
            <li><strong>Option 1 (kompakt):</strong> 1× FüKW + 1× Anh. FüLa</li>
            <li><strong>Option 2 (Vollausbau):</strong> 1× FmKW + 1× MTW-FGr K + 1× FüKomKW (+ MzGW E / MzGW FK bei genug Stellplätzen)</li>
            <li>👨‍🚒 Vollbesetzung Option 1: 4 Personen, alle mit Fachzug Führung und Kommunikation (7 Tage) · Option 2: bis zu 18 Personen (FmKW 7 + FüKomKW 7 + MTW-FGr K 4), <strong>alle</strong> mit Fachzug Führung und Kommunikation.</li>
          </ul></div>
        <div class="combo"><h4>🛰️ UAV (1 Stellplatz)</h4><ul>
            <li><strong>Option 1:</strong> 1× MTW-Tr UL</li>
            <li>👨‍🚒 Vollbesetzung: exakt 4 Personen, alle 4 mit UAV-Lehrgang Trupp Unbemannte Luftfahrtsysteme (3 Tage).</li>
          </ul></div>
        <div class="combo"><h4>🍲 Logistik-Verpflegungs-Versorgung (3 Stellplätze)</h4><ul>
            <li><strong>Option 1 (mit MTW):</strong> 1× LKW 7 Lbw (FGr Log-V) + 1× MTW-FGr Log-V</li>
            <li><strong>Option 2 (mit AB):</strong> 1× LKW 7 Lbw (FGr Log-V) + WLF + AB-Logistik-Versorgung (AB schont Stellplätze)</li>
            <li>👨‍🚒 LKW 7 Lbw (Log-V): 3 Personen, davon mind. 1× Logistik-Verpflegung + 2× Verpflegungshelfer · MTW-FGr Log-V: exakt 5 Personen, <strong>alle 5</strong> mit Logistik-Verpflegung · WLF-Variante: WLF 3 Personen (alle mit Wechsellader-Lehrgang); AB ohne Besatzung.</li>
          </ul></div>
        <div class="combo"><h4>🌉 Fachgruppe Brückenbau (3 Stellplätze)</h4><ul>
            <li><strong>Option 1 (Stabilbaustatz):</strong> 1× MzGW (FGr BrB) (+ 1× Mobilkran als Ergänzung)</li>
            <li><strong>Option 2 (Anhänger):</strong> Zugfahrzeug + Anh. Plattform (FGr BrB)</li>
            <li>👨‍🚒 Option 1: MzGW (BrB) 6–9 Personen, alle mit Fachgruppe Brückenbau; Mobilkran exakt 1 Person mit Kranführer-Lehrgang · Option 2: an der Einsatzstelle 6 Personen mit Fachgruppe Brückenbau + Besatzung des Zugfahrzeugs.</li>
          </ul></div>
        <div class="combo"><h4>👥 OV-MTW (2 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 1× MTW-OV (Ortsverband)</li>
            <li>👨‍🚒 Vollbesetzung: max. 7 Personen, keine Lehrgänge.</li>
          </ul></div>
      </div>
    </div><div class="chip-panel" data-panel="seg">
      <h3>SEG (Schnelleinsatzgruppe) – mögliche Kombis</h3>
      <p>ℹ️ Die SEG besitzt eigene Erweiterungsgebäude. Wo mehrere Zug-Zusammenstellungen möglich sind, stehen hier die Optionen – jeweils mit <strong>Personal-Vollbesetzung</strong> und der dazu nötigen Ausbildung.</p>
      <div class="combo-grid">
        <div class="combo"><h4>➕ Betreuungsdienst (10 Stellplätze)</h4><p class="combo-note">Der größte SEG-Ausbau – hier lohnt sich die Wahl der Zusammenstellung besonders.</p>
          <ul>
            <li><strong>Option 1:</strong> 3× Bt LKW, 4× Bt-Kombi und 3× GW-Bt</li>
            <li><strong>Option 2:</strong> 3× Bt LKW, 3× Anh FKH, 2× GW-Bt und 2× Bt-Kombi</li>
            <li>👨‍🚒 <strong>Option 1:</strong> Vollbesetzung 54 Personen – davon 42× Betreuungsdienst und 12× Verpflegungshelfer (Bt LKW je 3: 1× Betreuungsdienst + 2× Verpflegungshelfer; Bt-Kombi je 9, alle mit Betreuungsdienst; GW-Bt je 3: 1× Betreuungsdienst + 2× Verpflegungshelfer)</li>
            <li>👨‍🚒 <strong>Option 2:</strong> Vollbesetzung 33 Personen – davon 23× Betreuungsdienst und 10× Verpflegungshelfer; die 3× Anh FKH fahren ohne Besatzung (Personal kommt von den Bt LKW / GW-Bt)</li>
          </ul></div>
        <div class="combo"><h4>➕ Technik und Sicherheit (6 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 2× MTW-TeSi + 1× LKW Technik (Notstrom)</li>
            <li><strong>Option 2:</strong> 1× GW-TeSi + 2× MTW-TeSi</li>
            <li><strong>Option 3 (mit Anhänger):</strong> 2× Zugfahrzeug (z. B. MTW) + 2× Anh. TeSi</li>
            <li>👨‍🚒 Vollbesetzung Option 1: 20 Personen, davon je Fahrzeug mind. 1× Technik und Sicherheit (5-Tage-Lehrgang) · Option 2: 19 Personen, GW-TeSi alle 5 mit Technik und Sicherheit · Option 3: an der Einsatzstelle je Anhänger 2 Personen mit Technik und Sicherheit, zusätzlich Besatzung der Zugfahrzeuge.</li>
          </ul></div>
        <div class="combo"><h4>➕ Sanitätsdienst (4 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 2× RTW + 2× KTW Typ B</li>
            <li><strong>Option 2:</strong> 1× GW-San + 2× KTW Typ B + 1× RTW</li>
            <li>👨‍🚒 Option 1: 8 Personen, keine Ausbildung nötig · Option 2: 10 Personen, GW-San exakt 6 Personen, alle 6 mit SEG-GW-San-Lehrgang (3 Tage), Rest ohne Pflicht.</li>
          </ul></div>
        <div class="combo"><h4>➕ Wasserrettung (3 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 1× GW-Wasserrettung + 1× MZB (Mehrzweckboot)</li>
            <li><strong>Option 2:</strong> 1× GW-Taucher + 1× MZB</li>
            <li>👨‍🚒 Vollbesetzung Option 1: 6 Personen, alle 6 mit GW-Wasserrettung-Lehrgang (3 Tage); MZB ohne Besatzung · Option 2: GW-Taucher exakt 2 Personen, beide mit GW-Taucher-Lehrgang (5 Tage).</li>
          </ul></div>
        <div class="combo"><h4>➕ Rettungshundestaffel (2 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 1× Rettungshundefahrzeug</li>
            <li>👨‍🚒 Vollbesetzung: max. 5 Personen – <strong>alle</strong> mit Rettungshundeführer-Ausbildung.</li>
          </ul></div>
        <div class="combo"><h4>➕ Drohneneinheit (1 Stellplatz)</h4><ul>
            <li><strong>Option 1:</strong> 1× GW-UAS (Unbemanntes Luftaufklärungssystem)</li>
            <li>👨‍🚒 Vollbesetzung: exakt 4 Personen, alle 4 mit Drohnenoperator-Lehrgang (3 Tage).</li>
          </ul></div>
        <div class="combo"><h4>🏥 Führung (Basis)</h4><ul>
            <li><strong>Option 1:</strong> 1× ELW 1 (SEG)</li>
            <li>👨‍🚒 Vollbesetzung: 2 Personen – <strong>beide</strong> mit SEG-Einsatzleitung (4-Tage-Lehrgang).</li>
          </ul></div>
      </div>
    </div><div class="chip-panel" data-panel="wrbr">
      <h3>Wasser- und Bergrettung – mögliche Kombis</h3>
      <p>ℹ️ Beide Wachen kombinieren Rettungs- und Bergungsfahrzeuge unterschiedlich. Wo es mehrere Zusammenstellungen gibt, stehen hier die Optionen – jeweils mit <strong>Personal-Vollbesetzung</strong> und der dazu nötigen Ausbildung.</p>
      <div class="combo-grid">
        <div class="combo"><h4>🌊 Wasserrettungswache (Basis)</h4><ul>
            <li><strong>Option 1:</strong> 2× GW-Wasserrettung + 1× MZB (Mehrzweckboot)</li>
            <li><strong>Option 2:</strong> 1× GW-Wasserrettung + 1× GW-Taucher + 1× MZB</li>
            <li>👨‍🚒 Vollbesetzung: GW-Wasserrettung 6 Personen, alle mit GW-Wasserrettung-Lehrgang (3 Tage) · GW-Taucher exakt 2 Personen, beide mit GW-Taucher-Lehrgang (5 Tage) · MZB ohne Besatzung.</li>
          </ul></div>
        <div class="combo"><h4>🚤 Seenotrettungswache (Küste)</h4><ul>
            <li><strong>Option 1 (Einstieg):</strong> 2–3× Seenotrettungsboot</li>
            <li><strong>Option 2 (erweitert):</strong> 2× Seenotrettungsboot + 1× Seenotrettungskreuzer</li>
            <li><strong>Option 3 (mit Luftrettung):</strong> 1× Seenotrettungskreuzer + 1–2× Hubschrauber (Seenotrettung) – benötigt die Hubschrauberstation (50 Coins, 7-Tage-Bauzeit) und die Schule für Seefahrt (50 Coins) für die Lehrgänge</li>
            <li>👨‍🚒 Boote: je 2 Personen ohne Lehrgang · Kreuzer: bis zu 9 Personen, <strong>alle</strong> mit Seenotretter-Lehrgang (5 Tage) · Hubschrauber: 3–4 Personen, davon mind. 1× Hubschrauberpilot (Seenotrettung, 5 Tage), 1× Windenoperator (5 Tage) und 1× Wasserrettungsausbildung für Notfallsanitäter (7 Tage).</li>
          </ul></div>
        <div class="combo"><h4>⛰️ Bergrettungswache (Basis)</h4><ul>
            <li><strong>Option 1 (Grundausrüstung):</strong> 2× GW-Bergrettung + 1× ATV</li>
            <li><strong>Option 2 (mit Notversorgung):</strong> 1× GW-Bergrettung + 1× GW-Bergrettung (NEF)</li>
            <li>👨‍🚒 Vollbesetzung: GW-Bergrettung bis zu 6 Personen, keine Ausbildung nötig · GW-Bergrettung (NEF) bis zu 6 Personen, davon mind. 1× Notarzt (7 Tage) · ATV: 1 Person.</li>
          </ul></div>
        <div class="combo"><h4>🏔️ Bergrettung mit Führung &amp; Winter</h4><ul>
            <li><strong>Option 1:</strong> 2× GW-Bergrettung + 1× ELW Bergrettung</li>
            <li><strong>Option 2 (Winter):</strong> 2× GW-Bergrettung + 1× Schneefahrzeug</li>
            <li>👨‍🚒 Option 1: 15 Personen max. – ELW Bergrettung max. 3 Personen, <strong>alle 3</strong> mit Einsatzleiter Bergrettung (5 Tage) · Option 2: Schneefahrzeug 1 Person, keine Lehrgänge.</li>
          </ul></div>
        <div class="combo"><h4>🧗 Höhenrettung (2 Stellplätze an der Bergrettungswache)</h4><ul>
            <li><strong>Option 1 (Selbstfahrer):</strong> 1× GW-Höhenrettung (Bergrettung)</li>
            <li><strong>Option 2 (mit Anhänger):</strong> 1× Anh. Höhenrettung + 1× GW-Bergrettung als Transportfahrzeug</li>
            <li>👨‍🚒 Option 1: Vollbesetzung exakt 4 Personen, <strong>alle 4</strong> mit Höhenretter-Ausbildung (5 Tage) · Option 2: der Anhänger hat keine Besatzung, an der Einsatzstelle werden 4 Personen mit Höhenretter-Ausbildung benötigt, die über die GW-Bergrettung anfahren.</li>
          </ul></div>
        <div class="combo"><h4>🐕 Hundestaffel Bergrettung (2 Stellplätze)</h4><ul>
            <li><strong>Option 1:</strong> 1× Hundestaffel (Bergrettung)</li>
            <li>👨‍🚒 Vollbesetzung: 5 Personen – <strong>alle</strong> mit THW-Rettungshundeführer-Lehrgang (5 Tage).</li>
          </ul><p class="combo-note">Erweiterung Rettungshundestaffel an der Bergrettungswache.</p></div>
        <div class="combo"><h4>🚑 Rettungsdienst-Ausbau (Bergrettungswache)</h4><ul>
            <li><strong>Option 1:</strong> RTW + KTW (+ NEF für Notarzt-Versorgung)</li>
            <li><strong>Option 2 (Großtank):</strong> GRTW / NAW / ITW</li>
            <li>👨‍🚒 RTW/KTW: je 2 Personen, keine Lehrgänge · NEF: beide mit Notarzt-Ausbildung · GRTW 6 Personen (mind. 1 Notarzt) · NAW 3 Personen (mind. 1 Notarzt) · ITW 6 Personen (2× Intensivpflege, 1× Notarzt).</li>
          </ul></div>
      </div>
    </div>

        </section>
  `);

  /* ============================== FAHRZEUGLISTE ============================== */
  add("fahrzeuge", "🚒", "Fahrzeugliste", `
  <section class="card glass" data-chipgroup>
    <h2>Alle Fahrzeuge im Überblick</h2>
    <p>Jede Organisation in einem eigenen Tab: <strong>wo stationierbar</strong>, <strong>Anschaffungskosten</strong>, <strong>Besatzung</strong> und der <strong>Pflicht-Lehrgang</strong> je Fahrzeuggattung – abgeglichen mit den Live-Spieldaten (November 2026). Kauflimits pro Fahrzeuggattung stehen direkt im Spiel. Alle Kosten zentral: <a href="#kosten">Baukosten</a>.</p>

    <div class="chip-row">
      <button class="chip" data-chip="ff">🚒 Feuerwehr</button>
      <button class="chip" data-chip="rd">🚑 Rettungsdienst</button>
      <button class="chip" data-chip="pol">👮 Polizei</button>
      <button class="chip" data-chip="thw">🔧 THW</button>
      <button class="chip" data-chip="seg">🧪 SEG</button>
      <button class="chip" data-chip="wrbr">🚤 Wasser-/Seenot-/Bergrettung</button>
    </div>

    <!-- ============ FEUERWEHR ============ -->
    <div class="chip-panel" data-panel="ff">
      <h3>📍 Stationierbar an</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Stationierbar an", "Fahrzeuge"])}</thead>
        <tbody>
          ${tr(["Feuerwache / Kleinwache", "LF-Familie (LF 10 · LF 20 · LF 8/6 · LF 20/16 · LF 10/6 · LF 16-TS) · TSF-W · KLF / MLF · HLF 10 · HLF 20 · TLF-Familie · DLK 23 · ELW 1 / ELW 2 · RW · GW-Atemschutz · GW-Öl · GW-Messtechnik · GW-Gefahrgut · GW-Höhenrettung · GW-L2-Wasser · MTW · SW 1000 / SW 2000 / SW 2000-Tr / SW-Kats · Feuerwehrkran · WLF + AB · Tankwagen / Kleintankwagen · GTLF · PTLF 4000 · SLF · GW-Tierrettung"])}
          ${tr(["Erweiterung Großlüfter", "GW-Lüfter · Anh. Lüfter · AB-Lüfter"])}
          ${tr(["Erweiterung NEA 50 / 200", "NEA50 · NEA200 · AB-NEA50 · AB-NEA200"])}
          ${tr(["Erweiterung Drohneneinheit", "MTF-Drohne · ELW-Drohne · ELW-2-Drohne"])}
          ${tr(["Erweiterung Wasserrettung", "GW-Wasserrettung · GW-Taucher · MZB"])}
          ${tr(["Lagerraum / Logistik", "GW-L1 · GW-L2 · MTF-L · LF-L · AB-L (Rollcontainer-Module)"])}
          ${tr(["Abrollbehälter-Stellplätze", "WLF + AB-Auswahl (Rüst · Atemschutz · Öl · Schlauch · Dekon-P · Gefahrgut · Einsatzleitung · MZB · Tank · Lösch · Lüfter · Schiene · Küche · Sonderlöschmittel · Wasser/Schaum · NEA50 · NEA200 · Waldbrand)"])}
          ${tr(["Flughafenfeuerwehr", "Flugfeldlöschfahrzeug (FLF) · Rettungstreppenfahrzeug"])}
          ${tr(["Werkfeuerwehr", "GW-Werkfeuerwehr · ULF mit Löscharm · TM 50 · Turbolöscher"])}
          ${tr(["Verpflegungsdienst", "GW-Verpflegung · GW-Küche · MTW-Verpflegung · Feldkochherd (FKH) · AB-Küche"])}
          ${tr(["Waldbrandbekämpfung", "TLF 3000 W · TLF 5000 W · GTLF 10000 W · GW-Waldbrand · Anh. Waldbrand · AB-Waldbrand"])}
          ${tr(["Bahnrettung", "RW-Schiene · HLF Schiene · AB-Schiene"])}
        </tbody>
      </table></div>

      <h3>💰 Preise, Besatzung &amp; Lehrgänge</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Fahrzeug", "Credits", "Coins", "Besatzung Min–Max", "Pflicht-Lehrgang"])}</thead>
        <tbody>
          ${tr(["LF-Familie (LF 10 · LF 20 · LF 8/6 · LF 20/16 · LF 10/6 · LF 16-TS)", "5.000", "25", "1–9", "–"])}
          ${tr(["TSF-W", "5.000", "25", "1–6", "–"])}
          ${tr(["KLF / MLF", "5.000", "25", "1–6", "–"])}
          ${tr(["HLF 10 / HLF 20", "20.000", "25", "1–9", "–"])}
          ${tr(["TLF 2000 · 3000 · 4000 · 8/8 · 8/18 · 16/24-Tr · TLF 16 · 16/45 · 20/40 (-SL)", "5.000", "25", "1–3", "–"])}
          ${tr(["TLF 16/25", "5.000", "25", "1–6", "–"])}
          ${tr(["Drehleiter (DLK 23)", "10.000", "30", "1–3", "–"])}
          ${tr(["Einsatzleitwagen 1 (ELW 1)", "10.000", "25", "1–3", "–"])}
          ${tr(["Einsatzleitwagen 2 (ELW 2)", "25.500", "25", "1–6", "ELW 2"])}
          ${tr(["Rüstwagen (RW)", "12.180", "25", "1–3", "–"])}
          ${tr(["GW-Atemschutz", "11.680", "25", "1–3", "–"])}
          ${tr(["GW-Öl", "12.000", "25", "1–3", "–"])}
          ${tr(["GW-Messtechnik", "18.300", "25", "1–3", "GW-Messtechnik"])}
          ${tr(["GW-Gefahrgut", "19.200", "25", "1–3", "GW-Gefahrgut"])}
          ${tr(["GW-Höhenrettung", "19.500", "25", "1–9", "Höhenrettung"])}
          ${tr(["GW-L2-Wasser", "17.300", "25", "1–3", "–"])}
          ${tr(["SW 1000", "17.300", "25", "1–3", "–"])}
          ${tr(["SW 2000", "17.300", "25", "1–6", "–"])}
          ${tr(["SW 2000-Tr / SW-Kats", "17.300", "25", "1–3", "–"])}
          ${tr(["Mannschaftstransportfahrzeug (MTW)", "2.500", "12", "1–9", "–"])}
          ${tr(["Feuerwehrkran (FwK)", "30.000", "25", "1–2", "Feuerwehrkran"])}
          ${tr(["Wechselladerfahrzeug (WLF)", "5.000", "12", "1–3", "Wechsellader"])}
          ${tr(["Standard-AB (Rüst · Atemschutz · Öl · Schlauch · Dekon-P · Gefahrgut · Einsatzleitung · MZB)", "6.000", "12", "0/0", "Ausbildung an der Einsatzstelle (z. B. AB-Gefahrgut: GW-Gefahrgut)"])}
          ${tr(["AB-Tank / AB-Lösch / AB-Lüfter / AB-L / AB-Küche / AB-Schiene", "4.000–8.000", "12 / 15", "0/0", "Ausbildung an der Einsatzstelle"])}
          ${tr(["Dekon-P (Fahrzeug)", "23.100", "25", "1–6", "–"])}
          ${tr(["GTLF", "10.000", "15", "1–3", "–"])}
          ${tr(["PTLF 4000 / SLF 75", "10.000", "15", "1–2", "–"])}
          ${tr(["Tankwagen / Kleintankwagen", "15.000 / 10.000", "15", "1–3", "–"])}
          ${tr(["GW-Waldbrand · TLF 3000 W / TLF 5000 W · GTLF 10000 W", "5.000–20.000", "25", "0–3", "Wald- und Vegetationsbrandbekämpfung (GW/TLF: alle)"])}
          ${tr(["Anh. Waldbrand / AB-Waldbrand", "15.000 / 6.000", "20 / 12", "0/0", "Wald- und Vegetationsbrandbekämpfung (mind. 1 an der Einsatzstelle)"])}
          ${tr(["GW-Tierrettung", "15.000", "25", "2–6", "–"])}
          ${tr(["Anh. Tierrettung", "6.500", "10", "0/0", "–"])}
          ${tr(["GW-Verpflegung", "20.000", "25", "3–6", "Feuerwehr-Verpflegungseinheit (min. 1) + Verpflegungshelfer (min. 2)"])}
          ${tr(["GW-Küche", "35.000", "25", "3", "Feuerwehr-Verpflegungseinheit (min. 1) + Verpflegungshelfer (min. 2)"])}
          ${tr(["MTW-Verpflegung", "15.000", "13", "6", "Feuerwehr-Verpflegungseinheit (alle)"])}
          ${tr(["Feldkochherd (FKH) / AB-Küche", "10.000 / 7.000", "15 / 12", "0/0", "Bedienung durch Verpflegungsfahrzeug-Kräfte"])}
          ${tr(["Logistik: GW-L1 / GW-L2", "8.000 / 12.000", "15 / 25", "1–6", "–"])}
          ${tr(["Logistik: MTF-L / LF-L", "4.000 / 9.000", "10 / 15", "1–6 / 1–9", "–"])}
          ${tr(["GW-Lüfter / Anh. Lüfter / AB-Lüfter", "25.000 / 10.000 / 7.000", "25 / 15 / 12", "1–2 / 0/0", "–"])}
          ${tr(["GW-Werkfeuerwehr", "15.000", "30", "1–9", "Werkfeuerwehr"])}
          ${tr(["ULF mit Löscharm / TM 50 / Turbolöscher", "12.500–20.000", "25 / 30", "1–3", "Werkfeuerwehr"])}
          ${tr(["Flugfeldlöschfahrzeug (FLF)", "80.000", "25", "2–3", "Flugfeldlöschfahrzeug-Ausbildung"])}
          ${tr(["Rettungstreppe", "20.000", "25", "2", "Rettungstreppen-Ausbildung"])}
          ${tr(["Drohnen: MTF-Drohne / ELW-Drohne / ELW-2-Drohne", "10.000 / 20.000 / 35.000", "15 / 25", "4–6", "Drohnen-Schulung (MTF mind. 4); ELW-2-Drohne zusätzlich ELW 2"])}
          ${tr(["NEA50 / AB-NEA50 · NEA200 / AB-NEA200", "10.000 / 5.000 · 50.000 / 8.000", "20 / 12", "0/0", "NEA200 bzw. AB-NEA200: NEA200-Fortbildung (mind. 1)"])}
          ${tr(["MZB (Mehrzweckboot)", "6.000", "12", "0/0", "GW-Wasserrettung – Bedienung durch Wasserrettung-Kräfte"])}
          ${tr(["Bahnrettung: RW-Schiene / HLF Schiene / AB-Schiene", "18.500 / 30.000 / 7.000", "25 / 15", "1–3 / 1–9 / 0/0", "Bahnrettung (Fahrzeuge: alle)"])}
        </tbody>
      </table></div>
    </div>

    <!-- ============ RETTUNGSDIENST ============ -->
    <div class="chip-panel" data-panel="rd">
      <h3>📍 Stationierbar an</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Stationierbar an", "Fahrzeuge"])}</thead>
        <tbody>
          ${tr(["Rettungswache / Kleinwache", "RTW · KTW · NEF · NAW · GRTW · ITW · KdoW LNA / KdoW OrgL"])}
          ${tr(["Feuerwache mit RD-Erweiterung", "RTW · NEF · KTW · NAW · GRTW · ITW"])}
          ${tr(["Rettungshubschrauber-Station", "RTH · RTH mit Winde"])}
        </tbody>
      </table></div>

      <h3>💰 Preise, Besatzung &amp; Lehrgänge</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Fahrzeug", "Credits", "Coins", "Besatzung Min–Max", "Pflicht-Lehrgang"])}</thead>
        <tbody>
          ${tr(["Rettungswagen (RTW)", "5.000", "25", "1–2", "–"])}
          ${tr(["Krankentransportwagen (KTW)", "5.000", "25", "1–2", "–"])}
          ${tr(["Notarzteinsatzfahrzeug (NEF)", "20.000", "25", "1–2", "Notarzt-Ausbildung (alle)"])}
          ${tr(["Notarztwagen (NAW)", "25.000", "25", "3 (davon mind. 1 Notarzt)", "Notarzt-Ausbildung (mind. 1)"])}
          ${tr(["Großraum-Rettungswagen (GRTW)", "25.000", "25", "6 (Schwerverletzt-Modus: mind. 1 Notarzt)", "Notarzt-Ausbildung (mind. 1)"])}
          ${tr(["Intensivtransportwagen (ITW)", "30.000", "25", "3", "Intensivpflege (mind. 2) + Notarzt-Ausbildung (mind. 1)"])}
          ${tr(["KdoW LNA", "20.000", "25", "1", "LNA-Ausbildung"])}
          ${tr(["KdoW OrgL", "20.000", "25", "1", "OrgL-Ausbildung"])}
          ${tr(["Rettungshubschrauber (RTH)", "300.000", "30", "1–2", "Notarzt-Ausbildung (alle)"])}
          ${tr(["RTH mit Winde", "400.000", "30", "1–2", "Notarzt-Ausbildung (mind. 1) + Windenoperator (mind. 1)"])}
        </tbody>
      </table></div>
    </div>

    <!-- ============ POLIZEI ============ -->
    <div class="chip-panel" data-panel="pol">
      <h3>📍 Stationierbar an</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Stationierbar an", "Fahrzeuge"])}</thead>
        <tbody>
          ${tr(["Polizeiwache / Kleinwache", "FuStW · Zivilstreifenwagen · FuStW (DGL) · DHuFüKw · GefKw · Polizeimotorrad"])}
          ${tr(["Autobahnpolizei", "FuStW (AP)"])}
          ${tr(["Bereitschaftspolizei", "FüKw · LeBefKw · GruKw · GefKw · WaWe 10 · LauKw · SEK-ZF / SEK-MTF · MEK-ZF / MEK-MTF · DHuFüKw · Pferdetransport-Familie"])}
          ${tr(["Polizei-Sondereinheiten", "SEK-ZF / SEK-MTF · MEK-ZF / MEK-MTF · FüKw"])}
          ${tr(["Polizeireiterstaffel", "Zugfahrzeug Pferdetransport · Anh. Pferdetransport · Pferdetransporter (klein/groß)"])}
          ${tr(["Polizeihubschrauber-Station", "Polizeihubschrauber · Polizeihubschrauber mit Winde · Außenlastbehälter"])}
        </tbody>
      </table></div>

      <h3>💰 Preise, Besatzung &amp; Lehrgänge</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Fahrzeug", "Credits", "Coins", "Besatzung Min–Max", "Pflicht-Lehrgang"])}</thead>
        <tbody>
          ${tr(["Funkstreifenwagen (FuStW)", "5.000", "25", "1–2", "–"])}
          ${tr(["Zivilstreifenwagen", "5.000", "25", "1–2", "Kriminalpolizei"])}
          ${tr(["FuStW (Dienstgruppenleitung)", "25.000", "25", "1–2", "Dienstgruppenleitung (mind. 1)"])}
          ${tr(["FuStW (Autobahnpolizei)", "12.500", "25", "2", "Autobahnpolizei"])}
          ${tr(["Diensthundeführer-Kraftwagen (DHuFüKw)", "15.000", "10", "1–2", "Hundeführer (Schutzhund)"])}
          ${tr(["Gefangenenkraftwagen (GefKw)", "13.000", "25", "1–2", "–"])}
          ${tr(["Polizeimotorrad", "3.000", "10", "1", "Motorradstaffel"])}
          ${tr(["Leichter Befehlskraftwagen (LeBefKw)", "10.000", "25", "1–3", "Zugführer (LeBefKw)"])}
          ${tr(["Gruppenkraftwagen (GruKw)", "10.000", "25", "1–9", "–"])}
          ${tr(["Führungskraftwagen (FüKw)", "17.500", "25", "1–3", "Hundertschaftsführer (FüKw)"])}
          ${tr(["Wasserwerfer (WaWe 10)", "32.000", "25", "5", "Wasserwerfer"])}
          ${tr(["Lautsprecherkraftwagen (LauKw)", "32.000", "25", "5", "Lautsprecheroperator"])}
          ${tr(["SEK-ZF / MEK-ZF", "10.000", "25", "3–4", "SEK bzw. MEK"])}
          ${tr(["SEK-MTF / MEK-MTF", "10.000", "25", "9", "SEK bzw. MEK"])}
          ${tr(["Polizeihubschrauber", "300.000", "30", "1–3", "Polizeihubschrauber"])}
          ${tr(["Polizeihubschrauber mit Winde", "400.000", "30", "1–3", "Polizeihubschrauber (mind. 1) + Windenoperator (mind. 1)"])}
          ${tr(["Außenlastbehälter", "50.000", "10", "0/0", "Brandbekämpfung (Polizei)"])}
          ${tr(["Zugfahrzeug Pferdetransport", "5.000", "10", "1–6", "–"])}
          ${tr(["Anh. Pferdetransport", "15.000", "15", "0/0", "Reiterstaffel (an der Einsatzstelle)"])}
          ${tr(["Pferdetransporter klein / groß", "20.000 / 120.000", "20 / 25", "2–4 / 2", "Reiterstaffel (Transporter klein: mind. 2)"])}
        </tbody>
      </table></div>
    </div>

    <!-- ============ THW ============ -->
    <div class="chip-panel" data-panel="thw">
      <h3>📍 Stationierbar an</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Einheit / Fachgruppe", "Fahrzeuge"])}</thead>
        <tbody>
          ${tr(["Zugtrupp", "MTW-TZ"])}
          ${tr(["Bergungsgruppe", "GKW"])}
          ${tr(["Ortsverband", "MTW-OV"])}
          ${tr(["Fachgruppe Notversorgung / Notinstandsetzung", "MzGW (FGr N) · NEA50"])}
          ${tr(["Fachgruppe Räumen", "LKW K 9 · MLW 5 · BRmG R · Anh. DLE"])}
          ${tr(["Fachgruppe Wassergefahren", "LKW 7 Lkr 19 tm · Tauchkraftwagen · Anh. MzAB · Anh. SchlB · Anh. MzB"])}
          ${tr(["Fachgruppe Ortung (Typ A)", "MTW-O · Anh. Hund"])}
          ${tr(["Fachgruppe Wasserschaden / Pumpen", "MLW 4 · LKW 7 Lbw (FGr WP) · Anh. 7 · Anh. SwPu"])}
          ${tr(["Fachgruppe Schwere Bergung", "MzGW SB"])}
          ${tr(["Fachgruppe Elektroversorgung", "LKW 7 Lbw (FGr E) · NEA 200"])}
          ${tr(["Trupp UAV", "MTW-Tr UL (+ Drohnen)"])}
          ${tr(["Fachzug Führung und Kommunikation", "FmKW · FüKomKW · FüKW (THW) · MTW-FGr K · Anh. FüLa"])}
          ${tr(["Fachgruppe Logistik-Verpflegung", "LKW 7 Lbw (FGr Log-V) · MTW-FGr Log-V · Anh. 12 t Ladebordwand"])}
          ${tr(["Fachgruppe Brückenbau", "MzGW (FGr BrB) · Mobilkran · Anh. Plattform"])}
        </tbody>
      </table></div>

      <h3>💰 Preise, Besatzung &amp; Lehrgänge</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Fahrzeug", "Credits", "Coins", "Besatzung Min–Max", "Pflicht-Lehrgang"])}</thead>
        <tbody>
          ${tr(["MTW Technischer Zug (MTW-TZ)", "2.500", "12", "1–4", "Zugtrupp"])}
          ${tr(["Gerätekraftwagen (GKW)", "13.000", "25", "1–9", "–"])}
          ${tr(["MTW Ortsverband (MTW-OV)", "15.000", "13", "1–7", "–"])}
          ${tr(["MLW 5 / LKW K 9", "2.500 / 15.000", "12 / 25", "1–6 / 1–3", "Fachgruppe Räumen"])}
          ${tr(["BRmG R (Radlader)", "15.000", "25", "0/0", "Fachgruppe Räumen; Zugfahrzeug nötig"])}
          ${tr(["Anh. Drucklufterzeugung (DLE)", "10.000", "20", "0/0", "–"])}
          ${tr(["MzGW (FGr Notversorgung)", "15.000", "25", "1–9", "–"])}
          ${tr(["LKW 7 Lkr 19 tm", "15.000", "25", "1–2", "–"])}
          ${tr(["Tauchkraftwagen", "10.000", "25", "1–2", "Fachgruppe Bergungstaucher"])}
          ${tr(["Anh. MzB / Anh. SchlB / Anh. MzAB", "je 6.000", "12", "0/0", "Fachgruppe Wassergefahren"])}
          ${tr(["MLW 4 / LKW 7 Lbw (FGr WP)", "15.000", "25", "1–7 / 1–3", "Fachgruppe Wasserschaden/Pumpen"])}
          ${tr(["Anh. 7 t / Anh. Schmutzwasserpumpe (SwPu)", "je 15.000", "25", "0/0", "Fachgruppe Wasserschaden/Pumpen (mind. 1 an der Einsatzstelle)"])}
          ${tr(["MTW-O (FGr Ortung) / Anh. Hund", "19.000 / 6.000", "13 / 12", "4–5 / 0/0", "Anh. Hund: Fachgruppe Rettungshundeführer"])}
          ${tr(["MzGW Schwere Bergung (SB)", "15.000", "25", "1–9", "Fachgruppe Schwere Bergung"])}
          ${tr(["LKW 7 Lbw (FGr Elektroversorgung)", "15.000", "25", "1–3", "Fachgruppe Elektroversorgung"])}
          ${tr(["NEA 200 (THW)", "50.000", "20", "0/0", "Fachgruppe Elektroversorgung (mind. 1)"])}
          ${tr(["MTW-Tr UL (Drohnen)", "10.000", "15", "4", "Trupp Unbemannte Luftfahrtsysteme"])}
          ${tr(["FmKW / FüKomKW / MTW-FGr K", "20.000 / 25.000 / 20.000", "25", "1–7", "Fachzug Führung und Kommunikation"])}
          ${tr(["FüKW (THW)", "15.000", "15", "1–4", "Fachzug Führung und Kommunikation"])}
          ${tr(["Anh. Führung und Lage (FüLa)", "10.000", "10", "0/0", "–"])}
          ${tr(["LKW 7 Lbw (FGr Logistik-Verpflegung)", "15.000", "25", "3", "Verpflegungshelfer (mind. 2) + Logistik-Verpflegung (mind. 1)"])}
          ${tr(["MTW-FGr Logistik-Verpflegung", "2.500", "12", "5", "Logistik-Verpflegung (alle)"])}
          ${tr(["Anh. 12 t Ladebordwand", "5.000", "12", "0/0", "Bedienung durch Log-V-Kräfte"])}
          ${tr(["MzGW (FGr Brückenbau)", "15.000", "25", "6–9", "Fachgruppe Brückenbau"])}
          ${tr(["Mobilkran", "30.000", "25", "1", "Kranführer (THW)"])}
          ${tr(["Anh. Plattform (FGr BrB)", "6.000", "12", "0/0", "Fachgruppe Brückenbau (mind. 6 an der Einsatzstelle)"])}
        </tbody>
      </table></div>
    </div>

    <!-- ============ SEG ============ -->
    <div class="chip-panel" data-panel="seg">
      <h3>📍 Stationierbar an</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Ausbau", "Fahrzeuge"])}</thead>
        <tbody>
          ${tr(["Grundausstattung", "KTW Typ B"])}
          ${tr(["Führung", "ELW 1 (SEG)"])}
          ${tr(["Sanitätsdienst", "GW-SAN · KTW Typ B · RTW"])}
          ${tr(["SEG Drohne", "GW UAS (Gerätewagen Drohne)"])}
          ${tr(["Betreuungs- und Verpflegungsdienst", "Bt-LKW · Bt-Kombi · GW-Bt · Anh. FKH"])}
          ${tr(["Technik und Sicherheit", "GW-TeSi · LKW Technik (Notstrom) · MTW-TeSi · Anh. TeSi · Anh. NEA 50"])}
          ${tr(["Wasserrettung / Tauchen", "GW-Wasserrettung · GW-Taucher · MZB"])}
          ${tr(["Rettungshunde", "Rettungshundefahrzeug"])}
        </tbody>
      </table></div>

      <h3>💰 Preise, Besatzung &amp; Lehrgänge</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Fahrzeug", "Credits", "Coins", "Besatzung Min–Max", "Pflicht-Lehrgang"])}</thead>
        <tbody>
          ${tr(["KTW Typ B", "5.000", "25", "1–2", "–"])}
          ${tr(["ELW 1 (SEG)", "5.000", "25", "1–2", "SEG – Einsatzleitung"])}
          ${tr(["GW-San", "10.000", "25", "6", "SEG – GW-San (alle)"])}
          ${tr(["RTW", "5.000", "25", "1–2", "–"])}
          ${tr(["GW UAS (Drohne)", "10.000", "15", "4", "Drohnenoperator (Rettungsdienst)"])}
          ${tr(["GW-Betreuung (GW-Bt)", "35.000", "25", "3", "Betreuungsdienst (mind. 1) + Verpflegungshelfer (mind. 2)"])}
          ${tr(["Betreuungs-Kombi (Bt-Kombi)", "25.000", "15", "1–9", "Betreuungsdienst"])}
          ${tr(["Betreuungs-LKW (Bt-LKW)", "15.000", "15", "3", "Betreuungsdienst (mind. 1) + Verpflegungshelfer (mind. 2)"])}
          ${tr(["Anh. Feldkochherd (SEG)", "20.000", "15", "0/0", "Bedienung durch Betreuungs-Fahrzeug-Kräfte"])}
          ${tr(["GW-TeSi", "35.000", "25", "1–5", "Technik und Sicherheit"])}
          ${tr(["LKW Technik (Notstrom)", "30.000", "25", "2–6", "Technik und Sicherheit (mind. 1)"])}
          ${tr(["MTW-TeSi", "20.000", "25", "1–7", "Technik und Sicherheit (mind. 1)"])}
          ${tr(["Anh. TeSi / Anh. NEA 50", "je 10.000", "15", "0/0", "Technik und Sicherheit (mind. 2 an der Einsatzstelle)"])}
          ${tr(["GW-Wasserrettung / GW-Taucher / MZB", "10.000 / 10.000 / 6.000", "25 / 12", "1–6 / 2 / 0/0", "GW-Wasserrettung bzw. GW-Taucher-Lehrgang"])}
          ${tr(["Rettungshundefahrzeug", "25.000", "25", "4–5", "Rettungshundeführer"])}
        </tbody>
      </table></div>
    </div>

    <!-- ============ WASSER-/SEENOT-/BERGRETTUNG ============ -->
    <div class="chip-panel" data-panel="wrbr">
      <h3>📍 Stationierbar an</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Bereich", "Fahrzeuge"])}</thead>
        <tbody>
          ${tr(["Wasserrettungswache", "GW-Wasserrettung · GW-Taucher · MZB (Mehrzweckboot)"])}
          ${tr(["Seenotrettungswache", "Seenotrettungsboot · Seenotrettungskreuzer"])}
          ${tr(["Hubschrauberstation (Seenotrettung)", "Hubschrauber (Seenotrettung)"])}
          ${tr(["Rettungshundestaffel", "Rettungshundefahrzeug"])}
          ${tr(["Bergrettungswache", "GW-Bergrettung (normal / als NEF) · ELW Bergrettung · ATV · Schneefahrzeug · Hundestaffel (Bergrettung) · GW-Höhenrettung (Bergwacht) · Anh. Höhenrettung"])}
        </tbody>
      </table></div>

      <h3>💰 Preise, Besatzung &amp; Lehrgänge</h3>
      <div class="tbl-wrap"><table>
        <thead>${th(["Fahrzeug", "Credits", "Coins", "Besatzung Min–Max", "Pflicht-Lehrgang"])}</thead>
        <tbody>
          ${tr(["GW-Wasserrettung", "10.000", "25", "1–6", "GW-Wasserrettung-Lehrgang (alle)"])}
          ${tr(["GW-Taucher", "10.000", "25", "2", "GW-Taucher-Lehrgang (alle)"])}
          ${tr(["MZB (Mehrzweckboot)", "6.000", "12", "0/0", "GW-Wasserrettung – Bedienung durch Wasserrettung-Kräfte"])}
          ${tr(["Seenotrettungsboot", "50.000", "10", "1–2", "–"])}
          ${tr(["Seenotrettungskreuzer", "75.000", "25", "4–9", "Seenotretter"])}
          ${tr(["Hubschrauber (Seenotrettung)", "400.000", "30", "3–4", "Hubschrauberpilot (min. 1) + Windenoperator (min. 1) + Wasserrettungsausbildung (min. 1)"])}
          ${tr(["GW-Bergrettung", "15.000", "15", "3–6", "–"])}
          ${tr(["GW-Bergrettung (NEF)", "25.000", "25", "3–6", "Notarzt-Ausbildung (mind. 1)"])}
          ${tr(["ELW Bergrettung", "25.000", "25", "1–3", "Einsatzleiter Bergrettung"])}
          ${tr(["ATV / Schneefahrzeug", "5.000 / 10.000", "15", "1", "–"])}
          ${tr(["Hundestaffel (Bergrettung)", "25.000", "25", "4–5", "Rettungshundeführer"])}
          ${tr(["GW-Höhenrettung (Bergwacht)", "25.000", "25", "4", "Höhenretter"])}
          ${tr(["Anh. Höhenrettung (Bergrettung)", "10.000", "10", "0/0", "Höhenretter (mind. 4 an der Einsatzstelle); Zugfahrzeug: GW-Bergrettung"])}
          ${tr(["Rettungshundefahrzeug", "25.000", "25", "4–5", "Rettungshundeführer"])}
        </tbody>
      </table></div>
    </div>

    <div class="hint">👥 <strong>Merke zu Abrollbehältern:</strong> ABs haben keine eigene Besatzung (0/0) – sie werden vom WLF gezogen; die geforderten Ausbildungen müssen an der Einsatzstelle vorhanden sein. „0/0“-Anhänger sind außerdem an kein Personal-Soll gebunden.</div>
  </section>
  `);

  /* ============================== PERSONAL & LEHRGÄNGE ============================== */
  add("personal", "🎓", "Personal & Lehrgänge", `
  <section class="card glass">
    <h2>Personal einstellen</h2>
    <ul>
      <li><strong>Personal-Soll:</strong> In der Leitstelle (Tab „Gebäude") pro Wache festlegen, wie viel Personal angeworben werden soll.</li>
      <li><strong>Bewerbungsphasen</strong> starten pro Wache; mit Premium zentral in der Leitstelle und automatisierbar, bis die Sollzahl erreicht ist.</li>
      <li><strong>Kosten:</strong> Personal kostet laufend Gehalt – balanciere Besatzungsstärke und Einkommen.</li>
      <li>Manche Fahrzeuge brauchen <strong>Sonderausbildungen</strong> (Lehrgänge) – sonst fahren sie nicht aus.</li>
      <li><strong>Dienstgrade</strong> (z. B. Gruppenführer) schalten zusätzliche Fahrzeugoptionen frei – etwa die Wahl HLF statt LF bei Neubauten.</li>
    </ul>

    <h3>Lehrgänge &amp; Schulen</h3>
    <p>Schulen kosten je <strong>500.000 Credits / 50 Coins</strong>, jeder weitere Klassenraum <strong>400.000 Credits / 40 Coins</strong>. Mehr Klassenräume = mehr parallele Lehrgänge.</p>

        <div class="tbl-grid">
      <div class="tbl-cell">
<h4>🚒 Feuerwehrschule</h4>
    <div class="tbl-wrap"><table>
      <thead>${th(["Lehrgang", "Dauer"])}</thead>
      <tbody>
        ${tr(["GW-Messtechnik", "3 Tage"])}
        ${tr(["GW-Gefahrgut", "3 Tage"])}
        ${tr(["GW-Höhenrettung", "4 Tage"])}
        ${tr(["Flugfeldlöschfahrzeug", "7 Tage"])}
        ${tr(["Rettungstreppen", "2 Tage"])}
        ${tr(["ELW 2", "7 Tage"])}
        ${tr(["Wechsellader (WLF)", "2 Tage"])}
        ${tr(["Dekon-P", "3 Tage"])}
        ${tr(["Feuerwehrkran", "3 Tage"])}
        ${tr(["GW-Wasserrettung", "3 Tage"])}
        ${tr(["GW-Taucher", "5 Tage"])}
        ${tr(["Notarzt", "7 Tage"])}
        ${tr(["Werkfeuerwehr", "2 Tage"])}
        ${tr(["Intensivpflege", "3 Tage"])}
        ${tr(["NEA200-Fortbildung", "7 Tage"])}
        ${tr(["Drohnen-Schulung", "3 Tage"])}
        ${tr(["Feuerwehr-Verpflegungseinheit", "3 Tage"])}
        ${tr(["Verpflegungshelfer", "3 Tage"])}
        ${tr(["Bahnrettung", "3 Tage"])}
        ${tr(["Wald- und Vegetationsbrandbekämpfung", "1 Tag"])}
      </tbody>
    </table></div>
      </div>
      <div class="tbl-cell">
<h4>🚑 Rettungsschule</h4>
    <div class="tbl-wrap"><table>
      <thead>${th(["Lehrgang", "Dauer"])}</thead>
      <tbody>
        ${tr(["Notarzt-Ausbildung", "7 Tage"])}
        ${tr(["LNA-Ausbildung", "9 Tage"])}
        ${tr(["OrgL-Ausbildung", "11 Tage"])}
        ${tr(["SEG-Einsatzleitung", "4 Tage"])}
        ${tr(["SEG GW-SAN", "3 Tage"])}
        ${tr(["GW-Wasserrettung", "3 Tage"])}
        ${tr(["GW-Taucher", "5 Tage"])}
        ${tr(["Rettungshundeführer (SEG)", "5 Tage"])}
        ${tr(["Intensivpflege", "3 Tage"])}
        ${tr(["SEG Drohne", "3 Tage"])}
        ${tr(["Betreuungsdienst", "3 Tage"])}
        ${tr(["Verpflegungshelfer", "3 Tage"])}
        ${tr(["Höhenretter", "5 Tage"])}
        ${tr(["Windenoperator", "5 Tage"])}
        ${tr(["Einsatzleiter Bergrettung", "5 Tage"])}
        ${tr(["Technik und Sicherheit", "5 Tage"])}
        ${tr(["Wasserrettung f&uuml;r Notfallsanit&auml;ter", "7 Tage"])}
      </tbody>
    </table></div>
      </div>
      <div class="tbl-cell">
<h4>👮 Polizeischule</h4>
    <div class="tbl-wrap"><table>
      <thead>${th(["Lehrgang", "Dauer"])}</thead>
      <tbody>
        ${tr(["Zugführer (LeBefKw)", "7 Tage"])}
        ${tr(["Hundertschaftsführer (FüKw)", "7 Tage"])}
        ${tr(["Polizeihubschrauber", "7 Tage"])}
        ${tr(["Wasserwerfer", "7 Tage"])}
        ${tr(["SEK", "7 Tage"])}
        ${tr(["MEK", "7 Tage"])}
        ${tr(["Brandbekämpfung", "3 Tage"])}
        ${tr(["Motorradstaffel", "3 Tage"])}
        ${tr(["Hundeführer", "7 Tage"])}
        ${tr(["Kriminalpolizei", "7 Tage"])}
        ${tr(["Dienstgruppenleitung", "7 Tage"])}
        ${tr(["Reiterstaffel", "3 Tage"])}
        ${tr(["Windenoperator", "5 Tage"])}
        ${tr(["Lautsprecheroperator", "3 Tage"])}
        ${tr(["Autobahnpolizei", "3 Tage"])}
      </tbody>
    </table></div>
      </div>
      <div class="tbl-cell">
<h4>🔧 THW-Schule (Bundesschule)</h4>
    <div class="tbl-wrap"><table>
      <thead>${th(["Lehrgang", "Dauer"])}</thead>
      <tbody>
        ${tr(["Zugtrupp", "7 Tage"])}
        ${tr(["Fachgruppe Räumen", "7 Tage"])}
        ${tr(["Fachgruppe Wassergefahren", "3 Tage"])}
        ${tr(["Fachgruppe Bergungstaucher", "5 Tage"])}
        ${tr(["Fachgruppe Rettungshundeführer", "5 Tage"])}
        ${tr(["Fachgruppe Wasserschaden/Pumpen", "7 Tage"])}
        ${tr(["Fachgruppe Schwere Bergung", "7 Tage"])}
        ${tr(["Fachgruppe Elektroversorgung", "7 Tage"])}
        ${tr(["Trupp Unbemannte Luftfahrtsysteme (UAV)", "3 Tage"])}
        ${tr(["Fachzug Führung und Kommunikation", "7 Tage"])}
        ${tr(["Logistik-Verpflegung", "3 Tage"])}
        ${tr(["Verpflegungshelfer", "3 Tage"])}
        ${tr(["Fachgruppe Brückenbau", "3 Tage"])}
        ${tr(["Kranführer", "3 Tage"])}
      </tbody>
    </table></div>
      </div>
    </div>

  </section>
  `);

  /* ============================== VERBÄNDE ============================== */
  add("verbaende", "🤝", "Verbände", `
  <section class="card glass">
    <h2>Allianzen = Verbände</h2>
    <p>Verbände (Allianzen) verbinden Spieler: gemeinsame Einsätze, geteilte Infrastruktur und großzügige Belohnungen.</p>
    <h3>Funktionen</h3>
    <ul>
      <li><strong>Verbandseinsätze:</strong> Großlagen, bei denen alle Mitglieder alarmieren können; per Umkreis-Einstellung begrenzbar.</li>
      <li><strong>Verbandsgroßeinsatz:</strong> Koordinierter Großauftritt mit viel Personal – hohe Credits-Ausschüttung für Beteiligte.</li>
      <li><strong>Bereitstellungsraum:</strong> Verbandsweit nutzbar, um Fahrzeuge für Großlagen zu sammeln.</li>
      <li><strong>Krankenhaus-Freigabe:</strong> Dein Krankenhaus kann für Verbandsmitglieder geöffnet werden.</li>
      <li><strong>Verbandskasse:</strong> Gemeinsame Kasse des Verbands mit eigenen Regeln (Details im Wiki unter „Verbandskasse“).</li>
    </ul>
    <div class="hint blue">💡 Verbands-Events und saisonale Aktivitäten belohnen aktive Gruppenbeteiligung – lohnt sich, sobald du ca. 10+ Wachen hast.</div>
  </section>
  `);

  /* ============================== EVENTS ============================== */
  add("events", "🎄", "Events & Saison", `
  <section class="card glass">
    <h2>Event-Einsätze &amp; Saison-Events</h2>
    <p>Regelmäßig zeitlimitierte Einsätze mit Sammelobjekten und Belohnungen. Eventeinsätze kannst du in den Leitstellen-Einstellungen deaktivieren (Saisoneinsätze bleiben immer aktiv).</p>
    ${tbl(["Event", "Typ"], [
      tr(["Frühling / Sommer / Herbst / Winter", "Saisoneinsätze (dauerhaft aktiv)"]),
      tr(["Oster-Event", "Event mit Sammelobjekten"]),
      tr(["Halloween", "Event (Grusel-Szenarien, Kürbisse, Frankenstein …)"]),
      tr(["Weihnachten / Winter", "Event (Weihnachtsmärkte, Adventskränze, Feuerwerks-Brände …)"]),
      tr(["Silvester", "Event (Feuerwerkseinsätze)"]),
      tr(["Karneval / Fasching", "Event"]),
      tr(["Valentinstag · Muttertag · Vatertag", "Tages-Events"]),
      tr(["Tag des europäischen Notrufs 112", "Jahresevent"]),
      tr(["Sport-Events (u. a. Bundesliga-Risikospiel)", "Anlassbezogene Einsätze"]),
      tr(["Jubiläumseinsätze", "Spielerjubiläen"]),
      tr(["2×-Credits-Einsätze", "Mehrwährungsfenster (mit Premium 2,5×)"])
    ])}
    <div class="hint">🏆 Eventeinsätze bringen oft Coins und Sonderobjekte und haben eigene Sammelmechaniken. Wer sie nicht mag: einfach in der Leitstelle abschalten – ohne die Saisoneinsätze zu verlieren.</div>
  </section>
  `);

  /* ============================== PREMIUM ============================== */
  add("premium", "💎", "Premium-Account", `
  <section class="card glass">
    <h2>Vorteile des Premium-Accounts</h2>
    <ul>
      <li>Werbung im Spiel komplett deaktiviert</li>
      <li>Rettungsdienst wird automatisch zurückalarmiert (optional aktivierbar)</li>
      <li>Einsatzgenerierung auf <strong>„Turbo“</strong> umstellbar</li>
      <li>Beliebig viele Ausbauten pro Wache in die Warteschlange</li>
      <li>31-Tage-Verlauf der gefahrenen Kilometer · Tageszusammenfassung der Credits (7 Tage)</li>
      <li>Bewerbungsphasen zentral starten und automatisieren (bis Personal-Soll erreicht)</li>
      <li>Kauflimits günstiger: <strong>GRTW</strong> alle 15 Rettungswachen (statt 20) · <strong>ITW</strong> alle 10 (statt 15)</li>
      <li>Einsatzfenster zeigt vorherige und nächste offene Einsätze</li>
      <li>Bei 2×-Credits-Events: <strong>2,5× Credits</strong></li>
      <li>Log-in-Belohnung am 7. Tag: 5 Coins</li>
      <li>Zusätzliche Abschlussaufgaben in jedem Aufgaben-Set &amp; Premium-Auszeichnungen</li>
      <li>Max. <strong>8 Bereitstellungsräume</strong> (statt 4)</li>
    </ul>
    <h3>Preise (seit 01.05.2026)</h3>
    ${tbl(["Dauer", "Kosten", "Info"], [
      tr(["1 Monat", "45 Coins", "1 Monat = 30 Tage"]),
      tr(["3 Monate", "124 Coins", "„7 Tage gratis“: 83 Tage bezahlt, 90 erhalten"]),
      tr(["6 Monate", "225 Coins", "„1 Monat gratis“: 5 Monate bezahlt, 6 erhalten"]),
      tr(["12 Monate", "405 Coins", "„3 Monate gratis“: 9 Monate bezahlt, 12 erhalten"])
    ])}
    <div class="hint">ℹ️ Premium ist <strong>kein Abo</strong> – Restlaufzeiten stapeln sich (z. B. 3 × 12 Monate = 3 Jahre). Nach Ablauf fällt der Account auf Standard zurück.</div>
  </section>
  `);

  /* ============================== TIPPS & FAQ ============================== */
  add("tipps", "💡", "Tipps & FAQ", `
  <section class="card glass">
    <h2>Die 12 wichtigsten Tipps</h2>
    <ol>
      <li><strong>Erst 24 Wachen, dann skalieren:</strong> Ab Wache 25 eskalieren die Baukosten – nutze die „billige Phase“ für ein breites Netz.</li>
      <li><strong>AAO anlegen:</strong> Vordefinierte Alarmierungsordnungen (z. B. „Erster Zug“, Brand, Großlage) sparen im Alarmierungsfenster wertvolle Zeit.</li>
      <li><strong>Personal vor Fahrzeugen:</strong> Ein Fahrzeug ohne Personal oder mit falscher Ausbildung bleibt stehen oder passt nicht zur Besatzungsanforderung.</li>
      <li><strong>NEF erst ab 3. Rettungswache bzw. RD-Ausbauten</strong> planen – vorher wird es nicht angefordert.</li>
      <li><strong>Zellen lohnen sich:</strong> 250 Credits pro eingeliefertem Gefangenen, stündliche Entlassung rechnet sich mit der Zeit.</li>
      <li><strong>Lehrgänge parallelisieren:</strong> Mehr Klassenräume verkürzen Wartezeiten für Sonderausbildungen.</li>
      <li><strong>2×-Credits-Events nutzen:</strong> Große Käufe auf Multiplikatorfenster legen (Premium: 2,5×).</li>
      <li><strong>Gebäudeabstand beachten</strong> (Anticheat) – sonst wandern Einsätze weit weg.</li>
      <li><strong>Verband suchen und beitragen:</strong> Verbandseinsätze, geteilte Krankenhäuser und Großlagentraining bringen Fortschritt.</li>
      <li><strong>Bereitstellungsräume</strong> für Verbandseinsätze vorbereiten – Fahrzeuge früh sammeln.</li>
      <li><strong>Eventeinsätze bewusst wählen:</strong> Aktiv sammeln (Coins, Belohnungen) oder in der Leitstelle abdrehen.</li>
      <li><strong>Log-in-Kette halten</strong> – Tag 7 schenkt 5 Coins.</li>
    </ol>

    <h3>FAQ</h3>
    ${tbl(["Frage", "Antwort"], [
      tr(["Wann erscheint mein erster Einsatz?", "Direkt nach Spielstart – mit dem ersten LF starten die ersten Einsätze."]),
      tr(["Warum fährt mein Fahrzeug nicht?", "Personal fehlt oder das Personal hat nicht die passende (Sonder-)Ausbildung, oder das Fahrzeug ist bereits im Einsatz."]),
      tr(["Wann brauche ich ein NEF?", "Ab 3 Rettungswachen bzw. Rettungsdienst-Ausbauten fordern Einsätze NEF-Mittel an."]),
      tr(["Wofür Coins nutzen?", "Bau- und Ausbauzeiten sofort abschließen, Premium, Nischenfunktionen (z. B. Gefangenen-Sofortentlassung) oder alternativer Gebäudekauf."]),
      tr(["Mein Einsatz ist plötzlich größer geworden?", "Einsatzausbreitung: aus dem Kellerbrand wurde ein Hausbrand. In den Leitstellen-Einstellungen abschaltbar."]),
      tr(["Wo finde ich alle Kosten im Detail?", "Im eigenen Wiki unter <a href='#kosten'>Baukosten</a> – dort stehen alle Gebäude-, Ausbau- und Fahrzeugkosten mit Stufenpreisen."]),
      tr(["Gibt es Community-Tools?", "Beliebt sind Browser-Erweiterungen wie der LSS-Manager (Alarmierung und Übersicht) – nur offiziell zugelassene Add-ons verwenden."]),
      tr(["Wie alarmiere ich bei einer Großlage richtig?", "AAO „Großeinsatz“ wählen, Fahrzeuge vorher im Bereitstellungsraum sammeln und in Wellen alarmieren."])
    ])}
  </section>
  `);


  /* ============================== BAUKOSTEN ============================== */
  add("kosten", "🧾", "Baukosten", `
  <section class="card glass">
    <h2>Baukosten im Überblick</h2>
    <p>Alle Bau- und Anschaffungskosten (Datenstand: November 2026, LSS-Manager-API &amp; offizielles Wiki). Kauflimits und Preisvorteile durch Premium stehen unter <a href="#premium">Premium</a>.</p>

    <h3>🏗️ Gebäudeneubau (inkl. Kosten je Ausbaustufe)</h3>
    <div class="tbl-wrap"><table>
      <thead>${th(["Gebäude", "Neubau Cr.", "Coins", "Kosten je Stufe"])}</thead>
      <tbody>
        <tr><td>Feuerwache</td><td>100.000 Cr.</td><td>30 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Feuerwehrschule</td><td>500.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Rettungswache</td><td>200.000 Cr.</td><td>35 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Rettungsschule</td><td>500.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Krankenhaus</td><td>200.000 Cr.</td><td>25 Coins</td><td>je 19.000</td></tr>
        <tr><td>Rettungshubschrauber-Station</td><td>1.000.000 Cr.</td><td>50 Coins</td><td>je 1.000.000</td></tr>
        <tr><td>Polizeiwache</td><td>100.000 Cr.</td><td>35 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Leitstelle</td><td>gratis</td><td>gratis</td><td>–</td></tr>
        <tr><td>Polizeischule</td><td>500.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>THW</td><td>200.000 Cr.</td><td>35 Coins</td><td>–</td></tr>
        <tr><td>THW Bundesschule</td><td>500.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Bereitschaftspolizei</td><td>500.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Schnelleinsatzgruppe (SEG)</td><td>100.000 Cr.</td><td>30 Coins</td><td>–</td></tr>
        <tr><td>Polizeihubschrauberstation</td><td>1.000.000 Cr.</td><td>50 Coins</td><td>je 1.000.000</td></tr>
        <tr><td>Bereitstellungsraum</td><td>gratis</td><td>gratis</td><td>–</td></tr>
        <tr><td>Wasserrettung</td><td>500.000 Cr.</td><td>50 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Verbandszellen</td><td>100.000 Cr.</td><td>– Coins</td><td>–</td></tr>
        <tr><td>Polizei-Sondereinheiten</td><td>400.000 Cr.</td><td>40 Coins</td><td>–</td></tr>
        <tr><td>Feuerwache (Kleinwache)</td><td>50.000 Cr.</td><td>25 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Polizeiwache (Kleinwache)</td><td>50.000 Cr.</td><td>25 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Rettungswache (Kleinwache)</td><td>100.000 Cr.</td><td>25 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Rettungshundestaffel</td><td>450.000 Cr.</td><td>50 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Reiterstaffel</td><td>300.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Bergrettungswache</td><td>100.000 Cr.</td><td>35 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Seenotrettungswache</td><td>100.000 Cr.</td><td>35 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
        <tr><td>Schule für Seefahrt und Seenotrettung</td><td>500.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Hubschrauberstation (Seenotrettung)</td><td>1.000.000 Cr.</td><td>50 Coins</td><td>–</td></tr>
        <tr><td>Autobahnpolizei</td><td>400.000 Cr.</td><td>40 Coins</td><td>10.000 -> 50.000 -> 100.000</td></tr>
      </tbody>
    </table></div>
    <div class="hint">ℹ️ „Kosten je Stufe“ zeigt die Credits-Sequenz der Ausbaustufen (→ = Übergang). „je“ bedeutet: jede weitere Stufe kostet den gleichen Betrag. „–“: keine Stufen (Sonder- oder Schulgebäude).</div>

    <h3>🏢 Gebäudekomplex (Umbau einer bestehenden Wache)</h3>
    <p>Gebäudekomplexe sind <strong>keine Neubauten</strong> – deshalb tauchen sie auch nicht unter den Neubauten in der Gebäudeliste auf. Stattdessen wird eine <strong>bestehende, voll ausgebaute Wache</strong> (Stellplätze ausgebaut) zur „Gebäudekomplex-Basis“ umgebaut, danach werden bis zu vier weitere Wachen im Umkreis von 10&nbsp;km hinzugefügt und der Komplex fertiggestellt. Jeder der drei Schritte kostet den unten genannten Betrag; die Bauzeit der Basis beträgt 24&nbsp;Stunden.</p>
    <div class="tbl-wrap"><table>
      <thead>${th(["Schritt", "Kleiner Komplex", "Großer Komplex"])}</thead>
      <tbody>
        <tr><td>Gebäudekomplex-Basis (Umbau einer Wache)</td><td>150.000 Cr. / 35 Coins</td><td>500.000 Cr. / 50 Coins</td></tr>
        <tr><td>Wache zum Komplex hinzufügen (je Wache)</td><td>150.000 Cr. / 35 Coins</td><td>500.000 Cr. / 50 Coins</td></tr>
        <tr><td>Fertigstellung des Komplexes</td><td>150.000 Cr. / 35 Coins</td><td>500.000 Cr. / 50 Coins</td></tr>
        <tr><td><strong>Gesamtminimum</strong></td><td><strong>mind. 600.000 Cr.</strong></td><td><strong>mind. 2.000.000 Cr.</strong></td></tr>
      </tbody>
    </table></div>
    <div class="hint">ℹ️ <strong>Kleiner Komplex:</strong> Basis ist eine Kleinwache; hinzugefügt werden können nur Kleinwachen, max. 1 pro Typ. <strong>Großer Komplex:</strong> Basis ist eine normale Wache; hinzugefügt werden können nur normale Wachen, max. 2 pro Typ (insgesamt max. 4). Nachträgliches Hinzufügen von Wachen ist nicht möglich. Der Ausbau des fertigen Komplexes gibt allen angeschlossenen Wachen zusätzliche Stellplätze – beim großen Komplex bis Stufe 20 (die letzten Stufen kosten laut Forum zusammen rund 19,8 Mio. Cr.). ⚠️ <strong>Hinweis:</strong> Komplexe sind sehr teuer und bringen keinen direkten Spielvorteil – sie fassen mehrere Wachen optisch auf der Karte zu einem Icon zusammen. In der Community gilt: nur für Rein-Optik-/Realbau-Fans sinnvoll.</div>

    <h3>➕ Erweiterungen &amp; Ausbauten</h3>
    <div class="tbl-wrap"><table>
      <thead>${th(["Gebäude", "Ausbaustufe", "Kosten", "Bauzeit", "Stellplätze"])}</thead>
      <tbody>
        <tr><td><strong>Feuerwache</strong></td><td>Rettungsdienst</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Abrollbehälter-Stellplatz</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Wasserrettung</td><td>400.000 Cr/25 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Flughafenfeuerwehr</td><td>300.000 Cr/25 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Großwache</td><td>1.000.000 Cr/50 Coins</td><td>7 Tage</td><td>10 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Werkfeuerwehr</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Netzersatzanlage 50</td><td>100.000 Cr/20 Coins</td><td>5 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Netzersatzanlage 200</td><td>200.000 Cr/25 Coins</td><td>7 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Großlüfter</td><td>75.000 Cr/15 Coins</td><td>5 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Drohneneinheit</td><td>150.000 Cr/25 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Verpflegungsdienst</td><td>200.000 Cr/25 Coins</td><td>5 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Anhänger-Stellplatz</td><td>75.000 Cr/15 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Bahnrettung</td><td>150.000 Cr/25 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Tierrettung</td><td>100.000 Cr/20 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache</strong></td><td>Wald- und Vegetationsbrandbekämpfung</td><td>200.000 Cr/25 Coins</td><td>5 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>Feuerwehrschule</strong></td><td>Weiterer Klassenraum</td><td>400.000 Cr/40 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Rettungswache</strong></td><td>Großwache</td><td>1.000.000 Cr/50 Coins</td><td>7 Tage</td><td>10 Stellplätze</td></tr>
        <tr><td><strong>Rettungsschule</strong></td><td>Weiterer Klassenraum</td><td>400.000 Cr/40 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Allgemeine Innere</td><td>10.000 Cr/10 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Allgemeine Chirurgie</td><td>10.000 Cr/10 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Gynäkologie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Urologie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Unfallchirurgie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Neurologie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Neurochirurgie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Kardiologie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Kardiochirurgie</td><td>70.000 Cr/15 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Krankenhaus</strong></td><td>Großkrankenhaus</td><td>200.000 Cr/50 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Rettungshubschrauber-Station</strong></td><td>Windenrettung</td><td>200.000 Cr/15 Coins</td><td>3 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Zelle</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Diensthundestaffel</td><td>100.000 Cr/10 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Kriminalpolizei</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Dienstgruppenleitung</td><td>200.000 Cr/25 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Motorradstaffel</td><td>75.000 Cr/15 Coins</td><td>2 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Großwache</td><td>1.000.000 Cr/50 Coins</td><td>7 Tage</td><td>10 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Großgewahrsam</td><td>200.000 Cr/50 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache</strong></td><td>Autobahnpolizei</td><td>75.000 Cr/15 Coins</td><td>2 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Polizeischule</strong></td><td>Weiterer Klassenraum</td><td>400.000 Cr/40 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>1. Technischer Zug: Fachgruppe Notversorgung/Notinstandsetzung</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>1. Technischer Zug: Zugtrupp</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Räumen</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Wassergefahren</td><td>500.000 Cr/25 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>2. Technischer Zug - Bergungsgruppe</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>2. Technischer Zug: Fachgruppe Notversorgung/Notinstandsetzung</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>2. Technischer Zug: Zugtrupp</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Ortung</td><td>450.000 Cr/25 Coins</td><td>7 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Wasserschaden/Pumpen</td><td>200.000 Cr/25 Coins</td><td>7 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Schwere Bergung</td><td>200.000 Cr/25 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Elektroversorgung</td><td>200.000 Cr/25 Coins</td><td>7 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Ortsverbands-Mannschaftstransportwagen</td><td>50.000 Cr/15 Coins</td><td>3 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Trupp Unbemannte Luftfahrtsysteme</td><td>50.000 Cr/15 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachzug Führung und Kommunikation</td><td>300.000 Cr/25 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Logistik-Verpflegung</td><td>50.000 Cr/15 Coins</td><td>7 Tage</td><td>3 Stellplätze</td></tr>
        <tr><td><strong>THW</strong></td><td>Fachgruppe Brückenbau</td><td>50.000 Cr/15 Coins</td><td>7 Tage</td><td>3 Stellplätze</td></tr>
        <tr><td><strong>THW Bundesschule</strong></td><td>Weiterer Klassenraum</td><td>400.000 Cr/40 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>2. Zug der 1. Hundertschaft</td><td>25.000 Cr/5 Coins</td><td>3 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>3. Zug der 1. Hundertschaft</td><td>25.000 Cr/5 Coins</td><td>3 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>Sonderfahrzeug: Gefangenenkraftwagen</td><td>25.000 Cr/5 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>Technischer Zug: Wasserwerfer</td><td>25.000 Cr/5 Coins</td><td>3 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>SEK: 1. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>SEK: 2. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>MEK: 1. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>MEK: 2. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>Diensthundestaffel</td><td>100.000 Cr/10 Coins</td><td>5 Tage</td><td>3 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>Reiterstaffel</td><td>300.000 Cr/25 Coins</td><td>5 Tage</td><td>6 Stellplätze</td></tr>
        <tr><td><strong>Bereitschaftspolizei</strong></td><td>Sonderfahrzeug: Lautsprecherkraftwagen</td><td>100.000 Cr/10 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>Führung</td><td>25.000 Cr/5 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>Sanitätsdienst</td><td>25.500 Cr/5 Coins</td><td>3 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>Wasserrettung</td><td>500.000 Cr/25 Coins</td><td>7 Tage</td><td>3 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>Rettungshundestaffel</td><td>350.000 Cr/25 Coins</td><td>7 tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>SEG Drohne</td><td>50.000 Cr/15 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>Betreuungs- und Verpflegungsdienst</td><td>200.000 Cr/25 Coins</td><td>5 Tage</td><td>10 Stellplätze</td></tr>
        <tr><td><strong>Schnelleinsatzgruppe (SEG)</strong></td><td>Technik und Sicherheit</td><td>200.000 Cr/25 Coins</td><td>5 Tage</td><td>6 Stellplätze</td></tr>
        <tr><td><strong>Polizeihubschrauberstation</strong></td><td>Außenlastbehälter</td><td>200.000 Cr/15 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Polizeihubschrauberstation</strong></td><td>Windenrettung</td><td>200.000 Cr/15 Coins</td><td>3 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Verbandszellen</strong></td><td>Zelle</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Verbandszellen</strong></td><td>Großgewahrsam</td><td>200.000 Cr/50 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Polizei-Sondereinheiten</strong></td><td>SEK: 1. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Polizei-Sondereinheiten</strong></td><td>SEK: 2. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Polizei-Sondereinheiten</strong></td><td>MEK: 1. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Polizei-Sondereinheiten</strong></td><td>MEK: 2. Zug</td><td>100.000 Cr/10 Coins</td><td>7 Tage</td><td>5 Stellplätze</td></tr>
        <tr><td><strong>Polizei-Sondereinheiten</strong></td><td>Diensthundestaffel</td><td>100.000 Cr/10 Coins</td><td>5 Tage</td><td>3 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Rettungsdienst</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Abrollbehälter-Stellplatz</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Wasserrettung</td><td>400.000 Cr/25 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Flughafenfeuerwehr</td><td>300.000 Cr/25 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Werkfeuerwehr</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Netzersatzanlage 50</td><td>100.000 Cr/20 Coins</td><td>5 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Großlüfter</td><td>75.000 Cr/15 Coins</td><td>5 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Drohneneinheit</td><td>150.000 Cr/25 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Verpflegungsdienst</td><td>200.000 Cr/25 Coins</td><td>5 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Anhänger-Stellplatz</td><td>75.000 Cr/15 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Bahnrettung</td><td>150.000 Cr/25 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Tierrettung</td><td>100.000 Cr/20 Coins</td><td>3 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Feuerwache (Kleinwache)</strong></td><td>Wald- und Vegetationsbrandbekämpfung</td><td>200.000 Cr/25 Coins</td><td>5 Tage</td><td>4 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache (Kleinwache)</strong></td><td>Zelle</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache (Kleinwache)</strong></td><td>Diensthundestaffel</td><td>100.000 Cr/10 Coins</td><td>5 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache (Kleinwache)</strong></td><td>Kriminalpolizei</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>0 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache (Kleinwache)</strong></td><td>Dienstgruppenleitung</td><td>200.000 Cr/25 Coins</td><td>7 Tage</td><td>1 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache (Kleinwache)</strong></td><td>Motorradstaffel</td><td>75.000 Cr/15 Coins</td><td>2 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Polizeiwache (Kleinwache)</strong></td><td>Autobahnpolizei</td><td>75.000 Cr/15 Coins</td><td>2 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Reiterstaffel</strong></td><td>Reiterstaffel</td><td>300.000 Cr/25 Coins</td><td>5 Tage</td><td>6 Stellplätze</td></tr>
        <tr><td><strong>Bergrettungswache</strong></td><td>Höhenrettung</td><td>50.000 Cr/25 Coins</td><td>5 Tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Bergrettungswache</strong></td><td>Drohneneinheit</td><td>75.000 Cr/25 Coins</td><td>5 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Bergrettungswache</strong></td><td>Rettungshundestaffel</td><td>350.000 Cr/25 Coins</td><td>5 tage</td><td>2 Stellplätze</td></tr>
        <tr><td><strong>Bergrettungswache</strong></td><td>Rettungsdienst</td><td>100.000 Cr/20 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Schule für Seefahrt und Seenotrettung</strong></td><td>Weiterer Klassenraum</td><td>400.000 Cr/40 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
        <tr><td><strong>Autobahnpolizei</strong></td><td>Zelle</td><td>25.000 Cr/5 Coins</td><td>7 Tage</td><td>Stellplätze</td></tr>
      </tbody>
    </table></div>

    <h3>🚒 Fahrzeuge (Anschaffung)</h3>
    <div class="tbl-wrap"><table>
      <thead>${th(["Fahrzeug", "Credits", "Coins"])}</thead>
      <tbody>
        <tr><td>MLW 5</td><td>2.500 Cr.</td><td>12 Coins</td></tr>
        <tr><td>MTW</td><td>2.500 Cr.</td><td>12 Coins</td></tr>
        <tr><td>MTW-FGr Log-V</td><td>2.500 Cr.</td><td>12 Coins</td></tr>
        <tr><td>MTW-TZ</td><td>2.500 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Polizeimotorrad</td><td>3.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>AB-Tank</td><td>4.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>MTF-L</td><td>4.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>AB-NEA50</td><td>5.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh 12 Lbw (FGr Log-V)</td><td>5.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh Schlauch</td><td>5.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>Anh Sonderlöschmittel</td><td>5.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>ATV</td><td>5.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>ELW 1 (SEG)</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FuStW</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>KLF</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>KTW</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>KTW Typ B</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LF 10</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LF 10/6</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LF 16-TS</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LF 20</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LF 20/16</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LF 8/6</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MLF</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>RTW</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 16</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 16/24-Tr</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 16/25</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 16/45</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 20/40</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 20/40-SL</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 2000</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 3000</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 3000 W</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 4000</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 5000 W</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 8/18</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TLF 8/8</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TSF-W</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>WLF</td><td>5.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Zivilstreifenwagen</td><td>5.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Zugfahrzeug Pferdetransport</td><td>5.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>AB-Atemschutz</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Dekon-P</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Einsatzleitung</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Gefahrgut</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Öl</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-MZB</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Rüst</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Schlauch</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Sonderlöschmittel</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Waldbrand</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Wasser/Schaum</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh Hund</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh MzAB</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh MzB</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh Plattform (FGr BrB)</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh SchlB</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>MZB</td><td>6.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>Anh Tierrettung</td><td>6.500 Cr.</td><td>10 Coins</td></tr>
        <tr><td>AB-Küche</td><td>7.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-L</td><td>7.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Lüfter</td><td>7.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-Schiene</td><td>7.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>AB-Lösch</td><td>8.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>AB-NEA200</td><td>8.000 Cr.</td><td>12 Coins</td></tr>
        <tr><td>GW-L1</td><td>8.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>LF-L</td><td>9.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>Anh DLE</td><td>10.000 Cr.</td><td>20 Coins</td></tr>
        <tr><td>Anh FüLa</td><td>10.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>Anh Höhenrettung (Bergrettung)</td><td>10.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>Anh Lüfter</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>Anh NEA 50</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>Anh TeSi</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>DLK 23</td><td>10.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>ELW 1</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FKH</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>GruKw</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GTLF</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>GTLF 10000 W</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-San</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Taucher</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-UAS</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>GW-Wasserrettung</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Kleintankwagen</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>leBefKw</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MEK - MTF</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MEK - ZF</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MTF Drohne</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>MTW-Tr UL</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>NEA50</td><td>10.000 Cr.</td><td>20 Coins</td></tr>
        <tr><td>PTLF 4000</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>Schneefahrzeug</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>SEK - MTF</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>SEK - ZF</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>SLF</td><td>10.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>Tauchkraftwagen</td><td>10.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-A</td><td>11.680 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Öl</td><td>12.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-L2</td><td>12.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>RW</td><td>12.180 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FuStW (AP)</td><td>12.500 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Turbolöscher</td><td>12.500 Cr.</td><td>30 Coins</td></tr>
        <tr><td>GefKw</td><td>13.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GKW</td><td>13.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Anh 7</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Anh Pferdetransport</td><td>15.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>Anh SwPu</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Anh Waldbrand</td><td>15.000 Cr.</td><td>20 Coins</td></tr>
        <tr><td>BRmG R</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Bt LKW</td><td>15.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>DHuFüKW</td><td>15.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>FüKW (THW)</td><td>15.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>GW-Bergrettung</td><td>15.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>GW-Tierrettung</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Werkfeuerwehr</td><td>15.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>LKW 7 Lbw (FGr E)</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LKW 7 Lbw (FGr Log-V)</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LKW 7 Lbw (FGr WP)</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LKW 7 Lkr 19 tm</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LKW K 9</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MLW 4</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MTW-OV</td><td>15.000 Cr.</td><td>13 Coins</td></tr>
        <tr><td>MTW-Verpflegung</td><td>15.000 Cr.</td><td>13 Coins</td></tr>
        <tr><td>MzGW (FGr BrB)</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MzGW (FGr N)</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MzGW SB</td><td>15.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Tankwagen</td><td>15.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>GW-L2-Wasser</td><td>17.300 Cr.</td><td>25 Coins</td></tr>
        <tr><td>SW 1000</td><td>17.300 Cr.</td><td>25 Coins</td></tr>
        <tr><td>SW 2000</td><td>17.300 Cr.</td><td>25 Coins</td></tr>
        <tr><td>SW 2000-Tr</td><td>17.300 Cr.</td><td>25 Coins</td></tr>
        <tr><td>SW-Kats</td><td>17.300 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FüKW (Polizei)</td><td>17.500 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Messtechnik</td><td>18.300 Cr.</td><td>25 Coins</td></tr>
        <tr><td>RW-Schiene</td><td>18.500 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MTW-O</td><td>19.000 Cr.</td><td>13 Coins</td></tr>
        <tr><td>GW-Gefahrgut</td><td>19.200 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Höhenrettung</td><td>19.500 Cr.</td><td>25 Coins</td></tr>
        <tr><td>ELW Drohne</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FmKW</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Verpflegung</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Waldbrand</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>HLF 10</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>HLF 20</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>KdoW-LNA</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>KdoW-OrgL</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MTW-FGr K</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>MTW-TeSi</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>NEF</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Pferdetransporter klein</td><td>20.000 Cr.</td><td>20 Coins</td></tr>
        <tr><td>Rettungstreppe</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>TM 50</td><td>20.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>ULF mit Löscharm</td><td>20.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Dekon-P</td><td>23.100 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Bt-Kombi</td><td>25.000 Cr.</td><td>15 Coins</td></tr>
        <tr><td>ELW Bergrettung</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FüKomKW</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FuStW (DGL)</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GRTW</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Bergrettung (NEF)</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Höhenrettung (Bergrettung)</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Lüfter</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Hundestaffel (Bergrettung)</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>NAW</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Rettungshundefahrzeug</td><td>25.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>ELW 2</td><td>25.500 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FwK</td><td>30.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>HLF Schiene</td><td>30.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>ITW</td><td>30.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LKW Technik (Notstrom)</td><td>30.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Mobilkran</td><td>30.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>LauKw</td><td>32.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>WaWe 10</td><td>32.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>ELW 2 Drohne</td><td>35.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Bt</td><td>35.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-Küche</td><td>35.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>GW-TeSi</td><td>35.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Außenlastbehälter (allgemein)</td><td>50.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>NEA200</td><td>50.000 Cr.</td><td>20 Coins</td></tr>
        <tr><td>Seenotrettungsboot</td><td>50.000 Cr.</td><td>10 Coins</td></tr>
        <tr><td>Seenotrettungskreuzer</td><td>75.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>FLF</td><td>80.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Pferdetransporter groß</td><td>120.000 Cr.</td><td>25 Coins</td></tr>
        <tr><td>Polizeihubschrauber</td><td>300.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>RTH</td><td>300.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>Hubschrauber (Seenotrettung)</td><td>400.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>Polizeihubschrauber mit verbauter Winde</td><td>400.000 Cr.</td><td>30 Coins</td></tr>
        <tr><td>RTH Winde</td><td>400.000 Cr.</td><td>30 Coins</td></tr>
      </tbody>
    </table></div>
    <div class="hint">🎓 Schulen (Feuerwehr-, Rettungs-, Polizei- und THW-Schule) kosten je 500.000 Cr. / 50 Coins, jeder weitere Klassenraum 400.000 Cr. / 40 Coins – Details unter <a href="#personal">Personal &amp; Lehrgänge</a>.</div>
  </section>
  `);

  /* ============================== GLOSSAR ============================== */
  add("glossar", "📖", "Glossar & Abkürzungen", `
  <section class="card glass">
    <h2>Abkürzungen und Begriffe</h2>
    ${tbl(["Abkürzung", "Bedeutung"], [
      tr(["<strong>AAO</strong>", "Alarm- und Ausrückeordnung – vordefinierte Fahrzeugkombis zum Schnellalarmieren"]),
      tr(["<strong>AB</strong>", "Abrollbehälter (z. B. AB-Lüfter, AB-Dekon-P, AB-Schiene)"]),
      tr(["<strong>ATV</strong>", "All Terrain Vehicle (Bergrettung)"]),
      tr(["<strong>Bt-LKW / Bt-Kombi / GW-Bt</strong>", "Betreuungs-Lastkraftwagen / -Kombi / Gerätewagen Betreuung (SEG)"]),
      tr(["<strong>DGL</strong>", "Dienstgruppenleitung (FuStW (DGL))"]),
      tr(["<strong>DHuFüKw</strong>", "Diensthundeführer-Kraftwagen"]),
      tr(["<strong>DLK 23</strong>", "Drehleiter mit Korb, 23 m Leiterlänge"]),
      tr(["<strong>ELW 1 / ELW 2</strong>", "Einsatzleitwagen Stufe 1 / 2"]),
      tr(["<strong>FmKW / FüKomKW / FüKW</strong>", "Fernmelde-/Führungs- und Kommunikations-/Führungskraftwagen (THW und Polizei)"]),
      tr(["<strong>FLF</strong>", "Flugfeldlöschfahrzeug"]),
      tr(["<strong>FuStW</strong>", "Funkstreifenwagen (Polizei)"]),
      tr(["<strong>GefKw</strong>", "Gefangenenkraftwagen"]),
      tr(["<strong>GKW</strong>", "Gerätekraftwagen (THW Bergungsgruppe)"]),
      tr(["<strong>GruKw / LeBefKw</strong>", "Gruppenkraftwagen / leichter Befehlskraftwagen (Bereitschaftspolizei)"]),
      tr(["<strong>GRTW / ITW / KTW / NAW / NEF / RTW</strong>", "Großraumrettungswagen / Intensivtransportwagen / Krankentransportwagen / Notarztwagen / Notarzteinsatzfahrzeug / Rettungswagen"]),
      tr(["<strong>GW-…</strong>", "Gerätewagen (GW-Öl, GW-Gefahrgut, GW-Höhenrettung, GW-Messtechnik, GW-Taucher, GW-Wasserrettung, GW-SAN, GW-Betreuung, GW UAS …)"]),
      tr(["<strong>HLF</strong>", "Hilfeleistungs-Löschgruppenfahrzeug"]),
      tr(["<strong>KdoW LNA / OrgL</strong>", "Kommandowagen Leitender Notarzt / Organisatorischer Leiter"]),
      tr(["<strong>LF</strong>", "Löschfahrzeug"]),
      tr(["<strong>LNA / OrgL</strong>", "Leitender Notarzt / Organisatorischer Leiter Rettungsdienst"]),
      tr(["<strong>MzB</strong>", "Mehrzweckboot"]),
      tr(["<strong>MzGW (FGr N / SB)</strong>", "Mehrzweck-Gerätewagen der Fachgruppe Notversorgung / Schwere Bergung (THW)"]),
      tr(["<strong>MTF / MTW</strong>", "Mannschaftstransportfahrzeug / Mannschaftstransportwagen"]),
      tr(["<strong>NEA 50 / 200</strong>", "Netzersatzanlage 50 / 200 kVA"]),
      tr(["<strong>POI</strong>", "Point of Interest – eigener Einsatzort auf der Karte"]),
      tr(["<strong>RTH</strong>", "Rettungstransporthubschrauber"]),
      tr(["<strong>RW</strong>", "Rüstwagen"]),
      tr(["<strong>SEG</strong>", "Schnelleinsatzgruppe"]),
      tr(["<strong>SEK / MEK</strong>", "Spezialeinsatzkommando / Mobiles Einsatzkommando"]),
      tr(["<strong>SW 1000 / 2000</strong>", "Schlauchwagen (1000 m bzw. 2000 m B-Schlauch)"]),
      tr(["<strong>TLF</strong>", "Tanklöschfahrzeug (TLF 3000, TLF 16-25 …)"]),
      tr(["<strong>TM 50 / ULF / WLF / WaWe</strong>", "Turbo-Magirus-Löschfahrzeug / Universallöschfahrzeug mit Löscharm / Wechselladerfahrzeug / Wasserwerfer"])
    ])}
    <div class="hint">📄 Vollständige Liste: offizielles Wiki → <a href="https://wiki.leitstellenspiel.de/index.php?title=Liste_von_Abk%C3%BCrzungen_(Feuerwehr)" target="_blank" rel="noopener">Liste von Abkürzungen (Feuerwehr)</a>.</div>
  </section>
  `);

  /* ============================== LINKS ============================== */
  add("links", "🔗", "Links & Quellen", `
  <section class="card glass">
    <h2>Offizielle und Community-Quellen</h2>
    <ul>
      <li>🎮 <strong>Spiel:</strong> <a href="https://www.leitstellenspiel.de" target="_blank" rel="noopener">www.leitstellenspiel.de</a></li>
      <li>📚 <strong>Offizielles Wiki (Quelle dieser Daten):</strong> <a href="https://wiki.leitstellenspiel.de" target="_blank" rel="noopener">wiki.leitstellenspiel.de</a>
        <ul>
          <li><a href="https://wiki.leitstellenspiel.de/index.php?title=Geb%C3%A4ude" target="_blank" rel="noopener">Gebäude &amp; Ausbauten</a></li>
          <li><a href="#kosten">Kostenübersicht (hier im Wiki: Baukosten)</a></li>
          <li><a href="https://wiki.leitstellenspiel.de/index.php?title=Fahrzeuge" target="_blank" rel="noopener">Fahrzeuge</a></li>
          <li><a href="https://wiki.leitstellenspiel.de/index.php?title=Premium%20Account" target="_blank" rel="noopener">Premium-Account</a></li>
          <li><a href="https://wiki.leitstellenspiel.de/index.php?title=Lehrg%C3%A4nge" target="_blank" rel="noopener">Lehrgänge</a></li>
        </ul>
      </li>
      <li>💬 <strong>Offizielles Forum und Support:</strong> über die Community-Bereiche im Spiel bzw. den Anbieter Xyrality.</li>
      <li>🧾 <strong>Baukosten-Tabelle:</strong> intern im Wiki – <a href="#kosten">Baukosten</a> (Gebäude mit Stufenpreisen, Ausbauten, Fahrzeuge; Stand November 2026, LSS-Manager-API &amp; offizielles Wiki)</li>
    </ul>
    <h3>Über dieses Wiki</h3>
    <p>Dieses Wiki ist ein freies Nachschlagewerk als rein statisches Paket: <code>index.html</code> + <code>assets/</code>. Einfach in jeden Webserver-Ordner (oder direkt per Dateiöffnung) legen – kein PHP, keine Datenbank, keine Abhängigkeiten. Datenstand: <strong>November 2026</strong>; zum Aktualisieren einfach die Inhalte in <code>assets/data-part1.js</code> und <code>assets/data-part2.js</code> bearbeiten.</p>
  </section>
  `);
})();
