import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';
import { GraduationCap, Trophy, CheckCircle2, Award, FlaskConical, Sparkles, BookOpen } from 'lucide-react';

export const AchievementsEducationSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Main Section Header */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1b1d] dark:text-slate-100 tracking-tight">
          Achievements & Education
        </h2>
        <p className="text-[#414755] dark:text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          A record of academic foundation and professional milestones, reflecting a commitment to continuous learning and excellence in technical and scientific domains.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Left Column: Education */}
        <div>
          {/* Column Header */}
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-[#0058bc] dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-[#1b1b1d] dark:text-slate-100">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => {
              const isFirst = idx === 0;
              const borderClass = isFirst
                ? 'border-l-4 border-l-[#0058bc]'
                : 'border-l-4 border-l-[#006e28]';
              const cgpaColor = isFirst ? 'text-[#0058bc] dark:text-blue-400' : 'text-[#006e28] dark:text-emerald-400';

              return (
                <div
                  key={edu.degree}
                  id={`edu-card-${idx}`}
                  className={`bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-[#c1c6d7]/40 dark:border-slate-800 shadow-sm ${borderClass} transition-all duration-200 hover:shadow-md`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#1b1b1d] dark:text-slate-100">
                        {edu.degree}
                      </h4>
                      <div className="text-sm font-semibold text-[#414755] dark:text-slate-300 mt-0.5">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-mono text-[#717786] dark:text-slate-400 bg-[#f0edef] dark:bg-slate-800 px-2.5 py-1 rounded-full border border-[#c1c6d7]/30 dark:border-slate-700">
                        {edu.period}
                      </div>
                      <div className={`text-xs font-mono font-bold mt-1.5 ${cgpaColor}`}>
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  {/* Key Projects */}
                  <div className="mt-5 pt-4 border-t border-[#c1c6d7]/30 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-[#717786] dark:text-slate-400 tracking-wider uppercase mb-3">
                      Key Projects
                    </div>
                    <ul className="space-y-2.5">
                      {edu.keyProjects.map((proj, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414755] dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isFirst ? 'text-[#0058bc] dark:text-blue-400' : 'text-[#006e28] dark:text-emerald-400'}`} />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Achievements */}
        <div>
          {/* Column Header */}
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-[#0058bc] dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-[#1b1b1d] dark:text-slate-100">
              Achievements
            </h3>
          </div>

          <div className="space-y-6">
            {/* Achievement 1: Michigan State University */}
            <div
              id="achievement-msu"
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-[#c1c6d7]/40 dark:border-slate-800 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#e2dfff] dark:bg-indigo-950/70 text-[#3631b4] dark:text-indigo-300 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-[#1b1b1d] dark:text-slate-100 leading-snug">
                    Selected as a Research Volunteer at Michigan State University
                  </h4>
                  <p className="text-xs sm:text-sm text-[#717786] dark:text-slate-400 italic mt-1 leading-relaxed">
                    Worked as a remote research volunteer for 6 months under Dr. Laura Harris, director of training at MSU-D2L.
                  </p>
                  
                  <p className="text-xs sm:text-sm text-[#414755] dark:text-slate-300 mt-3.5 leading-relaxed">
                    I helped identify epigenetic regulations (via DNA Methylation profiling analysis) associated with Lung Cancer across various patient biopsy samples and cell lines through Gene Set Enrichment Analysis (GSEA) for enrichment, identification and validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement 2: GATE Biotech */}
            <div
              id="achievement-gate"
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-[#c1c6d7]/40 dark:border-slate-800 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#1b1b1d] dark:text-slate-100">
                      Qualified GATE Biotechnology (2021)
                    </h4>
                  </div>
                  
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono font-semibold border border-emerald-200 dark:border-emerald-800/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>GATE-BT 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
