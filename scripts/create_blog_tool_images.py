import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_images():
    output_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\images\blog-tools"
    os.makedirs(output_dir, exist_ok=True)
    
    scratch_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
    templates_dir = os.path.join(scratch_dir, "public", "templates")
    
    # Try fonts
    try:
        font_large = ImageFont.truetype("arialbd.ttf", 32)
        font_med = ImageFont.truetype("arialbd.ttf", 22)
        font_body = ImageFont.truetype("arial.ttf", 16)
        font_small = ImageFont.truetype("arial.ttf", 14)
        font_badge = ImageFont.truetype("arialbd.ttf", 13)
        font_bold_sm = ImageFont.truetype("arialbd.ttf", 15)
        font_fhrs_num = ImageFont.truetype("arialbd.ttf", 72)
    except:
        font_large = ImageFont.load_default()
        font_med = ImageFont.load_default()
        font_body = ImageFont.load_default()
        font_small = ImageFont.load_default()
        font_badge = ImageFont.load_default()
        font_bold_sm = ImageFont.load_default()
        font_fhrs_num = ImageFont.load_default()

    # =============================================================
    # IMAGE 1: FEATURED CARD (5-Star Food Hygiene & EHO Checklist)
    # Size: 1200 x 900 (High DPI retina)
    # =============================================================
    w1, h1 = 1200, 900
    im1 = Image.new("RGBA", (w1, h1), (246, 248, 250, 255))
    draw1 = ImageDraw.Draw(im1)
    
    # Load template-4 (Safe food prep)
    t4_path = os.path.join(templates_dir, "posters", "template-4.webp")
    if os.path.exists(t4_path):
        t4 = Image.open(t4_path).convert("RGBA")
        t4_w = 490
        t4_h = int(t4.height * (t4_w / t4.width))
        t4_resized = t4.resize((t4_w, t4_h), Image.Resampling.LANCZOS)
        
        shadow1 = Image.new("RGBA", (t4_w + 30, t4_h + 30), (0, 0, 0, 0))
        sdraw1 = ImageDraw.Draw(shadow1)
        sdraw1.rectangle([15, 15, t4_w + 15, t4_h + 15], fill=(0, 0, 0, 40))
        shadow1 = shadow1.filter(ImageFilter.GaussianBlur(14))
        im1.paste(shadow1, (55, (h1 - t4_h) // 2), shadow1)
        im1.paste(t4_resized, (70, (h1 - t4_h) // 2), t4_resized)
        
    # Right-side card
    rc1_x0, rc1_y0, rc1_x1, rc1_y1 = 610, 80, 1140, 820
    rc1_shadow = Image.new("RGBA", (rc1_x1 - rc1_x0 + 40, rc1_y1 - rc1_y0 + 40), (0, 0, 0, 0))
    rs1_draw = ImageDraw.Draw(rc1_shadow)
    rs1_draw.rounded_rectangle([20, 20, rc1_x1 - rc1_x0 + 20, rc1_y1 - rc1_y0 + 20], radius=24, fill=(0, 0, 0, 30))
    rc1_shadow = rc1_shadow.filter(ImageFilter.GaussianBlur(18))
    im1.paste(rc1_shadow, (rc1_x0 - 20, rc1_y0 - 20), rc1_shadow)
    
    draw1.rounded_rectangle([rc1_x0, rc1_y0, rc1_x1, rc1_y1], radius=24, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    
    # Badge
    draw1.rounded_rectangle([rc1_x0 + 30, rc1_y0 + 30, rc1_x0 + 230, rc1_y0 + 66], radius=18, fill=(16, 185, 129, 255))
    draw1.text((rc1_x0 + 48, rc1_y0 + 39), "UK EHO AUDIT READY", fill=(255, 255, 255, 255), font=font_badge)
    
    draw1.text((rc1_x0 + 30, rc1_y0 + 86), "Food Hygiene Rating", fill=(15, 23, 42, 255), font=font_large)
    draw1.text((rc1_x0 + 30, rc1_y0 + 128), "Official Inspection Checklist & Standards", fill=(100, 116, 139, 255), font=font_body)
    
    # FHRS 5 Badge
    b1_y = rc1_y0 + 175
    draw1.rounded_rectangle([rc1_x0 + 30, b1_y, rc1_x1 - 30, b1_y + 140], radius=16, fill=(240, 253, 244, 255), outline=(187, 247, 208, 255), width=2)
    draw1.ellipse([rc1_x0 + 50, b1_y + 20, rc1_x0 + 150, b1_y + 120], fill=(16, 185, 129, 255))
    draw1.text((rc1_x0 + 80, b1_y + 30), "5", fill=(255, 255, 255, 255), font=font_fhrs_num)
    
    draw1.text((rc1_x0 + 175, b1_y + 28), "VERY GOOD (5/5)", fill=(6, 95, 70, 255), font=font_med)
    draw1.text((rc1_x0 + 175, b1_y + 65), "Food Standards Agency", fill=(15, 23, 42, 255), font=font_body)
    draw1.text((rc1_x0 + 175, b1_y + 92), "Maximum Statutory Hygiene Score", fill=(100, 116, 139, 255), font=font_small)
    
    # Checkmarks
    items1 = [
        ("Hygienic Food Handling", "Cook, Clean, Separate & Temperature Logs"),
        ("Cleanliness & Structure", "BS EN 1276 Sanitised, Fly Screens Intact"),
        ("Management & HACCP", "SFBB Logs & Daily Opening/Closing Checks")
    ]
    row1_y = b1_y + 170
    for title, desc in items1:
        draw1.ellipse([rc1_x0 + 35, row1_y + 4, rc1_x0 + 59, row1_y + 28], fill=(16, 185, 129))
        draw1.line([rc1_x0 + 41, row1_y + 16, rc1_x0 + 46, row1_y + 22], fill=(255, 255, 255), width=3)
        draw1.line([rc1_x0 + 46, row1_y + 22, rc1_x0 + 54, row1_y + 10], fill=(255, 255, 255), width=3)
        draw1.text((rc1_x0 + 75, row1_y + 2), title, fill=(15, 23, 42, 255), font=font_med)
        draw1.text((rc1_x0 + 75, row1_y + 28), desc, fill=(100, 116, 139, 255), font=font_body)
        row1_y += 72

    im1.convert("RGB").save(os.path.join(output_dir, "tool-1-fhrs-hygiene.webp"), "WEBP", quality=92)
    print("Generated tool-1-fhrs-hygiene.webp")

    # =============================================================
    # IMAGE 2: GRID CARD 1 (Natasha's Law PPDS Label Generator)
    # Size: 1200 x 750 (16:10 aspect ratio)
    # =============================================================
    w2, h2 = 1200, 750
    im2 = Image.new("RGBA", (w2, h2), (244, 246, 249, 255))
    draw2 = ImageDraw.Draw(im2)
    
    # Left Side: Realistic PPDS Food Label Sticker Mockup
    lbl_x0, lbl_y0, lbl_x1, lbl_y1 = 60, 50, 560, 700
    lbl_shadow = Image.new("RGBA", (lbl_x1 - lbl_x0 + 30, lbl_y1 - lbl_y0 + 30), (0, 0, 0, 0))
    ls_draw = ImageDraw.Draw(lbl_shadow)
    ls_draw.rounded_rectangle([15, 15, lbl_x1 - lbl_x0 + 15, lbl_y1 - lbl_y0 + 15], radius=16, fill=(0, 0, 0, 35))
    lbl_shadow = lbl_shadow.filter(ImageFilter.GaussianBlur(14))
    im2.paste(lbl_shadow, (lbl_x0 - 15, lbl_y0 - 15), lbl_shadow)
    
    draw2.rounded_rectangle([lbl_x0, lbl_y0, lbl_x1, lbl_y1], radius=16, fill=(255, 255, 255, 255), outline=(203, 213, 225, 255), width=2)
    
    # Label Header
    draw2.rounded_rectangle([lbl_x0 + 20, lbl_y0 + 20, lbl_x1 - 20, lbl_y0 + 55], radius=6, fill=(15, 23, 42, 255))
    draw2.text((lbl_x0 + 35, lbl_y0 + 29), "PPDS MANDATORY COMPLIANCE LABEL", fill=(255, 255, 255), font=font_badge)
    
    # Food Item Name
    draw2.text((lbl_x0 + 20, lbl_y0 + 72), "HAM & CHEDDAR BAGUETTE", fill=(15, 23, 42, 255), font=font_med)
    draw2.line([lbl_x0 + 20, lbl_y0 + 110, lbl_x1 - 20, lbl_y0 + 110], fill=(226, 232, 240, 255), width=2)
    
    # Ingredients List Header
    draw2.text((lbl_x0 + 20, lbl_y0 + 125), "Full Ingredients List (Allergens in BOLD):", fill=(71, 85, 105, 255), font=font_small)
    
    ing_lines = [
        "White Artisan Baguette [WHEAT FLOUR (with Calcium,",
        "Iron, Niacin, Thiamin), Water, Yeast, Salt, Rapeseed Oil],",
        "Honey Roast British Ham (34%) [Pork (95%), Honey,",
        "Demerara Sugar, Salt, Preservative (Sodium Nitrite)],",
        "Mature Farmhouse Cheddar Cheese (22%) [MILK],",
        "Salted Country Butter [MILK, Salt]."
    ]
    ing_text = "\n".join(ing_lines)
    draw2.multiline_text((lbl_x0 + 20, lbl_y0 + 155), ing_text, fill=(30, 41, 59, 255), font=font_body, spacing=7)
    
    # Allergen Warning Box
    draw2.rounded_rectangle([lbl_x0 + 20, lbl_y0 + 350, lbl_x1 - 20, lbl_y0 + 445], radius=10, fill=(254, 242, 242, 255), outline=(254, 202, 202, 255), width=2)
    draw2.text((lbl_x0 + 35, lbl_y0 + 365), "ALLERGEN ADVICE:", fill=(185, 28, 28, 255), font=font_bold_sm)
    draw2.text((lbl_x0 + 35, lbl_y0 + 390), "For allergens, see ingredients in BOLD.", fill=(153, 27, 27, 255), font=font_small)
    draw2.text((lbl_x0 + 35, lbl_y0 + 412), "Contains: WHEAT (GLUTEN), MILK.", fill=(185, 28, 28, 255), font=font_bold_sm)
    
    # Footer Details
    draw2.line([lbl_x0 + 20, lbl_y0 + 468, lbl_x1 - 20, lbl_y0 + 468], fill=(226, 232, 240, 255), width=2)
    draw2.text((lbl_x0 + 20, lbl_y0 + 488), "USE BY: 29 OCT 2026", fill=(15, 23, 42, 255), font=font_bold_sm)
    draw2.text((lbl_x0 + 20, lbl_y0 + 518), "Keep refrigerated below 5°C", fill=(100, 116, 139, 255), font=font_small)
    draw2.text((lbl_x0 + 20, lbl_y0 + 542), "Net Weight: 245g e", fill=(15, 23, 42, 255), font=font_bold_sm)
    
    # Right Side: Interactive Tool Generator Interface Mockup
    g2_x0, g2_y0, g2_x1, g2_y1 = 600, 50, 1140, 700
    g2_shadow = Image.new("RGBA", (g2_x1 - g2_x0 + 30, g2_y1 - g2_y0 + 30), (0, 0, 0, 0))
    gs2_draw = ImageDraw.Draw(g2_shadow)
    gs2_draw.rounded_rectangle([15, 15, g2_x1 - g2_x0 + 15, g2_y1 - g2_y0 + 15], radius=24, fill=(0, 0, 0, 25))
    g2_shadow = g2_shadow.filter(ImageFilter.GaussianBlur(16))
    im2.paste(g2_shadow, (g2_x0 - 15, g2_y0 - 15), g2_shadow)
    
    draw2.rounded_rectangle([g2_x0, g2_y0, g2_x1, g2_y1], radius=24, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    
    # Tool Badge
    draw2.rounded_rectangle([g2_x0 + 30, g2_y0 + 30, g2_x0 + 280, g2_y0 + 66], radius=18, fill=(239, 68, 68, 255))
    draw2.text((g2_x0 + 46, g2_y0 + 39), "FREE DIGITAL COMPLIANCE TOOL", fill=(255, 255, 255), font=font_badge)
    
    draw2.text((g2_x0 + 30, g2_y0 + 86), "PPDS Label Generator", fill=(15, 23, 42, 255), font=font_large)
    draw2.text((g2_x0 + 30, g2_y0 + 128), "Automated 14-Allergen Bolding Under Natasha's Law", fill=(100, 116, 139, 255), font=font_body)
    
    # Preset Cards
    p_box_y = g2_y0 + 180
    presets = [
        ("Pre-packed Sandwiches", "Classic Ham & Mature Cheddar Baguette"),
        ("Grab & Go Salads", "Coronation Chicken & Baby Spinach Bowl"),
        ("Baked Artisan Goods", "Triple Chocolate Bakery Cookie")
    ]
    for cat, item in presets:
        draw2.rounded_rectangle([g2_x0 + 30, p_box_y, g2_x1 - 30, p_box_y + 75], radius=12, fill=(248, 250, 252, 255), outline=(226, 232, 240, 255), width=1)
        draw2.text((g2_x0 + 50, p_box_y + 14), cat, fill=(100, 116, 139, 255), font=font_small)
        draw2.text((g2_x0 + 50, p_box_y + 38), item, fill=(15, 23, 42, 255), font=font_med)
        p_box_y += 90
        
    # Print Action Button Mockup
    btn_y = g2_y1 - 90
    draw2.rounded_rectangle([g2_x0 + 30, btn_y, g2_x1 - 30, btn_y + 55], radius=14, fill=(15, 23, 42, 255))
    draw2.text((g2_x0 + 140, btn_y + 16), "Print A4 Label Sheets (PDF)", fill=(255, 255, 255), font=font_med)

    im2.convert("RGB").save(os.path.join(output_dir, "tool-2-ppds-generator.webp"), "WEBP", quality=92)
    print("Generated tool-2-ppds-generator.webp")

    # =============================================================
    # IMAGE 3: GRID CARD 2 (Commercial Kitchen Food Cooling Guide)
    # Size: 1200 x 750 (16:10 aspect ratio)
    # =============================================================
    w3, h3 = 1200, 750
    im3 = Image.new("RGBA", (w3, h3), (244, 247, 250, 255))
    draw3 = ImageDraw.Draw(im3)
    
    t93_path = os.path.join(templates_dir, "posters", "template-93.webp")
    if os.path.exists(t93_path):
        t93 = Image.open(t93_path).convert("RGBA")
        t93_w = 460
        t93_h = int(t93.height * (t93_w / t93.width))
        t93_resized = t93.resize((t93_w, t93_h), Image.Resampling.LANCZOS)
        
        shadow3 = Image.new("RGBA", (t93_w + 30, t93_h + 30), (0, 0, 0, 0))
        sdraw3 = ImageDraw.Draw(shadow3)
        sdraw3.rectangle([15, 15, t93_w + 15, t93_h + 15], fill=(0, 0, 0, 35))
        shadow3 = shadow3.filter(ImageFilter.GaussianBlur(14))
        im3.paste(shadow3, (55, 45), shadow3)
        im3.paste(t93_resized, (70, 60), t93_resized)
        
    # Right Side: UK 90-Minute Rule & Danger Zone Diagram
    r3_x0, r3_y0, r3_x1, r3_y1 = 580, 50, 1140, 700
    r3_shadow = Image.new("RGBA", (r3_x1 - r3_x0 + 30, r3_y1 - r3_y0 + 30), (0, 0, 0, 0))
    rs3_draw = ImageDraw.Draw(r3_shadow)
    rs3_draw.rounded_rectangle([15, 15, r3_x1 - r3_x0 + 15, r3_y1 - r3_y0 + 15], radius=24, fill=(0, 0, 0, 25))
    r3_shadow = r3_shadow.filter(ImageFilter.GaussianBlur(16))
    im3.paste(r3_shadow, (r3_x0 - 15, r3_y0 - 15), r3_shadow)
    
    draw3.rounded_rectangle([r3_x0, r3_y0, r3_x1, r3_y1], radius=24, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    
    draw3.rounded_rectangle([r3_x0 + 30, r3_y0 + 30, r3_x0 + 260, r3_y0 + 66], radius=18, fill=(59, 130, 246, 255))
    draw3.text((r3_x0 + 46, r3_y0 + 39), "UK 90-MINUTE RULE GUIDE", fill=(255, 255, 255), font=font_badge)
    
    draw3.text((r3_x0 + 30, r3_y0 + 86), "Food Cooling Limits", fill=(15, 23, 42, 255), font=font_large)
    draw3.text((r3_x0 + 30, r3_y0 + 128), "Two-Stage Chilling Temperature Protocol", fill=(100, 116, 139, 255), font=font_body)
    
    # Stage 1 Box
    s1_y = r3_y0 + 175
    draw3.rounded_rectangle([r3_x0 + 30, s1_y, r3_x1 - 30, s1_y + 110], radius=16, fill=(239, 246, 255, 255), outline=(191, 219, 254, 255), width=2)
    draw3.text((r3_x0 + 50, s1_y + 20), "Stage 1: 57°C down to 21°C", fill=(30, 64, 175, 255), font=font_med)
    draw3.text((r3_x0 + 50, s1_y + 55), "Rapid cooling within 2 Hours maximum (90-min target)", fill=(71, 85, 105, 255), font=font_body)
    
    # Stage 2 Box
    s2_y = s1_y + 130
    draw3.rounded_rectangle([r3_x0 + 30, s2_y, r3_x1 - 30, s2_y + 110], radius=16, fill=(240, 253, 250, 255), outline=(153, 246, 228, 255), width=2)
    draw3.text((r3_x0 + 50, s2_y + 20), "Stage 2: 21°C down to <= 5°C", fill=(15, 118, 110, 255), font=font_med)
    draw3.text((r3_x0 + 50, s2_y + 55), "Chilled inside cold room within 4 Hours (Total <= 6h)", fill=(71, 85, 105, 255), font=font_body)
    
    # Danger Zone Notice
    dz_y = s2_y + 130
    draw3.rounded_rectangle([r3_x0 + 30, dz_y, r3_x1 - 30, dz_y + 80], radius=14, fill=(254, 242, 242, 255), outline=(254, 202, 202, 255), width=1)
    draw3.text((r3_x0 + 50, dz_y + 16), "Danger Zone (8°C to 63°C) Minimized Rapidly", fill=(220, 38, 38, 255), font=font_bold_sm)
    draw3.text((r3_x0 + 50, dz_y + 44), "Prevents Bacillus cereus and bacterial spore germination", fill=(127, 29, 29, 255), font=font_small)

    im3.convert("RGB").save(os.path.join(output_dir, "tool-3-cooling-guide.webp"), "WEBP", quality=92)
    print("Generated tool-3-cooling-guide.webp")

    # =============================================================
    # IMAGE 4: GRID CARD 3 (14-Allergen Matrix Generator & Chart)
    # Size: 1200 x 750 (16:10 aspect ratio)
    # =============================================================
    w4, h4 = 1200, 750
    im4 = Image.new("RGBA", (w4, h4), (247, 246, 250, 255))
    draw4 = ImageDraw.Draw(im4)
    
    # Left Side: Top 14 Food Allergens Chart (template-5)
    t5_path = os.path.join(templates_dir, "charts", "template-5.webp")
    if os.path.exists(t5_path):
        t5 = Image.open(t5_path).convert("RGBA")
        t5_w = 460
        t5_h = int(t5.height * (t5_w / t5.width))
        t5_resized = t5.resize((t5_w, t5_h), Image.Resampling.LANCZOS)
        
        shadow4 = Image.new("RGBA", (t5_w + 30, t5_h + 30), (0, 0, 0, 0))
        sdraw4 = ImageDraw.Draw(shadow4)
        sdraw4.rectangle([15, 15, t5_w + 15, t5_h + 15], fill=(0, 0, 0, 35))
        shadow4 = shadow4.filter(ImageFilter.GaussianBlur(14))
        im4.paste(shadow4, (55, 45), shadow4)
        im4.paste(t5_resized, (70, 60), t5_resized)
        
    # Right Side: Interactive 14-Allergen Matrix Tool Grid
    r4_x0, r4_y0, r4_x1, r4_y1 = 580, 50, 1140, 700
    r4_shadow = Image.new("RGBA", (r4_x1 - r4_x0 + 30, r4_y1 - r4_y0 + 30), (0, 0, 0, 0))
    rs4_draw = ImageDraw.Draw(r4_shadow)
    rs4_draw.rounded_rectangle([15, 15, r4_x1 - r4_x0 + 15, r4_y1 - r4_y0 + 15], radius=24, fill=(0, 0, 0, 25))
    r4_shadow = r4_shadow.filter(ImageFilter.GaussianBlur(16))
    im4.paste(r4_shadow, (r4_x0 - 15, r4_y0 - 15), r4_shadow)
    
    draw4.rounded_rectangle([r4_x0, r4_y0, r4_x1, r4_y1], radius=24, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    
    draw4.rounded_rectangle([r4_x0 + 30, r4_y0 + 30, r4_x0 + 260, r4_y0 + 66], radius=18, fill=(125, 26, 74, 255))
    draw4.text((r4_x0 + 46, r4_y0 + 39), "14-ALLERGEN MATRIX TOOL", fill=(255, 255, 255), font=font_badge)
    
    draw4.text((r4_x0 + 30, r4_y0 + 86), "Interactive Allergen Matrix", fill=(15, 23, 42, 255), font=font_large)
    draw4.text((r4_x0 + 30, r4_y0 + 128), "Kitchen Dish Audit & Cross-Contact Compliance", fill=(100, 116, 139, 255), font=font_body)
    
    # Table Matrix Mockup Header
    tbl_y = r4_y0 + 180
    draw4.rounded_rectangle([r4_x0 + 30, tbl_y, r4_x1 - 30, tbl_y + 40], radius=8, fill=(241, 245, 249, 255))
    draw4.text((r4_x0 + 45, tbl_y + 10), "Menu Dish", fill=(71, 85, 105, 255), font=font_bold_sm)
    draw4.text((r4_x0 + 230, tbl_y + 10), "Gluten", fill=(71, 85, 105, 255), font=font_bold_sm)
    draw4.text((r4_x0 + 310, tbl_y + 10), "Dairy", fill=(71, 85, 105, 255), font=font_bold_sm)
    draw4.text((r4_x0 + 380, tbl_y + 10), "Eggs", fill=(71, 85, 105, 255), font=font_bold_sm)
    draw4.text((r4_x0 + 450, tbl_y + 10), "Nuts", fill=(71, 85, 105, 255), font=font_bold_sm)
    
    matrix_rows = [
        ("Chicken Tikka Masala", "Free", "YES (Milk)", "Free", "MAY (Almond)"),
        ("Crispy Tempura Prawns", "YES (Wheat)", "Free", "YES (Egg)", "Free"),
        ("Vegan Falafel Wrap", "YES (Wheat)", "Free", "Free", "MAY (Sesame)"),
        ("Classic Margherita Pizza", "YES (Wheat)", "YES (Cheese)", "Free", "Free")
    ]
    row_my = tbl_y + 50
    for dish, g, d, e, n in matrix_rows:
        draw4.line([r4_x0 + 30, row_my, r4_x1 - 30, row_my], fill=(241, 245, 249, 255), width=1)
        draw4.text((r4_x0 + 45, row_my + 10), dish, fill=(15, 23, 42, 255), font=font_small)
        
        # Color badges for status
        for col_idx, (val, x_pos) in enumerate([(g, r4_x0 + 230), (d, r4_x0 + 310), (e, r4_x0 + 380), (n, r4_x0 + 450)]):
            is_yes = "YES" in val
            is_may = "MAY" in val
            bg = (254, 242, 242) if is_yes else ((254, 252, 232) if is_may else (240, 253, 244))
            fg = (185, 28, 28) if is_yes else ((161, 98, 7) if is_may else (22, 101, 52))
            
            draw4.rounded_rectangle([x_pos - 8, row_my + 6, x_pos + 60, row_my + 32], radius=6, fill=bg)
            draw4.text((x_pos - 2, row_my + 10), "YES" if is_yes else ("MAY" if is_may else "NO"), fill=fg, font=font_bold_sm)
            
        row_my += 55

    # Export Button Mockup
    btn4_y = r4_y1 - 90
    draw4.rounded_rectangle([r4_x0 + 30, btn4_y, r4_x1 - 30, btn4_y + 55], radius=14, fill=(125, 26, 74, 255))
    draw4.text((r4_x0 + 80, btn4_y + 16), "Export Kitchen Allergen Matrix (PDF/Excel)", fill=(255, 255, 255), font=font_med)

    im4.convert("RGB").save(os.path.join(output_dir, "tool-4-allergen-matrix.webp"), "WEBP", quality=92)
    print("Generated tool-4-allergen-matrix.webp")

if __name__ == "__main__":
    create_images()
