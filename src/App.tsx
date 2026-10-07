import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsEducationSection } from './components/AchievementsEducationSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Toggle dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Active section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'experience', 'projects', 'achievements'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8fb] dark:bg-[#0b0f19] text-[#1b1b1d] dark:text-[#f1f5f9] selection:bg-[#0058bc]/20 selection:text-[#0058bc] transition-colors duration-200">
      {/* Fixed Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openResumeModal={() => setResumeModalOpen(true)}
        openContactModal={() => setContactModalOpen(true)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero & Bio */}
        <HeroSection
          openResumeModal={() => setResumeModalOpen(true)}
          scrollToSection={scrollToSection}
        />

        {/* Section 2: Work Experience */}
        <div className="border-t border-[#c1c6d7]/20 dark:border-slate-800">
          <ExperienceSection />
        </div>

        {/* Section 3: Featured Projects */}
        <div className="border-t border-[#c1c6d7]/20 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30">
          <ProjectsSection />
        </div>

        {/* Section 4: Achievements & Education */}
        <div className="border-t border-[#c1c6d7]/20 dark:border-slate-800">
          <AchievementsEducationSection />
        </div>
      </main>

      {/* Footer */}
      <Footer
        openContactModal={() => setContactModalOpen(true)}
        openResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Full Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
