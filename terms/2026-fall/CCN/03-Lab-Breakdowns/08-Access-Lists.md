# Lab 8 — Configure Access Lists

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Control traffic with standard and extended access lists and apply them to interfaces.

## Steps
- **Standard ACL (1-99):** filters source only — `access-list 1 permit 192.168.1.0 0.0.0.255` (`*web-verified*`).
- **Extended ACL (100-199):** protocol + source + dest + port — `access-list 101 deny tcp any any eq 23` (`*web-verified*`).
- Named ACLs (`ip access-list standard|extended <name>`) also supported.
- **Create the ACL before applying it** — a nonexistent list = implicit deny (`*web-verified*`).
- Apply on interface: `ip access-group <n> in|out`.
- Implicit deny at the end; order matters (first match wins); at least one permit needed (`*web-verified*`).
- Standard ACLs → closest to destination; extended ACLs → closest to source.
- Verify: `show ip access-lists`, `show access-lists`, test with ping/telnet.

## Deliverable
Configured ACLs that permit intended traffic and deny the rest; verified via `show ip access-lists`.

## Exam Relevance
No dedicated ACL module in the official syllabus, but network-layer filtering ties to Module 6 (Network Layer services). Order/implicit-deny logic is exam-fair as a reasoning question.

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.4; Cisco IOS XE Security config guide (`*web-verified*`).
