import re

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# find blocks with relatedBlog
print("Length of tool_deep_content.ts:", len(text))
matches = re.findall(r'relatedBlog:\s*\{\s*title:\s*["\']([^"\']+)["\'],\s*slug:\s*["\']([^"\']+)["\']', text)
print(f"Total relatedBlog entries: {len(matches)}")
for title, slug in matches[:15]:
    print(f"  slug: {slug} | title: {title}")
