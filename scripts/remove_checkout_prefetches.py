from bs4 import BeautifulSoup

with open('public/idreesleather/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

removed = 0
for link in soup.find_all('link'):
    href = link.get('href', '')
    if 'checkout-web' in href or 'shopifycloud' in href:
        link.decompose()
        removed += 1

print(f"Removed {removed} checkout prefetch/preload link tags.")

with open('public/idreesleather/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Saved public/idreesleather/index.html")
