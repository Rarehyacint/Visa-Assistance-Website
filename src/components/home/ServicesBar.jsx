import React from 'react';
import { Plane, GraduationCap, Laptop, Users, Home, ArrowRight } from 'lucide-react';
import { visaCategories } from '../../data/visaData';

const iconMap = {
  Plane: Plane,
  GraduationCap: GraduationCap,
  Laptop: Laptop,
  Users: Users,
  Home: Home
};

export default function ServicesBar({ onSelectVisa }) {
  // Only the 5 primary visa types for the homepage bar
  const services = visaCategories.filter(v => !v.isConsultation);

  return (
    <section className="services-bar-section" id="services-section">
      <div className="container">
        <div className="services-section-header">
          <span className="services-pretitle">OUR SERVICES</span>
          <h2 className="services-title">Every Visa Type, covered</h2>
        </div>

        <div className="services-cards-grid">
          {services.map((item) => {
            const Icon = iconMap[item.icon] || Plane;
            return (
              <div
                key={item.id}
                className="service-card"
                onClick={() => onSelectVisa(item)}
              >
                <div className="service-card-icon-wrap">
                  <Icon size={24} className="service-icon" />
                </div>

                <h3 className="service-card-title">{item.title}</h3>

                <p className="service-card-desc">{item.shortDesc}</p>

                <div className="service-card-footer">
                  <span className="service-link-text">Explore requirements</span>
                  <ArrowRight size={14} className="service-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
