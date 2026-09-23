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
import { CheckCircle, Info } from "lucide-react";
import "./App.css";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

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
        <Projects />
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