import React from "react";
import { 
  Code, 
  Brain, 
  Rocket, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Layers 
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Layers className="bento-icon text-indigo" />,
      title: "Full-Stack MERN Craftsmanship",
      description: "From architecting responsive React & Tailwind components to designing robust REST APIs in Express and schemas in MongoDB.",
      tag: "Engineering"
    },
    {
      icon: <Brain className="bento-icon text-cyan" />,
      title: "AI & Machine Learning Focus",
      description: "Pursuing MCA in AI/ML (Amity University Online, 8.82 CGPA) to blend modern full-stack web engineering with intelligent algorithmic capabilities.",
      tag: "Academic Excellence"
    },
    {
      icon: <Rocket className="bento-icon text-emerald" />,
      title: "Full Stack Internship Experience",
      description: "Hands-on experience at Vastora Tech Pvt. Ltd. (Noida, Onsite) developing full-stack web apps, implementing REST APIs, CRUD operations, and Git workflows.",
      tag: "Industry Experience"
    },
    {
      icon: <MapPin className="bento-icon text-amber" />,
      title: "Immediate Joiner · Open to Relocate",
      description: "Available immediately to contribute effectively in MERN Stack and Full Stack engineering roles across India.",
      tag: "Availability"
    }
  ];

  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Behind The Code</span>
          </div>
          <h2 className="section-title">
            Passionate about building scalable web apps with <span className="gradient-text">exceptional polish</span>.
          </h2>
          <p className="section-description">
            A developer who bridges the gap between clean frontend interactions and rock-solid backend services.
          </p>
        </div>

        {/* Narrative & Bio Box */}
        <div className="about-bio-box glass-card">
          <div className="bio-lead-tag font-mono">
            <span>&lt;Summary /&gt;</span>
          </div>
          <p className="bio-text">
            {portfolioData.personal.bio}
          </p>
          <div className="bio-meta-pills">
            <span className="pill pill-success">
              <CheckCircle2 size={13} /> Immediate Joiner
            </span>
            <span className="pill">
              <MapPin size={13} /> {portfolioData.personal.status.location}
            </span>
            <span className="pill">
              <GraduationCap size={13} /> MCA (AI/ML) & BCA
            </span>
          </div>
        </div>

        {/* Bento Grid Highlights */}
        <div className="about-bento-grid">
          {highlights.map((item, index) => (
            <div key={index} className="bento-card glass-card">
              <div className="bento-top">
                <div className="bento-icon-wrapper">
                  {item.icon}
                </div>
                <span className="bento-tag font-mono">{item.tag}</span>
              </div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive: Engineering Pillars & Quick Facts */}
        <div className="about-details-wrap">
          {/* Engineering Pillars */}
          <div className="about-pillars-card glass-card">
            <div className="about-subcard-header">
              <Code size={18} className="text-indigo" />
              <h3 className="about-subcard-title">Core Engineering Pillars</h3>
            </div>
            <div className="pillars-list">
              {portfolioData.personal.aboutDetails.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-title">
                    <CheckCircle2 size={15} className="text-emerald flex-shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts & Profile Snapshot */}
          <div className="about-facts-card glass-card">
            <div className="about-subcard-header">
              <Sparkles size={18} className="text-cyan" />
              <h3 className="about-subcard-title">Profile Snapshot</h3>
            </div>
            <div className="quick-facts-grid">
              {portfolioData.personal.aboutDetails.quickFacts.map((fact, idx) => (
                <div key={idx} className="fact-row">
                  <span className="fact-label font-mono">{fact.label}</span>
                  <span className="fact-val">{fact.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
