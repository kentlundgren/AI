# Dagens Dubbel Analyssystem - Projektkoordinator

> **Lokal CLAUDE.md** för DagensDubbel-projektet. Läses automatiskt av Claude Code vid sessionsstart.

**Projekt:** Dagens Dubbel Analyssystem  
**GitHub:** https://github.com/kentlundgren/AI/tree/main/DagensDubbel  
**Skapad:** 7 februari 2026  
**Status:** Vecka 6 genomförd, förberedelse för vecka 7

**📚 Överliggande regler:** Se [../CLAUDE.md](../CLAUDE.md) för AI-repository-övergripande best practices.

---

## 📋 PROJEKTÖVERSIKT

### Vad är detta projekt?

Ett **självförbättrande prediktionssystem** för Dagens Dubbel (Solvalla lördagstrav) som:
- Spårar 5 spelare (Kent, Lotta, Bengt, Benita + Systemet)
- Beräknar ROI, träffsäkerhet och statistik
- Förbättrar sina prediktioner över tid genom att lära av resultat
- Använder Firebase Firestore för molnbaserad datasynkning

### Status efter vecka 6

**✅ Klart:**
- Komplett webbsystem med 5 flikar
- Firebase Firestore-integration (hybrid localStorage + cloud)
- Automatisk insatsberäkning och veckonummerberäkning
- Färgkodning för input-feedback
- Pedagogisk `systemets_tips.html` för vecka 6
- PRD_ver2.md med lärdomar och förbättringar

**🎯 Nästa steg:**
- Implementera EV-analys för vecka 7
- Skapa systemets_tips_v7.html med nya strategin
- Samla Solvalla-specifik data (kusk/tränare senaste 10 lopp)

---

## 🗂️ FILSTRUKTUR

### Huvudfiler

| Fil | Syfte | Status |
|-----|-------|--------|
| **index.html** | Huvudsystem (5 flikar: Inmatning, Resultat, Analys, Historik, PRD) | ✅ v2.0 |
| **systemets_tips.html** | Pedagogisk förklaring av systemets strategi | ✅ Vecka 6 |
| **PRD_ver1.md** | Initial produktspecifikation | ✅ Arkiverad |
| **PRD_ver2.md** | Uppdaterad PRD med lärdomar från vecka 6 | ✅ Aktuell |
| **README.md** | Användarguide och teknisk dokumentation | ✅ Uppdaterad |
| **FireBase.html** | Komplett Firebase-guide (setup, mönster, best practices) | ✅ Aktuell |
| **CLAUDE.md** | Denna fil (projektkoordinator) | ✅ Aktuell |

### Agenter

| Agent | Syfte | Fil |
|-------|-------|-----|
| **FrontEnd** | UI/UX, HTML/CSS/JS, interaktivitet | `.claude/agents/FrontEnd.md` |
| **BackEnd** | Datahantering, Firebase, beräkningar, logik | `.claude/agents/BackEnd.md` |

### Bilder och assets

- `Create_a_database.jpg` - Firebase Console guide
- `dagens_dubbel_aktiverad.jpg` - Firebase aktiveringsbekräftelse
- `projektoversikt.jpg` - Firebase projektoversikt
- `Firebase_framsida.jpg` - Firebase Console startsida
- `add_Firebase_to_your_app_bild2.jpg` - Registrera webbapp
- *(Flera bilder från vecka 6:s resultat)*

---

## 🔥 BACKEND-FOKUS: FIREBASE OCH DATAHANTERING

### Firebase Firestore - Kent's Mönster A

**Varför Mönster A (Compat SDK)?**
- ✅ Enklast att implementera (ingen CSP krävs)
- ✅ `<script src>` imports (inga ES6 modules)
- ✅ Firestore = bättre queries än Realtime DB
- ✅ Beprövat i tidigare projekt (Bjerred-skylt)

### Firebase-konfiguration

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDrQs10JA1dE1Rf9PZjUGFI6PkCREs42zQ",
    authDomain: "dagens-dubbel.firebaseapp.com",
    projectId: "dagens-dubbel",
    storageBucket: "dagens-dubbel.firebasestorage.app",
    messagingSenderId: "982717111499",
    appId: "1:982717111499:web:250a78091cf957177dcf4e",
    measurementId: "G-1NZQ4SJ7F6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```

### Kritiska Firebase-funktioner

**1. saveToFirestore(weekData)**
- Använder `veckonummer` som dokument-ID: `week-${weekData.week}`
- Använder `.set()` med `{ merge: true }` för att uppdatera/skapa
- **VIKTIGT:** Förhindrar dubbletter (tidigare problem när man sparade flera gånger)

**2. loadFromFirestore()**
- Använder `.onSnapshot()` för realtidssynkning
- Filtrerar dubbletter med `Set`
- Synkar automatiskt till localStorage och uppdaterar UI

**3. cleanFirestoreDuplicates()**
- Rensar gamla dubbletter från Firestore
- Behåller bara senaste versionen av varje vecka
- Körs manuellt från console vid behov

### Hybrid-strategi: localStorage + Firebase

**Spara-flöde:**
```javascript
function saveWeekData() {
    // 1. Spara till localStorage (snabbt, offline-support)
    localStorage.setItem('ddWeeklyData', JSON.stringify(weeklyData));
    
    // 2. Spara till Firestore (cloud backup, multi-user)
    saveToFirestore(weekData);
    
    // 3. Uppdatera UI
    updateAllDisplays();
    markFieldsAsSaved();  // Gul → Grå
}
```

**Ladda-flöde:**
```javascript
window.onload = function() {
    // 1. Ladda från localStorage först (snabbt)
    loadDataFromStorage();
    
    // 2. Lyssna på Firebase (realtidsuppdateringar)
    loadFromFirestore();
    
    // 3. Initialisera funktioner
    setupBetCalculation();
    setupWeekNumberCalculation();
    setupDecimalInputHandling();
    setupFieldColorReset();
};
```

**Fördelar:**
- ✅ Snabb initial laddning (localStorage)
- ✅ Realtidssynk mellan användare (Firebase)
- ✅ Fungerar offline (localStorage fallback)
- ✅ Automatisk cloud backup (Firebase)

### Firestore Security Rules

**Aktuella regler (development mode):**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // TEMPORÄRT - för utveckling
    }
  }
}
```

**⚠️ VIKTIGT:** Uppdatera till säkrare regler innan publicering:
```javascript
match /dagensDubbel/{document=**} {
  allow read: if true;  // Alla kan läsa
  allow write: if request.auth != null;  // Endast inloggade kan skriva
}
```

**Se detaljer:** [FireBase.html](FireBase.html) - Sektion "Production Mode - Detaljerad guide"

---

## 🧮 AUTOMATISKA BERÄKNINGAR

### 1. Insatsberäkning

**Formel:** `Insats = antal_hästar_lopp1 × antal_hästar_lopp2 × 5 kr`

**Implementering:**
```javascript
function countHorses(str) {
    if (!str || str.trim() === '') return 0;
    return str.split(',').filter(s => s.trim() !== '').length;
}

function calculateBet(playerId) {
    const horsesRace1 = countHorses(race1Input.value);
    const horsesRace2 = countHorses(race2Input.value);
    const calculatedBet = horsesRace1 * horsesRace2 * 5;
    betInput.value = calculatedBet;
}
```

**Event listeners:** Körs automatiskt när användaren skriver i race1/race2 fält.

### 2. Veckonummerberäkning

**Standard:** ISO 8601 (vecka börjar måndag, vecka 1 = veckan med första torsdagen)

**Implementering:**
```javascript
function getISOWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNumber = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
}
```

**Trigger:** Automatiskt när användaren ändrar datum (`change` eller `input` event).

### 3. Komma/punkt-hantering

**Problem:** Svenska användare skriver `70,08` men JavaScript kräver `70.08`

**Lösning:**
```javascript
function setupDecimalInputHandling() {
    const ddPayoutInput = document.getElementById('dd-payout');
    
    ddPayoutInput.addEventListener('input', function() {
        this.value = this.value.replace(',', '.');
    });
}
```

**Trigger:** Körs vid `input` och `blur` events.

---

## 🎨 UI-FEEDBACK: FÄRGKODNING

### Färgschema

| Status | Färg | Bakgrund | Användning |
|--------|------|----------|------------|
| **Ska fyllas i** | 🟡 GUL | `#fffacd` | Manuella input-fält (hästar, datum, anteckningar) |
| **Automatisk** | ⚪ LJUSGRÅ | `#f8f9fa` | Readonly-fält (insats, veckonummer) |
| **Sparad** | ⬜ MÖRKGRÅ | `#e9ecef` | Fält som sparats (efter "Spara veckodata") |

### CSS

```css
/* Standard: Alla input börjar gula */
input[type="text"],
input[type="number"],
input[type="date"],
textarea {
    background-color: #fffacd;  /* Ljusgul */
    transition: all 0.3s ease;
}

/* Automatiska fält (bet, weekNumber) */
input[id$="-bet"],
#weekNumber {
    background-color: #f8f9fa;  /* Ljusgrå */
    font-weight: 600;
    color: #667eea;
    cursor: not-allowed;
}

/* Sparade fält */
input.saved,
textarea.saved {
    background-color: #e9ecef;  /* Mörkgrå */
}
```

### JavaScript-funktioner

**markFieldsAsSaved()** - Anropas efter sparande:
```javascript
function markFieldsAsSaved() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => input.classList.add('saved'));
}
```

**setupFieldColorReset()** - Återställer vid redigering:
```javascript
function setupFieldColorReset() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('saved');
        });
    });
}
```

---

## 🤖 SYSTEMETS PREDIKTIONSSTRATEGI

### Vecka 6 - Resultat och Lärdomar

**Vad hände:**
- Systemet satsade: Lopp 1 (5,8,11), Lopp 2 (1,4,15)
- Faktiska vinnare: Lopp 1 (#4, 11.54x), Lopp 2 (#6, 6.17x)
- DD-odds: **70,08x**
- **Resultat:** ❌ Systemet (och alla spelare) missade DD-träff

**Analys av misstag:**
1. ❌ **Överfokus på favoriter** - Valde häst 5 (3.72x) och 15 (2.98x) istället för medelvärden
2. ❌ **Ignorerade value-hästar** - Häst 4 och 6 var undervärderade med bättre EV
3. ❌ **Generell statistik** - Fokuserade på karriär-statistik istället för recent form på Solvalla

**Lärdomar:**
> DD kräver balans mellan säkerhet (favoriter) och value (medelvärden). Odds 70x visar att marknaden inte förväntade sig kombinationen 4-6 → systemet borde hittat denna "value"!

### Vecka 7 - Förbättrad strategi

**Nya analysfaktorer (från PRD_ver2.md):**
1. **Expected Value (EV)** = (Sannolikhet × Odds) - 1
2. **Solvalla-specialisering** = Kusk/tränare senaste 10 lopp på Solvalla (inte alla banor)
3. **Senaste lopp-marginal** = Hur nära var hästen senaste loppet?

**Ny DD-strategi:**
- **Lopp 1:** 1 favorit (odds 2-5x) + 2 medelvärden (odds 6-15x med högst EV)
- **Lopp 2:** 1 favorit (odds 2-5x) + 2 medelvärden (odds 6-15x med högst EV)
- **Resultat:** 3 × 3 = 9 rader = 45 kr (inom budget)

**Omviktning av analysfaktorer:**
| Faktor | v1 | v2 | Förändring |
|--------|----|----|------------|
| Formkurva | 25% | 25% | - |
| Startnummer/spår | 15% | **18%** | ↑ +3% |
| Kusk-statistik | 15% | **17%** | ↑ +2% |
| Tränare-statistik | 10% | **12%** | ↑ +2% |
| Tävlingspaus | 8% | **5%** | ↓ -3% |
| Head-to-head | 5% | **1%** | ↓ -4% |
| **Value (EV)** | - | **8%** | 🆕 |
| **Solvalla-spec.** | - | **5%** | 🆕 |
| **Senaste margin** | - | **3%** | 🆕 |

---

## 📅 WORKFLOW FÖR VECKA 7 (Nästa lördag)

### Fredag kväll / Lördag morgon

**📋 TODO före loppen:**

#### 1. Datainsamling (manuellt tillsvidare)

Besök [ATG.se - Dagens Dubbel Solvalla](https://www.atg.se/spel/dagens-dubbel/solvalla)

**För VARJE häst i V85-7 och V85-8:**
- [ ] Hästnamn och startnummer
- [ ] Kusk och tränare
- [ ] **Senaste 5 loppen** (datum, placering, marginal)
- [ ] **Senaste 10 loppen på Solvalla specifikt** (om möjligt)
- [ ] **V-odds** (vinnarodds, fredag kväll)
- [ ] **Spår/startposition**
- [ ] **Distans** (vanligtvis 2140m för DD)

**För loppet:**
- [ ] Loppklass (STL-final? Margareta? Vanligt lopp?)
- [ ] Väder och banutfall (temperatur, underlag)

#### 2. Analys med nya faktorer

**Steg 1: Grundscore (viktad)**
- Beräkna score för varje häst baserat på nya vikter (se tabell ovan)
- Rankning 1-12 per lopp

**Steg 2: EV-analys (NYTT)**
```
För varje häst:
  1. Uppskatta vinstsannolikhet från grundscore (t.ex. 8.5/10 → 30%)
  2. Hämta odds från ATG (t.ex. 4.2x)
  3. Beräkna EV = (0.30 × 4.2) - 1 = +0.26
  4. Om EV > 0.2 → STARK VALUE ⭐
```

**Steg 3: DD-urval (NYTT)**
- **Lopp 1:** Välj top-rankning MED högst EV: 1 favorit + 2 medelvärden
- **Lopp 2:** Samma strategi
- **Sanity check:** Jämför med mänskliga spelares val (Kent/Lotta/Bengt/Benita)

#### 3. Dokumentation

**Skapa `systemets_tips_v7.html`** med:
- [ ] Lärdomar från vecka 6 (kort)
- [ ] Nya analysfaktorer (EV, Solvalla-spec, marginal)
- [ ] Detaljerad häst-per-häst analys med EV-scores
- [ ] Förklaring av varför varje häst valdes
- [ ] Jämförelse med vecka 6 (vad har förbättrats?)
- [ ] Länk tillbaka till index.html

**Mall finns i:** [PRD_ver2.md](PRD_ver2.md) - Sektion 4.4

#### 4. Registrera i systemet

- [ ] Öppna `index.html`
- [ ] Gå till "📝 Inmatning"
- [ ] Välj datum (lördag vecka 7)
- [ ] Veckonummer beräknas automatiskt (ska bli 7)
- [ ] Generera systemets satsning (eller mata in manuellt baserat på analys)
- [ ] Vänta på loppen...

### Lördag eftermiddag (efter loppen)

**📋 TODO efter resultat:**

1. **Registrera resultat:**
   - [ ] Vinnare lopp 1
   - [ ] Vinnare lopp 2
   - [ ] DD-odds (använd komma eller punkt, systemet konverterar)
   - [ ] Klicka "💾 Spara veckodata"
   - [ ] Fälten blir grå (visar att data är sparad)

2. **Utvärdera:**
   - [ ] Fick systemet DD-träff? (Ja/Nej)
   - [ ] Hur presterade systemet vs mänskliga spelare?
   - [ ] Låg vinnarna i systemets top-3?
   - [ ] Fungerade EV-analysen? (Hade värdefulla hästar högre EV?)

3. **Justera inför vecka 8:**
   - [ ] Om systemet missade: Vilka faktorer kännetecknade vinnarna?
   - [ ] Om systemet träffade: Vilka faktorer var avgörande?
   - [ ] Uppdatera vikter i PRD_ver3.md (efter vecka 9, hela februari)

4. **Kontrollera Firebase:**
   - [ ] Öppna [Firebase Console](https://console.firebase.google.com/u/0/project/dagens-dubbel/firestore)
   - [ ] Verifiera att vecka 7 är sparad
   - [ ] Kolla att inga dubbletter finns (ska bara vara week-6, week-7, etc.)

---

## 📚 VIKTIGA KOMMANDON OCH FUNKTIONER

### PowerShell-kommandon (Kent använder PowerShell)

**Navigera till projektet:**
```powershell
cd "d:\VåraFiler_primära_på_SSD\Kent_dokument\Data\HTML\kentlundgren_se\program\AI\DagensDubbel"
```

**Öppna i webbläsare:**
```powershell
Start-Process index.html
```

**Git-kommandon (separata, ej &&):**
```powershell
git status
git add .
git commit -m "Vecka 7 resultat och analys"
git push
```

**⚠️ VIKTIGT:** PowerShell stödjer INTE `&&` - kör kommandon separat!

### JavaScript console-kommandon (i webbläsare)

**Rensa Firebase-dubbletter:**
```javascript
cleanFirestoreDuplicates()
```

**Kontrollera aktuell data:**
```javascript
console.log(weeklyData);  // Visa all sparad data
console.log(db);          // Kontrollera Firebase-anslutning
```

**Manuellt beräkna veckonummer:**
```javascript
calculateWeekNumber();
```

---

## 🎯 FRAMTIDA UTVECKLING

### Kort sikt (Vecka 7-9, Februari 2026)

**Mål:**
- ✅ Implementera EV-analys i praktiken
- ✅ Testa nya DD-strategin (favorit + medelvärden)
- ✅ Förbättra Solvalla-specifik data
- ✅ Uppnå första DD-träffen

**Leverans:**
- systemets_tips_v7.html med EV-scores
- systemets_tips_v8.html
- systemets_tips_v9.html
- PRD_ver3.md (efter hela februari)

### Medellång sikt (Månad 2-3, Mars-April 2026)

**När 8-12 veckor data finns:**
- [ ] Statistisk analys av mönster
- [ ] Automatisera datahämtning (web scraper för ATG.se)
- [ ] Identifiera återkommande vinnarprofiler
- [ ] Förbättra viktningsmodell baserat på korrelation

### Lång sikt (Månad 4+, Maj 2026 →)

**När 20+ veckor data finns:**
- [ ] Machine Learning-modeller (Random Forest, Neural Networks)
- [ ] Ensemble-system (flera modeller kombineras)
- [ ] Prediktiv modellering med konfidensintervall
- [ ] Utöka till V75, V86, andra banor

---

## 🔗 EXTERNA LÄNKAR OCH DATAKÄLLOR

### ATG (Svenska Spel)
- **Dagens Dubbel resultat:** https://www.atg.se/spel/dagens-dubbel
- **Solvalla program:** https://www.atg.se/spel/solvalla
- **Startlistor:** Publiceras fredag kväll / lördag morgon

### Svensk Travsport
- **Hästar, kuskar, tränare:** https://www.travsport.se
- **Statistik och resultat:** https://www.travsport.se/statistik

### Solvalla
- **Tävlingskalender:** https://www.solvalla.se

### Firebase
- **Console:** https://console.firebase.google.com/u/0/project/dagens-dubbel
- **Firestore Database:** https://console.firebase.google.com/u/0/project/dagens-dubbel/firestore
- **Security Rules:** https://console.firebase.google.com/u/0/project/dagens-dubbel/firestore/databases/-default-/security/rules

---

## ⚠️ VIKTIGA SAKER ATT KOMMA IHÅG

### 1. Färgkodning är viktig för UX
- Användaren ska alltid veta: Ska jag fylla i detta? Är det sparat?
- Gul = fyll i, Ljusgrå = automatiskt, Mörkgrå = sparat

### 2. Automatiska beräkningar förbättrar noggrannheten
- Människor gör räknefel (3 × 3 × 5 = ... 40? 45? 50?)
- Systemet räknar alltid rätt
- Insatsfält är readonly → inga manuella fel

### 3. Firebase Production Mode kräver omedelbar regeländring
- Firebase defaultar nu till "production mode" (allow: false)
- **OMEDELBART efter databas-skapande:** Ändra regler till `allow read, write: if true;`
- **Innan publicering:** Uppdatera till säkrare regler

### 4. Veckonummer använder ISO 8601-standard
- 7 feb 2026 = Vecka 6
- 14 feb 2026 = Vecka 7
- Veckan börjar måndag (inte söndag som i USA)

### 5. DD-odds är "gånger pengarna" (inte kronor)
- **Rätt:** 70,08x (multiplicera med insats för utdelning)
- **Fel:** 70,08 kr (är inte oddset)
- **Beräkning:** Utdelning = Odds × Insats, Vinst = Insats × (Odds - 1)

### 6. Samma vecka sparas flera gånger = UPPDATERING (inte dubbletter)
- Använder `week-${weekNumber}` som dokument-ID i Firestore
- `.set({ merge: true })` uppdaterar befintligt dokument
- **Tidigare problem (fixat):** `.add()` skapade nya dokument varje gång

---

## 🔧 VANLIGA UPPGIFTER

### Skapa systemets_tips för ny vecka

```bash
# Kopiera föregående vecka som mall
cp systemets_tips.html systemets_tips_v7.html

# Redigera:
# 1. Uppdatera header (Vecka 7, datum)
# 2. Lägg till "Lärdomar från vecka 6"-sektion
# 3. Uppdatera hästar, odds, EV-scores
# 4. Förklara varför varje häst valdes
# 5. Spara och länka från index.html
```

### Uppdatera PRD efter månad

```bash
# Efter vecka 9 (slutet februari), skapa PRD_ver3.md
cp PRD_ver2.md PRD_ver3.md

# Lägg till:
# - Resultat från vecka 7, 8, 9
# - Kumulativ statistik (4 veckor totalt)
# - Mönsterigenkänning
# - Viktjusteringar baserat på korrelation
# - Mål för månad 2 (mars)
```

### Felsökning

**Problem: Insatsen blir 0 kr**
```javascript
// Kontrollera att du separerar hästar med komma
"2,5,6"  // ✅ RÄTT
"2 5 6"  // ❌ FEL (mellanslag)
```

**Problem: Veckonummer visar fel**
```javascript
// Kontrollera att datum är rätt format
"2026-02-14"  // ✅ RÄTT (ISO format)
"14/02/2026"  // ❌ FEL
```

**Problem: Firebase sparar inte**
```javascript
// Öppna console (F12) och kolla efter felmeddelanden
// Kontrollera att Firebase är initierad:
console.log("Firebase initierad:", firebase.apps.length > 0);
console.log("Firestore tillgänglig:", typeof db !== 'undefined');
```

---

## 📖 LÄSA FÖRST (För nya Claude-sessioner)

### Viktiga filer att läsa innan du börjar:

1. **[PRD_ver2.md](PRD_ver2.md)** - Aktuell strategi, lärdomar från vecka 6, mål för vecka 7
2. **[FireBase.html](FireBase.html)** - Komplett Firebase-guide, setup, Kent's två mönster
3. **[.claude/agents/BackEnd.md](.claude/agents/BackEnd.md)** - Backend-logik, Firebase-funktioner, beräkningar
4. **[.claude/agents/FrontEnd.md](.claude/agents/FrontEnd.md)** - UI/UX-principer, färgkodning, design

### Snabbreferens: Vilken fil gör vad?

| Om du ska... | Läs denna fil först |
|--------------|---------------------|
| Förstå systemets prediktionsstrategi | PRD_ver2.md (sektion 3-4) |
| Ändra Firebase-integration | FireBase.html + BackEnd.md |
| Ändra automatiska beräkningar | BackEnd.md (sektion "Automatisk insatsberäkning") |
| Ändra UI eller färgkodning | FrontEnd.md + index.html (CSS) |
| Skapa systemets_tips för ny vecka | PRD_ver2.md sektion 4.4 + systemets_tips.html (som mall) |
| Förstå EV-analys | PRD_ver2.md sektion 3.4 |

---

## 💡 IDÉER FÖR FÖRBÄTTRING (Diskutera med Kent)

### 1. Automatiserad datahämtning (Månad 2-3)

**Problem:** Manuell datainsamling är tidskrävande och felbenägen

**Lösning:**
- Web scraper i Python (BeautifulSoup + Selenium)
- Hämtar startlistor från ATG.se fredag kväll
- Sparar strukturerat till JSON
- JavaScript läser JSON och genererar systemets_tips automatiskt

**Tech stack:**
```python
import requests
from bs4 import BeautifulSoup
import json

def scrape_atg_startlist(date):
    url = f"https://www.atg.se/spel/{date}/dd/solvalla"
    # ... scraping-logik ...
    return horses_data

horses = scrape_atg_startlist("2026-02-14")
with open("vecka7_data.json", "w") as f:
    json.dump(horses, f)
```

### 2. EV-beräkning i UI (Vecka 7-8)

**Lägg till i systemets_tips.html:**
- Tabell med EV-scores för alla hästar
- Graf som visar EV per häst (grön = value, röd = övervärderad)
- Interaktiv: "Vad händer om jag byter häst X mot Y?"

### 3. Oddstrend-analys (Vecka 8+)

**Samla odds vid flera tidpunkter:**
- Fredag kväll (initial)
- Lördag morgon (justerad)
- 1h före start (slutgiltig)

**Analys:**
- Om odds sjunker kraftigt → Insiders vet något? Stark favorit?
- Om odds stiger → Marknaden tappar tro → Value opportunity?

### 4. Kusk/tränare-databas (Månad 2)

**Bygg egen databas:**
```json
{
  "kuskar": {
    "Magnus A Djuse": {
      "solvalla_senaste_30d": {
        "starter": 15,
        "vinster": 5,
        "vinstprocent": 33.3,
        "top3": 10
      },
      "specialitet": ["Kallblod", "Sprint"]
    }
  }
}
```

### 5. Feedback-loop från användare (Vecka 8+)

**Lägg till formulär i systemets_tips:**
```html
<form id="user-feedback">
    <h3>💬 Vilken häst tror DU vinner?</h3>
    <input type="text" placeholder="Häst-nummer">
    <textarea placeholder="Motivering (t.ex. stark form, bra spår)"></textarea>
    <button type="submit">Skicka till systemet</button>
</form>
```

**Syfte:** Samla "mänsklig intuition" och identifiera faktorer AI:n missar.

---

## 🎓 LÄRANDE OCH DOKUMENTATION

### Lärdomar från vecka 6 (sammanfattning)

1. **Överfokus på favoriter fungerar inte för DD** → Balansera med medelvärden
2. **Generell statistik är mindre viktig än recent form på Solvalla** → Solvalla-specialisering
3. **Value betting (EV) är kritiskt** → Hitta undervärderade hästar
4. **Lyssna på mänskliga spelare** → Kent/Bengt hade delvis rätt

### Dokumentera varje vecka

**Efter varje lördag, uppdatera:**
- [ ] Historik-fliken i index.html (görs automatiskt)
- [ ] systemets_tips_vX.html (skapa ny för nästa vecka)
- [ ] Anteckningar i PRD (viktiga insikter)
- [ ] Firebase (data sparas automatiskt)

**Efter varje månad (4 veckor), skapa:**
- [ ] PRD_verX.md (månadsuppdatering)
- [ ] Månadsrapport (statistik, mönster, viktjusteringar)

---

## 🤝 SAMARBETE MED CLAUDE CODE AGENTER

### FrontEnd-agenten (FrontEnd.md)

**Ansvar:**
- HTML-struktur och layout
- CSS-styling och färgkodning
- JavaScript för UI-interaktivitet (flikar, knappar, formulär)
- Responsiv design

**Använd när:**
- Ändringar i gränssnitt krävs
- Nya visualiseringar ska läggas till
- Färgschema eller typografi ska uppdateras

### BackEnd-agenten (BackEnd.md)

**Ansvar:**
- localStorage och Firebase-operationer
- Beräkningslogik (insats, veckonummer, ROI, statistik)
- Datavalidering och felhantering
- Automatiska funktioner (beräkningar, färgkodning)

**Använd när:**
- Datahantering eller databas-operationer
- Nya beräkningar ska implementeras
- Firebase-integration ska ändras eller utökas
- Algoritmisk logik (EV, viktning, prediktion)

**VIKTIGT:** BackEnd-agenten känner till Kent's Firebase-mönster (se FireBase.html) och ska följa dessa.

---

## 📞 SUPPORT OCH FRÅGOR

### Oklarheter?

**Fråga Claude Code:**
```
"Använd BackEnd-agenten för att förklara hur EV-analys fungerar"
"Använd FrontEnd-agenten för att lägga till en ny flik"
"Förklara hur Firebase-dubbletter förhindras"
```

### Säkerhetskopiera projektet

**Lokalt:**
```powershell
# Kopiera hela projektet
Copy-Item -Recurse "DagensDubbel" "DagensDubbel_backup_$(Get-Date -Format 'yyyy-MM-dd')"
```

**GitHub:**
```powershell
git add .
git commit -m "Backup efter vecka X"
git push
```

**Firebase:**
- Data är automatiskt backupad i molnet
- Exportera via Console om du vill ha lokal kopia

---

**Dokumentslut**

*Denna CLAUDE.md uppdateras kontinuerligt baserat på projektets utveckling. Vid nästa session, läs denna fil FÖRST för att förstå projektets aktuella status och nästa steg.*

**Senast uppdaterad:** 7 februari 2026 (efter vecka 6)  
**Nästa uppdatering:** Efter vecka 9 (slutet februari 2026)  
**Författare:** Kent Lundgren + Claude Sonnet 4.5
