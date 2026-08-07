# CCN-W4 — MAC Sublayer & CSMA/CD

- **Week:** 4
- **Dates:** 7–13 Sep 2026
- **Rotation:** CCN = Course B (Wed) + Course A (Thu)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- MAC protocols; ALOHA (pure, slotted) — `Fear-Killer-Packs.md` `### Week 3: topic-mac-and-csmacd` Q1
- CSMA; CSMA/CD; binary exponential backoff — Q3
- Ethernet; minimum frame size = 2 × T_prop × data rate — Q2
- Collision domain vs broadcast domain — `Week-by-Week-Narrative.md` Week 4 (lines 80–95)
- **Source:** `Week-by-Week-Narrative.md` `## Week 4 — MAC Sublayer & CSMA/CD` (lines 80–95)

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md` `### Week 3` (Q2 minimum frame size + Q1 ALOHA efficiency)
- [ ] Definition/formula skim — `Definition-Book.md` → CSMA/CD; `Formula-Book.md` → ALOHA (S = G·e^(−2G), slotted = G·e^(−G)) + CSMA/CD (min frame)
- [ ] Same-problem drill — `Numerical-Book.md` #24 (minimum frame size = 2 × T_prop × data rate); one type until speed target

## Deep study A (Thu — CCN is A-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 3: topic-mac-and-csmacd` — Q2 first (hardest: min frame at 100 Mbps → 1 Gbps upgrade), then Q1, Q3.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #15 (CSMA/CD collision detection)
- Definitions: `Definition-Book.md` → CSMA/CD
- Formulas: `Formula-Book.md` → ALOHA + CSMA/CD
- Numericals: `Numerical-Book.md` #24

**Same-problem drill target:** min frame size calc < 10 min; ALOHA efficiency at G = 0.5/1.0/2.0 with max point (1/2e ≈ 0.184, 1/e ≈ 0.368).

## Deep study B (Wed — CCN is B-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 3` — Q3 (binary exponential backoff trace) + Q1 (ALOHA vs Slotted ALOHA collapse point).

**Bundled material (index, don't copy):**
- Formulas: `Formula-Book.md` → ALOHA
- Numericals: `Numerical-Book.md` #24

## Lab

## Lab   Lab 4 — Configure Static Routes • 03-Lab-Breakdowns/04-Static-Routes.md • Lab-Resources.md (Lab 4 repos)

- [ ] Connect networks with `ip route` + default route; verify `show ip route` (`Week-by-Week-Narrative.md` Week 4 **Lab**)
- [ ] Source: `Lab-Resources.md` Lab 4 block — e.g. `ro-drick/Configuring-Static-Routes`, `ls028/packet-tracer-labs` (Lab 3 static routing)

## Interleaved retrieval

- [ ] 30 min — topics from week 3 (CRC division) and week 2 (Ethernet frame, flow control)

## Ledger

- [ ] CCN floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
