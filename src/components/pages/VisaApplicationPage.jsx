import React, { useState } from 'react';
import { User, Calendar, Globe, Plane, Briefcase, Heart, ShieldAlert, Plus, ArrowRight, AlertCircle } from 'lucide-react';

export default function VisaApplicationPage({ initialData = {}, onProceedToReview, onShowToast }) {
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: initialData.fullName || 'John Alexander Doe',
    dateOfBirth: initialData.dateOfBirth || '1985-08-15',
    nationality: initialData.nationality || 'United States',
    passportNumber: initialData.passportNumber || 'A123456789',

    // Step 2: Travel Details
    destination: initialData.destination || 'Japan',
    visaType: initialData.visaType || 'Tourist (Single Entry)',
    intendedArrivalDate: initialData.intendedArrivalDate || '2024-10-10',
    durationOfStay: initialData.durationOfStay || '14 Days',
    recentTravelHistory: 'France (2021), Japan (2022), Canada (2023)',

    // Step 3: Employment
    employmentStatus: 'employed', // 'employed' | 'student' | 'unemployed'
    currentEmployer: 'Tech Solutions Inc.',
    jobTitle: 'Senior Software Engineer',
    annualIncome: '$75,000',

    // Step 4: Family
    maritalStatus: 'married', // 'single' | 'married' | 'divorced' | 'widowed'
    dependents: [
      { id: 1, name: 'Jane Doe', relationship: 'Child', passportNumber: 'P12345678' }
    ],
    homeCountryTies: 'yes',

    // Step 5: Declarations
    tbDiagnosis: 'no',
    medicalTreatment: 'no',
    criminalConviction: 'no',
    deported: 'no',
    visaRefused: 'no'
  });

  const handleAddDependent = () => {
    setFormData((prev) => ({
      ...prev,
      dependents: [
        ...prev.dependents,
        { id: Date.now(), name: '', relationship: 'Child', passportNumber: '' }
      ]
    }));
    if (onShowToast) onShowToast('Added new dependent entry row.', 'info');
  };

  const handleUpdateDependent = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      dependents: prev.dependents.map((dep) =>
        dep.id === id ? { ...dep, [field]: value } : dep
      )
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.passportNumber) {
      if (onShowToast) onShowToast('Please fill in required personal information.', 'warning');
      return;
    }
    if (onProceedToReview) {
      onProceedToReview(formData);
    }
  };

  return (
    <div className="page-view visa-application-page animate-fade-in">
      {/* 1. Header Banner matching Image 3 top */}
      <div className="application-blue-header-banner">
        <h1 className="application-banner-title">VISA APPLICATION</h1>
      </div>

      <div className="container application-form-container">
        <form onSubmit={handleSubmit} className="application-main-form">
          {/* =========================================================
             Step 1: Personal Information
             ========================================================= */}
          <section className="form-step-card">
            <h2 className="step-card-title">Step 1 of 5: Personal Information</h2>

            <div className="form-grid-2col">
              <div className="form-group-field">
                <label className="field-label-text">Full Name</label>
                <input
                  type="text"
                  placeholder="John Alex Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="app-text-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label className="field-label-text">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="app-text-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label className="field-label-text">Nationality</label>
                <select
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="app-select-input"
                >
                  <option value="United States">United States</option>
                  <option value="Philippines">Philippines</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>

              <div className="form-group-field">
                <label className="field-label-text">Passport Number</label>
                <input
                  type="text"
                  placeholder="A123456789"
                  value={formData.passportNumber}
                  onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                  className="app-text-input"
                  required
                />
              </div>
            </div>
          </section>

          {/* =========================================================
             Step 2: Travel History & Details
             ========================================================= */}
          <section className="form-step-card">
            <h2 className="step-card-title">Step 2 of 5: Travel History & Details</h2>
            <p className="step-card-subtitle">
              Please provide your intended travel dates and list your recent travel history accurately. This information is critical for your background check.
            </p>

            <div className="form-grid-2col">
              <div className="form-group-field">
                <label className="field-label-text">Intended Arrival Date</label>
                <input
                  type="date"
                  value={formData.intendedArrivalDate}
                  onChange={(e) => setFormData({ ...formData, intendedArrivalDate: e.target.value })}
                  className="app-text-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label className="field-label-text">Estimated Duration of Stay</label>
                <select
                  value={formData.durationOfStay}
                  onChange={(e) => setFormData({ ...formData, durationOfStay: e.target.value })}
                  className="app-select-input"
                >
                  <option value="7 Days">7 Days</option>
                  <option value="14 Days">14 Days</option>
                  <option value="30 Days">30 Days</option>
                  <option value="60 Days">60 Days</option>
                  <option value="90 Days">90 Days</option>
                  <option value="180 Days">180 Days</option>
                </select>
              </div>
            </div>

            {/* Recent Travel History */}
            <div className="sub-section-box">
              <div className="sub-heading-row">
                <Globe size={18} className="sub-icon" />
                <h3 className="sub-section-title">Recent Travel History</h3>
              </div>
              <p className="sub-section-desc">List all countries you have visited in the last 5 years.</p>

              <textarea
                rows={3}
                placeholder="e.g., France (2021), Japan (2022), Canada (2023)... Enter None if you have not traveled internationally."
                value={formData.recentTravelHistory}
                onChange={(e) => setFormData({ ...formData, recentTravelHistory: e.target.value })}
                className="app-textarea-input"
              />

              <div className="info-disclaimer-card">
                <AlertCircle size={16} className="info-svg" />
                <span>
                  Failure to disclose previous travel history may result in processing delays or application denial. Ensure all stamps in your current passport are accounted for.
                </span>
              </div>
            </div>
          </section>

          {/* =========================================================
             Step 3: Employment & Education Details
             ========================================================= */}
          <section className="form-step-card">
            <h2 className="step-card-title">Step 3 of 5: Employment & Education Details</h2>
            <p className="step-card-subtitle">
              Please provide your current employment or educational status. This information helps verify your financial stability and ties to your home country.
            </p>

            {/* 3 Status Selector Buttons */}
            <div className="employment-status-3btns-row">
              <button
                type="button"
                className={`btn-status-toggle ${formData.employmentStatus === 'employed' ? 'selected' : ''}`}
                onClick={() => setFormData({ ...formData, employmentStatus: 'employed' })}
              >
                <div className={`radio-indicator-dot ${formData.employmentStatus === 'employed' ? 'active' : ''}`}></div>
                <span>Employed</span>
              </button>

              <button
                type="button"
                className={`btn-status-toggle ${formData.employmentStatus === 'student' ? 'selected' : ''}`}
                onClick={() => setFormData({ ...formData, employmentStatus: 'student' })}
              >
                <div className={`radio-indicator-dot ${formData.employmentStatus === 'student' ? 'active' : ''}`}></div>
                <span>Student</span>
              </button>

              <button
                type="button"
                className={`btn-status-toggle ${formData.employmentStatus === 'unemployed' ? 'selected' : ''}`}
                onClick={() => setFormData({ ...formData, employmentStatus: 'unemployed' })}
              >
                <div className={`radio-indicator-dot ${formData.employmentStatus === 'unemployed' ? 'active' : ''}`}></div>
                <span>Unemployed / Other</span>
              </button>
            </div>

            <div className="form-group-field" style={{ marginTop: '16px' }}>
              <label className="field-label-text">Current Employer / Institution Name</label>
              <input
                type="text"
                placeholder="Tech Solutions Inc."
                value={formData.currentEmployer}
                onChange={(e) => setFormData({ ...formData, currentEmployer: e.target.value })}
                className="app-text-input"
              />
            </div>

            <div className="form-grid-2col" style={{ marginTop: '12px' }}>
              <div className="form-group-field">
                <label className="field-label-text">Job Title / Field of Study</label>
                <input
                  type="text"
                  placeholder="Senior Software Engineer"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="app-text-input"
                />
              </div>

              <div className="form-group-field">
                <label className="field-label-text">Annual Income (USD)</label>
                <input
                  type="text"
                  placeholder="$75,000"
                  value={formData.annualIncome}
                  onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                  className="app-text-input"
                />
              </div>
            </div>
          </section>

          {/* =========================================================
             Step 4: Family & Dependents
             ========================================================= */}
          <section className="form-step-card">
            <h2 className="step-card-title">Step 4 of 5: Family & Dependents</h2>
            <p className="step-card-subtitle">
              Please provide accurate details regarding your marital status and any immediate family members, regardless of their intent to travel with you.
            </p>

            {/* Marital Status Sub-section */}
            <div className="sub-section-box">
              <div className="sub-heading-row">
                <Heart size={18} className="sub-icon" />
                <h3 className="sub-section-title">Marital Status</h3>
              </div>

              <div className="marital-status-4cards-grid">
                {[
                  { id: 'single', title: 'Single', desc: 'Never married.' },
                  { id: 'married', title: 'Married', desc: 'Legally married.' },
                  { id: 'divorced', title: 'Divorced', desc: 'Legally dissolved.' },
                  { id: 'widowed', title: 'Widowed', desc: 'Spouse deceased.' }
                ].map((item) => {
                  const isSelected = formData.maritalStatus === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`marital-card-choice ${isSelected ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, maritalStatus: item.id })}
                    >
                      <div className={`radio-indicator-dot ${isSelected ? 'active' : ''}`}></div>
                      <div>
                        <h4 className="marital-choice-title">{item.title}</h4>
                        <p className="marital-choice-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Accompanying Dependents */}
            <div className="sub-section-box">
              <div className="sub-heading-row">
                <User size={18} className="sub-icon" />
                <h3 className="sub-section-title">Accompanying Dependents</h3>
              </div>
              <p className="sub-section-desc">List children or dependents traveling with you.</p>

              {formData.dependents.map((dep, dIdx) => (
                <div key={dep.id} className="dependent-entry-row">
                  <div className="form-group-field" style={{ flex: 2 }}>
                    <label className="field-label-text">Full Name (as in Passport)</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={dep.name}
                      onChange={(e) => handleUpdateDependent(dep.id, 'name', e.target.value)}
                      className="app-text-input"
                    />
                  </div>

                  <div className="form-group-field" style={{ flex: 1 }}>
                    <label className="field-label-text">Relationship</label>
                    <select
                      value={dep.relationship}
                      onChange={(e) => handleUpdateDependent(dep.id, 'relationship', e.target.value)}
                      className="app-select-input"
                    >
                      <option value="Child">Child</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Parent">Parent</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group-field" style={{ flex: 1.5 }}>
                    <label className="field-label-text">Passport Number (if applicable)</label>
                    <input
                      type="text"
                      placeholder="P12345678"
                      value={dep.passportNumber}
                      onChange={(e) => handleUpdateDependent(dep.id, 'passportNumber', e.target.value)}
                      className="app-text-input"
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="btn-add-dependent-dashed"
                onClick={handleAddDependent}
              >
                <Plus size={14} />
                <span>+ Add Another Dependent</span>
              </button>
            </div>

            {/* Home Country Ties */}
            <div className="sub-section-box">
              <h4 className="ties-question-text">
                Do you have immediate family members (parents, siblings, children) remaining in your current country of residence?
              </h4>
              <div className="yes-no-radio-group">
                <label className="radio-label-inline">
                  <input
                    type="radio"
                    name="homeCountryTies"
                    value="yes"
                    checked={formData.homeCountryTies === 'yes'}
                    onChange={() => setFormData({ ...formData, homeCountryTies: 'yes' })}
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-label-inline">
                  <input
                    type="radio"
                    name="homeCountryTies"
                    value="no"
                    checked={formData.homeCountryTies === 'no'}
                    onChange={() => setFormData({ ...formData, homeCountryTies: 'no' })}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </section>

          {/* =========================================================
             Step 5: Health & Character Declarations
             ========================================================= */}
          <section className="form-step-card">
            <h2 className="step-card-title">Step 5 of 5: Health & Character Declarations</h2>
            <p className="step-card-subtitle">
              Please answer the following legal and health-related questions accurately. These are required for standard background checks by immigration authorities.
            </p>

            {/* Medical History */}
            <div className="sub-section-box">
              <h3 className="sub-section-title">Medical History</h3>

              <div className="declaration-question-item">
                <p className="declaration-q-text">
                  Have you ever been diagnosed with Tuberculosis (TB) or been in close contact with a family member that has active TB?
                </p>
                <div className="yes-no-radio-group">
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="tbDiagnosis"
                      value="yes"
                      checked={formData.tbDiagnosis === 'yes'}
                      onChange={() => setFormData({ ...formData, tbDiagnosis: 'yes' })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="tbDiagnosis"
                      value="no"
                      checked={formData.tbDiagnosis === 'no'}
                      onChange={() => setFormData({ ...formData, tbDiagnosis: 'no' })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="declaration-question-item">
                <p className="declaration-q-text">
                  Do you have any medical condition that requires or is likely to require regular medical treatment or care during your stay?
                </p>
                <div className="yes-no-radio-group">
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="medicalTreatment"
                      value="yes"
                      checked={formData.medicalTreatment === 'yes'}
                      onChange={() => setFormData({ ...formData, medicalTreatment: 'yes' })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="medicalTreatment"
                      value="no"
                      checked={formData.medicalTreatment === 'no'}
                      onChange={() => setFormData({ ...formData, medicalTreatment: 'no' })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Character & Legal */}
            <div className="sub-section-box">
              <h3 className="sub-section-title">Character & Legal</h3>

              <div className="declaration-question-item">
                <p className="declaration-q-text">
                  Have you ever been convicted of a crime or offence in any country?
                </p>
                <div className="yes-no-radio-group">
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="criminalConviction"
                      value="yes"
                      checked={formData.criminalConviction === 'yes'}
                      onChange={() => setFormData({ ...formData, criminalConviction: 'yes' })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="criminalConviction"
                      value="no"
                      checked={formData.criminalConviction === 'no'}
                      onChange={() => setFormData({ ...formData, criminalConviction: 'no' })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="declaration-question-item">
                <p className="declaration-q-text">
                  Have you ever been deported, removed, or required to leave any country?
                </p>
                <div className="yes-no-radio-group">
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="deported"
                      value="yes"
                      checked={formData.deported === 'yes'}
                      onChange={() => setFormData({ ...formData, deported: 'yes' })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="deported"
                      value="no"
                      checked={formData.deported === 'no'}
                      onChange={() => setFormData({ ...formData, deported: 'no' })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="declaration-question-item">
                <p className="declaration-q-text">
                  Have you ever had a visa application refused or cancelled for any country?
                </p>
                <div className="yes-no-radio-group">
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="visaRefused"
                      value="yes"
                      checked={formData.visaRefused === 'yes'}
                      onChange={() => setFormData({ ...formData, visaRefused: 'yes' })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label-inline">
                    <input
                      type="radio"
                      name="visaRefused"
                      value="no"
                      checked={formData.visaRefused === 'no'}
                      onChange={() => setFormData({ ...formData, visaRefused: 'no' })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Bottom Save & Continue Action */}
            <div className="form-submit-row-center">
              <button type="submit" className="btn-save-continue-pill">
                <span>Save & Continue</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
