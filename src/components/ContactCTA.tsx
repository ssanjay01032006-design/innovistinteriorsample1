import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  onOpenConsultation: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="relative py-32 lg:py-44 bg-[#140D09] text-[#FFEAC5] overflow-hidden">
      {/* Pristine Modern Architecture Background (No Clashing Elements or Fans) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/contact-bg.jpg"
          alt="Luxury Architecture"
          loading="lazy"
          className="w-full h-full object-cover scale-100 will-change-transform opacity-40"
        />
        {/* Luxury Roasted Espresso & Warm Amber Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140D09] via-[#140D09]/75 to-[#140D09]/85" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-[#4A2E1E]/30 via-[#140D09]/50 to-[#140D09]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FFDBB5]/25 bg-[#1B120C]/70 backdrop-blur-md mb-8">
          <span className="text-[11px] font-sans tracking-[0.28em] uppercase text-[#FFEAC5]">
            Begin Your Spatial Metamorphosis
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FFEAC5] leading-[1.05] tracking-tight mb-8">
          Let's Create <br />
          <span className="italic text-[#FFDBB5] font-light">
            Something Timeless.
          </span>
        </h2>

        {/* Supporting description */}
        <p className="max-w-xl text-base sm:text-lg text-[#FFEAC5]/80 font-sans font-light leading-relaxed mb-12">
          Have a space in mind? Let's bring your vision to life. From private villas to executive headquarters, we orchestrate spaces that elevate every moment.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-bold text-xs tracking-[0.24em] uppercase transition-all duration-300 hover:bg-[#FFEAC5] hover:shadow-[0_0_40px_rgba(255,219,181,0.5)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Studio Quick Inquiries */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#603F26]/30 w-full text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFDBB5] block">
              Direct Inquiries
            </span>
            <p className="font-sans text-sm text-[#FFEAC5]/90">inquiry@innovist-interior.com</p>
            <p className="font-sans text-xs text-[#FFEAC5]/50">+41 22 710 44 00</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFDBB5] block">
              Zurich Atelier
            </span>
            <p className="font-sans text-sm text-[#FFEAC5]/90">Gotthardstrasse 26</p>
            <p className="font-sans text-xs text-[#FFEAC5]/50">8002 Zurich, Switzerland</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFDBB5] block">
              Milan Studio
            </span>
            <p className="font-sans text-sm text-[#FFEAC5]/90">Via Montenapoleone 18</p>
            <p className="font-sans text-xs text-[#FFEAC5]/50">20121 Milan, Italy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
