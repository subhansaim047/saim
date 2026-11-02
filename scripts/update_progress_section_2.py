with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "| 1 | [Tools Hub](https://www.saimdev.site/tools) | `free kitchen compliance tools uk` | `todo` | `app/tools/page.tsx` |",
    "| 1 | [Tools Hub](https://www.saimdev.site/tools) | `free kitchen compliance tools uk` | `done` | `app/tools/page.tsx` (FSA-aligned direct compliance answer, 6 topical clusters) |"
)
c = c.replace(
    "| 2 | [ppds-label-generator](https://www.saimdev.site/tools/ppds-label-generator) | `natashas law ppds food label generator uk` | `todo` | `app/tools/ppds-label-generator/page.tsx` |",
    "| 2 | [ppds-label-generator](https://www.saimdev.site/tools/ppds-label-generator) | `natashas law ppds food label generator uk` | `done` | `app/tools/ppds-label-generator/page.tsx` (Typo fix £250, direct answer summary, A4 label generator) |"
)
c = c.replace(
    "| 3 | [food-cost-calculator](https://www.saimdev.site/tools/food-cost-calculator) | `commercial kitchen food cost calculator uk` | `todo` | `app/tools/food-cost-calculator/page.tsx` |",
    "| 3 | [food-cost-calculator](https://www.saimdev.site/tools/food-cost-calculator) | `commercial kitchen food cost calculator uk` | `done` | `app/tools/food-cost-calculator/page.tsx` (British English 'standardised', 1500w guide, GP% formulas) |"
)
c = c.replace(
    "| 4 | [allergen-matrix-generator](https://www.saimdev.site/tools/allergen-matrix-generator) | `free 14 allergen matrix generator uk` | `todo` | `app/tools/allergen-matrix-generator/page.tsx` |",
    "| 4 | [allergen-matrix-generator](https://www.saimdev.site/tools/allergen-matrix-generator) | `free 14 allergen matrix generator uk` | `done` | `app/tools/allergen-matrix-generator/page.tsx` (Direct answer summary, 14 allergen filters, print layout) |"
)
c = c.replace(
    "| 5 | [recipe-batch-calculator](https://www.saimdev.site/tools/recipe-batch-calculator) | `commercial recipe scaler calculator uk` | `todo` | `app/tools/recipe-batch-calculator/page.tsx` |",
    "| 5 | [recipe-batch-calculator](https://www.saimdev.site/tools/recipe-batch-calculator) | `commercial recipe scaler calculator uk` | `done` | `app/tools/recipe-batch-calculator/page.tsx` (British English 'standardised', direct answer summary, recipe scaler) |"
)
c = c.replace(
    "| 6 | [Food Safety Templates Hub](https://www.saimdev.site/food-safety-templates) | `free food safety templates uk` | `todo` | `app/food-safety-templates/page.tsx` |",
    "| 6 | [Food Safety Templates Hub](https://www.saimdev.site/food-safety-templates) | `free food safety templates uk` | `done` | `app/food-safety-templates/page.tsx` (Canonical 308 redirect to /tools) |"
)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated Section 2 in CONTENT_PROGRESS.md")
