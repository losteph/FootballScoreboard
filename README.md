# ⚽ Steph Scoreboard

Un tabellone segnapunti interattivo, reattivo e funzionante al 100% offline, pensato per gestire partite di calcio tra amici.

Sviluppato come **Progressive Web App (PWA)** autonoma: non richiede installazioni pesanti, non invia dati a server esterni e memorizza tutto in locale sul dispositivo.

---

## 🚀 Funzionalità Principali

- **Cronometro & Timer Personalizzabile:**
  - Modalità Conto alla Rovescia ⏳ e In Avanti ⏱️ con transizione dinamica senza azzeramento del tempo.
  - Durata del tempo regolabile a piacere.
  - Gestione tempi: 1° Tempo, 2° Tempo, 1° Tempo Supplementare, 2° Tempo Supplementare e Calci di Rigore.
  - Allarme acustico e vibrazione allo scadere del tempo.

- **Scoreboard & Gestione Squadre:**
  - Nomi e colori personalizzabili in tempo reale con bordi dinamici abbinati.
  - Conteggio gol rapidi o assegnati a singoli giocatori.
  - Conteggio rigori dedicato durante la sequenza finale.

- **Gestione Rose & Sostituzioni Dinamiche:**
  - Riconoscimento automatico del formato di gioco (5v5, 7v7, 11v11, ecc.) in base ai titolari attivi in campo.
  - Toggle rapido pre-partita `CAMPO / PANCA` per impostare la formazione.
  - Modale per sostituzioni ufficiali durante la gara con annotazione automatica nella cronaca.

- **Cronaca Live Dettagliata:**
  - Registrazione eventi: Gol (con marcatore e assistman), Rigori segnati/parati, Autogol, Ammonizioni, Espulsioni e Falli.
  - Possibilità di annullare qualsiasi evento/gol errato con riallineamento istantaneo del tabellone.

- **Archivio & Condivisione:**
  - Salvataggio nello storico locale delle partite con cronaca minuto per minuto.
  - Modifica del titolo, consultazione dettagliata o eliminazione selettiva delle gare archiviate.
  - Esportazione del tabellino completo pronto per essere condiviso su WhatsApp, Telegram o altro.

- **100% Offline & PWA:**
  - Grazie al Service Worker integrato (`sw.js`), l'app funziona anche senza connessione dati o in modalità aereo.
  - Privacy totale: tutti i dati rimangono isolati nel `localStorage` del browser del singolo utente.


### 🆕 Aggiunte:
- **Pagelle giocatori** (oggettive: calcolo basato su minutaggio di gioco effettivo ed azioni eseguite durante la partita).
- **Timer per cambio Portiere** (se il sito è usato per match amichevoli senza portieri fissi).

---

## 📱 Come Installarla sullo Smartphone

### Su iPhone (iOS)
1. Apri il link di GitHub Pages su **Safari**.
2. Tocca l'icona di **Condivisione** (il quadrato con la freccia verso l'alto).
3. Scorri e seleziona **"Aggiungi alla schermata Home"**.
4. L'app comparirà tra le tue applicazioni a schermo intero.

### Su Android
1. Apri il link di GitHub Pages su **Google Chrome**.
2. Tocca i **tre puntini** in alto a destra.
3. Seleziona **"Aggiungi a schermata Home"** o **"Installa app"**.

---

## 🛠️ Tecnologie Utilizzate

- **HTML5** (Struttura modulare e semantica)
- **CSS3** (Variabili CSS, clamp fluidi, flexbox e layout responsive adatti a schermi da 4.7" a desktop)
- **JavaScript ES6+** (Gestione stato, Web Audio API, Web Vibration API, Web Share API e LocalStorage)
- **Service Worker** (Caching locale per supporto offline completo)

---

## 📄 Licenza

Distribuito liberamente per uso personale, partite tra amici e tornei amatoriali.
