# Skype Historia - Claude Code Agent-projekt

> **Dubbelt syfte:** Detta projekt dokumenterar Skypes historia OCH demonstrerar hur man arbetar med permanenta agenter i Claude Code.

---

## 📚 Om Projektet

Detta är ett exempelprojekt som visar hur man kan strukturera och använda **Claude Code permanenta agenter** för att genomföra research, analys och innehållsproduktion.

**Ämne:** Historisk analys av Skype - från skapande till nedläggning, med fokus på grundarna Niklas Zennström, Janus Friis och det estniska utvecklarteamet.

**Målgrupp:** Allmänheten (populärvetenskaplig stil på svenska)

---

## 🏗️ Hierarkin: Övergripande och Lokal CLAUDE.md

### Hur det fungerar

Claude Code läser automatiskt `CLAUDE.md`-filer vid konversationsstart. Genom att använda en **hierarkisk struktur** kan man:

1. **Standardisera** agenthantering över flera projekt
2. **Återanvända** best practices och mallar
3. **Anpassa** varje projekt med lokal konfiguration

```
AI/                           ← Repository root
├── CLAUDE.md                 ← 🌐 ÖVERGRIPANDE koordinator
├── ClaudeCode1/              ← Annat projekt
│   └── CLAUDE.md             ← Lokal konfiguration
└── Skype/                    ← Detta projekt
    └── CLAUDE.md             ← 📍 LOKAL koordinator
```

### Övergripande CLAUDE.md

📄 **[AI/CLAUDE.md](https://github.com/kentlundgren/AI/blob/main/CLAUDE.md)**

Den övergripande filen fungerar som en **projektkoordinator** för hela `/AI/`-repositoryt. Den innehåller:

| Innehåll | Beskrivning |
|----------|-------------|
| **Best practices** | Anthropics rekommendationer för CLAUDE.md-filer |
| **Agent-systematik** | Namnkonventioner, filformat, roller |
| **Projektmallar** | Fördefinierade agentuppsättningar för olika projekttyper |
| **Workflow** | Steg-för-steg för att starta nya projekt |
| **Standarder** | README.md, index.html, footer-navigation |

**Nyckelprinciper från övergripande CLAUDE.md:**
- Använd **beskrivande agentnamn** (inte `agent1.md`, utan `researcher.md`)
- Placera agenter i `.claude/agents/`
- Följ YAML frontmatter-formatet
- Inkludera footer-navigation i alla filer

### Lokal CLAUDE.md

📄 **[Skype/CLAUDE.md](https://github.com/kentlundgren/AI/blob/main/Skype/CLAUDE.md)**

Den lokala filen anpassar den övergripande strukturen för **detta specifika projekt**:

| Innehåll | Beskrivning |
|----------|-------------|
| **Projektmål** | Specifikt för Skype-analysen |
| **Agentroller** | De 4 agenter som används här |
| **Arbetsflöde** | Research → Syntes → Produktion |
| **Nyckelområden** | Grundare, årtal, teknisk innovation |
| **Källor** | Rekommenderade källor för Skype-research |

---

## 🤖 Agenter i Detta Projekt

Projektet använder **4 specialiserade agenter** som samarbetar:

```
.claude/agents/
├── founder-researcher.md    🔍 Grundarforskare
├── tech-historian.md        📜 Teknikhistoriker
├── quote-collector.md       💬 Citatsamlare
└── storyteller.md           ✍️ Berättare
```

### Agentöversikt

| Agent | Roll | Input | Output |
|-------|------|-------|--------|
| **founder-researcher** | Samlar biografisk info om Zennström, Friis, estniska teamet | Webb-källor | Strukturerade personprofiler |
| **tech-historian** | Kartlägger teknisk utveckling och milstolpar | Teknisk dokumentation | Tidslinje, förklaringar |
| **quote-collector** | Hittar och verifierar citat från grundarna | Intervjuer, tal | Citatsamling med källor |
| **storyteller** | Skriver slutprodukten | Material från övriga agenter | HTML-sida |

### Arbetsflöde

```
┌─────────────────────────────────────────────────────────┐
│                    FAS 1: RESEARCH                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │   founder-   │  │    tech-     │  │    quote-    │   │
│  │  researcher  │  │  historian   │  │  collector   │   │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘   │
│         │                 │                 │           │
│         └────────────┬────┴────────────────┘           │
│                      ▼                                   │
├─────────────────────────────────────────────────────────┤
│                    FAS 2: PRODUKTION                     │
│                  ┌──────────────┐                        │
│                  │  storyteller │                        │
│                  └──────┬───────┘                        │
│                         ▼                                │
│                   index.html                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Så Använder Du Agenterna

### Metod 1: Via Claude Code CLI

```bash
# Starta Claude Code i projektmappen
cd AI/Skype
claude

# Be Claude använda en specifik agent
> "Använd founder-researcher för att samla information om Niklas Zennström"
```

### Metod 2: Direktreferens

```bash
# I Claude Code-konversation
> "Kör tech-historian för att skapa en tidslinje över Skypes milstolpar"
> "Låt quote-collector hitta citat från Janus Friis om Skypes vision"
```

### Metod 3: Koordinerad körning

```bash
# Kör flera agenter i sekvens
> "Först: founder-researcher samlar grundarinfo
   Sedan: quote-collector hittar citat
   Sist: storyteller skriver introduktionen till HTML-sidan"
```

---

## 📁 Projektstruktur

```
Skype/
├── .claude/
│   └── agents/
│       ├── founder-researcher.md   # Biografisk research
│       ├── tech-historian.md       # Teknisk historia
│       ├── quote-collector.md      # Citat och källor
│       └── storyteller.md          # HTML-skrivning
├── CLAUDE.md                       # Lokal projektkoordinator
├── README.md                       # ← Du läser denna fil
├── index.html                      # [Kommer] Huvudprodukt
└── sources.md                      # [Kommer] Källförteckning
```

---

## 🔗 Viktiga Länkar

### Projektfiler
- 📄 [Lokal CLAUDE.md](https://github.com/kentlundgren/AI/blob/main/Skype/CLAUDE.md) - Projektspecifik konfiguration
- 📖 [README.md](https://github.com/kentlundgren/AI/blob/main/Skype/README.md) - Denna fil

### Agenter
- 🔍 [founder-researcher.md](https://github.com/kentlundgren/AI/blob/main/Skype/.claude/agents/founder-researcher.md)
- 📜 [tech-historian.md](https://github.com/kentlundgren/AI/blob/main/Skype/.claude/agents/tech-historian.md)
- 💬 [quote-collector.md](https://github.com/kentlundgren/AI/blob/main/Skype/.claude/agents/quote-collector.md)
- ✍️ [storyteller.md](https://github.com/kentlundgren/AI/blob/main/Skype/.claude/agents/storyteller.md)

### Övergripande
- 🌐 [AI/CLAUDE.md](https://github.com/kentlundgren/AI/blob/main/CLAUDE.md) - Övergripande projektkoordinator
- 💻 [AI Repository](https://github.com/kentlundgren/AI) - Hela repositoryt

### Relaterade Projekt
- 📊 [ClaudeCode1](https://github.com/kentlundgren/AI/tree/main/ClaudeCode1) - Danmark-Grönland perspektivanalys

---

## 📖 Lärdomar: Agenthantering i Claude Code

### Varför Hierarkisk CLAUDE.md?

| Problem | Lösning |
|---------|---------|
| Inkonsekvent agentstruktur mellan projekt | Övergripande CLAUDE.md definierar standard |
| Upprepade instruktioner i varje projekt | Mallar och best practices centralt |
| Svårt att komma igång med nya projekt | Workflow och förslag i övergripande fil |
| Ingen dokumentationsstandard | README.md och footer-mallar |

### Best Practices (sammanfattning)

1. **Beskrivande namn** - `researcher.md` inte `agent1.md`
2. **YAML frontmatter** - Definiera name, description, tools, model
3. **Tydliga roller** - Varje agent har ett specifikt ansvarsområde
4. **Koordinerat arbetsflöde** - Agenter bygger på varandras output
5. **Dokumentation** - README.md + index.html för varje projekt

---

## 🚀 Kom Igång

### För att utforska detta projekt:

```bash
git clone https://github.com/kentlundgren/AI.git
cd AI/Skype
```

### För att skapa ett liknande projekt:

1. Läs [övergripande CLAUDE.md](https://github.com/kentlundgren/AI/blob/main/CLAUDE.md)
2. Skapa ny mapp under `/AI/`
3. Beskriv ditt projekt för Claude
4. Välj agentuppsättning
5. Börja arbeta!

---

## 📝 Status

| Fas | Status |
|-----|--------|
| Projektstruktur | ✅ Klar |
| Agenter skapade | ✅ Klar |
| CLAUDE.md (lokal) | ✅ Klar |
| README.md | ✅ Klar |
| Research | ⏳ Ej påbörjad |
| index.html | ⏳ Ej påbörjad |

---

## 🔗 Footer

### 📄 Projektnavigation
- [CLAUDE.md](CLAUDE.md) - Lokal projektkoordinator
- [README.md](README.md) - Denna dokumentation

### 🤖 Agenter
- [founder-researcher.md](.claude/agents/founder-researcher.md)
- [tech-historian.md](.claude/agents/tech-historian.md)
- [quote-collector.md](.claude/agents/quote-collector.md)
- [storyteller.md](.claude/agents/storyteller.md)

### 🌐 Externa Länkar
- [Övergripande CLAUDE.md](https://github.com/kentlundgren/AI/blob/main/CLAUDE.md)
- [GitHub Repository](https://github.com/kentlundgren/AI/tree/main/Skype)

---

**Skapad med Claude Code permanenta agenter**

© 2026 - Exempelprojekt för agenthantering i Claude Code
