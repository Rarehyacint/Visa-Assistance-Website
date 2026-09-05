import React, { useState } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  Clock,
  AlertCircle,
  AlertTriangle,
  Eye,
  RefreshCw,
  Upload,
  Plus,
  FileText,
  X,
  ShieldCheck,
  ListChecks
} from 'lucide-react';

export default function DocumentPortalPage({ onShowToast, onProceedToApplication }) {
  const [activeUploads, setActiveUploads] = useState([
    { id: 'upload-1', fileName: 'bank_statement_q3.pdf', progress: 45 }
  ]);

  const [documentsState, setDocumentsState] = useState({
    passport: { status: 'verified', fileName: 'bank_statement_q3.pdf', size: '2.4 MB' },
    photo: { status: 'in-review', fileName: 'visa_photo_2024.jpg', size: '1.1 MB' },
    funds: { status: 'missing', fileName: null, size: null },
    itinerary: { status: 'missing', fileName: null, size: null },
    employment: { status: 'error', fileName: 'emp_letter.pdf', error: 'File "emp_letter.pdf" is password protected. Please upload an unprotected version.' }
  });

  const handleUploadFile = (docKey) => {
    if (onShowToast) onShowToast(`Selecting file for ${docKey}... Upload started!`, 'info');
    setTimeout(() => {
      setDocumentsState((prev) => ({
        ...prev,
        [docKey]: { status: 'in-review', fileName: `${docKey}_document_2024.pdf`, size: '1.8 MB' }
      }));
      if (onShowToast) onShowToast(`Uploaded document for ${docKey} successfully!`, 'success');
    }, 1200);
  };

  const handleViewDoc = (fileName) => {
    if (onShowToast) onShowToast(`Viewing verified preview of ${fileName}`, 'info');
  };

  return (
    <div className="page-view document-portal-page animate-fade-in">
      <div className="container doc-portal-container">
        {/* Page Header */}
        <div className="doc-portal-header">
          <h1 className="doc-portal-title">Document Upload & Checklist</h1>
          <p className="doc-portal-subtitle">
            Please provide clear, legible copies of the following documents. All files must be in PDF, JPG, or PNG format and under 10MB.
          </p>
        </div>

        {/* 2-Column Portal Layout (Image 2) */}
        <div className="doc-portal-split-grid">
          {/* Left Column: Progress, Drag & Drop, Active Uploads */}
          <div className="doc-portal-left-col">
            {/* 1. Upload Progress Card */}
            <div className="doc-portal-card upload-progress-card">
              <h3 className="portal-card-heading">Upload Progress</h3>
              <p className="portal-card-sub">3 of 5 required documents submitted</p>

              <div className="progress-track-bar">
                <div className="progress-fill-bar" style={{ width: '60%' }}></div>
              </div>

              <div className="progress-stats-row">
                <span className="progress-percentage-text">60% Complete</span>
                <span className="progress-remaining-text">2 Remaining</span>
              </div>
            </div>

            {/* 2. Drag & Drop Upload Zone Card */}
            <div className="doc-portal-card drag-drop-card" onClick={() => handleUploadFile('funds')}>
              <div className="drag-drop-inner">
                <div className="upload-cloud-icon-circle">
                  <UploadCloud size={28} className="cloud-icon" />
                </div>
                <h4 className="drag-drop-prompt-title">Drag & drop files here</h4>
                <p className="drag-drop-prompt-sub">or click to browse from your computer</p>

                <div className="supported-formats-row">
                  <span className="format-tag">📄 PDF</span>
                  <span className="format-tag">🖼 JPG/PNG</span>
                  <span className="format-tag">🔒 Max 10MB</span>
                </div>
              </div>
            </div>

            {/* 3. Active Uploads Box */}
            {activeUploads.length > 0 && (
              <div className="doc-portal-card active-uploads-card">
                <span className="active-uploads-tag">ACTIVE UPLOADS</span>

                {activeUploads.map((item) => (
                  <div key={item.id} className="active-upload-item">
                    <div className="upload-item-header">
                      <div className="upload-name-row">
                        <FileText size={16} className="file-svg" />
                        <span className="upload-filename">{item.fileName}</span>
                      </div>
                      <div className="upload-percent-val">{item.progress}%</div>
                      <button
                        className="btn-cancel-upload"
                        onClick={() => setActiveUploads(activeUploads.filter((u) => u.id !== item.id))}
                        aria-label="Cancel upload"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="upload-progress-line">
                      <div className="upload-progress-fill" style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Required & Optional Document Lists */}
          <div className="doc-portal-right-col">
            {/* Required Documents Card */}
            <div className="doc-portal-card required-docs-card">
              <div className="required-docs-head-row">
                <ListChecks size={22} className="list-checks-icon" />
                <h2 className="required-docs-heading">Required Documents</h2>
              </div>

              <div className="docs-checklist-items">
                {/* 1. Valid Passport */}
                <div className="doc-checklist-item verified-item">
                  <div className="doc-item-left-status">
                    <div className="status-icon-circle verified">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Valid Passport</h4>
                      <span className="status-badge-pill pill-verified">Verified</span>
                    </div>
                    <p className="doc-item-instructions">Must have at least 6 months validity remaining</p>
                    <p className="doc-file-meta">📄 bank_statement_q3.pdf • 2.4 MB</p>
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-link" onClick={() => handleViewDoc('passport.pdf')}>
                      <Eye size={14} />
                      <span>View</span>
                    </button>
                  </div>
                </div>

                {/* 2. Digital Photograph */}
                <div className="doc-checklist-item in-review-item">
                  <div className="doc-item-left-status">
                    <div className="status-icon-circle in-review">
                      <Clock size={16} />
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Digital Photograph</h4>
                      <span className="status-badge-pill pill-in-review">In Review</span>
                    </div>
                    <p className="doc-item-instructions">2x2 inches, white background, taken within last 6 months.</p>
                    <p className="doc-file-meta">🖼 visa_photo_2024.jpg • 1.1 MB</p>
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-link" onClick={() => handleUploadFile('photo')}>
                      <RefreshCw size={14} />
                      <span>Replace</span>
                    </button>
                  </div>
                </div>

                {/* 3. Proof of Funds */}
                <div className="doc-checklist-item missing-item">
                  <div className="doc-item-left-status">
                    <div className="status-icon-circle missing">
                      <AlertCircle size={16} />
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Proof of Funds</h4>
                      <span className="status-badge-pill pill-missing">Missing</span>
                    </div>
                    <p className="doc-item-instructions">Bank statements for the last 3 months showing consistent balance.</p>
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-pill" onClick={() => handleUploadFile('funds')}>
                      <Upload size={13} />
                      <span>Upload</span>
                    </button>
                  </div>
                </div>

                {/* 4. Travel Itinerary */}
                <div className="doc-checklist-item missing-item">
                  <div className="doc-item-left-status">
                    <div className="status-icon-circle missing">
                      <AlertCircle size={16} />
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Travel Itinerary</h4>
                      <span className="status-badge-pill pill-missing">Missing</span>
                    </div>
                    <p className="doc-item-instructions">Flight reservations or planned travel dates and accommodation details.</p>
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-pill" onClick={() => handleUploadFile('itinerary')}>
                      <Upload size={13} />
                      <span>Upload</span>
                    </button>
                  </div>
                </div>

                {/* 5. Employment Letter (with error alert) */}
                <div className="doc-checklist-item error-item">
                  <div className="doc-item-left-status">
                    <div className="status-icon-circle error">
                      <AlertTriangle size={16} />
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Employment Letter</h4>
                      <span className="status-badge-pill pill-error">Missing</span>
                    </div>
                    <p className="doc-item-instructions">Letter from employer confirming status and leave approval.</p>
                    
                    {/* Error Banner matching Image 2 */}
                    <div className="doc-error-alert-banner">
                      <AlertCircle size={14} className="alert-svg" />
                      <span>File "emp_letter.pdf" is password protected. Please upload an unprotected version.</span>
                    </div>
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-pill" onClick={() => handleUploadFile('employment')}>
                      <Upload size={13} />
                      <span>Upload</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Supporting Documents Card */}
            <div className="doc-portal-card optional-docs-card">
              <h3 className="optional-docs-heading">Optional Supporting Documents</h3>
              <p className="optional-docs-sub">Providing these can strengthen your application but are not strictly required.</p>

              <div className="optional-items-stack">
                <div className="optional-item-row">
                  <div className="optional-left-info">
                    <h4 className="optional-item-title">+ Previous Visas</h4>
                    <p className="optional-item-desc">Scans of previous visas to US, UK, Schengen area, etc.</p>
                  </div>
                  <button className="btn-add-optional-doc" onClick={() => handleUploadFile('previous-visas')}>
                    <Plus size={13} />
                    <span>Add Document</span>
                  </button>
                </div>

                <div className="optional-item-row">
                  <div className="optional-left-info">
                    <h4 className="optional-item-title">+ Property Ownership</h4>
                    <p className="optional-item-desc">Deeds or documents proving strong ties to home country.</p>
                  </div>
                  <button className="btn-add-optional-doc" onClick={() => handleUploadFile('property-ownership')}>
                    <Plus size={13} />
                    <span>Add Document</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
