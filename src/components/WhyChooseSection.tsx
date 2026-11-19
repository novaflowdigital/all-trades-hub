import React, { useState } from 'react';
import { Check, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../utils/tradeLogic';

interface WhyChooseSectionProps {
  onRequestQuoteClick: () => void;
}

const WHY_PILLARS = [
  {
    index: '01',
    title: 'One Point of Contact',
    body: 'Forget the hassle of managing multiple contractors. You’ll have one dedicated point of contact coordinating your project, managing communication and overseeing every stage from the initial enquiry through to completion.',
  },
  {
    index: '02',
    title: 'Complete Multi-Trade Capability',
    body: 'Access a trusted network of qualified professionals across a wide range of trades. Whether your project requires one specialist or several trades working together, we coordinate everything in one place to save you time and keep the job running smoothly.',
  },
  {
    index: '03',
    title: 'Clear and Reliable Communication',
    body: 'We believe good communication is just as important as quality workmanship. You’ll receive clear updates, prompt responses and honest information throughout your project, so you always know what is happening and what comes next.',
  },
  {
    index: '04',
    title: 'Licensed and Fully Insured Professionals',
    body: 'Your property is in capable hands. Every project is completed by experienced, appropriately licensed and fully insured tradespeople who are committed to high standards of safety, professionalism and workmanship.',
  },
  {
    index: '05',
    title: 'Residential and Commercial Solutions',
    body: 'From homes and investment properties to offices and commercial premises, we provide flexible trade solutions tailored to your needs. Whether it’s a one-off repair, an improvement project or ongoing work, we have the right team for the job.',
  },
];

const DIFFERENCE_CHECKLIST = [
  'Fast and reliable communication & response times',
  'Licensed & Fully Insured Trades',
  'Transparent Upfront Pricing',
  'Quality Workmanship Guarantee',
  'One Point of Contact from Start to Finish',
  'We Treat Your Property Like Our Own',
];

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  onRequestQuoteClick,
}) => {
  const [imgFailed, setImgFailed] = useState<Record<string, boolean>>({});

  return (
    <section
      id="why-choose-us"
      className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-700 mb-2">
            <span>Why Choose All Trades Hub</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>Fremantle &amp; Perth Property Specialists</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 headline-balance mb-3">
            One Dedicated Coordinator From the First Enquiry to the Final
            Handover
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Built to eliminate the stress, uncertainty, and unreliability of
            chasing separate tradespeople across Perth. Here is why homeowners,
            landlords, and commercial managers rely on All Trades Hub.
          </p>
        </div>

        {/* 5 Core Pillars + Authentic On-Site Workmanship Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left 7 Cols: 5 Original Pillars */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {WHY_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono-tabular font-bold text-blue-700">
                    {pillar.index}.
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right 5 Cols: Authentic On-Site Workmanship Photos & The All Trades Hub Difference */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Dual Real Photo Grid from alltradeshub.com.au */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/5]">
                {!imgFailed.home4 ? (
                  <img
                    src="/assets/brand/home4.png"
                    alt="All Trades Hub interior house painter rolling wall coat in branded shirt"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setImgFailed((p) => ({ ...p, home4: true }))
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 text-xs text-white text-center">
                    All Trades Hub Painting Specialist
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3">
                  <p className="text-xs font-semibold text-white">
                    Interior &amp; Exterior Painting
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Clean preparation &amp; finishes
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/5]">
                {!imgFailed.home3 ? (
                  <img
                    src="/assets/brand/home3.png"
                    alt="All Trades Hub electrician and trade technician working on residential brickwork"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setImgFailed((p) => ({ ...p, home3: true }))
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 text-xs text-white text-center">
                    All Trades Hub Licensed Technician
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3">
                  <p className="text-xs font-semibold text-white">
                    Licensed Electrical &amp; Repairs
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Compliant WA installations
                  </p>
                </div>
              </div>
            </div>

            {/* "The All Trades Hub Difference" Card from original website */}
            <div className="rounded-xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-blue-400 mb-1.5">
                  Our Promise to Property Owners
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  The All Trades Hub Difference
                </h3>

                <ul className="space-y-3 mb-6">
                  {DIFFERENCE_CHECKLIST.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onRequestQuoteClick}
                  className="px-4 py-2.5 rounded-lg bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get a Free Quote
                </button>
                <a
                  href={COMPANY_DETAILS.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-mono-tabular">
                    {COMPANY_DETAILS.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
