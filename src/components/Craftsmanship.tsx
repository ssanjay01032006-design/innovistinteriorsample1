import React, { useState } from 'react';
import { MATERIALS } from '../data/content';
import { WoodPatternBackground } from './WoodPatternBackground';

interface CraftsmanshipProps {
  hideBackground?: boolean;
}

export const Craftsmanship: React.FC<CraftsmanshipProps> = ({ hideBackground = false }) => {
  const [activeMaterialId, setActiveMaterialId] = useState(MATERIALS[0].id);

  return (
    <section
      id="craftsmanship"
      className={`relative py-28 lg:py-36 text-[#FFEAC5] ${
        hideBackground ? 'bg-transparent' : 'bg-[#140D09] overflow-hidden'
      }`}
    >
      {/* 
        Striped Wooden Pattern Background (when not provided by unified parent wrapper)
      */}
      {!hideBackground && (
        <WoodPatternBackground
          pattern="striped"
          blur="none"
          opacity={0.65}
          overlay="tint"
          variant="dark"
          softEdges="bottom"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#603F26]/30">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#FFDBB5] block mb-3">
              Sensory Materiality · European Quarries &amp; Ateliers
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FFEAC5]">
              Craftsmanship &amp; Materials. <br />
              <span className="italic text-[#FFDBB5]">
                The Poetry of Texture.
              </span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm max-w-md font-sans text-[#FFEAC5]/70 tracking-wide leading-relaxed">
            We collaborate exclusively with master stonemasons, multi-generational cabinetmakers, and heritage weavers who treat raw elements as living mediums.
          </p>
        </div>

        {/* Tactile Material Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((mat) => {
            const isSelected = mat.id === activeMaterialId;
            return (
              <div
                key={mat.id}
                onMouseEnter={() => setActiveMaterialId(mat.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-500 bg-[#231812] shadow-xl ${
                  isSelected
                    ? 'border-[#FFDBB5] shadow-[0_10px_30px_-5px_rgba(255,219,181,0.25)]'
                    : 'border-[#603F26]/40 hover:border-[#FFDBB5]/50'
                }`}
              >
                {/* Macro Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231812] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#140D09]/80 backdrop-blur-md border border-[#FFDBB5]/20 text-[10px] font-mono uppercase tracking-widest text-[#FFDBB5]">
                      {mat.category}
                    </span>
                  </div>
                </div>

                {/* Material Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-[#FFEAC5] group-hover:text-[#FFDBB5] transition-colors">
                      {mat.name}
                    </h3>
                  </div>
                  
                  <span className="text-xs font-mono text-[#FFEAC5]/50 block">
                    Origin: {mat.origin}
                  </span>

                  <p className="text-xs text-[#FFEAC5]/70 font-sans leading-relaxed">
                    {mat.description}
                  </p>

                  <div className="pt-3 border-t border-[#603F26]/30 text-[11px] text-[#FFDBB5] font-sans italic">
                    <span>{mat.textureNote}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
