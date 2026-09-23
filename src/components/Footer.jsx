import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Terminal, Shield, Wifi, WifiOff } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }) + " IST"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-symbol">&lt;</span>
              <span className="logo-text gradient-text">VK</span>
              <span className="logo-symbol">/&gt;</span>
            </a>
            <p className="footer-bio">
              {portfolioData.personal.title} — Immediate joiner ready to craft high-impact web products.
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-col">
              <h5 className="footer-col-title font-heading">Navigation</h5>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title font-heading">Connect</h5>
              <ul className="footer-links">
                <li><a href={`mailto:${portfolioData.personal.contact.email}`}>Email Direct</a></li>
                <li><a href={`tel:${portfolioData.personal.contact.phoneRaw}`}>Call Direct</a></li>
                <li><a href={portfolioData.personal.contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href={portfolioData.personal.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="footer-bottom-row">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
            <span className="footer-divider">•</span>
            <span className="footer-time font-mono">⏱ {currentTime}</span>
          </div>

          {/* Availability Status indicator */}
          <div className="footer-system-status font-mono">
            <span className="status-live" title="Available for immediate hiring">
              <span className="pill-pulse-dot"></span>
              <span>Available for Hire</span>
            </span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            className="back-to-top-btn"
            id="back-to-top-btn"
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
