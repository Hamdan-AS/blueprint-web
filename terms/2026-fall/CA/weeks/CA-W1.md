# CA-W1 — MIPS ISA & Single-Cycle Datapath

- **Week:** 1
- **Dates:** 17–23 Aug 2026
- **Rotation:** CA = Course A (Mon + Tue)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- MIPS instruction formats (R-type, I-type, J-type) — `Fear-Killer-Packs.md#CA-W1` Q1–Q2
- Register conventions ($zero, $a0-$a3, $v0-$v1, $t0-$t9, $s0-$s7, $sp, $fp, $ra) — `Fear-Killer-Packs.md#CA-W1` Q2
- Single-cycle datapath design + control signals — `Fear-Killer-Packs.md#CA-W1` Q3
- Cycle-time computation; `lw` critical path — `Fear-Killer-Packs.md#CA-W1` Q4
- **Source:** `Week-by-Week-Narrative.md` `## Week 1 — MIPS ISA & Single-Cycle Datapath` (lines 17–30)

> **Examinability (locked):** ISA/single-cycle = **background-review (P2)** per syllabus. Covered for foundation, NOT in P0 floor. Do not over-invest.

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md#CA-W1` (Q1 decode/encode + Q3 datapath draw)
- [ ] Definition/formula skim — `Definition-Book.md` → ISA, Single-cycle Datapath; `Formula-Book.md` → CPU Time, Speedup
- [ ] Same-problem drill — `Numerical-Book.md` #1 (CPI from mix), #2 (CPU time); one type until speed target

## Deep study A (Mon/Tue — CA is A-slot)

**Pack:** `Fear-Killer-Packs.md#CA-W1` — attack Q1/Q3 first (hardest), then Q2/Q4.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #1 (single-cycle datapath) + #9 (MIPS formats) — **canonical**
- Definitions: `Definition-Book.md` → ISA, Single-cycle Datapath; `03-Chapter-Breakdowns/01-Instruction-Set-Architecture.md` → $zero register convention
- Formulas: `Formula-Book.md` → Performance (CPU Time, Speedup)
- Tricky: `Top-10-Tricky-Concepts.md` #6 (multi-cycle vs single-cycle paradox)
- Chapter breakdown: `03-Chapter-Breakdowns/01-Instruction-Set-Architecture.md`, `03-Chapter-Breakdowns/02-Single-Cycle-Datapath.md`

**Same-problem drill target:** single-cycle datapath draw < 15 min; decode/encode instruction < 30 s.

## Interleaved retrieval

- [ ] 30 min — weeks: none (W1 has no prior weeks) — use `Top-10-Tricky-Concepts.md` definitions instead

## Ledger

- [ ] CA floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
