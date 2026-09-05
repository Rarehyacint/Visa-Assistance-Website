export const mobilityDestinations = [
  {
    id: "europe-schengen",
    title: "Europe & Schengen Area",
    subtitle: "Schengen, EU, & UK Specialist Services",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Eiffel Tower in Paris France",
    keyVisa: "Schengen C/D",
    processing: "15-30 Days",
    stabilityRating: 4, // 4 out of 5 dots
    type: "wide-card",
    description: "Multi-entry business & tourist authorization across 27 Schengen member states plus UK express routes.",
    countryCode: "EU"
  },
  {
    id: "north-america",
    title: "North America",
    description: "Expert facilitation for US Business (B1/B2) and Canada eTA/Visitor pathways.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "New York City Manhattan bridge skyline",
    badge: "USA Premium Interview Prep",
    type: "standard-card",
    keyVisa: "B1/B2 & eTA",
    processing: "20-45 Days",
    stabilityRating: 5,
    countryCode: "US"
  },
  {
    id: "southeast-asia",
    title: "Southeast Asia",
    description: "Digital Nomad and Golden Visas in Bali, Thailand, and Singapore.",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Singapore Gardens by the Bay futuristic structures",
    badges: ["E-Visa Focus", "Retirement"],
    type: "standard-card",
    keyVisa: "e-VoA & LTR",
    processing: "3-7 Days",
    stabilityRating: 5,
    countryCode: "SG"
  },
  {
    id: "middle-east",
    title: "Middle East",
    description: "Streamlined business and residency processing for UAE, Saudi Arabia, and Qatar.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dubai Museum of the Future with illuminated Arabic calligraphy",
    type: "standard-card",
    keyVisa: "Green / Golden Visa",
    processing: "5-14 Days",
    stabilityRating: 4,
    countryCode: "AE"
  },
  {
    id: "oceania",
    title: "Oceania",
    description: "Skilled Migration and Working Holiday visas for Australia and New Zealand.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sydney Opera House overlooking harbour at twilight",
    type: "standard-card",
    keyVisa: "Subclass 500/482",
    processing: "15-30 Days",
    stabilityRating: 5,
    countryCode: "AU"
  }
];

export const destinationDirectory = [
  {
    code: "UK",
    name: "United Kingdom",
    fullName: "United Kingdom of Great Britain and Northern Ireland",
    region: "Europe",
    visaTypes: ["Standard Visitor", "Skilled Worker", "Student Visa (Tier 4)"],
    avgProcessing: "3 - 5 Weeks",
    govFee: "£115 (~$145)",
    requirementsSummary: "Valid passport, TB test (if applicable), proof of maintenance funds, biometric enrollment."
  },
  {
    code: "JP",
    name: "Japan",
    fullName: "Japan",
    region: "East Asia",
    visaTypes: ["Short-term Tourist (e-Visa)", "Highly Skilled Professional", "Working Holiday"],
    avgProcessing: "5 - 7 Business Days",
    govFee: "3,000 JPY (~$20)",
    requirementsSummary: "Passport (6m+), flight reservations, daily schedule itinerary, bank tax certificates."
  },
  {
    code: "DE",
    name: "Germany",
    fullName: "Federal Republic of Germany",
    region: "Europe (Schengen)",
    visaTypes: ["Schengen Short-Stay (Type C)", "Opportunity Card (Chancenkarte)", "National D Visa"],
    avgProcessing: "15 - 20 Business Days",
    govFee: "€90 (~$98)",
    requirementsSummary: "€30k Schengen medical insurance, verified accommodation, proof of economic ties."
  },
  {
    code: "SG",
    name: "Singapore",
    fullName: "Republic of Singapore",
    region: "Southeast Asia",
    visaTypes: ["Electronic Tourist Entry (SG Arrival)", "Employment Pass (EP)", "ONE Pass"],
    avgProcessing: "1 - 3 Business Days",
    govFee: "30 SGD (~$23)",
    requirementsSummary: "Online SG Arrival Card submission, valid passport (6m+), confirmed return ticket."
  },
  {
    code: "US",
    name: "United States",
    fullName: "United States of America",
    region: "North America",
    visaTypes: ["B1/B2 Visitor", "F-1 Academic Student", "ESTA (Visa Waiver)"],
    avgProcessing: "3 - 8 Weeks",
    govFee: "$185",
    requirementsSummary: "DS-160 confirmation, MRV fee receipt, in-person consular interview appointment."
  },
  {
    code: "AU",
    name: "Australia",
    fullName: "Commonwealth of Australia",
    region: "Oceania",
    visaTypes: ["Visitor Visa (subclass 600)", "Working Holiday (417/462)", "eVisitor (651)"],
    avgProcessing: "10 - 25 Days",
    govFee: "190 AUD (~$125)",
    requirementsSummary: "ImmiAccount digital submission, health examination, proof of sufficient funds ($5,000 AUD)."
  }
];

export const featuredDestinations = [
  {
    id: "paris-france",
    name: "Paris, France",
    region: "Schengen Area",
    category: "Europe",
    title: "Schengen Visa Specialist Support",
    description: "Experience the City of Light with swift Schengen multi-entry processing, express consular appointments, and zero-error documentation check.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Eiffel Tower illuminated at night in Paris France",
    approvalRate: "99.2%",
    processingDays: "4 - 7 Days",
    tag: "High Approval Rate",
    requirements: ["Valid Passport", "Schengen Insurance €30k", "Hotel & Return Flights", "Proof of Funds"]
  },
  {
    id: "batanes-philippines",
    name: "Batanes, Philippines",
    region: "Asia",
    category: "Asia",
    title: "Philippine Visa & Special Resident Retiree's Permit",
    description: "Discover breathtaking rolling hills, coastal lighthouses, and serene heritage landscapes with streamlined tourist and special investor visas.",
    imageUrl: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rolling green hills and coastal landscape of Batanes",
    approvalRate: "99.8%",
    processingDays: "3 - 5 Days",
    tag: "Eco Paradise",
    requirements: ["Valid Passport", "Travel Itinerary", "Financial Proof", "Clean Police Clearance"]
  },
  {
    id: "bali-indonesia",
    name: "Bali, Indonesia",
    region: "Asia / Americas / Coastal",
    category: "Asia",
    title: "Digital Nomad & Long-Stay Social Visa",
    description: "Pristine ocean cliffs, turquoise waters, and thriving nomad hubs with expedited e-VoA and second-home residency visa pathways.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Stairway along turquoise sea cliffs in tropical island",
    approvalRate: "98.9%",
    processingDays: "2 - 4 Days",
    tag: "Nomad Hub",
    requirements: ["Passport (6m+)", "Bank Statement", "Outbound Ticket", "Health Insurance"]
  }
];

export const destinationDropdownItems = [
  { id: "europe-schengen", title: "Europe & Schengen Area", count: "27 Countries", path: "/destinations#europe-schengen" },
  { id: "north-america", title: "North America (US & CA)", count: "B1/B2 & eTA", path: "/destinations#north-america" },
  { id: "southeast-asia", title: "Southeast Asia", count: "Nomad & E-Visas", path: "/destinations#southeast-asia" },
  { id: "middle-east", title: "Middle East (UAE & GCC)", count: "Golden Visas", path: "/destinations#middle-east" },
  { id: "oceania", title: "Oceania (AU & NZ)", count: "Skilled & Holiday", path: "/destinations#oceania" }
];
