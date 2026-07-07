# Note — 2026-07-03

## Context

Followed up on yesterday's (2026-07-02) synthesis-draft work. Three new case-study
detail pages were built late yesterday:

- `cdp-synthesis.html` — saved 17:11
- `3bb-member-synthesis.html` — saved 17:12
- `counter-service-pos-synthesis.html` — saved 17:13

`index-synthesis.html` (the homepage draft that links to them) was saved earlier,
17:05 — before the three detail pages existed.

## Audited today

**Detail pages — content is complete.**
- All three read as finished statement-first drafts: title block, cover figure,
  story spine, 4–5 numbered chapters (situation → decisions → reflection),
  case-nav footer. No lorem ipsum, no TODO markers, no missing sections.
- Every `<img src>` referenced (`cover.png`, `fig-1-1.png`, `fig-2-1.png`,
  `fig-2-2.png`, `fig-2-3.png`, `screen_proof.png`) exists on disk — verified
  with a file-existence check across all three projects' asset folders.
- Inter-page navigation is correct and closes the loop:
  `cdp-synthesis → 3bb-member-synthesis → counter-service-pos-synthesis → index-synthesis#work`,
  and each "back"/name link in the nav points to `index-synthesis.html`.

**Found: `index-synthesis.html` project cards still link to the old live pages,
not the new drafts.**
- Card 01 (CDP): `href="cdp.html"` — should be `cdp-synthesis.html`
- Card 02 (3BB): `href="3bb-member.html"` — should be `3bb-member-synthesis.html`
- Card 03 (POS): `href="counter-service-pos.html"` — should be `counter-service-pos-synthesis.html`

Likely cause: the index draft was written first, before the detail drafts existed,
so it pointed at the only real pages available at the time (`cdp.html` etc.).
When the three detail drafts were finished ~6–8 minutes later, the index links
were never updated to match. Result: opening `index-synthesis.html` and clicking
any case card currently exits the draft and lands on the old live page instead
of the new one.

**Not yet fixed** — pending user confirmation before editing.

## Assets (copied here for reference)

**CDP**
![cdp cover](assets/cdp/cover.png)
![cdp fig-1-1](assets/cdp/fig-1-1.png)
![cdp fig-2-2](assets/cdp/fig-2-2.png)
![cdp fig-2-3](assets/cdp/fig-2-3.png)

**3BB Member**
![3bb cover](assets/3bb-member/cover.png)
![3bb fig-1-1](assets/3bb-member/fig-1-1.png)
![3bb fig-2-1](assets/3bb-member/fig-2-1.png)

**Counter Service POS**
![pos cover](assets/counter-service-pos/cover.png)
![pos screen_proof](assets/counter-service-pos/screen_proof.png)
![pos fig-2-1](assets/counter-service-pos/fig-2-1.png)

## Still open from before (unrelated to today's find)

Carried over from `docs/image-assets-todo.md` — images used by both the live
pages and these synthesis drafts still have the pre-existing problems (#2 baked
captions, #4 illegibility at scan size) that were never re-generated. The
synthesis drafts inherit these same image files, so fixing the index links
does not fix the image issues — that's a separate, already-tracked item.
