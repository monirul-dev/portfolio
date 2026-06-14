import {
  Metric,
  Project,
  Experience,
  SkillGroup,
} from "@/lib/types";

export const profile = {
  name: "Monirul Islam",
  title: "Power Platform Developer | Data Engineer",
  tagline:
    "Building business applications, automating workflows, and engineering modern data platforms.",
  email: "monirul@monirulislam.dev",
  github: "https://github.com/monirul-dev",
  linkedin: "https://www.linkedin.com/in/monirul-dev/",
};

export const metrics: Metric[] = [
  {
    value: "2+",
    label: "Years in Production",
  },
  {
    value: "30+",
    label: "Data Pipelines Automated",
  },
  {
    value: "99+",
    label: "Database Tables Integrated",
  },
  {
    value: "30+",
    label: "Daily Active Users Supported",
  },
];

export const about = {
  title: "About Me",
  paragraphs: [
    "I am a Power Platform Developer and Data Engineer with a background in Computer Science and a long-standing fascination with problem-solving and systems thinking.",
    "My career has been shaped less by specific technologies and more by opportunities to solve real-world challenges. I began working on production Power Platform applications supporting healthcare operations, gained experience modernizing enterprise data platforms through SQL Server to Snowflake migration projects, and later expanded into workflow automation and data engineering.",
    "Today, I work across Power Platform, Snowflake, Python, Prefect, and business intelligence solutions, helping organizations automate processes, integrate data, and build reliable systems that deliver value at scale.",
  ],
};

export const services = [
  {
    title: "Business Applications",
    description:
      "Building production-ready applications that streamline operations and improve user workflows.",
    items: [
      "Power Apps",
      "Model-Driven Apps",
      "Power BI",
    ],
  },

  {
    title: "Workflow Automation",
    description:
      "Reducing manual effort through automation, orchestration, and system integration.",
    items: [
      "Prefect",
      "REST APIs",
      "ETL / ELT",
      "Process Automation",
    ],
  },

  {
    title: "Data Engineering",
    description:
      "Designing and maintaining reliable data platforms and integration pipelines.",
    items: [
      "Snowflake",
      "SQL Server",
      "Data Pipelines",
      "Data Integration",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Healthcare Patient Management System",

    status: "Production",

    description:
      "Enterprise healthcare management platform supporting patient records, workflow automation, and operational processes used by healthcare teams on a daily basis.",

    technologies: [
      "Power Apps",
      "Power Automate",
      "Power BI",
    ],
  },

  {
    title: "SQL Server → Snowflake Migration Framework",

    status: "Production",

    description:
      "Migrated enterprise workloads from SQL Server to Snowflake, modernizing data infrastructure and deployment workflows while improving maintainability.",

    technologies: [
      "Snowflake",
      "SQL Server",
      "Python",
      "Flyway",
    ],
  },

  {
    title: "Automated Data Pipeline Platform",

    status: "In Development",

    description:
      "Automated ingestion, transformation, and reporting workflows using modern orchestration and data engineering tools.",

    technologies: [
      "Python",
      "Prefect",
      "Snowflake",
      "Power BI",
    ],
  },

  {
    title: "Staff Scheduling & Coverage Dashboard",

    status: "In Development",

    description:
      "Workforce scheduling and staffing visibility solution combining Power Apps, Snowflake, and Power BI.",

    technologies: [
      "Power Apps",
      "Snowflake",
      "Power BI",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Ctrends Software & Services Ltd.",
    title: "Software Developer Intern",
    period: "Sep 2022 - Dec 2022",
    description: [
      "Developed backend features and REST APIs using Spring Boot.",
      "Participated in feature development, testing, and code review.",
      "Worked with senior developers in an Agile development environment.",
    ],
  },
  {
    company: "DSK LABS",
    title: "Power Platform Developer | Data Engineer",
    period: "Aug 2023 - Present",
    description: [
      "Built and maintained production healthcare applications using Microsoft Power Platform.",
      "Designed Snowflake data pipelines and automated data workflows.",
      "Worked on SQL Server to Snowflake migration initiatives.",
      "Delivered reporting and analytics solutions with Power BI.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Power Platform",
    skills: [
      "Power Apps Canvas",
      "Power Apps Model-Driven",
      "Power BI",
      "Azure Functions",
    ],
  },

  {
    category: "Data Engineering",
    skills: [
      "Snowflake",
      "Prefect",
      "Data Pipelines",
      "Workflow Automation",
      "ETL / ELT",
    ],
  },

  {
    category: "Databases",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
    ],
  },

  {
    category: "Backend & Tools",
    skills: [
      "Python",
      "Git",
      "Linux",
      "REST APIs",
    ],
  },
];

export const testimonial = {
  quote:
    "Monirul has consistently demonstrated the ability to take ownership of complex technical challenges and deliver reliable solutions. From Power Platform applications supporting daily business operations to large-scale data engineering and automation initiatives, he approaches every project with professionalism, strong problem-solving skills, and a commitment to quality. What stands out most is his willingness to learn new technologies when projects demand it and his ability to apply them effectively in production environments.",

  author: "Khurram Khan",

  role: "CEO, DSK LABS",
};

export const currentFocus = [
  "Advanced Snowflake Engineering",
  "Modern Data Platforms",
  "Workflow Orchestration",
  "AI-Assisted Automation",
];

export const principles = [
  {
    title: "Reliability",
    description:
      "Building systems that continue to work long after deployment.",
  },

  {
    title: "Automation",
    description:
      "Reducing repetitive work through thoughtful engineering.",
  },

  {
    title: "Simplicity",
    description:
      "Choosing practical solutions over unnecessary complexity.",
  },
];