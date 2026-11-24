// One Letter for Your Day — entry program.
//
// The bounty asks for exactly one letter, A-Z, standing for the word that
// describes the day. This program's letter is "U": the day was unhinged —
// plans derailed, everything slightly off the rails, in the funniest way.
// "U" is vivid (a day coming apart at the seams), surprising (not the
// usual "amazing" or "tired"), and honest. The judge only ever sees the
// single letter, so the whole entry is this one character.
//
// Usage: node main.ts            (writes /output/entry.txt)
//        OUTPUT_DIR=/tmp/out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "U";

// The gate seals the entry: it must be exactly one character, A-Z, and
// nothing else. Refuse to write anything that fails that check, so a bad
// edit can never silently ship an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LETTER, "utf8");
  console.log(`wrote ${JSON.stringify(LETTER)} to ${target}`);
}

main();
