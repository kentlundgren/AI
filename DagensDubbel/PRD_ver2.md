# PRODUCT REQUIREMENTS DOCUMENT (PRD) – VERSION 2
## Självförbättrande Analyssystem för Dagens Dubbel – Uppdatering efter Vecka 6

**Version:** 2.0  
**Datum:** 7 februari 2026 (uppdaterat efter vecka 6)  
**Författare:** Kent Lundgren + Systemet (Claude)  
**Status:** Första iterationen efter faktiska resultat  
**Föregående version:** [PRD_ver1.md](PRD_ver1.md)

---

## SAMMANFATTNING AV VERSION 2

Detta dokument utgör den första iterationen av PRD efter att systemet testats i verklig miljö (vecka 6). Dokumentet fokuserar på:

1. **Resultatanalys** från vecka 6
2. **Identifierade brister** i nuvarande approach
3. **Konkreta förbättringsförslag** för systemet
4. **Rekommendationer för vecka 7** och framåt
5. **Justerad strategi** baserad på lärdomar

---

## 1. VECKA 6 - RESULTAT OCH ANALYS

### 1.1 Faktiska resultat

**Datum:** 7 februari 2026  
**Bana:** Solvalla  
**Lopp:** V85-7 och V85-8 (Dagens Dubbel)

#### Lopp 1 (V85-7) - 2140m Autostart
- **Vinnare:** Häst #4 (Mago Launcher, Olle Alsén)
- **V-odds:** 11,54x
- **Placering 2:** Häst #6 (Global Gaiety, Peter Untersteiner), odds 6,17x

#### Lopp 2 (V85-8) - 2140m Autostart
- **Vinnare:** Häst #6 (Global Gaiety, Peter Untersteiner)
- **V-odds:** 6,17x

**DD-odds (4-6):** 70,08x  
**DD-omslutning (totalt insat):** 8 020 115 kr

### 1.2 Spelares resultat

| Spelare | Lopp 1 | Lopp 2 | Träff L1 | Träff L2 | DD-träff |
|---------|--------|--------|----------|----------|----------|
| **Kent** | 2,5,6 | 6,11,15 | ❌ | ✅ | ❌ |
| **Lotta** | 5,6,8 | 10,13,15 | ❌ | ❌ | ❌ |
| **Bengt** | 2,4,5,6,8 | 10 | ✅ | ❌ | ❌ |
| **Benita** | 4,5,6 | 10,11 | ✅ | ❌ | ❌ |
| **Systemet** | 5,8,11 | 1,4,15 | ❌ | ❌ | ❌ |

**Resultat:** Ingen spelare fick DD-träff (krävs båda loppen rätt).

### 1.3 Näranalys

#### Kent:
- ✅ **Träffade lopp 2** (häst 6)
- ❌ **Missade lopp 1** (hade inte 4, men hade 6 som kom 2:a)
- **Insikt:** Nära på att träffa – hade vinnande hästen i lopp 2 och andraplatsen i lopp 1

#### Bengt & Benita:
- ✅ **Träffade lopp 1** (häst 4)
- ❌ **Missade lopp 2** (satsade 10 eller 10,11 – vinnare var 6)
- **Insikt:** Bengt hade 5 hästar i lopp 1 → högre träffchans, men fel fokus i lopp 2

#### Systemet:
- ❌ **Missade båda loppen**
- **Lopp 1:** Satsade 5,8,11 – vinnare var 4
- **Lopp 2:** Satsade 1,4,15 – vinnare var 6
- **Insikt:** Systemets favoriter (5 och 15) var inte rätt. Underskattade medelhästarna.

---

## 2. ANALYS AV VAD SOM GICK FEL

### 2.1 Systemets misstag

#### 🔴 Problem 1: Överfokus på starka favoriter
**Vad hände:**
- Systemet valde häst 5 (Gilding Eagle, 3,72x) och häst 15 (Rya Håleryd, 2,98x) som toppval
- Faktiska vinnare: häst 4 (11,54x) och häst 6 (6,17x) – båda **medelvärden**

**Varför det gick fel:**
- Systemet viktade odds för högt som "säkerhetsindikator"
- Antog att låga odds = högre vinstsannolikhet
- Missade att DD ofta ger hög utdelning just när medelvärden vinner

**Lärdom:**
> **DD-specifik insikt:** Dagens Dubbel-oddset 70,08x visar att marknaden INTE förväntade sig denna kombination. Systemet bör balansera mellan favoriter och medelvärden bättre.

#### 🔴 Problem 2: Otillräcklig analys av kuskar
**Vad hände:**
- Peter Untersteiner körde BÅDE vinnarna (häst 6 i båda fallen... vänta, nej - häst 4 kördes av Olle Alsén)
- Systemet inkluderade inte häst 4 alls

**Faktacheck:**
- Häst 4 (Mago Launcher): Kusk Olle Alsén, odds 11,54x
- Häst 6 (Global Gaiety): Kusk Peter Untersteiner, odds 6,17x

**Lärdom:**
> Kusk-statistik bör inte enbart fokusera på "topkuskar" utan även identifiera kuskar med stark form specifikt på Solvalla och i dessa loppklasser.

#### 🔴 Problem 3: Ignorerade "värdefyllda medelhästar"
**Vad hände:**
- Systemet klassificerade häst 8 (12,15x) och häst 1 (25,33x), häst 4 (20,30x) som långskott eller medelvärden
- Men häst 4 och häst 6 (11,54x och 6,17x) var faktiskt **realistiska medelvärden** med bättre chans än oddsen antydde

**Lärdom:**
> **Value betting-princip:** Systemet bör aktivt leta efter "undervärderade hästar" där faktisk vinstsannolikhet är högre än oddsen antyder. Detta kräver djupare analys av form, spår, och loppkontext.

### 2.2 Mänskliga spelarnas insikter

**Kent och Bengt/Benita hade delvis rätt:**
- Kent: Hade häst 6 i lopp 2 (vinnare) ✅
- Bengt/Benita: Hade häst 4 i lopp 1 (vinnare) ✅

**Vad gjorde de rätt?**
- Inkluderade "medelvärden" i sina system
- Spred riskern bredare (Bengt: 5 hästar i lopp 1)
- Lyssnade möjligen på "magkänsla" eller lokalkännedom

**Vad kan systemet lära sig?**
> **Hybrid-approach:** Kombinera algoritmisk analys med "mänsklig intuition" genom att analysera varför människor väljer vissa hästar. Finns det faktorer systemet missar?

---

## 3. KONKRETA FÖRBÄTTRINGSFÖRSLAG

### 3.1 Omviktning av analysfaktorer

**Nuvarande viktning (från PRD v1):**

| Faktor | Tidigare vikt | Problem | Ny vikt (v2) |
|--------|---------------|---------|--------------|
| Formkurva (senaste 5) | 25% | OK, behåll | **25%** |
| Startnummer/spår | 15% | Underskattad för 2140m | **18%** ↑ |
| Kusk-statistik | 15% | För generell | **17%** ↑ |
| Distans-lämplighet | 15% | OK, behåll | **15%** |
| Tränare-statistik | 10% | Underskattad | **12%** ↑ |
| Tävlingspaus | 8% | Överskattad | **5%** ↓ |
| Loppets klass | 7% | OK, behåll | **7%** |
| Head-to-head | 5% | Överskattad (för lite data) | **1%** ↓ |

**NYA FAKTORER att lägga till:**

| Faktor | Vikt (v2) | Rationale |
|--------|-----------|-----------|
| **Value-indikator** | **8%** | Identifiera hästar där odds > faktisk vinstsannolikhet |
| **Solvalla-specialisering** | **5%** | Kusk/tränare-statistik specifikt på Solvalla |
| **Senaste lopp-marginal** | **3%** | Hur stor var marginalen i senaste loppet? |

**Total:** 116% → Normaliseras till 100%

### 3.2 DD-specifik strategi

**🎯 Ny regel: "Favorit + Medelvärde"-kombinationer**

I Dagens Dubbel är det ofta **inte** två favoriter som vinner, utan en favorit + ett medelvärde. Detta ger högre utdelning (vilket är meningen med DD).

**Implementering:**
1. **Lopp 1:** Välj 2 favoriter (odds 2-5x) + 2 medelvärden (odds 8-15x)
2. **Lopp 2:** Välj 2 favoriter (odds 2-5x) + 2 medelvärden (odds 8-15x)
3. **Resultat:** 4 × 4 = 16 rader (80 kr vid 5 kr/rad)

**Varför detta fungerar:**
- Täcker både "säkra" och "value" scenarion
- DD-oddset blir intressant (30-100x) vid favorit+medelvärde
- Budgeten (30-50 kr) justeras till 80 kr → eller minska till 3 × 3 med smartare urval

**🎯 Alternativ: "3+3 Smart Selection"**
För att hålla budget (45 kr = 9 rader):
- **Lopp 1:** 1 stark favorit + 2 medelvärden
- **Lopp 2:** 1 stark favorit + 2 medelvärden
- **Total:** 3 × 3 = 9 rader

### 3.3 Förbättrad kusk/tränare-analys

**Problem i vecka 6:**
- Systemet fokuserade på "generell vinstprocent"
- Missade kuskar med stark form **just nu** på **just Solvalla**

**Lösning:**
1. **Senaste 10 loppen på Solvalla** (inte alla banor)
2. **Senaste 30 dagar** (inte karriär-statistik)
3. **Specifik loppklass** (STL-final vs vanligt lopp)

**Exempel:**
```
Kusk: Olle Alsén
- Senaste 10 lopp Solvalla: 3 vinster, 2 andraplatser (50% top-2)
- Senaste 30 dagar: Stigande form
- I STL-finaler: 2/5 vinster (40%)
→ HÖGRE VIKTNING trots att karriär-vinstprocenten är lägre än Magnus A Djuse
```

### 3.4 Value-betting princip

**Nytt koncept: "Expected Value (EV)"-score**

För varje häst, beräkna:
```
EV = (Systemets vinstsannolikhet) × (Odds) - 1
```

**Om EV > 0** → Hästen är **undervärderad** (value bet)  
**Om EV < 0** → Hästen är **övervärderad**

**Exempel från vecka 6:**

| Häst | System-prob. | Odds | EV | Value? |
|------|--------------|------|-----|--------|
| 4 (vinnare) | 15% | 11,54x | (0.15 × 11.54) - 1 = **+0.73** | ✅ STARK VALUE |
| 5 (systemets val) | 30% | 3,72x | (0.30 × 3.72) - 1 = **+0.12** | ⚠️ Lite value |
| 15 (systemets val) | 35% | 2,98x | (0.35 × 2.98) - 1 = **+0.04** | ⚠️ Mycket lite value |

**Insikt:**
> Häst 4 hade **högst EV** (+0.73) trots att systemet bara gav den 15% vinstsannolikhet. Detta visar att systemet **underskattade** häst 4.

**Implementering för vecka 7:**
1. Beräkna EV för alla hästar
2. Prioritera hästar med EV > 0.2
3. Kombinera "säkerhet" (hög prob.) med "value" (hög EV)

---

## 4. REKOMMENDATIONER FÖR VECKA 7

### 4.1 Förbättrad datainsamling

**Innan nästa lördag, samla följande data:**

#### 🔍 För varje häst:
1. ✅ **Senaste 5 loppen** (som tidigare)
2. ✅ **Senaste 10 loppen på Solvalla specifikt**
3. ✅ **Marginal i senaste loppet** (vann med 2 längder? Förlorade med 0.5 längder?)
4. ✅ **Spårstatistik för 2140m specifikt** (inte alla distanser)
5. ✅ **Kusk/tränare senaste 30 dagar på Solvalla**

#### 🔍 För loppet:
1. ✅ **Loppklass och kontext** (final? Försök? Kvallopp?)
2. ✅ **Väder och bana** (temperatur, underlag)
3. ✅ **Jämför med liknande lopp** (historiska STL-finaler)

### 4.2 Ny analysprocess

**Steg 1: Grundanalys (som tidigare)**
- Samla data
- Beräkna faktorscore per häst
- Rankning 1-12

**Steg 2: Value-analys (NYTT)**
- Hämta odds (fredagskväll / lördagmorgon)
- Beräkna EV per häst
- Identifiera top 5 "value bets"

**Steg 3: DD-optimering (NYTT)**
- Lopp 1: Välj 1 favorit (odds 2-5x) + 2 medelvärden (odds 6-15x)
- Lopp 2: Välj 1 favorit (odds 2-5x) + 2 medelvärden (odds 6-15x)
- Alternativt: 2+2 om budget tillåter (4×4=16 rader = 80 kr)

**Steg 4: Kontrollera mot mänskliga spelare**
- Jämför systemets val med Kent/Lotta/Bengt/Benita
- Om systemet är ensamt om ett val → **Dubbelkolla varför**
- Om alla människor väljer en häst systemet ignorerat → **Analysera varför**

### 4.3 Konkret exempel för vecka 7

**Antag att vi har följande situation i vecka 7:**

**Lopp 1 - Topphästar efter analys:**
1. Häst 3 (odds 4.2x) - Stark favorit, score 8.5/10, EV = +0.05
2. Häst 7 (odds 9.8x) - Medelvärde, score 7.2/10, EV = +0.35 ⭐
3. Häst 11 (odds 12.5x) - Medelvärde, score 6.8/10, EV = +0.28 ⭐
4. Häst 5 (odds 6.5x) - Medelvärde, score 7.0/10, EV = +0.12

**Systemets val:** 3, 7, 11 (3 hästar = 1 favorit + 2 medelvärden med högst EV)

**Lopp 2 - Topphästar efter analys:**
1. Häst 2 (odds 3.1x) - Stark favorit, score 8.8/10, EV = +0.03
2. Häst 8 (odds 11.2x) - Medelvärde, score 7.5/10, EV = +0.42 ⭐
3. Häst 4 (odds 8.7x) - Medelvärde, score 7.1/10, EV = +0.22 ⭐

**Systemets val:** 2, 8, 4 (3 hästar = 1 favorit + 2 medelvärden med högst EV)

**Resultat:**
- **3 × 3 = 9 rader**
- **9 × 5 kr = 45 kr** (inom budget!)
- **Förväntad DD-odds:** 30-100x (favorit+medelvärde kombinationer)

### 4.4 Dokumentation i systemets_tips_v7.html

**För vecka 7, skapa ny fil:**  
`systemets_tips_v7.html`

**Innehåll:**
1. **Lärdomar från vecka 6** (kort sammanfattning)
2. **Nya analysfaktorer** (EV, Solvalla-specialisering)
3. **Topphästar lopp 1** med EV-score
4. **Topphästar lopp 2** med EV-score
5. **Rekommenderade DD-kombinationer** (3×3 eller 4×4)
6. **Varför dessa hästar valdes** (pedagogisk förklaring)

**Mall:**
```markdown
# Systemets Tips - Vecka 7

## 📚 Lärdomar från Vecka 6
- Ingen fick DD-träff i vecka 6 (vinnare: 4-6, odds 70.08x)
- Systemet överfokuserade på favoriter (5 och 15)
- Faktiska vinnare var medelvärden (4: 11.54x, 6: 6.17x)
- **Lärdom:** Balansera favoriter med value-medelvärden

## 🔬 Nya analysfaktorer (v2)
1. **EV-score:** Expected Value = (Sannolikhet × Odds) - 1
2. **Solvalla-specialisering:** Kusk/tränare-statistik specifikt här
3. **Senaste lopp-marginal:** Hur nära var hästen förra gången?

## 🏇 Lopp 1 - Analys
[... detaljerad analys med EV-scores ...]

## 🏇 Lopp 2 - Analys
[... detaljerad analys med EV-scores ...]

## 🎯 Systemets Satsning
Lopp 1: X, Y, Z
Lopp 2: A, B, C
**Total insats:** 45 kr (9 rader)
```

---

## 5. LÅNGSIKTIGA FÖRBÄTTRINGAR

### 5.1 Datainsamling (Månad 2-3)

**Automatisera datahämtning:**
1. **Web scraper** för ATG.se (startlistor, resultat, odds)
2. **API-integration** med Svensk Travsport (häst/kusk/tränare-data)
3. **Databas** för att lagra historisk data (SQLite eller PostgreSQL)

**Manuell datainsamling (tillsvidare):**
- Använd Excel/Google Sheets
- Dokumentera varje veckas data strukturerat
- Efter 8-10 veckor: Tillräcklig data för mönsterigenkänning

### 5.2 Statistisk modellering (Månad 4-6)

**När 20+ veckor data finns:**
1. **Regressionsanalys:** Vilka faktorer korrelerar starkast med seger?
2. **Klusteranalys:** Finns "typer" av vinnarhästar? (Sprinter vs Stayer, etc.)
3. **Machine Learning:** Random Forest eller Neural Network för prediktioner

**Hypoteser att testa:**
- *Hypotes 1:* "Hästar från inre spår (1-4) vinner oftare på 2140m"
- *Hypotes 2:* "Kuskar med >20% vinstprocent senaste 30 dagarna outperformar odds"
- *Hypotes 3:* "Hästar som förlorade med <1 längd senaste loppet har högre vinstsannolikhet än odds antyder"

### 5.3 Ensemble-system (Månad 6+)

**Kombinera flera modeller:**
1. **Modell A:** Favorit-fokuserad (säkerhet)
2. **Modell B:** Value-fokuserad (EV-maximer ing)
3. **Modell C:** Hybrid (balanserad)

**Output:**
- Kör alla 3 modeller
- Jämför resultat över tid
- Behåll den som presterar bäst

---

## 6. FRAMTIDA UTVECKLING AV SYSTEMETS TIPS

### 6.1 Interaktiv systemets_tips.html

**Version 2.0 av systemets tips-sida:**

**Nya funktioner:**
1. **Jämför med vecka 6** - Visa vad systemet lärde sig
2. **EV-visualisering** - Graf som visar EV per häst
3. **Oddstrend** - Hur har oddsen förändrats? (fredag → lördag morgon → start)
4. **"Varför inte X?"** - Förklara varför populära hästar inte valdes
5. **Simuleringsverktyg** - "Vad händer om jag byter häst Y mot Z?"

**Exempel på ny sektion:**

```html
<div class="comparison-section">
    <h3>⚖️ Jämförelse: Vecka 6 vs Vecka 7</h3>
    <table>
        <tr>
            <th>Faktor</th>
            <th>Vecka 6 (Misslyckad)</th>
            <th>Vecka 7 (Förbättrad)</th>
        </tr>
        <tr>
            <td>Fokus</td>
            <td>Favoriter (5: 3.72x, 15: 2.98x)</td>
            <td>Favorit + Medelvärden (3: 4.2x, 7: 9.8x, 11: 12.5x)</td>
        </tr>
        <tr>
            <td>EV-analys</td>
            <td>❌ Inte använd</td>
            <td>✅ Prioriterad (häst 7: EV +0.35)</td>
        </tr>
        <tr>
            <td>Solvalla-data</td>
            <td>❌ Generell statistik</td>
            <td>✅ Senaste 10 lopp på Solvalla</td>
        </tr>
    </table>
</div>
```

### 6.2 Feedback-loop från användare

**Lägg till i systemets_tips.html:**

```html
<div class="feedback-section">
    <h3>💬 Vad tycker du?</h3>
    <p>Hjälp systemet att förbättras:</p>
    <form>
        <label>Vilken häst tror DU vinner lopp 1?</label>
        <input type="text" placeholder="T.ex. häst 7">
        
        <label>Varför?</label>
        <textarea placeholder="T.ex. Stark form senaste 3 loppen, bra spår"></textarea>
        
        <button type="submit">Skicka feedback</button>
    </form>
    <p><small>Denna feedback analyseras för att identifiera faktorer systemet missar.</small></p>
</div>
```

**Syfte:**
- Samla "mänsklig intuition"
- Identifiera faktorer AI:n missar (t.ex. "hästen ser pigg ut", "tränaren sa X i intervju")
- Skapa hybrid human-AI system

---

## 7. MÅNATLIG UTVÄRDERING - FEBRUARI 2026

### 7.1 Mål för februari (vecka 6-9)

| KPI | Mål | Faktiskt (hittills) | Status |
|-----|-----|---------------------|--------|
| **DD-träffar** | ≥1 av 4 veckor (25%) | 0 av 1 (0%) | ⏳ Fortsätt mäta |
| **Top-3 träffsäkerhet** | ≥50% (4 av 8 lopp) | 0 av 2 (0%) | 🔴 Under mål |
| **ROI** | ≥-20% (lära sig-fas) | -100% (1 vecka) | ⏳ För tidigt |
| **EV-identifiering** | Identifiera ≥2 value bets/vecka | N/A (inte implementerad v1) | 🟡 Nytt i v2 |

### 7.2 Milstolpar för februari

**Vecka 6 (✅ Klar):**
- [x] Första veckan med faktiska resultat
- [x] PRD v2 skapad med lärdomar
- [x] Identifierade brister i systemet

**Vecka 7 (📅 Kommande):**
- [ ] Implementera EV-analys
- [ ] Förbättrad kusk/tränare-statistik (Solvalla-specifik)
- [ ] Nya systemets_tips_v7.html med EV-scores

**Vecka 8:**
- [ ] Jämför vecka 6 vs vecka 7 prestanda
- [ ] Justera vikter baserat på 2 veckors data
- [ ] Börja dokumentera mönster

**Vecka 9:**
- [ ] Första månadsrapport
- [ ] Statistisk analys av 4 veckors data
- [ ] Planera för månad 2

### 7.3 Lärdomar att utvärdera i slutet av februari

**Frågor att besvara:**
1. Fungerar EV-analysen bättre än ren favorit-fokus?
2. Ger Solvalla-specifik data bättre prediktioner än generell statistik?
3. Hur stor skillnad gör viktjusteringarna?
4. Finns återkommande mönster i vinnare? (Spår, kusk, distans, etc.)

---

## 8. RISKER OCH UTMANINGAR

### 8.1 Identifierade risker efter vecka 6

**🔴 Risk 1: Överfitting på små datamängder**
- Med bara 1 vecka data kan vi dra felaktiga slutsatser
- **Mitigering:** Vänta minst 8-10 veckor innan stora algoritmändringar

**🔴 Risk 2: Slumpmässighet i travlopp**
- Även perfekt analys kan misslyckas (häst galoperar, startbilsfel, etc.)
- **Mitigering:** Fokusera på långsiktig ROI, inte enskilda veckor

**🔴 Risk 3: Oddsen ändras fram till start**
- Systemet analyserar fredag/lördag morgon, men odds ändras fram till start
- **Mitigering:** Samla odds vid flera tidpunkter, identifiera trender

**🟡 Risk 4: Datakvalitet**
- Manuell datainsamling kan innehålla fel
- **Mitigering:** Dubbelkolla kritiska datapunkter, automatisera när möjligt

### 8.2 Utmaningar att övervinna

**Challenge 1: Balans mellan säkerhet och value**
- För mycket säkerhet → Låg utdelning vid träff
- För mycket value → Högre risk för miss
- **Lösning:** 3+3 system med 1 favorit + 2 medelvärden

**Challenge 2: Begränsad budget**
- 30-50 kr/vecka = 6-10 rader
- Kan inte täcka alla kombinationer
- **Lösning:** Smartare urval med EV-fokus

**Challenge 3: Lära av både framgångar OCH misslyckanden**
- Lätt att övervikta enskilda resultat
- **Lösning:** Strukturerad utvärdering med statistisk signifikans

---

## 9. SAMMANFATTNING OCH NÄSTA STEG

### 9.1 Sammanfattning av PRD v2

**Vad har vi lärt oss från vecka 6?**
1. ❌ Överfokus på favoriter fungerar inte för DD (vill ha högre odds)
2. ❌ Generell statistik (karriär) är mindre viktig än recent form på specifik bana
3. ✅ Value betting (EV-analys) är kritiskt för DD
4. ✅ Mänskliga spelare hade delvis rätt – lyssna på dem

**Vad förbättras i v2?**
1. ✅ Ny viktning (mer fokus på spår, kusk, tränare)
2. ✅ EV-analys införd som ny faktor
3. ✅ DD-specifik strategi (favorit + medelvärden)
4. ✅ Solvalla-specialiserad data

**Förväntade resultat:**
- Bättre träffsäkerhet i top-3 (från 0% → 50%+)
- Första DD-träffen inom 4 veckor (vecka 6-9)
- Högre EV-identifiering (hitta undervärderade hästar)

### 9.2 Konkreta åtgärder för vecka 7

**📋 TODO före lördag vecka 7:**

1. **Datainsamling:**
   - [ ] Hämta startlistor för V85-7 och V85-8
   - [ ] Samla senaste 10 lopp på Solvalla för alla hästar
   - [ ] Kusk/tränare-statistik senaste 30 dagar på Solvalla
   - [ ] Dokumentera marginal i senaste loppet per häst

2. **Analys:**
   - [ ] Beräkna grundscore (25% formkurva, 18% spår, 17% kusk, etc.)
   - [ ] Hämta odds (fredag kväll)
   - [ ] Beräkna EV per häst
   - [ ] Identifiera top 3 per lopp (1 favorit + 2 medelvärden med högst EV)

3. **Dokumentation:**
   - [ ] Skapa systemets_tips_v7.html
   - [ ] Förklara varför varje häst valdes
   - [ ] Inkludera EV-scores i presentationen
   - [ ] Jämför med vecka 6 (vad har förbättrats?)

4. **Satsning:**
   - [ ] Registrera systemets val i index.html
   - [ ] Jämför med Kent/Lotta/Bengt/Benita
   - [ ] Om stor skillnad → diskutera varför

5. **Efter loppen (lördag kväll):**
   - [ ] Dokumentera resultat
   - [ ] Utvärdera: Fungerade EV-analysen?
   - [ ] Justera vikter inför vecka 8
   - [ ] Uppdatera PRD om stora insikter

### 9.3 Mål för månad 2 (Vecka 10-13, Mars 2026)

**Månad 1 (februari):** Lära och experimentera  
**Månad 2 (mars):** Förbättra och stabilisera

**Mål för mars:**
- ✅ Minst 1 DD-träff (av 4 veckor)
- ✅ Top-3 träffsäkerhet ≥60% (minst 5 av 8 lopp)
- ✅ ROI ≥ -10% (förbättring från februari)
- ✅ Identifiera 3-5 återkommande vinnarmönster
- ✅ Automatisera datainsamling (web scraper eller API)

---

## 10. BILAGOR

### Bilaga A: Vecka 6 - Fullständig dataanalys
*(Inkludera detaljerad data för alla hästar i lopp 1 och 2, odds, resultat, etc.)*

### Bilaga B: EV-beräkningsexempel
*(Steg-för-steg guide för hur EV beräknas för varje häst)*

### Bilaga C: Kod för viktjustering
*(Python-snippet för automatisk viktjustering baserat på resultat)*

### Bilaga D: Mall för systemets_tips_v7.html
*(Komplett HTML-mall med alla nya sektioner)*

---

## 11. GODKÄNNANDE OCH ÄNDRINGSHISTORIK

**Version 2.0** – 7 februari 2026 (efter vecka 6)  
Uppdaterad av Kent Lundgren + Systemet (Claude)

**Ändringar från v1.0:**
- [2026-02-07]: Lagt till resultatanalys från vecka 6
- [2026-02-07]: Identifierat brister i favorit-fokus
- [2026-02-07]: Införd EV-analys som ny faktor
- [2026-02-07]: Omviktning av analysfaktorer baserat på lärdomar
- [2026-02-07]: DD-specifik strategi (favorit + medelvärden)
- [2026-02-07]: Konkreta rekommendationer för vecka 7

**Nästa revidering:** Efter vecka 9 (slutet av februari 2026)

---

**Dokumentslut**

*Detta PRD är ett levande dokument som uppdateras kontinuerligt baserat på veckovisa resultat och lärdomar. Version 3.0 kommer att skapas efter första månaden (4 veckor) för en djupare statistisk analys.*

---

## 📚 REFERENSER OCH LÄNKAR

- **PRD v1.0:** [PRD_ver1.md](PRD_ver1.md)
- **Systemets Tips (vecka 6):** [systemets_tips.html](systemets_tips.html)
- **Huvudsystemet:** [index.html](index.html)
- **ATG Resultat vecka 6:** https://www.atg.se/spel/2026-02-07/dd/solvalla/avd/1/resultat
