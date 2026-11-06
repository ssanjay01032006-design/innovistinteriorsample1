import React from 'react';
import { STUDIO_INTRO } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const StudioIntro: React.FC = () => {
  return (
    <section id="studio-intro" className="relative py-28 lg:py-36 bg-[#140D09] text-[#FFEAC5] overflow-hidden">
      {/* Decorative subtle ambient amber light glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FFDBB5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-8 border-b border-[#603F26]/30">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-3">
              {STUDIO_INTRO.eyebrow}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FFEAC5]">
              Designing Spaces. <br />
              <span className="italic text-[#FFDBB5]">Creating Experiences.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm max-w-md font-sans text-[#FFEAC5]/70 tracking-wide leading-relaxed">
            INNOVIST Interior Design is an architectural atelier dedicated to crafting serene private environments through authentic natural wood, honed European marble, and bespoke craftsmanship.
          </p>
        </div>

        {/* Asymmetrical Editorial Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Main Large Architectural Image */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#603F26]/40 bg-[#1B120C] shadow-2xl">
              <img
                src={STUDIO_INTRO.mainImage}
                alt="Studio Architectural Interior"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#FFEAC5]/80 font-mono tracking-wider">
                <span>01 / Living Pavilion</span>
                <span>Zurich Villa</span>
              </div>
            </div>
          </div>

          {/* Secondary Supporting Content & Secondary Image */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#603F26]/40 bg-[#1B120C] shadow-xl group">
              <img
                src={STUDIO_INTRO.secondaryImage}
                alt="Bespoke Joinery Details"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-xs text-[#FFEAC5]/80 font-mono tracking-wider">
                <span>02 / Precision Joinery</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#FFEAC5] leading-snug">
                "{STUDIO_INTRO.statement}"
              </h3>
              <p className="text-sm text-[#FFEAC5]/70 font-sans leading-relaxed">
                {STUDIO_INTRO.description}
              </p>
              <div className="pt-2">
                <a
                  href="#philosophy"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#FFDBB5] hover:text-[#FFEAC5] transition-colors group"
                >
                  <span>Explore Our Philosophy</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#603F26]/30">
          {STUDIO_INTRO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FFDBB5] mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#FFEAC5]/50 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
