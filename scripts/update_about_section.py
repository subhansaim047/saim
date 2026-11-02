path = "src/components/AboutSection.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

target = 'Saim Dev is a bespoke web engineering studio specializing in custom business websites, landing pages, SEO-friendly development, performance optimization, and AI-powered web solutions.'
replacement = 'Saim Dev is an independent Next.js web engineering studio specializing in custom small business websites, 0% commission takeaway ordering systems, performance engineering, and local SEO architecture for UK & European clients from £250.'

if target in content:
    content = content.replace(target, replacement, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated AboutSection.tsx business description")
else:
    print("AboutSection target not found")
