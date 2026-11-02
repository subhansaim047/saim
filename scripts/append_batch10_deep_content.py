import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

batch10_entries = '''  "product-specification-template": {
    directAnswer:
      "A commercial food product specification template defines the technical, legal, and safety standards for manufactured food items and catering preparations. Covering Quantitative Ingredient Declarations (QUID %), statutory 14-allergen declarations under Natasha's Law, microbiological process hygiene criteria under Regulation (EC) No 2073/2005, packaging barrier integrity, and shelf-life storage parameters.",
    howTo: [
      "Document finished product identity: brand, SKU code, net weight, production facility, and target customer demographic.",
      "Formulate ingredients list with precise Quantitative Ingredient Declarations (QUID %) for highlighted characterising ingredients.",
      "Highlight all 14 statutory allergens in bold text in compliance with Natasha's Law (Food Information Regulations 2021).",
      "Set validated microbiological action thresholds (Enterobacteriaceae, E. coli, Salmonella, Listeria) based on shelf-life testing.",
      "Archive the technical specification dossier in the QA management database for annual audit review."
    ],
    faqs: [
      {
        q: "What is a Quantitative Ingredient Declaration (QUID) in UK food labelling?",
        a: "QUID requires food businesses to declare the percentage of an ingredient used in food if the ingredient appears in the name of the food, is usually associated with that food, or is emphasized on the label."
      },
      {
        q: "What microbiological criteria must commercial food specifications meet?",
        a: "Under Regulation EC No 2073/2005, ready-to-eat foods must demonstrate absence of Salmonella in 25g, Listeria monocytogenes absent in 25g (or <100 cfu/g throughout shelf life), and Enterobacteriaceae <10 cfu/g."
      },
      {
        q: "How does a product specification protect catering and wholesale suppliers?",
        a: "A detailed specification forms a legally binding quality contract between supplier and buyer, ensuring consistency and establishing a Section 21 due diligence defense against adulteration or allergen claims."
      },
      {
        q: "How frequently should food product specifications be updated?",
        a: "Technical specifications should be reviewed at least once every 12 months, or immediately whenever ingredient suppliers, processing equipment, or recipe formulations change."
      }
    ],
    relatedTools: ["recipe-calculator", "food-cost-calculator", "allergy-matrix"],
    relatedBlog: {
      title: "How to Scale Recipes for Commercial Catering: Batch Calculator",
      slug: "how-to-scale-recipes-commercial-catering-batch-calculator"
    }
  },

  "pest-control-inspection-checklist": {
    directAnswer:
      "A commercial kitchen pest inspection checklist establishes daily and weekly monitoring routines to identify and eliminate rodent, insect, and bird activity in UK food premises. Fulfilling statutory requirements under Regulation (EC) No 852/2004 Annex II Chapter IX and British Pest Control Association (BPCA) standards.",
    howTo: [
      "Inspect all numbered exterior and interior rodent bait stations: verify boxes are locked, securely tethered, and free from gnaw marks or droppings.",
      "Check Electric Fly Killers (EFKs): confirm UV tube operation (tubes replaced within 12 months), empty catch trays, and clean insect grilles.",
      "Inspect physical building proofing: verify exterior door rubber/bristle seals (<5mm gap clearance) and confirm intact window insect mesh.",
      "Examine dry ingredient storerooms for stored product insects (flour beetles, weevils, webbing, moth larvae) on shelves and bulk sacks.",
      "Document all inspection observations in the SFBB daily diary and notify your BPCA-registered pest contractor of any active alerts."
    ],
    faqs: [
      {
        q: "What are the legal requirements for pest control in UK commercial kitchens?",
        a: "Regulation EC No 852/2004 mandates that food business premises must be designed, constructed, and maintained to permit good food hygiene practices, including protection against contamination and pest ingress."
      },
      {
        q: "What are the early signs of rodent activity in a restaurant?",
        a: "Early signs include dark spindle-shaped droppings (3–8mm), gnaw marks on food packaging or skirting boards, greasy smear marks along baseboards, ammonia-like urine odors, and shredded nesting materials."
      },
      {
        q: "Where should Electric Fly Killers (EFKs) be installed in a kitchen?",
        a: "EFKs should be mounted away from open food prep surfaces and exterior doors, ideally in a shaded area of the kitchen where UV light will not compete with direct sunlight."
      },
      {
        q: "How often must professional pest control contractors inspect a food venue?",
        a: "Most local authorities recommend a minimum of 4 to 8 routine inspections per year by a qualified BPCA or CEPA accredited pest control technician."
      }
    ],
    relatedTools: ["pest-control-checklist", "pest-control-template", "restaurant-cleaning-checklist"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },

  "pest-control-template": {
    directAnswer:
      "A kitchen pest prevention action plan organizes proactive exclusion, sanitation, proofing, and contractor management procedures for UK commercial kitchens. Built on the P.E.R.D. framework (Proofing, Exclusion, Restriction, and Destruction) to eliminate pest attraction and guarantee EHO audit compliance.",
    howTo: [
      "Establish physical proofing barriers: seal wall pipe penetrations with stainless wire wool and cement; fit fine fly mesh to opening windows.",
      "Enforce strict food and water restriction: store all dry stock in sealed plastic bins >15cm off the floor; repair dripping taps immediately.",
      "Implement nightly sanitation protocols: sweep, degrease, and sanitise beneath all cooking line equipment to remove food crumbs and grease.",
      "Maintain a formal contract with an accredited BPCA pest technician; file technician service reports in the SFBB management folder.",
      "Conduct immediate remediation whenever contractor reports identify structural defects or insect/rodent activity."
    ],
    faqs: [
      {
        q: "What does the P.E.R.D. pest control principle mean in commercial catering?",
        a: "Proofing (sealing building entry points), Exclusion (preventing pests from entering on delivery pallets), Restriction (denying pests access to food, warmth, and water), and Destruction (eradicating infestations via approved contractor methods)."
      },
      {
        q: "Can kitchen staff lay rodent poison or chemical sprays themselves?",
        a: "No. In commercial food premises, chemical baiting and pesticide application must be performed exclusively by certified professional pest technicians to avoid toxic chemical contamination of food."
      },
      {
        q: "What will an EHO do if active rodent droppings are found during an inspection?",
        a: "If an EHO discovers active rodent activity in food preparation or storage areas, they will issue a Hygiene Emergency Prohibition Notice (HEPN), shutting down the premises immediately until the infestation is eradicated and the venue is re-inspected."
      },
      {
        q: "How should external commercial wheelie bins be managed to deter pests?",
        a: "External bins must be kept locked, with tight-fitting lids closed at all times, placed on a washable hard-standing surface away from open kitchen doors, and emptied on a regular contracted schedule."
      }
    ],
    relatedTools: ["pest-control-inspection-checklist", "restaurant-cleaning-checklist", "waste-management-schedule"],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "bar-opening-checklist": {
    directAnswer:
      "A commercial bar opening and operations checklist guides bartenders, baristas, and cellar managers through daily sanitation, beverage quality, and food safety opening routines. Covering cellar cooling (10°C–12°C), beer line cleaning, commercial glasswasher disinfection (>=65°C rinse), ice machine hygiene, and cocktail garnish date-labelling.",
    howTo: [
      "Inspect cellar temperature: verify cellar cooling fan maintains kegs and casks between 10°C and 12°C; check beer gas regulator pressures.",
      "Check glasswasher hygiene: verify detergent and rinse-aid chemical levels; confirm wash temperature >=55°C and final rinse >=65°C.",
      "Sanitise commercial ice machine: check ice bin for clean interior, inspect chute for mold/algae, and store ice scoop in sanitised holster.",
      "Prepare fresh cocktail garnishes: slice citrus fruits and herbs on dedicated green boards; label with prep date and use-by time.",
      "Verify dedicated bar handwash sink is stocked with warm running water, unperfumed soap (BS EN 1499), and blue paper hand towels."
    ],
    faqs: [
      {
        q: "How often should beer lines be cleaned in a UK pub or bar?",
        a: "Beer lines should be cleaned at least once every 7 to 14 days using specialized alkaline line cleaning detergent with color indicator, followed by thorough fresh water rinsing."
      },
      {
        q: "What is the correct temperature for a commercial beer cellar?",
        a: "Cellar temperatures should be maintained between 10°C and 12°C (50°F–54°F) to prevent beer spoilage, excessive fobbing (foaming), and wild yeast proliferation."
      },
      {
        q: "Why must ice scoops never be stored inside the ice machine bin?",
        a: "Leaving scoops inside the ice bin allows bacteria from the bartender's hands to transfer directly onto the ice, causing cross-contamination of cold drinks with Norovirus or E. coli."
      },
      {
        q: "What temperature must commercial bar glasswashers achieve?",
        a: "Under UK public health standards, commercial glasswashers must achieve a wash temperature of at least 55°C to remove lipstick and grease, followed by a sanitising rinse of 65°C to 70°C."
      }
    ],
    relatedTools: ["restaurant-checklist", "restaurant-cleaning-checklist", "restroom-cleaning-checklist-log"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },

  "restaurant-checklist": {
    directAnswer:
      "A comprehensive restaurant operations checklist organizes front-of-house customer areas, service passes, POS systems, and dining rooms for seamless service and statutory hygiene compliance. Covering table sanitisation, contactless payment terminal disinfection, dining room ventilation, and customer restroom verification.",
    howTo: [
      "Perform pre-service dining room inspection: wipe customer dining tables, chairs, highchairs, and payment terminals with sanitiser.",
      "Check entrance mats, carpets, and non-slip walkways to confirm zero tripping hazards, slip risks, or exterior door draft gaps.",
      "Conduct customer restroom inspection: verify hot water, unperfumed soap, blue paper towels, clean mirrors, and signed hourly log.",
      "Test point-of-sale (POS) systems, order printers, and contactless card readers; ensure adequate backup till rolls are stocked.",
      "Hold pre-service team briefing: review daily food specials, ingredient substitutions, and Natasha's Law 14-allergen matrices."
    ],
    faqs: [
      {
        q: "What does an EHO inspect in the front-of-house area of a restaurant?",
        a: "EHOs inspect customer dining tables, cleanliness of condiment dispensers, cutlery storage hygiene, bar glasswashing operations, customer toilet facilities, and allergen warning signage."
      },
      {
        q: "How often should dining room tables be sanitised?",
        a: "Tables must be cleaned and sanitised with food-safe antibacterial cleaner (BS EN 1276 compliant) between every customer seating."
      },
      {
        q: "Why is pre-service staff allergen briefing critical?",
        a: "Under Natasha's Law and FIR 2021, front-of-house staff are the primary communicators of allergen risks. Daily briefings ensure waitstaff know exact ingredients in specials and any supplier substitutions."
      },
      {
        q: "What should be done if a customer reports a food allergy at the table?",
        a: "Staff must notify the duty manager and lead chef immediately, record the allergy on the kitchen order ticket with prominent alert flags, and verify the dish against the written 14-allergen matrix."
      }
    ],
    relatedTools: ["bar-opening-checklist", "eho-checklist", "food-allergy-warning"],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }
'''

target_boundary = '};\n\nexport const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'

if target_boundary in content:
    content = content.replace(target_boundary, ',\n\n' + batch10_entries + '\n' + target_boundary)
    print("Injected Batch 10 deep content successfully before boundary")
else:
    print("Could not find target boundary in tool_deep_content.ts!")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved tool_deep_content.ts")
