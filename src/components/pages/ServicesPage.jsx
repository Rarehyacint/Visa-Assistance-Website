import React from 'react';
import { Check, X, ArrowRight, ShieldCheck, FileText, UserCheck, HeartHandshake, Compass } from 'lucide-react';
import { pricingPlans, supportEcosystem } from '../../data/pricingData';

export default function ServicesPage({ onSelectPlan, onStartApplication, onSelectService }) {
  return (
    <div className="page-view services-page animate-fade-in">
      {/* 1. Hero Header (2-Column split matching Image 3) */}
      <section className="page-hero-header services-hero-split">
        <div className="container">
          <div className="services-hero-grid">
            {/* Left Copy */}
            <div className="services-hero-copy">
              <span className="hero-tag-blue">PREMIUM SUPPORT</span>
              <h1 className="page-hero-title">Beyond the Visa</h1>
              <p className="page-hero-subtitle">
                The visa is just the beginning. We provide a full suite of institutional-grade support services to ensure your transition, travel, and integration are seamless.
              </p>
              <button
                className="btn-explore-dark-pill"
                onClick={() => {
                  const el = document.getElementById('services-pricing-band');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Now
              </button>
            </div>

            {/* Right Media Photo with corner anchors and 991 | 507 badge */}
            <div className="services-hero-media">
              <div className="services-photo-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern office desk with laptop and high-rise cityscape"
                  className="services-hero-img"
                  loading="lazy"
                />
                
                {/* Visual Corner Frame Accents matching Image 3 */}
                <div className="corner-accent corner-tl"></div>
                <div className="corner-accent corner-tr"></div>
                <div className="corner-accent corner-bl"></div>
                <div className="corner-accent corner-br"></div>

                {/* Badge matching Image 3 */}
                <div className="services-spec-badge">
                  <span className="badge-num-left">991</span>
                  <span className="badge-divider-bars">☷</span>
                  <span className="badge-num-right">507</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Royal Blue Pricing Band (Image 3 middle) */}
      <section className="royal-blue-band services-pricing-band" id="services-pricing-band">
        <div className="container">
          <div className="services-band-header">
            <h2 className="band-main-title">Institutional Reliability. Personal Clarity.</h2>
            <p className="band-main-subtitle">
              We bridge the gap between complex bureaucratic procedures and your international goals. Our approach is defined by precision and transparency.
            </p>
          </div>

          {/* 3 Tier Pricing Cards */}
          <div className="pricing-cards-3col-grid">
            {pricingPlans.map((plan) => {
              const isFeatured = plan.featured || plan.popular;

              return (
                <div
                  key={plan.id}
                  className={`service-pricing-card ${isFeatured ? 'featured-glow-card' : ''}`}
                >
                  <div className="pricing-card-header">
                    <h3 className="plan-name-label">{plan.name}</h3>
                    <div className="plan-price-display">
                      <span className="dollar-symbol">$</span>
                      <span className="price-number">{plan.price}</span>
                    </div>
                  </div>

                  <ul className="plan-checklist">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`checklist-item ${feat.included ? 'item-included' : 'item-excluded'}`}
                      >
                        <span className="check-icon-wrap">
                          {feat.included ? (
                            <Check size={14} className="icon-check-included" />
                          ) : (
                            <X size={14} className="icon-x-excluded" />
                          )}
                        </span>
                        <span className="checklist-text">{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pricing-action-footer">
                    <button
                      className={`btn-plan-action ${isFeatured ? 'btn-plan-featured' : 'btn-plan-standard'}`}
                      onClick={() => onSelectPlan && onSelectPlan(plan)}
                    >
                      {plan.buttonText || 'Get Started'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Integrated Support Ecosystem (Image 3 bottom) */}
      <section className="ecosystem-section-white">
        <div className="container">
          <div className="ecosystem-header-center">
            <h2 className="section-main-title">Integrated Support Ecosystem</h2>
            <p className="section-main-subtitle">
              Precision-engineered services designed to handle the complexities of international relocation and professional compliance.
            </p>
          </div>

          <div className="ecosystem-cards-2x2-grid">
            {supportEcosystem.map((item) => (
              <div
                key={item.id}
                className="ecosystem-card-item"
                onClick={() => onSelectService && onSelectService(item)}
              >
                <h3 className="eco-card-title">{item.title}</h3>
                <p className="eco-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journey CTA Banner (Image 3 bottom) */}
      <section className="journey-blue-cta">
        <div className="container">
          <div className="journey-cta-inner">
            <h2 className="cta-banner-title">Ready to Start Your Journey?</h2>
            <p className="cta-banner-subtitle">
              Get a free 15-minute consultation today to determine the best visa path for your goals.
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
