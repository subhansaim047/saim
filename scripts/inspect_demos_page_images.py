import re
import os

with open('src/components/DemosPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'previewImage:\s*[\'"]([^\'"]+)[\'"]', text)
titles = re.findall(r'title:\s*[\'"]([^\'"]+)[\'"]', text)
print(f"Total demo previewImages: {len(matches)}")
for t, m in list(zip(titles, matches))[:10]:
    exists = os.path.exists('public' + m)
    print(f"  [{'EXISTS' if exists else 'MISSING'}] {t}: {m}")
