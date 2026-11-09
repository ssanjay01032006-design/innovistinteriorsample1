import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../data/content';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeIndex = SERVICES.findIndex((s) => s.id === activeServiceId);
  const activeService = SERVICES[activeIndex !== -1 ? activeIndex : 0];

  // Sticky Scroll-Triggered Sync Observer (Active for Desktop sticky layout)
  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const serviceId = entry.target.getAttribute('data-service-id');
          if (serviceId) {
            setActiveServiceId(serviceId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-15% 0px -45% 0px',
      threshold: [0.1, 0.3, 0.6],
    });

    Object.values(serviceRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleServiceClick = (id: string) => {
    setActiveServiceId(id);
    const target = serviceRefs.current[id];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-36 bg-[#140D09] text-[#FFEAC5]">
      {/* 
        Radial Gradient of the Brown Palette:
        Light warm amber/timber brown at the middle zone, seamlessly transitioning to deep espresso at the edges.
      */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 45%, #4A2E1E 0%, #342015 35%, #1E130D 65%, #140D09 100%)',
        }}
      />
      {/* Subtle warm champagne/peach luminous core at the middle zone */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-45"
        style={{
          background: 'radial-gradient(circle 420px at 50% 45%, rgba(255, 219, 181, 0.15) 0%, rgba(108, 78, 49, 0.1) 50%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 lg:mb-20 pb-6 sm:pb-8 border-b border-[#603F26]/40">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-2 sm:mb-3">
              Comprehensive Studio Capabilities
            </span>
            <h2 className="font-serif text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FFEAC5]">
              Bespoke Services. <br />
              <span className="italic text-[#FFDBB5]">
                End-to-End Precision.
              </span>
            </h2>
          </div>
          <p className="mt-4 sm:mt-6 md:mt-0 text-xs sm:text-sm max-w-md font-sans text-[#FFEAC5]/70 tracking-wide leading-relaxed">
            From bespoke private residences to turnkey spatial transformations, we bring rigor, material integrity, and architectural precision to every commission.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET VIEW (< lg): Editorial In-Card Storytelling    */}
        {/* Solves mobile viewport cramping: each service has its own      */}
        {/* image + narrative together with zero overlapping or cutoff.   */}
        {/* ============================================================== */}
        <div className="lg:hidden space-y-10 sm:space-y-12">
          {/* Quick jump pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  const el = document.getElementById(`service-card-${s.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-[#1B120C]/90 border border-[#603F26]/50 text-[#FFEAC5]/80 hover:text-[#FFDBB5] hover:border-[#FFDBB5]/50 transition-colors"
              >
                <span>{s.index} {s.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Service Cards List */}
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-5 sm:p-8 rounded-3xl bg-[#1B120C]/85 backdrop-blur-md border border-[#603F26]/40 shadow-2xl space-y-5 scroll-mt-24"
            >
              {/* Category / Discipline Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#FFDBB5]">
                    {service.index}
                  </span>
                  <div className="w-8 h-[1px] bg-[#FFDBB5]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#FFEAC5]/60">
                    Practice {service.index} of 08
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FFEAC5] font-normal leading-tight mb-1.5">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#FFDBB5] tracking-wide">
                  {service.tagline}
                </p>
              </div>

              {/* High-Resolution Architectural Service Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl border border-[#FFDBB5]/25 bg-[#140D09]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/80 via-transparent to-black/25 pointer-events-none" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#140D09]/85 backdrop-blur-md border border-[#FFDBB5]/25 text-[10px] uppercase tracking-[0.2em] text-[#FFDBB5]">
                    INNOVIST Atelier
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#140D09]/85 backdrop-blur-md border border-[#FFDBB5]/30 text-xs text-[#FFEAC5]">
                    {service.index} / 08
                  </span>
                </div>
              </div>

              {/* Narrative Description */}
              <p className="font-sans text-xs sm:text-sm text-[#FFEAC5]/80 font-light leading-relaxed">
                {service.description}
              </p>

              {/* Scope of Engagement Tags */}
              <div className="space-y-2.5 pt-3 border-t border-[#603F26]/30">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFEAC5]/50 block">
                  Scope of Engagement
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-sans bg-[#FFDBB5]/10 border border-[#FFDBB5]/30 text-[#FFEAC5]"
                    >
                      <Check className="w-3 h-3 text-[#FFDBB5]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] font-medium border border-[#FFDBB5]/40 text-[#FFEAC5] bg-[#FFDBB5]/10 hover:bg-[#FFDBB5] hover:text-[#140D09] transition-all shadow-sm"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (lg:): Sticky Scroll-Triggered Sync Storytelling   */}
        {/* Pinned visual on left crossfading as chapters scroll on right  */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 items-start relative">
          {/* STICKY VISUAL PREVIEW CONTAINER */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 z-30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#FFDBB5]/30 bg-[#1B120C] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Layered Crossfading Images */}
              {SERVICES.map((s, index) => {
                const isActive = s.id === activeServiceId;
                return (
                  <div
                    key={s.id}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-out will-change-transform ${
                        isActive ? 'scale-100' : 'scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/90 via-[#140D09]/20 to-black/30 pointer-events-none" />
                  </div>
                );
              })}

              {/* Sticky Meta Header Badge */}
              <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#140D09]/85 backdrop-blur-md border border-[#FFDBB5]/25 text-[10px] font-mono uppercase tracking-[0.22em] text-[#FFDBB5] shadow-md">
                  INNOVIST Atelier
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#140D09]/85 backdrop-blur-md border border-[#FFDBB5]/30 text-xs font-mono text-[#FFEAC5] shadow-md">
                  {activeService.index} / 08
                </span>
              </div>

              {/* Sticky Bottom Information Bar */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col gap-2.5 p-5 rounded-2xl bg-[#1B120C]/90 backdrop-blur-md border border-[#603F26]/50 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#FFDBB5]">
                    Current Discipline
                  </span>
                  <div className="flex gap-1">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleServiceClick(s.id)}
                        aria-label={`Jump to ${s.title}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          s.id === activeServiceId
                            ? 'w-6 bg-[#FFDBB5]'
                            : 'w-1.5 bg-[#FFEAC5]/25 hover:bg-[#FFEAC5]/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-[#FFEAC5] font-normal leading-tight">
                  {activeService.title}
                </h4>

                <div className="flex items-center justify-between pt-1 border-t border-[#603F26]/30">
                  <span className="text-xs text-[#FFEAC5]/70 font-sans line-clamp-1 max-w-[220px]">
                    {activeService.tagline}
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.18em] text-[#FFDBB5] hover:text-[#FFEAC5] transition-colors flex-shrink-0"
                  >
                    <span>Request Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 
            SCROLLING NARRATIVE CHAPTERS (Desktop)
            Each service chapter is spaced out with comfortable height.
            As the user scrolls, each chapter triggers the sticky image change!
          */}
          <div className="lg:col-span-6 flex flex-col">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  data-service-id={service.id}
                  ref={(el) => {
                    serviceRefs.current[service.id] = el;
                  }}
                  onClick={() => handleServiceClick(service.id)}
                  className={`min-h-[60vh] flex flex-col justify-center py-20 border-b border-[#603F26]/30 cursor-pointer transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-30 hover:opacity-70'
                  }`}
                >
                  {/* Service Number & Category */}
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`font-mono text-base font-bold tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-[#FFDBB5]' : 'text-[#FFEAC5]/30'
                      }`}
                    >
                      {service.index}
                    </span>
                    <div
                      className={`h-[1px] transition-all duration-500 ${
                        isActive ? 'w-12 bg-[#FFDBB5]' : 'w-6 bg-[#603F26]/40'
                      }`}
                    />
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FFEAC5]/50">
                      Practice {service.index} of 08
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif text-4xl lg:text-5xl font-normal leading-tight mb-3 transition-colors duration-300 ${
                      isActive ? 'text-[#FFEAC5]' : 'text-[#FFEAC5]/60'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-sans text-base text-[#FFDBB5] tracking-wide mb-6">
                    {service.tagline}
                  </p>

                  {/* Narrative Body */}
                  <p className="font-sans text-base text-[#FFEAC5]/75 font-light leading-relaxed mb-8 max-w-xl">
                    {service.description}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFEAC5]/40 block">
                      Scope of Engagement
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans transition-all duration-300 ${
                            isActive
                              ? 'bg-[#FFDBB5]/15 border border-[#FFDBB5]/50 text-[#FFEAC5]'
                              : 'bg-white/5 border border-white/5 text-[#FFEAC5]/50'
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isActive ? 'text-[#FFDBB5]' : 'text-[#FFEAC5]/30'
                            }`}
                          />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation();
                      }}
                      className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium transition-colors ${
                        isActive
                          ? 'text-[#FFDBB5] hover:text-[#FFEAC5]'
                          : 'text-[#FFEAC5]/40 hover:text-[#FFEAC5]'
                      }`}
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
