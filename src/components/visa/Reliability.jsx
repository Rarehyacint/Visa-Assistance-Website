import React from 'react';
import { ShieldCheck, Clock, Lock, ArrowRight } from 'lucide-react';

export default function Reliability({ onStartApplication }) {
  return (
    <div className="reliability-section-wrap">
      {/* Trust & Features Block */}
      <section className="reliability-section">
        <div className="container">
          <div className="reliability-header">
            <h2 className="reliability-title">Institutional Reliability. Personal Clarity.</h2>
            <p className="reliability-subtitle">
              We bridge the gap between complex bureaucratic procedures and your international goals. Our approach is defined by precision and transparency.
            </p>
          </div>

          <div className="reliability-content-grid">
            {/* Left 3 Pillars matching Image 5 */}
            <div className="reliability-pillars-list">
              <div className="pillar-item">
                <div className="pillar-icon-wrap">
                  <ShieldCheck size={26} className="pillar-icon" />
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-heading">Guaranteed Compliance</h3>
                  <p className="pillar-desc">
                    Every document is reviewed by certified immigration lawyers to ensure zero errors and maximum compliance.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-wrap">
                  <Clock size={26} className="pillar-icon" />
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-heading">Direct Government Links</h3>
                  <p className="pillar-desc">
                    We maintain verified portals with embassy systems, reducing turnaround time by up to 40% compared to manual filings.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-wrap">
                  <Lock size={26} className="pillar-icon" />
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-heading">Data Sovereignty</h3>
                  <p className="pillar-desc">
                    Your sensitive personal data is protected by AES-256 encryption and strictly adheres to global GDPR/CCPA standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Passport Photography Media matching Image 5 */}
            <div className="reliability-media-wrap">
              <div className="passport-photo-card">
                <img
                  src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1000&q=80"
                  alt="Hands holding passports and travel boarding passes"
                  className="passport-photo-img"
                  loading="lazy"
                />
                <div className="passport-photo-badge">
                  <span>99.4% Total Application Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Your Journey CTA Banner matching Image 5 bottom */}
      <section className="journey-cta-banner">
        <div className="container">
          <div className="journey-cta-content">
            <h2 className="journey-cta-title">Ready to Start Your Journey?</h2>
            <p className="journey-cta-subtitle">
              Take the first step toward your destination with a 15-minute diagnostic assessment.
            </p>
            <button
              className="btn-start-app-white"
              onClick={onStartApplication}
            >
              Start Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
