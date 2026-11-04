import urllib.request
import re

url = 'https://idreesleather.com/cdn/shop/t/3/assets/base.css?v=138757678423226738541792675552'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    content = urllib.request.urlopen(req).read().decode('utf-8')
    print('Base.css length:', len(content))
    fonts = re.findall(r'url\([\'"]?([^\'")]+?\.(?:woff2|woff|ttf|eot)[^\'")]*?)[\'"]?\)', content)
    print('Fonts in base.css:', len(fonts), set(fonts))
except Exception as e:
    print('Error:', e)

# Also check fonts in audit/idrees_raw.html
with open('audit/idrees_raw.html', 'r', encoding='utf-8') as f:
    raw = f.read()

html_fonts = re.findall(r'url\([\'"]?([^\'")]+?\.(?:woff2|woff|ttf|eot)[^\'")]*?)[\'"]?\)', raw)
print('Fonts in raw html:', len(html_fonts), set(html_fonts))
