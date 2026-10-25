import json
import re

file_path = "src/data/saim_templates.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

m = re.search(r"export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);", content)
if not m:
    print("Could not find FOOD_SAFETY_TEMPLATES")
    exit(1)

templates = json.loads(m.group(1))
print(f"Loaded {len(templates)} templates")

# Define updates by ID
updates = {
    # 1. Cooling
    "template-93": {
        "title": "Food Cooling Methods & Two-Stage Chilling Poster",
        "desc": "UK FSA-recommended food cooling procedures and two-stage chilling guidelines. Clear visual reference for rapid chilling within 90 minutes and ice-bath methods."
    },
    # 2. Pest Control disambiguation
    "template-29": {
        "title": "Commercial Kitchen Pest Control Checklist",
        "desc": "Comprehensive daily and weekly commercial kitchen pest control checklist. Record bait station checks, proofing inspection, and pest contractor visits."
    },
    "template-30": {
        "title": "Daily Pest Inspection & Monitoring Log",
        "desc": "Daily kitchen inspection log for recording pest monitoring checks, fly screen integrity, and waste area hygiene in food premises."
    },
    "template-31": {
        "title": "Integrated Pest Management Plan (IPM)",
        "desc": "Kitchen wall chart and integrated pest management plan outlining prevention procedures, contractor frequency, and emergency response."
    },
    "template-32": {
        "title": "Kitchen Pest Prevention Action Plan",
        "desc": "Actionable kitchen pest prevention plan and checklist for food business supervisors and Environmental Health inspection readiness."
    },
    "template-168": {
        "title": "Pest Control Standard Operating Procedure (SOP)",
        "desc": "Standard operating procedure (SOP) documentation for food business pest prevention, exclusion barriers, and contracted technician reporting."
    },
    # 3. US to UK/EU Localization
    "template-129": {
        "title": "UK Colour-Coded Chopping Board Chart",
        "desc": "FSA-recommended colour coding for commercial kitchen chopping boards: Red (Raw Meat), Blue (Raw Fish), Yellow (Cooked Meat), Green (Salad & Fruit), Brown (Vegetables), White (Dairy & Bakery)."
    },
    "template-106": {
        "title": "UK & EU Food Traceability & Batch Tracking Guide",
        "desc": "Statutory one-step-forward, one-step-back food traceability documentation requirements under General Food Law (Regulation EC 178/2002) for UK food premises."
    },
    "template-110": {
        "title": "UK Food Hygiene Due Diligence & Compliance Checklist",
        "desc": "Statutory due diligence record-keeping checklist under the Food Safety Act 1990 and Food Information Regulations for UK commercial caterers."
    },
    "template-149": {
        "title": "Third-Party Kitchen Hygiene Audit Checklist",
        "desc": "Comprehensive external inspection audit preparation checklist for commercial hospitality kitchens, restaurants, and food manufacturing units."
    },
    "template-136": {
        "title": "UK E-Commerce Food Selling & Packaging Requirements",
        "desc": "Mandatory labelling, allergen declaration, and courier temperature maintenance guidelines for UK online food businesses and distance selling."
    },
    # 4. Disambiguate Checklist vs Smart Tool pairs
    "template-40": {
        "title": "Daily Kitchen Opening & Closing Checklist",
        "desc": "Daily opening and closing sign-off checklist for kitchen supervisors and hygiene managers."
    },
    "template-41": {
        "title": "Interactive Kitchen Opening & Closing Tool",
        "desc": "Interactive digital checklist for opening and closing procedures with real-time status tracking."
    },
    "template-24": {
        "title": "Daily Kitchen Cleaning Schedule & Checklist",
        "desc": "Comprehensive daily kitchen cleaning schedule covering food prep surfaces, floors, and equipment."
    },
    "template-26": {
        "title": "Full Restaurant Deep Cleaning Plan",
        "desc": "Scheduled deep-cleaning checklist for back-of-house kitchen equipment, extraction hoods, and refrigeration."
    },
    "template-100": {
        "title": "Food Cost & Margin Target Formulas Chart",
        "desc": "Essential food costing formulas, gross margin targets, and portion control benchmarks for commercial kitchens."
    },
    "template-34": {
        "title": "Bar Daily Opening & Closing Checklist",
        "desc": "Daily hygiene, ice machine, glassware sanitisation, and draught line checklist for bars and pubs."
    },
    "template-35": {
        "title": "Interactive Bar Operations Checklist",
        "desc": "Interactive digital bar opening and closing verification tool for hospitality managers."
    },
    "template-36": {
        "title": "Morning Restaurant Opening Checklist",
        "desc": "Step-by-step morning checklist covering prep refrigeration, sanitising stations, and ventilation checks."
    },
    "template-37": {
        "title": "Interactive Front-of-House Restaurant Tool",
        "desc": "Interactive digital tool for monitoring restaurant front-of-house setup, table readiness, and staff briefing."
    },
    "template-38": {
        "title": "Food Retail Store Daily Checklist",
        "desc": "Daily display chiller temperature checks, date code rotation, and stock hygiene checklist for retail food stores."
    },
    "template-39": {
        "title": "Interactive Retail Store Daily Checklist",
        "desc": "Interactive digital inspection checklist for retail food premises and deli counters."
    }
}

updated_count = 0
for t in templates:
    t_id = t["id"]
    if t_id in updates:
        for k, v in updates[t_id].items():
            t[k] = v
        updated_count += 1

print(f"Applied updates to {updated_count} templates")

new_json = json.dumps(templates, indent=2)
# Preserve the TypeScript export wrapper
new_content = content[:m.start(1)] + new_json + content[m.end(1):]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Saved {file_path}")
