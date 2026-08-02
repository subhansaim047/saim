import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ label = "Live Project", href = "#" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-all duration-300"
    >
      {label}
    </a>
  );
};
