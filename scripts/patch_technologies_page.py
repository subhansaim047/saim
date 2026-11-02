with open('src/components/TechnologiesPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('Core Web Vitals Optimization', 'Core Web Vitals Optimisation')
c = c.replace('Optimized text blocks', 'Optimised text blocks')
c = c.replace('answer inquiries and qualify leads', 'answer enquiries and qualify leads')

old_h1_block = """          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Technologies & Expertise
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
          Explore our core web development technologies and technical expertise: Modern, sub-second web architecture powered by cutting-edge frontend frameworks, performance engineering, and robust cloud infrastructure.
        </p>"""

new_h1_block = """          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Next.js Tech Stack &amp; Web Engineering
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Saim Dev leverages a modern Next.js tech stack combining React 19, TypeScript, Tailwind CSS, and Vercel edge deployment. We engineer sub-second web applications for UK businesses, delivering 90+ Core Web Vitals, enterprise security, and seamless API integrations with zero maintenance overhead.
          </p>"""

c_norm = c.replace('\r\n', '\n')
old_norm = old_h1_block.replace('\r\n', '\n')
new_norm = new_h1_block.replace('\r\n', '\n')

assert old_norm in c_norm, "old_norm not in c_norm"
c = c_norm.replace(old_norm, new_norm)

with open('src/components/TechnologiesPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated src/components/TechnologiesPage.tsx")
