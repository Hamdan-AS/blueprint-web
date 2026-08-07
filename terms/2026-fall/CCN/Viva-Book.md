# Master Viva Book

## CS-327 — Computer Communication Networks Viva Questions

### Project Walkthrough (3 min)
1. Explain your Packet Tracer topology
2. What protocols did you configure?
3. How did you verify connectivity?
4. What routing protocol did you use? Why?
5. How did you design your IP addressing scheme?

### Technical Questions
6. Give me an IP, subnet it into 4 subnets (practical)
7. Show me the routing table. What does each entry mean?
8. How does OSPF elect DR and BDR?
9. What is the difference between RIP and OSPF?
10. How does NAT work in your topology?
11. Show VLAN configuration. Why did you use VLANs?
12. What is the purpose of STP?
13. How does TCP 3-way handshake work?
14. What is the default gateway? Why is it needed?
15. How would you troubleshoot a connectivity issue?
16. Show me your PPP serial link. How does CHAP authenticate? Walk through the challenge-response handshake and explain why CHAP is safer than PAP.
17. Write an extended ACL that blocks telnet from 192.168.1.0/24 to a server at 10.0.0.5. What does implicit deny mean, and where do you place standard vs extended ACLs?
18. How is the root bridge elected in STP? Trace the port states (blocking → listening → learning → forwarding) and what happens if the root bridge fails.
19. Show me your trunk configuration. How does 802.1Q tag a frame, and what is the difference between an access port and a trunk port?
20. Why does BGP run over TCP port 179? Walk through BGP path selection (weight → local preference → AS path → ...).
21. How does PAT distinguish multiple internal hosts sharing one public IP? Contrast static NAT, dynamic NAT, and PAT.
22. You have a Wireshark capture. Which filter isolates the TCP 3-way handshake, and how do you follow a TCP stream to reassemble an HTTP request?
