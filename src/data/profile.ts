import { ProfileData, FeatureCard } from "@/types/portfolio";

export const profileData: ProfileData = {
  greeting: "HI, I'M",
  name: "Madhumathi B",
  role: "Full Stack Software Developer",
  experienceYears: "1.5 Years",
  location: "Erode, Tamil Nadu, India",
  email: "bmadhumathi23@gmail.com",
  phone: "+91 9025255639",
  bio: "Building practical, reliable, and user-friendly software solutions. Experienced in developing web and mobile applications, integrating APIs, managing databases, and working on business-focused ERP systems.",
  aboutTitle: "A Passionate Software Developer",
  aboutText:
    "I am a Software Developer with 1.5 years of experience at Navanala Technologies Private Limited. I enjoy developing web and mobile applications, integrating APIs, managing databases, and building user-friendly solutions. I am continuously learning new technologies and solving real-world problems through clean and efficient code.",
  resumeUrl: "/Madhumathi_B_Resume.pdf",
  social: {
    github: "https://github.com/MadhumathiBalan-23",
    linkedin: "https://linkedin.com/in/madhumathi-b", // Update with your actual LinkedIn profile URL
    email: "mailto:bmadhumathi23@gmail.com",
    phone: "tel:+919025255639",
  },
};

export const aboutFeatures: FeatureCard[] = [
  {
    title: "Clean Code",
    description:
      "Writing structured, readable, and maintainable code adhering to solid software engineering principles.",
    iconName: "Code2",
  },
  {
    title: "Problem Solving",
    description:
      "Breaking down complex business operations into efficient, robust, and automated workflows.",
    iconName: "Cpu",
  },
  {
    title: "Continuous Learning",
    description:
      "Constantly exploring emerging frameworks, performance patterns, and modern full stack practices.",
    iconName: "Sparkles",
  },
];
