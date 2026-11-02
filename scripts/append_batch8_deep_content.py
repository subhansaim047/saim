import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

batch8_entries = '''  "eho-checklist": {
    directAnswer:
      "An Environmental Health Officer (EHO) food hygiene inspection checklist provides UK food business operators with the official audit framework used by local authorities to score venues under the Food Hygiene Rating Scheme (FHRS). Evaluating food handling, physical premises cleanliness, and confidence in management across statutory criteria.",
    howTo: [
      "Audit Pillar 1 (Food Hygiene & Handling): verify raw/ready-to-eat separation, probe cooking temperatures (>=75°C for 30s / 82°C Scotland), and cold holding (<=5°C, legal max 8°C).",
      "Audit Pillar 2 (Cleanliness & Condition of Facilities): examine ventilation hoods, fly screening, non-slip flooring, handwash basin supplies, and pest proofing.",
      "Audit Pillar 3 (Confidence in Management): inspect the completed Safer Food, Better Business (SFBB) diary, allergen matrix, staff training certificates, and traceability invoices.",
      "Address all non-compliances immediately, document corrective actions taken, and schedule regular weekly internal hygiene audits."
    ],
    faqs: [
      {
        q: "How often do EHOs inspect food businesses in the UK?",
        a: "Inspection frequency depends on risk rating: high-risk businesses (such as category A or B) are inspected every 6 to 12 months, while lower-risk businesses are inspected every 18 to 24 months."
      },
      {
        q: "What are the three pillars of an EHO inspection?",
        a: "1. Hygienic food handling; 2. Physical condition and cleanliness of the facilities and building; 3. Confidence in management and documented food safety procedures (SFBB pack or HACCP manual)."
      },
      {
        q: "Can an EHO close down a restaurant on the spot?",
        a: "Yes. If an officer finds an imminent risk to health (such as an active rodent or cockroach infestation, lack of running hot water, or severe sewage backup), they can issue a Hygiene Emergency Prohibition Notice (HEPN) closing the venue immediately."
      },
      {
        q: "How can a kitchen achieve a 5-star Food Hygiene Rating?",
        a: "To achieve a 5-star rating, a business must score top marks across all three pillars: zero major food handling breaches, exemplary structural cleaning, and complete, up-to-date HACCP documentation."
      }
    ],
    relatedTools: ["health-inspection-checklist", "restaurant-cleaning-checklist", "haccp-plan-builder"],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "deep-cleaning-checklist": {
    directAnswer:
      "A commercial kitchen deep cleaning checklist organizes high-intensity sanitation rotas for restaurant cooking lines, extraction systems, refrigeration units, and wash stations. Covering fryer chemical boil-outs, TR19 extraction grease removal, behind-line equipment pulls, and BS EN 1276 two-stage disinfection.",
    howTo: [
      "Isolate utilities: turn off gas valves, disconnect electrical appliances, and remove all raw/cooked food from the cleaning zone.",
      "Execute fryer boil-out: drain spent oil into waste drums, fill vat with water and commercial degreaser, simmer, rinse thoroughly, and neutralise with dilute vinegar.",
      "Soak extraction baffle filters in hot caustic degreaser; scrape grease troughs and wipe plenum chambers in compliance with TR19 fire standards.",
      "Pull heavy appliances away from walls to vacuum refrigeration condenser coils, scrub wall tiles, and degrease floor drainage gullies.",
      "Apply two-stage sanitising (BS EN 1276 compliant) to all prep surfaces, allowing recommended 30–60 second contact time."
    ],
    faqs: [
      {
        q: "How often should a commercial kitchen undergo deep cleaning?",
        a: "Daily cleaning covers food-contact surfaces, while heavy deep cleaning (behind appliances, TR19 extraction filters, ceiling tiles, and drainage sumps) should be conducted weekly, monthly, or quarterly depending on volume."
      },
      {
        q: "What is TR19 compliance for commercial kitchen extraction?",
        a: "TR19 is the UK building services standard (BESA) for cleaning commercial kitchen ventilation systems. Failure to maintain certified duct and canopy cleaning can void commercial fire insurance."
      },
      {
        q: "What is the two-stage cleaning method required by UK EHOs?",
        a: "Stage 1: Clean surface with warm water and detergent to remove physical grease and food debris. Stage 2: Spray BS EN 1276 disinfectant and allow full contact time (30–60s) before wiping clean."
      },
      {
        q: "How do you safely boil out a commercial deep fat fryer?",
        a: "Drain oil when cool, fill with water and specialized fryer detergent, heat to gentle simmer for 20 minutes, drain, scrub heating elements, rinse with clean water, wipe dry, and refill with fresh oil."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "cleaning-schedule", "cleaning-restaurant"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },

  "fsma-compliance-checklist": {
    directAnswer:
      "A UK food hygiene due diligence and compliance checklist provides catering operators with a statutory verification tool to establish a Section 21 defense under the Food Safety Act 1990 and demonstrate adherence to Regulation (EC) No 852/2004. Verifying supplier traceability, cold chain continuity, core cooking lethality, allergen controls, and staff training.",
    howTo: [
      "Inspect supplier deliveries upon arrival: verify cold chain temperatures (chilled <=5°C, frozen <=-18°C) and file batch lot invoices for traceability.",
      "Check daily kitchen logs: ensure opening, midday, and closing temperature checks for chillers and freezers have zero unverified gaps.",
      "Confirm core thermal lethality: probe every batch of high-risk cooked foods to ensure >=75°C for 30s (82°C Scotland).",
      "Audit Natasha's Law compliance: verify all Prepacked for Direct Sale (PPDS) foods bear full ingredient labels with allergens in bold.",
      "Archive completed monthly due diligence checklists in the kitchen compliance binder for statutory 12-month retention."
    ],
    faqs: [
      {
        q: "What is the Section 21 statutory defense in UK food law?",
        a: "Under Section 21 of the Food Safety Act 1990, a food business operator charged with an offence has a legal defense if they can prove they took all reasonable precautions and exercised all due diligence to avoid committing the offence."
      },
      {
        q: "What records are mandatory to prove food safety due diligence?",
        a: "Mandatory records include daily temperature logs (chillers, freezers, cook cores), written HACCP/SFBB plan, probe calibration logs, allergen matrices, staff hygiene training certificates, and supplier delivery invoices."
      },
      {
        q: "How long must food businesses keep due diligence records in the UK?",
        a: "Due diligence records should be retained for at least 12 months, or 3 months beyond the shelf life of the food produced, to defend against historical food poisoning claims."
      },
      {
        q: "What is the legal requirement for staff food hygiene training?",
        a: "Regulation (EC) No 852/2004 requires food business operators to ensure all food handlers are supervised and instructed or trained in food hygiene matters commensurate with their work activity (typically Level 2 Food Safety certification)."
      }
    ],
    relatedTools: ["haccp-plan-builder", "health-inspection-checklist", "food-traceability"],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "ecosure-inspection-checklist": {
    directAnswer:
      "A third-party kitchen hygiene audit checklist helps restaurant franchises, hotels, and contract caterers conduct rigorous internal quality assurance audits mirroring external brand inspection standards (such as EcoSure, NSF, or STS). Focusing on critical control point adherence, cold chain integrity, stock rotation, and chemical safety.",
    howTo: [
      "Conduct an unannounced walk-through inspection starting at the goods receipt dock and progressing through storage, prep, and pass stations.",
      "Perform spot-check temperature probing on active hot-holding equipment (>=63°C) and line refrigeration units (<=5°C).",
      "Inspect dry goods and cold store shelving: verify all food is stored >15cm off the floor and FIFO day-dots are up to date.",
      "Check handwash basins: verify unperfumed soap (BS EN 1499), hot water, paper towels, and zero unauthorized utensil washing.",
      "Document all audit non-conformances with photographic evidence, assign corrective action owners, and schedule a 48-hour re-check."
    ],
    faqs: [
      {
        q: "What is a third-party kitchen hygiene audit?",
        a: "A third-party audit is an independent inspection conducted by specialized auditing firms (like EcoSure, NSF, or Bureau Veritas) on behalf of franchise headquarters, insurers, or brand owners to verify food safety standards."
      },
      {
        q: "How do third-party audits differ from local council EHO inspections?",
        a: "While EHO inspections focus strictly on statutory UK food law and public health, third-party audits also assess proprietary brand standards, recipe specifications, product presentation, and guest experience."
      },
      {
        q: "What are the most common critical failures in commercial kitchen audits?",
        a: "Common critical audit failures include temperatures in the danger zone (8°C–63°C), raw meat stored above ready-to-eat foods, expired day-dots, broken handwash basins, and uncalibrated probe thermometers."
      },
      {
        q: "What corrective action timeline is expected for critical audit deficiencies?",
        a: "Critical food safety violations require immediate containment and correction within 24 to 48 hours, followed by written evidence and supervisor re-inspection."
      }
    ],
    relatedTools: ["eho-checklist", "haccp-audit-checklist-template", "health-inspection-checklist"],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "restroom-cleaning-checklist-log": {
    directAnswer:
      "A commercial restroom cleaning checklist and washroom inspection log ensures restaurant and hospitality facilities maintain exceptional hygiene, prevent cross-contamination, and meet UK workplace and customer sanitary regulations. Outlining hourly inspection routines, soap dispenser refills, sanitary disposal, and touchpoint disinfection.",
    howTo: [
      "Equip cleaning staff with yellow colour-coded cleaning gear (yellow mop bucket, yellow cloths) designated strictly for washrooms.",
      "Inspect and replenish consumables: unperfumed bactericidal hand soap (BS EN 1499) and blue disposable paper roll dispensers.",
      "Check running water: verify both hot (>=45°C) and cold water are functioning properly at all handwash basins.",
      "Apply bactericidal cleaner to WC bowls, toilet seats, urinals, and high-touch points (cubicle locks, flush handles, door push plates).",
      "Mop non-slip flooring with disinfectant, allow to dry completely, and initial the hourly verification log on the back of the door."
    ],
    faqs: [
      {
        q: "How often should restaurant restrooms be cleaned and inspected?",
        a: "High-volume restaurants and takeaways should inspect restrooms hourly during peak trade, with a comprehensive deep clean conducted at opening and closing."
      },
      {
        q: "What colour equipment should be used for cleaning commercial washrooms?",
        a: "Under the British Institute of Cleaning Science (BICS) national colour-coding standard, YELLOW is reserved strictly for washrooms, toilets, urinals, and washroom floors."
      },
      {
        q: "Are electric hand dryers or paper towels better for commercial food hygiene?",
        a: "In food premises, disposable paper towels are strongly preferred by EHOs because warm air dryers can disperse aerosolized bacteria throughout the air, whereas paper towels remove residual microbes via physical friction."
      },
      {
        q: "What legal regulations govern customer restrooms in UK restaurants?",
        a: "The Workplace (Health, Safety and Welfare) Regulations 1992 and local authority licensing conditions require food businesses to provide clean, ventilated, well-lit sanitary conveniences with hot/cold water, unperfumed soap, and adequate drying facilities."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "cleaning-schedule", "deep-cleaning-checklist"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  }
'''

target_boundary = '};\n\nexport const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'

if target_boundary in content:
    content = content.replace(target_boundary, ',\n\n' + batch8_entries + '\n' + target_boundary)
    print("Injected Batch 8 deep content successfully before boundary")
else:
    print("Could not find target boundary in tool_deep_content.ts!")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved tool_deep_content.ts")
