import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Code, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 text-xs font-mono mb-3 border border-blue-200/40 dark:border-blue-800/40">
          <Code className="w-3.5 h-3.5" />
          <span>Technical Innovations</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1d] dark:text-slate-100 tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-[#414755] dark:text-slate-300 mt-2 max-w-2xl text-base">
          Automation scripts, cancer clinical API integrations, and cloud telemetry solutions crafted to elevate healthcare software quality.
        </p>
      </div>

      {/* Projects List / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            id={`project-card-${proj.id}`}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-[#c1c6d7]/40 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7"
          >
            <div>
              {/* Category & Period Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 rounded-full text-xs font-mono font-semibold border border-blue-200/40 dark:border-blue-800/40">
                  {proj.category}
                </span>
                <span className="text-xs text-[#717786] dark:text-slate-400 font-mono">
                  {proj.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1b1b1d] dark:text-slate-100 mb-3 leading-snug">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#414755] dark:text-slate-300 leading-relaxed mb-5">
                {proj.description}
              </p>

              {/* Quantified Impact */}
              {proj.impact && (
                <div className="mb-5 p-3.5 rounded-xl bg-[#d8e2ff]/30 dark:bg-blue-950/40 border border-[#adc6ff]/40 dark:border-blue-800/40">
                  <div className="text-[11px] font-mono font-bold text-[#004493] dark:text-blue-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0058bc] dark:text-blue-400" />
                    <span>Impact</span>
                  </div>
                  <p className="text-xs text-[#004493] dark:text-blue-200 font-medium leading-normal">
                    {proj.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-[#c1c6d7]/20 dark:border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#f0edef] dark:bg-slate-800 text-[#1b1b1d] dark:text-slate-200 rounded-lg text-[11px] font-mono border border-[#c1c6d7]/40 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
