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

### 2. Quiz-sektion
**Quiz-fråga 1:** Förkunskapskontroll
- 4 svarsalternativ (A, B, C, D)
- Förklaring av rätt svar (✅)
- Förklaring av varje fel svar (❌)

**Quiz-fråga 2:** Strategiplanering
- 4 svarsalternativ
- Förklaringar av rätt/fel

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
- [ ] Huvudproblemet är lagom svårt för målgruppen
- [ ] Steg-för-steg lösningen är fullständig
- [ ] HTML är responsiv och fungerar på mobil
- [ ] Footer-navigation är korrekt
- [ ] Matematiken är korrekt (dubbelkolla!)

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
