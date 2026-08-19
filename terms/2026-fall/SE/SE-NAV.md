# SE-NAV — SOFTWARE ENGINEERING (CS-326) — MASTER INDEX

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 9-10:#9adba4:#15803d 11:#ffd27a:#b45309 12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 ; stack: NAV:#9cc4ff BEFORE-MID:#9adba4 AFTER-MID:#c7adff -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Midterm 25 / Final 35 / Lab 40** · load 2.5 · difficulty 2.5/5

> **Open this file first.** It is the map: where every topic lives, every line offset, every resource.
> **Four-file pack** (all in `terms/2026-fall/SE/`):
> | File | Holds |
> |---|---|
> | `SE-NAV.md` | This map — glance tables, master offsets, resources index |
> | `SE-BEFORE-MID.md` | Weeks 1–8 (midterm) — full per-week content |
> | `SE-AFTER-MID.md` | Weeks 9–15 (final) — full per-week content |
> | `SE-LABS.md` | All 13 labs + lab viva — lab→week map, per-lab blocks, viva prep |

---
## Where to look (fast answers)

| I want… | Open |
|---|---|
| A topic with its defs/formulas/numericals | that week's block in BEFORE-MID / AFTER-MID |
| Any week's exact line offsets | **Master offset table** below |
| A full fear-killer pack (verbatim) | that week's block — packs carry per-question offsets |
| A lab, step-by-step | `SE-LABS.md` → per-lab block |
| Viva questions | `SE-LABS.md` viva section · `Viva-Book.md` |
| Books / YT playlists / MOOCs / practice banks | **Resources** section in this file |
| Exam-day order | **Exam stacks** section |
| Which topic covers what | **Topic map** section |
---
## Course facts

- **Code:** CS-326 · **Credits:** 3+1 (theory + lab) · **Contact:** 3 lectures + 1 lab/week · **Prereqs:** CS-222 (OOP), CS-201 (Data Structures)
- **Weightage:** Midterm 25% / Final 35% / Lab 40% (official, per `Week-by-Week-Narrative.md` L11). Study-effort split is ~80% theory / ~20% lab (`Marks-Allocation.md`) — **both are kept, labeled**; the 40% lab is the official risk component.
- **Difficulty:** 2.5/5 · **GPA Risk:** Medium (group project) — *"the group project is where GPAs go to die"* (narrative L3)
- **Rotation:** Course B (Thu + Fri) — 2 B-slots/wk (A = CCN Thu, AI Fri); no Saturday lab
- **Midterm:** Week 8 (05–11 Oct) · **Final:** Week 15 (23–29 Nov) · **Lab viva:** Week 15 (separate slot)
- **Exam character:** memorization-heavy — frameworks, models, terminology. Theory can get a B; the group project decides A vs C.
- **Examinability note:** no `02-Official-Syllabus.md` — weightage/examinability sourced from `01-Course-Overview.md` + `Marks-Allocation.md` only (flagged, not fabricated).
---
## Master weekwise line-offset table

Offsets are line numbers into the named source file. `Fear-Killer-Packs.md` and
`Week-by-Week-Narrative.md` are the two anchored sources; `weeks/SE-Wn.md` files live in `weeks/`.
SE packs are **topic-keyed and lag narrative weeks** (pack Week 3 = project mgmt lands in narrative W4, etc. — see `weeks/README.md`). W3, W7, W8, W14 have no pack.

| Week | Narrative | Pack heading | Pack questions | weeks/SE-Wn | Topic |
|------|-----------|--------------|----------------|-------------|-------|
| W1 | L17–35 | L11 (W1: process-models) | res L12 · Q1 L14 · Q2 L15 · Q3 L16 | SE-W1 L1–51 | Process models |
| W2 | L38–54 | L18 (W2: requirements-engineering) | res L19 · Q1 L21 · Q2 L22 · Q3 L23 | SE-W2 L1–50 | Requirements engineering |
| W3 | L57–74 | — (no pack: DFD/ER) | — | SE-W3 L1–50 | Analysis modelling |
| W4 | L77–93 | L25 (W3: project-management) | res L26 · Q1 L28 · Q2 L29 · Q3 L30 | SE-W4 L1–51 | Project management |
| W5 | L96–112 | L32 (W4: software-design) | res L33 · Q1 L35 · Q2 L36 · Q3 L37 · Q4 L38 | SE-W5 L1–49 | Software design & architecture |
| W6 | L115–133 | L40 (W5: agile-and-scrum) + L32 Q3 | res L41 · Q1 L43 · Q2 L44 · Q3 L45 | SE-W6 L1–51 | Design patterns & agile |
| W7 | L136–152 | — (revision, no pack) | — | SE-W7 L1–44 | Midterm revision |
| W8 | L155–162 | — (no pack) | — | SE-W8 L1–31 | MIDTERM |
| W9 | L165–184 | L47 (W6: verification-and-validation) | res L48 · Q3 L52 | SE-W9 L1–52 | V&V (recovery) |
| W10 | L187–204 | L47 (W6: V&V) | Q1 L50 (cyclomatic) | SE-W10 L1–45 | White-box testing |
| W11 | L207–224 | L47 Q2 + L62 (W8: maintenance-and-sqa) Q3 | Q2 L51 · Q3 L67 | SE-W11 L1–48 | Black-box testing & SQA |
| W12 | L227–251 | L54 (W7: cost-estimation) | res L55 · Q1 L57 · Q2 L58 · Q3 L59 · Q4 L60 | SE-W12 L1–54 | COCOMO |
| W13 | L254–269 | L62 (W8: maintenance) | res L63 · Q1 L65 · Q2 L66 | SE-W13 L1–47 | Software maintenance |
| W14 | L272–293 | — (taper, no pack) | — | SE-W14 L1–60 | Final taper |
| W15 | L296–309 | — (no pack) | — | (W15 note at SE-W14 L58–60) | FINAL + viva |
---
## Topic map → where it lives

| Topic | Covered in |
|-------|------------|
| Process models (Waterfall, Incremental, Spiral, Reuse-oriented) | W1 |
| Requirements engineering + IEEE 830 SRS | W2 |
| DFD / ER / data dictionary / balancing | W3 |
| Project planning, WBS, Gantt, CPM/PERT, RMMM | W4 |
| Design concepts, architectural styles, cohesion/coupling | W5 |
| GoF design patterns, Agile, Scrum, XP | W6 |
| Verification & validation, inspection, testing fundamentals | W9 |
| White-box testing, cyclomatic complexity | W10 |
| Black-box testing (EP/BVA), SQA, metrics | W11 |
| COCOMO (basic/intermediate/detailed), EAF | W12 |
| Maintenance types, reverse vs re-engineering | W13 |

> **Gaps are flagged, not fabricated:** no `02-Official-Syllabus.md` (topic list derived from narrative headings), no `Lab-Schedule.md`, no `03-Lab-Breakdowns/`. The topic→week map above is derived from `Week-by-Week-Narrative.md` + `weeks/README.md`.
---
## Exam probability table (editorial — study prioritization only)

| Topic | Midterm | Final | Numerical | Diagram | Theory | Definition |
|-------|---------|-------|-----------|---------|--------|------------|
| Process models | 90% | 50% | 0% | 20% | 50% | 30% |
| Requirements | 80% | 40% | 0% | 20% | 50% | 30% |
| DFD / Analysis | 75% | 45% | 0% | 50% | 30% | 20% |
| Project mgmt (WBS, CPM) | 65% | 40% | 30% | 30% | 25% | 15% |
| Design concepts | 50% | 65% | 0% | 30% | 45% | 25% |
| Design patterns | 40% | 70% | 0% | 30% | 45% | 25% |
| Agile/Scrum | 50% | 60% | 0% | 10% | 55% | 35% |
| White-box testing | 0% | 75% | 30% | 25% | 30% | 15% |
| Black-box testing | 0% | 65% | 20% | 20% | 40% | 20% |
| COCOMO | 0% | 80% | 50% | 10% | 25% | 15% |
| Maintenance | 0% | 50% | 0% | 10% | 55% | 35% |

**GPA priority:** COCOMO 🟥 Must Win (numerical, predictable, ~15% of final) · Design patterns 🟧 · Testing white-box (cyclomatic = easy marks) 🟧 · Process models 🟧 · DFD/UML 🟧 · Agile/Scrum 🟨 · Maintenance 🟩 (source: `01-Course-Overview.md`).
---
## Marks allocation

| Component | Weight | Strategy |
|-----------|--------|----------|
| COCOMO numericals | ~15% | Memorize coefficients, drill 10 problems |
| DFD/UML diagrams | ~15% | Practice with modeling tools |
| Process models | ~15% | Comparison table memorization |
| Testing (cyclomatic) | ~10% | Formula + control flow graphs |
| Theory | ~25% | Structure: definition + explanation + example |
| Lab project | ~40% official (~20% study-effort) | Group management protocol, start early |

> **Weight conflict:** `01-Course-Overview.md` L17 lists lab as ~20% *study-effort*; the official split is **60% theory exam + 40% lab (project + reports + viva)** per `Week-by-Week-Narrative.md` L11. Both kept, labeled; the 40% lab is the official risk component (canonical pick: **40% official**).
---
## Exam stacks

- **Midterm (W8, 05–11 Oct):** past paper 60 min → blank page 30 min → error log 20 min. Answer DFD/process-model theory first, theory second. Sleep 8 h. Ledger frozen.
- **Final (W15, 23–29 Nov):** COCOMO numericals → DFD/cyclomatic → theory. For theory questions use the 5-point structure (definition, explanation, example, advantage, disadvantage). Sleep 9 h (banked from W12–W14).
- **Viva (W15, separate slot):** `SE-LABS.md` viva + `Viva-Book.md` — 3-min project walkthrough (problem → design → implementation → testing → lessons learned), then 10 technical questions. Know your SRS and UML diagrams cold.
---
## Resources
---
### YouTube playlists

| Playlist | Channel | Videos | Why |
|---|---|---|---|
| [Software Engineering (Complete)](https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2) | Gate Smashers | 62 (confirmed 2026-08-02) | All topics: process models, SRS, design, testing, SQA, project management |
| [Software Engineering Full Course](https://www.youtube.com/playlist?list=PL_pbwdIyffslgxMVyXhnHiSn_EWTvx1G-) | SECourses | 15 lessons / 16.5h | Agile, Scrum, UML breadth |
| [Java Design Pattern Complete Tutorial](https://www.youtube.com/playlist?list=PL2NZAYdLkYvglL0xl-4tgBAribrcjeuNH) | codeonedigest | count unverified | GoF patterns with Java examples |
---
### Textbooks

- **Pressman & Maxim** — *Software Engineering: A Practitioner's Approach*, 9th Ed (2019; McGraw-Hill). ISBN **978-1-260-54800-6**. Process models, requirements, analysis, design, testing, SQA, PM, COCOMO.
- **Ian Sommerville** — *Software Engineering*, 10th Ed (2016; Pearson). ISBN **978-0-13-394303-0**. Agile methods, dependability, maintenance.
---
### Free MOOCs

| Course | Source | Notes |
|---|---|---|
| [NPTEL: Software Engineering](https://onlinecourses.nptel.ac.in/noc23_cs122/preview) | IIT Kharagpur | Prof. Rajib Mall, 12 weeks |
| [Coursera: Software Development Lifecycle](https://www.coursera.org/specializations/software-development-lifecycle) | Univ. of Minnesota | SDLC specialisation |
| [edX: Software Engineering: Introduction](https://www.edx.org/course/software-engineering-introduction) | UBC | Intro course |
---
### Problem banks / practice

| Resource | Link |
|---|---|
| GeeksforGeeks SE Interview Questions | https://www.geeksforgeeks.org/software-engineering/software-engineering-interview-questions-and-answers/ |
| Sanfoundry SE Questions | https://www.sanfoundry.com/software-engineering-questions-answers/ |
| Refactoring Guru: Design Patterns Catalog | https://refactoring.guru/design-patterns/catalog |
---
### Cheat sheets / revision notes

| Resource | Link |
|---|---|
| Refactoring Guru: Design Patterns Cheat Sheet | https://refactoring.guru/design-patterns |
| RIT SWEN-383 Design Patterns RefCard (PDF) | https://www.se.rit.edu/~swen-383/resources/RefCardz/designpatterns.pdf |
| GitHub: OneMoreGres/patterns-cheatsheet (PDF) | https://github.com/OneMoreGres/patterns-cheatsheet |
---
### Secret weapon

**Refactoring.Guru** — https://refactoring.guru — the most beautifully explained design patterns resource: real-world analogies, UML diagrams, pros/cons, code in 9 languages. Makes GoF patterns actually click, free to use online.
---
## Where-everything-lives index (source → embedded location)

| Source file | ~Lines | Embedded in |
|---|---|---|
| `01-Course-Overview.md` | 46 | NAV facts/weights + exam probability + marks allocation |
| `02-Official-Syllabus.md` | — | **absent for SE** (gap, flagged) |
| `03-Lab-Breakdowns/…` | — | **absent for SE** (gap, flagged) |
| `Definition-Book.md` | 32 | per-week "Definitions" blocks (verbatim, 14 entries) |
| `Formula-Book.md` | 25 | per-week "Formulas" blocks (verbatim) |
| `Numerical-Book.md` | 14 | per-week "Numericals" numbered types (#16–21) |
| `Diagram-Book.md` | 25 | per-week "Diagrams" numbered refs (#1–20) |
| `Marks-Allocation.md` | 15 | NAV (this file) |
| `Resources.md` | 44 | NAV (this file) + per-week book/video lines |
| `Fear-Killer-Packs.md` | 70 | per-week packs (verbatim, with per-question offsets) |
| `Week-by-Week-Narrative.md` | 319 | per-week narrative (verbatim) |
| `Lab-Schedule.md` | — | **absent for SE** (gap, flagged) |
| `Lab-Resources.md` | 129 | SE-LABS per-lab Resources lines + derived map |
| `Viva-Book.md` | 25 | SE-LABS viva section (verbatim) |
| `weeks/SE-W1…W14` + `README` | 801 | per-week anchors, P0 floor, drill targets |

> `Top-10-Tricky-Concepts.md` + `Top-100-Questions.md` are **deferred** for SE (decision 2026-08-04) — equivalent coverage lives in `Definition-Book.md`, `Fear-Killer-Packs.md`, and the topical books. `SE_CS302_lab_.pdf` is unreadable → lab content sourced from `Lab-Resources.md`.

---

*Generated from the SE pack (CS-326). Every offset verified against `weeks/README.md`, `Week-by-Week-Narrative.md`, `Fear-Killer-Packs.md`, and the source files themselves.*

---
## Schedule at a glance

| W | Dates | Variant | File | Topics | Lab |
|---|---|---|---|---|---|
| 1 | 17–23 Aug | P2 | BEFORE | Software process models | Lab 1 (proposal) |
| 2 | 24–30 Aug | P2 | BEFORE | Requirements engineering + IEEE 830 | Lab 1 (SRS) |
| 3 | 31 Aug–06 Sep | P2 | BEFORE | Analysis modelling — DFD & ER | Lab 4 (DFD) |
| 4 | 07–13 Sep | P0 | BEFORE | Project management — WBS, Gantt, CPM, RMMM | Lab 2 (ProjectLibre) |
| 5 | 14–20 Sep | P0 | BEFORE | Software design & architecture | Labs 3+6 (arch) |
| 6 | 21–27 Sep | P2 | BEFORE | Design patterns & Agile/Scrum | Lab 7 (pattern) |
| 7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision | — (no milestone) |
| 8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — |
| 9 | 12–18 Oct | P1 | AFTER | Verification & validation (recovery) | Lab 8 (test design) |
| 10 | 19–25 Oct | P2 | AFTER | White-box testing — cyclomatic | — (no milestone) |
| 11 | 26 Oct–01 Nov | P2 | AFTER | Black-box testing & SQA | Lab 8 (execute tests) |
| 12 | 02–08 Nov | P2 | AFTER | COCOMO — cost estimation | — (COCOMO report) |
| 13 | 09–15 Nov | P1 | AFTER | Software maintenance | — (report finalization) |
| 14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | — (final submission) |
| 15 | 23–29 Nov | FINAL | AFTER | Exam + lab viva — execute | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants are editorial tier assignments mirroring AI/CA/PS — SE manifests carry no variant field. Lab column is **derived** from `weeks/README.md` project milestones (no `Lab-Schedule.md`); workbook Labs 9–13 have no narrative milestone mapped. W8/W15 no lab.
