export const visaCategories = [
  {
    id: "tourist-visa",
    title: "Tourist Visa",
    shortTitle: "Tourist Visa",
    icon: "Plane",
    tagline: "Short-term entry for leisure, sightseeing, and cultural exploration. Optimized for swift approvals and multi-entry flexibility.",
    shortDesc: "Leisure travel with streamlined documentation and fast-track processing.",
    processingTime: "3 - 7 Business Days",
    validity: "90 Days to 10 Years",
    approvalRate: "99.4%",
    keyRequirements: [
      "Valid Passport (6m+ validity remaining)",
      "Proof of Financial Sufficiency",
      "Return Flight Itinerary"
    ],
    fullRequirements: [
      "Passport valid for at least 6 months beyond intended stay with at least 2 blank pages",
      "Official proof of financial means (last 3-6 months bank statements, pay slips)",
      "Confirmed round-trip flight booking and accommodation reservations",
      "Travel medical insurance covering minimum €30,000 / $50,000 emergency medical expense",
      "Cover letter outlining purpose of visit and detailed day-by-day travel itinerary"
    ],
    popularDestinations: ["France", "Japan", "United States", "Spain", "United Kingdom", "Italy"],
    badge: "Most Popular"
  },
  {
    id: "student-visa",
    title: "Student Visa",
    shortTitle: "Student Visa",
    icon: "GraduationCap",
    tagline: "For international students enrolled in accredited institutions. Includes work permit eligibility and post-grad transition pathways.",
    shortDesc: "Full-cycle academic visa support — enrollment letters, financial proofs, consulate prep.",
    processingTime: "2 - 6 Weeks",
    validity: "Course Duration + Post-Study Grace",
    approvalRate: "98.8%",
    keyRequirements: [
      "Letter of Acceptance (I-20 / CAS / COE)",
      "Sponsorship / Funding Proof",
      "Return Flight Itinerary"
    ],
    fullRequirements: [
      "Unconditional Acceptance Letter from an accredited educational institution",
      "Official certificate of eligibility (US Form I-20, UK CAS statement, or Australian CoE)",
      "Comprehensive proof of tuition coverage and living expenses for at least 1 academic year",
      "Standardized language test scores (IELTS, TOEFL, PTE) where required",
      "Academic credentials, certified transcripts, and statement of academic intent"
    ],
    popularDestinations: ["United States", "United Kingdom", "Canada", "Germany", "Australia"],
    badge: "Academic"
  },
  {
    id: "digital-nomad",
    title: "Digital Nomad",
    shortTitle: "Digital Nomad",
    icon: "Laptop",
    tagline: "Remote work authorization for freelancers and employees. Enjoy long-term residency while maintaining foreign income.",
    shortDesc: "Specialized permits for remote workers looking for extended stays in digital-friendly hubs.",
    processingTime: "2 - 4 Weeks",
    validity: "1 to 2 Years (Renewable)",
    approvalRate: "97.6%",
    keyRequirements: [
      "Remote Employment Contract / Client Master Agreements",
      "Minimum Monthly Income Proof ($2,500 - $3,500+)",
      "International Health Insurance"
    ],
    fullRequirements: [
      "Active remote employment agreement or registered freelance business with foreign clients",
      "Consistent recurring income proof (tax returns, bank records showing required monthly minimum)",
      "Comprehensive global healthcare coverage valid in host country",
      "Clean criminal background record certificate apostilled within 90 days",
      "Proof of remote-friendly local accommodation lease or reservation"
    ],
    popularDestinations: ["Portugal", "Spain", "Dubai (UAE)", "Greece", "Costa Rica", "Indonesia"],
    badge: "Trending"
  },
  {
    id: "retirement-visa",
    title: "Retirement Visa",
    shortTitle: "Retirement",
    icon: "Home",
    tagline: "Passive income-based residency for retirees. Benefit from specialized tax regimes and long-term legal stability.",
    shortDesc: "Strategic planning for long-term retirement residency in the world's best climates.",
    processingTime: "4 - 8 Weeks",
    validity: "1 to 5 Years / Permanent Residency Route",
    approvalRate: "98.2%",
    keyRequirements: [
      "Pension / Passive Income Proof",
      "Criminal Background Check",
      "Age Eligibility (Country Specific, typically 50+)"
    ],
    fullRequirements: [
      "Guaranteed monthly pension, annuity, or passive investment yields meeting statutory minimums",
      "Apostilled clean police clearance report from home country and recent residences",
      "International private health insurance with inpatient and repatriation coverage",
      "Proof of local residential address or long-term lease agreement",
      "Medical fitness certificate certified by an authorized physician"
    ],
    popularDestinations: ["Portugal", "Spain", "Panama", "Thailand", "Philippines", "Costa Rica"],
    badge: "Long Term"
  },
  {
    id: "family-reunification",
    title: "Family Reunification Visa",
    shortTitle: "Family Reunification",
    icon: "Users",
    tagline: "For spouses, children, and dependent parents of legal residents or citizens. Focus on legal bridge building.",
    shortDesc: "Professional assistance for spousal and dependent visa applications.",
    processingTime: "1 - 3 Months",
    validity: "Aligned with Sponsor's Visa or Indefinite",
    approvalRate: "96.9%",
    keyRequirements: [
      "Verified Marriage / Birth Certificates",
      "Sponsor's Residency / Citizenship Proof",
      "Housing Suitability Certificate"
    ],
    fullRequirements: [
      "Apostilled, legally translated civil relationship documents (marriage certificates, birth certificates)",
      "Sponsor's valid legal status, permanent residence permit, or citizenship documentation",
      "Proof of adequate household income to sponsor dependents without public funds",
      "Municipal housing inspection or lease confirming adequate living square footage",
      "Evidence of genuine subsisting relationship (photos, joint accounts, shared travel)"
    ],
    popularDestinations: ["European Union", "United Kingdom", "Canada", "Australia", "United States"],
    badge: "Immigration"
  },
  {
    id: "custom-consultation",
    title: "Custom Consultation",
    shortTitle: "Consultation",
    icon: "Calendar",
    isConsultation: true,
    tagline: "Not sure which visa fits your profile? Speak with our legal specialists for a tailored migration strategy.",
    shortDesc: "Speak with certified immigration lawyers for customized multi-country pathways.",
    processingTime: "Immediate Scheduling",
    validity: "Personalized Roadmap",
    approvalRate: "100% Client Clarity",
    keyRequirements: [
      "Diagnostic Profile Review",
      "Direct Strategy Consultation with Legal Specialist",
      "Custom Step-by-Step Immigration Roadmap"
    ],
    fullRequirements: [
      "30-minute 1-on-1 private video or audio strategy call with licensed immigration advisor",
      "Comprehensive evaluation of citizenship, career, tax liabilities, and travel history",
      "Comparison of 3+ viable global residency or visa pathways tailored to your financial goals",
      "Custom checklist of documentation and estimated timeline breakdown"
    ],
    popularDestinations: ["Global Multi-Jurisdiction", "EU Golden Visas", "EB-5 & Tech Talents"],
    badge: "Advisory"
  }
];

export const visaDropdownItems = [
  { id: "tourist-visa", title: "Tourist Visa", path: "/visas#tourist-visa" },
  { id: "student-visa", title: "Study Visa", path: "/visas#student-visa" },
  { id: "digital-nomad", title: "Digital Nomad Visa", path: "/visas#digital-nomad" },
  { id: "family-reunification", title: "Family Reunification", path: "/visas#family-reunification" },
  { id: "retirement-visa", title: "Retirement", path: "/visas#retirement-visa" }
];
