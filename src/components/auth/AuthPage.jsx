import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ResetPassword from './ResetPassword';

export default function AuthPage({ onLoginSuccess, onShowToast }) {
  const [activeTab, setActiveTab] = useState('signin'); // 'signin' | 'register'
  const [activeView, setActiveView] = useState('main'); // 'main' | 'reset'

  return (
    <div className="auth-page-wrapper">
      <div className="container auth-page-container">
        <div className="auth-main-shell">
          <header className="auth-page-header">
            <div className="auth-page-logo" aria-label="GlobalVisa logo" />
            <nav className="auth-page-nav" aria-label="Primary navigation">
              <button type="button">Visas <span aria-hidden="true">⌄</span></button>
              <button type="button">Destinations</button>
              <button type="button">Services</button>
              <button type="button">Process</button>
              <button type="button">Articles</button>
              <button type="button">FAQs</button>
            </nav>
            <button type="button" className="auth-page-signup">♙ &nbsp; SIGN IN / SIGN UP</button>
          </header>

          <main className={`auth-main-card ${activeView === 'main' && activeTab === 'register' ? 'is-register-view' : ''}`}>
            <div className="auth-main-header">
              <h1 className="auth-brand-title">GlobalVisa</h1>
              <p className="auth-brand-subtitle">Secure access to your visa applications</p>

              <div className="figma-auth-tabs main-tabs">
                <button
                  className={`figma-auth-tab ${activeTab === 'signin' && activeView === 'main' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('signin');
                    setActiveView('main');
                  }}
                >
                  Sign In
                </button>
                <button
                  className={`figma-auth-tab ${activeTab === 'register' && activeView === 'main' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('register');
                    setActiveView('main');
                  }}
                >
                  Register
                </button>
              </div>
            </div>

            <div className="auth-main-content">
              {activeView === 'reset' ? (
                <ResetPassword
                  onBackToLogin={() => setActiveView('main')}
                  onShowToast={onShowToast}
                />
              ) : activeTab === 'signin' ? (
                <SignInForm
                  onSwitchMode={(mode) => setActiveTab(mode)}
                  onLoginSuccess={onLoginSuccess}
                  onResetPassword={() => setActiveView('reset')}
                />
              ) : (
                <SignUpForm
                  onSwitchMode={(mode) => setActiveTab(mode)}
                  onSignUpSuccess={onLoginSuccess}
                />
              )}
            </div>
          </main>

          <footer className="auth-page-footer">
            <div>
              <strong>Global Visa</strong>
              <p>Leading the way in digital visa solutions for the modern global citizen. Precision, security, and institutional reliability.</p>
              <div className="auth-footer-socials" aria-label="Social links">● &nbsp; ◎ &nbsp; ◉</div>
            </div>
            <div>
              <strong>RESOURCES</strong>
              <button type="button">Privacy Policy</button>
              <button type="button">Terms of Services</button>
            </div>
            <div>
              <strong>SUPPORT</strong>
              <button type="button">Contact Support</button>
              <button type="button">Global Offices</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
