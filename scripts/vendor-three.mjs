// Downloads Three.js r128 so the game can be served without a CDN (faster, works offline from first load).
import { mkdir, writeFile } from 'node:fs/promises';
const url = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
const res = await fetch(url);
if (!res.ok) throw new Error('Download failed: ' + res.status);
await mkdir('vendor', { recursive: true });
await writeFile('vendor/three.min.js', Buffer.from(await res.arrayBuffer()));
console.log('Saved vendor/three.min.js');
