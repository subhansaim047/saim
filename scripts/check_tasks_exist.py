with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Has WASTE_MANAGEMENT_TASKS:", "WASTE_MANAGEMENT_TASKS" in text)
print("Has BAR_OPERATIONS_TASKS:", "BAR_OPERATIONS_TASKS" in text)
