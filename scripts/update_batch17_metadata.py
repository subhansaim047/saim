import json

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch17_meta = {
    "proper-food-storage-chart": {
        "title": "Free Proper Food Storage Chart & Guide | Saim Dev",
        "desc": "Free commercial food storage chart. Master top-to-bottom fridge shelf hierarchy, raw meat separation, FIFO rotation, and statutory temperature limits.",
        "howTo": [
            "Place ready-to-eat cooked dishes and salads on the top shelves of the walk-in chiller.",
            "Position whole raw beef, pork, and seafood on middle shelves below prepared foods.",
            "Store raw ground meats and burgers below whole cuts on dedicated drip trays.",
            "Keep raw poultry on the bottom shelf to eliminate bacterial cross-contamination drips."
        ]
    },
    "sanitation-standard-operating-procedures": {
        "title": "Free SSOP Template & Sanitation SOP Guide | Saim Dev",
        "desc": "Free Sanitation Standard Operating Procedures (SSOP) template for UK food businesses. Master 5-stage cleaning, chemical dilution, and hygiene logs.",
        "howTo": [
            "Define pre-operational and operational cleaning responsibilities across all food zones.",
            "Specify chemical dilution ratios, contact times, and BS EN 1276 compliance requirements.",
            "Execute the 5-stage cleaning process: scrape, wash, rinse, disinfect, and air-dry.",
            "Sign off daily SSOP verification logs and archive chemical dilution batch records."
        ]
    },
    "what-are-the-critical-control-points-for-food-safety": {
        "title": "Free Critical Control Points (CCP) Guide | Saim Dev",
        "desc": "Free Critical Control Points (CCP) guide and Codex decision tree. Identify biological hazards, set critical limits, and build a compliant HACCP plan.",
        "howTo": [
            "Map every process step from raw material intake through prep, cooking, and service.",
            "Identify significant biological, chemical, physical, and allergenic hazards at each step.",
            "Apply the 4 questions of the Codex decision tree to confirm CCP vs PRP status.",
            "Establish measurable critical limits, monitoring frequency, and corrective action protocols."
        ]
    },
    "vacuum-sealed-food-shelf-life-chart": {
        "title": "Free Vacuum-Sealed Food Shelf-Life Chart | Saim Dev",
        "desc": "Free vacuum-sealed food shelf-life chart and VP/MAP guide. Master UK FSA 10-day rules, botulism barrier controls, and sous-vide chilling standards.",
        "howTo": [
            "Ensure chilled vacuum-packed raw meats and cooked foods are held under 3°C or 5°C.",
            "Apply the UK FSA 10-day maximum shelf life rule for foods without controlling barriers.",
            "Verify controlling factors: heat (90°C for 10m), pH <= 5.0, salt >= 3.5%, or water activity aw <= 0.97.",
            "Clearly label vacuum packs with packaging date, use-by date, and storage temperatures."
        ]
    },
    "fsma-food-traceability-list": {
        "title": "Free Food Traceability Log & Guide | Saim Dev",
        "desc": "Free food traceability log and one-step-back one-step-forward tracking sheet. Meet UK General Food Law and FSMA Rule 204 batch tracking standards.",
        "howTo": [
            "Log supplier name, address, delivery vehicle temp, and batch code at goods receipt.",
            "Assign unique internal lot numbers to batch prepped ingredients and sauces.",
            "Maintain customer dispatch records for wholesale, catering, and delivery orders.",
            "Conduct bi-annual mock recall traceability audits achieving 100% reconciliation."
        ]
    }
}

for slug, data in batch17_meta.items():
    meta[slug] = data
    print(f"Updated metadata for {slug} (Title: {len(data['title'])} chars, Desc: {len(data['desc'])} chars)")

with open(path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Finished updating core_metadata.json for Batch 17")
