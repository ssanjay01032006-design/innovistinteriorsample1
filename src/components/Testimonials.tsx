import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { WoodPatternBackground } from './WoodPatternBackground';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 bg-[#1B120C] text-[#FFEAC5] overflow-hidden">
      {/* Wood Pattern Background with Gaussian Blur & Gradient Effect */}
      <WoodPatternBackground pattern="sculpted" blur="lg" opacity={0.25} variant="mocha" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-8">
          Client Reflections
        </span>

        {/* Large Editorial Quote */}
        <div className="relative min-h-[260px] flex flex-col items-center justify-center mb-12">
          <Quote className="w-12 h-12 text-[#FFDBB5]/30 mb-8 mx-auto" />
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#FFEAC5] leading-relaxed tracking-tight text-balance">
            "{activeTestimonial.quote}"
          </p>

          <div className="mt-8 flex flex-col items-center space-y-1">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#FFEAC5]">
              {activeTestimonial.client}
            </h4>
            <p className="text-xs text-[#FFEAC5]/60 font-sans">
              {activeTestimonial.title} · <span className="text-[#FFDBB5]">{activeTestimonial.projectType}</span>
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous Testimonial"
            className="w-11 h-11 rounded-full border border-[#FFDBB5]/30 flex items-center justify-center text-[#FFEAC5]/70 hover:text-[#FFEAC5] hover:border-[#FFDBB5] hover:bg-[#FFDBB5]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#FFDBB5]' : 'w-2 bg-[#FFEAC5]/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next Testimonial"
            className="w-11 h-11 rounded-full border border-[#FFDBB5]/30 flex items-center justify-center text-[#FFEAC5]/70 hover:text-[#FFEAC5] hover:border-[#FFDBB5] hover:bg-[#FFDBB5]/10 transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
