import os
import re

blog_comps = [
    'src/components/BlogPost1Page.tsx',
    'src/components/BlogPost2Page.tsx',
    'src/components/BlogPost3Page.tsx',
    'src/components/blog/BlogPostAllergenMatrix.tsx',
    'src/components/blog/BlogPostChecklist.tsx',
    'src/components/blog/BlogPostCoolingGuide.tsx',
    'src/components/blog/BlogPostFhrsChecklist.tsx',
    'src/components/blog/BlogPostFoodCost.tsx',
    'src/components/blog/BlogPostHaccpPlan.tsx',
    'src/components/blog/BlogPostHygieneQuiz.tsx',
    'src/components/blog/BlogPostNatashasLaw.tsx',
    'src/components/blog/BlogPostRecipeScaler.tsx'
]

for p in blog_comps:
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            c = f.read()
        tool_links = re.findall(r'href=[\'"](\/(?:tools|food-safety-templates\/[^\'"]+))[\'"]', c)
        print(f"{os.path.basename(p)}: {tool_links}")
