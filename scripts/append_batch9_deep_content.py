import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

batch9_entries = '''  "consumer-advisory": {
    directAnswer:
      "A commercial consumer advisory notice informs restaurant diners and takeaway customers of the health risks associated with consuming raw, undercooked, or lightly cooked foods (such as rare steaks, raw bivalve molluscs/oysters, pink duck breast, runny eggs, and unpasteurised cheeses). Fulfilling due diligence requirements under the Food Safety Act 1990 and UK Food Standards Agency guidelines.",
    howTo: [
      "Identify menu items served raw or less thoroughly cooked: whole muscle steaks (rare/medium-rare), oysters, carpaccio, tartare, runny eggs, or pink poultry.",
      "Verify that whole muscle cuts have surfaces seared to at least 75°C to eliminate surface bacteria, and sushi-grade fish has verified parasite freezing certificates.",
      "Prominently display the statutory consumer advisory statement on all printed menus, digital ordering websites, and front-of-house service counters.",
      "Train front-of-house staff to highlight the consumer advisory to vulnerable individuals (elderly guests, pregnant women, and immunocompromised diners)."
    ],
    faqs: [
      {
        q: "Is a consumer advisory legally required in UK restaurants?",
        a: "Under the Food Safety Act 1990 and General Food Law Regulation EC 178/2002, food businesses have a legal duty to serve safe food and inform consumers of known risks when serving foods that are less thoroughly cooked."
      },
      {
        q: "Can commercial kitchens serve burgers rare in the UK?",
        a: "FSA regulations strictly prohibit serving minced beef burgers rare or medium unless the food business operator has an officially validated and approved HACCP plan demonstrating a 4-log or 6-log bacterial kill via specific thermal controls."
      },
      {
        q: "What foods require consumer advisory warnings?",
        a: "Common items include raw oysters, seared rare steaks, steak tartare, carpaccio, lightly cooked pink duck breast, runny unpasteurised eggs, and unpasteurised artisan raw milk cheeses."
      },
      {
        q: "What specific warning is required for raw oysters and shellfish?",
        a: "Notices must warn guests that consuming raw oysters may increase the risk of foodborne illness caused by Norovirus or Vibrio, particularly for vulnerable individuals."
      }
    ],
    relatedTools: ["basic-food-preparation-rules", "beef-temperature-chart", "food-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "food-allergy-warning": {
    directAnswer:
      "A food allergy warning sign and customer notice provides UK hospitality premises with statutory front-of-house and digital signage advising diners of the 14 mandatory food allergens under Natasha's Law (Food Information Regulations 2021) and Regulation (EU) No 1169/2011. Enforcing open communication before ordering and due diligence defense.",
    howTo: [
      "Display prominent food allergy warning signage at all order points: customer entrances, POS service counters, bar passes, and takeaway pickup shelves.",
      "Clearly state: 'Food Allergies & Intolerances: Please speak to our staff about the ingredients in your meal when placing your order.'",
      "Maintain an up-to-date physical 14-allergen matrix binder immediately accessible behind the counter for staff reference.",
      "Train all front-of-house staff never to guess ingredients and to refer any allergen query directly to the lead supervisor or head chef."
    ],
    faqs: [
      {
        q: "Is allergy warning signage mandatory for UK takeaways and restaurants?",
        a: "Yes. Under Regulation (EU) No 1169/2011 and UK Food Information Regulations, food businesses must clearly signpost that allergen information is available upon request."
      },
      {
        q: "What are the 14 statutory food allergens that must be disclosed?",
        a: "Celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, tree nuts, peanuts, sesame seeds, soybeans, and sulphur dioxide/sulphites at levels >10mg/kg."
      },
      {
        q: "What does Natasha's Law require for Prepacked for Direct Sale (PPDS) foods?",
        a: "All PPDS foods prepacked on the premises prior to ordering must have a physical label showing the name of the food and a full ingredients list with allergens emphasized in bold text."
      },
      {
        q: "Can a food business simply state 'we cannot guarantee zero allergens'?",
        a: "While precautionary allergen statements (such as 'may contain') are permitted, businesses must still provide accurate ingredient lists and demonstrate genuine due diligence to prevent accidental cross-contact."
      }
    ],
    relatedTools: ["allergy-matrix", "allergen-control-sop", "ppds-label-generator"],
    relatedBlog: {
      title: "How to Create a Compliant 14 Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },

  "waste-management-schedule": {
    directAnswer:
      "A commercial kitchen waste management schedule establishes statutory waste segregation, storage, and disposal procedures for UK food premises under the Environmental Protection Act 1990 and Animal By-Products (Enforcement) Regulations 2013. Covering internal food waste segregation, used cooking oil (UCO) recycling, Category 3 ABP controls, and Duty of Care documentation.",
    howTo: [
      "Segregate waste at point of generation: internal foot-pedal food waste bins, dry packaging recycling, and general refuse.",
      "Collect used cooking oil (UCO) in sealed, bunded storage drums; ensure collection only by Environment Agency licensed carriers.",
      "Isolate Category 3 Animal By-Product (ABP) raw meat scraps and condemned food in dedicated, locked, airtight bins away from prep areas.",
      "Maintain external commercial bin corrals: ensure all wheelie bins are locked, drain plugs secured, and ground pressure-washed weekly.",
      "Archive Duty of Care Waste Transfer Notes (WTNs) and oil collection consignment notes for at least 2 years in compliance binders."
    ],
    faqs: [
      {
        q: "What is the legal requirement for commercial kitchen waste disposal in the UK?",
        a: "Under Section 34 of the Environmental Protection Act 1990, food businesses have a legal Duty of Care to ensure waste is stored safely, collected only by licensed waste carriers, and accompanied by written Waste Transfer Notes."
      },
      {
        q: "How must used cooking oil (UCO) be stored and disposed of?",
        a: "Used cooking oil must NEVER be poured down sinks or drains. It must be collected in airtight drums, stored in a bunded area, and collected by an authorized waste oil recycler."
      },
      {
        q: "What constitutes Category 3 Animal By-Product (ABP) waste?",
        a: "Category 3 ABP includes former foodstuffs containing raw meat or fish, animal carcasses from butchery, and catering waste from international transport. It must be collected by an approved ABP processor."
      },
      {
        q: "How long must commercial kitchens retain Waste Transfer Notes (WTNs)?",
        a: "Under UK environmental legislation, businesses must retain general Waste Transfer Notes for at least 2 years and hazardous waste consignment notes for 3 years."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "cleaning-schedule", "deep-cleaning-checklist"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },

  "food-flow-chart": {
    directAnswer:
      "A HACCP food flow chart is an operational process diagram that maps the sequential journey of food through a catering establishment—from purchasing and goods inward to service and delivery. As required under Regulation (EC) No 852/2004 Article 5, it identifies Critical Control Points (CCPs), potential food safety hazards, statutory critical limits, and corrective actions.",
    howTo: [
      "Map all operational catering flow steps: Purchasing, Receiving, Storage, Defrosting, Preparation, Cooking, Holding, Cooling, Reheating, and Service.",
      "Identify biological, physical, chemical, and allergen hazards associated with each specific operational stage.",
      "Designate statutory Critical Control Points (e.g. Delivery Chilling <=5°C, Cooking Core >=75°C, Hot Holding >=63°C, Rapid Chilling within 90 mins).",
      "Establish validated monitoring methods, inspection frequencies, and mandatory corrective action protocols for every CCP.",
      "Review the food flow diagram annually, updating whenever recipes, prep equipment, or menu formats are modified."
    ],
    faqs: [
      {
        q: "Why is a food flow chart required in a commercial kitchen HACCP plan?",
        a: "Codex Alimentarius and UK food hygiene regulations require food businesses to map their operational process flow to ensure no hidden contamination hazards or temperature abuse points are overlooked."
      },
      {
        q: "What are Critical Control Points (CCPs) in a food flow chart?",
        a: "A Critical Control Point is an operational stage at which control can be applied and is essential to prevent or eliminate a food safety hazard or reduce it to an acceptable level (such as cooking, chilling, or hot-holding)."
      },
      {
        q: "What is the difference between a Prerequisite Programme (PRP) and a CCP?",
        a: "PRPs are general foundational hygiene conditions (pest control, cleaning, staff personal hygiene), whereas CCPs are specific operational control steps directly tied to food safety thresholds (such as 75°C core cook temp)."
      },
      {
        q: "How should takeaways map food flow for delivery orders?",
        a: "Takeaways must include packaging and delivery transit in their food flow, specifying insulated bags that maintain hot food >=63°C and cold food <=8°C during transit."
      }
    ],
    relatedTools: ["haccp-plan-builder", "food-safety-plan", "health-inspection-checklist"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for a UK Food Business: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },

  "food-safety-plan": {
    directAnswer:
      "A UK food safety management plan is a documented operational system based on the principles of HACCP (Hazard Analysis and Critical Control Points) and Safer Food, Better Business (SFBB). Legally required under Regulation (EC) No 852/2004 Article 5, it establishes proactive hazard identification, critical limits, daily monitoring diaries, and corrective action protocols.",
    howTo: [
      "Define your food business scope: premise layout, equipment list, operating hours, and management responsibilities.",
      "Implement prerequisite hygiene programmes (PRPs) covering supplier approval, structural cleaning, pest control, and personal hygiene.",
      "Conduct a thorough hazard analysis across all 4 hazard types: biological, chemical, physical, and allergenic.",
      "Establish Critical Control Points (CCPs) with validated critical limits (e.g. Chilled <=5°C, Cooking >=75°C for 30s, Hot-Holding >=63°C).",
      "Maintain completed daily monitoring diaries and review the entire food safety plan at least once annually."
    ],
    faqs: [
      {
        q: "Is a written Food Safety Plan legally mandatory for all UK food businesses?",
        a: "Yes. Article 5 of Regulation (EC) No 852/2004 requires all food business operators to put in place, implement, and maintain a permanent written procedure based on HACCP principles."
      },
      {
        q: "What is the difference between SFBB and a bespoke HACCP plan?",
        a: "Safer Food, Better Business (SFBB) is an FSA-designed simplified HACCP pack for small catering businesses. Large manufacturers, central production kitchens, and multi-site venues require a bespoke, full Codex Alimentarius HACCP plan."
      },
      {
        q: "What are the 7 core principles of HACCP in a Food Safety Plan?",
        a: "1. Hazard analysis; 2. Identify Critical Control Points; 3. Establish critical limits; 4. Establish monitoring procedures; 5. Establish corrective actions; 6. Establish verification procedures; 7. Establish record keeping."
      },
      {
        q: "How does an effective Food Safety Plan protect business owners?",
        a: "A documented and actively maintained Food Safety Plan provides a statutory Section 21 due diligence defense under the Food Safety Act 1990, protecting owners from fines, closure notices, and criminal prosecution."
      }
    ],
    relatedTools: ["haccp-plan-builder", "food-flow-chart", "eho-checklist"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for a UK Food Business: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  }
'''

target_boundary = '};\n\nexport const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'

if target_boundary in content:
    content = content.replace(target_boundary, ',\n\n' + batch9_entries + '\n' + target_boundary)
    print("Injected Batch 9 deep content successfully before boundary")
else:
    print("Could not find target boundary in tool_deep_content.ts!")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved tool_deep_content.ts")
