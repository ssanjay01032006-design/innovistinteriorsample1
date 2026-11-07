import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/content';
import { Check, Clock, ChevronRight, Compass } from 'lucide-react';
import { WoodPatternBackground } from './WoodPatternBackground';

interface DesignProcessProps {
  hideBackground?: boolean;
}

export const DesignProcess: React.FC<DesignProcessProps> = ({ hideBackground = false }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = PROCESS_STAGES[activeStageIndex];

  return (
    <section
      id="process"
      className={`relative py-28 lg:py-36 text-[#FFEAC5] ${
        hideBackground ? 'bg-transparent' : 'bg-[#140D09] overflow-hidden'
      }`}
    >
      {/* 
        Striped Wooden Pattern Background (when not provided by unified parent wrapper)
      */}
      {!hideBackground && (
        <WoodPatternBackground pattern="striped" blur="none" opacity={0.65} overlay="tint" softEdges="top" />
      )}

      {/* Subtle ambient warm accent */}
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-[#FFDBB5]/10 rounded-full blur-[150px] pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#603F26]/40">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-3">
              Methodology &amp; Execution
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FFEAC5]">
              The Design Journey. <br />
              <span className="italic text-[#FFDBB5]">From Vision to Reveal.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm max-w-md font-sans text-[#FFEAC5]/80 tracking-wide leading-relaxed">
            A disciplined 6-stage architectural journey engineered to eliminate guesswork, respect project capital, and safeguard design intent.
          </p>
        </div>

        {/* Interactive Progressive Stage Selector Bar with Glassmorphic Transparency */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            const isCompleted = idx < activeStageIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 relative backdrop-blur-md ${
                  isActive
                    ? 'bg-[#140D09]/85 border-[#FFDBB5] shadow-[0_0_20px_rgba(255,219,181,0.3)]'
                    : 'bg-[#140D09]/60 border-[#603F26]/40 hover:border-[#FFDBB5]/40 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${isActive ? 'text-[#FFDBB5] font-bold' : 'text-[#FFEAC5]/50'}`}>
                    {stage.step}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#FFDBB5] animate-pulse" />}
                  {isCompleted && <Check className="w-3.5 h-3.5 text-[#FFEAC5]/50" />}
                </div>
                <div className={`font-serif text-sm sm:text-base leading-tight ${isActive ? 'text-[#FFEAC5]' : 'text-[#FFEAC5]/75'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Active Stage Showcase Card with Glass Cover */}
        <div className="relative rounded-3xl bg-[#140D09]/80 backdrop-blur-md border border-[#FFDBB5]/25 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#1B120C]/80 border border-[#FFDBB5]/30 text-xs font-mono text-[#FFDBB5]">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimated Duration: {currentStage.duration}</span>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFEAC5]/50 block mb-2">
                  Stage {currentStage.step} of 06
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFEAC5] font-normal">
                  {currentStage.title}
                </h3>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#FFEAC5]/85 leading-relaxed font-light">
                {currentStage.description}
              </p>

              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFDBB5] block mb-1">
                  Architectural Core Focus
                </span>
                <p className="font-serif italic text-lg text-[#FFEAC5]">
                  "{currentStage.keyFocus}"
                </p>
              </div>

              {/* Navigation buttons between stages */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-full border border-[#FFDBB5]/30 text-xs uppercase tracking-wider text-[#FFEAC5] disabled:opacity-30 disabled:pointer-events-none hover:bg-white/10 transition-colors"
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStageIndex === PROCESS_STAGES.length - 1}
                  onClick={() => setActiveStageIndex((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1))}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-semibold text-xs uppercase tracking-wider disabled:opacity-30 disabled:pointer-events-none hover:bg-[#FFEAC5] transition-colors"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Deliverables Box */}
            <div className="lg:col-span-5 bg-[#1B120C]/80 rounded-2xl p-6 sm:p-8 border border-[#603F26]/40 space-y-6">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#FFDBB5]" />
                <h4 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[#FFEAC5]">
                  Phase Milestones
                </h4>
              </div>

              <div className="space-y-3">
                {currentStage.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#140D09]/80 border border-[#603F26]/30 flex items-start gap-3 text-xs sm:text-sm text-[#FFEAC5]/95"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#FFDBB5]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#FFDBB5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#603F26]/30 flex items-center justify-between text-xs text-[#FFEAC5]/60 font-mono">
                <span>Stage {currentStage.step} of 06</span>
                <span className="text-[#FFDBB5]">Architectural Oversight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
