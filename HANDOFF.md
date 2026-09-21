# Projektübergabe: Schoolhelper Mindmap

Stand: 21. September 2026

## Zielentscheidung

Die Mindmap-Anwendung soll nicht als datenverarbeitender Onlinedienst betrieben werden. Ziel ist ein öffentliches Open-Source-Projekt mit einer statischen GitHub-Pages-Live-Demo. Die Anwendung wird als Progressive Web App installiert und arbeitet nach dem ersten vollständigen Laden offline.

Die gemeinsame Live-Demo genügt für die normale Schülernutzung. Optional soll jeder Schüler aus einem Template-Repository eine eigene unabhängige Kopie veröffentlichen können.

## Bereits implementiert

- Responsive grafische Mindmap für iPhone, iPad und Mac.
- Zentrales Thema, Hauptthemen und Unterthemen.
- Freies Verschieben per Maus und Touch.
- Textbearbeitung, Farben und Löschen.
- Zoom, Einpassen, Rückgängig und Wiederholen.
- Lokale automatische Speicherung mit `localStorage`.
- JSON-Import und JSON-Export.
- PDF-Ausgabe über die systemeigene Druckfunktion.
- App-Manifest und Service Worker.
- Vollständiger Offline-Cache der benötigten App-Dateien.
- Keine externen Laufzeitabhängigkeiten.
- Keine Analytics, Cookies oder Netzwerk-APIs für Mindmap-Inhalte.
- Lokaler Hinweis: Änderungen werden nur auf dem jeweiligen Gerät gespeichert und nicht übertragen.

## Vorhandene Dateien

- `index.html` – Anwendung und Bedienoberfläche
- `styles.css` – responsive Gestaltung und Drucklayout
- `app.js` – Mindmap-Logik und lokale Speicherung
- `manifest.webmanifest` – PWA-Installation
- `service-worker.js` – Offline-Cache
- `icon.svg`, `icon-180.png`, `icon-512.png` – App-Symbole
- `AGENTS.md` – verbindliche Anforderungen für Codex
- `START-HERE.md` – lokale Fortsetzung

## Wichtige Datenschutzgrenze

Mindmap-Inhalte dürfen niemals übertragen werden. Beim erstmaligen Abruf einer GitHub-Pages-Seite entstehen technisch normale Zugriffsdaten beim Hoster, insbesondere die IP-Adresse. Dies ist in der Datenschutzerklärung transparent zu benennen. Wer auch diese Verbindung vermeiden muss, verwendet das Offline-ZIP lokal.

## Bisheriger Hostingstand

Eine erste private Testversion wurde mit ChatGPT Sites erstellt. Sie ist nicht die Zielplattform. Eine erweiterte PWA-Fassung wurde lokal vorbereitet, aber noch nicht als neue öffentliche Zielversion freigegeben.

Die Zielplattform wurde anschließend auf GitHub Pages geändert.

## GitHub-Stand

- Gewünschter Organisationsname: `schoolhelper`.
- Die tatsächliche Verfügbarkeit dieses Namens wurde noch nicht verbindlich bestätigt.
- In der damals verbundenen GitHub-Integration war keine Organisation sichtbar.
- Die GitHub-Webanmeldung im Cloud-Browser wurde begonnen, aber nicht abgeschlossen.
- Es wurde noch keine Organisation und kein endgültiges öffentliches Repository angelegt.

## Noch zu erledigen

1. Verfügbarkeit von `schoolhelper` prüfen; andernfalls einen sachlichen Ersatznamen mit dem Nutzer abstimmen.
2. Öffentliche GitHub-Organisation anlegen oder auswählen.
3. Öffentliches Repository `mindmap` anlegen.
4. App-Dateien im Repository-Stamm ablegen und `.nojekyll` ergänzen.
5. `README.md`, MIT-Lizenz, `DATENSCHUTZ.md`, `HAFTUNGSHINWEISE.md`, `CONTRIBUTING.md` und `SECURITY.md` ergänzen.
6. Automatische Prüfungen für JavaScript-Syntax, Manifest, Offline-Assetliste und verbotene externe Datenziele hinzufügen.
7. GitHub-Pages-Workflow hinzufügen und Pages aktivieren.
8. Repository als Template markieren.
9. Live-Demo auf Desktop und Mobilansicht prüfen.
10. Offlineprüfung durchführen: einmal laden, Netzwerk trennen, neu starten, bearbeiten, speichern, PDF/JSON testen.
11. Öffentliche Live-URL und Repository-URL erst nach erfolgreicher Prüfung ausgeben.

## Rechtliche Einordnung

Eine Open-Source-Lizenz mit Gewährleistungs- und Haftungsausschluss reduziert Risiken, garantiert aber unter deutschem Recht keinen vollständigen Haftungsausschluss. Insbesondere Vorsatz, grobe Fahrlässigkeit und Schäden an Leben, Körper oder Gesundheit können nicht pauschal ausgeschlossen werden. Öffentliche Rechtstexte dürfen daher keine absolute Haftungsfreiheit versprechen.

Für ein gegebenenfalls erforderliches Impressum fehlen noch die bewusst vom Nutzer festzulegenden öffentlichen Anbieterangaben. Diese Angaben nicht erfinden.

## Qualitätskriterien für die Freigabe

- Alle Dateien werden relativ referenziert und funktionieren unter einem GitHub-Pages-Unterpfad.
- Der Service Worker cached jede für den Start notwendige Datei.
- Keine externen Ressourcen oder Datenziele im ausgelieferten Code.
- App startet nach Erstinstallation ohne Netz.
- Bestehende Mindmaps bleiben nach Neustart des Browsers erhalten, soweit das Betriebssystem den Browserspeicher nicht löscht.
- Exportdateien und PDF werden ausschließlich clientseitig erzeugt.
- Mobile Bedienelemente sind auf iPhone und iPad ohne horizontales Scrollen erreichbar.
