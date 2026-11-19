import React, { useState } from 'react';
import {
  Phone,
  Check,
  ArrowRight,
  Star,
  AlertCircle,
  Clock,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import {
  COMPANY_DETAILS,
  TRADE_SERVICES,
  TradeCategoryId,
  PropertyType,
  UrgencyLevel,
  QuoteFormInput,
  QuoteSubmissionRecord,
  validateQuoteForm,
  createQuoteRecord,
} from '../utils/tradeLogic';

interface HeroSectionProps {
  selectedTrades: TradeCategoryId[];
  onToggleTrade: (tradeId: TradeCategoryId) => void;
  prefilledSuburb: string;
  onSuburbChange: (suburb: string) => void;
  submissions: QuoteSubmissionRecord[];
  onQuoteSubmitted: (record: QuoteSubmissionRecord) => void;
  formInputRef: React.RefObject<HTMLInputElement | null>;
}

const TRADE_OPTIONS: { id: TradeCategoryId; label: string }[] = [
  { id: 'electrical', label: 'Electrical' },
  { id: 'painting', label: 'House Painting' },
  { id: 'plumbing', label: 'Plumbing' },
  { id: 'aircon', label: 'Air Conditioning' },
  { id: 'carpentry', label: 'Carpentry' },
  { id: 'landscaping', label: 'Landscaping & Maintenance' },
  { id: 'multi-trade', label: 'Multi-Trade Project' },
];

const GUARANTEE_STRIP = [
  {
    title: 'Free Quotes',
    detail: 'Transparent upfront pricing with zero obligation',
  },
  {
    title: 'Residential & Commercial',
    detail: 'Homes, rentals, offices & commercial premises',
  },
  {
    title: 'Licensed & Qualified',
    detail: 'Fully insured, compliant WA trade professionals',
  },
  {
    title: 'Professional & Reliable',
    detail: 'One dedicated coordinator from start to finish',
  },
  {
    title: 'Emergency Services',
    detail: 'Rapid priority response when urgent issues strike',
  },
  {
    title: 'Prompt Friendly Service',
    detail: 'Clear updates, honest timelines & tidy workmanship',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedTrades,
  onToggleTrade,
  prefilledSuburb,
  onSuburbChange,
  submissions,
  onQuoteSubmitted,
  formInputRef,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [urgency, setUrgency] = useState<UrgencyLevel>('standard');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormInput, string>>
  >({});
  const [latestSubmission, setLatestSubmission] =
    useState<QuoteSubmissionRecord | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [logoImgFailed, setLogoImgFailed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input: QuoteFormInput = {
      fullName,
      phone,
      email,
      suburb: prefilledSuburb,
      selectedTrades,
      propertyType,
      urgency,
      description,
    };

    const validation = validateQuoteForm(input);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const record = createQuoteRecord(input, submissions.length + 1);
    onQuoteSubmitted(record);
    setLatestSubmission(record);
  };

  const handleResetForNewQuote = () => {
    setLatestSubmission(null);
    setDescription('');
    setErrors({});
  };

  return (
    <section
      id="top"
      className="relative bg-slate-900 text-white border-b border-slate-800 overflow-hidden"
    >
      {/* Subtle architectural background contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(29,78,216,0.22),_transparent_55%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 lg:pt-12 lg:pb-16">
        {/* 2-Column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition, Original Copy & Visual Proof */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed regional metadata line (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-blue-300 mb-3.5">
                <span>Fremantle &amp; Greater Perth Metro</span>
                <span aria-hidden="true">·</span>
                <span>One Point of Contact</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular">Mon–Fri 8am–6pm</span>
              </div>

              {/* Dominant Headline */}
              <h1 className="font-display font-extrabold tracking-tight text-white headline-balance text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] mb-4">
                One Team, Every Job Done Right.{' '}
                <span className="text-blue-400">
                  The Complete Trade Solution.
                </span>
              </h1>

              {/* Authentic Core Value Proposition from alltradeshub.com.au */}
              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-3.5">
                Managing repairs, improvements or larger projects shouldn’t mean
                searching for trades, chasing quotes and coordinating multiple
                contractors.{' '}
                <strong className="font-semibold text-white">
                  All Trades Hub
                </strong>{' '}
                brings trusted professionals together through one reliable point
                of contact.
              </p>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6">
                From the first enquiry to the final result, we manage the
                communication, coordinate the right trades and ensure every
                stage of your project is completed efficiently and
                professionally. Whether you need one trade or an entire team, we
                make getting the job done simpler, smoother and stress-free.
              </p>

              {/* Direct Call & Google Review Proof Bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 pb-6 mb-6 border-b border-slate-800">
                <a
                  href={COMPANY_DETAILS.phoneHref}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg bg-white text-slate-950 font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Call Direct:</span>
                  <span className="font-mono-tabular">
                    {COMPANY_DETAILS.phoneDisplay}
                  </span>
                </a>

                <a
                  href="#instant-quote-form"
                  className="lg:hidden inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Instant Quote Form</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-xs font-semibold text-white ml-1 font-mono-tabular">
                      5.0 Local Trade Rating
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    <span>One Team. Every Trade. Every Time.</span>
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    <a
                      href={COMPANY_DETAILS.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
                    >
                      Verified Google Reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic All Trades Hub Founders & Site Banner Visual Card */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 min-h-[240px] sm:min-h-[285px] flex flex-col justify-end">
              {!heroImgFailed ? (
                <img
                  src="/assets/brand/hero-photo.jpg"
                  alt="All Trades Hub founders on site in Perth with One Team, Every Trade, Every Time banner"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
                  <span className="font-display font-bold text-lg text-blue-200">
                    All Trades Hub — One Team, Every Trade, Every Time
                  </span>
                </div>
              )}

              {/* Measured Scrim for Media Overlay (4.5:1+ contrast) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/15"
              />

              <div className="relative z-10 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {!logoImgFailed ? (
                    <div className="w-12 h-12 rounded-lg bg-white p-1.5 shrink-0 flex items-center justify-center">
                      <img
                        src="/assets/brand/logo.png"
                        alt="All Trades Hub official logo"
                        referrerPolicy="no-referrer"
                        onError={() => setLogoImgFailed(true)}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-blue-700 text-white font-display font-bold text-sm shrink-0 flex items-center justify-center">
                      ATH
                    </div>
                  )}
                  <div>
                    <p className="text-sm sm:text-base font-bold text-white">
                      One Team. Every Trade. Every Time.
                    </p>
                    <p className="text-xs text-slate-300">
                      Electrical · Painting · Plumbing · Air Conditioning ·
                      Carpentry · Maintenance
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-300 sm:text-right font-mono-tabular shrink-0">
                  <div className="text-white font-semibold">
                    Alkimos to Mandurah
                  </div>
                  <div>Fremantle &amp; Perth Metro</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Above-the-Fold Quote / Inspection Booking Form */}
          <div className="lg:col-span-5 flex">
            <div
              id="instant-quote-form"
              className="w-full bg-white text-slate-900 rounded-xl border border-slate-200 p-5 sm:p-7 flex flex-col justify-between"
            >
              {latestSubmission ? (
                <div
                  data-testid="quote-confirmation"
                  className="py-2 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-3">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Instant Quote Request Logged</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-tabular">
                        Ref {latestSubmission.referenceId}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
                      Thanks, {latestSubmission.fullName}. Your trade request is
                      with our coordinator.
                    </h2>
                    <p className="text-sm text-slate-600 mb-5">
                      We’ve logged your enquiry for{' '}
                      <strong className="text-slate-900">
                        {latestSubmission.suburb}
                      </strong>
                      . Instead of juggling separate contractors, your single
                      point of contact will review your scope and call you on{' '}
                      <strong className="font-mono-tabular text-slate-900">
                        {latestSubmission.phone}
                      </strong>
                      .
                    </p>

                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 space-y-2.5 text-xs sm:text-sm mb-6">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">Reference ID</span>
                        <span className="font-mono-tabular font-semibold text-slate-900">
                          {latestSubmission.referenceId}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">Trades Selected</span>
                        <span className="font-semibold text-slate-900 text-right">
                          {latestSubmission.selectedTrades
                            .map(
                              (id) =>
                                TRADE_OPTIONS.find((t) => t.id === id)?.label ||
                                id
                            )
                            .join(', ')}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">Property Type</span>
                        <span className="font-medium text-slate-800 capitalize">
                          {latestSubmission.propertyType}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">Callback Window</span>
                        <span className="font-semibold text-blue-700 text-right">
                          {latestSubmission.estimatedCallback}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">Assigned Team</span>
                        <span className="font-medium text-slate-800 text-right">
                          {latestSubmission.assignedCoordinator}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <a
                      href={COMPANY_DETAILS.phoneHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-colors whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" />
                      <span>
                        Need Immediate Dispatch? Call{' '}
                        {COMPANY_DETAILS.phoneDisplay}
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForNewQuote}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Submit Another Quote or Inspection Request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col justify-between h-full gap-4"
                >
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-3.5">
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold text-blue-700 mb-1">
                        <span>Instant Free Quote &amp; Inspection Booking</span>
                        <span className="font-mono-tabular text-slate-500">
                          Fast Response
                        </span>
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                        Tell Us What You Need Done
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        Select one or multiple trades below. One coordinator
                        handles the rest.
                      </p>
                    </div>

                    {/* Step 1: Trade Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-2">
                        1. Select Trade(s) Needed *
                      </label>
                      <div
                        role="group"
                        aria-label="Select trades needed"
                        className="flex flex-wrap gap-1.5"
                      >
                        {TRADE_OPTIONS.map((option) => {
                          const isSelected = selectedTrades.includes(option.id);
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => onToggleTrade(option.id)}
                              aria-pressed={isSelected}
                              className={`px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-blue-700 border-blue-700 text-white'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                              <span>{option.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.selectedTrades && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.selectedTrades}</span>
                        </p>
                      )}
                    </div>

                    {/* Step 2: Property Type & Urgency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="quote-property-type"
                          className="block text-xs font-semibold text-slate-800 mb-1"
                        >
                          Property Type
                        </label>
                        <select
                          id="quote-property-type"
                          value={propertyType}
                          onChange={(e) =>
                            setPropertyType(e.target.value as PropertyType)
                          }
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
                        >
                          <option value="residential">Residential Home</option>
                          <option value="commercial">
                            Commercial / Office
                          </option>
                          <option value="investment">
                            Rental / Investment
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="quote-urgency"
                          className="block text-xs font-semibold text-slate-800 mb-1"
                        >
                          Timeframe / Priority
                        </label>
                        <select
                          id="quote-urgency"
                          value={urgency}
                          onChange={(e) =>
                            setUrgency(e.target.value as UrgencyLevel)
                          }
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
                        >
                          <option value="standard">Standard Free Quote</option>
                          <option value="priority">
                            Priority (24–48 hrs)
                          </option>
                          <option value="emergency">
                            Urgent / Emergency
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Step 3: Contact & Suburb */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="quote-full-name"
                          className="block text-xs font-semibold text-slate-800 mb-1"
                        >
                          Your Full Name *
                        </label>
                        <input
                          ref={formInputRef}
                          id="quote-full-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-xs font-semibold text-slate-800 mb-1"
                        >
                          Mobile / Phone *
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 0473 372 272"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 font-mono-tabular focus:border-blue-700 focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="quote-suburb"
                          className="block text-xs font-semibold text-slate-800 mb-1"
                        >
                          Suburb or Postcode *
                        </label>
                        <input
                          id="quote-suburb"
                          type="text"
                          value={prefilledSuburb}
                          onChange={(e) => onSuburbChange(e.target.value)}
                          placeholder="e.g. Fremantle 6160"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                        />
                        {errors.suburb && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.suburb}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-email"
                          className="block text-xs font-semibold text-slate-800 mb-1"
                        >
                          Email Address (Optional)
                        </label>
                        <input
                          id="quote-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com.au"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-description"
                        className="block text-xs font-semibold text-slate-800 mb-1"
                      >
                        Job Details or Inspection Scope (Optional)
                      </label>
                      <textarea
                        id="quote-description"
                        rows={2}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Briefly describe the repair, painting, electrical, roof inspection, or multi-trade work needed..."
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-700 text-white font-bold text-sm sm:text-base hover:bg-blue-800 active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>Request Free Quote Now</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span>No-obligation free quote</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span>Fremantle &amp; Perth Metro</span>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 6-Point Core Guarantee Bar below the Hero Split */}
        <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {GUARANTEE_STRIP.map((item, idx) => (
            <div
              key={item.title}
              className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/90 flex flex-col justify-between"
            >
              <div className="text-xs font-mono-tabular text-blue-400 mb-1">
                0{idx + 1}.
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
