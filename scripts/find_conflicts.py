import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = set(re.findall(r'"slug":\s*"([^"]+)"', text))
print(f"Total slugs in saim_templates.ts: {len(slugs)}")

with open('next.config.mjs', 'r', encoding='utf-8') as f:
    config_text = f.read()

sources = re.findall(r"source:\s*['\"]/food-safety-templates/([^'\"]+)['\"]", config_text)
print(f"Total /food-safety-templates/ redirects in next.config.mjs: {len(sources)}")

conflicts = [s for s in sources if s in slugs]
print(f"Conflicts ({len(conflicts)}):")
for c in conflicts:
    print(f"  - {c}")
