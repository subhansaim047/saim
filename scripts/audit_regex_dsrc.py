import re

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    html = f.read()

# match all <img ...> tags
img_tags = re.findall(r'<img[^>]+>', html, re.DOTALL)
print(f"Total <img ...> tags via regex: {len(img_tags)}")

bad_imgs = []
for tag in img_tags:
    has_src = 'src=' in tag
    has_dsrc = 'data-src=' in tag
    has_width = '{width}' in tag
    has_pk = 'thejacketmaker.pk' in tag or 'cdn.shopify.com' in tag
    if not has_src or has_width or has_pk:
        bad_imgs.append(tag)

print(f"Total problematic <img> tags in index.html: {len(bad_imgs)}")
for tag in bad_imgs[:10]:
    clean = re.sub(r'\s+', ' ', tag)
    print("-->", clean[:150])
