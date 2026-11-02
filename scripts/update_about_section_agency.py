# scripts/update_about_section_agency.py

with open('src/components/AboutSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_segments = """const aboutSegments = [
  { text: "We are web architects,", className: "font-normal text-white" },
  { text: "engineering high-converting platforms.", className: "italic font-serif text-white/90" },
  {
    text: "Specialized in bespoke web design, lead conversion, and performance optimization.",
    className: "font-normal text-white/70",
  },
];

const paragraphText =
  "Our studio engineers fast, modern, high-converting platforms for service leaders — dentists, mechanics, salons, contractors, and ambitious brands. Together, we craft digital platforms designed to rank, load instantly, and turn visitors into loyal, paying clients.";"""

new_segments = """const aboutSegments = [
  { text: "We are digital product architects,", className: "font-normal text-white" },
  { text: "engineering bespoke websites & web apps.", className: "italic font-serif text-white/90" },
  {
    text: "Specialized in custom software, e-commerce, headless CMS, and sub-second performance.",
    className: "font-normal text-white/70",
  },
];

const paragraphText =
  "Our studio engineers bespoke digital flagships and full-stack web software for ambitious companies — from e-commerce brands and SaaS startups to professional services and enterprise teams. We combine modern Next.js and TypeScript engineering with conversion-focused design to build platforms that rank, load in milliseconds, and turn visitors into paying clients.";"""

code = code.replace(old_segments, new_segments)

old_ai_block = """              Saim Dev is an independent Next.js web engineering studio that builds custom websites, ecommerce stores, and high-performance digital platforms for UK small businesses from £250. Every website includes sub-second edge speeds, full code ownership, built-in technical SEO, and direct developer communication via WhatsApp without recurring monthly agency retainers."""

new_ai_block = """              Saim Dev is an independent UK full-stack digital engineering studio building bespoke business websites, Shopify & WooCommerce stores, custom Next.js SaaS web applications, and headless CMS platforms. We provide guaranteed sub-second performance, 100% source code ownership, built-in structured schema, and direct senior engineer collaboration with zero agency markups or mandatory monthly retainers."""

code = code.replace(old_ai_block, new_ai_block)

with open('src/components/AboutSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("AboutSection updated successfully.")
