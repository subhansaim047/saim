import re

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

batch15_code = '''  "restaurant-hood-cleaning": {
    directAnswer:
      "Commercial restaurant hood cleaning requires daily degreasing of baffle filters and drip channels, weekly canopy interior scrubdowns, and insurance-mandated professional TR19 certified duct cleaning every 3 to 12 months. Regular extraction cleaning prevents catastrophic grease fires, ensures compliance with the Regulatory Reform (Fire Safety) Order 2005, and maintains optimal kitchen ventilation.",
    howTo: [
      "Remove stainless steel baffle filters daily and soak in hot alkaline degreaser solution (60°C) for 30 minutes before pressure washing and air drying.",
      "Empty and clean canopy drip cups and gutter channels, transferring captured cooking fat into sealed waste oil containers.",
      "Degrease exposed canopy hood interiors, light fixtures, and plenum chambers using food-safe commercial degreaser and non-abrasive pads.",
      "Record certified TR19 professional ductwork inspections and certificate numbers in your kitchen fire safety maintenance log."
    ],
    faqs: [
      {
        question: "How often should commercial kitchen range hoods and filters be cleaned?",
        answer:
          "Stainless steel baffle grease filters must be cleaned daily in high-volume cooking environments (or at least twice weekly for low-use kitchens). Canopy interiors and drip trays should be degreased weekly. Full extract ductwork and motor cleaning must comply with BESA TR19 standards: heavy use (12–16 hrs/day) requires cleanings every 3 months; moderate use (6–12 hrs/day) every 6 months; and light use (2–6 hrs/day) annually."
      },
      {
        question: "What is BESA TR19 and why is it legally essential for UK kitchens?",
        answer:
          "BESA TR19 is the UK building services industry standard specification for kitchen extract system fire safety hygiene. Under the Regulatory Reform (Fire Safety) Order 2005, commercial operators have a legal duty of care to minimise fire risks. Failure to produce a valid TR19 certificate of clean after a fire often invalidates commercial property insurance policies completely."
      },
      {
        question: "What is the best method to degrease stainless steel baffle filters?",
        answer:
          "The most effective method is soaking filters in a stainless steel dip tank filled with hot water (minimum 60°C) and heavy-duty alkaline degreaser or caustic-free commercial soak crystals for 30 to 45 minutes. Rinse thoroughly with a high-pressure hot water spray and allow filters to dry completely before re-installing."
      },
      {
        question: "Can kitchen staff clean exhaust ductwork themselves?",
        answer:
          "Kitchen staff can clean external hood canopies, baffle filters, and accessible grease gutters. However, deep cleaning of internal risers, ductwork runs, and exhaust fans requires certified TR19 professional contractors equipped with rotary brushing equipment, access panel cutters, and certified post-clean thickness testing gauges (Deposit Thickness Test / DTT)."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "proper-method-for-cleaning-dirty-utensils", "cleaning-a-meat-slicer-poster"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "grease-trap-cleaning": {
    directAnswer:
      "Commercial grease trap cleaning involves allowing kitchen wastewater to cool so fats, oils, and grease (FOG) solidify, skimming the top crust, pumping bottom settled sludge, and cleaning flow baffles. Traps must be cleaned whenever the combined FOG and sludge depth reaches 25% of the liquid volume, complying with Section 111 of the Water Industry Act 1991.",
    howTo: [
      "Allow wastewater to cool below 35°C so fats and grease congeal into a firm surface blanket.",
      "Remove the trap lid carefully, inspect rubber sealing gaskets, and ventilate the immediate area.",
      "Skim the solidified surface grease layer using a perforated shovel directly into sealed waste containers.",
      "Scrape grease from baffle walls, pump settled bottom food sludge, and verify automatic bio-enzyme dosing timers."
    ],
    faqs: [
      {
        question: "What is the 25% rule for commercial grease traps?",
        answer:
          "The 25% rule is the universal plumbing and environmental standard stating that a grease trap or interceptor must be pumped and cleaned when 25% or more of its total liquid operating depth is filled with combined floating fats, oils, and grease (FOG) and bottom settled solids. Exceeding 25% allows grease to escape directly into public sewers."
      },
      {
        question: "What UK regulations govern commercial kitchen grease traps?",
        answer:
          "Key UK legislation includes Section 111 of the Water Industry Act 1991 (making it a criminal offence to discharge matter that interferes with sewer flow), Building Regulations 2010 Approved Document H (mandating grease separators for commercial hot food premises), and the Environmental Protection Act 1990 (requiring registered waste carriers and duty of care transfer notes)."
      },
      {
        question: "How often does an indoor under-sink grease trap need cleaning?",
        answer:
          "Manual under-sink grease traps in commercial kitchens typically require manual skimming and debris removal weekly (or daily in high-volume fry and wok operations). Automatic mechanical grease recovery units (GRUs) empty grease daily into external caddies, while external in-ground interceptors are professionally pumped every 1 to 3 months."
      },
      {
        question: "Can grease trap waste be poured down the drain or placed in general refuse?",
        answer:
          "No. Grease trap waste is classified as controlled commercial waste and cannot be discharged into public sewers or placed in municipal landfill bins. Liquid FOG must be collected by an Environment Agency registered waste carrier, and premises must retain certified Waste Transfer Notes (WTNs) on file for at least two years."
      }
    ],
    relatedTools: ["waste-management-plan", "restaurant-hood-cleaning", "restaurant-cleaning-checklist"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "turkey-pasteurization-chart": {
    directAnswer:
      "Turkey pasteurisation requires achieving a 7D (7-log / 99.99999%) reduction in Salmonella enterica. While standard UK guidance mandates reaching 75°C core instantaneously (or 70°C held for 2 minutes), scientific lethality tables validate lower core temperatures when held for calibrated durations (such as 65.6°C for 2.6 minutes or 60.0°C for 27.2 minutes in combi-steam or sous-vide cooking).",
    howTo: [
      "Insert a calibrated digital probe thermometer into the thickest part of the inner thigh and center of the breast without touching bone.",
      "Roast until core temperature reaches 75°C instantaneously (or 70°C maintained continuously for at least 2 minutes).",
      "For precision combi-steam or sous-vide processing, use time-temperature lethality tables (e.g., 65.6°C for 2.6 minutes) with continuous data logging.",
      "Tent roast turkey with aluminium foil and allow at least 20 to 30 minutes of resting to allow carry-over heat distribution."
    ],
    faqs: [
      {
        question: "What is the safe internal cooking temperature for whole turkey in the UK?",
        answer:
          "The UK Food Standards Agency (FSA) specifies that whole poultry, turkey crowns, and poultry products must reach a minimum internal core temperature of 75°C instantaneously (or equivalent time-temperature combinations, such as 70°C held continuously for 2 minutes, or 82°C in Scotland). Meat juices must run completely clear."
      },
      {
        question: "Can turkey be safely pasteurised at temperatures lower than 75°C?",
        answer:
          "Yes. Thermal pasteurisation is a function of both temperature and dwell time. Under USDA FSIS Appendix A and ACMSF poultry lethality data, holding turkey breast at 65.6°C (150°F) for 2.6 minutes achieves the exact same 7-log reduction of Salmonella as reaching 74°C instantaneously, resulting in substantially juicier breast meat."
      },
      {
        question: "Where is the correct probe location when testing roast turkey?",
        answer:
          "Always test in two distinct anatomical locations: the thickest part of the breast muscle (probed horizontally from the side to avoid touching bone) and the deepest part of the inner thigh joint between the leg and the carcass. If the bird is stuffed, probe the innermost centre of the cavity stuffing, which must reach 75°C."
      },
      {
        question: "How much does turkey temperature rise during resting?",
        answer:
          "Large whole birds (5kg to 8kg) experience significant thermal carry-over momentum. When tented loosely with foil on a warm carving board, the core temperature typically rises by 2°C to 4°C over a 20 to 30-minute rest period as heat equalises from outer muscle layers to the center."
      }
    ],
    relatedTools: ["food-temperature-chart", "danger-zone-for-food", "fridge-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "waste-management-plan": {
    directAnswer:
      "A commercial kitchen waste management plan establishes strict segregation of food waste, Category 3 Animal By-Products (ABP), dry mixed recycling, and spent cooking oil. Under the UK Environmental Protection Act 1990 Section 34, food businesses have a legal Duty of Care to prevent odour, vermin attraction, and illegal sewer disposal using registered waste carriers.",
    howTo: [
      "Segregate kitchen food preparation waste from dry recycling and packaging using colour-coded foot-pedal internal bins.",
      "Store raw meat trimmings, bones, and condemned foodstuffs in dedicated, sealed Category 3 Animal By-Product containers.",
      "Transfer spent cooking oil into sealed, bunded collection drums collected exclusively by registered waste oil recyclers.",
      "Secure external commercial wheelie bins in locked corrals with tight-fitting lids and archive all Waste Transfer Notes for 2 years."
    ],
    faqs: [
      {
        question: "What is Category 3 Animal By-Product (ABP) waste in commercial kitchens?",
        answer:
          "Category 3 ABP encompasses raw meat off-cuts, bones, poultry scraps, and former foodstuffs of animal origin that are no longer intended for human consumption. Under The Animal By-Products Regulations 2013, caterers must store ABP waste in leak-proof, labelled, and covered containers separate from municipal refuse to prevent disease transmission."
      },
      {
        question: "What are the legal waste Duty of Care requirements for UK restaurants?",
        answer:
          "Under Section 34 of the Environmental Protection Act 1990, food business operators must: secure waste against scavenging pests and wind scatter; transfer waste only to authorised, Environment Agency licensed carriers; and maintain signed Waste Transfer Notes (WTNs) or annual season tickets on-site for at least two years."
      },
      {
        question: "How should spent commercial cooking oil (UCO) be stored and disposed of?",
        answer:
          "Spent cooking oil must never be poured down kitchen sinks, floor gullies, or storm drains (a criminal offence under Section 111 of the Water Industry Act 1991). Cool oil must be poured into sealed drums stored in a bunded area and collected by a licensed grease carrier who issues a certified Duty of Care receipt."
      },
      {
        question: "How can commercial kitchens eliminate external bin pest attraction?",
        answer:
          "External bins must feature tight-fitting lids that remain closed at all times, drain bungs firmly screwed in, and bin wheels locked. Corrals should be power-washed and disinfected weekly with heavy-duty biocides, positioned away from kitchen intake doors, and inspected daily for evidence of rodent burrowing."
      }
    ],
    relatedTools: ["grease-trap-cleaning", "restaurant-cleaning-checklist", "restaurant-hood-cleaning"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "haccp-flow-chart-template": {
    directAnswer:
      "A HACCP flow chart is a linear process diagram mapping every operational stage in food preparation—from goods delivery receipt and storage to prep, cooking, holding, cooling, reheating, and service. It is a mandatory requirement under Codex Alimentarius Step 4 / Principle 1, providing the foundational framework for identifying hazards and establishing Critical Control Points.",
    howTo: [
      "List every sequential step of food handling from raw ingredient supplier receipt through to customer service or dispatch.",
      "Identify specific biological, chemical, physical, and allergen hazards associated with each individual process step.",
      "Apply the Codex HACCP decision tree questions to determine whether each stage represents a Critical Control Point (CCP).",
      "Establish validated critical limits, continuous monitoring protocols, and corrective actions for every identified CCP."
    ],
    faqs: [
      {
        question: "What is the difference between a process flow diagram and a HACCP plan?",
        answer:
          "A process flow diagram (Codex Step 4) is a visual, linear map depicting each sequential stage of food handling within your premises. A complete HACCP plan (Codex Steps 6–12) is the comprehensive management document that takes that flow diagram, analyses hazards, defines CCPs, establishes critical limits, and details monitoring, corrective action, and verification records."
      },
      {
        question: "How many Critical Control Points (CCPs) should a restaurant flow chart have?",
        answer:
          "Most commercial catering operations have between 3 and 5 CCPs: Goods Receiving (temperature check of chilled/frozen deliveries, CCP 1), Cooking / Thermal Processing (minimum 75°C core, CCP 2), Hot Holding (minimum 63°C, CCP 3), and Rapid Chilling / Cooling (under 8°C within 90 minutes, CCP 4). General hygiene practices are managed via Prerequisite Programmes (PRPs)."
      },
      {
        question: "Why must a HACCP flow diagram be verified on-site?",
        answer:
          "Codex Step 5 mandates on-site verification of the flow chart. An operator or food safety consultant must physically walk through the kitchen across all operational shifts, comparing every actual handling step against the written diagram. Kitchen modifications, equipment changes, or new menu items require immediate diagram updates."
      },
      {
        question: "Does an EHO inspector require a process flow diagram during food hygiene audits?",
        answer:
          "Yes. Under Regulation (EC) No 852/2004 Article 5, Environmental Health Officers inspect documented food safety management procedures based on HACCP principles (or Safer Food, Better Business). A clear, verified process flow diagram demonstrates competent management oversight and directly supports achieving a 5-star Food Hygiene Rating."
      }
    ],
    relatedTools: ["ssop", "food-flow-chart", "hazard-analysis-template"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  }
};'''

target_end = '};\n\nexport const FALLBACK_DEEP_CONTENT'

if target_end in content:
    # Check if there is a trailing comma before target_end
    before_target = content[:content.find(target_end)].rstrip()
    if not before_target.endswith(','):
        print("Adding trailing comma before appending")
        content = content[:content.find(target_end)].rstrip() + ',\n' + batch15_code + '\n' + content[content.find(target_end)+len('};'):]
    else:
        content = content[:content.find(target_end)] + '\n' + batch15_code + '\n' + content[content.find(target_end)+len('};'):]
    print("Successfully appended Batch 15 to tool_deep_content.ts")
else:
    print("Could not find target_end in tool_deep_content.ts!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished writing tool_deep_content.ts")
