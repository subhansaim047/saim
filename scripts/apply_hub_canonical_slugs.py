import re

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\FoodSafetyTemplatesPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
if 'import { getCanonicalTemplateSlug } from "@/lib/canonical-slugs";' not in content:
    content = content.replace(
        'import { isOffAudience } from "@/lib/off-audience";',
        'import { isOffAudience } from "@/lib/off-audience";\nimport { getCanonicalTemplateSlug } from "@/lib/canonical-slugs";'
    )

# 2. Replace href=`/food-safety-templates/${template.slug}`
content = content.replace(
    'href={`/food-safety-templates/${template.slug}`}',
    'href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}'
)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated FoodSafetyTemplatesPage.tsx with canonical slugs!")
