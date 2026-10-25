with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = None
end_idx = None

for i, line in enumerate(lines):
    if 'RIGHT COLUMN: Double-Bezel Concentric Showcase Frame' in line:
        start_idx = i
    if start_idx is not None and i > start_idx and '</motion.div>' in line:
        # Check if this closes the right column motion.div
        # The inner one closes at some point, outer closes before line 275
        pass

# Let's find lines 218 to 273 exactly:
new_lines = lines[:217] + [
'''          {/* RIGHT COLUMN: Animated Marquee Grid — Restored Original Clean Style */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex w-full lg:w-[50%] xl:w-[52%] h-[600px] xl:h-[75vh] relative overflow-hidden rounded-2xl flex-shrink-0"
          >
            {/* Fade Masks */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

            <div className="flex gap-4 w-full h-full relative z-10 pt-8">
              {/* Column 1 - Scrolling UP */}
              <div className="w-1/2 h-full flex flex-col relative">
                <motion.div 
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  className="flex flex-col gap-4 w-full"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-4 w-full">
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-1.webp" alt="Performance" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" />
                      </div>
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-2.webp" alt="UI Design" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 - Scrolling DOWN */}
              <div className="w-1/2 h-full flex flex-col relative pt-16">
                <motion.div 
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                  className="flex flex-col gap-4 w-full"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-4 w-full">
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-3.webp" alt="Backend" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" />
                      </div>
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-4.webp" alt="Tech Stack" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
'''
]

# Find where the bottom glow starts
for i, line in enumerate(lines):
    if 'Bottom border hairline glow' in line:
        new_lines += lines[i-1:]
        break

with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Successfully restored clean HeroSection marquee')
