import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Copy,
  Check,
  Terminal as TerminalIcon,
  Sparkles,
  MapPin,
  Briefcase,
  FileText,
  Code2,
  ChevronRight,
  Database,
  Cpu,
  Rocket,
  ArrowUpRight
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero({ onCopy, onOpenResume }) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "cmd", text: "vansh --status" },
    { type: "out", text: "✓ Available immediately for MERN Stack & Full Stack Roles" },
    { type: "cmd", text: "vansh --live" },
    { type: "out", text: "🚀 Velura (E-Commerce) & Wanderlust (Rental) deployed live on Vercel" }
  ]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Rotating subtitle
  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % portfolioData.personal.subtitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.email);
    setCopiedEmail(true);
    if (onCopy) onCopy("Email copied to clipboard! 📬");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRunCommand = (cmd) => {
    let output = "";
    if (cmd === "live") {
      output = "🚀 Velura: https://e-commerce-five-xi-63.vercel.app/ | 🌍 Wanderlust: https://wanderlust-six-vert.vercel.app/";
    } else if (cmd === "skills") {
      output = "Frontend: React.js, Vite, Tailwind CSS, HTML5, CSS3, JS ES6+ | Backend: Node.js, Express.js, REST API, JWT, Passport.js, CRUD | DB: MongoDB, SQL";
    } else if (cmd === "projects") {
      output = "1. Velura (Luxury E-Commerce MERN) | 2. Wanderlust (Vacation Rental Platform + Mapbox)";
    } else if (cmd === "education") {
      output = "MCA AI/ML @ Amity Online (CGPA: 8.82) • BCA @ Amity Lucknow (CGPA: 8.61)";
    } else if (cmd === "clear") {
      setTerminalHistory([]);
      return;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { type: "cmd", text: `vansh --${cmd}` },
      { type: "out", text: output }
    ]);
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background ambient lighting */}
      <div className="hero-glow-orb hero-glow-1"></div>
      <div className="hero-glow-orb hero-glow-2"></div>
      <div className="bg-grid-pattern"></div>

      <div className="container hero-container">
        {/* Left Column: Personal Intro */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="pill-pulse-dot"></span>
            <span className="badge-text">
              {portfolioData.personal.status.availability}
            </span>
            <span className="badge-divider">•</span>
            <span className="badge-subtext">
              <MapPin size={13} className="inline-icon" /> {portfolioData.personal.status.relocation}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Hey, I'm <span className="gradient-text">{portfolioData.personal.shortName}</span>.
            <div className="hero-dynamic-subtitle-wrap">
              <span className="hero-static-prefix">Crafting </span>
              <span key={subtitleIndex} className="gradient-text-cyan dynamic-role-anim">
                {portfolioData.personal.subtitles[subtitleIndex]}
              </span>
            </div>
          </h1>

          {/* Pitch */}
          <p className="hero-description">
            BCA Graduate & MCA (AI/ML) student architecting production-grade MERN web applications.
            Hands-on experience through full-stack internship and shipped projects, focusing on clean MVC patterns, robust REST APIs, and fluid UI.
          </p>

          {/* Quick CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary hero-btn-main" id="hero-cta-projects">
              <Rocket size={17} />
              <span>Explore Project </span>
              <ArrowRight size={17} />
            </a>

            <div className="hero-btn-subgroup">
              <button
                type="button"
                className="btn btn-secondary hero-btn-sub"
                id="hero-resume-btn"
                onClick={onOpenResume}
              >
                <FileText size={16} />
                <span>Resume PDF</span>
              </button>

              <button
                type="button"
                className="btn btn-secondary hero-btn-sub"
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
              >
                {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Quick Contact & Relocation Meta */}
          <div className="hero-meta-row">
            <div className="meta-item">
              <MapPin size={14} className="meta-icon" />
              <span>{portfolioData.personal.status.location}</span>
            </div>
            <div className="meta-item">
              <Briefcase size={14} className="meta-icon" />
              <span>Target: MERN / Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal CLI */}
        <div className="hero-visual">
          <div className="terminal-card glass-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
              </div>
              <div className="terminal-title font-mono">
                <TerminalIcon size={14} />
                <span>vansh@portfolio-z:~</span>
              </div>
              <div className="terminal-badge font-mono">node v20.x</div>
            </div>

            {/* Terminal Interactive Quick Commands */}
            <div className="terminal-commands-bar">
              <span className="cmd-label">Quick run:</span>
              <button
                type="button"
                className="cmd-chip chip-highlight"
                onClick={() => handleRunCommand("live")}
                id="term-cmd-live"
                title="View live deployed URLs"
              >
                --live
              </button>
              <button
                type="button"
                className="cmd-chip"
                onClick={() => handleRunCommand("skills")}
                id="term-cmd-skills"
              >
                --skills
              </button>
              <button
                type="button"
                className="cmd-chip"
                onClick={() => handleRunCommand("projects")}
                id="term-cmd-projects"
              >
                --projects
              </button>
              <button
                type="button"
                className="cmd-chip"
                onClick={() => handleRunCommand("education")}
                id="term-cmd-edu"
              >
                --education
              </button>
              <button
                type="button"
                className="cmd-chip chip-clear"
                onClick={() => handleRunCommand("clear")}
                id="term-cmd-clear"
              >
                clear
              </button>
            </div>

            {/* Terminal Body Screen */}
            <div className="terminal-body font-mono">
              <div className="terminal-welcome">
                <p className="text-secondary">// Welcome to Vansh's interactive portfolio CLI</p>
                <p className="text-secondary">// Click chips above or explore sections below</p>
              </div>

              {terminalHistory.map((item, idx) => (
                <div key={idx} className={`term-line term-${item.type}`}>
                  {item.type === "cmd" && <span className="term-prompt">&gt; </span>}
                  <span className="term-text">{item.text}</span>
                </div>
              ))}

              <div className="term-line term-active">
                <span className="term-prompt">&gt; </span>
                <span className="term-cursor"></span>
              </div>
            </div>

            {/* Terminal Footer Info */}
            <div className="terminal-footer">
              <div className="term-stat">
                <Cpu size={13} />
                <span>React.js + Vite + Tailwind</span>
              </div>
              <div className="term-stat">
                <Database size={13} />
                <span>Node.js, Express & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Stats Counter Row */}
      <div className="container hero-stats-container">
        <div className="stats-grid">
          {portfolioData.personal.stats.map((stat, i) => (
            <div key={i} className="stat-card glass-card">
              <div className="stat-number gradient-text font-heading">{stat.value}</div>
              <div className="stat-label-wrap">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
