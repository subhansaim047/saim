# 1. TemplateDetailPage.tsx
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('<span>return to all kitchen tools</span>', '<span>Return to All Kitchen Tools</span>')
c = c.replace("text=Hi%20Saim,%20I'm%20inquiring%20about", "text=Hi%20Saim,%20I'm%20enquiring%20about")

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated TemplateDetailPage.tsx')

# 2. tool_deep_content.ts
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('* and Generative Engine Optimization', '* and Generative Engine Optimisation')
c = c.replace('color-coded cloths', 'colour-coded cloths')
c = c.replace('urgent food incident inquiry', 'urgent food incident enquiry')
c = c.replace('standard culinary color assignments', 'standard culinary colour assignments')
c = c.replace('What board color should be used', 'What board colour should be used')
c = c.replace('apply standardized date labels', 'apply standardised date labels')

with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated tool_deep_content.ts')

# 3. core_metadata.json
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('to optimize takeaway menu profitability', 'to optimise takeaway menu profitability')

with open('src/data/core_metadata.json', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print('Updated core_metadata.json')
