import os
import re

blogs = [
    ("why-small-business-needs-website", "src/components/BlogPost1Page.tsx", "app/blog/why-small-business-needs-website/page.tsx"),
    ("free-website-for-local-business", "src/components/BlogPost2Page.tsx", "app/blog/free-website-for-local-business/page.tsx"),
    ("50-percent-off-agency-launch", "src/components/BlogPost3Page.tsx", "app/blog/50-percent-off-agency-launch/page.tsx"),
    ("how-to-create-compliant-14-allergen-matrix-uk-restaurants", "src/components/blog/BlogPostAllergenMatrix.tsx", "app/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants/page.tsx"),
    ("mastering-food-cost-percentage-commercial-kitchen-calculator", "src/components/blog/BlogPostFoodCost.tsx", "app/blog/mastering-food-cost-percentage-commercial-kitchen-calculator/page.tsx"),
    ("how-to-scale-recipes-commercial-catering-batch-calculator", "src/components/blog/BlogPostRecipeScaler.tsx", "app/blog/how-to-scale-recipes-commercial-catering-batch-calculator/page.tsx"),
    ("sfbb-daily-kitchen-opening-closing-checklist-guide", "src/components/blog/BlogPostChecklist.tsx", "app/blog/sfbb-daily-kitchen-opening-closing-checklist-guide/page.tsx"),
    ("how-to-write-haccp-plan-uk-food-business-step-by-step", "src/components/blog/BlogPostHaccpPlan.tsx", "app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx"),
    ("level-2-food-hygiene-practice-test-kitchen-staff-guide", "src/components/blog/BlogPostHygieneQuiz.tsx", "app/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide/page.tsx"),
    ("uk-food-hygiene-rating-scheme-5-star-checklist", "src/components/blog/BlogPostFhrsChecklist.tsx", "app/blog/uk-food-hygiene-rating-scheme-5-star-checklist/page.tsx"),
    ("natashas-law-ppds-food-labelling-guide", "src/components/blog/BlogPostNatashasLaw.tsx", "app/blog/natashas-law-ppds-food-labelling-guide/page.tsx"),
    ("commercial-kitchen-food-cooling-temperature-guide", "src/components/blog/BlogPostCoolingGuide.tsx", "app/blog/commercial-kitchen-food-cooling-temperature-guide/page.tsx")
]

print(f"Auditing {len(blogs)} blog components and page wrappers...")
for slug, comp_path, page_path in blogs:
    with open(page_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    with open(comp_path, 'r', encoding='utf-8') as f:
        comp_content = f.read()

    has_faq_schema = "FAQPage" in page_content
    has_article_schema = "Article" in page_content or "BlogPosting" in page_content
    has_breadcrumb_schema = "BreadcrumbList" in page_content
    has_key_takeaways = "key takeaways" in comp_content.lower()
    has_author_byline = "saim" in comp_content.lower() and "about" in comp_content.lower()
    has_silo_nav = "BlogSiloNav" in comp_content
    word_count = len(re.findall(r'\b\w+\b', comp_content))

    print(f"Blog: {slug}")
    print(f"  Component: {comp_path} ({word_count} words)")
    print(f"  Schemas: Article/BlogPosting={has_article_schema}, FAQPage={has_faq_schema}, Breadcrumb={has_breadcrumb_schema}")
    print(f"  Key Takeaways: {has_key_takeaways} | Author Byline: {has_author_byline} | SiloNav: {has_silo_nav}")
