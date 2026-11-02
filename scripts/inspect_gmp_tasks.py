with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('GMP_AUDIT_TASKS')
if pos != -1:
    print(text[pos:pos+1200])
