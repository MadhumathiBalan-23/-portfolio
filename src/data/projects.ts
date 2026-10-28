import { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    id: "spinsuite-erp",
    title: "SpinSuite ERP",
    category: "Enterprise ERP",
    technologies: ["React.js", "TypeScript", "C#", ".NET Web API", "PostgreSQL"],
    description:
      "ERP solution for spinning mill operations covering cotton procurement, quality testing, production, yarn packing, inventory, sales, and dispatch.",
    image: "/images/project-spinsuite.jpg",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full Stack Web Application",
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    description:
      "Shopping application with product search, cart, wishlist, order management, and administrative features.",
    image: "/images/project-ecommerce.jpg",
    featured: true,
  },
  {
    id: "bridal-shop-management",
    title: "Bridal Shop Management System",
    category: "Web Application",
    technologies: ["React.js", "MongoDB"],
    description:
      "Application for collection browsing, appointment booking, order tracking, and inventory management.",
    image: "/images/project-bridal.jpg",
    featured: true,
  },
  {
    id: "student-depression-prediction",
    title: "Student Depression Prediction Model",
    category: "Academic Project",
    technologies: ["Machine Learning", "Python"],
    description:
      "Academic machine learning project to analyze student-related factors and estimate depression risk.",
    image: "/images/project-depression-ml.jpg",
    featured: true,
  },
];
