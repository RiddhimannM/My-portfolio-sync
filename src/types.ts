export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  notes?: string;
  achievements: string[];
  technologies: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  impact?: string;
  technologies: string[];
  category: 'Automation' | 'API & NLP' | 'API Chaining' | 'Monitoring & DevOps' | string;
  codeSnippet?: string;
  demoType?: 'jenkins' | 'api-chain' | 'cloudwatch';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  accentColor: string;
  keyProjects: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  icon: 'flask' | 'badge' | 'award';
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}
