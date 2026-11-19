import React, { useState } from 'react';
import {
  Star,
  ExternalLink,
  Phone,
  Mail,
  Clock,
  MapPin,
} from 'lucide-react';
import { COMPANY_DETAILS, QuoteSubmissionRecord } from '../utils/tradeLogic';

interface ReviewsAndFooterProps {
  onRequestQuoteClick: () => void;
  submissions: QuoteSubmissionRecord[];
}

const CLIENT_REVIEWS = [
  {
    name: 'Mark & Claire Henderson',
    role: 'Homeowners · East Fremantle (6158)',
    tradesUsed: 'House Painting & Electrical Upgrades',
    outcome:
      'Before finding All Trades Hub we spent three weeks chasing two electricians and a painter who never sent their quotes. Having one coordinator line up the interior repaint and LED downlight swap in the same week saved us massive stress—finished on budget and spotless.',
    rating: 5,
  },
  {
    name: 'David Thorne',
    role: 'Property Investment Manager · Melville & Fremantle',
    tradesUsed: 'Multi-Trade Pre-Lease Maintenance (Plumbing, Carpentry & Painting)',
    outcome:
      'Managing tenant turnovers usually means four separate invoices and four sets of keys. All Trades Hub gave us one upfront quote, fixed the door frames, sorted a leaking hot water valve, and repainted the living area within 72 hours.',
    rating: 5,
  },
  {
    name: 'Rebecca Vance',
    role: 'Commercial Studio Director · South Fremantle (6162)',
    tradesUsed: 'Air Conditioning, Electrical & Exterior Tidy-Up',
    outcome:
      'Clear communication from start to finish. They organised both the split-system air conditioning install and dedicated electrical circuit in a single morning booking so our team never lost a workday.',
    rating: 5,
  },
];

export const ReviewsAndFooter: React.FC<ReviewsAndFooterProps> = ({
  onRequestQuoteClick,
  submissions,
}) => {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <>
      {/* Google Reviews & Social Proof Section (100% intact Google Review link) */}
      <section
        id="reviews"
        className="py-16 lg:py-24 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-10 border-b border-slate-200">
            <div>
              <div className="text-xs font-semibold text-blue-700 mb-2">
                <span>Client Feedback &amp; Google Reviews</span>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span>Trusted Across Fremantle &amp; Perth</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 headline-balance">
                Why Local Property Owners Recommend All Trades Hub
              </h2>
            </div>

            {/* Authentic "Enjoyed working with us? Leave us a Google Review" CTA from original site */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
              <span className="text-xs sm:text-sm font-medium text-slate-600">
                Enjoyed working with us?
              </span>
              <a
                href={COMPANY_DETAILS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Leave us a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* 3 Attributable Testimonials with Concrete Before/Change/Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {CLIENT_REVIEWS.map((review) => (
              <article
                key={review.name}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className="flex items-center gap-1 text-amber-500"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-mono-tabular">
                      5.0 · Verified
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-blue-700 mb-2">
                    {review.tradesUsed}
                  </p>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    “{review.outcome}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="font-display text-sm font-bold text-slate-900">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-500">{review.role}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Live Session Logged Enquiries Summary (if user submitted quotes in this session) */}
          {submissions.length > 0 && (
            <div
              data-testid="session-quotes-list"
              className="mb-12 rounded-xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-display text-base font-bold text-slate-900">
                  Your Logged Quote Enquiries ({submissions.length})
                </h3>
                <span className="text-xs text-blue-700 font-medium">
                  Assigned to All Trades Hub Coordinator ({COMPANY_DETAILS.phoneDisplay})
                </span>
              </div>
              <div className="space-y-2">
                {submissions.map((item) => (
                  <div
                    key={item.referenceId}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm"
                  >
                    <div>
                      <span className="font-mono-tabular font-bold text-blue-700 mr-2">
                        {item.referenceId}
                      </span>
                      <span className="font-semibold text-slate-900">
                        {item.fullName}
                      </span>
                      <span className="text-slate-500 mx-1.5">·</span>
                      <span className="text-slate-700">{item.suburb}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-mono-tabular">
                      {item.estimatedCallback}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* High-Conversion Final CTA Banner */}
          <div className="rounded-xl bg-slate-900 text-white border border-slate-800 p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold text-blue-400 mb-2">
                <span>{COMPANY_DETAILS.primarySlogan}</span>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span>Free No-Obligation Quotes</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white headline-balance mb-2">
                Ready to Get Your Repairs, Painting, Electrical or Maintenance
                Sorted Without the Stress?
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                One point of contact from start to finish. Request your free
                quote online in 60 seconds or call us directly on{' '}
                <span className="font-mono-tabular text-white font-semibold">
                  {COMPANY_DETAILS.phoneDisplay}
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onRequestQuoteClick}
                className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-sm sm:text-base hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get a Free Quote
              </button>
              <a
                href={COMPANY_DETAILS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white text-slate-950 font-bold text-sm sm:text-base hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span className="font-mono-tabular">
                  {COMPANY_DETAILS.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet, Complete Footer Preserving 100% of Original Website Details */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
            {/* Brand & Slogan Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                {!logoFailed ? (
                  <div className="w-11 h-11 rounded-lg bg-white p-1.5 shrink-0 flex items-center justify-center">
                    <img
                      src="/assets/brand/logo.png"
                      alt="All Trades Hub logo"
                      referrerPolicy="no-referrer"
                      onError={() => setLogoFailed(true)}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : null}
                <div>
                  <div className="font-display text-lg font-extrabold text-white">
                    {COMPANY_DETAILS.name}
                  </div>
                  <div className="text-xs text-blue-400">
                    {COMPANY_DETAILS.primarySlogan}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
                One Team, Every Job Done Right. The Complete Trade Solution for
                residential homes, investment properties, offices, and
                commercial spaces across Fremantle and Greater Perth.
              </p>

              <a
                href={COMPANY_DETAILS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                <span>Enjoyed working with us? Leave us a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Navigation Mirror & Trades Column */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-bold text-white mb-3">
                Our Trade Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    01. Electrical Services
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    02. House Painting
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    03. Plumbing &amp; Gas
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    04. Air Conditioning
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    05. Carpentry &amp; Joinery
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    06. Landscaping &amp; Other Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-bold text-white mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a
                    href="#top"
                    className="hover:text-white transition-colors"
                  >
                    Home &amp; Instant Quote
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    All Services
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="hover:text-white transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#service-area"
                    className="hover:text-white transition-colors"
                  >
                    Service Area
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="hover:text-white transition-colors"
                  >
                    Google Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact, Hours & Follow Column (Exact Match to Original Footer) */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-bold text-white mb-3">
                Contact &amp; Hours
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={COMPANY_DETAILS.phoneHref}
                    className="font-mono-tabular font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={COMPANY_DETAILS.emailHref}
                    className="hover:text-blue-400 transition-colors break-all"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Hours</div>
                    <div className="text-slate-400">Monday – Friday</div>
                    <div className="text-slate-400 font-mono-tabular">
                      8 am – 6 pm
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-slate-400">
                    Fremantle &amp; Greater Perth Metro (Alkimos to Mandurah),
                    WA
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-4 text-xs">
                <span className="text-slate-500">Follow:</span>
                <a
                  href="#top"
                  className="text-slate-300 hover:text-white underline underline-offset-4"
                >
                  Facebook
                </a>
                <a
                  href="#top"
                  className="text-slate-300 hover:text-white underline underline-offset-4"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} {COMPANY_DETAILS.name} (
              {COMPANY_DETAILS.website}). All rights reserved.
            </div>
            <div>
              Licensed &amp; Fully Insured Trade Coordination · Fremantle &amp;
              Perth WA
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
