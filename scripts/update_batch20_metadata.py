import json

metadata_updates = {
    "freezer-organization-chart": {
        "title": "Free Freezer Organization Chart Template | Saim Dev",
        "desc": "Master commercial freezer organization with vertical safety zones, FIFO rotation, and drip containment. Free printable kitchen layout chart.",
        "howTo": [
            "Assign top shelves strictly to ready-to-eat foods, baked items, and ice cream.",
            "Store bulk stocks, prepped sauces, and par-cooked items on middle tiers.",
            "Place raw meats, poultry, and fish on lowest shelves in leak-proof containers.",
            "Maintain at least 6 inches of floor clearance using NSF-certified dunnage racks.",
            "Rotate all incoming inventory using First-In, First-Out (FIFO) dating labels."
        ]
    },
    "5-whys-root-cause-analysis-template": {
        "title": "Free 5 Whys Root Cause Analysis Template | Saim Dev",
        "desc": "Investigate food safety and HACCP deviations with a structured 5 Whys analysis template. Free CAPA action plan and permanent corrective action checklist.",
        "howTo": [
            "Document incident details, critical limit deviations, and immediate containment.",
            "Assemble multidisciplinary investigation team across QA, kitchen, and engineering.",
            "Ask 'Why?' iteratively across 5 stages to drill down to foundational causes.",
            "Formulate Corrective and Preventive Action (CAPA) plans with assigned owners.",
            "Conduct 30-day and 60-day effectiveness verification audits before closing."
        ]
    },
    "restaurant-sop": {
        "title": "Free Restaurant SOP Template & Checklist | Saim Dev",
        "desc": "Streamline front-of-house, kitchen prep, and hygiene operations with standard operating procedures. Free customizable restaurant SOP checklist for audits.",
        "howTo": [
            "Establish daily opening, shift handover, and closing operational protocols.",
            "Define mandatory food hygiene, temperature probing, and sanitising standards.",
            "Assign accountability for front-of-house customer service and bar cleanliness.",
            "Document illness reporting, allergen communication, and chemical storage SOPs.",
            "Audit daily checklists and preserve records for local authority EHO inspections."
        ]
    },
    "standard-operating-procedure-in-food-industry": {
        "title": "Free Food Industry SOP Template Guide | Saim Dev",
        "desc": "Standardise manufacturing and kitchen hygiene with compliant food industry SOPs. Free Sanitation Standard Operating Procedures checklist template.",
        "howTo": [
            "Define pre-operational and operational Sanitation Standard Operating Procedures.",
            "Specify cleaning chemical concentrations, contact times, and safety PPE gear.",
            "Map physical personnel flow to prevent raw-to-cooked area cross-contamination.",
            "Implement mandatory ATP bioluminescence or protein swab verification testing.",
            "Archive signed SSOP compliance logs for third-party BRCGS and Salsa audits."
        ]
    },
    "pest-control-sop": {
        "title": "Free Pest Control SOP Template Guide | Saim Dev",
        "desc": "Implement Integrated Pest Management with commercial kitchen pest control SOPs. Free exclusion rules, sighting logs, and PCO inspection checklists.",
        "howTo": [
            "Inspect and maintain physical exclusion barriers, door sweeps, and air curtains.",
            "Enforce strict daily kitchen cleaning and waste removal to eliminate food attractants.",
            "Log any rodent, insect, or droppings sightings in the internal incident register.",
            "Accompany licensed Pest Control Operators during routine monthly facility audits.",
            "Maintain contractor insurance, bait station maps, and EHO compliance records."
        ]
    }
}

for slug, m in metadata_updates.items():
    t_len = len(m["title"])
    d_len = len(m["desc"])
    print(f"{slug}:")
    print(f"  Title ({t_len} chars): '{m['title']}'")
    print(f"  Desc ({d_len} chars): '{m['desc']}'")
    assert t_len <= 60, f"Title too long: {t_len}"
    assert "Free" in m["title"], "Title must contain 'Free'"
    assert m["title"].endswith(" | Saim Dev"), "Title must end with ' | Saim Dev'"
    assert 120 <= d_len <= 155, f"Desc length invalid: {d_len}"

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

for slug, m in metadata_updates.items():
    core_meta[slug] = m

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)

print("Updated src/data/core_metadata.json successfully for Batch 20!")
