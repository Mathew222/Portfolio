export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  timelineTitle?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  year: string;
  description: string;
  link?: string;
  certificateLink?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  RESEARCH = 'research',
  CERTIFICATES = 'certificates',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact'
}