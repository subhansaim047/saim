import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch8_meta = {
    "eho-checklist": {
        "title": "Free EHO Inspection Checklist UK | Saim Dev",
        "desc": "Free UK EHO food hygiene inspection checklist. Audit food handling, cross-contamination, premises structure, SFBB management, and achieve a 5-star rating.",
        "howTo": [
            "Audit Pillar 1: Verify separation of raw meat and ready-to-eat foods, probe cooking temperatures (>=75°C), and fridge holding under 5°C.",
            "Audit Pillar 2: Inspect structural cleanliness, ventilation filters, non-slip flooring, drainage, and building pest-proofing integrity.",
            "Audit Pillar 3: Verify documented SFBB management packs, daily diary sign-offs, 14-allergen matrices, and staff hygiene certificates.",
            "Click Print / Save as PDF to output a comprehensive pre-inspection audit scorecard for your kitchen team."
        ]
    },
    "deep-cleaning-checklist": {
        "title": "Free Deep Cleaning Checklist Template | Saim Dev",
        "desc": "Free commercial kitchen deep cleaning checklist. Heavy equipment rotas, TR19 extraction degreasing, fryer boil-outs, and printable supervisor sign-offs.",
        "howTo": [
            "De-energise appliances, isolate gas lines, and remove cookware from the deep clean zone.",
            "Execute chemical boil-outs for deep fat fryers and degrease extraction hood baffle filters under TR19 standards.",
            "Pull refrigeration units away from walls to vacuum condenser coils and pressure wash floor gullies.",
            "Apply two-stage cleaning and BS EN 1276 chemical disinfection to all stainless steel counters and splashbacks."
        ]
    },
    "fsma-compliance-checklist": {
        "title": "Free UK Food Hygiene Due Diligence Checklist | Saim Dev",
        "desc": "Free UK food hygiene due diligence checklist. Section 21 statutory defense, cold chain monitoring, staff training records, and printable audit sheets.",
        "howTo": [
            "Audit goods-inwards delivery temperatures and supplier lot numbers under Article 18 of Regulation (EC) No 178/2002.",
            "Verify complete daily refrigeration logs (<=5°C), cooking core logs (>=75°C), and hot holding logs (>=63°C).",
            "Confirm full Natasha's Law compliance: PPDS food ingredient labelling with all 14 statutory allergens emphasized in bold.",
            "Review staff Level 2 and Level 3 Food Hygiene training credentials and monthly thermometer calibration logs."
        ]
    },
    "ecosure-inspection-checklist": {
        "title": "Free Third-Party Kitchen Hygiene Audit | Saim Dev",
        "desc": "Free commercial kitchen third-party hygiene audit checklist. Brand standard evaluations, unannounced inspector audits, and printable compliance logs.",
        "howTo": [
            "Conduct unannounced mock kitchen walk-through assessing brand standards, food safety CCPs, and employee handwashing compliance.",
            "Probe active cookline temperatures and holding displays to verify zero food exposure in the 8°C–63°C danger zone.",
            "Inspect dry storage, cold room stacking hierarchies (>15cm floor clearance), and FIFO stock rotation dates.",
            "Generate actionable deficiency logs with immediate corrective actions and supervisor follow-up dates."
        ]
    },
    "restroom-cleaning-checklist-log": {
        "title": "Free Restroom Cleaning Checklist Template | Saim Dev",
        "desc": "Free commercial restroom cleaning checklist. Hourly washroom inspection logs, BS EN 1499 soap replenishment, surface sanitation, and printable rotas.",
        "howTo": [
            "Replenish bactericidal unperfumed hand soap (BS EN 1499) and blue disposable paper towel dispensers at all sinks.",
            "Verify continuous hot running water (>=45°C) and clean push-tap operation across all handwash basins.",
            "Descale and disinfect WC bowls, seats, urinals, and high-touch door handles with commercial bactericidal cleaner.",
            "Mop non-slip flooring using dedicated yellow-coded washroom mops and record hourly supervisor initials on the door log."
        ]
    }
}

for slug, data in batch8_meta.items():
    title = data["title"]
    desc = data["desc"]
    
    assert len(title) <= 60, f"Title too long: {len(title)} for {slug}"
    assert "Free" in title, f"Title missing Free: {title}"
    assert title.endswith(" | Saim Dev"), f"Title does not end with ' | Saim Dev': {title}"
    assert 120 <= len(desc) <= 155, f"Desc length invalid: {len(desc)} for {slug}"
    
    meta[slug] = data
    print(f"Validated {slug}: title={len(title)} chars, desc={len(desc)} chars")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Saved core_metadata.json with Batch 8 metadata successfully")
