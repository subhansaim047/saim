with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
idx = html.find('Color')
while idx != -1:
    if 'swatch' in html[idx:idx+500] or 'option' in html[idx:idx+500]:
        print(html[idx:idx+500])
        print('='*50)
        break
    idx = html.find('Color', idx+1)
