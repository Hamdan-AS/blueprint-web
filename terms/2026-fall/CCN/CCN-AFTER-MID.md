# CCN-AFTER-MID — WEEKS 9–15 · 12 OCT – 29 NOV 2026 · FINAL (W15)

<!-- colors: 9-10:#9adba4:#15803d 11:#ffd27a:#b45309 12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 9–15 (12 Oct – 29 Nov 2026) — routing algorithms, routing protocols & IPv6, transport layer (TCP/UDP), TCP congestion control, advanced topics (MPLS/SDN/wireless/multimedia), final taper, ending at the Week 15 final + lab viva.
> **Siblings:** `CCN-NAV.md` (master map) · `CCN-BEFORE-MID.md` (Weeks 1–8) · `CCN-LABS.md` (labs). Week-colored headers below match the NAV schedule.
> **Exam split:** ~35% numericals + ~65% theory. Final-weighted toward subnetting, routing, TCP/UDP, and TCP congestion (85%/75%/80%/75% final prob — see NAV). Subnetting numericals are the free marks.
> **Exam order:** subnetting → CRC/CSMA/CD/TCP-cwnd numericals → header/diagram draws → theory (final). Lab viva in a separate W15 slot.

---
## At a glance (W9–W15)

| W | Dates | Variant | File | Topics |
|---|---|---|---|---|
| W9 | 12–18 Oct | P1 | AFTER | Routing algorithms (recovery) |
| W10 | 19–25 Oct | P2 | AFTER | Routing protocols & IPv6 |
| W11 | 26 Oct–01 Nov | P2 | AFTER | Transport layer — TCP & UDP |
| W12 | 02–08 Nov | P2 | AFTER | TCP congestion control |
| W13 | 09–15 Nov | P1 | AFTER | SDN, MPLS, Wireless & Multimedia |
| W14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST |
| W15 | 23–29 Nov | FINAL | AFTER | Exam + lab viva — execute |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants editorial (CCN manifests carry no variant field).

---
### W9 — Routing Algorithms (Recovery Week) · 12–18 Oct · P1 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P1 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Recovery week — ledger MUST clear to 0.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 9 | lines 174–194 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 5: topic-routing | lines 41–46 |
| Week manifest | `weeks/CCN-W9.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| OSPF | Open Shortest Path First — a link-state routing protocol that uses Dijkstra's algorithm. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week; Dijkstra/DV are procedural) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#12** Dijkstra routing algorithm trace |
| Numericals | — (none; drill = Dijkstra trace + DV iterations + subnetting speed drills) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.5 (routing) |
| Gate Smashers | Routing video |

#### Fear-Killer Pack CCN-W9 (verbatim)

**Resources:** Kurose & Ross Ch.5 • Tanenbaum Ch.5

1. Run Dijkstra's algorithm on a 6-node network with the following link costs: AB=4, AC=2, BC=5, BD=10, BE=3, CD=8, CE=2, DE=6, DF=1, EF=3. Show the forwarding table computed at node A after the algorithm converges, with step-by-step shortest path calculations.
2. Given a 4-node network using distance vector routing, show the initial tables and the tables after each iteration until convergence. If the link A-B fails, trace the count-to-infinity problem and show how poison reverse resolves it. How many iterations without poison reverse vs with it?
3. Compare OSPF and BGP across: protocol type (link state vs path vector), metric used, convergence speed, scalability (AS vs global), and policy support. Given a multi-homed AS connected to two ISPs, explain why BGP is necessary and OSPF alone would be insufficient for inter-domain routing.

#### Narrative — Week 9 (verbatim)

**Topics:** Routing fundamentals; Dijkstra's algorithm (link state); Distance vector routing (Bellman-Ford); Count-to-infinity problem; Poison reverse

**Resources:** Kurose & Ross Ch.5 (routing); Gate Smashers — Routing

**Recovery note:** If midterm scored below 85%, take 2 days at reduced load (20 hrs/week total). Recalibrate — a 78% midterm with 95%+ finals still yields B+/A-.

**Practice:**
- Dijkstra: trace step-by-step for a 6-node network, show forwarding table — closed book
- Distance vector: simulate iterations until convergence — blank page
- Count-to-infinity: show the problem, show poison reverse solution — retrieve from memory
- **Interleaved retrieval (20 min):** 10 subnetting speed drills — /16 through /30, 30 seconds each target. Then 3 CRC calculations. All closed book.

**Retrieval protocol:** Every practice item starts from a blank page. No peeking at notes.

**Lab:** Lab 8 (Access Lists) + Lab 9 — LAN switch + STP (merged into W9; see `03-Lab-Breakdowns/08-Access-Lists.md` + `09-LAN-Switch-STP.md`): ACLs, `ip access-group`, implicit deny; MAC learning, root bridge, `show spanning-tree`

**Deliverable:** Dijkstra trace + DV simulation for a given topology

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Labs 8 + 9 (merged) — Access Lists + LAN Switch/STP** (official map via `Lab-Schedule.md`). **Labs 8+9 merge into W9** — W8 midterm had no lab.

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 6-node Dijkstra + Q2 count-to-infinity) · def skim (OSPF) · same-problem drill (Dijkstra trace + DV iterations)
- **Same-problem drill target:** Dijkstra trace closed book < 20 min; subnetting re-drill < 30 s (interleaved from narrative Wk9)
- **Deliverable:** Dijkstra trace + DV simulation for a given topology
- **Trap:** recovery mandate — ledger MUST clear to 0 before Sunday night; count-to-infinity resolves only with poison reverse (or split horizon + poisoned reverse)

---
### W10 — Routing Protocols & IPv6 · 19–25 Oct · P2 · 6 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 10 | lines 198–215 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 5: topic-routing (Q3) + Week 4: topic-network-layer-and-ip (Q4 IPv6) | lines 41–46 + L38 |
| Week manifest | `weeks/CCN-W10.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| OSPF | Open Shortest Path First — a link-state routing protocol that uses Dijkstra's algorithm. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#5** IPv6 header · **#13** OSPF areas (backbone, regular, stub) |
| Numericals | `Numerical-Book.md` **#29** Supernetting route aggregation · **#30** CIDR address range |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.5 |
| Gate Smashers | OSPF, BGP, IPv6 videos |

#### Fear-Killer Pack CCN-W10 (verbatim — Q3 + Q4)

**Resources (Week 5 Q3):** Kurose & Ross Ch.5 • Tanenbaum Ch.5

3. Compare OSPF and BGP across: protocol type (link state vs path vector), metric used, convergence speed, scalability (AS vs global), and policy support. Given a multi-homed AS connected to two ISPs, explain why BGP is necessary and OSPF alone would be insufficient for inter-domain routing.

**Resources (Week 4 Q4):** Gate Smashers (Subnetting videos) • Kurose & Ross Ch.4 • subnetipv4.com

4. Compare the IPv4 and IPv6 headers field by field — which IPv4 fields did IPv6 drop and why? Compress the IPv6 address 2001:0DB8:0000:0000:0000:FF00:0042:8329 to its shortest valid form, showing every rule you apply. Differentiate unicast, multicast, and anycast addressing. How does a host obtain an address via SLAAC, and why is dual-stack the dominant transition mechanism?

#### Narrative — Week 10 (verbatim)

**Topics:** RIP, OSPF (areas, DR/BDR), BGP (path attributes, path selection); IPv6 header format; IPv6 addressing; Transition from IPv4 (dual stack, tunneling, NAT64)

**Resources:** Kurose & Ross Ch.5; Gate Smashers — OSPF, BGP, IPv6

**Practice:**
- OSPF: areas, LSA types, DR/BDR election — retrieve from memory
- BGP: path selection order (highest weight, highest local preference, shortest AS path) — closed book
- IPv6 header: simplify (8 fields vs IPv4's 12+) — draw both headers from memory
- IPv6 address types: unicast, multicast, anycast — blank page comparison
- **Interleaved retrieval (20 min):** 10 subnetting speed drills (any /16-/30, 30 sec target each) + 2 CRC calculations. All closed book, from blank page. Subnetting is the highest-ROI skill — retrieve it before it decays.

**Lab:** Lab 10 — Virtual LANs (see `03-Lab-Breakdowns/10-Virtual-LANs.md`): VLANs, trunk, router-on-a-stick inter-VLAN routing

**Deliverable:** OSPF configuration summary + IPv4 vs IPv6 header comparison

**Time budget:** 6 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 10 — Configure Virtual LANs** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q3 OSPF-vs-BGP + Q4 IPv6 compression) · def skim (OSPF) · same-problem drill #29–30
- **Same-problem drill target:** IPv6 address compression (all rules) < 5 min; IPv4-vs-IPv6 header comparison from blank page
- **Deliverable:** OSPF configuration summary + IPv4 vs IPv6 header comparison
- **Trap:** BGP path selection order (weight → local preference → AS path); IPv6 compression — one run of zeros only, and it must be the longest run

---
### W11 — Transport Layer: TCP & UDP · 26 Oct–01 Nov · P2 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 11 | lines 219–236 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 6: topic-transport-layer | lines 48–53 |
| Week manifest | `weeks/CCN-W11.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| TCP | Transmission Control Protocol — a connection-oriented, reliable transport protocol. |
| UDP | User Datagram Protocol — a connectionless, unreliable transport protocol. |
| RTT | Round Trip Time — the time for a packet to travel from source to destination and back. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#6** TCP header · **#7** UDP header · **#8** 3-way handshake · **#9** TCP state transition diagram |
| Numericals | — (none; drill = TCP header draw + 3-way handshake with sequence numbers) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.3 |
| Gate Smashers | TCP/UDP videos |

#### Fear-Killer Pack CCN-W11 (verbatim)

**Resources:** Kurose & Ross Ch.3 • Tanenbaum Ch.6

1. Draw the complete TCP header with all fields and their sizes. Then trace the 3-way handshake: Client (port 54321) connects to Server (port 80). Show SYN, SYN-ACK, ACK with sequence numbers, ISN selection, and window sizes. Then trace 4-way termination showing FIN, ACK, FIN, ACK and the TIME_WAIT state.
2. Compare selective repeat and Go-Back-N for a window size of 4 and 10 packets. Show the sender and receiver behavior when packet 3 is lost but 4, 5, 6 arrive correctly. How many retransmissions does each protocol require? Which uses less buffer at the receiver?
3. Differentiate TCP and UDP. An application sends 100-byte messages every 10ms. Compute the header overhead percentage for TCP vs UDP. Now the application requires in-order delivery but can tolerate some loss — which protocol do you choose and why?

#### Narrative — Week 11 (verbatim)

**Topics:** Transport layer services; UDP header; TCP header; TCP connection management (3-way handshake, 4-way termination); Flow control (sliding window); TCP segment structure

**Resources:** Kurose & Ross Ch.3; Gate Smashers — TCP/UDP

**Practice:**
- Draw UDP header: 8 bytes (source port, dest port, length, checksum) — closed book
- Draw TCP header: 20+ bytes, every field with size — from memory
- Trace 3-way handshake: SYN, SYN-ACK, ACK — show sequence numbers — blank page
- Draw TCP state transition diagram — from memory
- **Interleaved retrieval (20 min):** 5 subnetting problems + 2 CRC calculations — speed drill. Then OSPF areas and DR/BDR election from memory. All closed book.

**Lab:** Lab 11 — NAT (see `03-Lab-Breakdowns/11-NAT.md`): static/dynamic NAT + PAT overload, `show ip nat translations`

**Deliverable:** TCP header diagram + handshake trace + state transition diagram

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 11 — Implement NAT** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 TCP header + handshake trace) · def skim (TCP, UDP, RTT) · same-problem drill (TCP header draw + handshake)
- **Same-problem drill target:** TCP header draw < 15 min; 3-way handshake + 4-way termination trace < 10 min with sequence numbers
- **Deliverable:** TCP header diagram + handshake trace + state transition diagram
- **Trap:** TIME_WAIT on the side that sends the last FIN-ACK; SR retransmits only packet 3, GBN retransmits 3-6 — the count is the exam discriminator

---
### W12 — TCP Congestion Control · 02–08 Nov · P2 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Start sleep banking: 9 hrs (bedtime 22:00) for 7 nights.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 12 | lines 240–261 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 7: topic-tcp-congestion-control | lines 55–60 |
| Week manifest | `weeks/CCN-W12.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| TCP | Transmission Control Protocol — a connection-oriented, reliable transport protocol. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| TCP Congestion Control | Slow Start: cwnd doubles every RTT (exponential) |
| TCP Congestion Control | Congestion Avoidance: cwnd += 1/cwnd per ACK (AIMD, linear) |
| TCP Congestion Control | ssthresh = cwnd / 2 on loss |
| TCP Congestion Control | Tahoe: cwnd = 1 on loss (slow start) |
| TCP Congestion Control | Reno: cwnd = ssthresh on triple duplicate ACK (fast recovery) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#10** TCP congestion window sawtooth |
| Numericals | `Numerical-Book.md` **#31** cwnd evolution · **#32** ssthresh update |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.3 (congestion control) |
| Gate Smashers | Congestion Control video |

#### Fear-Killer Pack CCN-W12 (verbatim)

**Resources:** Kurose & Ross Ch.3.7 • Tanenbaum Ch.6.5

1. Trace the TCP congestion window evolution for Tahoe given: ssthresh=16, each segment=1 MSS. Send until a triple duplicate ACK occurs at cwnd=24. Show the cwnd values every RTT from slow start through congestion avoidance, the fast retransmit, and the recovery. Label each phase.
2. Compare Tahoe vs Reno. Take a scenario where a timeout occurs at cwnd=20, ssthresh=16. Show Tahoe's behavior (cwnd drops to 1, slow start to ssthresh) and Reno's behavior (fast recovery). Which responds faster to a single packet loss and which handles multiple losses better?
3. Given a connection with RTT = 100ms, segment size = 1460 bytes, and initial slow start threshold = 65536 bytes, calculate how many RTTs until the first loss event assuming no loss occurs during slow start. What is the throughput in Mbps at that point?

#### Narrative — Week 12 (verbatim)

**Topics:** Congestion vs flow control; Slow start; Congestion avoidance (AIMD); Fast retransmit; Fast recovery; TCP Tahoe vs Reno vs Cubic

**Resources:** Kurose & Ross Ch.3 (congestion control); Gate Smashers — Congestion Control

**Sleep banking:** Begin sleeping 9 hrs (bedtime 22:00) for 7 nights leading to finals. This inoculates against exam-night sleep loss.

**Practice:**
- Draw the TCP congestion window sawtooth graph — closed book, from memory
- Trace cwnd evolution: slow start (exponential) until ssthresh, then AIMD (linear) — blank page
- Fast retransmit: 3 duplicate ACKs → retransmit (no timeout needed) — retrieve from memory
- Tahoe vs Reno: compare behavior after 3 duplicate ACKs — retrieve both from memory
- **Interleaved retrieval (20 min):** Draw TCP header from memory. Then trace a 3-way handshake with sequence numbers. Then compare Tahoe vs Reno behavior side by side. All closed book.

**Killer trap:** Students confuse Tahoe and Reno behavior after 3 duplicate ACKs. Tahoe = reset to 1 (slow start). Reno = reset to ssthresh (fast recovery). This is a common 10-mark question.

**Lab:** Lab 12 — BGP (see `03-Lab-Breakdowns/12-BGP.md`): eBGP/iBGP neighbors, `show ip bgp summary`

**Deliverable:** TCP congestion window trace for a given scenario

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 12 — Configure BGP** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 cwnd evolution + Q2 Tahoe-vs-Reno) · def/formula skim (TCP + congestion control) · same-problem drill #31–32
- **Same-problem drill target:** cwnd trace closed book, phase-labelled; Tahoe-vs-Reno comparison from memory
- **Deliverable:** TCP congestion window trace for a given scenario
- **Trap:** **Tahoe = reset to 1 (slow start); Reno = reset to ssthresh (fast recovery)** after 3 duplicate ACKs — common 10-mark question (killer trap); sleep banking 9 h starts now

---
### W13 — SDN, MPLS, Wireless & Multimedia · 09–15 Nov · P1 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P1 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 13 | lines 265–282 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 8: topic-advanced-mpls-sdn-wireless-multimedia | lines 62–69 |
| Week manifest | `weeks/CCN-W13.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| — | (no new definitions this week — reuse `Definition-Book.md`; OSPF for MPLS traffic-engineering context) |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#14** Network topology with routers and switches |
| Numericals | — (none; drill = MPLS label push/swap/pop trace + SDN flow-table entries) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.4.4 (MPLS), Ch.8 (wireless) |
| SDN overview papers | — |

#### Fear-Killer Pack CCN-W13 (verbatim)

**Resources:** Kurose & Ross Ch.4.4, Ch.7, Ch.8 • Tanenbaum Ch.5.7, Ch.4.7

1. Explain MPLS (Multi-Protocol Label Switching). Contrast MPLS forwarding with traditional IP routing. Given a network with ingress LSR, 3 core LSRs, and egress LSR, show the label push, swap, and pop operations as a packet traverses from source to destination. How does MPLS enable traffic engineering that IP routing cannot?
2. Explain Software-Defined Networking (SDN). Draw the SDN architecture showing the application layer, control layer, and infrastructure layer. Describe OpenFlow's role in the southbound interface. Given a switch with a flow table, show how a table-miss is handled and the flow entries for: forward to port 2, drop, send to controller.
3. Differentiate VNF (Virtual Network Functions) from traditional network functions. Take a firewall as an example — describe how it is deployed as a physical appliance vs as a VNF. What are the benefits of NFV (Network Functions Virtualization) in terms of elasticity, cost, and management?
4. A video streaming service sends 4 Mbps video over a wireless network with 2% packet loss. Explain how adaptive bitrate streaming (e.g., DASH) works. How does the client switch between quality levels? What role does buffering play? If the wireless link degrades to 10% loss, what happens to the user experience with TCP vs UDP transport?
5. Explain why wireless LANs use CSMA/CA instead of CSMA/CD. Two stations A and C are both within range of access point B but out of range of each other. Trace the hidden terminal problem when both transmit to B simultaneously, then show how RTS/CTS (request-to-send / clear-to-send) resolves it. Why can't a wireless station detect a collision the way Ethernet can?

#### Narrative — Week 13 (verbatim)

**Topics:** Software Defined Networking (SDN); Virtual Network Functions (VNF); MPLS (label switching vs IP longest-prefix match); Wireless networks (WiFi, 802.11); Multimedia networking

**Resources:** Kurose & Ross Ch.4.4 (MPLS), Ch.8 (wireless); SDN overview papers

**Practice:**
- SDN: control plane vs data plane separation; OpenFlow protocol — retrieve from memory
- 802.11: CSMA/CA (not CSMA/CD — wireless cannot detect collision) — blank page comparison with CSMA/CD
- MPLS: label push/swap/pop vs IP longest-prefix match — blank page diagram
- VNF vs traditional network functions (firewall appliance vs VNF) — comparison table from memory
- Multimedia: adaptive bitrate streaming (DASH) — explain quality-level switching and buffering

**Lab:** Lab 13 — Wireshark traffic analysis (see `03-Lab-Breakdowns/13-Wireshark.md`): capture + filter HTTP/DNS/TCP, follow TCP stream

**Deliverable:** Advanced topics one-pager (SDN planes, MPLS labels, 802.11 access)

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 13 — Wireshark Traffic Analysis** (official map via `Lab-Schedule.md`). **Lab-grade only — NOT examinable** (Application layer per `02-Official-Syllabus.md`); the TCP/UDP header correlation is examinable.

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 MPLS push/swap/pop + Q2 SDN architecture) · def skim (none new) · same-problem drill (MPLS trace + SDN flow table)
- **Same-problem drill target:** MPLS push/swap/pop trace < 15 min; SDN three-layer architecture + table-miss handling from memory
- **Deliverable:** advanced topics one-pager (SDN planes, MPLS labels, 802.11 access)
- **Trap:** wireless uses CSMA/CA, not CSMA/CD — wireless cannot detect collisions; hidden-terminal resolved by RTS/CTS (killer trap)

---
### W14 — Final Revision (Taper) · 16–22 Nov · P0 · 7 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P0 · Time budget 7 hrs · P0 floor: pack pass (revision-cycle-sourced) + def/formula skim + same-problem drill. **START with the past paper, NOT with review.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 14 | lines 286–305 |
| Fear-Killer Pack | — (taper — no pack; re-run CCN-W1..W8) | — |
| Week manifest | `weeks/CCN-W14.md` | full file |
| Chapter breakdown | — (all W1–W13 topics) | — |

#### Definitions (verbatim) — full W1–W13 sweep

| Term | Definition |
|---|---|
| CIDR | Classless Inter-Domain Routing — a method for IP address allocation that replaces classful addressing. |
| CRC | Cyclic Redundancy Check — an error-detecting code that uses polynomial division. |
| CSMA/CD | Carrier Sense Multiple Access with Collision Detection — a MAC protocol used in Ethernet. |
| MTU | Maximum Transmission Unit — the largest packet size that can be transmitted on a network. |
| NAT | Network Address Translation — a technique that maps private IP addresses to a public IP address. |
| OSPF | Open Shortest Path First — a link-state routing protocol that uses Dijkstra's algorithm. |
| PDU | Protocol Data Unit — the unit of data at each layer (bits, frames, packets, segments). |
| RTT | Round Trip Time — the time for a packet to travel from source to destination and back. |
| Subnet Mask | A 32-bit number that divides an IP address into network and host portions. |
| TCP | Transmission Control Protocol — a connection-oriented, reliable transport protocol. |
| UDP | User Datagram Protocol — a connectionless, unreliable transport protocol. |
| VLSM | Variable Length Subnet Mask — a technique that allows subnets to have different sizes. |

#### Formulas (verbatim) — full sweep

| Formula | Statement |
|---|---|
| CRC | Append degree-of-polynomial zeros to data; divide modulo-2 (XOR, no carry); remainder is CRC. |
| CSMA/CD | Minimum Frame Size = 2 × Propagation Delay × Data Rate |
| ALOHA Efficiency | Pure ALOHA: S = G × e^(−2G), Max = 1/(2e) ≈ 0.184 |
| ALOHA Efficiency | Slotted ALOHA: S = G × e^(−G), Max = 1/e ≈ 0.368 |
| Subnetting | Number of Subnets = 2^(borrowed bits) |
| Subnetting | Usable Hosts per Subnet = 2^(host bits) − 2 |
| Subnetting | Magic Number = 256 − Subnet Mask (last non-255 octet) |
| TCP Congestion Control | Slow Start: cwnd doubles every RTT (exponential) |
| TCP Congestion Control | Congestion Avoidance: cwnd += 1/cwnd per ACK (AIMD, linear) |
| TCP Congestion Control | ssthresh = cwnd / 2 on loss |
| TCP Congestion Control | Tahoe: cwnd = 1 on loss (slow start) |
| TCP Congestion Control | Reno: cwnd = ssthresh on triple duplicate ACK (fast recovery) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1–#17** full sweep (headers, state machines, sawtooth, Dijkstra, OSPF, VLSM, NAT) |
| Numericals | `Numerical-Book.md` **#22–#32** full sweep (CRC, CSMA/CD, subnetting, TCP cwnd) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 1–13 packs | timed past papers |

#### Fear-Killer Pack — final taper (all packs)

**No single pack this week.** Re-run every pack under timed conditions: CCN-W1/2/3/4 (pre-mid) + CCN-W5/6/7/8 (post-mid).

#### Narrative — Week 14 (verbatim)

**Topics:** Comprehensive review — all layers, headers, algorithms, and numerics from Weeks 1–13

**Resources:** Full notes; formula sheet; past papers

**Practice:**
- Timed full-length past paper (3 hrs, closed book) — start with the past paper, NOT with review
- Focus on subnetting speed drills + TCP congestion trace — closed book
- **Spaced repetition:** Redrill subnetting until any /16-/30 problem takes <20 seconds

**Retrieval protocol:** No passive reading at all this week. Every minute is active retrieval.

**Sleep banking:** Continue 9 hrs sleep (bedtime 22:00). Do NOT trade sleep for last-minute studying — it degrades recall by 15-20% per lost hour.

**Lab:** Lab 14 — DHCP server + helper address (see `03-Lab-Breakdowns/14-DHCP.md`); final lab submission + project wrap-up

**Deliverable:** Solved past paper + final lab deliverables

**Time budget:** 7 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 14 — Configure DHCP Server + Helper Address** (official map via `Lab-Schedule.md`). **Lab-grade only — NOT examinable** (Application layer per `02-Official-Syllabus.md`). **Submit final lab deliverables this week.**

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** revision-cycle checklist (`Shared/04-Revision-Cycles.md`: subnetting speed, TCP cwnd trace, IPv4/IPv6/TCP header draws, CRC steps, OSI/TCP recall — blank page) · def/formula skim (all W1–W13; formulas from memory first) · same-problem drill #22–32
- **Same-problem drill target:** subnetting **< 20 s** any /16–/30; TCP cwnd trace closed book; answer order on paper = numericals → diagrams → theory
- **Deliverable:** solved past paper + final lab deliverables
- **Trap:** no passive reading — every minute active retrieval; START with the past paper, NOT with review; do NOT trade sleep (recall degrades 15–20% per lost hour); submit final lab deliverables this week

---
### W15 — FINAL EXAM & LAB VIVA · 23–29 Nov · Exam

**Banner:** Rotation CCN (Wed B + Thu A) · Tier FINAL · No new deep study, no floor accrual. Ledger frozen during W15.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 15 | lines 307–320 |
| Pack | `Fear-Killer-Packs.md` → Week 15 | — (no pack) |
| Week manifest | (W15 note at `weeks/CCN-W14.md` L66) | reference |

#### Fear-Killer Pack — Week 15 (verbatim)

**Week 15: FINAL EXAM** — No new pack. Execution only: subnetting → numericals → diagrams → theory; write every step of every numerical.

#### Narrative — Week 15 (verbatim)

**Focus:** Execution. Do not learn anything new.

**Theory Exam:**
- Review 1-page cheat sheet (subnetting table, TCP header, CRC steps)
- Answer order: numericals (subnetting, CRC, CSMA/CD, TCP cwnd) → diagrams (headers, state machines) → theory
- Subnetting: do these first. They are the highest-ROI marks in the paper

**Lab Viva (separate slot):**
- Explain your Packet Tracer topology in 3 minutes
- Know your CLI commands: `show ip route`, `show running-config`, `show vlan brief`, `show interfaces`
- Be ready to subnet on the whiteboard under observation

#### Exam-day stack (final) + viva

- [ ] Theory exam order: subnetting first (highest-ROI), then CRC/CSMA/CD/TCP-cwnd numericals, then header/diagram draws, then theory
- [ ] Lab viva (separate slot): 3-min Packet Tracer walkthrough → 17 technical questions; `CCN-LABS.md` viva + `Viva-Book.md`
- [ ] Sleep 9 h (banked from W12)

#### Notes

- Review the 1-page cheat sheet (subnetting table, TCP header, CRC steps). Sleep 9 h.
- Subnetting numericals are free marks if the 30-sec skill survived the taper; headers are free marks if drawn from memory; theory rewards protocol mapping.
- **Ledger frozen during Wk15** — exam window 30 Nov – 18 Dec is a separate phase (per `weeks/CCN-W14.md` L66). W15 final has no lab (lab viva is a separate slot); W8 Sat `off`, W15 no lab.
