with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

idx = 1263079
print(html[idx-1000:idx+1500])
