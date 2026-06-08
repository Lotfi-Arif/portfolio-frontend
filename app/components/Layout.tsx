"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const sections = ["about", "experience", "projects", "contact"];

const socials = [
  { icon: faGithub, link: "https://github.com/Lotfi-Arif", label: "GitHub" },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/in/lotfiarif",
    label: "LinkedIn",
  },
  { icon: faEnvelope, link: "mailto:lotfi.arif@pm.me", label: "Email" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursorLight = document.getElementById("cursor-light");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorLight) {
        cursorLight.style.left = `${e.clientX}px`;
        cursorLight.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    });

    const targets = document.querySelectorAll("section");
    targets.forEach((target) => observer.current?.observe(target));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <div id="cursor-light" className={styles.cursorLight} />

      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <p className={styles.kicker}>Portfolio — Berlin · 2026</p>
          <h1 className={styles.name}>
            Lotfi Anwar
            <br />L Arif
          </h1>
          <p className={styles.title}>Full-Stack Engineer</p>
          <p className={styles.oneliner}>
            I build customer-facing web products and the platforms behind them.
            Partial to fast, dependable software.
          </p>

          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            Open to new roles
          </span>

          <nav className={styles.navbar} aria-label="Section navigation">
            <ul>
              {sections.map((section, index) => {
                const label =
                  section.charAt(0).toUpperCase() + section.slice(1);
                const linkClass = `${styles.navLink} ${
                  activeSection === section ? styles.active : ""
                }`;

                return (
                  <li key={section}>
                    <a href={`#${section}`} className={linkClass}>
                      <span className={styles.navIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={styles.navIndicator}
                        aria-hidden="true"
                      />
                      <span className={styles.navLabel}>{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={styles.social}
            >
              <FontAwesomeIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </aside>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
