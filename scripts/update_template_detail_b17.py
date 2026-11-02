path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update isWalkInStorageTool
target_storage = '''  const isWalkInStorageTool =
    template.slug === "walk-in-cooler-food-storage-chart" ||
    template.slug.includes("walk-in-cooler") ||
    template.slug.includes("food-storage-chart");'''

replacement_storage = '''  const isWalkInStorageTool =
    template.slug === "walk-in-cooler-food-storage-chart" ||
    template.slug.includes("walk-in-cooler") ||
    template.slug.includes("food-storage") ||
    template.slug.includes("storage-chart") ||
    template.slug.includes("shelf-life");'''

if target_storage in content:
    content = content.replace(target_storage, replacement_storage, 1)
    print("Updated isWalkInStorageTool")
else:
    print("Could not find target_storage in TemplateDetailPage.tsx")

# 2. Update isChecklistOrLog
target_chk = '''      template.slug.includes("waste") ||
      template.slug.includes("pest") ||
      template.slug.includes("utensil"));'''

replacement_chk = '''      template.slug.includes("waste") ||
      template.slug.includes("pest") ||
      template.slug.includes("sanitation") ||
      template.slug.includes("procedure") ||
      template.slug.includes("utensil"));'''

if target_chk in content:
    content = content.replace(target_chk, replacement_chk, 1)
    print("Updated isChecklistOrLog")
else:
    print("Could not find target_chk in TemplateDetailPage.tsx")

# 3. Update isHaccpTool
target_haccp = '''  const isHaccpTool =
    !isFoodFlowChartTool &&
    (template.slug.includes("haccp") ||
      template.slug.includes("hazard-analysis") ||
      template.slug.includes("food-safety-plan") ||
      template.slug.includes("critical-control-point"));'''

replacement_haccp = '''  const isHaccpTool =
    !isFoodFlowChartTool &&
    (template.slug.includes("haccp") ||
      template.slug.includes("hazard-analysis") ||
      template.slug.includes("food-safety-plan") ||
      template.slug.includes("critical-control") ||
      template.slug.includes("critical-control-point"));'''

if target_haccp in content:
    content = content.replace(target_haccp, replacement_haccp, 1)
    print("Updated isHaccpTool")
else:
    print("Could not find target_haccp in TemplateDetailPage.tsx")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished writing TemplateDetailPage.tsx for Batch 17")
