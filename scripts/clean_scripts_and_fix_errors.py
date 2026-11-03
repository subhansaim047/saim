import os
import re
from bs4 import BeautifulSoup

def clean_file(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # 1. Strip unwanted external scripts
    removed_count = 0
    for s in list(soup.find_all("script")):
        src = s.get("src", "")
        text = s.string or ""
        
        # Check src
        if src and any(term in src for term in [
            "checkouts", "web-pixel", "shopifycloud/storefront", "shopifycloud/checkout",
            "shop_events_listener", "perf-kit", "standard-actions", "consent-tracking",
            "klaviyo", "rebuy", "smile", "zigpoll", "awin", "zoko", "attn.tv", "gotolstoy",
            "yotpo", "facebook", "gtm", "google-analytics"
        ]):
            s.decompose()
            removed_count += 1
            continue
            
        # Check inline scripts for analytics / web-pixel / checkouts initialization
        if text and any(term in text for term in [
            "web-pixels-manager", "ShopifyAnalytics.lib", "trekkie",
            "init-shop-cart-sync", "window.Shopify.analytics"
        ]):
            s.decompose()
            removed_count += 1
            continue

    # 2. Strip prefetch / preload links for checkouts / web-pixels
    for l in list(soup.find_all("link")):
        href = l.get("href", "")
        if any(term in href for term in ["checkouts", "web-pixel", "shopifycloud/checkout"]):
            l.decompose()
            removed_count += 1

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(str(soup))
        
    return removed_count

def clean_all():
    root_dir = "public/thejacketmaker"
    total_cleaned = 0
    count_files = 0
    for root, _, files in os.walk(root_dir):
        for f in files:
            if f == "index.html":
                fp = os.path.join(root, f)
                n = clean_file(fp)
                total_cleaned += n
                count_files += 1

    print(f"Cleaned {count_files} HTML files, removed {total_cleaned} tracking / checkout / pixel tags.", flush=True)

if __name__ == "__main__":
    clean_all()
