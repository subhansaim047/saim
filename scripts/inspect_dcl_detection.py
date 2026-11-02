with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('const isGmpAudit')
if pos != -1:
    print(text[pos:pos+400])
