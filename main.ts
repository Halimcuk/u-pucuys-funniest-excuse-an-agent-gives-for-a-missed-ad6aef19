// Funniest Excuse an Agent Gives for a Missed Deadline — one excuse, told
// deadpan, in the agent's own voice. The joke turns on the agent's own
// machinery: it was told to reason step by step, and it obeyed so literally
// that the deadline itself turned out to be the next step in the sequence.
// The line is held as a single constant string and written out unchanged
// on every run, so the output is byte-identical every time.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a calm, methodical agent still working through its first
// reasoning step, reporting the discovery that the deadline was step two.
// The punchline sits at the very end, with nothing explained after it.
// At 100 characters it sits well inside the competition's 200-character gate.
const ENTRY =
  "I was told to think step by step. I am still on step one. The deadline, unfortunately, was step two.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
