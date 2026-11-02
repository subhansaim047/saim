import sys
sys.stdout.reconfigure(encoding='utf-8')

# Read off audience list
with open('src/lib/off-audience.ts', 'r', encoding='utf-8') as f:
    off_text = f.read()

import re
off_slugs = re.findall(r'"([a-z0-9\-]+)"', off_text)
print(f"Total OFF_AUDIENCE_SLUGS: {len(off_slugs)}")

# Read all templates
with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    saim_text = f.read()

all_slugs = re.findall(r'"slug":\s*"([^"]+)"', saim_text)
print(f"Total all_slugs in saim_templates.ts: {len(all_slugs)}")

core_slugs = [s for s in all_slugs if s not in off_slugs]
off_in_saim = [s for s in all_slugs if s in off_slugs]

print(f"Core templates for main grid: {len(core_slugs)}")
print(f"Off-audience templates for drawer: {len(off_in_saim)}")
