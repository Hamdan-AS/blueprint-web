# CS-327 — OFFICIAL SYLLABUS

- **Credit Hours:** 3+1 (Theory 3, Practical 1)
- **Semester:** Third Year, Fall Semester
- **Source:** Detailed Syllabi BE(CS) batch 2018 onwards (PDF)
---
## Official Topic List

> Introduction to Computer Networks; OSI reference model, the TCP/IP reference model; Packet Switching and Architectures; Circuit Switching and Architectures; Data Link Layer and issues; Error Correction and Congestion Control in networks; Network Layer and Issues (Protocols and Services); IPv4 and IPv6, IP addressing and subnetting; Network Routing; Introduction to Multi-Protocol Label Switching (MPLS); Wireless Networks; Transport Layer and Issues (TCP and UDP); Software Defined Networking (SDN); Virtual Network Functions (VNF).
> Multimedia networking and streaming services
---
## Detailed Syllabus
---
### Module 1: Introduction to Computer Networks (3 hrs)

- What is a computer network; network criteria (performance, reliability, security)
- Network topologies and types (LAN, WAN, MAN)
---
### Module 2: OSI & TCP/IP Reference Models (3 hrs)

- OSI 7-layer model: function of each layer, PDU names, encapsulation/decapsulation
- TCP/IP model; OSI vs TCP/IP comparison
---
### Module 3: Packet & Circuit Switching (3 hrs)

- Packet switching and architectures: store-and-forward, datagram vs virtual circuit
- Circuit switching and architectures; efficiency trade-offs vs packet switching
---
### Module 4: Data Link Layer & Issues (4 hrs)

- Framing, flow control, error control
- DLL protocols: Stop-and-Wait, Sliding Window (Go-Back-N, Selective Repeat)
- Media access: ALOHA, CSMA/CD, Ethernet
---
### Module 5: Error Correction & Congestion Control (4 hrs)

- Error detection: parity, checksum, CRC
- Error correction: Hamming codes
- Congestion control in networks (principles; TCP congestion control in Module 11)
---
### Module 6: Network Layer — Protocols & Services (3 hrs)

- Network layer services; routing vs forwarding
- IP protocols and services; ICMP; fragmentation
---
### Module 7: IPv4, IPv6, IP Addressing & Subnetting (7 hrs)

- IPv4 header, classful vs classless addressing
- Subnetting, VLSM, CIDR, NAT
- IPv6 header and addressing; IPv4→IPv6 transition
---
### Module 8: Network Routing (5 hrs)

- Routing algorithms: Dijkstra/link state, distance vector, count-to-infinity, poison reverse
- Intra-domain: RIP, OSPF; inter-domain: BGP
---
### Module 9: MPLS (2 hrs)

- Label switching vs IP longest-prefix match; label push/swap/pop
- Traffic engineering
---
### Module 10: Wireless Networks (3 hrs)

- 802.11/WiFi; CSMA/CA vs CSMA/CD; hidden/exposed terminal, RTS/CTS
- Wireless LAN architecture
---
### Module 11: Transport Layer — TCP & UDP (5 hrs)

- UDP header; TCP header, 3-way handshake, connection termination
- Flow control; congestion control: slow start, congestion avoidance, fast retransmit/recovery, Tahoe vs Reno
---
### Module 12: SDN & VNF (3 hrs)

- SDN architecture: application/control/infrastructure layers; OpenFlow
- VNF vs physical network functions; NFV benefits
---
### Module 13: Multimedia Networking & Streaming (2 hrs)

- Multimedia applications and streaming services
- Adaptive bitrate streaming (DASH), buffering; TCP vs UDP for multimedia
---
## Lab Topic Groups → Breakdown Files

| Lab | Topic | File |
|-----|-------|------|
| 1 | Configure IP Addresses (Cisco Packet Tracer) | `03-Lab-Breakdowns/01-IP-Configuration.md` |
| 2 | Straight-Through & Cross UTP Cables | `03-Lab-Breakdowns/02-UTP-Cables.md` |
| 3 | File Sharing Server Across Networks | `03-Lab-Breakdowns/03-File-Sharing-Server.md` |
| 4 | Static Routes on Cisco Routers | `03-Lab-Breakdowns/04-Static-Routes.md` |
| 5 | RIP and RIP v2 | `03-Lab-Breakdowns/05-RIP.md` |
| 6 | OSPF Single Area | `03-Lab-Breakdowns/06-OSPF-Single-Area.md` |
| 7 | Connect Two Routers with PPP | `03-Lab-Breakdowns/07-PPP.md` |
| 8 | Access Lists | `03-Lab-Breakdowns/08-Access-Lists.md` |
| 9 | LAN Switch Operation & Loop Avoidance (STP) | `03-Lab-Breakdowns/09-LAN-Switch-STP.md` |
| 10 | Virtual LANs | `03-Lab-Breakdowns/10-Virtual-LANs.md` |
| 11 | Network Address Translation | `03-Lab-Breakdowns/11-NAT.md` |
| 12 | BGP on Cisco Routers | `03-Lab-Breakdowns/12-BGP.md` |
| 13 | Wireshark Traffic Analysis & Filtering | `03-Lab-Breakdowns/13-Wireshark.md` |
| 14 | DHCP Server & Helper Address | `03-Lab-Breakdowns/14-DHCP.md` |
| App A | IPv4 Addressing, Subnetting & VLSM | `03-Lab-Breakdowns/Appendix-IPv4-Subnetting-VLSM.md` |
---
## Background & Supplementary (not in official syllabus)

The official CS-327 syllabus does not include the Application Layer. The following topics are therefore NOT examinable per the official topic list:

- Application-layer protocols: HTTP, HTTPS, DNS, SMTP/POP3/IMAP, FTP, DHCP (DORA)
- Socket programming
---
## Recommended Textbooks

1. Kurose & Ross — Computer Networking: A Top-Down Approach, 8th Ed
2. Tanenbaum & Wetherall — Computer Networks, 6th Ed
