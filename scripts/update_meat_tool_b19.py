import re

file_path = 'src/components/tools/MeatCookingTemperatureChartTool.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update MeatCategory type
old_type = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish" | "burger" | "turkey";'
new_type = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish" | "burger" | "turkey" | "poultry";'

if old_type in content:
    content = content.replace(old_type, new_type)
    print("Updated MeatCategory type with poultry")
else:
    print("Could not find old_type, checking regex")
    content = re.sub(
        r'export type MeatCategory = ([^;]+);',
        r'export type MeatCategory = \1 | "poultry";',
        content
    )

# 2. Add chicken-pasteurisation-table cut into chicken cuts
chicken_cut_addition = '''      {
        id: "chicken-pasteurisation-table",
        name: "Low-Temp Pasteurisation & Sous-Vide (7-Log Lethality)",
        cutType: "Salmonella 7D Eradication",
        recommendedOvenTemp: "58°C - 66°C Precision Immersion Circulator",
        cookMinsPerKg: 50,
        restMins: 5,
        targetCoreUK: 65.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Center of thickest breast or dark meat portion using calibrated thermocouple probe and foam tape.",
        pathogenRisk: "USDA FSIS / FSA 7D Lethality: 58°C (65 min), 60°C (26 min), 63.3°C (7 min), 65.6°C (3 min), 70°C (2 min), 75°C (30s). Come-up heating buffer must be added based on thickness."
      },
'''

if 'id: "chicken-pasteurisation-table"' not in content:
    # insert before whole-chicken
    content = content.replace('cuts: [\n      {\n        id: "whole-chicken",', 'cuts: [\n' + chicken_cut_addition + '      {\n        id: "whole-chicken",')
    print("Added chicken-pasteurisation-table cut")

# 3. Add meat-pasteurisation-table cut into beef cuts
beef_cut_addition = '''      {
        id: "meat-pasteurisation-table",
        name: "Low-Temp Meat Pasteurisation (Sous-Vide & Precision Cooking)",
        cutType: "6.5D/7D Thermal Destruction",
        recommendedOvenTemp: "54.4°C - 63°C Precision Water Bath",
        cookMinsPerKg: 70,
        restMins: 5,
        targetCoreUK: 55.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Needle probe into the absolute geometric center of meat joint or vacuum pouch with closed-cell neoprene foam tape.",
        pathogenRisk: "USDA FSIS Appendix A & UK FSA Validated: 54.4°C (121m), 55.0°C (89m), 56.1°C (47m), 57.2°C (25m), 58.0°C (19m), 60.0°C (10m), 63.0°C (instant). Ground meats excluded."
      },
'''

if 'id: "meat-pasteurisation-table"' not in content:
    content = content.replace('cuts: [\n      {\n        id: "beef-rare-roast",', 'cuts: [\n' + beef_cut_addition + '      {\n        id: "beef-rare-roast",')
    print("Added meat-pasteurisation-table cut")

# 4. Add poultry category definition to MEAT_DATABASE
poultry_entry = '''  poultry: {
    id: "poultry",
    name: "Commercial Poultry Pasteurisation Standards",
    subtitle: "7-Log Salmonella & Campylobacter Lethality Table",
    badge: "7D Pathogen Eradication",
    badgeColor: "bg-amber-600 text-white",
    accentBg: "bg-amber-50/70",
    accentBorder: "border-amber-300",
    fsaGuidance: "Poultry cuts and preparations require a strict 7D (7-log) reduction in Salmonella and Campylobacter. Standard UK compliance is 75°C core for 30 seconds or 70°C for 2 minutes. Scientifically validated low-temperature pasteurisation pairs apply for combi and sous-vide cooking with verified core dwell times.",
    cuts: [
      {
        id: "poultry-pasteurisation-table",
        name: "Poultry 7-Log Pasteurisation Dwell Table",
        cutType: "7D Thermal Lethality",
        recommendedOvenTemp: "58°C - 68°C Precision Water Bath / Combi Steam",
        cookMinsPerKg: 55,
        restMins: 8,
        targetCoreUK: 65.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert thermocouple probe through closed-cell foam tape into thickest cold spot.",
        pathogenRisk: "USDA FSIS / FSA: 58°C (65 min), 60°C (26 min), 62.2°C (11 min), 63.3°C (7 min), 65.6°C (3 min), 70°C (2 min), 75°C (30 sec)."
      },
      {
        id: "poultry-whole-carcass",
        name: "Whole Roasting Poultry (Chicken & Turkey)",
        cutType: "Whole Carcass",
        recommendedOvenTemp: "180°C - 190°C (Fan)",
        cookMinsPerKg: 45,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Thickest part of inner thigh between leg and breast, avoiding contact with bone.",
        pathogenRisk: "Juices must run clear with zero pink flesh remaining in cavity junctions."
      },
      {
        id: "poultry-breasts-sousvide",
        name: "Poultry Breasts (Sous-Vide Supreme)",
        cutType: "Boneless Fillet",
        recommendedOvenTemp: "63.5°C - 65°C Precision Bath",
        cookMinsPerKg: 40,
        restMins: 5,
        targetCoreUK: 65.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Center of bagged breast; allow 45 mins come-up time per 20mm thickness.",
        pathogenRisk: "Juicy, tender breast texture achieved with validated 3-minute core dwell at 65.6°C."
      }
    ]
  },
'''

if 'poultry: {' not in content:
    # insert before turkey or before closing of MEAT_DATABASE
    content = content.replace('  turkey: {', poultry_entry + '  turkey: {')
    print("Added poultry category to MEAT_DATABASE")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved MeatCookingTemperatureChartTool.tsx successfully")
