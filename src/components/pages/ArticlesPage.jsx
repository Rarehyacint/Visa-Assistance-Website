import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, ChevronDown, ChevronUp, User, Globe } from 'lucide-react';

export default function ArticlesPage({ onSelectArticle, onStartApplication }) {
  // Toggle states for Latest Updates accordions
  const [openUpdates, setOpenUpdates] = useState({
    update1: true,
    update2: false
  });

  const toggleUpdate = (id) => {
    setOpenUpdates((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleArticleClick = (articleId = 'france-tourist-visa') => {
    if (onSelectArticle) {
      onSelectArticle(articleId);
    } else if (onStartApplication) {
      onStartApplication();
    }
  };

  const allArticlesList = [
    {
      id: 'japan-tourist-visa-1',
      title: 'Complete Guide to Getting a Japan Tourist Visa',
      description: 'Everything you need to know about applying for a Japan tourist visa as a Filipino passport holder.',
      tags: ['#Japan', '#Tourist Visa', '#Asia'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'japan-tourist-visa-2',
      title: 'Complete Guide to Getting a Japan Tourist Visa',
      description: 'Everything you need to know about applying for a Japan tourist visa as a Filipino passport holder.',
      tags: ['#Japan', '#Tourist Visa', '#Asia'],
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'japan-tourist-visa-3',
      title: 'Complete Guide to Getting a Japan Tourist Visa',
      description: 'Everything you need to know about applying for a Japan tourist visa as a Filipino passport holder.',
      tags: ['#Japan', '#Tourist Visa', '#Asia'],
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="page-view articles-page-figma animate-fade-in">
      <div className="container articles-main-container">
        {/* =========================================================
           1. Featured Guide Hero Section (Image 1 Top)
           ========================================================= */}
        <section className="featured-guide-hero-section">
          <div className="featured-guide-grid">
            {/* Left Column: Copy & Author Info */}
            <div className="featured-guide-copy">
              <span className="featured-guide-pill-tag">FEATURED GUIDE</span>
              <h1
                className="featured-guide-title"
                onClick={() => handleArticleClick('digital-nomad-2024')}
              >
                Navigating the 2024 Digital Nomad Visa Landscape
              </h1>
              <p className="featured-guide-desc">
                A comprehensive analysis of emerging remote work policies, application requirements, and top-tier
                destinations for location-independent professionals seeking long-term residency options.
              </p>

              {/* Author Card */}
              <div className="featured-author-card" onClick={() => handleArticleClick('digital-nomad-2024')}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
                  alt="Elena Rostova"
                  className="author-avatar-img"
                />
                <div className="author-info-col">
                  <h4 className="author-name-text">Elena Rostova</h4>
                  <span className="author-role-date">Senior Policy Analyst • Oct 15, 2024</span>
                </div>
              </div>
            </div>

            {/* Right Column: Graphic Card */}
            <div
              className="featured-guide-media"
              onClick={() => handleArticleClick('digital-nomad-2024')}
            >
              <div className="featured-media-card-box">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Nomad Working Remotely"
                  className="featured-hero-img"
                />
                <div className="media-overlay-gradient"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================
         2. Latest Updates Section (Royal Blue Band - Image 1 Middle)
         ========================================================= */}
      <section className="articles-latest-updates-band">
        <div className="container">
          <div className="updates-header-block">
            <h2 className="updates-section-title">Latest Updates</h2>
            <p className="updates-section-subtitle">Addressing common concerns about the journey.</p>
          </div>

          <div className="updates-accordion-stack">
            {/* Update Card 1 */}
            <div className={`update-accordion-card ${openUpdates.update1 ? 'expanded' : ''}`}>
              <div
                className="update-card-header-row"
                onClick={() => toggleUpdate('update1')}
              >
                <h3 className="update-card-title">Japan extends Visa-Free Stay for Passport Holders</h3>
                <button className="btn-toggle-update-text">
                  {openUpdates.update1 ? 'Click to Collapse' : 'Click to Expand'}
                </button>
              </div>

              <div className="update-date-row">
                <Calendar size={14} className="update-icon" />
                <span>February 22, 2026</span>
              </div>

              {openUpdates.update1 && (
                <div className="update-card-body-text animate-fade-in">
                  <p>
                    The Japanese government has announced an extension of the visa-free stay period for Philippine
                    passport holders from 15 days to 30 days, effective March 1, 2026. This applies to short-term
                    stays for tourism, business meetings, and visiting friends or relatives. Travelers must still meet
                    all entry requirements including proof of return ticket and sufficient funds.
                  </p>
                </div>
              )}

              <div className="update-bottom-tags-row">
                <span className="update-meta-pill">
                  <Clock size={12} />
                  <span>Today</span>
                </span>
                <span className="update-meta-pill">
                  <MapPin size={12} />
                  <span>Japan</span>
                </span>
              </div>
            </div>

            {/* Update Card 2 */}
            <div className={`update-accordion-card ${openUpdates.update2 ? 'expanded' : ''}`}>
              <div
                className="update-card-header-row"
                onClick={() => toggleUpdate('update2')}
              >
                <h3 className="update-card-title">Japan extends Visa-Free Stay for Passport Holders</h3>
                <button className="btn-toggle-update-text">
                  {openUpdates.update2 ? 'Click to Collapse' : 'Click to Expand'}
                </button>
              </div>

              <div className="update-date-row">
                <Calendar size={14} className="update-icon" />
                <span>February 22, 2026</span>
              </div>

              {openUpdates.update2 && (
                <div className="update-card-body-text animate-fade-in">
                  <p>
                    The Japanese government has announced an extension of the visa-free stay period for Philippine
                    passport holders from 15 days to 30 days, effective March 1, 2026. This applies to short-term
                    stays for tourism, business meetings, and visiting friends or relatives. Travelers must still meet
                    all entry requirements including proof of return ticket and sufficient funds.
                  </p>
                </div>
              )}

              <div className="update-bottom-tags-row">
                <span className="update-meta-pill">
                  <Clock size={12} />
                  <span>Today</span>
                </span>
                <span className="update-meta-pill">
                  <MapPin size={12} />
                  <span>Japan</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. All Articles Section (Image 1 Bottom)
         ========================================================= */}
      <section className="all-articles-section-white">
        <div className="container">
          <div className="all-articles-heading-row">
            <h2 className="all-articles-title">All Articles</h2>
            <div className="all-articles-divider-line"></div>
          </div>

          <div className="all-articles-3col-grid">
            {allArticlesList.map((art, idx) => (
              <div
                key={art.id + idx}
                className="article-card-figma"
                onClick={() => handleArticleClick(art.id)}
              >
                {/* Top Image Preview */}
                <div className="article-figma-thumb-wrap">
                  <img src={art.image} alt={art.title} className="article-figma-thumb-img" />
                </div>

                {/* Body Content */}
                <div className="article-figma-body">
                  <h3 className="article-figma-card-title">{art.title}</h3>
                  <p className="article-figma-card-desc">{art.description}</p>

                  <div className="article-figma-footer-row">
                    <div className="article-tags-group">
                      {art.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="article-tag-item">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn-read-more-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArticleClick(art.id);
                      }}
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         4. Ready to Start Your Journey? CTA Banner
         ========================================================= */}
      <section className="journey-blue-cta">
        <div className="container">
          <div className="journey-cta-inner">
            <h2 className="cta-banner-title">Ready to Start Your Journey?</h2>
            <p className="cta-banner-subtitle">
              Take the first step toward your destination with a 15-minute diagnostic assessment.
            </p>
            <button className="btn-cta-white-pill" onClick={onStartApplication}>
              Start Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
