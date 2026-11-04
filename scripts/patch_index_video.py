with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# 1. Update video tag and poster
old_video_block = '''<div class="ai-media-column-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh">
<div class="ai-media-content-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh">
<video autoplay="" loop="" muted="" playsinline="" preload="metadata">
<source src="https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.mp4" type="video/mp4"/>
</video>'''

new_video_block = '''<div class="ai-media-column-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh">
<div class="ai-media-content-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh">
<video autoplay loop muted playsinline preload="auto" poster="/thejacketmaker/images/clearance-sale-poster.jpg" style="width: 100%; height: 100%; object-fit: cover;">
<source src="/thejacketmaker/videos/clearance-sale.mp4" type="video/mp4"/>
<source src="https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.mp4" type="video/mp4"/>
<img src="/thejacketmaker/images/clearance-sale-poster.jpg" alt="Clearance Sale Up to 50% Off" style="width: 100%; height: 100%; object-fit: cover;"/>
</video>'''

if old_video_block in html:
    html = html.replace(old_video_block, new_video_block)
    print("Replaced video block successfully")
else:
    print("Old video block not found exactly, using regex replace")
    import re
    html = re.sub(
        r'<video autoplay="" loop="" muted="" playsinline="" preload="metadata">\s*<source src="https://cdn\.shopify\.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731\.mp4" type="video/mp4"/>\s*</video>',
        '''<video autoplay loop muted playsinline preload="auto" poster="/thejacketmaker/images/clearance-sale-poster.jpg" style="width: 100%; height: 100%; object-fit: cover;">
<source src="/thejacketmaker/videos/clearance-sale.mp4" type="video/mp4"/>
<source src="https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.mp4" type="video/mp4"/>
<img src="/thejacketmaker/images/clearance-sale-poster.jpg" alt="Clearance Sale Up to 50% Off" style="width: 100%; height: 100%; object-fit: cover;"/>
</video>''',
        html
    )

# Also fix the weird char ClearanceSale
html = html.replace('ClearanceSale', 'Clearance Sale')

with open('public/thejacketmaker/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("index.html updated successfully")
