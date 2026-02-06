# Matematik - Interaktiva Gymnasieövningar

> Pedagogiskt matematikprojekt med permanenta Claude Code-agenter för svensk gymnasieskola

**🌐 [Se live-demo →](https://kentlundgren.github.io/AI/Matematik/)**

---

## 📚 Projektöversikt

Detta är ett **dubbelt lärandeprojekt** som kombinerar:

1. **Matematikpedagogik** - Interaktiva webbaserade övningar för Matematik 1-5
2. **Claude Code Desktop** - Lärande om Git, GitHub, permanenta agenter och versionhantering

Projektet demonstrerar hur man kan använda **Claude Code permanenta agenter** för att skapa pedagogiskt innehåll med konsekvent kvalitet och struktur.

---

## 🎯 Huvudresultat

### För Elever
- ✅ Interaktiva matematikövningar för gymnasiet (**Matte 1-3 tillgängliga nu**, Matte 4-5 kommer snart)
- ✅ Quiz-frågor som aktiverar förkunskaper innan övning
- ✅ Steg-för-steg lösningar med fullständig förklaring
- ✅ Fyra olika lösningsmetoder per uppgift (bästa metoden markerad)
- ✅ Tips-sektion och vanliga fel att undvika
- ✅ Interaktiva grafer med Canvas
- ✅ Förklaringar av både rätt och felaktiga svar
- ✅ Responsiv design för mobil och desktop

### För Utvecklare
- ✅ Exempel på Claude Code desktop workflow
- ✅ Permanenta agenter med tydliga roller
- ✅ Git branch-hantering och GitHub Pages publicering
- ✅ Strukturerad projektkoordinering med lokal CLAUDE.md

---

## 🤖 Permanenta Agenter

Projektet använder tre specialiserade agenter i `.claude/agents/`:

| Agent | Beskrivning | Primär Uppgift |
|-------|-------------|----------------|
| 🎓 **math-tutor** | Pedagogisk förklaring | Förklarar koncept, skapar quiz-frågor |
| 🔧 **problem-solver** | Systematisk problemlösning | Steg-för-steg lösningar, verifiering |
| 📝 **exercise-creator** | Övningsdesign | Skapar kompletta övningar med HTML |

**Agentsamarbete:**
```
exercise-creator  →  Skapar övningsstruktur och quiz
        ↓
problem-solver    →  Genererar steg-för-steg lösning
        ↓
math-tutor        →  Granskar pedagogisk kvalitet
```

---

## 📁 Projektstruktur

```
Matematik/
├── .claude/
│   └── agents/
│       ├── math-tutor.md              # 🎓 Pedagogisk förklaring
│       ├── problem-solver.md          # 🔧 Steg-för-steg lösningar
│       └── exercise-creator.md        # 📝 Övningsdesign
├── CLAUDE.md                          # Projektkoordinator (läses av Claude)
├── README.md                          # Denna fil (teknisk dokumentation)
├── index.html                         # Pedagogisk genomgång (GitHub Pages landning)
├── fem_matteuppgifter.html            # Huvudmeny med kortlayout för alla övningar
├── matematikunderkatalog.html         # Guide för att skapa strukturen
├── matte1.html                        # Matematik 1 övningar (Linjära ekvationer)
├── matte2.html                        # Matematik 2 övningar (Derivata & Logaritmer)
├── matte3.html                        # Matematik 3 övningar (Trigonometri)
├── matte4.html                        # Matematik 4 övningar (Kommer snart)
└── matte5.html                        # Matematik 5 övningar (Kommer snart)
```

---

## 🔗 Länkar

| Resurs | URL |
|--------|-----|
| **Live demo** | https://kentlundgren.github.io/AI/Matematik/ |
| **GitHub Repo** | https://github.com/kentlundgren/AI/tree/main/Matematik |
| **Överliggande CLAUDE.md** | [../CLAUDE.md](../CLAUDE.md) |
| **Lokal CLAUDE.md** | [CLAUDE.md](CLAUDE.md) |

---

## 🎨 Pedagogisk Design

Varje övningsfil (matte1.html, matte2.html, etc.) följer samma struktur:

### 1. Quiz-sektion (Förberedelse)
**Fråga 1:** Förkunskapskontroll
- Testar om eleven har nödvändiga grundkunskaper
- 4 svarsalternativ
- Förklaringar för rätt och fel svar

**Fråga 2:** Strategiplanering
- Hjälper eleven välja rätt lösningsmetod
- 4 svarsalternativ
- Pedagogiska förklaringar

### 2. Huvudproblem
- Tydlig problemformulering
- Relevant kontext (när tillämpligt)

### 3. Steg-för-Steg Lösning
```
1. Förstå problemet    → Vad är givet? Vad söker vi?
2. Planera lösningen   → Vilken metod ska vi använda?
3. Genomföra lösningen → Alla steg visas explicit
4. Kontrollera         → Verifiera resultatet
5. Slutsats            → Sammanfatta och tolka
```

### 4. Fördjupning (Frivillig)
- Svårare varianter
- Tillämpningar
- Koppling till verkliga situationer

---

## 📝 Tillgängliga Övningar (Status)

### ✅ Matematik 1 - Linjära Ekvationer
**Tillgänglig:** [matte1.html](https://kentlundgren.github.io/AI/Matematik/matte1.html)

**Innehåll:**
- **Uppgift:** Mobilabonnemang - Vilket är mest lönsamt?
- **Ämne:** Linjära funktioner och ekvationer i verkliga situationer
- **Lösningsmetoder:** Algebraisk (bäst), grafisk, tabellmetod, gissning
- **Specialfunktioner:** Interaktiv graf med linjära funktioner och skärningspunkt

### ✅ Matematik 2 - Derivata & Logaritmer
**Tillgänglig:** [matte2.html](https://kentlundgren.github.io/AI/Matematik/matte2.html)

**Innehåll:**
- **Uppgift 1:** Öppen låda - Maximal volym (optimering)
- **Uppgift 2:** Logaritmer och förenkling
- **Ämnen:** Derivata, förändringshastighet, optimering, logaritmlagar
- **Lösningsmetoder:** Derivata (bäst), funktionsanalys, tabelltestning, logisk uppskattning
- **Specialfunktioner:** Interaktiv graf med volymfunktion V(x) = x(30-2x)²

### ✅ Matematik 3 - Trigonometri
**Tillgänglig:** [matte3.html](https://kentlundgren.github.io/AI/Matematik/matte3.html)

**Innehåll:**
- **Uppgift:** När är skuggan lika lång? - Solvinkel och skugglängd
- **Ämne:** Trigonometriska ekvationer, tan(θ), arctan, periodisitet
- **Lösningsmetoder:** Trigonometrisk ekvation (bäst), enhetscirkeln, grafisk lösning, triangelmätning
- **Specialfunktioner:** Geometrisk visualisering av torn, skugga och solvinkel med Canvas

### 🚧 Matematik 4 - Vektorer (Kommer snart)
**Status:** Planerad

**Planerat innehåll:**
- **Uppgift:** Kortaste avståndet - Punkt till linje i rymden
- **Ämne:** Vektorgeometri i 3D
- **Lösningsmetoder:** Vektorprojektion, avståndsformel, kryssproduktsformel

### 🚧 Matematik 5 - Gränsvärden (Kommer snart)
**Status:** Planerad

**Planerat innehåll:**
- **Uppgift:** Obestämd form - När x→0
- **Ämne:** Gränsvärden och L'Hôpitals regel
- **Lösningsmetoder:** L'Hôpitals regel, Taylorserier, numerisk approximation

---

## 🚀 Hur Man Använder Detta Projekt

### Som Elev

1. **Besök GitHub Pages:** https://kentlundgren.github.io/AI/Matematik/
2. **Välj kursnivå:** Använd [fem_matteuppgifter.html](https://kentlundgren.github.io/AI/Matematik/fem_matteuppgifter.html) för att se alla tillgängliga övningar
3. **Klicka på ett kort** för att öppna övningen (Matte 1-3 är tillgängliga)
4. **Svara på quiz-frågor** innan du läser lösningen
5. **Studera steg-för-steg lösningen** i egen takt
6. **Utforska tips och vanliga fel** för djupare förståelse

### Som Utvecklare (Lär dig Claude Code Desktop)

1. **Klona repot:**
   ```bash
   git clone https://github.com/kentlundgren/AI.git
   cd AI/Matematik
   ```

2. **Utforska agenterna:**
   ```bash
   cat .claude/agents/math-tutor.md
   cat .claude/agents/problem-solver.md
   cat .claude/agents/exercise-creator.md
   ```

3. **Läs projektkoordinatorn:**
   ```bash
   cat CLAUDE.md
   ```

4. **Skapa ny övning med Claude Code:**
   ```
   "Använd exercise-creator för att skapa en övning om [ämne] för Matte [X]"
   ```

5. **Testa lokalt:**
   ```bash
   python3 -m http.server 8000
   # Besök http://localhost:8000
   ```

---

## 🛠️ Teknisk Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Matematisk notation:** Unicode, eventuellt MathML/LaTeX
- **Versionhantering:** Git
- **Hosting:** GitHub Pages
- **Utvecklingsverktyg:** Claude Code Desktop (med permanenta agenter)

---

## 📖 Läroplan (Svensk Gymnasieskola)

| Kurs | Poäng | Huvudområden |
|------|-------|--------------|
| **Matematik 1** | 100p | Algebra, funktioner, geometri, statistik |
| **Matematik 2** | 100p | Logaritmer, trigonometri, derivata, integraler |
| **Matematik 3** | 100p | Polynom, trigonometri (fördjupning), komplexa tal |
| **Matematik 4** | 100p | Linjär algebra, vektorer, matriser, geometri 3D |
| **Matematik 5** | 100p | Analys, differentialekvationer, serier |

---

## 🔧 Claude Code Desktop Workflow

### Branch-Hantering

Projektet använder Git branches enligt Claude Code-konventionen:

```bash
# Huvudbranch (publicerad)
main

# Development branches (automatiskt skapade av Claude Code)
claude/learn-claude-code-desktop-gBnkk
claude/math-problem-tutor-KwJRN
```

**Viktigt:** Claude Code desktop skapar automatiskt branches med prefix `claude/` för varje session.

### Arbetsflöde

1. **Utveckling** på `claude/` branch
2. **Commit** ändringar lokalt
3. **Push** till remote (automatiskt via Claude Code proxy)
4. **Merge** till `main` när klar
5. **GitHub Pages** uppdateras automatiskt från `main`

---

## 📊 Projektmål och Status

### Fas 1: Setup ✅
- [x] Skapa projektstruktur
- [x] Definiera permanenta agenter
- [x] Skapa CLAUDE.md (lokal + överliggande)
- [x] Skapa README.md

### Fas 2: Innehållsproduktion ✅
- [ ] Skapa index.html (pedagogisk genomgång)
- [x] Skapa fem_matteuppgifter.html (huvudmeny)
- [x] Skapa matte1.html (Linjära ekvationer)
- [x] Skapa matte2.html (Derivata & Logaritmer)
- [x] Skapa matte3.html (Trigonometri)
- [ ] Skapa matte4.html (Vektorer - planerad)
- [ ] Skapa matte5.html (Gränsvärden - planerad)

### Fas 3: Publicering ✅
- [x] Merge till main branch
- [x] Aktivera GitHub Pages
- [x] Publicera matte1-3.html
- [ ] Verifiera alla länkar (matte1-3)
- [ ] Testa responsiv design (matte1-3)

---

## 🎓 Lärdomar (Claude Code Desktop)

### Viktiga Insikter

1. **Environment ≠ Katalog**
   - Claude Code "environments" (konversationer) skapar Git-branches
   - **INTE** separata kataloger automatiskt
   - Du måste **explicit skapa** projektkataloger (som `Matematik/`)

2. **Git Remote Proxy**
   - Claude Code desktop använder lokal proxy: `http://local_proxy@127.0.0.1:38440/git/`
   - Detta synkroniserar automatiskt med GitHub
   - Ingen manuell git-konfiguration behövs

3. **CLAUDE.md Hierarki**
   - **Överliggande** (`/AI/CLAUDE.md`): Generella best practices
   - **Lokal** (`/AI/Matematik/CLAUDE.md`): Projektspecifika instruktioner
   - Claude läser båda och kombinerar kontext

4. **Permanenta Agenter**
   - Definieras i `.claude/agents/*.md`
   - Använd **beskrivande namn** (math-tutor, inte agent1)
   - Tydliga roller och ansvarsområden

---

## 🔗 Projektnavigation

### 📄 Dokumentation
- [📖 README](README.md) - Denna fil (teknisk dokumentation)
- [📋 CLAUDE.md](CLAUDE.md) - Projektkoordinator för Claude Code
- [🌐 index.html](index.html) - Pedagogisk genomgång
- [🎓 fem_matteuppgifter.html](fem_matteuppgifter.html) - Huvudmeny med kortlayout
- [🛠️ matematikunderkatalog.html](matematikunderkatalog.html) - Setup-guide

### 🤖 Agenter
- [🎓 math-tutor](.claude/agents/math-tutor.md)
- [🔧 problem-solver](.claude/agents/problem-solver.md)
- [📝 exercise-creator](.claude/agents/exercise-creator.md)

### 📚 Övningar
- [📐 Matematik 1](matte1.html) - **Tillgänglig** (Linjära ekvationer)
- [📊 Matematik 2](matte2.html) - **Tillgänglig** (Derivata & Logaritmer)
- [🔢 Matematik 3](matte3.html) - **Tillgänglig** (Trigonometri)
- [📐 Matematik 4](matte4.html) - *(Kommer snart - Vektorer)*
- [🎯 Matematik 5](matte5.html) - *(Kommer snart - Gränsvärden)*
- [🎓 Huvudmeny](fem_matteuppgifter.html) - **Översikt med kortlayout**

### 🌐 Externa Länkar
- [💻 GitHub Repository](https://github.com/kentlundgren/AI/tree/main/Matematik)
- [📘 Överliggande CLAUDE.md](../CLAUDE.md)
- [🏠 AI Repository Root](https://github.com/kentlundgren/AI/)

---

## 🤝 Bidrag

Detta är ett personligt lärandeprojekt, men feedback är välkommet!

**Kontakt:** Via GitHub Issues på https://github.com/kentlundgren/AI/issues

---

## 📜 Licens

Detta projekt är öppen källkod för utbildningssyfte.

---

**Skapad med Claude Code permanenta agenter**
© 2026 - Matematik Gymnasiet Interaktiva Övningar

**Teknisk Stack:** HTML5, CSS3, JavaScript, Claude Code Desktop
**Agenter:** math-tutor, problem-solver, exercise-creator
**Publicering:** GitHub Pages
