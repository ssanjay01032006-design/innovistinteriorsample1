import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import type { Project } from '../types';
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { WoodPatternBackground } from './WoodPatternBackground';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = [
    'All',
    'Modern Residential Villa',
    'Luxury Living Room',
    'Contemporary Bedroom',
    'Premium Modular Kitchen',
    'Luxury Office Interior',
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="relative py-28 lg:py-36 bg-[#140D09] text-[#FFEAC5] overflow-hidden">
      {/* 
        Wood Pattern Design Background with Soft Feathered Edges
        (Soft edge transitions on both top and bottom eliminate any hard cut lines)
      */}
      <WoodPatternBackground
        pattern="herringbone"
        blur="none"
        opacity={0.48}
        overlay="tint"
        softEdges={true}
      />

      {/* Top Soft Feather Gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 sm:h-52 bg-gradient-to-b from-[#140D09] via-[#140D09]/80 to-transparent pointer-events-none z-10" />

      {/* Bottom Soft Feather Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 bg-gradient-to-t from-[#140D09] via-[#140D09]/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#603F26]/30">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-3">
              Selected Works · 2024—2026
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FFEAC5]">
              Featured Projects. <br />
              <span className="italic text-[#FFDBB5]">
                Timeless Living.
              </span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm max-w-md font-sans text-[#FFEAC5]/70 tracking-wide leading-relaxed">
            Every residence is custom-tailored to site topography, architectural orientation, and client lifestyle rituals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                selectedFilter === cat
                  ? 'bg-[#FFDBB5] text-[#140D09] font-semibold shadow-md'
                  : 'bg-[#1B120C]/90 text-[#FFEAC5]/70 hover:text-[#FFEAC5] hover:bg-[#603F26]/40 border border-[#603F26]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="space-y-16">
          {/* Hero Project (Large Monumental Feature) */}
          {filteredProjects[0] && (
            <div
              onClick={() => onSelectProject(filteredProjects[0])}
              className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#603F26]/40 bg-[#1B120C] transition-all duration-500 hover:border-[#FFDBB5]/60 shadow-2xl"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                <img
                  src={filteredProjects[0].image}
                  alt={filteredProjects[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D09] via-[#140D09]/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFDBB5]">
                      {filteredProjects[0].category}
                    </span>
                    <span className="text-[#FFEAC5]/40">·</span>
                    <span className="text-xs text-[#FFEAC5]/70 flex items-center gap-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#FFDBB5]" />
                      {filteredProjects[0].location}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFEAC5] font-normal group-hover:text-[#FFDBB5] transition-colors">
                    {filteredProjects[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFEAC5]/75 line-clamp-2 max-w-xl font-sans font-light">
                    {filteredProjects[0].description}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#FFEAC5] group-hover:text-[#FFDBB5] transition-colors">
                    View Project
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#FFDBB5]/40 flex items-center justify-center group-hover:border-[#FFDBB5] group-hover:bg-[#FFDBB5] group-hover:text-[#140D09] transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Asymmetrical 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.slice(1, 3).map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-[#603F26]/40 bg-[#1B120C] transition-all duration-500 hover:border-[#FFDBB5]/60 shadow-xl ${
                  idx === 1 ? 'md:translate-y-8' : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FFEAC5]/50">
                    <span className="text-[#FFDBB5]">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFEAC5] group-hover:text-[#FFDBB5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFEAC5]/70 font-sans line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FFEAC5]/50">{project.location}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#FFDBB5] group-hover:underline">
                      Explore Spec <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary 3-Column Editorial Row */}
          {filteredProjects.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {filteredProjects.slice(3).map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-[#603F26]/40 bg-[#1B120C] transition-all duration-500 hover:border-[#FFDBB5]/60 shadow-lg"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-transparent to-transparent" />
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFDBB5] block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FFEAC5] group-hover:text-[#FFDBB5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#FFEAC5]/60 font-sans line-clamp-2">
                      {project.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#FFEAC5]/40 border-t border-[#603F26]/30">
                      <span>{project.location}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FFDBB5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
