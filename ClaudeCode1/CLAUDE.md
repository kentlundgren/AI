# Danmark-Grönland Perspektivanalys Projekt

## Projektöversikt

Detta Claude Code-projekt analyserar relationen mellan Danmark och Grönland genom **tre permanenta perspektivagenter** som arbetar tillsammans för att skapa djupgående multiperspektivanalys och simulerade debatter.

**GitHub Repository:** https://github.com/kentlundgren/AI/tree/main/ClaudeCode1

**Live Demo:**
- Översikt: https://kentlundgren.github.io/AI/ClaudeCode1/
- Debatt: https://kentlundgren.github.io/AI/ClaudeCode1/debatt.html
- Rapport: https://kentlundgren.github.io/AI/ClaudeCode1/Danmark_Gronland_Rapport.md

## Permanenta Sub-Agenter

Projektet använder tre specialiserade perspektivagenter i `.claude/agents/`:

### 1. **danish-perspective** (Danskt Perspektiv)
- **Fil:** `.claude/agents/danish-perspective.md`
- **Expertis:** Rigsfællesskabet, bloktilskud, dansk säkerhetspolitik, NATO
- **Kompetenser:** Historisk kontext, politisk analys, kulturell förståelse, geopolitiskt tänkande
- **Användning:** Analyserar från dansk synvinkel med balans mellan historisk ansvarighet och moderna partnerskap

### 2. **greenlandic-perspective** (Grönländskt Perspektiv)
- **Fil:** `.claude/agents/greenlandic-perspective.md`
- **Expertis:** Inuit-kultur, dekolonisering, självbestämmande, Kalaallisut-revitalisering
- **Kompetenser:** Ursprungsfolkkunskap, kulturell identitet, koloniala trauman, ekonomisk komplexitet
- **Användning:** Representerar grönländska röster med fokus på självbestämmande och kulturell återuppbyggnad

### 3. **swedish-perspective** (Svenskt Perspektiv)
- **Fil:** `.claude/agents/swedish-perspective.md`
- **Expertis:** Nordiskt samarbete, jämförande ursprungsfolkspolitik, Arktisk geopolitik, Sápmi-paralleller
- **Kompetenser:** Nordisk komparativ analys, kritisk självreflektion, svensk arktisk strategi
- **Användning:** Extern nordisk synvinkel med kritisk jämförelse mellan Grönland och Sápmi

## Projektstruktur

```
ClaudeCode1/
├── .claude/
│   └── agents/              # Permanenta perspektivagenter
│       ├── danish-perspective.md
│       ├── greenlandic-perspective.md
│       └── swedish-perspective.md
├── CLAUDE.md               # Denna fil - projektkoordinator
├── index.html              # Interaktiv guide till projektet
├── debatt.html             # Simulerad debatt mellan agenterna
├── Danmark_Gronland_Rapport.md   # 25,000-ords analysrapport (Markdown)
├── Danmark_Gronland_Rapport.html # Sammanvägd rapport med Harvard-referenser
├── ClaudeCodeAgenter1.html # Dokumentation av agentprocessen
└── README.md               # Projektöversikt och teknisk förklaring
```

## Arbetsflöden och Kommandon

### Starta Multiperspektivdebatt

**VIKTIGT:** För att skapa en debatt mellan de tre perspektivagenterna, använd följande workflow:

```
Skapa en simulerad debatt om [ÄMNE] mellan de tre perspektiven:
1. Använd danish-perspective för dansk synvinkel
2. Använd greenlandic-perspective för grönländsk synvinkel
3. Använd swedish-perspective för svensk komparativ synvinkel
4. Låt varje perspektiv reagera på de andras argument
5. Formatera debatten i HTML och spara i debatt.html
```

**Exempel på debattämnen:**
- Grönlands väg mot självständighet
- Bloktilskud - hjälp eller hinder?
- Kolonialt arv och moderna relationer
- Arktisk geopolitik och stormaktsintressen
- Kulturell revitalisering vs ekonomisk utveckling

### Användning av Perspektivagenter

**Enskild analys:**
```
"Använd greenlandic-perspective för att analysera Kalaallisut-revitalisering"
```

**Komparativ analys:**
```
"Låt danish-perspective och greenlandic-perspective jämföra sina syn på bloktilskud"
```

**Komplett triperspektiv:**
```
"Analysera [FRÅGA] från alla tre perspektiven och syntesisera slutsatserna"
```

**Sekventiell fördjupning:**
```
1. Först: greenlandic-perspective om [ÄMNE]
2. Sedan: danish-perspective svarar
3. Sedan: swedish-perspective kommenterar med nordisk jämförelse
4. Slutligen: syntesisera alla perspektiv
```

## Kodstil och Konventioner

### HTML-filer
- Använd svensk text för innehåll
- Inkludera responsiv design med moderna CSS
- Lägg till navigation footer i alla HTML-filer (se mall nedan)
- Använd semantisk HTML5

### Markdown-filer
- Svensk text
- Tydliga rubriker och struktur
- Inkludera navigation footer (se mall nedan)

### Navigation Footer Mall

**HTML-versioner:**
```html
<footer style="margin-top: 4rem; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
    <h3 style="margin-top: 0;">🔗 Projektnavigation</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <a href="index.html" style="color: white;">📘 Projektöversikt</a>
        <a href="debatt.html" style="color: white;">💬 Perspektivdebatt</a>
        <a href="Danmark_Gronland_Rapport.md" style="color: white;">📄 Analysrapport</a>
        <a href="ClaudeCodeAgenter1.html" style="color: white;">🤖 Agentdokumentation</a>
        <a href="README.md" style="color: white;">📖 README</a>
        <a href="https://github.com/kentlundgren/AI/tree/main/ClaudeCode1" style="color: white;">💻 GitHub</a>
    </div>
</footer>
```

**Markdown-versioner:**
```markdown
---

## 🔗 Projektnavigation

- [📘 Projektöversikt](index.html) - Interaktiv guide
- [💬 Perspektivdebatt](debatt.html) - Simulerad debatt mellan agenter
- [📄 Analysrapport](Danmark_Gronland_Rapport.md) - Fullständig rapport
- [🤖 Agentdokumentation](ClaudeCodeAgenter1.html) - Teknisk dokumentation
- [📖 README](README.md) - Projektöversikt
- [💻 GitHub](https://github.com/kentlundgren/AI/tree/main/ClaudeCode1) - Källkod

**Skapad med Claude Code och permanenta perspektivagenter**
```

## Testing och Kvalitetssäkring

Efter att ha skapat innehåll med agenterna:

1. **Perspektivbalans:** Verifiera att alla tre perspektiv får lika utrymme
2. **Faktakontroll:** Använd WebSearch för att verifiera historiska påståenden
3. **Kulturell sensitivitet:** Granska särskilt grönländskt perspektiv för autenticitet
4. **Teknisk korrekthet:** Kontrollera att HTML/Markdown är valid

## Projektspecifika Konventioner

### VIKTIGT: Debattformat

När du skapar debatter i debatt.html:

1. **Inledning:** Beskriv att detta är Claude Code-genererad debatt med permanenta agenter
2. **Struktur:** Rundformat där varje perspektiv får uttrycka sig, sedan svara på andra
3. **Avslutning:** Syntesisera gemensamma insikter och kvarstående meningsskiljaktigheter
4. **Metadata:** Inkludera datum, ämne, och länkar till GitHub

### Filuppdateringar

När du uppdaterar projektfiler:
- Lägg ALLTID till/uppdatera navigation footer
- Behåll konsistent styling mellan HTML-filer
- Uppdatera både index.html och README.md vid strukturändringar
- Commita ändringar med beskrivande meddelanden

## Vanliga Uppgifter

### Skapa ny debatt
```bash
# Instruktion för Claude Code
"Skapa en debatt i debatt.html om [ÄMNE] mellan de tre perspektivagenterna.
Använd danish-perspective, greenlandic-perspective och swedish-perspective.
Formatera som interaktiv HTML med navigation footer."
```

### Uppdatera dokumentation
```bash
# Efter större ändringar
"Uppdatera index.html, README.md och CLAUDE.md för att reflektera [ÄNDRINGAR]"
```

### Generera ny analys
```bash
# För fördjupad analys
"Använd alla tre perspektivagenter för att analysera [ÄMNE].
Spara resultatet i ny markdown-fil med navigation footer."
```

## Resurser och Referenser

- **Claude Code Documentation:** https://code.claude.com/docs
- **Sub-agents Guide:** https://code.claude.com/docs/en/sub-agents
- **Best Practices:** https://www.anthropic.com/engineering/claude-code-best-practices
- **Projekt GitHub:** https://github.com/kentlundgren/AI/tree/main/ClaudeCode1

## Viktiga Påminnelser

- **Perspektivdiversitet:** Varje agent har legitima men olika synvinklar
- **Kulturell respekt:** Grönländskt perspektiv centrera ursprungsfolkserfarenhet
- **Nordisk kontext:** Svenskt perspektiv belyser regional dimension
- **Balans:** Ingen "rätt" version - multiperspektiv är poängen
- **Footers överallt:** Alla filer ska ha projektnavigation

---

*Detta projekt demonstrerar avancerad användning av Claude Code permanenta sub-agenter för multiperspektivanalys och simulerade debatter.*
