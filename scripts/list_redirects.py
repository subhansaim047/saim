import re

with open('next.config.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

redirects = re.findall(r'source:\s*[\'"]([^\'"]+)[\'"],\s*destination:\s*[\'"]([^\'"]+)[\'"]', text)
print(f"Total current redirects: {len(redirects)}")
for s, d in redirects:
    print(f"  {s} -> {d}")
