# Dagens Dubbel Analyssystem - Användarguide

## 📋 Översikt
Ett webbbaserat system för att analysera och följa upp satsningar på Dagens Dubbel (Solvalla lördagstrav). Systemet spårar fem spelare (Kent, Lotta, Bengt, Benita + ett automatiskt system) och beräknar statistik, ROI och träffsäkerhet över tid.

**Nytt i v2.0 (7 feb 2026):**
- 🔥 Firebase Firestore-integration för molnbaserad datalagring
- 🧮 Automatisk insatsberäkning (antal_hästar_lopp1 × antal_hästar_lopp2 × 5 kr)
- 📅 Automatisk ISO-veckonummerberäkning från datum
- 🎨 Färgkodning (gul → grå) för tydlig input-feedback
- 🤖 Förbättrad systemlogik med Expected Value (EV)-analys
- 📊 DD-odds istället för DD-utdelning (gånger pengarna)

## 🌐 Live Demo
**🎯 [Öppna programmet här →](https://kentlundgren.github.io/AI/DagensDubbel/)**

Klicka på länken ovan för att använda den live-versionen direkt i webbläsaren. Data sparas både lokalt (localStorage) och i molnet (Firebase Firestore) för synkning mellan enheter.

## 🚀 Snabbstart

### Steg 1: Öppna programmet
- Gå till [Live Demo](https://kentlundgren.github.io/AI/DagensDubbel/)
- **ELLER** öppna `index.html` lokalt i webbläsaren

### Steg 2: Välj datum
1. Datumfältet visar dagens datum automatiskt
2. **Veckonummerfältet beräknas automatiskt** från datumet (ISO-vecka)
3. Färgkodning: 🟡 Gult fält = ska fyllas i, ⚪ Ljusgrått = automatiskt beräknat

### Steg 3: Mata in spelares satsningar
- Fyll i hästnummer för varje spelare (separera med komma, t.ex. "2,5,6")
- **Insatsen beräknas automatiskt**: antal_hästar_lopp1 × antal_hästar_lopp2 × 5 kr
- Exempel: 3 hästar × 3 hästar = 9 rader = 45 kr ✅

### Steg 4: Generera systemets satsning
1. Klicka på knappen "🎲 Generera systemets satsning"
2. Systemet väljer smart 2-4 hästar per lopp för att ge insats 30-50 kr
3. Se pedagogisk förklaring i fliken "🤖 Systemets Tips"

### Steg 5: Efter loppen - registrera resultat
1. Fyll i vinnande hästnummer för båda loppen
2. Ange **DD-odds** (t.ex. 70,08 eller 70.08) - komma konverteras automatiskt till punkt
3. Lägg till eventuella anteckningar
4. Klicka "💾 Spara veckodata"
5. **Alla gula fält blir grå** för att visa att data är sparad
6. Data sparas både till localStorage OCH Firebase Firestore

### Steg 6: Se resultat och analys
- **🏆 Resultat**: Se senaste veckans utfall och vem som vann
- **📊 Analys**: Kumulativ statistik och ROI-jämförelse
- **📚 Historik**: Fullständig tabell över alla veckor
- **📄 PRD-Update**: Generera uppdaterad PRD baserat på insamlad data
- **🤖 Systemets Tips**: Pedagogisk förklaring av systemets val och strategi

## 💾 Datalagring

### Hybrid-lösning: localStorage + Firebase Firestore

**🔥 Firebase Firestore (Molnbaserad):**
- Data synkas automatiskt till Google Cloud
- Tillgänglig från alla enheter
- Realtidsuppdateringar när någon sparar data
- Automatisk backup i molnet

**💻 localStorage (Lokal cache):**
- Snabb initial laddning
- Fungerar offline
- Fallback om Firebase ej tillgänglig

**Hur det fungerar:**
1. När du sparar → Data sparas först till localStorage (snabbt), sedan till Firebase
2. Vid laddning → localStorage laddas först (snabbt), sedan lyssnar Firebase på uppdateringar
3. Vid ändringar → Firebase uppdaterar localStorage och UI automatiskt

**Säkerhetskopiera:**
- Exportera till CSV regelbundet (Historik-fliken)
- Firebase håller automatisk molnbackup

## 🌐 Hösta på GitHub Pages

### Alternativ 1: Enkelt (via GitHub-webbgränssnittet)
1. Gå till [GitHub.com](https://github.com) och logga in
2. Skapa ett nytt repository (t.ex. "dagens-dubbel")
3. Klicka "Upload files" och ladda upp `dagens-dubbel-system.html`
4. Byt namn på filen till `index.html`
5. Gå till Settings → Pages
6. Under "Source", välj "main branch" och spara
7. Din sida kommer vara tillgänglig på: `https://[ditt-användarnamn].github.io/dagens-dubbel/`

### Alternativ 2: Via Git (kommandorad)
```bash
# Skapa ett nytt repository
git init dagens-dubbel
cd dagens-dubbel

# Kopiera HTML-filen och byt namn
cp /sökväg/till/dagens-dubbel-system.html index.html

# Lägg till i Git
git add index.html
git commit -m "Initial commit: Dagens Dubbel System v1.0"

# Skapa remote repository på GitHub först, sedan:
git remote add origin https://github.com/[ditt-användarnamn]/dagens-dubbel.git
git branch -M main
git push -u origin main

# Aktivera GitHub Pages via Settings → Pages
```

## 📱 Funktioner

### Inmatning-fliken
- Registrera datum och veckonummer
- Mata in alla fem spelares satsningar
- Automatisk generering av systemets satsning
- Registrera faktiska resultat efter lopp

### Resultat-fliken
- Visa senaste veckans resultat
- Tydlig markering av träffar/missar
- Beräkning av vinst/förlust per spelare

### Analys-fliken
- Kumulativ statistik över alla veckor
- ROI-jämförelse mellan spelare (sorterad efter bäst prestanda)
- Automatiskt genererade insikter och mönster

### Historik-fliken
- Fullständig tabell över alla veckor
- Export till CSV för Excel/Google Sheets
- Möjlighet att rensa all data (med varningar)

### PRD-Update-fliken
- Sammanfattning av antal analyserade veckor
- Viktjusteringar baserat på data
- Nedladdning av uppdaterad PRD som textfil

## 🎨 Design och teknologi

### Teknisk stack
- **HTML5**: Grundstruktur
- **Vanilla JavaScript**: All funktionalitet och beräkningslogik
- **CSS3**: Modern, responsiv design med gradients och animationer
- **localStorage API**: Lokal persistent datalagring
- **Firebase Firestore (v10.7.0 Compat SDK)**: Molnbaserad databas med realtidssynkning

### Responsiv design
- Fungerar på desktop, tablet och mobil
- Grid-layout anpassar sig automatiskt
- Optimerad för touch-enheter

### Nya funktioner i v2.0 (7 feb 2026)

#### 🧮 Automatisk insatsberäkning
- Formel: `antal_hästar_lopp1 × antal_hästar_lopp2 × 5 kr`
- Uppdateras automatiskt när du skriver
- Insatsfält är readonly (kan ej redigeras manuellt)

#### 📅 Automatisk veckonummerberäkning
- Beräknar ISO-veckonummer från datum
- Korrekt för svenska veckor (måndag = veckostart)
- Exempel: 7 feb 2026 → Vecka 6, 14 feb 2026 → Vecka 7

#### 🎨 Färgkodning för input-fält
- **🟡 GUL** = Fält som ska fyllas i manuellt
- **⚪ LJUSGRÅ** = Automatiskt beräknade fält (insats, veckonummer)
- **⬜ MÖRKGRÅ** = Sparade fält (efter "Spara veckodata")
- Vid redigering → Fältet blir gult igen

#### 🔢 Komma/punkt-hantering
- Accepterar både `70,08` och `70.08` som input
- Konverterar automatiskt komma till punkt
- Svenskvänligt (använd komma som du är van vid!)

#### 🤖 Systemets Tips
- Pedagogisk förklaring av systemets val
- Oddsanalys från ATG.se
- Strategisk motivering per häst
- Tillgänglig via grön flik i huvudsystemet

## 🔧 Anpassning

### Ändra antal spelare
1. Öppna filen i en textredigerare
2. Leta upp objektet `const players = {...}`
3. Lägg till/ta bort spelare enligt mönstret
4. Uppdatera HTML-korten i "Spelares satsningar"-sektionen

### Ändra färgtema
1. Leta upp CSS-sektionen `/* GRUNDLÄGGANDE STILAR */`
2. Ändra färgerna i gradient-definitionerna
3. Uppdatera `.player-icon` färger för varje spelare

### Ändra insatsintervall för systemet
1. Hitta funktionen `generateSystemBet()`
2. Ändra raden: `const bet = Math.floor(Math.random() * 16) + 35;`
   - Exempel för 40-60 kr: `const bet = Math.floor(Math.random() * 21) + 40;`

## 📊 Dataformat

### CSV-export innehåller
- Veckonummer
- Datum
- Vinnare lopp 1 och 2
- DD-utdelning
- Träff/miss för varje spelare (1 = träff, 0 = miss)

### localStorage-struktur
Data sparas i JSON-format under nyckeln `ddWeeklyData`:
```javascript
[
  {
    "week": 1,
    "date": "2026-02-07",
    "notes": "STL-final och Margareta-serie",
    "players": {
      "kent": {
        "race1": [2, 5, 6],
        "race2": [6, 11, 15],
        "bet": 45
      },
      // ... övriga spelare
    },
    "results": {
      "winner_race1": 5,
      "winner_race2": 11,
      "dd_payout": 156.50,
      "notes": "Favorit vann båda loppen"
    },
    "timestamp": "2026-02-07T14:30:00.000Z"
  }
  // ... fler veckor
]
```

## ⚠️ Viktiga noteringar

### Data-säkerhet
- Data sparas ENDAST lokalt i webbläsaren
- Ingen data skickas till servrar
- Exportera regelbundet till CSV för säkerhetskopiering

### Webbläsarkompatibilitet
- Chrome/Edge: ✅ Fullt stöd
- Firefox: ✅ Fullt stöd
- Safari: ✅ Fullt stöd
- Internet Explorer: ❌ Stöds ej (använd modern webbläsare)

### localStorage-begränsningar
- Cirka 5-10 MB maxstorlek (beroende på webbläsare)
- Kan rensas av användaren via webbläsarinställningar
- Rensas INTE automatiskt vid "Clear browsing history" (men kan göra det manuellt)

## 🔥 Firebase-integration

### Setup (redan konfigurerad)
Projektet använder **Mönster A: Compat SDK + Firestore** (enklaste setup, ingen CSP krävs).

**Firebase-projekt:** `dagens-dubbel`  
**Databas:** Cloud Firestore (europe-west1)  
**Säkerhetsregler:** Production mode med temporära utvecklingsregler

### Så fungerar Firebase-integrationen

**När du sparar data:**
1. Sparas först till localStorage (snabbt, fungerar offline)
2. Sparas sedan till Firestore med `veckonummer` som unikt ID
3. Om du sparar samma vecka igen → uppdateras befintligt dokument (inga dubbletter)

**När du laddar sidan:**
1. localStorage laddas först (snabbt)
2. Firebase lyssnar på realtidsändringar (onSnapshot)
3. Om data ändras i molnet → synkas automatiskt till localStorage och UI

**Firestore-struktur:**
```
dagensDubbel (collection)
  └── veckor (document)
      └── items (subcollection)
          ├── week-6 (document)
          ├── week-7 (document)
          └── ...
```

### Rensa dubbletter (om du sparade samma vecka flera gånger)

Om du ser dubbletter i Historik-fliken:
1. Öppna Developer Console (F12)
2. Skriv: `cleanFirestoreDuplicates()`
3. Bekräfta rensningen
4. Ladda om sidan

**Se även:** [FireBase.html](FireBase.html) - Komplett guide för Firebase-setup och integration

## 🐛 Felsökning

### "Ingen data visas"
- Kontrollera att du klickat "💾 Spara veckodata"
- Öppna webbläsarens console (F12) och kolla efter felmeddelanden
- Kontrollera att Firebase-anslutningen fungerar (se console-loggar)

### "Data försvann"
- Kollade du localStorage i webbläsarinställningarna?
- Kontrollera Firebase Console: https://console.firebase.google.com/u/0/project/dagens-dubbel/firestore
- Exportera till CSV regelbundet som backup

### "Systemets satsning genereras inte"
- Klicka på knappen "🎲 Generera systemets satsning"
- Kontrollera JavaScript-konsolen för fel

### "Insatsen räknas fel"
- Kontrollera att du separerat hästar med komma: `2,5,6` (inte `2 5 6`)
- Insatsen beräknas: antal_hästar_lopp1 × antal_hästar_lopp2 × 5 kr
- Exempel: 3 × 3 × 5 = 45 kr ✅

### "Kan inte skriva i insatsfält"
- Detta är korrekt! Insatsfält är `readonly` (beräknas automatiskt)
- Ändra hästar i lopp 1/2 så uppdateras insatsen automatiskt

## 📞 Support och utveckling

### Dokumentation

| Fil | Beskrivning |
|-----|-------------|
| **[index.html](index.html)** | Huvudsystemet |
| **[systemets_tips.html](systemets_tips.html)** | Pedagogisk förklaring av systemets strategi |
| **[PRD_ver1.md](PRD_ver1.md)** | Initial produktspecifikation |
| **[PRD_ver2.md](PRD_ver2.md)** | Uppdaterad PRD med lärdomar från vecka 6 |
| **[FireBase.html](FireBase.html)** | Komplett Firebase-guide och setup-instruktioner |
| **[.claude/agents/FrontEnd.md](.claude/agents/FrontEnd.md)** | Frontend-agent (permanent Claude Code-agent) |
| **[.claude/agents/BackEnd.md](.claude/agents/BackEnd.md)** | Backend-agent (permanent Claude Code-agent) |

### Kommande förbättringar (v3.0)

**Vecka 7 (nästa lördag):**
- [ ] Expected Value (EV)-analys per häst
- [ ] Solvalla-specifik kusk/tränare-statistik
- [ ] Förbättrad DD-strategi (favorit + medelvärden)
- [ ] systemets_tips_v7.html med nya analysmetoder

**Månad 2-3:**
- [ ] Web scraper för automatisk datahämtning från ATG.se
- [ ] Statistisk modellering (när 20+ veckor data finns)
- [ ] Grafer och visualiseringar (Chart.js)

**Månad 4+:**
- [ ] Machine Learning-prediktioner
- [ ] Ensemble-system (flera modeller)
- [ ] Multi-språkstöd

## 📜 Licens
Detta system är skapat för personligt bruk. Använd fritt men med eget ansvar.

**⚠️ Ansvarsbegränsning:** Detta system är ett beslutsstöd och ingen garanti för vinst. Spel innebär alltid risk för förlust.

---

**Version**: 2.0  
**Skapad**: 7 februari 2026  
**Uppdaterad**: 7 februari 2026 (Firebase, automatisk beräkning, färgkodning)  
**Författare**: Kent Lundgren  
**AI-assistent**: Claude Sonnet 4.5 (permanent Backend/Frontend-agenter)  
**GitHub**: https://github.com/kentlundgren/AI/tree/main/DagensDubbel
