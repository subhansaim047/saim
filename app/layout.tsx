import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import '../src/index.css'; // Global CSS

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ['latin'], variable: '--font-instrument' });

export const metadata: Metadata = {
  title: 'Saim Dev - Full Stack Web Developer | Next.js, React, Node.js',
  description: 'Custom high-performance websites for businesses. Built with Next.js, React, and Node.js. Fast delivery in 5-10 days. Starting from $500.',
  metadataBase: new URL('https://www.saimdev.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saim Dev - Full Stack Web Developer',
    description: 'Custom high-performance websites for businesses. Fast delivery in 5-10 days.',
    url: '/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrument.variable} bg-black text-[#E1E0CC] antialiased selection:bg-primary selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
