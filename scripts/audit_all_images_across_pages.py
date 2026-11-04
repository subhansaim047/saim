import os, glob, re
from bs4 import BeautifulSoup

html_files = glob.glob('public/thejacketmaker/**/*.html', recursive=True)
print(f'Total HTML files: {len(html_files)}')

total_imgs = 0
empty_src = 0
has_width_placeholder = 0
files_with_issues = []

for hf in html_files:
    with open(hf, encoding='utf-8') as f:
        html = f.read()
    imgs = re.findall(r'<img[^>]+>', html)
    total_imgs += len(imgs)
    file_empty = 0
    file_placeholder = 0
    for img in imgs:
        if 'src=""' in img or 'src="data:image' in img or 'src=' not in img:
            file_empty += 1
            empty_src += 1
        if '{width}' in img:
            file_placeholder += 1
            has_width_placeholder += 1
    if file_empty > 0 or file_placeholder > 0:
        files_with_issues.append((hf, file_empty, file_placeholder))

print(f'Total img tags scanned: {total_imgs}')
print(f'Empty/data-URI src: {empty_src}')
print(f'Containing {{width}} placeholder: {has_width_placeholder}')
print(f'Files affected: {len(files_with_issues)}')
for f, emp, plh in files_with_issues[:15]:
    print(f'  {f}: empty={emp}, placeholder={plh}')
