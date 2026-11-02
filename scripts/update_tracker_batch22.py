import json
import csv

tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch22_data = {
    "restaurant-opening-checklist": {
        "priority_rank": 106,
        "target_keyword": "restaurant opening checklist",
        "top_5_competitors": [
            "https://www.touchbistro.com/blog/restaurant-opening-checklist/",
            "https://pos.toasttab.com/blog/on-the-line/restaurant-opening-checklist",
            "https://www.lightspeedhq.com/blog/restaurant-opening-checklist/",
            "https://www.7shifts.com/blog/restaurant-opening-checklist/",
            "https://www.spoton.com/blog/restaurant-opening-checklist/"
        ],
        "differentiators": [
            "Interactive digital checklist with real-time pass/fail/pending status tracking",
            "Built-in refrigeration temperature logging (<5.0°C) and hot-holding checks (>=63.0°C)",
            "Pre-service briefing section covering 14 allergens, VIP reservations, and 86'd items",
            "Zero login, zero email gate, fully client-side interactive tool",
            "1-click clean A4 PDF print and CSV export with verified statutory references"
        ]
    },
    "printable-retail-store-daily-checklist": {
        "priority_rank": 107,
        "target_keyword": "printable retail store daily checklist",
        "top_5_competitors": [
            "https://www.process.st/templates/retail-store-daily-checklist/",
            "https://safetyculture.com/checklists/retail-store-checklist/",
            "https://www.fitsmallbusiness.com/retail-store-opening-closing-checklist/",
            "https://www.vendhq.com/blog/retail-store-opening-and-closing-checklist/",
            "https://www.connecteam.com/retail-store-opening-checklist/"
        ],
        "differentiators": [
            "Interactive multi-zone retail checklist covering fresh produce, dairy, chilled meats, and frozen displays",
            "Chiller temperature audit fields (dairy <=4.0°C, raw meat <=3.0°C, freezer <=-18.0°C)",
            "Dedicated 'Use-By' vs 'Best-Before' rotation audit preventing UK food law violations",
            "Customer touchpoint sanitisation logs and dual-blind cash register reconciliation",
            "Instant print to clean A4 format with zero watermarks or signup walls"
        ]
    },
    "opening-and-closing-checklist-template": {
        "priority_rank": 108,
        "target_keyword": "opening and closing checklist template",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/opening-and-closing-checklist",
            "https://pos.toasttab.com/blog/on-the-line/opening-and-closing-checklist",
            "https://safetyculture.com/checklists/opening-and-closing-checklist/",
            "https://www.hubspot.com/business-templates/opening-and-closing-checklist",
            "https://www.lightspeedhq.com/blog/restaurant-closing-checklist/"
        ],
        "differentiators": [
            "Seamless SFBB daily diary integration aligned with FSA Safer Food, Better Business opening/closing protocols",
            "Morning cold-chain verification, midday turnaround sanitisation, and evening deep-clean sign-offs",
            "Hot food 90-minute cooling window check and TR19 grease filter compliance tasks",
            "Fully interactive web app with local storage persistence and custom item creation",
            "Free unbranded A4 export suitable for Environmental Health Officer (EHO) audit inspections"
        ]
    },
    "restaurant-equipment-list": {
        "priority_rank": 109,
        "target_keyword": "restaurant equipment list",
        "top_5_competitors": [
            "https://www.webstaurantstore.com/article/308/restaurant-equipment-checklist.html",
            "https://pos.toasttab.com/blog/on-the-line/restaurant-equipment-list",
            "https://www.touchbistro.com/blog/restaurant-equipment-list/",
            "https://www.lightspeedhq.com/blog/restaurant-equipment-list/",
            "https://www.fsrmagazine.com/expert-take/essential-restaurant-equipment-checklist/"
        ],
        "differentiators": [
            "Master categorised equipment checklist: cookline, refrigeration, warewashing, food prep, and smallwares",
            "Statutory compliance tracking: Gas Safe commercial certificate, PAT testing, and TR19 duct cleaning",
            "Interactive Kitchen Utensils tool with quantity tracking, condition logging, and unit replacement costs",
            "Energy rating and power requirement logging for electrical and gas capacity planning",
            "100% free, client-side, zero signup or affiliate gatekeeping"
        ]
    },
    "opening-a-restaurant-checklist": {
        "priority_rank": 110,
        "target_keyword": "opening a restaurant checklist",
        "top_5_competitors": [
            "https://www.touchbistro.com/blog/opening-a-restaurant-checklist/",
            "https://pos.toasttab.com/blog/on-the-line/opening-a-restaurant-checklist",
            "https://www.lightspeedhq.com/blog/how-to-open-a-restaurant-checklist/",
            "https://www.restaurantowner.com/public/Opening-a-Restaurant-Checklist.cfm",
            "https://www.spoton.com/blog/how-to-open-a-restaurant/"
        ],
        "differentiators": [
            "Comprehensive UK roadmap: 28-day statutory local authority registration requirement (EC 852/2004)",
            "Built-in premises licensing, alcohol DPS personal licence, and food safety management setup (HACCP/SFBB)",
            "Interactive multi-phase timeline tracker from concept to soft-launch and grand opening",
            "Staff training compliance checklist (Level 2 Food Hygiene and Natasha's Law FIR 2014)",
            "Zero paywall, free printable export and customizable browser storage"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch22_data:
        info = batch22_data[slug]
        row["status"] = "COMPLETED"
        row["priority_rank"] = info["priority_rank"]
        row["target_keyword"] = info["target_keyword"]
        row["top_5_competitors"] = info["top_5_competitors"]
        row["differentiators"] = info["differentiators"]
        row["phase1_completed"] = True
        print(f"Updated {slug} to COMPLETED (Rank {info['priority_rank']})")

with open(tracker_path, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

# Re-export CSV safely
csv_path = 'audit/tools-seo-tracker.csv'
all_keys = set()
for r in tracker:
    all_keys.update(r.keys())
fieldnames = sorted(list(all_keys))

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for r in tracker:
        row_copy = {}
        for k in fieldnames:
            v = r.get(k, "")
            if isinstance(v, (list, dict)):
                row_copy[k] = json.dumps(v)
            else:
                row_copy[k] = v
        writer.writerow(row_copy)

print(f"Master tracker JSON and CSV updated successfully. Completed tools count: {sum(1 for r in tracker if r.get('status') == 'COMPLETED')}/160")
