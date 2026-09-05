import React, { useState } from 'react';
import { Search, Menu, ArrowRight, ShieldCheck, ChevronRight, MapPin, Globe2, Sparkles, Check } from 'lucide-react';
import { mobilityDestinations, destinationDirectory } from '../../data/destinationData';

export default function DestinationsPage({ onSelectDestination, onStartApplication }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDirectoryItem, setSelectedDirectoryItem] = useState(null);

  const filteredDestinations = mobilityDestinations.filter((dest) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      dest.title.toLowerCase().includes(query) ||
      (dest.subtitle && dest.subtitle.toLowerCase().includes(query)) ||
      (dest.description && dest.description.toLowerCase().includes(query))
    );
  });

  const handleCountryClick = (country) => {
    setSelectedDirectoryItem(country);
    if (onSelectDestination) {
      onSelectDestination({
        name: country.name,
        region: country.region,
        processingDays: country.avgProcessing,
        govFee: country.govFee
      });
    }
  };

  return (
    <div className="page-view destinations-page animate-fade-in">
      {/* 1. Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <div className="page-hero-inner">
            <span className="hero-tag-blue">GLOBAL MOBILITY SPECIALISTS</span>
            <h1 className="page-hero-title">
              Your Gateway to Seamless International Destinations
            </h1>
            <p className="page-hero-subtitle">
              Navigate the complexities of global travel with ease. From professional migration to leisure discovery, we provide the precision and reliability required for every border.
            </p>

            {/* Search and Explore Bar matching Image 2 */}
            <div className="destination-search-action-bar">
              <div className="destination-input-pill-wrap">
                <Menu size={18} className="search-menu-icon" />
                <input
                  type="text"
                  placeholder="Hinted search text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="dest-search-input-field"
                />
                <Search size={18} className="search-lens-icon" />
              </div>

              <button
                className="btn-explore-dark-pill"
                onClick={() => {
                  const el = document.getElementById('destinations-grid-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Royal Blue Band with Mobility Cards Grid (Image 2) */}
      <section className="royal-blue-band destination-cards-band" id="destinations-grid-section">
        <div className="container">
          <div className="destinations-band-header">
            <h2 className="band-main-title">Institutional Reliability. Personal Clarity.</h2>
            <p className="band-main-subtitle">
              We bridge the gap between complex bureaucratic procedures and your international goals. Our approach is defined by precision and transparency.
            </p>
          </div>

          <div className="dest-cards-mosaic-grid">
            {/* Top Row: Europe (Wide) + North America */}
            <div className="mosaic-top-row">
              {/* Card 1: Europe & Schengen Area */}
              <div
                className="dest-card-mosaic dest-card-europe"
                onClick={() => onSelectDestination && onSelectDestination(mobilityDestinations[0])}
              >
                <div className="dest-mosaic-media">
                  <img
                    src={mobilityDestinations[0].imageUrl}
                    alt={mobilityDestinations[0].imageAlt}
                    className="dest-mosaic-img"
                    loading="lazy"
                  />
                  <div className="dest-mosaic-overlay-content">
                    <h3 className="dest-overlay-title">{mobilityDestinations[0].title}</h3>
                    <p className="dest-overlay-subtitle">{mobilityDestinations[0].subtitle}</p>
                  </div>
                </div>

                <div className="dest-mosaic-stats-strip">
                  <div className="stat-unit">
                    <span className="stat-unit-label">KEY VISA</span>
                    <span className="stat-unit-val">{mobilityDestinations[0].keyVisa}</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-unit-label">PROCESSING</span>
                    <span className="stat-unit-val">{mobilityDestinations[0].processing}</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-unit-label">STABILITY</span>
                    <div className="stability-dots" aria-label="Stability rating 4 of 5">
                      <span className="dot active"></span>
                      <span className="dot active"></span>
                      <span className="dot active"></span>
                      <span className="dot active"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <div className="stat-view-link">
                    <span>View All</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>

              {/* Card 2: North America */}
              <div
                className="dest-card-mosaic dest-card-north-america"
                onClick={() => onSelectDestination && onSelectDestination(mobilityDestinations[1])}
              >
                <div className="dest-mosaic-media">
                  <img
                    src={mobilityDestinations[1].imageUrl}
                    alt={mobilityDestinations[1].imageAlt}
                    className="dest-mosaic-img"
                    loading="lazy"
                  />
                  <div className="dest-mosaic-overlay-content">
                    <h3 className="dest-overlay-title">{mobilityDestinations[1].title}</h3>
                  </div>
                </div>

                <div className="dest-mosaic-body-white">
                  <p className="dest-body-desc">{mobilityDestinations[1].description}</p>
                  <div className="dest-badge-row">
                    <span className="badge-shield-pill">
                      <ShieldCheck size={14} />
                      {mobilityDestinations[1].badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 equal cards (Southeast Asia, Middle East, Oceania) */}
            <div className="mosaic-bottom-row">
              {/* Card 3: Southeast Asia */}
              <div
                className="dest-card-mosaic dest-card-standard"
                onClick={() => onSelectDestination && onSelectDestination(mobilityDestinations[2])}
              >
                <div className="dest-mosaic-media">
                  <img
                    src={mobilityDestinations[2].imageUrl}
                    alt={mobilityDestinations[2].imageAlt}
                    className="dest-mosaic-img"
                    loading="lazy"
                  />
                  <div className="dest-mosaic-overlay-content">
                    <h3 className="dest-overlay-title">{mobilityDestinations[2].title}</h3>
                  </div>
                </div>

                <div className="dest-mosaic-body-white">
                  <p className="dest-body-desc">{mobilityDestinations[2].description}</p>
                  <div className="dest-badge-row">
                    {mobilityDestinations[2].badges?.map((badge, bIdx) => (
                      <span key={bIdx} className="badge-category-pill">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 4: Middle East */}
              <div
                className="dest-card-mosaic dest-card-standard"
                onClick={() => onSelectDestination && onSelectDestination(mobilityDestinations[3])}
              >
                <div className="dest-mosaic-media">
                  <img
                    src={mobilityDestinations[3].imageUrl}
                    alt={mobilityDestinations[3].imageAlt}
                    className="dest-mosaic-img"
                    loading="lazy"
                  />
                  <div className="dest-mosaic-overlay-content">
                    <h3 className="dest-overlay-title">{mobilityDestinations[3].title}</h3>
                  </div>
                </div>

                <div className="dest-mosaic-body-white">
                  <p className="dest-body-desc">{mobilityDestinations[3].description}</p>
                </div>
              </div>

              {/* Card 5: Oceania */}
              <div
                className="dest-card-mosaic dest-card-standard"
                onClick={() => onSelectDestination && onSelectDestination(mobilityDestinations[4])}
              >
                <div className="dest-mosaic-media">
                  <img
                    src={mobilityDestinations[4].imageUrl}
                    alt={mobilityDestinations[4].imageAlt}
                    className="dest-mosaic-img"
                    loading="lazy"
                  />
                  <div className="dest-mosaic-overlay-content">
                    <h3 className="dest-overlay-title">{mobilityDestinations[4].title}</h3>
                  </div>
                </div>

                <div className="dest-mosaic-body-white">
                  <p className="dest-body-desc">{mobilityDestinations[4].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full Destination Directory & Map Section (Image 2 bottom) */}
      <section className="directory-map-section">
        <div className="container">
          <div className="directory-map-grid">
            {/* Left: Interactive/Stylized Map Graphic matching Manila/Urban Map */}
            <div className="map-display-panel">
              <div className="metro-map-canvas">
                {/* SVG Vector Map Rendering */}
                <svg
                  viewBox="0 0 500 350"
                  className="metro-map-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#99d6ea" />
                      <stop offset="100%" stopColor="#7ec8e3" />
                    </linearGradient>
                    <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e5e5dd" />
                      <stop offset="100%" stopColor="#dcdcd4" />
                    </linearGradient>
                  </defs>

                  {/* Land Background */}
                  <rect width="500" height="350" fill="url(#landGrad)" />

                  {/* Coastline / Manila Bay Water */}
                  <path
                    d="M 0,160 C 50,180 80,240 120,280 C 150,310 180,330 240,350 L 0,350 Z"
                    fill="url(#waterGrad)"
                    opacity="0.9"
                  />
                  
                  {/* Rivers */}
                  <path
                    d="M 120,280 Q 220,250 280,240 T 420,210 T 500,200"
                    fill="none"
                    stroke="#8bcfe8"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 280,240 Q 320,280 360,320 T 400,350"
                    fill="none"
                    stroke="#8bcfe8"
                    strokeWidth="5"
                  />

                  {/* Road Grid Lines */}
                  <g stroke="#ffffff" strokeWidth="2.5" opacity="0.8">
                    <line x1="50" y1="0" x2="180" y2="350" />
                    <line x1="160" y1="0" x2="300" y2="350" />
                    <line x1="280" y1="0" x2="420" y2="350" />
                    <line x1="390" y1="0" x2="480" y2="350" />
                    
                    <line x1="0" y1="90" x2="500" y2="90" />
                    <line x1="0" y1="170" x2="500" y2="170" />
                    <line x1="0" y1="240" x2="500" y2="240" />
                    <line x1="0" y1="300" x2="500" y2="300" />

                    {/* Arterial Highways */}
                    <line x1="100" y1="50" x2="450" y2="300" stroke="#f1a94e" strokeWidth="3" />
                    <line x1="200" y1="0" x2="250" y2="350" stroke="#f1a94e" strokeWidth="3" />
                  </g>

                  {/* Location Text Labels matching Manila Metro */}
                  <text x="280" y="230" fill="#222" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
                    Manila
                  </text>
                  <text x="360" y="170" fill="#444" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                    Rivera
                  </text>
                  <text x="400" y="225" fill="#444" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                    Mandaluyong City
                  </text>
                  <text x="380" y="260" fill="#444" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    Makati City
                  </text>
                  <text x="270" y="315" fill="#444" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    Pasay City
                  </text>
                  <text x="210" y="195" fill="#666" fontSize="10" fontFamily="sans-serif">
                    Barangay 77
                  </text>
                  <text x="140" y="150" fill="#666" fontSize="10" fontFamily="sans-serif">
                    Barangay 10
                  </text>

                  {/* Pin Markers */}
                  <circle cx="280" cy="225" r="5" fill="#0052cc" />
                  <circle cx="280" cy="225" r="9" fill="none" stroke="#0052cc" strokeWidth="2" opacity="0.6" />
                  <circle cx="380" cy="255" r="5" fill="#10b981" />
                  <circle cx="270" cy="310" r="5" fill="#f59e0b" />
                </svg>

                <div className="map-badge-overlay">
                  <Globe2 size={14} />
                  <span>Global Consular Network & Embassy Hubs</span>
                </div>
              </div>
            </div>

            {/* Right: Directory list */}
            <div className="directory-list-panel">
              <h2 className="directory-main-title">Full Destination Directory</h2>
              <p className="directory-main-subtitle">
                Select a country to view detailed documentation requirements, government fees, and estimated processing timelines.
              </p>

              <div className="directory-items-stack">
                {destinationDirectory.slice(0, 4).map((item) => (
                  <div
                    key={item.code}
                    className="directory-item-row"
                    onClick={() => handleCountryClick(item)}
                  >
                    <div className="directory-row-left">
                      <span className="country-code-pill">{item.code}</span>
                      <span className="country-name-text">{item.name}</span>
                    </div>
                    <ChevronRight size={18} className="row-chevron-icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey CTA Banner (Image 2 bottom) */}
      <section className="journey-blue-cta">
        <div className="container">
          <div className="journey-cta-inner">
            <h2 className="cta-banner-title">Ready to Start Your Journey?</h2>
            <p className="cta-banner-subtitle">
              Our experts are standing by to guide you through the process, from initial document review to final approval notification.
            </p>
            <button
              className="btn-cta-white-pill"
              onClick={onStartApplication}
            >
              Start Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
