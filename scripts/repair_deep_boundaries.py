import sys

sys.stdout.reconfigure(encoding='utf-8')

deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the premature closing brace at eho-checklist
target_premature = '''    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }
};



  "cleaning-restaurant": {'''

replacement_correct = '''    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: Complete 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },

  "cleaning-restaurant": {'''

if target_premature in content:
    content = content.replace(target_premature, replacement_correct)
    print("Fixed premature closing brace.")
else:
    print("Could not find exact target_premature, doing regex...")
    import re
    content = re.sub(
        r'(slug:\s*"uk-food-hygiene-rating-scheme-5-star-checklist"\s*\n\s*\}\s*\n\s*\})\s*\n\s*\};\s*\n+\s*"cleaning-restaurant":',
        r'\1,\n\n  "cleaning-restaurant":',
        content
    )

# Now ensure closing brace before FALLBACK_DEEP_CONTENT
target_fallback = '''    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'''

replacement_fallback = '''    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
};

export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'''

if target_fallback in content:
    content = content.replace(target_fallback, replacement_fallback)
    print("Added closing brace before FALLBACK_DEEP_CONTENT.")
else:
    print("Regex for fallback...")
    import re
    content = re.sub(
        r'(slug:\s*"commercial-kitchen-food-cooling-temperature-guide"\s*\n\s*\}\s*\n\s*\})\s*,?\s*\n+export const FALLBACK_DEEP_CONTENT:',
        r'\1\n};\n\nexport const FALLBACK_DEEP_CONTENT:',
        content
    )

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved repaired tool_deep_content.ts.")
