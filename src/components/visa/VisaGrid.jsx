import React from 'react';
import { Plane, GraduationCap, Laptop, Home, Users, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { visaCategories } from '../../data/visaData';

const iconMap = {
  Plane: Plane,
  GraduationCap: GraduationCap,
  Laptop: Laptop,
  Home: Home,
  Users: Users,
  Calendar: Calendar
};

export default function VisaGrid({
  searchQuery = '',
  selectedCategory = 'all',
  onLearnMore,
  onScheduleCall
}) {
  const filteredVisas = visaCategories.filter((item) => {
    // Search match
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.keyRequirements &&
        item.keyRequirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase())));

    // Category match
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'leisure') return matchesSearch && item.id === 'tourist-visa';
    if (selectedCategory === 'academic') return matchesSearch && item.id === 'student-visa';
    if (selectedCategory === 'nomad') return matchesSearch && item.id === 'digital-nomad';
    if (selectedCategory === 'longterm')
      return (
        matchesSearch && (item.id === 'retirement-visa' || item.id === 'family-reunification')
      );
    return matchesSearch;
  });

  return (
    <section className="visa-grid-section" id="visa-grid-section">
      <div className="container">
        <div className="visa-pathways-grid">
          {filteredVisas.map((visa) => {
            const Icon = iconMap[visa.icon] || Plane;
            const isConsultation = visa.isConsultation;

            return (
              <div
                key={visa.id}
                id={visa.id}
                className={`figma-visa-card ${isConsultation ? 'consultation-card' : ''}`}
              >
                {/* Header with icon */}
                <div className="figma-visa-card-header">
                  <div className="figma-visa-icon-wrap">
                    <Icon size={24} className="figma-visa-icon" />
                  </div>
                  <h3 className="figma-visa-title">{visa.title}</h3>
                </div>

                {/* Description */}
                <p className="figma-visa-desc">{visa.tagline}</p>

                {/* Requirements section */}
                <div className="figma-visa-reqs">
                  <h4 className="figma-reqs-label">Key Requirements:</h4>
                  <ul className="figma-reqs-list">
                    {visa.keyRequirements.map((req, idx) => (
                      <li key={idx} className="figma-req-item">
                        <CheckCircle2 size={15} className="req-check-icon" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="figma-visa-action-wrap">
                  {isConsultation ? (
                    <button
                      className="btn-schedule-call"
                      onClick={() => onScheduleCall(visa)}
                    >
                      <Calendar size={16} />
                      <span>Schedule Free Call</span>
                    </button>
                  ) : (
                    <button
                      className="figma-learn-more-link"
                      onClick={() => onLearnMore(visa)}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
