import json

metadata_updates = {
    "waste-management-plan-sop": {
        "title": "Free Waste Management Plan SOP Guide | Saim Dev",
        "desc": "Establish compliant kitchen waste segregation, oil recycling, and external dumpster SOPs. Free waste management plan checklist for food businesses.",
        "howTo": [
            "Source-separate waste streams into organic food scraps, recyclables, and landfill.",
            "Transfer cooled cooking oil into secure outdoor grease recovery collection tanks.",
            "Empty kitchen waste bins every 2 hours and sanitize all bins at closing shift.",
            "Keep external dumpster lids locked and maintain clean, odor-free bin pads.",
            "Maintain waste transfer notes and certified carrier collection logs for audits."
        ]
    },
    "kitchen-sop": {
        "title": "Free Kitchen SOP Template & Checklist | Saim Dev",
        "desc": "Standardise kitchen shift prep, sanitisation, cross-contamination, and safety controls. Free commercial kitchen standard operating procedures template.",
        "howTo": [
            "Execute structured morning kitchen station opening and equipment checks.",
            "Enforce color-coded chopping board segregation for raw meat, fish, and produce.",
            "Verify core cooking temperatures (75°C for 30s) and log probe readings.",
            "Complete rapid two-stage food cooling to below 5°C within 90 minutes.",
            "Complete nightly closing deep clean and supervisor sign-off verification."
        ]
    },
    "brc-audit": {
        "title": "Free BRCGS Food Safety Audit Checklist | Saim Dev",
        "desc": "Prepare for BRCGS Issue 9 certification audits with a complete food safety management checklist. Free HACCP, site standards, and traceability audit sheet.",
        "howTo": [
            "Review senior management food safety culture commitment and executive reviews.",
            "Validate HACCP flow diagrams, critical limits, and CCP monitoring protocols.",
            "Conduct physical factory audits covering building fabric, drainage, and pest traps.",
            "Challenge foreign body detectors (metal detection/X-ray) with calibrated test wands.",
            "Execute a 4-hour forward and backward mass-balance traceability mock recall."
        ]
    },
    "kosher-certification": {
        "title": "Free Kosher Kitchen Certification Guide | Saim Dev",
        "desc": "Maintain strict Kosher standards with meat, dairy, and pareve segregation checklists. Free Mashgiach supervision, produce checking, and kashering SOPs.",
        "howTo": [
            "Segregate cookware, preparation tables, and refrigeration for meat and dairy.",
            "Verify all incoming ingredients, oils, and chemicals carry approved Kosher logos.",
            "Facilitate Mashgiach on-duty supervision, oven lighting, and key security.",
            "Inspect leafy produce under backlighting to verify zero insect contamination.",
            "Follow rabbinic kashering (Hagala) protocols when equipment crossover occurs."
        ]
    },
    "bar-opening-closing-checklist": {
        "title": "Free Bar Opening & Closing Checklist | Saim Dev",
        "desc": "Ensure clean, compliant, and efficient bar operations from pre-service setup to nightly shutdown. Free customizable bar opening and closing checklist.",
        "howTo": [
            "Clean and sanitize bar counters, cutting boards, and cocktail prep stations.",
            "Check and record refrigeration temperatures for beer coolers and wine fridges.",
            "Prime beer draft lines, inspect CO2 levels, and ensure clean ice scoop holders.",
            "Cover, label, and refrigerate cut citrus, herbs, and fresh garnishes at close.",
            "Sanitize soda gun nozzles, flush beer drip trays, and secure liquor cabinets."
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

print("Updated src/data/core_metadata.json successfully for Batch 21!")
