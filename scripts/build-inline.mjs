// Builds dist/index.inline.html: a single self-contained file (CSS + JS inlined, Three.js from the CDN).
import { readFile, writeFile, mkdir } from 'node:fs/promises';
let html = await readFile('index.html', 'utf8');
const css = await readFile('css/style.css', 'utf8');
const js = await readFile('js/game.js', 'utf8');
html = html.replace(/<link rel="stylesheet"[^>]*>/, () => `<style>${css}</style>`);
html = html.replace(/<script>\(function\(\)\{function L[\s\S]*?\}\)\(\)<\/script>/, () => `<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>\n<script>\n${js}\n</script>`);
await mkdir('dist', { recursive: true });
await writeFile('dist/index.inline.html', html);
console.log('Wrote dist/index.inline.html');
