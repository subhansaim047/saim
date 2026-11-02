import os
import re

def update_file(path, old_pattern, replacement):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if re.search(old_pattern, content):
        new_content = re.sub(old_pattern, replacement, content, count=1)
        with open(path, 'w', encoding='utf-8', newline='') as f:
            f.write(new_content)
        print(f"[OK] Updated {path}")
        return True
    else:
        print(f"[WARN] Pattern not found in {path}")
        return False

# 1. app/tools/page.tsx
c_tools = open('app/tools/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_tools:
    old_tools = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/tools[\"'],\s*languages:\s*\{\s*\"en-GB\":\s*\"https://www\.saimdev\.site/tools\",\s*\},?\s*\})"
    rep_tools = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  \\1"
    )
    update_file('app/tools/page.tsx', old_tools, rep_tools)

c_tools = open('app/tools/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_tools:
    old_tw = r'(twitter:\s*\{\s*card:\s*"summary_large_image",)'
    rep_tw = r'\1\n    creator: "@saimwebdev",'
    update_file('app/tools/page.tsx', old_tw, rep_tw)

# 2. app/tools/ppds-label-generator/page.tsx
c_ppds = open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_ppds:
    old_ppds = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/tools/ppds-label-generator[\"'],\s*languages:\s*\{\s*\"en-GB\":\s*\"https://www\.saimdev\.site/tools/ppds-label-generator\",\s*\},?\s*\})"
    rep_ppds = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  \\1"
    )
    update_file('app/tools/ppds-label-generator/page.tsx', old_ppds, rep_ppds)

c_ppds = open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_ppds:
    old_tw = r'(twitter:\s*\{\s*card:\s*"summary_large_image",)'
    rep_tw = r'\1\n    creator: "@saimwebdev",'
    update_file('app/tools/ppds-label-generator/page.tsx', old_tw, rep_tw)

# 3. app/food-safety-templates/[slug]/page.tsx
c_slug = open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_slug:
    old_tw = r'(twitter:\s*\{\s*card:\s*"summary_large_image",)'
    rep_tw = r'\1\n      creator: "@saimwebdev",'
    update_file('app/food-safety-templates/[slug]/page.tsx', old_tw, rep_tw)

# 4. app/cookie-policy/page.tsx
c_cp = open('app/cookie-policy/page.tsx', 'r', encoding='utf-8').read()
if 'languages:' not in c_cp:
    old_can = r'(alternates:\s*\{\s*canonical:\s*\"https://www\.saimdev\.site/cookie-policy\",?\s*\})'
    rep_can = (
        "alternates: {\n"
        "    canonical: \"https://www.saimdev.site/cookie-policy\",\n"
        "    languages: {\n"
        "      \"en-GB\": \"https://www.saimdev.site/cookie-policy\",\n"
        "    },\n"
        "  }"
    )
    update_file('app/cookie-policy/page.tsx', old_can, rep_can)

c_cp = open('app/cookie-policy/page.tsx', 'r', encoding='utf-8').read()
if 'images:' not in c_cp:
    old_og = r'(openGraph:\s*\{[^}]*type:\s*\"website\"?\s*)(\})'
    rep_og = (
        r'\1,\n'
        r'    images: [\n'
        r'      {\n'
        r'        url: "https://www.saimdev.site/og-image.png",\n'
        r'        width: 1200,\n'
        r'        height: 630,\n'
        r'        alt: "Cookie Policy - Saim Dev",\n'
        r'        type: "image/png",\n'
        r'      },\n'
        r'    ]\n'
        r'  }'
    )
    update_file('app/cookie-policy/page.tsx', old_og, rep_og)

c_cp = open('app/cookie-policy/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_cp:
    old_tw = r'(twitter:\s*\{[^}]*description:\s*\"[^\"]*\"?\s*)(\})'
    rep_tw = (
        r'\1,\n'
        r'    creator: "@saimwebdev",\n'
        r'    images: ["https://www.saimdev.site/og-image.png"]\n'
        r'  }'
    )
    update_file('app/cookie-policy/page.tsx', old_tw, rep_tw)

# 5. app/privacy/page.tsx
c_pv = open('app/privacy/page.tsx', 'r', encoding='utf-8').read()
if 'languages:' not in c_pv:
    old_can = r'(alternates:\s*\{\s*canonical:\s*[\'\"]https://www\.saimdev\.site/privacy[\'\"]\s*\})'
    rep_can = (
        "alternates: {\n"
        "    canonical: 'https://www.saimdev.site/privacy',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/privacy',\n"
        "    },\n"
        "  }"
    )
    update_file('app/privacy/page.tsx', old_can, rep_can)

c_pv = open('app/privacy/page.tsx', 'r', encoding='utf-8').read()
if 'images:' not in c_pv:
    old_og = r'(openGraph:\s*\{[^}]*type:\s*\'website\'?\s*)(\})'
    rep_og = (
        r'\1,\n'
        r'    images: [\n'
        r'      {\n'
        r'        url: "https://www.saimdev.site/og-image.png",\n'
        r'        width: 1200,\n'
        r'        height: 630,\n'
        r'        alt: "Privacy Policy - Saim Dev",\n'
        r'        type: "image/png",\n'
        r'      },\n'
        r'    ]\n'
        r'  }'
    )
    update_file('app/privacy/page.tsx', old_og, rep_og)

c_pv = open('app/privacy/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_pv:
    old_tw = r'(twitter:\s*\{[^}]*description:\s*\"[^\"]*\"?\s*)(\})'
    rep_tw = (
        r'\1,\n'
        r'    creator: "@saimwebdev",\n'
        r'    images: ["https://www.saimdev.site/og-image.png"]\n'
        r'  }'
    )
    update_file('app/privacy/page.tsx', old_tw, rep_tw)

# 6. app/terms/page.tsx
c_tm = open('app/terms/page.tsx', 'r', encoding='utf-8').read()
if 'languages:' not in c_tm:
    old_can = r'(alternates:\s*\{\s*canonical:\s*[\'\"]https://www\.saimdev\.site/terms[\'\"]\s*\})'
    rep_can = (
        "alternates: {\n"
        "    canonical: 'https://www.saimdev.site/terms',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/terms',\n"
        "    },\n"
        "  }"
    )
    update_file('app/terms/page.tsx', old_can, rep_can)

c_tm = open('app/terms/page.tsx', 'r', encoding='utf-8').read()
if 'images:' not in c_tm:
    old_og = r'(openGraph:\s*\{[^}]*type:\s*\'website\'?\s*)(\})'
    rep_og = (
        r'\1,\n'
        r'    images: [\n'
        r'      {\n'
        r'        url: "https://www.saimdev.site/og-image.png",\n'
        r'        width: 1200,\n'
        r'        height: 630,\n'
        r'        alt: "Terms of Service - Saim Dev",\n'
        r'        type: "image/png",\n'
        r'      },\n'
        r'    ]\n'
        r'  }'
    )
    update_file('app/terms/page.tsx', old_og, rep_og)

c_tm = open('app/terms/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_tm:
    old_tw = r'(twitter:\s*\{[^}]*description:\s*\"[^\"]*\"?\s*)(\})'
    rep_tw = (
        r'\1,\n'
        r'    creator: "@saimwebdev",\n'
        r'    images: ["https://www.saimdev.site/og-image.png"]\n'
        r'  }'
    )
    update_file('app/terms/page.tsx', old_tw, rep_tw)

# 7. app/disclaimer/page.tsx
c_dc = open('app/disclaimer/page.tsx', 'r', encoding='utf-8').read()
if 'languages:' not in c_dc:
    old_can = r'(alternates:\s*\{\s*canonical:\s*\"https://www\.saimdev\.site/disclaimer\",?\s*\})'
    rep_can = (
        "alternates: {\n"
        "    canonical: \"https://www.saimdev.site/disclaimer\",\n"
        "    languages: {\n"
        "      \"en-GB\": \"https://www.saimdev.site/disclaimer\",\n"
        "    },\n"
        "  }"
    )
    update_file('app/disclaimer/page.tsx', old_can, rep_can)

c_dc = open('app/disclaimer/page.tsx', 'r', encoding='utf-8').read()
if 'images:' not in c_dc:
    old_og = r'(openGraph:\s*\{[^}]*type:\s*\"website\"?\s*)(\})'
    rep_og = (
        r'\1,\n'
        r'    images: [\n'
        r'      {\n'
        r'        url: "https://www.saimdev.site/og-image.png",\n'
        r'        width: 1200,\n'
        r'        height: 630,\n'
        r'        alt: "Food Safety Disclaimer - Saim Dev",\n'
        r'        type: "image/png",\n'
        r'      },\n'
        r'    ]\n'
        r'  }'
    )
    update_file('app/disclaimer/page.tsx', old_og, rep_og)

c_dc = open('app/disclaimer/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_dc:
    old_tw = r'(twitter:\s*\{[^}]*description:\s*\"[^\"]*\"?\s*)(\})'
    rep_tw = (
        r'\1,\n'
        r'    creator: "@saimwebdev",\n'
        r'    images: ["https://www.saimdev.site/og-image.png"]\n'
        r'  }'
    )
    update_file('app/disclaimer/page.tsx', old_tw, rep_tw)

print("Tools and legal pages updated.")
