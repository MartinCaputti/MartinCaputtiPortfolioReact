// NavBar.jsx
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral según sea necesario
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li
          className={`${styles.li} ${
            activeSection === "hero" ? styles.active : ""
          }`}
        >
          <a href="#hero" className={styles.link}>
            Martin
          </a>
        </li>
        <li
          className={`${styles.li} ${
            activeSection === "projects" ? styles.active : ""
          }`}
        >
          <a href="#projects" className={styles.link}>
            Proyectos
          </a>
        </li>
        <li
          className={`${styles.li} ${
            activeSection === "skills" ? styles.active : ""
          }`}
        >
          <a href="#skills" className={styles.link}>
            Habilidades
          </a>
        </li>
        <li
          className={`${styles.li} ${
            activeSection === "contact" ? styles.active : ""
          }`}
        >
          <a href="#contact" className={styles.link}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
