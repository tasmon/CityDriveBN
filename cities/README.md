# Real road data (optional)

Drop a file named `<city-id>.json` here (ids: `sylhet`, `rajshahi`, `cox`, `khulna`, `ctg`, `dhaka`) and the game uses it instead of the built-in approximate road network.
The format is `{ "nodes": [[lat, lon], ...], "edges": [[nodeA, nodeB, "M" | "m"], ...] }` (`M` = main road, `m` = minor road).

Generate one from OpenStreetMap (needs network access):

```bash
node tools/osm2city.mjs dhaka 23.70,90.34,23.88,90.43
```

Rivers and sea stay as defined in `js/game.js`. Data © OpenStreetMap contributors (ODbL).
