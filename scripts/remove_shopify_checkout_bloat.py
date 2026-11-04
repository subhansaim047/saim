from bs4 import BeautifulSoup
import re

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

scripts_to_remove = [
    "loader.init-shop-cart-sync",
    "account.js",
    "shop_events_listener",
    "shopify-perf-kit",
    "webmcp",
    "b610a19cewf693d529pf324840bm6169d9b4m.js",
    "privacy-banner.js",
    "load_feature",
    "origin_trials",
    "preloads.js",
    "standard-actions.js"
]

removed_count = 0
for s in soup.find_all("script"):
    src = s.get("src", "")
    if any(k in src for k in scripts_to_remove):
        s.decompose()
        removed_count += 1
        continue
    
    # Check inline scripts that attempt dynamic checkout imports or analytics tracking
    text = s.string or ""
    if any(k in text for k in ["loader.init-shop-cart-sync", "ShopifyAnalytics", "__st=", "ShopifyPaypalV4VisibilityTracking", "trekkie", "wpmLoader"]):
        s.decompose()
        removed_count += 1
        continue

print(f"Removed {removed_count} backend checkout/analytics scripts.")

with open("public/idreesleather/index.html", "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Saved cleaned index.html")
