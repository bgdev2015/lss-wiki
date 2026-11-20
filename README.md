# LSS-Wiki – Leitstellenspiel.de (inoffizielles Wiki)

Ein vollständiges, modernes Wiki zum Browsergame **[Leitstellenspiel.de](https://www.leitstellenspiel.de)** –
mit Glasmorphism-Design, internen Fahrzeugkombinationen je Wachenausbau und **ohne PHP, ohne Datenbank, ohne Server**.

## Datenbasis

Die Inhalte wurden aus dem **offiziellen Leitstellenspiel-Wiki** ([wiki.leitstellenspiel.de](https://wiki.leitstellenspiel.de)),
aus Spielangaben und aus Community-Quellen recherchiert. Datenstand: **November 2026**
(Änderungen im Spiel sind jederzeit möglich).

## So startest du das Wiki

### Variante A – Einfach öffnen (empfohlen, kein Server nötig)
1. Ordner herunterladen und entpacken
2. Doppelklick auf `index.html`

> Die Seite lädt alle Daten über normale `<script>`-Tags – deshalb funktioniert sie auch per `file://`,
> ohne Webserver, ohne PHP und ohne Datenbank.

### Variante B – Webserver (optional)
Beliebiges statisches Webhosting funktioniert: IIS, nginx, Apache, GitHub Pages, Netlify …
Für lokales Testen liegt `serve.ps1` bei (kleiner PowerShell-HTTP-Server auf Port 8123):

```powershell
cd D:\LSS-Wiki-Projekt
powershell -ExecutionPolicy Bypass -File serve.ps1
# dann Browser öffnen: http://localhost:8123/
```

## Projektstruktur

```text
LSS-Wiki-Projekt/
├── index.html            ← Startseite & Grundgerüst
├── assets/
│   ├── style.css         ← Glasoptik-Design (hell/dunkel umschaltbar)
│   ├── app.js            ← Navigation, Suche, Theme, Routing (Hash)
│   ├── data-part1.js     ← Inhalt: Start, Spielprinzip, Wachen & Ausbau
│   └── data-part2.js     ← Inhalt: Kombis, Fahrzeuge, Personal, Verbände,
│                            Events, Premium, Tipps, Glossar, Links
└── serve.ps1             ← optionaler Mini-Webserver für Vorschau
```

## Inhalt des Wikis

| Seite | Thema |
|---|---|
| Start | Überblick & Schnellzugriff |
| Spielprinzip | Währungen, Leitstelle, Anticheat, Bereitstellungsraum, POIs |
| Wachen & Ausbau | **Alle Gebäude + Ausbauten mit Kosten & Bauzeiten** (Feuerwehr, RD, SEG, Polizei, THW, Wasser-, Bergrettung) |
| Fahrzeugkombis | **Bewährte Fahrzeugkombinationen je Wache, Ausbaustufe und Spezialausbau** |
| Fahrzeugliste | Alle Fahrzeuge gruppiert nach Organisation und Erweiterung |
| Personal & Lehrgänge | Einstellen, Werben, alle Lehrgänge der 4 Schulen mit Dauer |
| Verbände | Verbandseinsätze, Verbandskasse, gemeinsame Infrastruktur |
| Events & Saison | Alle Events (Saison, Ostern, Halloween, Weihnachten u. v. m.) |
| Premium | Vorteile & aktuelle Preise |
| Tipps & FAQ | 12 Top-Tipps + FAQ |
| Glossar | Abkürzungen von AB bis WLF |
| Links & Quellen | Offizielles Wiki, Forum, Community-Ressourcen |

## Mit Docker betreiben

Das Wiki als fertiges Image (Nginx, Gzip, Caching, Health-Check):

```
docker build -t lss-wiki .
docker run -d -p 8080:80 --name lss-wiki lss-wiki
```

oder mit Docker Compose:

```
docker compose up -d --build
```

Aufruf: **http://localhost:8080** – Stoppen mit `docker compose down`
bzw. `docker rm -f lss-wiki`.

## Anpassen / Erweitern

Alle Inhalte liegen in **`assets/data-part1.js`** und **`assets/data-part2.js`** als einfache
JavaScript-Vorlagen. Pro Abschnitt eine `add(...)`-Zeile – kopieren, ändern, fertig.
Die Volltextsuche indiziert alle Seiten automatisch.

## Wichtige Hinweise

- Das Wiki ist ein **inoffizielles Spielerprojekt** zu Leitstellenspiel.de (Markenrechte beim Betreiber).
- Kostendaten können sich mit Updates ändern → Offizielles Wiki als Referenz.
