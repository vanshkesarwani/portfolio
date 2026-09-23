import React from "react";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  Star 
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section-wrapper" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-description">
            Rigorous computer science fundamentals blended with specialized AI/ML coursework and hands-on developer training.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="edu-card glass-card">
              <div className="edu-card-top">
                <div className="edu-icon-badge">
                  <GraduationCap size={22} className="text-indigo" />
                </div>
                <div className="edu-score-badge font-mono">
                  <Star size={13} className="text-amber" />
                  <span>{edu.score}</span>
                </div>
              </div>

              <h3 className="edu-degree font-heading">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-meta-row font-mono">
                <span className="edu-meta-item">
                  <Calendar size={13} /> {edu.period}
                </span>
                <span className="edu-meta-item">
                  <MapPin size={13} /> {edu.location}
                </span>
              </div>

              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Sub-section */}
        <div className="certifications-box glass-card">
          <div className="certifications-header">
            <div className="cert-title-wrap">
              <Award size={20} className="text-cyan" />
              <h3 className="cert-main-title font-heading">Verified Certifications</h3>
            </div>
            <span className="pill pill-success font-mono">Apna College Certified</span>
          </div>

          <div className="cert-cards-grid">
            {portfolioData.certifications.map((cert, i) => (
              <div key={i} className="cert-item-card">
                <div className="cert-item-top">
                  <span className="cert-provider font-mono">{cert.provider}</span>
                  <span className="cert-badge-pill font-mono">{cert.badge}</span>
                </div>
                <h4 className="cert-course-title">{cert.title}</h4>
                <div className="cert-topics font-mono">
                  <BookOpen size={13} className="text-secondary" />
                  <span>{cert.topics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
