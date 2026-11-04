with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

thumb_container = soup.select('.thumbnails, .product-gallery__thumbs, .slider-nav, .product-thumbnails')
print("Thumb containers found:", len(thumb_container))
for tc in thumb_container:
    print(tc.name, tc.get('class'))
    links = tc.find_all('a')
    print("Links count:", len(links))
    for a in links[:4]:
        print("  Thumb link:", a.get('href'), a.get('data-media-id'), a.get_text().strip())
