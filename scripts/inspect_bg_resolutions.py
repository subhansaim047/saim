from bs4 import BeautifulSoup
import re, os
from PIL import Image

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('--- CHECKING ALL BACKGROUND IMAGES IN INDEX.HTML ---')
for el in soup.find_all(style=True):
    s = el['style']
    if 'background-image' in s:
        m = re.search(r'url\([\'"]?(/thejacketmaker/images/[^\'"]+)[\'"]?\)', s)
        if m:
            u = m.group(1)
            fname = u.replace('/thejacketmaker/images/', '')
            fp = os.path.join('public', 'thejacketmaker', 'images', fname)
            if os.path.exists(fp):
                try:
                    with Image.open(fp) as im:
                        print(f'{im.width}x{im.height} ({os.path.getsize(fp)/1024:.1f} KB) -> {fname}')
                except Exception as e:
                    print('Error opening:', fname, e)
            else:
                print('FILE NOT FOUND:', fname)
