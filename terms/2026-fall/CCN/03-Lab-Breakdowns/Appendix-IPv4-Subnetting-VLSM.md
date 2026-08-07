# Appendix A — IPv4 Addressing, Sub-Netting and VLSM

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019), Appendix A. CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."

## Goal
Master classful/classless addressing, subnetting, and VLSM calculations used across all labs.

## Steps
- **Classful:** A (1-126, /8), B (128-191, /16), C (192-223, /24); D multicast, E reserved.
- **CIDR/classless:** prefix length notation (`/n`); subnets = 2^(borrowed host bits), hosts = 2^(remaining) − 2.
- **Magic number:** `256 − mask-octet` gives the subnet stride for the borrow octet.
- Network address = base; broadcast = last address in the block; usable = first..last−1.
- **VLSM:** allocate largest subnets first so space is not wasted (`*web-verified*` — standard VLSM practice).
- Verify a plan by listing each subnet's network/broadcast/usable range and total hosts (see `Fear-Killer-Packs.md` Week 4 Q1 for a worked example).

## Deliverable
Correct subnetting/VLSM scheme for a given host-count requirement per department.

## Exam Relevance
Core of Module 7 (`IPv4 and IPv6, IP addressing and subnetting`) — guaranteed marks. Drill with `Formula-Book.md`, `Numerical-Book.md`, `Fear-Killer-Packs.md` (Week 4), and subnetipv4.com.

## Resources
See `CCN/Resources.md` — subnetipv4.com (infinite practice), InfoTech Ninja problem set.
