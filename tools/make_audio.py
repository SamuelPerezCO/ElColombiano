"""Synthesize a Colombian-flavored placeholder audiosprite for El Colombiano.

Generates every sprite name the game references (54 sounds), concatenates them
with 1s gaps, writes sounds.wav, encodes to ogg/m4a/mp3/ac3 with ffmpeg, and
rewrites sounds.json with the new offsets. Originals are backed up once to
static/assets/audio/_mining_backup/.
"""

import json
import shutil
import subprocess
import wave
from pathlib import Path

import numpy as np

SR = 44100
OUT_DIR = Path(r"C:\Codes\el-colombiano\web-sdk\apps\lines\static\assets\audio")
BACKUP_DIR = OUT_DIR / "_mining_backup"

rng = np.random.default_rng(1810)  # Colombia's independence year, why not


# ---------- basic building blocks ----------

def silence(dur):
    return np.zeros(int(SR * dur))


def env_ad(n, attack, decay_curve):
    """Attack-decay envelope: linear attack then exponential decay."""
    a = max(int(SR * attack), 1)
    env = np.ones(n)
    env[:a] = np.linspace(0, 1, a)
    d = n - a
    if d > 0:
        env[a:] = np.exp(-decay_curve * np.linspace(0, 1, d))
    return env


def harmonic_tone(freq, dur, harmonics, vibrato_hz=0.0, vibrato_amt=0.0):
    """Additive tone: harmonics = [(multiple, amplitude), ...]."""
    n = int(SR * dur)
    t = np.arange(n) / SR
    vib = vibrato_amt * np.sin(2 * np.pi * vibrato_hz * t) if vibrato_hz else 0
    out = np.zeros(n)
    for mult, amp in harmonics:
        if freq * mult < SR * 0.45:
            out += amp * np.sin(2 * np.pi * freq * mult * (t + vib * t))
    return out


def accordion(freq, dur, gain=1.0):
    """Detuned reedy tone with vibrato - our 'acordeon vallenato'."""
    partials = [(1, 1.0), (2, 0.55), (3, 0.38), (4, 0.22), (5, 0.16), (6, 0.1), (8, 0.05)]
    a = harmonic_tone(freq * 0.997, dur, partials, 5.4, 0.0016)
    b = harmonic_tone(freq * 1.003, dur, partials, 5.9, 0.0016)
    out = (a + b) * 0.5
    n = len(out)
    env = np.ones(n)
    edge = max(int(SR * 0.02), 1)
    env[:edge] = np.linspace(0, 1, edge)
    env[-edge:] = np.linspace(1, 0, edge)
    return out * env * gain * 0.4


def marimba(freq, dur=0.8, gain=1.0):
    tone_ = harmonic_tone(freq, dur, [(1, 1.0), (4, 0.35), (9.2, 0.12)])
    return tone_ * env_ad(len(tone_), 0.004, 7.5) * gain * 0.7


def bass_note(freq, dur, gain=1.0):
    tone_ = harmonic_tone(freq, dur, [(1, 1.0), (2, 0.4), (3, 0.12)])
    return tone_ * env_ad(len(tone_), 0.008, 4.0) * gain * 0.9


def kick(gain=1.0):
    n = int(SR * 0.16)
    t = np.arange(n) / SR
    sweep = np.sin(2 * np.pi * (110 * np.exp(-14 * t)) * t * 8)
    return sweep * env_ad(n, 0.002, 9) * gain


def cowbell(gain=1.0):
    n = int(SR * 0.14)
    t = np.arange(n) / SR
    out = np.sign(np.sin(2 * np.pi * 545 * t)) * 0.5 + np.sign(np.sin(2 * np.pi * 812 * t)) * 0.5
    return out * env_ad(n, 0.001, 16) * gain * 0.35


def guacharaca(dur=0.07, gain=1.0):
    """High-passed noise scrape (diff of noise brightens it)."""
    n = int(SR * dur)
    noise = rng.standard_normal(n + 1)
    scrape = np.diff(noise)
    return scrape * env_ad(n, 0.004, 6) * gain * 0.28


def woodblock(freq=1150.0, gain=1.0):
    n = int(SR * 0.09)
    t = np.arange(n) / SR
    out = np.sin(2 * np.pi * freq * t) + 0.3 * np.sin(2 * np.pi * freq * 2.4 * t)
    return out * env_ad(n, 0.001, 22) * gain * 0.7


def cork_pop(gain=1.0):
    """Guaro bottle opening: pop + rising 'boing'."""
    n1 = int(SR * 0.05)
    pop = rng.standard_normal(n1) * env_ad(n1, 0.001, 12)
    n2 = int(SR * 0.35)
    t = np.arange(n2) / SR
    boing = np.sin(2 * np.pi * (300 + 500 * t / 0.35) * t) * env_ad(n2, 0.005, 6)
    return np.concatenate([pop * 0.8, boing * 0.5]) * gain


def whoosh(dur=0.5, gain=1.0):
    n = int(SR * dur)
    noise = rng.standard_normal(n)
    smoothed = np.convolve(noise, np.ones(24) / 24, mode="same")
    lift = np.linspace(0.4, 1.0, n)
    return smoothed * env_ad(n, dur * 0.55, 5) * lift * gain * 0.8


def mix_at(buf, t_sec, sound, gain=1.0):
    i = int(SR * t_sec)
    j = min(i + len(sound), len(buf))
    if j > i:
        buf[i:j] += sound[: j - i] * gain


def soften(buf, loop=True):
    """Warm low-pass + gentle echo so synth parts sound less raw.

    Loops use a circular echo (wraps around) so they stay seamless; one-shots
    get a real tail appended.
    """
    from scipy.signal import lfilter

    warm = lfilter([0.4], [1, -0.6], buf)
    taps = ((1, 0.24), (2, 0.1))
    delay = int(SR * 0.27)
    if loop:
        out = warm.copy()
        n = len(warm)
        for k, gain in taps:
            out += np.roll(warm, (delay * k) % n) * gain
        return out
    out = np.concatenate([warm, np.zeros(delay * len(taps) + int(SR * 0.3))])
    for k, gain in taps:
        d = delay * k
        out[d : d + len(warm)] += warm * gain
    return out


NOTES = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}


def note_freq(name):
    """e.g. 'A3', 'C#4'."""
    pitch = NOTES[name[0]]
    rest = name[1:]
    if rest.startswith("#"):
        pitch += 1
        rest = rest[1:]
    octave = int(rest)
    midi = 12 * (octave + 1) + pitch
    return 440.0 * 2 ** ((midi - 69) / 12)


# ---------- music beds ----------

def cumbia_loop(bpm, bars, chords, melody, brightness=1.0, density=1.0, seed_offset=0):
    """A cumbia groove. chords: one root note name per bar. melody: list of
    (start_beat, note_name, dur_beats)."""
    beat = 60.0 / bpm
    total = bars * 4 * beat
    buf = silence(total)

    for bar in range(bars):
        bar_t = bar * 4 * beat
        root = note_freq(chords[bar % len(chords)])
        fifth = root * 2 ** (7 / 12)
        # kick on 1 and 3
        mix_at(buf, bar_t, kick(0.9))
        mix_at(buf, bar_t + 2 * beat, kick(0.8))
        # bass: 1 (root), 2& (fifth), 3 (root), 4 (fifth below)
        mix_at(buf, bar_t, bass_note(root / 2, beat * 0.9, 0.9))
        mix_at(buf, bar_t + 1.5 * beat, bass_note(fifth / 2, beat * 0.45, 0.7))
        mix_at(buf, bar_t + 2 * beat, bass_note(root / 2, beat * 0.9, 0.85))
        mix_at(buf, bar_t + 3 * beat, bass_note(fifth / 4, beat * 0.9, 0.75))
        # soft cowbell on offbeats
        for b in range(4):
            mix_at(buf, bar_t + (b + 0.5) * beat, cowbell(0.32 * brightness))
        # guacharaca: cha-ka-chaa pattern per beat, gentle
        for b in range(4):
            mix_at(buf, bar_t + b * beat, guacharaca(0.05, 0.45))
            mix_at(buf, bar_t + (b + 0.25) * beat, guacharaca(0.05, 0.3 * density))
            mix_at(buf, bar_t + (b + 0.5) * beat, guacharaca(0.09, 0.55))

    # marimba lead - much more natural than the synth accordion
    for start_beat, name, dur_beats in melody:
        mix_at(buf, start_beat * beat, marimba(note_freq(name), min(dur_beats * beat, 1.3), 0.85 * brightness))

    return soften(buf, loop=True)


MELODY_MAIN = [
    # 12-bar phrase in A minor (beats are absolute)
    (0, "A4", 1), (1, "C5", 1), (2, "E5", 1.5), (3.5, "D5", 0.5),
    (4, "C5", 1), (5, "B4", 1), (6, "A4", 2),
    (8, "F4", 1), (9, "A4", 1), (10, "C5", 1.5), (11.5, "B4", 0.5),
    (12, "C5", 1), (13, "D5", 1), (14, "E5", 2),
    (16, "E5", 1), (17, "G5", 1), (18, "E5", 1), (19, "D5", 1),
    (20, "C5", 1), (21, "B4", 1), (22, "A4", 2),
    (24, "A4", 0.5), (24.5, "B4", 0.5), (25, "C5", 1), (26, "D5", 1), (27, "E5", 1),
    (28, "D5", 1), (29, "C5", 1), (30, "B4", 1), (31, "G4", 1),
    (32, "A4", 1.5), (33.5, "C5", 0.5), (34, "E5", 2),
    (36, "D5", 1), (37, "C5", 1), (38, "B4", 2),
    (40, "C5", 1), (41, "B4", 1), (42, "A4", 1), (43, "G4", 1),
    (44, "A4", 3),
]

MELODY_FIESTA = [
    (0, "C5", 0.5), (0.5, "E5", 0.5), (1, "G5", 1), (2, "E5", 1), (3, "C5", 1),
    (4, "A4", 0.5), (4.5, "C5", 0.5), (5, "E5", 1), (6, "D5", 1), (7, "B4", 1),
    (8, "F4", 0.5), (8.5, "A4", 0.5), (9, "C5", 1), (10, "A4", 1), (11, "F4", 1),
    (12, "G4", 0.5), (12.5, "B4", 0.5), (13, "D5", 1), (14, "G5", 2),
    (16, "G5", 0.5), (16.5, "E5", 0.5), (17, "C5", 1), (18, "E5", 1), (19, "G5", 1),
    (20, "A5", 1), (21, "G5", 1), (22, "E5", 2),
    (24, "F5", 0.5), (24.5, "E5", 0.5), (25, "D5", 1), (26, "C5", 1), (27, "B4", 1),
    (28, "C5", 1), (29, "D5", 1), (30, "C5", 2),
]


def win_vamp(root_name, bpm=126, bars=4, density=1.2):
    """8-second-ish celebration vamp."""
    root = note_freq(root_name)
    third = root * 2 ** (4 / 12)
    fifth = root * 2 ** (7 / 12)
    beat = 60.0 / bpm
    buf = silence(bars * 4 * beat)
    for bar in range(bars):
        bar_t = bar * 4 * beat
        mix_at(buf, bar_t, kick(1.0))
        mix_at(buf, bar_t + 2 * beat, kick(0.9))
        mix_at(buf, bar_t, bass_note(root / 2, beat * 0.9))
        mix_at(buf, bar_t + 2 * beat, bass_note(fifth / 4, beat * 0.9))
        for b in range(4):
            mix_at(buf, bar_t + (b + 0.5) * beat, cowbell(0.4))
            mix_at(buf, bar_t + b * beat, guacharaca(0.06, density * 0.5))
            mix_at(buf, bar_t + (b + 0.5) * beat, guacharaca(0.09, density * 0.5))
        # marimba chord rolls on 1 and 2&
        for stab_t in (0, 1.5):
            for k, f in enumerate((root * 2, third * 2, fifth * 2)):
                mix_at(buf, bar_t + stab_t * beat + k * 0.045, marimba(f, 0.6, 0.55))
        # rising run in bar 4
        if bar == bars - 1:
            for k, semi in enumerate((0, 4, 7, 12)):
                mix_at(buf, bar_t + k * beat, marimba(root * 2 ** (semi / 12) * 2, 0.5, 0.8))
    return soften(buf, loop=True)


def marimba_run(names, step=0.09, dur=0.7, gain=1.0):
    total = step * len(names) + dur
    buf = silence(total)
    for k, name in enumerate(names):
        mix_at(buf, k * step, marimba(note_freq(name), dur, gain))
    return buf


# ---------- assemble every sprite ----------

sounds = {}
loops = set()

sounds["bgm_main"] = cumbia_loop(
    100, 12, ["A2", "A2", "F2", "F2", "C3", "C3", "G2", "G2", "A2", "F2", "G2", "A2"], MELODY_MAIN
)
loops.add("bgm_main")

sounds["bgm_freespin"] = cumbia_loop(
    122, 8, ["C3", "A2", "F2", "G2", "C3", "A2", "F2", "G2"], MELODY_FIESTA, brightness=1.15, density=1.3
)
loops.add("bgm_freespin")

for name, root in [
    ("bgm_winlevel_big", "C3"),
    ("bgm_winlevel_superwin", "D3"),
    ("bgm_winlevel_mega", "E3"),
    ("bgm_winlevel_epic", "F3"),
    ("bgm_winlevel_max", "G3"),
]:
    sounds[name] = win_vamp(root)
    loops.add(name)

sounds["jng_intro_fs"] = soften(
    marimba_run(["A3", "C4", "E4", "A4", "C5", "E5", "A5"], 0.08, 0.9, 0.9), loop=False
)
sounds["sfx_superfreespin"] = np.concatenate(
    [win_vamp("A2", bpm=132, bars=2, density=1.4), soften(marimba_run(["A4", "C5", "E5", "A5"], 0.1, 1.2), loop=False)]
)
sounds["sfx_youwon_panel"] = soften(
    marimba_run(["C4", "E4", "G4", "C5", "E5", "G5", "C6"], 0.09, 1.1, 1.0), loop=False
)

# anticipation: guacharaca roll + rising drone
n = int(SR * 7.0)
t = np.arange(n) / SR
drone = np.sin(2 * np.pi * (110 + 30 * t / 7.0) * t) * 0.18
antic = silence(7.0)
antic += drone
for k in range(int(7.0 / 0.11)):
    mix_at(antic, k * 0.11, guacharaca(0.07, 0.5 + 0.5 * k / (7.0 / 0.11)))
sounds["sfx_anticipation"] = antic
sounds["sfx_anticipation_start"] = whoosh(0.9, 1.0)

# bigwin coin loop -> emerald sparkle cascade
sparkle = silence(8.0)
pentatonic = ["C6", "D6", "E6", "G6", "A6", "C7"]
for k in range(64):
    mix_at(sparkle, k * 0.125, marimba(note_freq(pentatonic[int(rng.integers(0, len(pentatonic)))]), 0.35, 0.35))
sounds["sfx_bigwin_coinloop"] = sparkle
loops.add("sfx_bigwin_coinloop")

sounds["sfx_btn_general"] = woodblock(1400, 0.5)

# Spin/bet press: sharp woodblock hit + quick bright noise sweep, so it cuts
# through the music (a slow airy whoosh was inaudible).
_spin_press = silence(0.4)
mix_at(_spin_press, 0, woodblock(540, 1.0))
mix_at(_spin_press, 0, woodblock(810, 0.6))
_n = int(SR * 0.3)
_noise = np.convolve(rng.standard_normal(_n), np.ones(6) / 6, mode="same")
mix_at(_spin_press, 0.01, _noise * env_ad(_n, 0.005, 7) * 0.55)
mix_at(_spin_press, 0.12, marimba(note_freq("A5"), 0.25, 0.5))
sounds["sfx_btn_spin"] = _spin_press
sounds["sfx_fs_respins"] = marimba_run(["E4", "G4", "B4", "E5"], 0.12, 0.8)

for name, f in [
    ("sfx_multiplier_combine_a", 500), ("sfx_multiplier_combine_b", 620),
    ("sfx_multiplier_explosion_a", 300), ("sfx_multiplier_explosion_b", 260),
    ("sfx_multiplier_explosion_c", 220), ("sfx_multiplier_landing", 700),
    ("sfx_multiplier_reset", 420), ("sfx_multiplier_up", 760),
    ("sfx_multiplier_update", 680),
]:
    sounds[name] = marimba(f, 0.6, 0.7)
sounds["sfx_multiplier_win"] = marimba_run(["G4", "B4", "D5", "G5"], 0.12, 0.9)

for i in range(1, 6):
    sounds[f"sfx_reel_stop_{i}"] = woodblock(1050 + i * 60, 0.9)

scatter_scale = ["A4", "C5", "E5", "G5", "B5"]
for i in range(1, 6):
    sounds[f"sfx_scatter_stop_{i}"] = np.concatenate(
        [marimba(note_freq(scatter_scale[i - 1]), 0.8, 0.9), cowbell(0.5)[: int(SR * 0.1)]]
    )

sounds["sfx_scatter_reveal"] = marimba_run(["A4", "E5", "A5"], 0.1, 0.9)
sounds["sfx_scatter_win"] = marimba_run(["A4", "C5", "E5", "A5"], 0.11, 1.0)
sounds["sfx_scatter_win_v2"] = soften(
    np.concatenate(
        [marimba_run(["A4", "C5", "E5", "A5", "C6"], 0.1, 1.0), marimba(note_freq("A6"), 1.2, 0.7)]
    ),
    loop=False,
)

sounds["sfx_symbols_landing"] = guacharaca(0.16, 1.2)
sounds["sfx_royals_landing"] = guacharaca(0.12, 0.9)
sounds["sfx_wild_explode"] = cork_pop(1.0)  # ¡the guaro opens!

sounds["sfx_winlevel_small"] = marimba_run(["C5", "E5"], 0.1, 0.7)
sounds["sfx_winlevel_standard"] = marimba_run(["C5", "E5", "G5"], 0.1, 0.8)
sounds["sfx_winlevel_nice"] = marimba_run(["C5", "E5", "G5", "C6"], 0.1, 0.85)
sounds["sfx_winlevel_substantial"] = marimba_run(["C5", "E5", "G5", "C6", "E6"], 0.11, 0.9)
sounds["sfx_winlevel_end"] = marimba_run(["G5", "E5", "C5"], 0.12, 0.8)

for i in range(1, 6):
    sounds[f"tumble_win_{i}"] = marimba(note_freq(scatter_scale[i - 1]) * 2, 0.7, 0.8)


# ---------- real music (Suno) overrides ----------
# If real tracks exist, they replace the synthesized music beds. Sound
# effects stay synthesized. Loops are made seamless by crossfading the
# section's end into its start.

MUSIC_DIR = Path(r"C:\Codes\colombiano imgs")


def load_track(name):
    path = MUSIC_DIR / f"{name}.mp3"
    if not path.exists():
        return None
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", str(path), "-ac", "1", "-ar", str(SR), "-f", "f32le", "pipe:1"],
        capture_output=True,
        check=True,
    ).stdout
    return np.frombuffer(raw, dtype=np.float32).astype(np.float64)


def crossfade_loop(track, start_s, length_s, fade_s=1.5):
    """Cut [start, start+length] and blend the END into the audio that
    precedes `start`, so the loop wraps smoothly while the loop's own start
    stays clean (blending at the head made the first play sound doubled)."""
    total_s = len(track) / SR
    fade_s = min(fade_s, length_s / 4)
    start_s = max(start_s, fade_s)
    start_s = min(start_s, max(total_s - length_s - 1, fade_s))
    length_s = min(length_s, total_s - start_s)
    s, L, F = int(start_s * SR), int(length_s * SR), int(fade_s * SR)
    body = track[s : s + L].copy()
    preroll = track[s - F : s]
    ramp = np.linspace(0.0, 1.0, len(preroll))
    body[L - len(preroll) :] = body[L - len(preroll) :] * (1.0 - ramp) + preroll * ramp
    return body


_main_track = load_track("bgm_main")
if _main_track is not None:
    sounds["bgm_main"] = crossfade_loop(_main_track, 4, 70)
    print("bgm_main: using real track")

_fs_track = load_track("bgm_freespin")
if _fs_track is not None:
    sounds["bgm_freespin"] = crossfade_loop(_fs_track, 4, 45)
    print("bgm_freespin: using real track")
    for _i, _name in enumerate(
        ["bgm_winlevel_big", "bgm_winlevel_superwin", "bgm_winlevel_mega", "bgm_winlevel_epic", "bgm_winlevel_max"]
    ):
        sounds[_name] = crossfade_loop(_fs_track, 55 + _i * 12, 8, 1.0)
    print("bgm_winlevel_*: derived from bonus track")


# ---------- concatenate, normalize, encode ----------

GAP = 1.0
sprite = {}
chunks = []
cursor = 0.0
for name in sorted(sounds):
    audio = sounds[name]
    peak = np.max(np.abs(audio))
    if peak > 0:
        audio = audio / peak * 0.82
    dur_ms = len(audio) / SR * 1000
    entry = [round(cursor * 1000), dur_ms]
    if name in loops:
        entry.append(True)
    sprite[name] = entry
    chunks.append(audio)
    chunks.append(silence(GAP))
    cursor += len(audio) / SR + GAP

master = np.concatenate(chunks)
master = np.clip(master, -1, 1)

BACKUP_DIR.mkdir(exist_ok=True)
for f in OUT_DIR.glob("sounds.*"):
    backup = BACKUP_DIR / f.name
    if not backup.exists():
        shutil.copy2(f, backup)

wav_path = OUT_DIR / "sounds.wav"
with wave.open(str(wav_path), "wb") as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((master * 32767).astype(np.int16).tobytes())

for args, out in [
    (["-c:a", "libvorbis", "-q:a", "5"], "sounds.ogg"),
    (["-c:a", "aac", "-b:a", "160k"], "sounds.m4a"),
    (["-c:a", "libmp3lame", "-q:a", "4"], "sounds.mp3"),
    (["-c:a", "ac3", "-b:a", "192k"], "sounds.ac3"),
]:
    subprocess.run(
        ["ffmpeg", "-y", "-i", str(wav_path), *args, str(OUT_DIR / out)],
        check=True, capture_output=True,
    )
wav_path.unlink()

config_json = {
    "sprite": sprite,
    "src": [
        "./assets/audio/sounds.ogg",
        "./assets/audio/sounds.m4a",
        "./assets/audio/sounds.mp3",
        "./assets/audio/sounds.ac3",
    ],
    "config": {name: {"volume": 1} for name in sorted(sounds)},
}
(OUT_DIR / "sounds.json").write_text(json.dumps(config_json, indent="\t"), encoding="utf-8")

total_mb = sum((OUT_DIR / f"sounds.{ext}").stat().st_size for ext in ("ogg", "m4a", "mp3", "ac3")) / 1e6
print(f"{len(sounds)} sounds, master length {len(master)/SR:.1f}s, encoded bundles {total_mb:.1f} MB total")
