import json

metadata_updates = {
    "restaurant-opening-checklist": {
        "title": "Free Restaurant Opening Checklist Guide | Saim Dev",
        "desc": "Streamline morning restaurant opening operations from FOH setup to kitchen line readiness. Free customizable daily restaurant opening checklist template.",
        "howTo": [
            "Perform perimeter security check, unlock guest entrance, and power on lighting.",
            "Record temperatures of walk-in coolers, reach-in units, and prep line wells.",
            "Preheat cooking ranges, flat tops, and fryers; verify kitchen hood exhaust flow.",
            "Stock front-of-house service stations, polish glassware, and count till drawers.",
            "Hold morning team briefing to review allergen notes, daily specials, and 86'd items."
        ]
    },
    "printable-retail-store-daily-checklist": {
        "title": "Free Retail Store Daily Checklist Guide | Saim Dev",
        "desc": "Ensure clean, compliant, and profitable retail food operations from opening to closing. Free daily food retail store checklist with temperature audit logs.",
        "howTo": [
            "Log display chiller and freezer temperatures (verify dairy ≤4°C, raw meat ≤3°C).",
            "Audit packaged foods on shelves for use-by expiration dates and damaged packaging.",
            "Sanitize customer shopping carts, checkout conveyor belts, and payment terminals.",
            "Restock dry goods using First-In, First-Out (FIFO) facing and rotation protocols.",
            "Reconcile daily cash registers and complete evening security lockup sign-offs."
        ]
    },
    "opening-and-closing-checklist-template": {
        "title": "Free Kitchen Open & Close Checklist | Saim Dev",
        "desc": "Master commercial kitchen opening, midday turnaround, and evening closing deep cleans. Free operational opening and closing checklist with probe logs.",
        "howTo": [
            "Complete morning start-up: power on exhaust hoods, sanitize boards, and check fridges.",
            "Conduct pre-lunch and pre-dinner line-checks: verify core temps and hot-holding wells.",
            "Cover, label, and transfer prepped ingredients to walk-in storage at service end.",
            "Filter fryer oil, scrub griddles, clean dishwasher filters, and degrease floors.",
            "Complete nightly manager security walkthrough and lock external refuse doors."
        ]
    },
    "restaurant-equipment-list": {
        "title": "Free Restaurant Equipment List Checklist | Saim Dev",
        "desc": "Plan and audit commercial kitchen infrastructure with a master restaurant equipment list. Free categorized checklist covering cooking, cooling, and prep.",
        "howTo": [
            "Audit heavy cooking line: ranges, combi ovens, fryers, charbroilers, and hoods.",
            "Specify refrigeration capacity: walk-in chillers, reach-in freezers, and prep tables.",
            "Inventory food prep machinery: planetary mixers, food processors, and meat slicers.",
            "Verify warewashing stations: pass-through dishwashers, three-compartment sinks.",
            "Track smallwares: calibrated probe thermometers, GN pans, and colour-coded boards."
        ]
    },
    "opening-a-restaurant-checklist": {
        "title": "Free Opening a Restaurant Checklist | Saim Dev",
        "desc": "Complete pre-opening roadmap for UK restaurants, cafes, and takeaways. Free checklist covering local authority registration, HACCP, and equipment setup.",
        "howTo": [
            "Register food business with the local authority at least 28 days before opening.",
            "Develop and document the site-specific HACCP or Safer Food, Better Business system.",
            "Secure premises licensing, public liability insurance, and commercial waste contracts.",
            "Procure, install, and commission commercial kitchen equipment and fire suppression.",
            "Deliver certified Level 2 Food Hygiene and Natasha's Law training to all kitchen staff."
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

print("Updated src/data/core_metadata.json successfully for Batch 22!")
