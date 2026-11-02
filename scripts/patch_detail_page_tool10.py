import sys

sys.stdout.reconfigure(encoding='utf-8')

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add import
import_target = 'import { ChoppingBoardColourChartTool } from "./tools/ChoppingBoardColourChartTool";'
import_repl = 'import { ChoppingBoardColourChartTool } from "./tools/ChoppingBoardColourChartTool";\nimport { SafeFoodPrepRulesTool } from "./tools/SafeFoodPrepRulesTool";'

if import_target in content:
    content = content.replace(import_target, import_repl)
    print("Added SafeFoodPrepRulesTool import.")
else:
    print("Could not find import target!")

# 2. Add isSafeFoodPrepTool variable
var_target = '''  const isChoppingBoardTool =
    template.slug === "chopping-board-colour-chart" ||
    template.slug.includes("chopping-board");'''

var_repl = '''  const isChoppingBoardTool =
    template.slug === "chopping-board-colour-chart" ||
    template.slug.includes("chopping-board");

  const isSafeFoodPrepTool =
    template.slug === "basic-food-preparation-rules" ||
    template.slug.includes("safe-food-prep") ||
    template.slug.includes("food-preparation-rules");'''

if var_target in content:
    content = content.replace(var_target, var_repl)
    print("Added isSafeFoodPrepTool condition.")
else:
    print("Could not find var target!")

# 3. Add component render
render_target = '''        {/* 4d. UK Chopping Board Colour Chart & Classifier */}
        {isChoppingBoardTool && (
          <ChoppingBoardColourChartTool templateId={template.id} />
        )}'''

render_repl = '''        {/* 4d. UK Chopping Board Colour Chart & Classifier */}
        {isChoppingBoardTool && (
          <ChoppingBoardColourChartTool templateId={template.id} />
        )}

        {/* 4e. Commercial Safe Food Preparation Rules & Station SOP */}
        {isSafeFoodPrepTool && (
          <SafeFoodPrepRulesTool templateId={template.id} />
        )}'''

if render_target in content:
    content = content.replace(render_target, render_repl)
    print("Added SafeFoodPrepRulesTool rendering.")
else:
    print("Could not find render target!")

# 4. Update fallback poster check
fallback_target = '!isFreezerTool && !isHandWashingTool && !isChoppingBoardTool && ('
fallback_repl = '!isFreezerTool && !isHandWashingTool && !isChoppingBoardTool && !isSafeFoodPrepTool && ('

if fallback_target in content:
    content = content.replace(fallback_target, fallback_repl)
    print("Updated fallback poster condition.")
else:
    print("Could not find fallback target!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx successfully.")
