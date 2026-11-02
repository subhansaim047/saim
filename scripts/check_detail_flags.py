with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("freezer-organization in isWalkInStorageTool:", "freezer-organization" in text)
print("5-whys in isChecklistOrLog:", "5-whys" in text)
