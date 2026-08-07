# Lab 2 — Practice Making Straight-Through & Cross UTP Cables

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Crimp T568A and T568B wiring on UTP cable; build and test straight-through and crossover cables.

## Steps
- **T568A vs T568B** differ only in the green/orange pair swap (pins 1-2 vs 3-6) — per ANSI/TIA-568-C.2 (`*web-verified*`).
- **Straight-through:** same standard (A-A or B-B) on both ends → unlike devices (PC↔switch/router).
- **Crossover:** A on one end, B on the other → like devices (PC↔PC, switch↔switch). Gigabit requires all four pairs crossed (`*web-verified*`).
- Pinout (T568B): 1=W/O, 2=O, 3=W/G, 6=G (10/100 only uses pairs 1-2, 3-6).
- Modern switches use auto-MDIX, so straight-through often works between like devices too (`*web-verified*`).
- Verify with a cable tester; in Packet Tracer use straight/cross connection types.

## Deliverable
Two working cables (one straight, one crossover) verified by tester; connectivity shown in Packet Tracer.

## Exam Relevance
Physical layer only — no direct exam theory beyond Ethernet framing (Module 4). Related: CSMA/CD min frame size in `Fear-Killer-Packs.md` (Week 3).

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.1/6.
