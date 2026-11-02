import os

def update_file(filepath, target, replacement):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content_norm = content.replace('\r\n', '\n')
    target_norm = target.replace('\r\n', '\n')
    replacement_norm = replacement.replace('\r\n', '\n')
    if target_norm not in content_norm:
        raise ValueError(f"Target not found in {filepath}")
    updated = content_norm.replace(target_norm, replacement_norm)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated)
    print(f"[OK] Successfully updated {filepath}")

# 1. TechnologiesPage.tsx
tech_target_cluster = """            <Link
              href="/services"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Explore our web development services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/nextjs-developer-uk"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Specialist UK Freelancer</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Dedicated UK Next.js web development</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Client Proof</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Inspect verified website case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Discuss your website project with Saim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>"""

tech_replacement_cluster = """            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/services" className="after:absolute after:inset-0 focus:outline-none">
                  Web Development Services
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Specialist UK Freelancer</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/nextjs-developer-uk" className="after:absolute after:inset-0 focus:outline-none">
                  Next.js Web Development
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Client Proof</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/case-studies" className="after:absolute after:inset-0 focus:outline-none">
                  Website Case Studies
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/contact" className="after:absolute after:inset-0 focus:outline-none">
                  Discuss Your Project
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>"""

update_file("src/components/TechnologiesPage.tsx", tech_target_cluster, tech_replacement_cluster)

tech_target_intext = "<span>Hire a Next.js developer for your UK business</span>"
tech_replacement_intext = "<span>Hire Next.js Developer UK</span>"
update_file("src/components/TechnologiesPage.tsx", tech_target_intext, tech_replacement_intext)

tech_target_cta = "<span>Discuss your website project</span>"
tech_replacement_cta = "<span>Discuss Your Project</span>"
update_file("src/components/TechnologiesPage.tsx", tech_target_cta, tech_replacement_cta)

# 2. CaseStudiesPage.tsx
case_target_cluster = """          <Link
            href="/services"
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
          >
            <span className="text-xs font-mono text-primary uppercase block mb-1">Packaged Solutions</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Explore our web development services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/nextjs-developer-uk"
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
          >
            <span className="text-xs font-mono text-primary uppercase block mb-1">UK Specialist</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Hire a Next.js developer for your UK business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
          >
            <span className="text-xs font-mono text-primary uppercase block mb-1">Project Enquiry</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Discuss your website project with our lead engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>"""

case_replacement_cluster = """          <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
            <span className="text-xs font-mono text-primary uppercase block mb-1">Packaged Solutions</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <Link href="/services" className="after:absolute after:inset-0 focus:outline-none">
                Web Development Services
              </Link>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
            <span className="text-xs font-mono text-primary uppercase block mb-1">UK Specialist</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <Link href="/nextjs-developer-uk" className="after:absolute after:inset-0 focus:outline-none">
                Next.js Developer UK
              </Link>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
            <span className="text-xs font-mono text-primary uppercase block mb-1">Project Enquiry</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <Link href="/contact" className="after:absolute after:inset-0 focus:outline-none">
                Contact Our Team
              </Link>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>"""

update_file("src/components/CaseStudiesPage.tsx", case_target_cluster, case_replacement_cluster)

case_target_cta = "<span>Discuss your website project via enquiry form</span>"
case_replacement_cta = "<span>Send Project Enquiry</span>"
update_file("src/components/CaseStudiesPage.tsx", case_target_cta, case_replacement_cta)

print("\nTechnologiesPage and CaseStudiesPage updated successfully!")
