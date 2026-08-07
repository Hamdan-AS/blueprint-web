# CS-328 — Top 10 Tricky Concepts

1. **$zero forwarding trap:** The forwarding unit must NOT try to forward to $zero, even if a previous instruction writes it. Reason: $zero is hardwired to 0 and should remain 0 regardless of writes. Most students miss this edge case.

2. **EX hazard vs MEM hazard priority:** When two instructions ahead produce results for the same register, the EX hazard (more recent instruction) has higher priority than the MEM hazard. If both produce results, use the later instruction's result.

3. **Load-use hazard detection:** `lw` followed by an ALU instruction reading the loaded value CANNOT be resolved by forwarding alone because the MEM stage result is not available until after the ALU stage of the dependent instruction. One stall cycle is required.

4. **1-bit predictor double misprediction on loop exit:** A 1-bit predictor correctly predicts "taken" for N-1 iterations, but on the last iteration (exit taken), it predicts "taken" (incorrect) and flips to "not taken." On loop re-entry, it predicts "not taken" (incorrect again). The 2-bit predictor reduces this to 1 misprediction.

5. **Branch resolved stage varies:** Some pipelines resolve branches in ID (early), some in MEM (late). Earlier resolution reduces branch penalty but requires more hardware. Know which stage your examiner assumes.

6. **Multi-cycle vs single-cycle paradox:** Multi-cycle has shorter cycle time (only longest per-step delay) but higher CPI. Single-cycle has CPI = 1 but long cycle time (worst-case instruction). The optimal depends on instruction mix.

7. **Write-back vs write-through cache coherence:** Write-back is faster but creates coherence problems in multi-processor systems. Write-through is simpler but slower.

8. **RAID 4 vs RAID 5 write penalty:** RAID 4 uses dedicated parity disk (bottleneck). RAID 5 distributes parity. Write penalty: each write requires 2 reads (old data + old parity) + 2 writes (new data + new parity) = 4 I/Os.

9. **Amdahl's Law counterintuitive result:** Even with infinite processors, speedup is limited to 1/(1−f). If 10% is sequential, max speedup = 10x regardless of how many processors you add.

10. **VLIW vs Superscalar trade-off:** VLIW moves scheduling complexity to the compiler (simpler hardware, static). Superscalar does dynamic scheduling in hardware (complex hardware, backward-compatible). Neither is universally better.
