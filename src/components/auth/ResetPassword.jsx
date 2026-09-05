import React, { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ResetPassword({ onBackToLogin, onShowToast }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Password recovery link sent to ${email}`);
      }
    }, 600);
  };

  return (
    <div className="figma-reset-password-card">
      <button
        type="button"
        className="figma-back-link"
        onClick={onBackToLogin}
      >
        <ArrowLeft size={16} />
        <span>Back to Login</span>
      </button>

      <h2 className="figma-reset-title">Reset Password</h2>
      <p className="figma-reset-desc">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {submitted ? (
        <div className="figma-reset-success animate-pop-in">
          <CheckCircle2 size={36} color="#10b981" />
          <h3>Recovery Email Sent!</h3>
          <p>Please check your inbox at <strong>{email}</strong> for instructions to reset your password.</p>
          <button
            type="button"
            className="btn-figma-blue"
            onClick={onBackToLogin}
            style={{ marginTop: '16px', width: '100%' }}
          >
            Return to Sign In
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="figma-input-group">
              <Mail size={18} className="figma-input-icon" />
              <input
                type="email"
                className="figma-styled-input"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-figma-blue"
            disabled={loading}
            style={{ width: '100%', marginTop: '10px' }}
          >
            {loading ? 'Sending Link...' : 'Send Recovery Link'}
          </button>
        </form>
      )}
    </div>
  );
}
