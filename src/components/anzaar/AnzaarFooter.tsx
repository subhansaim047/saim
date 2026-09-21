import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const AnzaarFooter = () => {
  return (
    <footer className="bg-[#100D0B] border-t border-[#D8B27A]/10 pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/demos/anzaar" className="inline-block mb-6">
              <img 
                src="/demos/anzaar/assets/anzaar-logo.jpg" 
                alt="ANZAAR Logo" 
                className="h-16 w-auto rounded-full object-cover"
              />
            </Link>
            <p className="text-[#F8F2E8]/60 text-sm leading-relaxed mb-6 font-sans">
              Slow craft. Bold flavor. Memorable evenings. A modern expression of Pakistani hospitality.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/anzaar_restaurant" target="_blank" rel="noopener noreferrer" className="text-[#F8F2E8]/60 hover:text-[#D8B27A] transition-colors p-2 -ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-serif text-[#D8B27A] text-lg tracking-widest uppercase mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-[#F8F2E8]/60 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A9672F] shrink-0" />
                <a href="https://maps.app.goo.gl/BQZR5eSnnjG1gJoT6" target="_blank" rel="noopener noreferrer" className="hover:text-[#D8B27A] transition-colors">
                  College Rd, Jalalpur Ghumman<br/>
                  Daska, 51010, Pakistan
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#A9672F] shrink-0" />
                <a href="tel:03314333355" className="hover:text-[#D8B27A] transition-colors">0331 4333355</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#A9672F] shrink-0" />
                <a href="mailto:contact@anzaar.com" className="hover:text-[#D8B27A] transition-colors">contact@anzaar.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-[#D8B27A] text-lg tracking-widest uppercase mb-6">Hours</h4>
            <ul className="space-y-3 text-sm text-[#F8F2E8]/60 font-sans">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>2:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>12:00 PM - 12:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-[#D8B27A] text-lg tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-[#F8F2E8]/60 font-sans uppercase tracking-wider">
              <li><Link href="/demos/anzaar/menu" className="hover:text-[#D8B27A] transition-colors">Menu</Link></li>
              <li><Link href="/demos/anzaar/our-story" className="hover:text-[#D8B27A] transition-colors">Our Story</Link></li>
              <li><Link href="/demos/anzaar/gallery" className="hover:text-[#D8B27A] transition-colors">Gallery</Link></li>
              <li><Link href="/demos/anzaar/contact" className="hover:text-[#D8B27A] transition-colors">Reservations</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D8B27A]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8F2E8]/40 font-sans">
          <p>&copy; {new Date().getFullYear()} ANZAAR Restaurant. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-right">
            <span>Prices are exclusive of prevailing GST + 5% service charges.</span>
            <span>Please inform your server about any food allergies.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
