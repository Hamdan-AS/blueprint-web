# Master Formula Book

## CS-327 — Computer Communication Networks

### CRC
- Append degree-of-polynomial zeros to data
- Divide modulo-2 (XOR, no carry)
- Remainder is CRC

### CSMA/CD
- Minimum Frame Size = 2 × Propagation Delay × Data Rate

### ALOHA Efficiency
- Pure ALOHA: S = G × e^(−2G), Max = 1/(2e) ≈ 0.184
- Slotted ALOHA: S = G × e^(−G), Max = 1/e ≈ 0.368

### Subnetting
- Number of Subnets = 2^(borrowed bits)
- Usable Hosts per Subnet = 2^(host bits) − 2
- Magic Number = 256 − Subnet Mask (last non-255 octet)

### TCP Congestion Control
- Slow Start: cwnd doubles every RTT (exponential)
- Congestion Avoidance: cwnd += 1/cwnd per ACK (AIMD, linear)
- ssthresh = cwnd / 2 on loss
- Tahoe: cwnd = 1 on loss (slow start)
- Reno: cwnd = ssthresh on triple duplicate ACK (fast recovery)

---

