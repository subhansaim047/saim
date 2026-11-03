import os
import re
import json
from bs4 import BeautifulSoup

SHOWCASE_BANNER = """
<!-- SAIM DEV SHOWCASE DEMO BANNER -->
<div id="saimdev-demo-banner" style="position: -webkit-sticky; position: sticky; top: 0; z-index: 9999999; background: linear-gradient(90deg, #090d16 0%, #0f172a 50%, #090d16 100%); border-bottom: 2px solid #00e5ff; color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 10px 24px; box-shadow: 0 4px 25px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
  <div style="display: flex; align-items: center; gap: 14px;">
    <a href="/" style="display: inline-flex; align-items: center; gap: 8px; padding: 7px 16px; background: rgba(0, 229, 255, 0.12); border: 1px solid rgba(0, 229, 255, 0.4); border-radius: 6px; color: #00e5ff; font-size: 13px; font-weight: 700; text-decoration: none; transition: all 0.2s ease;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Back to Saim Dev Portfolio
    </a>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="display: inline-block; width: 8px; height: 8px; background-color: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981;"></span>
      <span style="font-size: 13px; font-weight: 600; letter-spacing: 0.02em; color: #ffffff;">The Jacket Maker (1:1 Interactive E-Commerce Clone)</span>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; font-size: 13px; color: #94a3b8;">
    <a href="/thejacketmaker/index.html" style="color: #cbd5e1; text-decoration: none; font-weight: 500;">Home</a>
    <span>•</span>
    <a href="/thejacketmaker/collections/mens-leather-jackets/index.html" style="color: #cbd5e1; text-decoration: none; font-weight: 500;">Men's Jackets</a>
    <span>•</span>
    <a href="/thejacketmaker/collections/womens-leather-jackets/index.html" style="color: #cbd5e1; text-decoration: none; font-weight: 500;">Women's Jackets</a>
    <span>•</span>
    <a href="/thejacketmaker/pages/custom-leather-jackets/index.html" style="color: #cbd5e1; text-decoration: none; font-weight: 500;">Custom Jackets</a>
    <span>•</span>
    <a href="/thejacketmaker/pages/our-story/index.html" style="color: #cbd5e1; text-decoration: none; font-weight: 500;">Our Story</a>
    <span>•</span>
    <button onclick="document.getElementById('saimdev-demo-banner').style.display='none'" style="background: none; border: none; color: #64748b; font-size: 16px; cursor: pointer; padding: 0 4px; line-height: 1;" title="Dismiss Banner">×</button>
  </div>
</div>
"""

INTERACTIVE_SNIPPET = """
<script>
// Saim Dev Interactive Demo Enhancements: Cart, Toast, and Swatches
document.addEventListener('DOMContentLoaded', function() {
  // 1. Toast Notification for Cart and interactive actions
  function showToast(msg) {
    let toast = document.getElementById('saimdev-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'saimdev-toast';
      toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#090d16;color:#ffffff;border:1px solid #00e5ff;box-shadow:0 10px 30px rgba(0,0,0,0.5);padding:14px 22px;border-radius:8px;font-size:14px;font-weight:600;z-index:99999999;transition:all 0.3s ease;transform:translateY(100px);opacity:0;display:flex;align-items:center;gap:10px;';
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<span style="color:#10b981;font-size:18px;">✓</span> ' + msg;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
    setTimeout(function() {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
    }, 3500);
  }

  // Intercept Add to Cart buttons
  document.querySelectorAll('button[name="add"], .add-to-cart, [data-add-to-cart]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showToast('Item added to cart! (Demo Storefront Simulation)');
    });
  });

  // Intercept Wishlist / Heart buttons
  document.querySelectorAll('.wishlist-btn, [data-wishlist]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showToast('Added to Wishlist!');
    });
  });

  // Intercept Checkout buttons
  document.querySelectorAll('a[href*="/checkout"], button[name="checkout"]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showToast('Checkout simulated in Demo mode. All product pages and collections are fully navigable!');
    });
  });
});
</script>
"""

# Available pages mapping
KNOWN_COLLECTIONS = {
    "mens-leather-jackets", "womens-leather-jackets", "mens-bomber-jackets",
    "mens-biker-leather-jackets", "mens-fur-shearling-jackets", "mens-winter-jackets",
    "mens-suede-jackets", "mens-cafe-racer-jackets", "mens-aviator-jackets",
    "mens-leather-coats", "mens-best-sellers", "mens-new-arrival",
    "mens-leather-vests", "mens-blazers", "mens-wool-coats-jackets",
    "prime", "pre-order", "trucarry", "gifts-for-him", "all"
}

KNOWN_PRODUCTS = {
    "ionic-black-leather-jacket", "dean-brown-leather-biker-jacket", "bliss-black-leather-bomber-jacket",
    "legacy-black-leather-biker-jacket", "mystical-black-leather-jacket", "rustic-black-leather-biker-jacket",
    "rustic-brown-leather-biker-jacket", "allaric-alley-black-leather-biker-jacket", "vincent-black-leather-biker-jacket",
    "dan-frost-tan-shearling-jacket", "bouncer-biz-black-leather-bomber-jacket", "agent-shadow-black-leather-bomber-jacket",
    "hank-black-leather-biker-jacket", "armstrong-black-leather-biker-jacket", "alyson-black-leather-blazer",
    "dolf-black-leather-jacket", "professor-oxford-brown-leather-shoes", "classmith-black-leather-coat",
    "classmith-brown-leather-coat", "maurice-black-leather-jacket", "youngster-black-leather-jacket",
    "glen-street-black-leather-bomber-jacket", "don-long-black-leather-coat"
}

KNOWN_PAGES = {
    "our-story", "bespoke", "hangontoit", "help", "contact-us",
    "men-jackets", "women-jackets", "trucarry", "eviternity",
    "custom-leather-jackets", "custom-bomber-jackets", "custom-trench-coats",
    "custom-motorcycle-jackets", "custom-varsity-letterman-jackets",
    "custom-leather-bags", "affiliate-program", "brand-ambassador-program"
}

KNOWN_POLICIES = {
    "terms-of-service", "privacy-policy", "refund-policy", "shipping-policy"
}

# Load image mapping
MAPPING_FILE = "audit/tjm_image_mapping.json"
image_mapping = {}
if os.path.exists(MAPPING_FILE):
    with open(MAPPING_FILE, "r", encoding="utf-8") as f:
        image_mapping = json.load(f)

# Also create filename lookup
image_files_available = set(os.listdir("public/thejacketmaker/images"))

def resolve_image(url):
    if not url:
        return url
    if url in image_mapping:
        return image_mapping[url]
    
    # Clean query and check base filename
    base = url.split("?")[0].strip()
    fname = base.split("/")[-1]
    if fname in image_files_available:
        return f"/thejacketmaker/images/{fname}"
    
    # Try cleaning _{width}x or _1024x1024
    clean_fname = re.sub(r'_(?:\{width\}|\d+)x(?:\d+)?', '', fname)
    if clean_fname in image_files_available:
        return f"/thejacketmaker/images/{clean_fname}"
        
    return url

def transform_html(raw_html, page_type="home", page_slug=""):
    soup = BeautifulSoup(raw_html, "html.parser")

    # 1. Rule webflow_mistakes.md: Remove ALL integrity attributes
    for el in soup.find_all(attrs={"integrity": True}):
        del el["integrity"]

    # 2. Strip invasive / blocking external scripts (Smile, Rebuy, Klaviyo, Gorgias, Awin, GTM, FB)
    for s in list(soup.find_all("script")):
        src = s.get("src", "")
        # Remove third-party tracker scripts
        if any(bad in src for bad in [
            "smile.io", "rebuy", "zigpoll", "awin", "zoko", "attn.tv", "weglot",
            "klaviyo", "rakuten", "postaffiliatepro", "gropulse", "yotpo", "conversionbear",
            "facebook.net", "googletagmanager", "google-analytics", "gotolstoy", "lantern",
            "zdassets", "sc-easy-redirects", "hulkapps", "getsitecontrol"
        ]):
            s.decompose()

    # 3. Clean and inject stylesheets in <head>
    head = soup.head
    if not head:
        head = soup.new_tag("head")
        if soup.html:
            soup.html.insert(0, head)

    # Remove external broken css links
    for l in list(soup.find_all("link", rel=lambda r: r and "stylesheet" in r)):
        href = l.get("href", "")
        if any(bad in href for bad in ["rebuy", "klaviyo", "aris-options", "shopify.com/extensions"]):
            l.decompose()

    # Ensure local stylesheets exist
    required_css = [
        "/thejacketmaker/css/fonts.css",
        "/thejacketmaker/css/styles.css",
        "/thejacketmaker/css/swatches.css",
        "/thejacketmaker/css/slick.css",
        "/thejacketmaker/css/slick-theme.css",
        "/thejacketmaker/css/fancybox.css",
        "/thejacketmaker/css/modal.min.css",
        "/thejacketmaker/css/intlTelInput.css"
    ]

    # Prepend fonts.css and styles.css
    for css_path in reversed(required_css):
        # Check if already present
        if not head.find("link", href=css_path):
            new_link = soup.new_tag("link", rel="stylesheet", href=css_path)
            head.insert(0, new_link)

    # 4. Image tags normalization
    for img in soup.find_all("img"):
        src = img.get("src")
        data_src = img.get("data-src")
        srcset = img.get("srcset")
        data_srcset = img.get("data-srcset")

        # Resolve data-src first
        resolved_src = None
        if data_src:
            resolved_src = resolve_image(data_src)
            img["data-src"] = resolved_src
        if src:
            res_src = resolve_image(src)
            img["src"] = res_src
            if not resolved_src:
                resolved_src = res_src
        elif resolved_src:
            img["src"] = resolved_src

        # Clean srcset if pointing to shopify cdn
        if srcset and ("thejacketmaker" in srcset or "shopify" in srcset):
            img["srcset"] = resolved_src or img.get("src", "")
        if data_srcset and ("thejacketmaker" in data_srcset or "shopify" in data_srcset):
            img["data-srcset"] = resolved_src or img.get("src", "")

    # Also resolve <source> tags
    for src_tag in soup.find_all("source"):
        ss = src_tag.get("srcset")
        if ss:
            parts = [p.strip().split(" ")[0] for p in ss.split(",")]
            if parts and parts[0]:
                src_tag["srcset"] = resolve_image(parts[0])

    # 5. Link normalization (Rule zero_collateral_damage.md & webflow_mistakes.md)
    for a in soup.find_all("a"):
        href = a.get("href", "")
        if not href or href.startswith("#"):
            continue

        # Homepage
        if href in ["/", "https://www.thejacketmaker.pk", "https://www.thejacketmaker.pk/", "https://www.thejacketmaker.com", "https://www.thejacketmaker.com/"]:
            a["href"] = "/thejacketmaker/index.html"
            continue

        # Collections
        if "/collections/" in href:
            slug = href.split("/collections/")[1].split("?")[0].strip("/ ")
            if slug in KNOWN_COLLECTIONS:
                a["href"] = f"/thejacketmaker/collections/{slug}/index.html"
            else:
                a["href"] = "/thejacketmaker/collections/all/index.html"
            continue

        # Products
        if "/products/" in href:
            slug = href.split("/products/")[1].split("?")[0].strip("/ ")
            if slug in KNOWN_PRODUCTS:
                a["href"] = f"/thejacketmaker/products/{slug}/index.html"
            else:
                # Fallback to flagship product
                a["href"] = "/thejacketmaker/products/ionic-black-leather-jacket/index.html"
            continue

        # Pages
        if "/pages/" in href:
            slug = href.split("/pages/")[1].split("?")[0].strip("/ ")
            if slug in KNOWN_PAGES:
                a["href"] = f"/thejacketmaker/pages/{slug}/index.html"
            else:
                a["href"] = "/thejacketmaker/pages/custom-leather-jackets/index.html"
            continue

        # Policies
        if "/policies/" in href:
            slug = href.split("/policies/")[1].split("?")[0].strip("/ ")
            if slug in KNOWN_POLICIES:
                a["href"] = f"/thejacketmaker/policies/{slug}/index.html"
            else:
                a["href"] = "/thejacketmaker/policies/terms-of-service/index.html"
            continue

        # Checkout / Cart
        if "/checkout" in href or "/cart" in href:
            a["href"] = "#checkout-demo"
            continue

    # 6. Inject Showcase Banner at top of <body>
    body = soup.body
    if body:
        banner_soup = BeautifulSoup(SHOWCASE_BANNER, "html.parser")
        body.insert(0, banner_soup)

        # 7. Inject JS scripts and Interactive Snippet before </body>
        scripts_to_add = [
            "/thejacketmaker/js/jquery.min.js",
            "/thejacketmaker/js/slick.min.js",
            "/thejacketmaker/js/fancybox.umd.js",
            "/thejacketmaker/js/modal.min.js",
            "/thejacketmaker/js/vendor.min.js",
            "/thejacketmaker/js/theme.js",
            "/thejacketmaker/js/custom.js"
        ]
        for script_src in scripts_to_add:
            s_tag = soup.new_tag("script", src=script_src)
            body.append(s_tag)

        snippet_soup = BeautifulSoup(INTERACTIVE_SNIPPET, "html.parser")
        body.append(snippet_soup)

    return str(soup)

def build_all():
    print("=== Building The Jacket Maker Demo Storefront ===")

    # 1. Homepage
    home_src = "audit/tjm_home_rendered.html"
    print("Building Homepage...", flush=True)
    with open(home_src, "r", encoding="utf-8", errors="ignore") as f:
        home_raw = f.read()
    home_out = transform_html(home_raw, page_type="home")
    with open("public/thejacketmaker/index.html", "w", encoding="utf-8") as f:
        f.write(home_out)
    print("Saved public/thejacketmaker/index.html", flush=True)

    # 2. Collections
    col_dir = "audit/raw_tjm/collections"
    for f in os.listdir(col_dir):
        if f.endswith(".html"):
            slug = f.replace(".html", "")
            dest_dir = os.path.join("public", "thejacketmaker", "collections", slug)
            os.makedirs(dest_dir, exist_ok=True)
            with open(os.path.join(col_dir, f), "r", encoding="utf-8", errors="ignore") as raw_f:
                raw_c = raw_f.read()
            out_html = transform_html(raw_c, page_type="collection", page_slug=slug)
            with open(os.path.join(dest_dir, "index.html"), "w", encoding="utf-8") as out_f:
                out_f.write(out_html)
            print(f"Built collection: {slug}", flush=True)

    # 3. Products
    prod_dir = "audit/raw_tjm/products"
    for f in os.listdir(prod_dir):
        if f.endswith(".html"):
            slug = f.replace(".html", "")
            dest_dir = os.path.join("public", "thejacketmaker", "products", slug)
            os.makedirs(dest_dir, exist_ok=True)
            with open(os.path.join(prod_dir, f), "r", encoding="utf-8", errors="ignore") as raw_f:
                raw_c = raw_f.read()
            out_html = transform_html(raw_c, page_type="product", page_slug=slug)
            with open(os.path.join(dest_dir, "index.html"), "w", encoding="utf-8") as out_f:
                out_f.write(out_html)
            print(f"Built product: {slug}", flush=True)

    # 4. Pages
    page_dir = "audit/raw_tjm/pages"
    for f in os.listdir(page_dir):
        if f.endswith(".html"):
            slug = f.replace(".html", "")
            dest_dir = os.path.join("public", "thejacketmaker", "pages", slug)
            os.makedirs(dest_dir, exist_ok=True)
            with open(os.path.join(page_dir, f), "r", encoding="utf-8", errors="ignore") as raw_f:
                raw_c = raw_f.read()
            out_html = transform_html(raw_c, page_type="page", page_slug=slug)
            with open(os.path.join(dest_dir, "index.html"), "w", encoding="utf-8") as out_f:
                out_f.write(out_html)
            print(f"Built page: {slug}", flush=True)

    # 5. Policies
    pol_dir = "audit/raw_tjm/policies"
    for f in os.listdir(pol_dir):
        if f.endswith(".html"):
            slug = f.replace(".html", "")
            dest_dir = os.path.join("public", "thejacketmaker", "policies", slug)
            os.makedirs(dest_dir, exist_ok=True)
            with open(os.path.join(pol_dir, f), "r", encoding="utf-8", errors="ignore") as raw_f:
                raw_c = raw_f.read()
            out_html = transform_html(raw_c, page_type="policy", page_slug=slug)
            with open(os.path.join(dest_dir, "index.html"), "w", encoding="utf-8") as out_f:
                out_f.write(out_html)
            print(f"Built policy: {slug}", flush=True)

    print("\n=== All Pages Built Successfully! ===", flush=True)

if __name__ == "__main__":
    build_all()
