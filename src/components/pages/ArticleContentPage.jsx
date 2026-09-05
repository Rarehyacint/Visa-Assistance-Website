import React, { useState } from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight, MapPin, DollarSign, FileText, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ArticleContentPage({ onStartApplication }) {
  const [activeTab, setActiveTab] = useState('overview');

  const subNavTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'step-guide', label: 'Step-by-Step Guide' },
    { id: 'tips-mistakes', label: 'Tips & Mistakes' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(`article-section-${tabId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-view article-content-page animate-fade-in">
      {/* 1. Full-Width Passports & World Map Hero Banner (Image 2 top) */}
      <div className="article-hero-banner-wrap">
        <img
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1600&q=80"
          alt="Passports on vintage world map"
          className="article-hero-banner-img"
        />
      </div>

      {/* 2. Sub-Navigation Horizontal Bar (Image 2) */}
      <nav className="article-subnav-bar">
        <div className="container">
          <div className="article-subnav-list">
            {subNavTabs.map((tab) => (
              <button
                key={tab.id}
                className={`article-subnav-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. Article 2-Column Content Layout (Image 2 middle) */}
      <div className="container article-main-container">
        <div className="article-layout-grid">
          {/* Main Left Content Column */}
          <main className="article-content-main-col">
            {/* Section: About This Visa */}
            <section id="article-section-overview" className="article-section-block">
              <div className="article-info-card-beige">
                <h2 className="article-card-head-title">About This Visa</h2>
                <p className="article-body-p">
                  If you're a <span className="highlight-text-orange">Philippine Passport Holder</span> planning to visit France for tourism, leisure, or to see friends and family, this is the visa you'll need.
                </p>
                <p className="article-body-p">
                  The <strong className="highlight-text-orange">France Short-Stay Tourist Visa</strong> lets you stay in France — and other Schengen countries — for <strong className="highlight-text-orange">up to 90 days within any 180-day period</strong>. You can move freely between countries in the Schengen Area during your trip, but the total number of days inside can't go over 90 within any 6-month window.
                </p>
                <p className="article-body-p">
                  For most first-time applicants, this visa is <strong className="highlight-text-orange">single-entry</strong> — meaning once you leave the Schengen zone, your visa is no longer valid, even if you haven't used up all 90 days. That's why it's important to finalize your full travel route before entering.
                </p>
                <p className="article-body-p">
                  If you've traveled to the Schengen Area before and followed all the rules, you may be eligible for a multiple-entry visa, which lets you enter and exit multiple times. These are the usual criteria:
                </p>
                <ul className="article-bullet-list">
                  <li>
                    <strong>1-Year Multiple-Entry Visa</strong> — if you've used 3 Schengen visas in the last 2 years
                  </li>
                  <li>
                    <strong>3-Year Multiple-Entry Visa</strong> — if you've held a 1-year multiple-entry visa and used it properly in the last 2 years
                  </li>
                  <li>
                    <strong>5-Year Multiple-Entry Visa</strong> — if you've held a 2-year+ multiple-entry visa and used it properly in the last 3 years
                  </li>
                </ul>
                <p className="article-body-p">
                  Even with long-validity visas, the 90 days in 180 days rule still applies. You can't live in Europe — it's still a tourist visa.
                </p>
                <p className="article-body-p">
                  This visa also doesn't allow any kind of paid work or long-term stay. All applications from the Philippines are submitted through TLScontact Manila or Cebu, and the final decision is made by the French Embassy.
                </p>
              </div>
            </section>

            {/* Section: Eligibility Criteria */}
            <section id="article-section-eligibility" className="article-section-block">
              <div className="article-info-card-beige">
                <h2 className="article-card-head-title">Eligibility Criteria</h2>
                <p className="article-body-p">You can apply for a France Short-Stay Tourist Visa if:</p>
                <ul className="article-bullet-list">
                  <li>You hold a valid <span className="highlight-text-orange">Philippine Passport</span></li>
                  <li>You're applying from the <span className="highlight-text-orange">Philippines</span> or from another country where you <span className="highlight-text-orange">legally reside</span> (with a valid residence or work visa)</li>
                  <li>Your purpose of travel is <span className="highlight-text-orange">tourism, leisure, or visiting family or friends</span></li>
                  <li>You are able to submit <span className="highlight-text-orange">complete and acceptable requirements</span> that match your profile and travel plans</li>
                </ul>
                <p className="article-body-p">
                  This visa is for Filipinos who are <span className="highlight-text-blue">not planning to work, study, or stay longer than 90 days</span>.
                </p>
                <p className="article-body-p">
                  <span className="highlight-text-blue">OFWs or residents abroad</span> may apply from their country of residence, as long as they can prove legal stay and meet the document requirements.
                </p>
                <p className="article-body-p">
                  <span className="highlight-text-blue">Foreign residents living in the Philippines</span> are usually required to submit a photocopy of their ACR I-Card, valid Philippine visa or residence permit, and entry stamps to the Philippines.
                </p>
              </div>
            </section>

            {/* Section: Requirements */}
            <section id="article-section-requirements" className="article-section-block">
              <h2 className="article-section-title-bold">Requirements</h2>

              {/* Identification Documents */}
              <div className="req-category-box">
                <h3 className="req-category-title">Identification Documents</h3>
                <ul className="req-sub-bullets">
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Valid passport (3 months validity beyond intended stay, 2 blank pages)</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Completed Schengen visa application form</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Two recent passport-sized photos with white background</li>
                </ul>
              </div>

              {/* Travel & Accommodation Proof */}
              <div className="req-category-box">
                <h3 className="req-category-title">Travel & Accommodation Proof</h3>
                <ul className="req-sub-bullets">
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Embassy checklist (if provided)</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Round-trip flight reservation with confirmed PNR</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Confirmed hotel booking or official Attestation d'Accueil</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Detailed day-by-day travel itinerary</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Schengen travel insurance (€30,000 minimum medical & repatriation coverage)</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Visa fee payment receipt</li>
                </ul>
              </div>

              {/* Proof of Financial Capacity */}
              <div className="req-category-box">
                <h3 className="req-category-title">Proof of Financial Capacity</h3>
                <ul className="req-sub-bullets">
                  <li><strong>All Applicants:</strong> Bank certificate with ADB + last 3-6 months bank statements</li>
                  <li><strong>Employed:</strong> Certificate of Employment, last 3 months payslips, approved leave letter, company ID</li>
                  <li><strong>Self-employed (registered):</strong> Business permits (DTI/SEC/Mayor's Permit), BIR tax registration, ITR (Form 1701)</li>
                  <li><strong>Self-employed (informal):</strong> Client contracts, invoices, verified online remittance records</li>
                  <li><strong>Sponsored/unemployed/students:</strong> Notarized Affidavit of Support, proof of relationship, sponsor's financial dossier</li>
                </ul>
              </div>

              {/* Proof of Rooting Ties */}
              <div className="req-category-box">
                <h3 className="req-category-title">Proof of Rooting Ties</h3>
                <ul className="req-sub-bullets">
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Employment / school enrollment certificates</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Land titles or real estate property ownership documents</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Vehicle registration certificates (OR/CR)</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Membership in professional or civic organizations</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> PSA Marriage Certificate or Birth Certificates of dependents</li>
                </ul>
              </div>

              {/* Proof of Primary Ties */}
              <div className="req-category-box">
                <h3 className="req-category-title">Proof of Primary Ties</h3>
                <ul className="req-sub-bullets">
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Old passports showing previous international travel stamps</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Photos of family dependents remaining in the Philippines</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Affidavit of Support and Guarantee (if applicable)</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Comprehensive cover letter outlining exact purpose of visit</li>
                  <li><CheckCircle2 size={15} className="green-check-icon" /> Proof of community involvement or ongoing local projects</li>
                </ul>
              </div>
            </section>

            {/* Section: Step-by-Step Guide */}
            <section id="article-section-step-guide" className="article-section-block">
              <h2 className="article-section-title-bold">Step-by-Step Guide</h2>
              <ol className="step-guide-numbered-list">
                <li><span className="step-num-pill">1</span> Fill out France-Visas application form online, print and sign</li>
                <li><span className="step-num-pill">2</span> Gather and organize all required documents on the France-Visas checklist</li>
                <li><span className="step-num-pill">3</span> Create and verify your TLScontact account</li>
                <li><span className="step-num-pill">4</span> Enter personal applicant information and application reference number</li>
                <li><span className="step-num-pill">5</span> Book your biometrics appointment at TLScontact (Manila or Cebu)</li>
                <li><span className="step-num-pill">6</span> Submit physical dossier at TLScontact center (with biometrics + service fee)</li>
                <li><span className="step-num-pill">7</span> Wait for consular review & visa decision (10-15 working days)</li>
                <li><span className="step-num-pill">8</span> Receive passport via secure courier delivery or center pickup</li>
              </ol>
            </section>

            {/* Section: Tips & Mistakes */}
            <section id="article-section-tips-mistakes" className="article-section-block">
              <h2 className="article-section-title-bold">Tips & Mistakes</h2>
              
              <div className="tips-dos-box">
                <h3 className="tips-subhead green">Dos</h3>
                <ul className="tips-bullets-list">
                  <li><CheckCircle2 size={14} className="green-check-icon" /> Double-check all documentation for date and name consistency</li>
                  <li><CheckCircle2 size={14} className="green-check-icon" /> Keep your daily travel itinerary realistic and well-matched to your budget</li>
                  <li><CheckCircle2 size={14} className="green-check-icon" /> Show stable bank account balances without sudden unexplained lump sums</li>
                  <li><CheckCircle2 size={14} className="green-check-icon" /> Add optional secondary proofs of employment and family ties</li>
                  <li><CheckCircle2 size={14} className="green-check-icon" /> Use a clear cover letter if your travel case has complex elements</li>
                </ul>
              </div>

              <div className="tips-donts-box">
                <h3 className="tips-subhead red">Common Mistakes</h3>
                <ul className="tips-bullets-list">
                  <li><AlertCircle size={14} className="red-alert-icon" /> Missing signatures on official visa application pages</li>
                  <li><AlertCircle size={14} className="red-alert-icon" /> Booking non-refundable flight tickets before receiving visa approval</li>
                  <li><AlertCircle size={14} className="red-alert-icon" /> Submitting irrelevant or uncertified translation documents</li>
                  <li><AlertCircle size={14} className="red-alert-icon" /> Applying too close to travel date (minimum 3-4 weeks recommended)</li>
                  <li><AlertCircle size={14} className="red-alert-icon" /> Using fraudulent documents (can lead to mandatory 5-year Schengen ban)</li>
                </ul>
              </div>
            </section>
          </main>

          {/* Right Sidebar Column (Image 2 right) */}
          <aside className="article-sidebar-col">
            {/* Quick Facts Card with Light Gold Border */}
            <div className="quick-facts-card">
              <h3 className="quick-facts-title">Quick Facts</h3>
              
              <div className="fact-item-row">
                <span className="fact-label">Processing Time</span>
                <span className="fact-val-bold">10-15 working days</span>
              </div>

              <div className="fact-item-row">
                <span className="fact-label">Validity Period</span>
                <span className="fact-val-bold">Up to 90 days within 180-day period</span>
              </div>

              <div className="fact-item-row">
                <span className="fact-label">Cost</span>
                <span className="fact-val-bold">₱5,440</span>
              </div>

              <div className="fact-item-row">
                <span className="fact-label">Visa Type</span>
                <span className="fact-val-bold">Short-Stay Tourist Visa</span>
              </div>

              <div className="fact-item-row location-facts">
                <span className="fact-label">Where to Apply</span>
                <div className="location-item">
                  <strong>TLScontact Manila:</strong> Ecoplaza Tower, Makati
                </div>
                <div className="location-item">
                  <strong>TLScontact Cebu:</strong> Latitude Corporate Center, Cebu Business Park
                </div>
              </div>
            </div>

            {/* Gold Gradient Decorative Card */}
            <div className="sidebar-gold-gradient-card"></div>

            {/* Related Visa Guides Section */}
            <div className="related-guides-sidebar">
              <h3 className="related-guides-title">Related Visa Guides</h3>

              {/* Guide Card 1 */}
              <div className="related-guide-card" onClick={onStartApplication}>
                <div className="guide-card-gold-thumb"></div>
                <div className="guide-card-body">
                  <h4 className="guide-title">Japan Digital Nomad & Tourist Visa 2026</h4>
                  <span className="guide-read-link">Read More →</span>
                </div>
              </div>

              {/* Guide Card 2 */}
              <div className="related-guide-card" onClick={onStartApplication}>
                <div className="guide-card-gold-thumb"></div>
                <div className="guide-card-body">
                  <h4 className="guide-title">Canada Visitor Visa & Express Application Guide</h4>
                  <span className="guide-read-link">Read More →</span>
                </div>
              </div>

              {/* Guide Card 3 */}
              <div className="related-guide-card" onClick={onStartApplication}>
                <div className="guide-card-gold-thumb"></div>
                <div className="guide-card-body">
                  <h4 className="guide-title">Australia 600 Visitor Migration Visa</h4>
                  <span className="guide-read-link">Read More →</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
