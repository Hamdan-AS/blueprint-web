# LAB 10 — CONFIGURE VIRTUAL LANS

Source: Practical Workbook CS-318 (NED UET, revised Feb 2019). CLO: "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)."
---
## Goal

Segment a LAN with VLANs, trunk ports, and inter-VLAN routing.
---
## Steps

- Create VLAN: `vlan <id>` + `name <name>` (or `vlan database` mode on older IOS).
- Assign access port: `interface fa0/n` → `switchport mode access` → `switchport access vlan <id>` (`*web-verified*`).
- Access port carries a single untagged VLAN; trunk carries many: `switchport mode trunk` + `switchport trunk encapsulation dot1q` (`*web-verified*`).
- Inter-VLAN routing: router-on-a-stick with `interface fa0/n.<vlan>` + `encapsulation dot1Q <vlan>`, or Layer-3 switch `interface vlan <id>`.
- Native VLAN / allowed-VLAN trunk controls (`switchport trunk allowed vlan ...`).
- Verify: `show vlan brief`, `show interfaces trunk`, `show interfaces switchport`.
---
## Deliverable

Broadcast domains segmented by VLAN; hosts in the same VLAN communicate, cross-VLAN traffic routed.
---
## Exam Relevance

VLANs tie to Module 4 (DLL) and switching/bridging concepts; useful for subnetting topology intuition (Module 7). See `Fear-Killer-Packs.md` (Week 1 Q3 switch vs router).
---
## Resources

See `CCN/Resources.md` — Kurose & Ross Ch.5/6; Cisco Catalyst 1200 VLAN CLI guide (`*web-verified*`).
