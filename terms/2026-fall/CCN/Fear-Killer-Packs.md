# FEAR-KILLER-PACKS

Each pack is 3-5 questions per syllabus topic. Questions are ordered hardest first — attack the fear immediately, then coast through the rest.

---

## CS-327 Computer Communication Networks

**Resources:** Gate Smashers CCN Playlist • Kurose & Ross 8th Ed • Tanenbaum 6th Ed • subnetipv4.com • Wireshark Labs

### Week 1: topic-osi-and-tcpip
**Resources:** Gate Smashers (OSI/TCP/IP videos) • Kurose & Ross Ch.1 • Tanenbaum Ch.1

1. A 1500-byte message is sent from an application on Host A to Host B. Show the exact encapsulation process through all 7 OSI layers on the sender side and decapsulation on the receiver side. State the PDU name at each layer and what header information is added or removed. How does this differ in the TCP/IP model?
2. Compare circuit switching and packet switching. A 10 MB file is sent over a 1 Mbps link. For circuit switching, setup takes 2 seconds. For packet switching, each 1000-byte packet has 40 bytes overhead and propagation delay is 50ms. Which is faster? At what file size do they break even?
3. Differentiate a switch from a router at the architectural level. A frame arrives at a switch with destination MAC 00:1A:2B:3C:4D:5E. A packet arrives at a router with destination IP 192.168.1.55. Trace the forwarding decision each device makes. What tables does each consult?

---

### Week 2: topic-data-link-layer-and-error-control
**Resources:** Kurose & Ross Ch.5 • Tanenbaum Ch.3

1. Given data 1101101 and generator polynomial G(x) = x³ + x² + 1 (binary 1101), compute the CRC codeword using modulo-2 binary division. Show every step of the division. Then demonstrate that the receiver's division produces a zero remainder if no error occurred. What if the received codeword has a single-bit error at position 5?
2. For the 7-bit data 1011001, compute the Hamming code with even parity. Show where parity bits P1, P2, P4, P8 are placed and their values. Now if the received codeword is 101110011001, detect and correct the error. Show the syndrome calculation.
3. Explain the efficiency tradeoff between Stop-and-Wait and Sliding Window protocols. For a link with 10ms RTT and 100 Mbps bandwidth, calculate the maximum throughput of Stop-and-Wait for 1000-byte frames. What window size is needed to achieve 100% utilization?

---

### Week 3: topic-mac-and-csmacd
**Resources:** Kurose & Ross Ch.6 • Tanenbaum Ch.4

1. Calculate the efficiency of Pure ALOHA and Slotted ALOHA for G = 0.5, 1.0, and 2.0 attempts per frame time. Show the formula, the throughput, and explain why Slotted ALOHA doubles the maximum throughput. At what G does each system collapse?
2. An Ethernet network spans 2 km with propagation speed 2×10⁸ m/s. The transmission rate is 100 Mbps. Calculate the minimum frame size required for CSMA/CD to work. Now the network is upgraded to 1 Gbps over the same distance — what happens to the minimum frame size and how is this handled in practice?
3. A network has 4 stations using 1-persistent CSMA/CD. Stations A and B begin transmission simultaneously (collision). Trace the binary exponential backoff process. Show all possible outcomes for the first three collision events. What is the maximum number of collision slots before a successful transmission?

---

### Week 4: topic-network-layer-and-ip
**Resources:** Gate Smashers (Subnetting videos) • Kurose & Ross Ch.4 • subnetipv4.com

1. Given the IP block 192.168.10.0/24, design a subnet plan for departments requiring: A=50 hosts, B=28 hosts, C=14 hosts, D=7 hosts. Use VLSM. Show each subnet's network address, subnet mask (prefix length), broadcast address, usable host range, and total hosts.
2. An IPv4 datagram with 4000 bytes of payload (20-byte header) must traverse a link with MTU 1500 bytes. Show the fragmentation: how many fragments, their offset values, the More Fragments flag for each, and the total data in each fragment. What changes with IPv6 and the absence of fragmentation at routers?
3. Given IP 172.20.0.0/16, create subnets with /20 mask. How many subnets? How many hosts per subnet? Calculate network address, broadcast address, and first/last usable IP for subnet #5 (zero-indexed).
4. Compare the IPv4 and IPv6 headers field by field — which IPv4 fields did IPv6 drop and why? Compress the IPv6 address 2001:0DB8:0000:0000:0000:FF00:0042:8329 to its shortest valid form, showing every rule you apply. Differentiate unicast, multicast, and anycast addressing. How does a host obtain an address via SLAAC, and why is dual-stack the dominant transition mechanism?
5. Differentiate classful and classless addressing. Given the address 10.25.130.5, what class is it under classful? Under CIDR with /23, what are the network ID and broadcast? Why was CIDR introduced?

---

### Week 5: topic-routing
**Resources:** Kurose & Ross Ch.5 • Tanenbaum Ch.5

1. Run Dijkstra's algorithm on a 6-node network with the following link costs: AB=4, AC=2, BC=5, BD=10, BE=3, CD=8, CE=2, DE=6, DF=1, EF=3. Show the forwarding table computed at node A after the algorithm converges, with step-by-step shortest path calculations.
2. Given a 4-node network using distance vector routing, show the initial tables and the tables after each iteration until convergence. If the link A-B fails, trace the count-to-infinity problem and show how poison reverse resolves it. How many iterations without poison reverse vs with it?
3. Compare OSPF and BGP across: protocol type (link state vs path vector), metric used, convergence speed, scalability (AS vs global), and policy support. Given a multi-homed AS connected to two ISPs, explain why BGP is necessary and OSPF alone would be insufficient for inter-domain routing.

---

### Week 6: topic-transport-layer
**Resources:** Kurose & Ross Ch.3 • Tanenbaum Ch.6

1. Draw the complete TCP header with all fields and their sizes. Then trace the 3-way handshake: Client (port 54321) connects to Server (port 80). Show SYN, SYN-ACK, ACK with sequence numbers, ISN selection, and window sizes. Then trace 4-way termination showing FIN, ACK, FIN, ACK and the TIME_WAIT state.
2. Compare selective repeat and Go-Back-N for a window size of 4 and 10 packets. Show the sender and receiver behavior when packet 3 is lost but 4, 5, 6 arrive correctly. How many retransmissions does each protocol require? Which uses less buffer at the receiver?
3. Differentiate TCP and UDP. An application sends 100-byte messages every 10ms. Compute the header overhead percentage for TCP vs UDP. Now the application requires in-order delivery but can tolerate some loss — which protocol do you choose and why?

---

### Week 7: topic-tcp-congestion-control
**Resources:** Kurose & Ross Ch.3.7 • Tanenbaum Ch.6.5

1. Trace the TCP congestion window evolution for Tahoe given: ssthresh=16, each segment=1 MSS. Send until a triple duplicate ACK occurs at cwnd=24. Show the cwnd values every RTT from slow start through congestion avoidance, the fast retransmit, and the recovery. Label each phase.
2. Compare Tahoe vs Reno. Take a scenario where a timeout occurs at cwnd=20, ssthresh=16. Show Tahoe's behavior (cwnd drops to 1, slow start to ssthresh) and Reno's behavior (fast recovery). Which responds faster to a single packet loss and which handles multiple losses better?
3. Given a connection with RTT = 100ms, segment size = 1460 bytes, and initial slow start threshold = 65536 bytes, calculate how many RTTs until the first loss event assuming no loss occurs during slow start. What is the throughput in Mbps at that point?

---

### Week 8: topic-advanced-mpls-sdn-wireless-multimedia
**Resources:** Kurose & Ross Ch.4.4, Ch.7, Ch.8 • Tanenbaum Ch.5.7, Ch.4.7

1. Explain MPLS (Multi-Protocol Label Switching). Contrast MPLS forwarding with traditional IP routing. Given a network with ingress LSR, 3 core LSRs, and egress LSR, show the label push, swap, and pop operations as a packet traverses from source to destination. How does MPLS enable traffic engineering that IP routing cannot?
2. Explain Software-Defined Networking (SDN). Draw the SDN architecture showing the application layer, control layer, and infrastructure layer. Describe OpenFlow's role in the southbound interface. Given a switch with a flow table, show how a table-miss is handled and the flow entries for: forward to port 2, drop, send to controller.
3. Differentiate VNF (Virtual Network Functions) from traditional network functions. Take a firewall as an example — describe how it is deployed as a physical appliance vs as a VNF. What are the benefits of NFV (Network Functions Virtualization) in terms of elasticity, cost, and management?
4. A video streaming service sends 4 Mbps video over a wireless network with 2% packet loss. Explain how adaptive bitrate streaming (e.g., DASH) works. How does the client switch between quality levels? What role does buffering play? If the wireless link degrades to 10% loss, what happens to the user experience with TCP vs UDP transport?
5. Explain why wireless LANs use CSMA/CA instead of CSMA/CD. Two stations A and C are both within range of access point B but out of range of each other. Trace the hidden terminal problem when both transmit to B simultaneously, then show how RTS/CTS (request-to-send / clear-to-send) resolves it. Why can't a wireless station detect a collision the way Ethernet can?

---

