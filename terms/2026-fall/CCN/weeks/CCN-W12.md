# CCN-W12 — TCP CONGESTION CONTROL

- **Week:** 12
- **Dates:** 2–8 Nov 2026
- **Rotation:** CCN = Course B (Wed) + Course A (Thu)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---
## Topics

- Congestion vs flow control — `Fear-Killer-Packs.md` `### Week 7: topic-tcp-congestion-control` Q1
- Slow start (exponential); Congestion avoidance/AIMD (linear) — Q1
- Fast retransmit (3 duplicate ACKs); Fast recovery — Q2
- TCP Tahoe vs Reno vs Cubic — Q2
- **Source:** `Week-by-Week-Narrative.md` `## Week 12 — TCP Congestion Control` (lines 240–261)

> **Killer trap:** Tahoe = reset cwnd to 1 (slow start) after 3 dup ACKs; Reno = reset to ssthresh (fast recovery). Common 10-mark question.
> **Sleep banking:** begin sleeping 9 h (bedtime 22:00) for 7 nights leading to finals — inoculates against exam-night sleep loss.
---
## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md` `### Week 7` (Q1 cwnd evolution trace + Q2 Tahoe-vs-Reno)
- [ ] Definition/formula skim — `Definition-Book.md` → TCP; `Formula-Book.md` → TCP Congestion Control (slow start, AIMD, ssthresh = cwnd/2, Tahoe vs Reno)
- [ ] Same-problem drill — `Numerical-Book.md` #31 (cwnd evolution), #32 (ssthresh update); one type until speed target
---
## Deep study A (Thu — CCN is A-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 7: topic-tcp-congestion-control` — Q1 first (hardest: cwnd trace for Tahoe to triple-dup-ACK), then Q2.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #10 (TCP congestion window sawtooth)
- Definitions: `Definition-Book.md` → TCP
- Formulas: `Formula-Book.md` → TCP Congestion Control
- Numericals: `Numerical-Book.md` #31–32

**Same-problem drill target:** cwnd trace closed book, phase-labelled (slow start → congestion avoidance → fast retransmit → recovery); Tahoe-vs-Reno comparison from memory.
---
## Deep study B (Wed — CCN is B-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 7` — Q2 (Tahoe vs Reno scenario: timeout at cwnd=20) + Q3 (RTT 100 ms / 1460-byte segment → RTTs until loss).

**Bundled material (index, don't copy):**
- Formulas: `Formula-Book.md` → TCP Congestion Control
- Numericals: `Numerical-Book.md` #31–32
---
## Lab 12 — Configure BGP • 03-Lab-Breakdowns/12-BGP.md • Lab-Resources.md (Lab 12 repos)

- [ ] eBGP/iBGP neighbors, `show ip bgp summary` (`Week-by-Week-Narrative.md` Week 12 **Lab**)
- [ ] Source: `Lab-Resources.md` Lab 12 block — e.g. `mushfiqur-rahman/bgp-configuration`, `NetworkThinkTank-Labs/lab-01-bgp-fundamentals`
---
## Interleaved retrieval

- [ ] 30 min — weeks {11,10,8}: TCP header draw, 3-way handshake with sequence numbers, then Tahoe vs Reno side-by-side — all closed book (narrative Wk12 interleaved retrieval)
---
## Ledger

- [ ] CCN floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
