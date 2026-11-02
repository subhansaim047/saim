import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/TemplateDetailPage.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

old_block = '''  const isHaccpTool =
    template.slug.includes("haccp") ||
    template.slug.includes("flow-chart") ||
    template.slug.includes("hazard-analysis") ||
    template.slug.includes("food-safety-plan") ||
    template.slug.includes("critical-control-point");'''

new_block = '''  const isFoodFlowChartTool =
    template.slug === "food-flow-chart" ||
    template.slug.includes("food-flow");

  const isConsumerAdvisoryTool =
    template.slug === "consumer-advisory" ||
    template.slug.includes("consumer-advisory");

  const isHaccpTool =
    !isFoodFlowChartTool &&
    (template.slug.includes("haccp") ||
      template.slug.includes("hazard-analysis") ||
      template.slug.includes("food-safety-plan") ||
      template.slug.includes("critical-control-point"));'''

if old_block in content:
    content = content.replace(old_block, new_block)
    print("Replaced isHaccpTool with isFoodFlowChartTool and isConsumerAdvisoryTool successfully")
else:
    print("Could not match old_block!")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx")
