with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
matches = [m.start() for m in re.finditer(r'YOUR CART IS EMPTY|Free Shipping On All Orders', html, re.IGNORECASE)]
for idx in matches:
    print('FOUND AT:', idx)
    print(html[max(0, idx-300):min(len(html), idx+500)])
    print('='*50)
