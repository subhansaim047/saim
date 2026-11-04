with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
matches = [m.start() for m in re.finditer(r'label[^>]*>Color', html, re.IGNORECASE)]
for idx in matches:
    print(html[idx-100:idx+600])
    print('='*50)
