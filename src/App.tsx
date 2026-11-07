import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DesignProcess } from './components/DesignProcess';
import { Craftsmanship } from './components/Craftsmanship';
import { WoodPatternBackground } from './components/WoodPatternBackground';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';
import type { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleExploreWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#140D09] text-[#FFEAC5] selection:bg-[#FFDBB5] selection:text-[#140D09] overflow-x-hidden">
      {/* Scroll-Aware Sticky Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Section 01: Hero Slideshow with 4 Lighting States */}
        <Hero onExploreWork={handleExploreWork} />

        {/* Section 02: Studio Introduction */}
        <StudioIntro />

        {/* Section 03: Design Philosophy */}
        <Philosophy />

        {/* Section 04: Our Services */}
        <Services onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 05: Featured Projects */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 
          Sections 06 & 07: Single Continuous Striped Wooden Pattern Background
          Both sections share the exact same background image instance so the vertical slats
          run completely uninterrupted from top to bottom with zero horizontal split line.
          - Soft edge on the TOP of Methodology & Execution (Design Process).
          - Soft edge on the BOTTOM of Sensory Materiality (Craftsmanship).
          - No soft edge between them.
        */}
        <div className="relative bg-[#140D09] overflow-hidden">
          <WoodPatternBackground
            pattern="striped"
            blur="none"
            opacity={0.65}
            overlay="tint"
            softEdges="both"
          />

          {/* Section 06: Design Process */}
          <DesignProcess hideBackground />

          {/* Section 07: Craftsmanship & Materials */}
          <Craftsmanship hideBackground />
        </div>

        {/* Section 08: Testimonials */}
        <Testimonials />

        {/* Section 09: FAQ */}
        <FAQ />

        {/* Section 10: Final Call to Action */}
        <ContactCTA onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Interactive Project Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => {
          setSelectedProject(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Interactive Consultation / Commission Briefing Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default App;
