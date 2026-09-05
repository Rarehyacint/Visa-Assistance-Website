import React, { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { pricingPlans } from '../../data/pricingData';

export default function Pricing({ onSelectPlan }) {
  const [selectedPlanId, setSelectedPlanId] = useState('professional');

  return (
    <section className="pricing-section" id="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <span className="pricing-pretitle">TRANSPARENT PRICING</span>
          <h2 className="pricing-title">One fixed price, no surprises</h2>
          <p className="pricing-subtitle">
            No hidden fees. Professional service charges exclude official government visa fees.
          </p>
        </div>

        {/* 3 Pricing Cards matching Image 4 */}
        <div className="pricing-cards-grid">
          {pricingPlans.map((plan) => {
            const isHighlighted = plan.popular;

            return (
              <div
                key={plan.id}
                className={`pricing-card ${isHighlighted ? 'featured-card' : ''}`}
              >
                <div className="pricing-card-header">
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-price-wrap">
                    <span className="pricing-amount">${plan.price}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="pricing-features-list">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className={`feature-item ${feat.included ? 'included' : 'excluded'}`}
                    >
                      <span className="feature-icon-bullet">
                        {feat.included ? (
                          <Check size={14} className="icon-check" />
                        ) : (
                          <X size={14} className="icon-cross" />
                        )}
                      </span>
                      <span className="feature-text">{feat.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="pricing-btn-wrap">
                  <button
                    className={`btn-pricing-action ${
                      isHighlighted ? 'btn-pricing-white' : 'btn-pricing-dark'
                    }`}
                    onClick={() => onSelectPlan(plan)}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
