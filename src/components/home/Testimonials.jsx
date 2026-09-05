import React from 'react';
import { Star } from 'lucide-react';
import { clientTestimonials } from '../../data/pricingData';

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="testimonials-pretitle">CLIENT EXPERIENCES</span>
          <h2 className="testimonials-title">Trusted by global travelers</h2>
        </div>

        {/* 3 Review Cards matching Image 4 */}
        <div className="testimonials-cards-grid">
          {clientTestimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Star Rating */}
              <div className="testimonial-stars-row">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="star-filled-icon"
                    fill="#f59e0b"
                    color="#f59e0b"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote">"{item.quote}"</p>

              {/* Author Row */}
              <div className="testimonial-author-row">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
