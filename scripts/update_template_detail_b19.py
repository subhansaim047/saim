import re

file_path = 'src/components/TemplateDetailPage.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Import FreezeDryingChartTool
import_line = 'import { FreezeDryingChartTool } from "./tools/FreezeDryingChartTool";\n'
if 'FreezeDryingChartTool' not in content:
    content = content.replace(
        'import { MeatCookingTemperatureChartTool, MeatCategory } from "./tools/MeatCookingTemperatureChartTool";',
        import_line + 'import { MeatCookingTemperatureChartTool, MeatCategory } from "./tools/MeatCookingTemperatureChartTool";'
    )
    print("Added FreezeDryingChartTool import")

# 2. Add isFreezeDryingTool boolean
if 'const isFreezeDryingTool =' not in content:
    target_pos = '  const isWalkInStorageTool ='
    freeze_dry_flag = '''  const isFreezeDryingTool =
    template.slug === "freeze-drying-time-chart" ||
    template.slug.includes("freeze-drying");

'''
    content = content.replace(target_pos, freeze_dry_flag + target_pos)
    print("Added isFreezeDryingTool definition")

# 3. Update isMasterFoodTempTool to include juice-pasteurization
old_master = 'template.slug.includes("milk-pasteurization");'
new_master = 'template.slug.includes("milk-pasteurization") ||\n    template.slug.includes("juice-pasteurization");'
if 'template.slug.includes("juice-pasteurization")' not in content:
    content = content.replace(old_master, new_master)
    print("Updated isMasterFoodTempTool for juice-pasteurization")

# 4. Update isMeatCookingTool to include poultry
if 'template.slug.includes("poultry")' not in content:
    old_meat_cond = 'template.slug.includes("turkey") ||'
    new_meat_cond = 'template.slug.includes("turkey") ||\n      template.slug.includes("poultry") ||'
    content = content.replace(old_meat_cond, new_meat_cond)
    print("Updated isMeatCookingTool for poultry")

# 5. Update initialMeat for poultry
if 'template.slug.includes("poultry") ? "poultry"' not in content:
    old_initial = 'template.slug.includes("turkey") ? "turkey" :'
    new_initial = 'template.slug.includes("turkey") ? "turkey" :\n    template.slug.includes("poultry") ? "poultry" :'
    content = content.replace(old_initial, new_initial)
    print("Updated initialMeat for poultry")

# 6. Render FreezeDryingChartTool in JSX
if '<FreezeDryingChartTool templateId={template.slug} />' not in content:
    old_jsx = '{isHamCookingTool ? ('
    new_jsx = '{isFreezeDryingTool ? (\n                <FreezeDryingChartTool templateId={template.slug} />\n              ) : isHamCookingTool ? ('
    content = content.replace(old_jsx, new_jsx)
    print("Rendered FreezeDryingChartTool in JSX")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx successfully")
