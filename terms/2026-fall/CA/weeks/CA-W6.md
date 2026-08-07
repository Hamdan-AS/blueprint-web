# CA-W6 — Pipeline Hazards II: Hazard Detection & Branch Prediction

- **Week:** 6
- **Dates:** 21–27 Sep 2026
- **Rotation:** CA = Course A (Mon + Tue)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- Forwarding unit design (comparators, priority; EX > MEM) — `Fear-Killer-Packs.md#CA-W6` Q1
- $zero forwarding exception + boolean guard — `Fear-Killer-Packs.md#CA-W6` Q2
- 1-bit vs 2-bit saturating predictor traces — `Fear-Killer-Packs.md#CA-W6` Q3–Q4
- Branch penalty with 2-bit predictor — `Fear-Killer-Packs.md#CA-W6` Q5
- **Source:** `Week-by-Week-Narrative.md` `## Week 6 — Pipeline Hazards II` (lines 104–117)

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md#CA-W6` (Q1 forwarding unit + Q3 predictor trace)
- [ ] Definition/formula skim — `Definition-Book.md` → Forwarding, Branch Prediction; `Formula-Book.md` → Performance
- [ ] Same-problem drill — `Numerical-Book.md` #14 (branch predictor accuracy), #15 (forwarding logic); one type until speed target

## Deep study A (Mon/Tue — CA is A-slot)

**Pack:** `Fear-Killer-Packs.md#CA-W6` — Q1 forwarding circuit first, then Q3, Q4, Q5.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #5 (hazard detection unit), #7/#8 (1-bit/2-bit predictor state machines) — **canonical**
- Definitions: `Definition-Book.md` → Forwarding, Branch Prediction
- Tricky: `Top-10-Tricky-Concepts.md` #1 ($zero forwarding trap), #2 (hazard priority), #4 (1-bit double misprediction)
- Chapter breakdown: `03-Chapter-Breakdowns/04-Pipeline-Hazards.md` (hazards only)

**Same-problem drill target:** 2-bit predictor trace of 10 outcomes without error; forwarding priority logic < 30 s.

## Interleaved retrieval

- [ ] 30 min — topics from weeks 1–4 (FSM control, microprogrammed control, pipeline intro) — blank page, no peeking

## Ledger

- [ ] CA floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
