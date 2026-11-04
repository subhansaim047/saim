with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    c = f.read()

print("Contains gallery-controller.js:", 'gallery-controller.js' in c)
