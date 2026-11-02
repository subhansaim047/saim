"""
Polish app/services/takeaway-web-design/page.tsx
- Keyword-aligned H1
- 48-word direct answer intro
- Active voice
"""
p = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\services\takeaway-web-design\page.tsx"
with open(p, "r", encoding="utf-8") as f:
    content = f.read().replace("\r\n", "\n")

target = """          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Stop Paying 30%+ Just Eat &amp; Deliveroo Fees
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Stop paying excessive portal commissions today. We build lightning-fast Next.js direct ordering websites for UK takeaways, chip shops, and pizzerias with full code ownership, zero commissions, and instant mobile ordering.
          </p>"""

replacement = """          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Takeaway Website Design UK — Stop Paying 30%+ Portal Fees
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Saim Dev delivers bespoke takeaway website design for UK restaurants, chip shops, and pizzerias starting from £250. Our sub-second Next.js platforms let customers order directly via WhatsApp or online checkout with zero commission fees, instant mobile loading, and built-in Natasha&apos;s Law 14-allergen filtering.
          </p>"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated takeaway-web-design page.tsx!")
else:
    print("Target not found in takeaway-web-design page.tsx")
