import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { HowItWorksAndArea } from './components/HowItWorksAndArea';
import { ReviewsAndFooter } from './components/ReviewsAndFooter';
import {
  TradeCategoryId,
  QuoteSubmissionRecord,
  COMPANY_DETAILS,
} from './utils/tradeLogic';

export default function App() {
  const [selectedTrades, setSelectedTrades] = useState<TradeCategoryId[]>([
    'electrical',
  ]);
  const [prefilledSuburb, setPrefilledSuburb] = useState('Fremantle 6160');
  const [submissions, setSubmissions] = useState<QuoteSubmissionRecord[]>([]);
  const [contactToast, setContactToast] = useState<string | null>(null);
  const formInputRef = useRef<HTMLInputElement | null>(null);

  const showNotice = (msg: string) => {
    setContactToast(msg);
    setTimeout(() => {
      setContactToast((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: sectionId === 'instant-quote-form' ? 'center' : 'start',
      });
    }
    if (sectionId === 'instant-quote-form') {
      setTimeout(() => {
        formInputRef.current?.focus();
      }, 350);
    }
  };

  const scrollToQuoteForm = () => {
    scrollToSection('instant-quote-form');
  };

  // Global iframe-safe interceptor so hash links, tel:, and mailto: never trigger an iframe 404
  const handleGlobalLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';

    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1) || 'top';
      scrollToSection(id);
      return;
    }

    if (href.startsWith('tel:')) {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(COMPANY_DETAILS.phoneDisplay).catch(() => {});
      }
      showNotice(
        `All Trades Hub Direct Phone: ${COMPANY_DETAILS.phoneDisplay} (Copied to clipboard)`
      );
      return;
    }

    if (href.startsWith('mailto:')) {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(COMPANY_DETAILS.email).catch(() => {});
      }
      showNotice(
        `All Trades Hub Email: ${COMPANY_DETAILS.email} (Copied to clipboard)`
      );
      return;
    }
  };

  const handleToggleTrade = (tradeId: TradeCategoryId) => {
    setSelectedTrades((prev) =>
      prev.includes(tradeId)
        ? prev.filter((id) => id !== tradeId)
        : [...prev, tradeId]
    );
  };

  const handleSelectTradeForQuote = (tradeId: TradeCategoryId) => {
    setSelectedTrades((prev) =>
      prev.includes(tradeId) ? prev : [...prev, tradeId]
    );
    scrollToQuoteForm();
  };

  const handleSelectSuburbForQuote = (suburbString: string) => {
    setPrefilledSuburb(suburbString);
    scrollToQuoteForm();
  };

  const handleQuoteSubmitted = (record: QuoteSubmissionRecord) => {
    setSubmissions((prev) => [record, ...prev]);
  };

  return (
    <div
      onClick={handleGlobalLinkClick}
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900"
    >
      <Navbar onRequestQuoteClick={scrollToQuoteForm} />

      <main className="flex-1">
        <HeroSection
          selectedTrades={selectedTrades}
          onToggleTrade={handleToggleTrade}
          prefilledSuburb={prefilledSuburb}
          onSuburbChange={setPrefilledSuburb}
          submissions={submissions}
          onQuoteSubmitted={handleQuoteSubmitted}
          formInputRef={formInputRef}
        />

        <ServicesSection
          selectedTrades={selectedTrades}
          onSelectTradeForQuote={handleSelectTradeForQuote}
        />

        <WhyChooseSection onRequestQuoteClick={scrollToQuoteForm} />

        <HowItWorksAndArea
          onSelectSuburbForQuote={handleSelectSuburbForQuote}
          onRequestQuoteClick={scrollToQuoteForm}
        />

        <ReviewsAndFooter
          onRequestQuoteClick={scrollToQuoteForm}
          submissions={submissions}
        />
      </main>

      {contactToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 max-w-md rounded-xl bg-slate-900 text-white border border-slate-700 px-4 py-3 shadow-lg flex items-center justify-between gap-4 text-xs sm:text-sm"
        >
          <span className="font-medium">{contactToast}</span>
          <button
            type="button"
            onClick={() => setContactToast(null)}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
