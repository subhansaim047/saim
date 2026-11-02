path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

batch18_code = '''  "food-expiration-dates-guidelines-chart": {
    directAnswer:
      "A food expiration dates guidelines chart clarifies statutory 'Use-By' dates (strict food safety indicators beyond which consumption is illegal and dangerous) versus 'Best-Before' dates (quality benchmarks after which food remains microbiologically safe). It establishes storage limits across ambient pantry goods, chilled refrigeration, and deep freezing.",
    howTo: [
      "Identify whether packaging displays a statutory 'Use-By' or quality 'Best-Before' date.",
      "Strictly discard and quarantine any chilled meat, dairy, or prepared produce past its Use-By date.",
      "Evaluate ambient dry goods past Best-Before for sensory integrity, packaging seals, and moisture.",
      "Affix commercial day-dot food rotation labels onto decanted containers specifying the prep date and discard limit."
    ],
    faqs: [
      {
        q: "Is it illegal for a UK food business to sell or serve food past its Use-By date?",
        a:
          "Yes. Under the Food Safety and Hygiene (England) Regulations 2013 and Regulation (EU) No 1169/2014, it is a criminal offence to sell, serve, or display food after its Use-By date. Food past its Use-By is legally deemed unsafe, and local authorities can issue immediate hygiene notices and substantial fines."
      },
      {
        q: "Can food past its Best-Before date be legally served or donated?",
        a:
          "Yes. Best-Before dates relate exclusively to food quality (taste, texture, crispness) rather than safety. Food past its Best-Before date can legally be served, sold, or redistributed to food charities provided the packaging remains undamaged and the product shows no signs of spoilage or mould."
      },
      {
        q: "How long can prepped commercial salads and sliced deli meats be kept?",
        a:
          "Under standard UK Environmental Health guidance (SFBB), prepped ready-to-eat salads, opened deli meats, and cooked batches must be given a maximum shelf life of Day of Preparation plus 2 days (total 3 days) when stored below 5°C, unless validated laboratory challenge testing justifies an extension."
      },
      {
        q: "How does freezing affect food expiration dates?",
        a:
          "Freezing food before its Use-By date halts microbial multiplication by freezing free water. However, frozen foods do not last indefinitely; commercial quality deteriorates through freezer burn and fat oxidation. Most commercial frozen meats and prepped meals should be used within 3 to 12 months at -18°C."
      }
    ],
    relatedTools: ["proper-food-storage-chart", "how-long-to-keep-leftovers-chart", "walk-in-cooler-food-storage-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "canned-food-expiration-dates-chart": {
    directAnswer:
      "A commercial canned food expiration chart details safe ambient storage times: 12 to 18 months for high-acid canned goods (tomatoes, pineapple) and 2 to 5 years for low-acid goods (meats, soups, beans) stored below 21°C. It provides critical inspection criteria to identify dangerous can defects that permit lethal Clostridium botulinum neurotoxin formation.",
    howTo: [
      "Inspect canned food deliveries for swollen ends, sharp seam dents, rust pitting, or leakage.",
      "Store commercial canned stock in a dedicated, dry ambient storeroom maintained between 10°C and 21°C.",
      "Rotate stock using strict First-In, First-Out (FIFO) methods, prioritising nearest manufacturer date codes.",
      "Immediately decant opened can contents into clean food-grade plastic containers before refrigerating."
    ],
    faqs: [
      {
        q: "Can food safely remain inside an open tin can in the refrigerator?",
        a:
          "No. Never store open food inside its original tin-plated steel can in the fridge. Once opened, ambient oxygen reacts with the exposed iron and tin coating, causing chemical dissolution into acidic foods and imparting a metallic taste. Always decant unused contents into a food-grade lidded plastic container before chilling."
      },
      {
        q: "What types of can dents make commercial canned food dangerous?",
        a:
          "Dents on the top or side seams (seam fractures), sharp pointed dents with creased metal, or dents on the rim seal destroy the hermetic vacuum seal, permitting air and botulism spores to enter. Swollen or bulging can ends indicate active bacterial gas production; such cans must be quarantined and destroyed immediately."
      },
      {
        q: "What is the difference between high-acid and low-acid canned food shelf life?",
        a:
          "High-acid canned foods (tomatoes, grapefruit, pineapple, pickles) have high natural acidity that gradually reacts with can lining over time, giving them a shelf life of 12 to 18 months. Low-acid canned foods (canned meats, poultry, stews, beans, corn, peas) maintain optimal safety and quality for 2 to 5 years."
      },
      {
        q: "Does heating canned food eliminate botulinum toxin?",
        a:
          "While botulism spores are heat-resistant, preformed botulinum neurotoxin is heat-labile and destroyed by boiling at 100°C for at least 10 minutes. However, never taste or cook food from suspect, bulging, or leaking cans; discard them safely to prevent severe neuroparalytic illness."
      }
    ],
    relatedTools: ["food-expiration-dates-guidelines-chart", "proper-food-storage-chart", "vacuum-sealed-food-shelf-life-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "how-long-to-keep-leftovers-chart": {
    directAnswer:
      "A commercial leftovers chart enforces the UK statutory 2-day catering rule: batch-cooked foods, sauces, roasted meats, and stews must be cooled to below 8°C within 90 minutes and consumed or discarded within 48 hours (day of prep + 2). Reheating must be conducted only once, bringing all portions to at least 75°C core.",
    howTo: [
      "Divide large volumes of hot cooked food into shallow stainless steel gastronorm pans for rapid cooling.",
      "Transfer hot food to a blast chiller or cold prep unit, reducing core temperature below 8°C within 90 minutes.",
      "Transfer chilled food into clean, lidded food containers labelled with prep date, time, and allergen markers.",
      "Reheat chilled leftovers only once to a rolling boil or minimum 75°C core (82°C in Scotland) before service."
    ],
    faqs: [
      {
        q: "What is the commercial kitchen 2-day rule for cooked leftovers?",
        a:
          "The standard UK Food Standards Agency (FSA) catering rule requires batch-cooked dishes, sauces, and gravies to be kept in the refrigerator for a maximum of 2 days following preparation (Day 0 = day cooked, Day 1 = intermediate holding, Day 2 = final service or disposal). Holding beyond 48 hours requires formal laboratory shelf-life validation."
      },
      {
        q: "Why is cooked rice exceptionally hazardous when saved as leftovers?",
        a:
          "Raw rice frequently contains dormant spores of Bacillus cereus, a bacterium that survives normal boiling. If cooked rice is left cooling at room temperature, spores germinate and produce emetic heat-stable toxins that survive subsequent reheating. Cooked rice must be chilled to below 8°C within 1 hour and consumed within 24 hours."
      },
      {
        q: "How many times can commercial leftovers be reheated?",
        a:
          "Leftovers can only be reheated once. Repeated heating and cooling cycles expose food repeatedly to the danger zone (8°C to 63°C), promoting rapid spore germination of Clostridium perfringens and toxin accumulation. Any reheated food not consumed immediately must be safely discarded."
      },
      {
        q: "What cooling equipment should commercial kitchens use for leftovers?",
        a:
          "Commercial kitchens should use dedicated blast chillers capable of reducing food temperatures from 70°C to below 3°C within 90 minutes. Alternatively, kitchens can use ice baths, frozen cooling paddles, shallow stainless pans (depth under 5cm), or portioning large meat joints into smaller cuts."
      }
    ],
    relatedTools: ["food-cooling-poster", "proper-food-storage-chart", "food-expiration-dates-guidelines-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "how-long-does-butter-last-poster": {
    directAnswer:
      "A commercial butter storage poster establishes shelf-life guidelines: salted butter lasts 1 to 2 days at ambient room temperature in covered crocks, 3 months refrigerated (1°C–5°C), and 9 months frozen (-18°C). Unsalted butter lacks protective sodium barrier properties and must remain refrigerated to prevent bacterial spoilage and oxidative rancidity.",
    howTo: [
      "Store unopened blocks of salted and unsalted butter in commercial walk-in refrigeration at 1°C to 5°C.",
      "Keep front-of-house service butter crocks covered at ambient temperature for a maximum of 24 hours.",
      "Wrap open blocks securely in greaseproof foil wraps to prevent absorption of strong kitchen odours.",
      "Freeze surplus butter reserves at -18°C for up to 9 months, thawing under refrigeration before use."
    ],
    faqs: [
      {
        q: "Can butter be left safely at room temperature in commercial catering?",
        a:
          "Salted butter can safely be held at room temperature (below 21°C) for 1 to 2 days because its low water content (water activity aw ~ 0.90) and added salt (1.5%–2%) inhibit microbial multiplication. However, unsalted butter lacks sodium preservation and must be kept refrigerated below 5°C to prevent mould growth and souring."
      },
      {
        q: "What causes butter to go rancid and how can kitchens prevent it?",
        a:
          "Rancidity occurs through lipid oxidation (exposure to oxygen and UV light) and hydrolytic degradation (breakdown of milk fats into butyric acid by moisture and enzymes). Kitchens can prevent rancidity by storing butter in dark, airtight opaque containers, wrapping cuts tightly, and avoiding heat proximity."
      },
      {
        q: "How long can commercial kitchens freeze butter for baking?",
        a:
          "High-fat commercial dairy butter (minimum 80%–82% milkfat) freezes exceptionally well. Stored in its original moisture-proof foil packaging inside an airtight freezer box at -18°C, butter maintains optimal baking performance and flavour for up to 9 months for salted and 6 months for unsalted."
      },
      {
        q: "What should waitstaff do with uneaten bread butter portions returned from tables?",
        a:
          "Any butter ramekins, crocks, or wrapped portions that have been served to customer tables must be discarded immediately as plate waste. Returning uneaten butter to kitchen stock or blending it into batch cooking violates cross-contamination and allergen safety regulations."
      }
    ],
    relatedTools: ["proper-food-storage-chart", "food-expiration-dates-guidelines-chart", "fridge-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "milk-pasteurization-temperature-time-chart": {
    directAnswer:
      "A milk pasteurisation chart outlines statutory thermal processing profiles: High-Temperature Short-Time (HTST: 72°C for 15 seconds), Low-Temperature Long-Time (LTLT vat batch: 63°C for 30 minutes), and Ultra-High Temperature (UHT: 138°C for 2 seconds). These combinations destroy Mycobacterium bovis, Coxiella burnetii, and Listeria monocytogenes while preserving dairy emulsion stability.",
    howTo: [
      "Select verified dairy thermal profile: continuous plate HTST, batch vat LTLT, or aseptic UHT.",
      "Heat milk to statutory parameters (minimum 72°C for 15 seconds continuous flow) with automatic flow-divert valves.",
      "Rapidly cool pasteurised dairy through regeneration plates to below 6°C within continuous inline monitoring.",
      "Test pasteurised batches using standard alkaline phosphatase (ALP) fluorometric assays (<350 mU/L confirmation)."
    ],
    faqs: [
      {
        q: "What are the legal time and temperature standards for milk pasteurisation in the UK?",
        a:
          "Under Schedule 6 of The Food Safety and Hygiene (England) Regulations 2013, pasteurisation requires either: 1. A high-temperature short-time (HTST) process of at least 71.7°C for 15 seconds (commonly 72°C in practice); 2. A batch holding (LTLT) process of at least 63°C for 30 minutes; or 3. Any equivalent time-temperature combination that achieves a negative alkaline phosphatase reaction."
      },
      {
        q: "Why is the alkaline phosphatase (ALP) test used to verify milk pasteurisation?",
        a:
          "Alkaline phosphatase is an endogenous enzyme naturally present in raw bovine milk with heat resistance slightly higher than non-spore-forming pathogens like Coxiella burnetii and Mycobacterium tuberculosis. If milk is pasteurised correctly, ALP is completely denatured (<350 mU/L). A positive ALP test indicates under-pasteurisation or raw milk cross-contamination."
      },
      {
        q: "What is the difference between pasteurised and UHT milk?",
        a:
          "Pasteurised milk (HTST 72°C for 15s) destroys all vegetative human pathogens but leaves harmless heat-resistant bacterial spores intact; it requires continuous refrigeration (<6°C) and lasts 10 to 14 days. Ultra-High Temperature (UHT) milk is heated to 138°C–145°C for 2 to 4 seconds, achieving commercial sterility; packed aseptically, it lasts 6 to 9 months at ambient room temperature."
      },
      {
        q: "What pathogens does milk pasteurisation eliminate?",
        a:
          "Pasteurisation destroys vegetative zoonotic pathogens that cause severe human illness: Mycobacterium bovis (bovine tuberculosis), Coxiella burnetii (Q fever), Brucella abortus, Salmonella enterica, Campylobacter jejuni, Shiga toxin-producing E. coli (STEC), and Listeria monocytogenes."
      }
    ],
    relatedTools: ["food-temperature-chart", "turkey-pasteurization-chart", "danger-zone-for-food"],
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
        content = before_brace + batch18_code + '\n\n' + after_fallback
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully appended Batch 18 to tool_deep_content.ts")
    else:
        print("Could not find closing brace before FALLBACK_DEEP_CONTENT")
else:
    print("Could not find FALLBACK_DEEP_CONTENT in file")
