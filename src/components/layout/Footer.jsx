import React from 'react';

export default function Footer({ setActivePage, onOpenAuth }) {
  const handlePageClick = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="global-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row" onClick={() => handlePageClick('visas')} style={{ cursor: 'pointer' }}>
              <div className="brand-circle-logo sm">
                <div className="logo-inner-dot"></div>
              </div>
              <h3 className="footer-brand-title">Global Visa</h3>
            </div>
            <p className="footer-brand-desc">
              Leading the way in digital visa solutions for the modern global citizen. Precision, security, and institutional reliability.
            </p>
            {/* Social Links matching Figma */}
            <div className="footer-social-links">
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#tiktok" className="social-icon-btn" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.9-4.46V8.75a8.28 8.28 0 0 0 4.87 1.57v-3.63Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">RESOURCES</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); handlePageClick('articles'); }}>Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => { e.preventDefault(); handlePageClick('articles'); }}>Terms of Services</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">SUPPORT</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handlePageClick('process'); }}>Contact Support</a>
              </li>
              <li>
                <a href="#offices" onClick={(e) => { e.preventDefault(); handlePageClick('destinations'); }}>Global Offices</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Global Visa. All rights reserved. Precision, security, and institutional reliability.
          </p>
        </div>
      </div>
    </footer>
  );
}
