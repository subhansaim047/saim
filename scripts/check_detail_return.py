import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('{isWalkInStorageTool &&')
if pos != -1:
    print(text[pos:pos+500])
