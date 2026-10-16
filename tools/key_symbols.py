"""Cut the background off the symbol set.

Most symbols were generated on flat magenta and are chroma-keyed. Replacement
art that arrived on other plain backgrounds is flood-filled from the border.

Usage: key_symbols.py [symbol ...]   (no args = all symbols + logo)
"""

import sys

import numpy as np
from PIL import Image
from scipy import ndimage

SRC = r"C:\Codes\colombiano imgs"
OUT = r"C:\Codes\el-colombiano\web-sdk\apps\lines\static\assets\sprites\colombiano"

SYMBOLS = [
    "w_wild", "s_guaro",
    "h1_condor", "h2_esmeralda", "h3_sombrero", "h4_acordeon",
    "l1_cafe", "l2_arepa", "l3_chiva", "l4_mochila", "l5_lulo",
]
SYMBOL_CANVAS = 512  # was 400


def finish(img, keep):
    # pull the edge in by a pixel, then soften, to remove background fringing
    alpha = ndimage.binary_erosion(keep, iterations=1).astype(np.float64)
    alpha = ndimage.uniform_filter(alpha, size=3)

    rgb = np.asarray(img).astype(np.uint8).copy()
    rgb[alpha < 0.02] = 255
    out = Image.fromarray(np.dstack([rgb, (alpha * 255).astype(np.uint8)]), "RGBA")

    bbox = out.getchannel("A").getbbox()
    if bbox:
        pad = 6
        out = out.crop((
            max(bbox[0] - pad, 0), max(bbox[1] - pad, 0),
            min(bbox[2] + pad, out.width), min(bbox[3] + pad, out.height),
        ))
    return out


def border_flood(candidate):
    # only background connected to the image border, so enclosed areas are kept
    labels, _ = ndimage.label(candidate)
    edge = np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]])
    return np.isin(labels, np.unique(edge[edge > 0]))


def key_magenta(path):
    img = Image.open(path).convert("RGB")
    hsv = np.asarray(img.convert("HSV")).astype(np.int16)
    h, s = hsv[..., 0], hsv[..., 1]

    # PIL hue is 0-255; the generated magenta sits around 222-232.
    is_bg = (h >= 198) & (h <= 250) & (s > 70)
    return finish(img, ~is_bg)


def key_white(path):
    img = Image.open(path).convert("RGB")
    rgb = np.asarray(img).astype(np.int16)
    lo = rgb.min(axis=2)
    hi = rgb.max(axis=2)
    sat = (hi - lo) / np.maximum(hi, 1)

    paper = (lo > 170) & (hi - lo < 40)
    # Drop shadows are dull and sit under the subject: only accept them below the
    # lowest saturated pixel of each column, so pale highlights higher up survive.
    core = sat > 0.5
    lowest = np.where(core.any(axis=0), core.shape[0] - 1 - np.argmax(core[::-1], axis=0), -1)
    below = np.arange(core.shape[0])[:, None] > lowest[None, :]
    shadow = below & (sat < 0.45) & (hi > 120)
    return finish(img, ~border_flood(paper | shadow))


def key_yellow(path):
    img = Image.open(path).convert("RGB")
    rgb = np.asarray(img).astype(np.int16)
    edge = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
    bg = np.median(edge, axis=0)
    is_bg = border_flood(np.abs(rgb - bg).max(axis=2) < 60)

    # yellow bleeds into anti-aliased edge pixels; the subject is neutral, so cap
    # red and green just above blue in a thin band along the cut
    band = ndimage.binary_dilation(is_bg, iterations=3) & ~is_bg
    cap = rgb[..., 2] + 25
    for c in (0, 1):
        rgb[..., c] = np.where(band, np.minimum(rgb[..., c], cap), rgb[..., c])
    return finish(Image.fromarray(rgb.astype(np.uint8)), ~is_bg)


REPLACEMENTS = {
    "l1_cafe": ("coffee 2.jpg", key_white),
    "h2_esmeralda": ("gema 2.jpg", key_white),
    "h3_sombrero": ("Hat 2.jpg", key_yellow),
}

names = sys.argv[1:] or SYMBOLS
for name in names:
    if name in REPLACEMENTS:
        file, keyer = REPLACEMENTS[name]
        cut = keyer(rf"{SRC}\{file}")
    else:
        cut = key_magenta(rf"{SRC}\{name}.jpg")
    scale = SYMBOL_CANVAS / max(cut.width, cut.height)
    w, h = round(cut.width * scale), round(cut.height * scale)
    cut = cut.resize((w, h), Image.LANCZOS)
    canvas = Image.new("RGBA", (SYMBOL_CANVAS, SYMBOL_CANVAS), (0, 0, 0, 0))
    canvas.paste(cut, ((SYMBOL_CANVAS - w) // 2, (SYMBOL_CANVAS - h) // 2), cut)
    path = rf"{OUT}\{name}.png"
    canvas.save(path, "PNG", optimize=True)
    opaque = (np.asarray(canvas.getchannel("A")) > 200).mean()
    print(f"{name:<14} {canvas.width}x{canvas.height}  subject {opaque*100:5.1f}%")

# the logo gets a separate clean_logo.py pass afterwards, so only redo it on a full run
if not sys.argv[1:]:
    logo = key_magenta(rf"{SRC}\logo.jpg")
    if logo.width > 1200:
        r = 1200 / logo.width
        logo = logo.resize((1200, round(logo.height * r)), Image.LANCZOS)
    logo.save(rf"{OUT}\logo.png", "PNG", optimize=True)
    print(f"{'logo':<14} {logo.width}x{logo.height}")
