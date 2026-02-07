# Dagens Dubbel Analyssystem - Användarguide

## 📋 Översikt
Ett webbbaserat system för att analysera och följa upp satsningar på Dagens Dubbel (Solvalla lördagstrav). Systemet spårar fem spelare (Kent, Lotta, Bengt, Benita + ett automatiskt system) och beräknar statistik, ROI och träffsäkerhet över tid.

## 🌐 Live Demo
**🎯 [Öppna programmet här →](https://kentlundgren.github.io/AI/DagensDubbel/)**

Klicka på länken ovan för att använda den live-versionen direkt i webbläsaren. All data sparas lokalt i din webbläsare via localStorage.

## 🚀 Snabbstart

### Steg 1: Öppna filen
- Dubbelklicka på `dagens-dubbel-system.html` för att öppna den direkt i webbläsaren
- **ELLER** hösta den på GitHub Pages (se instruktioner nedan)

### Steg 2: Generera systemets satsning
1. Gå till fliken "📝 Inmatning"
2. Klicka på knappen "🎲 Generera systemets satsning" (längst ner till höger bland spelarkorten)
3. Systemet väljer slumpmässigt 2-4 hästar per lopp och en insats mellan 35-50 kr

### Steg 3: Mata in spelares satsningar
- Fyll i hästnummer för varje spelare i respektive fält (separera med komma, t.ex. "2,5,6")
- Ange insats i kronor

### Steg 4: Efter loppen - registrera resultat
1. Fyll i vinnande hästnummer för båda loppen
2. Ange DD-utdelningen i kronor
3. Lägg till eventuella anteckningar
4. Klicka "💾 Spara veckodata"

### Steg 5: Se resultat och analys
- **🏆 Resultat**: Se senaste veckans utfall och vem som vann
- **📊 Analys**: Kumulativ statistik och ROI-jämförelse
- **📚 Historik**: Fullständig tabell över alla veckor
- **📄 PRD-Update**: Generera uppdaterad PRD baserat på insamlad data

## 💾 Datalagring
- All data sparas i **webbläsarens localStorage**
- Data försvinner INTE när du stänger sidan
- Data är kopplad till den specifika webbläsaren och domänen
- För att säkerhetskopiera: använd "📥 Exportera till CSV" i Historik-fliken

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
- **Vanilla JavaScript**: All funktionalitet (inga externa bibliotek)
- **CSS3**: Modern, responsiv design med gradients och animationer
- **localStorage API**: Persistent datalagring

### Responsiv design
- Fungerar på desktop, tablet och mobil
- Grid-layout anpassar sig automatiskt
- Optimerad för touch-enheter

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

## 🐛 Felsökning

### "Ingen data visas"
- Kontrollera att du klickat "💾 Spara veckodata"
- Öppna webbläsarens console (F12) och kolla efter felmeddelanden

### "Data försvann"
- Kollade du localStorage i webbläsarinställningarna?
- Använder du samma webbläsare och domän?
- Exportera till CSV regelbundet som backup

### "Systemets satsning genereras inte"
- Klicka på knappen "🎲 Generera systemets satsning"
- Kontrollera JavaScript-konsolen för fel

## 📞 Support och utveckling

Detta är version 1.0 av systemet. Förslag på förbättringar:
- [ ] Mer avancerad systemlogik (baserat på odds, statistik)
- [ ] Integration med ATG API för automatisk datahämtning
- [ ] Grafer och visualiseringar (Chart.js)
- [ ] Export till PDF-rapporter
- [ ] Multi-språkstöd

## 📜 Licens
Detta system är skapat för personligt bruk. Använd fritt men med eget ansvar.

---

**Version**: 1.0  
**Skapad**: 7 februari 2026  
**Författare**: Kent Lundgren / Claude  
**Kontakt**: [Din e-post eller GitHub]
