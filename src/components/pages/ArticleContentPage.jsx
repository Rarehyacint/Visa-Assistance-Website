import React, { useState } from 'react';
import { CheckCircle2, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export default function ArticleContentPage({ onBackToArticles, onStartApplication }) {
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
    <div className="page-view article-content-page-figma animate-fade-in">
      {/* 1. Full-Width Passports & World Map Hero Banner (Image 2 Top) */}
      <div className="article-hero-banner-wrap">
        <img
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1600&q=80"
          alt="Passports over vintage world map"
          className="article-hero-banner-img"
        />
        {onBackToArticles && (
          <button className="btn-back-to-articles-float" onClick={onBackToArticles}>
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </button>
        )}
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

      {/* 3. Article 2-Column Content Layout (Images 2, 3, 4) */}
      <div className="container article-main-container">
        <div className="article-layout-grid">
          {/* Main Left Content Column */}
          <main className="article-content-main-col">
            {/* =========================================================
               Section 1: About This Visa (Image 2 Left)
               ========================================================= */}
            <section id="article-section-overview" className="article-section-block">
              <div className="article-info-card-beige">
                <h2 className="article-card-head-title">About This Visa</h2>
                <p className="article-body-p">
                  If you're a <span className="highlight-text-orange">Philippine Passport Holder</span> planning to
                  visit France for tourism, leisure, or to see friends and family, this is the visa you'll need.
                </p>
                <p className="article-body-p">
                  The <strong className="highlight-text-orange">France Short-Stay Tourist Visa</strong> lets you stay in
                  France — and other Schengen countries — for{' '}
                  <strong className="highlight-text-orange">up to 90 days within any 180-day period</strong>. You can
                  move freely between countries in the Schengen Area during your trip, but the total number of days
                  inside can't go over 90 within any 6-month window.
                </p>
                <p className="article-body-p">
                  For most first-time applicants, this visa is{' '}
                  <strong className="highlight-text-orange">single-entry</strong> — meaning once you leave the Schengen
                  zone, your visa is no longer valid, even if you haven't used up all 90 days. That's why it's
                  important to finalize your full travel route before entering.
                </p>
                <p className="article-body-p">
                  If you've traveled to the Schengen Area before and followed all the rules, you may be eligible for a
                  multiple-entry visa, which lets you enter and exit multiple times. These are the usual criteria:
                </p>
                <ul className="article-bullet-list">
                  <li>
                    <strong>1-Year Multiple-Entry Visa</strong> — if you've used 3 Schengen visas in the last 2 years
                  </li>
                  <li>
                    <strong>3-Year Multiple-Entry Visa</strong> — if you've held a 1-year multiple-entry visa and used
                    it properly in the last 2 years
                  </li>
                  <li>
                    <strong>5-Year Multiple-Entry Visa</strong> — if you've held a 2-year+ multiple-entry visa and used
                    it properly in the last 3 years
                  </li>
                </ul>
                <p className="article-body-p">
                  Even with long-validity visas, the 90 days in 180 days rule still applies. You can't live in Europe —
                  it's still a tourist visa.
                </p>
                <p className="article-body-p">
                  This visa also doesn't allow any kind of paid work or long-term stay. All applications from the
                  Philippines are submitted through TLScontact Manila or Cebu, and the final decision is made by the
                  French Embassy.
                </p>
              </div>
            </section>

            {/* =========================================================
               Section 2: Eligibility Criteria (Image 3 Left)
               ========================================================= */}
            <section id="article-section-eligibility" className="article-section-block">
              <div className="article-info-card-beige">
                <h2 className="article-card-head-title">Eligibility Criteria</h2>
                <p className="article-body-p">You can apply for a France Short-Stay Tourist Visa if:</p>
                <ul className="article-bullet-list">
                  <li>
                    You hold a valid <span className="highlight-text-orange">Philippine Passport</span>
                  </li>
                  <li>
                    You're applying from the <span className="highlight-text-orange">Philippines</span> or from another
                    country where you <span className="highlight-text-orange">legally reside</span> (with a valid
                    residence or work visa)
                  </li>
                  <li>
                    Your purpose of travel is{' '}
                    <span className="highlight-text-orange">tourism, leisure, or visiting family or friends</span>
                  </li>
                  <li>
                    You are able to submit{' '}
                    <span className="highlight-text-orange">complete and acceptable requirements</span> that match your
                    profile and travel plans
                  </li>
                </ul>
                <p className="article-body-p">
                  This visa is for Filipinos who are{' '}
                  <strong className="highlight-text-darkblue">not planning to work, study, or stay longer than 90 days.</strong>
                </p>
                <p className="article-body-p">
                  <strong className="highlight-text-darkblue">OFWs or residents abroad</strong> may apply from their
                  country of residence, as long as they can prove legal stay and meet the document requirements.
                </p>
                <p className="article-body-p">
                  <strong className="highlight-text-darkblue">Foreign residents living in the Philippines</strong> are
                  usually required to{' '}
                  <strong className="highlight-text-darkblue">
                    submit a photocopy of their ACR I-Card, valid Philippine visa or residence permit, and entry stamps
                    to the Philippines.
                  </strong>
                </p>
              </div>
            </section>

            {/* =========================================================
               Section 3: Requirements (Image 3 Left)
               ========================================================= */}
            <section id="article-section-requirements" className="article-section-block">
              <h2 className="article-section-title-bold">Requirements</h2>

              {/* Identification Documents */}
              <div className="req-numbered-group">
                <span className="req-group-label-small">Identification Documents</span>
                <ul className="req-numbered-list">
                  <li>
                    <span className="num-dot-dark">1</span>
                    <span>Valid passport (6 months validity, 2 blank pages)</span>
                  </li>
                  <li>
                    <span className="num-dot-dark">2</span>
                    <span>Completed Schengen visa application form</span>
                  </li>
                  <li>
                    <span className="num-dot-dark">3</span>
                    <span>Two recent passport-sized photos</span>
                  </li>
                </ul>
              </div>

              {/* Travel & Application Documents */}
              <div className="req-numbered-group">
                <span className="req-group-label-small">Travel & Application Documents</span>
                <ul className="req-numbered-list">
                  <li>
                    <span className="num-dot-green">1</span>
                    <span>Embassy checklist (if provided)</span>
                  </li>
                  <li>
                    <span className="num-dot-green">2</span>
                    <span>Round-trip flight reservation</span>
                  </li>
                  <li>
                    <span className="num-dot-green">3</span>
                    <span>Hotel booking or Proof of Accommodation</span>
                  </li>
                  <li>
                    <span className="num-dot-green">4</span>
                    <span>Detailed daily itinerary</span>
                  </li>
                  <li>
                    <span className="num-dot-green">5</span>
                    <span>Schengen travel insurance (€30,000 coverage)</span>
                  </li>
                  <li>
                    <span className="num-dot-green">6</span>
                    <span>Visa fee payment</span>
                  </li>
                </ul>
              </div>

              {/* Proof of Financial Capacity */}
              <div className="req-numbered-group">
                <span className="req-group-label-small">Proof of Financial Capacity</span>
                <ul className="req-numbered-list">
                  <li>
                    <span className="num-dot-amber">1</span>
                    <span><strong>All applicants:</strong> Bank certificate + 6 months bank statements</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">2</span>
                    <span><strong>Employed:</strong> Certificate of employment, payslips, contract, company ID</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">3</span>
                    <span><strong>Self-employed (registered):</strong> Business permits, DTI/SEC/BIR docs, ITR</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">4</span>
                    <span><strong>Self-employed (informal):</strong> Client contracts, invoices, bank statements</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">5</span>
                    <span><strong>Sponsored/unemployed/student:</strong> Sponsor letter, proof of relationship, sponsor's financial doc</span>
                  </li>
                </ul>
              </div>

              {/* Proof of Strong Ties */}
              <div className="req-numbered-group">
                <span className="req-group-label-small">Proof of Strong Ties</span>
                <ul className="req-numbered-list">
                  <li>
                    <span className="num-dot-green">1</span>
                    <span>Employment or school enrollment</span>
                  </li>
                  <li>
                    <span className="num-dot-green">2</span>
                    <span>Business/property ownership</span>
                  </li>
                  <li>
                    <span className="num-dot-green">3</span>
                    <span>Vehicle ownership</span>
                  </li>
                  <li>
                    <span className="num-dot-green">4</span>
                    <span>Membership in organizations</span>
                  </li>
                  <li>
                    <span className="num-dot-green">5</span>
                    <span>Marriage/Birth Certificates</span>
                  </li>
                </ul>
              </div>

              {/* Proof of Strong Ties (Additional) */}
              <div className="req-numbered-group">
                <span className="req-group-label-small">Proof of Strong Ties (Additional)</span>
                <ul className="req-numbered-list">
                  <li>
                    <span className="num-dot-amber">1</span>
                    <span>Old passports with travel stamps</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">2</span>
                    <span>Photos of family/dependents in PH</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">3</span>
                    <span>Affidavit of support and guarantee</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">4</span>
                    <span>Cover letter explaining trip purpose</span>
                  </li>
                  <li>
                    <span className="num-dot-amber">5</span>
                    <span>Proof of community involvement</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* =========================================================
               Section 4: Step-by-Step Guide (Image 3 & 4 Left)
               ========================================================= */}
            <section id="article-section-step-guide" className="article-section-block">
              <h2 className="article-section-title-bold">Step-by-Step Guide</h2>
              <ol className="step-guide-numbered-list">
                <li>
                  <span className="step-num-pill">1</span>
                  <span>Fill out France-Visas application form online, print and sign.</span>
                </li>
                <li>
                  <span className="step-num-pill">2</span>
                  <span>Check required documents on France-Visas site.</span>
                </li>
                <li>
                  <span className="step-num-pill">3</span>
                  <span>Create TLScontact account.</span>
                </li>
                <li>
                  <span className="step-num-pill">4</span>
                  <span>Enter personal information.</span>
                </li>
                <li>
                  <span className="step-num-pill">5</span>
                  <span>Book TLS appointment (Manila or Cebu).</span>
                </li>
                <li>
                  <span className="step-num-pill">6</span>
                  <span>Submit application at TLScontact (with biometrics + fee).</span>
                </li>
                <li>
                  <span className="step-num-pill">7</span>
                  <span>Wait for visa decision (10-15 working days).</span>
                </li>
                <li>
                  <span className="step-num-pill">8</span>
                  <span>Get passport (pickup or courier).</span>
                </li>
              </ol>
            </section>

            {/* =========================================================
               Section 5: Tips & Mistakes (Image 4 Left)
               ========================================================= */}
            <section id="article-section-tips-mistakes" className="article-section-block">
              <h2 className="article-section-title-bold">Tips & Mistakes</h2>

              {/* What to do? */}
              <div className="tips-action-box">
                <h4 className="tips-box-heading">What to do?</h4>
                <ul className="tips-green-checks-list">
                  <li>
                    <CheckCircle2 size={16} className="green-circle-icon" />
                    <span>Double-check documents for consistency</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="green-circle-icon" />
                    <span>Keep itinerary realistic</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="green-circle-icon" />
                    <span>Show stable finances</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="green-circle-icon" />
                    <span>Add optional proof of ties</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="green-circle-icon" />
                    <span>Use a cover letter if case is complicated</span>
                  </li>
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="common-mistakes-box">
                <h3 className="mistakes-main-title">Common Mistakes</h3>
                <ul className="mistakes-bullet-list">
                  <li>Missing signatures</li>
                  <li>Booking non-refundable flights/hotels</li>
                  <li>Submitting irrelevant info</li>
                  <li>Applying too close to travel date</li>
                  <li>Using fake documents (can lead to 5-year ban)</li>
                </ul>
              </div>
            </section>
          </main>

          {/* =========================================================
             Right Sidebar Column (Images 2, 3, 4 Right)
             ========================================================= */}
          <aside className="article-sidebar-col">
            {/* 1. Quick Facts Card (Image 2 Right) */}
            <div className="quick-facts-card-figma">
              <h3 className="quick-facts-header-green">Quick Facts:</h3>

              <div className="quick-fact-row">
                <span className="quick-fact-label">Processing Time</span>
                <span className="quick-fact-val">10–15 working days</span>
              </div>

              <div className="quick-fact-row">
                <span className="quick-fact-label">Validity Period</span>
                <span className="quick-fact-val">Up to 90 days within 180-day period</span>
              </div>

              <div className="quick-fact-row">
                <span className="quick-fact-label">Cost</span>
                <span className="quick-fact-val">₱5,440</span>
              </div>

              <div className="quick-fact-row">
                <span className="quick-fact-label">Visa Type</span>
                <span className="quick-fact-val">Short-Stay Tourist Visa</span>
              </div>

              <div className="quick-fact-row location-row">
                <span className="quick-fact-label">Where To Apply</span>
                <div className="location-detail-line">
                  <strong>TLScontact Manila:</strong> Proscenium Tower, Makati
                </div>
                <div className="location-detail-line">
                  <strong>TLScontact Cebu:</strong> Latitude Corporate Center, Cebu Business Park
                </div>
              </div>
            </div>

            {/* 2. Gold/Beige Gradient Box (Image 2 / 3 Right) */}
            <div className="sidebar-gold-gradient-card-large"></div>

            {/* 3. Related Visa Guides (Images 3, 4 Right) */}
            <div className="related-guides-section-figma">
              <h3 className="related-guides-heading-main">Related Visa Guides</h3>

              {/* Guide Card 1 */}
              <div className="related-guide-item-card" onClick={onStartApplication}>
                <div className="guide-top-gold-gradient"></div>
                <div className="guide-card-content">
                  <h4 className="guide-card-title">Japan Digital Nomad Visa Guide 2026</h4>
                  <span className="guide-read-more-link">Read More →</span>
                </div>
              </div>

              {/* Guide Card 2 */}
              <div className="related-guide-item-card" onClick={onStartApplication}>
                <div className="guide-top-gold-gradient"></div>
                <div className="guide-card-content">
                  <h4 className="guide-card-title">Canada Work Permit Application Guide</h4>
                  <span className="guide-read-more-link">Read More →</span>
                </div>
              </div>

              {/* Guide Card 3 */}
              <div className="related-guide-item-card" onClick={onStartApplication}>
                <div className="guide-top-gold-gradient"></div>
                <div className="guide-card-content">
                  <h4 className="guide-card-title">Australia Skilled Migration Visa</h4>
                  <span className="guide-read-more-link">Read More →</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 4. Ready to Start Your Journey? CTA Banner */}
      <section className="journey-blue-cta">
        <div className="container">
          <div className="journey-cta-inner">
            <h2 className="cta-banner-title">Ready to Start Your Journey?</h2>
            <p className="cta-banner-subtitle">
              Take the first step toward your destination with a 15-minute diagnostic assessment.
            </p>
            <button className="btn-cta-white-pill" onClick={onStartApplication}>
              Start Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
