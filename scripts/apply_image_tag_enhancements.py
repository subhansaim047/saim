import re, os

def update_file(path, replacements):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    orig = content
    for old, new in replacements:
        if old not in content:
            print(f"WARNING: Target not found in {path}:\n{repr(old[:60])}...")
        content = content.replace(old, new)
    
    if content != orig:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        print(f"UPDATED: {path}")
    else:
        print(f"NO CHANGES: {path}")

def run():
    # FooterSection.tsx
    update_file("src/components/FooterSection.tsx", [
        (
            '<img\n                src="/saim-dev-logo.jpg"\n                alt="Saim Dev Logo"\n                className="w-full h-full object-cover rounded-full"\n              />',
            '<img\n                src="/saim-dev-logo.jpg"\n                alt="Saim Dev - Next.js Development Studio"\n                width={36}\n                height={36}\n                loading="lazy"\n                decoding="async"\n                className="w-full h-full object-cover rounded-full"\n              />'
        )
    ])

    # ChatPanel.tsx
    update_file("src/components/ChatPanel.tsx", [
        (
            '<img\n          src="/saim-dev-logo.jpg"\n          alt="Saim Dev"\n          className="w-7 h-7 rounded-full object-cover border border-white/10 flex-shrink-0"\n        />',
            '<img\n          src="/saim-dev-logo.jpg"\n          alt="Saim Dev - AI Assistant & Live Tech Support"\n          width={28}\n          height={28}\n          loading="lazy"\n          decoding="async"\n          className="w-7 h-7 rounded-full object-cover border border-white/10 flex-shrink-0"\n        />'
        )
    ])

    # BlogsPage.tsx
    update_file("src/components/BlogsPage.tsx", [
        (
            '<img\n            src="/saim-dev-logo.jpg"\n            alt="Saim Dev"\n            className="w-7 h-7 rounded-full object-cover border border-white/15"\n          />',
            '<img\n            src="/saim-dev-logo.jpg"\n            alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist"\n            width={28}\n            height={28}\n            loading="lazy"\n            decoding="async"\n            className="w-7 h-7 rounded-full object-cover border border-white/15"\n          />'
        )
    ])

    # BlogPost1Page.tsx
    update_file("src/components/BlogPost1Page.tsx", [
        (
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/15" />'
        ),
        (
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={56} height={56} loading="lazy" decoding="async" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />'
        )
    ])

    # BlogPost2Page.tsx
    update_file("src/components/BlogPost2Page.tsx", [
        (
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/15" />'
        ),
        (
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={56} height={56} loading="lazy" decoding="async" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />'
        )
    ])

    # BlogPost3Page.tsx
    update_file("src/components/BlogPost3Page.tsx", [
        (
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-10 h-10 rounded-full border border-white/20" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={40} height={40} loading="lazy" decoding="async" className="w-10 h-10 rounded-full border border-white/20" />'
        ),
        (
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={56} height={56} loading="lazy" decoding="async" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />'
        )
    ])

    # Check BlogPostAllergenMatrix and others for the first line:
    for bf in [
        "src/components/blog/BlogPostAllergenMatrix.tsx",
        "src/components/blog/BlogPostChecklist.tsx",
        "src/components/blog/BlogPostFoodCost.tsx",
        "src/components/blog/BlogPostHaccpPlan.tsx",
        "src/components/blog/BlogPostHygieneQuiz.tsx",
        "src/components/blog/BlogPostRecipeScaler.tsx"
    ]:
        update_file(bf, [
            (
                '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-primary/30" />',
                '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-primary/30" />'
            ),
            (
                '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/20" />',
                '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/20" />'
            )
        ])

if __name__ == "__main__":
    run()
