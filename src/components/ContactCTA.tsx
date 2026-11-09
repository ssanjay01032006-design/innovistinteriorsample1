import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  onOpenConsultation: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="relative py-16 sm:py-28 lg:py-40 bg-[#140D09] text-[#FFEAC5] overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FFDBB5]/25 bg-[#1B120C]/70 backdrop-blur-md mb-6 sm:mb-8">
          <span className="text-[10px] min-[380px]:text-[11px] font-sans tracking-[0.28em] uppercase text-[#FFEAC5]">
            Begin Your Spatial Metamorphosis
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FFEAC5] leading-[1.05] tracking-tight mb-4 sm:mb-8">
          Let's Create <br />
          <span className="italic text-[#FFDBB5] font-light">
            Something Timeless.
          </span>
        </h2>

        {/* Supporting description */}
        <p className="max-w-xl text-xs sm:text-base md:text-lg text-[#FFEAC5]/80 font-sans font-light leading-relaxed mb-8 sm:mb-12">
          Have a space in mind? Let's bring your vision to life. From private villas to executive headquarters, we orchestrate spaces that elevate every moment.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-5 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-bold text-xs tracking-[0.24em] uppercase transition-all duration-300 hover:bg-[#FFEAC5] hover:shadow-[0_0_40px_rgba(255,219,181,0.5)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
