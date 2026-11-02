import re

with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

links = re.findall(r'<Link[^>]+href=["\']([^"\']+)["\']', text)
print('Links in ppds-label-generator:', links)
for match in re.finditer(r'<Link[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</Link>', text, re.DOTALL):
    print('HREF:', match.group(1), 'TEXT:', match.group(2)[:60].strip())
