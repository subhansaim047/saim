import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] selection:bg-emerald-500 selection:text-black font-['Kanit'] overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default App;
