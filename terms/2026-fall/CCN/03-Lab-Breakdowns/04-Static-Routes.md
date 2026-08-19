# LAB 4 — CONFIGURE STATIC ROUTES ON CISCO ROUTERS

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."
---
## Goal

Connect multiple networks using manually configured static routes and a default route.
---
## Steps

- Syntax: `ip route <network> <mask> <next-hop-ip | exit-interface> [distance]` (`*web-verified*`).
- Default route (gateway of last resort): `ip route 0.0.0.0 0.0.0.0 <next-hop>` (`*web-verified*`).
- Static route admin distance = 1 (beats RIP 120, OSPF 110) (`*web-verified*`).
- Routes must exist in **both** directions for two-way connectivity.
- Ethernet next-hops use the next-hop IP; point-to-point links may use the exit interface (`*web-verified*`).
- Remove with `no ip route ...`. Verify: `show ip route`, `ping` across the path.
---
## Deliverable

All inter-network pings succeed using only static routes; routing table shown via `show ip route`.
---
## Exam Relevance

Routing theory = Module 8. Static vs dynamic trade-offs; AD comparison; count-to-infinity/poison reverse contrast — see `Fear-Killer-Packs.md` (Week 5).
---
## Resources

See `CCN/Resources.md` — Kurose & Ross Ch.5; Cisco IP Routing guide (`*web-verified*`).
