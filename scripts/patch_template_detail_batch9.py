import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/TemplateDetailPage.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Imports
old_import = 'import { MasterFoodTemperatureChartTool } from "./tools/MasterFoodTemperatureChartTool";'
new_import = '''import { MasterFoodTemperatureChartTool } from "./tools/MasterFoodTemperatureChartTool";
import { ConsumerAdvisoryNoticeTool } from "./tools/ConsumerAdvisoryNoticeTool";
import { FoodFlowChartTool } from "./tools/FoodFlowChartTool";'''

content = content.replace(old_import, new_import)

# 2. Add isConsumerAdvisoryTool, isFoodFlowChartTool and update isHaccpTool
old_haccp = '''  const isHaccpTool =
    template.slug === "haccp-plan-builder" ||
    template.slug.includes("haccp") ||
    template.slug.includes("hazard-analysis");'''

new_haccp = '''  const isHaccpTool =
    template.slug === "haccp-plan-builder" ||
    template.slug.includes("haccp") ||
    template.slug.includes("food-safety-plan") ||
    template.slug.includes("hazard-analysis");

  const isConsumerAdvisoryTool =
    template.slug === "consumer-advisory" ||
    template.slug.includes("consumer-advisory");

  const isFoodFlowChartTool =
    template.slug === "food-flow-chart" ||
    template.slug.includes("food-flow");'''

content = content.replace(old_haccp, new_haccp)

# 3. Add JSX rendering for 4l and 4m
old_render = '''        {/* 4k. UK Commercial Kitchen Master Food Temperature Danger Zone Chart */}
        {isMasterFoodTempTool && (
          <MasterFoodTemperatureChartTool templateId={template.id} />
        )}'''

new_render = '''        {/* 4k. UK Commercial Kitchen Master Food Temperature Danger Zone Chart */}
        {isMasterFoodTempTool && (
          <MasterFoodTemperatureChartTool templateId={template.id} />
        )}

        {/* 4l. Consumer Advisory Notice & Signage Tool */}
        {isConsumerAdvisoryTool && (
          <ConsumerAdvisoryNoticeTool templateId={template.id} />
        )}

        {/* 4m. Commercial Kitchen HACCP Food Flow Chart Process Map */}
        {isFoodFlowChartTool && (
          <FoodFlowChartTool templateId={template.id} />
        )}'''

content = content.replace(old_render, new_render)

# 4. Update fallback view condition
old_fallback = '!isHamCookingTool && !isMeatCookingTool && !isMasterFoodTempTool && ('
new_fallback = '!isHamCookingTool && !isMeatCookingTool && !isMasterFoodTempTool && !isConsumerAdvisoryTool && !isFoodFlowChartTool && ('

content = content.replace(old_fallback, new_fallback)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated TemplateDetailPage.tsx with ConsumerAdvisory and FoodFlowChart tools successfully")
