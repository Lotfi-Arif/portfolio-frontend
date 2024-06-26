"use client";
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
import Image from "next/image";

const experiences = [
  {
    company: "Ninetailed",
    role: "Backend Engineer",
    duration: "Oct 2022 - Present",
    description:
      "Optimized and refactored backend services using NestJS, improving system performance and reducing processing times. Developed and implemented 30 new API endpoints using TypeScript and TsRest, expanding system functionality. Enhanced error handling mechanisms in services and controllers, implementing comprehensive logging and monitoring, improving system reliability",
    link: "https://ninetailed.io",
    tags: ["NestJS", "TypeScript", "TsRest", "Docker", "MySQL"],
  },
  {
    company: "Infinity Wave",
    role: "Fullstack Engineer Intern",
    duration: "Oct 2022 - Feb 2023",
    description:
      "Migrated the FOX asset management system from vanilla JavaScript to React, improving performance and enhancing user experience. Set up Docker environments for both frontend and backend development, streamlining the development process and improving deployment efficiency. Utilized React Redux and Redux Toolkit for state management, improving organization and maintainability.",
    link: "https://infinitywave.com",
    tags: ["React", "Redux", "Docker", "MySQL", "Node.js"],
  },
  {
    company: "Scandiweb",
    role: "Junior Web Developer",
    duration: "May 2021 - Aug 2022",
    description:
      "Conducted comprehensive code reviews for team members, ensuring adherence to best practices, maintaining high standards of code quality, and reducing code errors. Automated testing processes using Jest and Cypress, increasing test coverage and reducing manual testing. Mentored junior developers, providing guidance and support, resulting in an improvement in their coding skills and productivity.",
    link: "https://scandiweb.com",
    tags: ["Jest", "Cypress", "Git", "CI/CD", "REST API"],
  },
];

const contacts = [
  {
    icon: faEnvelope,
    link: "mailto:lotfiarif11@gmail.com",
    text: "lotfiarif11@gmail.com",
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
  {
    icon: faTwitter,
    link: "https://twitter.com/lotfiarif",
    text: "twitter.com/lotfiarif",
  },
  {
    icon: faInstagram,
    link: "https://instagram.com/lotfiarif1",
    text: "instagram.com/lotfiarif1",
  },
];

const projects = [
  {
    title: "Personal Portfolio (Current)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc ultricies lacinia. Donec nec nunc nec nunc ultricies lacinia. Donec nec nunc nec nunc ultricies lacinia.",
    link: "https://lotfiarif.com",
    githubStars: 100,
    imageSrc: "/example.png",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
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
          in enhancing system performance, improving reliability
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
                <div className={styles.roleDuration}>
                  <h3>{exp.company}</h3>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
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
        <div className={styles.cardsContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={1920}
                height={1080}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  {project.githubStars && <span>{project.githubStars}</span>}
                </a>
              </div>
            </div>
          ))}
        </div>
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
              <FontAwesomeIcon icon={contact.icon} className={styles.icon} />
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
