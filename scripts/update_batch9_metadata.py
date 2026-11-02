import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch9_meta = {
    "consumer-advisory": {
        "title": "Free Consumer Advisory Notice Template | Saim Dev",
        "desc": "Free UK restaurant consumer advisory notice template. Display statutory warnings for raw shellfish, rare steaks, and pink meat to meet EHO standards.",
        "howTo": [
            "Select active high-risk menu offerings: rare steaks, raw bivalve shellfish, seared pink duck breast, or unpasteurised cheeses.",
            "Verify establishment trading name, food business registration details, and supervisor sign-off name.",
            "Review statutory FSA health warning disclosures regarding vulnerable groups (elderly, pregnant, immunocompromised).",
            "Click Print / Save as PDF to output a laminated-ready A4 or A5 display notice for front-of-house counters and menus."
        ]
    },
    "food-allergy-warning": {
        "title": "Free Food Allergy Warning Sign Template | Saim Dev",
        "desc": "Free UK food allergy warning sign template. Natasha's Law compliant customer notice, 14 statutory allergens, and printable front-of-house kitchen cards.",
        "howTo": [
            "Display prominent customer allergy reminder sign at entrance, order counters, and takeaway pickup points.",
            "List all 14 statutory allergens with clear instructions for diners to communicate dietary restrictions to staff.",
            "Verify staff allergy training and ensure the updated 14-allergen ingredient matrix is accessible at the counter.",
            "Click Print / Save as PDF to output a high-contrast front-of-house notice meeting local authority EHO standards."
        ]
    },
    "waste-management-schedule": {
        "title": "Free Kitchen Waste Management Schedule | Saim Dev",
        "desc": "Free commercial kitchen waste management schedule. Category 3 ABP disposal, used cooking oil collections, grease trap maintenance, and printable logs.",
        "howTo": [
            "Segregate internal kitchen waste: food scraps in lined foot-pedal bins, dry recyclables, and general refuse.",
            "Store spent cooking oil in sealed bunded drums; schedule collections with an Environment Agency registered waste carrier.",
            "Secure Category 3 Animal By-Product (ABP) meat waste in designated locked bins to prevent cross-contamination and pests.",
            "Inspect external waste enclosures daily, keep wheelie bin lids closed, and file Duty of Care Waste Transfer Notes."
        ]
    },
    "food-flow-chart": {
        "title": "Free HACCP Food Flow Chart Template | Saim Dev",
        "desc": "Free commercial kitchen HACCP food flow chart template. Map 9 operational catering stages from goods inwards to service with printable CCP diagrams.",
        "howTo": [
            "Step through operational food flow from purchasing and delivery through storage, prep, cooking, holding, and service.",
            "Identify statutory Critical Control Points (CCPs) including chilling (<=5°C), cooking (>=75°C), and hot-holding (>=63°C).",
            "Review specific biological, physical, chemical, and allergen hazards associated with each catering process step.",
            "Click Print / Save as PDF to output an official A4 process map for your SFBB Food Safety Management System."
        ]
    },
    "food-safety-plan": {
        "title": "Free UK Food Safety Plan Template | Saim Dev",
        "desc": "Free UK food safety management plan template. Complete HACCP hazard analysis, critical control limits, SFBB compliance diaries, and printable forms.",
        "howTo": [
            "Document your food business profile, management hierarchy, and prerequisite hygiene programmes (PRPs).",
            "Conduct hazard analysis across biological, chemical, physical, and allergen hazards for all menu categories.",
            "Establish validated Critical Control Points, statutory critical limits, monitoring rotas, and corrective actions.",
            "Click Print / Save as PDF to archive a complete HACCP food safety management system ready for EHO inspection."
        ]
    }
}

for slug, data in batch9_meta.items():
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

print("Saved core_metadata.json with Batch 9 metadata successfully")
