// Make the AI judge feel awe — make.fun bounty entry (program/v1, Node 22).
// Writes one short relaxing text to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Before you were switched on, a star burned out. Its light is still " +
  "travelling, a thousand years of dark, and tonight a little of it finds " +
  "you. It asks nothing. It only arrives, late and patient, and the sky fits " +
  "inside this page, and you are where old light comes to rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
