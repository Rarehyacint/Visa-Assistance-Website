import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function VisaHero({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
  const categories = [
    { id: 'all', label: 'All Pathways' },
    { id: 'leisure', label: 'Tourism & Leisure' },
    { id: 'academic', label: 'Study & Research' },
    { id: 'nomad', label: 'Digital Nomad & Remote' },
    { id: 'longterm', label: 'Retirement & Family' }
  ];

  return (
    <div className="visa-hero-section">
      <div className="container">
        <div className="visa-hero-content">
          <span className="visa-pretitle">OFFICIAL PATHWAYS</span>
          <h1 className="visa-hero-title">
            Navigate Global Borders with Absolute Confidence
          </h1>
          <p className="visa-hero-subtitle">
            Select your destination and intent. Our institutional-grade processing ensures your visa application is precise, compliant, and prioritized.
          </p>

          {/* Search and filter bar */}
          <div className="visa-filter-bar">
            <div className="visa-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search visa types, country requirements, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="visa-search-input"
              />
            </div>

            <div className="visa-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`visa-cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
