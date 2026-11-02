with open('src/components/BlogsPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('standardized chef prep cards', 'standardised chef prep cards')

old_h1_block = """              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                All Published Guides &amp; Insights
              </h1>
              <p className="text-sm text-gray-500 mt-1 max-w-lg">
                Practical, in-depth playbooks on web development, small business growth, food safety compliance, and commercial kitchen systems.
              </p>"""

new_h1_block = """              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Restaurant Tech &amp; Web Development Guides
              </h1>
              <p className="text-sm text-gray-500 mt-1 max-w-lg">
                Practical operational guides and engineering playbooks on Next.js web development, Natasha&apos;s Law 14-allergen compliance, SFBB kitchen logs, and commercial restaurant profitability for UK business owners.
              </p>"""

c_norm = c.replace('\r\n', '\n')
old_norm = old_h1_block.replace('\r\n', '\n')
new_norm = new_h1_block.replace('\r\n', '\n')

assert old_norm in c_norm, "old_norm not in c_norm"
c = c_norm.replace(old_norm, new_norm)

with open('src/components/BlogsPage.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated src/components/BlogsPage.tsx")
