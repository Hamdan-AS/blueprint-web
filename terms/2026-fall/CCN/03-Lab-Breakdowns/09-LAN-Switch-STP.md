# Lab 9 — Explore Basic LAN Switch Operation and Loop Avoidance with Spanning Tree

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Observe switch MAC learning/forwarding and configure/observe Spanning Tree Protocol preventing loops.

## Steps
- **Switch operation:** learns source MACs, forwards on destination match, floods unknown destinations.
- **STP 802.1D (PVST+)** elects a root bridge by lowest bridge ID (priority 32768 default + MAC) (`*web-verified*`).
- Redundant paths are put into **blocking** state so only one active path exists between any two stations — prevents broadcast storms, duplicate frames, and MAC flapping (`*web-verified*`).
- Port roles: root, designated, alternate (blocked). States: blocking → listening → learning → forwarding.
- 802.1w rapid-PVST+ speeds convergence.
- Verify: `show spanning-tree`, `show spanning-tree vlan 1`, `show mac address-table`.

## Deliverable
A loop-free topology with a clear root bridge and blocked ports shown via `show spanning-tree`.

## Exam Relevance
Spanning tree / redundancy = Module 4 (DLL issues) and bridges/switches vs routers. Related exam points: Ethernet, switching vs routing — `Fear-Killer-Packs.md` (Week 1 Q3, Week 3).

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.5/6; Cisco Catalyst STP guide (`*web-verified*`).
