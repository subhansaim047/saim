# scripts/update_faq_section_geo.py

with open('src/components/FaqSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

new_category = """  {
    category: "Custom Web Development & Architecture",
    items: [
      {
        question: "What is custom web development and why choose it over website builders?",
        answer:
          "Custom web development involves engineering a website or application from scratch using clean, modern code (such as Next.js, React, and TypeScript) tailored directly to your business goals. Unlike DIY builders (Wix, Squarespace) or bloated WordPress themes that suffer from slow mobile speeds, rigid templates, and permanent monthly rent, custom web development gives you 100% code ownership, sub-second speeds, bespoke UX, and zero forced retainers.",
      },
      {
        question: "Why choose Next.js instead of a standard WordPress theme?",
        answer:
          "Standard WordPress themes load dozens of third-party plugins, databases, and unoptimized CSS/JS files that drag mobile Google PageSpeed scores down into the 30–60 range. Next.js delivers static site generation (SSG) and server-side rendering (SSR) directly from the edge, achieving 95+ Core Web Vitals, impervious security (no database vulnerabilities to hack), and instant page transitions that convert more visitors.",
      },
      {
        question: "How much does a commercial website cost in the UK?",
        answer:
          "In the UK, traditional agencies charge £3,000 to £15,000+ for standard small business websites, plus £100–£500/month retainers. At Saim Dev, we offer transparent fixed milestone pricing: Starter Websites from £250–£390, Full Business Platforms from £550–£790, and Bespoke Web Applications or E-Commerce Stores from £1,200+, with 100% code ownership and zero monthly lock-in.",
      },
      {
        question: "Do you build custom e-commerce stores and Shopify websites?",
        answer:
          "Yes. We build high-converting e-commerce experiences on Shopify, WooCommerce, and custom headless Next.js Commerce. Our stores feature sub-second faceted catalog search, seamless Stripe and Apple Pay checkouts, automated tax and inventory syncing, and mobile-first cart optimization to eliminate checkout drop-off.",
      },
      {
        question: "Can you build custom SaaS MVPs and interactive web applications?",
        answer:
          "Yes. We engineer authenticated client portals, SaaS MVP web applications, dynamic multi-tenant dashboards, and custom business tools. Built on Next.js App Router, Node.js, TypeScript, and serverless databases (PostgreSQL, Supabase), our web apps are fast, secure, and ready to scale.",
      },
    ],
  },
"""

target = "const faqGroups: FaqGroup[] = [\n"
code = code.replace(target, target + new_category)

with open('src/components/FaqSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("FaqSection updated with GEO answers.")
