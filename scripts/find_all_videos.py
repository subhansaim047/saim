import os
import re

videos = set()
sources = set()
root_dir = 'public/thejacketmaker'

for root, dirs, files in os.walk(root_dir):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                content = fp.read()
            for m in re.finditer(r'<video[^>]*>.*?</video>', content, re.DOTALL | re.IGNORECASE):
                videos.add((filepath, m.group()[:200]))
            for m in re.finditer(r'https?://[^\s"\'<>]+\.(?:mp4|webm|m3u8)', content, re.IGNORECASE):
                sources.add(m.group())

print(f"Total <video> occurrences: {len(videos)}")
for v in list(videos)[:10]:
    print(v)

print(f"\nTotal video URLs found: {len(sources)}")
for s in sources:
    print(s)
