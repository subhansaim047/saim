import os

f1 = 'src/components/TemplateDetailPage.tsx'
with open(f1, 'r', encoding='utf-8') as fp:
    c1 = fp.read()
c1 = c1.replace('DEDICATED INTERACTIVE TOOLS MATCHING FOODDOCS FUNCTIONALITY', 'DEDICATED INTERACTIVE COMPLIANCE AND KITCHEN TOOLS')
with open(f1, 'w', encoding='utf-8') as fp:
    fp.write(c1)
print(f"Updated {f1}")

f2 = 'src/components/tools/FoodCostCalculatorTool.tsx'
with open(f2, 'r', encoding='utf-8') as fp:
    c2 = fp.read()
c2 = c2.replace('TABLE 3 IN FOODDOCS', 'TABLE 3 IN RECIPE STANDARDS')
with open(f2, 'w', encoding='utf-8') as fp:
    fp.write(c2)
print(f"Updated {f2}")
