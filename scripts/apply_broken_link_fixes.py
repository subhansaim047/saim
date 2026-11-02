import re

# Fix 1: tool_deep_content.ts
p1 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read()

c1_updated = c1.replace(
    'slug: "fhrs-food-hygiene-rating-guide-uk"',
    'slug: "uk-food-hygiene-rating-scheme-5-star-checklist"'
)
with open(p1, "w", encoding="utf-8") as f:
    f.write(c1_updated)
print("Updated tool_deep_content.ts")

# Fix 2: takeaway-web-design/page.tsx
p2 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\services\takeaway-web-design\page.tsx"
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read()

c2_updated = c2.replace(
    'href="/tools/food-allergen-chart"',
    'href="/food-safety-templates/food-allergen-chart"'
)
with open(p2, "w", encoding="utf-8") as f:
    f.write(c2_updated)
print("Updated takeaway-web-design/page.tsx")

# Fix 3: next.config.mjs
p3 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\next.config.mjs"
with open(p3, "r", encoding="utf-8") as f:
    c3 = f.read()

new_redirects = """      {
        source: '/blog/fhrs-food-hygiene-rating-guide-uk',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/tools/food-allergen-chart',
        destination: '/food-safety-templates/food-allergen-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/delivery-intake-log',"""

c3_updated = c3.replace(
    "      {\n        source: '/food-safety-templates/delivery-intake-log',",
    new_redirects
)
with open(p3, "w", encoding="utf-8") as f:
    f.write(c3_updated)
print("Updated next.config.mjs with fallback redirects")

# Fix 4: vercel.json
p4 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\vercel.json"
with open(p4, "r", encoding="utf-8") as f:
    c4 = f.read()

vercel_new_redirects = """    {
      "source": "/blog/fhrs-food-hygiene-rating-guide-uk",
      "destination": "/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
      "permanent": true
    },
    {
      "source": "/tools/food-allergen-chart",
      "destination": "/food-safety-templates/food-allergen-chart",
      "permanent": true
    },
    {
      "source": "/food-safety-templates/delivery-intake-log","""

c4_updated = c4.replace(
    '    {\n      "source": "/food-safety-templates/delivery-intake-log",',
    vercel_new_redirects
)
with open(p4, "w", encoding="utf-8") as f:
    f.write(c4_updated)
print("Updated vercel.json with fallback redirects")
