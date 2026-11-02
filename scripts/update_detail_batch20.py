file_path = 'src/components/TemplateDetailPage.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update isWalkInStorageTool
old_walk_in = 'template.slug.includes("butter-last");'
new_walk_in = 'template.slug.includes("butter-last") ||\n    template.slug.includes("freezer-organization") ||\n    template.slug.includes("organization-chart");'

if 'template.slug.includes("freezer-organization")' not in content:
    content = content.replace(old_walk_in, new_walk_in)
    print("Updated isWalkInStorageTool with freezer-organization")

# 2. Update isChecklistOrLog
old_checklist = 'template.slug.includes("utensil"));'
new_checklist = 'template.slug.includes("utensil") ||\n      template.slug.includes("5-whys") ||\n      template.slug.includes("root-cause"));'

if 'template.slug.includes("5-whys")' not in content:
    content = content.replace(old_checklist, new_checklist)
    print("Updated isChecklistOrLog with 5-whys")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx successfully!")
