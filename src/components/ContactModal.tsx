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
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-[#c1c6d7]/50 overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#f0edef] px-6 py-5 border-b border-[#c1c6d7]/30 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#1b1b1d]">
              Get in Touch
            </h3>
            <p className="text-xs text-[#717786] font-mono mt-0.5">
              Direct Contact & Professional Links
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#414755] hover:bg-white rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* LinkedIn Pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#fcf8fb] rounded-xl border border-[#c1c6d7]/40 hover:border-[#0058bc]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0058bc] text-white flex items-center justify-center shadow-xs">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#717786]">LinkedIn Profile</div>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-[#0058bc] hover:underline flex items-center gap-1 font-mono"
                >
                  <span>linkedin.com/in/rm-0110</span>
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.linkedInUrl, 'linkedin')}
              className="px-2.5 py-1 bg-white hover:bg-[#eae7ea] rounded-lg text-xs font-mono text-[#0058bc] border border-[#c1c6d7]/40 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy LinkedIn URL"
            >
              {copiedLinkedin ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLinkedin ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Email Pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#fcf8fb] rounded-xl border border-[#c1c6d7]/40 hover:border-[#0058bc]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d8e2ff] text-[#004493] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#717786]">Email Address</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-[#1b1b1d] font-mono hover:text-[#0058bc]"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="px-2.5 py-1 bg-white hover:bg-[#eae7ea] rounded-lg text-xs font-mono text-[#0058bc] border border-[#c1c6d7]/40 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone Pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#fcf8fb] rounded-xl border border-[#c1c6d7]/40 hover:border-[#0058bc]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d8e2ff] text-[#004493] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#717786]">Phone / WhatsApp</div>
                <div className="text-xs sm:text-sm font-semibold text-[#1b1b1d] font-mono">
                  +91 {PERSONAL_INFO.phone}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="px-2.5 py-1 bg-white hover:bg-[#eae7ea] rounded-lg text-xs font-mono text-[#0058bc] border border-[#c1c6d7]/40 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Location Pill */}
          <div className="flex items-start gap-3 p-3.5 bg-[#fcf8fb] rounded-xl border border-[#c1c6d7]/40">
            <div className="w-9 h-9 rounded-lg bg-[#d8e2ff] text-[#004493] flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#717786]">Location</div>
              <div className="text-xs text-[#1b1b1d] font-sans mt-0.5">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0edef] px-6 py-4 border-t border-[#c1c6d7]/30 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#0058bc] hover:bg-[#004493] text-white rounded-xl font-mono text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
