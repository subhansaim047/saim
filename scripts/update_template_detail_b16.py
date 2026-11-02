path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update isMeatCookingTool
target_meat = '''  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    (template.slug.includes("temperature-chart") ||
      template.slug.includes("temp-chart") ||
      template.slug.includes("pasteurization-chart") ||
      template.slug.includes("pasteurisation-chart")) &&
    (template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish") ||
      template.slug.includes("burger"));

  const initialMeat: MeatCategory =
    template.slug.includes("turkey") ? "turkey" :
    template.slug.includes("burger") ? "burger" :
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";'''

replacement_meat = '''  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    (template.slug.includes("temperature-chart") ||
      template.slug.includes("temp-chart") ||
      template.slug.includes("cooking-chart") ||
      template.slug.includes("pasteurization-chart") ||
      template.slug.includes("pasteurisation-chart")) &&
    (template.slug.includes("meat") ||
      template.slug.includes("steak") ||
      template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish") ||
      template.slug.includes("burger"));

  const initialMeat: MeatCategory =
    template.slug.includes("turkey") ? "turkey" :
    (template.slug.includes("steak") || template.slug.includes("beef") || template.slug.includes("meat")) ? "beef" :
    template.slug.includes("burger") ? "burger" :
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";'''

if target_meat in content:
    content = content.replace(target_meat, replacement_meat, 1)
    print("Updated isMeatCookingTool and initialMeat for Batch 16")
else:
    print("Could not find target_meat in TemplateDetailPage.tsx")

# 2. Update isChecklistOrLog
target_chk = '''  const isChecklistOrLog =
    !isRecipeTool &&
    !isCostTool &&
    !isHaccpTool &&
    !isQuizTool &&
    !isAllergenTool &&
    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("closing") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection") ||
      template.slug.includes("cleaning") ||
      template.slug.includes("slicer") ||
      template.slug.includes("waste") ||
      template.slug.includes("utensil"));'''

replacement_chk = '''  const isChecklistOrLog =
    !isRecipeTool &&
    !isCostTool &&
    !isHaccpTool &&
    !isQuizTool &&
    !isAllergenTool &&
    !isProductSpecTool &&
    !isUtensilsTool &&
    !isMeatCookingTool &&
    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("closing") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection") ||
      template.slug.includes("cleaning") ||
      template.slug.includes("slicer") ||
      template.slug.includes("waste") ||
      template.slug.includes("pest") ||
      template.slug.includes("utensil"));'''

if target_chk in content:
    content = content.replace(target_chk, replacement_chk, 1)
    print("Updated isChecklistOrLog for Batch 16")
else:
    print("Could not find target_chk in TemplateDetailPage.tsx")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished writing TemplateDetailPage.tsx")
