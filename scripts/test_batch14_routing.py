# scripts/test_batch14_routing.py
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = [
    'hot-holding-temperature',
    'what-is-the-minimum-hot-holding-temperature-for-fried-chicken',
    'cleaning-a-meat-slicer-poster',
    'allergen-poster',
    'proper-method-for-cleaning-dirty-utensils'
]

for s in slugs:
    isRecipe = 'recipe' in s
    isCost = not isRecipe and ('cost' in s or 'margin' in s)
    isAllergen = not isRecipe and not isCost and ('allergen' in s or 'allergy' in s)
    isMasterTemp = 'food-temperature' in s or 'danger-zone' in s or 'hot-holding' in s
    isChecklist = (
        'checklist' in s or 'log' in s or 'schedule' in s or 'sheet' in s or
        'cleaning' in s or 'slicer' in s or 'utensils' in s
    )
    print(f"{s}: isAllergen={isAllergen}, isMasterTemp={isMasterTemp}, isChecklist={isChecklist}")
