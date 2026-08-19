# CA-W10 — MULTIPLE ISSUE, SIMD & GPU

- **Week:** 10
- **Dates:** 19–25 Oct 2026
- **Rotation:** CA = Course A (Mon + Tue)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---
## Topics

- VLIW instruction packets vs 2-issue superscalar — `Fear-Killer-Packs.md#CA-W10` Q1
- Superscalar IPC with branch misprediction — `Fear-Killer-Packs.md#CA-W10` Q2
- SIMD vectorization + stride limits — `Fear-Killer-Packs.md#CA-W10` Q3
- SIMT execution + warp divergence — `Fear-Killer-Packs.md#CA-W10` Q4
- GPU memory hierarchy — `Fear-Killer-Packs.md#CA-W10` Q5
- **M6/M7 gap (VLIW/superscalar/ILP limits; SIMD/GPU)** — no chapter breakdown; pack-level, gap flagged
- **Source:** `Week-by-Week-Narrative.md` `## Week 10 — VLIW, Superscalar & SIMD/GPU` (lines 175–189)
---
## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md#CA-W10` (Q1 VLIW packet + Q4 SIMT timeline)
- [ ] Definition/formula skim — `Definition-Book.md` → Superscalar, VLIW; `Formula-Book.md` → Performance
- [ ] Same-problem drill — `Numerical-Book.md` #2 (CPU time); one type until speed target
---
## Deep study A (Mon/Tue — CA is A-slot)

**Pack:** `Fear-Killer-Packs.md#CA-W10` — Q1 VLIW packet first, then Q4, Q2, Q3.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #14 (VLIW instruction packet), #15 (superscalar pipeline) — **canonical**
- Definitions: `Definition-Book.md` → Superscalar, VLIW
- Top Qs: `Top-100-Questions.md` "Advanced" bucket (#76–90) — **P2/deferred**, split manually (VLIW→M6, GPU→M7)

**Same-problem drill target:** VLIW packet scheduling < 30 s; warp-divergence utilization calc < 2 min.
---
## Interleaved retrieval

- [ ] 30 min — topics from weeks 6/8 (branch prediction, midterm weak areas) — blank page, no peeking
---
## Ledger

- [ ] CA floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
