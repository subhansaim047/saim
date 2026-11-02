path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update isFoodFlowChartTool
target_flow = '''  const isFoodFlowChartTool =
    template.slug === "food-flow-chart" ||
    template.slug.includes("food-flow");'''

replacement_flow = '''  const isFoodFlowChartTool =
    template.slug === "food-flow-chart" ||
    template.slug.includes("food-flow") ||
    template.slug.includes("flow-chart");'''

if target_flow in content:
    content = content.replace(target_flow, replacement_flow, 1)
    print("Updated isFoodFlowChartTool")
else:
    print("Could not find target_flow")

# 2. Update isMeatCookingTool and initialMeat
target_meat = '''  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    (template.slug.includes("temperature-chart") || template.slug.includes("temp-chart")) &&
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

if target_meat in content:
    content = content.replace(target_meat, replacement_meat, 1)
    print("Updated isMeatCookingTool and initialMeat")
else:
    print("Could not find target_meat")

# 3. Update isChecklistOrLog to include waste
target_chk = '''      template.slug.includes("cleaning") ||
      template.slug.includes("slicer") ||
      template.slug.includes("utensil"));'''

replacement_chk = '''      template.slug.includes("cleaning") ||
      template.slug.includes("slicer") ||
      template.slug.includes("waste") ||
      template.slug.includes("utensil"));'''

if target_chk in content:
    content = content.replace(target_chk, replacement_chk, 1)
    print("Updated isChecklistOrLog to include waste")
else:
    print("Could not find target_chk")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished updating TemplateDetailPage.tsx")
