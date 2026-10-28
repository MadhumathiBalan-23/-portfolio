export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface ProfileData {
  greeting: string;
  name: string;
  role: string;
  experienceYears: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  aboutTitle: string;
  aboutText: string;
  resumeUrl: string;
  social: SocialLinks;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  designation: string;
  period: string;
  location: string;
  projectTitle: string;
  description: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  gradeLabel?: string;
  status?: string;
}
