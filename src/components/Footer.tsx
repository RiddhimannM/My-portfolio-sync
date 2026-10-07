import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  openContactModal: () => void;
  openResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openContactModal, openResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-10 mt-16 bg-[#ffffff] dark:bg-[#0f172a] border-t border-[#c1c6d7]/30 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-lg text-[#1b1b1d] dark:text-slate-100">
              {PERSONAL_INFO.initials}
            </span>
            <span className="text-xs text-[#717786] dark:text-slate-400 font-mono">
              | {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Social / Direct Links matching the design */}
          <div className="flex items-center gap-8 justify-center">
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#414755] dark:text-slate-300 hover:text-[#0058bc] dark:hover:text-blue-400 transition-colors font-mono text-sm font-medium flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <button
              id="footer-email-btn"
              onClick={openContactModal}
              className="text-[#414755] dark:text-slate-300 hover:text-[#0058bc] dark:hover:text-blue-400 transition-colors font-mono text-sm font-medium flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </button>

            <button
              id="footer-resume-btn"
              onClick={openResumeModal}
              className="text-[#414755] dark:text-slate-300 hover:text-[#0058bc] dark:hover:text-blue-400 transition-colors font-mono text-sm font-medium cursor-pointer"
            >
              <span>Resume</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#f0edef] dark:bg-slate-800 hover:bg-[#eae7ea] dark:hover:bg-slate-700 text-[#414755] dark:text-slate-300 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
