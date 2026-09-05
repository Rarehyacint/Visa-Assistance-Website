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
        {/* Left column previewing drafts */}
        <div className="auth-sidebar-drafts">
          <div className="draft-preview-header">
            <span className="badge-tag">Auth Suite Components</span>
          </div>

          <div className="draft-box">
            <ResetPassword
              onBackToLogin={() => {
                setActiveView('main');
                setActiveTab('signin');
              }}
              onShowToast={onShowToast}
            />
          </div>

          <div className="draft-box">
            <SignUpForm
              onSwitchMode={(mode) => {
                setActiveTab(mode);
                setActiveView('main');
              }}
              onSignUpSuccess={onLoginSuccess}
            />
          </div>
        </div>

        {/* Right Main Screen matching Figma Image 1 */}
        <div className="auth-main-card">
          <div className="auth-main-header">
            <h1 className="auth-brand-title">GlobalVisa</h1>
            <p className="auth-brand-subtitle">Secure access to your visa applications</p>

            {/* Tab switch: Sign In / Register */}
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
        </div>
      </div>
    </div>
  );
}
