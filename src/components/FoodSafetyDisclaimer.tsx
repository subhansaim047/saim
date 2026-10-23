import React from "react";

export const FoodSafetyDisclaimer: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 leading-relaxed font-sans ${className}`}>
      <p className="font-semibold text-amber-900 mb-1">Important Notice</p>
      <p>
        These templates are food-safety management tools to help you organise kitchen records. They do not constitute legal advice and using them does not guarantee compliance with UK food law or a five-star food hygiene rating. Businesses remain solely responsible for their own food safety practices.
      </p>
      <p className="mt-2 text-[11px] text-amber-800">
        Official guidance is available directly from the{" "}
        <a
          href="https://www.food.gov.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-black"
        >
          Food Standards Agency (food.gov.uk)
        </a>.
      </p>
    </div>
  );
};
