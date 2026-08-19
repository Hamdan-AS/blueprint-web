# LAB 1 — CONFIGURE IP ADDRESSES ON DIFFERENT NETWORK DEVICES USING CISCO PACKET TRACER

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."
---
## Goal

Assign IPv4 addresses to router interfaces and end devices in Packet Tracer and establish basic connectivity.
---
## Steps

- **CLI loop on routers:** `enable` → `configure terminal` → `interface <g0/0|fa0/0>` → `ip address <ip> <mask>` → `no shutdown` → `end`.
- Interfaces are `administratively down` by default — `no shutdown` is mandatory (`*web-verified*`).
- **PCs:** Desktop → IP Configuration → IP + subnet mask + default gateway (must match the router interface on the same segment).
- Verify: `show ip interface brief` on routers; `ping <other-host>` for connectivity.
- Persist: `copy running-config startup-config`.
---
## Deliverable

Working topology where all directly connected hosts can ping each other; `show ip interface brief` output captured.
---
## Exam Relevance

IP addressing = syllabus Module 7 (`IPv4 and IPv6, IP addressing and subnetting`). CIDR/classful concepts in `Formula-Book.md`; subnetting drill in `Fear-Killer-Packs.md` (Week 4). CLI familiarity is lab-only.
---
## Resources

See `CCN/Resources.md` — subnetipv4.com for addressing practice; Kurose & Ross Ch.4.
