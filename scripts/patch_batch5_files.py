import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Update core_metadata.json
meta_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

meta['cleaning-restaurant'] = {
    "title": "Free Restaurant Deep Cleaning Plan | Saim Dev",
    "desc": "Download a free full restaurant deep cleaning plan template for UK catering kitchens. Schedule canopy, fryer, and floor sanitisation for EHO audits.",
    "howTo": [
        "Divide the restaurant into primary deep-cleaning zones: cookline, wash-up, refrigeration, and dining room.",
        "Assign specific frequencies: weekly filter degreasing, monthly equipment pull-outs, quarterly duct deep cleans.",
        "Use certified BS EN 1276 chemical degreasers and disinfectants with correct dwell times.",
        "Record duty manager verification and employee signatures in the kitchen compliance log."
    ]
}

meta['haccp-audit'] = {
    "title": "Free Commercial HACCP Audit Checklist | Saim Dev",
    "desc": "Download a free commercial HACCP audit checklist template for UK food businesses. Inspect Critical Control Points and verify records for EHO inspections.",
    "howTo": [
        "Review each operational stage from goods receiving through storage, prep, cooking, and hot holding.",
        "Check that calibrated probe thermometer logs are complete with zero missing shift records.",
        "Verify that corrective action procedures are documented for any temperature excursions.",
        "Archive completed audit sheets in your Safer Food, Better Business (SFBB) management folder."
    ]
}

meta['haccp-risk-assessment'] = {
    "title": "Free HACCP Risk Assessment & CCP Matrix | Saim Dev",
    "desc": "Free HACCP risk assessment matrix template for UK catering kitchens. Evaluate biological, chemical, and physical hazards to define Critical Control Points.",
    "howTo": [
        "List all process steps from supplier intake and raw butchery to chilling, reheating, and service.",
        "Identify specific microbiological, physical, chemical, and allergenic hazards at each step.",
        "Apply the Codex Alimentarius decision tree to determine whether the hazard is a true Critical Control Point.",
        "Establish measurable critical limits (e.g. core temp >= 75°C for 30 seconds) and corrective action logs."
    ]
}

meta['restaurant-deep-cleaning-checklist'] = {
    "title": "Free Restaurant Deep Cleaning Checklist | Saim Dev",
    "desc": "Download our free restaurant deep cleaning checklist for UK commercial kitchens. Organise weekly and monthly deep clean rotas for EHO hygiene compliance.",
    "howTo": [
        "Schedule heavy-duty deep cleans during closed kitchen hours to prevent chemical overspray.",
        "Pull out mobile cookline ranges and combi ovens to deep clean and degrease floor drainage channels.",
        "Dismantle and soak commercial fryer baskets, extraction baffle filters, and mixer attachments.",
        "Have the shift supervisor inspect all items with a torch and sign off completed tasks."
    ]
}

meta['ham-cooking-temperature-chart'] = {
    "title": "Free Ham Cooking Temperature Chart | Saim Dev",
    "desc": "Free ham cooking temperature chart for UK commercial kitchens. Calculate gammon roasting times and verify 75°C core temperatures for safe catering.",
    "howTo": [
        "Select the ham or gammon cut: bone-in joint, boneless rolled roast, or carvery glazed ham.",
        "Weigh the raw meat joint and calculate roasting duration based on oven temperature and weight.",
        "Insert a sanitised digital probe thermometer into the thickest part of the meat away from the bone.",
        "Verify the internal core reaches at least 75°C for 30 seconds (82°C in Scotland) before resting."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2)

print("Updated core_metadata.json for Batch 5.")

# 2. Update tool_deep_content.ts
deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    deep_content = f.read()

batch5_deep_entries = '''
  "cleaning-restaurant": {
    directAnswer:
      "A full restaurant deep cleaning plan establishes scheduled, intensive sanitation rotas for kitchen equipment, ductwork, ceilings, and refrigeration compressors beyond daily wipe-downs. Operating a documented deep cleaning protocol ensures catering facilities satisfy BS EN 1276 disinfection standards and pass UK Environmental Health Officer (EHO) structural condition audits.",
    howTo: [
      "Divide the restaurant into primary deep-cleaning zones: cookline, wash-up, refrigeration, and dining room.",
      "Assign specific frequencies: weekly filter degreasing, monthly equipment pull-outs, quarterly duct deep cleans.",
      "Use certified BS EN 1276 chemical degreasers and disinfectants with correct dwell times.",
      "Record duty manager verification and employee signatures in the kitchen compliance log."
    ],
    faqs: [
      {
        q: "How often should commercial restaurant kitchens be deep cleaned?",
        a: "Kitchens should undergo internal deep cleaning monthly (pulling out equipment, scrubbing walls, washing filters) and professional specialist canopy/duct deep cleaning every 6 to 12 months under TR19 insurance standards."
      },
      {
        q: "What chemicals are legally required for restaurant deep cleaning?",
        a: "Kitchen degreasers and chemical sanitisers must meet BS EN 1276 or BS EN 13697 standards to ensure destruction of pathogenic bacteria including Listeria and Salmonella."
      },
      {
        q: "Do EHOs ask to see deep cleaning schedules during inspections?",
        a: "Yes. Inspectors inspect behind cookline equipment and request documented deep cleaning rotas as evidence under the 'Structural condition and cleanliness' pillar of the Food Hygiene Rating Scheme."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "cleaning-schedule", "restaurant-deep-cleaning-checklist"],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "haccp-audit": {
    directAnswer:
      "A commercial HACCP audit checklist provides food business operators with a structured self-inspection tool to evaluate operational Critical Control Points (CCPs), monitoring records, and corrective action logs. Regular internal audits prepare commercial kitchens for local authority food hygiene inspections under Regulation (EC) No 852/2004.",
    howTo: [
      "Review each operational stage from goods receiving through storage, prep, cooking, and hot holding.",
      "Check that calibrated probe thermometer logs are complete with zero missing shift records.",
      "Verify that corrective action procedures are documented for any temperature excursions.",
      "Archive completed audit sheets in your Safer Food, Better Business (SFBB) management folder."
    ],
    faqs: [
      {
        q: "How often should a food business conduct an internal HACCP audit?",
        a: "Commercial catering businesses should conduct a full internal HACCP audit at least quarterly, as well as immediately following any menu overhaul, supplier change, or equipment replacement."
      },
      {
        q: "What are the common non-compliances flagged during HACCP audits?",
        a: "Common failures include unrecorded temperature logs, lack of thermometer calibration evidence, missing allergen cross-contamination controls, and staff unaware of critical limit corrective actions."
      },
      {
        q: "Is a written HACCP audit mandatory for UK takeaways?",
        a: "Yes. Under Regulation (EC) No 852/2004 Article 5, all food businesses must maintain written food safety management procedures based on HACCP principles."
      }
    ],
    relatedTools: ["haccp-plan-builder", "haccp-risk-assessment", "health-inspection-checklist"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },

  "haccp-risk-assessment": {
    directAnswer:
      "A HACCP risk assessment matrix systematically evaluates biological, chemical, physical, and allergenic hazards across every preparation step in a commercial kitchen. Applying the Codex Alimentarius decision tree establishes which steps constitute Critical Control Points (CCPs) requiring continuous monitoring and critical limit verification.",
    howTo: [
      "List all process steps from supplier intake and raw butchery to chilling, reheating, and service.",
      "Identify specific microbiological, physical, chemical, and allergenic hazards at each step.",
      "Apply the Codex Alimentarius decision tree to determine whether the hazard is a true Critical Control Point.",
      "Establish measurable critical limits (e.g. core temp >= 75°C for 30 seconds) and corrective action logs."
    ],
    faqs: [
      {
        q: "What is the difference between a CCP and a standard control point?",
        a: "A Critical Control Point (CCP) is a specific stage where control can be applied and is essential to prevent, eliminate, or reduce a food safety hazard to an acceptable level, where no subsequent step will eliminate it."
      },
      {
        q: "What are typical Critical Control Points in restaurant catering?",
        a: "Standard catering CCPs include cooking (achieving >= 75°C core for 30s), rapid chilling (< 8°C within 90 minutes), hot-holding (>= 63°C), and raw/ready-to-eat separation."
      },
      {
        q: "How does Natasha's Law affect HACCP risk assessments?",
        a: "Natasha's Law requires allergens to be treated with equal severity as biological pathogens, necessitating dedicated allergenic risk assessment at ingredient intake, preparation, and packaging."
      }
    ],
    relatedTools: ["haccp-plan-builder", "haccp-audit", "allergy-matrix"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },

  "restaurant-deep-cleaning-checklist": {
    directAnswer:
      "A restaurant deep cleaning checklist outlines detailed sanitation frequencies for heavy-duty kitchen assets including extraction canopies, grease traps, fryers, combi ovens, and under-counter condenser coils. Maintaining deep cleaning records proves active hygiene control and protects businesses from fire and pest risks under UK law.",
    howTo: [
      "Schedule heavy-duty deep cleans during closed kitchen hours to prevent chemical overspray.",
      "Pull out mobile cookline ranges and combi ovens to deep clean and degrease floor drainage channels.",
      "Dismantle and soak commercial fryer baskets, extraction baffle filters, and mixer attachments.",
      "Have the shift supervisor inspect all items with a torch and sign off completed tasks."
    ],
    faqs: [
      {
        q: "Why is commercial fryer deep cleaning essential for food hygiene?",
        a: "Old degraded cooking oil forms polymerised grease crusts and free fatty acids, contaminating food flavor and posing significant flashover fire hazards. Fryers must be boiled out regularly with food-safe boil-out detergent."
      },
      {
        q: "What is the TR19 specification for kitchen extraction cleaning?",
        a: "TR19 is the UK building services standard for ventilation hygiene. It mandates that commercial grease extract ducts be inspected and professionally cleaned at intervals determined by cooking hours (typically 3 to 12 months)."
      },
      {
        q: "Who should sign off deep cleaning checklists?",
        a: "The head chef, operations manager, or kitchen director must physically inspect and counter-sign the completed deep cleaning checklist."
      }
    ],
    relatedTools: ["cleaning-restaurant", "cleaning-schedule", "restaurant-cleaning-checklist"],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "ham-cooking-temperature-chart": {
    directAnswer:
      "A commercial ham and gammon cooking temperature chart defines the safe roasting times and thermal core temperature limits required for pork joints in UK catering. Under Food Standards Agency (FSA) guidelines, ham joints must achieve a minimum core temperature of 75°C for 30 seconds (82°C in Scotland) to destroy Salmonella and Listeria monocytogenes.",
    howTo: [
      "Select the ham or gammon cut: bone-in joint, boneless rolled roast, or carvery glazed ham.",
      "Weigh the raw meat joint and calculate roasting duration based on oven temperature and weight.",
      "Insert a sanitised digital probe thermometer into the thickest part of the meat away from the bone.",
      "Verify the internal core reaches at least 75°C for 30 seconds (82°C in Scotland) before resting."
    ],
    faqs: [
      {
        q: "What is the legal minimum cooking temperature for ham in the UK?",
        a: "In England, Wales, and Northern Ireland, commercial food guidance requires pork and ham to reach at least 75°C for 30 seconds. In Scotland, the statutory requirement under the Food Hygiene (Scotland) Regs 2006 is 82°C."
      },
      {
        q: "Why must probe thermometers avoid touching the bone in bone-in gammon?",
        a: "Dense bone conducts heat faster than muscle tissue, producing a falsely elevated temperature reading while surrounding meat may remain undercooked and hazardous."
      },
      {
        q: "What temperature must carvery ham be kept at during service?",
        a: "Cooked ham on display at a hot-holding carvery deck must be maintained at a minimum of 63°C continuously to prevent bacterial multiplication."
      }
    ],
    relatedTools: ["food-cooling-poster", "walk-in-cooler-food-storage-chart", "freezer-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
'''

# Insert before FALLBACK_DEEP_CONTENT
fallback_target = 'export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'
if fallback_target in deep_content and '"ham-cooking-temperature-chart":' not in deep_content:
    deep_content = deep_content.replace(fallback_target, batch5_deep_entries + '\n' + fallback_target)
    with open(deep_path, 'w', encoding='utf-8') as f:
        f.write(deep_content)
    print("Added Batch 5 entries to tool_deep_content.ts.")
else:
    print("Batch 5 entries already in deep content or fallback_target not found.")

# 3. Patch TemplateDetailPage.tsx with HamCookingTemperatureTool
detail_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(detail_path, 'r', encoding='utf-8') as f:
    detail_content = f.read()

import_ham_target = 'import { FoodTraceabilityLogTool } from "./tools/FoodTraceabilityLogTool";'
import_ham_repl = '''import { FoodTraceabilityLogTool } from "./tools/FoodTraceabilityLogTool";
import { HamCookingTemperatureTool } from "./tools/HamCookingTemperatureTool";'''

if import_ham_target in detail_content and 'HamCookingTemperatureTool' not in detail_content:
    detail_content = detail_content.replace(import_ham_target, import_ham_repl)
    print("Added HamCookingTemperatureTool import.")

bool_ham_target = '''  const isTraceabilityTool =
    template.slug === "food-traceability" ||
    template.slug.includes("traceability");'''

bool_ham_repl = '''  const isTraceabilityTool =
    template.slug === "food-traceability" ||
    template.slug.includes("traceability");

  const isHamCookingTool =
    template.slug === "ham-cooking-temperature-chart" ||
    template.slug.includes("ham-cooking");'''

if bool_ham_target in detail_content and 'isHamCookingTool' not in detail_content:
    detail_content = detail_content.replace(bool_ham_target, bool_ham_repl)
    print("Added isHamCookingTool boolean check.")

render_ham_target = '''        {/* 4i. Commercial Food Traceability & Supplier Intake Log */}
        {isTraceabilityTool && (
          <FoodTraceabilityLogTool templateId={template.id} />
        )}'''

render_ham_repl = '''        {/* 4i. Commercial Food Traceability & Supplier Intake Log */}
        {isTraceabilityTool && (
          <FoodTraceabilityLogTool templateId={template.id} />
        )}

        {/* 4j. Ham & Gammon Cooking Temperature & Core Probe Chart */}
        {isHamCookingTool && (
          <HamCookingTemperatureTool templateId={template.id} />
        )}'''

if render_ham_target in detail_content and 'isHamCookingTool &&' not in detail_content:
    detail_content = detail_content.replace(render_ham_target, render_ham_repl)
    print("Added HamCookingTemperatureTool render.")

fallback_ham_target = '!isTraceabilityTool && ('
fallback_ham_repl = '!isTraceabilityTool && !isHamCookingTool && ('

if fallback_ham_target in detail_content:
    detail_content = detail_content.replace(fallback_ham_target, fallback_ham_repl)
    print("Updated fallback condition with !isHamCookingTool.")

with open(detail_path, 'w', encoding='utf-8') as f:
    f.write(detail_content)

print("Saved TemplateDetailPage.tsx successfully.")
