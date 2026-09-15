import React, { useState, useRef } from 'react';
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
  const fileInputRef = useRef(null);
  const [activeDocKey, setActiveDocKey] = useState('general');

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

  const triggerFileUpload = (docKey = 'general') => {
    setActiveDocKey(docKey);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formattedSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    const fileName = file.name;

    if (onShowToast) onShowToast(`Uploading "${fileName}" (${formattedSize})...`, 'info');

    // Add to active uploads stream
    const uploadId = 'upload-' + Date.now();
    setActiveUploads((prev) => [
      { id: uploadId, fileName, progress: 30 },
      ...prev
    ]);

    setTimeout(() => {
      setActiveUploads((prev) =>
        prev.map((u) => (u.id === uploadId ? { ...u, progress: 100 } : u))
      );

      setTimeout(() => {
        setActiveUploads((prev) => prev.filter((u) => u.id !== uploadId));
        setDocumentsState((prev) => ({
          ...prev,
          [activeDocKey]: { status: 'in-review', fileName, size: formattedSize }
        }));
        if (onShowToast) onShowToast(`Document "${fileName}" successfully uploaded!`, 'success');
      }, 500);
    }, 1000);

    // Reset input
    e.target.value = '';
  };

  const handleViewDoc = (fileName) => {
    if (onShowToast) onShowToast(`Viewing verified preview of ${fileName}`, 'info');
  };

  return (
    <div className="page-view document-portal-page animate-fade-in">
      {/* Hidden Native File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
      />

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
            <div className="doc-portal-card drag-drop-card" onClick={() => triggerFileUpload('funds')}>
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
                      <span className="status-badge-pill pill-in-review">
                        {documentsState.photo?.status === 'in-review' ? 'In Review' : 'Verified'}
                      </span>
                    </div>
                    <p className="doc-item-instructions">2x2 inches, white background, taken within last 6 months.</p>
                    <p className="doc-file-meta">🖼 {documentsState.photo?.fileName || 'visa_photo_2024.jpg'} • {documentsState.photo?.size || '1.1 MB'}</p>
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-link" onClick={() => triggerFileUpload('photo')}>
                      <RefreshCw size={14} />
                      <span>Replace</span>
                    </button>
                  </div>
                </div>

                {/* 3. Proof of Funds */}
                <div className={`doc-checklist-item ${documentsState.funds?.status === 'in-review' ? 'in-review-item' : 'missing-item'}`}>
                  <div className="doc-item-left-status">
                    <div className={`status-icon-circle ${documentsState.funds?.status === 'in-review' ? 'in-review' : 'missing'}`}>
                      {documentsState.funds?.status === 'in-review' ? <Clock size={16} /> : <AlertCircle size={16} />}
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Proof of Funds</h4>
                      <span className={`status-badge-pill ${documentsState.funds?.status === 'in-review' ? 'pill-in-review' : 'pill-missing'}`}>
                        {documentsState.funds?.status === 'in-review' ? 'In Review' : 'Missing'}
                      </span>
                    </div>
                    <p className="doc-item-instructions">Bank statements for the last 3 months showing consistent balance.</p>
                    {documentsState.funds?.fileName && (
                      <p className="doc-file-meta">📄 {documentsState.funds.fileName} • {documentsState.funds.size}</p>
                    )}
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-pill" onClick={() => triggerFileUpload('funds')}>
                      <Upload size={13} />
                      <span>{documentsState.funds?.fileName ? 'Re-upload' : 'Upload'}</span>
                    </button>
                  </div>
                </div>

                {/* 4. Travel Itinerary */}
                <div className={`doc-checklist-item ${documentsState.itinerary?.status === 'in-review' ? 'in-review-item' : 'missing-item'}`}>
                  <div className="doc-item-left-status">
                    <div className={`status-icon-circle ${documentsState.itinerary?.status === 'in-review' ? 'in-review' : 'missing'}`}>
                      {documentsState.itinerary?.status === 'in-review' ? <Clock size={16} /> : <AlertCircle size={16} />}
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Travel Itinerary</h4>
                      <span className={`status-badge-pill ${documentsState.itinerary?.status === 'in-review' ? 'pill-in-review' : 'pill-missing'}`}>
                        {documentsState.itinerary?.status === 'in-review' ? 'In Review' : 'Missing'}
                      </span>
                    </div>
                    <p className="doc-item-instructions">Flight reservations or planned travel dates and accommodation details.</p>
                    {documentsState.itinerary?.fileName && (
                      <p className="doc-file-meta">📄 {documentsState.itinerary.fileName} • {documentsState.itinerary.size}</p>
                    )}
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-pill" onClick={() => triggerFileUpload('itinerary')}>
                      <Upload size={13} />
                      <span>{documentsState.itinerary?.fileName ? 'Re-upload' : 'Upload'}</span>
                    </button>
                  </div>
                </div>

                {/* 5. Employment Letter (with error alert) */}
                <div className={`doc-checklist-item ${documentsState.employment?.status === 'in-review' ? 'in-review-item' : 'error-item'}`}>
                  <div className="doc-item-left-status">
                    <div className={`status-icon-circle ${documentsState.employment?.status === 'in-review' ? 'in-review' : 'error'}`}>
                      {documentsState.employment?.status === 'in-review' ? <Clock size={16} /> : <AlertTriangle size={16} />}
                    </div>
                  </div>
                  <div className="doc-item-center-info">
                    <div className="doc-title-row">
                      <h4 className="doc-item-title">Employment Letter</h4>
                      <span className={`status-badge-pill ${documentsState.employment?.status === 'in-review' ? 'pill-in-review' : 'pill-error'}`}>
                        {documentsState.employment?.status === 'in-review' ? 'In Review' : 'Action Required'}
                      </span>
                    </div>
                    <p className="doc-item-instructions">Letter from employer confirming status and leave approval.</p>
                    
                    {documentsState.employment?.status !== 'in-review' && (
                      <div className="doc-error-alert-banner">
                        <AlertCircle size={14} className="alert-svg" />
                        <span>File "emp_letter.pdf" is password protected. Please upload an unprotected version.</span>
                      </div>
                    )}
                    {documentsState.employment?.status === 'in-review' && (
                      <p className="doc-file-meta">📄 {documentsState.employment.fileName} • {documentsState.employment.size}</p>
                    )}
                  </div>
                  <div className="doc-item-right-action">
                    <button className="btn-doc-action-pill" onClick={() => triggerFileUpload('employment')}>
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
                  <button className="btn-add-optional-doc" onClick={() => triggerFileUpload('previous-visas')}>
                    <Plus size={13} />
                    <span>Add Document</span>
                  </button>
                </div>

                <div className="optional-item-row">
                  <div className="optional-left-info">
                    <h4 className="optional-item-title">+ Property Ownership</h4>
                    <p className="optional-item-desc">Deeds or documents proving strong ties to home country.</p>
                  </div>
                  <button className="btn-add-optional-doc" onClick={() => triggerFileUpload('property-ownership')}>
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
