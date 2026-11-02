import glob, os

files = ['src/components/BlogPost1Page.tsx', 'src/components/BlogPost2Page.tsx', 'src/components/BlogPost3Page.tsx'] + glob.glob('src/components/blog/*.tsx')

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        text = fh.read()
    has_link = 'from "next/link"' in text or "from 'next/link'" in text
    if not has_link:
        # Add import Link from "next/link"; after "use client";
        if '"use client";' in text:
            text = text.replace('"use client";', '"use client";\nimport Link from "next/link";', 1)
        elif "'use client';" in text:
            text = text.replace("'use client';", "'use client';\nimport Link from 'next/link';", 1)
        else:
            text = 'import Link from "next/link";\n' + text
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(text)
        print(f"Added Link import to: {f}")
    else:
        print(f"Already has Link: {f}")
