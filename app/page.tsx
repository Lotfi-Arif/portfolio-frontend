"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./page.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Layout from "./components/Layout";
import { experiences, projects, contacts } from "./utils/data";

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="about" className={styles.section}>
        <h2>About</h2>
        <p>
          I’m a full‑stack engineer who enjoys pairing with product teams to
          build thoughtful web experiences. Most days you’ll find me shipping
          TypeScript, React, and NestJS, sprinkling in edge runtimes when it
          makes things zippier. I care about kind feedback loops, reliable
          deploys, and writing docs teammates can actually use.
        </p>
      </section>
      <section id="experience" className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <article key={index} className={styles.experienceItem}>
              <header className={styles.experienceHeader}>
                <div>
                  <h3>{exp.role}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {exp.company}
                  </a>
                </div>
                <span className={styles.duration}>{exp.duration}</span>
              </header>
              <ul className={styles.experienceBullets}>
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
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
