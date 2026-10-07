import React, { useRef } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION, PROJECTS, ACHIEVEMENTS, LANGUAGES, INTERESTS } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, CheckCircle2, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.error('Print trigger error:', e);
    }
  };

  const handleDownloadHtml = () => {
    if (!resumeRef.current) return;
    const content = resumeRef.current.innerHTML;
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Riddhimann_Mukherjee_Resume</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body class="bg-white p-8 max-w-4xl mx-auto text-[#1b1b1d]">
  ${content}
</body>
</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Riddhimann_Mukherjee_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative border border-[#c1c6d7]/50 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header (Sticky) */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#c1c6d7]/30 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#1b1b1d]">
            <FileText className="w-4 h-4 text-[#0058bc]" />
            <span>Resume Document Preview</span>
            <span className="text-xs text-[#717786] font-normal hidden sm:inline">
              (Riddhimann Mukherjee)
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-4 py-2 bg-[#0058bc] text-white rounded-full font-mono text-xs font-semibold hover:bg-[#004493] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Print document or Save as PDF in browser print dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-html-download-btn"
              onClick={handleDownloadHtml}
              className="px-3.5 py-2 bg-[#f0edef] text-[#1b1b1d] rounded-full font-mono text-xs font-semibold hover:bg-[#eae7ea] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs border border-[#c1c6d7]/50 hidden sm:flex"
              title="Download standalone HTML document"
            >
              <Download className="w-3.5 h-3.5 text-[#0058bc]" />
              <span>Download File</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#414755] hover:bg-[#f0edef] rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div ref={resumeRef} className="p-6 sm:p-10 md:p-12 text-[#1b1b1d] font-sans bg-white" id="printable-resume">
          {/* Header Banner */}
          <div className="bg-[#243547] text-white p-6 sm:p-8 rounded-t-xl relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-base sm:text-lg text-cyan-300 font-medium mt-1">
                  {PERSONAL_INFO.role}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed max-w-2xl">
                  {PERSONAL_INFO.extendedBio}
                </p>
              </div>

              {/* Headshot */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-cyan-400/80 flex-shrink-0 shadow-lg">
                <img
                  src={PERSONAL_INFO.headshotUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Contact ribbon */}
            <div className="mt-6 pt-4 border-t border-slate-600 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-200 font-mono">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-300" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-300" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-300 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/rm-0110</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* 2-Column Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            {/* Left Column */}
            <div className="md:col-span-7 space-y-8">
              {/* Work Experience */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-4 font-mono">
                  WORK EXPERIENCE
                </h2>

                <div className="space-y-6">
                  {/* Senior QA Engineer */}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-base text-[#1b1b1d]">
                        Senior QA Engineer
                      </h3>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm font-semibold text-[#1b1b1d]">
                        Navya Care INC.
                      </div>
                      <div className="text-xs text-[#1f6b80] italic">
                        Bangalore, India
                      </div>
                    </div>
                    <div className="text-xs text-[#1f6b80] italic font-mono mt-0.5">
                      02/2024 - Present
                    </div>
                    <div className="text-xs text-[#717786] italic mt-0.5">
                      promoted to this role in the 2024 Appraisal cycle
                    </div>
                    <div className="text-xs text-[#1f6b80] font-semibold mt-2">
                      Achievements/Tasks
                    </div>
                    <ul className="list-disc list-inside text-xs text-[#414755] mt-1 space-y-1.5 pl-1">
                      <li>Understanding and working with multiple AWS Lambda functions with their latency and error monitoring.</li>
                      <li>data analytics with small scale scripts running on Google Colab with Pandas, Numpy and Requests libraries.</li>
                      <li>Automated tasks using Github Actions and Postman Schedule.</li>
                      <li>Fundamental hands-on experience on Playwright and handling Automation repositories with Claude.</li>
                    </ul>
                  </div>

                  {/* SDET */}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-base text-[#1b1b1d]">
                        SDET
                      </h3>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm font-semibold text-[#1b1b1d]">
                        Navya Care INC.
                      </div>
                      <div className="text-xs text-[#1f6b80] italic">
                        Bangalore, India
                      </div>
                    </div>
                    <div className="text-xs text-[#1f6b80] italic font-mono mt-0.5">
                      02/2023 - 01/2024
                    </div>
                    <div className="text-xs text-[#1f6b80] font-semibold mt-2">
                      Achievements/Tasks
                    </div>
                    <ul className="list-disc list-inside text-xs text-[#414755] mt-1 space-y-1.5 pl-1">
                      <li>An outstanding asset to Navya's Technical team in 2023.</li>
                      <li>Contributing to the UAT and ensuring overall stability of our software solutions in the pre-production and production setup.</li>
                      <li>QA/Automation Testing using Selenium and Python.</li>
                      <li>API endpoint testing using Postman (GET, POST, PUT).</li>
                      <li>Supporting production issues through AWS cloudwatch logs and Canary.</li>
                      <li>Monitoring CI/CD pipelines in Jenkins.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-4 font-mono">
                  EDUCATION
                </h2>

                <div className="space-y-5">
                  <div>
                    <div className="font-bold text-sm text-[#1b1b1d]">
                      M.Tech in Biotechnology
                    </div>
                    <div className="text-xs font-semibold text-[#1b1b1d]">
                      VIT, Vellore
                    </div>
                    <div className="flex justify-between text-xs text-[#1f6b80] italic mt-0.5">
                      <span>09/2021 - 07/2023</span>
                      <span className="font-bold font-mono">8.13</span>
                    </div>
                    <div className="text-xs text-[#1f6b80] font-semibold mt-1">Projects</div>
                    <ul className="list-disc list-inside text-xs text-[#414755] space-y-1 pl-1">
                      <li>Comparing DESEQ2 and GSEA for gene expression analysis in Melanoma.</li>
                      <li>in-silico approaches to find an immunogenic binding site for Dengue virus.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-[#1b1b1d]">
                      B.TECH in Biotechnology
                    </div>
                    <div className="text-xs font-semibold text-[#1b1b1d]">
                      BIT Kolkata
                    </div>
                    <div className="flex justify-between text-xs text-[#1f6b80] italic mt-0.5">
                      <span>05/2017 - 05/2021</span>
                      <span className="font-bold font-mono">9.15</span>
                    </div>
                    <div className="text-xs text-[#1f6b80] font-semibold mt-1">Projects</div>
                    <ul className="list-disc list-inside text-xs text-[#414755] space-y-1 pl-1">
                      <li>Protein folding models to determine the structural behaviors of prion polypeptides across different mammalian species.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-5 space-y-6">
              {/* Skills */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-3 font-mono">
                  SKILLS
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Automation testing',
                    'Manual testing',
                    'Python',
                    'AWS Lambda',
                    'Playwright',
                    'Claude AI',
                    'Apps Script',
                    'Selenium',
                    'API testing'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-500 text-white rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-3 font-mono">
                  PROJECTS
                </h2>

                <div className="space-y-3.5">
                  <div>
                    <div className="text-xs font-bold text-[#1b1b1d]">
                      Remote Deployment job trigger for Jenkins (01/2024)
                    </div>
                    <p className="text-xs text-[#414755] mt-0.5">
                      • This script allows users to input branch names and triggers all Jenkins deployment jobs simultaneously, streamlining the deployment process where multiple repositories are involved.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[#1b1b1d]">
                      API chaining to get the Treatment Options for Stage IV Breast Cancer (12/2023)
                    </div>
                    <p className="text-xs text-[#414755] mt-0.5">
                      • This project uses two APIs that expands an abridged treatment regimen into a language that is understood by patients.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[#1b1b1d]">
                      AWS Cloudwatch Insights query to monitor failure logs in production setup (12/2023)
                    </div>
                    <p className="text-xs text-[#414755] mt-0.5">
                      • Based on the support issues and negative feedback from other teams, I have set up a Cloudwatch insights dashboard in AWS that monitors any failure logs in a given span of time, ensuring the application's overall health and effectiveness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-3 font-mono">
                  ACHIEVEMENTS
                </h2>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-bold text-[#1b1b1d]">
                      Selected as a Research Volunteer at Michigan State University
                    </div>
                    <p className="text-xs text-[#717786] italic mt-0.5">
                      Worked as a remote research volunteer for 6 months under Dr. Laura Harris, director of training at MSU-D2L
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[#1b1b1d]">
                      Qualified GATE-BT 2021
                    </div>
                    <p className="text-xs text-[#717786] italic mt-0.5">
                      Graduate Aptitude Test in Engineering (GATE Biotechnology 2021)
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-3 font-mono">
                  LANGUAGES
                </h2>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="font-bold text-[#1b1b1d]">English</div>
                    <div className="text-[#1f6b80] italic text-[11px]">Full Professional Proficiency</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1b1b1d]">Hindi</div>
                    <div className="text-[#1f6b80] italic text-[11px]">Full Professional Proficiency</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1b1b1d]">Bengali</div>
                    <div className="text-[#1f6b80] italic text-[11px]">Native or Bilingual Proficiency</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1b1b1d]">German</div>
                    <div className="text-[#1f6b80] italic text-[11px]">Elementary Proficiency</div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-lg font-bold text-[#1f6b80] uppercase tracking-wider border-b-2 border-[#1f6b80] pb-1 mb-3 font-mono">
                  INTERESTS
                </h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white border border-[#c1c6d7] rounded-md text-xs font-medium text-[#1b1b1d]">
                    Music
                  </span>
                  <span className="px-3 py-1 bg-white border border-[#c1c6d7] rounded-md text-xs font-medium text-[#1b1b1d]">
                    Football
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
