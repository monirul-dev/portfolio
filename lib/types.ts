export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  status: "Production" | "In Development" | "Completed";
  description: string;
  technologies: string[];
  image?: string;
  featured?: boolean;
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