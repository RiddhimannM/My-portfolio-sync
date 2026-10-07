import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Mail, Phone, MapPin, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedLinkedin(true);
      setTimeout(() => setCopiedLinkedin(false), 2000);
    }
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="contact-modal-container"
        className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl border border-[#c1c6d7]/50 dark:border-slate-800 overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#f0edef] dark:bg-slate-800/80 px-6 py-5 border-b border-[#c1c6d7]/30 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#1b1b1d] dark:text-slate-100">
              Get in Touch
            </h3>
            <p className="text-xs text-[#717786] dark:text-slate-400 font-mono mt-0.5">
              Direct Contact & Professional Links
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#414755] dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* LinkedIn Pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#fcf8fb] dark:bg-slate-800/40 rounded-xl border border-[#c1c6d7]/40 dark:border-slate-800 hover:border-[#0058bc]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0058bc] dark:bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#717786] dark:text-slate-400">LinkedIn Profile</div>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-[#0058bc] dark:text-blue-400 hover:underline flex items-center gap-1 font-mono"
                >
                  <span>linkedin.com/in/rm-0110</span>
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.linkedInUrl, 'linkedin')}
              className="px-2.5 py-1 bg-white dark:bg-slate-800 hover:bg-[#eae7ea] dark:hover:bg-slate-700 rounded-lg text-xs font-mono text-[#0058bc] dark:text-blue-300 border border-[#c1c6d7]/40 dark:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy LinkedIn URL"
            >
              {copiedLinkedin ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLinkedin ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Email Pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#fcf8fb] dark:bg-slate-800/40 rounded-xl border border-[#c1c6d7]/40 dark:border-slate-800 hover:border-[#0058bc]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#717786] dark:text-slate-400">Email Address</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-[#1b1b1d] dark:text-slate-100 font-mono hover:text-[#0058bc] dark:hover:text-blue-400"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="px-2.5 py-1 bg-white dark:bg-slate-800 hover:bg-[#eae7ea] dark:hover:bg-slate-700 rounded-lg text-xs font-mono text-[#0058bc] dark:text-blue-300 border border-[#c1c6d7]/40 dark:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone Pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#fcf8fb] dark:bg-slate-800/40 rounded-xl border border-[#c1c6d7]/40 dark:border-slate-800 hover:border-[#0058bc]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#717786] dark:text-slate-400">Phone / WhatsApp</div>
                <div className="text-xs sm:text-sm font-semibold text-[#1b1b1d] dark:text-slate-100 font-mono">
                  +91 {PERSONAL_INFO.phone}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="px-2.5 py-1 bg-white dark:bg-slate-800 hover:bg-[#eae7ea] dark:hover:bg-slate-700 rounded-lg text-xs font-mono text-[#0058bc] dark:text-blue-300 border border-[#c1c6d7]/40 dark:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Location Pill */}
          <div className="flex items-start gap-3 p-3.5 bg-[#fcf8fb] dark:bg-slate-800/40 rounded-xl border border-[#c1c6d7]/40 dark:border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-[#d8e2ff] dark:bg-blue-950/60 text-[#004493] dark:text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#717786] dark:text-slate-400">Location</div>
              <div className="text-xs text-[#1b1b1d] dark:text-slate-100 font-sans mt-0.5">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0edef] dark:bg-slate-800/80 px-6 py-4 border-t border-[#c1c6d7]/30 dark:border-slate-800 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#0058bc] dark:bg-blue-600 hover:bg-[#004493] dark:hover:bg-blue-500 text-white rounded-xl font-mono text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
