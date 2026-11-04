import os, glob, re
from bs4 import BeautifulSoup

REPO_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
html_files = glob.glob(os.path.join(REPO_DIR, "public", "thejacketmaker", "**", "*.html"), recursive=True)

print(f"Cleaning head scripts across {len(html_files)} HTML files...")

for hf in html_files:
    with open(hf, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    modified = False

    # 1. Remove duplicate or external remote scripts in <head>
    head = soup.head
    if head:
        for s in list(head.find_all("script")):
            src = s.get("src", "")
            if "vendor.min.js" in src or "theme.js" in src:
                # remove from head since we have local scripts at the end of body
                s.decompose()
                modified = True
            elif any(ext in src for ext in ["shopifycloud", "cdn.shopify.com", "thejacketmaker.pk"]):
                s.decompose()
                modified = True
            # Check inline scripts that try to dynamically insert external checkout scripts
            text = s.string or ""
            if "portable-wallets" in text or "Shopify.PaymentButton" in text or "autosizesScript" in text:
                s.decompose()
                modified = True

        # Remove preloads for external scripts
        for link in list(head.find_all("link")):
            href = link.get("href", "")
            if ("vendor.min.js" in href or "theme.js" in href) and "thejacketmaker.pk" in href:
                link.decompose()
                modified = True
            elif "accelerated-checkout" in href and "thejacketmaker.pk" in href:
                link["href"] = "/thejacketmaker/css/accelerated-checkout.css"
                modified = True

    if modified:
        with open(hf, "w", encoding="utf-8") as f:
            f.write(str(soup))

print("Head scripts cleaned successfully!")
