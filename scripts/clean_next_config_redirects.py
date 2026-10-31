import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

template_slugs = set(re.findall(r'"slug":\s*"([^"]+)"', text))
print(f"Loaded {len(template_slugs)} template slugs.")

with open('next.config.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to filter out redirect blocks where source is /food-safety-templates/<slug> and <slug> is in template_slugs.
# A redirect block typically looks like:
#       {
#         source: '...',
#         destination: '...',
#         permanent: true,
#       },

pattern = re.compile(r"(\s*\{\s*source:\s*['\"]/food-safety-templates/([^'\"]+)['\"],\s*destination:\s*['\"][^'\"]+['\"],\s*permanent:\s*true,?\s*\},?)", re.MULTILINE)

removed_count = 0
def replacer(match):
    global removed_count
    full_block = match.group(1)
    slug = match.group(2)
    if slug in template_slugs:
        removed_count += 1
        print(f"Removing conflicting redirect for: {slug}")
        return ""
    return full_block

new_content = pattern.sub(replacer, content)

with open('next.config.mjs', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Finished! Removed {removed_count} conflicting redirects from next.config.mjs.")
