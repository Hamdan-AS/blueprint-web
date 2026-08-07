# Lab 12 — Configure BGP on Cisco Routers

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Set up eBGP between routers in different autonomous systems and iBGP within an AS.

## Steps
- `router bgp <as-number>` → `neighbor <peer-ip> remote-as <asn>` (`*web-verified*`).
- Advertise networks: `network <prefix> mask <subnet-mask>` (must exist in routing table).
- **eBGP:** peers in different ASes; usually directly connected (TTL 1).
- **iBGP:** peers in same AS; use loopback + `neighbor ... update-source loopbackN` and `neighbor ... next-hop-self` (`*web-verified*`).
- BGP runs over TCP port 179 (`*web-verified*`); states Idle → Connect → OpenSent → OpenConfirm → Established.
- AD: eBGP = 20, iBGP = 200.
- Verify: `show ip bgp summary`, `show ip bgp`, `show ip bgp neighbors`.

## Deliverable
Routers establish BGP neighbors (Established state) and exchange advertised prefixes.

## Exam Relevance
Inter-domain routing / path-vector protocol = Module 8 theory. BGP vs OSPF policy differences examinable — `Fear-Killer-Packs.md` (Week 5 Q3). See also `Definition-Book.md`.

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.5; Cisco BGP doc 13751 (`*web-verified*`).
