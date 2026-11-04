import json
from bs4 import BeautifulSoup

with open('public/idreesleather/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

im = soup.find('script', type='importmap')
if im:
    data = json.loads(im.string)
    print(json.dumps(data, indent=2))
