with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "| 1 | [why-small-business-needs-website-2026](https://www.saimdev.site/blog/why-small-business-needs-website-2026) | `why small business needs website 2026` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/why-small-business-needs-website-2026/page.tsx` |",
    "| 1 | [why-small-business-needs-website-2026](https://www.saimdev.site/blog/why-small-business-needs-website-2026) | `why small business needs website 2026` | `done` | `src/components/BlogPost1Page.tsx` (British English 'enquiry/maths', GBP £, single H1, article schema) |"
)
c = c.replace(
    "| 2 | [free-website-for-local-business](https://www.saimdev.site/blog/free-website-for-local-business) | `free website for local business` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/free-website-for-local-business/page.tsx` |",
    "| 2 | [free-website-for-local-business](https://www.saimdev.site/blog/free-website-for-local-business) | `free website for local business` | `done` | `src/components/BlogPost2Page.tsx` (Single H1, active voice, GBP £, verified schema) |"
)
c = c.replace(
    "| 3 | [50-percent-off-agency-launch](https://www.saimdev.site/blog/50-percent-off-agency-launch) | `50 percent off agency launch` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/50-percent-off-agency-launch/page.tsx` |",
    "| 3 | [50-percent-off-agency-launch](https://www.saimdev.site/blog/50-percent-off-agency-launch) | `50 percent off agency launch` | `done` | `src/components/BlogPost3Page.tsx` (Single H1, active voice, transparent £250 plans) |"
)
c = c.replace(
    "| 4 | [how-to-create-compliant-14-allergen-matrix-uk-restaurants](https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants) | `how to create compliant 14 allergen matrix uk restaurants` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants/page.tsx` |",
    "| 4 | [how-to-create-compliant-14-allergen-matrix-uk-restaurants](https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants) | `how to create compliant 14 allergen matrix uk restaurants` | `done` | `src/components/blog/BlogPostAllergenMatrix.tsx` (British English 'standardised/colour', single H1) |"
)
c = c.replace(
    "| 5 | [mastering-food-cost-percentage-commercial-kitchen-calculator](https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator) | `mastering food cost percentage commercial kitchen calculator` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/mastering-food-cost-percentage-commercial-kitchen-calculator/page.tsx` |",
    "| 5 | [mastering-food-cost-percentage-commercial-kitchen-calculator](https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator) | `mastering food cost percentage commercial kitchen calculator` | `done` | `src/components/blog/BlogPostFoodCost.tsx` (British English 'maths', single H1, GP% formulas) |"
)
c = c.replace(
    "| 6 | [how-to-scale-recipes-commercial-catering-batch-calculator](https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator) | `how to scale recipes commercial catering batch calculator` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/how-to-scale-recipes-commercial-catering-batch-calculator/page.tsx` |",
    "| 6 | [how-to-scale-recipes-commercial-catering-batch-calculator](https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator) | `how to scale recipes commercial catering batch calculator` | `done` | `src/components/blog/BlogPostRecipeScaler.tsx` (British English 'standardised', single H1, batch formulas) |"
)
c = c.replace(
    "| 7 | [sfbb-daily-kitchen-opening-closing-checklist-guide](https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide) | `sfbb daily kitchen opening closing checklist guide` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/sfbb-daily-kitchen-opening-closing-checklist-guide/page.tsx` |",
    "| 7 | [sfbb-daily-kitchen-opening-closing-checklist-guide](https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide) | `sfbb daily kitchen opening closing checklist guide` | `done` | `src/components/blog/BlogPostChecklist.tsx` (Single H1, SFBB statutory checks, active voice) |"
)
c = c.replace(
    "| 8 | [how-to-write-haccp-plan-uk-food-business-step-by-step](https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step) | `how to write haccp plan uk food business step by step` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx` |",
    "| 8 | [how-to-write-haccp-plan-uk-food-business-step-by-step](https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step) | `how to write haccp plan uk food business step by step` | `done` | `src/components/blog/BlogPostHaccpPlan.tsx` (Single H1, HACCP 7 principles, CCP guidelines) |"
)
c = c.replace(
    "| 9 | [level-2-food-hygiene-practice-test-kitchen-staff-guide](https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide) | `level 2 food hygiene practice test kitchen staff guide` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide/page.tsx` |",
    "| 9 | [level-2-food-hygiene-practice-test-kitchen-staff-guide](https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide) | `level 2 food hygiene practice test kitchen staff guide` | `done` | `src/components/blog/BlogPostHygieneQuiz.tsx` (British English 'colour-coded', interactive practice quiz) |"
)
c = c.replace(
    "| 10 | [uk-food-hygiene-rating-scheme-5-star-checklist](https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist) | `uk food hygiene rating scheme 5 star checklist` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/uk-food-hygiene-rating-scheme-5-star-checklist/page.tsx` |",
    "| 10 | [uk-food-hygiene-rating-scheme-5-star-checklist](https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist) | `uk food hygiene rating scheme 5 star checklist` | `done` | `src/components/blog/BlogPostFhrsChecklist.tsx` (British English 'colour-coded', EHO audit preparation) |"
)
c = c.replace(
    "| 11 | [natashas-law-ppds-food-labelling-guide](https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide) | `natashas law ppds food labelling guide` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/natashas-law-ppds-food-labelling-guide/page.tsx` |",
    "| 11 | [natashas-law-ppds-food-labelling-guide](https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide) | `natashas law ppds food labelling guide` | `done` | `src/components/blog/BlogPostNatashasLaw.tsx` (Single H1, FIR 2020 regulatory breakdown, active voice) |"
)
c = c.replace(
    "| 12 | [commercial-kitchen-food-cooling-temperature-guide](https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide) | `commercial kitchen food cooling temperature guide` | `todo` | `src/components/blog/BlogPost*.tsx / app/blog/commercial-kitchen-food-cooling-temperature-guide/page.tsx` |",
    "| 12 | [commercial-kitchen-food-cooling-temperature-guide](https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide) | `commercial kitchen food cooling temperature guide` | `done` | `src/components/blog/BlogPostCoolingGuide.tsx` (Single H1, 90-minute cooling rule, HACCP safety thresholds) |"
)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated Section 3 in CONTENT_PROGRESS.md")
