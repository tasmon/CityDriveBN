# 🚌 BAN Bus Simulation

A 3D driving game set in Bangladesh. It runs in desktop and mobile browsers, installs as a PWA, and deploys to Vercel as a static site.

**Developer:** Tasmon Islam

## Modes
| Mode | What you do |
|---|---|
| **City · Passengers** | Pick up and drop off passengers at named stops. The bus follows the cyan route through junctions. |
| **City · Free drive** | Explore with traffic and rules, no passengers. Your lane decides the turn at junctions. |
| **Highway** | Drive between two cities on a long highway with speed cameras and fuel stations. |
| **Endless drive** | Infinite highway, growing traffic, score from distance and near misses. |
| **Training** | Seven guided lessons. |
| **Demolition derby** | Ram rivals in an arena; hits, drifting and taunting (horn) build the road-rage meter. |

Vehicles: City Coach, Express AC, Mini Bus, Double Decker and the CNG Auto-rickshaw, in any colour.

## Controls
| Action | Keys |
|---|---|
| Accelerate | `W` / `↑` |
| Brake, then reverse | `S` / `↓` |
| Change lane left / right | `A` `D` or `←` `→` |
| Horn, lights, hazards | `H`, `L`, `Z` |
| Cockpit, camera distance, map, pause | `C`, `V`, `M`, `P` |
| Find fuel, gear, engine key | `F`, `R`, `K` |

On touch screens use the « » buttons (lane change), the pedals and the ⋯ menu. In Demolition Derby `A`/`D` steer freely.

At a junction the left (curb) lane turns left, the right lane turns right and the middle lane goes straight. In missions the route decides.

## What changed in v8
- **Real-geography road networks.** Each city is now a road graph (junctions and roads with different widths and lane counts, rivers and sea) placed at approximate real coordinates, not a square grid. Scenery streams in around you.
- **Lane-change driving** instead of free steering, with auto-following of roads and route.
- **Modern rendering.** sRGB colour pipeline, ACES tone mapping, soft shadows on desktop, extruded vehicle bodies, glossy paint, wet-road shading, headlight glow, sky, sun and clouds.
- **Weather and environment.** Smoothly changing clear, rain, thunderstorm (lightning and thunder) and fog; 3D rain, wet roads and wipers in the cockpit.
- **Sound.** Engine with gear shifts, tyre and wind noise that follow your speed, rain, thunder, horns, bells, birds and crickets, brake squeal, a soft ambient pad and a limiter.
- The route arrow above the vehicle was removed; the cyan chevrons on the road show the way.

## Map accuracy (please read)
The built-in networks are hand-authored from memory: key junctions, landmarks and main roads are in roughly the right places relative to each other and rivers/sea are on the correct side, but this is **not survey data**. For true street layouts import OpenStreetMap:

```bash
node tools/osm2city.mjs dhaka 23.70,90.34,23.88,90.43   # writes cities/dhaka.json
```
The game loads `cities/<id>.json` automatically when present (ids: `sylhet`, `rajshahi`, `cox`, `khulna`, `ctg`, `dhaka`). The importer has not been run against live data yet, so expect to tune it for very dense extracts.

## Deploy on Vercel
1. Push this folder to GitHub.
2. In Vercel choose **Add New → Project**, import the repository, framework preset **Other**, leave the build command empty and the output directory as `.`.
3. Deploy. `vercel.json` sets security headers, a content-security policy, long-term caching for vendored files and no-cache for the service worker.

Or from a terminal: `npx vercel --prod`.

Optional: `npm run vendor` downloads Three.js into `vendor/` so the game no longer depends on a CDN (it falls back to the CDN when the file is absent).
`npm run inline` builds a single-file version in `dist/`.

## Run locally
```bash
npm run dev      # http://localhost:5173
```

## Files
```
index.html            page and loader
css/style.css         styles
js/game.js            game (graph engine, rendering, audio, modes)
sw.js                 offline cache
vercel.json           headers and caching
cities/               optional OSM data
tools/osm2city.mjs    OpenStreetMap importer
scripts/              vendor-three.mjs, build-inline.mjs
```

## Known limits
Built and tested with scripted simulations; graphics, performance on phones and touch layout still need real-device checks. Add `#hq` to the URL to force full graphics on phones or `#unlock` to open every city.

## License
MIT © Tasmon Islam
