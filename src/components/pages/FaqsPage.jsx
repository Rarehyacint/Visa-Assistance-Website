import React, { useState } from 'react';
import { Globe, RefreshCw, Banknote, FileText, Mail, Phone, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { faqCategories, categorizedFaqs } from '../../data/faqData';

const iconMap = {
  Globe: Globe,
  RefreshCw: RefreshCw,
  Banknote: Banknote,
  FileText: FileText
};

export default function FaqsPage({ onShowToast }) {
  // Store expanded states for accordion items
  const [expandedItems, setExpandedItems] = useState({
    'gen-1': true,
    'proc-1': true,
    'proc-2': false,
    'fees-1': false,
    'docs-1': false
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiry: ''
  });

  const [formSent, setFormSent] = useState(false);

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCategoryClick = (categoryTitle) => {
    const element = document.getElementById(`faq-section-${categoryTitle.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.inquiry) {
      if (onShowToast) onShowToast('Please fill in all fields to send your inquiry.', 'warning');
      return;
    }
    setFormSent(true);
    if (onShowToast) onShowToast('Your inquiry has been sent to our visa support team!', 'success');
    setFormData({ fullName: '', email: '', inquiry: '' });
  };

  return (
    <div className="page-view faqs-page animate-fade-in">
      {/* 1. Header Hero */}
      <section className="page-hero-header">
        <div className="container">
          <div className="page-hero-inner">
            <span className="hero-tag-blue">PRECISION WORKFLOW</span>
            <h1 className="page-hero-title">Frequently Asked Questions</h1>
            <p className="page-hero-subtitle">
              Everything you need to know about the visa application process. Can't find the answer? Our support team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Royal Blue Category Grid Band (Image 1) */}
      <section className="royal-blue-band faq-category-band">
        <div className="container">
          <div className="faq-category-cards-grid">
            {faqCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Globe;
              return (
                <div
                  key={cat.id}
                  className="faq-category-card"
                  onClick={() => handleCategoryClick(cat.title)}
                >
                  <div className="faq-category-icon-wrap">
                    <Icon size={24} className="faq-category-icon" />
                  </div>
                  <h3 className="faq-category-title">{cat.title}</h3>
                  <p className="faq-category-desc">{cat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Categorized Accordions Section (Image 1 middle) */}
      <section className="faq-accordion-section-white">
        <div className="container faq-accordion-container">
          {categorizedFaqs.map((section, sIdx) => {
            const SectionIcon = iconMap[section.icon] || Globe;
            const sectionId = `faq-section-${section.category.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <div key={sIdx} id={sectionId} className="faq-section-group">
                {/* Section Header with Icon */}
                <div className="faq-section-heading-row">
                  <SectionIcon size={26} className="faq-heading-icon" />
                  <h2 className="faq-heading-text">{section.category}</h2>
                </div>

                {/* Question Accordion List */}
                <div className="faq-questions-stack">
                  {section.items.map((item) => {
                    const isExpanded = expandedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`faq-pill-accordion-card ${isExpanded ? 'active-expanded' : ''}`}
                      >
                        <button
                          className="faq-accordion-trigger"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isExpanded}
                        >
                          <span className="faq-question-title">{item.question}</span>
                          <span className="faq-chevron-btn">
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="faq-accordion-expanded-content animate-fade-in">
                            <p className="faq-answer-paragraph">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bottom "Still have questions?" Contact Band (Image 1 bottom) */}
      <section className="faq-contact-bottom-band">
        <div className="container">
          <div className="faq-contact-split-grid">
            {/* Left Column: Support Info */}
            <div className="faq-contact-left-col">
              <h2 className="faq-contact-title">Still have questions?</h2>
              <p className="faq-contact-subtitle">
                Our team of visa specialists is available 24/7 to assist you with any specific queries regarding your international travel.
              </p>

              <div className="faq-direct-channels">
                <div className="contact-channel-row">
                  <Mail size={18} className="channel-icon" />
                  <a href="mailto:support@globalvisa.com" className="channel-link">
                    support@globalvisa.com
                  </a>
                </div>
                <div className="contact-channel-row">
                  <Phone size={18} className="channel-icon" />
                  <a href="tel:+180084724357" className="channel-link">
                    +1 (800) VISA-HELP
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="faq-contact-form-col">
              <form onSubmit={handleSubmit} className="faq-quick-inquiry-form">
                <div className="form-group-custom">
                  <label className="form-label-custom">Full Name</label>
                  <input
                    type="text"
                    placeholder="Juan Dela Cruz"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input-pill"
                    required
                  />
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input-pill"
                    required
                  />
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">Inquiry</label>
                  <input
                    type="text"
                    placeholder="john@example.com"
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    className="form-input-pill"
                    required
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-send-message-pill">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
