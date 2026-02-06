# Matematik-projektet - Projektspecifik Koordinator

> **Läs också:** [Överliggande CLAUDE.md](../CLAUDE.md) för generella best practices och repositorystruktur

## 📚 Projektöversikt

Detta är ett **dubbelt lärandeprojekt** som kombinerar:
1. **Matematikundervisning** - Interaktiva övningar för svensk gymnasiematematik (Matte 1-5)
2. **Claude Code lärande** - Att förstå och arbeta med Claude Code desktop, Git, GitHub och permanenta agenter

**Målgrupp:**
- **Primär:** Gymnasieelever som övar matematik
- **Sekundär:** Utvecklare som lär sig Claude Code desktop och GitHub Pages

**GitHub Repository:** https://github.com/kentlundgren/AI/tree/main/Matematik

---

## 🎯 Projektmål

### Matematikpedagogik
- Skapa interaktiva HTML-baserade övningar för Matte 1-5
- Varje övning innehåller:
  1. **Quiz-sektion** (1-2 frågor med 4 alternativ vardera)
  2. **Förklaringar** av rätt och fel svar
  3. **Steg-för-steg lösningar** av huvudproblem
- Publicera på GitHub Pages för fri tillgång

### Tekniskt Lärande
- Förstå Claude Code desktop workflow
- Lära sig Git branch-hantering
- Arbeta med permanenta agenter
- Publicera med GitHub Pages

---

## 🤖 Permanenta Agenter

Detta projekt använder tre specialiserade agenter i `.claude/agents/`:

### 1. math-tutor.md 🎓
**Roll:** Pedagogisk förklaring av matematiska koncept

**Fokus:**
- Förklarar VARFÖR koncept fungerar
- Skapar pedagogiska exempel och analogier
- Designar quiz-frågor med förklaringar
- Anpassar svårighetsgrad

**Använd när:** Du behöver förklara ett matematiskt koncept eller skapa quiz-frågor

**Kommando:** "Använd math-tutor för att förklara [koncept]"

---

### 2. problem-solver.md 🔧
**Roll:** Systematiska steg-för-steg lösningar

**Fokus:**
- Löser problem metodiskt
- Tydlig struktur: Förstå → Planera → Genomföra → Kontrollera → Slutsats
- Visar alla mellansteg
- Verifierar resultat

**Använd när:** Du behöver lösa ett specifikt matematikproblem med full genomgång

**Kommando:** "Använd problem-solver för att lösa [problem]"

---

### 3. exercise-creator.md 📝
**Roll:** Skapar kompletta övningar med quiz och lösningar

**Fokus:**
- Designar pedagogiska övningar
- Skapar quiz-frågor med 4 alternativ
- Strukturerar HTML-övningar
- Anpassar svårighetsgrad

**Använd när:** Du ska skapa en ny övningsfil (matte1.html, matte2.html, etc.)

**Kommando:** "Använd exercise-creator för att skapa en övning om [ämne]"

---

## 📁 Projektstruktur

```
Matematik/
├── .claude/
│   └── agents/
│       ├── math-tutor.md           # Pedagogisk förklaring
│       ├── problem-solver.md       # Steg-för-steg lösningar
│       └── exercise-creator.md     # Skapar övningar
├── CLAUDE.md                       # Denna fil (projektkoordinator)
├── README.md                       # Teknisk dokumentation
├── index.html                      # Huvudsida med pedagogisk genomgång
├── matematikunderkatalog.html      # Guide för att skapa projektstrukturen
├── matte1.html                     # Övningar för Matematik 1
├── matte2.html                     # Övningar för Matematik 2
├── matte3.html                     # Övningar för Matematik 3
├── matte4.html                     # Övningar för Matematik 4
├── matte5.html                     # Övningar för Matematik 5
└── styles.css                      # (Valfri) Gemensam CSS
```

---

## 🎨 HTML-Filernas Format

Varje `matteX.html` fil ska följa denna struktur:

### 1. Header
- Titel och kursnivå
- Kort introduktion

### 2. Quiz-sektion ⚠️ MÅSTE VARA INTERAKTIV!
**Quiz-fråga 1:** Förkunskapskontroll
- 4 svarsalternativ (A, B, C, D)
- Förklaring av rätt svar (✅)
- Förklaring av varje fel svar (❌)
- **JavaScript-interaktivitet:** När användaren klickar på ett svar ska feedback visas DIREKT
- **Visuell feedback:** Rätt svar → grön bakgrund, Fel svar → orange bakgrund

**Quiz-fråga 2:** Strategiplanering
- 4 svarsalternativ
- Förklaringar av rätt/fel
- **Samma interaktivitet som Quiz-fråga 1**

**Tekniska krav för quiz:**
- Varje svaralternativ ska vara en `<button>` med `onclick="checkAnswer(questionNum, 'A/B/C/D')"`
- Feedback-element: `<div id="feedback${questionNum}" class="feedback hidden"></div>`
- JavaScript `checkAnswer()`-funktion måste finnas och fungera
- CSS-klasser: `.feedback.correct` (grön) och `.feedback.incorrect` (orange)
- Knappar ska inaktiveras efter svar för att förhindra flera klick
- **⚠️ VIKTIGT:** TESTA quiz-funktionen innan publicering! (Se Kvalitetskontroll-sektion)

### 3. Huvudproblem
- Tydlig problemformulering
- Relevant kontext (om tillämpligt)

### 4. Steg-för-Steg Lösning
- Förstå problemet
- Planera lösningen
- Genomföra (alla steg synliga)
- Kontrollera resultatet
- Slutsats

### 5. Footer
- Projektnavigation (länkar till andra filer)
- GitHub-länk
- Attribution

---

## 🔗 Korsnavigering

Alla HTML-filer ska ha:

**I header:**
```html
<a href="index.html">← Tillbaka till startsidan</a>
<a href="https://github.com/kentlundgren/AI/tree/main/Matematik">GitHub Repository</a>
```

**I footer:**
```html
<h3>🔗 Andra Kurser</h3>
<a href="matte1.html">Matte 1</a>
<a href="matte2.html">Matte 2</a>
...
```

---

## 🌐 GitHub Pages Publicering

**URL:** https://kentlundgren.github.io/AI/Matematik/

**Setup:**
1. Commita alla filer till main branch
2. GitHub Settings → Pages → Source: main branch, root folder
3. index.html blir automatiskt landningssida

**Testa lokalt:**
```bash
# Från /AI/Matematik/
python3 -m http.server 8000
# Besök http://localhost:8000
```

---

## 🔧 Vanliga Kommandon

### Skapa Ny Övningsfil

```
"Använd exercise-creator för att skapa en övning om linjära ekvationer för Matte 1"
```

### Förklara Koncept

```
"Använd math-tutor för att förklara vad en derivata är"
```

### Lösa Specifikt Problem

```
"Använd problem-solver för att lösa ekvationen x² - 5x + 6 = 0"
```

### Kombinera Agenter

```
"exercise-creator: Skapa övning om trigonometri
problem-solver: Lös huvudproblemet steg-för-steg
math-tutor: Förklara varför sin²(x) + cos²(x) = 1"
```

---

## 🔢 Skapa Nya Mattetal

Detta projekt använder en standardiserad struktur för alla mattetal. Följ dessa steg för att skapa ett nytt mattetal som följer samma kvalitetsnivå som befintliga filer.

### Struktur för Ett Mattetal

Varje mattetal (matte1.html, matte2.html, etc.) består av:

1. **HTML Header med MathJax**
   - Meta tags för charset och viewport
   - MathJax-konfiguration för matematiska formler
   - CSS med lila gradient-tema (konsistent design)

2. **Lärandemål och Förkunskaper**
   - Tydliga lärandemål (bullet points)
   - Lista över nödvändiga förkunskaper

3. **2 Quiz-frågor** (relaterade till huvuduppgiften)
   - 4 svarsalternativ per fråga (A, B, C, D)
   - Interaktiv feedback med `checkAnswer()` JavaScript-funktion
   - Pedagogiska förklaringar för både rätt och fel svar
   - MathJax-formler i feedback

4. **Huvuduppgift** med verklig kontext
   - Tydlig problemformulering
   - Praktisk tillämpning eller scenario
   - Relevant för kursnivån

5. **Fyra Lösningsmetoder** (före steg-för-steg lösning)
   - Metod A: Den bästa metoden (markerad med ⭐)
   - Metod B: Näst bästa metoden (markerad med ⭐)
   - Metod C och D: Alternativa metoder
   - Fördelar och nackdelar för varje metod
   - Gridlayout med färgkodning (grön=bäst, blå=näst bäst, grå=övriga)

6. **Tips-sektion** (interaktiv med toggle-knapp)
   - 3-4 tips på olika nivåer (allmänt → specifikt → verifiering)
   - Gul/orange färgschema
   - `toggleTips()` JavaScript-funktion

7. **Vanliga Fel-sektion**
   - 3 vanliga misstag med pedagogiska förklaringar
   - Vad som händer när man gör felet
   - Hur man undviker det
   - Röd/orange färgschema

8. **Grafisk Presentation** (interaktiv canvas eller SVG)
   - Canvas-baserad graf med JavaScript
   - `toggleGraph()` och `drawGraph()` funktioner
   - Tydliga axlar, skalning och markeringar
   - Markera kritiska punkter (max/min, nollställen, etc.)

9. **Steg-för-Steg Lösning** (5-stegs struktur)
   - **Steg 1: Förstå** - Givet, sökt, begränsningar
   - **Steg 2: Planera** - Strategival
   - **Steg 3: Genomföra (Metod A)** - FULL genomgång av bästa metoden
   - **Steg 4: Genomföra (Metod B)** - FULL genomgång av näst bästa metoden
   - **Steg 5: Kontrollera och Slutsats** - Verifiering och slutsvar
   - `toggleSolution()` JavaScript-funktion

10. **Fördjupning** (frivillig)
    - Extra utmaningar eller frågor
    - Kopplingar till andra ämnen

11. **Footer med Navigation**
    - Länkar till andra kurser (matte1-5)
    - Markera "Du är här" för aktuell kurs
    - Länkar till README, GitHub, agenter

### Prompt-mall för Att Skapa Nytt Mattetal

När du vill skapa ett nytt mattetal, använd följande prompt-struktur:

```
Skapa en komplett HTML-fil för [KURS] med följande specifikationer:

**Ämne:** [t.ex. Trigonometriska ekvationer, Vektorgeometri, Gränsvärden]

**Problem:** [Kort beskrivning av huvudproblemet]

**Kontext:** [Verklig tillämpning eller scenario som gör problemet relevant]

**Använd följande struktur:**

1. HTML Header med MathJax (samma setup som matte2.html)

2. Lärandemål och förkunskaper

3. 2 Quiz-frågor (relaterade till problemet):
   - Fråga 1: [Beskriv fråga om förkunskaper]
     - A) [Alternativ]
     - B) [Alternativ] ✅
     - C) [Alternativ]
     - D) [Alternativ]

   - Fråga 2: [Beskriv fråga om metodik]
     - A) [Alternativ]
     - B) [Alternativ] ✅
     - C) [Alternativ]
     - D) [Alternativ]

4. Huvuduppgift med tydlig problemformulering

5. Fyra Lösningsmetoder (med färgkodning):
   - ⭐ Metod A: [beskrivning] - BÄST
   - ⭐ Metod B: [beskrivning] - NÄST BÄST
   - Metod C: [beskrivning]
   - Metod D: [beskrivning]

6. Tips-sektion (interaktiv toggle):
   - Tip 1: [Allmänt tips]
   - Tip 2: [Specifikt tips]
   - Tip 3: [Verifieringstips]

7. Vanliga Fel-sektion:
   - Fel 1: [Beskrivning + hur man undviker]
   - Fel 2: [Beskrivning + hur man undviker]
   - Fel 3: [Beskrivning + hur man undviker]

8. Grafisk Presentation (canvas med JavaScript):
   - Beskriv vad som ska visualiseras
   - Vilka punkter ska markeras
   - Axlar och skalning

9. Steg-för-Steg Lösning (5 steg):
   - Förstå → Planera → Genomföra (A) → Genomföra (B) → Kontrollera
   - FULL genomgång av båda bästa metoderna

10. Footer med projektnavigation (kopiera från matte2.html, uppdatera "Du är här")

Följ HTML-struktur, CSS-klasser och JavaScript-funktioner från matte2.html.
Använd samma lila gradient-tema och responsiv design.
```

### Tekniska Krav

**CSS-klasser som MÅSTE finnas:**
- `.content-card` - Huvudkort för varje sektion
- `.quiz-question` - Quiz-container
- `.option-btn` - Quiz-svarsknapp
- `.feedback`, `.feedback.correct`, `.feedback.incorrect` - Feedback
- `.methods-grid` - Grid för lösningsmetoder
- `.method-card`, `.method-card.best`, `.method-card.second-best` - Metodkort
- `.tips-box` - Tips-container
- `.error-box` - Fel-container
- `.toggle-btn` - Toggle-knapp
- `.hidden-content` - Dold innehåll
- `.step` - Steg i lösningen
- `.footer-grid` - Footer-layout

**JavaScript-funktioner som MÅSTE finnas:**
- `checkAnswer(questionNum, answer)` - Hanterar quiz-svar
- `toggleTips()` - Visar/döljer tips
- `toggleGraph()` - Visar/döljer graf
- `drawGraph()` - Ritar canvas-graf (anpassad per mattetal)
- `toggleSolution()` - Visar/döljer lösning

**MathJax-konfiguration:**
```javascript
MathJax = {
    tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['$$', '$$']],
        processEscapes: true
    }
};
```

### Checklista innan Publicering

Innan en ny mattetal-fil publiceras, gå igenom denna checklista:

#### Innehåll
- [ ] Quiz-frågorna testar relevanta förkunskaper och metodik
- [ ] Alla 4 quiz-alternativ har pedagogiska förklaringar
- [ ] Huvudproblemet är lagom svårt för målgruppen
- [ ] Fyra lösningsmetoder är tydligt beskrivna
- [ ] Tips ger progressiv vägledning (inte hela lösningen)
- [ ] Vanliga fel är verkligt relevanta för ämnet
- [ ] Steg-för-steg lösningen är fullständig (båda bästa metoderna)

#### Interaktivitet ⚠️ KRITISKT
- [ ] **Quiz-interaktivitet fungerar:**
  - [ ] Klicka på RÄTT svar → Grön feedback visas med ✅
  - [ ] Klicka på FEL svar → Orange feedback visas med ❌ och förklaring
  - [ ] Knappar inaktiveras efter klick (ingen dubbel-klick möjlig)
  - [ ] Feedback innehåller tydlig pedagogisk förklaring
  - [ ] MathJax renderas korrekt i feedback
- [ ] **"Visa Tips"-knapp** visar/döljer tips-sektion
- [ ] **"Visa Graf"-knapp** visar/döljer graf OCH ritar graf korrekt
- [ ] **"Visa Lösning"-knapp** visar/döljer steg-för-steg lösning
- [ ] **Canvas-graf** ritas korrekt vid första visning
- [ ] **Canvas-graf** dupliceras inte vid upprepade klick

#### Design och Layout
- [ ] Responsiv design fungerar på mobil (grid kollapsar till 1 kolumn)
- [ ] Lila gradient-tema är konsistent med andra filer
- [ ] Footer-navigation är korrekt med "Du är här"-markering
- [ ] Alla CSS-klasser är definierade och används korrekt

#### Matematisk Korrekthet
- [ ] All matematik är korrekt verifierad
- [ ] MathJax renderar alla formler korrekt
- [ ] Inga "\(" eller "$$" synliga i texten (betyder MathJax-fel)
- [ ] Enhetlighet i notation (t.ex. lg vs log, × vs · för multiplikation)

#### Testa Lokalt
```bash
# Från Matematik-katalogen
python3 -m http.server 8000
# Besök http://localhost:8000/matteX.html
```
- [ ] Öppna filen i webbläsare
- [ ] Klicka på alla quiz-svar och verifiera feedback
- [ ] Testa alla toggle-knappar
- [ ] Kontrollera graf på olika skärmstorlekar
- [ ] Testa på mobil (Chrome DevTools → Toggle device toolbar)

### Vanliga Fel att Undvika

**Quiz-implementering:**
- ❌ Glömma `onclick="checkAnswer(questionNum, 'X')"` på knappar
- ❌ Felaktigt feedback-id (ska vara `feedback1`, `feedback2`, etc.)
- ❌ Saknar JavaScript `checkAnswer()`-funktion
- ❌ Saknar CSS-klasser `.feedback.correct` och `.feedback.incorrect`
- ❌ Knappar inaktiveras inte efter klick

**Canvas-graf:**
- ❌ Glömmer att rensa canvas innan omritning (ger duplicerade grafer)
- ❌ Ingen kontroll för att graf endast ritas en gång
- ❌ Fel skalning (grafen går utanför canvas)
- ❌ Saknar tydliga markeringar för kritiska punkter

**MathJax:**
- ❌ Glömmer att trigga MathJax.typesetPromise efter dynamiskt innehåll
- ❌ Använder enkel backslash istället för dubbel (ska vara `\\(` inte `\(`)
- ❌ Blandar inline och display math felaktigt

### Exempelstruktur: matte2.html

Se `matte2.html` som referens för:
- Quiz-system med `quizData`-objekt och `checkAnswer()`-funktion
- Toggle-knappar för tips, graf och lösning
- `methods-grid` layout med färgkodning
- Tips-section och error-box styling
- Canvas graph implementation med `drawVolumeGraph()`
- 5-stegs lösningsstruktur med MathJax
- Footer med "Du är här: Matte 2"-markering

### Arbetsflöde för Att Skapa Nytt Mattetal

1. **Bestäm ämne och problem** enligt läroplan
2. **Använd prompt-mallen** ovan
3. **Generera HTML-fil** (antingen manuellt eller med agent)
4. **Testa lokalt** enligt checklista
5. **Fixa eventuella buggar** (särskilt quiz-interaktivitet)
6. **Commit till git** med beskrivande meddelande
7. **Push till GitHub** för publicering på GitHub Pages

---

## 📖 Läroplan-Koppling (Svensk Gymnasieskola)

### Matematik 1 (100p)
- Algebra och ekvationer
- Funktioner (linjära, exponentiella)
- Geometri och trigonometri (grundläggande)
- Statistik och sannolikhet

### Matematik 2 (100p)
- Förkunskapskrav: Matematik 1
- Exponential- och logaritmfunktioner
- Trigonometri (fördjupning)
- Derivata och förändringshastighet
- Integraler (introduktion)

### Matematik 3 (100p)
- Förkunskapskrav: Matematik 2
- Polynom och rationella funktioner
- Trigonometriska funktioner och ekvationer
- Komplexa tal
- Kombinatorik

### Matematik 4 (100p)
- Förkunskapskrav: Matematik 2
- Linjär algebra (vektorer, matriser)
- Geometri i tre dimensioner
- Talteori och bevis

### Matematik 5 (100p)
- Förkunskapskrav: Matematik 3 och 4
- Gränsvärden och kontinuitet
- Derivator och integraler (fördjupning)
- Differentialekvationer
- Talföljder och serier

---

## 🎓 Pedagogiska Principer (för Agenter)

### 1. Scaffolding
- Börja med det konkreta, gå mot det abstrakta
- Bygg på tidigare kunskap
- Visa mellansteg, inte bara slutresultat

### 2. Varierad Representation
- Algebraisk (ekvationer)
- Geometrisk (grafer, diagram)
- Verbal (förklaringar)
- Numerisk (tabeller)

### 3. Formativ Feedback
- Quiz-frågor testar förståelse
- Förklaringar av fel svar är lärtillfällen
- Steg-för-steg lösningar visar process

### 4. Differentiering
- Grundnivå: Direkta tillämpningar
- Mellannivå: Problemlösning med flera steg
- Fördjupning: Kreativa och abstrakta problem

---

## ⚙️ Tekniska Specifikationer

### HTML/CSS/JavaScript
- **HTML5** semantiska element
- **Responsiv design** (mobil-först)
- **JavaScript** för interaktiva quiz
- **Unicode** för matematiska symboler (√, ², π, etc.)
- **MathML/LaTeX** (om behövs för komplexa formler)

### Browser-kompatibilitet
- Chrome, Firefox, Safari, Edge (moderna versioner)
- Mobil: iOS Safari, Chrome Android

### Tillgänglighet
- ARIA-labels för quiz-knappar
- Semantisk HTML
- Keyboard navigation
- Kontrast och läsbarhet

---

## 🚀 Arbetsflöde för Nya Övningar

### Steg 1: Planera
- Välj ämne och kursnivå
- Definiera lärandemål
- Identifiera förkunskaper

### Steg 2: Använd exercise-creator
```
"exercise-creator: Skapa en övning om [ämne] för Matte [X]"
```

### Steg 3: Generera Quiz
- exercise-creator eller math-tutor skapar quiz-frågor
- 2 frågor med 4 alternativ vardera
- Förklaringar för alla svar

### Steg 4: Generera Lösning
```
"problem-solver: Lös huvudproblemet steg-för-steg"
```

### Steg 5: Granska och Publicera
- Kontrollera HTML-validitet
- Testa interaktivitet
- Commit och push

---

## 📊 Kvalitetskontroll

Innan en övning publiceras:
- [ ] Quiz-frågorna testar relevanta förkunskaper
- [ ] Alla 4 alternativ har pedagogiska förklaringar
- [ ] **⚠️ KRITISKT: Quiz-interaktivitet fungerar!**
  - [ ] Klicka på RÄTT svar → Grön feedback visas med ✅
  - [ ] Klicka på FEL svar → Orange feedback visas med ❌ och förklaring
  - [ ] Knappar inaktiveras efter klick (ingen dubbel-klick)
  - [ ] Feedback innehåller tydlig pedagogisk förklaring
  - [ ] MathJax renderas korrekt i feedback (om matematiska formler finns)
- [ ] Huvudproblemet är lagom svårt för målgruppen
- [ ] Steg-för-steg lösningen är fullständig
- [ ] HTML är responsiv och fungerar på mobil
- [ ] Footer-navigation är korrekt
- [ ] Matematiken är korrekt (dubbelkolla!)

**Hur man testar quiz lokalt:**
```bash
# Från Matematik-katalogen
python3 -m http.server 8000
# Besök http://localhost:8000/matte1.html
# Klicka på varje svaralternativ och verifiera att feedback visas korrekt
```

**Vanliga Quiz-Fel att Undvika:**
- ❌ Glömma `onclick="checkAnswer(questionNum, 'X')"` på knappar
- ❌ Felaktigt feedback-id (ska vara `feedback1`, `feedback2`, etc.)
- ❌ Saknar JavaScript `checkAnswer()`-funktion
- ❌ Saknar CSS-klasser `.feedback.correct` och `.feedback.incorrect`
- ❌ Knappar inaktiveras inte (kan klicka flera gånger)

---

## 🔗 Resurser

### Matematikresurser
- [Matteboken.se](https://www.matteboken.se/) - Svensk matematikresurs
- [Desmos Graphing Calculator](https://www.desmos.com/calculator) - Grafverktyg
- [GeoGebra](https://www.geogebra.org/) - Dynamisk matematikprogramvara

### Tekniska Resurser
- [Överliggande CLAUDE.md](../CLAUDE.md) - Repository best practices
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)

### Detta Projekt
- [README.md](README.md) - Teknisk dokumentation
- [index.html](index.html) - Live demo
- [matematikunderkatalog.html](matematikunderkatalog.html) - Setup-guide

---

## 💡 Tips för Framgång

### För Matematikinnehåll
1. **Börja enkelt** - Skapa Matte 1-övningar först
2. **Testa quiz-frågor** - Är de tillräckligt tydliga?
3. **Varierad svårighet** - Blanda enkla och svåra problem
4. **Verkliga exempel** - Koppla till elevens vardag

### För Claude Code
1. **Använd agenter** - De är specialiserade för olika uppgifter
2. **Läs output** - Granska vad agenterna producerar
3. **Iterera** - Förbättra baserat på resultat
4. **Commita ofta** - Små, frekventa commits är bättre än stora

### För GitHub
1. **Branching** - Använd claude/ branches för development
2. **Merge till main** - När innehåll är klart
3. **GitHub Pages** - Aktivera för att publicera
4. **README.md** - Håll den uppdaterad

---

## 🎯 Nästa Steg

1. **Skapa index.html** - Pedagogisk genomgång av projektet
2. **Skapa matte1.html** - Första övningsfilen
3. **Testa GitHub Pages** - Publicera och verifiera
4. **Iterera** - Skapa fler övningar för Matte 2-5
5. **Dokumentera** - Uppdatera README.md med lärdomar

---

*Denna fil skapades för att koordinera Matematik-projektet enligt Claude Code best practices. Den kompletterar den överliggande [CLAUDE.md](../CLAUDE.md) med projektspecifik information.*

**Senast uppdaterad:** 5 februari 2026
**Version:** 1.0
**Skapad med:** Claude Sonnet 4.5
