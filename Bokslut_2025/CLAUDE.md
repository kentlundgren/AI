# Bokslut 2025 - Analysverktyg med Claude Code Subagents

> **Syfte:** Analysera och förbättra årsbokslut med hjälp av specialiserade AI-agenter

## Projektöversikt

Detta projekt demonstrerar hur Claude Code subagents kan användas för att analysera ett kommunalt årsbokslut. Två specialiserade agenter arbetar tillsammans för att:

1. **Kontrollera siffror och tabeller** - verifiera att summor stämmer, hitta eventuella räknefel
2. **Granska svenska språket** - korrekturläsning, klarspråk och förbättrad läsbarhet

**Källdokument:** `Bokslut_2025.pdf` - Simrishamns kommuns Kultur- och fritidsnämnds årsbokslut 2025

---

## Tillgängliga Agenter

### 1. Siffergranskare (`siffergranskare`)
Specialiserad på att läsa, tolka och kontrollera ekonomiska tabeller.

**Anropa med:**
```
Använd siffergranskare-agenten för att kontrollera tabellerna i bokslutet
```

**Kompetenser:**
- Kontrollräkning av summor i tabeller
- Identifiering av avvikelser mellan budget och utfall
- Verifiering av att delsummor adderas korrekt till totaler
- Rapportering av eventuella räknefel eller inkonsekvenser

### 2. Språkgranskare (`sprakgranskare`)
Specialiserad på svenska språket och offentlig kommunikation.

**Anropa med:**
```
Använd språkgranskare-agenten för att granska texten i bokslutet
```

**Kompetenser:**
- Stavning och grammatik
- Meningsbyggnad och läsbarhet
- Klarspråk enligt myndighetsspråkliga riktlinjer
- Konsekvens i terminologi och stil

---

## Arbetsflöde

### Steg 1: Sifferanalys
Be siffergranskare-agenten analysera de ekonomiska tabellerna:
- Driftredovisning (sid 20, 32)
- Investeringsredovisning (sid 20-21)
- Bidragstabeller (sid 32-33)
- Statistiktabeller (sid 33-35)

### Steg 2: Språkgranskning
Be språkgranskare-agenten granska verksamhetstexterna:
- Verksamhetsberättelse (sid 3-19)
- Måluppföljning (sid 24-31)
- Framtidssektionen (sid 15-16)

### Steg 3: Sammanställning
Kombinera rapporterna från båda agenterna till en samlad analysrapport.

---

## Projektstruktur

```
Bokslut_2025/
├── .claude/
│   └── agents/
│       ├── siffergranskare.md    # Agent för tabellanalys
│       └── sprakgranskare.md     # Agent för språkgranskning
├── CLAUDE.md                      # Denna fil - projektkoordinator
├── Bokslut_2025.pdf              # Källdokument att analysera
└── [analysrapporter]              # Genererade rapporter (skapas vid körning)
```

---

## Exempelkommandon

**Kör fullständig analys:**
```
Analysera bokslutet med båda agenterna och sammanställ en rapport
```

**Endast sifferkontroll:**
```
Kontrollera att alla summor i ekonomitabellerna stämmer
```

**Endast språkgranskning:**
```
Granska språket i verksamhetsberättelsen och föreslå förbättringar
```

---

## Teknisk Information

**Agentmodell:** Sonnet (balans mellan hastighet och kvalitet)

**Tillgängliga verktyg för agenterna:**
- `Read` - Läsa filer
- `Grep` - Söka i text
- `Glob` - Hitta filer

---

## Tips för Användning

1. **Börja med sifferanalysen** - Den ger snabb feedback på eventuella fel
2. **Var specifik** - Ange vilka sidor eller avsnitt du vill analysera
3. **Iterera** - Kör gärna agenterna flera gånger med olika fokus
4. **Kombinera resultat** - Båda agenternas output kompletterar varandra

---

**Skapad:** 2026-02-01
**Version:** 1.0
**Skapad med:** Claude Code subagents
