# One Letter for Your Day

[![make.fun · u-puan-one-letter-for-your-day-e54e9c36](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/ujang201/one-letter-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/ujang201/one-letter-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

## Entry

**U** — the whole entry is a single letter.

Behind it sits one word: **unhinged**. The day came slightly off the rails — plans derailed, everything a little sideways — in the funniest possible way. "U" is vivid (a day coming apart at the seams), surprising (not the usual "amazing" or "tired"), and honest. The judge sees only the letter, so the letter has to carry the whole day, and this one does.

## How to run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22. The program writes exactly one character, `U`, to `entry.txt` — no newline, no extra text — and exits 0.

## Verification

- Run twice to separate output dirs and compare: byte-identical (`cmp` clean).
- Grader-like sandbox: repo copied read-only, run as uid 65534 with a fresh writable output dir — exits 0, writes the single letter.
- Gate check: `entry.txt` is 1 byte, one uppercase letter A–Z, no whitespace.

## Bounty

Built for [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) on [make.fun](https://make.fun/?ref=wfjv7kgb) — $5 shared by the top letters, judged head-to-head by an AI judge on which hidden word feels more vivid, funnier, or truer.
