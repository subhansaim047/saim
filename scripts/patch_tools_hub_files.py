files = [
    'app/tools/food-cost-calculator/page.tsx',
    'app/tools/allergen-matrix-generator/page.tsx',
    'app/tools/recipe-batch-calculator/page.tsx'
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        c = f.read()

    c = c.replace('return to all kitchen tools', 'Return to All Kitchen Tools')
    c = c.replace('standardized', 'standardised')

    with open(fpath, 'w', encoding='utf-8', newline='\n') as f:
        f.write(c)

    print(f'Updated {fpath}')
