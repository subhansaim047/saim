import json

# 1. Update next.config.mjs
with open('next.config.mjs', 'r', encoding='utf-8') as f:
    c = f.read()

new_redirects = '''      {
        source: '/food-safety-templates/cutting-board-color-chart',
        destination: '/food-safety-templates/chopping-board-colour-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/fsma-food-traceability-list',
        destination: '/food-safety-templates/food-traceability',
        permanent: true,
      },
      {
        source: '/food-safety-templates/fsma-compliance-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/ecosure-inspection-checklist',
        destination: '/food-safety-templates/restaurant-cleaning-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/amazon-seller-and-product-requirements',
        destination: '/food-safety-templates/food-traceability',
        permanent: true,
      },'''

old_snippet = '''      {
        source: '/food-safety-templates/cutting-board-color-chart',
        destination: '/food-safety-templates/chopping-board-colour-chart',
        permanent: true,
      },'''

c = c.replace(old_snippet, new_redirects)
with open('next.config.mjs', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated next.config.mjs with new redirects")

# 2. Update vercel.json
with open('vercel.json', 'r', encoding='utf-8') as f:
    v = json.load(f)

slug_map = {
    '/food-safety-templates/fsma-food-traceability-list': '/food-safety-templates/food-traceability',
    '/food-safety-templates/fsma-compliance-checklist': '/food-safety-templates/opening-and-closing-checklist-template',
    '/food-safety-templates/ecosure-inspection-checklist': '/food-safety-templates/restaurant-cleaning-checklist',
    '/food-safety-templates/amazon-seller-and-product-requirements': '/food-safety-templates/food-traceability',
}

existing_sources = {r['source'] for r in v.get('redirects', [])}
for src, dest in slug_map.items():
    if src not in existing_sources:
        v['redirects'].append({
            'source': src,
            'destination': dest,
            'permanent': True
        })

with open('vercel.json', 'w', encoding='utf-8') as f:
    json.dump(v, f, indent=2)
print("Updated vercel.json with new redirects")

# 3. Update page_plan.json
with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

plan['fsma-food-traceability-list'] = {
    'bucket': 'MERGE',
    'target_canonical_slug': 'food-traceability',
    'reason': 'US FSMA traceability list 301 redirected to UK food-traceability log'
}
plan['fsma-compliance-checklist'] = {
    'bucket': 'MERGE',
    'target_canonical_slug': 'opening-and-closing-checklist-template',
    'reason': 'US FSMA checklist 301 redirected to UK opening-and-closing checklist'
}
plan['ecosure-inspection-checklist'] = {
    'bucket': 'MERGE',
    'target_canonical_slug': 'restaurant-cleaning-checklist',
    'reason': 'US EcoSure checklist 301 redirected to UK restaurant-cleaning-checklist'
}
plan['amazon-seller-and-product-requirements'] = {
    'bucket': 'MERGE',
    'target_canonical_slug': 'food-traceability',
    'reason': 'Platform seller requirements 301 redirected to UK food-traceability log'
}

with open('src/data/page_plan.json', 'w', encoding='utf-8') as f:
    json.dump(plan, f, indent=2)
print("Updated page_plan.json with MERGE status")
