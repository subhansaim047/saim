import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/tools/MeatCookingTemperatureChartTool.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update MeatCategory type
old_type = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham";'
new_type = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish";'

if old_type in content:
    content = content.replace(old_type, new_type)
    print("Updated MeatCategory type successfully")
else:
    print("Could not find old MeatCategory type!")

# 2. Add pork and fish profiles before closing }; of MEAT_PROFILES
pork_and_fish_profiles = '''  pork: {
    id: "pork",
    name: "Commercial Pork & Swine Cuts",
    subtitle: "Salmonella, Trichinella & Yersinia Thermal Safety Standard",
    badge: "FSA Safe Cooking Benchmark",
    badgeColor: "bg-emerald-700 text-white",
    accentBg: "bg-emerald-50/70",
    accentBorder: "border-emerald-300",
    fsaGuidance: "Minced pork, rolled joints, and sausages must reach at least 75°C core for 30 seconds (82°C in Scotland) to eliminate Salmonella and Yersinia enterocolitica. Whole intact pork loins and chops can be served with a slight blush if surface-seared thoroughly and core reaches 70°C for 2 minutes (or 75°C instant).",
    cuts: [
      {
        id: "pork-loin-roast",
        name: "Whole Loin of Pork Roast",
        cutType: "Whole Joint",
        recommendedOvenTemp: "180°C – 190°C (Fan)",
        cookMinsPerKg: 50,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into the thickest center part of the eye muscle away from fat cap.",
        pathogenRisk: "Surface bacteria eliminated by high heat roasting; core must hit 75°C (82°C Scotland) for statutory due diligence."
      },
      {
        id: "pork-chops",
        name: "Bone-In Pork Chops & Steaks",
        cutType: "Portion Cut",
        recommendedOvenTemp: "Pan-sear / Oven finish 190°C",
        cookMinsPerKg: 35,
        restMins: 8,
        targetCoreUK: 71.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the deepest center of the meat without touching bone.",
        pathogenRisk: "Intact cutlet: 70°C for 2 minutes or 75°C instant. Never serve undercooked minced or tenderised pork."
      },
      {
        id: "pork-belly-rolled",
        name: "Rolled & Tied Pork Belly (Porchetta)",
        cutType: "Rolled Joint",
        recommendedOvenTemp: "160°C slow roast / 220°C crackling",
        cookMinsPerKg: 60,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into the dead center of the rolled cylinder.",
        pathogenRisk: "Rolling transfers surface contaminants into the cold core; thorough 75°C lethality mandatory."
      },
      {
        id: "pork-sausages-minced",
        name: "Pork Sausages & Minced Pork Burgers",
        cutType: "Minced / Comminuted",
        recommendedOvenTemp: "Grill / Oven 180°C",
        cookMinsPerKg: 30,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe center of the thickest sausage or center patty.",
        pathogenRisk: "Critical risk: Grinding distributes surface bacteria throughout the meat. Zero pink meat permitted."
      },
      {
        id: "pork-pulled-shoulder",
        name: "Slow-Braised Pulled Pork Shoulder",
        cutType: "Slow Cook / Braise",
        recommendedOvenTemp: "140°C – 150°C (Low & Slow)",
        cookMinsPerKg: 90,
        restMins: 30,
        targetCoreUK: 88.0,
        targetCoreScotland: 88.0,
        probeProtocol: "Multiple probe points across the shoulder joint before shredding.",
        pathogenRisk: "Requires 88°C–93°C core to break down tough collagen; well beyond food safety minimums."
      }
    ]
  },
  fish: {
    id: "fish",
    name: "Commercial Fish & Seafood Fillets",
    subtitle: "Anisakis Parasite Inactivation & Flaking Standard",
    badge: "Seafood Safety Benchmark",
    badgeColor: "bg-cyan-700 text-white",
    accentBg: "bg-cyan-50/70",
    accentBorder: "border-cyan-300",
    fsaGuidance: "FSA statutory standard: Fish cooked to order must reach opaque flaking consistency with core temp of 63°C for 2 minutes (or 70°C for 2 min / 75°C instant; Scotland 82°C). Raw/sushi fish requires parasite freeze-treatment (-20°C for 24h or -35°C for 15h) under Regulation (EC) No 853/2004.",
    cuts: [
      {
        id: "fish-salmon",
        name: "Scottish Salmon Fillet / Supreme",
        cutType: "Oily Fish Fillet",
        recommendedOvenTemp: "Pan-sear / Oven 180°C",
        cookMinsPerKg: 25,
        restMins: 5,
        targetCoreUK: 63.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the thickest center part of the fillet.",
        pathogenRisk: "Flesh becomes opaque and flakes easily. Parasite freezing certification required if served raw or cured."
      },
      {
        id: "fish-white-fillet",
        name: "White Fish Fillets (Cod, Haddock, Sea Bass)",
        cutType: "Lean White Fish",
        recommendedOvenTemp: "190°C – 200°C (Bake / Fry)",
        cookMinsPerKg: 20,
        restMins: 3,
        targetCoreUK: 63.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Center of the thickest portion near the shoulder.",
        pathogenRisk: "Lethality reached at 63°C for 2 min. Ensure batter does not create cold internal pocket."
      },
      {
        id: "fish-tuna-steak",
        name: "Fresh Yellowfin Tuna Loin Steak",
        cutType: "Pelagic Loin Steak",
        recommendedOvenTemp: "High-heat sear (Griddle / Pan)",
        cookMinsPerKg: 15,
        restMins: 5,
        targetCoreUK: 50.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Surface sear verification (≥75°C surface) with 50°C rare center.",
        pathogenRisk: "Intact muscle surface must be seared. Histamine (scombroid) control requires continuous cold chain ≤4°C."
      },
      {
        id: "fish-whole-round",
        name: "Whole Roasted Sea Bream / Trout",
        cutType: "Whole Fish",
        recommendedOvenTemp: "190°C (Fan)",
        cookMinsPerKg: 35,
        restMins: 8,
        targetCoreUK: 70.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Thickest part of the back muscle along the spine behind the head.",
        pathogenRisk: "Cavity must be eviscerated and thoroughly rinsed. Probe must not touch backbone."
      },
      {
        id: "fish-cakes-minced",
        name: "Fish Cakes & Minced Seafood Patties",
        cutType: "Minced / Formed",
        recommendedOvenTemp: "180°C (Bake / Deep Fry)",
        cookMinsPerKg: 25,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Dead center of the fish cake.",
        pathogenRisk: "Minced and formed products carry surface bacteria throughout; must reach 75°C (82°C Scotland)."
      }
    ]
  }
};'''

target_ham_end = '''      {
        id: "ham-glazed",
        name: "Carvery Glazed Ham (Pre-Boiled & Roasted)",
        cutType: "Glazed Roast",
        recommendedOvenTemp: "180°C – 190°C (Glaze finishing)",
        cookMinsPerKg: 20,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Core center before applying glaze.",
        pathogenRisk: "Sugar crust browns rapidly while core may remain cold."
      }
    ]
  }
};'''

replacement_ham_end = '''      {
        id: "ham-glazed",
        name: "Carvery Glazed Ham (Pre-Boiled & Roasted)",
        cutType: "Glazed Roast",
        recommendedOvenTemp: "180°C – 190°C (Glaze finishing)",
        cookMinsPerKg: 20,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Core center before applying glaze.",
        pathogenRisk: "Sugar crust browns rapidly while core may remain cold."
      }
    ]
  },
''' + pork_and_fish_profiles

if target_ham_end in content:
    content = content.replace(target_ham_end, replacement_ham_end)
    print("Added pork and fish profiles successfully")
else:
    print("Could not match target_ham_end!")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved MeatCookingTemperatureChartTool.tsx")
