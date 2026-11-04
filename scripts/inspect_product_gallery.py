with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

thumbs = soup.select('.product-gallery__thumb, .thumbnails a, [data-media-id]')
print(f"Found {len(thumbs)} thumb candidates")

# find video in the gallery
videos = soup.select('video, [data-media-type="video"]')
print(f"Found {len(videos)} video elements:")
for v in videos:
    print(v.name, v.get('class'), v.get('data-media-id'), v.get('poster'))
    sources = v.find_all('source')
    for s in sources:
        print("  Source:", s.get('src'))

# check gallery main slides
slides = soup.select('.product-media, .main-image, .gallery__slide, .slide')
print(f"Found {len(slides)} slides:")
for sl in slides[:10]:
    print("Slide:", sl.get('class'), sl.get('data-media-id'), "children:", [c.name for c in sl.children if c.name])
