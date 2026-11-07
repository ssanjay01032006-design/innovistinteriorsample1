import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { Plus, Minus } from 'lucide-react';
import { WoodPatternBackground } from './WoodPatternBackground';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 lg:py-36 bg-[#140D09] text-[#FFEAC5] overflow-hidden">
      {/* Spiral Wood Pattern Background */}
      <WoodPatternBackground
        pattern="spiral"
        blur="none"
        opacity={0.45}
        variant="dark"
        overlay="tint"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-3">
            Inquiries &amp; Transparency
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FFEAC5]">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-sm font-sans text-[#FFEAC5]/70 tracking-wide">
            Everything you need to know about our architectural engagement, procurement procedures, and turnaround guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1B120C] border-[#FFDBB5]/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    : 'bg-[#18100B]/90 backdrop-blur-md border-[#603F26]/30 hover:border-[#603F26]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#FFDBB5]">0{idx + 1}</span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#FFEAC5] font-normal">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'border-[#FFDBB5] bg-[#FFDBB5] text-[#140D09]'
                        : 'border-[#FFDBB5]/30 text-[#FFEAC5]/60'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-[#603F26]/30 animate-fade-in">
                    <p className="font-sans text-xs sm:text-sm text-[#FFEAC5]/75 leading-relaxed font-light mt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
