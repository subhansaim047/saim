"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PizzaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to('.pizza-spin', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-20 gap-8 flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-[#F8F6EF]">
      
      {/* Left: Text Content */}
      <div className="z-20 flex flex-col items-center lg:items-start text-center lg:text-left max-w-md px-4">
        <h2 className="font-pacifico text-3xl md:text-4xl text-[#ffc222] mb-2">Why our Pizza best?</h2>
        <h3 className="font-extrabold text-4xl md:text-6xl text-[#282932] mb-4">The highest quality</h3>
        <p className="text-[#666] mb-8">Crafted with the finest ingredients and culinary expertise to deliver an unforgettable dining experience.</p>
        
        <h3 className="font-extrabold text-3xl md:text-4xl text-[#282932] mb-4">Finest Taste</h3>
        <p className="text-[#666]">Crafted with the finest ingredients and culinary expertise to deliver an unforgettable dining experience.</p>
      </div>

      {/* Right: Pizza on Yellow Circle */}
      <div className="relative w-full max-w-[400px] mt-16 lg:mt-0 flex items-center justify-center">
        {/* Yellow Circle */}
        <div className="absolute w-[300px] h-[300px] bg-[#ffc222] rounded-full -z-10"></div>
        
        {/* Animated Pizza */}
        <div className="z-index-10 relative w-[320px] md:w[400px]">
          <img src="/images/pizza_06.webp" alt="Pizza Slice" className="pizza-spin w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default PizzaSection;
