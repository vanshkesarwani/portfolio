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
  Compass,
  Monitor,
  Tablet,
  Smartphone,
  RefreshCw,
  Copy,
  Check,
  Lock,
  Eye,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Projects({ onCopy }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [simulatorProject, setSimulatorProject] = useState(null);
  const [deviceMode, setDeviceMode] = useState("desktop"); // desktop, tablet, mobile
  const [iframeKey, setIframeKey] = useState(0);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleCopyProjectUrl = (url, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    if (onCopy) onCopy("Deployed live link copied! 🚀");
    setTimeout(() => setCopiedUrl(false), 2200);
  };

  const handleOpenSimulator = (project) => {
    setSimulatorProject(project);
    setDeviceMode("desktop");
    setIframeKey((prev) => prev + 1);
  };

  const filteredProjects = filter === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.id.includes(filter));

  return (
    <section className="section-wrapper" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Rocket size={14} className="text-cyan animate-pulse" />
            <span>Live Deployed Showcase</span>
          </div>
          <h2 className="section-title">
            Production-Grade <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Fully deployed full-stack web applications with live links, production database integration, and interactive in-app simulators.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="project-filter-row">
          <div className="project-filter-group">
            <button
              type="button"
              className={`project-filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Deployed ({portfolioData.projects.length})
            </button>
            <button
              type="button"
              className={`project-filter-btn ${filter === "velura" ? "active" : ""}`}
              onClick={() => setFilter("velura")}
            >
              🛒 E-Commerce
            </button>
            <button
              type="button"
              className={`project-filter-btn ${filter === "wanderlust" ? "active" : ""}`}
              onClick={() => setFilter("wanderlust")}
            >
              🌍 Vacation Rental
            </button>
          </div>

          <div className="live-status-pill font-mono">
            <span className="live-beacon"></span>
            <span> Vercel Production </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card group-card">
              {/* Top Banner with gradient badge, status & icon */}
              <div className={`project-banner-header ${project.id === "velura-ecommerce" ? "banner-purple" : "banner-cyan"}`}>
                <div className="project-banner-top">
                  <div className="banner-left-badges">
                    <span className="project-badge font-mono">{project.badge}</span>
                    <span className="live-deployed-badge font-mono">
                      <span className="live-dot-pulse"></span>
                      <span>Live </span>
                    </span>
                  </div>
                  <span className="project-year font-mono">{project.year}</span>
                </div>

                <div className="project-banner-center">
                  <div className="banner-icon-bubble">
                    {project.id === "velura-ecommerce" ? (
                      <ShoppingBag size={44} className="project-banner-icon" />
                    ) : (
                      <Compass size={44} className="project-banner-icon" />
                    )}
                  </div>
                  <h3 className="project-banner-title">{project.title}</h3>
                </div>

                {/* Direct Deployed URL Bar on Card */}
                <div
                  className="card-url-chip font-mono"
                  onClick={(e) => handleCopyProjectUrl(project.deployedUrl, e)}
                  title="Click to copy deployed URL"
                >
                  <Lock size={12} className="text-emerald" />
                  <span className="card-url-text">{project.deployedUrl.replace("https://", "")}</span>
                  <button type="button" className="copy-url-icon" aria-label="Copy live link">
                    <Copy size={12} />
                  </button>
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

                {/* Key Architecture Highlights */}
                {project.features && (
                  <div className="project-features-grid font-mono">
                    {project.features.map((feat, i) => (
                      <div key={i} className="feat-chip">
                        <Zap size={11} className="text-cyan flex-shrink-0" />
                        <span className="feat-label"><strong>{feat.label}:</strong> {feat.desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="project-highlights-list">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="project-highlight-item">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary Dual CTA Bar */}
                <div className="project-cta-primary-bar">
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-launch-live"
                    id={`project-live-btn-${project.id}`}
                  >
                    <Rocket size={16} />
                    <span>Live </span>
                    <ArrowUpRight size={15} />
                  </a>

                  <button
                    type="button"
                    className="btn btn-secondary btn-simulator-trigger"
                    onClick={() => handleOpenSimulator(project)}
                    id={`project-simulator-btn-${project.id}`}
                    title="Test app in interactive multi-device simulator"
                  >
                    <Eye size={16} />
                    <span> Preview</span>
                  </button>
                </div>

                {/* Secondary Actions Row */}
                <div className="project-actions-row">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSelectedProject(project)}
                    id={`project-details-btn-${project.id}`}
                  >
                    <Info size={14} />
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
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link-btn link-btn-highlight"
                      title="Direct Live Link"
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

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE MULTI-DEVICE IN-APP LIVE PREVIEW SIMULATOR MODAL */}
        {/* ------------------------------------------------------------- */}
        {simulatorProject && (
          <div className="simulator-modal-overlay" onClick={() => setSimulatorProject(null)}>
            <div
              className="simulator-modal-container glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Simulator Chrome Bar */}
              <div className="simulator-chrome-header">
                {/* Window Dots */}
                <div className="simulator-dots">
                  <button
                    type="button"
                    className="sim-dot dot-close"
                    onClick={() => setSimulatorProject(null)}
                    aria-label="Close Preview"
                  ></button>
                  <span className="sim-dot dot-min"></span>
                  <span className="sim-dot dot-max"></span>
                </div>

                {/* Device Frame Switcher */}
                <div className="simulator-device-toggles">
                  <button
                    type="button"
                    className={`device-btn ${deviceMode === "desktop" ? "active" : ""}`}
                    onClick={() => setDeviceMode("desktop")}
                    title="Desktop View (100%)"
                  >
                    <Monitor size={15} />
                    <span className="hidden-mobile">Desktop</span>
                  </button>
                  <button
                    type="button"
                    className={`device-btn ${deviceMode === "tablet" ? "active" : ""}`}
                    onClick={() => setDeviceMode("tablet")}
                    title="Tablet View (768px)"
                  >
                    <Tablet size={15} />
                    <span className="hidden-mobile">Tablet</span>
                  </button>
                  <button
                    type="button"
                    className={`device-btn ${deviceMode === "mobile" ? "active" : ""}`}
                    onClick={() => setDeviceMode("mobile")}
                    title="Mobile View (390px)"
                  >
                    <Smartphone size={15} />
                    <span className="hidden-mobile">Mobile</span>
                  </button>
                </div>

                {/* Direct Action Controls */}
                <div className="simulator-top-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-xs"
                    onClick={() => setIframeKey(k => k + 1)}
                    title="Reload Live App"
                  >
                    <RefreshCw size={13} />
                    <span>Reload</span>
                  </button>
                  <a
                    href={simulatorProject.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xs"
                    title="Open Live Website in New Tab"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink size={13} />
                  </a>
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setSimulatorProject(null)}
                    aria-label="Close Simulator"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Browser Address Bar */}
              <div className="simulator-address-bar font-mono">
                <div className="address-bar-inner">
                  <Lock size={13} className="text-emerald flex-shrink-0" />
                  <span className="address-url">{simulatorProject.deployedUrl}</span>
                  <button
                    type="button"
                    className="address-copy-btn"
                    onClick={(e) => handleCopyProjectUrl(simulatorProject.deployedUrl, e)}
                    title="Copy Deployed Link"
                  >
                    {copiedUrl ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
                  </button>
                </div>
                <div className="address-status-tag">
                  <span className="live-dot-pulse"></span>
                  <span>Interactive Live Frame</span>
                </div>
              </div>

              {/* Simulator Screen Area */}
              <div className="simulator-screen-viewport">
                <div className={`simulator-device-frame frame-${deviceMode}`}>
                  <iframe
                    key={iframeKey}
                    src={simulatorProject.deployedUrl}
                    title={`${simulatorProject.title} Live App`}
                    className="simulator-iframe"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Simulator Footer Info */}
              <div className="simulator-footer-bar font-mono">
                <div className="sim-footer-left">
                  <span>Stack: {simulatorProject.stack.slice(0, 5).join(" • ")}</span>
                </div>
                <div className="sim-footer-right">
                  <span>💡 Note: If iframe is blocked by your browser privacy settings, </span>
                  <a
                    href={simulatorProject.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan underline"
                  >
                    click here to open live in a new window ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* Project Technical Modal */}
        {/* ------------------------------------------------------------- */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div
              className="modal-content glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <div className="modal-top-badges">
                    <span className="pill pill-success">{selectedProject.badge}</span>
                    <a
                      href={selectedProject.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill pill-cyan font-mono"
                      style={{ textDecoration: "none" }}
                    >
                      <Rocket size={12} /> {selectedProject.deployedUrl.replace("https://", "")}
                    </a>
                  </div>
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
                  href={selectedProject.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Rocket size={16} />
                  <span>Launch Live Site</span>
                </a>
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
                  className="btn btn-secondary"
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
