import React from "react";
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink,
  Mail, 
  Phone, 
  MapPin,
  FileCheck
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
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
            <a
              href={portfolioData.personal.contact.resumePdf || "/resume.pdf"}
              download="Vansh_Kumar_Kesarwani_Resume.pdf"
              className="btn btn-primary btn-sm"
              title="Download original verified PDF file"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <a
              href={portfolioData.personal.contact.resumePdf || "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open raw PDF file in new browser tab"
            >
              <ExternalLink size={14} />
              <span className="hidden-mobile">Open PDF Tab</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden-mobile">Print</span>
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
              MERN Stack Developer | React.js | Node.js | Express.js | MongoDB
            </p>
            <div className="resume-contacts-row font-mono">
              <span><Phone size={12} className="inline-icon" /> {portfolioData.personal.contact.phone}</span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                <Mail size={12} className="inline-icon" /> {portfolioData.personal.contact.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                LinkedIn
              </a>
              <span>•</span>
              <a href={portfolioData.personal.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                GitHub
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
              {portfolioData.personal.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Technical Skills</h2>
            <div className="resume-skills-table font-mono">
              <div className="skills-row">
                <span className="skills-category">Frontend:</span>
                <span className="skills-values">React.js, Vite, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Responsive Web Design</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Backend:</span>
                <span className="skills-values">Node.js, Express.js, REST API, JWT Authentication, Passport.js, CRUD Operations</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Database:</span>
                <span className="skills-values">MongoDB, Mongoose, SQL</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Tools & Platforms:</span>
                <span className="skills-values">Git, GitHub, Postman, VS Code, Cloudinary, Mapbox, Vercel</span>
              </div>
              <div className="skills-row">
                <span className="skills-category">Programming Languages:</span>
                <span className="skills-values">JavaScript, Java</span>
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
                    <strong>{exp.role}</strong> — {exp.company}, {exp.location}
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

          {/* Projects with Deployed Links */}
          <div className="resume-section">
            <h2 className="resume-section-title font-heading">Projects</h2>
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="resume-item">
                <div className="resume-item-top font-mono">
                  <span className="resume-item-title">
                    <strong>{proj.title}</strong>
                    {proj.deployedUrl && (
                      <span className="resume-live-link">
                        {" "}[<a href={proj.deployedUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 600 }}>Live Deployed Link</a>]
                      </span>
                    )}
                  </span>
                  <span className="resume-item-date">{proj.year}</span>
                </div>
                <div className="resume-item-stack font-mono">
                  Technologies: {proj.stack.join(", ")}
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
                  <strong>{c.title}</strong> – {c.provider}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
