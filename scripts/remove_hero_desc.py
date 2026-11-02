import re

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\HeroSection.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace left column container gap
content = content.replace(
    'className="flex flex-col justify-center gap-4 sm:gap-6 w-full lg:w-[50%] xl:w-[48%] flex-shrink-0"',
    'className="flex flex-col justify-center gap-5 sm:gap-7 lg:gap-8 w-full lg:w-[50%] xl:w-[48%] flex-shrink-0"'
)

# Replace label group gap
content = content.replace(
    'className="flex flex-col gap-2 self-start"',
    'className="flex flex-col gap-2.5 sm:gap-3 self-start"'
)

# Replace tagline margin
content = content.replace(
    'className="pl-1 mt-1"',
    'className="pl-1 mt-1.5 sm:mt-2"'
)

# Replace sub-headline pl and py
content = content.replace(
    'className="border-l-2 border-[#FF4A1C] pl-3.5"',
    'className="border-l-2 border-[#FF4A1C] pl-4 sm:pl-5 py-1"'
)

content = content.replace(
    'className="text-white text-sm sm:text-base md:text-lg font-medium tracking-tight"',
    'className="text-white text-base sm:text-lg md:text-xl font-medium tracking-tight"'
)

content = content.replace(
    'className="text-white/45 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-0.5"',
    'className="text-white/45 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1.5"'
)

# Remove the description paragraph
# Look for pattern from {/* Description */} to </motion.p>
desc_pattern = r'\s*\{/\* Description \*/\}\s*<motion\.p[\s\S]*?<\/motion\.p>'
content = re.sub(desc_pattern, '', content)

# Adjust Sub-headline + CTA wrapper gap
content = content.replace(
    'className="flex flex-col gap-3.5 sm:gap-4.5"',
    'className="flex flex-col gap-6 sm:gap-7 pt-1 sm:pt-2"'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hero section description removed and spacing adjusted successfully!")
