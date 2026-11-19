import React, { useState } from 'react';
import { Check, ArrowUpRight, Search, Wrench } from 'lucide-react';
import {
  TRADE_SERVICES,
  TradeService,
  TradeCategoryId,
  filterTradeServices,
} from '../utils/tradeLogic';

interface ServicesSectionProps {
  selectedTrades: TradeCategoryId[];
  onSelectTradeForQuote: (tradeId: TradeCategoryId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedTrades,
  onSelectTradeForQuote,
}) => {
  const [scopeFilter, setScopeFilter] = useState<
    'all' | 'residential' | 'commercial' | 'multi-trade'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] =
    useState<TradeService | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredServices = filterTradeServices(
    TRADE_SERVICES,
    scopeFilter,
    searchQuery
  );

  const markImgFailed = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Header from Original Website: "Trade Solutions made simple" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 mb-10 border-b border-slate-200">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold text-blue-700 mb-2">
              <span>Our Services</span>
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              <span>One Team. Every Trade. Every Time.</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 headline-balance">
              Trade Solutions made simple
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At <strong className="text-slate-900">All Trades Hub</strong>, we
              believe maintaining your property shouldn’t mean chasing multiple
              contractors. Our philosophy is simple: one trusted team, clear
              communication, quality workmanship, and a hassle-free experience
              from start to finish. Whether it’s a small repair or a larger
              project, we’re committed to making home maintenance easier and
              more reliable.
            </p>
          </div>
        </div>

        {/* Interactive Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          {/* Interactive Segmented Filter Controls (Functional Buttons) */}
          <div
            role="tablist"
            aria-label="Filter trade services by property scope"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200"
          >
            {(
              [
                { id: 'all', label: 'All 6 Core Trades' },
                { id: 'residential', label: 'Residential Homes' },
                { id: 'commercial', label: 'Commercial & Offices' },
                { id: 'multi-trade', label: 'Multi-Trade Projects' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={scopeFilter === tab.id}
                onClick={() => setScopeFilter(tab.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  scopeFilter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search input for instant trade task lookup */}
          <div className="relative w-full md:w-72">
            <label htmlFor="service-search" className="sr-only">
              Search trade services or tasks
            </label>
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="service-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. switchboard, painting, leak..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Services Bento / Editorial Grid */}
        {filteredServices.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-10 text-center">
            <p className="font-display text-lg font-bold text-slate-900 mb-1">
              Need a specialized trade not matching "{searchQuery}"?
            </p>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-5">
              All Trades Hub coordinates a complete network of licensed Perth &amp;
              Fremantle tradespeople. Clear the filter or request a custom
              multi-trade quote directly.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setScopeFilter('all');
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 cursor-pointer whitespace-nowrap"
              >
                Show All Services
              </button>
              <button
                type="button"
                onClick={() => onSelectTradeForQuote('multi-trade')}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 cursor-pointer whitespace-nowrap"
              >
                Request Custom Trade Quote
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredServices.map((service, idx) => {
              // Give primary marquee prominence to Electrical & House Painting (their two flagship specialties)
              const isMarquee = idx === 0 || idx === 1;
              const colSpanClass = isMarquee
                ? 'lg:col-span-6'
                : 'lg:col-span-4';
              const isSelectedForQuote = selectedTrades.includes(service.id);

              return (
                <article
                  key={service.id}
                  className={`${colSpanClass} rounded-xl border ${
                    isSelectedForQuote
                      ? 'border-blue-700 bg-blue-50/20'
                      : 'border-slate-200 bg-slate-50/60'
                  } p-6 flex flex-col justify-between transition-colors`}
                >
                  <div>
                    {/* Editorial Index + Original Brand Icon Lockup */}
                    <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200/80">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0">
                          {!failedImages[service.id] ? (
                            <img
                              src={service.image}
                              alt={`${service.title} icon`}
                              referrerPolicy="no-referrer"
                              onError={() => markImgFailed(service.id)}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <Wrench className="w-5 h-5 text-blue-700" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-mono-tabular text-slate-500">
                            {service.index}. {service.shortTitle}
                          </div>
                          <h3 className="font-display text-xl font-bold text-slate-900">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveModalService(service)}
                        className="text-xs font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Learn More</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-slate-800 mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Concrete Deliverables */}
                    <ul className="space-y-2 mb-6">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs text-slate-500">
                      {service.warrantyNote}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectTradeForQuote(service.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isSelectedForQuote
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                          : 'bg-slate-900 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isSelectedForQuote
                        ? 'Added to Quote Form'
                        : `Quote ${service.shortTitle}`}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Service Scope Detail Dialog */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 bg-slate-900 relative min-h-[200px]">
                {!failedImages[`modal-${activeModalService.id}`] ? (
                  <img
                    src={activeModalService.photo}
                    alt={`${activeModalService.title} on site in Perth`}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      markImgFailed(`modal-${activeModalService.id}`)
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-white font-display font-bold">
                    {activeModalService.title}
                  </div>
                )}
              </div>

              <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-tabular text-blue-700 font-semibold">
                      {activeModalService.index}. All Trades Hub Service Scope
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalService(null)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>

                  <h3
                    id="service-modal-title"
                    className="font-display text-2xl font-bold text-slate-900 mb-2"
                  >
                    {activeModalService.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {activeModalService.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {activeModalService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500 border-t border-slate-200 pt-3 mb-5">
                    <div>
                      <strong className="text-slate-800">Turnaround:</strong>{' '}
                      {activeModalService.typicalTurnaround}
                    </div>
                    <div className="mt-0.5">
                      <strong className="text-slate-800">Assurance:</strong>{' '}
                      {activeModalService.warrantyNote}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const id = activeModalService.id;
                      setActiveModalService(null);
                      onSelectTradeForQuote(id);
                    }}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-blue-700 text-white text-xs sm:text-sm font-semibold hover:bg-blue-800 cursor-pointer whitespace-nowrap"
                  >
                    Book Free {activeModalService.shortTitle} Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModalService(null)}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
