import os
import re
import json
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

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
    <a href="/idreesleather/index.html" style="color:#ffffff; text-decoration:none; font-weight:700; font-size:11px; padding:1px 6px; border-radius:3px; background:#FF4A1C;">Idrees Leather</a>
  </div>
  <div style="display:flex; align-items:center; gap:10px;">
    <a href="https://www.saimdev.site/services/ecommerce-shopify" style="background:#FF4A1C; color:#ffffff; text-decoration:none; font-weight:700; padding:4px 12px; border-radius:6px; font-size:11px; white-space:nowrap; display:inline-block;">Get Your Store &pound;390/&pound;790 &rarr;</a>
    <a href="https://www.saimdev.site/demos" style="color:#94a3b8; text-decoration:none; font-size:11px; white-space:nowrap;">&larr; All Demos Hub</a>
  </div>
</div>
'''

HEADER_MENU_CSS = """
overflow-list.overflow-menu {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 1.5rem !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
overflow-list.overflow-menu > li {
  display: inline-flex !important;
  align-items: center !important;
  white-space: nowrap !important;
  margin: 0 !important;
  padding: 0 !important;
}
.menu-list__trigger {
  display: inline-flex !important;
  align-items: center !important;
  gap: 4px !important;
}
"""

def clean_filename(url):
    base = url.split("?")[0].split("/")[-1]
    return re.sub(r'[^\w\.-]', '_', base)

FONTS_DIR = "public/idreesleather/fonts"
available_fonts = set(os.listdir(FONTS_DIR)) if os.path.exists(FONTS_DIR) else set()

JS_DIR = "public/idreesleather/js"
available_js = set(os.listdir(JS_DIR)) if os.path.exists(JS_DIR) else set()

IMAGES_DIR = "public/idreesleather/images"
available_images = set(os.listdir(IMAGES_DIR)) if os.path.exists(IMAGES_DIR) else set()

with open("audit/master_importmap.json", "r", encoding="utf-8") as f:
    SHARED_IMPORTMAP = f.read()

def transform_page(raw_html_path, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(raw_html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Strip integrity attributes
    html = re.sub(r'\s+integrity="[^"]*"', '', html)
    html = re.sub(r"\s+integrity='[^']*'", '', html)

    # 2. Rewrite font URLs
    for font_file in available_fonts:
        pattern = rf'[\'\"]?(?:https?:)?//[^\'\"\(\)]*?/{re.escape(font_file)}(?:\?[^\'\"\(\)]*)?[\'\"]?'
        html = re.sub(pattern, f'"/idreesleather/fonts/{font_file}"', html)
        html = html.replace(f"https://cdn.shopify.com/shop-assets/static_uploads/shoplift/{font_file}", f"/idreesleather/fonts/{font_file}")
        html = html.replace(f"//idreesleather.com/cdn/fonts/inter/{font_file}", f"/idreesleather/fonts/{font_file}")
        html = html.replace(f"//idreesleather.com/cdn/fonts/playfair_display/{font_file}", f"/idreesleather/fonts/{font_file}")

    soup = BeautifulSoup(html, "html.parser")

    # 3. Rewrite CSS links and remove dictionaries / prefetches
    for link in soup.find_all("link"):
        href = link.get("href", "")
        rel = link.get("rel", [])
        if isinstance(rel, str):
            rel = [rel]

        if "compression-dictionary" in rel or any(bad in href for bad in ["checkout-web", "shopifycloud", "accelerated-checkout", "portable-wallets"]):
            link.decompose()
            continue

        if "stylesheet" in rel:
            if "base.css" in href:
                link["href"] = "/idreesleather/css/base.css"
            elif "styles.css" in href:
                link["href"] = "/idreesleather/css/styles.css"
            elif "shopify_v2.css" in href:
                link["href"] = "/idreesleather/css/shopify_v2.css"
            elif "overflow-list.css" in href:
                link["href"] = "/idreesleather/css/overflow-list.css"

        elif "modulepreload" in rel:
            base_name = href.split("?")[0].split("/")[-1]
            if not base_name.endswith(".js"):
                base_name += ".js"
            clean_b = re.sub(r'[^\w\.-]', '_', base_name)
            if clean_b in available_js:
                link["href"] = f"/idreesleather/js/{clean_b}"
            elif base_name in available_js:
                link["href"] = f"/idreesleather/js/{base_name}"

    # 4. Remove tracking, analytics, and non-essential external scripts
    for script in soup.find_all("script"):
        src = script.get("src", "")
        text = script.string or ""
        
        # Decompose external tracking / analytics
        if any(t in src for t in [
            "facebook.net", "tiktok.com", "google-analytics", "googletagmanager", 
            "web-pixel", "portable-wallets", "shopifycloud", "storefront-forms",
            "account.js", "perf-kit", "privacy-banner", "origin_trials", "load_feature"
        ]):
            script.decompose()
            continue

        if any(t in text for t in ["PaymentButton", "portableWallets", "shopJsCdnBaseUrl", "ce_storefront_forms", "ShopifyAnalytics", "trekkie", "wpmLoader"]):
            script.decompose()
            continue

        if src:
            base_name = src.split("?")[0].split("/")[-1]
            if not base_name.endswith(".js"):
                base_name += ".js"
            clean_base = re.sub(r'[^\w\.-]', '_', base_name)
            if clean_base in available_js:
                script["src"] = f"/idreesleather/js/{clean_base}"
            elif base_name in available_js:
                script["src"] = f"/idreesleather/js/{base_name}"

    # 5. Fix importmap
    im = soup.find('script', type='importmap')
    if im:
        im.string = SHARED_IMPORTMAP
    else:
        new_im = soup.new_tag("script", type="importmap")
        new_im.string = SHARED_IMPORTMAP
        if soup.head:
            soup.head.insert(0, new_im)

    # 6. Rewrite internal links
    for a in soup.find_all("a"):
        href = a.get("href", "")
        if not href:
            continue
        clean_href = href.replace("https://idreesleather.com", "").replace("http://idreesleather.com", "")
        if clean_href in ["", "/"]:
            a["href"] = "/idreesleather/index.html"
        elif clean_href.startswith("/collections/"):
            parts = clean_href.replace("/collections/", "").split("?")[0].split("#")[0].strip("/").split("/")
            slug = parts[0]
            a["href"] = f"/idreesleather/collections/{slug}/index.html"
        elif clean_href.startswith("/products/"):
            parts = clean_href.replace("/products/", "").split("?")[0].split("#")[0].strip("/").split("/")
            slug = parts[0]
            a["href"] = f"/idreesleather/products/{slug}/index.html"
        elif clean_href.startswith("/pages/"):
            parts = clean_href.replace("/pages/", "").split("?")[0].split("#")[0].strip("/").split("/")
            slug = parts[0]
            a["href"] = f"/idreesleather/pages/{slug}/index.html"
        elif clean_href.startswith("/policies/"):
            parts = clean_href.replace("/policies/", "").split("?")[0].split("#")[0].strip("/").split("/")
            slug = parts[0]
            a["href"] = f"/idreesleather/policies/{slug}/index.html"
        elif clean_href.startswith("/blogs/"):
            a["href"] = "/idreesleather/index.html"
        elif clean_href in ["/cart", "/checkout", "/account", "/search"]:
            a["href"] = "#"

    # 7. Rewrite images
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if src:
            clean = clean_filename(src)
            if clean in available_images:
                img["src"] = f"/idreesleather/images/{clean}"
        srcset = img.get("srcset", "")
        if srcset:
            parts = []
            for p in srcset.split(","):
                p = p.strip()
                if not p:
                    continue
                toks = p.split(" ")
                u = toks[0]
                w = " " + toks[1] if len(toks) > 1 else ""
                clean_w = clean_filename(u)
                if clean_w in available_images:
                    parts.append(f"/idreesleather/images/{clean_w}{w}")
                else:
                    parts.append(p)
            img["srcset"] = ", ".join(parts)

    # 8. Inject Showcase Banner
    if not soup.find("div", id="saimdev-demo-banner"):
        banner_soup = BeautifulSoup(BANNER_HTML, "html.parser")
        if soup.body:
            soup.body.insert(0, banner_soup)

    # 9. Inject Custom Style for Menu
    if not soup.find("style", id="saimdev-menu-fix"):
        custom_style = soup.new_tag("style", id="saimdev-menu-fix")
        custom_style.string = HEADER_MENU_CSS
        if soup.head:
            soup.head.append(custom_style)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(str(soup))

    return output_path

def main():
    tasks = []

    # Homepage
    if os.path.exists("audit/idrees_raw.html"):
        tasks.append(("audit/idrees_raw.html", "public/idreesleather/index.html"))

    # Collections
    col_dir = "audit/raw_pages/collections"
    if os.path.exists(col_dir):
        for f in os.listdir(col_dir):
            if f.endswith(".html"):
                slug = f[:-5]
                tasks.append((os.path.join(col_dir, f), f"public/idreesleather/collections/{slug}/index.html"))

    # Pages
    page_dir = "audit/raw_pages/pages"
    if os.path.exists(page_dir):
        for f in os.listdir(page_dir):
            if f.endswith(".html"):
                slug = f[:-5]
                tasks.append((os.path.join(page_dir, f), f"public/idreesleather/pages/{slug}/index.html"))

    # Policies
    pol_dir = "audit/raw_pages/policies"
    if os.path.exists(pol_dir):
        for f in os.listdir(pol_dir):
            if f.endswith(".html"):
                slug = f[:-5]
                tasks.append((os.path.join(pol_dir, f), f"public/idreesleather/policies/{slug}/index.html"))

    # Products
    prod_dir = "audit/raw_pages/products"
    if os.path.exists(prod_dir):
        for f in os.listdir(prod_dir):
            if f.endswith(".html"):
                slug = f[:-5]
                tasks.append((os.path.join(prod_dir, f), f"public/idreesleather/products/{slug}/index.html"))

    print(f"Total pages to rebuild: {len(tasks)}")
    success = 0
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(transform_page, raw, out) for raw, out in tasks]
        for fut in futures:
            try:
                fut.result()
                success += 1
            except Exception as e:
                print(f"Transform error: {e}")

    print(f"Successfully rebuilt {success}/{len(tasks)} pages into public/idreesleather/!")

if __name__ == "__main__":
    main()
