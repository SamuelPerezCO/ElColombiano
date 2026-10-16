"""Chroma-key the solid magenta background off tile_character.jpg."""

import numpy as np
from PIL import Image
from scipy import ndimage

SRC = r"C:\Codes\colombiano imgs\tile_character.jpg"
OUT = r"C:\Codes\colombiano imgs\tile_character.png"

img = Image.open(SRC).convert("RGB")
hsv = np.asarray(img.convert("HSV")).astype(np.int16)
h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]

# PIL hue is 0-255. Magenta family ≈ 285°-350° → ≈ 202-248.
is_magenta = (h >= 198) & (h <= 250) & (s > 70)
alpha = np.where(is_magenta, 0.0, 1.0)
# erode the keep-mask slightly then smooth, to kill magenta edge fringe
alpha = ndimage.binary_erosion(alpha.astype(bool), iterations=1).astype(np.float64)
alpha = ndimage.uniform_filter(alpha, size=3)

rgb = np.asarray(img).astype(np.uint8).copy()
# blank the color under fully transparent pixels so naive viewers don't show magenta
rgb[alpha < 0.02] = 255
out = np.dstack([rgb, (alpha * 255).astype(np.uint8)])
result = Image.fromarray(out, "RGBA")

bbox = result.getchannel("A").getbbox()
if bbox:
    pad = 8
    result = result.crop(
        (
            max(bbox[0] - pad, 0),
            max(bbox[1] - pad, 0),
            min(bbox[2] + pad, result.width),
            min(bbox[3] + pad, result.height),
        )
    )

result.save(OUT, "PNG", optimize=True)
print(f"saved {OUT}: {result.width}x{result.height}")
