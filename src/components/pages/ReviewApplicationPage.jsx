import React, { useState } from 'react';
import { User, Plane, Briefcase, Edit3, CheckSquare, Square, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ReviewApplicationPage({
  applicationData = {
    fullName: 'John Alexander Doe',
    dateOfBirth: '15 Aug 1985',
    nationality: 'United States',
    passportNumber: 'A123456789',
    destination: 'Japan',
    visaType: 'Tourist (Single Entry)',
    intendedArrivalDate: '10 Oct 2024',
    durationOfStay: '14 Days',
    currentEmployer: 'Tech Solutions Inc.',
    jobTitle: 'Senior Software Engineer'
  },
  onEditSection,
  onSubmitApplication,
  onShowToast
}) {
  const [declarationAccepted, setDeclarationAccepted] = useState(false);

  const handleSubmit = () => {
    if (!declarationAccepted) {
      if (onShowToast) {
        onShowToast('Please check the declaration checkbox before proceeding.', 'warning');
      }
      return;
    }
    if (onSubmitApplication) {
      onSubmitApplication(applicationData);
    }
  };

  return (
    <div className="page-view review-application-page animate-fade-in">
      {/* 1. Blue Top Banner matching Image 4 */}
      <div className="review-blue-banner-header">
        <div className="container">
          <h1 className="review-banner-title">REVIEW YOUR APPLICATION</h1>
          <p className="review-banner-subtitle">
            Please verify that all information provided is accurate before final submission. Incorrect information may delay processing.
          </p>
        </div>
      </div>

      <div className="container review-content-container">
        <div className="review-dossier-card">
          {/* Section 1: Personal Information */}
          <div className="review-section-block">
            <div className="review-section-header-row">
              <div className="section-title-with-icon">
                <User size={20} className="section-icon" />
                <h2 className="section-title-text">Personal Information</h2>
              </div>
              <button
                className="btn-edit-section"
                onClick={() => onEditSection && onEditSection('personal')}
              >
                <Edit3 size={14} />
                <span>Edit</span>
              </button>
            </div>
            <div className="review-section-divider"></div>

            <div className="review-details-2x2-grid">
              <div className="review-detail-cell">
                <span className="review-label">FULL NAME</span>
                <span className="review-val-bold">{applicationData.fullName || 'John Alexander Doe'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">DATE OF BIRTH</span>
                <span className="review-val-bold">{applicationData.dateOfBirth || '15 Aug 1985'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">NATIONALITY</span>
                <span className="review-val-bold">{applicationData.nationality || 'United States'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">PASSPORT NUMBER</span>
                <span className="review-val-bold">{applicationData.passportNumber || 'A123456789'}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Travel Details */}
          <div className="review-section-block">
            <div className="review-section-header-row">
              <div className="section-title-with-icon">
                <Plane size={20} className="section-icon" />
                <h2 className="section-title-text">Travel Details</h2>
              </div>
              <button
                className="btn-edit-section"
                onClick={() => onEditSection && onEditSection('travel')}
              >
                <Edit3 size={14} />
                <span>Edit</span>
              </button>
            </div>
            <div className="review-section-divider"></div>

            <div className="review-details-2x2-grid">
              <div className="review-detail-cell">
                <span className="review-label">DESTINATION</span>
                <span className="review-val-bold">{applicationData.destination || 'Japan'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">VISA TYPE</span>
                <span className="review-val-bold">{applicationData.visaType || 'Tourist (Single Entry)'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">INTENDED DATE OF ENTRY</span>
                <span className="review-val-bold">{applicationData.intendedArrivalDate || '10 Oct 2024'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">DURATION OF STAY</span>
                <span className="review-val-bold">{applicationData.durationOfStay || '14 Days'}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Employment */}
          <div className="review-section-block">
            <div className="review-section-header-row">
              <div className="section-title-with-icon">
                <Briefcase size={20} className="section-icon" />
                <h2 className="section-title-text">Employment</h2>
              </div>
              <button
                className="btn-edit-section"
                onClick={() => onEditSection && onEditSection('employment')}
              >
                <Edit3 size={14} />
                <span>Edit</span>
              </button>
            </div>
            <div className="review-section-divider"></div>

            <div className="review-details-2x2-grid">
              <div className="review-detail-cell">
                <span className="review-label">CURRENT EMPLOYER</span>
                <span className="review-val-bold">{applicationData.currentEmployer || 'Tech Solutions Inc.'}</span>
              </div>
              <div className="review-detail-cell">
                <span className="review-label">JOB TITLE</span>
                <span className="review-val-bold">{applicationData.jobTitle || 'Senior Software Engineer'}</span>
              </div>
            </div>
          </div>

          {/* Declaration Box matching Image 4 */}
          <div className="review-declaration-box">
            <h3 className="declaration-box-title">Declaration</h3>
            <label className="declaration-checkbox-label">
              <input
                type="checkbox"
                checked={declarationAccepted}
                onChange={(e) => setDeclarationAccepted(e.target.checked)}
                className="declaration-checkbox-input"
              />
              <span className="declaration-legal-text">
                I declare that the information provided in this application is true and correct to the best of my knowledge. I understand that any false or misleading statement may result in the refusal of a visa or denial of entry.
              </span>
            </label>
          </div>

          {/* Bottom Action Button matching Image 4 */}
          <div className="review-submit-footer-row">
            <button
              type="button"
              className="btn-submit-proceed-payment"
              onClick={handleSubmit}
            >
              <span>Submit & Proceed to Payment</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
