import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, User, Tag, CheckCircle2 } from 'lucide-react';
import { clientTestimonials } from '../../data/pricingData';

export default function ArticlesPage({ onStartApplication }) {
  const [selectedTag, setSelectedTag] = useState('all');

  const articles = [
    {
      id: "schengen-updates-2026",
      tag: "Schengen Regulations",
      title: "EU ETIAS & Digital Border Entry: What Every Traveler Must Know in 2026",
      summary: "A complete breakdown of biometric verification, electronic travel authorization rollouts, and multi-entry compliance.",
      readTime: "5 min read",
      author: "Legal Advisory Board",
      date: "Sep 2026",
      imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "digital-nomad-tax",
      tag: "Digital Nomad",
      title: "Tax Optimization & Digital Nomad Visas: Comparing Spain, Portugal, and UAE",
      summary: "Understand statutory territorial tax breaks, minimum recurring foreign income thresholds, and path to permanent residence.",
      readTime: "7 min read",
      author: "Migration Tax Specialist",
      date: "Aug 2026",
      imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "us-b1-b2-interview-secrets",
      tag: "Consular Prep",
      title: "Cracking the US B1/B2 Consular Interview: 7 Key Mistakes to Avoid",
      summary: "Former consular officers reveal how strong home-country ties, clear travel itineraries, and precise documentation guarantee 214(b) approval.",
      readTime: "6 min read",
      author: "Consular Prep Team",
      date: "Aug 2026",
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="page-view articles-page animate-fade-in">
      {/* Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <div className="page-hero-inner">
            <span className="hero-tag-blue">IMMIGRATION INTELLIGENCE</span>
            <h1 className="page-hero-title">
              Articles, Regulatory Insights & Case Studies
            </h1>
            <p className="page-hero-subtitle">
              Stay ahead of worldwide border policy shifts, consular requirements, and residency opportunities curated by our legal team.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="royal-blue-band">
        <div className="container">
          <div className="articles-cards-grid">
            {articles.map((article) => (
              <div key={article.id} className="article-preview-card">
                <div className="article-media-wrap">
                  <img src={article.imageUrl} alt={article.title} className="article-thumb-img" />
                  <span className="article-badge-tag">{article.tag}</span>
                </div>
                <div className="article-body-content">
                  <div className="article-meta-info">
                    <span><Clock size={12} /> {article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-card-summary">{article.summary}</p>
                  <div className="article-author-row">
                    <span className="article-author-name"><User size={13} /> {article.author}</span>
                    <button className="article-read-btn" onClick={onStartApplication}>
                      <span>Read Guide</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Success Stories */}
      <section className="testimonials-section-white">
        <div className="container">
          <div className="ecosystem-header-center">
            <h2 className="section-main-title">Client Success Stories</h2>
            <p className="section-main-subtitle">
              Real results from global professionals, students, and retirees who trusted GlobalVisa.
            </p>
          </div>

          <div className="testimonials-cards-grid">
            {clientTestimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <p className="testimonial-quote">"{item.quote}"</p>
                <div className="testimonial-user-row">
                  <img src={item.avatar} alt={item.name} className="user-avatar-img" />
                  <div className="user-info">
                    <h4 className="user-name">{item.name}</h4>
                    <span className="user-title">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
