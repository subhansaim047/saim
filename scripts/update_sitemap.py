import re
import subprocess

# 1. app/sitemap.ts
with open('app/sitemap.ts', 'r', encoding='utf-8') as f:
    c = f.read()

# remove food-safety-templates line
c = re.sub(r'\s*\{\s*url:\s*`\$\{BASE_URL\}/food-safety-templates`[^\}]*\},?', '', c)

with open('app/sitemap.ts', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated app/sitemap.ts")

# 2. scripts/generate_sitemap.mjs
with open('scripts/generate_sitemap.mjs', 'r', encoding='utf-8') as f:
    c2 = f.read()

c2 = re.sub(r'\s*\{\s*url:\s*"https://www.saimdev.site/food-safety-templates"[^\}]*\},?', '', c2)

with open('scripts/generate_sitemap.mjs', 'w', encoding='utf-8') as f:
    f.write(c2)

print("Updated scripts/generate_sitemap.mjs")
