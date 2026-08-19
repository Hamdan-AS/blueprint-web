# CCN-BEFORE-MID — WEEKS 1–8 · 17 AUG – 11 OCT 2026 · MIDTERM (W8)

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 1–8 (17 Aug – 11 Oct 2026) — OSI/TCP model, physical & data link layer, error detection/correction, MAC & CSMA/CD, network layer & IPv4, subnetting/VLSM/CIDR, midterm revision, ending at the Week 8 midterm.
> **Siblings:** `CCN-NAV.md` (master map) · `CCN-AFTER-MID.md` (Weeks 9–15) · `CCN-LABS.md` (labs). Week-colored headers below match the NAV schedule.
> **Exam split:** ~35% numericals + ~65% theory. Midterm-weighted toward OSI/TCP, CRC/Hamming, CSMA/CD, IPv4/subnetting (90%/80%/70%/80% midterm prob — see NAV). Subnetting speed is the differentiator.
> **Exam order:** numericals first (subnetting, CRC, CSMA/CD), theory second.

---
## At a glance (W1–W8)

| W | Dates | Variant | File | Topics |
|---|---|---|---|---|
| W1 | 17–23 Aug | P2 | BEFORE | OSI/TCP model, PDU, packet/circuit switching |
| W2 | 24–30 Aug | P2 | BEFORE | Physical + data link layer, flow control |
| W3 | 31 Aug–06 Sep | P2 | BEFORE | Error detection & correction — CRC, Hamming |
| W4 | 07–13 Sep | P2 | BEFORE | MAC sublayer — ALOHA, CSMA/CD |
| W5 | 14–20 Sep | P0 | BEFORE | Network layer & IPv4 — header, fragmentation, NAT |
| W6 | 21–27 Sep | P2 | BEFORE | Subnetting, VLSM & CIDR (gatekeeper) |
| W7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision |
| W8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants editorial (CCN manifests carry no variant field).

---
### W1 — Introduction & OSI Model · 17–23 Aug · P2 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 1 | lines 17–35 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 1: topic-osi-and-tcpip | lines 11–16 |
| Week manifest | `weeks/CCN-W1.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| PDU | Protocol Data Unit — the unit of data at each layer (bits, frames, packets, segments). |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1** OSI 7-layer model with protocols · **#2** TCP/IP 5-layer model with protocols |
| Numericals | — (none; drill = OSI layers bottom-up + PDU names from blank page) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.1 |
| Gate Smashers | Computer Networks videos 1–5 |

#### Fear-Killer Pack CCN-W1 (verbatim)

**Resources:** Gate Smashers (OSI/TCP/IP videos) • Kurose & Ross Ch.1 • Tanenbaum Ch.1

1. A 1500-byte message is sent from an application on Host A to Host B. Show the exact encapsulation process through all 7 OSI layers on the sender side and decapsulation on the receiver side. State the PDU name at each layer and what header information is added or removed. How does this differ in the TCP/IP model?
2. Compare circuit switching and packet switching. A 10 MB file is sent over a 1 Mbps link. For circuit switching, setup takes 2 seconds. For packet switching, each 1000-byte packet has 40 bytes overhead and propagation delay is 50ms. Which is faster? At what file size do they break even?
3. Differentiate a switch from a router at the architectural level. A frame arrives at a switch with destination MAC 00:1A:2B:3C:4D:5E. A packet arrives at a router with destination IP 192.168.1.55. Trace the forwarding decision each device makes. What tables does each consult?

#### Narrative — Week 1 (verbatim)

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

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 1 — Configure IP Addresses on Different Network Devices** (official map via `Lab-Schedule.md`). **Install Packet Tracer this week** — lab is 50% Packet Tracer; do not wait.

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 encapsulation trace + Q2 circuit-vs-packet break-even) · def skim (PDU) · same-problem drill (OSI layers + PDU map)
- **Same-problem drill target:** OSI layers bottom-up + PDU names < 5 min; 2 protocols per layer from memory
- **Deliverable:** OSI/TCP comparison table with protocols mapped to layers
- **Trap:** Datagram vs Virtual Circuit — **both are packet-switched; VC is NOT circuit switching** (narrative W1 killer trap)

---
### W2 — Physical & Data Link Layer · 24–30 Aug · P2 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 2 | lines 39–54 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 2: topic-data-link-layer-and-error-control (Q3 flow control) | lines 18–23 |
| Week manifest | `weeks/CCN-W2.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| CSMA/CD | Carrier Sense Multiple Access with Collision Detection — a MAC protocol used in Ethernet. *(preview — full coverage W4)* |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week; Stop-and-Wait utilization is procedural) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#3** Ethernet frame format |
| Numericals | — (none; drill = Ethernet frame draw + Stop-and-Wait throughput calc) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.2, Ch.5 |
| Gate Smashers | DLL video |

#### Fear-Killer Pack CCN-W2 (verbatim — Q3)

**Resources:** Kurose & Ross Ch.5 • Tanenbaum Ch.3

3. Explain the efficiency tradeoff between Stop-and-Wait and Sliding Window protocols. For a link with 10ms RTT and 100 Mbps bandwidth, calculate the maximum throughput of Stop-and-Wait for 1000-byte frames. What window size is needed to achieve 100% utilization?

> Full pack `Week 2: topic-data-link-layer-and-error-control` at `Fear-Killer-Packs.md` L18–23. Q1 (CRC) + Q2 (Hamming) return at W3.

#### Narrative — Week 2 (verbatim)

**Topics:** Physical layer: signals, encoding, transmission media; Data link layer: framing, error control, flow control; MAC addresses

**Resources:** Kurose & Ross Ch.2, Ch.5; Gate Smashers — DLL

**Practice:**
- Ethernet frame format: draw and label every field
- MAC address format: 48 bits, OUI, NIC-specific
- Flow control: Stop-and-Wait vs Sliding Window

**Lab:** Lab 2 — UTP cable crimping (see `03-Lab-Breakdowns/02-UTP-Cables.md`): build and test straight-through vs crossover cables (T568A/T568B)

**Deliverable:** Ethernet frame diagram + Wireshark capture analysis

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 2 — Straight-Through & Cross UTP Cables** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q3 Stop-and-Wait vs Sliding Window) · def skim (CSMA/CD preview) · same-problem drill (Ethernet frame draw + Stop-and-Wait throughput)
- **Same-problem drill target:** Ethernet frame draw < 10 min; Stop-and-Wait utilization calc from given RTT × bandwidth
- **Deliverable:** Ethernet frame diagram + Wireshark capture analysis
- **Trap:** window size for 100% utilization = bandwidth-delay product / frame size — the number, not the formula, is what trips students

---
### W3 — Error Detection & Correction · 31 Aug–06 Sep · P2 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 3 | lines 58–76 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 2: topic-data-link-layer-and-error-control (Q1 CRC, Q2 Hamming) | lines 18–23 |
| Week manifest | `weeks/CCN-W3.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| CRC | Cyclic Redundancy Check — an error-detecting code that uses polynomial division. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| CRC | Append degree-of-polynomial zeros to data; divide modulo-2 (XOR, no carry); remainder is CRC. |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | — (none; CRC/Hamming are calculation drills) |
| Numericals | `Numerical-Book.md` **#22** Binary CRC division · **#23** CRC remainder |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.5 (error detection) |
| Gate Smashers | Error Detection video |

#### Fear-Killer Pack CCN-W3 (verbatim — Q1 + Q2)

**Resources:** Kurose & Ross Ch.5 • Tanenbaum Ch.3

1. Given data 1101101 and generator polynomial G(x) = x³ + x² + 1 (binary 1101), compute the CRC codeword using modulo-2 binary division. Show every step of the division. Then demonstrate that the receiver's division produces a zero remainder if no error occurred. What if the received codeword has a single-bit error at position 5?
2. For the 7-bit data 1011001, compute the Hamming code with even parity. Show where parity bits P1, P2, P4, P8 are placed and their values. Now if the received codeword is 101110011001, detect and correct the error. Show the syndrome calculation.

#### Narrative — Week 3 (verbatim)

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

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 3 — Configure File Sharing Server** (official map via `Lab-Schedule.md`). **Lab-grade only — NOT examinable** (Application layer per `02-Official-Syllabus.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 CRC division + Q2 Hamming syndrome) · def/formula skim (CRC) · same-problem drill #22–23
- **Same-problem drill target:** CRC division < 10 min with zero-remainder check; Hamming syndrome correction < 15 min
- **Deliverable:** 5 CRC calculations + 3 Hamming code corrections
- **Trap:** CRC poly 1101 = x³ + x² + 1 → **degree 3 → append 3 zeros** — one off-by-one zeros error sinks the calculation (killer trap); Hamming parity bits at **1/2/4/8** (powers of 2)

---
### W4 — MAC Sublayer & CSMA/CD · 07–13 Sep · P2 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 4 | lines 80–95 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 3: topic-mac-and-csmacd | lines 25–30 |
| Week manifest | `weeks/CCN-W4.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| CSMA/CD | Carrier Sense Multiple Access with Collision Detection — a MAC protocol used in Ethernet. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| CSMA/CD | Minimum Frame Size = 2 × Propagation Delay × Data Rate |
| ALOHA Efficiency | Pure ALOHA: S = G × e^(−2G), Max = 1/(2e) ≈ 0.184 |
| ALOHA Efficiency | Slotted ALOHA: S = G × e^(−G), Max = 1/e ≈ 0.368 |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#15** CSMA/CD collision detection |
| Numericals | `Numerical-Book.md` **#24** Minimum frame size = 2 × T_prop × Data_Rate |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.6 |
| Gate Smashers | MAC video |

#### Fear-Killer Pack CCN-W4 (verbatim)

**Resources:** Kurose & Ross Ch.6 • Tanenbaum Ch.4

1. Calculate the efficiency of Pure ALOHA and Slotted ALOHA for G = 0.5, 1.0, and 2.0 attempts per frame time. Show the formula, the throughput, and explain why Slotted ALOHA doubles the maximum throughput. At what G does each system collapse?
2. An Ethernet network spans 2 km with propagation speed 2×10⁸ m/s. The transmission rate is 100 Mbps. Calculate the minimum frame size required for CSMA/CD to work. Now the network is upgraded to 1 Gbps over the same distance — what happens to the minimum frame size and how is this handled in practice?
3. A network has 4 stations using 1-persistent CSMA/CD. Stations A and B begin transmission simultaneously (collision). Trace the binary exponential backoff process. Show all possible outcomes for the first three collision events. What is the maximum number of collision slots before a successful transmission?

#### Narrative — Week 4 (verbatim)

**Topics:** MAC protocols; ALOHA (pure, slotted); CSMA; CSMA/CD; Ethernet; Minimum frame size; Collision domain

**Resources:** Kurose & Ross Ch.6; Gate Smashers — MAC

**Practice:**
- Efficiency calculation: pure ALOHA (S = G·e^(-2G)), slotted ALOHA (S = G·e^(-G))
- CSMA/CD: minimum frame size = 2 × propagation delay × data rate
- Collision domain vs broadcast domain: distinction

**Lab:** Lab 4 — Static routes (see `03-Lab-Breakdowns/04-Static-Routes.md`): connect networks with `ip route` + default route, verify `show ip route`

**Deliverable:** CSMA/CD efficiency calculation + Packet Tracer topology

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 4 — Configure Static Routes** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q2 minimum frame + Q1 ALOHA efficiency) · def/formula skim (CSMA/CD + ALOHA) · same-problem drill #24
- **Same-problem drill target:** minimum frame size calc < 10 min; ALOHA efficiency at G = 0.5/1.0/2.0 with max point (1/2e ≈ 0.184, 1/e ≈ 0.368)
- **Deliverable:** CSMA/CD efficiency calculation + Packet Tracer topology
- **Trap:** min frame = 2 × T_prop × rate — the **factor of 2** (round-trip) is the common miss; remember the 100 Mbps → 1 Gbps upgrade multiplies the requirement, handled by larger min frame or shorter cable/carrier extension

---
### W5 — Network Layer & IPv4 · 14–20 Sep · P0 · 5 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 5 | lines 99–114 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 4: topic-network-layer-and-ip (Q2, Q4, Q5) | lines 32–39 |
| Week manifest | `weeks/CCN-W5.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| NAT | Network Address Translation — a technique that maps private IP addresses to a public IP address. |
| Subnet Mask | A 32-bit number that divides an IP address into network and host portions. |
| MTU | Maximum Transmission Unit — the largest packet size that can be transmitted on a network. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Subnetting | Number of Subnets = 2^(borrowed bits) |
| Subnetting | Usable Hosts per Subnet = 2^(host bits) − 2 |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#4** IPv4 header (20 bytes, every field) · **#5** IPv6 header (40 bytes, simplified) |
| Numericals | `Numerical-Book.md` **#25** Number of subnets from borrowed bits · **#26** Usable hosts from host bits |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Kurose & Ross | Ch.4 |
| Gate Smashers | Network Layer video |

#### Fear-Killer Pack CCN-W5 (verbatim — Q2 + Q4 + Q5)

**Resources:** Gate Smashers (Subnetting videos) • Kurose & Ross Ch.4 • subnetipv4.com

2. An IPv4 datagram with 4000 bytes of payload (20-byte header) must traverse a link with MTU 1500 bytes. Show the fragmentation: how many fragments, their offset values, the More Fragments flag for each, and the total data in each fragment. What changes with IPv6 and the absence of fragmentation at routers?
4. Compare the IPv4 and IPv6 headers field by field — which IPv4 fields did IPv6 drop and why? Compress the IPv6 address 2001:0DB8:0000:0000:0000:FF00:0042:8329 to its shortest valid form, showing every rule you apply. Differentiate unicast, multicast, and anycast addressing. How does a host obtain an address via SLAAC, and why is dual-stack the dominant transition mechanism?
5. Differentiate classful and classless addressing. Given the address 10.25.130.5, what class is it under classful? Under CIDR with /23, what are the network ID and broadcast? Why was CIDR introduced?

> Full pack `Week 4: topic-network-layer-and-ip` at `Fear-Killer-Packs.md` L32–39. Q1 (VLSM) + Q3 (subnet plan) return at W6.

#### Narrative — Week 5 (verbatim)

**Topics:** Network layer functions; IPv4 header format; IP addressing (classful A, B, C, D, E); Private IP addresses; NAT

**Resources:** Kurose & Ross Ch.4; Gate Smashers — Network Layer

**Practice:**
- Draw IPv4 header: 20 bytes, every field with size
- Classful addressing: identify class from first octet
- Private IP ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16

**Lab:** Lab 5 — RIP (see `03-Lab-Breakdowns/05-RIP.md`): `router rip`/RIPv2, dynamic route learning, `show ip route`

**Deliverable:** IPv4 header diagram + classful addressing table

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 5 — Configure RIP and RIP v2** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q2 fragmentation + Q5 classful/CIDR) · def skim (NAT, Subnet Mask, MTU) · same-problem drill #25–26
- **Same-problem drill target:** IPv4 header draw < 15 min; class-from-first-octet + private-range recall < 30 s; fragmentation offset/MF flag correct
- **Deliverable:** IPv4 header diagram + classful addressing table
- **Trap:** fragmentation — offset is in 8-byte units and counts **payload** bytes, not including the header; MF flag = 1 on all but the last fragment

---
### W6 — Subnetting, VLSM & CIDR · 21–27 Sep · P2 · 6 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P2 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Most important week of the course.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 6 | lines 118–136 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 4: topic-network-layer-and-ip (Q1 VLSM, Q3 subnet) | lines 32–39 |
| Week manifest | `weeks/CCN-W6.md` | full file |
| Chapter breakdown | — (no theory `03-Chapter-Breakdowns/`; pack-level topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Subnet Mask | A 32-bit number that divides an IP address into network and host portions. |
| VLSM | Variable Length Subnet Mask — a technique that allows subnets to have different sizes. |
| CIDR | Classless Inter-Domain Routing — a method for IP address allocation that replaces classful addressing. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Subnetting | Magic Number = 256 − Subnet Mask (last non-255 octet) |
| Subnetting | Number of Subnets = 2^(borrowed bits) |
| Subnetting | Usable Hosts per Subnet = 2^(host bits) − 2 |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#11** Subnetting with VLSM (network allocation) |
| Numericals | `Numerical-Book.md` **#27** Magic number = 256 − subnet mask · **#28** VLSM allocation |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Subnetting practice websites | subnetipv4.com (secret weapon) |
| Kurose & Ross | Ch.4 |

#### Fear-Killer Pack CCN-W6 (verbatim — Q1 + Q3)

**Resources:** Gate Smashers (Subnetting videos) • Kurose & Ross Ch.4 • subnetipv4.com

1. Given the IP block 192.168.10.0/24, design a subnet plan for departments requiring: A=50 hosts, B=28 hosts, C=14 hosts, D=7 hosts. Use VLSM. Show each subnet's network address, subnet mask (prefix length), broadcast address, usable host range, and total hosts.
3. Given IP 172.20.0.0/16, create subnets with /20 mask. How many subnets? How many hosts per subnet? Calculate network address, broadcast address, and first/last usable IP for subnet #5 (zero-indexed).

> Full pack `Week 4: topic-network-layer-and-ip` at `Fear-Killer-Packs.md` L32–39.

#### Narrative — Week 6 (verbatim)

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

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 6 — Configure OSPF Single Area** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 4-department VLSM + Q3 /20 plan) · def/formula skim (Subnet Mask, VLSM, CIDR + magic number) · same-problem drill #27–28
- **Same-problem drill target:** any /16–/30 in **< 30 s, 100% accuracy** (narrative W6 target); VLSM allocation largest-first
- **Deliverable:** 10 solved subnetting problems + VLSM design for a given topology
- **Trap:** subnetting is the gatekeeper — 35% of the paper is numericals and subnetting is the highest-ROI skill; **budget 6 hrs, do not skimp**; VLSM allocates largest subnets first so space is not wasted

---
### W7 — Midterm Revision · 28 Sep–04 Oct · P1 · 7 hrs

**Banner:** Rotation CCN (Wed B + Thu A) · Tier P1 · Time budget 7 hrs · P0 floor: revision-cycle checklist + def/formula skim + same-problem drill. **No new material.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 7 | lines 140–157 |
| Fear-Killer Pack | — (revision — no pack; review CCN-W1/2/3/4/5/6) | — |
| Week manifest | `weeks/CCN-W7.md` | full file |
| Chapter breakdown | — (all W1–W6 topics) | — |

#### Definitions (verbatim) — full W1–W6 sweep

| Term | Definition |
|---|---|
| CIDR | Classless Inter-Domain Routing — a method for IP address allocation that replaces classful addressing. |
| CRC | Cyclic Redundancy Check — an error-detecting code that uses polynomial division. |
| CSMA/CD | Carrier Sense Multiple Access with Collision Detection — a MAC protocol used in Ethernet. |
| MTU | Maximum Transmission Unit — the largest packet size that can be transmitted on a network. |
| NAT | Network Address Translation — a technique that maps private IP addresses to a public IP address. |
| PDU | Protocol Data Unit — the unit of data at each layer (bits, frames, packets, segments). |
| Subnet Mask | A 32-bit number that divides an IP address into network and host portions. |
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

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1** OSI · **#2** TCP/IP · **#3** Ethernet frame · **#4** IPv4 header · **#11** VLSM |
| Numericals | `Numerical-Book.md` **#22–#27** (CRC, min frame, subnets, hosts, magic number) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 1–6 packs | timed past papers |

#### Fear-Killer Pack — revision (CCN-W1/2/3/4/5/6)

**No single pack this week.** Re-run the CCN-W1/W2/W3/W4/W5/W6 packs under timed conditions.

#### Narrative — Week 7 (verbatim)

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

#### Lab pointer

**Lab this week:** `CCN-LABS.md` → **Lab 7 — Connect Two Routers with PPP** (official map via `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** revision-cycle checklist (`Shared/04-Revision-Cycles.md`: OSI/TCP layers + PDU map, IPv4 header draw, CRC steps, subnetting drills — blank page) · def/formula skim (all W1–W6) · same-problem drill #22–27
- **Same-problem drill target:** subnetting < 30 s; timed past paper (2 h) under exam conditions
- **Deliverable:** solved timed past paper
- **Trap:** red flag — any subnetting problem > 60 s → **20 more drills**; sleep banking 22:00 × 5 nights (W6–7) protects consolidation of subnetting, CRC, CSMA/CD

---
### W8 — MIDTERM EXAM WEEK · 05–11 Oct · Exam

**Banner:** Rotation CCN (Wed B + Thu A) · Tier MIDTERM · No new deep study, no floor accrual. Ledger frozen during W8.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 8 | lines 161–171 |
| Pack | `Fear-Killer-Packs.md` → Week 8 | — (no pack) |
| Week manifest | `weeks/CCN-W8.md` | full file |

#### Fear-Killer Pack — Week 8 (verbatim)

**Week 8: MIDTERM EXAM WEEK** — No new pack. Active recall only — review the 1-page cheat sheet and sleep 8 hours.

#### Narrative — Week 8 (verbatim)

**Focus:** Active recall only. No new material.

- Subnetting speed drills: 20 problems in 10 minutes
- Review CRC calculation steps
- OSI model: recite layers + protocols from memory
- Sleep 8 hours each night

#### Exam-day stack (Mon–Fri)

- [ ] Past-paper run for the exam subject — 60 min, P0
- [ ] Blank-page retrieval of that subject — 30 min, P0
- [ ] Master Error Log review — 20 min, P0

#### Notes

- Subnetting speed drills: 20 problems in 10 minutes; review CRC steps; recite OSI layers + protocols. Sleep 8 h each night.
- Exam order: numericals first (subnetting, CRC, CSMA/CD), theory second.
- **Ledger frozen during Wk8** — no new accrual; cleared in Wk9 recovery.
- **No lab this week** — W8 midterm, Saturday `off` per `term.json` (Sat `off` override W8); `lab_omission` CCN = `[8]`. **Labs 8+9 merge into W9.**
