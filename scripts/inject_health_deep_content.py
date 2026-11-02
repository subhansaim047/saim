import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

entry = '''  "health-inspection-checklist": {
    directAnswer:
      "A commercial health inspection checklist is a structured self-audit tool used by UK catering managers and head chefs to prepare for unannounced Environmental Health Officer (EHO) visits. It evaluates operational compliance across the three official Food Hygiene Rating Scheme (FHRS) scoring pillars: Food Hygiene Practices, Structural Condition, and Confidence in Management.",
    howTo: [
      "Audit Pillar 1 (Food Hygiene): probe chilled storage (<5°C), verify core cooking temperatures reach 75°C, and separate raw meat prep.",
      "Audit Pillar 2 (Structural Condition): inspect kitchen cleanliness, verify hot running water and BS EN 1499 soap at handwash basins, and check pest barriers.",
      "Audit Pillar 3 (Management Confidence): review daily SFBB diary opening and closing checks, verify staff training certificates, and check supplier invoices.",
      "Identify non-compliances: log corrective actions immediately for any structural defects, faulty seals, or missing temperature entries.",
      "Sign and file the completed self-audit sheet in your master due diligence binder for visiting local authority inspectors."
    ],
    faqs: [
      {
        q: "What do UK Environmental Health Officers check during an inspection?",
        a: "An EHO assesses three statutory pillars: (1) Hygienic food handling (cooking, cooling, reheating, cross-contamination, and allergens), (2) Cleanliness and physical condition of the premises (lighting, ventilation, layout, pest control, handwashing), and (3) Food safety management documentation (HACCP/SFBB diary, staff training records, supplier traceability)."
      },
      {
        q: "How is a Food Hygiene Rating calculated from 0 to 5 stars?",
        a: "Scores from 0 (best) to 25/30 (worst) are assigned to each of the three pillars. To achieve a 5-star rating ('Very Good'), a food business must score no more than 5 points in any individual category, proving high standards across hygiene, structure, and management."
      },
      {
        q: "Do Environmental Health Officers announce their inspections in advance?",
        a: "No. Routine food hygiene inspections conducted by UK local authority councils are almost always unannounced. Food businesses must operate in inspection-ready condition during every operational service shift."
      },
      {
        q: "What documents must be ready when an EHO arrives?",
        a: "Officers will ask to inspect your completed Safer Food, Better Business (SFBB) pack or bespoke HACCP plan, daily temperature logs (fridge, freezer, hot holding, cook line), staff Food Hygiene certificates (Level 2/3), allergen matrices, and pest control contractor service reports."
      },
      {
        q: "Can an EHO close down a restaurant immediately?",
        a: "Yes. If an inspector identifies an imminent risk to public health—such as severe active pest infestation (rats, mice, cockroaches), absence of potable hot water, raw sewage backup, or total lack of food safety controls—they can serve a Hygiene Emergency Prohibition Notice, closing the premises immediately."
      }
    ],
    relatedTools: ["eho-checklist", "restaurant-cleaning-checklist", "freezer-temperature-chart"],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
'''

pos = text.rfind("};")
if pos == -1:
    print("Error: closing }; not found")
    sys.exit(1)

new_text = text[:pos] + entry + text[pos:]

with open(path, "w", encoding="utf-8") as f:
    f.write(new_text)

print("Successfully injected health-inspection-checklist into tool_deep_content.ts")
