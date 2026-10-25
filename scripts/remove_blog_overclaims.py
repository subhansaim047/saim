import re

# 1. src/components/BlogsPage.tsx
with open('src/components/BlogsPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('How to Create a Fully Compliant 14-Allergen Matrix', 'How to Create a Compliant 14-Allergen Matrix')
c = c.replace('Real, proven operational playbooks', 'Practical operational playbooks')
with open('src/components/BlogsPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated BlogsPage.tsx")

# 2. src/components/blog/BlogPostAllergenMatrix.tsx
with open('src/components/blog/BlogPostAllergenMatrix.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Fully Compliant', 'Compliant')
with open('src/components/blog/BlogPostAllergenMatrix.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated BlogPostAllergenMatrix.tsx")

# 3. src/components/blog/BlogPostFoodCost.tsx
with open('src/components/blog/BlogPostFoodCost.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('does not guarantee', 'does not ensure')
with open('src/components/blog/BlogPostFoodCost.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated BlogPostFoodCost.tsx")

# 4. src/components/blog/BlogPostHaccpPlan.tsx
with open('src/components/blog/BlogPostHaccpPlan.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('to guarantee 100% sterile food', 'to maximize food safety')
c = c.replace('Safety can only be guaranteed by', 'Safety is achieved by')
with open('src/components/blog/BlogPostHaccpPlan.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated BlogPostHaccpPlan.tsx")

# 5. src/data/tool_deep_content.ts
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('How to Create a Fully Compliant 14-Allergen Matrix for UK Restaurants', 'How to Create a Compliant 14-Allergen Matrix for UK Restaurants')
with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated tool_deep_content.ts")
