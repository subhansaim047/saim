with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('const isChecklistOrLog')
if pos != -1:
    print(text[pos:pos+600])
