import re

for filepath in ['public/hotbite/assets/css/oresto-pizza-section.css', 'public/hotbite/assets/css/oresto-burger-section.css']:
    print("=" * 60)
    print("FILE:", filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # find all @media blocks
    media_matches = re.findall(r'(@media[^{]+\{)', content)
    for m in media_matches:
        print("  ->", m.strip())
