path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update isMasterFoodTempTool to include milk
target_master = '''  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log" ||
    template.slug === "food-temperatures-poster" ||
    template.slug.includes("food-temperatures-poster") ||
    template.slug === "danger-zone-for-food" ||
    template.slug.includes("danger-zone") ||
    template.slug.includes("hot-holding");'''

replacement_master = '''  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log" ||
    template.slug === "food-temperatures-poster" ||
    template.slug.includes("food-temperatures-poster") ||
    template.slug === "danger-zone-for-food" ||
    template.slug.includes("danger-zone") ||
    template.slug.includes("hot-holding") ||
    template.slug.includes("milk-pasteurization");'''

if target_master in content:
    content = content.replace(target_master, replacement_master, 1)
    print("Updated isMasterFoodTempTool to include milk")
else:
    print("Could not find target_master in TemplateDetailPage.tsx")

# 2. Update isWalkInStorageTool to include expiration, leftover, butter, canned
target_storage = '''  const isWalkInStorageTool =
    template.slug === "walk-in-cooler-food-storage-chart" ||
    template.slug.includes("walk-in-cooler") ||
    template.slug.includes("food-storage") ||
    template.slug.includes("storage-chart") ||
    template.slug.includes("shelf-life");'''

replacement_storage = '''  const isWalkInStorageTool =
    template.slug === "walk-in-cooler-food-storage-chart" ||
    template.slug.includes("walk-in-cooler") ||
    template.slug.includes("food-storage") ||
    template.slug.includes("storage-chart") ||
    template.slug.includes("shelf-life") ||
    template.slug.includes("expiration") ||
    template.slug.includes("canned") ||
    template.slug.includes("leftover") ||
    template.slug.includes("butter");'''

if target_storage in content:
    content = content.replace(target_storage, replacement_storage, 1)
    print("Updated isWalkInStorageTool to include expiration, canned, leftover, butter")
else:
    print("Could not find target_storage in TemplateDetailPage.tsx")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished writing TemplateDetailPage.tsx for Batch 18")
