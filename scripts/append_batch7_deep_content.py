import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

batch7_entries = '''  "fish-temperature-chart": {
    directAnswer:
      "A commercial fish cooking temperature chart and seafood safety guide details statutory core temperatures, parasite freezing controls, and flaking consistency benchmarks for UK catering. Fish cooked to order must achieve an opaque, easily flaked texture with a core temperature of 63°C for 2 minutes (or 70°C for 2 min / 75°C instant; 82°C in Scotland). Wild fish intended for raw or sushi service requires certified parasite freezing (-20°C for 24h or -35°C for 15h) under Regulation (EC) No 853/2004.",
    howTo: [
      "Select the seafood cut: oily salmon supreme, white fish fillets (cod/haddock), seared tuna loin, or whole round fish.",
      "Verify raw fish storage history: fresh fish must be stored between 0°C and 2°C on melting flaked ice with drain drainage.",
      "Insert a sanitised needle probe horizontally into the thickest center part of the fillet away from any bone.",
      "Verify core reaches 63°C for 2 minutes (or 70°C / Scottish 82°C) until flesh becomes completely opaque and flakes.",
      "If serving raw or lightly cured, verify supplier freezing certificate (-20°C for >=24h) to destroy Anisakis parasites."
    ],
    faqs: [
      {
        q: "What is the UK FSA minimum safe cooking temperature for fish?",
        a: "In England, Wales, and Northern Ireland, commercial fish cooked to order must reach at least 63°C for 2 minutes, or 70°C for 2 minutes (75°C for 30 seconds). In Scotland, Food Hygiene Regulations 2006 specify a statutory core temperature of 82°C."
      },
      {
        q: "Can commercial restaurants serve tuna steaks rare in the UK?",
        a: "Yes. Intact whole tuna loin steaks may be served rare at the core provided all exterior surfaces are thoroughly seared to at least 75°C to eliminate surface bacteria, and the fish was maintained continuously under strict cold chain control (<=4°C) to prevent histamine and scombroid poisoning."
      },
      {
        q: "What is the legal freezing requirement for raw sushi fish in the UK?",
        a: "Regulation (EC) No 853/2004 Annex III Section VIII mandates that wild finfish intended to be served raw, marinated, or cold-smoked must undergo freezing to at least -20°C for 24 hours or -35°C for 15 hours to destroy viable Anisakis simplex nematode larvae."
      },
      {
        q: "Why must raw fish be stored on drained flaked ice?",
        a: "Melting ice keeps fresh fish at optimal preservation temperatures (0°C to 2°C). Perforated pans allow melted water to drain away, preventing bacterial proliferation and textural softening from waterlogged tissue."
      }
    ],
    relatedTools: ["walk-in-cooler-food-storage-chart", "food-temperature-chart", "food-cooling-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "food-temperature-chart": {
    directAnswer:
      "A master food temperature chart details the comprehensive UK statutory and best-practice temperature scale for commercial catering. Covering deep freezer storage (<= -18°C), commercial refrigeration (1°C to 5°C, legal max 8°C), the critical Temperature Danger Zone (8°C to 63°C), hot-holding display (>= 63°C), UK core cooking lethality (75°C for 30s / 70°C for 2m), Scottish statutory core (82°C), and commercial dishwasher thermal rinse (>= 82°C).",
    howTo: [
      "Position calibrated dial or digital thermometers in all refrigeration units (1°C–5°C) and commercial deep freezers (<= -18°C).",
      "Record twice-daily AM and PM ambient appliance temperatures in the kitchen SFBB compliance log.",
      "Monitor hot-holding buffet equipment and carvery passes every 2 hours to confirm core remains strictly >= 63°C.",
      "Probe every cooked high-risk batch with a disinfected digital probe to ensure core temperature reaches >= 75°C for 30 seconds (82°C Scotland).",
      "Rapidly cool cooked foods from 63°C down to 8°C or below within 90 minutes before lidding and refrigeration."
    ],
    faqs: [
      {
        q: "What is the temperature danger zone in UK food hygiene law?",
        a: "The temperature danger zone is between 8°C and 63°C, where food poisoning bacteria multiply rapidly. Peak bacterial multiplication occurs at 37°C (human body temperature), where bacteria can double every 20 minutes."
      },
      {
        q: "What is the legal maximum temperature for a commercial fridge in England?",
        a: "Under the Food Hygiene (England) Regulations 2013, the absolute statutory maximum for holding chilled food is 8.0°C. However, the FSA strongly recommends 1°C to 5°C to suppress psychrotrophic Listeria monocytogenes."
      },
      {
        q: "What is the UK 2-hour and 4-hour temperature exemption rule?",
        a: "Hot food held below 63°C may be displayed for a single period of up to 2 hours before it must be sold or thrown away. Chilled food held above 8°C may be displayed on a cold buffet for a single period of up to 4 hours before disposal."
      },
      {
        q: "Why does Scotland have an 82°C cooking temperature requirement?",
        a: "The Food Hygiene (Scotland) Regulations 2006 specify that cooked and reheated food must reach a core temperature of 82.0°C unless the food business operator can scientifically prove that lower temperatures achieve equivalent pathogen destruction."
      }
    ],
    relatedTools: ["freezer-temperature-chart", "fridge-temperature-record-sheet-pdf", "food-cooling-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "pork-temperature-chart": {
    directAnswer:
      "A commercial pork cooking temperature chart outlines statutory thermal lethality thresholds, resting times, and cut guidelines for pork and swine products in UK catering. Minced pork, sausages, and rolled joints must reach at least 75°C core for 30 seconds (82°C Scotland) to eliminate Salmonella and Yersinia enterocolitica, while intact whole muscle loins and chops can be served with a slight blush if seared thoroughly and core reaches 70°C for 2 minutes.",
    howTo: [
      "Determine cut category: intact loin joint, bone-in chop, rolled belly porchetta, slow-cooked shoulder, or minced pork sausage.",
      "Calculate oven duration factoring joint weight (e.g. 50 mins/kg for whole loins at 180°C Fan).",
      "Insert sanitised needle probe into the geometric center of the meat, avoiding bones and thick fat deposits.",
      "Ensure minced pork and rolled joints achieve 75°C for 30 seconds (82°C Scotland); allow intact chops to rest 8–10 minutes under foil.",
      "Record batch core temperature, cook time, and supervisor initials on the daily kitchen roast log."
    ],
    faqs: [
      {
        q: "Can commercial kitchens in the UK serve pork pink or medium?",
        a: "Yes, but only for whole, intact muscle cuts (such as loins, chops, or tenderloins) provided all exterior surfaces are thoroughly seared. Comminuted, minced, rolled, or skewered pork must never be served pink and must hit 75°C throughout."
      },
      {
        q: "What pathogens are eliminated by cooking pork to 75°C?",
        a: "Cooking pork to 75°C for 30 seconds destroys Salmonella enterica, Yersinia enterocolitica, Campylobacter, and Trichinella spiralis parasites."
      },
      {
        q: "Why must rolled pork belly reach 75°C while intact chops need only 70°C?",
        a: "Rolling pork belly transfers exterior surface bacteria into the cold center of the joint. In the eyes of EHO inspectors, rolled roasts are classified as high-risk and require full 75°C (82°C Scotland) thermal core lethality."
      },
      {
        q: "What is the target internal temperature for pulled pork shoulder?",
        a: "For tender shredded pulled pork, the internal temperature should reach between 88°C and 93°C to fully gelatinise collagen and intramuscular connective tissues."
      }
    ],
    relatedTools: ["ham-cooking-temperature-chart", "beef-temperature-chart", "food-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "allergen-control-sop": {
    directAnswer:
      "A commercial allergen control Standard Operating Procedure (SOP) establishes systematic cross-contact prevention protocols for UK hospitality venues under Natasha's Law (Food Information Regulations 2021) and Regulation (EU) No 1169/2011. Encompassing ingredient intake verification, physical storage segregation, dedicated purple utensils, staff allergen hygiene, and order handover checklists.",
    howTo: [
      "Inspect all incoming goods against approved ingredient matrices, checking for unnotified supplier allergen formulation alerts.",
      "Store 14 statutory allergens in designated, airtight, sealed containers in the lower dry store beneath allergen-free ingredients.",
      "Allocate dedicated purple colour-coded cutting boards, chef knives, and stainless-steel cookware for allergen-free orders.",
      "Require food handlers to wash hands with warm water and BS EN 1499 unperfumed soap and put on a clean apron before cooking.",
      "Flag allergen orders on the kitchen display ticket; cover finished plates with a dedicated cloche and allergen flag at the pass."
    ],
    faqs: [
      {
        q: "What are the 14 statutory allergens under UK food safety law?",
        a: "The 14 statutory allergens are celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, tree nuts, peanuts, sesame seeds, soybeans, and sulphur dioxide/sulphites at levels >10mg/kg."
      },
      {
        q: "What does Natasha's Law require for food businesses?",
        a: "Since October 2021, Natasha's Law mandates that all Prepacked for Direct Sale (PPDS) foods must display a clear label featuring the full name of the food and a complete ingredients list with the 14 allergens highlighted in bold, contrasting font."
      },
      {
        q: "Can commercial deep-fat fryers be shared for allergen and gluten-free items?",
        a: "No. High frying temperatures do NOT destroy allergen proteins. Gluten, crustacean, and fish proteins transfer through shared cooking oil. A dedicated fryer is required to claim gluten-free or allergen-free cooking."
      },
      {
        q: "What colour coding is standard for allergen equipment in UK commercial kitchens?",
        a: "Purple is the universally recognised commercial kitchen colour standard for allergen-dedicated chopping boards, tongs, spatulas, and food containers."
      }
    ],
    relatedTools: ["allergen-matrix-generator", "ppds-label-generator", "chopping-board-colour-chart"],
    relatedBlog: {
      title: "How to Create a Compliant 14 Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },

  "haccp-audit-checklist-template": {
    directAnswer:
      "A HACCP audit checklist template provides hospitality operators and food safety managers with a structured verification framework to evaluate kitchen Hazard Analysis and Critical Control Point systems under Regulation (EC) No 852/2004 Article 5. Covering prerequisite programmes (PRPs), critical control point monitoring records, thermometer calibration, corrective actions, and EHO audit readiness.",
    howTo: [
      "Review operational prerequisite programmes (PRPs) including pest control proofing, waste management contracts, and staff fitness-to-work logs.",
      "Examine CCP monitoring records: confirm chiller logs (<=5°C), cooking core logs (>=75°C), and hot holding logs (>=63°C) are signed daily.",
      "Inspect the probe thermometer calibration log, checking monthly ice water (-1°C to +1°C) and boiling water (99°C to 101°C) test entries.",
      "Check non-conformance and corrective action reports to verify that root-cause investigations were documented for any critical limit breaches.",
      "Verify supplier approval accreditation and sample traceability lot codes from goods inwards delivery sheets through to service."
    ],
    faqs: [
      {
        q: "How often should a commercial kitchen conduct an internal HACCP audit?",
        a: "Internal HACCP audits should be carried out at least once every 3 to 6 months, and immediately whenever recipes change, new cooking equipment is installed, or after a food safety incident."
      },
      {
        q: "What are the 7 principles of HACCP under UK legislation?",
        a: "1. Conduct a hazard analysis; 2. Determine Critical Control Points (CCPs); 3. Establish critical limits; 4. Establish monitoring procedures; 5. Establish corrective actions; 6. Establish verification procedures; 7. Establish record-keeping and documentation."
      },
      {
        q: "What documentation do EHO inspectors look for during a Food Hygiene inspection?",
        a: "EHOs inspect the written Food Safety Management System (SFBB pack or HACCP manual), up-to-date daily monitoring diaries, staff Level 2 certificates, probe calibration logs, and pest contractor service reports."
      },
      {
        q: "What constitutes a valid corrective action during a HACCP audit?",
        a: "A valid corrective action must include immediate containment (quarantine or disposal of affected food), remediation (e.g. equipment repair, staff retraining), and documentation of the root-cause prevention steps."
      }
    ],
    relatedTools: ["haccp-plan-builder", "health-inspection-checklist", "restaurant-cleaning-checklist"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for a UK Food Business: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  }
'''

target_boundary = '};\n\nexport const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'

if target_boundary in content:
    content = content.replace(target_boundary, ',\n\n' + batch7_entries + '\n' + target_boundary)
    print("Injected Batch 7 deep content successfully before boundary")
else:
    print("Could not find target boundary in tool_deep_content.ts!")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved tool_deep_content.ts")
