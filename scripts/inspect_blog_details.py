import os

blog_components = [
    ("BlogPost2Page.tsx", "free-website-for-local-business"),
    ("BlogPost3Page.tsx", "50-percent-off-agency-launch"),
    ("blog/BlogPostAllergenMatrix.tsx", "how-to-create-compliant-14-allergen-matrix-uk-restaurants"),
    ("blog/BlogPostFoodCost.tsx", "mastering-food-cost-percentage-commercial-kitchen-calculator"),
    ("blog/BlogPostRecipeScaler.tsx", "how-to-scale-recipes-commercial-catering-batch-calculator"),
    ("blog/BlogPostChecklist.tsx", "sfbb-daily-kitchen-opening-closing-checklist-guide"),
    ("blog/BlogPostHaccpPlan.tsx", "how-to-write-haccp-plan-uk-food-business-step-by-step"),
    ("blog/BlogPostHygieneQuiz.tsx", "level-2-food-hygiene-practice-test-kitchen-staff-guide"),
    ("blog/BlogPostFhrsChecklist.tsx", "uk-food-hygiene-rating-scheme-5-star-checklist"),
    ("blog/BlogPostNatashasLaw.tsx", "natashas-law-ppds-food-labelling-guide"),
    ("blog/BlogPostCoolingGuide.tsx", "commercial-kitchen-food-cooling-temperature-guide")
]

for filename, slug in blog_components:
    path = os.path.join("src", "components", filename)
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    h1_match = [line for line in text.splitlines() if "<h1" in line or "h1" in line[:10]]
    faq_match = "faqs" in text.lower() or "faq" in text.lower()
    print(f"[{slug}] lines={len(text.splitlines())}, FAQ={faq_match}")
