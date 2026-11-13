"use client";

import React from "react";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import { getClaim } from "../lib/claims";

const OPENING_HOURS_ROWS = [
  { day: "Mon – Fri", hours: "09:00 – 18:00 GMT" },
  { day: "Saturday", hours: "10:00 – 16:00 GMT" },
  { day: "Sunday", hours: "Closed (Async WhatsApp)" },
];

/**
 * Displays verified studio working hours (UK GMT) alongside a lazy-loaded
 * remote United Kingdom service coverage Google Map embed.
 */
export const StudioHoursAndMapCard: React.FC = () => {
  const replyNote =
    getClaim("reply-speed") || "Replies on WhatsApp and email during working hours.";

  return (
    <div className="pt-8 mt-8 border-t border-black/[0.08] grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
      {/* Left: Business Hours */}
      <div className="rounded-2xl bg-[#FAFAFA] border border-black/[0.08] p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" aria-hidden="true" />
              <h3 className="text-sm font-semibold tracking-tight text-[#111115]">
                Business Hours
              </h3>
            </div>
            <span className="shrink-0 whitespace-nowrap text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-black/[0.08] text-black/65">
              UK GMT / BST
            </span>
          </div>

          <dl className="divide-y divide-black/[0.07] text-xs">
            {OPENING_HOURS_ROWS.map((row) => (
              <div
                key={row.day}
                className="py-2.5 flex items-center justify-between gap-4"
              >
                <dt className="text-black/65 font-medium whitespace-nowrap shrink-0">{row.day}</dt>
                <dd className="text-[#111115] font-mono text-[11px] sm:text-xs text-right whitespace-nowrap">
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-[11px] text-black/55 font-light leading-relaxed pt-2 border-t border-black/[0.06]">
          {replyNote}
        </p>
      </div>

      {/* Right: Remote Service Coverage Map */}
      <div className="rounded-2xl bg-[#FAFAFA] border border-black/[0.08] p-5 sm:p-6 flex flex-col justify-between gap-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" aria-hidden="true" />
            <h3 className="text-sm font-semibold tracking-tight text-[#111115]">
              Service Coverage Map
            </h3>
          </div>
          <span className="shrink-0 whitespace-nowrap text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-black/[0.08] text-black/65">
            Remote UK &amp; EU
          </span>
        </div>

        <p className="text-[11px] text-black/65 font-light leading-relaxed">
          UK Registered Agency • Based in Pakistan. Serving businesses across London, Manchester, Birmingham, Edinburgh &amp; Europe 100% remotely.
        </p>

        <div className="overflow-hidden rounded-xl border border-black/[0.08] bg-white">
          <iframe
            title="Saim Dev Remote Service Coverage Map - United Kingdom"
            src="https://maps.google.com/maps?q=United+Kingdom&t=&z=4&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={600}
            height={180}
            className="w-full h-40 sm:h-44 border-0 opacity-95 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="flex justify-end">
          <a
            href="https://maps.google.com/?q=United+Kingdom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-black/65 hover:text-[#111115] transition-colors"
          >
            <span>View UK coverage area on Google Maps</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
