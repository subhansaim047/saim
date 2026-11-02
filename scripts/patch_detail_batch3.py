import sys

sys.stdout.reconfigure(encoding='utf-8')

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Imports
import_target = 'import { SafeFoodPrepRulesTool } from "./tools/SafeFoodPrepRulesTool";'
import_repl = '''import { SafeFoodPrepRulesTool } from "./tools/SafeFoodPrepRulesTool";
import { FoodCoolingPosterTool } from "./tools/FoodCoolingPosterTool";
import { WalkInCoolerStorageChartTool } from "./tools/WalkInCoolerStorageChartTool";
import { FridgeTemperatureRecordTool } from "./tools/FridgeTemperatureRecordTool";'''

if import_target in content:
    content = content.replace(import_target, import_repl)
    print("Added imports.")
else:
    print("Could not find import_target!")

# 2. Boolean checks
bool_target = '''  const isSafeFoodPrepTool =
    template.slug === "basic-food-preparation-rules" ||
    template.slug.includes("safe-food-prep") ||
    template.slug.includes("food-preparation-rules");'''

bool_repl = '''  const isSafeFoodPrepTool =
    template.slug === "basic-food-preparation-rules" ||
    template.slug.includes("safe-food-prep") ||
    template.slug.includes("food-preparation-rules");

  const isFoodCoolingTool =
    template.slug === "food-cooling-poster" ||
    template.slug.includes("food-cooling") ||
    template.slug.includes("cooling-poster");

  const isWalkInStorageTool =
    template.slug === "walk-in-cooler-food-storage-chart" ||
    template.slug.includes("walk-in-cooler") ||
    template.slug.includes("food-storage-chart");

  const isFridgeRecordTool =
    template.slug === "fridge-temperature-record-sheet-pdf" ||
    template.slug.includes("fridge-temperature-record");'''

if bool_target in content:
    content = content.replace(bool_target, bool_repl)
    print("Added boolean checks.")
else:
    print("Could not find bool_target!")

# 3. Render block
render_target = '''        {/* 4e. Commercial Safe Food Preparation Rules & Station SOP */}
        {isSafeFoodPrepTool && (
          <SafeFoodPrepRulesTool templateId={template.id} />
        )}'''

render_repl = '''        {/* 4e. Commercial Safe Food Preparation Rules & Station SOP */}
        {isSafeFoodPrepTool && (
          <SafeFoodPrepRulesTool templateId={template.id} />
        )}

        {/* 4f. Commercial Food Cooling Standard & 90-Minute Log */}
        {isFoodCoolingTool && (
          <FoodCoolingPosterTool templateId={template.id} />
        )}

        {/* 4g. Walk-In Cooler Food Storage Shelf Hierarchy Chart */}
        {isWalkInStorageTool && (
          <WalkInCoolerStorageChartTool templateId={template.id} />
        )}

        {/* 4h. Commercial Fridge Temperature Record Sheet & Calibration Log */}
        {isFridgeRecordTool && (
          <FridgeTemperatureRecordTool templateId={template.id} />
        )}'''

if render_target in content:
    content = content.replace(render_target, render_repl)
    print("Added render blocks.")
else:
    print("Could not find render_target!")

# 4. Fallback poster condition
fallback_target = '!isSafeFoodPrepTool && ('
fallback_repl = '!isSafeFoodPrepTool && !isFoodCoolingTool && !isWalkInStorageTool && !isFridgeRecordTool && ('

if fallback_target in content:
    content = content.replace(fallback_target, fallback_repl)
    print("Updated fallback condition.")
else:
    print("Could not find fallback_target!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx successfully.")
