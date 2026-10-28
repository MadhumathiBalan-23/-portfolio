import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS", highlight: true },
    ],
  },
  {
    category: "Backend Development",
    description: "Architecting secure, scalable APIs and server-side business logic.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "C#", highlight: true },
      { name: "ASP.NET MVC" },
      { name: ".NET Web API", highlight: true },
      { name: "REST API Development", highlight: true },
    ],
  },
  {
    category: "Mobile Development",
    description: "Creating performant cross-platform mobile experiences.",
    skills: [
      { name: "React Native", highlight: true },
    ],
  },
  {
    category: "Database Systems",
    description: "Designing relational schemas, queries, and document stores.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "SQL Server" },
      { name: "MongoDB" },
    ],
  },
  {
    category: "Developer Tools & Workflow",
    description: "Version control, API documentation, and UI design workflows.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Swagger" },
      { name: "Figma" },
    ],
  },
];
