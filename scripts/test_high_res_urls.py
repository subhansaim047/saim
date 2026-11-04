import urllib.request
import io
from PIL import Image

urls = [
    'https://www.thejacketmaker.pk/cdn/shop/files/homepage-0ffc82f66b90dae06d83f627fcb8739e8dcc70a4e279e5e2f133512cae941e9f.webp',
    'https://www.thejacketmaker.pk/cdn/shop/files/homepage-0ffc82f66b90dae06d83f627fcb8739e8dcc70a4e279e5e2f133512cae941e9f_2048x.webp',
    'https://www.thejacketmaker.pk/cdn/shop/files/homepage-0ffc82f66b90dae06d83f627fcb8739e8dcc70a4e279e5e2f133512cae941e9f_1728x.webp'
]

headers = {'User-Agent': 'Mozilla/5.0'}
for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            im = Image.open(io.BytesIO(data))
            name = u.split('/')[-1].split('?')[0]
            print(f"{name}: {im.width}x{im.height} ({len(data)/1024:.1f} KB)")
    except Exception as e:
        print("Error fetching:", u, e)
