import React from 'react';
import { processSteps } from '../../data/pricingData';

export default function ProcessSteps({ onStartStep }) {
  return (
    <section className="process-section" id="process-section">
      <div className="container">
        <div className="process-header">
          <span className="process-pretitle">HOW THE PROCESS WORKS</span>
          <h2 className="process-title">From Application to Approval</h2>
        </div>

        {/* 4-step horizontal connected timeline matching Image 4 */}
        <div className="process-timeline-wrap">
          <div className="process-connecting-line"></div>

          <div className="process-steps-grid">
            {processSteps.map((item, index) => (
              <div key={item.step} className="process-step-item">
                <div className="process-badge-circle">
                  <span>{item.step}</span>
                </div>

                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
