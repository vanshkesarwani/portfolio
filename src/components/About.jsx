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
      description: "From architecting reusable React component systems to designing robust REST APIs in Express and index-optimized schemas in MongoDB.",
      tag: "Engineering"
    },
    {
      icon: <Brain className="bento-icon text-cyan" />,
      title: "AI & Machine Learning Focus",
      description: "Pursuing MCA in AI/ML (Amity Online, 9.00 CGPA) to blend modern full-stack web engineering with intelligent algorithmic capabilities.",
      tag: "Academic Excellence"
    },
    {
      icon: <Rocket className="bento-icon text-emerald" />,
      title: "Production & Team Experience",
      description: "Proven track record across 2 remote internships (CodeAlpha & Craft Lab), conducting code reviews, agile sprints, and Git workflows.",
      tag: "Industry Ready"
    },
    {
      icon: <MapPin className="bento-icon text-amber" />,
      title: "Immediate Joiner · Open to Relocate",
      description: "Ready to step in and contribute immediately to product goals in high-growth startups, scale-ups, or enterprise engineering teams.",
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
      </div>
    </section>
  );
}
