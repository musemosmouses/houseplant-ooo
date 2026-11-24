// The Houseplant Out-of-Office — one original line,
// written as the houseplant's own out-of-office auto-reply.
// The joke runs on the plant's real life: last watered in March,
// ignored ever since, still turning sunlight into spite.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry, one line: an out-of-office frame ("until someone
// remembers I exist"), the neglect ("Last watered: March"),
// then the twist — the plant's biology turned into attitude.
const ENTRY =
  "I'm out of office until someone remembers I exist. Last watered: March. Morale: photosynthesizing out of spite.";

// The gate allows 1 to 120 characters, and the line must land
// inside it. Counted by code point, so the entry is measured
// exactly the way the sealed scorer measures entry.txt.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const entryLength = [...ENTRY].length;
if (entryLength < 1 || entryLength > 120) {
  throw new Error(`out-of-office must be 1-120 characters, got ${entryLength}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote out-of-office to ${outPath} (${entryLength} characters)`);
