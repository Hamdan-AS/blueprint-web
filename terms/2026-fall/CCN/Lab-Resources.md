# CS-327 COMPUTER COMMUNICATION NETWORKS — LAB TOPICS & GITHUB RESOURCES

Source: Practical Workbook CS-318 (NED UET, Dept. of Computer & Information Systems Engineering, prepared by Ms. Sumayya Zafar & Ms. Ibshar Ishrat, revised February 2019).

All 14 labs + Appendix A are in scope (no lab excluded; Appendix A is a self-study reference).

| # | Lab Session Title | Group |
|---|---|---|
| 1 | Configure IP Addresses on different network devices using Cisco Packet Tracer | Basic Config (Labs 1–3) |
| 2 | Practice making Straight Through & Cross UTP cables | Basic Config (Labs 1–3) |
| 3 | Configure File Sharing Server across different networks | Basic Config (Labs 1–3) |
| 4 | Configure static routes on Cisco routers | Routing & ACLs (Labs 4–8) |
| 5 | Configure RIP (Routing Information Protocol) and RIP v2 | Routing & ACLs (Labs 4–8) |
| 6 | Configure OSPF (Open Shortest Path First) Single Area | Routing & ACLs (Labs 4–8) |
| 7 | Practice how to connect two routers (Branch office and Head office) with the help of PPP | Routing & ACLs (Labs 4–8) |
| 8 | Configure Access Lists | Routing & ACLs (Labs 4–8) |
| 9 | Explore basic LAN Switch Operation and Loop Avoidance with Spanning Tree | Switching (Labs 9–10) |
| 10 | Configure Virtual LANs | Switching (Labs 9–10) |
| 11 | Implement Network Address Translation | Advanced (Labs 11–14) |
| 12 | Configure BGP on Cisco routers | Advanced (Labs 11–14) |
| 13 | Examine packets of different protocols using Wireshark (Network Traffic Analysis and Filtering) | Advanced (Labs 11–14) |
| 14 | Configure DHCP server & Helper address feature in Cisco router | Advanced (Labs 11–14) |
| App A | IPv4 Addressing, Sub-netting and VLSM | Reference |

---
## Lab 1 — Configure IP Addresses on different network devices using Cisco Packet Tracer

- [ro-drick/Configuring-IP-addresses](https://github.com/ro-drick/Configuring-IP-addresses) — Packet Tracer exercise: router hostname, interface addressing, PC IP configuration, and ping-based connectivity tests.
- [Ebeneze4337/Cisco-Basic-Network-Configurations](https://github.com/Ebeneze4337/Cisco-Basic-Network-Configurations) — Beginner labs: device placement, cable connections, IP address setup, ping checks.
- [baoanng6539/network-project-packet-tracer-](https://github.com/baoanng6539/network-project-packet-tracer-) — Ready-made router/switch network with IP addressing and ping verification.
- [cyristal-gems/cisco-packet-tracer-lab](https://github.com/cyristal-gems/cisco-packet-tracer-lab) — Basic router + two-switch lab: interfaces, IPs, default gateways, and CLI verification.
---
## Lab 2 — Practice making Straight Through & Cross UTP cables

- [ProZsolt/runbook — ethernet-cable.md](https://github.com/ProZsolt/runbook/blob/master/ethernet-cable.md) — RJ45 pinout table for T568A vs T568B wiring.
- [ShubhamJagtap2000/Networking-Essentials — Ethernet Cabling](https://github.com/ShubhamJagtap2000/Networking-Essentials/tree/main/02.%20Build%20%20a%20Simple%20Network/3.%20Ethernet%20Cabling) — Twisted-pair, UTP/STP, and T568A/T568B wiring coverage with straight-through vs crossover logic.
- [wireviz/WireViz](https://github.com/wireviz/WireViz) — Document cables and connector pinouts (supports TIA/EIA 568 A/B color schemes) — good for drawing your crimping diagrams.
---
## Lab 3 — Configure File Sharing Server across different networks

- [kill-ux/deep-in-net](https://github.com/kill-ux/deep-in-net) — ex03 covers DHCP/DNS/HTTPS/FTP servers; ex01 uses crossover for direct PC pairs.
- [EForce11/packet_tracer_rip_example](https://github.com/EForce11/packet_tracer_rip_example) — Multi-server topology (DHCP, DNS, HTTP, Email) in Packet Tracer with connectivity testing.
- [TheCleverIdiott/Computer-Networks-Cisco-Packet-Tracer](https://github.com/TheCleverIdiott/Computer-Networks-Cisco-Packet-Tracer) — B.Tech CN assignments with per-lab `.md`, `.pdf` report, and `.pkt` files (incl. file-server/service configs).
- [netresearch/docker-ftp-server](https://github.com/netresearch/docker-ftp-server) — vsftpd-based FTP server (multi-user) for real file sharing if you extend past Packet Tracer.
---
## Lab 4 — Configure static routes on Cisco routers

- [ro-drick/Configuring-Static-Routes](https://github.com/ro-drick/Configuring-Static-Routes) — Full static-route lab: R1/R2/R3 with serial links, `ip route`, `show ip route` verification.
- [Alizaaaja4/Cisco_Static_Route](https://github.com/Alizaaaja4/Cisco_Static_Route) — Static routing simulation across three rooms with two routers.
- [aaurdanet/Network-Configuration-and-Static-Routing](https://github.com/aaurdanet/Network-Configuration-and-Static-Routing) — Includes `Configuration of Static Routes.pkt` file.
- [VikashChoudhary-04/ip-routing-](https://github.com/VikashChoudhary-04/ip-routing-) — Step-by-step IP routing guide (3 routers / 3 switches / 6 PCs) with addressing table.
- [ls028/packet-tracer-labs](https://github.com/ls028/packet-tracer-labs) — Lab 3 = static routing between two routers; also covers DHCP, VLANs, CLI, troubleshooting.
---
## Lab 5 — Configure RIP (Routing Information Protocol) and RIP v2

- [PomudithaUmayangi/Configure-RIPv2-in-Packet-Tracer](https://github.com/PomudithaUmayangi/Configure-RIPv2-in-Packet-Tracer) — RIPv2 setup on 3 routers, passive interfaces, default-route sharing.
- [chabbax/cisco-packet-tracer-example](https://github.com/chabbax/cisco-packet-tracer-example) — Three-site LAN/WAN with RIP v2: addressing plan, router configs, verification commands.
- [AnvithaCodes/isp-network-sim-ripv2](https://github.com/AnvithaCodes/isp-network-sim-ripv2) — ISP-style ring topology with RIP v2 + DHCP; includes `.pkt` and router configs.
- [EForce11/packet_tracer_rip_example](https://github.com/EForce11/packet_tracer_rip_example) — RIP routing across routers with DHCP/DNS/HTTP/Email servers.
- [VatsalNegi/Network-Simulation-Using-Cisco-Packet-Tracer](https://github.com/VatsalNegi/Network-Simulation-Using-Cisco-Packet-Tracer) — Classless IP subnetting + RIPv2 practice with full `.pkt` network.
---
## Lab 6 — Configure OSPF (Open Shortest Path First) Single Area

- [zenny455/ospf-network-lab](https://github.com/zenny455/ospf-network-lab) — Multi-area OSPF with backbone/ABRs, VLAN segmentation, DHCP, 802.1Q; detailed config tables.
- [ParthBiswas/cisco-pt-ospf-acl-config](https://github.com/ParthBiswas/cisco-pt-ospf-acl-config) — Single-area OSPF (`router ospf`, wildcard masks) with extended ACL.
- [natnaelhhaile/multi-area-ospf-enterprise-lab](https://github.com/natnaelhhaile/multi-area-ospf-enterprise-lab) — Multi-area OSPFv2, DR/BDR election, stub/totally-NSSA, NAT/PAT; strong troubleshooting notes.
- [egebre3/Enterprise-Network-Cisco](https://github.com/egebre3/Enterprise-Network-Cisco) — Single-area OSPF + inter-VLAN routing + DHCP + NAT/PAT + ACLs, fully verified.
- [FelixMairamhof/Cisco-Packet-Tracer-School](https://github.com/FelixMairamhof/Cisco-Packet-Tracer-School) — Collection incl. OSPF dynamic routing projects.
---
## Lab 7 — Practice how to connect two routers (Branch office and Head office) with the help of PPP

- [rickxy/SIC--PPP--Routing--and-Remote-Access-VPN](https://github.com/rickxy/SIC--PPP--Routing--and-Remote-Access-VPN) — HDLC vs PPP; PPP encapsulation with CHAP authentication between routers.
- [nyquist/ccie — ppp-authentication-chap.md](https://github.com/nyquist/ccie/blob/main/layer-2-technologies/layer-2-wan-protocols/ppp/ppp-authentication-chap.md) — CHAP algorithm, one-way vs two-way authentication, `ppp chap hostname` / `ppp chap password`.
- [snehaeengineer-cmyk/ccna-ensa-labs](https://github.com/snehaeengineer-cmyk/ccna-ensa-labs) — Lab 2 covers PPP with CHAP (why CHAP beats PAP) + NAT/NAPT + GRE.
- [baidarnischal/Cisco-Packet-Tracer](https://github.com/baidarnischal/Cisco-Packet-Tracer) — Notes include `encapsulation` PPP vs Frame Relay commands.
---
## Lab 8 — Configure Access Lists

- [mustafa-albazzaz1412/ccna-acl-lab](https://github.com/mustafa-albazzaz1412/ccna-acl-lab) — Extended ACL lab: deny-by-policy, applied close to source, `show access-lists` / `show ip interface`.
- [lukegtyler/network-security-acl](https://github.com/lukegtyler/network-security-acl) — Extended IPv4 ACLs filtering HTTP/HTTPS/FTP/ICMP with default-deny behavior.
- [KarenB1-tech/04-Enterprise-Network-with-Extended-ACL](https://github.com/KarenB1-tech/04-Enterprise-Network-with-Extended-ACL) — Enterprise ACL isolating Sales from Finance; `.pkt` included.
- [Lp-Francois/Access-Control-Lists](https://github.com/Lp-Francois/Access-Control-Lists) — Straightforward standard vs extended ACL guide with worked problems.
- [MDShahrouq/CCNA-packetTracer-Files](https://github.com/MDShahrouq/CCNA-packetTracer-Files) — `ACL-Standard.pkt`, `ACL-Extended.pkt` + config text files.
---
## Lab 9 — Explore basic LAN Switch Operation and Loop Avoidance with Spanning Tree

- [PaulFinestres/lab-4-spanning-tree-protocol](https://github.com/PaulFinestres/lab-4-spanning-tree-protocol) — PVST+, root bridge election, PortFast, BPDU Guard, STP failover in a 3-tier network.
- [ro-drick/Spanning-Tree-Protocol-Lab](https://github.com/ro-drick/Spanning-Tree-Protocol-Lab) — Root bridge manipulation, port cost/priority, PortFast + BPDU Guard on 4-switch loop.
- [harshshah2303/Spanning-tree-protocol-and-Port-Security](https://github.com/harshshah2303/Spanning-tree-protocol-and-Port-Security) — STP on VLANs with bridge-priority changes and port security (violation shutdown).
- [c4geeks/ccna-labs — stp-rapid-pvst](https://github.com/c4geeks/ccna-labs/tree/main/stp-rapid-pvst) — Rapid PVST+ triangle topology: root election, blocked port, fast failover.
- [des1-gner/Cisco-Packet-Tracer](https://github.com/des1-gner/Cisco-Packet-Tracer) — CCNA packet tracer collection (switching labs incl. STP).
---
## Lab 10 — Configure Virtual LANs

- [ro-drick/VLAN-ROAS-Configuration](https://github.com/ro-drick/VLAN-ROAS-Configuration) — VLANs, trunking, router-on-a-stick with `encapsulation dot1Q` and verification.
- [leobagno-labs/router-on-stick-lab](https://github.com/leobagno-labs/router-on-stick-lab) — ROAS with DHCP + NAT/PAT: sub-interface configs, trunk config, full `.pkt`.
- [KarenB1-tech/01-School-Network-VLAN-Router-on-a-Stick](https://github.com/KarenB1-tech/01-School-Network-VLAN-Router-on-a-Stick) — VLAN segmentation, trunk links, inter-VLAN routing via ROAS.
- [VincentBM-747/Cisco-VLAN-Lab](https://github.com/VincentBM-747/Cisco-VLAN-Lab) — VLAN creation, port assignment, trunk, DHCP pools, ROAS inter-VLAN routing.
- [japalbornoz/vlan-segmentation-router-on-a-stick](https://github.com/japalbornoz/vlan-segmentation-router-on-a-stick) — ROAS with trunk hardening (native VLAN, DTP off) + troubleshooting scenarios.
---
## Lab 11 — Implement Network Address Translation

- [TheCleverIdiott/Computer-Networks-Cisco-Packet-Tracer](https://github.com/TheCleverIdiott/Computer-Networks-Cisco-Packet-Tracer) — Dedicated `NAT` (static), `PAT` (overload), ACL, RIP, OSPF, DHCP, VLAN assignments with `.md`/`.pdf`/`.pkt`.
- [c4geeks/ccna-labs — nat-pat](https://github.com/c4geeks/ccna-labs/tree/main/nat-pat) — All three inside-source NAT forms (static, dynamic pool, PAT overload) + `show ip nat translations`.
- [satyamgagre/network-engineering-labs](https://github.com/satyamgagre/network-engineering-labs) — LAB45 Static NAT, LAB46 Dynamic NAT, LAB47 PAT/NAT Overload.
- [GARJE-01/cisco-ccna-lab-notes](https://github.com/GARJE-01/cisco-ccna-lab-notes) — `29-1-NAT-Configuration.md`: static/dynamic/PAT comparison table and commands.
- [sviluppoweb0/CISCO](https://github.com/sviluppoweb0/CISCO) — Cisco NetAcad static-NAT Packet Tracer activity files.
---
## Lab 12 — Configure BGP on Cisco routers

- [mushfiqur-rahman/bgp-configuration](https://github.com/mushfiqur-rahman/bgp-configuration) — Multi-AS BGP in Packet Tracer: `router bgp`, `network`, `neighbor remote-as`.
- [cthrn-b/BGP_Configuration](https://github.com/cthrn-b/BGP_Configuration) — Inter-AS BGP setup with neighbor relationships, route advertisement, `show ip bgp summary`.
- [Sheikhh99/Configuring-BGP-on-Cisco-Packet-Tracer-and-automating-router-configuration-using-Python-SSH-](https://github.com/Sheikhh99/Configuring-BGP-on-Cisco-Packet-Tracer-and-automating-router-configuration-using-Python-SSH-) — BGP + attributes in Packet Tracer (plus optional Python/SSH automation).
- [NetworkThinkTank-Labs/lab-01-bgp-fundamentals](https://github.com/NetworkThinkTank-Labs/lab-01-bgp-fundamentals) — eBGP/iBGP peering, path attributes (LocalPref, MED, AS-path prepend), route reflectors — configs included.
---
## Lab 13 — Examine packets of different protocols using Wireshark (Network Traffic Analysis and Filtering)

- [Hardeeh03/wireshark-network-security-analysis](https://github.com/Hardeeh03/wireshark-network-security-analysis) — Capture workflow + per-protocol filters (DNS, TCP handshake, HTTP, ARP, ICMP, TLS) with analysis files.
- [Jalp28/Capture-and-Analyze-Network-Traffic-Using-Wireshark](https://github.com/Jalp28/Capture-and-Analyze-Network-Traffic-Using-Wireshark) — Protocol filtering and identification tutorial (http, dns, tcp, icmp).
- [Amanranjan455/Wireshark-Protocol-Analysis](https://github.com/Amanranjan455/Wireshark-Protocol-Analysis) — Captures + filters DNS, ICMP, TCP, HTTP, TLS, ARP; `.pcap` output.
- [CrAzI-code/HTTP-Traffic-Analysis-Quick-Lab](https://github.com/CrAzI-code/HTTP-Traffic-Analysis-Quick-Lab) — HTTP capture, TCP-stream follow, plaintext credentials vs HTTPS.
- [cyberlabdave/HTTP-HTTPS-threat-Hunting-in-WireShark](https://github.com/cyberlabdave/HTTP-HTTPS-threat-Hunting-in-WireShark) — HTTP vs HTTPS analysis, file export from packets, key filter cheat-sheet (`tcp.stream`, `http.request`).
---
## Lab 14 — Configure DHCP server & Helper address feature in Cisco router

- [c4geeks/ccna-labs — dhcp-server-relay](https://github.com/c4geeks/ccna-labs/tree/main/dhcp-server-relay) — Central DHCP server + `ip helper-address` relay: pools, giaddr, broadcast-to-unicast explanation.
- [Ironfist69/DHCP-server-configuration-in-Cisco-Packet-Tracer](https://github.com/Ironfist69/DHCP-server-configuration-in-Cisco-Packet-Tracer) — DHCP + DNS servers in Packet Tracer with `ip helper-address` per interface.
- [wahidali-glitch/Campus-Network-DHCP-DNS](https://github.com/wahidali-glitch/Campus-Network-DHCP-DNS) — Multi-site campus network: central DHCP relay + DNS over static routes.
- [rosa-martin/Cisco-CCNA2](https://github.com/rosa-martin/Cisco-CCNA2) — DHCPv4 pool config (`ip dhcp excluded-address`, `ip dhcp pool`, `default-router`) + relay agent notes.
- [ls028/packet-tracer-labs](https://github.com/ls028/packet-tracer-labs) — Lab 4: router as DHCP server for two LANs (`ip dhcp pool`, default gateway, DNS).
---
## Appendix A — IPv4 Addressing, Sub-netting and VLSM

- [kill-ux/deep-in-net](https://github.com/kill-ux/deep-in-net) — Subnet formulas (block size, usable IPs, network/broadcast) + common subnet reference table.
- [VatsalNegi/Network-Simulation-Using-Cisco-Packet-Tracer](https://github.com/VatsalNegi/Network-Simulation-Using-Cisco-Packet-Tracer) — Classless subnetting + VLSM design applied in a working Packet Tracer network.
- [ls028/packet-tracer-labs](https://github.com/ls028/packet-tracer-labs) — Multi-network design with CLI configuration exercises touching addressing.
- [subnetipv4.com](https://subnetipv4.com) — Infinite interactive subnetting drills (already listed in `CCN/Resources.md`).

---

*All repositories were confirmed to exist via live web/GitHub search during compilation (2026-08-02). Labs 3, 13, and 14 are Application-layer / lab-only per the official CS-327 syllabus — keep for the lab grade; do not spend theory time on them.*
