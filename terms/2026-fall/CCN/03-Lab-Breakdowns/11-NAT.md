# LAB 11 — IMPLEMENT NETWORK ADDRESS TRANSLATION

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."
---
## Goal

Hide private addressing using static NAT, dynamic NAT, and PAT (overload).
---
## Steps

- **Static:** `ip nat inside source static <local-ip> <global-ip>` (1:1).
- **Dynamic:** define pool `ip nat pool <name> <start> <end> netmask <mask>` + ACL for inside hosts + `ip nat inside source list <acl> pool <name>`.
- **PAT (overload):** add `overload` to the pool line — many insiders share one global IP (`*web-verified*`).
- Mark interfaces: `ip nat inside` (LAN side) / `ip nat outside` (WAN side) (`*web-verified*`).
- PAT works for port-bearing protocols (ICMP, TCP, UDP); non-PATtable traffic needs 1:1 bindings or `ip nat settings nonpatdrop` (`*web-verified*`).
- Configure the ACL before NAT tasks; avoid `permit ip any any` in the NAT ACL (`*web-verified*`).
- Verify: `show ip nat translations`, `show ip nat statistics`, debug with `debug ip nat`.
---
## Deliverable

Inside hosts reach the outside using NAT/PAT; translation table visible in `show ip nat translations`.
---
## Exam Relevance

NAT is part of Module 7 (IPv4/IPv6 addressing). Translation mechanics, port numbers, and why IPv6 reduces NAT reliance are examinable — `Fear-Killer-Packs.md` (Week 4).
---
## Resources

See `CCN/Resources.md` — Kurose & Ross Ch.4; Cisco IP Addressing NAT guide (`*web-verified*`).
