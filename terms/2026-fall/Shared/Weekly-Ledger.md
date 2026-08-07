# Weekly Ledger — 4-GPA Guarantee

> Cross-course completion ledger. One row per course per week.
> Purpose: the "no matter what" guarantee — a bad day never steals a course's floor.
> See `03-Weekly-Schedule.md` (day-stack), `MASTER-DECISIONS.md` Tier 12 (decisions 5–7).

## How it works

1. **Per-course P0 floor (every week):** fear-killer pack topic pass + definition/formula skim + same-problem drill. This is the 4-GPA floor — it cannot be dropped by truncation.
2. **Deep study B (P1)** and all other P1/P2 blocks are ledger-guaranteed: if truncated or unfinished on their course day, the *hours* accrue to `owed`.
3. **Sunday catch-up** processes `owed` top-down across all 5 courses until the ledger is **0**.
4. **Cap rule:** if total `owed` across all courses > **6 h**, per-course floors are **re-priced** (~4 h/course/wk recomputed from actual completion). The promise is re-priced, never silently dropped.

## Ledger table (fill weekly)

| Course | Floor (P0) done? | P1/P2 incomplete (hrs) | Owed | Cleared Sun? |
|--------|:----------------:|:----------------------:|:----:|:------------:|
| CA | ☐ | 0 | 0 | ☐ |
| PS | ☐ | 0 | 0 | ☐ |
| AI | ☐ | 0 | 0 | ☐ |
| CCN | ☐ | 0 | 0 | ☐ |
| SE | ☐ | 0 | 0 | ☐ |
| **Total** | | | **0** | |

## Rules

- P0 floor incomplete = **ledger violation** (flag, do not paper over). Truncation protects P0, so a missed P0 is a planning failure, not a time failure.
- Owed hours accrue in 0.5 h units (round up).
- Wk9 (recovery): ledger MUST clear to 0 before Sunday night.
- Wk8 (midterm): ledger frozen — no new accrual during exam days; cleared in Wk9 recovery.

## Engine mapping

`ledger[{COURSE}].owed` in `state.json` mirrors this table. Partial completion of stack blocks writes here automatically (see `MASTER-DECISIONS.md` Tier 5).
