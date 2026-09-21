import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ['latin'], 
  variable: '--font-cormorant' 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: 'ANZAAR | Modern Pakistani Dining',
  description: 'Where Fire Becomes Flavor. A contemporary table shaped by flame, heritage, and the generous spirit of Pakistani hospitality.',
};

export default function AnzaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[#171411] text-[#F8F2E8] font-sans selection:bg-[#7E2721] selection:text-[#F8F2E8]`}>
      {children}
    </div>
  );
}
