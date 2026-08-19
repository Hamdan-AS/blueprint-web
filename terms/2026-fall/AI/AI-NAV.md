# AI-NAV — ARTIFICIAL INTELLIGENCE (CS-323) — MASTER INDEX

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 9-10:#ffd27a:#b45309 11:#c7adff:#6d28d9 12:#80d8cc:#0f766e 13:#c7adff:#6d28d9 14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 ; stack: NAV:#9cc4ff BEFORE-MID:#9adba4 AFTER-MID:#c7adff -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Midterm 30 / Final 40 / Lab 20** · load 4.0 · difficulty 4/5

> **Open this file first.** It is the map: where every topic lives, every line offset, every resource.
> **Four-file pack** (all in `terms/2026-fall/AI/`):
> | File | Holds |
> |---|---|
> | `AI-NAV.md` | This map — glance tables, master offsets, resources index |
> | `AI-BEFORE-MID.md` | Weeks 1–8 (midterm) — full per-week content, modules 1–6 |
> | `AI-AFTER-MID.md` | Weeks 9–15 (final) — full per-week content, modules 6–9 |
> | `AI-LABS.md` | All 13 labs + lab viva — lab→week map, per-lab blocks, viva prep |

---
## Where to look (fast answers)

| I want… | Open |
|---|---|
| A topic with its defs/formulas/numericals | that week's block in BEFORE-MID / AFTER-MID |
| Any week's exact line offsets | **Master offset table** below |
| A full fear-killer pack (verbatim) | that week's block — packs carry per-question offsets |
| A lab, step-by-step | `AI-LABS.md` → per-lab block |
| Viva questions | `AI-LABS.md` viva section · `Viva-Book.md` |
| Books / YT playlists / MOOCs / practice banks | **Resources** section in this file |
| Exam-day order | **Exam stacks** section |
| Which official module covers what | **Syllabus M1–M9** section |
---
## Course facts

- **Code:** CS-323 · **Credits:** 3+1 (theory + lab) · **Contact:** 3 lectures + 1 lab/week
- **Weightage:** Midterm 30% / Final 40% / Lab ~20% (canonical per `Marks-Allocation.md`; `01-Course-Overview.md` defers)
- **Difficulty:** 4/5 · **GPA Risk:** High
- **Rotation:** Course A (Wed + Fri) — 2 A-slots/wk · labs Saturday
- **Midterm:** Week 8 (05–11 Oct) · **Final:** Week 15 (23–29 Nov) · **Lab viva:** Week 15 (separate slot)
- **Exam character:** 40% of exam weight sits on three pillars — **A\*, GA, backpropagation**. Trace problems reward process over final number (≈70% partial credit).
- **Workbook note:** lab order runs **ANN-first** (W1–5), independently of the theory timeline (NN theory is W10–11). GA has **no lab** — theory pillar only.
---
## Master weekwise line-offset table

Offsets are line numbers into the named source file. `Fear-Killer-Packs.md` and
`Week-by-Week-Narrative.md` are the two anchored sources; `weeks/AI-Wn.md` files live in `weeks/`.
Only 8 packs exist (AI-W3/4/5/6/9/11/12/13) — W1/W2/W10 and W7/W14 (revision) have no pack.

| Week | Narrative | Pack heading | Pack questions | weeks/AI-Wn | Module |
|------|-----------|--------------|----------------|-------------|--------|
| W1 | L18–33 | — (no pack) | — | AI-W1 L1–47 | M1 |
| W2 | L37–52 | — (no pack) | — | AI-W2 L1–46 | M2 |
| W3 | L56–74 | L11 (AI-W3: Search) | res L12 · Q1 L14 · Q2 L15 · Q3 L16 · Q4 L17 | AI-W3 L1–47 | M2 |
| W4 | L78–96 | L19 (AI-W4: CSP & Adversarial) | res L20 · Q1 L22 · Q2 L23 · Q3 L24 · Q4 L25 | AI-W4 L1–48 | M2 |
| W5 | L100–116 | L27 (AI-W5: FOL & KR) | res L28 · Q1 L30 · Q2 L31 · Q3 L32 · Q4 L34 · Q5 L35 · Q6 L36 | AI-W5 L1–47 | M3 + M5 |
| W6 | L120–141 | L38 (AI-W6: Genetic Algorithms) | res L39 · Q1 L41 · Q2 L42 · Q3 L43 · Q4 L44 | AI-W6 L1–50 | M4 |
| W7 | L145–160 | — (revision) | — | AI-W7 L1–56 | M1–M6 |
| W8 | L164–174 | — (no pack) | — | AI-W8 L1–31 | — |
| W9 | L177–197 | L46 (AI-W9: Rule-Based Systems) | res L47 · Q1 L49 · Q2 L50 · Q3 L51 | AI-W9 L1–53 | M6 |
| W10 | L201–217 | — (no pack) | — | AI-W10 L1–49 | M7 |
| W11 | L221–241 | L53 (AI-W11: Neural Networks) | res L54 · Q1 L56 · Q2 L57 · Q3 L58 · Q4 L59 | AI-W11 L1–53 | M7 |
| W12 | L245–263 | L61 (AI-W12: Fuzzy Logic) | res L62 · Q1 L64 · Q2 L65 · Q3 L66 | AI-W12 L1–51 | M8 |
| W13 | L268–283 | L68 (AI-W13: Game Theory & Ethics) | res L69 · Q1 L71 · Q2 L72 · Q3 L73 · Q4 L74 | AI-W13 L1–48 | M9 |
| W14 | L287–308 | — (taper) | — | AI-W14 L1–56 | M1–M9 |
| W15 | L312–326 | — (no pack) | — | (W15 note at AI-W14 L56) | — |
---
## Syllabus M1–M9 → where it lives

| Module | Breakdown? | Covered in |
|--------|------------|------------|
| M1 Introduction & Computational Intelligence | ❌ pack-level | W1 |
| M2 Searching Methodologies | ❌ pack-level | W2–W3 |
| M3 First-Order Logic | ❌ pack-level | W5 |
| M4 Evolutionary Computing | ❌ pack-level | W6 |
| M5 Knowledge Representation | ❌ pack-level | W5 |
| M6 Imperfect Knowledge & Rule-Based Systems | ❌ pack-level | W9 |
| M7 Artificial Neural Networks | ❌ pack-level | W10–W11 (labs W1–W5) |
| M8 Fuzzy Set Theory | ❌ pack-level | W12 (lab W14) |
| M9 Game Theory & Prospects | ❌ pack-level | W13 |

> AI has no `03-Chapter-Breakdowns/` — all modules map at pack/narrative level (per `weeks/README.md`). Gaps are flagged, not fabricated. The official syllabus lists no per-module hours.
---
## Exam probability table (editorial — study prioritization only)

| Topic | Midterm | Final | Numerical | Diagram | Theory | Definition |
|-------|---------|-------|-----------|---------|--------|------------|
| AI intro | 70% | 20% | 0% | 0% | 60% | 40% |
| Uninformed search | 90% | 40% | 25% | 20% | 35% | 20% |
| A* search | 85% | 55% | 35% | 25% | 25% | 15% |
| CSP/Minimax | 75% | 40% | 20% | 25% | 35% | 20% |
| FOL/Resolution | 70% | 50% | 10% | 15% | 50% | 25% |
| Genetic algorithms | 40% | 75% | 35% | 15% | 30% | 20% |
| Expert systems | 0% | 60% | 0% | 15% | 55% | 30% |
| Neural networks | 0% | 80% | 25% | 20% | 35% | 20% |
| Backpropagation | 0% | 85% | 35% | 15% | 30% | 20% |
| Fuzzy logic | 0% | 65% | 25% | 15% | 35% | 25% |
---
## Marks allocation

| Component | Weight | Strategy |
|-----------|--------|----------|
| A* search traces | ~15% | OPEN/CLOSED list practice |
| Genetic Algorithms | ~13% | One generation by hand drill |
| Backpropagation | ~12% | 3-layer network, chain rule |
| FOL/Resolution | ~10% | English-to-FOL conversions |
| Fuzzy logic | ~10% | Mamdani inference trace |
| Theory | ~20% | Flashcards |
| Lab | ~20% | Clean code + analysis + plots |
---
## Exam stacks

- **Midterm (W8, 05–11 Oct):** past paper 60 min → blank page 30 min → error log 20 min. Answer A*/search traces first, theory second. A* trace target < 15 min. Sleep 8 h. Ledger frozen.
- **Final (W15, 23–29 Nov):** A* trace → GA → neural networks → FOL → fuzzy logic → theory. Write every step for trace problems — partial credit exists (process ≈ 70% of marks). Sleep 9 h (banked from W12).
- **Viva (W15, separate slot):** `AI-LABS.md` viva + `Viva-Book.md` — walkthrough first (3 min), then technical. Demonstrate your best implementation live; be ready to change a parameter and explain the expected effect.
---
## Resources
---
### YouTube playlists

| Playlist | Channel | Videos | Why |
|---|---|---|---|
| [Artificial Intelligence (Complete)](https://www.youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI) | Gate Smashers | 60 | Search, FOL, genetic algorithms, knowledge representation, neural networks, fuzzy logic, game theory |
| [Neural Networks (3Blue1Brown)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) | 3Blue1Brown | ~4 | Best visual explanation of how neural networks work |
| [Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ) | Andrej Karpathy | ~10 | From scratch in code. Build, train, and understand NNs deeply. |
---
### Textbooks

- **Russell & Norvig** — *Artificial Intelligence: A Modern Approach*, 4th Ed (2020). ISBN **978-0-13-461099-3**. The AI bible; Ch.3 search, Ch.4 GA, Ch.5–6 CSP/adversarial, Ch.8–10 FOL/KR, Ch.18 game theory, Ch.21 NN, Ch.27 prospects.
- **AIMA Python code + AIMA Exercises** — [aima.cs.berkeley.edu](https://aima.cs.berkeley.edu) · github.com/aimacode/aima-python
---
### Free MOOCs

| Course | Source | Notes |
|---|---|---|
| [NPTEL: Introduction to Artificial Intelligence](https://nptel.ac.in/courses/106105077) | IIT Kharagpur | Prof. Anupam Basu, Prof. S. Sarkar |
| [MIT OCW: 6.034 Artificial Intelligence](https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/) | MIT | Patrick Winston's legendary course |
| [edX: CS50's Introduction to AI with Python](https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python) | Harvard | Project-based intro |
---
### Problem banks / practice

| Resource | Link |
|---|---|
| AIMA Exercises Platform | https://aimacode.github.io/aima-exercises/ |
| AIMA Python Code | https://github.com/aimacode/aima-python |
| UC Berkeley CS188 Pac-Man AI Projects | https://inst.eecs.berkeley.edu/~cs188/ |
| MIT 6.034 Labs | https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/pages/assignments/ |
---
### Cheat sheets / revision notes

| Resource | Link |
|---|---|
| Stanford CS 221 Super Cheatsheet (PDF) | https://github.com/afshinea/stanford-cs-221-artificial-intelligence/blob/master/en/super-cheatsheet-artificial-intelligence.pdf |
| McGill COMP424 Cheatsheet (PDF) | https://www.cs.mcgill.ca/~yzhou53/stuff/comp424cheatsheet.pdf |
| Cheatography: AI Cheat Sheet | https://cheatsheetshero.com/user/all/161-artificial-intelligence-cheat-sheet |
---
### Secret weapon

**AIMA Code Repository** — https://github.com/aimacode/aima-python — the official Python implementation of every algorithm in Russell & Norvig. Pair with [AIMA Exercises](https://aimacode.github.io/aima-exercises/) for a complete self-study loop.
---
## Where-everything-lives index (source → embedded location)

| Source file | ~Lines | Embedded in |
|---|---|---|
| `01-Course-Overview.md` | 53 | NAV facts/weights + exam probability + marks allocation |
| `02-Official-Syllabus.md` | 86 | NAV (M1–M9 map, CLO, lab table + textbooks) |
| `03-Lab-Breakdowns/01-ANN-and-ML` | 42 | AI-LABS (Labs 1–5, group block) |
| `03-Lab-Breakdowns/02-Searching` | 21 | AI-LABS (Labs 6–7, group block) |
| `03-Lab-Breakdowns/03-CSP` | 21 | AI-LABS (Labs 8–9, group block) |
| `03-Lab-Breakdowns/04-Expert-Systems` | 28 | AI-LABS (Labs 10–12, group block) |
| `03-Lab-Breakdowns/05-Fuzzy-Logic` | 14 | AI-LABS (Lab 13, group block) |
| `Definition-Book.md` | 26 | per-week "Definitions" blocks (verbatim) |
| `Formula-Book.md` | 38 | per-week "Formulas" blocks (verbatim) |
| `Numerical-Book.md` | 25 | per-week "Numericals" numbered types (#33–45) |
| `Diagram-Book.md` | 21 | per-week "Diagrams" numbered refs (#1–15) |
| `Marks-Allocation.md` | 14 | NAV (this file) |
| `Resources.md` | 43 | NAV (this file) + per-week book/video lines |
| `Fear-Killer-Packs.md` | 77 | per-week packs (verbatim, with per-question offsets) |
| `Week-by-Week-Narrative.md` | 335 | per-week narrative (verbatim) |
| `Lab-Schedule.md` | 28 | NAV schedule + AI-LABS lab→week map |
| `Lab-Resources.md` | 140 | AI-LABS per-lab Resources lines |
| `Viva-Book.md` | 23 | AI-LABS viva section (verbatim) |
| `weeks/AI-W1…W14` + `README` | 682 | per-week anchors, P0 floor, drill targets |

> `Top-10-Tricky-Concepts.md` + `Top-100-Questions.md` are **deferred** for AI (decision 2026-08-04) — equivalent coverage lives in `Definition-Book.md`, `Fear-Killer-Packs.md`, and the topical books.

---

*Generated from the AI pack (CS-323). Every offset verified against `weeks/README.md`, `Week-by-Week-Narrative.md`, `Fear-Killer-Packs.md`, and the source files themselves.*

---
## Schedule at a glance

| W | Dates | Variant | File | Topics | Module | Lab |
|---|---|---|---|---|---|---|
| 1 | 17–23 Aug | P2 | BEFORE | Intro to AI & problem solving | 01 | Lab 1 |
| 2 | 24–30 Aug | P2 | BEFORE | Uninformed search | 02 | Lab 2 |
| 3 | 31 Aug–06 Sep | P2 | BEFORE | Informed search & A* | 02 | Lab 3 |
| 4 | 07–13 Sep | P0 | BEFORE | CSPs & adversarial search | 02 | Lab 4 |
| 5 | 14–20 Sep | P0 | BEFORE | FOL & knowledge representation | 03 + 05 | Lab 5 |
| 6 | 21–27 Sep | P2 | BEFORE | Genetic algorithms | 04 | Lab 6 |
| 7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision | 01–06 | Lab 7 |
| 8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — | — |
| 9 | 12–18 Oct | P1 | AFTER | Rule-based & expert systems (recovery) | 06 | Lab 8 |
| 10 | 19–25 Oct | P0 | AFTER | Neural networks I: perceptron | 07 | Lab 9 |
| 11 | 26 Oct–01 Nov | P2 | AFTER | Neural networks II: backpropagation | 07 | Lab 10 |
| 12 | 02–08 Nov | P0 | AFTER | Fuzzy logic | 08 | Lab 11 |
| 13 | 09–15 Nov | P1 | AFTER | Game theory & ethics | 09 | Lab 12 |
| 14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | 01–09 | Lab 13 |
| 15 | 23–29 Nov | FINAL | AFTER | Exam + lab viva — execute | — | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants are editorial tier assignments mirroring CA/PS — AI manifests carry no variant field. Lab column follows `Lab-Schedule.md` (workbook order; W8/W15 no lab).
