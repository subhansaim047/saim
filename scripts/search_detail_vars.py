import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/TemplateDetailPage.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'isHaccpTool' in l or 'isConsumerAdvisoryTool' in l or 'isFoodFlowChartTool' in l:
        print(f"Line {i+1}: {l.strip()}")
