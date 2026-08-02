import React from 'react';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] selection:bg-emerald-500 selection:text-black">
      <HeroSection />
    </main>
  );
}
