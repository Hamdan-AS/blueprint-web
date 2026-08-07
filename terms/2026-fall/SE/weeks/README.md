# SE/weeks — Course-Specific Mapping

> Course-specific notes only. Canonical schema lives in `Shared/MANIFEST-SCHEMA.md` — do NOT restate it here.
> CS-326 is **theory+practical (3+1)** → SE manifests carry a `## Lab` section **only where the narrative defines a project-work milestone**.

## ⚠️ Flagged gaps (MASTER-DECISIONS Tier 13 #5 — do NOT fabricate)

SE is missing the files other courses have. Build is restricted to what exists:

- **No `Lab-Schedule.md`** → there is NO authoritative week→workbook-lab mapping. The 13-workbook-lab order lives only in `Lab-Resources.md`.
- **No `03-Lab-Breakdowns/`** → no per-lab breakdown files to index.
- **No `02-Official-Syllabus.md`** → examinability/weightage sourced from `01-Course-Overview.md` + `Marks-Allocation.md` only (Midterm 25 · Final 35 · Lab 40).
- **`00-MASTER-OVERVIEW.md` (legacy filename) is NOT present** in `SE/`. The narrative W1 pointer (line 30) now resolves to `Shared/07-Master-Overview.md` §Group Project Contingency Protocol (at line 128) — that file IS present and indexable. Manifests reference the narrative line, not the old filename.
- **W3, W7, W8, W10, W14 have no narrative `**Lab:**` milestone.** `## Lab`
  is authored where real content exists (W3, W14 now carry a populated
  `## Lab <title>` section). The canonical list of weeks with **no** populated
  lab lives in `term.json` (`lab_omission` → `{"SE": [7, 10]}`) and is enforced
  by `UI-Polished/lib/validate.py` (the `[lab]` check) — update `term.json`,
  not this note, if it ever changes.

## Rotation

SE = **Course B (Thu + Fri)** — 2 B-slots/wk, no A-slot (A = CCN Thu, AI Fri). `## Deep study B` is SE's content on both days. Same-problem drill runs in the P0 floor.

## Pack ↔ source anchor map

> SE packs are **topic-keyed** and do NOT align 1:1 with narrative weeks — pack numbers lag narrative weeks (pack Week 3 = project mgmt lands in narrative W4, etc.). Content match below is derived, not stated by the source.

| Manifest | Pack (Fear-Killer-Packs.md) | Week-by-Week-Narrative.md |
|---|---|---|
| SE-W1 | `### Week 1: topic-software-process-models` | Week 1 (lines 17–35) |
| SE-W2 | `### Week 2: topic-requirements-engineering` | Week 2 (lines 38–54) |
| SE-W3 | — (no pack: Analysis Modelling/DFD) | Week 3 (lines 57–74) |
| SE-W4 | `### Week 3: topic-project-management` | Week 4 (lines 77–93) |
| SE-W5 | `### Week 4: topic-software-design` | Week 5 (lines 96–112) |
| SE-W6 | `### Week 5: topic-agile-and-scrum` (+ `Week 4` Q3 patterns) | Week 6 (lines 115–133) |
| SE-W7 | — (revision) | Week 7 (lines 136–152) |
| SE-W8 | — (midterm, no pack) | Week 8 (lines 155–162) |
| SE-W9 | `### Week 6: topic-verification-and-validation` (Q3) | Week 9 (lines 165–184) |
| SE-W10 | `### Week 6` (Q1 cyclomatic complexity) | Week 10 (lines 187–204) |
| SE-W11 | `### Week 6` (Q2 EP/BVA) + `### Week 8` (Q3 SQA) | Week 11 (lines 207–224) |
| SE-W12 | `### Week 7: topic-cost-estimation` | Week 12 (lines 227–251) |
| SE-W13 | `### Week 8: topic-maintenance-and-sqa` (Q1/Q2) | Week 13 (lines 254–269) |
| SE-W14 | — (taper) | Week 14 (lines 272–293) |

## Lab → week map (from narrative `**Lab:**` milestones — the only authoritative source)

| Week | Milestone (narrative) | Workbook repo group (heuristic) |
|---|---|---|
| W1 | Form groups, choose topic, submit proposal | `Lab-Resources.md` Lab 1 (documentation tools — proposal/SRS templates) |
| W2 | Start SRS document | `Lab-Resources.md` Lab 1 (SRS IEEE 830/29148 templates) |
| W3 | Complete DFDs | `Lab-Resources.md` Lab 4 (DFD repos) |
| W4 | ProjectLibre scheduling; begin risk register | `Lab-Resources.md` Lab 2 (PM tools) |
| W5 | Architectural design document | `Lab-Resources.md` Lab 3 (class) + Lab 6 (deployment) |
| W6 | Implement one design pattern | `Lab-Resources.md` Lab 7 (design patterns) |
| W7 | — (no milestone) | — |
| W8 | — (midterm) | — |
| W9 | Begin test case design | `Lab-Resources.md` Lab 8 (testing) |
| W10 | — (no milestone; **Lab 8 heuristic, unconfirmed**) | `Lab-Resources.md` Lab 8 |
| W11 | Execute test cases, document results | `Lab-Resources.md` Lab 8 (testing) |
| W12 | Apply COCOMO to project (report) | no direct workbook lab (COCOMO is theory) |
| W13 | Finalize project report, complete documentation | no direct workbook lab |
| W14 | **No `**Lab:**` line** — "Submit final project deliverable" (narrative line 288) = lab-grade close-out | — |

> Workbook labs 9–13 (Scrum ×3, VCS ×2) have **no narrative milestone** mapped. If the lab schedule emerges, add a `Lab-Schedule.md` and re-map — do not guess.

## Flat-file pointers used (index, don't copy)

| Payload | Source | Primary refs |
|---|---|---|
| Definitions | `Definition-Book.md` | Agile, Cohesion, COCOMO, Coupling, Cyclomatic Complexity, DFD, EP, Functional/NFR, Scrum, SRS, Verification, Validation, WBS |
| Formulas | `Formula-Book.md` | Cyclomatic (M = E−N+2P), COCOMO basic + coefficients + intermediate EAF |
| Numericals | `Numerical-Book.md` | COCOMO #16–19; Testing #20–21 |
| Diagrams | `Diagram-Book.md` | #1–#20 (process models, DFD, WBS, Gantt, UML, CFG, patterns, Scrum, COCOMO, V-Model) |
