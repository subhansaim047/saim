import re

# 1. Update TemplateDetailPage.tsx
p1 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read()

c1 = c1.replace(
    'alt={template.title}\n              className="max-h-full max-w-full object-contain drop-shadow"\n              loading="eager"',
    'alt={`${template.title} - Free UK Kitchen Compliance Template (PDF Download)`}\n              className="max-h-full max-w-full object-contain drop-shadow"\n              loading="eager"'
)

c1 = c1.replace(
    'alt={template.title}\n                loading="eager"\n                decoding="async"\n                className="max-h-[600px] print:max-h-none print:w-full w-auto object-contain drop-shadow-sm rounded-lg"',
    'alt={`${template.title} - Printable UK Food Hygiene Standard Document (FSA Aligned)`}\n                loading="eager"\n                decoding="async"\n                className="max-h-[600px] print:max-h-none print:w-full w-auto object-contain drop-shadow-sm rounded-lg"'
)

with open(p1, "w", encoding="utf-8") as f:
    f.write(c1)
print("Updated TemplateDetailPage.tsx alt tags!")

# 2. Update FoodSafetyTemplatesPage.tsx
p2 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\FoodSafetyTemplatesPage.tsx"
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read()

c2 = c2.replace(
    'alt={template.title}\n                      className="max-h-full max-w-full object-contain drop-shadow-sm"',
    'alt={`${template.title} - Free UK Food Hygiene Template (PDF Download)`}\n                      className="max-h-full max-w-full object-contain drop-shadow-sm"'
)

with open(p2, "w", encoding="utf-8") as f:
    f.write(c2)
print("Updated FoodSafetyTemplatesPage.tsx alt tags!")
