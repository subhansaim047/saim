with open('src/components/ContactPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('inquire about a website project', 'enquire about a website project')
c = c.replace('Inquiry Form Formatted!', 'Enquiry Form Formatted!')
c = c.replace('send your pre-filled inquiry', 'send your pre-filled enquiry')
c = c.replace('Submit Project Inquiry via WhatsApp', 'Submit Project Enquiry via WhatsApp')

old_hero = """          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 leading-[1.08]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Let&apos;s build something <span className="text-white/40">remarkable.</span>
          </h1>

          <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
            Ready to build something remarkable for your business? Enjoy direct communication with your lead web engineer to build custom websites without middlemen or agency bloat.
          </p>"""

new_hero = """          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 leading-[1.08]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Contact Saim Dev — Hire Next.js Developer UK
          </h1>

          <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
            Get in touch with Saim Dev to discuss your Next.js website project or takeaway ordering system. We deliver fixed-price quotes from £250 with sub-second performance, direct WhatsApp communication, and zero agency markups for UK and European businesses.
          </p>"""

c_norm = c.replace('\r\n', '\n')
old_norm = old_hero.replace('\r\n', '\n')
new_norm = new_hero.replace('\r\n', '\n')

assert old_norm in c_norm, "old_norm not in c_norm"
c = c_norm.replace(old_norm, new_norm)

with open('src/components/ContactPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated src/components/ContactPage.tsx")
