import type { Project, Service, ProcessStage, MaterialItem, Testimonial, FAQItem } from '../types';

export const HERO_SLIDES = [
  {
    id: 'slide-01',
    src: '/images/hero/hero-01-dark.jpg',
    title: 'Architectural Shadow & Cove Light',
    lightingCondition: 'Dark Cinematic Architectural Lighting',
    time: '21:45 PM',
    ambientNote: 'Sculpted linear LED coves grazing geometric American walnut panelling with accent pendant intimacy.',
  },
  {
    id: 'slide-02',
    src: '/images/hero/hero-02-golden.jpg',
    title: 'Raking Golden Hour Solarium',
    lightingCondition: 'Rich Golden-Hour Lighting',
    time: '18:15 PM',
    ambientNote: 'Low-angle warm raking sun cutting across fluted chevron woodwork and honed marble reflections.',
  },
  {
    id: 'slide-03',
    src: '/images/hero/hero-03-daylight.jpg',
    title: 'Pristine Natural Daylight',
    lightingCondition: 'Bright Natural Daylight',
    time: '11:30 AM',
    ambientNote: 'High CRI diffused daylight revealing organic linen textiles, olive velvets, and matte lacquers.',
  },
  {
    id: 'slide-04',
    src: '/images/hero/hero-04-warm.jpg',
    title: 'Warm Ambient Evening Radiance',
    lightingCondition: 'Warm Ambient Interior Lighting',
    time: '20:00 PM',
    ambientNote: '2700K warm incandescent glow from tripod luminaire and brass pendants embracing comfortable domesticity.',
  },
];

export const STUDIO_INTRO = {
  eyebrow: 'ESTABLISHED 2018 — ARCHITECTURAL STUDIO',
  heading: 'Designing Spaces.\nCreating Experiences.',
  statement:
    'We believe interior architecture is not an ornamentation applied to a space, but an intimate choreography of light, volume, material, and human emotion.',
  description:
    'INNOVIST operates at the confluence of architectural rigor and sensory luxury. From private hillside residences in Geneva to penthouses in Manhattan, we craft bespoke living environments defined by meticulous millwork, rare stonework, and lighting design that transforms throughout the diurnal cycle.',
  stats: [
    { value: '14+', label: 'Years of Practice' },
    { value: '120+', label: 'Private Residences' },
    { value: '18', label: 'International Awards' },
    { value: '100%', label: 'Turnkey Execution' },
  ],
  mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
  secondaryImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
};

export const PHILOSOPHY = {
  quote: 'Great interiors are not simply designed. They are thoughtfully experienced.',
  author: 'Julian Thorne',
  role: 'Founder & Principal Architect, INNOVIST',
  principles: [
    {
      no: '01',
      title: 'Material Honesty',
      desc: 'Raw patinated metals, unpolished travertine, and solid walnut that age gracefully with time.',
    },
    {
      no: '02',
      title: 'Diurnal Lighting Choreography',
      desc: 'Crafting spaces that breathe with daylight and convert into atmospheric sanctuaries after dusk.',
    },
    {
      no: '03',
      title: 'Spatial Silence',
      desc: 'Removing the unnecessary until what remains possesses undeniable gravitas and calm.',
    },
  ],
  bgImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
};

export const SERVICES: Service[] = [
  {
    id: 'residential',
    index: '01',
    title: 'Residential Interior Design',
    tagline: 'Private sanctuaries crafted around daily rituals',
    description:
      'Complete architectural transformation of luxury villas, penthouses, and private estates. We craft tailored spatial narratives honoring family dynamics and personal art collections.',
    deliverables: ['Custom Layout Plans', 'Material Palettes', 'Art Curation', 'Full Furnishing Schemes'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'commercial',
    index: '02',
    title: 'Commercial Interior Design',
    tagline: 'Flagship corporate headquarters & boutique hospitality',
    description:
      'High-impact brand environments designed to inspire teams and captivate clientele, balancing workplace ergonomics with museum-grade aesthetics.',
    deliverables: ['Executive Boardrooms', 'Acoustic Treatments', 'Hospitality Lounges', 'Biophilic Integration'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'space-planning',
    index: '03',
    title: 'Space Planning & Architecture',
    tagline: 'Structural flow, volume optimization and circulation',
    description:
      'Redefining floor plates to maximize natural daylight exposure, eliminate dead corridors, and establish intuitive transitions between public entertaining and private sanctuaries.',
    deliverables: ['Circulation Diagrams', 'Zoning Studies', 'Demolition & Framing Plans', 'Sightline Audits'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'custom-furniture',
    index: '04',
    title: 'Custom Furniture & Joinery',
    tagline: 'Bespoke millwork engineered to millimetric precision',
    description:
      'One-of-a-kind cabinetry, fluted wall installations, sculpted dining tables, and concealed storage systems hand-crafted by master cabinetmakers.',
    deliverables: ['1:1 Detail Shop Drawings', 'Timber Selection', 'Hardware Specifications', 'Installation Supervision'],
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'material-selection',
    index: '05',
    title: 'Material & Finish Selection',
    tagline: 'Tactile materiality sourced from European quarries',
    description:
      'Curating harmonious pairings of bookmatched Italian marble, French wire-brushed oak, hand-troweled lime plasters, and bespoke woven textiles.',
    deliverables: ['Physical Mood Trays', 'Performance Testing', 'Quarry Inspections', 'Finish Schedules'],
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'lighting-design',
    index: '06',
    title: 'Architectural Lighting Design',
    tagline: 'Layered illumination transforming day into evening',
    description:
      'Strategic integration of recessed architectural fixtures, invisible cove grazing, museum-grade art illumination, and programmable scene controllers.',
    deliverables: ['Lux Level Calculations', 'Color Temp Tuning (2400K-3000K)', 'Fixture Schedules', 'Smart Automation Schemes'],
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'renovation-turnkey',
    index: '07',
    title: 'Renovation & Turnkey Solutions',
    tagline: 'Flawless execution from foundation to final reveal',
    description:
      'End-to-end site management encompassing contractor coordination, regulatory permits, procurement, site supervision, and white-glove handover.',
    deliverables: ['General Contracting Liaison', 'Budget Management', 'Timeline Control', 'Defect Rectification Guarantee'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: '3d-visualization',
    index: '08',
    title: '3D Photorealistic Visualization',
    tagline: 'Cinematic virtual previews with accurate photometric lighting',
    description:
      'Ultra-high fidelity CGI renderings and virtual reality walkthroughs allowing clients to inspect finishes, reflections, and shadow play prior to demolition.',
    deliverables: ['4K Photorealistic Renders', 'Diurnal Lighting Simulations', '360 Panoramic Tours', 'Material Swap Options'],
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'villa-solarium',
    title: 'Villa Solarium',
    category: 'Modern Residential Villa',
    location: 'Zurich, Switzerland',
    year: '2025',
    area: '6,400 sq.ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description:
      'A hillside estate characterized by monumental glass walls, cantilevered limestone terraces, and a bespoke geometric acoustic ceiling engineered from Swiss larch.',
    highlights: ['Cantilevered travertine fireplace', 'Concealed motorized glass partitions', 'Integrated 24V perimeter cove lighting'],
  },
  {
    id: 'obsidian-penthouse',
    title: 'The Obsidian Residence',
    category: 'Luxury Living Room',
    location: 'Milan, Italy',
    year: '2024',
    area: '4,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    description:
      'An intimate triplex penthouse featuring smoked eucalyptus wall paneling, curved bouclé upholstery, and custom gunmetal architectural track lighting.',
    highlights: ['Custom curved sofa in Italian bouclé', 'Bookmatched Nero Marquina marble island', 'Smart Lutron scene controls'],
  },
  {
    id: 'lumina-suite',
    title: 'Lumina Master Suite',
    category: 'Contemporary Bedroom',
    location: 'Kyoto, Japan',
    year: '2025',
    area: '1,850 sq.ft',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
    description:
      'A serene retreat synthesizing Japanese wabi-sabi principles with contemporary European joinery, featuring hand-cast washi wall panels and low-profile platform bed.',
    highlights: ['Handmade shoji sliding screens', 'Floating hinoki wood nightstands', 'Concealed ambient baseboard glow'],
  },
  {
    id: 'atelier-culinaire',
    title: 'Atelier Culinaire V',
    category: 'Premium Modular Kitchen',
    location: 'Paris, France',
    year: '2024',
    area: '1,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=85',
    description:
      'Monolithic kitchen architecture sculpted from brushed patinated bronze and fluted Calacatta marble, equipped with fully concealed Gaggenau appliances.',
    highlights: ['Motorized touch-latch bronzed fronts', 'Integrated flush herb-growing troughs', 'Zero-seam marble sink carving'],
  },
  {
    id: 'aurelia-hq',
    title: 'Aurelia Capital Headquarters',
    category: 'Luxury Office Interior',
    location: 'London, Mayfair',
    year: '2025',
    area: '8,900 sq.ft',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    description:
      'Executive financial headquarters combining acoustic felt baffles, saddle-leather boardroom tables, and private client lounges with museum-grade curation.',
    highlights: ['Custom acoustic micro-perforated timber walls', 'Leather wrapped credenzas', 'Biophilic internal courtyard'],
  },
  {
    id: 'mono-club',
    title: 'The Vault Lounge & Club',
    category: 'Commercial Interior',
    location: 'Manhattan, New York',
    year: '2024',
    area: '5,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85',
    description:
      'Subterranean members club featuring arched brick ceilings restored with raw brass reveals, amber back-lit onyx bar, and bespoke velvet banquettes.',
    highlights: ['35-foot monolithic back-lit onyx bar', 'Bespoke dim-to-warm architectural pendants', 'Acoustic velvet banquettes'],
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    duration: 'Weeks 1 – 2',
    description:
      'We begin with an in-depth dialogue exploring your lifestyle, aesthetic inclinations, functional requirements, and the unique architectural context of your property.',
    deliverables: ['Client Vision Document', 'Site Survey & Laser Scan', 'Budget & Timeline Envelope'],
    keyFocus: 'Deep listening and spatial opportunity diagnosis.',
  },
  {
    step: '02',
    title: 'Concept & Planning',
    duration: 'Weeks 3 – 5',
    description:
      'Developing initial spatial layout schemes, circulation flows, volume studies, and high-level mood boards establishing the atmospheric direction of the home.',
    deliverables: ['Schematic Floor Plans', 'Concept Trays & Mood Boards', 'Zoning & Circulation Studies'],
    keyFocus: 'Establishing flow and proportion before details.',
  },
  {
    step: '03',
    title: 'Material Selection',
    duration: 'Weeks 6 – 8',
    description:
      'Sourcing tangible samples from European quarries, timber mills, and textile ateliers. We test materials under real site lighting conditions to ensure absolute harmony.',
    deliverables: ['Physical Sample Trays', 'Stone & Wood Quarry Allocations', 'Finish & Hardware Palette'],
    keyFocus: 'Tactility, longevity, and natural patina behavior.',
  },
  {
    step: '04',
    title: 'Design Development',
    duration: 'Weeks 9 – 12',
    description:
      'Translating concepts into comprehensive architectural tender packages, millwork shop drawings, photorealistic 3D renders, and MEP lighting coordination.',
    deliverables: ['Full Architectural Tender Drawing Set', 'Photorealistic 4K Visualizations', 'Bespoke Millwork Details'],
    keyFocus: 'Millimetric precision and contractor-ready documentation.',
  },
  {
    step: '05',
    title: 'Execution & Management',
    duration: 'Months 4 – 10',
    description:
      'Rigorous on-site supervision, artisan coordination, custom fabrication quality audits, and weekly photographic progress reporting to client representatives.',
    deliverables: ['Weekly Site Inspections', 'Shop Drawing Approvals', 'Procurement & Logistics Tracking'],
    keyFocus: 'Zero-compromise fidelity to the architectural drawings.',
  },
  {
    step: '06',
    title: 'Final Reveal & Handover',
    duration: 'Final Week',
    description:
      'White-glove styling, art curation, lighting scene calibration, custom fragrance profiling, and comprehensive owner manual handover for seamless occupancy.',
    deliverables: ['White-Glove Styling & Dressing', 'Scene Controller Programming', 'O&M Maintenance Manual'],
    keyFocus: 'An unforgettable emotional walkthrough into your new reality.',
  },
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'mat-01',
    name: 'American Black Walnut',
    origin: 'Appalachian Highlands, USA',
    category: 'Timber & Millwork',
    description:
      'Kiln-dried quarter-sawn walnut chosen for its deep espresso tones, fine straight grain, and satin oil finish that warms under artificial lighting.',
    textureNote: 'Deep warm grain with natural chatoyancy and organic variation.',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'mat-02',
    name: 'Calacatta Vagli Marble',
    origin: 'Apuan Alps, Carrara, Italy',
    category: 'Natural Stone',
    description:
      'Rare brecciated Italian marble featuring bold taupe and gold veining on a warm porcelain-white background, honed to a velvety leathered finish.',
    textureNote: 'Smooth matte hone with tactile crystalline depth and subtle micro-relief.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'mat-03',
    name: 'Navona Travertine',
    origin: 'Tivoli, Rome, Italy',
    category: 'Sedimentary Stone',
    description:
      'Cross-cut Roman travertine characterized by soft ivory banding and organic micro-cavities left unfilled for architectural authenticity.',
    textureNote: 'Earthy, porous, and cool to touch with architectural dignity.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'mat-04',
    name: 'Antiqued Patinated Brass',
    origin: 'Birmingham, United Kingdom',
    category: 'Architectural Metals',
    description:
      'Solid virgin brass chemically treated with hand-rubbed hepatic liver of sulfur to achieve a rich, living dark bronze that continues to oxidize softly.',
    textureNote: 'Silky metallic hand with warm undertones that resist fingerprinting.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'mat-05',
    name: 'Belgian Raw Heavy Linen',
    origin: 'Flanders, Belgium',
    category: 'Textiles & Soft Furnishings',
    description:
      'Grown and woven without synthetic finishes, this heavy-weight flax linen brings organic draping and acoustic absorption to drapery and upholstered panels.',
    textureNote: 'Subtle slub structure with relaxed natural drape and thermal breathability.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'mat-06',
    name: 'Smoked Bronze Architectural Glass',
    origin: 'Murano, Italy',
    category: 'Glass & Partitions',
    description:
      'Low-iron float glass infused with metallic oxides to create a warm translucent scrim that modulates daylight and creates reflective optical depth.',
    textureNote: 'Flawless optical flatness with warm amber transmission.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=85',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    quote:
      'INNOVIST did not merely decorate our residence; they completely re-choreographed how our family lives. The way daylight transitions across the wooden wall panels throughout the afternoon is pure poetry.',
    client: 'Alexander & Elena Vance',
    title: 'Private Estate Owners',
    projectType: 'Villa Solarium, Zurich',
    location: 'Zurich, Switzerland',
  },
  {
    id: 't-02',
    quote:
      'Their obsession with millimetric joinery and lighting temperatures set them apart from any studio in Europe. Walking into our penthouse after sunset feels like entering a sanctuary detached from the noise of Milan.',
    client: 'Matteo Bellini',
    title: 'Managing Director, Bellini Art Collection',
    projectType: 'The Obsidian Residence',
    location: 'Milan, Italy',
  },
  {
    id: 't-03',
    quote:
      'From the very first 3D visual concept to the final white-glove reveal, every deadline and budget commitment was honored with exceptional transparency. A benchmark of modern luxury execution.',
    client: 'Dr. Sophia Sterling',
    title: 'Partner, Sterling & Co.',
    projectType: 'Aurelia Headquarters',
    location: 'London, Mayfair',
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'Services',
    question: 'What services do you provide?',
    answer:
      'INNOVIST is a comprehensive interior architecture and design atelier. We provide end-to-end solutions including spatial architecture, bespoke furniture & joinery design, material selection, lighting engineering, 3D photorealistic rendering, art advisory, and complete turnkey general construction management.',
  },
  {
    category: 'Execution',
    question: 'Do you offer complete turnkey solutions?',
    answer:
      'Yes. Over 85% of our private clients select our Full Turnkey Delivery. In this model, INNOVIST oversees all general contractor bidding, permits, bespoke fabrication, MEP coordination, white-glove styling, and final handover, providing a single point of accountability.',
  },
  {
    category: 'Process',
    question: 'How does the consultation process work?',
    answer:
      'The process begins with an exploratory consultation (in-person at our studio or on-site). We review your architectural drawings or physical space, discuss lifestyle needs, budget parameters, and design aspirations. Following this, we present an initial Vision Blueprint and scope proposal before formal engagement.',
  },
  {
    category: 'Customization',
    question: 'Can clients customize every detail of the design?',
    answer:
      'Absolute customization is our foundational philosophy. We do not use off-the-shelf catalogues. Every cabinet, fluted wall panel, light fixture height, and stone slab is individually designed and fabricated to your project specifications and lifestyle habits.',
  },
  {
    category: 'Timeline',
    question: 'What is the typical project timeline?',
    answer:
      'Project durations depend on architectural scale. Concept and design documentation typically require 8 to 12 weeks. Turnkey construction and custom millwork installation usually range from 4 to 9 months for residential apartments, and 9 to 14 months for custom architectural villas.',
  },
  {
    category: 'Engagement',
    question: 'How can a client start a project?',
    answer:
      'You can initiate your inquiry by clicking "START YOUR PROJECT" or "Let\'s Talk" on our website. You will be prompted to submit brief details regarding your project location, timeline, and scope. Our studio director will schedule an introductory video or in-person briefing within 24 hours.',
  },
];
