import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print("Lines 290-310:")
for i in range(290, 310):
    print(f"{i+1}: {lines[i]}")

print("\nLines 330-345:")
for i in range(330, 345):
    print(f"{i+1}: {lines[i]}")

print("\nLines 725-738:")
for i in range(725, 738):
    print(f"{i+1}: {lines[i]}")
