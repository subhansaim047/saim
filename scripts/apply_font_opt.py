with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove the two blocking @imports
old_imports = '''@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,400&display=swap");
@import url("https://db.onlinewebfonts.com/c/e55e9079ee863276569c8a68d776ef04?family=Futura+Md+BT+Medium");'''

if old_imports in css:
    css = css.replace(old_imports + "\n\n", "")
    print("Removed blocking @imports from src/index.css")
elif '@import url("https://db.onlinewebfonts.com' in css:
    lines = [l for l in css.splitlines() if 'onlinewebfonts' not in l and 'fonts.googleapis.com' not in l]
    css = "\n".join(lines)
    print("Filtered @imports from src/index.css")

# Update universal font family to use next/font variable
css = css.replace(
    "* {\n  font-family: 'Almarai', 'Inter', 'Futura Md BT Medium', system-ui, -apple-system, sans-serif;\n}",
    "* {\n  font-family: var(--font-inter), system-ui, -apple-system, sans-serif;\n}"
)

with open('src/index.css', 'w', encoding='utf-8', newline='') as f:
    f.write(css)

# Update app/layout.tsx
with open('app/layout.tsx', 'r', encoding='utf-8') as f:
    layout = f.read()

layout = layout.replace(
    "import { Inter, Instrument_Serif } from 'next/font/google';",
    "import { Inter, Instrument_Serif, Fraunces } from 'next/font/google';"
)
layout = layout.replace(
    "const instrument = Instrument_Serif({ weight: \"400\", style: [\"normal\", \"italic\"], subsets: ['latin'], variable: '--font-instrument' });",
    "const instrument = Instrument_Serif({ weight: \"400\", style: [\"normal\", \"italic\"], subsets: ['latin'], variable: '--font-instrument' });\nconst fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });"
)
layout = layout.replace(
    "${inter.variable} ${instrument.variable}",
    "${inter.variable} ${instrument.variable} ${fraunces.variable}"
)

with open('app/layout.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(layout)

# Update HeroSection.tsx to use var(--font-fraunces)
with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    hero = f.read()

hero = hero.replace(
    "fontFamily: \"'Fraunces', Georgia, serif\"",
    "fontFamily: \"var(--font-fraunces), 'Fraunces', Georgia, serif\""
)

with open('src/components/HeroSection.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(hero)

# Update BenefitsSection.tsx to change preload="auto" to preload="none"
with open('src/components/BenefitsSection.tsx', 'r', encoding='utf-8') as f:
    benefits = f.read()

benefits = benefits.replace('preload="auto"', 'preload="none"')

with open('src/components/BenefitsSection.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(benefits)

print("Optimization script executed successfully.")
