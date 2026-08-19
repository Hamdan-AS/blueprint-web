# CCN-NAV — COMPUTER COMMUNICATION NETWORKS (CS-327) — MASTER INDEX

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 9-10:#9adba4:#15803d 11:#ffd27a:#b45309 12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 ; stack: NAV:#9cc4ff BEFORE-MID:#9adba4 AFTER-MID:#c7adff -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Midterm 30 / Final 40 / Lab 20** · load 3.5 · difficulty 3.5/5

> **Open this file first.** It is the map: where every topic lives, every line offset, every resource.
> **Four-file pack** (all in `terms/2026-fall/CCN/`):
> | File | Holds |
> |---|---|
> | `CCN-NAV.md` | This map — glance tables, master offsets, resources index |
> | `CCN-BEFORE-MID.md` | Weeks 1–8 (midterm) — full per-week content |
> | `CCN-AFTER-MID.md` | Weeks 9–15 (final) — full per-week content |
> | `CCN-LABS.md` | All 14 labs + Appendix A + lab viva — lab→week map, per-lab blocks, viva prep |

---
## Where to look (fast answers)

| I want… | Open |
|---|---|
| A topic with its defs/formulas/numericals | that week's block in BEFORE-MID / AFTER-MID |
| Any week's exact line offsets | **Master offset table** below |
| A full fear-killer pack (verbatim) | that week's block — packs carry per-question offsets |
| A lab, step-by-step | `CCN-LABS.md` → per-lab block |
| Viva questions | `CCN-LABS.md` viva section · `Viva-Book.md` |
| Books / YT playlists / MOOCs / practice banks | **Resources** section in this file |
| Exam-day order | **Exam stacks** section |
| Which official module covers what | **Syllabus modules** section |
---
## Course facts

- **Code:** CS-327 · **Credits:** 3+1 (theory + lab) · **Contact:** 3 lectures + 1 lab/week · **Prereqs:** Digital Logic Design, basic programming
- **Weightage:** Midterm 30% / Final 40% / Lab ~20% — **editorial, no official CS-327 grading policy confirmed** (`01-Course-Overview.md` L14–19; `Marks-Allocation.md` agrees). NED Final 60 / Sessional 40 may apply course-wide (`Shared/MASTER-DECISIONS.md` Tier 10). Both kept, labeled.
- **Difficulty:** 3.5/5 · **GPA Risk:** Medium
- **Rotation:** Course B (Wed) + Course A (Thu) — 1 A-slot (Thu, P0 floor anchored) + 1 B-slot (Wed) per week; no Saturday lab (term.json Sat `null`; W8 also Sat `off` for midterm)
- **Midterm:** Week 8 (05–11 Oct) · **Final:** Week 15 (23–29 Nov) · **Lab viva:** Week 15 (separate slot)
- **Exam character:** **35% numericals (subnetting, CRC, CSMA/CD, TCP congestion) + 65% theory** (narrative L11). *"Subnetting is the gatekeeper"* — the 30-second /16–/30 target decides A vs A+.
- **Examinability note:** the official syllabus has **no Application Layer** — HTTP/HTTPS/DNS/SMTP/FTP/DHCP/socket programming are **NOT examinable** (`02-Official-Syllabus.md` L89–94). Lab-only labs: 3 (FTP), 13 (Wireshark), 14 (DHCP).
---
## Master weekwise line-offset table

Offsets are line numbers into the named source file. `Fear-Killer-Packs.md` and
`Week-by-Week-Narrative.md` are the two anchored sources; `weeks/CCN-Wn.md` files live in `weeks/`.
CCN packs are **topic-keyed** (a pack can span multiple manifest weeks — see `weeks/README.md`). W7, W8, W14 have no pack.

| Week | Narrative | Pack heading | Pack questions | weeks/CCN-Wn | Module |
|------|-----------|--------------|----------------|--------------|--------|
| W1 | L17–35 | L11 (W1: topic-osi-and-tcpip) | res L12 · Q1 L14 · Q2 L15 · Q3 L16 | CCN-W1 L1–57 | M1–M3 |
| W2 | L39–54 | L18 (W2: topic-data-link-layer-and-error-control) | res L19 · Q3 L23 | CCN-W2 L1–56 | M4 |
| W3 | L58–76 | L18 (same pack — Q1 CRC, Q2 Hamming) | res L19 · Q1 L21 · Q2 L22 | CCN-W3 L1–60 | M5 |
| W4 | L80–95 | L25 (W3: topic-mac-and-csmacd) | res L26 · Q1 L28 · Q2 L29 · Q3 L30 | CCN-W4 L1–58 | M4 |
| W5 | L99–114 | L32 (W4: topic-network-layer-and-ip) | res L33 · Q2 L36 · Q4 L38 · Q5 L39 | CCN-W5 L1–58 | M6–M7 |
| W6 | L118–136 | L32 (same pack — Q1 VLSM, Q3 subnet) | res L33 · Q1 L35 · Q3 L37 | CCN-W6 L1–59 | M7 |
| W7 | L140–157 | — (revision, no pack) | — | CCN-W7 L1–60 | M1–M7 |
| W8 | L161–171 | — (no pack) | — | CCN-W8 L1–31 | MIDTERM |
| W9 | L174–194 | L41 (W5: topic-routing) | res L42 · Q1 L44 · Q2 L45 · Q3 L46 | CCN-W9 L1–60 | M8 |
| W10 | L198–215 | L41 (W5 Q3) + L32 (W4 Q4 IPv6) | res L42 · Q3 L46 · res L33 · Q4 L38 | CCN-W10 L1–56 | M8 + M7 |
| W11 | L219–236 | L48 (W6: topic-transport-layer) | res L49 · Q1 L51 · Q2 L52 · Q3 L53 | CCN-W11 L1–56 | M11 |
| W12 | L240–261 | L55 (W7: topic-tcp-congestion-control) | res L56 · Q1 L58 · Q2 L59 · Q3 L60 | CCN-W12 L1–61 | M11 |
| W13 | L265–282 | L62 (W8: topic-advanced-mpls-sdn-wireless-multimedia) | res L63 · Q1 L65 · Q2 L66 · Q3 L67 · Q4 L68 · Q5 L69 | CCN-W13 L1–57 | M9, M10, M12, M13 |
| W14 | L286–305 | — (taper, no pack) | — | CCN-W14 L1–67 | all |
| W15 | L307–320 | — (no pack) | — | (W15 note at CCN-W14 L66) | FINAL + viva |
---
## Syllabus modules → where it lives

> CCN has no theory `03-Chapter-Breakdowns/` (only `03-Lab-Breakdowns/` for labs). Module coverage is **pack-level + narrative only** — every row marked ⚠️.

| Module | Hours | Breakdown? | Covered in |
|--------|-------|------------|------------|
| M1: Introduction to CN | 3 | ⚠️ pack-level | W1 |
| M2: OSI & TCP/IP reference models | 3 | ⚠️ pack-level | W1 |
| M3: Packet & Circuit Switching | 3 | ⚠️ pack-level | W1 |
| M4: Data Link Layer & Issues | 4 | ⚠️ pack-level | W2, W4 |
| M5: Error Correction & Congestion Control | 4 | ⚠️ pack-level | W3 |
| M6: Network Layer — Protocols & Services | 3 | ⚠️ pack-level | W5 |
| M7: IPv4/IPv6, Addressing & Subnetting | 7 | ⚠️ pack-level | W5, W6, W10 |
| M8: Network Routing | 5 | ⚠️ pack-level | W9, W10 |
| M9: MPLS | 2 | ⚠️ pack-level | W13 |
| M10: Wireless Networks | 3 | ⚠️ pack-level | W13 |
| M11: Transport Layer — TCP & UDP | 5 | ⚠️ pack-level | W11, W12 |
| M12: SDN & VNF | 3 | ⚠️ pack-level | W13 |
| M13: Multimedia Networking & Streaming | 2 | ⚠️ pack-level | W13 |

> **Gaps are flagged, not fabricated:** no theory chapter breakdowns exist for CCN — module coverage is verified from `02-Official-Syllabus.md` and embedded pack/narrative content only.
---
## Exam probability table (editorial — study prioritization only)

> Verbatim from `01-Course-Overview.md` "Exam Weight Breakdown" (editorial estimates, not official).

| Topic | Midterm | Final | Numerical | Diagram | Theory | Definition |
|-------|---------|-------|-----------|---------|--------|------------|
| OSI/TCP model | 90% | 40% | 0% | 30% | 45% | 25% |
| DLL/MAC | 70% | 40% | 10% | 20% | 45% | 25% |
| CRC/Error detection | 80% | 50% | 50% | 10% | 25% | 15% |
| CSMA/CD | 70% | 40% | 30% | 15% | 35% | 20% |
| IPv4/NAT | 80% | 50% | 10% | 25% | 45% | 20% |
| Subnetting | 65% | 85% | 60% | 10% | 20% | 10% |
| Routing (OSPF/BGP) | 0% | 75% | 25% | 20% | 40% | 15% |
| TCP/UDP | 0% | 80% | 15% | 30% | 35% | 20% |
| TCP congestion | 0% | 75% | 25% | 25% | 35% | 15% |
| IPv6 | 0% | 50% | 10% | 25% | 45% | 20% |
| MPLS | 0% | 35% | 5% | 15% | 55% | 25% |
| SDN | 0% | 40% | 5% | 25% | 45% | 25% |
| VNF | 0% | 30% | 0% | 15% | 60% | 25% |
| Wireless | 0% | 40% | 15% | 20% | 45% | 20% |
| Multimedia | 0% | 30% | 10% | 15% | 50% | 25% |

**GPA priority (source: `01-Course-Overview.md`):** Subnetting/VLSM/CIDR 🟥 Must Win (highest numerical weight) · CRC/Hamming 🟥 Must Win · TCP congestion 🟧 · OSI/TCP model 🟧 · Routing (OSPF/BGP) 🟧 · CSMA/CD 🟨 · Advanced block (MPLS/SDN/VNF/Wireless/Multimedia) 🟨.
---
## Marks allocation

| Component | Weight | Strategy |
|-----------|--------|----------|
| Subnetting/VLSM/CIDR | ~20% | 30-sec target, Magic Number method |
| CRC/Hamming | ~10% | Binary division drill |
| TCP congestion control | ~10% | Sawtooth trace, Tahoe vs Reno |
| Routing (OSPF/BGP) | ~15% | Algorithm tracing |
| Advanced block (MPLS/SDN/VNF/Wireless/Multimedia) | ~10% | Short-note mastery: SDN planes, MPLS labels, 802.11 CSMA/CA |
| Theory | ~15% | Layer-by-layer protocol mapping |
| Lab | ~20% | Packet Tracer — install Week 1 |

> **Weight note:** `01-Course-Overview.md` and `Marks-Allocation.md` agree on ~20% lab; both are editorial (no official policy). The official NED policy that may apply is Final 60 / Sessional 40 (`Shared/MASTER-DECISIONS.md` Tier 10) — flagged, not resolved.
---
## Exam stacks

- **Midterm (W8, 05–11 Oct):** past paper 60 min → blank page 30 min → error log 20 min. Answer **numericals first** (subnetting, CRC, CSMA/CD), theory second. Sleep 8 h. Ledger frozen.
- **Final (W15, 23–29 Nov):** subnetting → CRC/CSMA/CD/TCP-cwnd numericals → header/diagram draws → theory. **Subnetting is the highest-ROI marks in the paper — do them first.** Sleep 9 h (banked from W12).
- **Viva (W15, separate slot):** `CCN-LABS.md` viva + `Viva-Book.md` — 3-min Packet Tracer topology walkthrough, then 17 technical questions. Know `show ip route`, `show running-config`, `show vlan brief`, `show interfaces`; be ready to subnet on the whiteboard.
---
## Resources
---
### YouTube playlists

| Playlist | Channel | Videos | Why |
|---|---|---|---|
| [Computer Networks (Complete)](https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx) | Gate Smashers | ~68 | OSI, TCP/IP, subnetting, routing, TCP/UDP, SDN, wireless. 10M+ views |
| [Computer Networking Fundamentals](https://www.youtube.com/watch?v=fQbBPa0ADvs) | freeCodeCamp.org | 1 (12h) | CRC, flow control, IPv4/CIDR, VLSM, TCP congestion, routing algorithms |
| [Computer Networking: A Top-Down Approach](https://www.youtube.com/playlist?list=PLByK_3hwzY3Tysh-SY9MKZhMm9wIfNOas) | (textbook companion) | ~90 | All Kurose & Ross chapters explained |
---
### Textbooks

- **Kurose & Ross** — *Computer Networking: A Top-Down Approach*, 8th Ed (2020; Pearson). ISBN **978-0-13-668155-7**. The standard textbook — everything: OSI, TCP/IP, routing, IPv4/6, SDN, wireless.
- **Tanenbaum & Wetherall** — *Computer Networks*, 6th Ed (2021; Pearson). ISBN **978-0-13-676405-2**. Classic reference with strong fundamentals.
---
### Free MOOCs

| Course | Source | Notes |
|---|---|---|
| [Computer Networks and Internet Protocol](https://onlinecourses.nptel.ac.in/noc23_cs48/preview) | NPTEL | IIT Kharagpur, 12 weeks |
| [The Bits and Bytes of Computer Networking](https://www.coursera.org/learn/computer-networking) | Coursera | Google |
| [Computer Networks](https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/) | MIT OCW | Advanced, with assignments |
---
### Problem banks / practice

| Resource | Link |
|---|---|
| subnetipv4.com | https://subnetipv4.com — infinite interactive subnetting drills (secret weapon) |
| Kurose & Ross Interactive Exercises | https://gaia.cs.umass.edu/kurose_ross/interactive/ |
| LeetCode Networking Problems | https://leetcode.com/problemset/?search=network |
| InfoTech Ninja: 25 Subnetting Problems | https://infotechninja.com/subnetting-practice-set-25-problems/ |
---
### Cheat sheets / revision notes

| Resource | Link |
|---|---|
| GeeksforGeeks CN Cheat Sheet | https://www.geeksforgeeks.org/computer-networks/computer-network-cheat-sheet/ |
| LivePhysics OSI/TCP/IP Cheat Sheet | https://livephysics.com/cheat-sheets/computer-science-computer-networks-osi-and-tcpip-layers/ |
| HowToNetwork CCNA OSI/TCP/IP Cheat Sheet (PDF) | https://www.howtonetwork.com/wp-content/uploads/2021/08/CCNA-OSI_TCP_IP-Cheat-Sheet.pdf |
---
### Secret weapon

**subnetipv4.com** — https://subnetipv4.com — infinite interactive subnetting drills. Subnetting is the gatekeeper (30-sec target); this is the fastest way to reflex-level speed.
---
## Where-everything-lives index (source → embedded location)

| Source file | ~Lines | Embedded in |
|---|---|---|
| `01-Course-Overview.md` | 53 | NAV facts/weights + exam probability + marks allocation |
| `02-Official-Syllabus.md` | 99 | NAV module map + examinability note + textbooks |
| `03-Lab-Breakdowns/…` | ~350 | CCN-LABS per-lab blocks (14 + Appendix A, verbatim) |
| `Definition-Book.md` | 28 | per-week "Definitions" blocks (verbatim, 12 entries) |
| `Formula-Book.md` | 30 | per-week "Formulas" blocks (verbatim) |
| `Numerical-Book.md` | 23 | per-week "Numericals" numbered types (#22–32) |
| `Diagram-Book.md` | 23 | per-week "Diagrams" numbered refs (#1–17) |
| `Marks-Allocation.md` | 14 | NAV (this file) |
| `Resources.md` | 45 | NAV (this file) + per-week book/video lines |
| `Fear-Killer-Packs.md` | 72 | per-week packs (verbatim, with per-question offsets) |
| `Week-by-Week-Narrative.md` | 329 | per-week narrative (verbatim) |
| `Lab-Schedule.md` | 29 | NAV/CCN-LABS lab→week map |
| `Lab-Resources.md` | 142 | CCN-LABS per-lab Resources lines |
| `Viva-Book.md` | 29 | CCN-LABS viva section (verbatim) |
| `CS-318-…-Workbook.md` | 61 | CCN-LABS course facts + CLO + group sections |
| `weeks/CCN-W1…W14` + `README` | ~840 | per-week anchors, P0 floor, drill targets |

> `Top-10-Tricky-Concepts.md` + `Top-100-Questions.md` are **deferred** for CCN (decision 2026-08-05) — equivalent coverage lives in `Definition-Book.md`, `Fear-Killer-Packs.md`, and the topical books. `CCN_CS318_lab.pdf` is the workbook PDF source — parsed into `CS-318-…-Workbook.md`.

---

*Generated from the CCN pack (CS-327). Every offset verified against `weeks/README.md`, `Week-by-Week-Narrative.md`, `Fear-Killer-Packs.md`, and the source files themselves.*

---
## Schedule at a glance

| W | Dates | Variant | File | Topics | Lab |
|---|---|---|---|---|---|
| 1 | 17–23 Aug | P2 | BEFORE | OSI/TCP model, PDU, switching | Lab 1 (IP config) |
| 2 | 24–30 Aug | P2 | BEFORE | Physical + DLL, flow control | Lab 2 (UTP cables) |
| 3 | 31 Aug–06 Sep | P2 | BEFORE | CRC, Hamming | Lab 3 (file sharing) |
| 4 | 07–13 Sep | P2 | BEFORE | ALOHA, CSMA/CD | Lab 4 (static routes) |
| 5 | 14–20 Sep | P0 | BEFORE | IPv4 header, classful, NAT | Lab 5 (RIP) |
| 6 | 21–27 Sep | P2 | BEFORE | Subnetting, VLSM, CIDR | Lab 6 (OSPF) |
| 7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision | Lab 7 (PPP) |
| 8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — |
| 9 | 12–18 Oct | P1 | AFTER | Routing algorithms (recovery) | Labs 8+9 (ACL + STP) |
| 10 | 19–25 Oct | P2 | AFTER | RIP/OSPF/BGP, IPv6 | Lab 10 (VLANs) |
| 11 | 26 Oct–01 Nov | P2 | AFTER | TCP & UDP | Lab 11 (NAT) |
| 12 | 02–08 Nov | P2 | AFTER | TCP congestion control | Lab 12 (BGP) |
| 13 | 09–15 Nov | P1 | AFTER | MPLS, SDN, wireless, multimedia | Lab 13 (Wireshark) |
| 14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | Lab 14 (DHCP) |
| 15 | 23–29 Nov | FINAL | AFTER | Exam + lab viva — execute | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants are editorial tier assignments mirroring SE — CCN manifests carry no variant field. Lab column is official (`Lab-Schedule.md`); W8 (Sat `off`) and W15 no lab; **Labs 8+9 merge into W9**.
