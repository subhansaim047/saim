# -*- coding: utf-8 -*-
import os

replacements = [
    (
        "app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx",
        "How to Write an EHO-Approved HACCP Plan for UK Food Businesses | Saim Dev",
        "How to Write a HACCP Plan for UK Food Businesses | Saim Dev"
    ),
    (
        "app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx",
        "How to Write an EHO-Approved HACCP Plan (7 Principles Guide)",
        "How to Write a HACCP Plan (7 Principles Guide)"
    ),
    (
        "app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx",
        "How to Write an EHO-Approved HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)",
        "How to Write a HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)"
    ),
    (
        "app/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants/page.tsx",
        "building an EHO-approved 14-allergen matrix",
        "building a compliant 14-allergen matrix aligned with FSA guidance"
    ),
    (
        "src/components/BlogsPage.tsx",
        "building an EHO-approved 14-allergen matrix",
        "building a compliant 14-allergen matrix aligned with FSA guidance"
    ),
    (
        "src/components/BlogsPage.tsx",
        "How to Write an EHO-Approved HACCP Plan for Your UK Food Business (7 Principles + Free Plan Builder)",
        "How to Write a HACCP Plan for Your UK Food Business (7 Principles + Free Plan Builder)"
    ),
    (
        "src/components/BlogsPage.tsx",
        "SFBB Opening & Closing Checklists: The Daily Kitchen Routine That Guarantees a 5-Star Food Hygiene Rating",
        "SFBB Opening & Closing Checklists: The Daily Kitchen Routine That Helps You Prepare for a 5-Star Food Hygiene Rating"
    ),
    (
        "src/components/blog/BlogPostHaccpPlan.tsx",
        "How to Write an EHO-Approved HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)",
        "How to Write a HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)"
    ),
    (
        "src/components/blog/BlogPostChecklist.tsx",
        "SFBB Opening &amp; Closing Checklists: The Daily Kitchen Routine That Guarantees a 5-Star Food Hygiene Rating",
        "SFBB Opening &amp; Closing Checklists: The Daily Kitchen Routine That Helps You Prepare for a 5-Star Food Hygiene Rating"
    ),
    (
        "app/blog/sfbb-daily-kitchen-opening-closing-checklist-guide/page.tsx",
        "SFBB Opening & Closing Checklists: The Daily Kitchen Routine That Guarantees a 5-Star Food Hygiene Rating",
        "SFBB Opening & Closing Checklists: The Daily Kitchen Routine That Helps You Prepare for a 5-Star Food Hygiene Rating"
    ),
    (
        "content/plans.ts",
        "engineered to dominate local search",
        "engineered to rank effectively in local search"
    ),
    (
        "src/components/BlogPost3Page.tsx",
        "dominate their local markets",
        "succeed in their local markets"
    ),
    (
        "src/components/BlogPost3Page.tsx",
        "looking to dominate their area",
        "looking to grow in their area"
    )
]

for file_path, target, replacement in replacements:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        if target in content:
            new_content = content.replace(target, replacement)
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Replaced in {file_path}")
        else:
            print(f"Target not found in {file_path}: {target[:30]}...")

print("Finished cleaning overclaims.")
