with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

slides = soup.select('.main-image .slide')
print(f"Total main slides: {len(slides)}")
for s in slides:
    print("Slide data-media-id:", s.get('data-media-id'), "class:", s.get('class'))
