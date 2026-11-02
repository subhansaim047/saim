with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('interface CheckItem')
if idx != -1:
    print(text[idx:idx+300])
