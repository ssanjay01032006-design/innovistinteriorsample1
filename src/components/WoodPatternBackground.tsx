import React from 'react';

export interface WoodPatternBackgroundProps {
  pattern?: 'geometric' | 'herringbone' | 'sculpted' | 'striped' | 'spiral';
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'glass';
  opacity?: number;
  className?: string;
  overlay?: 'glass' | 'tint' | 'minimal' | 'gradient';
  variant?: 'dark' | 'mocha' | 'deep';
  softEdges?: boolean | 'top' | 'bottom' | 'both' | 'none';
}

const patternSrcMap = {
  geometric: '/images/patterns/wood-geometric.jpg',
  herringbone: '/images/patterns/wood-herringbone.jpg',
  sculpted: '/images/patterns/wood-sculpted.jpg',
  striped: '/images/patterns/wood-striped.jpg',
  spiral: '/images/patterns/wood-spiral.jpg',
};

export const WoodPatternBackground: React.FC<WoodPatternBackgroundProps> = ({
  pattern = 'geometric',
  blur = 'none',
  opacity = 0.55,
  className = '',
  overlay = 'tint',
  variant = 'dark',
  softEdges = false,
}) => {
  const baseBg = variant === 'mocha' ? '#1B120C' : variant === 'deep' ? '#0F0A06' : '#140D09';

  const hasTopSoftEdge = softEdges === true || softEdges === 'both' || softEdges === 'top';
  const hasBottomSoftEdge = softEdges === true || softEdges === 'both' || softEdges === 'bottom';

  let maskImage: string | undefined = undefined;
  if (hasTopSoftEdge && hasBottomSoftEdge) {
    maskImage =
      'linear-gradient(to bottom, transparent 0%, black 160px, black calc(100% - 160px), transparent 100%)';
  } else if (hasTopSoftEdge) {
    maskImage = 'linear-gradient(to bottom, transparent 0%, black 160px, black 100%)';
  } else if (hasBottomSoftEdge) {
    maskImage = 'linear-gradient(to bottom, black 0%, black calc(100% - 160px), transparent 100%)';
  }

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={
        maskImage
          ? {
              WebkitMaskImage: maskImage,
              maskImage: maskImage,
            }
          : undefined
      }
    >
      {/* Crisp, Clearly Visible Wood Pattern Image */}
      <img
        src={patternSrcMap[pattern]}
        alt=""
        loading="lazy"
        className={`w-full h-full object-cover scale-100 will-change-transform ${
          blur === 'sm'
            ? 'blur-[2px]'
            : blur === 'md'
            ? 'blur-[4px]'
            : blur === 'lg'
            ? 'blur-[6px]'
            : blur === 'glass'
            ? 'blur-[1px]'
            : 'filter-none'
        }`}
        style={{ opacity }}
      />

      {/* Overlay Types */}
      {overlay === 'glass' && (
        <div className="absolute inset-0 bg-[#140D09]/50 backdrop-blur-[2px] border-y border-[#FFDBB5]/15" />
      )}

      {overlay === 'tint' && (
        <div className="absolute inset-0 bg-[#140D09]/45" />
      )}

      {overlay === 'minimal' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#140D09]/40 via-transparent to-[#140D09]/40" />
      )}

      {overlay === 'gradient' && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${baseBg} 0%, rgba(20, 13, 9, 0.4) 30%, rgba(20, 13, 9, 0.4) 70%, ${baseBg} 100%)`,
          }}
        />
      )}

      {/* Top Soft Edge Feather Overlay */}
      {hasTopSoftEdge && (
        <div
          className="absolute top-0 left-0 right-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${baseBg} 0%, ${baseBg}cc 35%, ${baseBg}55 70%, transparent 100%)`,
          }}
        />
      )}

      {/* Bottom Soft Edge Feather Overlay */}
      {hasBottomSoftEdge && (
        <div
          className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${baseBg} 0%, ${baseBg}cc 35%, ${baseBg}55 70%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
};
