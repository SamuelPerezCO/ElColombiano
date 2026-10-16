"""Remove leftover checkerboard-grey pixels from the logo cutout.

The generator painted a fake transparency checkerboard; rembg kept patches of
it between the logo's rays. Those patches are near-neutral greys - key them
out, then clear resulting speckles by eroding semi-isolated alpha.
"""

import numpy as np
from PIL import Image

PATH = r"C:\Codes\el-colombiano\web-sdk\apps\lines\static\assets\sprites\colombiano\logo.png"

img = Image.open(PATH).convert("RGBA")
arr = np.array(img).astype(np.int16)
r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]

mx = np.maximum(np.maximum(r, g), b)
mn = np.minimum(np.minimum(r, g), b)
saturation_span = mx - mn
luminance = (r + g + b) / 3

# Checker greys: neutral (low channel spread), mid luminance.
is_checker_grey = (saturation_span <= 14) & (luminance >= 95) & (luminance <= 185)

# Protect the logo core: only clear grey pixels that sit in the outer half of
# the canvas edges OR are connected to already-transparent areas. Cheap
# approximation: iteratively clear greys adjacent to transparency.
alpha = a.copy()
transparent = alpha < 40

from scipy import ndimage  # noqa: E402

for _ in range(200):
    neighbor_transparent = ndimage.binary_dilation(transparent, iterations=1)
    newly_cleared = is_checker_grey & neighbor_transparent & ~transparent
    if not newly_cleared.any():
        break
    transparent = transparent | newly_cleared

alpha[transparent] = 0
arr[..., 3] = alpha

out = Image.fromarray(arr.astype(np.uint8), "RGBA")
out.save(PATH, "PNG", optimize=True)
print(f"cleared {int(transparent.sum() - (a < 40).sum())} checker pixels")
