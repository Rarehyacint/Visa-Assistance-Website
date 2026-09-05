import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, Clock, Star } from 'lucide-react';
import { featuredDestinations } from '../../data/destinationData';

export default function Destinations({ onSelectDestination }) {
  const [hoveredDest, setHoveredDest] = useState(null);

  const mainDest = featuredDestinations[0]; // Paris
  const subDest1 = featuredDestinations[1]; // Batanes
  const subDest2 = featuredDestinations[2]; // Bali / Coastal

  return (
    <section className="destinations-section" id="destinations-section">
      <div className="container">
        <div className="destinations-header">
          <h2 className="destinations-title">Popular Destinations</h2>
          <p className="destinations-subtitle">
            Explore the most sought-after destinations with streamlined visa processes and high approval rates.
          </p>
        </div>

        {/* Media Grid matching Image 3 layout */}
        <div className="destinations-gallery-grid">
          {/* Main Large Card (Left) */}
          <div
            className="destination-card large-card"
            onClick={() => onSelectDestination(mainDest)}
            onMouseEnter={() => setHoveredDest(mainDest.id)}
            onMouseLeave={() => setHoveredDest(null)}
          >
            <div className="card-image-wrap">
              <img
                src={mainDest.imageUrl}
                alt={mainDest.imageAlt}
                className="destination-img"
                loading="lazy"
              />
              <div className="destination-overlay">
                <div className="destination-meta-top">
                  <span className="dest-region-tag">
                    <MapPin size={13} />
                    {mainDest.region}
                  </span>
                  <span className="dest-rate-badge">
                    <CheckCircle2 size={13} />
                    {mainDest.approvalRate} Approval
                  </span>
                </div>

                <div className="destination-meta-bottom">
                  <h3 className="dest-card-title">{mainDest.name}</h3>
                  <p className="dest-card-desc">{mainDest.description}</p>
                  <div className="dest-action-row">
                    <span className="dest-time-chip">
                      <Clock size={13} /> {mainDest.processingDays} avg
                    </span>
                    <button className="dest-view-btn">
                      <span>Apply Now</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with 2 stacked cards */}
          <div className="destinations-stacked-col">
            {/* Top Right Card */}
            <div
              className="destination-card stack-card"
              onClick={() => onSelectDestination(subDest1)}
              onMouseEnter={() => setHoveredDest(subDest1.id)}
              onMouseLeave={() => setHoveredDest(null)}
            >
              <div className="card-image-wrap">
                <img
                  src={subDest1.imageUrl}
                  alt={subDest1.imageAlt}
                  className="destination-img"
                  loading="lazy"
                />
                <div className="destination-overlay compact">
                  <div className="destination-meta-top">
                    <span className="dest-region-tag">
                      <MapPin size={13} />
                      {subDest1.region}
                    </span>
                    <span className="dest-rate-badge">
                      <CheckCircle2 size={13} />
                      {subDest1.approvalRate} Approval
                    </span>
                  </div>

                  <div className="destination-meta-bottom">
                    <h3 className="dest-card-title">{subDest1.name}</h3>
                    <div className="dest-action-row">
                      <span className="dest-time-chip">
                        <Clock size={13} /> {subDest1.processingDays}
                      </span>
                      <button className="dest-view-btn">
                        <span>Check Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div
              className="destination-card stack-card"
              onClick={() => onSelectDestination(subDest2)}
              onMouseEnter={() => setHoveredDest(subDest2.id)}
              onMouseLeave={() => setHoveredDest(null)}
            >
              <div className="card-image-wrap">
                <img
                  src={subDest2.imageUrl}
                  alt={subDest2.imageAlt}
                  className="destination-img"
                  loading="lazy"
                />
                <div className="destination-overlay compact">
                  <div className="destination-meta-top">
                    <span className="dest-region-tag">
                      <MapPin size={13} />
                      {subDest2.region}
                    </span>
                    <span className="dest-rate-badge">
                      <CheckCircle2 size={13} />
                      {subDest2.approvalRate} Approval
                    </span>
                  </div>

                  <div className="destination-meta-bottom">
                    <h3 className="dest-card-title">{subDest2.name}</h3>
                    <div className="dest-action-row">
                      <span className="dest-time-chip">
                        <Clock size={13} /> {subDest2.processingDays}
                      </span>
                      <button className="dest-view-btn">
                        <span>Check Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
