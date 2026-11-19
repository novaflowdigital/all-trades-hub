import React from 'react';
import { COMPANY_DETAILS } from '../utils/tradeLogic';

interface NavbarProps {
  onRequestQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuoteClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          {COMPANY_DETAILS.name}
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#services"
            className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Our Services
          </a>
          <a
            href="#why-choose-us"
            className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Why Choose Us
          </a>
          <a
            href="#how-it-works"
            className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            How It Works
          </a>
          <a
            href="#service-area"
            className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Service Area
          </a>
          <a
            href="#reviews"
            className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Google Reviews
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onRequestQuoteClick}
            className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:scale-[0.99] transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </header>
  );
};
