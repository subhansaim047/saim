"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnzaarHeader } from "@/components/anzaar/AnzaarHeader";
import { AnzaarFooter } from "@/components/anzaar/AnzaarFooter";
import { X } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  { id: 1, category: "Food", src: "/demos/anzaar/assets/food-01.jpg", size: "large" },
  { id: 2, category: "The Room", src: "/demos/anzaar/assets/interior-01.jpg", size: "small" },
  { id: 3, category: "Fire & Detail", src: "/demos/anzaar/assets/fire-01.jpg", size: "small" },
  { id: 4, category: "Food", src: "/demos/anzaar/assets/food-02.jpg", size: "medium" },
  { id: 5, category: "The Room", src: "/demos/anzaar/assets/interior-02.jpg", size: "medium" },
  { id: 6, category: "Food", src: "/demos/anzaar/assets/food-03.jpg", size: "large" },
  { id: 7, category: "Fire & Detail", src: "/demos/anzaar/assets/detail-01.jpg", size: "small" },
  { id: 8, category: "Food", src: "/demos/anzaar/assets/food-04.jpg", size: "small" },
  { id: 9, category: "The Room", src: "/demos/anzaar/assets/interior-03.jpg", size: "medium" }
];

export default function AnzaarGallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Food", "The Room", "Fire & Detail"];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <AnzaarHeader />
      
      <main className="min-h-screen bg-[#171411] pt-32 pb-24 relative">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
        
        {/* Header */}
        <section className="relative z-10 px-6 max-w-4xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-5xl md:text-6xl text-[#F8F2E8] mb-6">Gallery</h1>
            <p className="font-sans text-[#F8F2E8]/60 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              A visual exploration of our food, fire, and atmosphere.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="relative z-10 px-6 max-w-7xl mx-auto mb-16 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative text-xs tracking-[0.15em] uppercase font-sans transition-colors pb-2 ${
                  filter === cat ? "text-[#D8B27A] font-bold" : "text-[#F8F2E8]/40 hover:text-[#F8F2E8]/70"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="galleryFilter"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D8B27A]"
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="relative z-10 px-6 max-w-7xl mx-auto min-h-[50vh]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxImage(img.src)}
                  className={`relative cursor-pointer overflow-hidden group bg-[#2B1C16] border border-[#D8B27A]/10 ${
                    img.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-sans tracking-widest text-[#F8F2E8]/30 uppercase text-center px-4">
                      {img.category} <br/> Image Placeholder
                    </span>
                  </div>
                  {/* <img src={img.src} alt={img.category} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" /> */}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[#F8F2E8] font-sans text-xs tracking-[0.2em] uppercase border border-[#F8F2E8]/30 px-4 py-2">View</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative z-10 flex flex-col items-center text-center mt-20 border-t border-[#D8B27A]/10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl text-[#F8F2E8] mb-8">See You At The Table</h2>
            <Link 
              href="/demos/anzaar/contact" 
              className="px-8 py-4 bg-[#D8B27A] text-[#171411] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#F1D7A5] transition-colors inline-block"
            >
              Reserve a Table
            </Link>
          </motion.div>
        </section>

      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#171411]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-[#F8F2E8]/60 hover:text-[#D8B27A] transition-colors p-2"
              onClick={() => setLightboxImage(null)}
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video bg-[#2B1C16] flex items-center justify-center border border-[#D8B27A]/20" onClick={e => e.stopPropagation()}>
               <span className="text-sm font-sans tracking-widest text-[#F8F2E8]/40 uppercase">Full Size Image Placeholder</span>
               {/* <img src={lightboxImage} alt="Fullscreen" className="w-full h-full object-contain" /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnzaarFooter />
    </>
  );
}
