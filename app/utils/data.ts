import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const experiences = [
  {
    company: "Contentful",
    role: "Full‑stack Engineer",
    duration: "May 2025 – Present",
    highlights: [
      "Shipped customer‑facing features end‑to‑end across React frontends and NestJS/ts‑rest APIs.",
      "Deployed and optimized workloads on AWS Lambda and Cloudflare Workers to improve latency and resilience at the edge.",
      "Raised service reliability with structured logging, Prometheus metrics, Loki logs, and actionable Grafana dashboards.",
      "Hardened error handling and retry/backoff patterns to reduce MTTR and make failures safer by default.",
      "Improved developer experience with Jest test suites, ESLint rules, and clear PR reviews/documentation.",
    ],
    link: "https://contentful.com",
    tags: [
      "TypeScript",
      "React",
      "NestJS",
      "ts-rest",
      "AWS",
      "AWS Lambda",
      "Cloudflare Workers",
      "Grafana",
      "Prometheus",
      "Loki",
      "k6",
      "Temporal",
      "Kubernetes",
      "Docker",
      "Jest",
      "ESLint",
    ],
  },
  {
    company: "Ninetailed",
    role: "Backend Engineer (with full‑stack contributions)",
    duration: "Oct 2022 – May 2025",
    highlights: [
      "Refactored high‑traffic NestJS services to stabilize p95/p99 latency and improve predictability under load.",
      "Delivered 30+ TypeScript/ts‑rest endpoints with tests and dashboards, accelerating debugging and incident response.",
      "Shipped edge logic on Cloudflare Workers (incl. Analytics Engine) and event processing on AWS Lambda.",
      "Built Grafana dashboards with Prometheus/Loki and ran k6 load tests to catch regressions before release.",
      "Supported platform transition during Ninetailed’s acquisition by Contentful, ensuring smooth hand‑offs and deploys.",
    ],
    link: "https://ninetailed.io",
    tags: [
      "TypeScript",
      "NestJS",
      "ts-rest",
      "React",
      "MySQL",
      "Cloudflare Workers",
      "AWS Lambda",
      "Grafana",
      "Prometheus",
      "Loki",
      "k6",
      "Jest",
      "ESLint",
      "Docker",
    ],
  },
  {
    company: "Infinity Wave",
    role: "Full‑stack Engineer Intern",
    duration: "Oct 2022 – Feb 2023",
    highlights: [
      "Migrated a legacy asset management tool to React for better performance and clearer UX flows.",
      "Containerized local development with Docker to speed onboarding and unify frontend/backend workflows.",
      "Introduced Redux Toolkit for predictable state management as the app and team scaled.",
    ],
    link: "https://infinitywave.io",
    tags: ["React", "Redux", "Docker", "MySQL", "Node.js"],
  },
  {
    company: "Scandiweb",
    role: "Junior Web Developer",
    duration: "May 2021 – Aug 2022",
    highlights: [
      "Elevated code quality with structured reviews and automated tests (Jest, Cypress).",
      "Contributed to CI/CD and REST API development to keep releases frequent and low‑risk.",
      "Collaborated with design and QA to land features quickly and maintain quality.",
    ],
    link: "https://scandiweb.com",
    tags: ["Jest", "Cypress", "Git", "CI/CD", "REST API"],
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
    title: "Personal Portfolio",
    description: "My previous portfolio but I wanted to make it simpler",
    link: "https://github.com/Lotfi-Arif/personal-portfolio",
    githubStars: 0,
    imageSrc: "/example.png",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
  },
  {
    title: "Billiards System",
    description:
      "A project I built to test electron and IoT stuff with arduino",
    link: "https://github.com/Lotfi-Arif/billiards-system",
    githubStars: 0,
    imageSrc: "/billiards.png",
    technologies: ["Electron", "Python", "Arduino", "WebSocket", "React"],
  },
];
