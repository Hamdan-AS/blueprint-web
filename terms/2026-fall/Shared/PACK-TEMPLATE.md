# PACK-TEMPLATE — GENERALIZED 3/4-PDF PACK SPEC (NAV · BEFORE-MID · AFTER-MID)

> **Purpose:** the reusable skeleton for the per-course study packs. Copy the relevant section into each course folder, replace every `{{TOKEN}}`, and render with `md2pdf.py`. Derived from the verified CA (CS-328) and PS (MT-335) packs.
>
> **Pack shape:** lab courses (**AI, CCN, SE**) = **4 files** (NAV + BEFORE-MID + AFTER-MID + LABS). Theory-only courses (**CA, PS**) = **3 files** (no LABS). The LABS template is a separate spec — this file only wires the LABS **rows/slots**, not its content.
>
> **Render (must be invoked from repo root or absolute paths):**
> `python3 /home/elite/sandbox/third-yr-fall-blueprint/tools/md2pdf.py <abs-in.md> -o <abs-out.pdf>`
> Relative `tools/md2pdf.py` from a course dir fails. `h2.pagebreak { page-break-before: always; }` is available for per-block page breaks.
>
> **Color semantics (md2pdf):** the `colors:` comment tints `### Wn` headings + table rows whose first cell is a bare integer. First line uses ranges (`1-3:#hex:#hex`); the `; stack:` value keys the file-pack table rows. Week colors must match the NAV schedule.

---
## 1 · GENERAL-NAV template

> Copy to `terms/2026-fall/{{COURSE}}/{{COURSE}}-NAV.md`.
---
### 1.1 File header

```
# {{CODE}}-NAV — {{Course}} ({{CODE}}) — Master Index

<!-- colors: {{weekMap}} ; stack: NAV:#{{hex}} BEFORE-MID:#{{hex}} AFTER-MID:#{{hex}} -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **{{WEIGHTS}}** · load {{LOAD}} · difficulty {{DIFF}}/5
```

- `{{weekMap}}` example (CA): `1-3:#9cc4ff:#1d4ed8 4-6:#9adba4:#15803d 7-9:#ffd27a:#b45309 8:#ff9e9e:#dc2626 10-12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626`. Week 8 (midterm) and week 15 (final) are always red.
- `{{WEIGHTS}}` e.g. `Final 60 / Sessional 40` (CA) · `Midterm 30 / Final 40 / Lab 20` (AI/CCN) · `Midterm 25 / Final 35 / Lab 40` (SE).
---
### 1.2 Open-this-file block

```
> **Open this file first.** It is the map: where every topic lives, every line offset, every resource.
> **{{Three|Four}}-file pack** (all in `terms/2026-fall/{{COURSE}}/`):
> | File | Holds |
> |---|---|
> | `{{COURSE}}-NAV.md` | This map — glance tables, master offsets, resources index |
> | `{{COURSE}}-BEFORE-MID.md` | Weeks 1–8 (midterm) — full per-week content, {{units 1–8}} |
> | `{{COURSE}}-AFTER-MID.md` | Weeks 9–15 (final) — full per-week content, {{units 9–15}} |
> | `{{COURSE}}-LABS.md` | [lab courses only] all labs — lab→week map, per-lab blocks, viva prep |
```

- LABS row is included for AI/CCN/SE, omitted for CA/PS.
---
### 1.3 Where to look (fast answers)

```
| I want… | Open |
|---|---|
| A topic with its defs/formulas/numericals | that week's block in BEFORE-MID / AFTER-MID |
| Any week's exact line offsets | **Master offset table** below |
| A full fear-killer pack (verbatim) | that week's block — packs carry per-question offsets |
| {{Unit}} breakdown (chapter / module) | the week that bundles it (mapping below) |
| A lab, step-by-step | `{{COURSE}}-LABS.md` → per-lab block (lab courses) |
| Viva questions | `{{COURSE}}-LABS.md` viva section · `Viva-Book.md` (lab courses) |
| Books / YT playlists / MOOCs / practice banks | **Resources** section in this file |
| Exam-day order | **Exam stacks** section |
| Which official module covers what | **Syllabus {{M1–Mx}}** section |
```
---
### 1.4 Course facts

```
- **Code:** {{CODE}} · **Credits:** {{3+0|3+1}} · **Contact:** 3 lectures/week {{+ 1 lab/week}}
- **Weightage:** {{WEIGHTS}} {{(source; flag if editorial/unverified)}}
- **Difficulty:** {{X}}/5 · **GPA Risk:** {{…}}
- **Rotation:** {{…}} — {{A|B}}-slots/wk {{; labs on Saturday}}
- **Midterm:** Week 8 (05–11 Oct) · **Final:** Week 15 (23–29 Nov)
- **Exam character:** {{…}} — what decides A vs A+.
- **Examinability note:** {{official-marked-absent vs examinable, only if the course has one; else omit}}
```
---
### 1.5 Master weekwise line-offset table

```
| Week | Narrative | Pack heading | Pack questions | weeks/{{COURSE}}-Wn | {{Unit}} |
|------|-----------|--------------|----------------|--------------------|----------|
| W1 | L{{a}}–{{b}} | L{{c}} ({{…}}) | res L{{d}} · Q1 L{{e}} · … | W1 L1–{{n}} | {{01}} (L1–{{n}}) |
| … | | | | | |
```

- `{{Unit}}` = chapter breakdown (CA/PS/AI), module (PS), or week-manifest only (SE — no chapter files).
- Include W8 and W15 rows (`— (no pack)`); W15 notes live at the W14 manifest's tail line.
- Every offset is verified against the course `weeks/README.md`, `Fear-Killer-Packs.md`, and `Week-by-Week-Narrative.md` **before** the file is finalized.
---
### 1.6 Syllabus modules → where it lives

```
| Module | Hours | Breakdown? | Covered in |
|--------|-------|------------|------------|
| {{M1 … Mx}} | {{n}} | ✅/⚠️/❌ | W{{n}}–W{{n}} |
```

- ⚠️ = pack-level only (no breakdown file); ❌ = gap, flagged not fabricated (SE has no `02-Official-Syllabus.md` → derive module list from `01-Course-Overview.md` + narrative, or note "no official syllabus source").
- Always include a `> Gaps are flagged, not fabricated: …` note.
---
### 1.7 Exam probability table (editorial — study prioritization only)

```
| Topic | Midterm | Final | Numerical | Diagram | Theory | Definition |
|-------|---------|-------|-----------|---------|--------|------------|
```

- Six fixed columns — identical shape across all five courses (source: `01-Course-Overview.md` "Exam Weight Breakdown").
---
### 1.8 Marks allocation

```
| Component | Weight | Strategy |
|-----------|--------|----------|
| … theory topics … | ~{{%}} | … |
| Lab | ~{{%}} | … |   ← lab courses only
```

- Lab row present for AI/CCN/SE only. If a weight conflict exists between `01-Course-Overview.md` and `Marks-Allocation.md`, record the canonical pick here + one `> Note:` line naming the deferring file (per `Shared/MASTER-DECISIONS.md` / ANALYSIS-PLAN §2.1).
---
### 1.9 Exam stacks

```
- **Midterm (W8, 05–11 Oct):** past paper 60 min → blank page 30 min → error log 20 min. Answer {{numericals/diagrams}} first, theory second. Sleep 8 h. Ledger frozen.
- **Final (W15, 23–29 Nov):** {{order}}. Sleep 9 h (banked from W12).
- **Viva (lab courses, W14–15):** per-{{COURSE}}-LABS viva sections + `Viva-Book.md` walkthrough → technical drills.   ← lab courses only
```
---
### 1.10 Resources

Five subsections, all `{{…}}`-filled: **YouTube playlists** (table: Playlist/Channel/Videos/Why), **Textbooks** (list with ISBN), **Free MOOCs** (table), **Problem banks / practice** (table), **Cheat sheets / revision notes** (table), **Secret weapon** (one-liner). Copy the CA/PS shape; replace with the course's own vetted links.
---
### 1.11 Where-everything-lives index (source → embedded location)

```
| Source file | ~Lines | Embedded in |
|---|---|---|
| `01-Course-Overview.md` | {{n}} | NAV facts/weights + exam probability + marks allocation |
| `02-Official-Syllabus.md` | {{n}} | NAV (module map + textbooks) — omit for SE (absent) |
| `03-Chapter-Breakdowns/…` | {{n}} | BEFORE/AFTER week blocks (verbatim) — CA/PS/AI only |
| `Definition-Book.md` / `Formula-Book.md` | … | per-week "Definitions"/"Formulas" blocks |
| `Diagram-Book.md` / `Numerical-Book.md` | … | per-week numbered refs |
| `Marks-Allocation.md` | … | NAV (this file) |
| `Resources.md` | … | NAV + per-week book/video lines |
| `Fear-Killer-Packs.md` | … | per-week packs (verbatim, per-question offsets) |
| `Week-by-Week-Narrative.md` | … | per-week narrative (verbatim) |
| `weeks/{{COURSE}}-W1…W14` + `README` | … | per-week anchors, P0 floor, drill targets |
| `Lab-Schedule.md` | … | NAV/{{COURSE}}-LABS lab→week map — AI/CCN only (SE absent) |
| `Lab-Resources.md` | … | NAV/{{COURSE}}-LABS per-lab GitHub repos |
| `03-Lab-Breakdowns/…` | … | {{COURSE}}-LABS per-lab blocks — AI/CCN only (SE absent) |
| `{{Workbook}}.md` | … | {{COURSE}}-LABS course facts + CLO — lab courses |
| `Viva-Book.md` | … | {{COURSE}}-LABS viva sections — lab courses |
```
---
### 1.12 Schedule at a glance (W1–W15)

```
| W | Dates | Variant | File | Topics | {{Unit}} | {{Lab}} |
|---|---|---|---|---|---|---|
| 1 | 17–23 Aug | P2 | BEFORE | {{topics}} | {{01}} | {{Lab 1 — title}} |
| … | | | | | | |
| 8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — | — |
| … | | | | | | |
| 15 | 23–29 Nov | FINAL | AFTER | Exam — execute | — | — |
```

- `{{Lab}}` column: lab courses only; value from `Lab-Schedule.md` (AI/CCN) or `weeks/README.md` project milestones (SE). W8 = no lab (term.json lab_omission). W15 = no lab.

---
## 2 · GENERAL-BEFORE-MID template

> Copy to `terms/2026-fall/{{COURSE}}/{{COURSE}}-BEFORE-MID.md`. Covers W1–W8.
---
### 2.1 Header block

```
# {{COURSE}}-BEFORE-MID — Weeks 1–8 · 17 Aug – 11 Oct 2026 · MIDTERM (W8)

<!-- colors: {{weekMap W1–W8}} -->

> **Scope:** Weeks 1–8 (17 Aug – 11 Oct 2026) — {{topics}}, ending at the Week 8 midterm.
> **Siblings:** `{{COURSE}}-NAV.md` (master map) · `{{COURSE}}-AFTER-MID.md` (Weeks 9–15). Week-colored headers below match the NAV schedule.
> **Exam split:** {{…}}.
> **Exam order:** {{…}}.
```
---
### 2.2 At a glance (W1–W8)

```
| W | Dates | Variant | File | Topics | {{Unit}} |
|---|---|---|---|---|---|
| W1 | 17–23 Aug | P2 | BEFORE | {{topics}} | {{01}} |
| … | | | | | |
| W8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week.
```
---
### 2.3 Standard per-week block (W1–W7, W9–W14)

```
### W{{n}} — {{Topic}} · {{dates}} · {{Tier}} · {{h}} hrs

**Banner:** Rotation {{…}} · Tier {{Tier}} · Time budget {{h}} hrs · P0 floor: pack pass + def/formula skim + same-problem drill.{{ recovery note when W9}}

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week {{n}} | lines {{a}}–{{b}} |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → {{Week n}} | lines {{c}}–{{d}} |
| Week manifest | `weeks/{{COURSE}}-W{{n}}.md` | full file |
| {{Unit}} breakdown | `03-Chapter-Breakdowns/{{file}}` | embedded below / reference (embedded W{{m}}) |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| {{term}} | {{definition}} |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| {{name}} | {{statement}} |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#{{n}}** {{desc}} |
| Numericals | `Numerical-Book.md` **#{{n}}** {{desc}} |
| Tricky | `Top-10-Tricky-Concepts.md` **#{{n}}** {{desc}} |
| Top-100 | `Top-100-Questions.md` **#{{a}}–#{{b}}** ({{bucket}}) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| {{textbook}} | {{ch}} |
| {{YT/ MOOC}} | {{…}} |

#### Fear-Killer Pack {{COURSE}}-W{{n}} (verbatim)

**Resources:** {{…}}

1. {{Q1}}
2. {{Q2}}
3. {{Q3}}

#### Narrative — Week {{n}} (verbatim)

**Topics:** {{…}}

**Resources:** {{…}}

**Practice:**
- {{…}}

**Deliverable:** {{…}}

**Time budget:** {{h}} hrs

#### {{Unit}} — {{title}} (verbatim)   ← only when a breakdown file exists for this week
…
#### {{Lab pointer}}   ← lab courses only, one line
**Lab this week:** `{{COURSE}}-LABS.md` → **Lab {{n}} — {{title}}** (lab→week map in `Lab-Schedule.md`).
If the week has no lab (W8), omit this slot.

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q{{n}} …) · def/formula skim · same-problem drill #{{n}}
- **Same-problem drill target:** {{…}}
- **Deliverable:** {{…}}
- **Trap:** {{…}}
```

- `{{Unit}}` verbatim block: embed the chapter/module breakdown **in the week that bundles it** (first occurrence); later weeks reuse it as a reference row. If no breakdown exists for the topic, write `#### {{Unit}} — {{topic}} — (gap: pack-level only)` instead of fabricating content.
---
### 2.4 Exam-week variant block (W8)

```
### W8 — MIDTERM EXAM WEEK · 05–11 Oct · Exam

**Banner:** Rotation {{…}} · Tier MIDTERM · No new deep study, no floor accrual. Ledger frozen during W8.

#### Sources
| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 8 | lines {{a}}–{{b}} |
| Pack | `Fear-Killer-Packs.md` → Week 8 | lines {{c}}–{{d}} |
| Week manifest | `weeks/{{COURSE}}-W8.md` | full file |

#### Fear-Killer Pack — Week 8 (verbatim)
**Week 8: MIDTERM EXAM WEEK** — No new pack. Active recall only — review the 1-page cheat sheet and sleep 8 hours.

#### Narrative — Week 8 (verbatim)
**Focus:** No new material. Active recall only. …

#### Exam-day stack (Mon–Fri)
- [ ] Past-paper run for the exam subject — 60 min, P0
- [ ] Blank-page retrieval of that subject — 30 min, P0
- [ ] Master Error Log review — 20 min, P0

#### Notes
- Ledger frozen during Wk8 — cleared in Wk9 recovery.
```

---
## 3 · GENERAL-AFTER-MID template

> Copy to `terms/2026-fall/{{COURSE}}/{{COURSE}}-AFTER-MID.md`. Covers W9–W15. Identical skeleton to BEFORE-MID (§2.3, §2.4) with three differences:

1. **Header:** `# {{COURSE}}-AFTER-MID — Weeks 9–15 · 12 Oct – 29 Nov 2026 · FINAL (W15)` + `<!-- colors: {{weekMap W9–W15}} -->`. Scope/siblings/exam-split lines mirror §2.1 with final-appropriate text.
2. **At a glance:** W9–W15 rows; W15 = `FINAL` variant.
3. **W9** standard block carries the recovery banner: `**Recovery week — ledger MUST clear to 0.**` (and the midterm-recalibration note if the course has one). **W15** uses the exam-week variant block with a **final** banner (`Tier FINAL`), a final exam-day stack (numericals → diagrams → theory + viva for lab courses), and the `Ledger frozen during Wk15` note.

---
## 4 · Specialization checklist (fill order)

For each course, in order:

1. **Copy** §1 → `{{COURSE}}-NAV.md`, §2 → `{{COURSE}}-BEFORE-MID.md`, §3 → `{{COURSE}}-AFTER-MID.md`.
2. **Fill course facts** from `01-Course-Overview.md` (+ `Marks-Allocation.md`). Resolve weight conflicts per course:
   - **AI (CS-323):** Midterm 30 / Final 40 / Lab 20 (overview + Marks agree ~20; 30 was previously flagged — confirm against the canonical file before rendering). 13 labs (Lab 14 CEA excluded); workbook ANN-first.
   - **CCN (CS-327):** Midterm 30 / Final 40 / Lab 20 — **editorial, no official policy confirmed**; NED Final 60/Sessional 40 may apply (Shared/MASTER-DECISIONS Tier 10). 14 labs + Appendix A (reference); Labs 8+9 merged into W9.
   - **SE (CS-326):** Midterm 25 / Final 35 / Lab 40 (official, per `Week-by-Week-Narrative.md` L11); Marks-Allocation lab ~20 is study-effort only — keep both, labeled. 13 labs (Lab 14 excluded).
3. **Verify every offset** (narrative/pack/week-manifest lines) against `weeks/README.md` + the two anchored sources. Never print an unverified number.
4. **SE gaps (no fabrication):** no `02-Official-Syllabus.md`, no `Lab-Schedule.md`, no `03-Lab-Breakdowns/`. Derive units/lab milestones from `01-Course-Overview.md`, `weeks/README.md`, and `Lab-Resources.md`; mark the unit column `— (no chapter breakdown)`.
5. **Colors:** pick the per-course palette once in NAV; reuse the W1–W8 / W9–W15 slices in the sibling files so week colors match.
6. **Lab pointers** (AI/CCN/SE): one line per standard week; omit on W8/W15; W9 for CCN references the merged Lab 8+9.
7. **Render** each file from repo root or absolute path (see header note). Verify PDFs open and week colors/tints applied.
8. **Record** what was filled + any open weight questions in `Shared/MASTER-DECISIONS.md` or the course `weeks/README.md`.
