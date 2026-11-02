import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
import_target = 'import { FoodSafetyQuizTool } from "./tools/FoodSafetyQuizTool";'
import_replacement = 'import { FoodSafetyQuizTool } from "./tools/FoodSafetyQuizTool";\nimport { FreezerTemperatureChartTool } from "./tools/FreezerTemperatureChartTool";'

if import_target not in content:
    print("Error: import_target not found")
    sys.exit(1)

content = content.replace(import_target, import_replacement, 1)

# 2. Add isFreezerTool condition
condition_target = 'const isQuizTool =\n    template.slug.includes("quiz") ||\n    template.title.toLowerCase().includes("quiz");'
condition_replacement = '''const isQuizTool =
    template.slug.includes("quiz") ||
    template.title.toLowerCase().includes("quiz");

  const isFreezerTool =
    template.slug === "freezer-temperature-chart" ||
    template.slug.includes("freezer-temperature");'''

if condition_target not in content:
    # Try normalized whitespace
    print("Warning: strict condition_target not found, trying regex or relaxed matching")
    import re
    m = re.search(r'const isQuizTool =\s+template\.slug\.includes\("quiz"\)\s*\|\|\s*template\.title\.toLowerCase\(\)\.includes\("quiz"\);', content)
    if not m:
        print("Error: isQuizTool pattern not found")
        sys.exit(1)
    matched = m.group(0)
    content = content.replace(matched, matched + '\n\n  const isFreezerTool =\n    template.slug === "freezer-temperature-chart" ||\n    template.slug.includes("freezer-temperature");', 1)
else:
    content = content.replace(condition_target, condition_replacement, 1)

# 3. Add tool rendering
render_target = '''        {/* 4. Food Safety Level 2 Hygiene Exam */}
        {isQuizTool && (
          <FoodSafetyQuizTool templateId={template.id} />
        )}'''

render_replacement = '''        {/* 4. Food Safety Level 2 Hygiene Exam */}
        {isQuizTool && (
          <FoodSafetyQuizTool templateId={template.id} />
        )}

        {/* 4b. Commercial Freezer Temperature Chart & EHO Log */}
        {isFreezerTool && (
          <FreezerTemperatureChartTool templateId={template.id} />
        )}'''

if render_target not in content:
    print("Error: render_target not found")
    sys.exit(1)

content = content.replace(render_target, render_replacement, 1)

# 4. Exclude from standard poster view
poster_target = '!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && ('
poster_replacement = '!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && !isFreezerTool && ('

if poster_target not in content:
    print("Error: poster_target not found")
    sys.exit(1)

content = content.replace(poster_target, poster_replacement, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully patched TemplateDetailPage.tsx")
