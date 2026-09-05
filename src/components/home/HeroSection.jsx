import React from 'react';
import { ArrowRight, Globe, Shield, Sparkles } from 'lucide-react';

export default function HeroSection({ onStartApplication, onViewDestinations }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Trusted Badge */}
        <div className="hero-badge-wrap">
          <span className="hero-badge">
            <Sparkles size={13} className="hero-sparkle-icon" />
            TRUSTED BY 50,000+ FOLLOWERS
          </span>
        </div>

        {/* Hero Title matching Image 2 */}
        <h1 className="hero-title">
          Welcome to Global Visa: Your Journey Starts Here
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-subtitle">
          The official home for seamless international travel. Navigate complexities with expert visa guidance, secure processing, and dedicated support for global citizens.
        </p>

        {/* Hero CTA Buttons matching Image 2 */}
        <div className="hero-actions">
          <button
            className="btn-hero-primary"
            onClick={onStartApplication}
          >
            <span>Start Application</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="btn-hero-secondary"
            onClick={onViewDestinations}
          >
            <span>View Destinations</span>
          </button>
        </div>
      </div>
    </section>
  );
}
