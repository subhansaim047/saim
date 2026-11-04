from bs4 import BeautifulSoup

with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

compare = soup.find(class_='product-price__compare')
print('Compare:', compare)

sku = soup.find(class_='sku__value')
print('SKU:', sku)

label = soup.find(class_='product-label--sale')
print('Label:', label)

swatches = soup.find(class_='custom-swatch')
print('Swatches container:', swatches.name if swatches else 'none')
