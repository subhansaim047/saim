# scripts/patch_batch13_routing.py
import re

# 1. Update MeatCookingTemperatureChartTool.tsx
with open('src/components/tools/MeatCookingTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    meat_content = f.read()

# Add "burger" to MeatCategory
meat_cat_old = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish";'
meat_cat_new = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish" | "burger";'

if meat_cat_old in meat_content:
    meat_content = meat_content.replace(meat_cat_old, meat_cat_new)
    print("Updated MeatCategory type in MeatCookingTemperatureChartTool")
else:
    print("Error: meat_cat_old not found")

burger_profile = """  burger: {
    id: "burger",
    name: "Commercial Burgers & Minced Meat Patties",
    subtitle: "STEC & E. coli O157 Thermal Inactivation Protocol",
    badge: "Strict CCP Control",
    badgeColor: "bg-red-600 text-white",
    accentBg: "bg-red-50/70",
    accentBorder: "border-red-300",
    fsaGuidance: "Because surface bacteria are mixed throughout ground meat during mincing, burgers must be cooked to 75°C core for 30s (70°C for 2 min). Serving rare burgers requires strict FSA validated source controls and local council approval.",
    cuts: [
      {
        id: "classic-beef-burger",
        name: "Standard Commercial Beef Burger Patty (6oz)",
        cutType: "Minced Patty",
        recommendedOvenTemp: "Griddle / Chargrill: 190°C – 210°C",
        cookMinsPerKg: 12,
        restMins: 2,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the geometric center of the patty while on griddle.",
        pathogenRisk: "E. coli O157 (STEC) and Salmonella. Minced meat has bacteria distributed throughout the entire product."
      },
      {
        id: "smashed-beef-patty",
        name: "Smashed Beef Burger (3oz - 4oz Crispy Sear)",
        cutType: "Smashed Patty",
        recommendedOvenTemp: "Flat-Top Plancha: 220°C – 240°C",
        cookMinsPerKg: 8,
        restMins: 1,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Verify rapid crust formation and probe thickest edge before assembling.",
        pathogenRisk: "High heat flash sear must achieve full thermal lethality across the center."
      },
      {
        id: "gourmet-pink-burger",
        name: "FSA-Validated Rare/Pink Gourmet Burger (Strict Protocol)",
        cutType: "Validated Mince",
        recommendedOvenTemp: "Sous-vide / Seared: 60°C water bath + hard sear",
        cookMinsPerKg: 25,
        restMins: 3,
        targetCoreUK: 70.0,
        targetCoreScotland: 70.0,
        probeProtocol: "Time/temperature logging mandatory: 70°C for 2 min or 65°C for 10 min under validated HACCP.",
        pathogenRisk: "Strictly prohibited unless operating with accredited supplier, surface searing prior to mincing, and local authority approval."
      },
      {
        id: "lamb-burger",
        name: "Lamb & Kofta Burger Patty",
        cutType: "Minced Lamb",
        recommendedOvenTemp: "Chargrill: 200°C – 210°C",
        cookMinsPerKg: 14,
        restMins: 3,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe center of patty; internal fat must render and juices run completely clear.",
        pathogenRisk: "Campylobacter and Toxoplasma gondii risks in undercooked minced ovine products."
      },
      {
        id: "poultry-burger",
        name: "Chicken / Turkey Breast Patty",
        cutType: "Minced Poultry",
        recommendedOvenTemp: "Grill / Oven: 180°C – 200°C",
        cookMinsPerKg: 15,
        restMins: 2,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Never serve rare or pink. Core temperature must strictly reach 75°C (82°C in Scotland).",
        pathogenRisk: "Extreme risk of Campylobacter and Salmonella infection from undercooked minced poultry."
      }
    ]
  },
"""

# Insert burger profile before beef:
if "  beef: {" in meat_content:
    meat_content = meat_content.replace("  beef: {", burger_profile + "  beef: {", 1)
    print("Inserted burger profile into MEAT_PROFILES")
else:
    print("Error: '  beef: {' not found in MeatCookingTemperatureChartTool")

with open('src/components/tools/MeatCookingTemperatureChartTool.tsx', 'w', encoding='utf-8') as f:
    f.write(meat_content)

# 2. Update TemplateDetailPage.tsx
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

# Update isFridgeRecordTool
old_fridge = """  const isFridgeRecordTool =
    template.slug === "fridge-temperature-record-sheet-pdf" ||
    template.slug.includes("fridge-temperature-record");"""

new_fridge = """  const isFridgeRecordTool =
    template.slug === "fridge-temperature-record-sheet-pdf" ||
    template.slug === "fridge-temperature-chart" ||
    template.slug.includes("fridge-temperature");"""

if old_fridge in page_content:
    page_content = page_content.replace(old_fridge, new_fridge)
    print("Updated isFridgeRecordTool in TemplateDetailPage")
else:
    print("Error: old_fridge not found")

# Update isMasterFoodTempTool
old_master = """  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log";"""

new_master = """  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log" ||
    template.slug === "food-temperatures-poster" ||
    template.slug.includes("food-temperatures-poster") ||
    template.slug === "danger-zone-for-food" ||
    template.slug.includes("danger-zone");"""

if old_master in page_content:
    page_content = page_content.replace(old_master, new_master)
    print("Updated isMasterFoodTempTool in TemplateDetailPage")
else:
    print("Error: old_master not found")

# Update isMeatCookingTool and initialMeat
old_meat = """  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    template.slug.includes("temperature-chart") &&
    (template.slug.includes("venison") ||
     template.slug.includes("chicken") ||
     template.slug.includes("duck") ||
     template.slug.includes("beef") ||
     template.slug.includes("lamb") ||
     template.slug.includes("pork") ||
     template.slug.includes("ham") ||
     template.slug.includes("turkey") ||
     template.slug.includes("fish"));

  const initialMeat: MeatCategory =
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";"""

new_meat = """  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    (template.slug.includes("temperature-chart") || template.slug.includes("temp-chart")) &&
    (template.slug.includes("venison") ||
     template.slug.includes("chicken") ||
     template.slug.includes("duck") ||
     template.slug.includes("beef") ||
     template.slug.includes("lamb") ||
     template.slug.includes("pork") ||
     template.slug.includes("ham") ||
     template.slug.includes("turkey") ||
     template.slug.includes("fish") ||
     template.slug.includes("burger"));

  const initialMeat: MeatCategory =
    template.slug.includes("burger") ? "burger" :
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";"""

if old_meat in page_content:
    page_content = page_content.replace(old_meat, new_meat)
    print("Updated isMeatCookingTool and initialMeat in TemplateDetailPage")
else:
    print("Error: old_meat not found")

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Batch 13 routing patched successfully")
