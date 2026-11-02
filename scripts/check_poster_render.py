with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('isPoster')
if pos != -1:
    print(text[pos-50:pos+500])
else:
    pos2 = text.find('template.type === "poster"')
    if pos2 != -1:
        print(text[pos2-50:pos2+500])
    else:
        print("Looking for poster rendering in TemplateDetailPage:")
        pos3 = text.find('poster')
        print(text[pos3-50:pos3+500])
