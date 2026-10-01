import React, { useState } from "react";
import { 
  Code2, 
  Terminal, 
  Database, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  CheckCircle,
  GitBranch,
  Globe
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? portfolioData.skills.list 
    : portfolioData.skills.list.filter((s) => s.category === activeCategory);

  return (
    <section className="section-wrapper" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-description">
            The modern toolkit I use to craft performant, scalable, and responsive web systems.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="skills-filter-container">
          {portfolioData.skills.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              id={`skill-filter-${cat.id}`}
              className={`skills-filter-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card glass-card ${skill.highlighted ? "skill-highlight" : ""}`}
            >
              <div className="skill-card-inner">
                <div className="skill-header">
                  <div className="skill-icon-pill">
                    <Code2 size={18} className="skill-icon-svg" />
                  </div>
                  <span className="skill-level-badge font-mono">{skill.level}</span>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill" 
                    style={{ 
                      width: skill.level === "Advanced" ? "92%" : "78%" 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concepts & Architectural Strengths Box */}
        <div className="concepts-matrix glass-card">
          <div className="concepts-header">
            <Layers size={18} className="text-cyan" />
            <span className="font-heading">Core Engineering Competencies</span>
          </div>
          <div className="concepts-pills-row">
            {[
              "MERN Stack Integration",
              "RESTful MVC Architecture",
              "JWT & Passport.js Authentication",
              "CRUD Operations & REST APIs",
              "Role-Based Access Control (RBAC)",
              "Cloudinary CDN & Mapbox Geocoding",
              "Schema Optimization with Mongoose",
              "Responsive Web Design & Tailwind CSS",
              "Git/GitHub Team Workflows",
              "API Testing & Debugging"
            ].map((concept, i) => (
              <div key={i} className="concept-pill font-mono">
                <CheckCircle size={13} className="text-emerald" />
                <span>{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
