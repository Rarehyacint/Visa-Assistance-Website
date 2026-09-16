import React from 'react';
import { FileText, UserCheck, ShieldCheck, Check } from 'lucide-react';
import { supportEcosystem } from '../../data/pricingData';

const iconMap = {
  FileText: FileText,
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck
};

export default function BeyondVisa({ onSelectService }) {
  return (
    <section className="beyond-visa-section" id="beyond-visa-section">
      <div className="container">
        <div className="beyond-header">
          <h2 className="beyond-title">Beyond The Visa</h2>
          <p className="beyond-subtitle">
            Comprehensive support services to ensure your transition is smooth and stress-free.
          </p>
        </div>

        <div className="beyond-cards-grid">
          {supportEcosystem.map((service) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <div
                key={service.id}
                className="beyond-card"
                onClick={() => onSelectService(service)}
              >
                <div className="beyond-card-icon-pill">
                  <Icon size={26} className="beyond-icon" />
                </div>
                <h3 className="beyond-card-title">{service.title}</h3>
                <p className="beyond-card-desc">{service.description}</p>
                
                <ul className="beyond-feature-bullets">
                  {(service.features || []).map((feat, idx) => (
                    <li key={idx}>
                      <Check size={14} className="check-bullet" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
