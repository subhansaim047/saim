with open('app/about/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

old_p = """          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Learn more about Saim Dev: We are a Next.js web development studio serving UK and European clients remotely. We specialize in high-performance websites for hospitality, service businesses, and ambitious independent brands.
          </p>"""

new_p = """          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Saim Dev is an independent Next.js web development studio serving UK and European businesses remotely. We engineer sub-second websites, conversion-focused landing pages, and commission-free takeaway ordering systems starting from £250. Clients receive direct founder-led communication, full code ownership on GitHub, and zero monthly retainers.
          </p>"""

c_norm = c.replace('\r\n', '\n')
old_norm = old_p.replace('\r\n', '\n')
new_norm = new_p.replace('\r\n', '\n')

assert old_norm in c_norm, "old_norm not in c_norm"
c = c_norm.replace(old_norm, new_norm)

with open('app/about/page.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated app/about/page.tsx")
