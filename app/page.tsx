import React from "react";
import Layout from "./components/Layout";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const experiences = [
  {
    company: "Ninetailed",
    role: "Backend Engineer",
    duration: "Oct 2022 - Present",
    description:
      "Optimized and refactored backend services using NestJS, improving system performance by 30% and reducing processing times by 20%. Developed and implemented 30 new API endpoints using TypeScript and TsRest, expanding system functionality by 25%. Enhanced error handling mechanisms in services and controllers, implementing comprehensive logging and monitoring, improving system reliability by 15%.",
    link: "https://ninetailed.io",
    tags: ["NestJS", "TypeScript", "TsRest", "Docker", "MySQL"],
  },
  {
    company: "Infinity Wave",
    role: "Fullstack Engineer Intern",
    duration: "Oct 2022 - Feb 2023",
    description:
      "Migrated the FOX asset management system from vanilla JavaScript to React, improving performance by 30% and enhancing user experience. Set up Docker environments for both frontend and backend development, streamlining the development process and improving deployment efficiency by 30%. Utilized React Redux and Redux Toolkit for state management, improving organization and maintainability by 20%.",
    link: "https://infinitywave.com",
    tags: ["React", "Redux", "Docker", "MySQL", "Node.js"],
  },
  {
    company: "Scandiweb",
    role: "Junior Web Developer",
    duration: "May 2021 - Aug 2022",
    description:
      "Conducted comprehensive code reviews for team members, ensuring adherence to best practices, maintaining high standards of code quality, and reducing code errors by 20%. Automated testing processes using Jest and Cypress, increasing test coverage by 25% and reducing manual testing by 30%. Mentored junior developers, providing guidance and support, resulting in a 20% improvement in their coding skills and productivity.",
    link: "https://scandiweb.com",
    tags: ["Jest", "Cypress", "Git", "CI/CD", "REST API"],
  },
];

const contacts = [
  {
    icon: faEnvelope,
    link: "mailto:your.email@example.com",
    text: "your.email@example.com",
  },
  {
    icon: faGithub,
    link: "https://github.com/yourusername",
    text: "github.com/yourusername",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/in/yourusername",
    text: "linkedin.com/in/yourusername",
  },
  {
    icon: faTwitter,
    link: "https://twitter.com/yourusername",
    text: "twitter.com/yourusername",
  },
  {
    icon: faInstagram,
    link: "https://instagram.com/yourusername",
    text: "instagram.com/yourusername",
  },
];

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="about" className={styles.section}>
        <h2>About</h2>
        <p>
          Backend Engineer with 3+ years of experience in optimizing scalable
          systems using Node.js, NestJS, Docker, and MySQL. Demonstrated success
          in enhancing system performance by up to 30%, improving reliability
          and security. Expert in API development, data processing, and
          mentoring junior developers. Eager to drive backend development
          success in dynamic environments.
        </p>
      </section>
      <section id="experience" className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.cardsContainer}>
          {experiences.map((exp, index) => (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <span className={styles.duration}>{exp.duration}</span>
                <h3>{exp.company}</h3>
                <h4>{exp.role}</h4>
                <p>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <p>Your projects section content goes here.</p>
      </section>
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <div className={styles.contactsContainer}>
          {contacts.map((contact, index) => (
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={styles.contactCard}
            >
              <FontAwesomeIcon icon={contact.icon} size="sm" />
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
