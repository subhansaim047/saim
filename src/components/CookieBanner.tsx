"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("saim_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else if (consent === "accepted") {
        updateGoogleConsent("granted");
      }
    } catch {
      // localStorage may fail in private mode
    }

    // Listen to re-open trigger from footer "Cookie Settings"
    const handleReopen = () => setIsVisible(true);
    window.addEventListener("open_cookie_settings", handleReopen);
    return () => window.removeEventListener("open_cookie_settings", handleReopen);
  }, []);

  const updateGoogleConsent = (state: "granted" | "denied") => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }
  };

  const handleConsent = (type: "accepted" | "essential") => {
    try {
      localStorage.setItem("saim_cookie_consent", type);
    } catch {
      // Ignore
    }

    if (type === "accepted") {
      updateGoogleConsent("granted");
      if (typeof window !== "undefined" && typeof (window as any).clarity === "function") {
        (window as any).clarity("consent");
      }
    } else {
      updateGoogleConsent("denied");
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md w-full bg-[#0D0D0D]/95 backdrop-blur-xl border border-white/12 rounded-2xl p-5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] text-[#D4D4D8] transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#BAFF00]/10 border border-[#BAFF00]/25 text-[#BAFF00] flex-shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-semibold text-white flex items-center gap-1.5 tracking-tight">
              <span>Privacy &amp; Cookie Consent</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#BAFF00]" />
            </p>
            <button
              onClick={() => handleConsent("essential")}
              aria-label="Close cookie banner"
              className="w-6 h-6 rounded-full flex items-center justify-center text-white/45 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11.5px] text-white/70 leading-relaxed mb-3.5">
            We use essential storage for site preferences. Optional analytics comply with Google Consent Mode v2 &amp; UK GDPR.{" "}
            <Link href="/cookie-policy" className="underline decoration-[#BAFF00]/60 text-[#BAFF00] hover:text-white transition-colors">
              Cookie Policy
            </Link>{" "}
            ·{" "}
            <Link href="/privacy" className="underline decoration-[#BAFF00]/60 text-[#BAFF00] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleConsent("accepted")}
              className="flex-1 bg-[#BAFF00] text-[#0D0D0D] font-semibold text-xs py-2.5 px-4 rounded-full hover:bg-[#c8ff33] active:scale-[0.98] transition-all text-center cursor-pointer shadow-[0_8px_20px_-6px_rgba(186,255,0,0.45)]"
            >
              Accept All
            </button>
            <button
              onClick={() => handleConsent("essential")}
              className="flex-1 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-medium text-xs py-2.5 px-4 rounded-full active:scale-[0.98] transition-all text-center cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
