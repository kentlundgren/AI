# Bokslutsanalys med Claude Code Subagents

> Demonstration av hur specialiserade AI-agenter kan analysera och förbättra ett kommunalt årsbokslut

**[Se live-demo](https://kentlundgren.github.io/AI/Bokslut_2025/index.html)**

---

## Projektöversikt

Detta projekt visar hur **Claude Code subagents** kan användas för att dela upp en komplex analysuppgift i specialiserade delar. Två agenter med olika kompetenser analyserar samma dokument från olika perspektiv.

**Källdokument:** Simrishamns kommuns Kultur- och fritidsnämnds årsbokslut 2025 (36 sidor)

---

## Agentarkitektur

### Principen: Specialisering genom uppdelning

Istället för att låta en enda AI hantera all analys, skapas **specialiserade agenter** som var och en är expert på sitt område:

```
┌─────────────────────────────────────────────────────────┐
│                    CLAUDE.md                            │
│              (Projektkoordinator)                       │
│                                                         │
│  Definierar projekt, arbetsflöde och hur agenter       │
│  ska anropas och samverka                              │
└─────────────────────┬───────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
┌───────────────────┐     ┌───────────────────┐
│  Siffergranskare  │     │  Språkgranskare   │
│                   │     │                   │
│  - Kontrollräknar │     │  - Stavning       │
│  - Verifierar     │     │  - Grammatik      │
│    summor         │     │  - Klarspråk      │
│  - Hittar         │     │  - Meningsbyggnad │
│    avvikelser     │     │  - Konsistens     │
└───────────────────┘     └───────────────────┘
        │                           │
        ▼                           ▼
┌───────────────────┐     ┌───────────────────┐
│ Sifferrapport.md  │     │ Språkrapport.md   │
└───────────────────┘     └───────────────────┘
```

### Fördelar med denna arkitektur

| Fördel | Beskrivning |
|--------|-------------|
| **Specialisering** | Varje agent har djup kunskap inom sitt område |
| **Parallellisering** | Agenterna kan köras samtidigt |
| **Modularitet** | Lätt att lägga till fler agenter |
| **Tydlighet** | Klart definierade ansvarsområden |
| **Återanvändbarhet** | Agenterna kan användas i andra projekt |

---

## De två agenterna

### 1. Siffergranskare (`siffergranskare.md`)

**Syfte:** Kontrollera att alla siffror i ekonomiska tabeller är korrekta.

**Kompetenser:**
- Summerar kolumner och rader
- Verifierar att delsummor adderas till totaler
- Kontrollerar budgetavvikelser (Budget - Utfall)
- Identifierar enhetsfel (tkr vs mnkr)
- Hittar avrundningsproblem

**Exempelresultat:**
- Hittade att investeringsbudgeten saknar **3,377 mnkr**
- Identifierade 5 mindre avrundningsfel
- Noterade diskrepans mellan två tabeller (30 tkr)

### 2. Språkgranskare (`sprakgranskare.md`)

**Syfte:** Förbättra textens språkliga kvalitet enligt myndighetsspråkliga riktlinjer.

**Kompetenser:**
- Stavning och grammatik
- Interpunktion
- Meningsbyggnad (flaggar meningar över 35 ord)
- Klarspråk (förenklar krångelord)
- Konsistens (samma term används lika)

**Exempelresultat:**
- Hittade stavfel i rubrik: "VERKSAMHETSUPPFOLJNNG"
- Identifierade 15 meningar som bör kortas
- Föreslog 18 klarspråksförbättringar
- Noterade inkonsekvent stavning av "Bénka-dí"

---

## Så skapar du egna agenter

### Steg 1: Skapa agentfil

Placera en `.md`-fil i `.claude/agents/`:

```markdown
---
name: agentnamn
description: Kort beskrivning av agentens uppgift
tools: Read, Grep, Glob
model: sonnet
---

# Agentens Roll

Du är en specialist på [område]. Din uppgift är att...

## Dina Kompetenser
- Punkt 1
- Punkt 2

## Rapportformat
Producera en rapport med följande struktur:
...
```

### Steg 2: Definiera i CLAUDE.md

Dokumentera agenten i projektets `CLAUDE.md`:

```markdown
### Agentnamn (`agentnamn`)
Beskrivning av vad agenten gör.

**Anropa med:**
Använd agentnamn-agenten för att [uppgift]
```

### Steg 3: Anropa agenten

I Claude Code, skriv:
```
Använd [agentnamn]-agenten för att analysera [dokument/uppgift]
```

---

## Resultat från detta projekt

### Sifferanalys

| Typ | Antal | Allvarlighet |
|-----|-------|--------------|
| Allvarliga räknefel | 2 | Kritisk |
| Mindre räknefel | 5 | Låg |
| Diskrepanser mellan tabeller | 2 | Medel |

**Viktigaste fyndet:** Investeringsbudgeten för pågående projekt saknar 3,377 mnkr i de enskilda raderna.

### Språkanalys

| Kategori | Antal |
|----------|-------|
| Stavning/grammatik | 8 |
| Interpunktion | 12 |
| Långa meningar | 15 |
| Klarspråk | 18 |
| Konsistens | 6 |
| **Totalt** | **59** |

**Viktigaste fyndet:** Stavfel i rubrik och saknad punkt som gör en mening obegriplig.

---

## Projektstruktur

```
Bokslut_2025/
├── .claude/
│   └── agents/
│       ├── siffergranskare.md    # Agent: Tabellanalys
│       └── sprakgranskare.md     # Agent: Språkgranskning
├── Bokslut_2025.pdf              # Källdokument
├── CLAUDE.md                     # Projektkoordinator
├── README.md                     # Denna fil
├── index.html                    # Webbpresentation
├── rapport-sifferanalys.md       # Output: Sifferrapport
└── rapport-sprakanalys.md        # Output: Språkrapport
```

---

## Användning

### Kör siffergranskaren
```
Använd siffergranskare-agenten för att kontrollera tabellerna i Bokslut_2025.pdf
```

### Kör språkgranskaren
```
Använd språkgranskare-agenten för att granska texten i Bokslut_2025.pdf
```

### Kör båda parallellt
```
Kör båda agenterna parallellt och sammanställ resultaten
```

---

## Lärdomar

### Vad fungerade bra
- **Parallell körning** - Båda agenterna kördes samtidigt
- **Tydliga instruktioner** - Detaljerade agentfiler gav konsekvent output
- **Strukturerade rapporter** - Mallar i agentfilerna gav jämförbara resultat

### Möjliga förbättringar
- Lägga till en **jämförelseagent** som kontrollerar mot tidigare års bokslut
- Skapa en **sammanställningsagent** som kombinerar rapporterna
- Automatisera körning med **hooks** eller **skills**

---

## Länkar

- **[Live-demo (index.html)](https://kentlundgren.github.io/AI/Bokslut_2025/index.html)**
- [GitHub Repository](https://github.com/kentlundgren/AI/tree/main/Bokslut_2025)
- [Claude Code dokumentation](https://docs.anthropic.com/claude-code)

---

## Teknisk information

| Parameter | Värde |
|-----------|-------|
| Agentmodell | Claude Sonnet |
| Verktyg | Read, Grep, Glob |
| Källdokument | PDF (36 sidor) |
| Körning | Parallell |

---

**Skapad med Claude Code permanenta agenter**

Datum: 2026-02-01
