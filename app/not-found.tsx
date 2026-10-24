import Link from "next/link";
import { ArrowLeft, Home, Wrench, Briefcase, Mail } from "lucide-react";

export const metadata = {
  title: "Page Not Found (404) | Saim Dev",
  description: "The page you are looking for does not exist or has been moved. Explore our web architecture services or free food safety tools.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] flex flex-col justify-between selection:bg-primary selection:text-black">
      {/* Header Bar */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>Saim Dev</span>
          </Link>
          <Link
            href="/"
            className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full text-center">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full mb-4">
            Error 404
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Page Not Found
          </h1>

          <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md mx-auto">
            The page or resource you requested does not exist or may have been relocated. Use the links below to find what you need.
          </p>

          {/* Helpful Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            <Link
              href="/"
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:bg-white/[0.07] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Home Page
                  </div>
                  <div className="text-xs text-white/50">Next.js agency &amp; pricing</div>
                </div>
              </div>
            </Link>

            <Link
              href="/tools"
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:bg-white/[0.07] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Free Kitchen Tools
                  </div>
                  <div className="text-xs text-white/50">Allergens, costs &amp; recipes</div>
                </div>
              </div>
            </Link>

            <Link
              href="/services"
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:bg-white/[0.07] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Our Services
                  </div>
                  <div className="text-xs text-white/50">Web architecture for UK/EU</div>
                </div>
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:bg-white/[0.07] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Get in Touch
                  </div>
                  <div className="text-xs text-white/50">Direct WhatsApp &amp; enquiry</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-xs text-white/40">
            Need urgent assistance? Message Saim on WhatsApp at{" "}
            <a
              href="https://wa.me/923196526604"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +92 319 6526604
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40">
        © 2026 Saim Dev · All rights reserved.
      </footer>
    </div>
  );
}
