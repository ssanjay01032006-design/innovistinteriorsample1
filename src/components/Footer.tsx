import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { WoodPatternBackground } from './WoodPatternBackground';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#0F0A06] text-[#FFEAC5] pt-16 sm:pt-20 pb-12 border-t border-[#603F26]/40 overflow-hidden">
      {/* Wood Pattern Background with Gaussian Blur & Gradient Effect */}
      <WoodPatternBackground pattern="geometric" blur="lg" opacity={0.25} variant="deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-[#603F26]/30">
          {/* Brand Info with User Uploaded Logo (Image 3) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#FFDBB5]/50 shadow-md flex-shrink-0 bg-[#1B120C]">
                <img
                  src="/images/innovist-logo.jpg"
                  alt="INNOVIST Interior Design Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-[0.25em] text-[#FFEAC5]">
                  INNOVIST
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFDBB5]/70 -mt-1 font-sans">
                  Interior Design Atelier
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFEAC5]/70 font-sans leading-relaxed max-w-sm">
              International interior architecture atelier sculpting bespoke private residences, executive corporate environments, and timeless spatial sanctuaries through natural timber and stone craftsmanship.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#FFEAC5]/50">
              <span>EST. 2018</span>
              <span>·</span>
              <span>SWISS &amp; ITALIAN PRACTICE</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFDBB5] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-sans text-[#FFEAC5]/70">
              <li>
                <a href="#hero" className="hover:text-[#FFEAC5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#studio-intro" className="hover:text-[#FFEAC5] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#FFEAC5] transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FFEAC5] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FFEAC5] transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFEAC5] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFDBB5] block">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-xs tracking-wide font-sans text-[#FFEAC5]/70">
              <li>Residential Architecture</li>
              <li>Commercial &amp; Hospitality</li>
              <li>Custom Millwork &amp; Joinery</li>
              <li>Architectural Lighting</li>
              <li>Stone &amp; Material Procurement</li>
              <li>Turnkey Construction Oversight</li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFDBB5] block">
              Presence
            </span>
            <ul className="space-y-2.5 text-xs font-sans text-[#FFEAC5]/70">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFEAC5] transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFDBB5]/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://archdaily.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFEAC5] transition-colors flex items-center justify-between"
                >
                  <span>ArchDaily</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFDBB5]/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFEAC5] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFDBB5]/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFEAC5] transition-colors flex items-center justify-between"
                >
                  <span>Pinterest</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFDBB5]/60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFEAC5]/50 font-mono">
          <p>© {new Date().getFullYear()} INNOVIST Interior Design Atelier. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FFDBB5] transition-colors"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
