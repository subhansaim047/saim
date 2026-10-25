with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = """            {/* Giant Name */}
            <WordsPullUp
              as="h1"
              text="Saim Dev"
              className="text-[16vw] sm:text-[13vw] md:text-[11vw] lg:text-[8.5vw] xl:text-[8vw] font-bold leading-[0.85] tracking-[-0.07em] drop-shadow-2xl"
              style={{ color: "#ffffff", fontFamily: "'Fraunces', Georgia, serif", fontWeight: 900 }}
            />"""

replacement = """            {/* Giant Name */}
            <WordsPullUp
              as="div"
              text="Saim Dev"
              className="text-[16vw] sm:text-[13vw] md:text-[11vw] lg:text-[8.5vw] xl:text-[8vw] font-bold leading-[0.85] tracking-[-0.07em] drop-shadow-2xl"
              style={{ color: "#ffffff", fontFamily: "'Fraunces', Georgia, serif", fontWeight: 900 }}
            />

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-white leading-tight mt-1 mb-2">
              Next.js Websites for UK &amp; EU Small Businesses - Fixed Price from £250
            </h1>"""

# normalize CRLF
target_lf = target.replace('\r\n', '\n')
target_crlf = target.replace('\n', '\r\n')

if target_crlf in c:
    c = c.replace(target_crlf, replacement.replace('\n', '\r\n'))
    with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
        f.write(c)
    print("SUCCESS: Updated HeroSection.tsx with CRLF")
elif target_lf in c:
    c = c.replace(target_lf, replacement.replace('\r\n', '\n'))
    with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
        f.write(c)
    print("SUCCESS: Updated HeroSection.tsx with LF")
else:
    print("FAILED: Target not found")
