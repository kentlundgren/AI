# AI Projects Repository - Övergripande Projektkoordinator

> **VIKTIGT:** Denna fil kommer att döpas om till `CLAUDE.md` och fungerar som den övergripande projektkoordinatorn för alla underprojekt i `/AI/` repository.

## 📚 Repository Översikt

Detta repository innehåller flera AI-projekt som demonstrerar olika användningsområden för Claude Code permanenta agenter, multiperspektivanalys, och AI-assisterad innehållsproduktion.

**GitHub Repository:** https://github.com/kentlundgren/AI/

**Aktiva underprojekt:**
- [ClaudeCode1](https://github.com/kentlundgren/AI/tree/main/ClaudeCode1) - Danmark-Grönland perspektivanalys med permanenta agenter

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

### Undvik:
- ❌ Generiska agentnamn (agent1, agent2, agent3)
- ❌ Glömma footer navigation
- ❌ Hårdkoda känslig information i agenter
- ❌ Skapa för många agenter utan tydlig roll
- ❌ Ignorera README.md och index.html
- ❌ Publicera interaktiva element utan att testa dem först

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
