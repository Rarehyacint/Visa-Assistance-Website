import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, User, Mail, Phone, ArrowRight } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, onBooked }) {
  const [specialist, setSpecialist] = useState('EU & Schengen Immigration Attorney');
  const [selectedDate, setSelectedDate] = useState('Tomorrow (10:00 AM UTC)');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      if (onBooked) {
        onBooked({
          specialist,
          selectedDate,
          clientName,
          clientEmail
        });
      }
    }, 600);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="consultation-modal-window animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="consultation-modal-header">
          <div className="badge-tag">Free 30-Min Strategy Call</div>
          <h2 className="consultation-modal-title">Schedule Legal Consultation</h2>
          <p className="consultation-modal-desc">
            Speak directly with a senior immigration lawyer to analyze your case, compare visa pathways, and establish an expedited timeline.
          </p>
        </div>

        {success ? (
          <div className="consultation-success animate-pop-in">
            <CheckCircle2 size={44} color="#10b981" />
            <h3>Consultation Confirmed!</h3>
            <p>
              Your strategy session with <strong>{specialist}</strong> has been scheduled for <strong>{selectedDate}</strong>.
            </p>
            <p className="subtext">
              A calendar invitation and secure video link have been sent to <strong>{clientEmail}</strong>.
            </p>
            <button
              className="btn-blue"
              onClick={onClose}
              style={{ width: '100%', marginTop: '20px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="consultation-form">
            <div className="form-group">
              <label className="form-label">Specialist Focus</label>
              <select
                className="form-input form-select"
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              >
                <option value="EU & Schengen Immigration Attorney">EU & Schengen Immigration Attorney</option>
                <option value="US & UK Academic / Employment Visa Specialist">US & UK Academic / Employment Visa Specialist</option>
                <option value="Digital Nomad & Remote Tax Residency Advisor">Digital Nomad & Remote Tax Residency Advisor</option>
                <option value="Retirement & Permanent Residency Strategist">Retirement & Permanent Residency Strategist</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Time Slot</label>
              <select
                className="form-input form-select"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="Tomorrow (10:00 AM UTC)">Tomorrow — 10:00 AM UTC (18:00 Local)</option>
                <option value="Tomorrow (02:00 PM UTC)">Tomorrow — 02:00 PM UTC (22:00 Local)</option>
                <option value="In 2 Days (09:00 AM UTC)">In 2 Days — 09:00 AM UTC</option>
                <option value="In 3 Days (04:00 PM UTC)">In 3 Days — 04:00 PM UTC</option>
              </select>
            </div>

            <div className="form-grid-2col">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Full Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@domain.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Brief Background / Questions (Optional)</label>
              <textarea
                className="form-input form-textarea"
                rows="2"
                placeholder="e.g. Applying for French long-stay visa with remote income..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <div className="consultation-modal-footer">
              <button
                type="submit"
                className="btn-blue"
                disabled={loading}
                style={{ width: '100%' }}
              >
                <Video size={16} />
                <span>{loading ? 'Confirming Booking...' : 'Confirm Free Video Call'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
