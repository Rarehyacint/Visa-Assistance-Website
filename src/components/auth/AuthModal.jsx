import React, { useState } from 'react';
import { X } from 'lucide-react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ResetPassword from './ResetPassword';

export default function AuthModal({
  isOpen,
  initialMode = 'signin',
  onClose,
  onLoginSuccess,
  onShowToast
}) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'register' | 'reset'

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="auth-modal-window animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {mode !== 'reset' && (
          <div className="auth-modal-header">
            <h2 className="auth-brand-heading">GlobalVisa</h2>
            <p className="auth-brand-subheading">Secure access to your visa applications</p>

            {/* Tab navigation matching Figma Sign In / Register */}
            <div className="figma-auth-tabs">
              <button
                className={`figma-auth-tab ${mode === 'signin' ? 'active' : ''}`}
                onClick={() => setMode('signin')}
              >
                Sign In
              </button>
              <button
                className={`figma-auth-tab ${mode === 'register' ? 'active' : ''}`}
                onClick={() => setMode('register')}
              >
                Register
              </button>
            </div>
          </div>
        )}

        <div className="auth-modal-body">
          {mode === 'signin' && (
            <SignInForm
              onSwitchMode={(newMode) => setMode(newMode)}
              onLoginSuccess={(user) => {
                onLoginSuccess(user);
                onClose();
              }}
              onResetPassword={() => setMode('reset')}
            />
          )}

          {mode === 'register' && (
            <SignUpForm
              onSwitchMode={(newMode) => setMode(newMode)}
              onSignUpSuccess={(user) => {
                onLoginSuccess(user);
                onClose();
              }}
            />
          )}

          {mode === 'reset' && (
            <ResetPassword
              onBackToLogin={() => setMode('signin')}
              onShowToast={onShowToast}
            />
          )}
        </div>
      </div>
    </div>
  );
}
