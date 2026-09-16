import React, { useState } from 'react';
import { ChevronDown, User, Menu, X, LayoutDashboard } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import { visaDropdownItems } from '../../data/visaData';
import { destinationDropdownItems } from '../../data/destinationData';

export default function Navbar({
  activePage,
  setActivePage,
  onOpenAuth,
  onOpenDiagnostic,
  userSession
}) {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'visas' | 'destinations' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleDropdownSelect = (type, id) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (type === 'visa' || type === 'visas') {
      setActivePage('visas');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else if (type === 'destination' || type === 'destinations') {
      setActivePage('destinations');
      setTimeout(() => {
        const element = document.getElementById(id) || document.getElementById('destinations-grid-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const handleNavClick = (page) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="global-navbar">
      <div className="container nav-container">
        {/* Brand / Logo */}
        <div className="nav-brand" onClick={() => handleNavClick('home')}>
          <div className="brand-circle-logo" aria-label="GlobalVisa Logo">
            <div className="logo-inner-dot"></div>
          </div>
          <span className="brand-name">GlobalVisa</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links">
          {/* 1. Home Nav Button */}
          <button
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>

          {/* 2. Visas Nav Button */}
          <button
            className={`nav-link ${activePage === 'visas' ? 'active' : ''}`}
            onClick={() => handleNavClick('visas')}
          >
            Visas
          </button>

          {/* 3. Destinations Nav Button */}
          <button
            className={`nav-link ${activePage === 'destinations' ? 'active' : ''}`}
            onClick={() => handleNavClick('destinations')}
          >
            Destinations
          </button>

          {/* 4. Services */}
          <button
            className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
            onClick={() => handleNavClick('services')}
          >
            Services
          </button>

          {/* 5. Process */}
          <button
            className={`nav-link ${activePage === 'process' ? 'active' : ''}`}
            onClick={() => handleNavClick('process')}
          >
            Process
          </button>

          {/* 6. Articles */}
          <button
            className={`nav-link ${activePage === 'articles' || activePage === 'article-content' ? 'active' : ''}`}
            onClick={() => handleNavClick('articles')}
          >
            Articles
          </button>

          {/* 7. FAQs */}
          <button
            className={`nav-link ${activePage === 'faqs' ? 'active' : ''}`}
            onClick={() => handleNavClick('faqs')}
          >
            FAQs
          </button>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {userSession ? (
            <div
              className={`user-profile-badge ${activePage === 'dashboard' ? 'active-badge' : ''}`}
              onClick={() => handleNavClick('dashboard')}
              title="Open User Dashboard"
            >
              <div className="user-avatar-sm">{userSession.name?.charAt(0) || 'A'}</div>
              <span className="user-name-label">{userSession.name?.split(' ')[0]}</span>
            </div>
          ) : (
            <div className="auth-buttons-group">
              <button
                className={`btn-auth-pill ${activePage === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleNavClick('dashboard')}
                aria-label="Open User Dashboard"
                style={{ marginRight: '6px' }}
                title="User Dashboard"
              >
                <LayoutDashboard size={13} />
                <span>DASHBOARD</span>
              </button>

              <button
                className="btn-auth-pill"
                onClick={() => onOpenAuth('signin')}
                aria-label="Sign In or Sign Up"
              >
                <User size={14} />
                <span>SIGN IN / SIGN UP</span>
              </button>
            </div>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          <div className="mobile-nav-list">
            <button
              className={`mobile-nav-item ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'visas' ? 'active' : ''}`}
              onClick={() => handleNavClick('visas')}
            >
              Visas
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'destinations' ? 'active' : ''}`}
              onClick={() => handleNavClick('destinations')}
            >
              Destinations
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'services' ? 'active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'process' ? 'active' : ''}`}
              onClick={() => handleNavClick('process')}
            >
              Process
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'articles' || activePage === 'article-content' ? 'active' : ''}`}
              onClick={() => handleNavClick('articles')}
            >
              Articles
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'faqs' ? 'active' : ''}`}
              onClick={() => handleNavClick('faqs')}
            >
              FAQs
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('dashboard')}
            >
              User Dashboard
            </button>
            
            <div className="mobile-drawer-cta">
              <button
                className="btn-cta-white-pill"
                style={{ width: '100%', backgroundColor: '#0052cc', color: '#fff' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
              >
                Start Application Assessment
              </button>
              <button
                className="btn-auth-pill"
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signin');
                }}
              >
                <User size={14} />
                <span>SIGN IN / SIGN UP</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
