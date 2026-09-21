"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const AnzaarHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/demos/anzaar" },
    { name: "Menu", href: "/demos/anzaar/menu" },
    { name: "Our Story", href: "/demos/anzaar/our-story" },
    { name: "Gallery", href: "/demos/anzaar/gallery" },
    { name: "Contact", href: "/demos/anzaar/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled ? "bg-[#171411]/90 backdrop-blur-md border-[#D8B27A]/10 py-3" : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/demos/anzaar" className="relative z-50 flex items-center gap-3">
            <img 
              src="/demos/anzaar/assets/anzaar-logo.jpg" 
              alt="ANZAAR Logo" 
              className="h-10 w-auto rounded-full object-cover"
            />
            <span className="font-serif text-xl font-bold tracking-widest text-[#D8B27A] uppercase hidden sm:block">ANZAAR</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(1, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#D8B27A] ${
                  pathname === link.href ? "text-[#D8B27A]" : "text-[#F8F2E8]/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <Link 
              href="/demos/anzaar/contact" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-[#171411] bg-[#D8B27A] hover:bg-[#F1D7A5] transition-colors duration-300 rounded-sm"
            >
              Reserve a Table
            </Link>
            
            <button 
              className="md:hidden text-[#F8F2E8] hover:text-[#D8B27A] transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#171411] flex flex-col justify-center items-center px-6"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            
            <nav className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-3xl sm:text-4xl tracking-wider uppercase transition-colors ${
                      pathname === link.href ? "text-[#D8B27A]" : "text-[#F8F2E8] hover:text-[#D8B27A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8"
              >
                <Link 
                  href="/demos/anzaar/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase text-[#171411] bg-[#D8B27A] hover:bg-[#F1D7A5] transition-colors duration-300 rounded-sm"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
