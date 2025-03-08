export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: ProjectCategory;
  caseStudy?: {
    problem: string;
    solution: string;
    outcome: string;
  };
}

export type ProjectCategory = 'web' | 'mobile' | 'open-source' | 'ai' | 'all';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: number; // 1-5
}

export type SkillCategory = 'frontend' | 'backend';

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'education' | 'work' | 'certification';
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}