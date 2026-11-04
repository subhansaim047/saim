from bs4 import BeautifulSoup
import re

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

removed = 0
for s in soup.find_all("script"):
    text = s.string or ""
    src = s.get("src", "")
    if any(k in src for k in ["portable-wallets", "shopifycloud", "storefront-forms"]):
        s.decompose()
        removed += 1
        continue
    if any(k in text for k in ["PaymentButton", "portableWallets", "shopJsCdnBaseUrl", "ce_storefront_forms"]):
        s.decompose()
        removed += 1
        continue

print(f"Removed {removed} payment button & portable-wallets script tags.")

with open("public/idreesleather/index.html", "w", encoding="utf-8") as f:
    f.write(str(soup))
