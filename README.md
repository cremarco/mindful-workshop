# Personality Is Not a Prompt: Toward Psychologically Grounded LLM Simulations of Personality

Slide del talk per il **Milan Workshop on Computational Methods For Mental Health and Well-Being 2026** (University of Milano-Bicocca, 23 June 2026), realizzate con [Slidev](https://sli.dev/).

## Comandi

```bash
pnpm install
pnpm dev      # dev server su http://localhost:3030
pnpm build    # build statica in dist/
pnpm export   # export PDF
```

## Struttura

| Percorso | Contenuto |
|---|---|
| `slides.md` | Tutte le slide (markdown + componenti Vue) |
| `styles/` | Fogli di stile: `tokens.css` (design token), `base.css` (tipografia e layout), `components.css` (bento, chat, tabelle, mockup), `slides.css` (stili per singole slide) |
| `components/` | Componenti riusabili: `AppScreenshot`, `ChatBalloon`, `PatientCard` |
| `setup/main.ts` | Setup app: variabili CSS immagine (rispettano il base path), helper `$aippImage`, normalizzazione hash route per GitHub Pages |
| `setup/mermaid.ts` | Tema condiviso dei diagrammi Mermaid |
| `utils/images.ts` | Helper URL asset consapevoli del base path |
| `global-bottom.vue` | Barra di avanzamento e numero pagina |
| `public/images/` | Asset (sfondi, pazienti, screenshot, loghi partner) |
| `docs/` | Materiale di riferimento (dossier) |

## Deploy

Il deploy avviene su **GitHub Pages** ad ogni push su `main` (`.github/workflows/github-pages.yml`), con base path `/AIPP-full/` e router in modalità hash.
