import os
import re

growth_files = [
    ("src/components/BlogPost1Page.tsx", "why-small-business-needs-website"),
    ("src/components/BlogPost2Page.tsx", "free-website-for-local-business"),
    ("src/components/BlogPost3Page.tsx", "50-percent-off-agency-launch"),
]

for file_path, slug in growth_files:
    if not os.path.exists(file_path): continue
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "BlogSiloNav" not in content:
        # add import
        content = re.sub(
            r'(import Link from ["\']next/link["\'];)',
            r'\1\nimport { BlogSiloNav } from "@/components/blog/BlogSiloNav";',
            content,
            count=1
        )
        # add component right before {/* ── Related resources ── */} or {/* ── Back ── */}
        target = "{/* ── Related resources ── */}"
        if target in content:
            replacement = f'<BlogSiloNav currentSlug="{slug}" category="growth" />\n\n        {target}'
            content = content.replace(target, replacement, 1)
        elif "{/* ── Back ── */}" in content:
            target2 = "{/* ── Back ── */}"
            replacement = f'<BlogSiloNav currentSlug="{slug}" category="growth" />\n\n        {target2}'
            content = content.replace(target2, replacement, 1)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Added BlogSiloNav to {file_path}")

compliance_files = [
    ("src/components/blog/BlogPostAllergenMatrix.tsx", "how-to-create-compliant-14-allergen-matrix-uk-restaurants"),
    ("src/components/blog/BlogPostChecklist.tsx", "sfbb-daily-kitchen-opening-closing-checklist-guide"),
    ("src/components/blog/BlogPostCoolingGuide.tsx", "commercial-kitchen-food-cooling-temperature-guide"),
    ("src/components/blog/BlogPostFhrsChecklist.tsx", "uk-food-hygiene-rating-scheme-5-star-checklist"),
    ("src/components/blog/BlogPostFoodCost.tsx", "mastering-food-cost-percentage-commercial-kitchen-calculator"),
    ("src/components/blog/BlogPostHaccpPlan.tsx", "how-to-write-haccp-plan-uk-food-business-step-by-step"),
    ("src/components/blog/BlogPostHygieneQuiz.tsx", "level-2-food-hygiene-practice-test-kitchen-staff-guide"),
    ("src/components/blog/BlogPostNatashasLaw.tsx", "natashas-law-ppds-food-labelling-guide"),
    ("src/components/blog/BlogPostRecipeScaler.tsx", "how-to-scale-recipes-commercial-catering-batch-calculator"),
]

for file_path, slug in compliance_files:
    if not os.path.exists(file_path): continue
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "BlogSiloNav" not in content:
        # add import
        content = re.sub(
            r'(import Link from ["\']next/link["\'];)',
            r'\1\nimport { BlogSiloNav } from "./BlogSiloNav";',
            content,
            count=1
        )
        # place before {/* ── Bottom Navigation ── */}
        target = "{/* ── Bottom Navigation ── */}"
        if target in content:
            replacement = f'<BlogSiloNav currentSlug="{slug}" category="compliance" />\n\n        {target}'
            content = content.replace(target, replacement, 1)
        elif "{/* ── BOTTOM CTA ── */}" in content:
            target2 = "{/* ── BOTTOM CTA ── */}"
            replacement = f'<BlogSiloNav currentSlug="{slug}" category="compliance" />\n\n        {target2}'
            content = content.replace(target2, replacement, 1)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Added BlogSiloNav to {file_path}")

print("All blog silo navigations successfully injected!")
