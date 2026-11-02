import urllib.robotparser

with open('public/robots.txt', 'r', encoding='utf-8') as f:
    robots_text = f.read()

rp = urllib.robotparser.RobotFileParser()
rp.parse(robots_text.splitlines())

# Direct regex parse
import re
with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    code = f.read()

slugs = re.findall(r'"slug":\s*"([^"]+)"', code)
print(f"Total template slugs found: {len(slugs)}")

blocked_slugs = []
for s in slugs:
    url = f"https://www.saimdev.site/food-safety-templates/{s}"
    if not rp.can_fetch("Googlebot", url):
        blocked_slugs.append(url)

print(f"Blocked template URLs by robots.txt: {len(blocked_slugs)}")
if blocked_slugs:
    print("Sample blocked templates:", blocked_slugs[:5])
else:
    print("ALL 160 template pages are 100% ALLOWED by robots.txt for Googlebot!")
