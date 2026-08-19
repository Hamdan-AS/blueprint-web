# CA/WEEKS — COURSE-SPECIFIC MAPPING

> Course-specific notes only. Canonical schema lives in `Shared/MANIFEST-SCHEMA.md` — do NOT restate it here.
> CS-328 is **theory-only (3+0)** → NO `## Lab` section in any CA manifest.
---
## Pack ↔ source anchor map (W1–W14)

| Manifest | Pack ID | Fear-Killer-Packs.md | Week-by-Week-Narrative.md |
|---|---|---|---|
| CA-W1 | CA-W1 | `### CA-W1: topic-mips-isa-and-single-cycle` | `## Week 1 — MIPS ISA & Single-Cycle Datapath` (lines 17–30) |
| CA-W2 | CA-W2 | `### CA-W2: topic-multi-cycle-datapath` | `## Week 2 — Multi-Cycle Datapath` (lines 33–46) |
| CA-W3 | CA-W3 | `### CA-W3: topic-fsm-control-unit` | `## Week 3 — FSM Control Unit Design` (lines 49–64) |
| CA-W4 | CA-W4 | `### CA-W4: topic-microprogrammed-control-and-pipeline-intro` | Week 4 (lines 68–81) |
| CA-W5 | CA-W5 | `### CA-W5: topic-pipeline-hazards` | Week 5 (lines 85–90+) |
| CA-W6 | CA-W6 | `### CA-W6: topic-forwarding-hazard-detection-and-branch-prediction` | Week 6 |
| CA-W7 | CA-W7 | `### CA-W7: topic-midterm-revision` | Week 7 (midterm revision) |
| Wk8 | — | `### Week 8: MIDTERM EXAM WEEK` (no pack) | — |
| CA-W9 | CA-W9 | `### CA-W9: topic-compiler-ilp-techniques` | Week 9 (recovery + ILP) |
| CA-W10 | CA-W10 | `### CA-W10: topic-multiple-issue-simd-and-gpu` | Week 10 |
| CA-W11 | CA-W11 | `### CA-W11: topic-cache-design` | Week 11 |
| CA-W12 | CA-W12 | `### CA-W12: topic-virtual-memory-and-tlb` | Week 12 |
| CA-W13 | CA-W13 | `### CA-W13: topic-raid-and-advanced-topics` | Week 13 |
| CA-W14 | CA-W14 | `### CA-W14: topic-final-taper` | Week 14 (final revision) |
---
## Content resolutions (locked 2026-08-02)

- **W1 examinability:** ISA/single-cycle = **background-review (P2)** per syllabus. Not in P0 floor.
- **Diagrams:** `Diagram-Book.md` is **canonical** (supersedes Top-20 overlap).
- **Top-100 "Advanced" bucket (#76–90):** **P2/deferred** — VLIW, RAID, GPU, Amdahl split manually to their modules.
- **M-module gap:** M2/M4/M5/M6/M7/M8 have no chapter breakdowns → mapped at **pack level**; gaps flagged in manifest, not fabricated. W3 = M2 gap-closure demo.
---
## Flat-file pointers used (index, don't copy)

| Payload | Source | W1–W3 refs |
|---|---|---|
| Definitions | `Definition-Book.md` | ISA, Single-cycle, Multi-cycle, Microprogrammed, Hazard, RAW |
| Formulas | `Formula-Book.md` | Performance → CPU Time, Speedup |
| Diagrams | `Diagram-Book.md` (canonical) | #1 single-cycle, #2 multi-cycle, #6 FSM, #9 MIPS formats |
| Numericals | `Numerical-Book.md` | #1 CPI from mix, #2 CPU time |
| Tricky | `Top-10-Tricky-Concepts.md` | #6 multi-cycle vs single-cycle paradox |
| Top Qs | `Top-100-Questions.md` | W1–W3 → ISA/DP bucket + Pipelining bucket (Advanced = P2) |
