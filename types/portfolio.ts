// types/portfolio.ts

export type AccentColor = 'blue' | 'purple' | 'emerald' | 'zinc';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // Lucide icon name (e.g., 'Github', 'Linkedin', 'Mail', 'Phone', 'MessageSquare')
  displayValue: string;
  isPrimary?: boolean;
}

export interface AvailabilityBadge {
  text: string;
  isActive: boolean;
  location: string;
}

export interface HeroData {
  name: string;
  title: string;
  availabilityBadge: AvailabilityBadge;
  valueProposition: string;
  tagline: string;
  cvDownloadUrl: string;
  socialLinks: SocialLink[];
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface StoryStat {
  label: string;
  value: string;
  detail: string;
}

export interface StorytellingSection {
  title: string;
  subtitle: string;
  paragraphs: string[];
  principles: EngineeringPrinciple[];
  stats: StoryStat[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail?: string;
}

export type TechCategory = 'frontend' | 'backend' | 'ai' | 'data' | 'tools';

export interface ProjectTechItem {
  name: string;
  category: TechCategory;
}

export interface ProjectArchitecture {
  overview: string;
  keyPoints: string[];
}

export interface TechnicalProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  accentColor: AccentColor;
  summary: string;
  problem: string;
  solutionArchitecture: ProjectArchitecture;
  metrics: ProjectMetric[];
  techStack: ProjectTechItem[];
  links: {
    liveUrl?: string;
    githubUrl?: string;
    docsUrl?: string;
  };
  highlighted: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string;
  description: string;
  responsibilities?: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  isHighlighted?: boolean;
  level?: 'Avanzado' | 'Experto' | 'Dominio Profesional' | string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  accentColor: AccentColor;
  icon: string;
  skills: SkillItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  location: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: StorytellingSection;
  projects: TechnicalProject[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  contact: ContactInfo;
}
