import re

with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

pos = html.find('ai-media-column')
while pos != -1:
    print('FOUND AT:', pos)
    print(html[pos-50:pos+1200])
    print('='*50)
    pos = html.find('ai-media-column', pos+1)
