# CCN/weeks — Course-Specific Mapping

> Course-specific notes only. Canonical schema lives in `Shared/MANIFEST-SCHEMA.md` — do NOT restate it here.
> CS-327 is **theory+practical (3+1)** → every CCN manifest carries a `## Lab` section.

## Rotation

CCN = **Course B on Wed + Course A on Thu** (per `Shared/03-Weekly-Schedule.md`):
- **Wed** — CCN is the **B-slot** (deep study B, block 4, P1)
- **Thu** — CCN is the **A-slot** (deep study A, blocks 2–3, P0) — its only A slot of the week

So CCN has **1 A-slot + 1 B-slot** per week. The `## Deep study A` section below is the Thu A-slot; the `## Deep study B` section is the Wed B-slot. The **P0 floor** (pack pass + skim + drill) is anchored to the Thu A-slot.

## Pack ↔ source anchor map

> CCN packs are **topic-keyed**, not week-keyed (`### Week N: topic-...`). A single pack can span multiple manifest weeks.

| Manifest | Pack (Fear-Killer-Packs.md) | Week-by-Week-Narrative.md |
|---|---|---|
| CCN-W1 | `Week 1: topic-osi-and-tcpip` | Week 1 (lines 17–35) |
| CCN-W2 | `Week 2: topic-data-link-layer-and-error-control` (Q3 flow control) | Week 2 (lines 39–54) |
| CCN-W3 | `Week 2: topic-data-link-layer-and-error-control` (Q1 CRC, Q2 Hamming) | Week 3 (lines 58–76) |
| CCN-W4 | `Week 3: topic-mac-and-csmacd` | Week 4 (lines 80–95) |
| CCN-W5 | `Week 4: topic-network-layer-and-ip` (Q2, Q4, Q5) | Week 5 (lines 99–114) |
| CCN-W6 | `Week 4: topic-network-layer-and-ip` (Q1 VLSM, Q3 subnet) | Week 6 (lines 118–136) |
| CCN-W7 | — (revision) | Week 7 (lines 140–157) |
| CCN-W8 | — (midterm, no pack) | Week 8 (lines 161–171) |
| CCN-W9 | `Week 5: topic-routing` | Week 9 (lines 174–194) |
| CCN-W10 | `Week 5: topic-routing` (Q3) + `Week 4` (Q4 IPv6) | Week 10 (lines 198–215) |
| CCN-W11 | `Week 6: topic-transport-layer` | Week 11 (lines 219–236) |
| CCN-W12 | `Week 7: topic-tcp-congestion-control` | Week 12 (lines 240–261) |
| CCN-W13 | `Week 8: topic-advanced-mpls-sdn-wireless-multimedia` | Week 13 (lines 265–282) |
| CCN-W14 | — (taper) | Week 14 (lines 286–305) |

## Lab → week map (from `Lab-Schedule.md`)

> W8 (midterm week) has **no lab** (Sat `off` per `term.json`); **Labs 8 + 9 merge into W9** Saturday as one pointer. Lab 14 (DHCP) stays in the W14 taper.

| Week | Lab # | Workbook title | Group breakdown |
|---|---|---|---|
| W1 | 1 | Configure IP Addresses (Packet Tracer) | `03-Lab-Breakdowns/01-IP-Configuration.md` |
| W2 | 2 | Straight-Through & Cross UTP cables | `02-UTP-Cables.md` |
| W3 | 3 | Configure File Sharing Server | `03-File-Sharing-Server.md` |
| W4 | 4 | Configure static routes | `04-Static-Routes.md` |
| W5 | 5 | Configure RIP / RIP v2 | `05-RIP.md` |
| W6 | 6 | Configure OSPF Single Area | `06-OSPF-Single-Area.md` |
| W7 | 7 | PPP (Branch/Head office) | `07-PPP.md` |
| W8 | — | No lab — midterm (Sat off) | — |
| W9 | 8+9 | Configure Access Lists + LAN Switch Operation + STP (merged) | `08-Access-Lists.md` + `09-LAN-Switch-STP.md` |
| W10 | 10 | Configure Virtual LANs | `10-Virtual-LANs.md` |
| W11 | 11 | Implement NAT | `11-NAT.md` |
| W12 | 12 | Configure BGP | `12-BGP.md` |
| W13 | 13 | Wireshark traffic analysis | `13-Wireshark.md` |
| W14 | 14 | Configure DHCP server + Helper address | `14-DHCP.md` |
| — | App A | IPv4 Addressing, Subnetting, VLSM | `Appendix-IPv4-Subnetting-VLSM.md` (self-study) |

Per-lab GitHub repos: `Lab-Resources.md` (14 labs + App A). **App A (subnetting/VLSM) = self-study reference**, maps to highest-ROI theory weight — drill via `Numerical-Book.md` #25–#30 + `subnetipv4.com`.

**Lab-only (not examinable per syllabus):** Labs 3 (FTP/File Sharing), 13 (Wireshark), 14 (DHCP) — keep for the lab grade, do not spend theory time on them.

## Flat-file pointers used (index, don't copy)

| Payload | Source | Primary refs |
|---|---|---|
| Definitions | `Definition-Book.md` | CIDR, CRC, CSMA/CD, MTU, NAT, OSPF, PDU, RTT, Subnet Mask, TCP, UDP, VLSM |
| Formulas | `Formula-Book.md` | CRC, CSMA/CD, ALOHA, Subnetting, TCP congestion |
| Numericals | `Numerical-Book.md` | CRC #22–23; CSMA/CD #24; Subnetting #25–30; TCP #31–32 |
