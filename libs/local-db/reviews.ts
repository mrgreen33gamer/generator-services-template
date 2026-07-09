// libs/local-db/reviews.ts
// Static testimonials for PowerHold Generators

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Standby Generators',
    text:     "After the ice storm left us without power for three days, we called PowerHold. They sized a whole-home standby unit, installed the ATS, and walked us through the exercise schedule. Lights stayed on through the next outage. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Emergency Service',
    text:     "Generator wouldn't start during a blackout. PowerHold had a tech at our house the same afternoon, replaced a failed starter and dirty fuel filter, and got us back online before dark. Fair price, clear communication.",
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Transfer Switches',
    text:     "Had three companies quote transfer switch installs. PowerHold was honest about the load calculation we actually needed — not just upselling the biggest ATS. Clean install, code-safe, and they trained us on the manual override.",
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Load Calculations',
    text:     "They measured our critical circuits, recommended a right-sized standby unit, and saved us from buying something oversized. The layout advice for the pad was excellent. Worth every penny.",
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Portable Generators',
    text:     "We needed a portable + interlock for our ranch workshop. PowerHold installed a proper interlock kit (no dryer-plug hack), labeled circuits, and tested under load. Professional from start to finish.",
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Generator Maintenance',
    text:     "Signed up for their maintenance plan after years of ignoring oil changes and battery checks. Unit starts on the first crank every exercise cycle now. My go-to generator company for life.",
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Emergency Service',
    text:     "Storm took out power and our old unit failed to transfer. PowerHold diagnosed a transfer switch contact issue, fixed it same visit, and left with everything tested. No after-hours gouge.",
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Standby Generators',
    text:     "Rhea's crew installed our Generac standby with propane. Pad, gas, ATS, and panel work all coordinated. 2-year workmanship and clear pricing. Thank you PowerHold.",
  },
];

export default reviews;
