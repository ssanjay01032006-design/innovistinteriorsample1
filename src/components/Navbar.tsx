import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#studio-intro' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#140D09]/90 backdrop-blur-md border-b border-[#603F26]/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3.5'
            : 'bg-transparent border-b border-transparent shadow-none py-6 lg:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo using User's Uploaded Logo (Image 3) */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3 text-[#FFEAC5] tracking-widest focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#FFDBB5]/50 shadow-md transition-transform duration-500 group-hover:scale-105 flex-shrink-0 bg-[#1B120C]">
              <img
                src="/images/innovist-logo.jpg"
                alt="INNOVIST Interior Design Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-[0.25em] text-[#FFEAC5] group-hover:text-[#FFDBB5] transition-colors">
                INNOVIST
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#FFDBB5]/70 -mt-1 font-sans">
                Interior Design
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-[#FFEAC5]/70 hover:text-[#FFEAC5] transition-colors duration-300 relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FFDBB5] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-5">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium border border-[#FFDBB5]/35 text-[#FFEAC5] bg-[#FFDBB5]/10 hover:bg-[#FFDBB5] hover:text-[#140D09] hover:border-[#FFDBB5] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,219,181,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-lg text-[#FFEAC5]/80 hover:text-[#FFEAC5] border border-[#FFDBB5]/20 hover:border-[#FFDBB5]/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#140D09]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-8 pt-28 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#603F26]/30">
            <img
              src="/images/innovist-logo.jpg"
              alt="Innovist Logo"
              className="w-10 h-10 rounded-full border border-[#FFDBB5]/40 object-cover"
            />
            <div>
              <p className="font-display font-bold text-lg tracking-widest text-[#FFEAC5]">INNOVIST</p>
              <p className="text-[9px] uppercase tracking-widest text-[#FFDBB5]/60 font-sans">Interior Design</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-serif tracking-wide text-[#FFEAC5]/80 hover:text-[#FFDBB5] transition-colors flex items-center justify-between border-b border-[#603F26]/20 pb-2"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#FFDBB5]/40">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#603F26]/40 flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3.5 rounded-full bg-[#FFDBB5] text-[#140D09] font-sans font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#FFEAC5] transition-colors"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <p className="text-center text-xs text-[#FFEAC5]/40 tracking-wider">
            Geneva · Milan · Zurich · London
          </p>
        </div>
      </div>
    </>
  );
};
