path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

batch16_code = '''  "product-specification-sheet": {
    directAnswer:
      "A food product specification sheet is a mandatory technical document establishing legal compliance, ingredient declarations, QUID percentages, and the 14 major allergens under UK Food Information Regulations (FIR). It defines physical attributes, target microbiological criteria (Listeria, Salmonella), packaging gas composition, and storage temperature limits.",
    howTo: [
      "Document full product name, internal recipe code, and legal marketing description.",
      "List all ingredients quantitatively in descending order of weight, declaring QUID percentages for characterising items.",
      "Identify all 14 mandatory allergens contained within the recipe and evaluate cross-contact risks using VITAL 3.0 standards.",
      "Record validated shelf life, storage temperatures (under 5°C chilled or under -18°C frozen), and testing criteria."
    ],
    faqs: [
      {
        q: "What is the difference between a recipe specification and a technical product specification?",
        a:
          "A recipe specification is an internal operational kitchen sheet detailing culinary ingredient weights and cooking procedures. A technical product specification is an external legal document detailing quantitative ingredient declarations (QUID), allergens, chemical limits (pH, water activity), micro parameters, packaging specifications, and legal origin statements required for commercial retail and wholesale compliance."
      },
      {
        q: "What are QUID declarations and when are they legally required?",
        a:
          "Quantitative Ingredient Declarations (QUID) are statutory percentages required under UK FIR whenever an ingredient appears in the product name (e.g., 'Beef' in Beef Pie), is associated with the product by consumers, or is emphasised on the label in words or pictures."
      },
      {
        q: "How should shelf life be substantiated on a food product specification sheet?",
        a:
          "Shelf life must be substantiated through accredited microbiological challenge testing and real-time sensory trials conducted by UKAS-accredited laboratories, measuring degradation, pH drift, water activity (aw), and pathogen thresholds (e.g., Listeria monocytogenes absent in 25g at end of shelf life)."
      },
      {
        q: "Does BRCGS or SALSA require product specifications for all manufactured lines?",
        a:
          "Yes. Both BRCGS Global Standard for Food Safety (Section 3.6) and SALSA (Section 1.3) mandate that food businesses maintain formal, signed specifications for all raw materials, packaging, and finished products, reviewed at least annually or upon recipe reformulation."
      }
    ],
    relatedTools: ["product-specification-template", "hazard-analysis-template", "recipe-card-generator"],
    relatedBlog: {
      title: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },
  "pest-management-plan": {
    directAnswer:
      "An Integrated Pest Management (IPM) plan is a proactive food safety system designed to prevent, detect, and eradicate rodent and insect activity in food businesses. Complying with Regulation (EC) No 852/2004 Annex II, it integrates building exclusion proofing, non-toxic monitoring traps, hygiene barrier controls, and certified BPCA contractor audits.",
    howTo: [
      "Inspect perimeter walls, loading bays, external doors (fitting 5mm bristle strips), and service pipe penetrations.",
      "Map all numbered exterior tamper-resistant bait boxes and internal non-toxic glue/pheromone monitoring stations.",
      "Conduct daily opening inspections of dark storage areas, motor housings, and food storage shelves for evidence of pest activity.",
      "Review BPCA contractor inspection reports immediately and rectify identified hygiene or proofing defects within specified deadlines."
    ],
    faqs: [
      {
        q: "What is the primary legal requirement for pest control in UK food premises?",
        a:
          "Under Regulation (EC) No 852/2004 Annex II Chapter IX, food business operators must maintain adequate procedures to control pests and prevent domestic animals from having access to food preparation areas. Infestation creates an imminent risk of injury to health, resulting in immediate Hygiene Emergency Prohibition Notices (HEPN) and closure."
      },
      {
        q: "Why are toxic rodenticides prohibited inside open food preparation areas?",
        a:
          "Toxic bait blocks or loose grain rodenticides present severe chemical contamination hazards if tracked into food by dying rodents or spilled onto preparation surfaces. Inside kitchen and preparation zones, pest controllers must use non-toxic monitoring baits, physical snap traps in secure stations, or insect glue traps."
      },
      {
        q: "How frequently must a commercial pest control contractor visit food premises?",
        a:
          "A commercial pest contract typically specifies between 4 and 8 routine inspection visits per year for low to medium-risk kitchens, and up to 12 monthly visits for large manufacturing plants or butcheries, with 24-hour call-out coverage for suspected sightings."
      },
      {
        q: "Where should electronic fly killers (EFKs) be located in a commercial kitchen?",
        a:
          "EFKs must be sited away from direct drafts, away from windows (which attract external insects into the kitchen), and never positioned directly over open food preparation benches, cooker lines, or clean equipment drying racks to avoid dead insect fragment fallout."
      }
    ],
    relatedTools: ["pest-control-inspection-checklist", "pest-control-template", "restaurant-cleaning-checklist"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "meat-cooking-chart": {
    directAnswer:
      "A commercial meat cooking temperature chart specifies statutory core temperatures, oven settings, and probe protocols across all protein categories. Under UK Food Standards Agency (FSA) regulations, meat must reach 75°C core instantaneously (or equivalent time-temperature combinations such as 70°C for 2 minutes), with Scotland requiring 82°C.",
    howTo: [
      "Select meat species (poultry, beef, lamb, pork, duck, venison, ham, or burger) on your kitchen control board.",
      "Calculate total roasting time based on weighed joint mass and recommended minutes per kilogram.",
      "Insert a calibrated probe thermometer into the thermal geometric center of the thickest muscle cut.",
      "Confirm internal core reading satisfies statutory requirements (75°C general or 82°C in Scotland) before allowing tented resting."
    ],
    faqs: [
      {
        q: "What is the UK Food Standards Agency (FSA) mandatory cooking standard for meat?",
        a:
          "The standard FSA cooking criteria to achieve a 6-log (99.9999%) reduction in vegetative pathogens is reaching an internal core temperature of 70°C held continuously for 2 minutes, or equivalent combinations: 65°C for 10 minutes, 75°C for 30 seconds, or 80°C for 6 seconds. Scotland requires 82°C core."
      },
      {
        q: "Can British beef steaks and whole joints be served rare legally?",
        a:
          "Yes. In whole, intact cuts of beef and lamb, harmful bacteria (such as Salmonella and STEC E. coli) reside only on the exterior surfaces. Thoroughly searing and browning the entire outer surface eliminates these pathogens, allowing the sterile interior core to be served rare (50°C–54°C)."
      },
      {
        q: "Why must minced meat and rolled joints always be cooked to 75°C core?",
        a:
          "When meat is minced or rolled and tied, surface bacteria are turned inside and distributed throughout the entire center. Consequently, minced beef, burgers, sausages, and rolled briskets must reach 75°C core for 30 seconds (or 70°C for 2 minutes) throughout the entire product."
      },
      {
        q: "How does carry-over cooking affect final meat core temperatures?",
        a:
          "During resting, residual heat from the hotter exterior layers conducts inward into the cooler center, causing core temperatures to rise by 2°C to 5°C in large roasts. Meat should be tented loosely in foil on a heated carving shelf to allow muscle fibres to relax and juices to redistribute."
      }
    ],
    relatedTools: ["steak-cooking-chart", "turkey-cooking-chart", "danger-zone-for-food"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "steak-cooking-chart": {
    directAnswer:
      "A commercial steak cooking chart outlines precise internal core temperatures and searing protocols across 6 stages of doneness: Blue (45°C), Rare (50°C–52°C), Medium-Rare (54°C–57°C), Medium (60°C–63°C), Medium-Well (65°C–68°C), and Well-Done (71°C+). Intact beef steaks require complete surface searing to eliminate external bacteria before resting.",
    howTo: [
      "Temper steaks at ambient room temperature for 15 to 20 minutes before grilling on a heavy char-grill or skillet.",
      "Sear all external faces and edges thoroughly to ensure complete thermal destruction of exterior pathogens.",
      "Insert a calibrated thin-needle digital thermometer probe horizontally into the exact thermal center.",
      "Remove from heat 2°C to 3°C below final target temperature to account for resting carry-over thermal rise."
    ],
    faqs: [
      {
        q: "What internal temperatures define steak doneness in professional kitchens?",
        a:
          "Standard professional culinary core temperatures are: Blue: 45°C–48°C (deep red, cool center); Rare: 50°C–52°C (warm red center); Medium-Rare: 54°C–57°C (warm pink center); Medium: 60°C–63°C (firm pink band); Medium-Well: 65°C–68°C (hint of pink); and Well-Done: 71°C–75°C (no pink, fully brown throughout)."
      },
      {
        q: "Why is serving rare steak considered food safe by environmental health officers?",
        a:
          "In intact whole-muscle beef cuts, muscle tissue density prevents bacterial penetration into internal flesh. Pathogenic bacteria such as E. coli O157 are restricted solely to the cut surface. Searing all outer surfaces at temperatures above 140°C eliminates external contamination while preserving the tender core."
      },
      {
        q: "Can mechanically tenderised or pinned steaks be served rare?",
        a:
          "No. Steaks that have been mechanically tenderised with blades, needles, or vacuum tumbling push exterior bacteria into the deep muscle tissue. Under FSA guidelines, non-intact or pinned steaks must be treated as minced beef and cooked thoroughly to a minimum core temperature of 75°C."
      },
      {
        q: "Why is resting essential for commercially cooked steaks?",
        a:
          "During intense searing, muscle proteins contract tightly, pushing moisture toward the center. Resting the steak for 5 to 8 minutes on a warm pass allows muscle fibres to relax and absorb internal juices, preventing moisture loss onto the plate while carry-over heat finishes the core cook."
      }
    ],
    relatedTools: ["meat-cooking-chart", "turkey-cooking-chart", "burger-temp-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "turkey-cooking-chart": {
    directAnswer:
      "A commercial turkey cooking chart specifies roasting times per kilogram, oven heat profiles, and internal core probe limits for whole birds and turkey crowns. Under UK FSA regulations, turkey must reach a minimum internal temperature of 75°C core for 30 seconds (or 82°C in Scotland), tested in both the thickest breast muscle and inner thigh joint.",
    howTo: [
      "Calculate total cooking time based on bird weight (e.g., 35 minutes per kg at 170°C fan-assisted for whole birds).",
      "Insert digital thermometer probe into the thickest part of the breast and the deep inner thigh joint away from bone.",
      "Verify core temperature reaches at least 75°C (82°C in Scotland) and juices run completely clear before taking out.",
      "Tent loosely with heavy-duty foil and allow a minimum 20 to 30-minute rest on a heated pass before carving."
    ],
    faqs: [
      {
        q: "What is the standard commercial roasting time per kilogram for whole turkey?",
        a:
          "At a standard commercial convection oven temperature of 170°C–180°C (fan), unstuffed turkeys under 4kg require approximately 40 minutes per kg plus 20 minutes. Birds between 4kg and 8kg require 35 minutes per kg, and large birds over 8kg require 30 minutes per kg, followed by a mandatory 30-minute tented rest."
      },
      {
        q: "Why must turkey be probed in both the breast and inner thigh joint?",
        a:
          "Whole turkeys have uneven muscle densities. The inner thigh muscle between the leg and the cavity contains thick dark meat that heats more slowly than the white breast meat. Both the deepest part of the breast and the inner thigh joint must independently reach 75°C to ensure Salmonella and Campylobacter are fully eradicated."
      },
      {
        q: "Is it safe to roast a turkey with stuffing inside the cavity in commercial catering?",
        a:
          "In commercial catering, cooking stuffing separately in loaf tins is strongly advised. Cavity stuffing insulates the bird, significantly slowing thermal conduction to the inner carcass. If cooked inside the cavity, the core of the stuffing itself must independently reach 75°C, which often dries out breast meat."
      },
      {
        q: "What should caterers do if a cooked turkey cools down before service?",
        a:
          "If not served immediately, carved turkey must either be held hot in a heated carvery well above 63°C, or cooled rapidly to below 8°C within 90 minutes and refrigerated. Reheating must bring all meat slices to a rapid boil or at least 75°C core throughout before service."
      }
    ],
    relatedTools: ["turkey-pasteurization-chart", "meat-cooking-chart", "danger-zone-for-food"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
};'''

idx = content.rfind('export const FALLBACK_DEEP_CONTENT')
if idx != -1:
    before_fallback = content[:idx]
    after_fallback = content[idx:]
    brace_idx = before_fallback.rfind('};')
    if brace_idx != -1:
        before_brace = before_fallback[:brace_idx].rstrip()
        if not before_brace.endswith(','):
            before_brace += ',\n'
        else:
            before_brace += '\n'
        content = before_brace + batch16_code + '\n\n' + after_fallback
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully appended Batch 16 to tool_deep_content.ts")
    else:
        print("Could not find closing brace before FALLBACK_DEEP_CONTENT")
else:
    print("Could not find FALLBACK_DEEP_CONTENT in file")
