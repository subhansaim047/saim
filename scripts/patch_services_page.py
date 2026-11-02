with open('src/components/ServicesPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('"Optimized for 3x higher click-through rate"', '"Optimised for 3x higher click-through rate"')
c = c.replace('"Custom Color Palette & Typography"', '"Custom Colour Palette & Typography"')

old_h1_block = """          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Conversion-Focused Web Solutions
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore our conversion-focused web solutions engineered with modern, minimal, and high-performing web architecture tailored to turn visitors into loyal, paying clients.
          </p>"""

new_h1_block = """          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Web Development Services UK
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Saim Dev delivers fixed-price Next.js web development services for UK businesses starting from £250. We build bespoke online ordering platforms, responsive corporate websites, and high-conversion landing pages featuring sub-second load times, 90+ Core Web Vitals, built-in statutory compliance, and zero recurring monthly fees.
          </p>"""

if old_h1_block in c:
    c = c.replace(old_h1_block, new_h1_block)
else:
    # Try with \r\n normalized
    c_norm = c.replace('\r\n', '\n')
    old_norm = old_h1_block.replace('\r\n', '\n')
    new_norm = new_h1_block.replace('\r\n', '\n')
    assert old_norm in c_norm, "old_norm not in c_norm"
    c = c_norm.replace(old_norm, new_norm)

with open('src/components/ServicesPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated src/components/ServicesPage.tsx")
