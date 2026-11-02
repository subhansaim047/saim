import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r'["\']?slug["\']?\s*:\s*["\']([^"\']+)["\']', text)

print("Slugs containing 'hand':", [s for s in slugs if 'hand' in s])
print("Slugs containing 'wash':", [s for s in slugs if 'wash' in s])
print("Slugs containing 'board':", [s for s in slugs if 'board' in s])
print("Slugs containing 'temp':", [s for s in slugs if 'temp' in s])
print("Slugs containing 'clean':", [s for s in slugs if 'clean' in s])
print("Slugs containing 'haccp':", [s for s in slugs if 'haccp' in s])
print("Slugs containing 'pest':", [s for s in slugs if 'pest' in s])
print("Slugs containing 'allergen' or 'allergy':", [s for s in slugs if 'allerg' in s])
