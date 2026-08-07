# Lab 3 — Configure File Sharing Server Across Different Networks

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Set up an FTP file server and access it from clients on different subnets through a router.

## Steps
- **Server:** Services → FTP → enable; create users (e.g., `administrator/cisco` full access, `anonymous` read-only). In Packet Tracer, remove the default account (`*web-verified*`).
- **Client:** Command Prompt → `ftp <server-ip>` → `dir` (list) → `put <file>` (upload) → `get <file>` (download) → `quit` (`*web-verified*`).
- Cross-network access requires each host's default gateway pointing to its local router interface; router must be up (`no shutdown`) and routes present.
- FTP transmits username/password in clear text (`*web-verified*`) — an inherent weakness.

## Deliverable
Clients on two different networks successfully upload/download files from the shared server.

## Exam Relevance
FTP/HTTP/DNS are Application-layer — **NOT examinable** per the official CS-327 syllabus (see `CCN/02-Official-Syllabus.md`). Practical for understanding client-server; theory point to retain: TCP port 21 control / 20 data.

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.2 background (non-examinable).
