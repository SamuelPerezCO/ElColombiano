"""Cut out the generated Colombian art and prepare game-ready PNGs.

- Symbols/bottles/logo: AI background removal (rembg), then trim transparent
  borders and pad to a square canvas (logo keeps its wide aspect).
- Backgrounds: converted/copied as-is (no transparency needed).
Output: web-sdk/apps/lines/src/assets/sprites/colombiano/
"""

import sys
from pathlib import Path

from PIL import Image

SRC = Path(r"C:\Codes\colombiano imgs")
OUT = Path(r"C:\Codes\el-colombiano\web-sdk\apps\lines\static\assets\sprites\colombiano")
OUT.mkdir(parents=True, exist_ok=True)

CUTOUTS = [
    "w_wild", "s_guaro",
    "h1_condor", "h2_esmeralda", "h3_sombrero", "h4_acordeon",
    "l1_cafe", "l2_arepa", "l3_chiva", "l4_mochila", "l5_lulo",
    "bottle_closed", "bottle_golden", "logo",
    "ui_plate", "ui_btn_round", "ui_btn_round_active", "ui_btn_spin",
    "ui_btn_buybonus", "ui_btn_small",
]
# Keep original aspect ratio instead of padding to a square canvas.
KEEP_ASPECT = {"logo", "ui_plate", "ui_btn_buybonus"}
BACKGROUNDS = ["bg_base", "bg_bonus", "bg_loading", "title_screen"]

SYMBOL_TARGET = 400  # px, square canvas for symbol sprites

backgrounds_only = "--backgrounds-only" in sys.argv

if not backgrounds_only:
    from rembg import remove, new_session

    session = new_session("u2net")

for name in [] if backgrounds_only else CUTOUTS:
    src = SRC / f"{name}.jpg"
    img = Image.open(src).convert("RGBA")
    cut = remove(img, session=session)

    # Trim fully transparent borders (with small margin)
    alpha = cut.getchannel("A")
    bbox = alpha.getbbox()
    if bbox:
        pad = 6
        left = max(bbox[0] - pad, 0)
        top = max(bbox[1] - pad, 0)
        right = min(bbox[2] + pad, cut.width)
        bottom = min(bbox[3] + pad, cut.height)
        cut = cut.crop((left, top, right, bottom))

    if name in KEEP_ASPECT:
        # keep aspect, just cap width
        if cut.width > 1200:
            ratio = 1200 / cut.width
            cut = cut.resize((1200, round(cut.height * ratio)), Image.LANCZOS)
        canvas = cut
    else:
        # fit into square canvas
        scale = SYMBOL_TARGET / max(cut.width, cut.height)
        new_w, new_h = round(cut.width * scale), round(cut.height * scale)
        cut = cut.resize((new_w, new_h), Image.LANCZOS)
        canvas = Image.new("RGBA", (SYMBOL_TARGET, SYMBOL_TARGET), (0, 0, 0, 0))
        canvas.paste(cut, ((SYMBOL_TARGET - new_w) // 2, (SYMBOL_TARGET - new_h) // 2), cut)

    out_path = OUT / f"{name}.png"
    canvas.save(out_path, "PNG", optimize=True)
    print(f"{name}: {canvas.size[0]}x{canvas.size[1]}  {out_path.stat().st_size // 1024} KB")

for name in BACKGROUNDS:
    src = SRC / f"{name}.jpg"
    img = Image.open(src).convert("RGB")
    if img.width > 1920:
        ratio = 1920 / img.width
        img = img.resize((1920, round(img.height * ratio)), Image.LANCZOS)
    out_path = OUT / f"{name}.jpg"
    img.save(out_path, "JPEG", quality=88)
    print(f"{name}: {img.size[0]}x{img.size[1]}  {out_path.stat().st_size // 1024} KB")

print("done")
