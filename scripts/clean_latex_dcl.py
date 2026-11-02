with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(r'$\ge 5$ inches', '5 inches or wider')
text = text.replace(r'$\ge 5$', '5 inches or wider')

with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleaned up LaTeX syntax in DigitalChecklistTool.tsx.")
