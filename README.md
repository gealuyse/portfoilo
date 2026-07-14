# Natthapath Damrongsri — Portfolio

Static portfolio. Plain HTML + CSS, no build step, no framework, and no production
JavaScript. Open `index.html` in a browser to view.

> Live: **https://gealuyse.github.io/portfoilo/** (once the first deploy finishes).

## Stack
- HTML5 + one shared `style.css` — fully static
- Fonts: Newsreader (serif headings) · Inter (UI/labels) · Caveat (handwritten notes)
- Target: modern evergreen browsers (CSS uses box-decoration-break, data-URI SVG, `vector-effect`)

## Files
| Path | What |
|---|---|
| index.html | Landing — hero, work, about, contact |
| cdp.html | Case study 01 — Customer Data Platform |
| 3bb-member.html | Case study 02 — 3BB Member |
| counter-service-pos.html | Case study 03 — Counter Service POS (short) |
| style.css | All styles, shared across pages |
| assets/<slug>/ | Optimized covers, figures, and social images used by the site |
| docs/portfolio-spec.md | **Single source of truth** — rules + page copy + history |
| docs/archive/ | Superseded source docs + stale data (provenance) |
| docs/ref/ | Reference images |

## Project order (locked)
CDP (01) → 3BB (02) → POS (03)

## Dropped projects
**Naaraan Store Builder — removed from the portfolio (2026-06-23).** No longer part of
this project and not referenced anywhere on the live site. The page and its assets were
moved to `docs/archive/naaraan/` (`naaraan.html` + `assets/`) for provenance only. Do
**not** re-add it to `index.html`, the nav, or the spec's active rules. Treat it like
anything else in `docs/archive/`: superseded, not to be rebuilt.

## Annotation system
Annotations are CSS-only and use the same Caveat handwriting family throughout.
- Homepage project previews use `.pin-note` for short process quotes.
- Case studies use `.hand` for restrained decision or tradeoff marginalia.
- Keep notes short, static, and secondary to the evidence they accompany.

## Reference
Everything — current rules, all page copy, and the project history — lives in one file:
**`docs/portfolio-spec.md`**. Older brief / content / spec / notes are in `docs/archive/`
as provenance (superseded; the spec wins).

## Adding / editing a project
1. Images → `assets/<slug>/` with optimized WebP display assets and a social image
2. Page → copy an existing case study as a template, save as `<slug>.html`
3. Card + link → add the project card in `index.html` (respect the locked order)
4. Copy → add the page text to `docs/portfolio-spec.md` (Part 2)
5. Nav → update the prev/next links in the adjacent case-study pages

## Deploy
**GitHub Pages**, repo `gealuyse/portfoilo`. No custom domain.
- Pages source: branch `main`, folder `/ (root)`. `git push origin main` triggers the build.
- `_config.yml` excludes `docs/` and `README.md` from the published site. Do **NOT**
  add `.nojekyll` — that disables Jekyll and the excludes stop working (exposes `docs/`).
- URL: `https://gealuyse.github.io/portfoilo/`.

## For AI agents
- Edit HTML/CSS directly — nothing to compile and no production JavaScript.
- One reference: `docs/portfolio-spec.md`. If it conflicts with the code, the code
  wins (fix the doc). Treat everything in `docs/archive/` as superseded.
- Keep the name "Natthapath Damrongsri" (older drafts use placeholder "G").
- Do NOT reintroduce: blue/red two-color annotations · Fraunces/DM Sans fonts ·
  GSAP / any JS motion · the "pencil-writing trace" (it never shipped).

## Status & open issues
- [x] CSS-only process notes are present on the homepage and case studies.
- [x] Connected to GitHub (`gealuyse/portfoilo`); `git push` deploys. No custom domain.
- [x] SEO: canonical / og:url / og:image set to `https://gealuyse.github.io/portfoilo/`; `og.png` added.
- [x] Finalize About + Contact copy.

## License
© Natthapath Damrongsri. All rights reserved. Code and content in this repository
are not licensed for reuse without written consent. See `LICENSE`.
