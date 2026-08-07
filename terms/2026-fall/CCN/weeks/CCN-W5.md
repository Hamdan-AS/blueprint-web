# CCN-W5 — Network Layer & IPv4

- **Week:** 5
- **Dates:** 14–20 Sep 2026
- **Rotation:** CCN = Course B (Wed) + Course A (Thu)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---

## Topics

- Network layer functions; routing vs forwarding — `Week-by-Week-Narrative.md` Week 5 (lines 99–114)
- IPv4 header format (20 bytes, every field); fragmentation — `Fear-Killer-Packs.md` `### Week 4: topic-network-layer-and-ip` Q2
- Classful addressing (A, B, C, D, E); private IP ranges — Q5
- IPv6 vs IPv4; SLAAC; dual-stack transition — Q4
- NAT — `Week-by-Week-Narrative.md` Week 5
- **Source:** `Week-by-Week-Narrative.md` `## Week 5 — Network Layer & IPv4` (lines 99–114)

## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md` `### Week 4` (Q2 fragmentation + Q5 classful/CIDR)
- [ ] Definition/formula skim — `Definition-Book.md` → NAT, Subnet Mask; `Formula-Book.md` → Subnetting (number of subnets = 2^borrowed, usable hosts = 2^host − 2)
- [ ] Same-problem drill — `Numerical-Book.md` #25 (number of subnets), #26 (usable hosts); one type until speed target

## Deep study A (Thu — CCN is A-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 4: topic-network-layer-and-ip` — Q2 first (hardest: MTU 1500 fragmentation offsets + MF flag), then Q5, Q4.

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #4 (IPv4 header) + #5 (IPv6 header)
- Definitions: `Definition-Book.md` → NAT, Subnet Mask
- Formulas: `Formula-Book.md` → Subnetting

**Same-problem drill target:** IPv4 header draw < 15 min; class-from-first-octet + private-range recall < 30 s; fragmentation offsets correct.

## Deep study B (Wed — CCN is B-slot)

**Pack:** `Fear-Killer-Packs.md` `### Week 4` — Q4 (IPv4 vs IPv6 field-by-field + IPv6 compression) + Q5 (classful vs classless).

**Bundled material (index, don't copy):**
- Diagrams: `Diagram-Book.md` #4, #5
- Definitions: `Definition-Book.md` → NAT, Subnet Mask

## Lab

## Lab   Lab 5 — Configure RIP / RIP v2 • 03-Lab-Breakdowns/05-RIP.md • Lab-Resources.md (Lab 5 repos)

- [ ] `router rip` / RIPv2, dynamic route learning, `show ip route` (`Week-by-Week-Narrative.md` Week 5 **Lab**)
- [ ] Source: `Lab-Resources.md` Lab 5 block — e.g. `PomudithaUmayangi/Configure-RIPv2-in-Packet-Tracer`, `chabbax/cisco-packet-tracer-example`

## Interleaved retrieval

- [ ] 30 min — topics from week 4 (ALOHA/CSMA-CD), week 3 (CRC), and week 1 (OSI/PDU)

## Ledger

- [ ] CCN floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`
