import re

with open('audit/tjm_home_rendered.html', encoding='utf-8') as f:
    html = f.read()

matches = re.findall(r'homepage-0ffc82f66b90dae06d83f[^\s"\'>]+', html)
print("Unique hero matches in rendered HTML:")
for m in sorted(set(matches)):
    print(" ", m)
