# LAB 6 — CONFIGURE OSPF (OPEN SHORTEST PATH FIRST) SINGLE AREA

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."
---
## Goal

Configure single-area OSPF so routers build a link-state database and compute shortest paths.
---
## Steps

- `router ospf <process-id>` → `network <network> <wildcard-mask> area 0` (or per-interface `ip ospf <pid> area 0`).
- **Wildcard mask** = inverse mask: `255.255.255.255 − subnet-mask` (e.g., 255.255.255.0 → 0.0.0.255) (`*web-verified*`).
- The network command advertises the subnet **and** activates OSPF (hello packets) on matching interfaces (`*web-verified*`).
- Process ID is locally significant only; all routers here use Area 0.
- Router ID = highest loopback, else highest active interface IP (set explicitly with `router-id <ip>`).
- Hello multicast `224.0.0.5`; OSPF AD = 110 (`*web-verified*`).
- Verify: `show ip ospf neighbor`, `show ip ospf interface`, `show ip route ospf`.
---
## Deliverable

All routers show neighbors via `show ip ospf neighbor` and exchange routes; full reachability.
---
## Exam Relevance

Link-state routing + Dijkstra = Module 8 theory — `Fear-Killer-Packs.md` (Week 5 Q1/Q3). OSPF vs RIP vs BGP comparisons examinable.
---
## Resources

See `CCN/Resources.md` — Kurose & Ross Ch.5; NetworkLessons OSPF config (`*web-verified*`).
