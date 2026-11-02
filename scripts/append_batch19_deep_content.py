import re

file_path = 'src/data/tool_deep_content.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

batch19_deep_content = '''  "freeze-drying-time-chart": {
    directAnswer:
      "Freeze drying requires between 20 and 48 hours per batch depending on food water and sugar density. The sublimation cycle consists of pre-freezing at -40°C (2 to 5 hours), primary sublimation drying under vacuum (12 to 32 hours), and secondary desorption (4 to 10 hours) to reach under 2% residual moisture.",
    howTo: [
      "Trim visible fat from meats, slice produce into uniform 6mm to 12mm thickness, and pre-pierce waxy skins on fruits like blueberries.",
      "Pre-freeze food solid at -20°C to -40°C in a commercial chest freezer to protect vacuum pumps and shorten chamber run time by 5 hours.",
      "Load freeze-dryer trays evenly without stacking, keeping density under 1.0 kg per tray to avoid trapped ice cores.",
      "Initiate cycle, monitoring condenser temperature at -45°C and chamber vacuum pressure below 250 mTorr throughout sublimation.",
      "Perform the snap, warmth, and mason jar condensation tests before immediately sealing dry food in 7-mil Mylar pouches with oxygen absorbers."
    ],
    faqs: [
      {
        q: "How long does it typically take to freeze-dry different foods?",
        a: "Cycle times vary by category: garden peas and sweetcorn take 20 to 24 hours; apples and strawberries take 24 to 30 hours; high-sugar fruits like bananas, watermelon, and peaches require 32 to 42 hours; lean cooked chicken or mince takes 24 to 30 hours; and whole dairy liquids take 36 to 48 hours."
      },
      {
        q: "Why is fat content a critical hazard in freeze-dried food storage?",
        a: "Lipids and oils do not contain water and cannot freeze-dry. Residual fats remain unevaporated in the food matrix, undergoing rapid oxidative rancidity even in sealed packaging, spoiling batches within weeks instead of lasting 25 years."
      },
      {
        q: "How can I verify that freeze-dried food is 100% finished and dry?",
        a: "Never rely solely on timer estimates. Execute the four-step verification protocol: break the thickest slice to verify it snaps or powders without bending, touch the core to ensure zero coolness remains, seal a warm test piece in a jar for 15 minutes to check for fogging, and confirm weight stability on a digital scale."
      },
      {
        q: "Why do whole blueberries and grapes take so long to freeze-dry?",
        a: "Their tough, waxy outer skin acts as a vapour barrier that blocks sublimating water vapour from escaping the berry pulp under vacuum. Slicing berries in half or steam-blanching them to fissure the outer cuticle cuts processing duration by more than 40%."
      },
      {
        q: "What storage packaging is required to guarantee a 25-year shelf life?",
        a: "Freeze-dried foods are hygroscopic and absorb atmospheric moisture within minutes of exposure. Package immediately into 7-mil food-grade aluminium Mylar pouches with genuine iron-based oxygen absorbers (300cc to 500cc per gallon) and seal with an impulse heat sealer."
      }
    ],
    relatedTools: [
      "food-expiration-dates-guidelines-chart",
      "walk-in-cooler-storage-chart",
      "canned-food-expiration-dates-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "juice-pasteurization-temperature-time-chart": {
    directAnswer:
      "Juice pasteurisation requires achieving a certified 5-log (99.999%) reduction of target bacterial pathogens including Escherichia coli O157:H7, Salmonella, and Cryptosporidium parvum. Continuous-flow HTST standards mandate 71.1°C (160°F) for 6 seconds or 73.9°C (165°F) for 2.8 seconds for acidic fruit juices under FDA 21 CFR Part 120 and UK FSA guidance.",
    howTo: [
      "Verify juice pH classification using a calibrated electronic pH meter; high-acid juices (pH under 4.0) permit lower thermal dwell times than low-acid blends.",
      "Pump juice through a validated plate or tubular heat exchanger to reach the statutory target temperature of 71.1°C to 73.9°C.",
      "Ensure juice travels through the holding tube for the mandatory minimum duration (e.g. 6.0 seconds at 71.1°C) with automatic flow diversion activated for sub-temperature product.",
      "Rapidly chill pasteurised juice through the regeneration and cooling sections to below 4°C within minutes to preserve volatile flavour notes.",
      "Record continuous flow temperatures, batch times, and diversion events in the juice HACCP process log for Environmental Health Officer inspection."
    ],
    faqs: [
      {
        q: "What is the 5-log pathogen reduction standard in commercial juice production?",
        a: "Under FDA 21 CFR Part 120 and UK FSA food hygiene frameworks, a 5-log reduction represents a 100,000-fold decrease in the most heat-resistant vegetative pathogen of public health concern (typically E. coli O157:H7 or Cryptosporidium parvum oocysts in apple cider)."
      },
      {
        q: "Can high-acid citrus juices use lower pasteurisation temperatures?",
        a: "Because citrus juices maintain a natural pH between 3.2 and 3.8, thermal destruction of pathogens occurs significantly faster than in neutral liquids. Standard HTST settings of 71.1°C for 6 seconds or 73.9°C for 2.8 seconds easily exceed the required 5-log lethality threshold."
      },
      {
        q: "What is the difference between HTST flash pasteurisation and hot-fill bottling?",
        a: "HTST heats juice rapidly in a plate heat exchanger, holds it for 3 to 15 seconds, and chills it immediately before cold aseptic bottling. Hot-fill heats juice to 85°C to 92°C, fills containers hot, and inverts the bottles for 15 to 30 seconds to sterilise the cap and neck headspace."
      },
      {
        q: "Why do low-acid vegetable juices like carrot and melon require stricter controls?",
        a: "Juices with a pH above 4.5 present a severe risk of Clostridium botulinum spore germination. Low-acid juices cannot rely on mild pasteurisation alone unless acidified below pH 4.2 with citric or malic acid, or processed under commercial canning pressure-sterilisation schedules."
      },
      {
        q: "What critical equipment is required on a commercial juice pasteuriser?",
        a: "A compliant continuous-flow pasteuriser must feature a calibrated temperature recording sensor at the exit of the holding tube and an automated Flow Diversion Valve (FDV) that redirects any sub-temperature juice back to the raw balance tank."
      }
    ],
    relatedTools: [
      "milk-pasteurization-temperature-time-chart",
      "food-temperature-chart",
      "danger-zone-for-food"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "meat-pasteurization-chart": {
    directAnswer:
      "Meat pasteurisation achieves a 6.5-log or 7-log reduction of Salmonella, Listeria monocytogenes, and STEC E. coli by holding core temperatures at lower heat for extended durations. Validated USDA and UK FSA parameters include 54.4°C for 121 minutes, 57.2°C for 25 minutes, 60.0°C for 10 minutes, or 63.0°C instant core dwell.",
    howTo: [
      "Identify whether the cut is a whole-muscle steak or joint where contamination is surface-only, or ground meat requiring complete core heat penetration.",
      "Vacuum seal meat with fresh aromatics and submerge into an immersion circulator bath set 0.5°C above desired core doneness.",
      "Calculate thermal come-up time to geometric core using calibrated thickness tables (e.g. 45 minutes for a 25mm steak).",
      "Maintain meat at core target temperature for the exact statutory dwell period (e.g. 89 minutes at 55.0°C or 10 minutes at 60.0°C).",
      "Sear meat immediately for service or chill rapidly in an ice-water bath below 3°C within 90 minutes for cook-chill storage."
    ],
    faqs: [
      {
        q: "How is low-temperature meat pasteurisation safe compared to flash cooking?",
        a: "Bacterial thermal death is a cumulative function of heat intensity and dwell time. While traditional guidelines demand 75°C for 30 seconds, prolonged exposure to lower heat (such as 55°C for 89 minutes) achieves the identical 6.5D pathogen reduction while preserving cellular moisture and collagen."
      },
      {
        q: "Can ground beef or burgers be pasteurised using whole-muscle steak times?",
        a: "No. Grinding distributes surface pathogens throughout the entire burger patty. Ground beef requires dedicated lethality tables or traditional cooking to 71°C core (75°C in England, 82°C in Scotland) unless produced under strict validated E. coli testing protocols."
      },
      {
        q: "How do I measure core temperature inside a vacuum-sealed sous-vide pouch?",
        a: "Apply closed-cell polyethylene or neoprene foam tape to the exterior of the plastic pouch. Insert a fine thermocouple needle probe through the foam into the exact center of the meat; the foam self-seals against the probe shaft to prevent vacuum leaks."
      },
      {
        q: "What is meat come-up time and why must it be added to pasteurisation tables?",
        a: "Pasteurisation dwell tables only begin counting down after the absolute coldest interior point of the meat has reached target temperature. Heating meat from 4°C chilled temperature to 55°C core takes between 35 and 180 minutes depending on meat thickness and fat marbling."
      },
      {
        q: "What are the rules for cook-chill pasteurised meat storage?",
        a: "Once pasteurised in unbroken vacuum pouches, items must be rapidly chilled in a 50/50 ice-water slurry to below 3°C within 90 minutes. Held continuously at 0°C to 3°C, pasteurised cook-chill meats remain commercially safe for up to 10 to 28 days depending on verified HACCP validation."
      }
    ],
    relatedTools: [
      "steak-cooking-chart",
      "meat-cooking-chart",
      "turkey-pasteurization-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "poultry-pasteurization-chart": {
    directAnswer:
      "Poultry pasteurisation requires achieving a 7-log (99.99999%) reduction of Salmonella enterica and Campylobacter. Validated time-temperature lethality standards mandate holding core temperatures at 58.0°C for 65 minutes, 60.0°C for 26 minutes, 63.3°C for 7 minutes, 65.6°C for 3 minutes, or instant core flash at 74.0°C.",
    howTo: [
      "Measure poultry thickness at the thickest anatomical point using a clean culinary ruler or caliper.",
      "Set water bath or combi-steam oven to chosen pasteurisation temperature (recommended 63.5°C to 65.6°C for succulent breasts).",
      "Allow adequate come-up thermal penetration time based on meat thickness (typically 60 to 90 minutes for a 25mm breast).",
      "Begin pasteurisation dwell timer only when core probe verifies target temperature (e.g. exactly 3.0 minutes at 65.6°C).",
      "Verify clear juices and probe confirmation before searing exterior or initiating rapid ice-slurry chill."
    ],
    faqs: [
      {
        q: "Why does poultry require a 7D lethality standard instead of 6.5D for beef?",
        a: "Poultry carcasses inherently carry higher initial loads of Salmonella and Campylobacter jejuni, and bird muscle fibers allow pathogens to penetrate deeper beneath the surface compared to dense mammalian steer muscle."
      },
      {
        q: "Is it safe to eat chicken cooked to 63°C (145°F)?",
        a: "Yes, provided the core of the chicken is verified to remain at 63.3°C for at least 7.0 continuous minutes (or 65.0°C for 3.0 minutes). This provides the exact same 7-log pathogen destruction as 75°C for 30 seconds while retaining natural intramuscular juices."
      },
      {
        q: "Why should chicken never be cooked below 58°C (136°F)?",
        a: "Below 58°C, the thermal death rate of Salmonella slows drastically, requiring impractical dwell times exceeding several hours that can encourage spore germination and produce an unpleasantly soft, mushy meat texture."
      },
      {
        q: "How should dark poultry meat (thighs and drumsticks) be pasteurised?",
        a: "While breast meat is optimal at 63.5°C to 65.6°C, dark poultry meat contains dense collagen and connective sinew that only gelatinises at higher temperatures. Cook thighs between 74°C and 79°C for 2 to 4 hours for tender, pull-apart texture."
      },
      {
        q: "What extra time buffer is needed when cooking poultry directly from frozen?",
        a: "Cooking poultry directly from frozen requires adding approximately 50% extra come-up time to account for latent phase-change heat absorption before core temperature begins rising toward the pasteurisation threshold."
      }
    ],
    relatedTools: [
      "chicken-pasteurization-chart",
      "turkey-pasteurization-chart",
      "meat-cooking-chart"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "chicken-pasteurization-chart": {
    directAnswer:
      "Chicken pasteurisation achieves complete eradication of Salmonella and Campylobacter by combining precise core temperatures with validated holding times. Sous-vide chicken breast reaches safe 7-log lethality at 60.0°C held for 26 minutes, 63.3°C held for 7 minutes, or 65.6°C held for 3 minutes, compared to traditional 75°C for 30 seconds.",
    howTo: [
      "Trim and flatten chicken breasts to uniform thickness or separate whole birds into breasts, thighs, and drumsticks.",
      "Bag chicken in single layers inside vacuum pouches with cooking fats and seasoning, ensuring zero overlaps.",
      "Set water bath to target temperature (e.g. 64.0°C) and calculate total cook time as come-up duration plus statutory dwell time.",
      "Verify internal temperature at the cold spot with a calibrated needle thermocouple before removing from the heat source.",
      "Record core temperature, dwell duration, and batch cooling times on the kitchen HACCP temperature monitoring sheet."
    ],
    faqs: [
      {
        q: "What is the optimal water bath temperature for juicy chicken breast?",
        a: "Professional chefs recommend setting the water bath between 63.5°C and 65.0°C (146°F to 149°F). Holding the geometric core at 65.0°C for 3.0 minutes yields chicken breast that is exceptionally juicy, tender, and fully pasteurised."
      },
      {
        q: "How does thickness affect chicken cooking and pasteurisation times?",
        a: "Heat penetrates meat from the outside inward. A 15mm thick chicken cutlet reaches core temperature in roughly 35 minutes, whereas a 35mm thick breast requires approximately 105 minutes just to reach bath temperature before dwell timing starts."
      },
      {
        q: "What are the food safety rules for commercial chicken liver pâté?",
        a: "Chicken livers frequently harbor Campylobacter internally. Under UK FSA and Scottish Food Safety guidelines, chicken livers must reach a minimum verified core temperature of 70°C for 2 minutes to eliminate food poisoning risks in blended pâtés."
      },
      {
        q: "Can chicken be safely held warm in a water bath after pasteurisation is complete?",
        a: "Chicken can remain in a circulating bath above 58°C for up to 3 to 4 hours without microbial risk, though prolonged immersion beyond 4 hours will eventually cause muscle fibers to break down and become excessively soft."
      },
      {
        q: "How do I rapidly cool pasteurised chicken for subsequent service?",
        a: "Immediately submerge vacuum pouches into a 50/50 ice-water bath. Agitate pouches periodically to chill core temperatures from 65°C down to below 4°C within 60 minutes before transferring to cold storage."
      }
    ],
    relatedTools: [
      "poultry-pasteurization-chart",
      "turkey-pasteurization-chart",
      "meat-cooking-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }'''

# Locate insertion point before FALLBACK_DEEP_CONTENT
idx = content.rfind('export const FALLBACK_DEEP_CONTENT')
if idx == -1:
    raise Exception("Could not find FALLBACK_DEEP_CONTENT")

# find the closing bracket of TOOL_DEEP_CONTENT
closing_idx = content.rfind('};', 0, idx)
if closing_idx == -1:
    raise Exception("Could not find closing bracket of TOOL_DEEP_CONTENT")

# Check if last item before closing has a comma
preceding_text = content[:closing_idx].rstrip()
if not preceding_text.endswith(','):
    insert_str = ',\n' + batch19_deep_content + '\n'
else:
    insert_str = '\n' + batch19_deep_content + '\n'

new_content = content[:closing_idx] + insert_str + content[closing_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Appended Batch 19 deep content successfully!")
