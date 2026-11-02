import sys

sys.stdout.reconfigure(encoding='utf-8')

deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove premature closing brace
target1 = '''    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
};



  "venison-cooking-temperature-chart": {'''

replacement1 = '''    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

  "venison-cooking-temperature-chart": {'''

if target1 in content:
    content = content.replace(target1, replacement1)
    print("Fixed premature closing brace at ham.")
else:
    print("Regex for target1...")
    import re
    content = re.sub(
        r'(\"ham-cooking-temperature-chart\":[\s\S]*?slug:\s*"commercial-kitchen-food-cooling-temperature-guide"\s*\n\s*\}\s*\n\s*\})\s*\n\s*\};\s*\n+\s*"venison-cooking-temperature-chart":',
        r'\1,\n\n  "venison-cooking-temperature-chart":',
        content
    )

# 2. Add final closing brace before FALLBACK_DEEP_CONTENT
target2 = '''    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },

export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'''

replacement2 = '''    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
};

export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {'''

if target2 in content:
    content = content.replace(target2, replacement2)
    print("Added closing brace before FALLBACK_DEEP_CONTENT.")
else:
    print("Regex for target2...")
    import re
    content = re.sub(
        r'(\"lamb-temperature-chart\":[\s\S]*?slug:\s*"commercial-kitchen-food-cooling-temperature-guide"\s*\n\s*\}\s*\n\s*\})\s*,?\s*\n+export const FALLBACK_DEEP_CONTENT:',
        r'\1\n};\n\nexport const FALLBACK_DEEP_CONTENT:',
        content
    )

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved repaired tool_deep_content.ts.")
