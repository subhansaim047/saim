"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const pizzaParts = Array.from({ length: 10 }, (_, i) => `/images/pizza-part-${String(i + 1).padStart(2, '0')}.png`);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the text in from bottom
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animate pizza slices floating randomly around
    gsap.utils.toArray('.pizza-slice').forEach((slice: any, i) => {
      // Random starting position
      gsap.set(slice, {
        x: gsap.utils.random(-300, 300),
        y: gsap.utils.random(-300, 300),
        rotation: gsap.utils.random(-180, 180),
        scale: 0
      });

      // Animate to random floating position
      gsap.to(slice, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        rotation: gsap.utils.random(-20, 20),
        scale: gsap.utils.random(0.8, 1.2),
        duration: gsap.utils.random(2, 4),
        ease: 'power2.out',
        delay: gsap.utils.random(0, 0.5)
      });
      
      // Infinite float
      gsap.to(slice, {
        y: "+=30",
        rotation: "+=10",
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <img src="/images/banner-bg-04.png" alt="Pattern" className="wmfull h-full object-cover" />
      </div>

      {/* Floating Pizza Slices Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
         {pizzaParts.map((src, i) => (
           <img 
             key={i} 
             src={src} 
             className="pizza-slice absolute w-32 md:w-48 object-contain" 
             alt="Pizza Part" 
           />
         ))}
      </div>

      {/* Center Content */}
      <div className="z-10 text-center flex flex-col items-center">
        
        {/* Subtitle */}
        <div className="hero-text flex items-center gap-4 mb-4">
          <img src="/images/tiltle-dot-img-01.png" alt="Dots" className="w-10" />
          <h2 className="font-pacifico text-5xl md:text-6xl text-[#ffc222]">Best Choice</h2>
          <img src="/images/tiltle-dot-img-02.png" alt="Dots" className="w-12" />
        </div>

        {/* Main Title */}
        <h1 className="hero-text font-outfit text-8xl md:text-[110px] font-bold uppercase text-white leading-none mb-2">
          FitBite<br/>Pizza
        </h1>

        {/* Buttons */}
        <div className="hero-text flex flex-col md:flex-row gap-4 mt-10">
          <a href="tel:03011337766" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase transition-all hover:bg-gray-200">
            Order Now
          </a>
          <a href="/menu" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase transition-all hover:bg-white hover:text-black">
            See Menu
          </a>
        </div>
      </div>
    </section>
  );
}
