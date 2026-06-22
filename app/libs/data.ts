import { StaticImageData } from "next/image";
import asiaIpLogo from "../../public/images/logo/asiaip-logo.png";
import mcdoLogo from "../../public/images/logo/mcdo-logo.png";
import mondeLogo from "../../public/images/logo/monde-logo.png";
import nexenLogo from "../../public/images/logo/nexen-logo.webp";
import pikaLogo from "../../public/images/logo/pikapika-logo.png";
import suySingLogo from "../../public/images/logo/suysing-logo.webp";
import unilabLogo from "../../public/images/logo/unilab-logo.webp";
import vivaLogo from "../../public/images/logo/viva-logo.webp";
import boysOfAdvOverview from "../../public/images/projects/boys-of-adv-overview.png";
import boilerplateOverview from "../../public/images/projects/boilerplate-overview.png";
import flowforgeOverview from "../../public/images/projects/flowforge-overview.png";
import taskManagerOverview from "../../public/images/projects/task-manager-overview.png";
import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Network,
  ServerCog,
  ShoppingCart,
  Sparkles,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";

const companies: { name: string; logo: StaticImageData }[] = [
  { name: "Suy Sing", logo: suySingLogo },
  { name: "Viva Communications", logo: vivaLogo },
  { name: "McDonald's Philippines", logo: mcdoLogo },
  { name: "Pika Pika", logo: pikaLogo },
  { name: "Nexen Distribution", logo: nexenLogo },
  { name: "Asia IP", logo: asiaIpLogo },
  { name: "Unilab", logo: unilabLogo },
  { name: "Monde Nissin", logo: mondeLogo },
];

const experience = [
  {
    period: "2024 — Present",
    role: "Senior Software Engineer",
    company: "React Solutions PTY Ltd.",
    mark: "RS",
    summary:
      "Leading backend and full-stack delivery for business-critical CRM, commerce, and integration platforms.",
    contributions: [
      "Led CRM architecture",
      "Built scalable APIs",
      "Improved e-commerce workflows",
      "Mentored developers",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Software Development Lead",
    company: "Halcyon Digital Media Design Inc.",
    mark: "HD",
    summary:
      "Owned architecture, technical delivery, code quality, and stakeholder alignment across business systems.",
    contributions: [
      "Owned technical delivery",
      "Led architecture decisions",
      "Conducted code reviews",
      "Planned Agile delivery",
    ],
  },
  {
    period: "2018 — 2022",
    role: "Software Developer",
    company: "Halcyon Digital Media Design Inc.",
    mark: "HD",
    summary:
      "Built Laravel applications and integrations that translated operational needs into dependable product features.",
    contributions: [
      "Delivered Laravel systems",
      "Integrated third-party services",
      "Designed relational data",
      "Supported production apps",
    ],
  },
];

const projects = [
  {
    number: "01",
    image: boilerplateOverview,
    title: "Freelance Boilerplate",
    kind: "Personal",
    summary:
      "A production-ready full-stack starter kit designed to accelerate client projects with authentication, role-based access, modular architecture, and reusable business features.",
    problem:
      "Starting every project from scratch led to repetitive setup work, inconsistent architecture, and slower delivery timelines for freelance and client applications.",
    solution:
      "Built a reusable boilerplate that provides a scalable foundation with authentication, permissions, notifications, and extensible modules, enabling rapid development and consistent project standards.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Tailwind CSS",
    ],
    features: [
      "Authentication & User Management",
      "Role-Based Access Control (RBAC)",
      "Admin Dashboard",
      "Notification System",
      "File Upload Management",
      "Reusable CRUD Modules",
      "API Architecture",
      "Responsive UI Components",
    ],
    visual: "generator",
  },
  {
    number: "02",
    image: boysOfAdvOverview,
    title: "Boys of ADV",
    kind: "Community Platform",
    summary:
      "A mobile-first community platform that centralizes membership, events, motorcycle builds, partnerships, and real-time engagement for Honda ADV riders.",

    problem:
      "Community operations relied on fragmented communication channels and manual processes, making it difficult to manage memberships, coordinate events, track attendance, and keep members engaged.",

    solution:
      "Built a Progressive Web App that provides a complete digital ecosystem with member administration, event management, QR-based attendance, motorcycle build showcases, partnerships, and push notifications.",

    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "UploadThing",
      "Web Push",
      "Tailwind CSS",
    ],

    features: [
      "Member Portal & Approval Workflow",
      "Role-Based Administration",
      "Motorcycle Build Showcase",
      "Event Management & QR Check-In",
      "Geofenced Attendance Tracking",
      "Push Notifications",
      "Partner Management",
      "PWA & Offline Support",
    ],

    visual: "community",
  },
  {
    number: "03",
    image: flowforgeOverview,
    title: "FlowForge",
    kind: "Developer Platform",

    summary:
      "A low-code automation platform for building APIs, workflows, and business processes through a visual orchestration engine.",

    problem:
      "Building integrations and business automations repeatedly required significant engineering effort, making it difficult to rapidly deliver custom workflows and maintain operational consistency.",

    solution:
      "Created a visual workflow platform that enables developers and technical users to design APIs, orchestrate integrations, execute business logic, and monitor automation flows through a deterministic runtime engine.",

    stack: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "Workflow Engine",
      "REST APIs",
    ],

    features: [
      "Visual Workflow Builder",
      "API Builder & Endpoint Management",
      "Custom Integrations & Connectors",
      "Credential Management",
      "Execution Logs & Monitoring",
      "Triggers & Scheduled Jobs",
      "Expression & Data Mapping Engine",
      "Reusable Workflow Components",
    ],

    visual: "workflow",
  },
  {
    number: "04",
    image: taskManagerOverview,
    title: "Task Manager",
    kind: "Productivity Platform",

    summary:
      "A collaborative task and project management platform designed to help teams plan work, track progress, and stay aligned through visual workflows.",

    problem:
      "Small teams and personal projects often rely on scattered spreadsheets and messaging apps, making it difficult to prioritize work, monitor progress, and maintain accountability.",

    solution:
      "Built a Kanban-based project management application with real-time task organization, project collaboration, and workflow tracking to provide a single source of truth for teams.",

    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
    ],

    features: [
      "Kanban Boards",
      "Projects & Workspaces",
      "Task Management",
      "Drag-and-Drop Workflow",
      "Task Prioritization",
      "Comments & Activity History",
      "Role-Based Collaboration",
      "Responsive Dashboard",
    ],

    visual: "generator",
  },
];

const capabilities = [
  [
    "Business Systems",
    BriefcaseBusiness,
    "Operational software that removes friction and makes work visible.",
  ],
  [
    "CRM Platforms",
    Users,
    "Customer workflows, ownership, reporting, and integrations.",
  ],
  [
    "E-Commerce Solutions",
    ShoppingCart,
    "Reliable catalog, checkout, payment, and fulfillment systems.",
  ],
  [
    "REST APIs",
    Network,
    "Clear contracts and dependable services built to evolve.",
  ],
  [
    "AI Integrations",
    Bot,
    "Practical AI features connected to real product workflows.",
  ],
  [
    "Developer Tools",
    Wrench,
    "Tools that improve delivery speed, quality, and consistency.",
  ],
  [
    "Community Platforms",
    Globe2,
    "Accessible products that help communities organize and grow.",
  ],
  [
    "Internal Tools",
    Boxes,
    "Focused interfaces for complex business operations.",
  ],
] as const;

const skills = [
  [
    "Backend",
    ServerCog,
    "Reliable application logic and service design.",
    ["Laravel", "PHP", "REST APIs", "Eloquent"],
  ],
  [
    "Frontend",
    Code2,
    "Fast, accessible interfaces for real workflows.",
    ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  ],
  [
    "Databases",
    Database,
    "Data models built for integrity and useful queries.",
    ["PostgreSQL", "MySQL", "Drizzle ORM", "Optimization"],
  ],
  [
    "DevOps",
    CloudCog,
    "Repeatable delivery from local development to production.",
    ["Docker", "CI/CD", "Vercel", "Linux"],
  ],
  [
    "Architecture",
    GitBranch,
    "Simple boundaries for systems that need to last.",
    ["System Design", "Clean Architecture", "API Design", "Integrations"],
  ],
  [
    "Testing",
    TestTube2,
    "Confidence through focused, maintainable verification.",
    ["Unit Testing", "Integration Tests", "E2E", "Code Review"],
  ],
  [
    "AI & Automation",
    Sparkles,
    "AI-assisted systems and automated product workflows.",
    ["OpenAI", "Codex", "Prompt Design", "Workflow Automation"],
  ],
] as const;

const testimonials = [
  {
    quote:
      "Leward consistently delivers high-quality solutions and approaches problems with ownership and professionalism.",
    initials: "TL",
    name: "Technical Lead",
    subtitle: "Professional reference · Software delivery",
  },
  {
    quote:
      "He translates complex business requirements into maintainable systems and keeps the team aligned throughout delivery.",
    initials: "PM",
    name: "Product Manager",
    subtitle: "Professional reference · Product team",
  },
  {
    quote:
      "One of Leward's strengths is his ability to quickly understand business processes and turn them into practical software solutions.",
    initials: "BA",
    name: "Business Analyst",
    subtitle: "Professional reference · Business systems",
  },
  {
    quote:
      "Working with Leward was easy because he communicates clearly, takes initiative, and always follows through on commitments.",
    initials: "EM",
    name: "Engineering Manager",
    subtitle: "Professional reference · Engineering leadership",
  },
  {
    quote:
      "He has a strong sense of ownership and isn't afraid to step into unfamiliar areas to get things done.",
    initials: "SD",
    name: "Senior Developer",
    subtitle: "Professional reference · Software engineering",
  },
  {
    quote:
      "Leward consistently balances technical quality with business priorities, making him a dependable engineer to have on any project.",
    initials: "PO",
    name: "Product Owner",
    subtitle: "Professional reference · Product delivery",
  },
  {
    quote:
      "Whether it's backend APIs or frontend implementation, Leward adapts quickly and delivers solutions that are easy to maintain.",
    initials: "FE",
    name: "Frontend Engineer",
    subtitle: "Professional reference · Cross-functional team",
  },
  {
    quote:
      "I appreciated how proactive Leward was in identifying issues before they became problems and proposing practical solutions.",
    initials: "CT",
    name: "Client Stakeholder",
    subtitle: "Professional reference · Client partnership",
  },
  {
    quote:
      "Leward brings a calm and collaborative approach to development and is someone the team can rely on during critical deliveries.",
    initials: "QA",
    name: "QA Lead",
    subtitle: "Professional reference · Quality assurance",
  },
  {
    quote:
      "He combines technical expertise with a strong willingness to learn, which makes him valuable in fast-moving environments.",
    initials: "CTO",
    name: "Chief Technology Officer",
    subtitle: "Professional reference · Technology leadership",
  },
];

export { companies, experience, projects, capabilities, skills, testimonials };
