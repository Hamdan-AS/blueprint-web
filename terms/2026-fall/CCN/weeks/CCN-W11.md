# CCN-W11 — Transport Layer: TCP & UDP

- **Week:** 11
- **Dates:** 26 Oct – 1 Nov 2026
- **Rotation:** CCN = Course B (Wed) + Course A (Thu)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- Transport layer services; UDP header (8 bytes) — `Fear-Killer-Packs.md` `### Week 6: topic-transport-layer` Q3
- TCP header (20+ bytes); TCP connection management (3-way handshake, 4-way termination, TIME_WAIT) — Q1
- Flow control (sliding window); TCP segment structure — Q2
- Selective Repeat vs Go-Back-N — Q2
- **Source:** `Week-by-Week-Narrative.md` `## Week 11 — Transport Layer: TCP & UDP` (lines 219–236)

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md` `### Week 6` (Q1 TCP header + handshake trace)
- [ ] Definition/formula skim — `Definition-Book.md` → TCP, UDP, RTT; `Formula-Book.md` n/a this week
- [ ] Same-problem drill — `Numerical-Book.md` n/a this week; drill: TCP header draw + 3-way handshake with sequence numbers from blank page

## Deep study A (Thu — CCN is A-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 6: topic-transport-layer` — Q1 first (hardest: full TCP header + handshake + termination with ISN/window sizes), then Q3.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #6 (TCP header), #7 (UDP header), #8 (3-way handshake), #9 (TCP state transition)
- Definitions: `Definition-Book.md` → TCP, UDP, RTT

**Same-problem drill target:** TCP header draw < 15 min; 3-way handshake + 4-way termination trace < 10 min with sequence numbers.

## Deep study B (Wed — CCN is B-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 6` — Q2 (SR vs GBN retransmission behavior on packet-3 loss) + Q3 (TCP vs UDP overhead).

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #8
- Definitions: `Definition-Book.md` → TCP, UDP

## Lab

## Lab   Lab 11 — Implement NAT • 03-Lab-Breakdowns/11-NAT.md • Lab-Resources.md (Lab 11 repos)

- [ ] Static/dynamic NAT + PAT overload, `show ip nat translations` (`Week-by-Week-Narrative.md` Week 11 **Lab**)
- [ ] Source: `Lab-Resources.md` Lab 11 block — e.g. `c4geeks/ccna-labs` (nat-pat), `TheCleverIdiott/Computer-Networks-Cisco-Packet-Tracer`

## Interleaved retrieval

- [ ] 30 min — weeks {10,9,7}: 5 subnetting problems + 2 CRC calculations, then OSPF areas and DR/BDR election — all closed book (narrative Wk11 interleaved retrieval)

## Ledger

- [ ] CCN floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
