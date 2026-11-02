with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

bad_str = """    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }
  "cold-food-storage-rules": {"""

good_str = """    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "cold-food-storage-rules": {"""

assert bad_str in text, "Could not find target string"
text = text.replace(bad_str, good_str, 1)

with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed missing comma before cold-food-storage-rules")
