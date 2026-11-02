import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/TemplateDetailPage.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add import
old_import = 'import { MeatCookingTemperatureChartTool, MeatCategory } from "./tools/MeatCookingTemperatureChartTool";'
new_import = '''import { MeatCookingTemperatureChartTool, MeatCategory } from "./tools/MeatCookingTemperatureChartTool";
import { MasterFoodTemperatureChartTool } from "./tools/MasterFoodTemperatureChartTool";'''

content = content.replace(old_import, new_import)

# 2. Add isMasterFoodTempTool and update isMeatCookingTool & initialMeat
old_meat_detect = '''  const isMeatCookingTool =
    template.slug.includes("temperature-chart") &&
    (template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish-temperature") ||
      template.slug.includes("food-temperature"));

  const initialMeat: MeatCategory =
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" : "chicken";'''

new_meat_detect = '''  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log";

  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    template.slug.includes("temperature-chart") &&
    (template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish"));

  const initialMeat: MeatCategory =
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";'''

content = content.replace(old_meat_detect, new_meat_detect)

# 3. Add JSX render for MasterFoodTemperatureChartTool
old_meat_jsx = '''        {/* 4j. Commercial Meat & Poultry Cooking Temperature Chart */}
        {(isMeatCookingTool || isHamCookingTool) && (
          <MeatCookingTemperatureChartTool templateId={template.id} initialMeat={initialMeat} />
        )}'''

new_meat_jsx = '''        {/* 4j. Commercial Meat & Poultry Cooking Temperature Chart */}
        {(isMeatCookingTool || isHamCookingTool) && (
          <MeatCookingTemperatureChartTool templateId={template.id} initialMeat={initialMeat} />
        )}

        {/* 4k. UK Commercial Kitchen Master Food Temperature Danger Zone Chart */}
        {isMasterFoodTempTool && (
          <MasterFoodTemperatureChartTool templateId={template.id} />
        )}'''

content = content.replace(old_meat_jsx, new_meat_jsx)

# 4. Update the fallback view exclusion list
old_fallback = '!isHamCookingTool && !isMeatCookingTool && ('
new_fallback = '!isHamCookingTool && !isMeatCookingTool && !isMasterFoodTempTool && ('

content = content.replace(old_fallback, new_fallback)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated TemplateDetailPage.tsx successfully")
