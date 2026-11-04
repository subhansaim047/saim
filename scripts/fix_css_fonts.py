import os
import re

CSS_DIR = "public/idreesleather/css"
FONTS_DIR = "public/idreesleather/fonts"

available_fonts = set(os.listdir(FONTS_DIR))
print("Available fonts count:", len(available_fonts))

for css_name in os.listdir(CSS_DIR):
    css_path = os.path.join(CSS_DIR, css_name)
    with open(css_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Find all url(...) in css
    urls = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', content)
    changed = False
    for u in urls:
        # Check if it matches a font
        clean_u = u.split("?")[0].split("#")[0]
        base_name = os.path.basename(clean_u)
        base_name_clean = re.sub(r'[^\w\.-]', '_', base_name)
        if base_name in available_fonts or base_name_clean in available_fonts:
            matched_font = base_name if base_name in available_fonts else base_name_clean
            new_url = f"/idreesleather/fonts/{matched_font}"
            content = content.replace(u, new_url)
            changed = True
            print(f"[{css_name}] Replaced {u} -> {new_url}")

    if changed:
        with open(css_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Saved updated {css_name}")
