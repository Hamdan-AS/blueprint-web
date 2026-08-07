# Lab 14 — Configure DHCP Server & Helper Address Feature in Cisco Router

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Configure a Cisco router as a DHCP server and relay DHCP across subnets with the helper address.

## Steps
- Exclude addresses: `ip dhcp excluded-address <start> <end>`.
- Pool: `ip dhcp pool <name>` → `network <net> <mask>` → `default-router <gateway>` → `dns-server <ip>` (`*web-verified*`).
- **Relay (cross-subnet):** on the client-side interface `ip helper-address <dhcp-server-ip>` — forwards DHCP broadcasts (`*web-verified*`).
- Helper inserts giaddr (relay info, option 82) so the server can pick the right subnet pool.
- Client verify: `ipconfig /renew`, `ipconfig /all`.
- Removing the last pool workaround: keep a dummy pool or use helper-address on a loopback (`*web-verified*`).

## Deliverable
Clients on multiple subnets obtain correct IPs from the central DHCP server; verified with `ipconfig /all`.

## Exam Relevance
DHCP is **NOT examinable** per the official CS-327 syllabus (Application-layer; see `CCN/02-Official-Syllabus.md`). Keep as practical-only; relevant IP-addressing theory is Module 7.

## Resources
See `CCN/Resources.md` — Cisco IOS XE DHCP configuration guide (`*web-verified*`).
