# CCN-LABS — Computer Communication Networks (CS-327) — All Labs + Viva

<!-- colors: 1:#9cc4ff:#1d4ed8 2:#9cc4ff:#1d4ed8 3:#9cc4ff:#1d4ed8 4:#9adba4:#15803d 5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 9-10:#9adba4:#15803d 11:#ffd27a:#b45309 12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Lab weight ~20%** · 14 labs (+ App A) · viva 5+17 Qs

> **Source workbook:** Practical Workbook CS-318 (NED UET, Dept. of Computer & Information Systems Engineering, prepared by Ms. Sumayya Zafar & Ms. Ibshar Ishrat, revised February 2019).
> **Credits:** 3+1 (3 lectures + 1 lab/week) · **CLO:** *"Practice configuration and troubleshooting of computer networks using modern tools."* (C3, guided-response psychomotor, Modern Tool Usage)
> **Exclusions:** none — all 14 labs + Appendix A in scope. Appendix A = self-study **reference**.
> **Ordering note:** CCN is **NOT derived mode** — the lab→week map comes from `Lab-Schedule.md`, per-lab blocks come from `03-Lab-Breakdowns/`. The workbook order **matches** the theory narrative's sequential W→Lab mapping.

## Lab → week map (official — `Lab-Schedule.md`)

| Real Week | Lab(s) | Workbook Lab | Topic Group |
|:---------:|:------:|:------------:|-------------|
| W1 | 1 | Configure IP Addresses on different network devices using Cisco Packet Tracer | Basic Config (Labs 1–3) |
| W2 | 2 | Practice making Straight Through & Cross UTP cables | Basic Config (Labs 1–3) |
| W3 | 3 | Configure File Sharing Server across different networks | Basic Config (Labs 1–3) |
| W4 | 4 | Configure static routes on Cisco routers | Routing & ACLs (Labs 4–8) |
| W5 | 5 | Configure RIP (Routing Information Protocol) and RIP v2 | Routing & ACLs (Labs 4–8) |
| W6 | 6 | Configure OSPF (Open Shortest Path First) Single Area | Routing & ACLs (Labs 4–8) |
| W7 | 7 | Practice how to connect two routers (Branch office and Head office) with the help of PPP | Routing & ACLs (Labs 4–8) |
| W8 | — | **No lab — midterm exam week (Sat `off`)** | — |
| W9 | 8+9 | Configure Access Lists + Explore basic LAN Switch Operation and Loop Avoidance with Spanning Tree | Routing & ACLs (Labs 4–8) + Switching (Labs 9–10) |
| W10 | 10 | Configure Virtual LANs | Switching (Labs 9–10) |
| W11 | 11 | Implement Network Address Translation | Advanced (Labs 11–14) |
| W12 | 12 | Configure BGP on Cisco routers | Advanced (Labs 11–14) |
| W13 | 13 | Examine packets of different protocols using Wireshark (Network Traffic Analysis and Filtering) | Advanced (Labs 11–14) |
| W14 | 14 | Configure DHCP server & Helper address feature in Cisco router | Advanced (Labs 11–14) |
| W15 | — | **FINAL** — no lab (lab viva separate slot) | — |
| — | App A | IPv4 Addressing, Sub-netting and VLSM | Reference |

## Notes

- **W8 (midterm week) has no lab** — Saturday is `off` in `term.json`. **Labs 8 (Access Lists) + 9 (LAN Switch/STP) merge into W9 Saturday** as one populated `## Lab` pointer (thematically compatible switching/security pair). Lab 14 (DHCP) stays in the W14 taper.
- **Application-layer labs are practical-only:** Labs 3 (FTP/File Sharing), 13 (Wireshark HTTP/DNS), 14 (DHCP) are NOT examinable per the official CS-327 syllabus (see `02-Official-Syllabus.md`). Keep them for the lab grade; do not spend theory time on them.
- **Appendix A (subnetting/VLSM) is a self-study reference** — it maps to the theory weight (subnetting is the highest-ROI final-exam topic), not to a graded lab session.
- Group breakdowns: `CCN/03-Lab-Breakdowns/01-IP-Configuration.md` … `14-DHCP.md` + `Appendix-IPv4-Subnetting-VLSM.md`. Per-lab resources: `CCN/Lab-Resources.md`.
- Lab weight: ~20% editorial (`01-Course-Overview.md` + `Marks-Allocation.md` agree) — no official CS-327 policy confirmed.

## Exam relevance (lab ↔ theory bridge)

| Lab(s) | Examinable? | Bridge |
|--------|-------------|--------|
| 1 IP Config | ✅ theory-linked | IP addressing (M7) → `Fear-Killer-Packs.md` (Week 4) · `Formula-Book.md` (Subnetting) |
| 2 UTP Cables | ⚠️ physical layer | no direct exam theory beyond Ethernet framing (M4) → CSMA/CD min frame (Week 3) |
| 3 File Sharing (FTP) | ❌ lab-only | Application layer NOT in official syllabus — keep for lab grade |
| 4 Static Routes | ✅ theory-linked | routing theory (M8) → `Fear-Killer-Packs.md` (Week 5) |
| 5 RIP/RIPv2 | ✅ theory-linked | distance-vector, count-to-infinity (M8) → `Fear-Killer-Packs.md` (Week 5) |
| 6 OSPF | ✅ theory-linked | link-state + Dijkstra (M8) → `Fear-Killer-Packs.md` (Week 5 Q1/Q3) |
| 7 PPP/CHAP | ✅ theory-linked | DLL framing/authentication (M4) → `Definition-Book.md`, `Formula-Book.md` |
| 8 Access Lists | ⚠️ reasoning | no dedicated module; network-layer filtering ties to M6 — order/implicit-deny logic exam-fair |
| 9 LAN Switch/STP | ✅ theory-linked | Ethernet, switching vs routing (M4) → `Fear-Killer-Packs.md` (Week 1 Q3, Week 3) |
| 10 VLANs | ✅ theory-linked | DLL + switching/bridging (M4); subnetting topology intuition (M7) |
| 11 NAT | ✅ theory-linked | IPv4 addressing (M7) → `Fear-Killer-Packs.md` (Week 4) · `Definition-Book.md` (NAT) |
| 12 BGP | ✅ theory-linked | inter-domain routing (M8) → `Fear-Killer-Packs.md` (Week 5 Q3) |
| 13 Wireshark | ⚠️ mixed | TCP/UDP headers + 3-way handshake examinable (M11); HTTP/DNS/DHCP lab-only |
| 14 DHCP | ❌ lab-only | Application layer NOT in official syllabus — keep for lab grade |
| App A Subnetting/VLSM | ✅ theory-linked | subnetting = highest-ROI final topic (M7) → `Fear-Killer-Packs.md` (Week 4 Q1) · `Numerical-Book.md` (#25–30) |

> Every row sourced from the breakdown files' `Exam Relevance` lines + `Lab-Schedule.md` notes. Never invent an examinability claim.

---

# Lab Group: Basic Config (Labs 1–3)

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: *"practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."*

## Lab 1 — Configure IP Addresses on Different Network Devices Using Cisco Packet Tracer

**Goal:** Assign IPv4 addresses to router interfaces and end devices in Packet Tracer and establish basic connectivity.

**Steps:**
- **CLI loop on routers:** `enable` → `configure terminal` → `interface <g0/0|fa0/0>` → `ip address <ip> <mask>` → `no shutdown` → `end`.
- Interfaces are `administratively down` by default — `no shutdown` is mandatory.
- **PCs:** Desktop → IP Configuration → IP + subnet mask + default gateway (must match the router interface on the same segment).
- Verify: `show ip interface brief` on routers; `ping <other-host>` for connectivity.
- Persist: `copy running-config startup-config`.

**Deliverable:** Working topology where all directly connected hosts can ping each other; `show ip interface brief` output captured.

**Exam Relevance:** IP addressing = Module 7. CIDR/classful concepts in `Formula-Book.md`; subnetting drill in `Fear-Killer-Packs.md` (Week 4). CLI familiarity is lab-only.

**Resources:** `CCN/Lab-Resources.md` → Lab 1 (e.g. `ro-drick/Configuring-IP-addresses`, `Ebeneze4337/Cisco-Basic-Network-Configurations`).

## Lab 2 — Practice Making Straight-Through & Cross UTP Cables

**Goal:** Crimp T568A and T568B wiring on UTP cable; build and test straight-through and crossover cables.

**Steps:**
- **T568A vs T568B** differ only in the green/orange pair swap (pins 1-2 vs 3-6) — per ANSI/TIA-568-C.2.
- **Straight-through:** same standard (A-A or B-B) on both ends → unlike devices (PC↔switch/router).
- **Crossover:** A on one end, B on the other → like devices (PC↔PC, switch↔switch). Gigabit requires all four pairs crossed.
- Pinout (T568B): 1=W/O, 2=O, 3=W/G, 6=G (10/100 only uses pairs 1-2, 3-6).
- Modern switches use auto-MDIX, so straight-through often works between like devices too.
- Verify with a cable tester; in Packet Tracer use straight/cross connection types.

**Deliverable:** Two working cables (one straight, one crossover) verified by tester; connectivity shown in Packet Tracer.

**Exam Relevance:** Physical layer only — no direct exam theory beyond Ethernet framing (Module 4). Related: CSMA/CD min frame size in `Fear-Killer-Packs.md` (Week 3).

**Resources:** `CCN/Lab-Resources.md` → Lab 2 (e.g. `ProZsolt/runbook`, `ShubhamJagtap2000/Networking-Essentials`).

## Lab 3 — Configure File Sharing Server Across Different Networks

**Goal:** Set up an FTP file server and access it from clients on different subnets through a router.

**Steps:**
- **Server:** Services → FTP → enable; create users (e.g., `administrator/cisco` full access, `anonymous` read-only). In Packet Tracer, remove the default account.
- **Client:** Command Prompt → `ftp <server-ip>` → `dir` (list) → `put <file>` (upload) → `get <file>` (download) → `quit`.
- Cross-network access requires each host's default gateway pointing to its local router interface; router must be up (`no shutdown`) and routes present.
- FTP transmits username/password in clear text — an inherent weakness.

**Deliverable:** Clients on two different networks successfully upload/download files from the shared server.

**Exam Relevance:** ❌ **Lab-only** — FTP/HTTP/DNS are Application-layer, NOT examinable per the official CS-327 syllabus. Practical for understanding client-server; theory point to retain: TCP port 21 control / 20 data.

**Resources:** `CCN/Lab-Resources.md` → Lab 3 (e.g. `kill-ux/deep-in-net`, `EForce11/packet_tracer_rip_example`).

---

# Lab Group: Routing & ACLs (Labs 4–8)

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: *"practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."*

## Lab 4 — Configure Static Routes on Cisco Routers

**Goal:** Connect multiple networks using manually configured static routes and a default route.

**Steps:**
- Syntax: `ip route <network> <mask> <next-hop-ip | exit-interface> [distance]`.
- Default route (gateway of last resort): `ip route 0.0.0.0 0.0.0.0 <next-hop>`.
- Static route admin distance = 1 (beats RIP 120, OSPF 110).
- Routes must exist in **both** directions for two-way connectivity.
- Ethernet next-hops use the next-hop IP; point-to-point links may use the exit interface.
- Remove with `no ip route ...`. Verify: `show ip route`, `ping` across the path.

**Deliverable:** All inter-network pings succeed using only static routes; routing table shown via `show ip route`.

**Exam Relevance:** Routing theory = Module 8. Static vs dynamic trade-offs; AD comparison; count-to-infinity/poison reverse contrast — see `Fear-Killer-Packs.md` (Week 5).

**Resources:** `CCN/Lab-Resources.md` → Lab 4 (e.g. `ro-drick/Configuring-Static-Routes`, `ls028/packet-tracer-labs`).

## Lab 5 — Configure RIP (Routing Information Protocol) and RIP v2

**Goal:** Enable RIP on routers so they learn routes dynamically; compare RIP v1 vs RIPv2.

**Steps:**
- `router rip` → `version 2` → `network <classful-addr>` for each directly connected network.
- The `network` command accepts only classful addresses; it advertises interfaces on those networks and enables RIP on them.
- RIPv2: classless, multicasts to `224.0.0.9`, supports VLSM/CIDR and MD5 authentication; use `no auto-summary` for classless operation.
- RIPv1: classful, broadcasts to `255.255.255.255`.
- Timers: update 30s, invalid 180s, holddown 180s, flush 240s; AD = 120.
- Verify: `show ip route`, `show ip protocols`, `show ip rip database`.

**Deliverable:** Routers learn all remote networks dynamically (RIP routes in `show ip route`); RIPv2 running with `no auto-summary`.

**Exam Relevance:** Distance-vector routing, count-to-infinity, poison reverse = Module 8 core theory — `Fear-Killer-Packs.md` (Week 5). AD comparison across RIP/OSPF/BGP frequently tested.

**Resources:** `CCN/Lab-Resources.md` → Lab 5 (e.g. `PomudithaUmayangi/Configure-RIPv2-in-Packet-Tracer`, `chabbax/cisco-packet-tracer-example`).

## Lab 6 — Configure OSPF (Open Shortest Path First) Single Area

**Goal:** Configure single-area OSPF so routers build a link-state database and compute shortest paths.

**Steps:**
- `router ospf <process-id>` → `network <network> <wildcard-mask> area 0` (or per-interface `ip ospf <pid> area 0`).
- **Wildcard mask** = inverse mask: `255.255.255.255 − subnet-mask` (e.g., 255.255.255.0 → 0.0.0.255).
- The network command advertises the subnet **and** activates OSPF (hello packets) on matching interfaces.
- Process ID is locally significant only; all routers here use Area 0.
- Router ID = highest loopback, else highest active interface IP (set explicitly with `router-id <ip>`).
- Hello multicast `224.0.0.5`; OSPF AD = 110.
- Verify: `show ip ospf neighbor`, `show ip ospf interface`, `show ip route ospf`.

**Deliverable:** All routers show neighbors via `show ip ospf neighbor` and exchange routes; full reachability.

**Exam Relevance:** Link-state routing + Dijkstra = Module 8 theory — `Fear-Killer-Packs.md` (Week 5 Q1/Q3). OSPF vs RIP vs BGP comparisons examinable.

**Resources:** `CCN/Lab-Resources.md` → Lab 6 (e.g. `ParthBiswas/cisco-pt-ospf-acl-config`, `egebre3/Enterprise-Network-Cisco`).

## Lab 7 — Practice How to Connect Two Routers (Branch and Head Office) with PPP

**Goal:** Connect two routers over a serial link using PPP with CHAP authentication.

**Steps:**
- On serial interface: `encapsulation ppp`.
- Authentication: `ppp authentication chap` on both sides for two-way CHAP.
- Create the peer credential: `username <peer-hostname> password <shared-secret>` — the username must be the **peer's hostname** and the password must match on both routers.
- For one-way authentication on the caller only: `ppp authentication chap callin`.
- CHAP = 3-way MD5 handshake (challenge → response → accept); PAP is 2-way clear-text (insecure).
- LCP negotiates link config, then NCP (IPCP) assigns/sets addresses.
- Verify: `show interfaces serial <n>`, `show ppp status`, `debug ppp authentication` (briefly).

**Deliverable:** Two routers exchange routes/connectivity over a PPP link with CHAP authenticating both directions.

**Exam Relevance:** Data-link protocols (Module 4). PPP framing/authentication is a known exam contrast point vs HDLC. See `Definition-Book.md`, `Formula-Book.md`.

**Resources:** `CCN/Lab-Resources.md` → Lab 7 (e.g. `rickxy/SIC--PPP--Routing--and-Remote-Access-VPN`, `nyquist/ccie`).

## Lab 8 — Configure Access Lists

**Goal:** Control traffic with standard and extended access lists and apply them to interfaces.

**Steps:**
- **Standard ACL (1-99):** filters source only — `access-list 1 permit 192.168.1.0 0.0.0.255`.
- **Extended ACL (100-199):** protocol + source + dest + port — `access-list 101 deny tcp any any eq 23`.
- Named ACLs (`ip access-list standard|extended <name>`) also supported.
- **Create the ACL before applying it** — a nonexistent list = implicit deny.
- Apply on interface: `ip access-group <n> in|out`.
- Implicit deny at the end; order matters (first match wins); at least one permit needed.
- Standard ACLs → closest to destination; extended ACLs → closest to source.
- Verify: `show ip access-lists`, `show access-lists`, test with ping/telnet.

**Deliverable:** Configured ACLs that permit intended traffic and deny the rest; verified via `show ip access-lists`.

**Exam Relevance:** No dedicated ACL module in the official syllabus, but network-layer filtering ties to Module 6. Order/implicit-deny logic is exam-fair as a reasoning question.

**Resources:** `CCN/Lab-Resources.md` → Lab 8 (e.g. `mustafa-albazzaz1412/ccna-acl-lab`, `lukegtyler/network-security-acl`).

---

# Lab Group: Switching (Labs 9–10)

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: *"practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."*

## Lab 9 — Explore Basic LAN Switch Operation and Loop Avoidance with Spanning Tree

**Goal:** Observe switch MAC learning/forwarding and configure/observe Spanning Tree Protocol preventing loops.

**Steps:**
- **Switch operation:** learns source MACs, forwards on destination match, floods unknown destinations.
- **STP 802.1D (PVST+)** elects a root bridge by lowest bridge ID (priority 32768 default + MAC).
- Redundant paths are put into **blocking** state so only one active path exists between any two stations — prevents broadcast storms, duplicate frames, and MAC flapping.
- Port roles: root, designated, alternate (blocked). States: blocking → listening → learning → forwarding.
- 802.1w rapid-PVST+ speeds convergence.
- Verify: `show spanning-tree`, `show spanning-tree vlan 1`, `show mac address-table`.

**Deliverable:** A loop-free topology with a clear root bridge and blocked ports shown via `show spanning-tree`.

**Exam Relevance:** Spanning tree / redundancy = Module 4 (DLL issues) and bridges/switches vs routers. Related exam points: Ethernet, switching vs routing — `Fear-Killer-Packs.md` (Week 1 Q3, Week 3).

**Resources:** `CCN/Lab-Resources.md` → Lab 9 (e.g. `PaulFinestres/lab-4-spanning-tree-protocol`, `c4geeks/ccna-labs`).

## Lab 10 — Configure Virtual LANs

**Goal:** Segment a LAN with VLANs, trunk ports, and inter-VLAN routing.

**Steps:**
- Create VLAN: `vlan <id>` + `name <name>` (or `vlan database` mode on older IOS).
- Assign access port: `interface fa0/n` → `switchport mode access` → `switchport access vlan <id>`.
- Access port carries a single untagged VLAN; trunk carries many: `switchport mode trunk` + `switchport trunk encapsulation dot1q`.
- Inter-VLAN routing: router-on-a-stick with `interface fa0/n.<vlan>` + `encapsulation dot1Q <vlan>`, or Layer-3 switch `interface vlan <id>`.
- Native VLAN / allowed-VLAN trunk controls (`switchport trunk allowed vlan ...`).
- Verify: `show vlan brief`, `show interfaces trunk`, `show interfaces switchport`.

**Deliverable:** Broadcast domains segmented by VLAN; hosts in the same VLAN communicate, cross-VLAN traffic routed.

**Exam Relevance:** VLANs tie to Module 4 (DLL) and switching/bridging concepts; useful for subnetting topology intuition (Module 7). See `Fear-Killer-Packs.md` (Week 1 Q3 switch vs router).

**Resources:** `CCN/Lab-Resources.md` → Lab 10 (e.g. `ro-drick/VLAN-ROAS-Configuration`, `leobagno-labs/router-on-stick-lab`).

---

# Lab Group: Advanced (Labs 11–14)

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: *"practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."*

## Lab 11 — Implement Network Address Translation

**Goal:** Hide private addressing using static NAT, dynamic NAT, and PAT (overload).

**Steps:**
- **Static:** `ip nat inside source static <local-ip> <global-ip>` (1:1).
- **Dynamic:** define pool `ip nat pool <name> <start> <end> netmask <mask>` + ACL for inside hosts + `ip nat inside source list <acl> pool <name>`.
- **PAT (overload):** add `overload` to the pool line — many insiders share one global IP.
- Mark interfaces: `ip nat inside` (LAN side) / `ip nat outside` (WAN side).
- PAT works for port-bearing protocols (ICMP, TCP, UDP); non-PATtable traffic needs 1:1 bindings or `ip nat settings nonpatdrop`.
- Configure the ACL before NAT tasks; avoid `permit ip any any` in the NAT ACL.
- Verify: `show ip nat translations`, `show ip nat statistics`, debug with `debug ip nat`.

**Deliverable:** Inside hosts reach the outside using NAT/PAT; translation table visible in `show ip nat translations`.

**Exam Relevance:** NAT is part of Module 7 (IPv4/IPv6 addressing). Translation mechanics, port numbers, and why IPv6 reduces NAT reliance are examinable — `Fear-Killer-Packs.md` (Week 4).

**Resources:** `CCN/Lab-Resources.md` → Lab 11 (e.g. `TheCleverIdiott/Computer-Networks-Cisco-Packet-Tracer`, `c4geeks/ccna-labs`).

## Lab 12 — Configure BGP on Cisco Routers

**Goal:** Set up eBGP between routers in different autonomous systems and iBGP within an AS.

**Steps:**
- `router bgp <as-number>` → `neighbor <peer-ip> remote-as <asn>`.
- Advertise networks: `network <prefix> mask <subnet-mask>` (must exist in routing table).
- **eBGP:** peers in different ASes; usually directly connected (TTL 1).
- **iBGP:** peers in same AS; use loopback + `neighbor ... update-source loopbackN` and `neighbor ... next-hop-self`.
- BGP runs over TCP port 179; states Idle → Connect → OpenSent → OpenConfirm → Established.
- AD: eBGP = 20, iBGP = 200.
- Verify: `show ip bgp summary`, `show ip bgp`, `show ip bgp neighbors`.

**Deliverable:** Routers establish BGP neighbors (Established state) and exchange advertised prefixes.

**Exam Relevance:** Inter-domain routing / path-vector protocol = Module 8 theory. BGP vs OSPF policy differences examinable — `Fear-Killer-Packs.md` (Week 5 Q3). See also `Definition-Book.md`.

**Resources:** `CCN/Lab-Resources.md` → Lab 12 (e.g. `mushfiqur-rahman/bgp-configuration`, `NetworkThinkTank-Labs/lab-01-bgp-fundamentals`).

## Lab 13 — Examine Packets of Different Protocols Using Wireshark (Network Traffic Analysis and Filtering)

**Goal:** Capture and analyze live traffic to correlate observed packets with protocol theory.

**Steps:**
- Capture: choose interface → Start; stop after generating traffic.
- **Three panes:** packet list, packet details, packet bytes.
- Display filters (live on capture): `ip.addr==x.x.x.x`, `tcp.port==80`, `http`, `dns`, `icmp`, `udp.port==53`.
- Statistics menu: Protocol Hierarchy, Conversations, Endpoints.
- Follow TCP stream to reassemble a session; correlate DNS query/response by transaction ID.
- Generate traffic (ping, browse, DHCP) so the target protocols appear.

**Deliverable:** Capture annotated with filtered views for HTTP/DNS/TCP/UDP/ICMP showing the relevant header fields.

**Exam Relevance:** Directly reinforces TCP/UDP headers and 3-way handshake (Module 11) — **examinable**; DNS/HTTP (non-examinable, lab-only), DHCP (lab-only). See `Fear-Killer-Packs.md` (Week 6 Q1).

**Resources:** `CCN/Lab-Resources.md` → Lab 13 (e.g. `Hardeeh03/wireshark-network-security-analysis`, `Jalp28/Capture-and-Analyze-Network-Traffic-Using-Wireshark`).

## Lab 14 — Configure DHCP Server & Helper Address Feature in Cisco Router

**Goal:** Configure a Cisco router as a DHCP server and relay DHCP across subnets with the helper address.

**Steps:**
- Exclude addresses: `ip dhcp excluded-address <start> <end>`.
- Pool: `ip dhcp pool <name>` → `network <net> <mask>` → `default-router <gateway>` → `dns-server <ip>`.
- **Relay (cross-subnet):** on the client-side interface `ip helper-address <dhcp-server-ip>` — forwards DHCP broadcasts.
- Helper inserts giaddr (relay info, option 82) so the server can pick the right subnet pool.
- Client verify: `ipconfig /renew`, `ipconfig /all`.
- Removing the last pool workaround: keep a dummy pool or use helper-address on a loopback.

**Deliverable:** Clients on multiple subnets obtain correct IPs from the central DHCP server; verified with `ipconfig /all`.

**Exam Relevance:** ❌ **Lab-only** — DHCP is NOT examinable per the official CS-327 syllabus (Application-layer). Keep as practical-only; relevant IP-addressing theory is Module 7.

**Resources:** `CCN/Lab-Resources.md` → Lab 14 (e.g. `c4geeks/ccna-labs` dhcp-server-relay, `Ironfist69/DHCP-server-configuration-in-Cisco-Packet-Tracer`).

---

## Appendix — IPv4 Addressing, Sub-Netting and VLSM (reference)

**Status:** self-study reference — **not a graded lab session**; maps to the subnetting theory topic (M7, highest-ROI final weight).

**Steps:**
- **Classful:** A (1-126, /8), B (128-191, /16), C (192-223, /24); D multicast, E reserved.
- **CIDR/classless:** prefix length notation (`/n`); subnets = 2^(borrowed host bits), hosts = 2^(remaining) − 2.
- **Magic number:** `256 − mask-octet` gives the subnet stride for the borrow octet.
- Network address = base; broadcast = last address in the block; usable = first..last−1.
- **VLSM:** allocate largest subnets first so space is not wasted.
- Verify a plan by listing each subnet's network/broadcast/usable range and total hosts (see `Fear-Killer-Packs.md` Week 4 Q1 for a worked example).

**Deliverable:** Correct subnetting/VLSM scheme for a given host-count requirement per department.

**Exam Relevance:** Core of Module 7 — guaranteed marks. Drill with `Formula-Book.md`, `Numerical-Book.md` (#25–30), `Fear-Killer-Packs.md` (Week 4), and subnetipv4.com.

**Resources:** `CCN/Lab-Resources.md` → Appendix A (e.g. `kill-ux/deep-in-net`, `VatsalNegi/Network-Simulation-Using-Cisco-Packet-Tracer`) + subnetipv4.com.

---

## Viva — Computer Communication Networks (CS-327)

### Project Walkthrough (3 min)
1. Explain your Packet Tracer topology
2. What protocols did you configure?
3. How did you verify connectivity?
4. What routing protocol did you use? Why?
5. How did you design your IP addressing scheme?

### Technical Questions
6. Give me an IP, subnet it into 4 subnets (practical)
7. Show me the routing table. What does each entry mean?
8. How does OSPF elect DR and BDR?
9. What is the difference between RIP and OSPF?
10. How does NAT work in your topology?
11. Show VLAN configuration. Why did you use VLANs?
12. What is the purpose of STP?
13. How does TCP 3-way handshake work?
14. What is the default gateway? Why is it needed?
15. How would you troubleshoot a connectivity issue?
16. Show me your PPP serial link. How does CHAP authenticate? Walk through the challenge-response handshake and explain why CHAP is safer than PAP.
17. Write an extended ACL that blocks telnet from 192.168.1.0/24 to a server at 10.0.0.5. What does implicit deny mean, and where do you place standard vs extended ACLs?
18. How is the root bridge elected in STP? Trace the port states (blocking → listening → learning → forwarding) and what happens if the root bridge fails.
19. Show me your trunk configuration. How does 802.1Q tag a frame, and what is the difference between an access port and a trunk port?
20. Why does BGP run over TCP port 179? Walk through BGP path selection (weight → local preference → AS path → ...).
21. How does PAT distinguish multiple internal hosts sharing one public IP? Contrast static NAT, dynamic NAT, and PAT.
22. You have a Wireshark capture. Which filter isolates the TCP 3-way handshake, and how do you follow a TCP stream to reassemble an HTTP request?

*(Viva questions verbatim from `Viva-Book.md` — 5 walkthrough + 17 technical. Viva is a separate W15 slot; prepare the 3-min Packet Tracer walkthrough and be ready to subnet on the whiteboard. Know `show ip route`, `show running-config`, `show vlan brief`, `show interfaces`.)*
