# 1. BlogPost1Page.tsx
with open('src/components/BlogPost1Page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('inquiry', 'enquiry')
c = c.replace('Inquiry', 'Enquiry')
c = c.replace('inquiries', 'enquiries')
c = c.replace('Inquiries', 'Enquiries')
c = c.replace('The math works', 'The maths works')
c = c.replace('$200', '£200')
c = c.replace('$10,400', '£10,400')

with open('src/components/BlogPost1Page.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated BlogPost1Page.tsx')

# 2. BlogPostAllergenMatrix.tsx
with open('src/components/blog/BlogPostAllergenMatrix.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('standardized', 'standardised')
c = c.replace('Color Coding', 'Colour Coding')
with open('src/components/blog/BlogPostAllergenMatrix.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated BlogPostAllergenMatrix.tsx')

# 3. BlogPostFhrsChecklist.tsx
with open('src/components/blog/BlogPostFhrsChecklist.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Color-coded', 'Colour-coded')
with open('src/components/blog/BlogPostFhrsChecklist.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated BlogPostFhrsChecklist.tsx')

# 4. BlogPostHygieneQuiz.tsx
with open('src/components/blog/BlogPostHygieneQuiz.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('color-coded', 'colour-coded')
with open('src/components/blog/BlogPostHygieneQuiz.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated BlogPostHygieneQuiz.tsx')

# 5. BlogPostRecipeScaler.tsx
with open('src/components/blog/BlogPostRecipeScaler.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('standardized', 'standardised')
with open('src/components/blog/BlogPostRecipeScaler.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated BlogPostRecipeScaler.tsx')

# 6. BlogPostFoodCost.tsx
with open('src/components/blog/BlogPostFoodCost.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('The Math Most Chefs Skip', 'The Maths Most Chefs Skip')
with open('src/components/blog/BlogPostFoodCost.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated BlogPostFoodCost.tsx')
