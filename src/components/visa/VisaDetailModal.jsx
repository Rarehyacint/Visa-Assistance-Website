import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Shield, ArrowRight, FileCheck } from 'lucide-react';

export default function VisaDetailModal({ visa, isOpen, onClose, onApplyNow }) {
  if (!isOpen || !visa) return null;

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="visa-detail-modal animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="visa-modal-header">
          <div className="visa-modal-badge">{visa.badge || 'Official Pathway'}</div>
          <h2 className="visa-modal-title">{visa.title}</h2>
          <p className="visa-modal-tagline">{visa.tagline}</p>
        </div>

        {/* Key Metrics */}
        <div className="visa-modal-metrics">
          <div className="metric-box">
            <span className="metric-lbl">Processing Time</span>
            <span className="metric-val">{visa.processingTime || '3 - 7 Days'}</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">Validity Period</span>
            <span className="metric-val">{visa.validity || 'Up to 90 Days'}</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">Average Approval</span>
            <span className="metric-val highlight">{visa.approvalRate || '99.4%'}</span>
          </div>
        </div>

        {/* Comprehensive Documentation Requirements */}
        <div className="visa-modal-body">
          <h3 className="modal-section-heading">
            <FileCheck size={18} />
            Required Documentation Checklist
          </h3>
          <ul className="full-reqs-checklist">
            {(visa.fullRequirements || visa.keyRequirements).map((req, idx) => (
              <li key={idx} className="full-req-item">
                <CheckCircle2 size={16} className="req-icon-green" />
                <span>{req}</span>
              </li>
            ))}
          </ul>

          {visa.popularDestinations && (
            <div className="popular-dest-chips">
              <h4 className="dest-chips-title">Applicable Destinations:</h4>
              <div className="chips-row">
                {visa.popularDestinations.map((dest, i) => (
                  <span key={i} className="country-chip">{dest}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Bar */}
        <div className="visa-modal-footer">
          <button className="btn-outline" onClick={onClose}>
            Close
          </button>
          <button
            className="btn-blue"
            onClick={() => {
              onClose();
              onApplyNow(visa);
            }}
          >
            <span>Start Application for {visa.shortTitle || visa.title}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
