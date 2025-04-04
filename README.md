# 🕵️ Rosenheim-Cops Quiz

Ein liebevoll erstelltes Quiz für eingefleischte Fans der TV-Serie **„Die Rosenheim-Cops“**. Entwickelt als Web-App mit React, gehostet über **Vercel**, und mit Fragen aus einer **Firebase Firestore**-Datenbank.

---

## 🚀 Features

- 🔀 Zufällige Fragen aus der Firestore-Datenbank
- ✅ Sofortiges Feedback auf richtige oder falsche Antworten
- 🧠 Mischung aus Multiple-Choice- und freien Fragen (optional erweiterbar)
- 📱 Optimiert für Desktop und mobile Nutzung
- ☁️ Bereitgestellt über [Vercel](https://vercel.com)
- 🔐 API-Zugriff sicher über `.env`-Variablen geregelt

---

## 🔧 Lokale Entwicklung

### Voraussetzungen

- Node.js (v18 oder höher empfohlen)
- `.env`-Datei mit gültiger Firebase-Konfiguration (wird nicht mitgepusht!)

### Installation & Start

```bash
git clone https://github.com/Mettnum9000/rosenheim-quiz-app.git
cd rosenheim-quiz-app
npm install
npm start
```

Die App läuft dann unter:  
➡️ `http://localhost:3000`

---

## 🛠 Umgebungsvariablen

Diese müssen lokal in einer Datei `.env` im Hauptverzeichnis gesetzt werden:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_FIREBASE_MEASUREMENT_ID=...
```

---

## 🔄 Deployment

Das Projekt wird automatisch über [Vercel](https://vercel.com) deployed.  
Die Umgebungsvariablen sind dort ebenfalls korrekt gesetzt.

🔗 Live-Version: [rosenheim-quiz-app.vercel.app](https://rosenheim-quiz-app.vercel.app)

---

## 📦 Aktuelle Version

**v1.0.3 FB**  
→ Hinweis: Diese Version nutzt **Firebase Firestore** als Datenbank (zuvor: Supabase).

---

## 🧪 ToDo & Ideen

- [ ] Fragenkategorien
- [ ] Highscore-System
- [ ] Admin-Interface für neue Fragen
- [ ] Offline-Spielmodus

---

## © Lizenz

MIT – frei verwendbar für private Zwecke mit Liebe zu Rosenheim ❤️
