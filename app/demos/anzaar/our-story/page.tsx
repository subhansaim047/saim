"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnzaarHeader } from "@/components/anzaar/AnzaarHeader";
import { AnzaarFooter } from "@/components/anzaar/AnzaarFooter";

export default function AnzaarOurStory() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <AnzaarHeader />
      
      <main className="min-h-screen bg-[#171411] relative overflow-hidden">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

        {/* Hero */}
        <section className="relative pt-40 pb-20 px-6 z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <span className="font-sans text-[#D8B27A] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
              The Heritage
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F8F2E8] leading-tight mb-8">
              Rooted in Fire.<br/>Created for Connection.
            </h1>
          </motion.div>
        </section>

        {/* Philosophy Image */}
        <section className="px-6 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video bg-[#2B1C16] w-full overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[#171411]/50 border border-[#D8B27A]/20">
                <span className="text-sm font-sans tracking-widest text-[#F8F2E8]/40 uppercase">Interior / Fire Image Placeholder</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F8F2E8] mb-8 leading-relaxed">
                Fire is our foundation. It transforms raw ingredients into bold flavors and turns a simple meal into an experience.
              </h2>
              <p className="font-sans text-[#F8F2E8]/60 text-lg leading-loose font-light">
                At ANZAAR, we honor the ancient connection between flame, patience, spice, and craft. Our menu reflects the generous spirit of Pakistani hospitality, blending traditional techniques with contemporary refinement. From the slow simmer of a handi to the fierce heat of a tandoor, every element is curated to bring warmth to the table.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline / Three-Part Story */}
        <section className="py-24 px-6 relative z-10 bg-[#100D0B] border-y border-[#D8B27A]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { title: "The Source", desc: "It begins with ingredients. We source local spices, premium cuts, and fresh produce to ensure integrity from the very start." },
              { title: "The Craft", desc: "It requires patience. Our chefs balance the intensity of the grill with the slow, meticulous simmering of traditional curries." },
              { title: "The Table", desc: "It ends with connection. Food is merely the excuse; the true purpose of ANZAAR is the time spent together over a shared meal." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[1px] h-12 bg-[#D8B27A]/30 mb-8" />
                <h3 className="font-serif text-2xl text-[#D8B27A] mb-4">{item.title}</h3>
                <p className="font-sans text-[#F8F2E8]/70 text-sm leading-loose font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hospitality Statement & CTA */}
        <section className="py-40 px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-[#F8F2E8] leading-snug mb-12">
              "Every plate is an invitation to slow down, gather close, and stay a little longer."
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/demos/anzaar/menu" 
                className="px-8 py-4 bg-transparent border border-[#D8B27A] text-[#D8B27A] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#D8B27A] hover:text-[#171411] transition-all duration-500 w-full sm:w-auto"
              >
                View Menu
              </Link>
              <Link 
                href="/demos/anzaar/contact" 
                className="px-8 py-4 bg-[#D8B27A] border border-[#D8B27A] text-[#171411] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#F1D7A5] hover:border-[#F1D7A5] transition-all duration-500 w-full sm:w-auto"
              >
                Make a Reservation
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <AnzaarFooter />
    </>
  );
}
