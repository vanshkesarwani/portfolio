import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Layers 
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            Hands-on professional engineering experience working in onsite, agile development environments building production full-stack systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Glowing Node on the line */}
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>

              {/* Card */}
              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div>
                    <div className="company-badge-wrap">
                      <Building2 size={16} className="text-indigo" />
                      <span className="company-name font-heading">{exp.company}</span>
                      <span className="internship-tag font-mono">{exp.type}</span>
                    </div>
                    <h3 className="timeline-role-title">{exp.role}</h3>
                  </div>

                  <div className="timeline-meta-wrap">
                    <span className="timeline-date font-mono">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="timeline-location font-mono">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-body">
                  <ul className="timeline-bullets">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="timeline-bullet-item">
                        <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-skills-tags">
                    {exp.skillsUsed.map((skill, i) => (
                      <span key={i} className="timeline-skill-pill font-mono">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
