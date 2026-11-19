// This script deterministically copies entry.png, producing a byte-for-byte identical output on every run.
import { copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(scriptDirectory, 'entry.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationPath = path.join(outputDirectory, 'entry.png');

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourcePath, destinationPath);
console.log(`Copied ${sourcePath} to ${destinationPath}`);
