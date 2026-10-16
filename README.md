# El Colombiano

A Colombian-themed 5×3 slot game built for the [Stake Engine](https://engine.stake.com/)
platform: Python math model, Svelte/PixiJS frontend, and the asset pipeline that
produced the art and audio.

Instead of free spins, the scatter triggers **Find the Guaro** — a pick bonus where
the player opens aguardiente bottles until the golden Guaro appears.

---

## Game specification

| | |
|---|---|
| Game ID | `el_colombiano` |
| Layout | 5 reels × 3 rows |
| Paylines | 20 fixed, left-to-right |
| Win type | Lines |
| Target RTP | 96.70% |
| Win cap | 5000× bet |
| Bet modes | `base` (1× cost), `bonus` (100× cost, bonus buy) |
| Non-zero hit rate | ~1 in 3.44 spins (base mode) |

### Symbols

| Symbol | Art | Role |
|---|---|---|
| `W` | Wild | Substitutes; carries a multiplier during the bonus |
| `S` | Guaro bottle | Scatter — triggers *Find the Guaro* |
| `H1` | Cóndor | High pay (50× on 5-of-a-kind) |
| `H2` | Esmeralda | High pay (15×) |
| `H3` | Sombrero vueltiao | High pay (10×) |
| `H4` | Acordeón | High pay (8×) |
| `L1` | Café | Low pay (5×) |
| `L2` | Arepa | Low pay (3×) |
| `L3` | Chiva | Low pay (3×) |
| `L4` | Mochila wayuu | Low pay (2×) |
| `L5` | Lulo | Low pay (1×) |

Wilds only pay on 5-of-a-kind in practice: the line evaluator always picks the
highest-paying combination on a line, and the base payout of a 3-kind wild
exceeds that of a 5-kind low symbol.

### Find the Guaro

Landing 3, 4 or 5 scatters anywhere on the board opens the pick bonus with 3, 4
or 5 picks respectively.

As Stake Engine's RGS is outcome-based, the bonus is **fully predetermined by the
math**: the total prize is drawn from a weighted table keyed by scatter count,
then decomposed into a reveal sequence that sums to it exactly. The frontend
presents a 12-bottle grid; the player's k-th pick reveals the k-th prize in the
sequence, and the final pick always reveals the golden Guaro that ends the bonus.

Prize ranges by scatter count (in bet multiples):

| Scatters | Picks | Total prize range |
|---|---|---|
| 3 | 3 | 5× – 500× |
| 4 | 4 | 15× – 1000× |
| 5 | 5 | 50× – 5000× |

The math emits three custom book events — `guaroBonusTrigger`, `guaroPickReveal`
and `guaroBonusEnd` — consumed by the frontend's `bookEventHandlerMap`.

---

## Repository layout

```
math-sdk/            Stake Engine Math SDK (clone) — game lives in games/el_colombiano
web-sdk/             Stake Engine Web SDK (clone) — game lives in apps/lines
ts-client/           Stake Engine RGS TypeScript client (clone)
tools/               Art and audio preparation scripts
art_backup/          Dated backups of replaced symbol art
upload/              Build output ready for upload to Stake Engine
```

`math-sdk`, `web-sdk` and `ts-client` are clones of the upstream Stake Engine
SDKs, customised in place.

### Math model — `math-sdk/games/el_colombiano/`

| File | Purpose |
|---|---|
| `game_config.py` | Paytable, paylines, reels, bet modes, prize tables |
| `gamestate.py` | Per-spin flow: draw board, evaluate lines, run bonus |
| `game_executables.py` | `run_guaro_bonus()` and prize decomposition |
| `game_events.py` | The three custom `guaro*` book events |
| `game_override.py` | Wild multiplier assignment, repeat conditions |
| `game_optimization.py` | RTP/hit-rate targets for the optimisation pass |
| `run.py` | Entry point: simulate, optimise, analyse, verify |
| `reels/` | `BR0.csv` (base), `FR0.csv` (bonus), `FRWCAP.csv` (win-cap) |

### Frontend — `web-sdk/apps/lines/`

Built on the Web SDK's `lines` reference app. Game-specific additions:

- `src/components/GuaroBonus.svelte` — the bottle-grid pick bonus
- `src/components/GuaroBottle.svelte` — a single bottle with reveal animation
- `src/game/assets.ts` — Colombian sprite, background and UI art
- `src/game/bookEventHandlerMap.ts` — handlers for the `guaro*` events
- `static/assets/sprites/colombiano/` — symbols, bottles, logo, backgrounds, UI
- `static/assets/audio/` — Colombian-flavoured audiosprite

### Tools — `tools/`

| Script | Purpose |
|---|---|
| `process_art.py` | Background removal (rembg), trim and pad to square canvas |
| `key_symbols.py` | Chroma-key the symbol set off flat backgrounds |
| `key_magenta.py` | Chroma-key a solid magenta background |
| `clean_logo.py` | Remove checkerboard-grey artefacts from the logo cutout |
| `make_audio.py` | Synthesise the placeholder audiosprite and rewrite `sounds.json` |

---

## Running it

### Math

Requires Python ≥ 3.12 and, for the included optimiser, Rust/Cargo.

```sh
cd math-sdk
make setup
python games/el_colombiano/run.py
```

`run.py` runs the full pipeline — simulation, optimisation, analysis and RGS
format checks. Adjust `num_sim_args` and `run_conditions` in that file to run
only part of it. Output lands in `games/el_colombiano/library/`, with the
upload-ready files in `library/publish_files/`.

The outputs that pin the tuned 96.70% RTP are committed, so you can inspect or
ship the current model without re-running the simulation:

| Path | Versioned | Why |
|---|---|---|
| `library/lookup_tables/` | Yes | The tuned payout weights |
| `library/books/` | Yes | Raw simulation books |
| `library/configs/` | Yes | Math, event and frontend configs |
| `library/statistics_summary.json`, `stats_summary.json` | Yes | RTP, hit rate, variance |
| `library/optimization_files/` | No | Optimiser intermediates (43 MB), regenerable |
| `library/forces/` | No | Force/debug records |
| `library/publish_files/` | No | Byte-identical to `upload/math/` |

These exemptions are negation rules at the end of `math-sdk/.gitignore`; other
games under `math-sdk/games/` keep the upstream behaviour of ignoring
`library/` entirely. Note that re-running `run.py` regenerates all of it — check
`git diff` on the lookup tables afterwards to see whether the RTP tuning moved.

### Frontend

Requires Node ≥ 22.16 and pnpm 10.5.

```sh
cd web-sdk
pnpm install
pnpm --filter lines dev      # dev server on http://localhost:3001
pnpm --filter lines build    # production build
pnpm --filter lines storybook
```

Storybook drives the game off the recorded books in `src/stories/data/`, which
is the fastest way to iterate on the bonus without a live RGS.

---

## Uploading to Stake Engine

`upload/` holds a prepared bundle:

- `upload/math/` — `index.json`, compressed book files and lookup tables
- `upload/frontend/` — the built frontend

To refresh it, copy `math-sdk/games/el_colombiano/library/publish_files/` into
`upload/math/` and the `web-sdk/apps/lines/build/` output into
`upload/frontend/`.

---

## Documentation

- [Math SDK docs](https://stakeengine.github.io/math-sdk/)
- [Web SDK docs](https://stakeengine.github.io/web-sdk/)
- [RGS API docs](https://stake-engine.com/docs/rgs)
