with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

video_slide = soup.select_one('.product-media--video')
if video_slide:
    print(str(video_slide))
else:
    print("Video slide not found")
