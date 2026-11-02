import sys
sys.stdout.reconfigure(encoding='utf-8')

# Fix 1: tool_deep_content.ts
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_lines = f.readlines()

for i in range(len(deep_lines)):
    if 'slug: "uk-food-hygiene-rating-scheme-5-star-checklist"' in deep_lines[i]:
        # The closing braces follow:
        # deep_lines[i+1] is '  }\n'
        # deep_lines[i+2] should be '  },\n'
        print("Found line:", deep_lines[i].strip())
        print("Next lines:", deep_lines[i+1].strip(), deep_lines[i+2].strip())
        if deep_lines[i+2].strip() == '}':
            deep_lines[i+2] = '  },\n'
            print("Fixed missing comma at line", i+3)
        break

with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.writelines(deep_lines)

# Fix 2: app/food-safety-templates/[slug]/page.tsx duplicate import
with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    page_text = f.read()

# Replace line 5 import
page_text = page_text.replace('import { TOOL_DEEP_CONTENT } from "@/data/tool_deep_content";\nimport { CORE_PAGES_METADATA }', 'import { CORE_PAGES_METADATA }')

with open('app/food-safety-templates/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_text)

print("Both fixes applied successfully.")
