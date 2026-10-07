import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Menu, X, CheckCircle, Mail, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openResumeModal: () => void;
  openContactModal: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openResumeModal,
  openContactModal,
  darkMode,
  toggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements & Education' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcf8fb]/90 dark:bg-[#0f172a]/90 backdrop-blur-xl border-b border-[#c1c6d7]/30 dark:border-slate-800 shadow-xs'
          : 'bg-[#fcf8fb]/75 dark:bg-[#0f172a]/75 backdrop-blur-md border-b border-[#c1c6d7]/20 dark:border-slate-800/80'
      }`}
    >
      <div className="flex justify-between items-center h-16 px-4 md:px-6 max-w-6xl mx-auto">
        {/* Brand Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0058bc] dark:bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-[#004493] dark:group-hover:bg-blue-500 transition-colors">
            RM
          </div>
          <div>
            <div className="text-xl font-bold text-[#1b1b1d] dark:text-slate-100 tracking-tight group-hover:text-[#0058bc] dark:group-hover:text-blue-400 transition-colors font-mono">
              {PERSONAL_INFO.initials}
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono text-sm transition-all duration-200 cursor-pointer relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#0058bc] dark:text-blue-400 font-semibold'
                    : 'text-[#414755] dark:text-slate-300 hover:text-[#0058bc] dark:hover:text-blue-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0058bc] dark:bg-blue-400 rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
          
          <button
            id="nav-contact-link"
            onClick={openContactModal}
            className="font-mono text-sm text-[#414755] dark:text-slate-300 hover:text-[#0058bc] dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light Mode / Dark Mode Toggle button: In between Contact and All tests passing */}
          <button
            id="theme-toggle-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle light and dark mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-full text-[#414755] dark:text-slate-300 hover:text-[#0058bc] dark:hover:text-blue-400 hover:bg-[#eae7ea] dark:hover:bg-slate-800 transition-colors cursor-pointer border border-[#c1c6d7]/40 dark:border-slate-700 shadow-2xs"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-mono rounded-full border border-emerald-200 dark:border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Tests Passing</span>
          </div>

          <button
            id="nav-resume-button"
            onClick={openResumeModal}
            className="bg-[#0058bc] dark:bg-blue-600 text-white px-5 py-2 rounded-full font-mono text-sm hover:bg-[#004493] dark:hover:bg-blue-500 transition-all active:scale-95 duration-200 flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle light and dark mode"
            className="p-1.5 rounded-lg text-[#414755] dark:text-slate-300 hover:bg-[#eae7ea] dark:hover:bg-slate-800 transition-colors cursor-pointer border border-[#c1c6d7]/40 dark:border-slate-700"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            id="mobile-resume-btn"
            onClick={openResumeModal}
            className="bg-[#0058bc] text-white px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1b1b1d] dark:text-slate-200 hover:bg-[#eae7ea] dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden bg-[#fcf8fb] dark:bg-[#0f172a] border-b border-[#c1c6d7]/40 dark:border-slate-800 px-4 py-4 space-y-2 shadow-lg animate-fadeIn"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-mono text-sm transition-colors ${
                activeTab === item.id
                  ? 'bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 font-semibold'
                  : 'text-[#414755] dark:text-slate-300 hover:bg-[#f0edef] dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-2 border-t border-[#c1c6d7]/30 dark:border-slate-800 flex flex-col gap-2">
            <button
              id="mobile-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal();
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg font-mono text-sm text-[#414755] dark:text-slate-300 hover:bg-[#f0edef] dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#0058bc] dark:text-blue-400" />
              Contact Riddhimann
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
