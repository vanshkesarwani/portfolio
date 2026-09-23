import React, { useState, useEffect } from "react";
import { Sparkles, FileText, Menu, X, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "../data/portfolioData";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "projects", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerSparkleConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.85 },
      colors: ["#6366f1", "#06b6d4", "#a855f7", "#10b981"]
    });
  };

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo" id="nav-brand-logo">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text gradient-text">VK</span>
          <span className="logo-symbol">/&gt;</span>
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`nav-link-${link.id}`}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
              {activeSection === link.id && <span className="active-indicator" />}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          <div className="status-chip hidden-mobile" title="Available immediately">
            <span className="pill-pulse-dot"></span>
            <span className="status-chip-text">{portfolioData.personal.status.availability}</span>
          </div>

          <button
            type="button"
            className="sparkle-btn"
            id="nav-sparkle-btn"
            onClick={triggerSparkleConfetti}
            title="Drop some sparkles!"
            aria-label="Celebrate"
          >
            <Sparkles size={16} />
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm nav-resume-btn hidden-mobile"
            id="nav-resume-btn"
            onClick={onOpenResume}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a href="#contact" className="btn btn-primary btn-sm hidden-mobile" id="nav-hire-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" id="mobile-drawer">
          <div className="mobile-status-pill">
            <span className="pill-pulse-dot"></span>
            <span>{portfolioData.personal.status.availability} · {portfolioData.personal.status.relocation}</span>
          </div>
          <nav className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobile-drawer-actions">
            <button
              type="button"
              className="btn btn-secondary btn-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              className="btn btn-primary btn-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
