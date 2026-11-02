with open('src/components/DemosPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = """            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Explore our web development services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/services/takeaway-web-design"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">0% Commission System</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Takeaway website design &amp; ordering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Speed Benchmarks</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>View our website case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Discuss your website project with Saim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>"""

replacement = """            <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/services" className="after:absolute after:inset-0 focus:outline-none">
                  Web Development Services
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">0% Commission System</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/services/takeaway-web-design" className="after:absolute after:inset-0 focus:outline-none">
                  Takeaway Website Design
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Speed Benchmarks</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/case-studies" className="after:absolute after:inset-0 focus:outline-none">
                  Website Case Studies
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/contact" className="after:absolute after:inset-0 focus:outline-none">
                  Discuss Your Project
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>"""

c_norm = c.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

assert target_norm in c_norm, "Target not found in DemosPage.tsx"
c_norm = c_norm.replace(target_norm, replacement_norm)

with open('src/components/DemosPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c_norm)

print("Updated DemosPage cluster navigation successfully")
