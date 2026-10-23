"use client";
import React from 'react';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = "Chat on WhatsApp",
  href = "https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20discussing%20a%20website%20project",
  onClick,
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm contact-btn-bg outline outline-2 outline-white -outline-offset-2 hover:opacity-90 transition-all duration-300 shadow-xl ${className}`}
    >
      {label}
    </a>
  );
};
