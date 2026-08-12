# CCN-W3 — Error Detection & Correction

- **Week:** 3
- **Dates:** 31 Aug – 6 Sep 2026
- **Rotation:** CCN = Course B (Wed) + Course A (Thu)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- Parity checks; Checksum — `Week-by-Week-Narrative.md` Week 3 (lines 58–76)
- CRC (Cyclic Redundancy Check): modulo-2 binary division — `Fear-Killer-Packs.md` `### Week 2` Q1
- Hamming code: single-bit error correction, parity positions 1/2/4/8 — Q2
- **Source:** `Week-by-Week-Narrative.md` `## Week 3 — Error Detection & Correction` (lines 58–76)

> **Killer trap:** CRC polynomial 1101 = x³ + x² + 1, degree 3 → append 3 zeros. One off-by-one zeros error sinks the calculation.
> **Killer trap:** Hamming parity bits sit at positions 1, 2, 4, 8 (powers of 2). Draw the parity-coverage table until reflexive.

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md` `### Week 2` (Q1 CRC division + Q2 Hamming syndrome)
- [ ] Definition/formula skim — `Definition-Book.md` → CRC; `Formula-Book.md` → CRC (append zeros, mod-2 division)
- [ ] Same-problem drill — `Numerical-Book.md` #22 (binary CRC division), #23 (CRC remainder); one type until speed target

## Deep study A (Thu — CCN is A-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 2: topic-data-link-layer-and-error-control` — Q1 first (hardest: full CRC division + error detection), then Q2 (Hamming).

**Bundled material (index, don't copy):**
- Definitions: `Definition-Book.md` → CRC
- Formulas: `Formula-Book.md` → CRC
- Numericals: `Numerical-Book.md` #22–23

**Same-problem drill target:** CRC division < 10 min with zero remainder check; Hamming syndrome correction < 15 min.

## Deep study B (Wed — CCN is B-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 2` — Q2 (Hamming code, parity placement + syndrome detection) — the 10-mark correction question.

**Bundled material (index, don't copy):**
- Numericals: `Numerical-Book.md` #22–23
- Formulas: `Formula-Book.md` → CRC

## Lab 3 — Configure File Sharing Server • 03-Lab-Breakdowns/03-File-Sharing-Server.md • Lab-Resources.md (Lab 3 repos)

- [ ] FTP server; upload/download across networks (`Week-by-Week-Narrative.md` Week 3 **Lab**)
- [ ] **Lab-grade only — NOT examinable** (Application layer, per `02-Official-Syllabus.md`). Keep for lab grade; do not spend theory time.
- [ ] Source: `Lab-Resources.md` Lab 3 block — e.g. `kill-ux/deep-in-net`, `EForce11/packet_tracer_rip_example`

## Interleaved retrieval

- [ ] 30 min — topics from week 2 (Ethernet frame, flow control) and week 1 (OSI/PDU)

## Ledger

- [ ] CCN floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
