# Lab 5 — Configure RIP (Routing Information Protocol) and RIP v2

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Enable RIP on routers so they learn routes dynamically; compare RIP v1 vs RIPv2.

## Steps
- `router rip` → `version 2` → `network <classful-addr>` for each directly connected network (`*web-verified*`).
- The `network` command accepts only classful addresses; it advertises interfaces on those networks and enables RIP on them (`*web-verified*`).
- RIPv2: classless, multicasts to `224.0.0.9`, supports VLSM/CIDR and MD5 authentication; use `no auto-summary` for classless operation.
- RIPv1: classful, broadcasts to `255.255.255.255`.
- Timers: update 30s, invalid 180s, holddown 180s, flush 240s; AD = 120 (`*web-verified*`).
- Verify: `show ip route`, `show ip protocols`, `show ip rip database`.

## Deliverable
Routers learn all remote networks dynamically (RIP routes in `show ip route`); RIPv2 running with `no auto-summary`.

## Exam Relevance
Distance-vector routing, count-to-infinity, poison reverse = Module 8 core theory — `Fear-Killer-Packs.md` (Week 5). AD comparison across RIP/OSPF/BGP frequently tested.

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.5; Cisco IOS RIP Command Reference (`*web-verified*`).
