import React, { useState } from 'react';
import {
  Phone,
  Check,
  MapPin,
  ArrowRight,
  Search,
} from 'lucide-react';
import {
  COMPANY_DETAILS,
  PERTH_CORRIDOR_SUBURBS,
  checkSuburbCoverage,
} from '../utils/tradeLogic';

interface HowItWorksAndAreaProps {
  onSelectSuburbForQuote: (suburbString: string) => void;
  onRequestQuoteClick: () => void;
}

const PROCESS_STEPS = [
  {
    step: '01',
    label: 'Step 1',
    title: 'Contact Us',
    summary:
      'Submit the instant free quote form above, email info@alltradeshub.com.au, or call 0473 372 272.',
    detail:
      'Speak directly with your dedicated All Trades Hub coordinator—not an automated call centre. We respond rapidly across Monday to Friday (8:00 am – 6:00 pm) and prioritise urgent trade requests.',
  },
  {
    step: '02',
    label: 'Step 2',
    title: 'Tell Us What You Need',
    summary:
      'Share your repair list, inspection needs, painting scope, electrical job, or multi-trade renovation plan.',
    detail:
      'Whether it is a single trade task (like a switchboard upgrade or interior paint refresh) or a multi-trade sequence across plumbing, carpentry, and air conditioning, we scope everything clearly with transparent upfront pricing.',
  },
  {
    step: '03',
    label: 'Step 3',
    title: 'We Organise the Right Trade',
    summary:
      'We schedule and coordinate vetted, licensed, and insured WA professionals around your timetable.',
    detail:
      'No chasing separate contractors or waiting around for callbacks. Your coordinator aligns arrival windows, materials, access, and trade handovers so each specialist arrives prepared.',
  },
  {
    step: '04',
    label: 'Step 4',
    title: 'Job Completed',
    summary:
      'Every stage is completed to a high standard with clear communication and our Quality Workmanship Guarantee.',
    detail:
      'We treat your property like our own—leaving the site clean, compliant, and ready to enjoy. One team, one point of contact, every job done right.',
  },
];

export const HowItWorksAndArea: React.FC<HowItWorksAndAreaProps> = ({
  onSelectSuburbForQuote,
  onRequestQuoteClick,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [suburbQuery, setSuburbQuery] = useState('Fremantle');
  const [photoFailed, setPhotoFailed] = useState(false);

  const coverage = checkSuburbCoverage(suburbQuery);

  return (
    <>
      {/* How It Works Section (Upgraded from static PNG why-choose.jpg to interactive accessible HTML) */}
      <section
        id="how-it-works"
        className="py-16 lg:py-24 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 mb-10 border-b border-slate-200">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold text-blue-700 mb-2">
                <span>How It Works</span>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span>Simple 4-Step Coordination Process</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 headline-balance">
                From First Enquiry to Job Completed in Four Simple Steps
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                No juggling separate quotes or chasing no-show contractors. Select
                any step below to see how All Trades Hub manages your project from
                start to finish.
              </p>
            </div>
          </div>

          {/* 4-Step Interactive Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {PROCESS_STEPS.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  aria-pressed={isActive}
                  className={`text-left p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-blue-700/50 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-xs font-mono-tabular font-bold ${
                          isActive ? 'text-blue-400' : 'text-blue-700'
                        }`}
                      >
                        {item.step}. {item.label}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isActive ? 'text-slate-300' : 'text-slate-400'
                        }`}
                      >
                        {isActive ? 'Active Step' : 'View Detail'}
                      </span>
                    </div>

                    <h3
                      className={`font-display text-xl font-bold mb-2 ${
                        isActive ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isActive ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.summary}
                    </p>
                  </div>

                  <div
                    className={`mt-5 pt-4 border-t text-xs ${
                      isActive
                        ? 'border-slate-800 text-blue-300'
                        : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    {item.detail}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Direct CTA Banner matching original "Need a Reliable Trade Team? Get a Free Quote / Call Now" */}
          <div className="rounded-xl bg-slate-100 border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold text-blue-700 mb-1">
                Ready When You Are · Monday – Friday, 8 am – 6 pm
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Need a Reliable Trade Team?
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Whether you need one trade specialist or a coordinated crew in
                Fremantle &amp; Perth, get your free quote today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onRequestQuoteClick}
                className="px-5 py-3 rounded-lg bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get a Free Quote
              </button>
              <a
                href={COMPANY_DETAILS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call Now ·</span>
                <span className="font-mono-tabular">
                  {COMPANY_DETAILS.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Area Section (Fremantle & Greater Perth: Alkimos to Mandurah) */}
      <section
        id="service-area"
        className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left 7 Columns: Interactive Suburb & Postcode Dispatch Checker */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-blue-700 mb-2">
                  <span>Service Area</span>
                  <span aria-hidden="true" className="mx-2">
                    ·
                  </span>
                  <span>Alkimos (North) to Fremantle to Mandurah (South)</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 headline-balance mb-3">
                  Local Trade Coverage Across Fremantle &amp; Greater Perth
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Check your suburb or WA postcode below to confirm local trade
                  dispatch and pre-fill your location in our instant quote form.
                </p>

                {/* Suburb Search Input */}
                <div className="mb-5">
                  <label
                    htmlFor="suburb-checker-input"
                    className="block text-xs font-semibold text-slate-800 mb-1.5"
                  >
                    Check Your Perth / Fremantle Suburb or Postcode
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="suburb-checker-input"
                      type="text"
                      value={suburbQuery}
                      onChange={(e) => setSuburbQuery(e.target.value)}
                      placeholder="Enter suburb or postcode (e.g. Fremantle, 6160, Melville, Joondalup)..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Quick Suburb Selector Buttons */}
                <div className="mb-6">
                  <div className="text-xs font-medium text-slate-500 mb-2">
                    Popular Service Hubs (Click to check &amp; select):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {PERTH_CORRIDOR_SUBURBS.slice(0, 10).map((item) => {
                      const isCurrent =
                        suburbQuery.toLowerCase() === item.suburb.toLowerCase();
                      return (
                        <button
                          key={item.suburb}
                          type="button"
                          onClick={() => setSuburbQuery(item.suburb)}
                          className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                            isCurrent
                              ? 'bg-blue-700 border-blue-700 text-white'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {item.suburb} ({item.postcode})
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Coverage Result Card */}
              <div
                data-testid="suburb-coverage-card"
                className="rounded-xl bg-white border border-slate-200 p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {coverage.suburbName}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700">
                    Active Coverage · All 6 Trades Available
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm mb-4">
                  <div>
                    <span className="text-slate-500 block text-xs">
                      Service Corridor
                    </span>
                    <span className="font-semibold text-slate-900">
                      {coverage.corridor}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">
                      Estimated Quote Dispatch
                    </span>
                    <span className="font-semibold text-blue-700">
                      {coverage.dispatchWindow}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-5">
                  {coverage.note}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    onSelectSuburbForQuote(coverage.suburbName)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>
                    Book Free Quote in {coverage.suburbName}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Real On-Site Exterior Photo & Corridor Summary */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl overflow-hidden border border-slate-200 bg-white">
              <div className="relative h-64 sm:h-72 bg-slate-900">
                {!photoFailed ? (
                  <img
                    src="/assets/brand/home5.png"
                    alt="All Trades Hub exterior house painting and maintenance on Perth brick home"
                    referrerPolicy="no-referrer"
                    onError={() => setPhotoFailed(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-white font-display font-bold">
                    All Trades Hub — Perth &amp; Fremantle Exterior Works
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-5">
                  <div>
                    <div className="text-xs text-blue-300 font-semibold">
                      On-Site Across Western Australia
                    </div>
                    <p className="font-display text-lg font-bold text-white">
                      Fremantle, Coastal &amp; Greater Perth Metro
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    Complete Corridor Coverage
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Whether your property is a character home in Fremantle, a
                    coastal residence in Cottesloe or Scarborough, a family
                    home in Melville or Joondalup, or an investment property
                    anywhere from Alkimos down to Mandurah—our team comes to you.
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>
                        <strong>Fremantle &amp; Inner South:</strong> Fremantle,
                        East Fremantle, South Fremantle, Melville, Applecross
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>
                        <strong>Central &amp; Western Suburbs:</strong> Perth
                        CBD, Subiaco, Cottesloe, Nedlands, Claremont
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>
                        <strong>North &amp; South Corridors:</strong> Scarborough
                        to Joondalup &amp; Alkimos · Cockburn to Rockingham &amp;
                        Mandurah
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Operating Hours: Mon – Fri, 8 am – 6 pm</span>
                  <span className="font-mono-tabular font-semibold text-slate-800">
                    {COMPANY_DETAILS.phoneDisplay}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
