file_path = 'src/components/TemplateDetailPage.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_check = 'template.slug.includes("root-cause"));'
new_check = 'template.slug.includes("root-cause") ||\n      template.slug.includes("brc") ||\n      template.slug.includes("kosher"));'

if 'template.slug.includes("brc")' not in content:
    content = content.replace(old_check, new_check)
    print("Added brc and kosher to isChecklistOrLog")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx successfully!")
