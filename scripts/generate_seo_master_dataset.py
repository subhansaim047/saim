import os
import sys
import json
import csv
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

print("Initializing Master SEO Suite Dataset Generator...")

OUTPUT_DIR = os.path.join(os.getcwd(), 'audit')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Helper function to generate 60 keywords per cluster systematically
def build_cluster_1():
    # UK Food Safety, SFBB and HACCP (60 items)
    items = [
        ("sfbb diary template download free", "UK", "Commercial", 880, 40, 950, 18, "Easy", 1.85,
         "SFBB Diary", "Takeaway owner needs free printable daily diary sheets for council EHO audit.",
         "Free Template / Download", "/food-safety-templates/daily-opening-closing-checklist",
         "Free SFBB Diary Template Download | Daily Kitchen Diary PDF | Saim Dev",
         "Free SFBB Daily Diary Template (Printable PDF & Opening/Closing Checks)", "High",
         "High intent EHO audit requirement with strong organic volume and zero tool competitors providing instant PDF export.",
         "/tools, /blog/sfbb-daily-kitchen-opening-closing-checklist-guide, /food-safety-templates/cleaning-schedule"),
        
        ("sfbb 4 weekly review diary template", "UK", "Informational", 480, 20, 510, 14, "Easy", 1.20,
         "SFBB 4-Weekly Review", "Head chef needs the mandatory monthly 4-weekly review form to document safe method changes.",
         "Template / Guide", "/food-safety-templates/sfbb-4-weekly-review",
         "SFBB 4-Weekly Review Diary Template | FSA Due Diligence | Saim Dev",
         "SFBB 4-Weekly Review Diary Template (Free Printable PDF & Guide)", "High",
         "Mandatory SFBB diary component inspected by council EHOs; low competition SERP.",
         "/tools, /food-safety-templates/daily-opening-closing-checklist, /blog/sfbb-daily-kitchen-opening-closing-checklist-guide"),

        ("sfbb corrective action log template", "UK", "Informational", 390, 10, 410, 12, "Easy", 1.10,
         "Corrective Actions", "Staff breached fridge temperature limits and need to document corrective actions taken for due diligence.",
         "Template / Log", "/food-safety-templates/corrective-action-log",
         "SFBB Corrective Action Log Template | Kitchen Due Diligence | Saim Dev",
         "SFBB Corrective Action Log Template (Free Download & SOP Guide)", "High",
         "Critical proof of management control under Section 21 Food Safety Act 1990.",
         "/food-safety-templates/freezer-temperature-chart, /food-safety-templates/fridge-temperature-record-sheet-pdf, /tools"),

        ("sfbb diary completion guide for takeaways", "UK", "Informational", 320, 10, 340, 15, "Easy", 1.45,
         "SFBB Compliance", "Takeaway manager confused about what daily opening and closing checks need to be ticked each shift.",
         "In-Depth Guide / Tutorial", "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
         "SFBB Diary Completion Guide for UK Takeaways | Daily Checks | Saim Dev",
         "How to Complete the SFBB Daily Diary for UK Takeaways & Restaurants", "High",
         "Direct educational bridge converting readers into daily checklist tool users.",
         "/food-safety-templates/daily-opening-closing-checklist, /tools, /services"),

        ("sfbb caterers pack printable daily diary", "UK", "Commercial", 590, 30, 630, 20, "Easy", 1.60,
         "SFBB Pack", "Caterer needs printable replacement diary pages without purchasing £20 paper binder.",
         "Downloadable Sheet", "/food-safety-templates/daily-opening-closing-checklist",
         "Printable SFBB Caterers Diary Sheets | Replacement Pack | Saim Dev",
         "Printable SFBB Daily Diary Sheets for Caterers & Commercial Kitchens", "High",
         "High search demand from caterers running out of official paper diary pages.",
         "/tools, /food-safety-templates/cleaning-schedule, /blog/sfbb-daily-kitchen-opening-closing-checklist-guide"),

        ("uk takeaway haccp plan template free", "UK", "Transactional", 720, 50, 800, 22, "Medium", 2.40,
         "HACCP Plan", "Fast food takeaway owner instructed by EHO to produce documented HACCP plan before re-inspection.",
         "Interactive Generator", "/food-safety-templates/haccp-plan-builder",
         "Free UK Takeaway HACCP Plan Template | 7 Principles Builder | Saim Dev",
         "Free UK Takeaway HACCP Plan Template & Flow Chart Builder", "High",
         "Commercial urgency: takeaway owners risk food hygiene score drops without documented HACCP.",
         "/tools, /blog/how-to-write-haccp-plan-uk-food-business-step-by-step, /contact"),

        ("haccp hazard analysis template catering business", "UK", "Commercial", 410, 30, 450, 19, "Easy", 2.10,
         "Hazard Analysis", "Catering chef needs to list biological, chemical, physical, and allergen hazards with control points.",
         "Template / Worksheet", "/food-safety-templates/haccp-plan-builder",
         "HACCP Hazard Analysis Template for Catering | FSA Aligned | Saim Dev",
         "HACCP Hazard Analysis Template for Commercial Catering Businesses", "High",
         "Fulfills Principle 1 of HACCP under Article 5 Regulation (EC) No 852/2004.",
         "/food-safety-templates/haccp-plan-builder, /blog/how-to-write-haccp-plan-uk-food-business-step-by-step, /tools"),

        ("uk food business eho inspection checklist", "UK", "Informational", 850, 40, 920, 24, "Medium", 2.20,
         "EHO Audit Prep", "Restaurant owner preparing for unannounced council food hygiene inspection.",
         "Checklist / Guide", "/food-safety-templates/health-inspection-checklist",
         "UK Food Business EHO Inspection Checklist | 5-Star FHRS | Saim Dev",
         "UK Food Business EHO Inspection Checklist & Due Diligence Guide", "High",
         "Targets business owners actively looking to protect or improve their food hygiene rating.",
         "/blog/uk-food-hygiene-rating-scheme-5-star-checklist, /tools, /food-safety-templates/daily-opening-closing-checklist"),

        ("food safety act 1990 due diligence records template", "UK", "Informational", 260, 10, 280, 11, "Easy", 1.90,
         "Due Diligence Law", "Hospitality operator needs proof of due diligence under Section 21 of the Food Safety Act 1990.",
         "Regulatory Guide & Pack", "/disclaimer",
         "Food Safety Act 1990 Due Diligence Records | UK Kitchens | Saim Dev",
         "Food Safety Act 1990 Due Diligence Records: Statutory Compliance Guide", "Medium",
         "Legal authority keyword establishing domain credibility with environmental health officers.",
         "/tools, /food-safety-templates/freezer-temperature-chart, /food-safety-templates/cleaning-schedule"),

        ("sfbb opening and closing checks diary sheet", "UK", "Commercial", 490, 20, 520, 16, "Easy", 1.35,
         "Opening/Closing", "Kitchen porter and head chef need daily tick-sheets for morning fridge checks and evening shut down.",
         "Printable Checklist", "/food-safety-templates/daily-opening-closing-checklist",
         "SFBB Opening and Closing Checks Diary Sheet | Free PDF | Saim Dev",
         "Daily SFBB Kitchen Opening and Closing Checks Record Sheet", "High",
         "Daily operational necessity for all UK food businesses using Safer Food, Better Business.",
         "/tools, /food-safety-templates/cleaning-schedule, /blog/sfbb-daily-kitchen-opening-closing-checklist-guide")
    ]
    
    # Generate remaining 50 keywords for Cluster 1 systematically
    extra_c1 = [
        ("food hygiene rating scheme 5 star checklist uk", "UK", "Informational", 680, 30, 720, 21, "Easy", 1.70, "FHRS Rating", "Takeaway owner wanting to upgrade from 3 or 4 stars to 5 stars.", "Guide & Audit Tool", "/blog/uk-food-hygiene-rating-scheme-5-star-checklist"),
        ("safer food better business daily diary pdf", "UK", "Commercial", 810, 40, 870, 19, "Easy", 1.50, "SFBB Diary", "Kitchen supervisor seeking downloadable replacement diary pages.", "Download Page", "/food-safety-templates/daily-opening-closing-checklist"),
        ("takeaway food safety management system template", "UK", "Commercial", 380, 20, 410, 17, "Easy", 2.30, "FSMS Template", "Fast food operator setting up written food safety management system.", "Template / Hub", "/tools"),
        ("food recall procedure template uk food business", "UK", "Commercial", 290, 15, 310, 13, "Easy", 1.80, "Food Recall", "Food manufacturer or catering business needing formal recall procedure for FSA.", "Template / SOP", "/food-safety-templates/food-recall"),
        ("food traceability record sheet uk fsa", "UK", "Commercial", 310, 20, 340, 14, "Easy", 1.75, "Traceability", "Kitchen manager tracking batch codes, supplier delivery notes and use-by dates.", "Log Sheet", "/food-safety-templates/food-traceability"),
        ("haccp critical control points catering examples", "UK", "Informational", 420, 30, 470, 18, "Easy", 1.65, "HACCP CCPs", "Chef identifying cooking, chilling, hot-holding and reheating CCPs.", "Guide / Pillar", "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step"),
        ("sfbb extra care diary sheets free download", "UK", "Commercial", 240, 10, 260, 11, "Easy", 1.30, "Care Home SFBB", "Care home kitchen manager needing extra-care diary supplements.", "Template Download", "/food-safety-templates/daily-opening-closing-checklist"),
        ("commercial kitchen food safety audit checklist uk", "UK", "Commercial", 360, 25, 400, 16, "Easy", 2.05, "Internal Audit", "Operations manager conducting monthly internal compliance audit.", "Checklist", "/food-safety-templates/health-inspection-checklist"),
        ("chinese takeaway sfbb pack pdf download", "UK", "Commercial", 280, 15, 300, 12, "Easy", 1.50, "Ethnic Catering", "Chinese takeaway owner needing cuisine-specific SFBB safe methods.", "Guide / Template", "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide"),
        ("indian takeaway food safety management pack", "UK", "Commercial", 260, 10, 280, 13, "Easy", 1.55, "Ethnic Catering", "Curry house operator needing food safety diary and allergen chart.", "Guide / Template", "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide"),
        ("eho compliance folder checklist catering", "UK", "Commercial", 340, 15, 365, 15, "Easy", 1.95, "Due Diligence Binder", "New restaurant manager organizing food hygiene folder before inspection.", "Checklist / Guide", "/tools"),
        ("level 2 food hygiene test practice questions uk", "UK", "Informational", 920, 80, 1050, 17, "Easy", 0.95, "Hygiene Training", "Kitchen staff revising for Level 2 food safety certificate.", "Quiz / Interactive Tool", "/food-safety-templates/food-safety-quiz"),
        ("sfbb cleaning schedule template catering", "UK", "Commercial", 440, 20, 480, 15, "Easy", 1.40, "Cleaning Schedule", "Chef setting up daily, weekly and periodic cleaning rosters.", "Template Sheet", "/food-safety-templates/cleaning-schedule"),
        ("daily food safety diary for small caterers", "UK", "Commercial", 310, 15, 335, 12, "Easy", 1.35, "Daily Diary", "Event caterer recording temperature checks and manager sign-off.", "Printable PDF", "/food-safety-templates/daily-opening-closing-checklist"),
        ("fsa food hygiene inspection due diligence guide", "UK", "Informational", 270, 10, 290, 14, "Easy", 1.85, "FSA Regulations", "Business operator understanding Confidence in Management scoring.", "Guide", "/blog/uk-food-hygiene-rating-scheme-5-star-checklist"),
        ("food safety incident report form commercial kitchen", "UK", "Commercial", 210, 15, 235, 10, "Easy", 1.60, "Incident Logging", "Documenting customer illness complaints or foreign object contamination.", "Form Template", "/food-safety-templates/food-safety-incident-report"),
        ("food business operator due diligence checklist", "UK", "Commercial", 250, 10, 270, 13, "Easy", 1.90, "FBO Responsibilities", "New food business owner ensuring statutory legal requirements are met.", "Checklist", "/tools"),
        ("sfbb training records log sheet", "UK", "Commercial", 320, 15, 345, 11, "Easy", 1.25, "Staff Training", "Recording staff induction on SFBB safe methods and personal hygiene.", "Log Sheet", "/food-safety-templates/staff-training-log"),
        ("haccp flow chart template for takeaway restaurants", "UK", "Commercial", 340, 25, 380, 16, "Easy", 2.10, "HACCP Flow", "Mapping step-by-step process from purchase, storage, prep to delivery.", "Builder / Template", "/food-safety-templates/haccp-plan-builder"),
        ("temperature probe calibration record sfbb", "UK", "Commercial", 290, 10, 310, 12, "Easy", 1.40, "Calibration Log", "Monthly boiling water and iced water thermometer calibration sheet.", "Log Sheet", "/food-safety-templates/probe-thermometer-calibration-log"),
        ("ready to eat food cross contamination haccp plan", "UK", "Informational", 260, 20, 290, 15, "Easy", 1.80, "Cross Contamination", "Separation of raw meat and ready-to-eat salads in commercial kitchen.", "SOP / Plan", "/food-safety-templates/basic-food-preparation-rules"),
        ("sfbb suppliers list template catering", "UK", "Commercial", 230, 10, 245, 10, "Easy", 1.15, "Approved Suppliers", "Approved supplier contact, delivery schedule and accreditation register.", "Template Sheet", "/food-safety-templates/supplier-register"),
        ("eho food complaints log template uk", "UK", "Commercial", 190, 10, 205, 11, "Easy", 1.50, "Complaints Record", "Documenting allergen or hygiene customer complaints for council review.", "Log Sheet", "/food-safety-templates/food-safety-incident-report"),
        ("dark kitchen food safety management system uk", "UK", "Commercial", 280, 30, 330, 19, "Easy", 2.60, "Virtual Brands", "Delivery-only cloud kitchen managing multiple takeaway brands under one roof.", "Guide / Service", "/services"),
        ("mobile catering van haccp plan template", "UK", "Commercial", 350, 40, 410, 18, "Easy", 2.25, "Street Food", "Food truck or festival van operator needing simplified outdoor HACCP.", "Template / Plan", "/food-safety-templates/haccp-plan-builder"),
        ("fhrs score 5 inspection guide takeaway owners", "UK", "Informational", 410, 20, 440, 17, "Easy", 1.75, "5-Star Rating", "Checklist of structural hygiene, food handling and paperwork required.", "Guide", "/blog/uk-food-hygiene-rating-scheme-5-star-checklist"),
        ("safe method food safety management sheet sfbb", "UK", "Informational", 220, 10, 235, 12, "Easy", 1.30, "SFBB Safe Methods", "Cross-contamination, cleaning, chilling, and cooking sheets.", "Template", "/tools"),
        ("cafe food safety policy template free uk", "UK", "Commercial", 310, 20, 340, 15, "Easy", 1.85, "Cafe Compliance", "Coffee shop owner establishing written hygiene policy.", "Policy Template", "/tools"),
        ("ec 852 2004 compliance guide for small catering", "UK", "Informational", 180, 10, 200, 14, "Easy", 1.95, "Retained EU Law", "Understanding general hygiene requirements for premises and equipment.", "Legal Guide", "/disclaimer"),
        ("food safety supervisor duties checklist uk", "UK", "Commercial", 240, 15, 265, 13, "Easy", 1.65, "Shift Supervisor", "Opening duties, temperature probing, hand-wash monitoring and sign-off.", "Checklist", "/food-safety-templates/daily-opening-closing-checklist"),
        ("food sample testing log commercial kitchen", "UK", "Commercial", 160, 15, 185, 12, "Easy", 1.70, "Micro Testing", "Recording laboratory microbiological food batch swab results.", "Log Sheet", "/food-safety-templates/food-traceability"),
        ("delivery check sheet food temperature fsa", "UK", "Commercial", 330, 15, 355, 13, "Easy", 1.40, "Delivery Log", "Chilled under 8°C and frozen under -18°C vehicle delivery checks.", "Log Sheet", "/food-safety-templates/delivery-temperature-inspection-log"),
        ("sous vide cooking haccp plan catering uk", "UK", "Commercial", 210, 30, 255, 20, "Easy", 2.50, "Sous Vide Safety", "Time-temperature validation for low temperature precision cooking.", "HACCP SOP", "/food-safety-templates/haccp-plan-builder"),
        ("cooling cooked food safe methods sfbb guide", "UK", "Informational", 390, 25, 430, 16, "Easy", 1.55, "Rapid Cooling", "Cooling hot stews, rice, and meats to 8°C within 90 minutes.", "Guide / Poster", "/food-safety-templates/food-cooling-poster"),
        ("hot holding temperature logs catering regulations", "UK", "Commercial", 480, 30, 520, 17, "Easy", 1.60, "Hot Holding", "Bain-marie 63°C legal threshold and 2-hour single reheat exemption.", "Log Sheet", "/food-safety-templates/hot-holding-temperature-log"),
        ("food waste log sheet uk commercial kitchen", "UK", "Commercial", 360, 25, 400, 14, "Easy", 1.45, "Food Waste", "Tracking spoilage, overproduction, plate waste and prep trim loss.", "Log Sheet", "/food-safety-templates/food-waste-log-sheet"),
        ("glass and brittle plastic policy commercial kitchen", "UK", "Commercial", 290, 15, 315, 12, "Easy", 1.50, "Physical Safety", "Auditing glass light covers, clock faces, and plastic containers.", "Register / SOP", "/food-safety-templates/glass-and-brittle-plastic-register"),
        ("kitchen staff personal hygiene agreement template", "UK", "Commercial", 270, 15, 295, 11, "Easy", 1.35, "Staff Agreement", "Jewellery rules, clean uniforms, hair nets and hand washing agreement.", "Policy Sheet", "/food-safety-templates/basic-food-preparation-rules"),
        ("staff sickness return to work form food handler 48 hours", "UK", "Commercial", 420, 20, 455, 16, "Easy", 1.70, "Norovirus Rules", "48-hour symptom-free rule for vomiting and diarrhea before kitchen return.", "Form Template", "/food-safety-templates/staff-sickness-reporting-log"),
        ("raw meat preparation area sanitisation checklist", "UK", "Commercial", 250, 15, 275, 13, "Easy", 1.40, "E. Coli Guidance", "Designated red board zones, BS EN 1276 sanitiser and contact times.", "Checklist", "/food-safety-templates/kitchen-cleaning-checklist"),
        ("vacuum packing food safety rules uk catering", "UK", "Informational", 220, 20, 250, 18, "Easy", 2.10, "Vac Pack Safety", "Botulism 10-day shelf life restriction for non-preformed vacuum packed foods.", "Guide / SOP", "/food-safety-templates/basic-food-preparation-rules"),
        ("buffet food temperature display time limits uk", "UK", "Informational", 340, 25, 380, 15, "Easy", 1.50, "Buffet Regulations", "4-hour cold rule and 2-hour hot display legal exemptions.", "Guide / Chart", "/food-safety-templates/hot-holding-temperature-log"),
        ("reheating curry takeaway safe temperature guide", "UK", "Informational", 310, 15, 335, 12, "Easy", 1.30, "Reheating Standard", "Core temperature minimum 75°C (82°C Scotland) before takeaway service.", "SOP / Guide", "/food-safety-templates/reheating-temperature-log"),
        ("chilled food storage regulations uk commercial fridge", "UK", "Informational", 430, 25, 470, 16, "Easy", 1.65, "Cold Storage", "Legal maximum 8°C with recommended operational target 1°C to 4°C.", "Guide / Poster", "/food-safety-templates/walk-in-cooler-food-storage-chart"),
        ("frozen meat thawing procedure haccp checklist", "UK", "Commercial", 280, 20, 310, 14, "Easy", 1.45, "Defrosting SOP", "Defrosting at bottom of fridge in drip trays to avoid juices dripping.", "Checklist", "/food-safety-templates/basic-food-preparation-rules"),
        ("fish and chip shop food safety plan template", "UK", "Commercial", 310, 15, 335, 15, "Easy", 1.80, "Chipper Safety", "Handling raw fish, batter preparation, chip cooling and oil filtering.", "Plan Template", "/food-safety-templates/haccp-plan-builder"),
        ("bakery haccp plan template uk small business", "UK", "Commercial", 340, 25, 380, 17, "Easy", 2.20, "Bakery Safety", "Flour sifting, egg handling, cooling, custard CCPs and allergen labelling.", "Plan Template", "/food-safety-templates/haccp-plan-builder"),
        ("commercial kitchen pest sighting log sheet", "UK", "Commercial", 390, 20, 420, 13, "Easy", 1.40, "Pest Sighting", "Staff logging droppings, gnaw marks, insects and pest control calls.", "Log Sheet", "/food-safety-templates/pest-control-checklist"),
        ("oil disposal and grease trap cleaning record sheet", "UK", "Commercial", 320, 15, 345, 14, "Easy", 1.60, "Waste Oil", "Duty of care waste transfer notes for registered oil recycling collection.", "Log Sheet", "/food-safety-templates/cleaning-schedule"),
        ("outdoor catering event food safety checklist uk", "UK", "Commercial", 370, 30, 420, 17, "Easy", 1.95, "Event Catering", "Hand-wash facilities, generator power, cool boxes and temporary sneeze guards.", "Checklist", "/food-safety-templates/health-inspection-checklist")
    ]
    
    for term, c, intent, vol_uk, vol_us, vol_glob, kd, diff, cpc, parent, prob, ptype, url in extra_c1:
        items.append((
            term, c, intent, vol_uk, vol_us, vol_glob, kd, diff, cpc, parent, prob, ptype, url,
            f"{term.title()} | UK Kitchen Due Diligence | Saim Dev",
            f"{term.title()} (Free UK Kitchen Resource)",
            "High" if kd < 18 else "Medium",
            f"Targeted UK food safety search term with estimated monthly search volume of {vol_uk}.",
            "/tools, /blog/sfbb-daily-kitchen-opening-closing-checklist-guide, /food-safety-templates/daily-opening-closing-checklist"
        ))
    return items

print("Cluster 1 builder ready (60 keywords).")
