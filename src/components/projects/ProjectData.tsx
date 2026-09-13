export interface Project {
  title: string;
  kind: "Professional" | "Personal" | "Academic";
  category: string[];
  description: string;
  detail: string;
  image?: string;
  link?: string;
  github?: string;
  metric?: string;
  metricLabel?: string;
}

export const ProjectData: Project[] = [
  {
    title: "Television programme management",
    kind: "Professional",
    category: ["Enterprise", "Database optimisation"],
    description:
      "Making a complex enterprise workflow faster and easier to maintain.",
    detail:
      "Translated functional specifications into detailed designs, consolidated duplicated logic, and revised database queries to retrieve only the required data. Reduced transaction processing time by approximately 70% through code refactoring and query optimisation.",
    metric: "~70%",
    metricLabel: "reduction in transaction processing time",
  },
  {
    title: "Mediscan",
    kind: "Academic",
    image: "/png/mediscan.png",
    category: ["Python", "Next.js", "React Native", "TypeScript"],
    description: "An AI-driven product search assistant for web and mobile.",
    detail:
      "Designed the user experience in Figma and developed web and mobile interfaces for a healthcare product search application, with a focus on maintainable frontend architecture and clearer user flows.",
    github: "https://github.com/hikaru028/mediscan",
  },
  {
    title: "Cloud architecture for sales",
    kind: "Academic",
    category: ["AWS", "CloudFormation"],
    description:
      "Cloud infrastructure designed for availability and disaster recovery.",
    detail:
      "Used Route 53, multiple Availability Zones, and Elastic Load Balancing to distribute traffic. Automated infrastructure provisioning with CloudFormation to make environments repeatable and easier to maintain.",
  },
  {
    title: "Organisation website",
    kind: "Professional",
    category: ["Angular", "TypeScript", "Node.js"],
    description: "An in-house company website with real-time communication.",
    detail:
      "Implemented the website layout, frontend features, and real-time chat integration, connecting Angular and TypeScript interfaces with a Node.js backend.",
  },
  {
    title: "Hikaru’s portfolio",
    kind: "Personal",
    image: "/png/portfolio.png",
    category: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "A home for my work, experience, and ongoing learning.",
    detail:
      "A responsive portfolio built with Next.js and TypeScript, featuring project filtering, light and dark themes, and a contact form. The image shows the earlier design.",
    github: "https://github.com/hikaru028/portfolio",
  },
  {
    title: "X-clone",
    kind: "Personal",
    image: "/png/x-clone.png",
    category: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
    description: "A full-stack social application inspired by Twitter.",
    detail:
      "Built with an Express and MongoDB backend and a React frontend using Vite.",
    github: "https://github.com/hikaru028/Twitter-Clone",
  },
  {
    title: "Kalah",
    kind: "Academic",
    image: "/png/kalah.png",
    category: ["Java"],
    description: "Exploring maintainable software design through a board game.",
    detail:
      "A Java coursework project focused on software design principles and maintainability.",
    github: "https://github.com/hikaru028/Kalah-in-Java",
  },
  {
    title: "Othello",
    kind: "Academic",
    category: ["C#", ".NET"],
    description: "A multiplayer board game with server-coordinated play.",
    detail:
      "A C# and .NET 7 application whose server pairs players and coordinates the exchange of game moves.",
    github: "https://github.com/hikaru028/Othello-in-CSharp",
  },
];
