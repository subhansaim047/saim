with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the boundary between the previous object and what-is-the-minimum
bad_str = """    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }

  "what-is-the-minimum-hot-holding-temperature-for-hot-dog": {"""

good_str = """    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "what-is-the-minimum-hot-holding-temperature-for-hot-dog": {"""

assert bad_str in text, "Could not find target string in tool_deep_content.ts"
text = text.replace(bad_str, good_str, 1)

with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed missing comma in tool_deep_content.ts")
