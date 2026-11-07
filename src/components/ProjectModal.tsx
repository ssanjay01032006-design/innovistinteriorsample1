import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#1B120C] border border-[#603F26]/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto text-[#FFEAC5] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2.5 rounded-full bg-black/70 border border-[#FFDBB5]/30 text-[#FFEAC5]/80 hover:text-[#FFEAC5] hover:border-[#FFDBB5] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-[240px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden bg-[#140D09]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-transparent to-black/50" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#FFDBB5] block mb-1 sm:mb-2">
                {project.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#FFEAC5] font-normal leading-tight">
                {project.title}
              </h2>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-[#FFEAC5]/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFDBB5]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FFDBB5]" />
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#603F26]/30">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-[#FFDBB5]">
                Architectural Concept &amp; Execution
              </h3>
              <p className="font-serif text-xl sm:text-2xl text-[#FFEAC5] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 bg-[#140D09]/60 p-6 rounded-2xl border border-[#603F26]/30">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#FFEAC5]/50 block">
                Spatial Specs
              </span>
              <div className="space-y-2 text-sm font-sans">
                <div className="flex justify-between py-1 border-b border-[#603F26]/20">
                  <span className="text-[#FFEAC5]/60">Gross Area:</span>
                  <span className="text-[#FFEAC5] font-mono">{project.area}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#603F26]/20">
                  <span className="text-[#FFEAC5]/60">Completion:</span>
                  <span className="text-[#FFEAC5] font-mono">{project.year}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#FFEAC5]/60">Status:</span>
                  <span className="text-[#FFDBB5] font-mono">Delivered Turnkey</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary image if available */}
          {project.secondaryImage && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-[#FFDBB5]">
                Materiality &amp; Joinery Detail
              </h4>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#603F26]/40">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Architectural Highlights */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-[#FFDBB5]">
              Key Design Interventions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#140D09]/50 border border-[#603F26]/30 text-xs text-[#FFEAC5]/80 font-sans leading-relaxed flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFDBB5] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Call to Action */}
          <div className="pt-6 border-t border-[#603F26]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#FFEAC5]/60 font-sans">
              Interested in a similar aesthetic for your property?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#FFEAC5] transition-colors"
            >
              <span>Inquire About This Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
