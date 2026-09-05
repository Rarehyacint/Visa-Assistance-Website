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
        <div className="nav-brand" onClick={() => handleNavClick('visas')}>
          <div className="brand-circle-logo" aria-label="GlobalVisa Logo">
            <div className="logo-inner-dot"></div>
          </div>
          <span className="brand-name">GlobalVisa</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links">
          {/* 1. Visas Dropdown Trigger */}
          <div
            className="nav-item-dropdown-wrap"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`nav-link dropdown-toggle ${activePage === 'visas' ? 'active' : ''}`}
              onClick={() => handleNavClick('visas')}
              onMouseEnter={() => setActiveDropdown('visas')}
              aria-expanded={activeDropdown === 'visas'}
            >
              <span>Visas</span>
              <ChevronDown size={14} className={`chevron-icon ${activeDropdown === 'visas' ? 'rotate' : ''}`} />
            </button>
            {activeDropdown === 'visas' && (
              <DropdownMenu
                type="visas"
                items={visaDropdownItems}
                onSelect={handleDropdownSelect}
                onClose={() => setActiveDropdown(null)}
              />
            )}
          </div>

          {/* 2. Destinations Dropdown Trigger */}
          <div
            className="nav-item-dropdown-wrap"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`nav-link dropdown-toggle ${activePage === 'destinations' ? 'active' : ''}`}
              onClick={() => handleNavClick('destinations')}
              onMouseEnter={() => setActiveDropdown('destinations')}
              aria-expanded={activeDropdown === 'destinations'}
            >
              <span>Destinations</span>
              <ChevronDown size={14} className={`chevron-icon ${activeDropdown === 'destinations' ? 'rotate' : ''}`} />
            </button>
            {activeDropdown === 'destinations' && (
              <DropdownMenu
                type="destinations"
                items={destinationDropdownItems}
                onSelect={handleDropdownSelect}
                onClose={() => setActiveDropdown(null)}
              />
            )}
          </div>

          {/* 3. Services */}
          <button
            className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
            onClick={() => handleNavClick('services')}
          >
            Services
          </button>

          {/* 4. Process */}
          <button
            className={`nav-link ${activePage === 'process' ? 'active' : ''}`}
            onClick={() => handleNavClick('process')}
          >
            Process
          </button>

          {/* 5. Articles (Article Content Page - Image 2) */}
          <button
            className={`nav-link ${activePage === 'articles' || activePage === 'article-content' ? 'active' : ''}`}
            onClick={() => handleNavClick('articles')}
          >
            Articles
          </button>

          {/* 6. FAQs (FAQs Page - Image 1) */}
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
              className={`mobile-nav-item ${activePage === 'visas' ? 'active' : ''}`}
              onClick={() => handleNavClick('visas')}
            >
              Visa Section
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'destinations' ? 'active' : ''}`}
              onClick={() => handleNavClick('destinations')}
            >
              Destination Section
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'services' ? 'active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services Section
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'process' ? 'active' : ''}`}
              onClick={() => handleNavClick('process')}
            >
              Process Section
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'articles' ? 'active' : ''}`}
              onClick={() => handleNavClick('articles')}
            >
              Article Content
            </button>
            <button
              className={`mobile-nav-item ${activePage === 'faqs' ? 'active' : ''}`}
              onClick={() => handleNavClick('faqs')}
            >
              FAQ's Page
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
