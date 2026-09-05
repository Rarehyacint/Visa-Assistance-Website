import React from 'react';
import { Plane, GraduationCap, Laptop, Home, Users, Calendar, ArrowRight, CheckCircle2, ShieldCheck, Clock, Lock } from 'lucide-react';
import { visaCategories } from '../../data/visaData';

const iconMap = {
  Plane: Plane,
  GraduationCap: GraduationCap,
  Laptop: Laptop,
  Home: Home,
  Users: Users,
  Calendar: Calendar
};

export default function VisasPage({ onSelectVisa, onScheduleCall, onStartApplication }) {
  return (
    <div className="page-view visas-page animate-fade-in">
      {/* 1. Official Pathways Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <div className="page-hero-inner">
            <span className="hero-tag-blue">OFFICIAL PATHWAYS</span>
            <h1 className="page-hero-title">
              Navigate Global Borders with Absolute Confidence
            </h1>
            <p className="page-hero-subtitle">
              Select your destination and intent. Our institutional-grade processing ensures your visa application is precise, compliant, and prioritized.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Royal Blue Grid Section (Image 1) */}
      <section className="royal-blue-band visa-cards-band">
        <div className="container">
          <div className="visa-cards-grid-3col">
            {visaCategories.map((visa) => {
              const Icon = iconMap[visa.icon] || Plane;
              const isConsultation = visa.isConsultation;

              return (
                <div
                  key={visa.id}
                  id={visa.id}
                  className={`visa-figma-card ${isConsultation ? 'consultation-style-card' : ''}`}
                >
                  <div className="visa-card-top-icon">
                    <Icon size={26} className="visa-icon-svg" />
                  </div>

                  <h3 className="visa-card-heading">{visa.title}</h3>
                  <p className="visa-card-description">{visa.tagline}</p>

                  <div className="visa-card-reqs-wrap">
                    <span className="visa-card-reqs-title">Key Requirements:</span>
                    <ul className="visa-card-reqs-list">
                      {visa.keyRequirements.map((req, idx) => (
                        <li key={idx} className="visa-req-bullet">
                          <CheckCircle2 size={14} className="req-check-svg" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="visa-card-bottom-action">
                    {isConsultation ? (
                      <button
                        className="btn-schedule-call-pill"
                        onClick={() => onScheduleCall(visa)}
                      >
                        <Calendar size={15} />
                        <span>Schedule Free Call</span>
                      </button>
                    ) : (
                      <button
                        className="btn-learn-more-link"
                        onClick={() => onSelectVisa(visa)}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Institutional Reliability Section */}
      <section className="reliability-section-clean">
        <div className="container">
          <div className="reliability-header-center">
            <h2 className="section-main-title">Institutional Reliability. Personal Clarity.</h2>
            <p className="section-main-subtitle">
              We bridge the gap between complex bureaucratic procedures and your international goals. Our approach is defined by precision and transparency.
            </p>
          </div>

          <div className="reliability-split-layout">
            <div className="reliability-pillars-column">
              <div className="pillar-row-item">
                <div className="pillar-icon-box">
                  <ShieldCheck size={26} className="pillar-svg" />
                </div>
                <div className="pillar-details">
                  <h3 className="pillar-title">Guaranteed Compliance</h3>
                  <p className="pillar-text">
                    Every document is reviewed by certified immigration lawyers to ensure zero errors and maximum compliance.
                  </p>
                </div>
              </div>

              <div className="pillar-row-item">
                <div className="pillar-icon-box">
                  <Clock size={26} className="pillar-svg" />
                </div>
                <div className="pillar-details">
                  <h3 className="pillar-title">Direct Government Links</h3>
                  <p className="pillar-text">
                    We maintain verified portals with embassy systems, reducing turnaround time by up to 40% compared to manual filings.
                  </p>
                </div>
              </div>

              <div className="pillar-row-item">
                <div className="pillar-icon-box">
                  <Lock size={26} className="pillar-svg" />
                </div>
                <div className="pillar-details">
                  <h3 className="pillar-title">Data Sovereignty</h3>
                  <p className="pillar-text">
                    Your sensitive personal data is protected by AES-256 encryption and strictly adheres to global GDPR/CCPA standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="reliability-image-column">
              <div className="passports-photo-frame">
                <img
                  src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1000&q=80"
                  alt="US and international passports held in hands with travel boarding passes"
                  className="passports-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey CTA Banner */}
      <section className="journey-blue-cta">
        <div className="container">
          <div className="journey-cta-inner">
            <h2 className="cta-banner-title">Ready to Start Your Journey?</h2>
            <p className="cta-banner-subtitle">
              Take the first step toward your destination with a 15-minute diagnostic assessment.
            </p>
            <button
              className="btn-cta-white-pill"
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
