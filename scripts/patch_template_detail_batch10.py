import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/TemplateDetailPage.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Import
old_import = 'import { FoodFlowChartTool } from "./tools/FoodFlowChartTool";'
new_import = '''import { FoodFlowChartTool } from "./tools/FoodFlowChartTool";
import { ProductSpecificationTool } from "./tools/ProductSpecificationTool";'''

content = content.replace(old_import, new_import)

# 2. Add isProductSpecTool
old_detect = '''  const isConsumerAdvisoryTool =
    template.slug === "consumer-advisory" ||
    template.slug.includes("consumer-advisory");'''

new_detect = '''  const isConsumerAdvisoryTool =
    template.slug === "consumer-advisory" ||
    template.slug.includes("consumer-advisory");

  const isProductSpecTool =
    template.slug === "product-specification-template" ||
    template.slug.includes("product-specification");'''

content = content.replace(old_detect, new_detect)

# 3. Add JSX render
old_render = '''        {/* 4m. Commercial Kitchen HACCP Food Flow Chart Process Map */}
        {isFoodFlowChartTool && (
          <FoodFlowChartTool templateId={template.id} />
        )}'''

new_render = '''        {/* 4m. Commercial Kitchen HACCP Food Flow Chart Process Map */}
        {isFoodFlowChartTool && (
          <FoodFlowChartTool templateId={template.id} />
        )}

        {/* 4n. Commercial Food Product Technical Specification Builder */}
        {isProductSpecTool && (
          <ProductSpecificationTool templateId={template.id} />
        )}'''

content = content.replace(old_render, new_render)

# 4. Fallback view condition
old_fallback = '!isConsumerAdvisoryTool && !isFoodFlowChartTool && ('
new_fallback = '!isConsumerAdvisoryTool && !isFoodFlowChartTool && !isProductSpecTool && ('

content = content.replace(old_fallback, new_fallback)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated TemplateDetailPage.tsx with ProductSpecificationTool successfully")
