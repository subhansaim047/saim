import React from "react";
import { ShieldCheck, Info } from "lucide-react";

export const FoodSafetyDisclaimer: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 leading-relaxed font-sans space-y-2 ${className}`}>
      <div className="flex items-center gap-1.5 font-bold text-amber-900">
        <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
        <span>Food Safety &amp; Due Diligence Notice</span>
      </div>
      <p>
        These templates, checklists, and calculators are food-safety management tools designed to assist UK food business operators (FBOs) in maintaining organised kitchen records and internal procedures. They do not constitute legal advice and using them does not guarantee compliance with UK food law or a five-star food hygiene rating.
      </p>
      <div className="p-2.5 rounded-xl bg-amber-100/70 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold block">UK Jurisdictional Variations:</span>
          <span>
            Food hygiene rating display is mandatory in Wales and Northern Ireland, and voluntary in England. Scotland operates the separate Food Hygiene Information Scheme (FHIS: Pass or Improvement Required). Always verify specific local authority inspection criteria with your council EHO.
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-amber-800 border-t border-amber-200/60">
        <span>Editorial review by <strong>Saim Dev</strong> · Aligned with FSA SFBB &amp; Regulation (EC) 852/2004</span>
        <a
          href="https://www.food.gov.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-black"
        >
          Official FSA Guidance (food.gov.uk) →
        </a>
      </div>
    </div>
  );
};
