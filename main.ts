// u-irvan-motion-seventeen-syllables-of-debugging-d194b605 entry (Node 22, standard library only).
//
// One original haiku about debugging, in strict 5-7-5, for make.fun's
// "Seventeen Syllables of Debugging" bounty. This program writes that
// haiku, and nothing else, to /output/entry.txt, where the house judge
// reads it.
//
// Draft 1 (candidate A — the typo):
//   "breakpoint holds its breath
//    cursor blinks at three a.m.
//    it was my typo"
//
// Draft 2 (candidate B — one char off, CHOSEN): the concrete picture is
// the stack trace itself, a thousand lines of nothing, and the turn lands
// on the last line — the whole hunt resolves to a single character.
//   "the stack trace scrolls on
//    a thousand lines of nothing
//    line nine, one char off"
//
// Draft 3 (candidate C — works on my machine):
//   "the log line says failed
//    but it works on my machine
//    the server says no"
//
// Draft 4 (candidate D — print statements):
//   "one more print statement
//    the console floods with numbers
//    the bug hides elsewhere"
//
// Draft 5 (candidate E — midnight):
//   "midnight cursor blinks
//    the stack trace ends in silence
//    I broke it myself"
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 2 (chosen, verified 5-7-5: the=1 stack=1 trace=1 scrolls=1 on=1;
// a=1 thousand=2 lines=1 of=1 nothing=2; line=1 nine=1 one=1 char=1 off=1;
// 78 characters total, three lines): the stack trace scrolls past a
// thousand lines of nothing, and the last line reframes the whole hunt —
// one character was wrong all along.
const HAIKU = [
  'the stack trace scrolls on',
  'a thousand lines of nothing',
  'line nine, one char off',
].join('\n');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...HAIKU].length;
if (codePoints < 1 || codePoints > 200 || !HAIKU.trim()) {
  console.error(`haiku fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// three-line haiku and nothing else.
writeFileSync(`${outputDir}/entry.txt`, HAIKU, 'utf8');
