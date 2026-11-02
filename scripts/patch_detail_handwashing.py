import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Add import
import_target = 'import { FreezerTemperatureChartTool } from "./tools/FreezerTemperatureChartTool";'
import_replacement = 'import { FreezerTemperatureChartTool } from "./tools/FreezerTemperatureChartTool";\nimport { HandWashingPosterTool } from "./tools/HandWashingPosterTool";'

if import_target not in text:
    print("Error: import_target not found")
    sys.exit(1)

text = text.replace(import_target, import_replacement, 1)

# 2. Add condition
cond_target = 'const isFreezerTool =\n    template.slug === "freezer-temperature-chart" ||\n    template.slug.includes("freezer-temperature");'
cond_replacement = '''const isFreezerTool =
    template.slug === "freezer-temperature-chart" ||
    template.slug.includes("freezer-temperature");

  const isHandWashingTool =
    template.slug === "hand-washing-poster" ||
    template.slug.includes("hand-washing");'''

if cond_target not in text:
    print("Error: cond_target not found")
    sys.exit(1)

text = text.replace(cond_target, cond_replacement, 1)

# 3. Add rendering
render_target = '''        {/* 4b. Commercial Freezer Temperature Chart & EHO Log */}
        {isFreezerTool && (
          <FreezerTemperatureChartTool templateId={template.id} />
        )}'''

render_replacement = '''        {/* 4b. Commercial Freezer Temperature Chart & EHO Log */}
        {isFreezerTool && (
          <FreezerTemperatureChartTool templateId={template.id} />
        )}

        {/* 4c. Commercial Handwashing Poster & 20s Trainer */}
        {isHandWashingTool && (
          <HandWashingPosterTool templateId={template.id} />
        )}'''

if render_target not in text:
    print("Error: render_target not found")
    sys.exit(1)

text = text.replace(render_target, render_replacement, 1)

# 4. Exclude from standard poster view
exclude_target = '!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && !isFreezerTool && ('
exclude_replacement = '!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && !isFreezerTool && !isHandWashingTool && ('

if exclude_target not in text:
    print("Error: exclude_target not found")
    sys.exit(1)

text = text.replace(exclude_target, exclude_replacement, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Successfully patched TemplateDetailPage.tsx for HandWashingPosterTool")
