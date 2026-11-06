export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  secondaryImage?: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  keyFocus: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  origin: string;
  category: string;
  description: string;
  textureNote: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  title: string;
  projectType: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

