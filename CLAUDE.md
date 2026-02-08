# AI Projects Repository - Övergripande Projektkoordinator

> **VIKTIGT:** Denna fil kommer att döpas om till `CLAUDE.md` och fungerar som den övergripande projektkoordinatorn för alla underprojekt i `/AI/` repository.

## 📚 Repository Översikt

Detta repository innehåller flera AI-projekt som demonstrerar olika användningsområden för Claude Code permanenta agenter, multiperspektivanalys, och AI-assisterad innehållsproduktion.

**GitHub Repository:** https://github.com/kentlundgren/AI/

**Aktiva underprojekt:**
- [ClaudeCode1](https://github.com/kentlundgren/AI/tree/main/ClaudeCode1) - Danmark-Grönland perspektivanalys med permanenta agenter (multiperspektivdebatt, historisk forskning, syntesanalys)
- [DagensDubbel](https://github.com/kentlundgren/AI/tree/main/DagensDubbel) | [Live demo](https://kentlundgren.github.io/AI/DagensDubbel/) - Självförbättrande prediktionssystem för Solvalla travlopp (Firebase Firestore, automatiska beräkningar, EV-analys, permanenta agenter: Backend + Frontend)
- [Matematik](https://github.com/kentlundgren/AI/tree/main/Matematik) | [Live demo](https://kentlundgren.github.io/AI/Matematik/) - Interaktiva övningar för gymnasiematematik (quiz med pedagogiska förklaringar, steg-för-steg lösningar, permanenta agenter: math-tutor + problem-solver + exercise-creator)

---

## 🎯 Syfte och Arbetsflöde

Denna CLAUDE.md fil läses **först** när du startar ett nytt projekt i `/AI/` repository. Den tillhandahåller:

1. **Best practices** från Anthropic för Claude Code-projekt
2. **Agent-strukturering** med beskrivande namn och roller
3. **Projektmallar** med fördefinierade agentuppsättningar
4. **Standardisering** för dokumentation och navigation

---

## 📖 Claude Code Best Practices

### CLAUDE.md Filstruktur (från Anthropic)

CLAUDE.md-filer är speciella konfigurationsdokument som Claude automatiskt laddar vid konversationsstart. De optimerar token-användning samtidigt som de tillhandahåller essentiell projektinformation.

**Rekommenderat innehåll:**
- Vanliga bash-kommandon med beskrivningar
- Kärnfiler och utility-funktioner
- Kodstilsguider
- Testinstruktioner
- Repository-konventioner (branching, merge-strategier)
- Utvecklingsmiljö setup-krav
- Projektspecifika quirks eller varningar

**Format:** Ingen obligatorisk struktur. Håll dem koncisa och läsbara.

**Exempel:**
```markdown
# Bash commands
- npm run build: Build the project
- npm run typecheck: Run the typechecker

# Code style
- Use ES modules (import/export) syntax, not CommonJS
- Destructure imports when possible

# Workflow
- Typecheck after making code changes
- Run single tests rather than full suite for performance
```

### Placeringsalternativ

1. **Repository root** - `CLAUDE.md` (committa till git för teamdelning) eller `CLAUDE.local.md` (gitignore för personlig användning)
2. **Parent directories** - Användbart för monorepos; Claude hämtar kontext från flera nivåer
3. **Child directories** - Claude laddar on-demand när du arbetar med dessa filer
4. **Home folder** (`~/.claude/CLAUDE.md`) - Gäller för alla sessioner

### Optimeringsstrategier

**Iterativ förfining:** Behandla CLAUDE.md som en ofta använd prompt. Testa effektivitet och justera instruktioner baserat på resultat. Använd betoning som "IMPORTANT" eller "YOU MUST" för bättre efterlevnad.

**Dynamiska uppdateringar:** Tryck `#` under sessioner för att låta Claude automatiskt införliva nya instruktioner i relevant CLAUDE.md fil.

**Tool allowlisting:** Använd `/permissions` kommando för att hantera vilka verktyg Claude kan köra utan att begära tillstånd varje gång.

---

## 🤖 Agent-Systematik

### Beskrivande Namn Istället för Generiska

I detta repository använder vi **beskrivande agentnamn** baserade på roll och specialisering, INTE generiska namn som `agent1.md`, `agent2.md`.

**Exempel på bra agentnamn:**
- `researcher.md` - Forsknings- och datainsamlingsagent
- `writer.md` - Innehållsskrivande och rapportgenereringsagent
- `analyst.md` - Analytisk gransknings- och syntesagent
- `critic.md` - Kritisk gransknings- och kvalitetskontrollagent
- `translator.md` - Översättnings- och lokaliseringsagent
- `coder.md` - Kodskrivnings- och dokumentationsagent
- `designer.md` - UI/UX design- och layoutagent
- `data-scientist.md` - Dataanalys och statistikagent

### Agent-Filstruktur (Officiell Claude Code Format)

Alla permanenta agenter ska placeras i `.claude/agents/` och följa detta format:

```yaml
---
name: researcher
description: Research specialist for gathering and synthesizing information
tools: Read, Grep, Glob, WebSearch, WebFetch
model: sonnet
permissionMode: default
---

# Researcher Agent

You are a research specialist focused on gathering, verifying, and synthesizing information from multiple sources.

## Core Competencies
- Web research and source verification
- Academic and industry research
- Data collection and organization
- Source citation and reference management

## Analytical Approach
1. Identify research questions
2. Gather sources from multiple channels
3. Verify credibility and accuracy
4. Synthesize findings into coherent analysis
5. Cite sources properly

## Output Format
- Structured research reports
- Annotated bibliographies
- Summary briefs with citations
```

---

## 🚀 Workflow för Nya Projekt

### Steg 1: Claude Läser Denna Fil Först

När du startar ett nytt projekt i `/AI/` repository kommer Claude att:

1. **Läsa denna CLAUDE.md** för övergripande kontext
2. **Fråga om projektets natur** (typ, syfte, målgrupp, etc.)
3. **Föreslå 3 olika agentuppsättningar** baserat på dina svar
4. **Fråga om README.md och index.html** vid lämpligt tillfälle

### Steg 2: Beskriv Ditt Projekt

När du startar ett nytt projekt, beskriv:

**Obligatoriska uppgifter:**
- **Projektnamn:** Vad heter projektet?
- **Projekttyp:** Forskning/analys, koddokumentation, dataanalys, innehållsproduktion, annat?
- **Huvudsyfte:** Vad ska projektet åstadkomma?
- **Målgrupp:** Vem är den primära användaren/läsaren?

**Frivilliga uppgifter:**
- **Datakällor:** Vilka källor ska användas?
- **Output-format:** HTML, Markdown, JSON, annat?
- **Speciella krav:** Språk, stilguider, tekniska begränsningar?

### Steg 3: Välj Agentuppsättning

Baserat på din projektbeskrivning kommer Claude att föreslå **3 alternativa agentuppsättningar** som varierar i:

- **Antal agenter:** 2-6+ agenter beroende på komplexitet
- **Specialiseringar:** Fokus på forskning, skrivande, analys, eller kombination

**Exempel på förslag:**

**ALTERNATIV 1: Minimal (2 agenter)** - Enkel forskning och rapportering
- `researcher.md` - Datainsamling
- `writer.md` - Rapportskrivning

**ALTERNATIV 2: Standard (4 agenter)** - Balanserad coverage
- `researcher.md` - Primär datainsamling
- `analyst.md` - Djupanalys och syntes
- `writer.md` - Innehållsproduktion
- `critic.md` - Kvalitetsgranskning

**ALTERNATIV 3: Omfattande (6+ agenter)** - Komplex multiperspektivanalys
- `primary-researcher.md` - Huvudforskare
- `secondary-researcher.md` - Kompletterande forskning
- `perspective-analyst-1.md` - Första perspektivet
- `perspective-analyst-2.md` - Andra perspektivet
- `perspective-analyst-3.md` - Tredje perspektivet
- `synthesizer.md` - Syntes över perspektiv
- `editor.md` - Slutredigering

### Steg 4: Dokumentation (README.md och index.html)

**VIKTIGT:** Alla projekt ska troligen ha:
- **README.md** - Projektöversikt, teknisk dokumentation
- **index.html** - Interaktiv guide för slutanvändare

Claude kommer att **fråga vid lämpligt tillfälle** (oftast efter att agenterna har producerats):

**Frågor om README.md:**
- Vilken detaljnivå? (Översikt, teknisk, omfattande)
- Ska Mermaid-diagram inkluderas?
- Ska exempel på agentanvändning inkluderas?
- Ska tekniska specifikationer dokumenteras?

**Frågor om index.html:**
- Vilken stil? (Akademisk, populär, teknisk, interaktiv)
- Ska navigation inkluderas?
- Ska visualiseringar inkluderas?
- Responsiv design?

### Steg 5: Uppdatera överliggande README.md

**🔴 OBLIGATORISK REGEL: När ett nytt underprojekt skapas, uppdatera ALLTID den överliggande README.md-filen.**

**Varför detta är viktigt:**
- ✅ Användare ser alla tillgängliga projekt på ett ställe
- ✅ Enkel navigation mellan underprojekt
- ✅ SEO-fördelar (Google indexerar huvudsidan bättre)
- ✅ Professionellt och strukturerat intryck
- ✅ Undviker "dolda" projekt som ingen hittar

**Vad ska inkluderas:**

1. **Projektnamn och beskrivning** (1-2 meningar)
2. **Länkar:**
   - ⚠️ **VIKTIGT: Kontrollera om live demo finns!** Öppna `https://kentlundgren.github.io/AI/[projektnamn]/` i webbläsare för att verifiera
   - 🌐 GitHub Pages live demo: `https://kentlundgren.github.io/AI/[projektnamn]/` (om tillgänglig)
   - 💻 GitHub källkod: `https://github.com/kentlundgren/AI/tree/main/[projektnamn]`
3. **Huvudfunktioner** (3-6 punkter) - specifika features som gör projektet unikt
4. **Teknisk stack** (HTML, CSS, JS, Firebase, etc.)
5. **Permanenta agenter** (om projektet använder sådana) - namnge dem och beskriv deras roller kortfattat
6. **Status** (om relevant: "Pågående", "Komplett", "Beta", etc.)

**Exempel från DagensDubbel:**

```markdown
### 📊 DagensDubbel - Självförbättrande prediktionssystem
Ett webbbaserat analyssystem för Dagens Dubbel (Solvalla lördagstrav) som spårar 5 spelare och ett AI-system, beräknar statistik och ROI, och lär sig från varje veckas resultat.

**🚀 [Se live demo →](https://kentlundgren.github.io/AI/DagensDubbel/)** | **💻 [Källkod →](https://github.com/kentlundgren/AI/tree/main/DagensDubbel)**

**Funktioner:**
- Firebase Firestore-integration för molnbaserad datasynkning
- Automatisk insatsberäkning och veckonummerberäkning
- Färgkodning för tydlig input-feedback (gul → grå vid sparande)
- Expected Value (EV)-analys för smartare prediktioner
- ROI-jämförelse och kumulativ statistik
- Pedagogisk förklaring av systemets strategi

**Teknik:** HTML, CSS, Vanilla JavaScript, Firebase Firestore (v10.7.0 Compat SDK)

**🤖 Permanenta agenter:** Backend-agent (datahantering, Firebase, beräkningar) + Frontend-agent (UI/UX, interaktivitet)

**Skapad:** 7 februari 2026 | **Status:** Vecka 6 genomförd, förberedelse för vecka 7
```

**Exempel 2: Matematik-projektet**

```markdown
### 🧮 Matematik - Interaktiva övningar för gymnasiematematik
Interaktiva övningar för svensk gymnasiematematik (Matte 1-5) med quiz-frågor och steg-för-steg lösningar. Ett dubbelt lärandeprojekt som kombinerar matematikundervisning med demonstration av Claude Code permanenta agenter.

**🚀 [Se live demo →](https://kentlundgren.github.io/AI/Matematik/)** | **💻 [Källkod →](https://github.com/kentlundgren/AI/tree/main/Matematik)**

**Funktioner:**
- Quiz-frågor med pedagogiska förklaringar av både rätt och fel svar
- Steg-för-steg lösningar enligt strukturen: Förstå → Planera → Genomföra → Kontrollera → Slutsats
- Fördjupningsuppgifter för extra utmaning
- Anpassad för svensk gymnasieskola (följer Skolverkets läroplan)
- Demonstration av Claude Code Desktop och Git branch-hantering
- Artikel "Kunskap är Kul" om projektets skapandeprocess

**Teknik:** HTML5, CSS3, Vanilla JavaScript, Git, GitHub Pages

**🤖 Permanenta agenter:** math-tutor (pedagogisk förklaring) + problem-solver (systematisk problemlösning) + exercise-creator (övningsdesign)

**Skapad:** Januari 2026 | **Status:** Matematik 1-3 tillgängliga, Matematik 4-5 kommer snart
```

**Placering i README.md:**
- Lägg till nya projekt **efter** befintliga projekt men **före** "## Om projektet"-sektionen
- Använd `---` (horisontell linje) för tydlig separation mellan projekt
- Följ samma struktur som befintliga projekt för konsistens

**Checklista när du skapar nytt underprojekt:**

```markdown
□ 1. Skapa underprojekt-mapp (t.ex. `DagensDubbel/`)
□ 2. Skapa projektets egna filer (index.html, README.md, etc.)
□ 3. Skapa `.claude/agents/` med permanenta agenter (om relevant)
□ 4. Skapa projektspecifik CLAUDE.md (om komplext projekt)
□ 5. ⚠️ **KONTROLLERA om live demo finns**: Öppna https://kentlundgren.github.io/AI/[projektnamn]/ i webbläsare
□ 6. ✅ **UPPDATERA överliggande `/AI/README.md`** med:
   - Projektbeskrivning (1-2 meningar)
   - Live demo-länk (om tillgänglig) + Källkodslänk
   - Funktioner (3-6 punkter, specifika features)
   - Teknisk stack
   - Permanenta agenter (om projektet använder sådana)
   - Status (om relevant)
□ 7. ✅ **UPPDATERA denna `/AI/CLAUDE.md`** under "Aktiva underprojekt" med kortfattad beskrivning
□ 8. Testa GitHub Pages-länken (verifiera att den fungerar och visar rätt innehåll)
□ 9. Commit och push till GitHub
```

**Vanliga misstag att undvika:**
- ❌ Glömmer uppdatera överliggande README.md → Projektet blir "osynligt"
- ❌ Glömmer kontrollera om live demo finns → Skriver "kommer snart" fast den är live
- ❌ Länkar är felaktiga (404-fel) → Dålig användarupplevelse
- ❌ Ingen beskrivning av funktioner → Användare förstår inte vad projektet gör
- ❌ Glömmer namnge permanenta agenter → Missar viktig projektinformation
- ❌ Inconsistent formatering → Ser oprofessionellt ut

**Automatisering (framtida förbättring):**
I framtiden kan detta automatiseras med ett script:
```bash
# create-project.sh
PROJECT_NAME=$1
mkdir -p "$PROJECT_NAME/.claude/agents"
# ... skapa filer ...
# Uppdatera README.md automatiskt
```

---

## 📁 Fördefinierade Agentuppsättningar

### 1. Forsknings- och Analysprojekt

**Typ:** Akademisk forskning, policyanalys, marknadsanalys

**Agentuppsättning (Standard - 4 agenter):**
```
.claude/agents/
├── researcher.md          # Primär datainsamling och källverifiering
├── data-analyst.md        # Kvantitativ och kvalitativ analys
├── report-writer.md       # Strukturerad rapportskrivning
└── fact-checker.md        # Kvalitetskontroll och källgranskning
```

**Agentroller:**
- **researcher:** WebSearch, WebFetch, akademiska källor, källkritik
- **data-analyst:** Statistisk analys, trendidentifiering, datavisualisering
- **report-writer:** Strukturerad rapportskrivning, akademisk stil, citeringshantering
- **fact-checker:** Verifiering av påståenden, källkorsreferens, kvalitetssäkring

**Användningsfall:**
- Akademiska rapporter
- Policyanalyser
- Marknadsundersökningar
- Litteraturöversikter

---

### 2. Multiperspektivanalys

**Typ:** Komplexa frågor med flera perspektiv (som ClaudeCode1-projektet)

**Agentuppsättning (Omfattande - 6+ agenter):**
```
.claude/agents/
├── perspective-1.md       # Första perspektivet (t.ex. danskt)
├── perspective-2.md       # Andra perspektivet (t.ex. grönländskt)
├── perspective-3.md       # Tredje perspektivet (t.ex. svenskt)
├── historical-researcher.md  # Historisk kontext och dokumentation
├── synthesizer.md         # Syntes över perspektiv
└── debate-moderator.md    # Simulerad debatt mellan perspektiv
```

**Agentroller:**
- **perspective-X:** Specialiserad synvinkel med unika kompetenser och bias
- **historical-researcher:** Historisk bakgrund, dokumenterade händelser
- **synthesizer:** Identifierar gemensamt/konflikt, väver samman perspektiv
- **debate-moderator:** Organiserar och modererar simulerade debatter

**Användningsfall:**
- Politiska analyser
- Kulturella studier
- Konfliktanalys
- Etiska dilemman

---

### 3. Innehållsproduktion

**Typ:** Artikelserier, blogginlägg, dokumentation, böcker

**Agentuppsättning (Standard - 4 agenter):**
```
.claude/agents/
├── content-researcher.md  # Research och idégenerering
├── writer.md              # Primär innehållsskrivning
├── editor.md              # Stilredigering och struktur
└── seo-optimizer.md       # SEO och webboptimering (om relevant)
```

**Agentroller:**
- **content-researcher:** Ämnesresearch, trendanalys, målgruppsförståelse
- **writer:** Kreativt skrivande, storytelling, ton och stil
- **editor:** Grammatik, flöde, läsbarhet, struktur
- **seo-optimizer:** Nyckelord, metadata, webboptimering

**Användningsfall:**
- Blogginlägg
- Marknadsföringsmaterial
- Dokumentation
- E-böcker

---

### 4. Kod- och Teknisk Dokumentation

**Typ:** API-dokumentation, kodguider, tekniska manualer

**Agentuppsättning (Standard - 4 agenter):**
```
.claude/agents/
├── code-analyzer.md       # Kodanalys och arkitekturförståelse
├── documentation-writer.md # Teknisk skrivning
├── example-generator.md   # Kodexempel och use cases
└── technical-reviewer.md  # Teknisk granskning och verifiering
```

**Agentroller:**
- **code-analyzer:** Läser och förstår kodstruktur, identifierar patterns
- **documentation-writer:** Teknisk skrivning, API-dokumentation, tutorials
- **example-generator:** Skapar kodexempel, use cases, snippets
- **technical-reviewer:** Verifierar teknisk korrekthet, best practices

**Användningsfall:**
- API-dokumentation
- SDK-guider
- Tekniska tutorials
- Arkitekturdokumentation

---

### 5. Dataanalys och Visualisering

**Typ:** Datadriven analys med visualiseringar

**Agentuppsättning (Standard - 4 agenter):**
```
.claude/agents/
├── data-collector.md      # Datainsamling och rensning
├── statistician.md        # Statistisk analys
├── visualizer.md          # Datavisualisering (grafer, diagram)
└── insights-writer.md     # Insiktsrapportering
```

**Agentroller:**
- **data-collector:** Samlar, rensar, och organiserar data
- **statistician:** Statistisk analys, hypotestestning, trendidentifiering
- **visualizer:** Skapar grafer, diagram, interaktiva visualiseringar
- **insights-writer:** Översätter data till insights, storytelling med data

**Användningsfall:**
- Dataanalysrapporter
- Business intelligence
- Forskningsdata
- Trendanalyser

---

## 🎨 Standard för README.md och index.html

### README.md Standard

Varje projekt ska ha en **README.md** som följer denna struktur:

```markdown
# [Projektnamn]

> Kort beskrivning av projektet

## 📚 Projektöversikt

[Beskriv projektet i 2-3 stycken]

## 🎯 Huvudresultat

- **[Resultat 1]** - Beskrivning
- **[Resultat 2]** - Beskrivning

## 🔗 Länkar

| Resurs | URL |
|--------|-----|
| **Live demo** | [länk] |
| **GitHub** | [länk] |

## 🤖 Permanenta Agenter

Projektet använder följande specialiserade agenter:

- 🔍 **agent-namn** - Beskrivning

## 📁 Projektstruktur

```
projekt/
├── .claude/
│   └── agents/
├── README.md
└── index.html
```

## 🔗 Projektnavigation

- [📄 Fil 1](fil1.md)
- [📄 Fil 2](fil2.md)

**Skapad med Claude Code permanenta agenter**
```

### index.html Standard

Varje projekt ska ha en **index.html** som:

1. **Beskriver projektet** för slutanvändare (inte utvecklare)
2. **Innehåller navigation** till alla viktiga filer
3. **Är responsiv** och mobilvänlig
4. **Har konsistent stil** (kan variera mellan projekt men ska vara professionell)

**Obligatoriska element:**
- Header med projektnamn
- Introduktionssektion
- Navigation/innehållsförteckning
- **Footer med projektnavigation** (se nedan)

### Korsnavigering mellan README.md och index.html

**VIKTIGT:** README.md och index.html ska ha tydliga länkar till varandra för enkel navigation:

**I README.md** - Lägg till länk till live-demo tidigt i dokumentet (efter beskrivningen):
```markdown
# Projektnamn

> Kort beskrivning

**🌐 [Se live-demo →](https://username.github.io/repo/projekt/)**
```

**I index.html** - Lägg till länk till GitHub-repot i header-sektionen:
```html
<header>
    <h1>Projektnamn</h1>
    <p class="subtitle">Beskrivning</p>
    <p style="margin-top: 1rem;">
        <a href="https://github.com/username/repo/tree/main/projekt" target="_blank" 
           style="color: white; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; 
                  border-radius: 5px; text-decoration: none;">
            💻 Visa källkod på GitHub
        </a>
    </p>
</header>
```

**Syfte:** Användare som besöker GitHub-repot ska enkelt kunna se resultatet live, och besökare på live-sidan ska kunna utforska källkoden.

### Exempel: DagensDubbel-projektet

**Implementerad korsnavigering:**

1. **I README.md** (rad 7-9):
```markdown
## 🌐 Live Demo
**🎯 [Öppna programmet här →](https://kentlundgren.github.io/AI/DagensDubbel/)**

Klicka på länken ovan för att använda den live-versionen direkt i webbläsaren.
```

2. **I index.html** (header-sektion):
```html
<header>
    <h1>🏇 Dagens Dubbel Analyssystem</h1>
    <p>Självförbättrande prediktionssystem för Solvalla Lördagstrav</p>
    <span class="version-badge">Version 1.0 | 7 februari 2026</span>
    <p style="margin-top: 1rem;">
        <a href="https://github.com/kentlundgren/AI/tree/main/DagensDubbel" target="_blank" 
           style="color: white; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; 
                  border-radius: 5px; text-decoration: none; display: inline-block;
                  transition: background 0.3s ease;">
            💻 Visa källkod på GitHub
        </a>
    </p>
</header>
```

**Resultat:** Användare kan enkelt navigera mellan live-version och källkod i båda riktningar.

---

## 🔗 Footer Navigation Standard

**VIKTIGT:** Alla HTML-filer och Markdown-filer i varje underprojekt **måste** ha en footer med länkar till projektets relevanta filer.

### HTML Footer Template

```html
<footer style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2.5rem 2rem;">
    <h3>🔗 Projektnavigation</h3>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div>
            <h4 style="color: #4ECDC4; margin-bottom: 0.5rem;">📄 Dokumentation</h4>
            <p style="margin: 0.3rem 0;">
                <a href="README.md" style="color: white;">📖 README</a>
            </p>
            <p style="margin: 0.3rem 0;">
                <a href="rapport.md" style="color: white;">📄 Rapport</a>
            </p>
        </div>

        <div>
            <h4 style="color: #4ECDC4; margin-bottom: 0.5rem;">🤖 Agenter</h4>
            <p style="margin: 0.3rem 0;">
                <a href="https://github.com/[user]/AI/blob/main/[projekt]/.claude/agents/agent1.md" target="_blank" style="color: white;">🔍 Agent 1</a>
            </p>
        </div>

        <div>
            <h4 style="color: #4ECDC4; margin-bottom: 0.5rem;">🌐 Externa Länkar</h4>
            <p style="margin: 0.3rem 0;">
                <a href="https://github.com/[user]/AI/tree/main/[projekt]" target="_blank" style="color: white;">💻 GitHub</a>
            </p>
        </div>
    </div>

    <p style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2); opacity: 0.8;">
        Skapad med <strong>Claude Code</strong> permanenta agenter<br>
        © [År] - [Beskrivning]
    </p>
</footer>
```

### Markdown Footer Template

```markdown
---

## 🔗 Projektnavigation

### 📄 Dokumentation
- [📖 README](README.md)
- [📄 Rapport](rapport.md)

### 🤖 Agenter
- [🔍 Agent 1](.claude/agents/agent1.md)

### 🌐 Externa Länkar
- [💻 GitHub](https://github.com/[user]/AI/tree/main/[projekt])

**Skapad med Claude Code permanenta agenter**
```

**Anpassning:** Varje projekt anpassar footer-innehållet baserat på vilka filer som finns, men strukturen ska vara konsistent.

---

## 📂 Rekommenderad Projektstruktur

### Ny Projektkatalog

```
[Projektnamn]/
├── .claude/
│   ├── agents/                    # Permanenta agenter
│   │   ├── researcher.md
│   │   ├── analyst.md
│   │   └── writer.md
│   └── settings.json              # Projektspecifika inställningar (valfritt)
├── CLAUDE.md                      # Projektspecifik koordinator
├── README.md                      # Teknisk dokumentation
├── index.html                     # Användarguide
├── [outputfiler].md/.html         # Genererat innehåll
└── .gitignore                     # Ignorera lokala filer
```

### .gitignore Rekommendation

```gitignore
# Claude Code lokala filer
.claude/*.local.*
.claude/settings.local.json
CLAUDE.local.md

# Temporära filer
*.tmp
.DS_Store

# Environment variables
.env
.env.*
```

---

## ⚙️ Konfiguration och Settings

### Permissions (från Claude Code Settings)

Rekommenderad permissions-konfiguration för `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Read(./)",
      "Write(./)",
      "Edit(./)",
      "Bash(git:*)",
      "WebSearch",
      "WebFetch"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)",
      "Bash(rm -rf:*)",
      "Bash(git push --force:*)"
    ],
    "ask": [
      "Bash(git push:*)"
    ],
    "defaultMode": "acceptEdits"
  },
  "model": "claude-sonnet-4-5-20250929",
  "attribution": {
    "commit": "🤖 Generated with Claude Code\n\nCo-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
  }
}
```

### Environment Variables

Användbara miljövariabler för projektet:

```json
{
  "env": {
    "PROJECT_TYPE": "research",
    "OUTPUT_FORMAT": "html",
    "LANGUAGE": "sv"
  }
}
```

---

## 🎓 Användningsexempel

### Scenario 1: Starta Forskningsprojekt

**Din beskrivning:**
> "Jag vill skapa ett projekt som analyserar AI:s påverkan på utbildning från lärar-, elev- och policyperspektiv. Målgrupp är utbildningsforskare."

**Claude föreslår:**

**ALTERNATIV 1: Minimal (3 agenter)**
- `education-researcher.md` - Utbildningsforskning
- `policy-analyst.md` - Policyanalys
- `report-writer.md` - Rapportskrivning

**ALTERNATIV 2: Standard (5 agenter)**
- `teacher-perspective.md` - Lärarperspektiv
- `student-perspective.md` - Elevperspektiv
- `policy-perspective.md` - Policyperspektiv
- `research-synthesizer.md` - Syntesanalys
- `academic-writer.md` - Akademisk rapportskrivning

**ALTERNATIV 3: Omfattande (7 agenter)**
- `teacher-perspective.md`
- `student-perspective.md`
- `policy-perspective.md`
- `tech-expert.md` - Teknisk AI-expert
- `educational-psychologist.md` - Pedagogisk psykologi
- `debate-moderator.md` - Simulerad debatt
- `academic-editor.md` - Slutredigering

### Scenario 2: Starta Innehållsprojekt

**Din beskrivning:**
> "Serie av blogginlägg om hållbar teknik för allmänheten."

**Claude föreslår:**

**ALTERNATIV 1: Minimal (2 agenter)**
- `content-researcher.md`
- `blog-writer.md`

**ALTERNATIV 2: Standard (4 agenter)**
- `sustainability-researcher.md`
- `tech-explainer.md` - Förenklar tekniska koncept
- `blog-writer.md`
- `seo-optimizer.md`

**ALTERNATIV 3: Omfattande (6 agenter)**
- `sustainability-researcher.md`
- `tech-researcher.md`
- `industry-expert.md`
- `popular-science-writer.md`
- `editor.md`
- `social-media-adapter.md` - Anpassar för sociala medier

---

## 🔄 Projektlivscykel

### Fas 1: Initiering
1. Läs denna CLAUDE.md
2. Beskriv projekt
3. Välj agentuppsättning
4. Claude skapar `.claude/agents/` och agentfiler

### Fas 2: Utveckling
1. Agenterna producerar innehåll
2. Iterativ förbättring
3. Lägg till/ta bort agenter vid behov

### Fas 3: Dokumentation
1. Claude frågar om README.md (när agenter är klara)
2. Claude frågar om index.html (när innehåll finns)
3. Skapa footers i alla filer

### Fas 4: Publicering
1. Review och kvalitetskontroll
2. Git commit och push
3. GitHub Pages publicering (om relevant)

---

## 📝 Vanliga Kommandon

### Skapa Nytt Projekt

```bash
cd /path/to/AI/
mkdir [projektnamn]
cd [projektnamn]
mkdir -p .claude/agents
```

### Använd Agent

```
"Använd researcher-agenten för att samla information om [ämne]"
"Låt perspective-1 och perspective-2 debattera [fråga]"
```

### Skapa Dokumentation

```
"Skapa README.md för detta projekt enligt standarden"
"Skapa index.html med navigation till alla projektfiler"
```

---

## 🌟 Best Practices Sammanfattning

### Gör:
- ✅ Använd **beskrivande agentnamn** (researcher, analyst, writer)
- ✅ Skapa **projektspecifik CLAUDE.md** i varje underprojekt
- ✅ Inkludera **footer navigation** i alla filer
- ✅ Följ **konsekvent projektstruktur**
- ✅ Dokumentera med både **README.md** och **index.html**
- ✅ Använd **permissions** för att skydda känsliga filer
- ✅ Commita agenter till git för teamdelning
- ✅ **Testa interaktiva element** (quiz, formulär, knappar) innan publicering
- ✅ **Använd färgkodning** för att visa input-status (gul → grå vid sparande)
- ✅ **Automatisera beräkningar** där möjligt för bättre UX
- ✅ **Korsnavigering mellan HTML-filer** - Alla HTML-filer länkar till index.html och vice versa

### Undvik:
- ❌ Generiska agentnamn (agent1, agent2, agent3)
- ❌ Glömma footer navigation
- ❌ Hårdkoda känslig information i agenter
- ❌ Skapa för många agenter utan tydlig roll
- ❌ Ignorera README.md och index.html
- ❌ Publicera interaktiva element utan att testa dem först
- ❌ Lämna användaren osäker på om data är sparad eller inte

### Interaktiva HTML-Element (Quiz, Formulär, etc.)

Om ditt projekt innehåller **interaktiva HTML-element** (som quiz-frågor, formulär, knappar):

**⚠️ KRITISKT: TESTA ALLTID INTERAKTIVITETEN!**

**Innan publicering:**
1. **Öppna filen lokalt:**
   ```bash
   python3 -m http.server 8000
   # Besök http://localhost:8000/[fil].html
   ```
2. **Testa varje interaktiv funktion:**
   - Klicka på alla knappar
   - Fyll i formulär
   - Verifiera att feedback visas korrekt
   - Kontrollera att rätt/fel-svar ger olika visuell feedback

**Quiz-specifika krav:**
- Rätt svar → Tydlig feedback med ✅ (grön bakgrund rekommenderas)
- Fel svar → Pedagogisk förklaring med ❌ (orange/röd bakgrund rekommenderas)
- Knappar ska inaktiveras efter klick
- JavaScript `checkAnswer()` eller liknande funktion måste finnas
- CSS-klasser för `.correct` och `.incorrect` feedback

**Exempel från Matematik-projektet:**
Se [Matematik/CLAUDE.md](Matematik/CLAUDE.md) för detaljerade quiz-implementationskrav.

---

## 🔗 Korsnavigering mellan HTML-filer (UPPDATERAD 2026-02-07)

**Implementerat i:** [DagensDubbel](https://github.com/kentlundgren/AI/tree/main/DagensDubbel) (2026-02-07)

### Syfte

När ett projekt innehåller flera HTML-filer ska det vara lätt för användaren att navigera mellan dem. `index.html` fungerar som **huvudfil/hub**, och alla andra HTML-filer ska ha tydliga länkar tillbaka.

### 📋 OBLIGATORISK REGEL

**När du skapar nya HTML-filer i ett projekt:**
1. ✅ **Lägg till en flik/länk från `index.html`** till den nya filen
2. ✅ **Lägg till en "← Tillbaka till huvudsystemet"-länk** i den nya filen som pekar på `index.html`
3. ✅ **Använd färgkodning** för att skilja olika typer av sidor åt
4. ✅ **Uppdatera projektets CLAUDE.md** med den nya länken

### Implementation

#### 1️⃣ Från index.html till annan HTML-fil

**Alt A: Som flik i navigation** (om projektet har flikar):
```html
<!-- I index.html, lägg till i tab-navigeringen -->
<div class="tabs">
    <button class="tab-button active" onclick="switchTab('input')">📝 Inmatning</button>
    <button class="tab-button" onclick="switchTab('results')">🏆 Resultat</button>
    
    <!-- Grön gradient för system-relaterat innehåll -->
    <button class="tab-button" 
            onclick="window.location.href='systemets_tips.html'" 
            style="background: linear-gradient(135deg, #27ae60, #229954);">
        🤖 Systemets Tips
    </button>
    
    <!-- Orange gradient för teknisk dokumentation -->
    <button class="tab-button" 
            onclick="window.location.href='FireBase.html'" 
            style="background: linear-gradient(135deg, #e67e22, #d35400);">
        🔥 Firebase Guide
    </button>
</div>
```

**Alt B: Som länk i innehållet** (om ingen flik-struktur finns):
```html
<p style="margin-top: 1rem;">
    <a href="andra_filen.html" 
       style="color: white; background: #667eea; padding: 0.7rem 1.5rem; 
              border-radius: 8px; text-decoration: none; display: inline-block;
              transition: all 0.3s ease;">
        → Gå till Analys
    </a>
</p>
```

#### 2️⃣ Från annan HTML-fil tillbaka till index.html

**⚠️ VIKTIGT: FRÅGA ALLTID ANVÄNDAREN om länken ska vara i HEADER eller FOOTER!**

**Fråga användaren:** "Ska 'Tillbaka till huvudsystemet'-länken vara i **header** eller **footer**?"

**Vägledning för när du ska föreslå vad:**
- **Header (snabb access)**: För sidor där användaren kan vilja hoppa tillbaka snabbt (t.ex. korta tips, FAQ, snabbreferenser)
- **Footer (efter läsning)**: För sidor med långt innehåll där användaren läser igenom först (t.ex. långa guider, omfattande dokumentation, tutorials)

---

**Variant A: I HEADER-sektionen:**
```html
<header>
    <h1>Titel på sidan</h1>
    <p>Beskrivning</p>
    <p style="margin-top: 1rem;">
        <!-- Tillbaka-länk FÖRST -->
        <a href="index.html" 
           style="color: white; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; 
                  border-radius: 5px; text-decoration: none; display: inline-block; margin-right: 0.5rem;">
            ← Tillbaka till huvudsystemet
        </a>
        <!-- Eventuellt andra länkar (GitHub, etc.) -->
        <a href="https://github.com/kentlundgren/AI" target="_blank" 
           style="color: white; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; 
                  border-radius: 5px; text-decoration: none; display: inline-block;">
            💻 GitHub
        </a>
    </p>
</header>
```

**Variant B: I FOOTER-sektionen (framträdande knapp):**
```html
<footer>
    <!-- Framträdande tillbaka-länk -->
    <div style="text-align: center; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.2);">
        <a href="index.html" 
           style="color: white; background: rgba(255,255,255,0.3); padding: 0.8rem 2rem; 
                  border-radius: 8px; text-decoration: none; display: inline-block;
                  font-size: 1.1em; font-weight: 600; transition: all 0.3s ease;">
            ← Tillbaka till huvudsystemet
        </a>
    </div>
    
    <!-- Övrig navigation -->
    <h3 style="margin-top: 25px;">🔗 Projektnavigation</h3>
    <div style="margin-top: 15px;">
        <!-- Övriga projektlänkar -->
    </div>
</footer>
```

**Variant C: I innehåll/enkel text-länk (minst framträdande):**
```html
<p style="text-align: center; margin-top: 2rem;">
    <a href="index.html" style="color: #667eea; text-decoration: none; font-size: 1.1em;">
        ← Tillbaka till huvudsystemet
    </a>
</p>
```

### Färgkodning för olika typer av sidor

| Typ av innehåll | Färg | Gradient | Användning |
|-----------------|------|----------|------------|
| **Systemets strategier/tips** | 🟢 Grön | `#27ae60` → `#229954` | AI-genererade analyser, tips, strategier |
| **Teknisk dokumentation** | 🟠 Orange | `#e67e22` → `#d35400` | Firebase, API-guider, tekniska manualer |
| **Användardokumentation** | 🔵 Blå | `#3498db` → `#2980b9` | Instruktioner, FAQ, hjälpsidor |
| **Standardfunktion** | 🟣 Lila | `#667eea` → `#764ba2` | Vanliga tabs, ingen speciell kategori |

### Exempel från DagensDubbel

**index.html har länkar till:**
- `systemets_tips.html` - 🟢 Grön flik (AI-strategi)
- `FireBase.html` - 🟠 Orange flik (Teknisk guide)

**Tillbaka-länkar (efter diskussion med Kent):**
- `systemets_tips.html` → Enkel text-länk i **innehåll** (kort sida, användaren vill hoppa snabbt)
- `FireBase.html` → Framträdande knapp i **footer** (lång teknisk guide, läs-först-navigera-sedan)

### Checklista när du lägger till ny HTML-fil

```markdown
□ 1. Skapa HTML-filen (t.ex. `ny_fil.html`)
□ 2. I index.html: Lägg till tab-knapp med passande färg
□ 3. ⚠️ FRÅGA ANVÄNDAREN: "Ska 'Tillbaka till huvudsystemet'-länken vara i header eller footer?"
□ 4. I ny_fil.html: Lägg till "← Tillbaka till huvudsystemet" enligt användarens val
□ 5. Testa båda navigationsriktningarna
□ 6. Uppdatera projektets CLAUDE.md med ny länk och var den är placerad
□ 7. Commit med beskrivande meddelande (t.ex. "Lagt till Firebase-guide med korsnavigering i footer")
```

### Varför detta är viktigt

✅ **Användarvänlighet**: Intuitivt att navigera mellan vyer  
✅ **Proffsig känsla**: Moderna webbappar har alltid navigation  
✅ **Minskar förvirring**: Användare fastnar inte på en sida  
✅ **Dokumenterar struktur**: Länkar visar hur projektet hänger ihop  
✅ **SEO och tillgänglighet**: Sökrobotar och skärmläsare kan indexera bättre  
✅ **Underhållbarhet**: Lätt att se alla filer som hör ihop  

### Vanliga misstag att undvika

❌ **Glömmer tillbaka-länk** - Användare blir strandsatta på undersida  
❌ **Ingen färgkodning** - Svårt att skilja olika typer av innehåll  
❌ **Väljer själv header/footer utan att fråga** - Användaren har preferenser baserat på innehållstyp  
❌ **Använder `target="_blank"` för interna länkar** - Öppnar onödiga tabs  
❌ **Glömmer uppdatera CLAUDE.md** - Framtida Claude-sessioner vet inte om länkarna  
❌ **Footer-länk är för liten/svår att hitta** - Om footer, använd framträdande knapp-stil  

### Mall för ny HTML-fil

```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ny Sida - Dagens Dubbel</title>
    <style>
        /* Grundläggande styling */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Titel på sidan</h1>
            <p>Beskrivning</p>
            <!-- VIKTIGT: Tillbaka-länk -->
            <p style="margin-top: 1rem;">
                <a href="index.html" 
                   style="color: white; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; 
                          border-radius: 5px; text-decoration: none; display: inline-block;">
                    ← Tillbaka till huvudsystemet
                </a>
            </p>
        </header>
        
        <div style="padding: 40px;">
            <!-- Innehåll här -->
        </div>
    </div>
</body>
</html>
```

---

## 🎨 UI-Feedback: Färgkodning av Input-fält

**Implementerat i:** [DagensDubbel](https://github.com/kentlundgren/AI/tree/main/DagensDubbel) (2026-02-07)

### Syfte

Tydlig visuell feedback för att visa användaren vilka fält som ska fyllas i, vilka som är automatiska, och vilka som är sparade.

### Färgschema

| Status | Färg | Bakgrund | Användning |
|--------|------|----------|------------|
| **Ska fyllas i** | 🟡 GUL | `#fffacd` | Tomma/redigerbara fält som användaren ska fylla i |
| **Automatisk** | ⚪ LJUSGRÅ | `#f8f9fa` | Fält som beräknas automatiskt (t.ex. insats) |
| **Sparad** | ⬜ MÖRKGRÅ | `#e9ecef` | Fält med sparad data |

### CSS-implementation

```css
/* Standard: Alla input-fält börjar gula */
input[type="text"],
input[type="number"],
input[type="date"],
textarea {
    background-color: #fffacd;  /* Ljusgul */
    transition: all 0.3s ease;
}

/* Automatiskt beräknade fält (t.ex. insats) */
input[id$="-bet"] {
    background-color: #f8f9fa;  /* Ljusgrå */
    font-weight: 600;
    color: #667eea;  /* Blå text */
    cursor: not-allowed;
}

/* Sparade fält blir mörkgrå */
input.saved,
textarea.saved {
    background-color: #e9ecef;  /* Mörkgrå */
}
```

### JavaScript-funktioner

#### Markera fält som sparade

```javascript
/**
 * Markerar alla input-fält som "saved" efter sparande
 * Anropas automatiskt i saveData() efter lyckad sparning
 */
function markFieldsAsSaved() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
        input.classList.add('saved');
    });
}
```

#### Återställ vid redigering

```javascript
/**
 * Tar bort "saved" class när användaren börjar redigera
 */
function setupFieldColorReset() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('saved');
        });
    });
}
```

### Användarflöde

1. **Initial laddning:** Manuella fält = 🟡 GUL, Automatiska fält = ⚪ LJUSGRÅ
2. **Efter sparande:** Manuella fält → ⬜ MÖRKGRÅ, Automatiska fält → ⚪ LJUSGRÅ (oförändrade)
3. **Vid redigering:** Klicka i grått fält → blir 🟡 GUL igen

### Integration

```javascript
// I saveData()-funktionen
function saveData() {
    // ... spara-logik ...
    markFieldsAsSaved();  // Markera som sparad
}

// I window.onload
window.onload = function() {
    setupFieldColorReset();  // Aktivera återställning vid redigering
    // ... övrig initialisering ...
};
```

---

## 🧮 Automatisk Beräkning av Fält

**Implementerat i:** [DagensDubbel](https://github.com/kentlundgren/AI/tree/main/DagensDubbel) (2026-02-07)

### Syfte

Automatisera beräkningar som användaren annars skulle behöva göra manuellt, vilket förbättrar UX och minskar felkällor.

### Exempel: Automatisk insatsberäkning

**Formel:** `Insats = antal_val_lopp1 × antal_val_lopp2 × 5 kr`

### Implementation

#### 1. Räkna antal val

```javascript
/**
 * Räknar antal kommaseparerade värden
 * @param {string} str - T.ex. "2,5,6" ger 3
 */
function countValues(str) {
    if (!str || str.trim() === '') return 0;
    return str.split(',').filter(s => s.trim() !== '').length;
}
```

#### 2. Beräkna automatiskt

```javascript
/**
 * Beräknar och uppdaterar automatiskt beräknade fält
 * @param {string} entityId - T.ex. "player1", "player2"
 */
function calculateValue(entityId) {
    const input1 = document.getElementById(`${entityId}-input1`);
    const input2 = document.getElementById(`${entityId}-input2`);
    const resultField = document.getElementById(`${entityId}-result`);
    
    const count1 = countValues(input1.value);
    const count2 = countValues(input2.value);
    
    resultField.value = count1 * count2 * 5;
}
```

#### 3. Event listeners

```javascript
/**
 * Lyssnar på input-events och beräknar automatiskt
 */
function setupAutoCalculation() {
    const entities = ['player1', 'player2', 'player3'];
    
    entities.forEach(entityId => {
        const input1 = document.getElementById(`${entityId}-input1`);
        const input2 = document.getElementById(`${entityId}-input2`);
        
        input1.addEventListener('input', () => calculateValue(entityId));
        input2.addEventListener('input', () => calculateValue(entityId));
        
        // Beräkna direkt vid laddning om värden finns
        if (input1.value && input2.value) {
            calculateValue(entityId);
        }
    });
}
```

### HTML: Readonly-fält

Automatiskt beräknade fält ska vara `readonly`:

```html
<input type="number" id="player1-result" readonly>
```

### Integration

```javascript
window.onload = function() {
    setupAutoCalculation();  // Aktivera automatiska beräkningar
    // ... övrig initialisering ...
};
```

---

## 🔥 Firebase Backend-integration

**Implementerat i:** [DagensDubbel](https://github.com/kentlundgren/AI/tree/main/DagensDubbel) (2026-02-07)

### När ska Firebase användas?

Firebase är perfekt när:
- ✅ **Multi-användare:** Data ska delas mellan flera personer
- ✅ **Multi-enhet:** Synka data mellan desktop, mobil, tablet
- ✅ **Realtidsuppdateringar:** Se andras ändringar direkt
- ✅ **Cloud backup:** Automatisk backup i molnet

### Kent's Firebase-mönster

Kent har framgångsrikt använt två olika Firebase-mönster:

| Mönster | SDK | Databas | Komplexitet | Projekt |
|---------|-----|---------|-------------|---------|
| **A** | v10.7.0 Compat | Firestore | ⭐ Enklast | DagensDubbel, Bjerred-skylt |
| **B** | v11.0.0 Modular | Realtime DB | ⭐⭐ Mer komplex | Quiz-projekt |

**Mönster A (Compat + Firestore)** rekommenderas för de flesta projekt:
- ✅ Enklare setup (ingen CSP krävs)
- ✅ `<script src>` imports (inga modules)
- ✅ Firestore = bättre för komplexa queries

### Setup: Skapa Firebase-projekt

1. **Gå till** [Firebase Console](https://console.firebase.google.com/)
2. **Klicka** "Create a new Firebase project" eller "Add project"
3. **Namnge** projektet (t.ex. "dagens-dubbel")
4. **Välj** om Google Analytics ska användas (valfritt)
5. **Klicka** "Create project"
6. **Vänta** tills projektet skapas
7. **Klicka** "Continue" när klar

### Setup: Registrera webbapp

1. **I projektöversikten**, klicka på **"+ Add app"** (högst upp)
   - ⚠️ **VIKTIGT:** Klicka INTE på "Tell us about your app" (Gemini AI-förslag)
2. **Välj** `</>` (Web)
3. **Ge appen ett namn** (t.ex. "Dagens Dubbel Web")
4. **Klicka** "Register app"
5. **Kopiera** `firebaseConfig`-objektet som visas
6. **Klicka** "Continue to console"

### Setup: Aktivera databas

**För Mönster A (Firestore):**
1. **I menyn**, gå till **Build → Firestore Database**
2. **Klicka** "Create Database"
3. **Välj region:** `europe-west1` (för Europa)
4. **Säkerhetsregler:**
   - **PRODUCTION MODE** väljs automatiskt (säkrast)
   - Uppdatera reglerna direkt efter skapande till:

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

5. **Klicka** "Create"

**⚠️ VIKTIGT:** Byt till säkrare regler innan publicering:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /yourCollectionName/{document=**} {
      allow read: if true;  // Alla kan läsa
      allow write: if request.auth != null;  // Endast inloggade kan skriva
    }
  }
}
```

### Implementering: Mönster A (Compat + Firestore)

#### 1. Lägg till Firebase SDK

I `<head>` efter `<title>`:

```html
<!-- Firebase App (grundläggande) -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>

<!-- Firebase Firestore -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>

<!-- Firebase initialisering -->
<script>
    const firebaseConfig = {
        apiKey: "DIN-API-KEY",
        authDomain: "ditt-projekt.firebaseapp.com",
        projectId: "ditt-projekt",
        storageBucket: "ditt-projekt.firebasestorage.app",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abc123",
        measurementId: "G-ABC123"
    };
    
    // Initiera Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Gör Firestore tillgänglig globalt
    const db = firebase.firestore();
    
    console.log("✅ Firebase initierad!");
</script>
```

#### 2. Spara data till Firestore

```javascript
function saveToFirestore(data) {
    try {
        db.collection('yourCollection')
            .doc('yourDocument')
            .collection('items')
            .add({
                ...data,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((docRef) => {
                console.log('✅ Sparad till Firestore:', docRef.id);
            })
            .catch((error) => {
                console.error('❌ Firestore-fel:', error);
            });
    } catch (error) {
        console.error('❌ Firebase-exception:', error);
    }
}
```

#### 3. Ladda data från Firestore (realtid)

```javascript
function loadFromFirestore() {
    try {
        db.collection('yourCollection')
            .doc('yourDocument')
            .collection('items')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                console.log('📥 Firestore-uppdatering mottagen');
                
                const items = [];
                snapshot.forEach((doc) => {
                    items.push({
                        firestoreId: doc.id,
                        ...doc.data()
                    });
                });
                
                // Uppdatera localStorage och UI
                localStorage.setItem('yourData', JSON.stringify(items));
                updateUI(items);
                
            }, (error) => {
                console.error('❌ Fel vid läsning:', error);
            });
    } catch (error) {
        console.error('❌ Firebase-exception:', error);
    }
}
```

### Hybrid-strategi: localStorage + Firebase

**Rekommenderad approach:**

1. **Spara:** localStorage först (snabbt), sedan Firebase (cloud backup)
2. **Ladda:** localStorage vid startup (snabbt), sedan lyssna på Firebase (realtid)
3. **Synk:** När Firebase får nya data → uppdatera localStorage och UI

**Fördelar:**
- ✅ Snabb initial laddning
- ✅ Realtidssynk mellan användare
- ✅ Fungerar offline (localStorage fallback)
- ✅ Automatisk cloud backup

### Integration

```javascript
// I saveData()-funktionen
function saveData() {
    // Spara först till localStorage (snabbt)
    localStorage.setItem('yourData', JSON.stringify(data));
    
    // Sedan till Firebase (cloud backup)
    saveToFirestore(data);
    
    updateUI();
    markFieldsAsSaved();
}

// I window.onload
window.onload = function() {
    // Ladda från localStorage först (snabbt)
    loadFromLocalStorage();
    
    // Lyssna på Firebase för realtidsuppdateringar
    loadFromFirestore();
    
    // ... övrig initialisering ...
};
```

### Se också

- **FireBase.html** - Komplett guide med detaljerade setup-instruktioner
- **Firebase Documentation:** https://firebase.google.com/docs
- **Exempel:** [DagensDubbel/.claude/agents/BackEnd.md](https://github.com/kentlundgren/AI/tree/main/DagensDubbel/.claude/agents/BackEnd.md)

---

## 🔗 Resurser

### Officiell Dokumentation
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Claude Code Settings](https://code.claude.com/docs/en/settings)
- [Sub-agents Guide](https://code.claude.com/docs/en/sub-agents)

### Detta Repository
- [AI Repository på GitHub](https://github.com/kentlundgren/AI/)
- [ClaudeCode1 Projekt](https://github.com/kentlundgren/AI/tree/main/ClaudeCode1) - Referensexempel

---

## 💡 Tips för Framgång

1. **Börja enkelt:** Välj minimal agentuppsättning först, lägg till vid behov
2. **Iterera:** Förbättra agenter baserat på output-kvalitet
3. **Dokumentera tidigt:** Skapa README/index.html när struktur är klar
4. **Använd footers:** Gör navigation lätt för användare
5. **Följ konventioner:** Konsistens över projekt underlättar underhåll

---

*Denna fil skapades för att standardisera AI-projekt i `/AI/` repository och följer Anthropics Claude Code best practices. Den kommer att döpas om till `CLAUDE.md` för att aktiveras som projektkoordinator.*

**Senast uppdaterad:** 25 januari 2026
**Version:** 1.0
**Skapad med:** Claude Sonnet 4.5
