// Converts OpenStreetMap roads into a city file the game can load (cities/<id>.json).
// Usage: node tools/osm2city.mjs <city-id> <south,west,north,east>
//   e.g. node tools/osm2city.mjs dhaka 23.70,90.34,23.88,90.43
// Needs network access (uses the public Overpass API). Data © OpenStreetMap contributors (ODbL).
import { writeFile, mkdir } from 'node:fs/promises';
const [id, bbox] = process.argv.slice(2);
if (!id || !bbox) { console.error('Usage: node tools/osm2city.mjs <city-id> <south,west,north,east>'); process.exit(1); }
const q = `[out:json][timeout:120];(way["highway"~"^(motorway|trunk|primary|secondary|tertiary)$"](${bbox}););out body;>;out skel qt;`;
const res = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
if (!res.ok) throw new Error('Overpass error ' + res.status);
const { elements } = await res.json();
const nodes = new Map(), ways = [];
for (const e of elements) { if (e.type === 'node') nodes.set(e.id, [e.lat, e.lon]); else if (e.type === 'way') ways.push(e); }
const use = new Map(); for (const w of ways) w.nodes.forEach((n, i) => use.set(n, (use.get(n) || 0) + 1 + (i === 0 || i === w.nodes.length - 1 ? 1 : 0)));
const mpd = 111320, dist = (a, b) => Math.hypot((a[0] - b[0]) * mpd, (a[1] - b[1]) * mpd * Math.cos(a[0] * Math.PI / 180));
function simplify(ids, tol) { // Douglas-Peucker; junctions are always kept
  const keep = new Set([0, ids.length - 1]); ids.forEach((n, i) => { if (use.get(n) > 1) keep.add(i); });
  const pts = ids.map(n => nodes.get(n)); const rec = (a, b) => { let m = -1, d = 0; for (let i = a + 1; i < b; i++) { const x = pts[i], p = pts[a], r = pts[b]; const l = dist(p, r) || 1; const t = Math.max(0, Math.min(1, ((x[0] - p[0]) * (r[0] - p[0]) + (x[1] - p[1]) * (r[1] - p[1])) / (((r[0] - p[0]) ** 2 + (r[1] - p[1]) ** 2) || 1))); const proj = [p[0] + (r[0] - p[0]) * t, p[1] + (r[1] - p[1]) * t]; const dd = dist(x, proj); if (dd > d) { d = dd; m = i; } } if (d > tol) { keep.add(m); rec(a, m); rec(m, b); } };
  const k = [...keep].sort((a, b) => a - b); for (let i = 1; i < k.length; i++) rec(k[i - 1], k[i]); return [...keep].sort((a, b) => a - b).map(i => ids[i]);
}
const idx = new Map(), outNodes = [], edges = [], seen = new Set();
const get = n => { if (!idx.has(n)) { idx.set(n, outNodes.length); outNodes.push(nodes.get(n).map(v => +v.toFixed(5))); } return idx.get(n); };
for (const w of ways) { const cls = /^(motorway|trunk|primary)$/.test(w.tags.highway) ? 'M' : 'm'; const k = simplify(w.nodes, 25);
  for (let i = 1; i < k.length; i++) { const a = get(k[i - 1]), b = get(k[i]), key = a < b ? a + '_' + b : b + '_' + a; if (a !== b && !seen.has(key)) { seen.add(key); edges.push([a, b, cls]); } } }
await mkdir('cities', { recursive: true });
await writeFile(`cities/${id}.json`, JSON.stringify({ nodes: outNodes, edges }));
console.log(`cities/${id}.json: ${outNodes.length} nodes, ${edges.length} edges`);
