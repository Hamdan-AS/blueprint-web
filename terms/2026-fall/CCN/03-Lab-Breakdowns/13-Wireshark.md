# Lab 13 — Examine Packets of Different Protocols Using Wireshark (Network Traffic Analysis and Filtering)

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Capture and analyze live traffic to correlate observed packets with protocol theory.

## Steps
- Capture: choose interface → Start; stop after generating traffic.
- **Three panes:** packet list, packet details, packet bytes (`*web-verified*`).
- Display filters (live on capture): `ip.addr==x.x.x.x`, `tcp.port==80`, `http`, `dns`, `icmp`, `udp.port==53` (`*web-verified*`).
- Statistics menu: Protocol Hierarchy, Conversations, Endpoints (`*web-verified*`).
- Follow TCP stream to reassemble a session; correlate DNS query/response by transaction ID.
- Generate traffic (ping, browse, DHCP) so the target protocols appear.

## Deliverable
Capture annotated with filtered views for HTTP/DNS/TCP/UDP/ICMP showing the relevant header fields.

## Exam Relevance
Directly reinforces TCP/UDP headers and 3-way handshake (Module 11), DNS/HTTP (non-examinable, lab-only), DHCP (lab-only). See `Fear-Killer-Packs.md` (Week 6 Q1).

## Resources
See `CCN/Resources.md` — Wireshark Labs by Kurose & Ross; Official Wireshark User's Guide (`*web-verified*`).
