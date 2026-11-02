with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# find FoodSafetyDisclaimer
idx = text.find('<FoodSafetyDisclaimer')
if idx != -1:
    print(text[idx-400:idx+600])
