# Lab 7 — Practice How to Connect Two Routers (Branch and Head Office) with PPP

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Connect two routers over a serial link using PPP with CHAP authentication.

## Steps
- On serial interface: `encapsulation ppp` (`*web-verified*`).
- Authentication: `ppp authentication chap` on both sides for two-way CHAP (`*web-verified*`).
- Create the peer credential: `username <peer-hostname> password <shared-secret>` — the username must be the **peer's hostname** and the password must match on both routers (`*web-verified*`).
- For one-way authentication on the caller only: `ppp authentication chap callin` (`*web-verified*`).
- CHAP = 3-way MD5 handshake (challenge → response → accept); PAP is 2-way clear-text (insecure).
- LCP negotiates link config, then NCP (IPCP) assigns/sets addresses.
- Verify: `show interfaces serial <n>`, `show ppp status`, `debug ppp authentication` (briefly).

## Deliverable
Two routers exchange routes/connectivity over a PPP link with CHAP authenticating both directions.

## Exam Relevance
Data-link protocols (Module 4). PPP framing/authentication is a known exam contrast point vs HDLC. See `Definition-Book.md`, `Formula-Book.md`.

## Resources
See `CCN/Resources.md` — Kurose & Ross Ch.6; Cisco PPP/CHAP doc 25647 (`*web-verified*`).
