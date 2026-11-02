with open('src/components/CaseStudiesPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('local SEO maps optimization', 'local SEO maps optimisation')
c = c.replace('resulting in low inquiry conversion', 'resulting in low enquiry conversion')

old_h1_block = """          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-5">
            Real Results. Real Websites.
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore real client results and real websites engineered by Saim Dev. See how we transform slow, outdated digital presence into high-converting web platforms built for sub-second speed, top Google rankings, and predictable revenue growth.
          </p>"""

new_h1_block = """          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-5">
            Next.js Website Case Studies &amp; Results
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore real Next.js website case studies and verified client performance metrics from Saim Dev. We engineer sub-second web platforms for UK and European businesses that cut bounce rates, boost search visibility, and increase customer bookings.
          </p>"""

c_norm = c.replace('\r\n', '\n')
old_norm = old_h1_block.replace('\r\n', '\n')
new_norm = new_h1_block.replace('\r\n', '\n')

assert old_norm in c_norm, "old_norm not in c_norm"
c = c_norm.replace(old_norm, new_norm)

with open('src/components/CaseStudiesPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated src/components/CaseStudiesPage.tsx")
