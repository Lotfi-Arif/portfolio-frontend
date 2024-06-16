"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const sections = ["about", "experience", "projects", "contact"];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const cursorLight = document.getElementById("cursor-light");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorLight) {
        cursorLight.style.left = `${e.clientX}px`;
        cursorLight.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
      rootMargin: "0px",
      threshold: 0.5,
    });

    const targets = document.querySelectorAll("section");
    targets.forEach((target) => observer.current?.observe(target));

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div id="cursor-light" className={styles.cursorLight}></div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <h1 className={styles.name}>Lotfi Anwar L Arif</h1>
          <h2 className={styles.title}>Backend Engineer</h2>
          <p className={styles.oneliner}>I build things for the web.</p>
          <nav className={styles.navbar}>
            <ul>
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={activeSection === section ? styles.active : ""}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
