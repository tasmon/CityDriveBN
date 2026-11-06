# 🚌 City Drive BN

A 3D driving game set in Bangladesh: buses, a taxi-style car and the CNG auto-rickshaw across six cities, highways and scenic routes. It runs in desktop and mobile browsers, installs as a PWA and deploys to Vercel as a static site.

**Developer:** Tasmon Islam

## Home screen
A modern game menu with a rotating 3D showcase of your vehicle: **Play** (modes), **Garage** (vehicle cards with stats, colour, city) and **Settings** (volume, graphics, your own music, install).

## Modes
| Mode | What you do |
|---|---|
| **City · Passengers** | Pick up and drop off passengers; the vehicle follows the cyan route. |
| **Free drive** | Explore with traffic and rules. Press `T` for auto-drive. |
| **Scenic auto-drive** | Sit back: the vehicle drives itself along scenic roads (rivers and coast preferred) while a camera director cycles through five cinematic shots. Golden-hour light, relaxing radio, no fines. Press `T` to take control. |
| **Highway** | Drive between two cities with speed cameras and fuel stations. |
| **Endless drive** | Infinite highway, growing traffic. |
| **Training** | Seven guided lessons. |
| **Demolition derby** | Ram rivals; hits, drifting and honking build the road-rage meter. |

All six cities are unlocked from the start.

## Vehicles
City Coach, Express AC, Mini Bus, Double Decker, CNG Auto-rickshaw and the new **City Car**. Each has its own **cockpit interior** (press `C`): bus cabs with a big flat wheel, ticket machine and mirrors; the car with a console and radio screen; the CNG with a handlebar, taxi meter and open frame. The steering wheel turns, the gauges show speed and fuel, and the cabin light comes on at night.

## Radio and music
Press `O` (on/off) and `N` (next station), or open 📻 from the ⋯ menu. Built-in stations are generated live in your browser: **Rock FM** (distorted guitar riffs and drums), **Lo-fi Chill**, **Pop Hits**, **Bangla Folk** and **Ambient Night**. You can also play your own audio files (Settings or the radio panel). Nothing is uploaded; files stay on your device.

## Controls
| Action | Keys |
|---|---|
| Accelerate | `W` / `↑` |
| Brake, then reverse | `S` / `↓` |
| Change lane | `A` `D` or `←` `→` |
| Horn, lights, hazards | `H`, `L`, `Z` |
| Cockpit, camera distance, map, pause | `C`, `V`, `M`, `P` |
| Find fuel, gear, engine key, auto-drive | `F`, `R`, `K`, `T` |
| Radio | `O`, `N` (`Shift+N` previous) |

On touch screens use « » (lane change), the pedals and the ⋯ menu. In Demolition Derby `A`/`D` steer freely.

## Fines (reduced)
Speeding ৳300 (৳450 downtown), red light ৳500, collision ৳800, pedestrian ৳5,000, towing ৳1,000, speed camera ৳600. Doubled near traffic police. You go bankrupt below −৳3,000.

## Maps
Each city is a road network placed at approximate real coordinates, with rivers and sea. The networks were written from memory, so treat them as approximate. For true street layouts import OpenStreetMap:

```bash
node tools/osm2city.mjs dhaka 23.70,90.34,23.88,90.43   # writes cities/dhaka.json
```
The game loads `cities/<id>.json` automatically (ids: `sylhet`, `rajshahi`, `cox`, `khulna`, `ctg`, `dhaka`). The importer is untested on live data.

## Deploy on Vercel
Import the repository, choose preset **Other**, leave the build command empty and the output directory as `.`, then deploy. `vercel.json` sets security headers, a content-security policy and caching. Or run `npx vercel --prod`.
`npm run vendor` downloads Three.js locally (optional); `npm run inline` builds a single-file version in `dist/`; `npm run dev` serves on port 5173.

## Files
`index.html`, `css/style.css`, `js/game.js`, `sw.js`, `manifest.webmanifest`, icons, `vercel.json`, `cities/`, `tools/osm2city.mjs`, `scripts/`.

## Known limits
Tested with scripted simulations only; graphics, phone performance, touch layout and the synthesized music still need real-device checks. Graphics can be set to Low in Settings. `#hq` in the URL forces high quality.

## License
MIT © Tasmon Islam
