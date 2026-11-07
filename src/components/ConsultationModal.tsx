import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Modern Residential Villa',
    timeline: 'Immediate (1-3 Months)',
    budget: '$150k - $300k',
    details: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1B120C] border border-[#603F26]/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto text-[#FFEAC5] p-5 sm:p-8 lg:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#140D09]/80 border border-[#FFDBB5]/20 text-[#FFEAC5]/70 hover:text-[#FFEAC5] hover:border-[#FFDBB5] transition-colors z-20 min-w-[40px] min-h-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FFDBB5]/20 border border-[#FFDBB5] flex items-center justify-center mx-auto text-[#FFDBB5]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#FFEAC5] font-normal">
              Consultation Inquiry Received
            </h3>
            <p className="font-sans text-sm text-[#FFEAC5]/70 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#FFDBB5]">{formData.name}</span>. Our Managing Studio Architect at INNOVIST will review your spatial requirements and contact you within 24 hours to schedule your preliminary design briefing.
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-semibold text-xs uppercase tracking-widest hover:bg-[#FFEAC5] transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/innovist-logo.jpg"
                alt="Innovist Logo"
                className="w-9 h-9 rounded-full border border-[#FFDBB5]/40 object-cover"
              />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FFDBB5]">
                Private Client Engagement
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFEAC5] font-normal mb-2">
              Commission a Project.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#FFEAC5]/60 mb-8">
              Share details regarding your property and architectural aspirations with INNOVIST.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] placeholder-[#FFEAC5]/30 text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="julian@estate.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] placeholder-[#FFEAC5]/30 text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                    Project Location
                  </label>
                  <input
                    type="text"
                    placeholder="City, Country (e.g. Zurich, CH)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] placeholder-[#FFEAC5]/30 text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                    Project Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors"
                  >
                    <option value="Modern Residential Villa">Modern Residential Villa</option>
                    <option value="Luxury Penthouse & Living">Luxury Penthouse &amp; Living</option>
                    <option value="Contemporary Bedroom Suite">Contemporary Bedroom Suite</option>
                    <option value="Premium Modular Kitchen">Premium Modular Kitchen</option>
                    <option value="Corporate Office & Studio">Corporate Office &amp; Studio</option>
                    <option value="Commercial & Hospitality">Commercial &amp; Hospitality</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors"
                  >
                    <option value="$75k - $150k">$75,000 – $150,000</option>
                    <option value="$150k - $300k">$150,000 – $300,000</option>
                    <option value="$300k - $600k">$300,000 – $600,000</option>
                    <option value="$600k+">$600,000+ (Estate Grade)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                    Desired Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors"
                  >
                    <option value="Immediate (1-3 Months)">Immediate (1–3 Months)</option>
                    <option value="Within 6 Months">Within 6 Months</option>
                    <option value="Planning for next year">Planning for Next Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-mono text-[#FFEAC5]/60 mb-1.5">
                  Spatial Scope &amp; Vision Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the property size, architectural state, special timber or stone preferences..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#140D09] border border-[#603F26]/50 text-[#FFEAC5] placeholder-[#FFEAC5]/30 text-xs sm:text-sm focus:outline-none focus:border-[#FFDBB5] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-[#FFEAC5]/50">
                  <ShieldCheck className="w-4 h-4 text-[#FFDBB5]" />
                  <span>Strict NDA and privacy guaranteed.</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#FFEAC5] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,219,181,0.4)]"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
