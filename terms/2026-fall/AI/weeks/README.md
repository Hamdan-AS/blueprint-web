# AI/weeks — Course-Specific Mapping

> Course-specific notes only. Canonical schema lives in `Shared/MANIFEST-SCHEMA.md` — do NOT restate it here.
> CS-323 is **theory+practical (3+1)** → every AI manifest carries a `## Lab` section.

## Rotation

AI = **Course A** (Wed + Fri) — 2 A-slots/wk. Deep study A is AI's content every AI day.

## Pack ↔ source anchor map

| Manifest | Pack ID | Fear-Killer-Packs.md | Week-by-Week-Narrative.md |
|---|---|---|---|
| AI-W1 | — (no pack) | — | Week 1 (lines 18–33) |
| AI-W2 | — (no pack) | — | Week 2 (lines 37–52) |
| AI-W3 | AI-W3 | `### AI-W3: Search` | Week 3 (lines 56–74) |
| AI-W4 | AI-W4 | `### AI-W4: CSP & Adversarial Search` | Week 4 (lines 78–96) |
| AI-W5 | AI-W5 | `### AI-W5: First-Order Logic & Knowledge Representation` | Week 5 (lines 100–116) |
| AI-W6 | AI-W6 | `### AI-W6: Genetic Algorithms` | Week 6 (lines 120–141) |
| AI-W7 | — (revision) | — | Week 7 (lines 145–160) |
| AI-W8 | — (midterm, no pack) | — | Week 8 (lines 164–174) |
| AI-W9 | AI-W9 | `### AI-W9: Rule-Based Systems` | Week 9 (lines 177–197) |
| AI-W10 | — (no pack) | — | Week 10 (lines 201–217) |
| AI-W11 | AI-W11 | `### AI-W11: Neural Networks` | Week 11 (lines 221–241) |
| AI-W12 | AI-W12 | `### AI-W12: Fuzzy Logic` | Week 12 (lines 245–263) |
| AI-W13 | AI-W13 | `### AI-W13: Game Theory & Ethics` | Week 13 (lines 268–283) |
| AI-W14 | — (taper) | — | Week 14 (lines 287–308) |

**Note:** only 8 packs exist (AI-W3/4/5/6/9/11/12/13). W1/W2/W10 and W7/W14 (revision) have no pack → deep study sourced from `Week-by-Week-Narrative.md` + R&N chapters.

## Schema files — explicit deferral (decided 2026-08-04)

`Shared/MANIFEST-SCHEMA.md` §4 lists `Top-10-Tricky-Concepts.md` and `Top-100-Questions.md` for AI, but neither exists in `AI/`. **Deferred by decision** — not authored for Fall 2026. Equivalent coverage lives in `Fear-Killer-Packs.md`, `Top-10-Tricky-Concepts.md`-style items inside `Definition-Book.md`, and the topical books. Revisit before next term (ANALYSIS-PLAN decision 4.7).

## Lab → week map (from `Lab-Schedule.md`)

| Week | Lab # | Workbook title | Group breakdown |
|---|---|---|---|
| W1 | 1 | Simple NN Using Perceptron | `03-Lab-Breakdowns/01-ANN-and-ML.md` |
| W2 | 2 | ANN Using Perceptron | `01-ANN-and-ML.md` |
| W3 | 3 | Data Preprocessing for ANN | `01-ANN-and-ML.md` |
| W4 | 4 | ANN Using ADALINE | `01-ANN-and-ML.md` |
| W5 | 5 | ANN Using Backward Propagation | `01-ANN-and-ML.md` |
| W6 | 6 | Uninformed Searching Techniques | `02-Searching.md` |
| W7 | 7 | Informed Searching Techniques | `02-Searching.md` |
| W8 | — | **MIDTERM — no lab** | — |
| W9 | 8 | CSPs by Enforcing Arc Consistency | `03-CSP.md` |
| W10 | 9 | CSPs Using Stochastic Local Search | `03-CSP.md` |
| W11 | 10 | Knowledge-Based Systems | `04-Expert-Systems.md` |
| W12 | 11 | Complex Rule-Based Systems | `04-Expert-Systems.md` |
| W13 | 12 | Data-Driven Programming in Expert Systems | `04-Expert-Systems.md` |
| W14 | 13 | Fuzzy Logic Based System | `05-Fuzzy-Logic.md` |

Per-lab GitHub repos: `Lab-Resources.md` (13 lab blocks, all live-verified). GA has **no lab** (theory pillar, self-study with `aimacode/aima-python`).

## Flat-file pointers used (index, don't copy)

| Payload | Source | Primary refs |
|---|---|---|
| Definitions | `Definition-Book.md` | A*, Admissible, Backprop, CSP, FOL, Fuzzy, GA, Minimax, Perceptron, Resolution |
| Formulas | `Formula-Book.md` | A* (f=g+h), Minimax, GA (p(i)=f(i)/Σf), Perceptron, Backprop chain rule |
