import os
import re
from bs4 import BeautifulSoup

RAW_PATH = "audit/idrees_raw.html"
OUT_PATH = "public/idreesleather/index.html"
FONTS_DIR = "public/idreesleather/fonts"
IMAGES_DIR = "public/idreesleather/images"
JS_DIR = "public/idreesleather/js"
CSS_DIR = "public/idreesleather/css"

available_fonts = set(os.listdir(FONTS_DIR))
available_images = set(os.listdir(IMAGES_DIR))
available_js = set(os.listdir(JS_DIR))
available_css = set(os.listdir(CSS_DIR))

print(f"Available assets: {len(available_fonts)} fonts, {len(available_images)} images, {len(available_js)} js, {len(available_css)} css")

with open(RAW_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Strip integrity attributes everywhere
html = re.sub(r'\s+integrity="[^"]*"', '', html)
html = re.sub(r"\s+integrity='[^']*'", '', html)

# 2. Rewrite font URLs in CSS & inline style blocks
for font_file in available_fonts:
    # Match any url ending with this font_file, possibly preceded by cdn... or //idreesleather.com/...
    pattern = rf'[\'\"]?(?:https?:)?//[^\'\"\(\)]*?/{re.escape(font_file)}(?:\?[^\'\"\(\)]*)?[\'\"]?'
    html = re.sub(pattern, f'"/idreesleather/fonts/{font_file}"', html)

# Also check for Shopify fonts like GTStandard-MRegular.woff2
for font_file in available_fonts:
    html = html.replace(f"https://cdn.shopify.com/shop-assets/static_uploads/shoplift/{font_file}", f"/idreesleather/fonts/{font_file}")
    html = html.replace(f"//idreesleather.com/cdn/fonts/inter/{font_file}", f"/idreesleather/fonts/{font_file}")
    html = html.replace(f"//idreesleather.com/cdn/fonts/playfair_display/{font_file}", f"/idreesleather/fonts/{font_file}")

# 3. Rewrite CSS links
soup = BeautifulSoup(html, "html.parser")

for link in soup.find_all("link", rel=lambda r: r and "stylesheet" in r):
    href = link.get("href", "")
    base_name = href.split("?")[0].split("/")[-1]
    clean_base = re.sub(r'[^\w\.-]', '_', base_name)
    if not clean_base.endswith(".css"):
        clean_base += ".css"
    if clean_base in available_css:
        link["href"] = f"/idreesleather/css/{clean_base}"
    elif "base.css" in available_css and "base.css" in href:
        link["href"] = "/idreesleather/css/base.css"
    elif "styles.css" in available_css and "styles.css" in href:
        link["href"] = "/idreesleather/css/styles.css"
    elif "shopify_v2.css" in available_css and "shopify_v2.css" in href:
        link["href"] = "/idreesleather/css/shopify_v2.css"

# 4. Remove tracking and external pixel scripts
for script in soup.find_all("script"):
    src = script.get("src", "")
    if any(t in src for t in ["facebook.net", "tiktok.com", "google-analytics", "googletagmanager", "web-pixel"]):
        script.decompose()
        continue
    if src:
        base_name = src.split("?")[0].split("/")[-1]
        clean_base = re.sub(r'[^\w\.-]', '_', base_name)
        if not clean_base.endswith(".js"):
            clean_base += ".js"
        if clean_base in available_js:
            script["src"] = f"/idreesleather/js/{clean_base}"

# 5. Rewrite images (src, srcset, and style background-images)
# Create a quick mapping from image base names to local path
image_map = {}
for img_file in available_images:
    image_map[img_file] = f"/idreesleather/images/{img_file}"

for img in soup.find_all("img"):
    src = img.get("src", "")
    if src:
        base_name = src.split("?")[0].split("/")[-1]
        clean_base = re.sub(r'[^\w\.-]', '_', base_name)
        if clean_base in image_map:
            img["src"] = image_map[clean_base]
        elif base_name in image_map:
            img["src"] = image_map[base_name]

    srcset = img.get("srcset", "")
    if srcset:
        new_parts = []
        for part in srcset.split(","):
            part = part.strip()
            if not part:
                continue
            tokens = part.split(" ")
            u = tokens[0]
            width_spec = " " + tokens[1] if len(tokens) > 1 else ""
            base_name = u.split("?")[0].split("/")[-1]
            clean_base = re.sub(r'[^\w\.-]', '_', base_name)
            if clean_base in image_map:
                new_parts.append(f"{image_map[clean_base]}{width_spec}")
            elif base_name in image_map:
                new_parts.append(f"{image_map[base_name]}{width_spec}")
            else:
                new_parts.append(part)
        img["srcset"] = ", ".join(new_parts)

for source in soup.find_all("source"):
    src = source.get("src", "")
    if src:
        base_name = src.split("?")[0].split("/")[-1]
        clean_base = re.sub(r'[^\w\.-]', '_', base_name)
        if clean_base in image_map:
            source["src"] = image_map[clean_base]
    srcset = source.get("srcset", "")
    if srcset:
        new_parts = []
        for part in srcset.split(","):
            part = part.strip()
            if not part:
                continue
            tokens = part.split(" ")
            u = tokens[0]
            width_spec = " " + tokens[1] if len(tokens) > 1 else ""
            base_name = u.split("?")[0].split("/")[-1]
            clean_base = re.sub(r'[^\w\.-]', '_', base_name)
            if clean_base in image_map:
                new_parts.append(f"{image_map[clean_base]}{width_spec}")
            elif base_name in image_map:
                new_parts.append(f"{image_map[base_name]}{width_spec}")
            else:
                new_parts.append(part)
        source["srcset"] = ", ".join(new_parts)

# 6. Update internal navigation links
for a in soup.find_all("a"):
    href = a.get("href", "")
    if href in ["/", "https://idreesleather.com", "https://idreesleather.com/"]:
        a["href"] = "/idreesleather/index.html"
    elif href.startswith("/collections") or href.startswith("/products") or href.startswith("/pages") or href.startswith("/policies"):
        # Keep non-destructive link: point to # or smooth demo action
        a["href"] = "#"

# 7. Add Saim Dev Demo Top Banner
BANNER_HTML = '''
<div id="saimdev-demo-banner" style="position:relative; z-index:999999; background:#0b0f19; color:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; font-size:12px; line-height:1.4; padding:8px 16px; border-bottom:2px solid #FF4A1C; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
    <span style="background:#FF4A1C; color:#ffffff; font-weight:800; font-size:10px; padding:2px 7px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px; font-family:monospace;">Showcase Demo</span>
    <span style="color:#e2e8f0;">Engineered by <strong style="color:#ffffff;">Saim Dev</strong> &bull; Luxury E-Commerce &amp; Bespoke Shopify Storefront Architecture.</span>
    <span style="color:#64748b; font-size:11px;">Switch demo:</span>
    <a href="/burger-garage" style="color:#ff6e40; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(255,74,28,0.1);">Burger Garage</a>
    <a href="/frenchyse" style="color:#ff6e40; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(255,74,28,0.1);">Frenchyse Luxury</a>
    <a href="/anzaar" style="color:#ff6e40; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(255,74,28,0.1);">Anzaar Rooftop</a>
    <a href="/hotbite" style="color:#ff6e40; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(255,74,28,0.1);">HotBite Pizza</a>
    <a href="/idreesleather" style="color:#ffffff; text-decoration:none; font-weight:700; font-size:11px; padding:1px 6px; border-radius:3px; background:#FF4A1C;">Idrees Leather</a>
  </div>
  <div style="display:flex; align-items:center; gap:10px;">
    <a href="https://www.saimdev.site/services/ecommerce-shopify" style="background:#FF4A1C; color:#ffffff; text-decoration:none; font-weight:700; padding:4px 12px; border-radius:6px; font-size:11px; white-space:nowrap; display:inline-block;">Get Your Store &pound;390/&pound;790 &rarr;</a>
    <a href="https://www.saimdev.site/demos" style="color:#94a3b8; text-decoration:none; font-size:11px; white-space:nowrap;">&larr; All Demos Hub</a>
  </div>
</div>
'''

banner_soup = BeautifulSoup(BANNER_HTML, "html.parser")
if soup.body:
    soup.body.insert(0, banner_soup)

# 8. Set Page Title and Meta Tags
if soup.head:
    title_tag = soup.head.find("title")
    if not title_tag:
        title_tag = soup.new_tag("title")
        soup.head.insert(0, title_tag)
    title_tag.string = "Idrees Leather | Luxury Handcrafted Leather Goods E-Commerce Demo | Saim Dev"

    # Add canonical
    can = soup.head.find("link", rel="canonical")
    if not can:
        can = soup.new_tag("link", rel="canonical")
        soup.head.append(can)
    can["href"] = "https://www.saimdev.site/idreesleather/index.html"

# Save final HTML
with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write(str(soup))

print(f"Written {OUT_PATH} ({os.path.getsize(OUT_PATH)} bytes).")
