# 🗒️ Notizzettel-App – Lernprojekt (The Odin Project Mini-Projekt)

## 🎯 Ziel

> Eine kleine App mit sauberer Struktur, in der du Notizen anlegen, anzeigen, speichern und löschen kannst.
> 
> 
> Du lernst Klassen, Module, DOM-Manipulation und `localStorage`.
> 

---

## 📁 Ordnerstruktur

```
note-app/
├── index.html
├── style.css
├── main.js
└── modules/
    ├── note.js
    ├── storage.js
    └── dom.js

```

---

## ✅ Aufgabenübersicht

---

### 🔧 Projektsetup

- [ ]  Projektverzeichnis `note-app` erstellen
- [ ]  Dateien: `index.html`, `style.css`, `main.js`
- [ ]  Ordner `modules/` mit `note.js`, `storage.js`, `dom.js`
- [ ]  In `index.html` JavaScript mit `type="module"` einbinden

**Warum?**

Struktur schafft Übersicht. Eine gute Projektstruktur hilft dir, komplexere Projekte leichter zu verstehen und zu erweitern.

---

### 📦 `note.js` – Klasse für Notizen

- [ ]  Klasse `Note` erstellen mit: `title`, `content`, `date`, `priority`
- [ ]  Mit `export default Note` exportieren

**Warum?**

Klassen helfen dir, ein konsistentes Datenmodell zu haben. Du willst viele ähnliche Objekte – das geht mit Klassen elegant.

📚 [MDN: JavaScript Klassen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)

---

### 💾 `storage.js` – localStorage

- [ ]  Modul mit Funktionen: `saveNotes(notes)` und `loadNotes()`
- [ ]  Verwende ein IIFE zur Kapselung

**Warum?**

Speichern und Laden von Daten soll getrennt von der App-Logik sein. So ist dein Code wartbar und flexibel.

📚 [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

### 🖼️ `dom.js` – Anzeige

- [ ]  Funktion `renderNotes(notes)` erzeugt HTML für jede Notiz
- [ ]  Zeigt Titel, Inhalt, Datum, Priorität und Löschen-Button

**Warum?**

Trennung von Logik und UI! So kannst du Darstellung ändern, ohne an die Datenstruktur zu müssen.

📚 [DOM: createElement()](https://developer.mozilla.org/de/docs/Web/API/Document/createElement)

---

### 🧾 `index.html` – Benutzeroberfläche

- [ ]  Formular mit Feldern: Titel, Inhalt, Datum, Priorität
- [ ]  Bereich `<div id="notes">` für Anzeige

**Warum?**

Das HTML ist dein Interface – es soll übersichtlich und benutzerfreundlich sein.

---

### 🧠 `main.js` – Zentrale Logik

- [ ]  Importiere `Note`, `Storage`, `Dom`
- [ ]  Lade und rendere Notizen bei Start
- [ ]  EventListener für Formular: neue Notiz erstellen, speichern, anzeigen

**Warum?**

Dein Kontrollzentrum – hier laufen alle Teile der App zusammen.

📚 [MDN: Form Handling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Handling_form_submission)

---

### ❌ Löschfunktion

- [ ]  `data-index` pro Notiz
- [ ]  Klick-Event auf `#notes`Container (Event Delegation)
- [ ]  Note entfernen, neu speichern, neu rendern

**Warum?**

Event Delegation ist effizienter als für jedes Element einen EventListener zu schreiben.

---

## ✨ Bonus-Aufgaben (optional)

### 🎨 Styling

- Farbe je nach Priorität
- Layout verbessern

**Warum?**

Visuelles Feedback verbessert die Usability.

---

### 🧹 Sortierung

- Sortiere Notizen nach Datum vor dem Rendern

**Warum?**

Mehr Übersicht für den Nutzer – plus Übung mit `.sort()`.

---

### 🛡️ Validierung

- Eingaben prüfen und bei Fehlern Warnungen anzeigen

**Warum?**

Verhindert fehlerhafte oder leere Daten – wie in echten Apps.

---

## 🏁 Fazit

Du hast gelernt:

✅ Struktur mit Modulen

✅ Datenmodell mit Klassen

✅ DOM-Manipulation

✅ Daten speichern mit localStorage

✅ Und **warum** man all das so macht

---

Wenn du noch was brauchst, immer gern!