import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import { CheckCircle, Info, Rocket, FileText, Send, Sparkles } from "lucide-react";
import "./App.css";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showFloatingHud, setShowFloatingHud] = useState(false);

  // Guarantee page loads at home / top on refresh
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Floating HUD visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingHud(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onCopy={showToast} 
          onOpenResume={() => setResumeOpen(true)} 
        />
        <About />
        <Skills />
        <Projects onCopy={showToast} />
        <Experience />
        <Education />
        <Contact 
          onCopy={showToast} 
          onOpenResume={() => setResumeOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      {/* Floating Action HUD on scroll */}
      {showFloatingHud && (
        <div className="floating-hud-dock glass-card">
          <a href="#projects" className="hud-pill-btn" title="Jump to Live Deployed Projects">
            <Rocket size={14} className="text-cyan animate-bounce" />
            <span>Live</span>
          </a>
          <button 
            type="button" 
            className="hud-pill-btn" 
            onClick={() => setResumeOpen(true)}
            title="Open Verified Resume PDF"
          >
            <FileText size={14} className="text-indigo" />
            <span>Resume</span>
          </button>
          <a href="#contact" className="hud-pill-btn btn-highlight" title="Contact Vansh">
            <Send size={14} />
            <span>Contact</span>
          </a>
        </div>
      )}

      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle size={18} className="text-emerald" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;