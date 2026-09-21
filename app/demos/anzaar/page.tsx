"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnzaarHeader } from "@/components/anzaar/AnzaarHeader";
import { AnzaarFooter } from "@/components/anzaar/AnzaarFooter";

export default function AnzaarHome() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <AnzaarHeader />
      
      <main className="relative">
        {/* Grain Overlay */}
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none z-40" />

        {/* 1. Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Video Background Placeholder */}
          <div className="absolute inset-0 bg-[#171411]">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              poster="/demos/anzaar/assets/hero-poster.jpg"
            >
              <source src="/demos/anzaar/assets/anzaar-hero-video.mp4" type="video/mp4" />
            </video>
            {/* Vignette/Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#171411]/80 via-transparent to-[#171411] opacity-90" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#171411]/80" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="font-sans text-[#D8B27A] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
                ANZAAR | Modern Pakistani Dining
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F8F2E8] mb-8 leading-tight">
                Where Fire <br className="hidden md:block"/> Becomes Flavor.
              </h1>
              <p className="font-sans text-[#F8F2E8]/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                A contemporary table shaped by flame, heritage, and the generous spirit of Pakistani hospitality.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/demos/anzaar/menu" 
                  className="px-8 py-4 bg-transparent border border-[#D8B27A] text-[#D8B27A] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#D8B27A] hover:text-[#171411] transition-all duration-500 w-full sm:w-auto"
                >
                  Explore the Menu
                </Link>
                <Link 
                  href="/demos/anzaar/contact" 
                  className="px-8 py-4 bg-[#D8B27A] border border-[#D8B27A] text-[#171411] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#F1D7A5] hover:border-[#F1D7A5] transition-all duration-500 w-full sm:w-auto"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4"
          >
            <span className="font-sans text-[10px] text-[#D8B27A] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
              Scroll to discover
            </span>
            <div className="w-[1px] h-12 bg-[#D8B27A]/30 overflow-hidden relative">
              <motion.div 
                className="w-full h-full bg-[#D8B27A] origin-top"
                animate={{ scaleY: [0, 1, 0], translateY: ['-100%', '0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* 2. Signature Intro */}
        <section className="py-32 px-6 bg-[#171411]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <span className="font-sans text-[#A9672F] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                A Table With a Soul
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F8F2E8] mb-8 leading-snug">
                Crafted slowly.<br/> Enjoyed together.
              </h2>
              <p className="font-sans text-[#F8F2E8]/70 text-lg leading-relaxed font-light">
                At ANZAAR, we believe that the best meals are born from patience and fire. From our slow-cooked karahis to our open-flame grills, every dish is an invitation to gather, share, and linger a little longer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. Signature Dishes */}
        <section className="py-24 px-6 bg-[#100D0B] border-y border-[#D8B27A]/5">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="font-sans text-[#A9672F] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  The Highlights
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#F8F2E8]">Signature Dishes</h2>
              </div>
              <Link 
                href="/demos/anzaar/menu"
                className="inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-[0.15em] text-[#D8B27A] hover:text-[#F1D7A5] transition-colors group"
              >
                View Full Menu
                <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Chicken Karahi", desc: "Classic bone-in chicken slow-cooked in a traditional wok with fresh tomatoes and green chilies.", img: "/demos/anzaar/assets/food-01.jpg" },
                { name: "Chicken Zafrani Boti", desc: "Boneless chicken marinated in rich saffron, cream, and gentle spices, grilled over open coals.", img: "/demos/anzaar/assets/food-02.jpg" },
                { name: "Mutton Seekh Kabab", desc: "Finely minced mutton with aromatic spices, skewered and charred to perfection.", img: "/demos/anzaar/assets/food-03.jpg" },
                { name: "Chicken Biryani", desc: "Fragrant basmati rice layered with spiced chicken, saffron, and fresh herbs.", img: "/demos/anzaar/assets/food-04.jpg" },
                { name: "Alfredo Fettuccine", desc: "Rich and creamy white sauce pasta tossed with grilled chicken and parmesan.", img: "/demos/anzaar/assets/food-05.jpg" },
                { name: "Butter Lava Burger", desc: "A decadent, juicy burger overflowing with our signature melted butter sauce.", img: "/demos/anzaar/assets/food-06.jpg" }
              ].map((dish, i) => (
                <motion.div 
                  key={dish.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#2B1C16]">
                    <div className="absolute inset-0 bg-[#D8B27A]/10 flex items-center justify-center">
                      <span className="text-xs text-[#F8F2E8]/40 font-sans tracking-widest uppercase">Image Placeholder</span>
                    </div>
                    {/* <img src={dish.img} alt={dish.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" /> */}
                  </div>
                  <h3 className="font-serif text-2xl text-[#F8F2E8] mb-3 group-hover:text-[#D8B27A] transition-colors">{dish.name}</h3>
                  <p className="font-sans text-[#F8F2E8]/60 text-sm leading-relaxed font-light">{dish.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Fire / Craft Visual Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#2B1C16]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#171411] via-transparent to-[#171411] z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-0">
             <span className="text-sm text-[#F8F2E8]/30 font-sans tracking-widest uppercase">Fire / Kitchen Video Placeholder</span>
          </div>
          
          <div className="relative z-20 text-center px-6">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-4xl md:text-6xl text-[#F8F2E8] tracking-wide mb-6">
                From the Fire, <br/> With Intention
              </h2>
              <div className="w-16 h-[1px] bg-[#D8B27A] mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* 5. Experience Section */}
        <section className="py-32 px-6 bg-[#171411]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              { title: "The Flavor", desc: "Rooted in tradition but elevated for the modern palate. We source premium spices and ingredients to ensure every bite leaves a lasting impression." },
              { title: "The Room", desc: "Designed for warmth and comfort. Our dining room balances contemporary elegance with intimate lighting, creating the perfect backdrop for any evening." },
              { title: "The Occasion", desc: "Whether it’s a casual dinner, a family celebration, or a quiet night out, ANZAAR is crafted to make every moment feel special." }
            ].map((col, i) => (
              <motion.div 
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-center"
              >
                <h3 className="font-serif text-2xl text-[#D8B27A] mb-6">{col.title}</h3>
                <p className="font-sans text-[#F8F2E8]/70 text-sm leading-loose font-light">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Reservation CTA */}
        <section className="py-32 px-6 bg-[#0a0807] border-t border-[#7E2721]/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7E2721]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-5xl md:text-7xl text-[#F8F2E8] mb-8">Make an Evening of it</h2>
              <p className="font-sans text-[#F8F2E8]/60 text-lg mb-12">Join us for an unforgettable dining experience.</p>
              <Link 
                href="/demos/anzaar/contact" 
                className="inline-flex px-10 py-5 bg-[#D8B27A] text-[#171411] text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#F1D7A5] transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <AnzaarFooter />
    </>
  );
}
