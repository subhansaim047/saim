with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
idx = html.find('opt-label--swatch')
while idx != -1:
    print(html[idx-100:idx+300])
    print('---')
    idx = html.find('opt-label--swatch', idx+1)
