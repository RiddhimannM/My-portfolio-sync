import React from 'react';
import { PERSONAL_INFO, CORE_SKILLS } from '../data/portfolioData';
import { Download, ShieldAlert, HeartPulse, CheckCircle2, ChevronRight, Sparkles, Terminal, Activity } from 'lucide-react';

interface HeroSectionProps {
  openResumeModal: () => void;
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  openResumeModal,
  scrollToSection,
}) => {
  return (
    <section
      id="overview"
      className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto w-full flex flex-col justify-center min-h-[85vh]"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Subtitle / Role Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 text-xs font-mono mb-4 border border-[#adc6ff]/40 dark:border-blue-800/40 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0058bc] dark:bg-blue-400 animate-ping" />
            <span>Tester in action</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-bold text-[#1b1b1d] dark:text-slate-100 tracking-tight mb-4">
            {PERSONAL_INFO.name}
            <span className="block text-[#0058bc] dark:text-blue-400 mt-2 font-semibold text-2xl sm:text-3xl md:text-4xl">
              {PERSONAL_INFO.role}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#414755] dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {PERSONAL_INFO.bioSummary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
            <button
              id="hero-explore-work-btn"
              onClick={() => scrollToSection('projects')}
              className="bg-[#0058bc] dark:bg-blue-600 text-white px-7 py-3 rounded-full font-mono text-sm hover:bg-[#004493] dark:hover:bg-blue-500 transition-all hover:shadow-md shadow-[#0058bc]/20 active:scale-98 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              id="hero-download-resume-btn"
              onClick={openResumeModal}
              className="bg-[#f0edef] dark:bg-slate-800 border border-[#c1c6d7]/60 dark:border-slate-700 text-[#0058bc] dark:text-blue-300 px-7 py-3 rounded-full font-mono text-sm hover:bg-[#eae7ea] dark:hover:bg-slate-700 transition-all active:scale-98 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <Download className="w-4 h-4 text-[#0058bc] dark:text-blue-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Quick Stats / Tech Stack Preview */}
          <div className="mt-10 pt-6 border-t border-[#c1c6d7]/30 dark:border-slate-800 flex flex-wrap gap-2.5 justify-center lg:justify-start items-center">
            <span className="text-xs text-[#717786] dark:text-slate-400 font-mono mr-1">Focus:</span>
            {['Automation Testing', 'Python', 'AWS', 'Selenium', 'API Testing'].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 bg-[#f6f3f5] dark:bg-slate-800/80 hover:bg-[#eae7ea] dark:hover:bg-slate-700 rounded-full font-mono text-xs text-[#414755] dark:text-slate-300 border border-[#c1c6d7]/30 dark:border-slate-700 transition-colors shadow-2xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Image Frame & Visual Badge */}
        <div className="flex-shrink-0 relative">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[#0058bc]/10 dark:bg-blue-500/15 rounded-full blur-3xl transform scale-110 -z-10" />

          {/* Circular Frame */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative z-10 glass-panel p-2">
            <img
              id="hero-profile-avatar"
              alt="Riddhimann Mukherjee Headshot"
              className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              src={PERSONAL_INFO.headshotUrl}
            />
          </div>

          {/* Floating Healthcare Technology Badge */}
          <div
            id="hero-industry-badge"
            className="absolute bottom-3 -left-3 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-[#c1c6d7]/40 dark:border-slate-700 px-4 py-3 rounded-2xl shadow-lg z-20 flex items-center gap-3 animate-bounce-slight"
          >
            <div className="bg-[#0058bc]/10 dark:bg-blue-950/60 p-2.5 rounded-xl text-[#0058bc] dark:text-blue-400">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#717786] dark:text-slate-400">Industry Focus</div>
              <div className="font-mono text-sm font-bold text-[#1b1b1d] dark:text-slate-100">
                {PERSONAL_INFO.industryFocus}
              </div>
            </div>
          </div>

          {/* Floating Test Status Badge */}
          <div className="absolute top-4 -right-2 sm:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-[#c1c6d7]/40 dark:border-slate-700 px-3.5 py-2 rounded-xl shadow-md z-20 hidden sm:flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 font-semibold">UAT Stable</span>
          </div>
        </div>
      </div>
    </section>
  );
};
