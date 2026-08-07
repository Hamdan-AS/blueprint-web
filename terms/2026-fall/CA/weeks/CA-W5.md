# CA-W5 — Pipeline Hazards I: Structural & Data Hazards

- **Week:** 5
- **Dates:** 14–20 Sep 2026
- **Rotation:** CA = Course A (Mon + Tue)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- Data hazards: RAW, WAW, WAR; RAR is NOT a hazard — `Fear-Killer-Packs.md#CA-W5` Q1–Q2
- Forwarding (EX/MEM vs MEM/WB) vs stalling (load-use) — `Fear-Killer-Packs.md#CA-W5` Q1, Q5
- Why WAR/WAW absent in 5-stage MIPS; out-of-order counter-example — `Fear-Killer-Packs.md#CA-W5` Q2
- Effective CPI with branches + structural stalls — `Fear-Killer-Packs.md#CA-W5` Q3
- **Source:** `Week-by-Week-Narrative.md` `## Week 5 — Pipeline Hazards I` (lines 85–100)

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md#CA-W5` (Q1 hazard identification + Q5 trace)
- [ ] Definition/formula skim — `Definition-Book.md` → RAW Hazard, Forwarding, Hazard; `Formula-Book.md` → Performance
- [ ] Same-problem drill — `Numerical-Book.md` #13 (hazard penalty); one type until speed target

## Deep study A (Mon/Tue — CA is A-slot)

**Pack:** `Fear-Killer-Packs.md#CA-W5` — Q1 hazard trace first (hardest), then Q2, Q3, Q5.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #4 (pipeline with forwarding paths) + #5 (hazard detection unit) — **canonical**
- Definitions: `Definition-Book.md` → RAW Hazard, Forwarding, Hazard
- Tricky: `Top-10-Tricky-Concepts.md` #2 (EX vs MEM hazard priority), #3 (load-use stall)
- Chapter breakdown: `03-Chapter-Breakdowns/04-Pipeline-Hazards.md` (hazards only)

**Same-problem drill target:** identify RAW/WAW/WAR + forward/stall decision < 30 s per sequence.

## Interleaved retrieval

- [ ] 30 min — topics from weeks 1–3 (multi-cycle datapath, FSM control) — blank page, no peeking

## Ledger

- [ ] CA floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
