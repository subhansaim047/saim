# scripts/fix_comma_batch11.py
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

target = """      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }

  "retail-store-daily-checklist": {"""

replacement = """      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "retail-store-daily-checklist": {"""

if target in text:
    text = text.replace(target, replacement, 1)
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully added comma after restaurant-checklist")
else:
    print("Target not found, inspecting exact lines")
