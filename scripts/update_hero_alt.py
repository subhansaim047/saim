with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('alt="Performance"', 'alt="Fresh and Reddy Dark Web Architecture"')
c = c.replace('alt="UI Design"', 'alt="Evora Luxury Real Estate Web Platform"')
c = c.replace('alt="Backend"', 'alt="GAZU High-Conversion Fashion E-Commerce"')
c = c.replace('alt="Tech Stack"', 'alt="Interactive Digital SaaS Showcase"')

with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated HeroSection.tsx alt attributes!')
