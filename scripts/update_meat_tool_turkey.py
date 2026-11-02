import re

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\MeatCookingTemperatureChartTool.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update MeatCategory type
old_type = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish" | "burger";'
new_type = 'export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish" | "burger" | "turkey";'

if old_type in content:
    content = content.replace(old_type, new_type)
    print("Updated MeatCategory type")
else:
    print("Could not find old_type in content!")

# 2. Add turkey profile right before closing of MEAT_PROFILES
turkey_profile = '''  turkey: {
    id: "turkey",
    name: "Turkey Pasteurisation & Lethality Standards",
    subtitle: "Salmonella 7-Log Lethality & Time-Temperature Lethality Table",
    badge: "7D Pathogen Eradication",
    badgeColor: "bg-amber-600 text-white",
    accentBg: "bg-amber-50/70",
    accentBorder: "border-amber-300",
    fsaGuidance: "Whole turkey and poultry cuts require a 7D (7-log) reduction in Salmonella. Standard UK requirement is 75°C core for 30 seconds or 70°C for 2 minutes. Scientifically validated low-temperature pasteurisation pairs apply for combi and sous-vide cooking.",
    cuts: [
      {
        id: "whole-turkey",
        name: "Whole Roasting Turkey (Bone-In)",
        cutType: "Whole Carcass",
        recommendedOvenTemp: "165°C – 175°C (Fan)",
        cookMinsPerKg: 35,
        restMins: 30,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into thickest part of the inner thigh (deep muscle between leg and cavity) and thickest center of breast. Do not touch bone.",
        pathogenRisk: "Salmonella enterica and Campylobacter jejuni. Dense cavity creates slow heat conduction zones; minimum 30 min tented rest essential."
      },
      {
        id: "turkey-crown",
        name: "Turkey Crown & Rolled Breast Joint",
        cutType: "Breast Muscle Joint",
        recommendedOvenTemp: "170°C – 180°C (Fan)",
        cookMinsPerKg: 30,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe geometric center from the side into the deepest part of the breast muscle.",
        pathogenRisk: "Rolled crowns with stuffing must be probed at the innermost stuffing layer, which must independently reach 75°C."
      },
      {
        id: "turkey-pasteurisation-table",
        name: "Low-Temp Pasteurisation (Sous-Vide / Combi)",
        cutType: "7-Log Thermal Lethality",
        recommendedOvenTemp: "60°C – 68°C Precision Water Bath / Combi Steam",
        cookMinsPerKg: 60,
        restMins: 10,
        targetCoreUK: 65.6,
        targetCoreScotland: 82.0,
        probeProtocol: "Continuous immersion probe logging holding time: 60.0°C (27.2 min), 63.0°C (8.4 min), 65.6°C (2.6 min), 68.3°C (49 sec), 70.0°C (16.8 sec).",
        pathogenRisk: "USDA FSIS Appendix A validated equivalent lethal thermal death time to instantaneous 74°C."
      },
      {
        id: "ground-turkey",
        name: "Ground / Minced Turkey & Stuffing",
        cutType: "Comminuted Poultry",
        recommendedOvenTemp: "180°C (Oven / Griddle)",
        cookMinsPerKg: 25,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe center of patty, meatball, or stuffing loaf. Must reach 75°C throughout.",
        pathogenRisk: "High risk: bacteria blended throughout mince. No rare or pink serving permitted under UK law."
      }
    ]
  }
};'''

old_end = '''      }
    ]
  }
};'''

if old_end in content:
    content = content.replace(old_end, '''      }
    ]
  },
''' + turkey_profile, 1)
    print("Appended turkey profile to MEAT_PROFILES")
else:
    print("Could not find old_end in content!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished writing MeatCookingTemperatureChartTool.tsx")
