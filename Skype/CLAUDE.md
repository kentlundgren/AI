# Skype Historia - Projektkoordinator

> Historisk analys av Skype: från skapande till nedläggning, med fokus på grundarna och deras vision.

## 📚 Projektöversikt

**Projektnamn:** Skype Historia
**Projekttyp:** Historisk teknikanalys
**Målgrupp:** Allmänheten (populärvetenskaplig stil)
**Språk:** Svenska
**Output:** HTML-sida

**GitHub:** https://github.com/kentlundgren/AI/tree/main/Skype

---

## 🎯 Projektmål

Skapa en omfattande och lättillgänglig historisk analys av Skype som IT-produkt:

1. **Skapandet** - Hur och varför Skype skapades
2. **Grundarna** - Niklas Zennström, Janus Friis och de estniska utvecklarna
3. **Drivkrafterna** - Vision, motivation och affärsidé
4. **Utvecklingen** - Teknisk och organisatorisk evolution
5. **Ägarbytena** - Kazaa-bakgrund → eBay → Microsoft
6. **Nedläggningen** - Varför och hur Skype fasades ut

---

## 📋 Innehållskrav

### Obligatoriskt innehåll:
- ✅ Grundarperspektiv (Zennström, Friis, estniska teamet)
- ✅ Intervjucitat och källhänvisningar från grundarna
- ✅ Kronologisk tidslinje
- ✅ Populärvetenskaplig och tillgänglig stil
- ✅ Svenska språket genomgående

### Önskvärt innehåll:
- Bilder/illustrationer (om möjligt)
- Nyckeltal (användare, värdering, milstolpar)
- Reflektion över Skypes arv och påverkan

---

## 🤖 Agenter

Projektet använder följande specialiserade agenter i `.claude/agents/`:

| Agent | Roll | Fokus |
|-------|------|-------|
| `founder-researcher.md` | Grundarforskare | Zennström, Friis, estniska teamet |
| `tech-historian.md` | Teknikhistoriker | P2P-teknologi, produktutveckling |
| `quote-collector.md` | Citatsamlare | Intervjuer, uttalanden, källor |
| `storyteller.md` | Berättare | Populärvetenskaplig skrivning |

---

## 📁 Projektstruktur

```
Skype/
├── .claude/
│   └── agents/
│       ├── founder-researcher.md
│       ├── tech-historian.md
│       ├── quote-collector.md
│       └── storyteller.md
├── CLAUDE.md              ← Du är här
├── README.md              # Teknisk dokumentation
├── index.html             # Huvudprodukt - historisk analys
└── sources.md             # Källförteckning
```

---

## 🔄 Arbetsflöde

### Fas 1: Research
1. `founder-researcher` samlar information om grundarna
2. `tech-historian` kartlägger teknisk utveckling och milstolpar
3. `quote-collector` hittar intervjucitat och primärkällor

### Fas 2: Syntes
1. Sammanställ kronologisk tidslinje
2. Identifiera nyckelhändelser och vändpunkter
3. Verifiera fakta och citat

### Fas 3: Produktion
1. `storyteller` skriver HTML-sidan
2. Skapa visuell tidslinje
3. Lägg till citat och källor

### Fas 4: Kvalitetskontroll
1. Faktagranskning
2. Språkgranskning
3. Responsiv design-test

---

## 📖 Nyckelområden att Utforska

### Grundarna
- **Niklas Zennström** (svensk) - VD, affärsvision
- **Janus Friis** (dansk) - Produktvision
- **Ahti Heinla, Priit Kasesalu, Jaan Tallinn** (estländare) - Teknisk utveckling

### Viktiga årtal
- **2003** - Skype grundas
- **2005** - eBay köper Skype ($2.6 miljarder)
- **2009** - Silver Lake-konsortiet köper majoritet
- **2011** - Microsoft köper Skype ($8.5 miljarder)
- **2021** - Skype for Business fasas ut
- **2025** - Skype läggs ner (maj 2025)

### Teknisk innovation
- P2P-arkitektur (peer-to-peer)
- Röst över IP (VoIP)
- Kryptering och säkerhet
- Plattformsoberoende

---

## 🌐 Källor att Använda

### Primärkällor
- Intervjuer med Zennström och Friis
- Pressmeddelanden från Skype/Microsoft
- Tekniska blogginlägg från utvecklarna

### Sekundärkällor
- Teknikjournalistik (Wired, TechCrunch, etc.)
- Affärstidningar (Forbes, Bloomberg)
- Akademiska analyser av VoIP-marknaden

---

## ⚙️ Kommandon

```bash
# Starta research
"Använd founder-researcher för att samla info om Niklas Zennström"

# Samla citat
"Använd quote-collector för att hitta intervjucitat från grundarna"

# Skriv innehåll
"Använd storyteller för att skriva introduktionen till index.html"
```

---

## 🔗 Relaterade Projekt

- [ClaudeCode1](https://github.com/kentlundgren/AI/tree/main/ClaudeCode1) - Danmark-Grönland analys (referensexempel)

---

**Skapad:** 25 januari 2026
**Version:** 1.0
**Skapad med:** Claude Code permanenta agenter
