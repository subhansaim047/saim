import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Add import
import_target = 'import { HandWashingPosterTool } from "./tools/HandWashingPosterTool";'
import_replacement = 'import { HandWashingPosterTool } from "./tools/HandWashingPosterTool";\nimport { ChoppingBoardColourChartTool } from "./tools/ChoppingBoardColourChartTool";'

if import_target not in text:
    print("Error: import_target not found")
    sys.exit(1)

text = text.replace(import_target, import_replacement, 1)

# 2. Add condition
cond_target = 'const isHandWashingTool =\n    template.slug === "hand-washing-poster" ||\n    template.slug.includes("hand-washing");'
cond_replacement = '''const isHandWashingTool =
    template.slug === "hand-washing-poster" ||
    template.slug.includes("hand-washing");

  const isChoppingBoardTool =
    template.slug === "chopping-board-colour-chart" ||
    template.slug.includes("chopping-board");'''

if cond_target not in text:
    print("Error: cond_target not found")
    sys.exit(1)

text = text.replace(cond_target, cond_replacement, 1)

# 3. Add rendering
render_target = '''        {/* 4c. Commercial Handwashing Poster & 20s Trainer */}
        {isHandWashingTool && (
          <HandWashingPosterTool templateId={template.id} />
        )}'''

render_replacement = '''        {/* 4c. Commercial Handwashing Poster & 20s Trainer */}
        {isHandWashingTool && (
          <HandWashingPosterTool templateId={template.id} />
        )}

        {/* 4d. UK Chopping Board Colour Chart & Classifier */}
        {isChoppingBoardTool && (
          <ChoppingBoardColourChartTool templateId={template.id} />
        )}'''

if render_target not in text:
    print("Error: render_target not found")
    sys.exit(1)

text = text.replace(render_target, render_replacement, 1)

# 4. Exclude from standard poster view
exclude_target = '!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && !isFreezerTool && !isHandWashingTool && ('
exclude_replacement = '!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && !isFreezerTool && !isHandWashingTool && !isChoppingBoardTool && ('

if exclude_target not in text:
    print("Error: exclude_target not found")
    sys.exit(1)

text = text.replace(exclude_target, exclude_replacement, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Successfully patched TemplateDetailPage.tsx for ChoppingBoardColourChartTool")
