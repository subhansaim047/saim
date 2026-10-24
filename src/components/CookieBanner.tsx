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
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md w-full bg-[#111113]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl text-[#E1E0CC] transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary flex-shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-semibold text-white flex items-center gap-1.5">
              <span>Privacy &amp; Cookie Consent</span>
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            </p>
            <button
              onClick={() => handleConsent("essential")}
              aria-label="Close cookie banner"
              className="text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-white/70 leading-relaxed mb-4">
            We use essential local storage to remember your privacy preference and persist interactive kitchen tool edits on your device. Non-essential cookies and analytics comply with Google Consent Mode v2 and UK GDPR. Learn more in our{" "}
            <Link href="/cookie-policy" className="underline text-primary hover:text-white transition-colors">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline text-primary hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleConsent("accepted")}
              className="flex-1 bg-primary text-black font-semibold text-xs py-2 px-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-center cursor-pointer shadow-md"
            >
              Accept All
            </button>
            <button
              onClick={() => handleConsent("essential")}
              className="flex-1 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs py-2 px-3.5 rounded-full active:scale-95 transition-all text-center cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
