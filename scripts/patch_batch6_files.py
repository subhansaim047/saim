import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Update core_metadata.json
meta_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

meta['venison-cooking-temperature-chart'] = {
    "title": "Free Venison Cooking Temperature Chart | Saim Dev",
    "desc": "Free venison cooking temperature chart for UK commercial kitchens. Calculate haunch roasting times and safe core temperatures for wild game catering.",
    "howTo": [
        "Select the venison cut: whole roasting haunch, prime loin saddle medallions, or wild game burgers.",
        "Input the raw joint weight to calculate oven roasting time and required resting period under foil.",
        "Insert an antibacterial sanitized probe thermometer into the geometric center of the meat cut.",
        "Ensure whole intact loins reach at least 55°C (medium-rare) or 60°C (haunch), while game mince reaches 75°C."
    ]
}

meta['chicken-temperature-chart'] = {
    "title": "Free Chicken Cooking Temperature Chart | Saim Dev",
    "desc": "Free chicken cooking temperature chart for UK commercial kitchens. Verify 75°C core temperatures to eliminate Campylobacter and Salmonella risks.",
    "howTo": [
        "Select the poultry cut: whole roasting bird, bone-in thighs/legs, boneless breasts, or chicken livers.",
        "Never wash raw chicken under taps to prevent spreading Campylobacter droplets across work surfaces.",
        "Probe the thickest part of the inner thigh without touching bone; hold reading for at least 30 seconds.",
        "Verify internal core reaches at least 75°C (82°C in Scotland) and juices run completely clear before serving."
    ]
}

meta['duck-cooking-temperature-chart'] = {
    "title": "Free Duck Cooking Temperature Chart | Saim Dev",
    "desc": "Free duck cooking temperature chart for UK commercial kitchens. Accurate core probing guidance for whole roast duck, confit legs, and seared breasts.",
    "howTo": [
        "Identify duck dish: whole roasted duck, slow-rendered confit leg, or pan-seared duck breast.",
        "Cook whole birds to a minimum core temperature of 75°C for 30 seconds (82°C in Scotland).",
        "If serving seared duck breast pink (62°C), enforce strict HACCP supplier accreditation and log batch times.",
        "Cool leftover roasted duck meat to under 8°C within 90 minutes before chilling."
    ]
}

meta['beef-temperature-chart'] = {
    "title": "Free Beef Cooking Temperature Chart | Saim Dev",
    "desc": "Free beef temperature chart for UK commercial kitchens. Rare, medium, and well-done core limits with mandatory 75°C cooking rules for minced burgers.",
    "howTo": [
        "Distinguish between intact whole muscle cuts (steaks, roasts) and non-intact meats (mince, rolled joints).",
        "Sear all external surfaces of intact beef joints; internal core can be medium-rare (54°C) or medium (60°C).",
        "All minced beef burgers, rolled briskets, and kebabs must strictly achieve 75°C core for 30 seconds.",
        "Maintain cooked carvery beef joints on hot holding units at or above 63°C continuously."
    ]
}

meta['lamb-temperature-chart'] = {
    "title": "Free Lamb Cooking Temperature Chart | Saim Dev",
    "desc": "Free lamb cooking temperature chart for UK commercial kitchens. Calculate roasting times for leg, shoulder, and rack of lamb with safe core limits.",
    "howTo": [
        "Select the lamb joint: bone-in leg of lamb, French-trimmed rack, rolled shoulder, or minced koftas.",
        "Weigh joint to calculate roasting time per kilogram plus mandatory 15-20 minute post-roast resting under foil.",
        "Probe thickest meat center: medium-rare intact racks (58°C), medium roast leg (65°C), or rolled shoulder (75°C).",
        "Minced lamb preparations must reach at least 75°C for 30 seconds throughout the thermal core."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2)

print("Updated core_metadata.json for Batch 6.")

# 2. Update tool_deep_content.ts
deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    deep_content = f.read()

batch6_deep_entries = '''
  "venison-cooking-temperature-chart": {
    directAnswer:
      "A commercial venison cooking temperature chart specifies the safe roasting times and thermal core limits for wild and farmed deer cuts in UK catering. Whole intact venison loins and haunches may be cooked to medium-rare (55°C to 60°C) if surfaces are thoroughly seared, while wild venison mince and sausages must reach at least 75°C for 30 seconds (82°C in Scotland) to eliminate parasite and bacterial risks.",
    howTo: [
      "Select the venison cut: whole roasting haunch, prime loin saddle medallions, or wild game burgers.",
      "Input the raw joint weight to calculate oven roasting time and required resting period under foil.",
      "Insert an antibacterial sanitised probe thermometer into the geometric centre of the meat cut.",
      "Ensure whole intact loins reach at least 55°C (medium-rare) or 60°C (haunch), while game mince reaches 75°C."
    ],
    faqs: [
      {
        q: "Can commercial restaurants serve wild venison pink or rare in the UK?",
        a: "Yes, but only for whole, intact muscle cuts (such as loins or haunches) sourced from an Approved Game Handling Establishment (AGHE), provided all exterior surfaces are thoroughly seared to destroy surface bacteria. Wild venison mince, burgers, and rolled cuts must always be cooked to 75°C core."
      },
      {
        q: "What food safety hazards are associated with wild venison?",
        a: "Wild venison carries risks of Toxoplasma gondii parasites, lead shot fragments, and bacterial contamination from evisceration. Sourcing from accredited deer stalkers and thorough inspection is legally required under the Food Safety Act 1990."
      },
      {
        q: "Why does venison dry out faster than beef when roasting?",
        a: "Venison is an extremely lean game meat with under 2% intramuscular fat. Roasting at moderate temperatures (170°C) and allowing a mandatory 20-minute resting under foil retains internal meat juices."
      }
    ],
    relatedTools: ["beef-temperature-chart", "lamb-temperature-chart", "food-cooling-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "chicken-temperature-chart": {
    directAnswer:
      "A commercial chicken cooking temperature chart establishes the mandatory core thermal lethality standards for poultry in UK commercial kitchens. Under Food Standards Agency (FSA) regulations, chicken and poultry cuts must achieve a minimum core temperature of 75°C for 30 seconds (or 70°C for 2 minutes, and 82°C in Scotland) to destroy Campylobacter and Salmonella bacteria.",
    howTo: [
      "Select the poultry cut: whole roasting bird, bone-in thighs/legs, boneless breasts, or chicken livers.",
      "Never wash raw chicken under taps to prevent spreading Campylobacter droplets across work surfaces.",
      "Probe the thickest part of the inner thigh without touching bone; hold reading for at least 30 seconds.",
      "Verify internal core reaches at least 75°C (82°C in Scotland) and juices run completely clear before serving."
    ],
    faqs: [
      {
        q: "Why must chicken never be served pink in commercial catering?",
        a: "Campylobacter jejuni and Salmonella enterica penetrate into the muscle tissue of poultry. Unlike whole beef cuts where bacteria reside on the surface, poultry requires complete thermal destruction throughout the entire meat core to prevent severe food poisoning."
      },
      {
        q: "What is the equivalent time and temperature combination for cooking chicken?",
        a: "The FSA recognizes equivalent lethality combinations: 75°C for 30 seconds, 70°C for 2 minutes, 65°C for 10 minutes, or 80°C for 6 seconds. In Scotland, the statutory threshold is 82°C under the Food Hygiene (Scotland) Regs 2006."
      },
      {
        q: "How should chefs probe a whole roast chicken accurately?",
        a: "Insert a disinfected digital probe into the thickest part of the inner thigh between the leg and the breast carcass. Avoid touching the bone, which conducts heat artificially, and verify the temperature holds for 30 seconds."
      }
    ],
    relatedTools: ["duck-cooking-temperature-chart", "food-cooling-poster", "freezer-temperature-chart"],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "duck-cooking-temperature-chart": {
    directAnswer:
      "A commercial duck cooking temperature chart defines the professional core probing and cooking parameters for duck carcasses, confit legs, and seared breasts in UK catering. While whole roast duck and slow-cooked legs must reach 75°C core (82°C in Scotland), duck breast may be served pink (62°C to 65°C) only when supported by a validated HACCP plan and verified supplier assurance.",
    howTo: [
      "Identify duck dish: whole roasted duck, slow-rendered confit leg, or pan-seared duck breast.",
      "Cook whole birds to a minimum core temperature of 75°C for 30 seconds (82°C in Scotland).",
      "If serving seared duck breast pink (62°C), enforce strict HACCP supplier accreditation and log batch times.",
      "Cool leftover roasted duck meat to under 8°C within 90 minutes before chilling."
    ],
    faqs: [
      {
        q: "Can restaurants legally serve duck breast pink in the UK?",
        a: "Yes. The FSA permits duck breast to be served pink (typically 62°C to 65°C) if the business operates an EHO-approved HACCP system with accredited high-hygiene poultry suppliers, searing all outer surfaces thoroughly."
      },
      {
        q: "What is the recommended core temperature for confit duck legs?",
        a: "Confit duck legs are submerged in duck fat and cooked slowly at 140°C until the meat reaches an internal core of 82°C to 85°C, ensuring collagen melts while achieving complete commercial pasteurisation."
      },
      {
        q: "Why does whole roast duck require longer cooking times than chicken?",
        a: "Duck has a thick subcutaneous fat layer beneath the skin that requires slow rendering to become crisp and ensure deep heat transfer through to the inner cavity."
      }
    ],
    relatedTools: ["chicken-temperature-chart", "food-cooling-poster", "freezer-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "beef-temperature-chart": {
    directAnswer:
      "A commercial beef cooking temperature chart details the core thermal standards for beef cuts, differentiating between intact whole muscle roasts and ground minced beef. Under UK Food Standards Agency rules, whole steaks and roasts may be served rare (52°C–55°C) if all outer surfaces are seared, whereas minced beef burgers and rolled joints must achieve 75°C core for 30 seconds (82°C in Scotland).",
    howTo: [
      "Distinguish between intact whole muscle cuts (steaks, roasts) and non-intact meats (mince, rolled joints).",
      "Sear all external surfaces of intact beef joints; internal core can be medium-rare (54°C) or medium (60°C).",
      "All minced beef burgers, rolled briskets, and kebabs must strictly achieve 75°C core for 30 seconds.",
      "Maintain cooked carvery beef joints on hot holding units at or above 63°C continuously."
    ],
    faqs: [
      {
        q: "Why can whole beef steaks be served rare, but burgers cannot?",
        a: "In intact whole beef muscle, pathogens such as E. coli O157 cannot penetrate past the outer surface. Searing kills surface bacteria, leaving sterile interior meat. Mincing mixes surface bacteria into the center, requiring the entire burger to reach 75°C."
      },
      {
        q: "What are the standard core temperatures for roast beef doneness?",
        a: "Rare: 52°C–55°C; Medium-Rare: 55°C–58°C; Medium: 60°C–65°C; Medium-Well: 65°C–70°C; Well-Done: 70°C–75°C+. In each case, exterior browning is legally required."
      },
      {
        q: "What temperature must roast beef be held at for a carvery service?",
        a: "Hot-holding carvery decks and heated passes must maintain cooked beef joints at a minimum of 63°C continuously. If temperatures drop below 63°C, the UK 2-hour service exemption applies."
      }
    ],
    relatedTools: ["lamb-temperature-chart", "ham-cooking-temperature-chart", "food-cooling-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "lamb-temperature-chart": {
    directAnswer:
      "A commercial lamb cooking temperature chart provides catering teams with precise roasting times, rest durations, and safe core temperatures for bone-in legs, shoulders, racks, and minced kebabs. Under UK guidelines, whole intact lamb roasts may be served pink (58°C–65°C) if exterior surfaces are seared, while rolled shoulders and minced lamb must reach at least 75°C core for 30 seconds (82°C in Scotland).",
    howTo: [
      "Select the lamb joint: bone-in leg of lamb, French-trimmed rack, rolled shoulder, or minced koftas.",
      "Weigh joint to calculate roasting time per kilogram plus mandatory 15-20 minute post-roast resting under foil.",
      "Probe thickest meat centre: medium-rare intact racks (58°C), medium roast leg (65°C), or rolled shoulder (75°C).",
      "Minced lamb preparations must reach at least 75°C for 30 seconds throughout the thermal core."
    ],
    faqs: [
      {
        q: "Why must rolled shoulder of lamb reach 75°C, but bone-in leg can be pink?",
        a: "Boned and rolled shoulder has had internal tissues manipulated, rolling surface bacteria into the interior of the joint. Under EHO rules, rolled joints must be treated as minced meat and cooked throughout to 75°C."
      },
      {
        q: "What core temperature is ideal for a rack of lamb in fine dining?",
        a: "A French-trimmed rack of lamb is typically roasted to a core temperature of 56°C to 58°C (medium-rare) or 60°C to 62°C (medium), followed by a 10-minute rest under foil to allow heat distribution."
      },
      {
        q: "What parasites are controlled by proper lamb cooking temperatures?",
        a: "Thorough cooking and freezing control Toxoplasma gondii tissue cysts and Sarcocystis parasites occasionally found in ovine livestock."
      }
    ],
    relatedTools: ["beef-temperature-chart", "venison-cooking-temperature-chart", "food-cooling-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
'''

# Insert before FALLBACK_DEEP_CONTENT
fallback_target = 'export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'
if fallback_target in deep_content and '"venison-cooking-temperature-chart":' not in deep_content:
    deep_content = deep_content.replace(fallback_target, batch6_deep_entries + '\n' + fallback_target)
    with open(deep_path, 'w', encoding='utf-8') as f:
        f.write(deep_content)
    print("Added Batch 6 entries to tool_deep_content.ts.")
else:
    print("Batch 6 entries already in tool_deep_content.ts or fallback_target not found.")

# 3. Patch TemplateDetailPage.tsx with MeatCookingTemperatureChartTool
detail_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx'
with open(detail_path, 'r', encoding='utf-8') as f:
    detail_content = f.read()

import_meat_target = 'import { HamCookingTemperatureTool } from "./tools/HamCookingTemperatureTool";'
import_meat_repl = '''import { HamCookingTemperatureTool } from "./tools/HamCookingTemperatureTool";
import { MeatCookingTemperatureChartTool, MeatCategory } from "./tools/MeatCookingTemperatureChartTool";'''

if import_meat_target in detail_content and 'MeatCookingTemperatureChartTool' not in detail_content:
    detail_content = detail_content.replace(import_meat_target, import_meat_repl)
    print("Added MeatCookingTemperatureChartTool import.")

bool_meat_target = '''  const isHamCookingTool =
    template.slug === "ham-cooking-temperature-chart" ||
    template.slug.includes("ham-cooking");'''

bool_meat_repl = '''  const isMeatCookingTool =
    template.slug.includes("temperature-chart") &&
    (template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish-temperature") ||
      template.slug.includes("food-temperature"));

  const initialMeat: MeatCategory =
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" : "chicken";

  const isHamCookingTool =
    template.slug === "ham-cooking-temperature-chart" ||
    template.slug.includes("ham-cooking");'''

if bool_meat_target in detail_content and 'isMeatCookingTool' not in detail_content:
    detail_content = detail_content.replace(bool_meat_target, bool_meat_repl)
    print("Added isMeatCookingTool boolean check.")

render_meat_target = '''        {/* 4j. Ham & Gammon Cooking Temperature & Core Probe Chart */}
        {isHamCookingTool && (
          <HamCookingTemperatureTool templateId={template.id} />
        )}'''

render_meat_repl = '''        {/* 4j. Commercial Meat & Poultry Cooking Temperature Chart */}
        {(isMeatCookingTool || isHamCookingTool) && (
          <MeatCookingTemperatureChartTool templateId={template.id} initialMeat={initialMeat} />
        )}'''

if render_meat_target in detail_content:
    detail_content = detail_content.replace(render_meat_target, render_meat_repl)
    print("Updated render to use MeatCookingTemperatureChartTool.")

fallback_meat_target = '!isHamCookingTool && ('
fallback_meat_repl = '!isHamCookingTool && !isMeatCookingTool && ('

if fallback_meat_target in detail_content:
    detail_content = detail_content.replace(fallback_meat_target, fallback_meat_repl)
    print("Updated fallback condition with !isMeatCookingTool.")

with open(detail_path, 'w', encoding='utf-8') as f:
    f.write(detail_content)

print("Saved TemplateDetailPage.tsx successfully.")
