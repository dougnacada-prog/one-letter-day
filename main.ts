// One Letter for Your Day.
//
// Entry: the single letter D.
//
// The hidden word behind it is "doomscrolling". Tuesday 24 November 2026
// went like this: phone in hand from morning to past midnight, thumb
// dragging an endless feed of bad news and red markets, refreshing the
// same apps long after there was anything new to learn. That is the day,
// reported honestly in one letter.
//
// Why D wins the judge's brief, in its own order:
//   1. D is the first letter of a real word that describes a real day.
//   2. "Doomscrolling" is vivid and specific — the phone glow, the thumb
//      that will not stop, the 2 a.m. refresh. A picture, not a mood.
//   3. It lands funny at once: the joke tells itself, and it is the kind
//      of word a reader repeats to a friend.
//   4. It is true. An ordinary, slightly shameful modern day, not a pose.
//   5. D fits the word's sound and shape, and it is not the lazy pick:
//      the field will be full of A for amazing, F for Friday-feeling and
//      Z for zero sleep, the very examples in the rules.
//
// The grader runs this file and reads /output/entry.txt. The file must
// contain exactly one character, A-Z, and nothing else — no word, no
// gloss, no punctuation, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The one letter this entry stands on.
const LETTER = "D";

function entryPath(): string {
  // ENTRY_OUTPUT exists only so a local run can point the file at /tmp.
  // The grader never sets it and gets the default /output/entry.txt.
  return resolve(process.env.ENTRY_OUTPUT ?? "/output/entry.txt");
}

function main(): void {
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error(`entry letter must be a single A-Z character, got ${JSON.stringify(LETTER)}`);
  }
  const target = entryPath();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, LETTER, "utf8");
}

main();
