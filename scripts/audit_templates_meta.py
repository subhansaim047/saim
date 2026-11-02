import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    page_plan = json.load(f)

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    core_metadata = json.load(f)

keep_and_improve = [k for k, v in page_plan.items() if v['bucket'] in ('KEEP', 'IMPROVE')]

print(f"Auditing {len(keep_and_improve)} KEEP & IMPROVE templates:")

seen_titles = set()
seen_descs = set()
errors = []

for slug in keep_and_improve:
    meta = core_metadata.get(slug)
    if not meta:
        errors.append(f"Missing core_metadata for {slug}")
        continue
    
    title = meta['title']
    desc = meta['desc']
    canonical = f"https://www.saimdev.site/food-safety-templates/{slug}"
    
    # Title rules
    if len(title) > 60:
        errors.append(f"Title too long for {slug}: {len(title)} chars")
    if title in seen_titles:
        errors.append(f"Duplicate title for {slug}: {title}")
    seen_titles.add(title)
    
    # Desc rules
    if len(desc) < 120 or len(desc) > 160:
        errors.append(f"Desc length out of range for {slug}: {len(desc)} chars")
    if desc in seen_descs:
        errors.append(f"Duplicate desc for {slug}: {desc}")
    seen_descs.add(desc)

print(f"Errors found: {len(errors)}")
if errors:
    for e in errors:
        print(f"  ❌ {e}")
    sys.exit(1)
else:
    print(f"🎉 ALL {len(keep_and_improve)} TEMPLATES PASS TITLE & META DESCRIPTION QUALITY CHECKS!")
