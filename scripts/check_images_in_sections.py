import re, os

sections = [
  'HeroSection.tsx', 'AboutSection.tsx', 'BenefitsSection.tsx',
  'PerformanceSection.tsx', 'TechStackSection.tsx', 'FeaturedToolsSection.tsx',
  'ProcessSection.tsx', 'PricingSection.tsx', 'FaqSection.tsx',
  'ContactSection.tsx', 'FooterSection.tsx'
]

for s in sections:
    path = os.path.join('src/components', s)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
            print(f'{s}: {len(imgs)} images -> {imgs[:3]}')
    else:
        print(f'{s}: NOT FOUND')
