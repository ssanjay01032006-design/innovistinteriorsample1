import React from 'react';
import { PHILOSOPHY } from '../data/content';
import { Quote } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-16 sm:py-24 lg:py-36 bg-[#140D09] text-[#FFEAC5] overflow-hidden">
      {/* 
        Full-Section Wood Pattern with Unified Glassmorphism Background Cover
        (Individual box cards removed; the entire section is enveloped in a cohesive frosted glass cover)
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/patterns/wood-geometric.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-65 will-change-transform"
        />
        {/* Full-bleed Glassmorphism Background Cover Layer */}
        <div className="absolute inset-0 bg-[#140D09]/70 backdrop-blur-md border-y border-[#FFDBB5]/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Eyebrow - Clean typography without box */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] inline-block">
            Our Architectural Manifesto
          </span>
        </div>

        {/* Oversized Statement Headline - Open negative space without card box */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#FFDBB5]/50 mx-auto mb-6 sm:mb-8" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-light text-[#FFEAC5] leading-[1.2] tracking-tight text-balance">
            "Great interiors are not simply designed. They are thoughtfully{' '}
            <span className="italic text-[#FFDBB5]">
              experienced
            </span>
            ."
          </h2>
          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <span className="font-sans text-xs sm:text-sm font-medium text-[#FFEAC5] tracking-widest uppercase">
              {PHILOSOPHY.author}
            </span>
            <span className="text-[11px] sm:text-xs text-[#FFDBB5] tracking-wider mt-1 font-mono">
              Founder &amp; Principal Architect, INNOVIST
            </span>
          </div>
        </div>

        {/* Three Pillars - Seamless Editorial Flow without Individual Box Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 pt-8 sm:pt-12 border-t border-[#FFDBB5]/20">
          {PHILOSOPHY.principles.map((item) => (
            <div key={item.no} className="group relative">
              <span className="font-mono text-xs text-[#FFDBB5] tracking-[0.25em] block mb-3">
                Pillar {item.no}
              </span>
              <h3 className="font-serif text-2xl text-[#FFEAC5] font-normal mb-3 group-hover:text-[#FFDBB5] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#FFEAC5]/75 font-sans leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
