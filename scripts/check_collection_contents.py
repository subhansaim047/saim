from bs4 import BeautifulSoup
import os

collections = [
    'mens-leather-jackets',
    'mens-bomber-jackets',
    'mens-biker-leather-jackets',
    'mens-suede-jackets',
    'mens-leather-vests',
    'mens-leather-coats',
    'mens-blazers',
    'mens-aviator-jackets',
    'mens-winter-jackets',
    'mens-fur-shearling-jackets'
]

for col in collections:
    path = f'public/thejacketmaker/collections/{col}/index.html'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
        titles = [h.get_text().strip() for h in soup.select('.filters-adjacent .product-block__title')]
        print(f"{col}: {len(titles)} products -> First 3: {titles[:3]}")
    else:
        print(f"{col}: FILE DOES NOT EXIST!")
