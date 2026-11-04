with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    h1 = f.read()

with open('public/thejacketmaker/collections/mens-bomber-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    h2 = f.read()

import re
titles1 = re.findall(r'<div class="product-block__title[^"]*">([^<]+)</div>', h1)
titles2 = re.findall(r'<div class="product-block__title[^"]*">([^<]+)</div>', h2)

print(f"Collection 1 product count: {len(titles1)}, Sample: {titles1[:4]}")
print(f"Collection 2 product count: {len(titles2)}, Sample: {titles2[:4]}")
