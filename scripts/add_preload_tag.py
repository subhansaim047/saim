with open('app/layout.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = '<head>'
replacement = '<head>\n        <link rel="preload" as="image" href="/scroll-frames/frame_000.webp" type="image/webp" />'

if target in content and '/scroll-frames/frame_000.webp' not in content:
    content = content.replace(target, replacement, 1)
    with open('app/layout.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS')
else:
    print('ALREADY PRESENT OR NOT FOUND')
