# scripts/append_batch14_deep_content.py
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch14_content = """  "hot-holding-temperature": {
    directAnswer:
      "In UK commercial catering, the statutory minimum hot holding temperature is 63°C (145°F) under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013. Hot holding equipment (bain-maries, soup kettles, hot cupboards) must keep cooked food at or above 63°C continuously, with a single legal exemption permitting holding below 63°C for up to 2 hours.",
    howTo: [
      "Preheat hot holding units, bain-maries, and heated wells before loading freshly cooked hot food.",
      "Verify that food has reached its statutory cooking core (≥75°C) before transfer to hot holding.",
      "Measure food temperatures every 2 hours using a sanitised digital probe inserted into the center of pans.",
      "Stir gravies, curries, and sauces regularly to prevent thermal stratification and cold surface spots.",
      "Discard any food held below 63°C for more than 2 hours; never return unsold hot food to cold storage."
    ],
    faqs: [
      {
        q: "What is the legal hot holding temperature in the UK?",
        a: "The legal minimum temperature for hot holding food in England, Wales, and Northern Ireland is 63°C. Holding food at or above this temperature prevents vegetative food poisoning bacteria from multiplying."
      },
      {
        q: "What is the 2-hour hot holding exemption rule?",
        a: "Under UK food safety law, hot food may be held below 63°C for a single period of up to 2 hours (for example, on an unheated buffet or during service). After 2 hours, the food must be consumed immediately, rapidly reheated to 75°C (once only), or safely discarded."
      },
      {
        q: "Can you reheat food that has been in hot holding?",
        a: "Under FSA guidelines, hot holding food may be reheated only once to a core of 75°C (82°C in Scotland). Reheating food more than once increases the risk of spore-forming bacteria like Clostridium perfringens multiplying and is strictly prohibited."
      },
      {
        q: "How often should hot holding temperatures be recorded?",
        a: "Catering operations should record hot holding temperatures at least every 2 to 4 hours in their daily SFBB diary, logging the dish name, time, core probe reading, and chef's initials."
      },
      {
        q: "What should you do if food in a bain-marie falls to 58°C?",
        a: "If the food has been below 63°C for less than 2 hours, it can be immediately reheated to 75°C on a stove or oven and returned to a corrected bain-marie. If it has been below 63°C for more than 2 hours, it must be discarded immediately."
      }
    ],
    relatedTools: ["what-is-the-minimum-hot-holding-temperature-for-fried-chicken", "danger-zone-for-food", "food-temperatures-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "what-is-the-minimum-hot-holding-temperature-for-fried-chicken": {
    directAnswer:
      "The statutory minimum hot holding temperature for fried chicken in the UK is 63°C (145°F) under the Food Safety and Hygiene Regulations 2013. Prior to hot holding in display warmers or pass-through chutes, fried chicken must reach a cooked core temperature of at least 75°C (82°C in Scotland) to eliminate Salmonella and Campylobacter.",
    howTo: [
      "Deep fry chicken until thickest bone-adjacent meat reaches a minimum core temperature of 75°C (82°C in Scotland).",
      "Transfer cooked chicken immediately to a preheated commercial holding cabinet set between 65°C and 70°C.",
      "Audit holding temperatures hourly with a sanitised needle probe inserted into the thickest breast and thigh pieces.",
      "Ensure holding chutes have controlled humidity to maintain crispy skin while preventing surface desiccation.",
      "Enforce a strict maximum holding time (typically 90 minutes); discard unsold batches exceeding holding limits."
    ],
    faqs: [
      {
        q: "What is the minimum holding temperature for fried chicken in commercial display warmers?",
        a: "In the UK, fried chicken must be held at or above 63°C. Most commercial fast-food warmers operate at 68°C to 72°C to ensure that even the outer pieces remain safely above the legal 63°C threshold."
      },
      {
        q: "What are the food safety hazards associated with holding fried chicken?",
        a: "If fried chicken falls below 63°C, spore-forming bacteria like Clostridium perfringens and Bacillus cereus can germinate rapidly in the warm protein-rich environment. Additionally, Staphylococcus aureus can produce heat-stable enterotoxins if held between 20°C and 45°C."
      },
      {
        q: "How long can fried chicken be safely kept in a hot display cabinet?",
        a: "While UK law permits hot holding above 63°C indefinitely from a safety standpoint, commercial quality standards limit fried chicken holding to 90 to 120 minutes before texture becomes rubbery and dry. After this window, quality degrades severely."
      },
      {
        q: "How should bone-in fried chicken pieces be probed?",
        a: "Insert the needle probe into the thickest portion of the thigh or breast, ensuring the sensor tip reaches deep muscle adjacent to the bone without directly touching the bone itself, which conducts heat differently."
      },
      {
        q: "Does the 2-hour rule apply to fried chicken displays?",
        a: "Yes. If fried chicken drops below 63°C during service, it may only be kept for a maximum of 2 hours, after which it must be consumed or discarded. It must never be sold after the 2-hour threshold."
      }
    ],
    relatedTools: ["hot-holding-temperature", "burger-temp-chart", "food-temperatures-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "cleaning-a-meat-slicer-poster": {
    directAnswer:
      "Cleaning a commercial meat slicer requires a strict mechanical and chemical protocol: electrical lockout, setting blade gauge past zero, donning EN 388 Level 5 cut-resistant safety gloves, dismantling removable carriage components, scrubbing with warm detergent (45°C–55°C), and applying BS EN 1276 sanitiser for at least 30 seconds to eradicate Listeria monocytogenes.",
    howTo: [
      "Turn off the motor, unplug power lead from mains socket, and wrap cord away from wash sinks.",
      "Turn the thickness gauge index knob fully clockwise past zero until blade edge is fully shielded.",
      "Don EN 388 Level 5 cut-resistant stainless mesh safety gloves before touching carriage or blade assembly.",
      "Remove meat carriage, slice deflector, and center blade guard plate; wash in a 3-compartment sink.",
      "Wipe blade from center outward with warm detergent, apply BS EN 1276 sanitiser, allow air-drying, and oil slides."
    ],
    faqs: [
      {
        q: "Why are commercial meat slicers considered high-risk for food poisoning?",
        a: "Meat slicers process ready-to-eat cooked meats that receive no further cooking before consumption. Meat juices and organic debris accumulate behind blade guards, creating ideal biofilm breeding grounds for Listeria monocytogenes, which thrives in cold deli environments."
      },
      {
        q: "How often must commercial meat slicers be cleaned and disinfected?",
        a: "Under UK food hygiene regulations, slicers used continuously must be cleaned and disinfected every 4 hours, and immediately when switching between different types of meat (especially between raw and cooked meats or allergen-containing products)."
      },
      {
        q: "What safety equipment is legally required when cleaning a slicer blade?",
        a: "Health and Safety Executive (HSE) guidance and COSHH regulations require operators to wear certified cut-resistant safety gloves (BS EN 388 Level 5) when cleaning or handling exposed rotating slicer blades."
      },
      {
        q: "Why must you wipe a slicer blade from the center outwards?",
        a: "Wiping from the center hub towards the outer perimeter prevents the cleaning cloth and fingers from getting dragged against the razor-sharp circular cutting bevel, minimizing severe laceration injuries."
      },
      {
        q: "What lubricant should be used on commercial meat slicers?",
        a: "Only use certified NSF H1 registered food-grade mineral oil on slide rods and meat carriage assemblies. Automotive or non-food oils contaminate sliced food and are illegal under UK food contact materials regulations."
      }
    ],
    relatedTools: ["proper-method-for-cleaning-dirty-utensils", "restaurant-cleaning-checklist", "ssop"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "allergen-poster": {
    directAnswer:
      "The 14 food allergens kitchen poster is an official UK food safety reference detailing the 14 statutory allergens mandated under Food Information Regulations (FIR) and Natasha's Law: Celery, Cereals containing Gluten, Crustaceans, Eggs, Fish, Lupin, Milk, Molluscs, Mustard, Nuts, Peanuts, Sesame, Soya, and Sulphites (>10mg/kg).",
    howTo: [
      "Display the 14 allergens poster in prominent kitchen food preparation and plating pass areas.",
      "Audit every ingredient, sauce base, and garnish against manufacturer packaging specifications.",
      "Use designated purple cutting boards, knives, and tongs reserved exclusively for allergen-free orders.",
      "Sanitise prep tables with BS EN 1276 disinfectant and disposable blue roll before preparing allergy meals.",
      "Train all food service staff to record customer allergen declarations and verify dish matrices before service."
    ],
    faqs: [
      {
        q: "What are the 14 statutory food allergens in the UK?",
        a: "The 14 allergens are: Celery, Cereals containing Gluten (wheat, rye, barley, oats), Crustaceans (prawns, crabs, lobsters), Eggs, Fish, Lupin, Milk, Molluscs (mussels, oysters, squid), Mustard, Tree Nuts (almonds, walnuts, pecans, etc.), Peanuts, Sesame seeds, Soya, and Sulphur dioxide/Sulphites at levels above 10mg/kg."
      },
      {
        q: "What is Natasha's Law and how does it affect kitchen labelling?",
        a: "Enacted in October 2021, Natasha's Law mandates that all food Pre-Packed for Direct Sale (PPDS)—such as sandwiches, salads, or bakery items packaged on site before customer ordering—must display a full ingredients list with all 14 statutory allergens clearly emphasised in bold, italics, or contrasting colour."
      },
      {
        q: "Are commercial kitchens required to display an allergen poster?",
        a: "While displaying a poster is not technically compulsory, displaying the 14 allergens chart is recognized by Environmental Health Officers as strong evidence of staff training and compliance with Article 14 of Regulation (EC) No 178/2002."
      },
      {
        q: "What constitutes allergen cross-contact in a restaurant?",
        a: "Cross-contact occurs when an allergen is accidentally transferred to food meant to be allergen-free. Common sources include shared deep fryer oil, using the same tongs for regular and gluten-free bread, or unwashed cutting boards."
      },
      {
        q: "Can a restaurant use 'may contain' statements for loose food?",
        a: "Under UK guidance, precautionary allergen labelling (PAL / 'may contain') should only be applied where there is a demonstrable, uncontrollable cross-contamination risk that cannot be eliminated through good hygiene practices."
      }
    ],
    relatedTools: ["food-allergen-chart", "allergy-matrix", "allergen-control-sop"],
    relatedBlog: {
      title: "How to Create a Compliant 14 Allergen Matrix: UK Guide",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },
  "proper-method-for-cleaning-dirty-utensils": {
    directAnswer:
      "The proper commercial method for cleaning dirty utensils follows a 6-stage protocol: pre-scraping gross food soils, washing in Sink 1 with detergent at 45°C–55°C, rinsing in Sink 2 with clean potable water, sanitising in Sink 3 with BS EN 1276 chemical disinfectant (or thermal rinse at ≥82°C for 30s), ambient air-drying on clean wire racks, and sanitary storage.",
    howTo: [
      "Scrape all residual food scraps, sauces, and bones from dirty utensils into waste receptacles.",
      "Wash in Sink 1 containing warm water (45°C–55°C) and commercial degreasing detergent using brushes.",
      "Immerse in Sink 2 filled with clean warm running water to remove suspended soap film and oils.",
      "Sanitise in Sink 3 using BS EN 1276 chemical sanitiser (30s contact time) or hot water at ≥82°C.",
      "Invert utensils onto stainless steel wire racks to air dry; never dry with reusable tea towels."
    ],
    faqs: [
      {
        q: "What are the 6 stages of commercial dishwashing and utensil cleaning?",
        a: "The 6 official stages are: (1) Pre-scrape, (2) Main Wash with detergent, (3) Intermediate Rinse, (4) Chemical/Thermal Disinfection, (5) Final Air Drying, and (6) Clean Segregated Storage."
      },
      {
        q: "What is the correct water temperature for the 3-sink washing method?",
        a: "Sink 1 (Wash): 45°C to 55°C to dissolve grease without cooking food proteins onto surfaces. Sink 2 (Rinse): 45°C to 60°C clean potable water. Sink 3 (Sanitise): 20°C to 25°C for chemical sanitisers (BS EN 1276), or a minimum of 82°C for thermal hot water sanitisation."
      },
      {
        q: "Why is drying utensils with a tea towel prohibited in commercial kitchens?",
        a: "Drying utensils with cloth tea towels rapidly recontaminates disinfected surfaces with bacteria (Staphylococcus, E. coli) transferred from hands and previous items. Commercial hygiene standards mandate ambient air-drying on wire racks."
      },
      {
        q: "How does commercial utensil cleaning comply with BS EN 1276?",
        a: "Chemical disinfectants used in Sink 3 must be certified to BS EN 1276 or BS EN 13697, achieving a 5-log (99.999%) kill rate against foodborne pathogens within 30 seconds to 5 minutes of contact time at specified dilution rates."
      },
      {
        q: "How should knives and sharp utensils be washed safely?",
        a: "Never drop sharp knives into sinks full of soapy water where blades become invisible hazards. Wash knives individually, holding the handle with the blade pointing away, rinse, sanitise, and dry immediately."
      }
    ],
    relatedTools: ["cleaning-a-meat-slicer-poster", "restaurant-cleaning-checklist", "kitchen-utensils-list"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  }
"""

boundary = "  }\n};\n\nexport const FALLBACK_DEEP_CONTENT"
replacement = "  },\n\n" + batch14_content + "};\n\nexport const FALLBACK_DEEP_CONTENT"

if boundary in text:
    text = text.replace(boundary, replacement, 1)
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Batch 14 deep content successfully appended with proper comma!")
else:
    print("Boundary not found")
