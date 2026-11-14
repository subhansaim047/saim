"use client";

import React, { useState } from "react";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import { getClaim } from "../lib/claims";

const OPENING_HOURS_ROWS = [
  { day: "Mon – Fri", hours: "09:00 – 18:00 GMT" },
  { day: "Saturday", hours: "10:00 – 16:00 GMT" },
  { day: "Sunday", hours: "Closed (Async WhatsApp)" },
];

/**
 * Displays verified studio working hours (UK GMT) alongside a zero-overhead
 * click-to-load interactive UK service coverage map facade.
 */
export const StudioHoursAndMapCard: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const replyNote =
    getClaim("reply-speed") || "Replies on WhatsApp and email during working hours.";

  return (
    <div className="pt-8 mt-8 border-t border-[#020612]/[0.08] grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
      {/* Left: Business Hours */}
      <div className="rounded-2xl bg-white border border-[#020612]/[0.08] p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" aria-hidden="true" />
              <h3 className="font-heading text-sm font-bold tracking-tight text-[#020612]">
                Business Hours
              </h3>
            </div>
            <span className="shrink-0 whitespace-nowrap text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/25 text-[#1D4ED8]">
              UK GMT / BST
            </span>
          </div>

          <dl className="divide-y divide-[#020612]/[0.07] text-xs">
            {OPENING_HOURS_ROWS.map((row) => (
              <div
                key={row.day}
                className="py-2.5 flex items-center justify-between gap-4"
              >
                <dt className="text-[#020612]/65 font-semibold whitespace-nowrap shrink-0">{row.day}</dt>
                <dd className="text-[#020612] font-mono font-medium text-[11px] sm:text-xs text-right whitespace-nowrap">
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-[11px] text-[#020612]/60 font-normal leading-relaxed pt-2 border-t border-[#020612]/[0.07]">
          {replyNote}
        </p>
      </div>

      {/* Right: Remote Service Coverage Map */}
      <div className="rounded-2xl bg-white border border-[#020612]/[0.08] p-5 sm:p-6 flex flex-col justify-between gap-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" aria-hidden="true" />
            <h3 className="font-heading text-sm font-bold tracking-tight text-[#020612]">
              Service Coverage Map
            </h3>
          </div>
          <span className="shrink-0 whitespace-nowrap text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/25 text-[#1D4ED8]">
            Remote UK &amp; EU
          </span>
        </div>

        <p className="text-[11px] text-[#020612]/65 font-normal leading-relaxed">
          UK Registered Agency • Based in Pakistan. Serving businesses across London, Manchester, Birmingham, Edinburgh &amp; Europe 100% remotely.
        </p>

        <div className="overflow-hidden rounded-xl border border-[#020612]/[0.08] bg-[#0D0D0D] relative h-40 sm:h-44 flex items-center justify-center">
          {mapLoaded ? (
            <iframe
              title="Saim Dev Remote Service Coverage Map - United Kingdom"
              src="https://maps.google.com/maps?q=United+Kingdom&t=&z=4&ie=UTF8&iwloc=&output=embed"
              referrerPolicy="no-referrer-when-downgrade"
              width={600}
              height={180}
              className="w-full h-full border-0"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-2.5 px-4 text-center relative"
              style={{
                backgroundImage: "url(/rh-exact/footer/map-2304.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#0D0D0D]/60" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#BAFF00]">
                  UK · London · Manchester · Birmingham · EU
                </span>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0D0D0D] hover:bg-[#BAFF00] text-xs font-semibold transition-colors cursor-pointer shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Load Interactive Map</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <a
            href="https://maps.google.com/?q=United+Kingdom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1D4ED8] hover:text-[#020612] transition-colors"
          >
            <span>View UK coverage area on Google Maps</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
