"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./page.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "./components/Layout";
import { experiences, projects, contacts } from "./utils/data";

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="about" className={styles.section}>
        <h2 data-index="01">About</h2>
        <p className={styles.lead}>
          I&apos;m a full-stack engineer with 5+ years building customer-facing
          web products and the platforms behind them. Most recently I built a
          content-personalization <strong>React and Next.js SDK</strong> from
          scratch and shipped it to production. I&apos;m comfortable across the
          stack, from React frontends to Node and NestJS APIs and the cloud
          infrastructure underneath, and I like owning features end to end:
          design, delivery, and the on-call afterwards.
        </p>
      </section>

      <section id="experience" className={styles.section}>
        <h2 data-index="02">Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <article key={index} className={styles.experienceItem}>
              <header className={styles.experienceHeader}>
                <h3>
                  {exp.role}
                  <span className={styles.at}> · </span>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {exp.company}
                  </a>
                </h3>
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
        <h2 data-index="03">Projects</h2>
        <div className={styles.cardsContainer}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.project}
            >
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
                <span className={styles.repoLink}>
                  <FontAwesomeIcon icon={faGithub} />
                  View source
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2 data-index="04">Contact</h2>
        <p className={styles.lead}>
          I&apos;m open to senior full-stack roles in Berlin and remote across
          Germany. If you&apos;re building something interesting, I&apos;d love
          to hear about it.
        </p>
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
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
