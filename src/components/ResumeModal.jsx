import React from "react";
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award,
  Sparkles
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div 
        className="resume-modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="resume-controls-bar">
          <div className="resume-controls-left">
            <span className="pill pill-success font-mono">Curriculum Vitae</span>
            <span className="resume-doc-title font-heading">{portfolioData.personal.name} — Resume</span>
          </div>

          <div className="resume-controls-right">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Resume"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="resume-paper" id="resume-printable-area">
          {/* Header */}
          <div className="resume-header-block">
            <h1 className="resume-name font-heading">{portfolioData.personal.name}</h1>
            <p className="resume-role-line font-mono">
              MERN Stack Developer · Full Stack Web Developer · React.js · Node.js · MongoDB
            </p>
            <div className="resume-contacts-row font-mono">
              <span><Phone size={12} className="inline-icon" /> {portfolioData.personal.contact.phone}</span>
              <span>•</span>
              <span><Mail size={12} className="inline-icon" /> {portfolioData.personal.contact.email}</span>
              <span>•</span>
              <a href={portfolioData.personal.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                github.com/vanshkesarwani
              </a>
              <span>•</span>
              <a href={portfolioData.personal.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                linkedin.com/in/vansh-kumar-kesarwani
              </a>
              <span>•</span>
              <span><MapPin size={12} className="inline-icon" /> {portfolioData.personal.status.location}</span>
            </div>
          </div>

          <div className="resume-divider"></div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Professional Summary</h2>
            <p className="resume-summary-text">
              {portfolioData.personal.bio} Immediate joiner seeking a <strong>MERN Stack Internship</strong> or <strong>Entry-Level Full Stack Developer</strong> role.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Technical Skills</h2>
            <div className="resume-skills-table font-mono">
              <div className="skills-row">
                <span className="skills-category">Frontend:</span>
                <span className="skills-values">React.js, HTML5, CSS3, JavaScript ES6+</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Backend:</span>
                <span className="skills-values">Node.js, Express.js, REST API, JWT Auth</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Database:</span>
                <span className="skills-values">MongoDB, SQL</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Tools:</span>
                <span className="skills-values">Git, GitHub, Postman, VS Code</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Languages:</span>
                <span className="skills-values">JavaScript, Java</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Concepts:</span>
                <span className="skills-values">MVC, CRUD, SDLC, Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Internship Experience</h2>
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="resume-item">
                <div className="resume-item-top font-mono">
                  <span className="resume-item-title">
                    <strong>{exp.role}</strong> · {exp.company} · {exp.location}
                  </span>
                  <span className="resume-item-date">{exp.period}</span>
                </div>
                <ul className="resume-item-bullets">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Projects</h2>
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="resume-item">
                <div className="resume-item-top font-mono">
                  <span className="resume-item-title">
                    <strong>{proj.title}</strong>
                  </span>
                  <span className="resume-item-date">{proj.year}</span>
                </div>
                <div className="resume-item-stack font-mono">
                  Stack: {proj.stack.join(" · ")}
                </div>
                <ul className="resume-item-bullets">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Education</h2>
            <div className="resume-edu-columns font-mono">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="resume-edu-card">
                  <strong>{edu.degree}</strong>
                  <div>{edu.institution}, {edu.location}</div>
                  <div className="text-secondary">{edu.period} | <strong>{edu.score}</strong></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Certifications & Courses</h2>
            <ul className="resume-item-bullets font-mono">
              {portfolioData.certifications.map((c, idx) => (
                <li key={idx}>
                  <strong>{c.title}</strong> – {c.provider} ({c.badge})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
