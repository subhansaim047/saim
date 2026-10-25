import os

replacements = [
    (
        "src/components/HeroSection.tsx",
        [
            ('bg-[#0A0A0A] relative box-border overflow-hidden', 'bg-black relative box-border overflow-hidden'),
            ('bg-[#0D0D0D] border border-white/[0.08]', 'bg-black border border-white/[0.08]'),
        ]
    ),
    (
        "src/components/AboutSection.tsx",
        [
            ('className="bg-[#0A0A0A] py-20', 'className="bg-black py-20'),
        ]
    ),
    (
        "src/components/PerformanceSection.tsx",
        [
            ('className="bg-[#0A0A0A] text-white', 'className="bg-black text-white'),
        ]
    ),
    (
        "src/components/TechStackSection.tsx",
        [
            ('className="bg-[#0A0A0A] text-white', 'className="bg-black text-white'),
        ]
    ),
    (
        "src/components/ProcessSection.tsx",
        [
            ('className="relative w-full bg-[#0A0A0A] py-20', 'className="relative w-full bg-black py-20'),
        ]
    ),
    (
        "src/components/PricingSection.tsx",
        [
            ('className="relative w-full bg-[#0A0A0A] py-20', 'className="relative w-full bg-black py-20'),
        ]
    ),
    (
        "src/components/FaqSection.tsx",
        [
            ('className="relative w-full bg-[#0A0A0A] py-20', 'className="relative w-full bg-black py-20'),
        ]
    ),
    (
        "src/components/ContactSection.tsx",
        [
            ('className="relative w-full bg-[#0A0A0A] text-white', 'className="relative w-full bg-black text-white'),
        ]
    ),
    (
        "src/components/MarqueeSection.tsx",
        [
            ('className="bg-[#0C0C0C] py-16', 'className="bg-black py-16'),
        ]
    ),
    (
        "src/components/ProjectsSection.tsx",
        [
            ('className="bg-[#0C0C0C] rounded-t-', 'className="bg-black rounded-t-'),
        ]
    ),
    (
        "src/components/ContactPage.tsx",
        [
            ('className="min-h-screen bg-[#0A0A0A] text-white"', 'className="min-h-screen bg-black text-white"'),
        ]
    ),
    (
        "app/nextjs-developer-uk/page.tsx",
        [
            ('bg-[#08080a]', 'bg-black'),
        ]
    ),
    (
        "app/page.tsx",
        [
            ('<main className="min-h-screen overflow-x-hidden">', '<main className="min-h-screen overflow-x-hidden bg-black">'),
        ]
    ),
    (
        "src/index.css",
        [
            ('--surface-deep: #0A0A0A;', '--surface-deep: #000000;'),
            (
                'html {\n  scroll-behavior: smooth;\n  background-color: #000000;\n  color: #E1E0CC;\n}',
                'html, body {\n  scroll-behavior: smooth;\n  background-color: #000000 !important;\n  color: #E1E0CC;\n}'
            ),
        ]
    )
]

for file_rel, pairs in replacements:
    fpath = os.path.normpath(file_rel)
    if not os.path.exists(fpath):
        print(f"File not found: {fpath}")
        continue
    
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    modified = False
    for target, repl in pairs:
        # Handle CRLF vs LF
        normalized_target = target.replace("\r\n", "\n")
        normalized_content = content.replace("\r\n", "\n")
        if normalized_target in normalized_content:
            normalized_content = normalized_content.replace(normalized_target, repl.replace("\r\n", "\n"))
            content = normalized_content
            modified = True
            print(f"[OK] Replaced in {file_rel}: {target[:40]}...")
        else:
            print(f"[WARN] Target not found in {file_rel}: {target[:40]}...")
    
    if modified:
        with open(fpath, "w", encoding="utf-8", newline="\n") as f:
            f.write(content)
        print(f"Saved: {file_rel}")
