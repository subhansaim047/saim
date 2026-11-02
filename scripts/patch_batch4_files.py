import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Update core_metadata.json
meta_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

meta['cleaning-checklist-template'] = {
    "title": "Free Kitchen Cleaning Schedule Checklist | Saim Dev",
    "desc": "Download a free daily kitchen cleaning schedule and checklist template for UK catering operations. Document two-stage disinfection for EHO inspections.",
    "howTo": [
        "Stage 1: Clean physical surfaces with hot water and detergent to strip grease, crumbs, and organic matter.",
        "Stage 2: Disinfect all pre-cleaned food contact surfaces using a chemical sanitiser conforming to BS EN 1276.",
        "Strictly adhere to manufacturer chemical contact times (typically 30 to 60 seconds) before drying with single-use blue roll.",
        "Record daily supervisor sign-offs in your Safer Food, Better Business (SFBB) diary as statutory due diligence evidence."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2)

print("Updated core_metadata.json for cleaning-checklist-template.")

# 2. Update tool_deep_content.ts
deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    deep_content = f.read()

new_entry = ''',

  "cleaning-checklist-template": {
    directAnswer:
      "A commercial daily kitchen cleaning checklist provides catering teams with an itemised, station-by-station protocol for cleaning and two-stage disinfection. Using structured daily records ensures commercial food businesses meet the hygiene benchmarks required by local authority Environmental Health Officers (EHOs) and complies with retained Regulation (EC) No 852/2004.",
    howTo: [
      "Stage 1: Clean physical surfaces with hot water and detergent to strip grease, crumbs, and organic matter.",
      "Stage 2: Disinfect all pre-cleaned food contact surfaces using a chemical sanitiser conforming to BS EN 1276 or BS EN 13697.",
      "Strictly adhere to manufacturer chemical contact times (typically 30 to 60 seconds) before drying with single-use blue roll.",
      "Clean extraction filters, cookline wheels, and behind fryers on scheduled weekly and monthly rotas.",
      "Record daily supervisor sign-offs in your Safer Food, Better Business (SFBB) diary as statutory due diligence evidence."
    ],
    faqs: [
      {
        q: "What is the two-stage cleaning process in UK commercial catering?",
        a: "The FSA two-stage cleaning method requires staff to first wash surfaces with detergent and hot water to remove surface grease and dirt, followed by applying a BS EN 1276 certified chemical sanitiser left for its stated contact time before wiping dry."
      },
      {
        q: "Why do EHOs check daily kitchen cleaning checklists?",
        a: "Environmental Health Officers review cleaning checklists as primary proof of active hygiene management and due diligence defence under Section 21 of the Food Safety Act 1990."
      },
      {
        q: "How often must commercial extraction grease filters be cleaned?",
        a: "Under TR19 industry fire and hygiene standards, commercial grease filters must be cleaned at least weekly for high-volume fryers and cooklines, and professionally ducted deep cleaned at least annually."
      },
      {
        q: "Can reusable tea towels or bar wipes be used for cleaning prep tables?",
        a: "No. Reusable cloth towels spread pathogenic cross-contamination between kitchen stations. Staff must use single-use disposable blue roll or colour-coded microfibre cloths laundered at >= 82°C."
      },
      {
        q: "Who is responsible for signing off the daily kitchen cleaning checklist?",
        a: "The designated head chef, shift supervisor, or kitchen manager must physically inspect stations at closing and sign off the cleaning sheet."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "cleaning-schedule", "health-inspection-checklist"],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }'''

insert_target = '  "cleaning-schedule": {'
if insert_target in deep_content and '"cleaning-checklist-template":' not in deep_content:
    # insert before cleaning-schedule or right after cleaning-schedule
    deep_content = deep_content.replace(insert_target, insert_target[2:] + new_entry + ',\n\n  "cleaning-schedule": {')
    with open(deep_path, 'w', encoding='utf-8') as f:
        f.write(deep_content)
    print("Added cleaning-checklist-template into tool_deep_content.ts.")
else:
    print("cleaning-checklist-template already in deep content or target not found.")

# 3. Patch TemplateDetailPage.tsx with FoodTraceabilityLogTool
detail_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(detail_path, 'r', encoding='utf-8') as f:
    detail_content = f.read()

import_tr_target = 'import { FridgeTemperatureRecordTool } from "./tools/FridgeTemperatureRecordTool";'
import_tr_repl = '''import { FridgeTemperatureRecordTool } from "./tools/FridgeTemperatureRecordTool";
import { FoodTraceabilityLogTool } from "./tools/FoodTraceabilityLogTool";'''

if import_tr_target in detail_content and 'FoodTraceabilityLogTool' not in detail_content:
    detail_content = detail_content.replace(import_tr_target, import_tr_repl)
    print("Added FoodTraceabilityLogTool import.")

bool_tr_target = '''  const isFridgeRecordTool =
    template.slug === "fridge-temperature-record-sheet-pdf" ||
    template.slug.includes("fridge-temperature-record");'''

bool_tr_repl = '''  const isFridgeRecordTool =
    template.slug === "fridge-temperature-record-sheet-pdf" ||
    template.slug.includes("fridge-temperature-record");

  const isTraceabilityTool =
    template.slug === "food-traceability" ||
    template.slug.includes("traceability");'''

if bool_tr_target in detail_content and 'isTraceabilityTool' not in detail_content:
    detail_content = detail_content.replace(bool_tr_target, bool_tr_repl)
    print("Added isTraceabilityTool boolean check.")

render_tr_target = '''        {/* 4h. Commercial Fridge Temperature Record Sheet & Calibration Log */}
        {isFridgeRecordTool && (
          <FridgeTemperatureRecordTool templateId={template.id} />
        )}'''

render_tr_repl = '''        {/* 4h. Commercial Fridge Temperature Record Sheet & Calibration Log */}
        {isFridgeRecordTool && (
          <FridgeTemperatureRecordTool templateId={template.id} />
        )}

        {/* 4i. Commercial Food Traceability & Supplier Intake Log */}
        {isTraceabilityTool && (
          <FoodTraceabilityLogTool templateId={template.id} />
        )}'''

if render_tr_target in detail_content and 'isTraceabilityTool &&' not in detail_content:
    detail_content = detail_content.replace(render_tr_target, render_tr_repl)
    print("Added FoodTraceabilityLogTool render.")

fallback_tr_target = '!isFridgeRecordTool && ('
fallback_tr_repl = '!isFridgeRecordTool && !isTraceabilityTool && ('

if fallback_tr_target in detail_content:
    detail_content = detail_content.replace(fallback_tr_target, fallback_tr_repl)
    print("Updated fallback condition with !isTraceabilityTool.")

with open(detail_path, 'w', encoding='utf-8') as f:
    f.write(detail_content)

print("Saved TemplateDetailPage.tsx.")
