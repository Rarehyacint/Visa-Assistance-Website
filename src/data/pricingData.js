export const processFrameworkSteps = [
  {
    stepNumber: "Step 01",
    title: "Strategic Consultation",
    description: "Every journey begins with a deep-dive assessment. Our experts analyze your profile, travel history, and destination requirements to determine the optimal visa category and identify potential risks before they become hurdles.",
    bullets: [
      "Eligibility gap analysis",
      "Custom roadmap development"
    ],
    actionType: null
  },
  {
    stepNumber: "Step 02",
    title: "Document Orchestration",
    description: "We transform the chaotic requirement list into a streamlined digital checklist. Our legal team reviews every single page of your dossier to ensure compliance with the latest embassy standards and local regulations.",
    bullets: [
      "Multi-tier Audit: Triple-checking for clerical errors.",
      "Certified Translation: Internal legal translation services."
    ],
    actionType: "manage-process",
    actionLabel: "Manage Application Process"
  },
  {
    stepNumber: "Step 03",
    title: "Seamless Submission",
    description: "Timing is everything. We handle the precise moment of submission, whether digital or physical, and manage all correspondence with consular officials. You receive real-time tracking updates throughout the process.",
    bullets: [],
    actionType: "live-tracking",
    liveTracking: {
      tag: "LIVE TRACKING UPDATE",
      caseId: "Case #GV-9042",
      status: "Consular Review"
    }
  },
  {
    stepNumber: "Step 04",
    title: "Approval & Delivery",
    description: "The final milestone. Once approved, we securely courier your travel documents directly to your door or provide the digital credentials via our encrypted portal. We provide a final travel brief to ensure your entry is as smooth as your application.",
    bullets: [
      "Secure Courier: Insured global delivery for physical documents.",
      "Pre-Departure Brief: Expert guidance on port-of-entry procedures."
    ],
    actionType: null
  }
];

export const processClarityFaqs = [
  {
    id: "faq-duration",
    question: "How long does the entire process typically take?",
    answer: "Processing times vary depending on the destination and visa class, typically ranging from 3-5 business days for express electronic visas up to 4-8 weeks for residency and academic pathways. We provide an exact timeline during your Step 1 consultation."
  },
  {
    id: "faq-rejection",
    question: "What happens if my application is rejected?",
    answer: "While our approval rate is over 98%, we offer an Appeal & Review service. If a rejection occurs due to embassy policy shifts, we perform a complimentary secondary analysis and assist with the appeal process or a corrected re-submission."
  },
  {
    id: "faq-tracking",
    question: "Can I track my application status in real-time?",
    answer: "Yes. Upon beginning Step 2, you are granted access to our Secure Client Portal, which provides a live timeline of your case, including embassy submission timestamps and expected response windows."
  }
];

export const supportEcosystem = [
  {
    id: "doc-translation",
    title: "Document Translation",
    description: "Certified, court-approved translations for legal, academic, and professional documents in over 45 languages. Guaranteed acceptance by global consulates."
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    description: "Mock sessions with former consular officers to build confidence and ensure compliance with diplomatic protocols."
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    description: "Comprehensive global coverage tailored for visa requirements, including medical, emergency evacuation, and loss protection."
  },
  {
    id: "relocation-support",
    title: "Relocation Support",
    description: "From housing searches to school enrollments and tax compliance. Our local experts handle the logistics of your new life so you can focus on your journey."
  }
];

export const pricingPlans = [
  {
    id: "essential",
    name: "Essential",
    price: 50,
    period: "per application",
    popular: false,
    description: "Essential verification and standard filing review for straightforward tourist and transit visas.",
    features: [
      { text: "Document checklist", included: true },
      { text: "Application form review", included: true },
      { text: "Email support (48h response)", included: true },
      { text: "Standard processing", included: true },
      { text: "Status tracking portal", included: true },
      { text: "Priority processing", included: false },
      { text: "Dedicated case manager", included: false },
      { text: "Consulate interview prep", included: false },
      { text: "Free resubmission", included: false },
      { text: "Refund guarantee", included: false }
    ],
    buttonText: "Get Started",
    buttonStyle: "btn-pricing-dark"
  },
  {
    id: "professional",
    name: "Professional",
    price: 119,
    period: "per application",
    popular: true,
    featured: true,
    description: "Full-support package with dedicated case manager, interview prep, and priority consulate handling.",
    features: [
      { text: "Document checklist", included: true },
      { text: "Application form review", included: true },
      { text: "Priority support (4h response)", included: true },
      { text: "Priority processing", included: true },
      { text: "Status tracking portal", included: true },
      { text: "Dedicated case manager", included: true },
      { text: "Consulate interview prep", included: true },
      { text: "Free resubmission (1x)", included: true },
      { text: "Refund guarantee", included: false },
      { text: "Expedited 24h processing", included: false }
    ],
    buttonText: "Get Started",
    buttonStyle: "btn-pricing-white"
  },
  {
    id: "executive",
    name: "Executive",
    price: 249,
    period: "per application",
    popular: false,
    description: "White-glove VIP immigration assistance with expedited 24h turnaround and full refund guarantee.",
    features: [
      { text: "Document checklist", included: true },
      { text: "Application form review", included: true },
      { text: "VIP support (1h response)", included: true },
      { text: "Expedited 24h processing", included: true },
      { text: "Real-time status tracking", included: true },
      { text: "Senior case manager", included: true },
      { text: "Consulate interview prep + mock", included: true },
      { text: "Unlimited resubmissions", included: true },
      { text: "Full refund guarantee", included: true },
      { text: "Courier document pickup", included: true }
    ],
    buttonText: "Get Started",
    buttonStyle: "btn-pricing-dark"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Strategic Consultation",
    description: "Choose your destination and visa type. Our system instantly retrieves current requirements and fee structures."
  },
  {
    step: "02",
    title: "Document Orchestration",
    description: "Upload documents via our encrypted portal. Specialists verify completeness before submission to the consulate."
  },
  {
    step: "03",
    title: "Seamless Submission",
    description: "Monitor status at every stage. We notify you immediately of any additional requests or approvals."
  },
  {
    step: "04",
    title: "Approval & Delivery",
    description: "Receive your verified electronic visa or consular passport release with comprehensive post-approval instructions."
  }
];

export const clientTestimonials = [
  {
    id: "amara",
    rating: 5,
    quote: "Obtained my Schengen visa in four days for an urgent conference. The document checklist was flawless — zero rejections across three countries in one application.",
    name: "Amara Osei",
    title: "Senior Consultant, Lagos",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "kenji",
    rating: 5,
    quote: "I was skeptical of online visa services, but GlobalVisa's US B1/B2 support was exceptional. Dedicated case manager, consulate prep, approval on first try.",
    name: "Kenji Tanaka",
    title: "Software Engineer, Tokyo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "priya",
    rating: 5,
    quote: "My student visa to the UK had complex financial documentation. The team handled every back-and-forth with the consulate. I never had to call myself.",
    name: "Priya Menon",
    title: "PhD Candidate, London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
  }
];
