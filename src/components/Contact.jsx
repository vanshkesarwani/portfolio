import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  FileText, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Contact({ onCopy, onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      if (onCopy) onCopy("Email copied to clipboard! 📬");
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      if (onCopy) onCopy("Phone number copied to clipboard! 📞");
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message
    setFormSubmitted(true);
    if (onCopy) onCopy("Message received! Vansh will reply shortly. 🚀");
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-description">
            Available for immediate joining in MERN Stack & Full Stack developer roles. Relocation-ready.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="contact-info-col">
            {/* Status Pill */}
            <div className="contact-status-card glass-card">
              <div className="status-indicator-wrap">
                <span className="pill-pulse-dot"></span>
                <div>
                  <h4 className="status-h4">Currently Seeking Opportunities</h4>
                  <p className="status-sub">
                    Immediate Joiner • Open to Relocate across India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards with 1-Click Copy */}
            <div className="contact-methods-stack">
              {/* Email Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon-wrap">
                  <Mail size={20} className="text-indigo" />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label font-mono">Email Address</span>
                  <a href={`mailto:${portfolioData.personal.contact.email}`} className="contact-card-value">
                    {portfolioData.personal.contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(portfolioData.personal.contact.email, "email")}
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon-wrap">
                  <Phone size={20} className="text-cyan" />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label font-mono">Phone Number</span>
                  <a href={`tel:${portfolioData.personal.contact.phoneRaw}`} className="contact-card-value">
                    {portfolioData.personal.contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(portfolioData.personal.contact.phoneRaw, "phone")}
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon-wrap">
                  <MapPin size={20} className="text-amber" />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label font-mono">Location</span>
                  <span className="contact-card-value">
                    {portfolioData.personal.status.location}
                  </span>
                </div>
                <span className="pill pill-success font-mono">Open to Relocate</span>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="contact-socials-row">
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={portfolioData.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onOpenResume}
              >
                <FileText size={16} />
                <span>View CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3 className="form-card-title font-heading">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Have a role, project idea, or just want to chat tech? Drop me a message.
              </p>

              {formSubmitted ? (
                <div className="form-success-box font-mono">
                  <Check size={28} className="text-emerald" />
                  <h4>Message Dispatched!</h4>
                  <p>Thanks for reaching out! I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="contact-name" className="font-mono">Your Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-email" className="font-mono">Your Email *</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-subject" className="font-mono">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="MERN Stack Opportunity / Project"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-message" className="font-mono">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Hi Vansh, we came across your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    id="contact-submit-btn"
                  >
                    <span>Transmit Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
