# CS-327 — Computer Communication Networks — 15-Week Plan

**Professor's Verdict:** *The highest-ROI course in your semester. Master the numericals — subnetting, CRC, CSMA/CD — and you secure 35% of your grade before walking into the exam hall.*

**Credits:** 3+1 (with lab) | **Difficulty:** 3.5/5 | **Midterm:** Week 8 | **Final:** Week 15

---

## How This Course Works

- **35% numericals (subnetting, CRC, CSMA/CD, TCP congestion) + 65% theory (protocols, layers, routing).**
- **Subnetting is the gatekeeper.** If you can subnet at speed, you pass. If you cannot, nothing else matters.
- **Lab is 50% Packet Tracer.** Install it this week. Do not wait.

---

## Week 1 — Introduction & OSI Model

**Topics:** Network types (LAN, MAN, WAN); Network topologies; OSI reference model (7 layers); TCP/IP model (5 layers); Protocol data units (PDU) per layer; Packet switching vs circuit switching; Datagram vs Virtual Circuit

**Resources:** Kurose & Ross Ch.1; Gate Smashers — Computer Networks (videos 1-5)

**Practice:**
- **Memorize OSI layers bottom-up:** Physical, Data Link, Network, Transport, Session, Presentation, Application
- **Mnemonic:** Please Do Not Throw Sausage Pizza Away
- **Memorize PDU per layer:** Bits → Frames → Packets → Segments → Data
- List 2 protocols per layer
- Packet switching vs circuit switching: comparison table — retrieve from memory
- **Trap:** Datagram vs Virtual Circuit — both are packet-switched. VC is NOT circuit switching.

**Lab:** Lab 1 — IP Configuration (see `03-Lab-Breakdowns/01-IP-Configuration.md`): assign IPv4 to router interfaces + PCs in Packet Tracer, verify with `ping` and `show ip interface brief`

**Deliverable:** OSI/TCP comparison table with protocols mapped to layers

**Time budget:** 5 hrs

---

## Week 2 — Physical & Data Link Layer

**Topics:** Physical layer: signals, encoding, transmission media; Data link layer: framing, error control, flow control; MAC addresses

**Resources:** Kurose & Ross Ch.2, Ch.5; Gate Smashers — DLL

**Practice:**
- Ethernet frame format: draw and label every field
- MAC address format: 48 bits, OUI, NIC-specific
- Flow control: Stop-and-Wait vs Sliding Window

**Lab:** Lab 2 — UTP cable crimping (see `03-Lab-Breakdowns/02-UTP-Cables.md`): build and test straight-through vs crossover cables (T568A/T568B)

**Deliverable:** Ethernet frame diagram + Wireshark capture analysis

**Time budget:** 5 hrs

---

## Week 3 — Error Detection & Correction

**Topics:** Parity checks; Checksum; CRC (Cyclic Redundancy Check); Hamming code

**Resources:** Kurose & Ross Ch.5 (error detection); Gate Smashers — Error Detection

**Practice:**
- **CRC binary division:** Append degree-of-polynomial zeros, divide modulo-2, append remainder
- Solve 10 CRC problems with different generator polynomials
- Hamming code: single-bit error correction for 7/15-bit codewords

**Killer trap:** CRC polynomial representation — 1101 means x³ + x² + 1, degree = 3, so append 3 zeros. One off-by-one zeros error sinks the entire calculation.
**Killer trap:** Hamming code parity bit positions — parity bits are at positions 1, 2, 4, 8... (powers of 2). Each covers specific data bits per binary address. Students often mis-position parity bits or confuse which bits each parity covers. Draw the parity coverage table until it is reflexive.

**Lab:** Lab 3 — File Sharing Server (see `03-Lab-Breakdowns/03-File-Sharing-Server.md`): FTP server, upload/download across networks

**Deliverable:** 5 CRC calculations + 3 Hamming code corrections

**Time budget:** 5 hrs

---

## Week 4 — MAC Sublayer & CSMA/CD

**Topics:** MAC protocols; ALOHA (pure, slotted); CSMA; CSMA/CD; Ethernet; Minimum frame size; Collision domain

**Resources:** Kurose & Ross Ch.6; Gate Smashers — MAC

**Practice:**
- Efficiency calculation: pure ALOHA (S = G·e^(-2G)), slotted ALOHA (S = G·e^(-G))
- CSMA/CD: minimum frame size = 2 × propagation delay × data rate
- Collision domain vs broadcast domain: distinction

**Lab:** Lab 4 — Static routes (see `03-Lab-Breakdowns/04-Static-Routes.md`): connect networks with `ip route` + default route, verify `show ip route`

**Deliverable:** CSMA/CD efficiency calculation + Packet Tracer topology

**Time budget:** 5 hrs

---

## Week 5 — Network Layer & IPv4

**Topics:** Network layer functions; IPv4 header format; IP addressing (classful A, B, C, D, E); Private IP addresses; NAT

**Resources:** Kurose & Ross Ch.4; Gate Smashers — Network Layer

**Practice:**
- Draw IPv4 header: 20 bytes, every field with size
- Classful addressing: identify class from first octet
- Private IP ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16

**Lab:** Lab 5 — RIP (see `03-Lab-Breakdowns/05-RIP.md`): `router rip`/RIPv2, dynamic route learning, `show ip route`

**Deliverable:** IPv4 header diagram + classful addressing table

**Time budget:** 5 hrs

---

## Week 6 — Subnetting, VLSM & CIDR

**Topics:** Subnet mask; Subnetting; VLSM (Variable Length Subnet Mask); CIDR notation; Supernetting

**Resources:** Subnetting practice websites; Kurose & Ross Ch.4

**Practice:**
- **The magic number method:** 256 − subnet mask = block size
- Subnet any /16 through /30 in <30 seconds
- VLSM: given a network and variable host requirements, allocate subnets efficiently
- 20 subnetting problems minimum

**Target:** Any /16 to /30 problem solved in 30 seconds, 100% accuracy

**Lab:** Lab 6 — OSPF single area (see `03-Lab-Breakdowns/06-OSPF-Single-Area.md`): `router ospf`, wildcard masks, `show ip ospf neighbor`

**Deliverable:** 10 solved subnetting problems + VLSM design for a given topology

**Time budget:** 6 hrs (this is the most important week — invest the time)

---

## Week 7 — Midterm Revision

**Topics:** Comprehensive review of Weeks 1-6

**Practice:**
- Timed past paper (2 hrs, closed book)
- 10 subnetting problems (30 sec each target)
- 5 CRC calculations
- OSI/TCP model: write all layers from memory with protocols
- IPv4 header: draw from memory

**Red flag:** If any subnetting problem takes >60 seconds, do 20 more drills. Speed is the difference between A and A+.

**Sleep banking:** Bedtime moves to 22:00 for 5 nights (Weeks 6-7). Sleep 9 hours. This protects memory consolidation of subnetting, CRC, and CSMA/CD during deep sleep.

**Lab:** Lab 7 — PPP with CHAP (see `03-Lab-Breakdowns/07-PPP.md`): serial link between routers, `encapsulation ppp`, `ppp authentication chap`

**Time budget:** 7 hrs

---

## Week 8 — MIDTERM EXAM WEEK

**Focus:** Active recall only. No new material.

- Subnetting speed drills: 20 problems in 10 minutes
- Review CRC calculation steps
- OSI model: recite layers + protocols from memory
- Sleep 8 hours each night

---

## Week 9 — Routing Algorithms (Recovery Week)

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

---

## Week 10 — Routing Protocols & IPv6

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

---

## Week 11 — Transport Layer: TCP & UDP

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

---

## Week 12 — TCP Congestion Control

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

---

## Week 13 — SDN, MPLS, Wireless & Multimedia

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

---

## Week 14 — Final Revision (Taper)

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

---

## Week 15 — FINAL EXAM & LAB VIVA

**Focus:** Execution. Do not learn anything new.

**Theory Exam:**
- Review 1-page cheat sheet (subnetting table, TCP header, CRC steps)
- Answer order: numericals (subnetting, CRC, CSMA/CD, TCP cwnd) → diagrams (headers, state machines) → theory
- Subnetting: do these first. They are the highest-ROI marks in the paper

**Lab Viva (separate slot):**
- Explain your Packet Tracer topology in 3 minutes
- Know your CLI commands: `show ip route`, `show running-config`, `show vlan brief`, `show interfaces`
- Be ready to subnet on the whiteboard under observation

---

## Professor's Final Words

*Computer Networks rewards the practical. The student who spends 10 hours in Packet Tracer will outperform the student who spent 10 hours reading the textbook. Simulation is not a supplement — it is the curriculum.*

*On the exam: subnetting is your first priority. If you finish the subnetting section with full marks and 20 minutes to spare, you are in control. If you spend 40 minutes on theory and rush through subnetting, you are not.*

*Speed in subnetting is the single highest-leverage skill in this course. Practice until it is reflex.*
