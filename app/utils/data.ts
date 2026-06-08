import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const experiences = [
  {
    company: "Contentful",
    role: "Software Engineer, Full-Stack",
    duration: "May 2025 – Present",
    highlights: [
      "Built a new React web SDK from initial scaffolding to release: provider and context components, hooks, the core personalization component, and live content updates during the render lifecycle.",
      "Added Next.js support for client-side and server-side (SSR and hybrid) rendering, and reworked automatic page-view tracking to fire on the correct route.",
      "Consolidated the SDK's public hooks into a single, simpler API and wrote the integration guide and example harness developers use to adopt it.",
      "Led the response to a production outage in the admin dashboard and improved logging, dashboards, and SLOs so alerts reflect real system health.",
      "Drove remediation of 15+ critical and high-severity dependency vulnerabilities across the SDK.",
    ],
    link: "https://contentful.com",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "AWS",
      "Cloudflare Workers",
      "Kubernetes",
      "Terraform",
      "Grafana",
    ],
  },
  {
    company: "Ninetailed (acquired by Contentful)",
    role: "Backend Engineer",
    duration: "Oct 2022 – May 2025",
    highlights: [
      "Shipped 30+ TypeScript API endpoints with tests and monitoring dashboards, speeding up debugging and incident response.",
      "Refactored NestJS services to reduce latency and improve reliability under load.",
      "Built edge logic on Cloudflare Workers and event processing on AWS Lambda.",
      "Hardened third-party data integrations, including a fix for a customer-facing crash caused by malformed upstream data.",
      "Progressed from Junior to Backend Engineer and supported the platform's transition through Contentful's acquisition.",
    ],
    link: "https://ninetailed.io",
    tags: [
      "TypeScript",
      "NestJS",
      "ts-rest",
      "MySQL",
      "Cloudflare Workers",
      "AWS Lambda",
      "Grafana",
      "Docker",
    ],
  },
  {
    company: "Scandiweb",
    role: "Junior Web Developer",
    duration: "May 2021 – Aug 2022",
    highlights: [
      "Raised automated test coverage by ~25% with Jest and Cypress and cut manual testing effort.",
      "Built a CI/CD pipeline that reduced deployment time by ~40%, and profiled performance for roughly a 20% speed gain.",
      "Built and maintained REST APIs and integrations for large e-commerce (Magento and Shopify) clients.",
    ],
    link: "https://scandiweb.com",
    tags: ["JavaScript", "React", "Jest", "Cypress", "CI/CD", "REST API"],
  },
];

export const contacts = [
  {
    icon: faEnvelope,
    link: "mailto:lotfi.arif@pm.me",
    text: "lotfi.arif@pm.me",
  },
  {
    icon: faGithub,
    link: "https://github.com/Lotfi-Arif",
    text: "github.com/Lotfi-Arif",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/in/lotfiarif",
    text: "linkedin.com/in/lotfiarif",
  },
];

export const projects = [
  {
    title: "Billiards System",
    description:
      "Real-time table-management system built to explore Electron and IoT, wiring up Arduino hardware over WebSocket to a React UI.",
    link: "https://github.com/Lotfi-Arif/billiards-system",
    imageSrc: "/billiards.png",
    technologies: ["Electron", "Python", "Arduino", "WebSocket", "React"],
  },
  {
    title: "Full-Stack Starter Template",
    description:
      "An opinionated monorepo for spinning up new projects fast, with sensible tooling and conventions baked in.",
    link: "https://github.com/Lotfi-Arif/personal-portfolio",
    imageSrc: "/page.png",
    technologies: ["NestJS", "Next.js", "Prisma", "NX", "Docker", "Jest"],
  },
  {
    title: "This Portfolio",
    description:
      "The site you're on. Next.js with hand-rolled SCSS and no UI kit, kept intentionally small and fast.",
    link: "https://github.com/Lotfi-Arif/personal-portfolio",
    imageSrc: "/example.png",
    technologies: ["Next.js", "TypeScript", "SCSS"],
  },
];
