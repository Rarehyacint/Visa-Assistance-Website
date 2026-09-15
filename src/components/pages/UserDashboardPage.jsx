import React, { useState, useRef } from 'react';
import {
  FileText,
  AlertCircle,
  Clock,
  CheckCircle2,
  Upload,
  Settings as SettingsIcon,
  MoreVertical,
  Phone,
  MapPin,
  Mail,
  User,
  CreditCard,
  FolderLock,
  LogOut,
  Download,
  Plus,
  Shield,
  Bell,
  Globe,
  Trash2,
  Eye,
  Key,
  Check,
  X,
  FileCheck,
  AlertTriangle
} from 'lucide-react';

export default function UserDashboardPage({
  user = {
    name: 'Alexander Sterling',
    email: 'alexander.sterling@example.com',
    phone: '+44 7700 900077',
    location: 'London, United Kingdom'
  },
  onSignOut,
  onStartApplication,
  onShowToast
}) {
  const vaultFileInputRef = useRef(null);
  const resolveFileInputRef = useRef(null);

  const [activeSidebarTab, setActiveSidebarTab] = useState('applications'); // 'applications' | 'vault' | 'payments' | 'personal' | 'settings'

  // Application List State (to support dynamic resolution)
  const [activeApplications, setActiveApplications] = useState([
    {
      id: 'US-9842-BX',
      country: 'United States',
      visaType: 'BUSINESS VISA',
      date: 'Oct 12, 2024',
      status: 'action-required', // 'action-required' | 'in-review' | 'approved'
      warningText: 'Missing biometric data upload.',
      expected: 'Action required by user'
    },
    {
      id: 'JP-4410-TV',
      country: 'JAPAN',
      visaType: 'TOURIST E-VISA',
      date: 'Oct 20, 2024',
      status: 'in-review',
      infoText: 'Expected processing: 3-5 days.',
      expected: '3-5 Business Days'
    }
  ]);

  // Modal States
  const [resolveModalData, setResolveModalData] = useState(null); // { appId, country, visaType }
  const [detailsModalData, setDetailsModalData] = useState(null); // { appId, country, visaType, date, expected }
  const [resolveFile, setResolveFile] = useState(null);

  // Personal Details Form State
  const [profileForm, setProfileForm] = useState({
    name: user.name || 'Alexander Sterling',
    email: user.email || 'alexander.sterling@example.com',
    phone: user.phone || '+44 7700 900077',
    location: user.location || 'London, United Kingdom',
    passportNumber: 'GB-9920194',
    passportExpiry: '2028-12-14',
    nationality: 'United Kingdom'
  });

  // Settings State
  const [settingsState, setSettingsState] = useState({
    emailUpdates: true,
    smsAlerts: true,
    twoFactorAuth: true,
    currency: 'USD ($)',
    language: 'English (US)'
  });

  // Vault Documents State
  const [vaultDocs, setVaultDocs] = useState([
    { id: 1, name: 'Primary Passport', type: 'Identification', status: 'verified', meta: 'Expires: Dec 2028 • Verified', size: '2.4 MB' },
    { id: 2, name: 'National ID Card', type: 'Identification', status: 'verified', meta: 'Uploaded: Oct 2024', size: '1.2 MB' },
    { id: 3, name: 'Bank Statement Q3 2024', type: 'Financial', status: 'verified', meta: 'Uploaded: Oct 2024 • 3-month proof', size: '3.1 MB' },
    { id: 4, name: 'Employment Certificate & Contract', type: 'Employment', status: 'in-review', meta: 'Uploaded: Oct 2024', size: '1.8 MB' }
  ]);

  // Payment History State
  const [paymentsList, setPaymentsList] = useState([
    {
      id: 'INV-2024-9021',
      date: 'Oct 20, 2024',
      service: 'Japan Tourist E-Visa Application (Express)',
      amount: '$119.00',
      status: 'Paid',
      card: 'Visa •••• 4242'
    },
    {
      id: 'INV-2024-8843',
      date: 'Oct 12, 2024',
      service: 'United States B1/B2 Business Visa Dossier & Review',
      amount: '$249.00',
      status: 'Paid',
      card: 'Visa •••• 4242'
    },
    {
      id: 'INV-2024-7612',
      date: 'Sep 15, 2024',
      service: 'Certified Sworn Translation & Embassy Stamp (French)',
      amount: '$50.00',
      status: 'Completed',
      card: 'Mastercard •••• 8821'
    }
  ]);

  const handleResolveAction = (appId) => {
    const targetApp = activeApplications.find((a) => a.id === appId) || {
      id: appId,
      country: 'United States',
      visaType: 'BUSINESS VISA'
    };
    setResolveModalData(targetApp);
  };

  const handleViewDetails = (appId) => {
    const targetApp = activeApplications.find((a) => a.id === appId) || {
      id: appId,
      country: 'JAPAN',
      visaType: 'TOURIST E-VISA',
      date: 'Oct 20, 2024',
      expected: '3-5 Business Days'
    };
    setDetailsModalData(targetApp);
  };

  const handleTriggerVaultUpload = () => {
    if (vaultFileInputRef.current) {
      vaultFileInputRef.current.click();
    }
  };

  const handleVaultFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formattedSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    const newDoc = {
      id: Date.now(),
      name: file.name,
      type: 'Supporting',
      status: 'in-review',
      meta: 'Uploaded just now • Under verification',
      size: formattedSize
    };

    setVaultDocs([newDoc, ...vaultDocs]);
    if (onShowToast) onShowToast(`Uploaded "${file.name}" to your Document Vault!`, 'success');
    e.target.value = '';
  };

  const handleCompleteResolve = () => {
    if (!resolveModalData) return;
    const appId = resolveModalData.id;

    setActiveApplications((prev) =>
      prev.map((app) =>
        app.id === appId
          ? {
              ...app,
              status: 'in-review',
              infoText: 'Biometric verification file submitted. Reviewing dossier.',
              expected: '2-4 Business Days'
            }
          : app
      )
    );

    if (onShowToast) onShowToast(`Biometric resolution submitted for Application #${appId}! Status changed to In Review.`, 'success');
    setResolveModalData(null);
    setResolveFile(null);
  };

  const handleDeleteVaultDoc = (docId) => {
    setVaultDocs(vaultDocs.filter((d) => d.id !== docId));
    if (onShowToast) onShowToast('Document removed from vault.', 'info');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (onShowToast) onShowToast('Personal details updated successfully!', 'success');
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (onShowToast) onShowToast('Account settings and preferences saved.', 'success');
  };

  const handleDownloadInvoice = (invoiceId) => {
    if (onShowToast) onShowToast(`Downloading official invoice receipt for ${invoiceId}...`, 'success');
  };

  return (
    <div className="page-view user-dashboard-page animate-fade-in">
      <div className="dashboard-container-layout">
        {/* 1. Left Sidebar Navigation (Image 3 left) */}
        <aside className="dashboard-sidebar-navy">
          <div className="sidebar-nav-section">
            <span className="sidebar-group-label">DASHBOARD</span>
            <ul className="sidebar-menu-list">
              <li>
                <button
                  className={`sidebar-menu-item ${activeSidebarTab === 'applications' ? 'active' : ''}`}
                  onClick={() => setActiveSidebarTab('applications')}
                >
                  My Applications
                </button>
              </li>
              <li>
                <button
                  className={`sidebar-menu-item ${activeSidebarTab === 'vault' ? 'active' : ''}`}
                  onClick={() => setActiveSidebarTab('vault')}
                >
                  Document Vault
                </button>
              </li>
              <li>
                <button
                  className={`sidebar-menu-item ${activeSidebarTab === 'payments' ? 'active' : ''}`}
                  onClick={() => setActiveSidebarTab('payments')}
                >
                  Payment History
                </button>
              </li>
            </ul>
          </div>

          <div className="sidebar-nav-section">
            <span className="sidebar-group-label">ACCOUNT</span>
            <ul className="sidebar-menu-list">
              <li>
                <button
                  className={`sidebar-menu-item ${activeSidebarTab === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveSidebarTab('personal')}
                >
                  Personal Details
                </button>
              </li>
              <li>
                <button
                  className={`sidebar-menu-item ${activeSidebarTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveSidebarTab('settings')}
                >
                  Settings
                </button>
              </li>
            </ul>
          </div>

          <div className="sidebar-signout-wrapper">
            <button
              className="sidebar-signout-btn"
              onClick={() => {
                if (onSignOut) onSignOut();
                if (onShowToast) onShowToast('Signed out successfully.', 'info');
              }}
            >
              <LogOut size={16} />
              <span>SIGN OUT</span>
            </button>
          </div>
        </aside>

        {/* 2. Main Dashboard Content (Image 3 right) */}
        <main className="dashboard-main-content">
          {/* TAB 1: My Applications (Image 3) */}
          {activeSidebarTab === 'applications' && (
            <div className="dashboard-tab-content animate-fade-in">
              {/* Welcome Header */}
              <div className="dashboard-welcome-header">
                <h1 className="dashboard-welcome-title">Welcome Back, {profileForm.name.split(' ')[0]}!</h1>
                <p className="dashboard-welcome-subtitle">
                  Manage your active Visa Application and necessary travel documents.
                </p>
              </div>

              {/* Section: Active Applicants */}
              <section className="dashboard-section-block">
                <div className="dashboard-section-head-row">
                  <h2 className="dashboard-section-heading">Active Applicants</h2>
                  <button
                    className="btn-start-new-app-link"
                    onClick={onStartApplication}
                  >
                    + Apply For New Visa
                  </button>
                </div>
                <div className="dashboard-section-divider"></div>

                <div className="active-applicants-grid">
                  {activeApplications.map((app) => {
                    const isActionReq = app.status === 'action-required';
                    return (
                      <div
                        key={app.id}
                        className={`applicant-status-card ${isActionReq ? 'card-action-required' : 'card-in-review'}`}
                      >
                        <div className="card-top-header">
                          <span className="visa-type-tag">{app.visaType}</span>
                          <span className={`status-pill ${isActionReq ? 'pill-action-required' : 'pill-in-review'}`}>
                            {isActionReq ? (
                              <>
                                <span className="status-dot-red"></span> Action Required
                              </>
                            ) : (
                              '... In Review'
                            )}
                          </span>
                        </div>

                        <h3 className="applicant-country-title">{app.country}</h3>

                        <div className="applicant-meta-table">
                          <div className="meta-row">
                            <span className="meta-label">APPLICATION ID:</span>
                            <span className="meta-val">{app.id}</span>
                          </div>
                          <div className="meta-row">
                            <span className="meta-label">APPLICATION DATE:</span>
                            <span className="meta-val">{app.date}</span>
                          </div>
                        </div>

                        <div className={`card-bottom-action-bar ${isActionReq ? 'bar-red' : 'bar-blue'}`}>
                          <span className={isActionReq ? 'action-warning-text' : 'action-info-text'}>
                            {isActionReq ? app.warningText || 'Missing biometric data upload.' : app.infoText || 'Expected processing: 3-5 days.'}
                          </span>
                          {isActionReq ? (
                            <button
                              className="btn-resolve-pill"
                              onClick={() => handleResolveAction(app.id)}
                            >
                              Resolve Now
                            </button>
                          ) : (
                            <button
                              className="btn-view-details-pill"
                              onClick={() => handleViewDetails(app.id)}
                            >
                              View Details
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section: Document Vault & Profile (2 columns) */}
              <div className="vault-profile-2col-grid">
                {/* Column 1: Document Vault preview */}
                <div className="dashboard-card-column">
                  <div className="column-head-with-link">
                    <h2 className="dashboard-section-heading">Document Vault</h2>
                    <button className="btn-manage-link" onClick={() => setActiveSidebarTab('vault')}>
                      <SettingsIcon size={14} />
                      <span>Manage</span>
                    </button>
                  </div>
                  <div className="dashboard-section-divider"></div>

                  <div className="document-vault-box">
                    {vaultDocs.slice(0, 2).map((doc) => (
                      <div key={doc.id} className="vault-doc-item">
                        <div className="doc-icon-box">
                          <FileText size={20} className="doc-svg" />
                        </div>
                        <div className="doc-info-col">
                          <h4 className="doc-name">{doc.name}</h4>
                          <p className="doc-status-text">{doc.meta}</p>
                        </div>
                        <button className="doc-options-btn" onClick={() => setActiveSidebarTab('vault')}>
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    ))}

                    <div className="vault-upload-action-row">
                      <button className="btn-vault-upload" onClick={handleTriggerVaultUpload}>
                        <Upload size={14} />
                        <span>Upload New Document</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Column 2: Profile */}
                <div className="dashboard-card-column">
                  <div className="column-head-with-link">
                    <h2 className="dashboard-section-heading">Profile</h2>
                    <button className="btn-manage-link" onClick={() => setActiveSidebarTab('personal')}>
                      <SettingsIcon size={14} />
                      <span>Edit</span>
                    </button>
                  </div>
                  <div className="dashboard-section-divider"></div>

                  <div className="profile-summary-box">
                    <div className="profile-avatar-large-box">
                      <User size={48} className="avatar-placeholder-svg" />
                    </div>

                    <div className="profile-details-center">
                      <h3 className="profile-full-name">{profileForm.name}</h3>
                      <p className="profile-email-sub">{profileForm.email}</p>
                    </div>

                    <div className="profile-divider-dots">...</div>

                    <div className="profile-contact-info-list">
                      <div className="profile-contact-row">
                        <Phone size={15} className="contact-icon" />
                        <span>{profileForm.phone}</span>
                      </div>
                      <div className="profile-contact-row">
                        <MapPin size={15} className="contact-icon" />
                        <span>{profileForm.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Document Vault (Full Workspace Manager) */}
          {activeSidebarTab === 'vault' && (
            <div className="dashboard-tab-content animate-fade-in">
              <div className="dashboard-welcome-header">
                <h1 className="dashboard-welcome-title">Encrypted Document Vault</h1>
                <p className="dashboard-welcome-subtitle">
                  Secure AES-256 encrypted repository for your verified travel documentation, civil certificates, and consulate filings.
                </p>
              </div>

              {/* Upload Dropzone */}
              <div className="vault-full-dropzone-card" onClick={handleUploadDocument}>
                <Upload size={28} className="dropzone-icon" />
                <h3 className="dropzone-title">Upload Documents to Vault</h3>
                <p className="dropzone-desc">Drag and drop files here, or click to browse. Max file size: 15MB (PDF, JPG, PNG).</p>
                <button className="btn-vault-browse-action">
                  <span>Choose File</span>
                </button>
              </div>

              {/* Vault Documents List */}
              <section className="dashboard-section-block" style={{ marginTop: '28px' }}>
                <div className="dashboard-section-head-row">
                  <h2 className="dashboard-section-heading">Stored Documents ({vaultDocs.length})</h2>
                  <span className="vault-security-pill">🔒 AES-256 Vault Encryption Active</span>
                </div>
                <div className="dashboard-section-divider"></div>

                <div className="vault-full-items-grid">
                  {vaultDocs.map((doc) => (
                    <div key={doc.id} className="vault-doc-full-card">
                      <div className="doc-card-top-row">
                        <div className="doc-type-icon-wrap">
                          <FileText size={22} className="doc-type-icon" />
                        </div>
                        <span className={`doc-status-badge ${doc.status}`}>
                          {doc.status === 'verified' ? '✓ Verified' : '⏳ In Review'}
                        </span>
                      </div>

                      <h4 className="doc-full-name">{doc.name}</h4>
                      <p className="doc-full-meta">{doc.meta}</p>
                      <span className="doc-size-tag">Size: {doc.size}</span>

                      <div className="doc-full-card-actions">
                        <button
                          className="btn-card-action-view"
                          onClick={() => onShowToast && onShowToast(`Viewing ${doc.name}`, 'info')}
                        >
                          <Eye size={13} />
                          <span>View</span>
                        </button>
                        <button
                          className="btn-card-action-delete"
                          onClick={() => handleDeleteVaultDoc(doc.id)}
                          aria-label="Delete document"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* TAB 3: Payment History */}
          {activeSidebarTab === 'payments' && (
            <div className="dashboard-tab-content animate-fade-in">
              <div className="dashboard-welcome-header">
                <h1 className="dashboard-welcome-title">Payment History & Invoices</h1>
                <p className="dashboard-welcome-subtitle">
                  Review your transaction statements, official consulate fee receipts, and manage saved payment methods.
                </p>
              </div>

              {/* Invoices Table */}
              <section className="dashboard-section-block">
                <div className="dashboard-section-head-row">
                  <h2 className="dashboard-section-heading">Invoices & Receipts</h2>
                </div>
                <div className="dashboard-section-divider"></div>

                <div className="payments-table-container">
                  <table className="payments-history-table">
                    <thead>
                      <tr>
                        <th>Invoice ID</th>
                        <th>Date</th>
                        <th>Service Description</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentsList.map((item) => (
                        <tr key={item.id}>
                          <td className="font-bold">{item.id}</td>
                          <td>{item.date}</td>
                          <td className="font-medium">{item.service}</td>
                          <td>{item.card}</td>
                          <td className="font-bold text-dark">{item.amount}</td>
                          <td>
                            <span className="payment-status-badge paid">{item.status}</span>
                          </td>
                          <td>
                            <button
                              className="btn-download-receipt-link"
                              onClick={() => handleDownloadInvoice(item.id)}
                            >
                              <Download size={13} />
                              <span>PDF</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Saved Payment Methods */}
              <section className="dashboard-section-block">
                <div className="dashboard-section-head-row">
                  <h2 className="dashboard-section-heading">Saved Payment Methods</h2>
                  <button
                    className="btn-add-card-link"
                    onClick={() => onShowToast && onShowToast('Add Payment Method modal opened.', 'info')}
                  >
                    + Add New Card
                  </button>
                </div>
                <div className="dashboard-section-divider"></div>

                <div className="saved-cards-grid">
                  <div className="saved-card-item default">
                    <CreditCard size={24} className="card-brand-icon" />
                    <div className="saved-card-info">
                      <span className="card-number-mask">Visa ending in 4242</span>
                      <span className="card-exp">Expires 08/28 • Default</span>
                    </div>
                    <span className="default-pill">Default</span>
                  </div>

                  <div className="saved-card-item">
                    <CreditCard size={24} className="card-brand-icon" />
                    <div className="saved-card-info">
                      <span className="card-number-mask">Mastercard ending in 8821</span>
                      <span className="card-exp">Expires 11/27</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* TAB 4: Personal Details */}
          {activeSidebarTab === 'personal' && (
            <div className="dashboard-tab-content animate-fade-in">
              <div className="dashboard-welcome-header">
                <h1 className="dashboard-welcome-title">Personal Details & Travel Profile</h1>
                <p className="dashboard-welcome-subtitle">
                  Keep your biographical information updated for instant autofill across all visa applications.
                </p>
              </div>

              <div className="personal-details-form-card">
                <form onSubmit={handleSaveProfile} className="personal-details-form">
                  <div className="form-grid-2col">
                    <div className="form-group-field">
                      <label className="field-label-text">Full Legal Name (as in Passport)</label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="app-text-input"
                        required
                      />
                    </div>

                    <div className="form-group-field">
                      <label className="field-label-text">Email Address</label>
                      <input
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="app-text-input"
                        required
                      />
                    </div>

                    <div className="form-group-field">
                      <label className="field-label-text">Phone Number</label>
                      <input
                        type="text"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="app-text-input"
                        required
                      />
                    </div>

                    <div className="form-group-field">
                      <label className="field-label-text">Nationality</label>
                      <input
                        type="text"
                        value={profileForm.nationality}
                        onChange={(e) => setProfileForm({ ...profileForm, nationality: e.target.value })}
                        className="app-text-input"
                        required
                      />
                    </div>

                    <div className="form-group-field">
                      <label className="field-label-text">Passport Number</label>
                      <input
                        type="text"
                        value={profileForm.passportNumber}
                        onChange={(e) => setProfileForm({ ...profileForm, passportNumber: e.target.value })}
                        className="app-text-input"
                        required
                      />
                    </div>

                    <div className="form-group-field">
                      <label className="field-label-text">Passport Expiry Date</label>
                      <input
                        type="date"
                        value={profileForm.passportExpiry}
                        onChange={(e) => setProfileForm({ ...profileForm, passportExpiry: e.target.value })}
                        className="app-text-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group-field" style={{ marginTop: '16px' }}>
                    <label className="field-label-text">Residential Address</label>
                    <input
                      type="text"
                      value={profileForm.location}
                      onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      className="app-text-input"
                      required
                    />
                  </div>

                  <div className="personal-form-actions-row">
                    <button type="submit" className="btn-save-profile-pill">
                      Save Personal Details
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TAB 5: Settings */}
          {activeSidebarTab === 'settings' && (
            <div className="dashboard-tab-content animate-fade-in">
              <div className="dashboard-welcome-header">
                <h1 className="dashboard-welcome-title">Account Settings & Security</h1>
                <p className="dashboard-welcome-subtitle">
                  Configure notification preferences, consular alert webhooks, and security protocols.
                </p>
              </div>

              <div className="settings-panel-stack">
                {/* Security Section */}
                <div className="settings-section-card">
                  <div className="settings-head-row">
                    <Shield size={20} className="settings-head-icon" />
                    <h3 className="settings-head-title">Security & Authentication</h3>
                  </div>

                  <div className="settings-toggle-row">
                    <div className="toggle-text-col">
                      <span className="toggle-label">Two-Factor Authentication (2FA)</span>
                      <p className="toggle-sub">Require an SMS or authenticator code when signing into your portal.</p>
                    </div>
                    <label className="switch-toggle-label">
                      <input
                        type="checkbox"
                        checked={settingsState.twoFactorAuth}
                        onChange={(e) => setSettingsState({ ...settingsState, twoFactorAuth: e.target.checked })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="settings-action-inline">
                    <button
                      className="btn-inline-secondary"
                      onClick={() => onShowToast && onShowToast('Password reset link sent to your registered email.', 'success')}
                    >
                      <Key size={14} />
                      <span>Change Password</span>
                    </button>
                  </div>
                </div>

                {/* Notifications Section */}
                <div className="settings-section-card">
                  <div className="settings-head-row">
                    <Bell size={20} className="settings-head-icon" />
                    <h3 className="settings-head-title">Notification Preferences</h3>
                  </div>

                  <div className="settings-toggle-row">
                    <div className="toggle-text-col">
                      <span className="toggle-label">Consular Status Email Alerts</span>
                      <p className="toggle-sub">Receive instant notifications when your visa status advances or if an embassy requests documents.</p>
                    </div>
                    <label className="switch-toggle-label">
                      <input
                        type="checkbox"
                        checked={settingsState.emailUpdates}
                        onChange={(e) => setSettingsState({ ...settingsState, emailUpdates: e.target.checked })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="settings-toggle-row">
                    <div className="toggle-text-col">
                      <span className="toggle-label">SMS Status Messages</span>
                      <p className="toggle-sub">Get emergency updates and passport dispatch tracking links via SMS.</p>
                    </div>
                    <label className="switch-toggle-label">
                      <input
                        type="checkbox"
                        checked={settingsState.smsAlerts}
                        onChange={(e) => setSettingsState({ ...settingsState, smsAlerts: e.target.checked })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                {/* Preferences Section */}
                <div className="settings-section-card">
                  <div className="settings-head-row">
                    <Globe size={20} className="settings-head-icon" />
                    <h3 className="settings-head-title">Regional & Currency Preferences</h3>
                  </div>

                  <div className="form-grid-2col" style={{ marginTop: '14px' }}>
                    <div className="form-group-field">
                      <label className="field-label-text">Preferred Currency</label>
                      <select
                        value={settingsState.currency}
                        onChange={(e) => setSettingsState({ ...settingsState, currency: e.target.value })}
                        className="app-select-input"
                      >
                        <option value="USD ($)">USD ($)</option>
                        <option value="EUR (€)">EUR (€)</option>
                        <option value="GBP (£)">GBP (£)</option>
                        <option value="PHP (₱)">PHP (₱)</option>
                        <option value="CAD ($)">CAD ($)</option>
                        <option value="AUD ($)">AUD ($)</option>
                      </select>
                    </div>

                    <div className="form-group-field">
                      <label className="field-label-text">Portal Language</label>
                      <select
                        value={settingsState.language}
                        onChange={(e) => setSettingsState({ ...settingsState, language: e.target.value })}
                        className="app-select-input"
                      >
                        <option value="English (US)">English (US)</option>
                        <option value="English (UK)">English (UK)</option>
                        <option value="Tagalog / Filipino">Tagalog / Filipino</option>
                        <option value="Français">Français</option>
                        <option value="Español">Español</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="settings-save-footer">
                  <button className="btn-save-settings-pill" onClick={handleSaveSettings}>
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Hidden Native File Inputs */}
      <input
        type="file"
        ref={vaultFileInputRef}
        onChange={handleVaultFileChange}
        style={{ display: 'none' }}
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
      />

      <input
        type="file"
        ref={resolveFileInputRef}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setResolveFile(e.target.files[0]);
          }
        }}
        style={{ display: 'none' }}
        accept=".pdf,.jpg,.jpeg,.png"
      />

      {/* MODAL 1: Resolve Issue Modal */}
      {resolveModalData && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setResolveModalData(null)}>
          <div className="modal-card-dialog modal-resolve-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="modal-header-title-wrap">
                <AlertTriangle size={22} className="modal-alert-icon-red" />
                <h3 className="modal-title-text">Resolve Application Action Item</h3>
              </div>
              <button className="btn-modal-close" onClick={() => setResolveModalData(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body-content">
              <div className="resolve-app-meta-box">
                <span className="resolve-meta-tag">{resolveModalData.visaType}</span>
                <h4 className="resolve-app-country">{resolveModalData.country} (App #{resolveModalData.id})</h4>
                <p className="resolve-warning-desc">
                  Immigration authority requested biometric photo verification and updated passport bio-page scan before proceeding with embassy decision.
                </p>
              </div>

              <div className="resolve-upload-dropzone" onClick={() => resolveFileInputRef.current && resolveFileInputRef.current.click()}>
                <Upload size={24} className="resolve-cloud-icon" />
                {resolveFile ? (
                  <div className="resolve-selected-file">
                    <FileCheck size={18} className="file-check-icon" />
                    <span>Selected: {resolveFile.name} ({(resolveFile.size / 1024).toFixed(0)} KB)</span>
                  </div>
                ) : (
                  <>
                    <span className="dropzone-primary-text">Click to select Biometric File from your device</span>
                    <span className="dropzone-secondary-text">Supported: JPG, PNG, PDF (Max 10MB)</span>
                  </>
                )}
              </div>
            </div>

            <div className="modal-footer-actions">
              <button className="btn-secondary-cancel" onClick={() => setResolveModalData(null)}>
                Cancel
              </button>
              <button
                className="btn-primary-resolve-action"
                onClick={handleCompleteResolve}
              >
                <span>Submit & Resolve Issue</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: View Details & Live Tracking Modal */}
      {detailsModalData && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setDetailsModalData(null)}>
          <div className="modal-card-dialog modal-tracking-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="modal-header-title-wrap">
                <Globe size={22} className="modal-globe-icon-blue" />
                <h3 className="modal-title-text">Application Details & Live Tracking</h3>
              </div>
              <button className="btn-modal-close" onClick={() => setDetailsModalData(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body-content">
              {/* App Overview Banner */}
              <div className="tracking-overview-banner">
                <div className="tracking-app-title-col">
                  <span className="tracking-visa-type">{detailsModalData.visaType}</span>
                  <h4 className="tracking-country-name">{detailsModalData.country}</h4>
                  <p className="tracking-ref-id">Reference ID: {detailsModalData.id}</p>
                </div>
                <div className="tracking-status-badge">
                  <Clock size={16} />
                  <span>Processing (Est. {detailsModalData.expected || '3-5 Days'})</span>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="tracking-timeline-box">
                <h4 className="timeline-heading-title">Live Embassy Dossier Timeline</h4>

                <div className="timeline-steps-stack">
                  <div className="timeline-step-item step-completed">
                    <div className="step-circle"><Check size={14} /></div>
                    <div className="step-content">
                      <h5 className="step-title">Application Submitted & Fee Paid</h5>
                      <span className="step-timestamp">{detailsModalData.date || 'Oct 20, 2024'} • 09:14 AM</span>
                    </div>
                  </div>

                  <div className="timeline-step-item step-completed">
                    <div className="step-circle"><Check size={14} /></div>
                    <div className="step-content">
                      <h5 className="step-title">Legal Dossier & Document Verification</h5>
                      <span className="step-timestamp">Verified by Legal Specialist (Marcus Vance)</span>
                    </div>
                  </div>

                  <div className="timeline-step-item step-active">
                    <div className="step-circle pulse-dot"></div>
                    <div className="step-content">
                      <h5 className="step-title">Consular Review & Background Check</h5>
                      <span className="step-timestamp">In Progress at Embassy Consulate</span>
                    </div>
                  </div>

                  <div className="timeline-step-item step-pending">
                    <div className="step-circle"></div>
                    <div className="step-content">
                      <h5 className="step-title">Visa E-Grant Issued & Stamped</h5>
                      <span className="step-timestamp">Pending final approval</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer-actions">
              <button
                className="btn-secondary-cancel"
                onClick={() => {
                  if (onShowToast) onShowToast(`Downloaded tracking summary report for #${detailsModalData.id}`, 'info');
                }}
              >
                <Download size={14} />
                <span>Download Report</span>
              </button>
              <button className="btn-primary-resolve-action" onClick={() => setDetailsModalData(null)}>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
