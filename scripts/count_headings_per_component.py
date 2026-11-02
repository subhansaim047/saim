import re

components = [
    "src/components/HeroSection.tsx",
    "src/components/AboutSection.tsx",
    "src/components/BenefitsSection.tsx",
    "src/components/PerformanceSection.tsx",
    "src/components/TechStackSection.tsx",
    "src/components/FeaturedToolsSection.tsx",
    "src/components/ProcessSection.tsx",
    "src/components/PricingSection.tsx",
    "src/components/FaqSection.tsx",
    "src/components/ContactSection.tsx",
    "src/components/FooterSection.tsx",
]

heading_regex = re.compile(r'<(h[1-6])\b([^>]*)>(.*?)</\1>', re.IGNORECASE | re.DOTALL)

for cpath in components:
    try:
        with open(cpath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {cpath}: {e}")
        continue
    
    matches = heading_regex.findall(content)
    print(f"\n=== {cpath} ({len(matches)} headings) ===")
    for tag, attrs, text in matches:
        clean_text = re.sub(r'<[^>]+>', '', text).strip()
        clean_text = ' '.join(clean_text.split())
        print(f"  <{tag}> {clean_text[:70]}")
