with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    h1 = f.read()

idx = h1.find("Dean Brown Leather Biker Jacket", 1000)
while idx != -1:
    print('OCCURRENCE:', idx)
    print(h1[idx-100:idx+300])
    print('---')
    idx = h1.find("Dean Brown Leather Biker Jacket", idx+1)
