# 1. Update FoodSafetyTemplatesPage.tsx
path_page = 'src/components/FoodSafetyTemplatesPage.tsx'
with open(path_page, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('/food-safety-templates/fridge-temperature-chart', '/food-safety-templates/fridge-temperature-record-sheet-pdf')
content = content.replace('/food-safety-templates/kitchen-opening-and-closing-checklist', '/food-safety-templates/opening-and-closing-checklist-template')

with open(path_page, 'w', encoding='utf-8') as f:
    f.write(content)

print("FoodSafetyTemplatesPage.tsx updated!")

# 2. Update next.config.mjs
path_cfg = 'next.config.mjs'
with open(path_cfg, 'r', encoding='utf-8') as f:
    cfg = f.read()

new_redirects = """      // 4. Hub Cluster link alias fallbacks & missing variants
      {
        source: '/food-safety-templates/fridge-temperature-log',
        destination: '/food-safety-templates/fridge-temperature-record-sheet-pdf',
        permanent: true,
      },
      {
        source: '/food-safety-templates/fridge-temperature-chart',
        destination: '/food-safety-templates/fridge-temperature-record-sheet-pdf',
        permanent: true,
      },
      {
        source: '/food-safety-templates/freezer-temperature-log',
        destination: '/food-safety-templates/freezer-temperature-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/opening-closing-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/chopping-board-guide',
        destination: '/food-safety-templates/chopping-board-colour-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/handwashing-poster',
        destination: '/food-safety-templates/hand-washing-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/delivery-intake-log',
        destination: '/food-safety-templates/delivery-log',
        permanent: true,
      },"""

# Insert right before the closing bracket of redirects array
target = "    ];\n  },"
if "source: '/food-safety-templates/fridge-temperature-log'" not in cfg:
    cfg = cfg.replace(target, new_redirects + "\n" + target)
    with open(path_cfg, 'w', encoding='utf-8') as f:
        f.write(cfg)
    print("next.config.mjs updated with 301 alias redirects!")
else:
    print("next.config.mjs already has alias redirects.")
