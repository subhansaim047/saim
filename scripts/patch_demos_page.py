with open('src/components/DemosPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('"Categorized Street Food Menu & Combos"', '"Categorised Street Food Menu & Combos"')
c = c.replace('architectural project inquiry flows', 'architectural project enquiry flows')
c = c.replace('interactive booking inquiry', 'interactive booking enquiry')

old_h1_block = """          <h1 className="text-3xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            Experience Live Client Websites & Demos
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Experience live client websites and interactive demos built with high-performance web architecture, ultra-smooth interactions, and instant load speeds.
        </p>"""

new_h1_block = """          <h1 className="text-3xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            Restaurant Website Demos &amp; Live Projects
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore interactive restaurant website demos and production web applications built by Saim Dev. Test real-time ordering workflows, GSAP scroll animations, sub-second mobile speeds, and built-in Natasha&apos;s Law allergen filtering across our live UK client showcases.
          </p>"""

c_norm = c.replace('\r\n', '\n')
old_norm = old_h1_block.replace('\r\n', '\n')
new_norm = new_h1_block.replace('\r\n', '\n')

assert old_norm in c_norm, "old_norm not in c_norm"
c = c_norm.replace(old_norm, new_norm)

with open('src/components/DemosPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated src/components/DemosPage.tsx")
