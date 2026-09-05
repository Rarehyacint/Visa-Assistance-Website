import React, { useState } from 'react';
import { Plane, Briefcase, GraduationCap, Building2, Calendar, Clock, TrendingUp, ArrowRight, Check, CheckCircle2 } from 'lucide-react';

export default function DiagnosticPage({ onComplete, onNavigateToApplication, onShowToast }) {
  // Step State: 1 | 2 | 3
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [primaryIntent, setPrimaryIntent] = useState('business');
  const [subCategory, setSubCategory] = useState('Academic / Research');
  const [destinationCountry, setDestinationCountry] = useState('United States');
  const [lengthOfStay, setLengthOfStay] = useState('90-180');
  const [employmentStatus, setEmploymentStatus] = useState('Employed Full-Time');

  const intentOptions = [
    {
      id: 'tourism',
      title: 'Tourism',
      desc: 'Vacation, visiting family, or short term leisure.'
    },
    {
      id: 'business',
      title: 'Business',
      desc: 'Meeting, conferences, or corporate events.'
    },
    {
      id: 'employment',
      title: 'Employment',
      desc: 'Long-term work assignments or relocation.'
    },
    {
      id: 'education',
      title: 'Education',
      desc: 'University enrollment or academic research.'
    }
  ];

  const subCategories = [
    'Academic / Research',
    'Athletic / Sports Event',
    'Entertainment / Performance (Layout)',
    'Medical Treatment',
    'Transit / Stopover'
  ];

  const destinationCountries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Schengen Area (EU)',
    'Japan',
    'Singapore'
  ];

  const stayOptions = [
    { id: 'under-90', label: '< 90 Days', icon: Plane },
    { id: '90-180', label: '90 - 180 Days', icon: Calendar },
    { id: '180-plus', label: '180+ Days', icon: Building2 }
  ];

  const employmentStatuses = [
    'Employed Full-Time',
    'Employed Part-Time',
    'Self-Employed / Freelance',
    'Student',
    'Retired',
    'Unemployed'
  ];

  const handleNextToStep2 = () => {
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextToStep3 = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onShowToast) {
      onShowToast('Assessment complete! Analyzing optimal visa pathways...');
    }
  };

  const handleStartApplication = () => {
    if (onNavigateToApplication) {
      onNavigateToApplication({
        intent: primaryIntent,
        destination: destinationCountry,
        stay: lengthOfStay,
        employment: employmentStatus,
        recommendedVisa: 'Skilled Worker Visa (Tier 2)'
      });
    }
  };

  return (
    <div className="page-view diagnostic-page animate-fade-in">
      <div className="container diagnostic-main-container">
        {/* Step 1 & Step 2 View (Image 1 left) */}
        {currentStep <= 2 && (
          <div className="diagnostic-form-wrapper">
            <h1 className="diagnostic-page-title">DIAGNOSTIC ASSESSMENT</h1>

            {/* Step 1: Primary Intent */}
            <section className="diagnostic-step-section">
              <h2 className="step-section-heading">Step 1 of 3: Primary Intent</h2>
              <p className="step-section-subhead">What is the primary purpose of your travel?</p>

              <div className="intent-cards-2x2-grid">
                {intentOptions.map((opt) => {
                  const isSelected = primaryIntent === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`diagnostic-selectable-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setPrimaryIntent(opt.id)}
                    >
                      <div className="card-radio-indicator">
                        <div className={`radio-dot-circle ${isSelected ? 'active' : ''}`}></div>
                      </div>
                      <div className="card-text-content">
                        <h3 className="card-intent-title">{opt.title}</h3>
                        <p className="card-intent-desc">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Details */}
              <div className="additional-details-block">
                <h4 className="additional-details-title">Additional Details</h4>
                <p className="additional-details-desc">Please provide specific categorization if applicable.</p>
                <div className="custom-select-wrapper">
                  <select
                    className="diagnostic-select-input"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                  >
                    {subCategories.map((sub, idx) => (
                      <option key={idx} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Step 2: Check your Eligibility */}
            <section className="diagnostic-step-section">
              <h2 className="step-section-heading">Step 2 of 3: Check your Eligibility</h2>
              <p className="step-section-subhead">
                Provide a few details about your upcoming travel plans to help us determine the best visa options for you.
              </p>

              {/* Destination Country */}
              <div className="form-field-group">
                <label className="field-label-bold">Destination Country</label>
                <div className="custom-select-wrapper">
                  <select
                    className="diagnostic-select-input"
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                  >
                    {destinationCountries.map((country, idx) => (
                      <option key={idx} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Intended Length of Stay */}
              <div className="form-field-group">
                <label className="field-label-bold">Intended Length of Stay</label>
                <div className="stay-duration-3cards-grid">
                  {stayOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = lengthOfStay === opt.id;
                    return (
                      <div
                        key={opt.id}
                        className={`stay-option-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => setLengthOfStay(opt.id)}
                      >
                        <Icon size={20} className="stay-icon" />
                        <span className="stay-label">{opt.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Current Employment Status */}
              <div className="form-field-group">
                <label className="field-label-bold">Current Employment Status</label>
                <div className="custom-select-wrapper">
                  <select
                    className="diagnostic-select-input"
                    value={employmentStatus}
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                  >
                    {employmentStatuses.map((st, idx) => (
                      <option key={idx} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Next Step Button */}
              <div className="step-action-footer">
                <button
                  className="btn-continue-diagnostic-pill"
                  onClick={handleNextToStep3}
                >
                  <span>Evaluate Pathway</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Step 3: Recommended Pathway (Image 1 right / Step 4 screen) */}
        {currentStep === 3 && (
          <div className="diagnostic-result-wrapper animate-fade-in">
            <section className="recommended-pathway-card">
              <h2 className="pathway-step-title">Step 3 of 3: Recommended Pathway</h2>
              <p className="pathway-step-desc">
                Based on your professional background, intended duration of stay, and country of origin, we have identified the most suitable visa category with the highest probability of approval.
              </p>

              <h3 className="pathway-visa-name">Skilled Worker Visa (Tier 2)</h3>
              <p className="pathway-visa-details">
                Design for individuals who have been offered a skilled job in the destination country. This pathway allows for a long-term residency and potential path to permanent settlement, provided you meet the required skill and salary.
              </p>

              {/* 2 Stat Cards */}
              <div className="pathway-stats-2col-grid">
                <div className="pathway-stat-card">
                  <div className="stat-icon-label-row">
                    <Clock size={18} className="stat-icon" />
                    <span className="stat-label">Estimated Processing</span>
                  </div>
                  <span className="stat-value-bold">3-8 Weeks</span>
                </div>

                <div className="pathway-stat-card">
                  <div className="stat-icon-label-row">
                    <TrendingUp size={18} className="stat-icon" />
                    <span className="stat-label">Approval Rate (Historical)</span>
                  </div>
                  <span className="stat-value-bold">High (92%)</span>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pathway-cta-row">
                <button
                  className="btn-pathway-get-started"
                  onClick={handleStartApplication}
                >
                  Get Started
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
