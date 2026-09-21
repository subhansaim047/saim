"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnzaarHeader } from "@/components/anzaar/AnzaarHeader";
import { AnzaarFooter } from "@/components/anzaar/AnzaarFooter";
import { menuData } from "@/data/anzaar-menu";

export default function AnzaarMenu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [searchQuery, setSearchQuery] = useState("");
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Filter logic
  const filteredData = menuData.map(category => {
    const filteredItems = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  // Determine active data
  const displayData = searchQuery ? filteredData : menuData.filter(c => c.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      <AnzaarHeader />
      
      <main className="min-h-screen bg-[#171411] pt-32 pb-24 relative">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
        
        {/* Header */}
        <section className="relative z-10 px-6 max-w-5xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-sans text-[#D8B27A] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              The ANZAAR Table
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#F8F2E8] mb-6">
              A Menu of Fire, <br className="hidden sm:block"/> Craft & Comfort
            </h1>
            <p className="font-sans text-[#F8F2E8]/60 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From open-flame barbecue and karahi to pasta, burgers, pizza, and Chinese favorites, explore the full ANZAAR menu.
            </p>
          </motion.div>
        </section>

        {/* Controls */}
        <section className="relative z-20 px-6 max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search dishes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#100D0B] border border-[#D8B27A]/20 rounded-none px-4 py-3 text-sm font-sans text-[#F8F2E8] placeholder:text-[#F8F2E8]/30 focus:outline-none focus:border-[#D8B27A] transition-colors"
              />
            </div>
            <button className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#D8B27A] hover:text-[#F1D7A5] transition-colors border-b border-[#D8B27A]/30 pb-1">
              Download Menu PDF
            </button>
          </div>

          {/* Categories Tab */}
          {!searchQuery && (
            <div className="relative w-full border-b border-[#D8B27A]/10">
              <div 
                ref={categoriesRef}
                className="flex overflow-x-auto hide-scrollbar gap-8 pb-4 snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {menuData.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`relative shrink-0 text-sm tracking-[0.1em] uppercase font-sans transition-colors snap-start ${
                      activeCategory === cat.category ? "text-[#D8B27A] font-bold" : "text-[#F8F2E8]/40 hover:text-[#F8F2E8]/70"
                    }`}
                  >
                    {cat.category}
                    {activeCategory === cat.category && (
                      <motion.div 
                        layoutId="activeCategory"
                        className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#D8B27A]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Menu Items */}
        <section className="relative z-10 px-6 max-w-4xl mx-auto min-h-[50vh]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={searchQuery ? 'search' : activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {displayData.length === 0 ? (
                <div className="text-center py-20 text-[#F8F2E8]/40 font-sans">
                  No dishes found matching your search.
                </div>
              ) : (
                displayData.map((category) => (
                  <div key={category.category} className="mb-16 last:mb-0">
                    {searchQuery && (
                      <h2 className="font-serif text-3xl text-[#D8B27A] mb-8 pb-4 border-b border-[#D8B27A]/10">
                        {category.category}
                      </h2>
                    )}
                    
                    {category.note && (
                      <p className="text-xs font-sans text-[#A9672F] uppercase tracking-widest mb-8 border border-[#A9672F]/20 inline-block px-3 py-1 rounded-sm">
                        {category.note}
                      </p>
                    )}

                    <div className="grid grid-cols-1 gap-x-12 gap-y-8">
                      {category.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-baseline group">
                          <div className="flex-1 pr-4">
                            <h3 className="font-serif text-xl sm:text-2xl text-[#F8F2E8] group-hover:text-[#D8B27A] transition-colors flex items-center gap-3">
                              <span className="text-[10px] text-[#F8F2E8]/20 font-sans tabular-nums hidden sm:inline-block">{String(item.id).padStart(3, '0')}</span>
                              {item.name}
                            </h3>
                            {item.sizes && (
                              <p className="text-xs font-sans text-[#F8F2E8]/40 mt-1 tracking-wider uppercase">
                                {item.sizes}
                              </p>
                            )}
                          </div>
                          
                          <div className="flex-shrink-0 flex items-baseline gap-2">
                            <span className="text-xs text-[#D8B27A] font-sans font-bold">Rs.</span>
                            <span className="font-sans text-[#F8F2E8] text-lg sm:text-xl tracking-wide">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </section>

      </main>

      <AnzaarFooter />
    </>
  );
}
