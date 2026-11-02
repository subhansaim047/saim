from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630

# Colors (Tailwind Dark Theme: Slate-950, Slate-800, Emerald/Blue accents)
BG_COLOR = (11, 15, 25) # #0B0F19
CARD_BG = (17, 24, 39) # #111827
BORDER_COLOR = (31, 41, 55) # #1F2937
ACCENT_COLOR = (59, 130, 246) # #3B82F6 Blue
TEXT_PRIMARY = (255, 255, 255)
TEXT_SECONDARY = (156, 163, 175) # #9CA3AF
TEXT_MUTED = (107, 114, 128) # #6B7280

FONT_DIR = r"C:\Windows\Fonts"
font_title = ImageFont.truetype(os.path.join(FONT_DIR, "segoeuib.ttf"), 52)
font_subtitle = ImageFont.truetype(os.path.join(FONT_DIR, "segoeui.ttf"), 26)
font_badge = ImageFont.truetype(os.path.join(FONT_DIR, "segoeuib.ttf"), 20)
font_brand = ImageFont.truetype(os.path.join(FONT_DIR, "segoeuib.ttf"), 24)
font_url = ImageFont.truetype(os.path.join(FONT_DIR, "segoeui.ttf"), 20)

configs = [
    {
        "filename": "og-tools.png",
        "badge": "UK COMMERCIAL KITCHEN TOOLS",
        "badge_color": (16, 185, 129), # Emerald-500
        "title": "Kitchen Tools & Food Safety\nTemplates Hub",
        "subtitle": "Free 14-allergen matrices, Natasha's Law PPDS label makers, food cost\ncalculators, and SFBB opening & closing temperature logs.",
        "url_path": "saimdev.site/tools"
    },
    {
        "filename": "og-services.png",
        "badge": "NEXT.JS WEB DEVELOPMENT",
        "badge_color": (59, 130, 246), # Blue-500
        "title": "Fixed-Price Next.js Web Development\nfor UK Businesses",
        "subtitle": "Bespoke high-performance websites and online ordering systems from £250.\nSub-second load times, clean code ownership, zero agency lock-in.",
        "url_path": "saimdev.site/services"
    },
    {
        "filename": "og-demos.png",
        "badge": "LIVE INTERACTIVE DEMOS",
        "badge_color": (168, 85, 247), # Purple-500
        "title": "Takeaway Ordering Systems &\nWebsite Demos",
        "subtitle": "Explore interactive digital menus, online ordering workflows, allergen filters,\nand WhatsApp kitchen dispatch built with modern Next.js.",
        "url_path": "saimdev.site/demos"
    },
    {
        "filename": "og-contact.png",
        "badge": "DIRECT DEVELOPER CONSULTATION",
        "badge_color": (245, 158, 11), # Amber-500
        "title": "Contact Saim Dev\nWebsite Project Consultation",
        "subtitle": "Get a fixed-price quote for your UK small-business website within 24 hours.\nDirect communication via WhatsApp or fast project enquiry form.",
        "url_path": "saimdev.site/contact"
    }
]

out_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public"

for cfg in configs:
    img = Image.new("RGB", (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)

    # Decorative background grid / subtle border box
    draw.rectangle([40, 40, W - 40, H - 40], outline=BORDER_COLOR, width=2)
    draw.rectangle([42, 42, W - 42, H - 42], fill=CARD_BG)

    # Top accent line
    draw.line([42, 42, W - 42, 42], fill=cfg["badge_color"], width=4)

    # Header / Brand row
    brand_text = "SAIM DEV"
    draw.text((90, 85), brand_text, font=font_brand, fill=TEXT_PRIMARY)
    draw.text((215, 87), "· Studio", font=font_subtitle, fill=TEXT_MUTED)

    # Category Pill / Badge
    badge_text = f"  {cfg['badge']}  "
    bbox = font_badge.getbbox(badge_text)
    bw, bh = bbox[2] - bbox[0] + 16, bbox[3] - bbox[1] + 10
    bx, by = 90, 160
    draw.rounded_rectangle([bx, by, bx + bw, by + bh], radius=6, fill=(31, 41, 55), outline=cfg["badge_color"], width=1)
    draw.text((bx + 8, by + 4), badge_text, font=font_badge, fill=cfg["badge_color"])

    # Main Title
    draw.text((90, 240), cfg["title"], font=font_title, fill=TEXT_PRIMARY, spacing=14)

    # Subtitle
    draw.text((90, 410), cfg["subtitle"], font=font_subtitle, fill=TEXT_SECONDARY, spacing=10)

    # Bottom Footer Divider & URL
    draw.line([90, 520, W - 90, 520], fill=BORDER_COLOR, width=1)
    draw.text((90, 545), "https://" + cfg["url_path"], font=font_url, fill=TEXT_MUTED)
    draw.text((W - 320, 545), "UK & EU Client Delivery", font=font_url, fill=TEXT_MUTED)

    save_path = os.path.join(out_dir, cfg["filename"])
    img.save(save_path, "PNG", optimize=True)
    print(f"Generated: {save_path} ({os.path.getsize(save_path)} bytes)")

