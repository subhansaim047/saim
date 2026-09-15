import type { Metadata } from "next";
import { Outfit, Pacifico } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitBite Pizza",
  description: "Crafted with the finest ingredients and culinary expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${pacifico.variable} antialiased bg-[#F8F6EF] font-outfit text-[#353945]`}>
        {children}
      </body>
    </html>
  );
}
