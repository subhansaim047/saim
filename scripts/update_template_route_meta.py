path = 'app/food-safety-templates/[slug]/page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import if missing
if 'import { isOffAudience }' not in content:
    content = content.replace(
        'import { isRouteNeedsReplacement } from "@/lib/originality-guard";',
        'import { isRouteNeedsReplacement } from "@/lib/originality-guard";\nimport { isOffAudience } from "@/lib/off-audience";'
    )

# Update isIndexable check
old_check = 'const isIndexable = !needsReplacement && (plan.bucket === "KEEP" || plan.bucket === "IMPROVE");'
new_check = 'const isIndexable = !isOffAudience(slug) && !needsReplacement && (plan.bucket === "KEEP" || plan.bucket === "IMPROVE");'
content = content.replace(old_check, new_check)

# Add en-GB to alternates
old_alt = """    alternates: {
      canonical: canonicalUrl,
    },"""

new_alt = """    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-GB': canonicalUrl,
      },
    },"""

content = content.replace(old_alt.replace('\r\n', '\n'), new_alt.replace('\r\n', '\n'))
content = content.replace(old_alt.replace('\n', '\r\n'), new_alt.replace('\n', '\r\n'))

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated app/food-safety-templates/[slug]/page.tsx successfully!")
