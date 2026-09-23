import React, { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Info, 
  X, 
  ShoppingBag, 
  Compass 
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section-wrapper" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Production-Grade <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Real-world full-stack web applications engineered with security, performance, and responsive UI in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={project.id} className="project-card glass-card">
              {/* Top Banner with gradient badge & icon */}
              <div className={`project-banner-header ${project.id === "footwear-ecommerce" ? "banner-purple" : "banner-cyan"}`}>
                <div className="project-banner-top">
                  <span className="project-badge font-mono">{project.badge}</span>
                  <span className="project-year font-mono">{project.year}</span>
                </div>
                <div className="project-banner-center">
                  {project.id === "footwear-ecommerce" ? (
                    <ShoppingBag size={48} className="project-banner-icon" />
                  ) : (
                    <Compass size={48} className="project-banner-icon" />
                  )}
                  <h3 className="project-banner-title">{project.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <p className="project-tagline">{project.tagline}</p>

                {/* Tech Stack Pills */}
                <div className="project-stack-wrap">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="tech-badge font-mono">{tech}</span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="project-highlights-list">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="project-highlight-item">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions Row */}
                <div className="project-actions-row">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSelectedProject(project)}
                    id={`project-details-btn-${project.id}`}
                  >
                    <Info size={15} />
                    <span>Specs & Architecture</span>
                  </button>

                  <div className="project-external-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link-btn"
                      title="GitHub Repository"
                      id={`project-github-${project.id}`}
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link-btn"
                      title="Live Demo"
                      id={`project-demo-${project.id}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Technical Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div 
              className="modal-content glass-card" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="pill pill-success">{selectedProject.badge}</span>
                  <h3 className="modal-title font-heading">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close Modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4 className="modal-subtitle">Project Overview</h4>
                  <p className="modal-text">{selectedProject.description}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-subtitle">Technologies Employed</h4>
                  <div className="project-stack-wrap">
                    {selectedProject.stack.map((t, idx) => (
                      <span key={idx} className="tech-badge font-mono">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-subtitle">Architecture & Engineering Accomplishments</h4>
                  <ul className="project-highlights-list">
                    {selectedProject.highlights.map((h, idx) => (
                      <li key={idx} className="project-highlight-item">
                        <CheckCircle2 size={16} className="text-emerald flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Specs
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
