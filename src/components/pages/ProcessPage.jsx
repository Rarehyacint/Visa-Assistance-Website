import React, { useState } from 'react';
import { CheckCircle2, FolderCheck, Radio, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { processFrameworkSteps, processClarityFaqs } from '../../data/pricingData';

export default function ProcessPage({ onStartApplication, onOpenDiagnostic, onOpenDocumentPortal }) {
  // All accordions open by default as shown in Image 4, but user can toggle them
  const [openFaqs, setOpenFaqs] = useState({
    'faq-duration': true,
    'faq-rejection': true,
    'faq-tracking': true
  });

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleManageProcess = () => {
    if (onOpenDocumentPortal) {
      onOpenDocumentPortal();
    } else if (onStartApplication) {
      onStartApplication();
    }
  };

  return (
    <div className="page-view process-page animate-fade-in">
      {/* 1. Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <div className="page-hero-inner">
            <span className="hero-tag-blue">PRECISION WORKFLOW</span>
            <h1 className="page-hero-title">
              Navigating Global Borders, Simplified.
            </h1>
            <p className="page-hero-subtitle">
              Our structured 4-step framework is designed to eliminate uncertainty and maximize approval rates. We handle the complexity so you can focus on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Process Clarity Section (Royal Blue with Glowing Accordions matching Image 4) */}
      <section className="royal-blue-band process-clarity-band">
        <div className="container">
          <div className="process-clarity-header">
            <h2 className="clarity-title">Process Clarity</h2>
            <p className="clarity-subtitle">Addressing common concerns about the journey.</p>
          </div>

          <div className="clarity-accordion-stack">
            {processClarityFaqs.map((faq) => {
              const isOpen = openFaqs[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`clarity-accordion-card ${isOpen ? 'is-expanded' : ''}`}
                >
                  <button
                    className="clarity-accordion-toggle"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="clarity-faq-question">{faq.question}</span>
                    <span className="clarity-toggle-action">
                      {isOpen ? 'Click to Collapse' : 'Click to Expand'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="clarity-accordion-body animate-fade-in">
                      <p className="clarity-faq-answer">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 4-Step Process Section (2x2 Grid matching Image 4) */}
      <section className="process-steps-section-white">
        <div className="container">
          <div className="process-2x2-grid">
            {processFrameworkSteps.map((step, idx) => (
              <div key={idx} className="process-step-box">
                <h3 className="process-step-title-bold">
                  {step.stepNumber}: {step.title}
                </h3>
                <p className="process-step-text-desc">{step.description}</p>

                {/* Bullets */}
                {step.bullets && step.bullets.length > 0 && (
                  <ul className="process-step-bullets-list">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="process-bullet-item">
                        <CheckCircle2 size={15} className="bullet-check-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Step 02 specific button */}
                {step.actionType === 'manage-process' && (
                  <div className="step-action-wrapper">
                    <button
                      className="btn-manage-process-pill"
                      onClick={handleManageProcess}
                    >
                      <FolderCheck size={16} />
                      <span>{step.actionLabel || 'Manage Application Process'}</span>
                    </button>
                  </div>
                )}

                {/* Step 03 specific live tracking badge */}
                {step.actionType === 'live-tracking' && step.liveTracking && (
                  <div className="step-action-wrapper">
                    <div className="live-tracking-badge-card">
                      <div className="tracking-top-tag">
                        <span className="live-indicator-dot animate-pulse"></span>
                        <span className="tracking-tag-text">{step.liveTracking.tag}</span>
                      </div>
                      <div className="tracking-case-id">{step.liveTracking.caseId}</div>
                      <div className="tracking-current-status">
                        Current Status: <span className="status-highlight">{step.liveTracking.status}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
