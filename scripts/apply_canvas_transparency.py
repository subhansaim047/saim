import os

base = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components"

# 1. HeroSection
hero_file = os.path.join(base, "HeroSection.tsx")
with open(hero_file, "r", encoding="utf-8") as f:
    h = f.read()

h = h.replace(
    'section className="h-[100dvh] w-full p-2 sm:p-4 md:p-6 bg-black relative',
    'section className="h-[100dvh] w-full p-2 sm:p-4 md:p-6 bg-transparent relative'
)
h = h.replace(
    'relative h-full w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-black border border-white/[0.08]',
    'relative h-full w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-black/50 backdrop-blur-[2px] border border-white/[0.08]'
)
with open(hero_file, "w", encoding="utf-8") as f:
    f.write(h)
print("HeroSection updated.")

# 2. AboutSection
about_file = os.path.join(base, "AboutSection.tsx")
with open(about_file, "r", encoding="utf-8") as f:
    a = f.read()
a = a.replace(
    '<section id="our-story" className="bg-black py-20',
    '<section id="our-story" className="bg-transparent py-20'
)
with open(about_file, "w", encoding="utf-8") as f:
    f.write(a)
print("AboutSection updated.")

# 3. BenefitsSection
ben_file = os.path.join(base, "BenefitsSection.tsx")
with open(ben_file, "r", encoding="utf-8") as f:
    b = f.read()
b = b.replace(
    '<section id="benefits" className="w-full bg-black">',
    '<section id="benefits" className="w-full bg-transparent">'
)
b = b.replace(
    '<div className="relative w-full bg-black px-4',
    '<div className="relative w-full bg-transparent px-4'
)
with open(ben_file, "w", encoding="utf-8") as f:
    f.write(b)
print("BenefitsSection updated.")

# 4. PerformanceSection
perf_file = os.path.join(base, "PerformanceSection.tsx")
with open(perf_file, "r", encoding="utf-8") as f:
    p = f.read()
p = p.replace(
    '<section className="bg-black text-white px-4',
    '<section className="bg-transparent text-white px-4'
)
with open(perf_file, "w", encoding="utf-8") as f:
    f.write(p)
print("PerformanceSection updated.")

# 5. TechStackSection
tech_file = os.path.join(base, "TechStackSection.tsx")
with open(tech_file, "r", encoding="utf-8") as f:
    t = f.read()
t = t.replace(
    '<section className="bg-black text-white px-4',
    '<section className="bg-transparent text-white px-4'
)
with open(tech_file, "w", encoding="utf-8") as f:
    f.write(t)
print("TechStackSection updated.")

# 6. FeaturedToolsSection
feat_file = os.path.join(base, "FeaturedToolsSection.tsx")
with open(feat_file, "r", encoding="utf-8") as f:
    ft = f.read()
ft = ft.replace(
    '<section id="kitchen-tools" className="w-full bg-black py-16',
    '<section id="kitchen-tools" className="w-full bg-transparent py-16'
)
with open(feat_file, "w", encoding="utf-8") as f:
    f.write(ft)
print("FeaturedToolsSection updated.")

# 7. ProcessSection
proc_file = os.path.join(base, "ProcessSection.tsx")
with open(proc_file, "r", encoding="utf-8") as f:
    pr = f.read()
pr = pr.replace(
    '<section id="process" className="relative w-full bg-black py-20',
    '<section id="process" className="relative w-full bg-transparent py-20'
)
with open(proc_file, "w", encoding="utf-8") as f:
    f.write(pr)
print("ProcessSection updated.")

# 8. PricingSection
price_file = os.path.join(base, "PricingSection.tsx")
with open(price_file, "r", encoding="utf-8") as f:
    pri = f.read()
pri = pri.replace(
    'className="relative w-full bg-black py-20',
    'className="relative w-full bg-transparent py-20'
)
with open(price_file, "w", encoding="utf-8") as f:
    f.write(pri)
print("PricingSection updated.")

# 9. FaqSection
faq_file = os.path.join(base, "FaqSection.tsx")
if os.path.exists(faq_file):
    with open(faq_file, "r", encoding="utf-8") as f:
        faq = f.read()
    faq = faq.replace('bg-black py-', 'bg-transparent py-')
    with open(faq_file, "w", encoding="utf-8") as f:
        f.write(faq)
    print("FaqSection updated.")

# 10. ContactSection
contact_file = os.path.join(base, "ContactSection.tsx")
if os.path.exists(contact_file):
    with open(contact_file, "r", encoding="utf-8") as f:
        cont = f.read()
    cont = cont.replace('bg-black py-', 'bg-transparent py-')
    with open(contact_file, "w", encoding="utf-8") as f:
        f.write(cont)
    print("ContactSection updated.")

print("All section backgrounds harmonized for background canvas!")
