"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const sections = ["about", "experience", "projects", "blogs", "contact"];

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
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <h1 className={styles.name}>Your Name</h1>
          <h2 className={styles.title}>Your Title</h2>
          <p className={styles.oneliner}>Your one-liner here</p>
          <nav className={styles.navbar}>
            <ul>
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={activeSection === section ? "active" : ""}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
