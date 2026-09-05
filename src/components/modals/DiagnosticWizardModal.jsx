import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, Shield, Globe, Award, Sparkles } from 'lucide-react';

export default function DiagnosticWizardModal({ isOpen, onClose, onComplete, initialVisa }) {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState('France (Schengen Area)');
  const [citizenship, setCitizenship] = useState('United States');
  const [visaType, setVisaType] = useState(initialVisa?.title || 'Tourist Visa');
  const [stayDuration, setStayDuration] = useState('1 - 3 Months');
  const [hasValidPassport, setHasValidPassport] = useState(true);
  const [hasProofOfFunds, setHasProofOfFunds] = useState(true);
  const [hasCleanRecord, setHasCleanRecord] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        onComplete({
          destination,
          citizenship,
          visaType,
          stayDuration
        });
        onClose();
      }, 700);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="diagnostic-modal-window animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Progress Indicator */}
        <div className="diagnostic-header">
          <div className="wizard-step-pill">
            <Sparkles size={14} />
            <span>15-Minute Diagnostic Assessment • Step {step} of 3</span>
          </div>
          <h2 className="diagnostic-title">
            {step === 1 && 'Where are you traveling from & to?'}
            {step === 2 && 'What is the purpose and duration of stay?'}
            {step === 3 && 'Quick Eligibility Pre-Screening'}
          </h2>
          <div className="wizard-progress-track">
            <div
              className="wizard-progress-bar"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Destination & Citizenship */}
        {step === 1 && (
          <div className="wizard-body">
            <div className="form-group">
              <label className="form-label">Destination Country or Region</label>
              <select
                className="form-input form-select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="France (Schengen Area)">France (Schengen Area)</option>
                <option value="Germany (Schengen Area)">Germany (Schengen Area)</option>
                <option value="Spain (Schengen Area)">Spain (Schengen Area)</option>
                <option value="Italy (Schengen Area)">Italy (Schengen Area)</option>
                <option value="Japan">Japan</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Philippines (Asia)">Philippines (Asia)</option>
                <option value="Indonesia / Bali">Indonesia / Bali</option>
                <option value="Portugal">Portugal</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Your Current Passport / Nationality</label>
              <select
                className="form-input form-select"
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
                <option value="Philippines">Philippines</option>
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other Global Passport</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Visa Pathway & Stay Duration */}
        {step === 2 && (
          <div className="wizard-body">
            <div className="form-group">
              <label className="form-label">Primary Visa Category</label>
              <div className="wizard-radio-grid">
                {[
                  'Tourist Visa',
                  'Student Visa',
                  'Digital Nomad',
                  'Retirement Visa',
                  'Family Reunification',
                  'Business / Investor'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`wizard-radio-card ${visaType === type ? 'selected' : ''}`}
                    onClick={() => setVisaType(type)}
                  >
                    <span className="radio-dot"></span>
                    <span className="radio-text">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Intended Duration of Stay</label>
              <select
                className="form-input form-select"
                value={stayDuration}
                onChange={(e) => setStayDuration(e.target.value)}
              >
                <option value="Under 30 Days">Under 30 Days (Short Stay)</option>
                <option value="1 - 3 Months">1 - 3 Months (Standard)</option>
                <option value="6 - 12 Months">6 - 12 Months (Extended)</option>
                <option value="1 - 5 Years">1 - 5 Years (Residency Pathway)</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Readiness Checklist */}
        {step === 3 && (
          <div className="wizard-body">
            <div className="eligibility-checks">
              <label className="wizard-checkbox-item">
                <input
                  type="checkbox"
                  checked={hasValidPassport}
                  onChange={(e) => setHasValidPassport(e.target.checked)}
                />
                <div className="checkbox-details">
                  <span className="checkbox-title">Passport valid for 6+ months</span>
                  <span className="checkbox-subtitle">Has at least 2 consecutive blank pages</span>
                </div>
              </label>

              <label className="wizard-checkbox-item">
                <input
                  type="checkbox"
                  checked={hasProofOfFunds}
                  onChange={(e) => setHasProofOfFunds(e.target.checked)}
                />
                <div className="checkbox-details">
                  <span className="checkbox-title">Proof of Financial Sufficiency</span>
                  <span className="checkbox-subtitle">Bank statements, salary slips, or institutional sponsor</span>
                </div>
              </label>

              <label className="wizard-checkbox-item">
                <input
                  type="checkbox"
                  checked={hasCleanRecord}
                  onChange={(e) => setHasCleanRecord(e.target.checked)}
                />
                <div className="checkbox-details">
                  <span className="checkbox-title">Clear Travel & Police Background</span>
                  <span className="checkbox-subtitle">No prior deportations or unresolved criminal infractions</span>
                </div>
              </label>
            </div>

            <div className="eligibility-score-card">
              <div className="score-icon">
                <Award size={28} color="#10b981" />
              </div>
              <div className="score-text">
                <h4>99.2% Estimated Approval Match</h4>
                <p>Based on your {citizenship} citizenship for {destination} {visaType}.</p>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="wizard-footer">
          {step > 1 ? (
            <button className="btn-outline" onClick={handleBack}>
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <div></div>
          )}

          <button
            className="btn-blue"
            onClick={handleNext}
            disabled={submitting}
          >
            <span>{submitting ? 'Generating Roadmap...' : step === 3 ? 'Complete & Start Application' : 'Continue'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
