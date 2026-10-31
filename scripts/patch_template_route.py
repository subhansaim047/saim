"""
Update app/food-safety-templates/[slug]/page.tsx to ensure all 160 templates are indexable.
"""
p = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\food-safety-templates\[slug]\page.tsx"
with open(p, "r", encoding="utf-8") as f:
    content = f.read().replace("\r\n", "\n")

target = """  const needsReplacement = isRouteNeedsReplacement(`/food-safety-templates/${slug}`);
  const isIndexable = !isOffAudience(slug) && !needsReplacement && (plan.bucket === "KEEP" || plan.bucket === "IMPROVE");
  const canonicalSlug = plan.bucket === "MERGE" ? plan.target_canonical_slug : slug;
  const canonicalUrl = `https://www.saimdev.site/food-safety-templates/${canonicalSlug}`;"""

replacement = """  const isIndexable = true;
  const canonicalSlug = slug;
  const canonicalUrl = `https://www.saimdev.site/food-safety-templates/${canonicalSlug}`;"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated app/food-safety-templates/[slug]/page.tsx to indexable!")
else:
    print("Target not found in template page.tsx")
