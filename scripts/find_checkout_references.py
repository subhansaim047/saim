import re

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

matches = re.findall(r'.{0,50}(?:shopifycloud|checkout-web|portableWallets|PaymentButton).{0,50}', html, re.IGNORECASE)
print(f"Found {len(matches)} matches:")
for m in matches[:10]:
    print("  -->", repr(m.strip()))
