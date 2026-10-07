import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, Layers, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExpIndex, setSelectedExpIndex] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e2ff] text-[#004493] text-xs font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1d] tracking-tight">
          Work Experience
        </h2>
        <p className="text-[#414755] mt-2 max-w-2xl text-base">
          Proven track record in driving quality engineering, cancer care software releases, automated test pipelines, and cloud reliability at Navya Care.
        </p>
      </div>

      {/* Experience Cards & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector column */}
        <div className="lg:col-span-4 space-y-3">
          {WORK_EXPERIENCE.map((exp, index) => {
            const isSelected = selectedExpIndex === index;
            return (
              <div
                key={exp.role + exp.period}
                id={`exp-tab-${index}`}
                onClick={() => setSelectedExpIndex(index)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left ${
                  isSelected
                    ? 'bg-white border-[#0058bc] shadow-md ring-1 ring-[#0058bc]/20'
                    : 'bg-white/60 hover:bg-white border-[#c1c6d7]/40 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-bold text-[#1b1b1d] text-base">
                    {exp.role}
                  </span>
                  {exp.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#d8e2ff] text-[#004493]">
                      {exp.badge}
                    </span>
                  )}
                </div>

                <div className="text-sm font-semibold text-[#0058bc] mb-2">
                  {exp.company}
                </div>

                <div className="flex items-center gap-4 text-xs text-[#717786] font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#0058bc]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#0058bc]" />
                    {exp.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-8">
          {(() => {
            const exp = WORK_EXPERIENCE[selectedExpIndex];
            return (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c1c6d7]/40 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#c1c6d7]/30">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1b1b1d]">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-[#0058bc] mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="font-mono text-sm text-[#1b1b1d] font-semibold flex items-center sm:justify-end gap-1.5">
                      <Calendar className="w-4 h-4 text-[#0058bc]" />
                      {exp.period}
                    </div>
                    <div className="font-mono text-xs text-[#717786] mt-1 flex items-center sm:justify-end gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0058bc]" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {exp.notes && (
                  <div className="my-5 p-3.5 rounded-xl bg-[#d8e2ff]/50 border border-[#adc6ff]/50 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#0058bc] mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-[#004493] font-medium italic">
                      {exp.notes}
                    </p>
                  </div>
                )}

                {/* Achievements List */}
                <div className="my-6">
                  <h4 className="text-xs font-mono font-bold text-[#717786] uppercase tracking-wider mb-4">
                    Key Achievements & Responsibilities
                  </h4>
                  <ul className="space-y-3.5">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#414755] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0058bc] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used in this role */}
                <div className="pt-6 border-t border-[#c1c6d7]/30">
                  <h4 className="text-xs font-mono font-bold text-[#717786] uppercase tracking-wider mb-3">
                    Technologies & Tools Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#f0edef] text-[#1b1b1d] rounded-lg text-xs font-mono border border-[#c1c6d7]/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
