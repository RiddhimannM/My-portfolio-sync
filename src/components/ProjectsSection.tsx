import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Code, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] text-[#004493] text-xs font-mono mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>Technical Innovations</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1d] tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-[#414755] mt-2 max-w-2xl text-base">
          Automation scripts, cancer clinical API integrations, and cloud telemetry solutions crafted to elevate healthcare software quality.
        </p>
      </div>

      {/* Projects List / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            id={`project-card-${proj.id}`}
            className="bg-white rounded-2xl border border-[#c1c6d7]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7"
          >
            <div>
              {/* Category & Period Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-[#d8e2ff] text-[#004493] rounded-full text-xs font-mono font-semibold">
                  {proj.category}
                </span>
                <span className="text-xs text-[#717786] font-mono">
                  {proj.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1b1b1d] mb-3 leading-snug">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#414755] leading-relaxed mb-5">
                {proj.description}
              </p>

              {/* Quantified Impact */}
              {proj.impact && (
                <div className="mb-5 p-3.5 rounded-xl bg-[#d8e2ff]/30 border border-[#adc6ff]/40">
                  <div className="text-[11px] font-mono font-bold text-[#004493] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0058bc]" />
                    <span>Impact</span>
                  </div>
                  <p className="text-xs text-[#004493] font-medium leading-normal">
                    {proj.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-[#c1c6d7]/20">
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#f0edef] text-[#1b1b1d] rounded-lg text-[11px] font-mono border border-[#c1c6d7]/40"
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
