with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('"fridge-layout-poster"')
if pos != -1:
    print(text[pos-50:pos+300])
