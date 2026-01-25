# Claude Code - Modellguide

## Så här byter du modell

Öppna `settings.json` (eller `settings-clean.json` om kommentarer inte fungerar) och ändra värdet på `"model"`:

```json
"model": "claude-sonnet-4-5-20250929"
```

---

## Tillgängliga modeller (januari 2026)

---

## 🏆 OPUS-SERIEN (Mest kapabla)

### Claude Opus 4.5 - NYASTE! Mest intelligent & billigare
```json
"model": "claude-opus-4-5-20251101"
```
- **Släppt:** 24 november 2025
- **Kostnad:** $5 / 1M input tokens, $25 / 1M output tokens
- **Kontext:** 200K tokens
- **Bäst för:** Komplexa resonemang, AI-agenter, avancerad kodning
- **Notering:** 67% billigare än Opus 4.1!

---

### Claude Opus 4.1 - Tidigare toppmodell (dyrare!)
```json
"model": "claude-opus-4-20250514"
```
- **Släppt:** 14 maj 2025
- **Kostnad:** $15 / 1M input tokens, $75 / 1M output tokens
- **Notering:** Använd Opus 4.5 istället - den är bättre OCH billigare!

---

## ⭐ SONNET-SERIEN (Bästa pris/prestanda)

### Claude Sonnet 4.5 - Bästa kodningsmodellen!
```json
"model": "claude-sonnet-4-5-20250929"
```
- **Släppt:** 29 september 2025
- **Kostnad:** $3 / 1M input tokens, $15 / 1M output tokens
- **Kontext:** 200K tokens, upp till 64K output
- **Bäst för:** Kodning, komplexa agenter, dagligt arbete
- **Rekommendation:** ⭐ Bästa valet för de flesta användare!

---

### Claude Sonnet 4 - Tidigare Sonnet
```json
"model": "claude-sonnet-4-20250514"
```
- **Släppt:** 14 maj 2025
- **Kostnad:** $3 / 1M input tokens, $15 / 1M output tokens
- **Bäst för:** Om du föredrar tidigare beteende

---

## ⚡ HAIKU (Snabbast och billigast)

### Claude Haiku - Budget-alternativet
```json
"model": "claude-haiku-4-20250514"
```
- **Kostnad:** ~$0.25 / 1M input tokens, ~$1.25 / 1M output tokens
- **Bäst för:** Enkla uppgifter, snabba svar, testning, budgetmedveten användning
- **Hastighet:** Snabbast av alla modeller

---

## Kostnadsöversikt

| Modell | Input (per 1M) | Output (per 1M) | Rekommendation |
|--------|----------------|-----------------|----------------|
| **Opus 4.5** | $5 | $25 | Mest kapabel |
| **Opus 4.1** | $15 | $75 | ❌ Använd 4.5 istället |
| **Sonnet 4.5** | $3 | $15 | ⭐ Bäst för kodning |
| **Sonnet 4** | $3 | $15 | Äldre version |
| **Haiku** | $0.25 | $1.25 | Budget/snabbhet |

---

## Varför är Opus 4.5 billigare än 4.1?

Anthropic förbättrade effektiviteten i Opus 4.5 vilket gjorde det möjligt att:
1. **Sänka priset med 67%** (från $15 till $5 per 1M input tokens)
2. **Förbättra prestandan** samtidigt
3. Erbjuda **prompt caching** (upp till 90% rabatt) och **batch processing** (50% rabatt)

Detta är ovanligt i AI-branschen - vanligtvis är nyare modeller dyrare!

---

## Tips

1. **Börja med Haiku** för att testa och experimentera billigt
2. **Använd Sonnet 4.5** för dagligt arbete och kodning (bästa pris/prestanda)
3. **Byt till Opus 4.5** för riktigt komplexa resonemang
4. **Hoppa över Opus 4.1** - det finns ingen anledning att använda den

---

## Filer i denna mapp

- `settings.json` - Huvudinställningar (med kommentarer)
- `settings-clean.json` - Samma inställningar utan kommentarer
- `README-modeller.md` - Denna guide

**Om `settings.json` ger fel:** Byt namn på `settings-clean.json` till `settings.json`

---

*Uppdaterad: Januari 2026*
