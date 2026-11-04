with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

idx = html.find('class="custom-swatches"')
if idx != -1:
    print(html[idx:idx+2500])
