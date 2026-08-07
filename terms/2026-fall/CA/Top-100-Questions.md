# CS-328 — Top 100 Questions

## ISA & Datapath (25 questions)

1. Decode MIPS instruction `0xAC010004`
2. Encode `addi $s0, $s1, -8`
3. Differentiate R-type, I-type, J-type
4. What is the purpose of $zero?
5. Explain MIPS register conventions
6. Draw complete single-cycle datapath
7. Trace `lw $t0, 4($s1)` through single-cycle datapath
8. Calculate single-cycle cycle time given delays
9. What is the critical path in a single-cycle processor?
10. Modify datapath for a new instruction
11. Draw complete multi-cycle datapath
12. Trace `add $t0, $s1, $s2` through multi-cycle
13. Compare single-cycle vs multi-cycle performance
14. What are the states for lw in multi-cycle?
15. Draw FSM control for R-type instruction
16. Differentiate FSM control vs microprogrammed control
17. Design state encoding for multi-cycle FSM
18. What is horizontal vs vertical microprogramming?
19. Calculate speedup from multi-cycle over single-cycle
20. What happens if a state transition is missing?
21. Draw instruction execution steps for sw
22. Explain why branch takes fewer cycles than lw
23. Design control ROM for multi-cycle processor
24. Trace `beq $t0, $t1, label` through multi-cycle
25. Calculate total CPI given instruction mix

## Pipelining (30 questions)

26. Draw 5-stage MIPS pipeline
27. What is each pipeline register's role?
28. Identify RAW/WAW/WAR in a sequence
29. Draw forwarding paths for 3 instructions
30. Design forwarding unit priority logic
31. When must the pipeline stall instead of forwarding?
32. Draw hazard detection unit
33. What is a load-use hazard? How many stalls?
34. Calculate speedup from pipelining
35. What is structural hazard? Give example
36. Draw 1-bit branch predictor state machine
37. Draw 2-bit branch predictor state machine
38. Trace 2-bit predictor for 8 branch outcomes
39. Calculate branch penalty for misprediction
40. Explain why loop exit causes 1-bit predictor to mispredict twice
41. Compare 1-bit vs 2-bit predictor accuracy
42. Design hazard detection for load-use
43. What is the $zero forwarding trap?
44. Explain EX hazard vs MEM hazard priority
45. Calculate pipeline CPI with hazards
46. Trace a 4-instruction sequence showing stalls
47. What is a branch delay slot?
48. How does software fill branch delay slots?
49. Calculate throughput with vs without pipelining
50. Explain why WAR is not a hazard in MIPS
51. What is the relationship between forwarding and stalling?
52. Design a forwarding circuit for a given pipeline
53. Compare in-order vs out-of-order execution
54. Explain register renaming
55. What is the ILP wall?

## Cache & Memory (20 questions)

56. Address breakdown for direct-mapped cache
57. Address breakdown for 2-way set-associative cache
58. Calculate AMAT given hit time, miss rate, miss penalty
59. Compare write-back vs write-through
60. Calculate tag/index/offset for a given address
61. What is the advantage of set-associative over direct-mapped?
62. Determine number of sets given cache parameters
63. Calculate cache size given tag, index, offset bits
64. Explain temporal vs spatial locality
65. Trace cache access sequence with LRU
66. Calculate effective access time with TLB
67. Design two-level page table
68. Calculate TLB reach
69. What is the page size from address breakdown?
70. Explain how TLB improves performance
71. Compare unified vs split caches
72. Calculate miss rate for a given sequence
73. Explain inclusion policy in multi-level caches
74. What is the cache block size?
75. Calculate virtual-to-physical address translation

## Advanced Topics (15 questions)

76. Compare VLIW vs Superscalar
77. Explain SIMD vs SIMT
78. How does loop unrolling improve ILP?
79. Explain the three ILP limitations: ILP wall, power wall, memory wall
80. Draw RAID 5 write penalty calculation
81. Compare RAID levels 0, 1, 5, 6, 10
82. Explain Amdahl's Law
83. Calculate speedup with Amdahl's Law
84. What is the power wall?
85. Explain GPU warp scheduling
86. What is memory coalescing?
87. Explain how VLIW uses static scheduling
88. What are the ILP limitations?
89. Calculate RAID capacity for a given configuration
90. Explain software pipelining

## Theory & Definitions (10 questions)

91. Define: ISA
92. Define: CPI
93. Define: Pipeline hazard
94. Define: Forwarding
95. Define: Virtual memory
96. Define: TLB
97. Define: Cache hit
98. Define: Amdahl's Law
99. Define: Superscalar
100. Define: VLIW
