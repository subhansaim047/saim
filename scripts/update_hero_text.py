import os

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\HeroSection.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Badge
content = content.replace('Full Stack Dev Studio', 'FULL-STACK WEB STUDIO')

# 2. Tech chips: ["Next.js", "Node.js", "Vite", "React", "Tailwind"] -> ["Next.js", "React", "Node.js"]
old_arr = '["Next.js", "Node.js", "Vite", "React", "Tailwind"]'
new_arr = '["Next.js", "React", "Node.js"]'
content = content.replace(old_arr, new_arr)

# Also update separator to bullet &#x2022; if desired
content = content.replace('&#x25AA;', '&#x2022;')

# 3. Tagline
old_tagline = """Business growth starts with a{" "}
                  <span className="text-white font-medium underline decoration-[#FF4A1C] decoration-2 underline-offset-4">
                    better website
                  </span>
                  ."""

new_tagline = """Better websites for{" "}
                  <span className="text-white font-medium underline decoration-[#FF4A1C] decoration-2 underline-offset-4">
                    ambitious local businesses
                  </span>
                  ."""

# Normalize and replace
content = content.replace(old_tagline.replace('\r\n', '\n'), new_tagline.replace('\r\n', '\n'))
content = content.replace(old_tagline.replace('\n', '\r\n'), new_tagline.replace('\n', '\r\n'))

# 4. H1
content = content.replace(
    'Next.js Websites for UK &amp; EU Small Businesses - Fixed Price from £250',
    'Next.js Websites for UK Small Businesses — From £250'
)

# 5. Sub-headline
old_sub = """<h2 className="text-white text-sm sm:text-base md:text-lg font-medium tracking-tight">
                  High-Performance{" "}
                  <span className="text-white/50">
                    Web Architecture
                  </span>
                </h2>
                <p className="text-white/45 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-0.5">
                  Strategic Design &amp; Digital Growth
                </p>"""

new_sub = """<h2 className="text-white text-sm sm:text-base md:text-lg font-medium tracking-tight">
                  Fast,{" "}
                  <span className="text-white/50">
                    SEO-Friendly Websites
                  </span>
                </h2>
                <p className="text-white/45 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-0.5">
                  CUSTOM DESIGN • MOBILE-FIRST PERFORMANCE • FULL OWNERSHIP
                </p>"""

content = content.replace(old_sub.replace('\r\n', '\n'), new_sub.replace('\r\n', '\n'))
content = content.replace(old_sub.replace('\n', '\r\n'), new_sub.replace('\n', '\r\n'))

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hero text updated successfully!")
