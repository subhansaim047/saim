with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('offers')
if idx != -1:
    print(repr(text[idx-20:idx+150]))
