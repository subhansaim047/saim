with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

target = '''  relatedBlog: {
    title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
    slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
  }

  "eho-checklist": {'''

replacement = '''  relatedBlog: {
    title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
    slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
  }
  },
  "eho-checklist": {'''

if target in text:
    text = text.replace(target, replacement)
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Fixed closing brace and comma before eho-checklist!")
else:
    print("Could not find exact target string")
