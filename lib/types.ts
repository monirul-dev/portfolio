export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  status: "Production" | "In Development";
  description: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}