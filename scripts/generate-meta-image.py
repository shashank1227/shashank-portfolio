#!/usr/bin/env python3
"""Compose a light-theme OG image with a non-stretched circular profile photo."""

from pathlib import Path
from typing import Union

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PROFILE = ROOT / "public" / "profile.jpg"
OUT = ROOT / "public" / "meta-image-v4.png"

W, H = 1200, 630
BG = (243, 226, 138)  # #f3e28a
TEXT = (10, 9, 6)  # #0a0906
ACCENT = (92, 66, 0)  # #5c4200
MUTED = (58, 52, 36)  # #3a3424


def load_font(size: int, bold: bool = False) -> Union[ImageFont.FreeTypeFont, ImageFont.ImageFont]:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def circular_avatar(src: Path, size: int, border: int = 10) -> Image.Image:
    img = Image.open(src).convert("RGBA")
    # Keep aspect ratio: center-crop to square, never stretch
    side = min(img.width, img.height)
    left = (img.width - side) // 2
    top = (img.height - side) // 2
    img = img.crop((left, top, left + side, top + side)).resize((size, size), Image.Resampling.LANCZOS)

    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)

    avatar = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    avatar.paste(img, (0, 0), mask)

    outer = size + border * 2
    ring = Image.new("RGBA", (outer, outer), (0, 0, 0, 0))
    draw = ImageDraw.Draw(ring)
    draw.ellipse((0, 0, outer - 1, outer - 1), fill=ACCENT + (255,))
    ring.paste(avatar, (border, border), avatar)
    return ring


def main() -> None:
    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)

    # Soft atmosphere orbs
    orb = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    orb_draw = ImageDraw.Draw(orb)
    orb_draw.ellipse((820, -180, 1280, 280), fill=(255, 255, 255, 70))
    orb_draw.ellipse((-160, 360, 280, 800), fill=(255, 244, 184, 110))
    orb = orb.filter(ImageFilter.GaussianBlur(40))
    canvas = Image.alpha_composite(canvas.convert("RGBA"), orb).convert("RGB")
    draw = ImageDraw.Draw(canvas)

    # Accent slash
    #draw.rounded_rectangle((1120, 110, 1128, 280), radius=4, fill=ACCENT)

    avatar = circular_avatar(PROFILE, 220, border=12)
    canvas.paste(avatar, (90, (H - avatar.height) // 2), avatar)

    font_name = load_font(64, bold=True)
    font_role = load_font(30, bold=False)
    font_stack = load_font(24, bold=False)
    font_tag = load_font(22, bold=False)

    text_x = 420
    y = 165

    # Name with accent middle word
    draw.text((text_x, y), "Shashank ", font=font_name, fill=TEXT)
    w1 = draw.textlength("Shashank ", font=font_name)
    draw.text((text_x + w1, y), "Shekhar", font=font_name, fill=ACCENT)
    w2 = draw.textlength("Shekhar", font=font_name)
    draw.text((text_x + w1 + w2, y), " Singh", font=font_name, fill=TEXT)

    y += 90
    draw.text((text_x, y), "Senior Software Engineer", font=font_role, fill=ACCENT)
    y += 52
    draw.text(
        (text_x, y),
        "React  •  TypeScript  •  Node.js  •  Java  •  Spring Boot  •  AI/LLM",
        font=font_stack,
        fill=MUTED,
    )
    y += 48
    draw.text(
        (text_x, y),
        "Building scalable products and AI-enabled experiences",
        font=font_tag,
        fill=MUTED,
    )

    canvas.save(OUT, format="PNG", optimize=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
