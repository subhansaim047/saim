path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\HeroSection.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update container padding: increase top padding to avoid navbar overlap, increase bottom padding to lift button up
content = content.replace(
    'className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-14 pt-20 pb-6 gap-6 lg:gap-12"',
    'className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-14 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 gap-6 lg:gap-10"'
)

# 2. Update left column gap from too large (gap-5 sm:gap-7 lg:gap-8) to balanced (gap-3.5 sm:gap-4.5 lg:gap-5)
content = content.replace(
    'className="flex flex-col justify-center gap-5 sm:gap-7 lg:gap-8 w-full lg:w-[50%] xl:w-[48%] flex-shrink-0"',
    'className="flex flex-col justify-center gap-3.5 sm:gap-4.5 lg:gap-5 w-full lg:w-[50%] xl:w-[48%] flex-shrink-0"'
)

# 3. Update sub-headline wrapper gap
content = content.replace(
    'className="flex flex-col gap-6 sm:gap-7 pt-1 sm:pt-2"',
    'className="flex flex-col gap-3.5 sm:gap-4.5 pt-0.5"'
)

# 4. Update CTA button wrapper pt
content = content.replace(
    'className="flex flex-wrap items-center gap-3 pt-2"',
    'className="flex flex-wrap items-center gap-3 pt-0.5"'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated HeroSection layout successfully!")
