export const faqCategories = [
  {
    id: "general",
    title: "General",
    icon: "Globe",
    description: "Global coverage and basic requirements."
  },
  {
    id: "process",
    title: "Process",
    icon: "RefreshCw",
    description: "Step-by-step application walkthroughs."
  },
  {
    id: "fees",
    title: "Fees",
    icon: "Banknote",
    description: "Pricing, refunds, and payment methods."
  },
  {
    id: "documents",
    title: "Documents",
    icon: "FileText",
    description: "Checklists and validation standards."
  }
];

export const categorizedFaqs = [
  {
    category: "General Questions",
    icon: "Globe",
    items: [
      {
        id: "gen-1",
        question: "Is GlobalVisa an official government agency?",
        answer: "GlobalVisa is a private visa facilitation service. We are not a government agency, but we work closely with embassies and consulates to ensure your application meets all legal requirements before submission, significantly increasing approval rates."
      }
    ]
  },
  {
    category: "Process Questions",
    icon: "RefreshCw",
    items: [
      {
        id: "proc-1",
        question: "How long does the average process take?",
        answer: "Processing times vary by country and visa type. Typically, our internal review takes 24-48 hours. Embassy processing can range from 3 days for e-visas to 15-20 days for sticker visas. We provide live tracking for every stage."
      },
      {
        id: "proc-2",
        question: "Can I edit my application after submission?",
        answer: "Yes, amendments can be made during the initial 24-hour verification window before your dossier is lodged with consular officials. After official embassy submission, modifications must be coordinated directly through your dedicated case specialist."
      }
    ]
  },
  {
    category: "Fees & Payment",
    icon: "Banknote",
    items: [
      {
        id: "fees-1",
        question: "What is the refund policy if my visa is denied?",
        answer: "We offer a full service-fee refund guarantee on our Executive Plan. For other plans, if a rejection occurs due to embassy policy shifts, our Appeal & Review service provides complimentary re-application assistance and legal analysis."
      }
    ]
  },
  {
    category: "Documents Requirements",
    icon: "FileText",
    items: [
      {
        id: "docs-1",
        question: "Do I need to send original documents?",
        answer: "For most electronic visas and initial embassy reviews, high-resolution certified digital scans uploaded via our Secure Vault are sufficient. If physical passport submission or sworn notarization is required by the specific consulate, we provide insured, trackable courier pickup directly to your door."
      }
    ]
  }
];
