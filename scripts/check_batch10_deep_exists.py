import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

keys = [
    'product-specification-template',
    'pest-control-inspection-checklist',
    'pest-control-template',
    'bar-opening-checklist',
    'restaurant-checklist'
]

for k in keys:
    count = content.count(f'"{k}":')
    print(f"{k}: appears {count} times")
