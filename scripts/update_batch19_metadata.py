import json

metadata_updates = {
    "freeze-drying-time-chart": {
        "title": "Free Freeze Drying Time Chart & Calculator | Saim Dev",
        "desc": "Calculate exact freeze-drying sublimation, desorption, and cycle hours by food category. Free interactive chart with moisture verification standards.",
        "howTo": [
            "Select food item matrix (fruits, vegetables, cooked lean proteins, or confectionery).",
            "Configure slice thickness (thin cut, standard 12mm, or thick chunks) and tray weight.",
            "Review calculated pre-freeze, primary sublimation, and secondary desorption hours.",
            "Verify residual moisture below 2% using snap, core warmth, and jar condensation tests.",
            "Print the HACCP-compliant freeze-drying batch log sheet for food hygiene audits."
        ]
    },
    "juice-pasteurization-temperature-time-chart": {
        "title": "Free Juice Pasteurization Chart & Times | Saim Dev",
        "desc": "Access validated juice pasteurisation temperature and time charts. Free interactive 5-log pathogen reduction standards under FDA and UK FSA hygiene rules.",
        "howTo": [
            "Identify juice classification and acidity level (low acid vs high acid pH threshold).",
            "Select thermal pasteurisation method: continuous-flow HTST, vat batch, or hot-fill.",
            "Verify minimum dwell holding time required to achieve validated 5-log pathogen lethality.",
            "Monitor Critical Control Points with calibrated core immersion thermocouples.",
            "Document batch temperature logs and cooling profiles for local authority EHO audits."
        ]
    },
    "meat-pasteurization-chart": {
        "title": "Free Meat Pasteurization Chart & Times | Saim Dev",
        "desc": "Validated low-temperature meat pasteurisation charts for sous-vide catering. Free 6.5D and 7D time-temperature lethality tables with core probe protocols.",
        "howTo": [
            "Select meat cut and species (whole muscle beef, pork loin, lamb, or poultry cuts).",
            "Choose target water bath pasteurisation temperature between 54.4°C and 75°C.",
            "Calculate thickness-dependent heat penetration come-up time to the geometric core.",
            "Maintain verified core dwell holding time to achieve 6.5-log or 7-log bacterial lethality.",
            "Record probe temperature readings and cooling rates in compliant kitchen HACCP sheets."
        ]
    },
    "poultry-pasteurization-chart": {
        "title": "Free Poultry Pasteurization Chart Guide | Saim Dev",
        "desc": "Verified poultry pasteurisation time and temperature guide for commercial kitchens. Free 7-log Salmonella reduction tables and core probe monitoring rules.",
        "howTo": [
            "Select poultry cut type: whole chicken, turkey breast, boneless fillet, or dark meat.",
            "Determine precision sous-vide or combi-steam cooking temperature from 58°C to 75°C.",
            "Add required heating come-up buffer based on measured meat slab thickness.",
            "Hold at verified core temperature for mandatory 7-log Salmonella reduction dwell time.",
            "Verify clear juices and zero pink flesh at bone junctions using sanitised probe needles."
        ]
    },
    "chicken-pasteurization-chart": {
        "title": "Free Chicken Pasteurization Chart Guide | Saim Dev",
        "desc": "Master safe chicken pasteurisation with exact sous-vide and cooking time-temperature pairs. Free 7-log pathogen lethality chart with thickness buffers.",
        "howTo": [
            "Measure chicken cut thickness with calipers or ruler at the thickest point.",
            "Select target sous-vide core temperature (standard 63°C - 65.6°C for juicy texture).",
            "Ensure core reaches target temperature and maintains required minimum dwell duration.",
            "Add 50% extra come-up cooking time buffer if cooking chicken directly from frozen.",
            "Complete core temperature probe sign-off in the daily kitchen temperature record."
        ]
    }
}

# Verify lengths
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

# Update core_metadata.json
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

for slug, m in metadata_updates.items():
    core_meta[slug] = m

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)

print("Updated src/data/core_metadata.json successfully")
