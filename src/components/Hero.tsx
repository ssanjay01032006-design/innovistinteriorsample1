import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all 4 hero images on mount to avoid blank frames or flashes
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // 1.8 seconds showcasing time for each image (1.5 - 2s requirement)
  // Continuous loop with smooth 1.4s opacity crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#140D09] py-24 sm:py-28 lg:py-0"
    >
      {/* 
        LAYERED BACKGROUND SLIDESHOW
        All 4 images are permanently mounted in the DOM.
        Smooth opacity-based crossfade and subtle cinematic zoom.
        No DOM removal, no flickering, completely stable UI.
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full transition-opacity duration-[1400ms] ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 1,
              }}
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-[4000ms] ease-out will-change-transform ${
                  isActive ? 'scale-[1.03]' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.src})`,
                  backgroundPosition: 'center 45%',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 
        SUBTLE ADAPTIVE OVERLAY
        Tuned to the new warm mocha & roasted walnut color palette (#140D09).
        Preserves natural wood tones while maintaining crisp readability.
      */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#140D09]/60 via-[#140D09]/30 to-[#140D09]/85" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-transparent via-[#140D09]/20 to-[#140D09]/65" />

      {/* 
        CENTERED CINEMATIC CONTENT
        Completely stable while background lighting changes.
      */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FFDBB5]/25 bg-[#1B120C]/60 backdrop-blur-md mb-4 sm:mb-6 lg:mb-8 animate-fade-in shadow-sm">
          <span className="text-[10px] min-[380px]:text-[11px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#FFEAC5] font-medium">
            Interior Architecture &amp; Luxury Craft
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFEAC5] font-normal leading-[1.08] mb-4 sm:mb-6 drop-shadow-md">
          Spaces That <br />
          <span className="italic font-light text-[#FFDBB5] gold-glow">
            Speak Beyond Design.
          </span>
        </h1>

        {/* Minimal Supporting Description */}
        <p className="max-w-2xl text-xs min-[380px]:text-sm sm:text-base md:text-xl text-[#FFEAC5]/80 font-sans font-light leading-relaxed tracking-wide mb-8 sm:mb-10 text-balance drop-shadow-sm px-2">
          We transform spaces into timeless experiences through thoughtful design, refined materials and exceptional craftsmanship.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreWork}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-semibold text-xs tracking-[0.22em] uppercase transition-all duration-300 hover:bg-[#FFEAC5] hover:shadow-[0_0_30px_rgba(255,219,181,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
