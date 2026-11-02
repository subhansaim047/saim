# scripts/update_featured_tools.py

with open('src/components/FeaturedToolsSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_header = """            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Free Software Showcase &amp; Tools</span>
            </div>
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Interactive Web Tools &amp; Systems
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Explore custom interactive web applications built by our studio. From commercial compliance engines to business generators — engineered to demonstrate how bespoke web software automates complex business operations.
            </p>"""

new_header = """            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4A1C]/10 border border-[#FF4A1C]/20 text-[#FF4A1C] text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] animate-pulse" />
              <span>160 Live Tools • Engineering Capability Proof</span>
            </div>
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              160+ Production Web Tools &amp; Interactive Applications
            </h2>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
              We don't just build marketing pages — we engineer complex, high-performance web software. Browse our library of 160 active calculators, automated business systems, and compliance tools running live on saimdev.site.
            </p>"""

code = code.replace(old_header, new_header)

with open('src/components/FeaturedToolsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("FeaturedToolsSection updated successfully.")
