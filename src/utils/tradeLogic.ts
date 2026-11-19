export type TradeCategoryId =
  | 'electrical'
  | 'painting'
  | 'plumbing'
  | 'aircon'
  | 'carpentry'
  | 'landscaping'
  | 'multi-trade';

export type PropertyType = 'residential' | 'commercial' | 'investment';

export type UrgencyLevel = 'standard' | 'priority' | 'emergency';

export interface TradeService {
  id: TradeCategoryId;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  photo: string;
  scopes: ('residential' | 'commercial' | 'multi-trade')[];
  deliverables: string[];
  typicalTurnaround: string;
  warrantyNote: string;
}

export interface QuoteFormInput {
  fullName: string;
  phone: string;
  email: string;
  suburb: string;
  selectedTrades: TradeCategoryId[];
  propertyType: PropertyType;
  urgency: UrgencyLevel;
  description: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof QuoteFormInput, string>>;
}

export interface QuoteSubmissionRecord extends QuoteFormInput {
  referenceId: string;
  submittedAt: string;
  estimatedCallback: string;
  assignedCoordinator: string;
}

export interface SuburbCoverageResult {
  matched: boolean;
  suburbName: string;
  corridor: string;
  dispatchWindow: string;
  multiTradeAvailable: boolean;
  note: string;
}

export const COMPANY_DETAILS = {
  name: 'All Trades Hub',
  primarySlogan: 'One Team. Every Trade. Every Time.',
  secondarySlogan: 'One Team, Every Job Done Right. The Complete Trade Solution.',
  hookTitle: 'Trade Solutions made simple',
  phoneDisplay: '0473 372 272',
  phoneHref: 'tel:0473372272',
  secondaryBannerPhone: '0429 727 096',
  email: 'info@alltradeshub.com.au',
  emailHref: 'mailto:info@alltradeshub.com.au',
  website: 'www.alltradeshub.com.au',
  hours: 'Monday – Friday · 8:00 am – 6:00 pm',
  serviceRegion: 'Fremantle & Greater Perth Metro (Alkimos to Mandurah)',
  googleReviewUrl: 'https://g.page/r/CUeDxaCF8HUnEBM/review',
  facebookUrl: 'https://www.facebook.com',
  instagramUrl: 'https://www.instagram.com',
} as const;

export const TRADE_SERVICES: TradeService[] = [
  {
    id: 'electrical',
    index: '01',
    title: 'Electrical Services',
    shortTitle: 'Electrical',
    tagline: 'Licensed, safe electrical installations, upgrades & fault finding',
    description:
      'From switchboard upgrades, LED lighting design, and ceiling fans to safety switches (RCDs), smoke alarms, and commercial fit-outs, our licensed WA electricians deliver compliant, tidy workmanship.',
    image: '/assets/brand/service-electrical.png',
    photo: '/assets/brand/home3.png',
    scopes: ['residential', 'commercial', 'multi-trade'],
    deliverables: [
      'Switchboard upgrades, RCD safety switches & hardwired smoke alarms',
      'Interior & exterior LED lighting, power points & ceiling fan installations',
      'Emergency electrical fault finding, rewiring & compliance certificates',
    ],
    typicalTurnaround: 'Same-day emergency or 24–48 hr scheduled booking',
    warrantyNote: 'WA Licensed Electricians · Compliance certificate issued',
  },
  {
    id: 'painting',
    index: '02',
    title: 'House Painting',
    shortTitle: 'House Painting',
    tagline: 'Precision interior, exterior & roof coating finishes built for WA conditions',
    description:
      'Complete surface preparation, plaster repairs, interior walls, ceilings, timber trims, and weather-resistant exterior facade painting for homes, rentals, and commercial premises across Fremantle and Perth.',
    image: '/assets/brand/service-painting.png',
    photo: '/assets/brand/home4.png',
    scopes: ['residential', 'commercial', 'multi-trade'],
    deliverables: [
      'Full interior & exterior house painting with Dulux premium wash-and-wear systems',
      'Patching, crack repair, sanding, priming & feature wall detailing',
      'Brick exteriors, eaves, gutters, doors, decks & end-of-lease refreshes',
    ],
    typicalTurnaround: 'On-site measure & itemized quote within 24 hours',
    warrantyNote: 'Premium UV-resistant coatings · Full drop-sheet protection',
  },
  {
    id: 'plumbing',
    index: '03',
    title: 'Plumbing & Gas',
    shortTitle: 'Plumbing',
    tagline: 'Prompt repairs, hot water systems, blocked drains & fixture upgrades',
    description:
      'Reliable licensed plumbers handling leaking taps, burst pipes, hot water unit replacements, blocked drains, bathroom/kitchen rough-ins, and preventative maintenance without the runaround.',
    image: '/assets/brand/service-plumbing.png',
    photo: '/assets/brand/home5.png',
    scopes: ['residential', 'commercial', 'multi-trade'],
    deliverables: [
      'Hot water system repairs, replacements & gas fitting compliance',
      'Blocked drains, leak detection, tapware, toilets & pipework repairs',
      'Kitchen, laundry & bathroom renovation plumbing coordination',
    ],
    typicalTurnaround: 'Fast dispatch across Fremantle & Perth metro corridors',
    warrantyNote: 'Licensed & insured WA Plumbing contractors',
  },
  {
    id: 'aircon',
    index: '04',
    title: 'Air Conditioning',
    shortTitle: 'Air Conditioning',
    tagline: 'Split-system, ducted HVAC installations, servicing & climate control',
    description:
      'Keep your home or workplace comfortable year-round. We coordinate supply, installation, electrical connection, and preventative servicing for split systems and ducted air conditioning.',
    image: '/assets/brand/service-aircon.png',
    photo: '/assets/brand/hero-photo.jpg',
    scopes: ['residential', 'commercial', 'multi-trade'],
    deliverables: [
      'Split-system & reverse-cycle air conditioner installation (refrigeration + electrical in one booking)',
      'Ducted system servicing, filter sanitization & airflow optimization',
      'Commercial office & retail climate control maintenance',
    ],
    typicalTurnaround: 'Single coordinated visit for both unit mount & electrical circuit',
    warrantyNote: 'ARCtick certified technicians · Full manufacturer warranty alignment',
  },
  {
    id: 'carpentry',
    index: '05',
    title: 'Carpentry & Joinery',
    shortTitle: 'Carpentry',
    tagline: 'Structural timber work, doors, decking, pergolas & interior fix-outs',
    description:
      'Skilled trade carpentry covering timber decking, patio framing, door hanging, locks, skirting boards, cabinetry modifications, roof timber repairs, and custom property improvements.',
    image: '/assets/brand/service-carpentry.png',
    photo: '/assets/brand/home5.png',
    scopes: ['residential', 'commercial', 'multi-trade'],
    deliverables: [
      'Timber decking, pergolas, fencing & exterior structural repairs',
      'Internal & external doors, locks, skirting boards, architraves & framing',
      'Pre-sale & rental property structural rectification combined with painting',
    ],
    typicalTurnaround: 'Custom material & labour estimate within 24–48 hours',
    warrantyNote: 'Precision trade finish · Seamless handover to our painting crew',
  },
  {
    id: 'landscaping',
    index: '06',
    title: 'Landscaping & Other Services',
    shortTitle: 'Other Services',
    tagline: 'Garden makeovers, lawn installs, roof & gutter maintenance, and multi-trade jobs',
    description:
      'From complete backyard tidy-ups, reticulation, hedging, and turf to roof/gutter inspections, high-pressure cleaning, and multi-trade property turnovers—managed through one point of contact.',
    image: '/assets/brand/service-other.png',
    photo: '/assets/brand/hero-photo.jpg',
    scopes: ['residential', 'commercial', 'multi-trade'],
    deliverables: [
      'Landscaping makeovers, lawn installation, hedging & green waste clearing',
      'Roof & gutter inspections, exterior pressure washing & general handyman repairs',
      'End-to-end pre-sale, settlement & commercial maintenance packages',
    ],
    typicalTurnaround: 'Flexible single-day tidy-ups or multi-stage project scheduling',
    warrantyNote: 'One dedicated coordinator from start to finish',
  },
];

export const PERTH_CORRIDOR_SUBURBS: {
  suburb: string;
  postcode: string;
  corridor: string;
  dispatchWindow: string;
}[] = [
  { suburb: 'Fremantle', postcode: '6160', corridor: 'Fremantle & Coastal Hub', dispatchWindow: 'Priority Local Response · Same-Day Quotes' },
  { suburb: 'East Fremantle', postcode: '6158', corridor: 'Fremantle & Coastal Hub', dispatchWindow: 'Priority Local Response · Same-Day Quotes' },
  { suburb: 'South Fremantle', postcode: '6162', corridor: 'Fremantle & Coastal Hub', dispatchWindow: 'Priority Local Response · Same-Day Quotes' },
  { suburb: 'North Fremantle', postcode: '6159', corridor: 'Fremantle & Coastal Hub', dispatchWindow: 'Priority Local Response · Same-Day Quotes' },
  { suburb: 'Melville', postcode: '6156', corridor: 'Southern & River Corridor', dispatchWindow: 'Fast Response · Within 24 Hours' },
  { suburb: 'Applecross', postcode: '6153', corridor: 'Southern & River Corridor', dispatchWindow: 'Fast Response · Within 24 Hours' },
  { suburb: 'Cockburn Central', postcode: '6164', corridor: 'Southern Corridor', dispatchWindow: 'Fast Response · Within 24 Hours' },
  { suburb: 'Cottesloe', postcode: '6011', corridor: 'Western Suburbs', dispatchWindow: 'Fast Response · Within 24 Hours' },
  { suburb: 'Subiaco', postcode: '6008', corridor: 'Central Perth Metro', dispatchWindow: 'Fast Response · Within 24 Hours' },
  { suburb: 'Perth CBD', postcode: '6000', corridor: 'Central Perth Metro', dispatchWindow: 'Fast Response · Within 24 Hours' },
  { suburb: 'Scarborough', postcode: '6019', corridor: 'Northern Coastal Corridor', dispatchWindow: 'Scheduled Metro Coverage · 24–48 Hours' },
  { suburb: 'Joondalup', postcode: '6027', corridor: 'Northern Metro Corridor', dispatchWindow: 'Scheduled Metro Coverage · 24–48 Hours' },
  { suburb: 'Alkimos', postcode: '6038', corridor: 'Far North Metro Boundary', dispatchWindow: 'Full Northern Corridor Coverage · 24–48 Hours' },
  { suburb: 'Rockingham', postcode: '6168', corridor: 'South Coastal Corridor', dispatchWindow: 'Full Southern Corridor Coverage · 24–48 Hours' },
  { suburb: 'Mandurah', postcode: '6210', corridor: 'Peel & South Boundary', dispatchWindow: 'Full Southern Corridor Coverage · 24–48 Hours' },
];

export function filterTradeServices(
  services: TradeService[],
  scopeFilter: 'all' | 'residential' | 'commercial' | 'multi-trade',
  searchQuery = ''
): TradeService[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return services.filter((service) => {
    const matchesScope =
      scopeFilter === 'all' || service.scopes.includes(scopeFilter);
    if (!matchesScope) return false;
    if (!normalizedQuery) return true;
    const haystack = [
      service.title,
      service.shortTitle,
      service.tagline,
      service.description,
      ...service.deliverables,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

export function validateQuoteForm(input: QuoteFormInput): ValidationResult {
  const errors: Partial<Record<keyof QuoteFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name (at least 2 characters).';
  }

  const digitsOnly = (input.phone || '').replace(/\D/g, '');
  if (!digitsOnly || digitsOnly.length < 8 || digitsOnly.length > 12) {
    errors.phone = 'Please enter a valid Australian phone or mobile number (e.g. 0473 372 272).';
  }

  if (input.email && input.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email.trim())) {
      errors.email = 'Please enter a valid email address or leave blank for phone callback.';
    }
  }

  if (!input.suburb || input.suburb.trim().length < 2) {
    errors.suburb = 'Please enter your suburb or postcode (e.g. Fremantle 6160).';
  }

  if (!input.selectedTrades || input.selectedTrades.length === 0) {
    errors.selectedTrades = 'Select at least one trade service needed.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createQuoteRecord(
  input: QuoteFormInput,
  sequenceNum = 1
): QuoteSubmissionRecord {
  const code = String(1040 + sequenceNum);
  const isMultiTrade =
    input.selectedTrades.length > 1 ||
    input.selectedTrades.includes('multi-trade');

  let estimatedCallback = 'Within 2 business hours (Mon–Fri, 8am–6pm)';
  if (input.urgency === 'emergency') {
    estimatedCallback = 'Priority phone response within 30 minutes';
  } else if (input.urgency === 'priority') {
    estimatedCallback = 'Same-day coordinator call within 60 minutes';
  }

  return {
    ...input,
    fullName: input.fullName.trim(),
    phone: input.phone.trim(),
    email: input.email.trim(),
    suburb: input.suburb.trim(),
    description: input.description.trim(),
    referenceId: `ATH-FRE-${code}`,
    submittedAt: 'Just now',
    estimatedCallback,
    assignedCoordinator: isMultiTrade
      ? 'Senior Multi-Trade Project Coordinator (Fremantle & Perth Hub)'
      : 'Dedicated Trade Coordinator (All Trades Hub)',
  };
}

export function checkSuburbCoverage(query: string): SuburbCoverageResult {
  const cleaned = query.trim();
  if (!cleaned) {
    return {
      matched: true,
      suburbName: 'Fremantle & Greater Perth',
      corridor: 'Alkimos (North) to Mandurah (South)',
      dispatchWindow: 'Monday – Friday · 8:00 am – 6:00 pm · Free Quotes',
      multiTradeAvailable: true,
      note: 'Enter your suburb or WA postcode above to verify local coordinator dispatch.',
    };
  }

  const lower = cleaned.toLowerCase();
  const exact = PERTH_CORRIDOR_SUBURBS.find(
    (item) =>
      item.suburb.toLowerCase().includes(lower) ||
      item.postcode === cleaned
  );

  if (exact) {
    return {
      matched: true,
      suburbName: `${exact.suburb} (${exact.postcode})`,
      corridor: exact.corridor,
      dispatchWindow: exact.dispatchWindow,
      multiTradeAvailable: true,
      note: `All Trades Hub actively services ${exact.suburb} with one point of contact across Electrical, Painting, Plumbing, Air Conditioning, Carpentry & Landscaping.`,
    };
  }

  // Check if it looks like a WA metropolitan postcode (6000 - 6215)
  const postcodeNum = Number(cleaned);
  if (!Number.isNaN(postcodeNum) && postcodeNum >= 6000 && postcodeNum <= 6215) {
    return {
      matched: true,
      suburbName: `WA Postcode ${cleaned}`,
      corridor: 'Greater Perth Metropolitan Area (Alkimos to Mandurah)',
      dispatchWindow: 'Active Service Area · Quotes Within 24 Hours',
      multiTradeAvailable: true,
      note: `Postcode ${cleaned} is inside our Alkimos-to-Mandurah service corridor. Full single-trade and multi-trade coordination available.`,
    };
  }

  return {
    matched: true,
    suburbName: cleaned,
    corridor: 'Perth Metro & Surrounds (Alkimos to Mandurah)',
    dispatchWindow: 'Coordinator Confirmation Within 2 Business Hours',
    multiTradeAvailable: true,
    note: `We cover all Perth metropolitan suburbs from Alkimos in the north to Mandurah in the south, including ${cleaned}. Request your free quote or call 0473 372 272.`,
  };
}
